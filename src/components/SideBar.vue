<script setup></script>

<template>
	<div class="navBar">
		<div class="logo">
			<img src="/src/assets/logo.png" alt="" />
			<div class="logoTextWrap">
				<span>Vaporwave</span><br />
				<span>Games Store</span>
			</div>
		</div>
		<div class="userDetails" @click="$router.push('/profile')">
			<img src="/src/assets/images/Avatar.jpg" alt="" />
			<div class="details">
				<div>SakuraFrost225</div>
				<div>Level 31</div>
			</div>
		</div>
		<div class="navBtnWrapper">
			<div class="navBarBtn" @click="$router.push('/404')">
				<i class="fa-regular fa-grid-2 fa-xl"></i>
				<span>Dashboard</span>
			</div>
			<div class="navBarBtn" @click="$router.push('/')">
				<i class="fa-regular fa-store fa-xl"></i>
				<span>Store</span>
			</div>
			<div class="navBarBtn" @click="$router.push('/404')">
				<i class="fa-regular fa-trophy fa-xl"></i>
				<span>Library</span>
			</div>
			<div class="navBarBtn" @click="$router.push('/404')">
				<i class="fa-regular fa-gear fa-xl"></i>
				<span>Settings</span>
			</div>
			<div class="navBarBtn" id="logOut" @click="$router.push('/auth/login')">
				<i class="fa-regular fa-power-off fa-xl"></i>
				<span>Log out</span>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.navBar {
		position: fixed;
		top: 0px;
		left: 0px;
		height: 100vh;
		width: 20vw;
		font-family: "Roboto";
		color: #9198c4;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-top: 40px;
	}
	img {
		height: 50px;
		width: 50px;
		line-height: 50px;
		float: left;
		margin: 0 auto;
	}
	.logo span {
		padding-left: 20px;
		line-height: 25px;
		text-overflow: clip;
		margin: 0 auto;
	}
	.logoTextWrap {
		display: inline-block;
	}
	.navBtnWrapper {
		padding-left: 0;
		padding-top: 20px;
	}
	.navBarBtn {
		cursor: pointer;
		padding: 5px 10px;
		border-radius: 10px;
	}
	.navBarBtn span:hover {
		color: #fff;
	}
	.navBarBtn i {
		height: 50px;
		width: 50px;
		line-height: 50px;
	}
	#logOut {
		position: absolute;
		bottom: 0;
	}
	.userDetails {
		color: #fff;
		display: flex;
		background-color: #9a84ff;
		margin-top: 20px;
		padding: 10px 30px 10px 10px;
		border-radius: 7px;
		cursor: pointer;
	}
	.userDetails img {
		object-fit: cover;
		border-radius: 7px;
	}
	.userDetails .details {
		padding-left: 15px;
	}
</style>
