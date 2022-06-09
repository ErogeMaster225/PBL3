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
			<div class="artPanel">
				<div class="credits">
					<div class="title">Transistor <span>by</span></div>
					<div class="creator">Supergiant Games</div>
				</div>
			</div>
			<RouterView v-slot="{ Component, route }">
				<Transition :name="route.meta.transition">
					<component :is="Component" />
				</Transition>
			</RouterView>
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
		display: flex;
		background-color: #181a1b;
	}
	.artPanel {
		position: absolute;
		left: 0;
		top: 0;
		background: linear-gradient(rgba(11, 10, 26, 0.4), rgba(11, 10, 26, 0.4)), url("@/assets/images/transistor-loginBG.jpg");
		background-repeat: no-repeat;
		background-position-y: -20px;
		background-size: cover;
		height: 100%;
		width: 50%;
		color: #fff;
		box-shadow: inset 0 0 45px 15px #000;
		transition: all 0.5s ease-out;
		z-index: 1;
	}
	.artPanel .credits {
		position: absolute;
		bottom: 7%;
		left: 15%;
		font-size: 14px;
		font-weight: 600;
	}
	.artPanel .credits .title span {
		font-weight: 300;
	}
	.login-fade-enter-active {
		transition: 0.5s opacity 0.5s cubic-bezier(1, 0.5, 0.8, 1), transform 0.6s ease-out;
	}
	.login-fade-leave-active {
		transition: opacity 0.3s ease-in, transform 0.4s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.login-fade-enter-from {
		transform: translateY(50vh);
		opacity: 0;
	}
	.login-fade-leave-to {
		transform: translateX(-100px);
		opacity: 0;
	}
	.register-fade-leave-active {
		transition: opacity 0.3s ease-in, transform 0.4s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.register-fade-enter-active {
		transition: 0.5s opacity 0.5s cubic-bezier(1, 0.5, 0.8, 1), transform 0.6s ease-out;
	}
	.register-fade-leave-to {
		transform: translateX(100px);
		opacity: 0;
	}
	.register-fade-enter-from {
		transform: translateY(-50vh);
		opacity: 0;
	}
</style>
