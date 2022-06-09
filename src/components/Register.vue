<script setup>
	import { onMounted, onUnmounted, onUpdated } from "vue";
	onMounted(() => {
		document.querySelector(".artPanel").style.left = "50%";
	});
	onUnmounted(() => {
		document.querySelector(".artPanel").style.left = "";
	});
</script>
<template>
	<div class="registerPane">
		<div class="registerTitle">Register</div>
		<form>
			<div class="registerField">
				<label for="username_field">Username</label><br />
				<div class="inputbox"><input type="text" name="username" id="username_field" required placeholder="Username" /></div>
			</div>
			<div class="registerField">
				<label for="password_field">Password</label><br />
				<div class="inputbox"><input type="password" name="password" id="password_field" required placeholder="Password" /></div>
			</div>
			<div class="registerField">
				<label for="password_field">Confirm password</label><br />
				<div class="inputbox"><input type="password" name="password" id="password_field" required placeholder="Password" /></div>
			</div>
			<div class="registerBtn">
				<button type="submit">
					<span>Register</span>
				</button>
			</div>
			<div class="login">Already have an account? <span class="login-link" @click="$router.push('/auth/login')">Log in</span></div>
		</form>
	</div>
</template>
<style>
	.registerPane {
		position: absolute;
		left: 0;
		display: flex;
		height: 100%;
		width: 50%;
		flex-direction: column;
		padding: 50px 60px;
		background-color: #181a1b;
	}
	.registerTitle {
		font-size: 23pt;
		color: #fff;
	}
	.registerField {
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
	.registerBtn {
		padding-top: 15px;
	}
	.registerBtn button {
		width: 100%;
		height: 40px;
		background: linear-gradient(112deg, rgb(29, 150, 130), rgb(5, 194, 107));
		border: 0;
		cursor: pointer;
	}
	.login {
		position: absolute;
		bottom: 10%;
		left: 45%;
		transform: translate(-50%, 50%);
		color: #fff;
		white-space: nowrap;
	}
	.login-link {
		cursor: pointer;
		color: #00f5a7;
	}
</style>
