import { defineStore } from "pinia";
export const useGamesStore = defineStore("games", {
	state: () => {
		return {
			gamesDetails: {
				path: [],
				name: "",
				price: 0,
				gameRating: 0,
				description: "",
				tag: [],
				developer: "",
				publisher: "",
				releaseDate: "",
				website: "",
				isPayed: false,
			},
			gamesList: [],
			library: [],
		};
	},
	actions: () => {},
});
