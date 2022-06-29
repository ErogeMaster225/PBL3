<script setup>
	import { useUserStore } from "@/stores/userStore";
	const userstore = useUserStore();
</script>
<template>
	<TransitionGroup class="meta" tag="table" name="card-stagger" :style="{ '--total': userstore.userlist.length }">
		<tr v-for="(user, index) in userstore.userlist" :key="index" :style="{ '--index': index }">
			<td><img src="https://osu.ppy.sh/images/layout/avatar-guest@2x.png" /></td>
			<td>{{ user.userName }}</td>
			<td>{{ user.email ? user.email : "¯\\_(ツ)_/¯" }}</td>
			<td>{{ user.phone ? user.email : "¯\\_(ツ)_/¯" }}</td>
			<td>
				<div class="borderWrap"><i class="fa-solid fa-circle-small"></i> Active</div>
			</td>
			<td><i class="fa-solid fa-ellipsis-vertical"></i></td>
		</tr>
	</TransitionGroup>
</template>
<style>
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
