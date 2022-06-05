<script setup></script>

<template>
	<div class="mainPanel">
		<div class="searchBar">
			<div class="searchBox">
				<div class="searchIcon"><i class="fa-light fa-magnifying-glass"></i></div>
				<input type="search" name="searchField" id="search" placeholder="What are you looking for?" />
			</div>
			<div class="genreList">
				<a class="genre" href="#">All</a>
				<a class="genre" href="#">Action</a>
				<a class="genre" href="#">Adventure</a>
				<a class="genre" href="#">Indie</a>
				<a class="genre" href="#">Multiplayer</a>
				<a class="genre" href="#">Racing</a>
				<a class="genre" href="#">RPG</a>
				<a class="genre" href="#">Simulation</a>
				<a class="genre" href="#">Strategy</a>
				<a class="genre" href="#">Sport</a>
				<a class="genre" href="#">VR</a>
			</div>
		</div>
		<div class="store">
			<!-- <h3>Highlight & News</h3> -->
			<h3>What's hot</h3>
			<div class="gamesGrid">
				<div class="games" style="--aspect-ratio: 3/2; background-image: url(https://mhsnews.org/wp-content/uploads/2021/01/hollowknight-900x506.jpg)">
					<div class="gamesDetails">
						<span class="gamesTitle">Hollow Knight</span>
						<span class="gamesGenre">Indie</span>
						<span class="gamesPrice">$ 9.99</span>
					</div>
				</div>
				<div class="games" style="--aspect-ratio: 3/2; background-image: url(https://media.rawg.io/media/crop/600/400/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg)">
					<div class="gamesDetails">
						<span class="gamesTitle">Apex Legends</span>
						<span class="gamesGenre">Shooter</span>
						<span class="gamesPrice">Free</span>
					</div>
				</div>
				<div class="games" style="--aspect-ratio: 3/2; background-image: url(https://media.rawg.io/media/crop/600/400/games/713/713269608dc8f2f40f5a670a14b2de94.jpg)">
					<div class="gamesDetails">
						<span class="gamesTitle">Stardew Valey</span>
						<span class="gamesGenre">Indie</span>
						<span class="gamesPrice">$ 7.99</span>
					</div>
				</div>
				<div class="games" style="--aspect-ratio: 3/2; background-image: url(https://media.rawg.io/media/crop/600/400/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg)" @click="$router.push('/games')">
					<div class="gamesDetails">
						<span class="gamesTitle">Transistor</span>
						<span class="gamesGenre">RPG</span>
						<span class="gamesPrice">$ 12.99</span>
					</div>
				</div>
				<div class="games" style="--aspect-ratio: 3/2; background-image: url(https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg)">
					<div class="gamesDetails">
						<span class="gamesTitle">Hollow Knight</span>
						<span class="gamesGenre">Indie</span>
						<span class="gamesPrice">$ 9.99</span>
					</div>
				</div>
				<div class="games" style="--aspect-ratio: 3/2; background-image: url(https://mhsnews.org/wp-content/uploads/2021/01/hollowknight-900x506.jpg)">
					<div class="gamesDetails">
						<span class="gamesTitle">Hollow Knight</span>
						<span class="gamesGenre">Indie</span>
						<span class="gamesPrice">$ 9.99</span>
					</div>
				</div>
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
	.genre:focus {
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
		background: rgba(33, 33, 33, 0.4);
		border-radius: 0px 0px 10px 10px;
		backdrop-filter: blur(10px);
		opacity: 1;
		transition: all 0.4s;
	}
	.games:hover .gamesDetails {
		opacity: 0;
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
