<script setup>
	import { onMounted, reactive } from "vue";
	import { useUserStore } from "@/stores/userStore";
	import UserCard from "@/components/Admin/AdminUserCard.vue";
	const store = useUserStore();
	const userListRequest = () => {
		const response = fetch("https://vaporwaveapi.azurewebsites.net/api/User/getAllUser", {
			headers: {
				Accept: "text/plain",
				Authorization: "Bearer " + store.token,
			},
		});
		return response;
	};
	const getUserList = () => {
		userListRequest()
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error(response.statusText);
			})
			.then((data) => {
				store.userlist = data;
			})
			.catch((err) => {
				console.log(err);
			});
	};
	onMounted(() => {
		getUserList();
	})
</script>

<template>
	<div class="mainPanel">
		<div class="searchBar">
			<div class="searchBox">
				<div class="searchIcon"><i class="fa-light fa-magnifying-glass"></i></div>
				<input type="search" name="searchField" id="search" placeholder="What are you looking for?" />
			</div>
		</div>
		<div class="store">
			<h3>Users</h3>
			<h6>{{ store.userlist.length }} users</h6>
			<UserCard></UserCard>
			<!-- <table class="meta">
				<tr>
					<td><img src="https://osu.ppy.sh/images/layout/avatar-guest@2x.png" /></td>
					<td>SakuraFrost225</td>
					<td>nguyentrongsang1234@gmail.com</td>
					<td>(+84) 974035452</td>
					<td>
						<div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div>
					</td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="https://osu.ppy.sh/images/layout/avatar-guest@2x.png" /></td>
					<td>Emo Kid</td>
					<td>emokid@gmail.com</td>
					<td>(+84) 985249331</td>
					<td>
						<div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div>
					</td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="https://osu.ppy.sh/images/layout/avatar-guest@2x.png" /></td>
					<td>C91Huyhehe</td>
					<td>huyhehec91@gmail.com</td>
					<td>(+84) 394425937</td>
					<td>
						<div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div>
					</td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="https://osu.ppy.sh/images/layout/avatar-guest@2x.png" /></td>
					<td>HitoriHellen</td>
					<td>HitoriHellen@gmail.com</td>
					<td>(+84) 369475518</td>
					<td>
						<div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div>
					</td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="https://osu.ppy.sh/images/layout/avatar-guest@2x.png" /></td>
					<td>SakuraFrost225</td>
					<td>nguyentrongsang1234@gmail.com</td>
					<td>(+84) 974035452</td>
					<td>
						<div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div>
					</td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
			</table> -->
		</div>
	</div>
</template>

<style>
	.mainPanel {
		position: fixed;
		top: 0px;
		right: 0px;
		height: 100vh;
		width: 80vw;
		overflow-x: hidden;
		color: #fff;
		padding-top: 40px;
		padding-left: 20px;
		padding-bottom: 40px;
	}
	.mainPanel .searchBar {
		width: 100%;
		height: 3em;
		display: flex;
	}
	.mainPanel .searchBar .searchBox {
		align-items: center;
		display: flex;
		background-color: #0c0f17;
		padding: 0.5em;
		border-radius: 10px;
	}
	.searchIcon {
		position: relative;
		width: 2em;
		height: 0;
		padding-bottom: 2em;
		background-color: #262c40;
		border-radius: 5px;
	}
	.searchIcon i {
		margin: 50% 0 0 50%;
		transform: translate(-50%, -50%);
	}
	.mainPanel .searchBar .searchBox input {
		height: 20px;
		border: none;
		outline: none;
	}
	.store {
		margin: 30px 30px 30px 0px;
	}
</style>
