<script setup>
	import { onMounted, reactive } from "vue";
	import { useGamesStore } from "@/stores/gamesStore";
	import AdminGamesCard from "@/components/Admin/AdminGamesCard.vue";
	const gamestore = useGamesStore();
	const getGamesRequest = (genre) => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Game/" + genre, {
			headers: {
				Accept: "text/plain",
			},
		});
		return response;
	};
	onMounted(() => {
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
	<!-- <div class="modal">
		<div class="modalBox">
			<h3>Add funds</h3>
			<div class="inputField">
				<div>Choose an amount:</div>
				<button>$100</button>
				<button>$300</button>
				<button>$500</button>
				<button>$1000</button>
				<input type="text" name="title" id="titleBox" placeholder="$____"/>
			</div>
			<div class="cardCode">
				<div class="inputField">
					<div>Card number:</div>
					<input type="text" name="title" class="cardNum" />
				</div>
				<div class="inputField">
					<div>CCV:</div>
					<input type="text" name="title" class="cardSec"/>
				</div>
			</div>
			<div class="inputField">
				<div>Holder name:</div>
				<input type="text" name="title" class="cardName"/>
			</div>
			<div class="inputField">
				<div>Expiration date:</div>
				<div class="cardCode">
					<input type="text" name="title" class="cardDate1"/>
					<input type="text" name="title" class="cardDate2"/>
					<input type="text" name="title" class="cardDate3"/>
				</div>
			</div>
			<div class="loginBtn">
				<button type="submit" class="saveBtn1">
					<span>Confirm</span>
				</button>
			</div>
		</div>
	</div> -->
	<div class="mainPanel">
		<div class="searchBar">
			<div class="searchBox">
				<div class="searchIcon"><i class="fa-light fa-magnifying-glass"></i></div>
				<input type="search" name="searchField" id="search" placeholder="What are you looking for?" />
			</div>
		</div>
		<div class="store">
			<div class="headerWrapper">
				<h3>Catalog Manager</h3>
				<div class="addGames" @click="$router.push('/admin/games/create')"><i class="fa-solid fa-plus"></i> Add Games</div>
			</div>
			<AdminGamesCard></AdminGamesCard>
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
	h3 {
		margin-bottom: 0;
	}
	.headerWrapper {
		display: flex;
		position: relative;
		align-items: center;
	}
	.addGames {
		position: absolute;
		right: 0px;
		background-color: hsl(251, 100%, 76%);
		padding: 10px 20px;
		border-radius: 10px;
		cursor: pointer;
	}
	.games .optionsBtn {
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(38, 44, 64, 0.35);
		height: 100%;
		width: 100%;
		border-radius: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: all 0.4s ease-in;
	}
	.optionsBtn:hover {
		opacity: 1;
	}
	/* .modal {
		display: block;
		position: fixed;
		z-index: 2;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgb(0, 0, 0);
		background-color: rgba(0, 0, 0, 0.4);
		background-color: rgba(33, 33, 33, 0.4);
	}
	.modalBox {
		padding: 20px 40px;
		position: relative;
		display: flex;
		flex-direction: column;
		margin: 12.5vh auto;
		width: 40vw;
		height: 75vh;
		background-color: #212329;
		border-radius: 15px;
		color: #eeeeee;
		overflow: auto;
	}
	.inputField {
		margin: 15px 0px;
	}
	.inputField button {
		margin-top: 5px;
		border: none;
		background: transparent;
		height: 2em;
		font-size: large;
		margin: 0 20px;
		width: 70px;
	}
	.inputField input {
		border-bottom: #bbb solid 1px;
		border-top: #111 solid 0px;
		border-left: #111 solid 0px;
		border-right: #111 solid 0px;
		height: 2em;
		width: 70px;
	}
	.inputField .cardNum {
		width: 400px;
		margin-right: 20px;
	}
	.inputField .cardName {
		width: 490px;
		margin-right: 20px;
	}
	.cardCode {
		display: flex;
	}
	.cardDate1 {
		width: 50px;
		margin-right: 20px;
	}
	.cardDate2 {
		width: 300px;
		margin-right: 20px;
	}
	.cardDate3 {
		width: 100px;
		margin-right: 20px;
	}
	.loginBtn {
		padding-top: 15px;
		margin-bottom: 15px;
	}
	.loginBtn button {
		height: 50px;
		padding: 15px 250px;
		border-radius: 20px;
		border: 0;
		cursor: pointer;
	}
	.loginBtn .saveBtn1 {
		background: linear-gradient(112deg, rgb(29, 150, 130), rgb(5, 194, 107));
	}
	.loginBtn .deleteBtn1 {
		background: linear-gradient(112deg, rgb(254, 129, 129), #EA4C88);
	} */
</style>
