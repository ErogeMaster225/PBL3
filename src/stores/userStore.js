import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
	state: () => {
		return {
			username: "Guest",
			balance: 0.0,
			avatar: "https://osu.ppy.sh/images/layout/avatar-guest@2x.png",
			token: "",
			dob: "",
			email: "",
			phone: "",
			userlist: [],
		};
	},
	actions: () => {},
});
