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
				store.token = data;
				store.username = username;
				document.getElementById("password_field").value = "";
				store.username == "admin" ? router.push("/admin") : router.push("/");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const hidemodal = (event) => {
		if (event.target == document.getElementById("modal")) document.getElementById("modal").style.display = "none";
	};
	const showmodal = () => {
		document.getElementById("modal").style.display = "block";
	};
	const emailRequest = (email) => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Auth/forgotPassword/email?requestEmail=" + email, {
			headers: {
				Accept: "*/*",
			},
			method: "POST",
		});
		return response;
	};
	const emailSend = () => {
		emailRequest(document.getElementById("email1").value).then((response) => {
			if (response.ok) {
				document.getElementById("form1").style.left = "-450px";
				document.getElementById("form2").style.left = "40px";
			}
			throw new Error(response.statusText);
		});
	};
	const verifyEmailRequest = (code) => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Auth/VerifyPassword?code=" + code, {
			headers: {
				Accept: "text/plain",
			},
			method: "POST",
		});
		return response;
	};
	const verifySend = () => {
		verifyEmailRequest(document.getElementById("code").value).then((response) => {
			if (response.ok) {
				return response.text();
			}
			throw new Error(response.statusText);
		}).then(data => {
			if (data) {
				console.log(data);
				document.getElementById("form2").style.left = "-450px";
				document.getElementById("form3").style.left = "40px";
			}
		})
	};
	const passwordResetRequest = (email, password) => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/Auth/ResetPassword?Password=" + password + "&email=" + email, {
			headers: {
				Accept: "*/*",
			},
			method: "POST",
		});
		return response;
	};
	const passwordResetSend = () => {
		passwordResetRequest(document.getElementById("email2").value,document.getElementById("password2").value).then((response) => {
			if (response.ok) {
				document.getElementById("modal").click();
			}
			throw new Error(response.statusText);
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
			<div class="password_reset">Forgot your password? <span class="signup-link" @click="showmodal">Click here</span></div>
		</form>
	</div>
	<div id="modal" class="modal" @click="hidemodal">
		<div class="modalBox">
			<form id="form1">
				<h2>Reset<br />Password</h2>
				<h6>Please enter your email address to request a password reset.</h6>
				<div class="loginField">
					<label for="email1">Email</label><br />
					<div class="inputbox"><input type="text" name="email" id="email1" required placeholder="johndoe@gmail.com" /></div>
				</div>
				<div class="modalBtn">
					<button type="submit" @click.prevent="emailSend">
						<span>Send Reset Password</span>
					</button>
				</div>
			</form>
			<form id="form2">
				<h2>Check your<br />Email</h2>
				<h6>We have sent a verification to your email address.</h6>
				<div class="loginField">
					<label for="code">Verify code</label><br />
					<div class="inputbox"><input type="text" name="verifycode" id="code" required placeholder="123456" /></div>
				</div>
				<div class="modalBtn">
					<button type="submit" @click.prevent="verifySend">
						<span>Verify</span>
					</button>
				</div>
			</form>
			<form id="form3">
				<h2>Complete the<br />Process</h2>
				<h6>Enter your new password</h6>
				<div class="loginField">
					<label for="email2">Email</label><br />
					<div class="inputbox"><input type="text" name="email" id="email2" required placeholder="johndoe@gmail.com" /></div>
				</div>
				<div class="loginField">
					<label for="password2">Password</label><br />
					<div class="inputbox"><input type="password" name="password2" id="password2" required placeholder="Super epic password" /></div>
				</div>
				<div class="modalBtn">
					<button type="submit" @click.prevent="passwordResetSend">
						<span>Complete</span>
					</button>
				</div>
			</form>
		</div>
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
		bottom: 12%;
		left: 50%;
		transform: translate(-50%, 50%);
		color: #fff;
		white-space: nowrap;
	}
	.password_reset {
		position: absolute;
		bottom: 7%;
		left: 50%;
		transform: translate(-50%, 50%);
		color: #fff;
		white-space: nowrap;
	}
	.signup-link {
		cursor: pointer;
		color: #00f5a7;
	}
	.modal {
		display: none;
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
		width: 30vw;
		height: 75vh;
		background-color: #212329;
		border-radius: 15px;
		color: #eeeeee;
		overflow: auto;
	}
	.modalBox form {
		width: calc(30vw - 80px);
		height: calc(100% - 40px);
		position: absolute;
		top: 30px;
		left: 40px;
		transition: all 0.5s ease;
	}
	.modalBtn {
		position: absolute;
		bottom: 30px;
		width: 100%;
		text-align: center;
	}
	.modalBtn button {
		width: 50%;
		height: 50px;
		background: linear-gradient(112deg, rgb(29, 150, 130), rgb(5, 194, 107));
		border: 0;
		cursor: pointer;
	}
	#form2 {
		left: 550px;
	}
	#form3 {
		left: 550px;
	}
</style>
