<script setup>
	import { onMounted, reactive } from "vue";
	import { useGamesStore } from "../stores/gamesStore";
	import { useUserStore } from "../stores/userStore";
	const viewMode = ["Grid", "List", "Details"];
	const gamesStore = useGamesStore();
	const userstore = useUserStore();
	const getLibraryRequest = () => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Library/getLibrary?userName=" + userstore.username, {
			headers: {
				Accept: "text/plain",
				Authorization: "Bearer " + userstore.token,
			},
		});
		return response;
	};
	const getLibrary = () => {
		getLibraryRequest()
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error(response.statusText);
			})
			.then((data) => {
				gamesStore.library = data.filter((v, i, a) => a.findIndex((v2) => v2.gameId === v.gameId) === i);
			});
	};
	function changeViewMode(e) {
		document.getElementById("activeMode").removeAttribute("id");
		e.target.setAttribute("id", "activeMode");
	}
	onMounted(() => {
		document.querySelector(".viewMode a:first-child").setAttribute("id", "activeMode");
		getLibrary();
	});
</script>

<template>
	<div class="mainPanel">
		<div class="searchBar">
			<div class="searchBox">
				<div class="searchIcon"><i class="fa-light fa-magnifying-glass"></i></div>
				<input type="search" name="searchField" id="search" placeholder="What are you looking for?" />
			</div>
			<div class="viewMode">
				<a class="mode" href="#" v-for="mode in viewMode" :key="mode" @click="changeViewMode()">{{ genre }}</a>
			</div>
		</div>
		<div class="store">
			<TransitionGroup class="gamesGrid" tag="div" name="card-slide" :style="{ '--total': gamesStore.library.length }">
				<template v-for="game in gamesStore.library" :game="game" :key="game.gameName">
					<div class="libgames" :style="{ '--aspect-ratio': 3 / 2, 'background-image': 'url(' + game.gameImageUrl + ')' }" @click="$router.push('/games/' + game.gameId)">
						<div class="libgamesDetails">
							<span class="libgamesTitle">{{ game.gameName }}</span>
						</div>
					</div>
				</template>
			</TransitionGroup>
		</div>
	</div>
</template>

<style>
	.mainPanel {
		position: fixed;
		top: 0px;
		right: 0px;
		height: 100vh;
		width: 80vw;
		overflow-x: hidden;
		color: #fff;
		padding-top: 40px;
		padding-left: 20px;
		padding-bottom: 40px;
	}
	.mainPanel .searchBar {
		width: 100%;
		height: 3em;
		display: flex;
	}
	.mainPanel .searchBar .searchBox {
		align-items: center;
		display: flex;
		background-color: #0c0f17;
		padding: 0.5em;
		border-radius: 10px;
	}
	.searchIcon {
		position: relative;
		width: 2em;
		height: 0;
		padding-bottom: 2em;
		background-color: #262c40;
		border-radius: 5px;
	}
	.searchIcon i {
		margin: 50% 0 0 50%;
		transform: translate(-50%, -50%);
	}
	.mainPanel .searchBar .searchBox input {
		height: 20px;
		border: none;
		outline: none;
	}
	.store {
		margin: 30px 30px 30px 0px;
	}
	.viewMode {
		display: flex;
		text-decoration: none;
		font-size: 11pt;
		align-items: center;
		margin-left: 20px;
	}
	.mode {
		color: #9198c4;
		padding: 10px 10px;
		font-family: Roboto;
	}
	.mode:hover {
		text-decoration: none;
		color: #d4d7e8;
	}
	#activeMode {
		color: #fff;
		text-decoration: 3px underline #fe8383;
		text-underline-offset: 10px;
	}
	.libgamesGrid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 10px;
		grid-row-gap: 20px;
	}
	.libgamesGrid > [style^="--aspect-ratio"]::before {
		content: "";
		display: inline-block;
		width: 1px;
		height: 0;
		padding-bottom: calc(100% / (var(--aspect-ratio)) - 6px);
	}
	.libgames {
		position: relative;
		border-radius: 10px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		cursor: pointer;
	}
	.libgamesDetails {
		font-size: 11pt;
		font-family: Roboto;
		position: absolute;
		bottom: 0;
		height: 20%;
		width: 100%;
		background: rgba(22, 22, 22, 0.5);
		border-radius: 0px 0px 10px 10px;
		backdrop-filter: blur(10px);
		opacity: 1;
		transition: all 0.4s;
		display: flex;
		align-items: center;
	}
	.libgames:hover .libgamesDetails {
		opacity: 0;
	}
	.libgamesDetails span {
		text-shadow: 3px 3px 5px rgba(22, 22, 22, 0.55);
	}
	.libgamesDetails .libgamesTitle {
		margin-left: 15px;
	}
</style>
