<script setup>
	import { onMounted, onUnmounted, onUpdated } from "vue";
	onMounted(() => {
		document.body.style.backgroundImage = "url(/src/assets/images/sisu_bg-min.png)";
		document.body.style.backdropFilter = "blur(2px)";
	});
	onUnmounted(() => {
		document.querySelector("body").setAttribute("style", "");
	});
</script>

<template>
	<main>
		<div class="logonPanel">
			<div class="leftPane">
				<div class="credits">
					<div class="title">Transistor <span>by</span></div>
					<div class="creator">Supergiant Games</div>
				</div>
			</div>
			<div class="rightPane">
				<div class="loginTitle">Log In</div>
				<form>
					<div class="loginField">
						<label for="username_field">Username</label><br />
						<div class="inputbox"><input type="text" name="username" id="username_field" required placeholder="Username" /></div>
					</div>
					<div class="loginField">
						<label for="password_field">Password</label><br />
						<div class="inputbox"><input type="text" name="password" id="password_field" required placeholder="Password" /></div>
					</div>
					<div class="remember">
						<label for="remember-label">
							<input type="checkbox" name="remember" id="remember-label" />
							<span class="checkmark"></span>
							Keep me logged in
						</label>
					</div>
					<div class="loginBtn">
						<button type="submit">
							<span>Log In</span>
						</button>
					</div>
					<div class="signup">Don't have an account? <span class="signup-link">Sign up</span></div>
				</form>
			</div>
		</div>
	</main>
</template>
<style>
	body {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-size: cover;
		font-family: "Nunito Sans", sans-serif;
	}
	.logonPanel {
		position: relative;
		height: 85vh;
		width: 60vw;
		overflow: hidden;
	}
	.leftPane {
		position: relative;
		background: linear-gradient(rgba(11, 10, 26, 0.4), rgba(11, 10, 26, 0.4)), url("@/assets/images/transistor-loginBG.jpg");
		background-repeat: no-repeat;
		background-position-y: -20px;
		background-size: cover;
		height: 100%;
		width: 50%;
		float: left;
		color: #fff;
		box-shadow: inset 0 0 45px 15px #000;
	}
	.leftPane .credits {
		position: absolute;
		bottom: 7%;
		left: 15%;
		font-size: 14px;
		font-weight: 600;
	}
	.leftPane .credits .title span {
		font-weight: 300;
	}
	.rightPane {
		position: relative;
		display: flex;
		height: 100%;
		width: 50%;
		flex-direction: column;
		padding: 50px 60px;
		background-color: #181a1b;
	}
	.loginTitle {
		font-size: 23pt;
		color: #fff;
	}
	.loginField {
		padding-bottom: 20px;
	}
	label {
		color: #fff;
	}
	input {
		color: #fff;
		background-color: transparent;
		border: 2px solid #333;
		min-width: 20px;
		flex: 1 1 auto;
		box-sizing: border-box;
		padding: 15px;
	}
	.inputbox {
		display: flex;
	}
	.remember {
		position: relative;
		color: #fff;
	}
	.remember input {
		display: none;
	}
	.remember label {
		padding-left: 30px;
		cursor: pointer;
	}
	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 20px;
		width: 20px;
		border: 2px solid #00c384;
	}
	input[type="checkbox"]:checked + .checkmark {
		background-color: #009f6c;
	}
	.checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}
	input[type="checkbox"]:checked ~ .checkmark:after {
		display: block;
	}
	.remember:hover .checkmark {
		background-color: #005d46;
	}
	.remember:hover input[type="checkbox"]:checked ~ .checkmark {
		background-color: #00c384;
	}
	.checkmark:after {
		left: 6px;
		top: 2px;
		width: 5px;
		height: 10px;
		border: solid white;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
	.loginBtn {
		padding-top: 15px;
	}
	.loginBtn button {
		width: 100%;
		height: 40px;
		background: linear-gradient(112deg, rgb(29, 150, 130), rgb(5, 194, 107));
		border: 0;
		cursor: pointer;
	}
	.signup {
		position: absolute;
		bottom: 10%;
		left: 50%;
		transform: translate(-50%, 50%);
		color: #fff;
	}
	.signup-link {
		cursor: pointer;
		color: #00f5a7;
	}
</style>
