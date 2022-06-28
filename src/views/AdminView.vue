<script setup>
	import { onMounted, onUnmounted, onUpdated } from "vue";
	import AdminSideBar from "@/components/Admin/AdminSideBar.vue";
	onMounted(() => {
		document.body.style.background = "#151921";
	});
	onUnmounted(() => {
		document.querySelector("body").setAttribute("style", "");
	});
</script>

<template>
	<main>
		<AdminSideBar />
		<RouterView v-slot="{ Component, route }">
			<Transition :name="route.meta.transition">
				<component :is="Component" />
			</Transition>
		</RouterView>
	</main>
</template>
<style>
	body {
		height: 100vh;
		display: flex;
		background-size: cover;
		font-family: "Roboto", "Nunito Sans", sans-serif;
		flex-direction: row;
		padding: 0;
	}
	*::-webkit-scrollbar {
		display: none;
	}
	.slide-fade-in-enter-active {
		transition: opacity 0.3s ease-in, transform 0.4s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-in-leave-active {
		transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-in-enter-from {
		transform: translateX(80vw);
		opacity: 0;
	}
	.slide-fade-in-leave-to {
		transform: translateX(-100px);
		opacity: 0;
	}
	.slide-fade-out-leave-active {
		transition: opacity 0.3s ease-in, transform 0.4s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-out-enter-active {
		transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.slide-fade-out-leave-to {
		transform: translateX(80vw);
		opacity: 0;
	}
	.slide-fade-out-enter-from {
		transform: translateX(-100px);
		opacity: 0;
	}
</style>
