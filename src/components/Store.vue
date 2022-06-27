<script setup>
	import { onMounted, reactive } from "vue";
	//import gamesdb from "@/assets/db.json";
	const genreList = ["All", "Action", "Adventure", "Indie", "Multiplayer", "Racing", "RPG", "Simulation", "Strategy", "Sport", "VR"];
	const gamesdb = reactive([
		{
			background: "https://mhsnews.org/wp-content/uploads/2021/01/hollowknight-900x506.jpg",
			title: "Hollow Knight",
			genre: "Indie",
			price: "$ 9.99",
		},
		{
			background: "https://media.rawg.io/media/crop/600/400/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg",
			title: "Apex Legends",
			genre: "Shooter",
			price: "Free",
		},
		{
			background: "https://media.rawg.io/media/crop/600/400/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg",
			title: "Transistor",
			genre: "RPG",
			price: "$ 12.99",
		},
		{
			background: "https://media.rawg.io/media/crop/600/400/games/713/713269608dc8f2f40f5a670a14b2de94.jpg",
			title: "Stardew Valley",
			genre: "Indie",
			price: "$ 7.99",
		},
		{
			background: "https://images.igdb.com/igdb/image/upload/t_original/ar88z.jpg",
			title: "Moonlighter",
			genre: "Indie",
			price: "$ 6.99",
		},
	]);
	const changeActiveGenre = event => {
		document.getElementById('activeGenre').setAttribute('id', '');
		event.target.setAttribute('id', 'activeGenre');
	}
	onMounted(() => {
		document.querySelector('.genreList a:first-child').setAttribute('id', 'activeGenre');
	});
</script>

<template>
	<div class="mainPanel">
		<div class="searchBar">
			<div class="searchBox">
				<div class="searchIcon"><i class="fa-light fa-magnifying-glass"></i></div>
				<input type="search" name="searchField" id="search" placeholder="What are you looking for?" />
			</div>
			<div class="genreList">
				<a class="genre" href="#" v-for="genre in genreList" :key="genre" @click="changeActiveGenre">{{ genre }}</a>
			</div>
		</div>
		<div class="store">
			<!-- <h3>Highlight & News</h3> -->
			<h3>What's hot</h3>
			<div class="gamesGrid">
				<template v-for="game in gamesdb" :game="game" :key="game.title">
					<div class="games" :style="{ '--aspect-ratio': 3 / 2, 'background-image': 'url(' + game.background + ')' }" @click="$router.push('/games')">
						<div class="gamesDetails">
							<span class="gamesTitle">{{ game.title }}</span>
							<span class="gamesGenre">{{ game.genre }}</span>
							<span class="gamesPrice">{{ game.price }}</span>
						</div>
					</div>
				</template>
			</div>
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
	.gamesGrid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-column-gap: 10px;
		grid-row-gap: 20px;
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
</style>
