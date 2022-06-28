<script setup>
	import { onMounted, reactive } from "vue";
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
			<h6>39 users</h6>
			<table class="meta">
				<tr>
					<td><img src="@/assets/images/Avatar.jpg" /></td>
					<td>SakuraFrost225</td>
					<td>nguyentrongsang1234@gmail.com</td>
					<td>(+84) 974035452</td>
					<td><div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div></td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="@/assets/images/Avatar.jpg" /></td>
					<td>Emo Kid</td>
					<td>emokid@gmail.com</td>
					<td>(+84) 985249331</td>
					<td><div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div></td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="@/assets/images/Avatar.jpg" /></td>
					<td>C91Huyhehe</td>
					<td>huyhehec91@gmail.com</td>
					<td>(+84) 394425937</td>
					<td><div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div></td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="@/assets/images/Avatar.jpg" /></td>
					<td>HitoriHellen</td>
					<td>HitoriHellen@gmail.com</td>
					<td>(+84) 369475518</td>
					<td><div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div></td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="@/assets/images/Avatar.jpg" /></td>
					<td>SakuraFrost225</td>
					<td>nguyentrongsang1234@gmail.com</td>
					<td>(+84) 974035452</td>
					<td><div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div></td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="@/assets/images/Avatar.jpg" /></td>
					<td>Emo Kid</td>
					<td>emokid@gmail.com</td>
					<td>(+84) 985249331</td>
					<td><div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div></td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="@/assets/images/Avatar.jpg" /></td>
					<td>C91Huyhehe</td>
					<td>huyhehec91@gmail.com</td>
					<td>(+84) 394425937</td>
					<td><div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div></td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="@/assets/images/Avatar.jpg" /></td>
					<td>HitoriHellen</td>
					<td>HitoriHellen@gmail.com</td>
					<td>(+84) 369475518</td>
					<td><div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div></td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="@/assets/images/Avatar.jpg" /></td>
					<td>SakuraFrost225</td>
					<td>nguyentrongsang1234@gmail.com</td>
					<td>(+84) 974035452</td>
					<td><div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div></td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="@/assets/images/Avatar.jpg" /></td>
					<td>Emo Kid</td>
					<td>emokid@gmail.com</td>
					<td>(+84) 985249331</td>
					<td><div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div></td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="@/assets/images/Avatar.jpg" /></td>
					<td>C91Huyhehe</td>
					<td>huyhehec91@gmail.com</td>
					<td>(+84) 394425937</td>
					<td><div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div></td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
				<tr>
					<td><img src="@/assets/images/Avatar.jpg" /></td>
					<td>HitoriHellen</td>
					<td>HitoriHellen@gmail.com</td>
					<td>(+84) 369475518</td>
					<td><div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div></td>
					<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
				</tr>
			</table>
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
	.meta {
		display: block;
		margin-top: 30px;
		font-size: 10pt;
		font-weight: 400;
		color: #c7cbec;
		text-align: left;
	}
	.meta tr {
		height: 80px;
		vertical-align: center;
	}
	.meta tr td:first-child {
		width: 75px;
	}
	.meta tr td:nth-child(2) {
		width: 175px;
	}
	.meta tr td:nth-child(3) {
		width: 325px;
	}
	.meta tr td:nth-child(4) {
		width: 255px;
	}
	.meta tr td:nth-child(5) {
		width: 245px;
	}
	.borderWrap {
		display: inline-block;
		border-radius: 5px;
		outline: #c7cbec 2px solid;
		padding: 5px 10px;
		width: auto;
	}
	.meta tr td:last-child,
	td a,
	a:hover {
		color: rgb(220, 228, 236);
	}
	td img {
		height: 50px;
		width: 50px;
		border-radius: 50%;
	}
	.fa-circle-small {
		color: #30d18d;
	}
</style>
