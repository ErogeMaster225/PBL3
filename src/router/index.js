import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "../views/AdminView.vue";
import AuthView from "../views/AuthView.vue";
import PageNotFound from "../views/404.vue";
import Profile from "@/components/Profile.vue";
import Store from "@/components/Store.vue";
import Games from "@/components/GamesDetails.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import Library from "@/components/Library.vue";
import AdminDashboard from "@/components/Admin/AdminDashboard.vue";
import AdminGameManager from "@/components/Admin/AdminGameManager.vue";
import AdminGamesDetails from "@/components/Admin/AdminGamesDetails.vue";
import AdminCreateGames from "@/components/Admin/AdminCreateGames.vue";
import AdminUserManager from "@/components/Admin/AdminUserManager.vue";
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
				{ path: "games/:id", component: Games, meta: { transition: "slide-fade-in" } },
				{ path: "library", component: Library, meta: { transition: "slide-fade-in" } },
			],
		},
		{
			path: "/admin",
			name: "admin",
			component: AdminView,
			children: [
				{ path: "", component: AdminDashboard, meta: { transition: "slide-fade-out" } },
				{ path: "games", component: AdminGameManager, meta: { transition: "slide-fade-in" } },
				{ path: "games/create", component: AdminCreateGames, meta: { transition: "slide-fade-in" } },
				{ path: "games/:id/edit", component: AdminGamesDetails, meta: { transition: "slide-fade-in" } },
				{ path: "users", component: AdminUserManager, meta: { transition: "slide-fade-in" } },
			],
		},
		{
			path: "/auth",
			name: "auth",
			component: AuthView,
			children: [
				{ path: "login", name: "login", component: Login, meta: { transition: "login-fade" } },
				{ path: "register", name: "register", component: Register, meta: { transition: "register-fade" } },
			],
		},
		{
			path: "/:catchAll(.*)*",
			name: "PageNotFound",
			component: PageNotFound,
		},
	],
});

export default router;
