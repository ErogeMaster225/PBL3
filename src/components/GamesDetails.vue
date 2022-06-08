<script setup></script>

<template>
	<div class="gamesPanel">
		<div class="gamesBanner">
			<div class="backButton" @click="$router.push('/')"><i class="fa-regular fa-arrow-left"></i> Go back to store</div>
			<div class="gamesTitle">Moonlighter</div>
			<div class="gamesDescription">Moonlighter is an Action RPG with rogue-lite elements following the everyday routines of Will, an adventurous shopkeeper that dreams of becoming a hero.</div>
			<div class="buyButton">Buy for $19.99</div>
			<div class="wishlistButton"><i class="fa-regular fa-heart"></i> Add to wishlist</div>
		</div>
		<div class="detailsDescription">
			<div class="rating">RATING 4.8</div>
			<span>About the game</span>
			<div class="about">
				<div class="synopsis">
					During a long-passed archaeological excavation, a set of Gates were discovered. People quickly realized that these ancient passages lead to different realms and dimensions - providing brave and reckless adventurers with treasures beyond measure. Rynoka, a small commercial
					village, was founded near the excavation site providing refuge and a place for adventurers to sell their hard-earned riches. <br /><br />
					Moonlighter is an Action RPG with rogue-lite elements following the everyday routines of Will, an adventurous shopkeeper that dreams of becoming a hero.
				</div>
				<table class="meta">
					<tr>
						<td>Genre:</td>
						<td>Action, Adventure, Indie, RPG</td>
					</tr>
					<tr>
						<td>Developer:</td>
						<td>Digital Sun</td>
					</tr>
					<tr>
						<td>Publisher:</td>
						<td>11 bit studios</td>
					</tr>
					<tr>
						<td>Release date:</td>
						<td>May 29, 2018</td>
					</tr>
					<tr>
						<td>Website:</td>
						<td><a target="_blank" href="http://www.moonlighterthegame.com">www.moonlighterthegame.com</a></td>
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
		width: calc(100% - 50px);
		background-image: linear-gradient(-90deg, rgba(21, 25, 33, 0.3), hsla(222, 37%, 16%, 0.6)), url("https://images.igdb.com/igdb/image/upload/t_original/ar88z.jpg");
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
