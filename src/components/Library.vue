<script setup>
	import { onMounted, reactive } from "vue";
	const genreList = ["Grid", "List", "Details"];
	const gamesdb = reactive([
		{
			background: "https://mhsnews.org/wp-content/uploads/2021/01/hollowknight-900x506.jpg",
			title: "Hollow Knight",
			genre: "Indie",
			price: "$ 9.99",
		},
		{
			background: "https://media.rawg.io/media/crop/600/400/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg",
			title: "Transistor",
			genre: "RPG",
			price: "$ 12.99",
		},
		{
			background: "https://images.igdb.com/igdb/image/upload/t_original/ar88z.jpg",
			title: "Moonlighter",
			genre: "Indie",
			price: "$ 6.99",
		},
	]);
	function changeActiveGenre(e) {
		document.getElementById('activeGenre').setAttribute('id', '');
		e.target.setAttribute('id', 'activeGenre');
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
				<a class="genre" href="#" v-for="genre in genreList" :key="genre" @click="changeActiveGenre()">{{ genre }}</a>
			</div>
		</div>
		<div class="store">
			<div class="libgamesGrid">
				<template v-for="game in gamesdb" :game="game" :key="game.title">
					<div class="libgames" :style="{ '--aspect-ratio': 3 / 2, 'background-image': 'url(' + game.background + ')' }" @click="$router.push('/games')">
						<div class="libgamesDetails">
							<span class="libgamesTitle">{{ game.title }}</span>
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
	.store {
		margin: 30px 30px 30px 0px;
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
