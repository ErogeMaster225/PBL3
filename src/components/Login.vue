<script setup>
	import { onMounted, reactive } from "vue";
	import { useRouter, useRoute } from "vue-router";
	import { useUserStore } from "@/stores/userStore";
	const store = useUserStore();
	const router = useRouter();
	const loginRequest = (username, password) => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Auth/login", {
			method: "POST",
			headers: {
				Accept: "text/plain",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: username, password: password }),
		});
		return response;
	};
	const login = () => {
		let username = document.getElementById("username_field").value;
		let password = document.getElementById("password_field").value;
		loginRequest(username, password)
			.then((response) => {
				if (response.ok) {
					return response.text();
				}
				throw new Error(response.statusText);
			})
			.then((data) => {
				console.log(data);
				store.username = username;
				router.push("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	onMounted(() => {});
</script>
<template>
	<div class="loginPane">
		<div class="loginTitle">Log In</div>
		<form>
			<div class="loginField">
				<label for="username_field">Username</label><br />
				<div class="inputbox"><input type="text" name="username" id="username_field" required placeholder="Username" /></div>
			</div>
			<div class="loginField">
				<label for="password_field">Password</label><br />
				<div class="inputbox"><input type="password" name="password" id="password_field" required placeholder="Password" /></div>
			</div>
			<div class="remember">
				<label for="remember-label">
					<input type="checkbox" name="remember" id="remember-label" />
					<span class="checkmark"></span>
					Keep me logged in
				</label>
			</div>
			<div class="loginBtn">
				<button type="submit" @click.prevent="login()">
					<span>Log In</span>
				</button>
			</div>
			<div class="signup">Don't have an account? <span class="signup-link" @click="router.push('/auth/register')">Sign up</span></div>
		</form>
	</div>
</template>
<style>
	.loginPane {
		position: absolute;
		right: 0;
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
		white-space: nowrap;
	}
	.signup-link {
		cursor: pointer;
		color: #00f5a7;
	}
</style>
