<script setup>
	import { useGamesStore } from "@/stores/gamesStore";
	import { useUserStore } from "@/stores/userStore";
	import { useRouter, useRoute } from "vue-router";
	const router = useRouter();
	const userstore = useUserStore();
	const gamestore = useGamesStore();
	const getGamesRequest = (genre) => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Game/" + genre, {
			headers: {
				Accept: "text/plain",
			},
		});
		return response;
	};
	const deleteGamesRequest = (gameid) => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Game/" + gameid, {
			headers: {
				Accept: "*/*",
				Authorization: "Bearer " + userstore.token,
			},
			method: "DELETE",
		});
		return response;
	};
	const deleteGames = (gameid) => {
		deleteGamesRequest(gameid).then((response) => {
			if (response.ok) {
				getGamesRequest("All")
					.then((response) => {
						if (response.ok) {
							return response.json();
						}
						throw new Error(response.statusText);
					})
					.then((data) => {
						gamestore.gamesList = data;
					});
			}
			throw new Error(response.statusText);
		});
	};
</script>
<template>
	<TransitionGroup class="gamesGrid" tag="div" name="card-slide" :style="{ '--total': gamestore.gamesList.length }">
		<div v-for="(game, index) in gamestore.gamesList" :key="index" class="games" :style="{ '--aspect-ratio': 3 / 2, 'background-image': 'url(' + game.gameImageUrl + ')', '--index': index }">
			<div class="optionsBtn"><i class="fa-solid fa-3x fa-square-pen" @click="router.push('games/' + game.gameId + '/edit')"></i><i class="fa-solid fa-3x fa-square-xmark" @click="deleteGames(game.gameId)"></i></div>
			<div class="gamesDetails">
				<span class="gamesTitle">{{ game.gameName }}</span>
				<span class="gamesGenre">{{ game.gameTag }}</span>
				<span class="gamesPrice">{{ game.gamePrice ? "$ " + game.gamePrice.toFixed(2) : "Free" }}</span>
			</div>
		</div>
	</TransitionGroup>
</template>
<style>
	.gamesGrid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 10px;
		grid-row-gap: 20px;
		margin-top: 30px;
	}
	.gamesGrid > [style^="--aspect-ratio"]::before {
		content: "";
		display: inline-block;
		width: 1px;
		height: 0;
		padding-bottom: calc(100% / (var(--aspect-ratio)) - 6px);
	}
	.games {
		position: relative;
		border-radius: 10px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		cursor: pointer;
	}
	.gamesDetails {
		font-size: 11pt;
		position: absolute;
		bottom: 0;
		height: 36%;
		width: 100%;
		background: rgba(33, 33, 33, 0.35);
		border-radius: 0px 0px 10px 10px;
		backdrop-filter: blur(10px);
		opacity: 1;
		transition: all 0.4s;
	}
	.games:hover .gamesDetails {
		opacity: 0;
	}
	.gamesDetails span {
		text-shadow: 3px 3px 5px rgba(22, 22, 22, 0.55);
	}
	.gamesDetails .gamesTitle {
		position: absolute;
		top: 0.5em;
		left: 0.75em;
	}
	.gamesDetails .gamesGenre {
		position: absolute;
		bottom: 0.5em;
		left: 0.75em;
	}
	.gamesDetails .gamesPrice {
		position: absolute;
		bottom: 0.5em;
		right: 0.75em;
	}
	.optionsBtn i {
		margin: 0px 10px;
	}
	.card-slide-move {
		transition: opacity 0.5s linear, transform 0.5s ease-in-out;
	}
	.card-slide-leave-active {
		transition: opacity 0.4s linear, transform 0.4s cubic-bezier(0.5, 0, 0.7, 0.4);
		transition-delay: calc(0.1s * (var(--total) - var(--i)));
	}
	.card-slide-enter-active {
		transition: opacity 0.5s linear, transform 0.5s cubic-bezier(0.2, 0.5, 0.1, 1);
		transition-delay: calc(0.1s * var(--index));
	}
	.card-slide-enter-from,
	.card-slide-leave-to {
		opacity: 0;
	}
	.card-slide-enter-from {
		transform: translateX(-1em);
	}
	.card-slide-leave-to {
		transform: translateX(1em);
	}
</style>
