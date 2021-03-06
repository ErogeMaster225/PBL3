<script setup>
	import { onMounted, reactive, onBeforeMount } from "vue";
	import { useRouter, useRoute } from "vue-router";
	import { useGamesStore } from "../stores/gamesStore";
	import { useUserStore } from "../stores/userStore";
	const gamesStore = useGamesStore();
	const userstore = useUserStore();
	const router = useRouter();
	const route = useRoute();
	const gamesDetailsRequest = (gamesid) => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Game/gameId?gameId=" + gamesid, {
			headers: {
				Accept: "text/plain",
			},
		});
		return response;
	};
	const getGamesDetails = () => {
		gamesDetailsRequest(route.params.id)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error(response.statusText);
			})
			.then((data) => {
				gamesStore.gamesDetails = data;
				console.log(data);
			});
	};
	const buyGamesRequest = () => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Receipt/" + userstore.username + "/" + gamesStore.gamesDetails.name, {
			headers: {
				Accept: "*/*",
				Authorization: "Bearer " + userstore.token,
			},
			method: "POST",
		});
	};
	const buyGames = () => {
		buyGamesRequest().then((response) => {
			if (response.ok) {
				gamesStore.gamesDetails.isPayed = true;
				return response.json();
			}
			throw new Error(response.statusText);
		});
	};
	const getLibraryRequest = () => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Library/getLibrary?userName=" + userstore.username, {
			headers: {
				Accept: "text/plain",
				Authorization: "Bearer " + userstore.token,
			},
		});
		return response;
	};
	const getLibrary1 = () => {
		getLibraryRequest()
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error(response.statusText);
			})
			.then((data) => {
				gamesStore.library = data.filter((v, i, a) => a.findIndex((v2) => v2.gameId === v.gameId) === i);
				gamesStore.library.forEach(gamelib => {
					if (gamelib.gameId == route.params.id) gamesStore.gamesDetails.isPayed = true;
				})
			});
	};
	onBeforeMount(() => {
		gamesStore.gamesDetails.isPayed = false;
	})
	onMounted(() => {
		getGamesDetails();
		getLibrary1();
	});
</script>

<template>
	<div class="gamesPanel">
		<div class="gamesBanner" :style="{ '--banner': 'url(' + gamesStore.gamesDetails.path[0] + ')' }">
			<div class="backButton" @click="router.push('/')"><i class="fa-regular fa-arrow-left"></i> Go back to store</div>
			<div class="gamesTitle">{{ gamesStore.gamesDetails.name }}</div>
			<div class="gamesDescription">{{ gamesStore.gamesDetails.description }}</div>
			<div id="price" class="buyButton" @click="gamesStore.gamesDetails.isPayed ? null : buyGames()" :class="{ owned: gamesStore.gamesDetails.isPayed }">{{ gamesStore.gamesDetails.isPayed ? "Owned" : gamesStore.gamesDetails.price ? "Buy for $" + gamesStore.gamesDetails.price : "Get it for FREE" }}</div>
			<div class="wishlistButton"><i class="fa-regular fa-heart"></i> Add to wishlist</div>
		</div>
		<div class="detailsDescription">
			<div class="rating">RATING {{ gamesStore.gamesDetails.gameRating }}</div>
			<span>About the game</span>
			<div class="about">
				<div class="synopsis">{{ gamesStore.gamesDetails.description }}</div>
				<table class="meta">
					<tr>
						<td>Genre:</td>
						<td>{{ gamesStore.gamesDetails.tag.join(", ") }}</td>
					</tr>
					<tr>
						<td>Developer:</td>
						<td>{{ gamesStore.gamesDetails.developer }}</td>
					</tr>
					<tr>
						<td>Publisher:</td>
						<td>{{ gamesStore.gamesDetails.publisher }}</td>
					</tr>
					<tr>
						<td>Release date:</td>
						<td>{{ gamesStore.gamesDetails.releaseDate.substring(0, 10) }}</td>
					</tr>
					<tr>
						<td>Website:</td>
						<td>
							<a target="_blank" :href="gamesStore.gamesDetails.website">{{ gamesStore.gamesDetails.website }}</a>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<style>
	.gamesPanel {
		position: fixed;
		top: 0px;
		right: 0px;
		height: 100vh;
		width: 80vw;
		overflow-x: hidden;
		color: #fff;
		padding-left: 20px;
		padding-bottom: 40px;
	}
	.gamesBanner {
		position: relative;
		height: 600px;
		width: 100%;
		background-image: linear-gradient(-90deg, rgba(21, 25, 33, 0.3), hsla(222, 37%, 16%, 0.6)), var(--banner);
		background-repeat: no-repeat;
		background-size: cover;
	}
	.gamesBanner .backButton {
		position: absolute;
		top: 55px;
		left: 50px;
		color: #c7cbec;
		font-weight: 600;
		cursor: pointer;
	}
	.gamesBanner .backButton i {
		color: #9a84ff;
		padding-right: 5px;
	}
	.gamesBanner .gamesTitle {
		position: absolute;
		top: 50%;
		left: 50px;
		font-size: xx-large;
		font-weight: 500;
		font-family: "Roboto";
	}
	.gamesBanner .gamesDescription {
		position: absolute;
		top: 60%;
		left: 50px;
		font-size: 10pt;
		font-weight: 400;
		width: 35%;
		text-align: justify;
		color: #c7cbec;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		display: -webkit-box;
	}
	.gamesBanner .buyButton {
		position: absolute;
		bottom: 55px;
		left: 50px;
		background-color: #fe8383;
		font-weight: 500;
		display: flex;
		padding: 15px 30px;
		border-radius: 5px;
		font-family: "Roboto";
		width: 170px;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.gamesBanner .wishlistButton {
		position: absolute;
		bottom: 55px;
		left: 225px;
		font-weight: 600;
		display: inline-block;
		padding: 15px 30px;
		color: #c7cbec;
		cursor: pointer;
	}
	.gamesBanner .wishlistButton i {
		color: #f2888b;
	}
	.detailsDescription {
		margin-top: 60px;
	}
	.detailsDescription .rating {
		font-weight: 500;
		font-family: "Roboto";
		color: #fad890;
	}
	.detailsDescription span {
		font-size: x-large;
		font-weight: 500;
		font-family: "Roboto";
	}
	.detailsDescription .about {
		display: flex;
	}
	.detailsDescription .about .synopsis {
		margin-top: 30px;
		font-size: 10pt;
		font-weight: 400;
		width: 30%;
		color: #c7cbec;
		text-align: left;
		white-space: pre-line;
	}
	.detailsDescription .about .meta {
		display: block;
		margin-top: 30px;
		margin-left: 150px;
		font-size: 10pt;
		font-weight: 400;
		width: 50%;
		color: #c7cbec;
		text-align: left;
	}
	.detailsDescription .about .meta tr {
		height: 20pt;
		vertical-align: top;
	}
	.detailsDescription .about .meta tr td:first-child {
		width: 200px;
	}
	.detailsDescription .about .meta tr td:last-child,
	td a,
	a:hover {
		color: rgb(220, 228, 236);
	}
	.gamesPanel .gamesBanner .owned {
		background-color: #f45757;
	}
</style>
