<template>
	<div class="intro">
		<img src="@/assets/logo.png" alt="timber-logo" class="logo">
		<h1 class="intro-title">Добро пожаловать в Timber</h1>
		<div class="btns">
			<button class="btn">Зарегистрироваться</button>
			<button class="btn">Войти</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Intro"
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