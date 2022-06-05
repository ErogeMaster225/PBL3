import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PageNotFound from "../views/404.vue";
import Profile from "@/components/Profile.vue";
import Store from "@/components/Store.vue";
import Games from "@/components/Games.vue";
const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
			children: [
				{ path: "", component: Store, meta: { transition: "slide-fade-out" } },
				{ path: "profile", component: Profile, meta: { transition: "slide-fade-in" } },
				{ path: "games", component: Games, meta: { transition: "slide-fade-in" } },
			],
		},
		{
			path: "/login",
			name: "login",
			component: LoginView,
		},
		{
			path: "/:catchAll(.*)*",
			name: "PageNotFound",
			component: PageNotFound,
		},
	],
});

export default router;
