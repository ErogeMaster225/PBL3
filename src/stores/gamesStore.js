import { defineStore } from "pinia";
export const useGamesStore = defineStore("games", {
	state: () => {
		return {
			gamesDetails: {},
			gamesList: [],
		};
	},
	actions: () => {},
});
