<template>
	<div class="intro">
		<user-registration-popup v-if="togglers.showRegistrationPopup"></user-registration-popup>
		<img src="@/assets/logo.png" alt="timber-logo" class="logo">
		<h1 class="intro-title">Добро пожаловать в Timber</h1>
		<div class="btns">
			<button
				class="btn"
				@click="togglers.showRegistrationPopup = !togglers.showRegistrationPopup"
			>
				Зарегистрироваться
			</button>
			<button class="btn">Войти</button>
		</div>
	</div>
</template>

<script>
import UserRegistrationPopup from "@/components/users/UserRegistrationPopup";

export default {
	name: "Intro",
	components: {
		UserRegistrationPopup,
	},
	data() {
		return {
			togglers: {
				showRegistrationPopup: false
			}
		}
	},
	methods: {

	}
}
</script>

<style scoped>
	.intro {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.intro-title {

	}

	.logo {
		width: 250px;
		height: 250px;
		border-radius: 50%;
		margin: 50px 0 0 0;
	}

	.btns {
		display: flex;
	}

	.btn {
		cursor: pointer;
		width: 200px;
		height: 50px;
		margin: 0 20px 0 0;
		color: orange;
		border: 2px solid orange;
		font-size: 16px;
	}

	.btn:last-child {
		margin: 0;
	}
</style>