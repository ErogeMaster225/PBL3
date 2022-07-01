<script setup>
	import { onMounted, reactive } from "vue";
	import { useRouter, useRoute } from "vue-router";
	import { useGamesStore } from "@/stores/gamesStore";
	import { useUserStore } from "@/stores/userStore";
	const userstore = useUserStore();
	const gamesStore = useGamesStore();
	const router = useRouter();
	const route = useRoute();

	const createGamesRequest = (game, releaseDate, ageRating, gameRating, price, description, developer, publisher, website, spec, tag) => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Game/Create Game", {
			headers: {
				Accept: "*/*",
				Authorization: "Bearer " + userstore.token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name: game, releaseDate, ageRating, gameRating, price, description, developer, publisher, website, spec, tag }),
			method: "POST",
		});
		return response;
	};
	const createGames = () => {
		let gamename = document.getElementById("gamesTitle").innerText;
		let price = Number(document.getElementById("price").innerText);
		let date = new Date(document.getElementById("release_date").innerText);
		date = date.toISOString;
		let rating = document.getElementById("rating").innerText;
		let description = document.getElementById("synopsis").innerText;
		let developer = document.getElementById("developer").innerText;
		let publisher = document.getElementById("publisher").innerText;
		let website = document.getElementById("website").innerText;
		let tag = document.getElementById("genre").innerText.split(",");
		createGamesRequest(gamename, date, 0, rating, price, description, developer, publisher, website, "", tag).then((response) => {
			if (response.ok) {
				router.push("/admin/games");
			}
			throw new Error(response.statusText);
		});
	};
</script>

<template>
	<div class="gamesPanel">
		<div class="gamesBanner">
			<div class="backButton" @click="gamesUpdate"><i class="fa-regular fa-arrow-left"></i> Go back</div>
			<div id="gamesTitle" class="gamesTitle" contenteditable="true" spellcheck="false">Games title go here</div>
			<div class="gamesDescription">Press "Go back" to complete the the process</div>
			<div id="price" class="buyButton" contenteditable="true">Price go here</div>
			<div class="wishlistButton"><i class="fa-regular fa-heart"></i> Add to wishlist</div>
		</div>
		<div class="detailsDescription">
			<div id="rating" class="rating" contenteditable="true">Rating go here</div>
			<span>About the game</span>
			<div class="about">
				<div id="synopsis" class="synopsis" contenteditable="true" spellcheck="false">Enter the game's description here</div>
				<table class="meta">
					<tr>
						<td>Genre:</td>
						<td id="genre" contenteditable="true">List of genre delimit by ,</td>
					</tr>
					<tr>
						<td>Developer:</td>
						<td id="developer" contenteditable="true">Developer go here</td>
					</tr>
					<tr>
						<td>Publisher:</td>
						<td id="publisher" contenteditable="true">Publisher go here</td>
					</tr>
					<tr>
						<td>Release date:</td>
						<td id="release_date" contenteditable="true">Date in yyyy-mm-dd format</td>
					</tr>
					<tr>
						<td>Website:</td>
						<td>
							<a id="website" target="_blank" :href="gamesStore.gamesDetails.website" contenteditable="true">Website go here</a>
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
		background-image: linear-gradient(-90deg, rgba(21, 25, 33, 0.4), hsla(222, 37%, 16%, 0.7)), url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/9bc27292880429.5e569ff84e4d0.gif);
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
		text-align: left;
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
		display: inline-block;
		padding: 15px 30px;
		border-radius: 5px;
		font-family: "Roboto";
	}
	.gamesBanner .wishlistButton {
		position: absolute;
		bottom: 55px;
		left: 225px;
		font-weight: 600;
		display: inline-block;
		padding: 15px 30px;
		color: #c7cbec;
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
</style>
