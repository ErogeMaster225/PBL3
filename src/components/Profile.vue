<script setup></script>

<template>
	<div class="profilePanel">
		<div class="header">
			<div class="banner">
				<i class="fa-regular fa-circle-check fa-2x" @click="$router.push('/404')"></i>
			</div>
			<div class="profileImgWrapper">
				<div class="profileImg">
					<div class="editProfilePic"><i class="fa-solid fa-2x fa-paintbrush"></i></div>
				</div>
				<div class="profileTitle">
					<div class="label">Profile</div>
					<div class="labelDescription">Update your photo and personal details</div>
				</div>
			</div>
		</div>
		<div class="profileEdit">
			<div class="editColumn">
				<div class="profileEditGroup">
					<span>username</span>
					<div class="profileEditEntry">SakuraFrost225</div>
				</div>
				<div class="profileEditGroup">
					<span>current password</span>
					<input type="password" required />
				</div>
				<div class="profileEditGroup">
					<span>new password</span>
					<input type="password" required />
				</div>
			</div>
			<div class="editColumn">
				<div class="profileEditGroup">
					<span>email</span>
					<input type="text" required />
				</div>
				<div class="profileEditGroup">
					<span>phone number</span>
					<input type="text" required />
				</div>
				<div class="profileEditGroup">
					<span>DOB</span>
					<input type="date" required />
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	.profilePanel {
		position: fixed;
		top: 0px;
		right: 0px;
		height: 100vh;
		width: 80vw;
		overflow-x: hidden;
		color: #fff;
		padding-left: 20px;
		padding-bottom: 40px;
	}
	.banner {
		position: relative;
		height: 250px;
		background-image: linear-gradient(rgba(11, 10, 26, 0.4), rgba(11, 10, 26, 0.4)), url("https://i0.wp.com/boingboing.net/wp-content/uploads/2015/09/coffee_in_rain_by_kirokaze-d98qb8z.gif");
		background-position: center;
		overflow: hidden;
	}
	.banner i {
		position: absolute;
		bottom: 15px;
		right: 25px;
		cursor: pointer;
		z-index: 1;
	}
	.fa-circle-check {
		color: rgb(5, 194, 107);
	}
	.profileImgWrapper {
		position: relative;
		margin-top: -55px;
		padding-left: 50px;
		display: flex;
		line-height: 30px;
		align-items: flex-end;
	}
	.profileImg {
		position: inherit;
		height: 150px;
		width: 150px;
		background-image: url(/src/assets/images/Avatar.jpg);
		background-size: cover;
		border-radius: 50%;
	}
	.profileImg .editProfilePic {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: transparent;
		opacity: 0;
		transition: all 0.2s ease-in;
	}
	.profileImg .editProfilePic:hover {
		opacity: 1;
	}
	.profileImgWrapper .profileTitle {
		font-family: "Nunito Sans";
		padding-left: 30px;
		padding-bottom: 15px;
	}
	.profileTitle .label {
		font-size: x-large;
	}
	.profileTitle .labelDescription {
		font-size: small;
	}
	.profileEdit {
		margin-top: 30px;
		display: flex;
	}
	.profileEditEntry {
		margin: 0;
		flex: 1;
		max-width: 300px;
		align-self: stretch;
		padding: 5px;
	}
	.profileEditGroup {
		display: flex;
		align-items: center;
		padding: 10px 20px;
	}
	.profileEditGroup span {
		display: inline-block;
		width: 250px;
		text-align: right;
		line-height: 1em;
		padding-right: 30px;
	}
	.profileEditGroup input {
		float: 1;
		width: 250px;
		height: 3em;
		border-radius: 8px;
	}
</style>
