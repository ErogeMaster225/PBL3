<script setup>
	import { onMounted, onUnmounted, reactive } from "vue";
	import { useGamesStore } from "@/stores/gamesStore";
	import GamesCard from "@/components/GamesCard.vue";
	const gamestore = useGamesStore();
	const genreList = ["All", "Action", "Adventure", "Indie", "Multiplayer", "Racing", "RPG", "Simulation", "Strategy", "Sport", "VR"];
	const changeActiveGenre = (event) => {
		if (document.getElementById("activeGenre")) document.getElementById("activeGenre").setAttribute("id", "");
		event.target.setAttribute("id", "activeGenre");
		getGamesRequest(event.target.textContent)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error(response.statusText);
			})
			.then((data) => {
				gamestore.gamesList = data;
			});
	};
	const getGamesRequest = (genre) => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Game/" + genre, {
			headers: {
				Accept: "text/plain",
			},
		});
		return response;
	};
	const gamesSearchRequest = (query) => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Game/search?gameName=" +query, {
			headers: {
				Accept: "text/plain",
			},
		});
		return response;
	};
	let typingTimer;
	const gamesSearch = () => {
		clearTimeout(typingTimer);
		if (document.getElementById("search_box").value) {
			typingTimer = setTimeout(doneTyping, 750);
		} else {
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
	};
	function doneTyping() {
		gamesSearchRequest(document.getElementById("search_box").value)
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
	onMounted(() => {
		document.querySelector(".genreList a:first-child").setAttribute("id", "activeGenre");
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
	});
</script>
<template>
	<div class="mainPanel">
		<div class="searchBar">
			<div class="searchBox">
				<div class="searchIcon"><i class="fa-light fa-magnifying-glass"></i></div>
				<input type="search" name="searchField" id="search_box" placeholder="What are you looking for?" @keyup="gamesSearch" />
			</div>
			<div class="genreList">
				<a class="genre" href="#" v-for="genre in genreList" :key="genre" @click="changeActiveGenre">{{ genre }}</a>
			</div>
		</div>
		<div class="store">
			<h3>Showing {{ gamestore.gamesList.length }} games</h3>
			<GamesCard></GamesCard>
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
	.genreList {
		display: flex;
		text-decoration: none;
		font-size: 11pt;
		align-items: center;
		margin-left: 20px;
	}
	.genre {
		color: #9198c4;
		padding: 10px 10px;
		font-family: Roboto;
	}
	.genre:hover {
		text-decoration: none;
		color: #d4d7e8;
	}
	#activeGenre {
		color: #fff;
		text-decoration: 3px underline #fe8383;
		text-underline-offset: 10px;
	}
	.store {
		margin: 30px 30px 30px 0px;
	}
	h3 {
		padding-bottom: 20px;
	}
</style>
