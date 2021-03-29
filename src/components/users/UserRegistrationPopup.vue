<template>
	<div class="user-registration-popup">
		<div class="content">
			<div class="top">
				<div class="window-title">Регистрация</div>
				<div class="close">x</div>
			</div>
			<div class="bottom">
				<div class="input-title">Имя пользователя:</div>
				<input type="text" placeholder="Введите имя пользователя..." v-model="user.username">
				<div class="input-title">Пароль:</div>
				<input type="text" placeholder="Введите пароль..." v-model="user.password">
				<div class="btn" @click="register">Зарегистрироваться</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "UserRegistrationPopup",
	data() {
		return {
			user: {
				username: '',
				password: ''
			}
		}
	},
	methods: {
		async register() {
			const res = await this.fetch({
				method: 'POST',
				url: 'api/users/register/',
				body: {
					user: this.user
				}
			});
			console.log('Register API response', res);
		}
	}
}
</script>

<style scoped>
	.user-registration-popup {
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		max-height: 90vh;
		width: 30vw;
		background: white;
		padding: 25px;
	}

	.top {
		display: flex;
		justify-content: space-between;
		margin: 0 0 20px 0;
	}

	.window-title {
		font-size: 18px;
		font-weight: bold;
	}

	.close {
		font-weight: bold;
		font-size: 20px;
		cursor: pointer;
	}

	.bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.input-title {
		width: 100%;
		margin: 0 0 10px 0;
		font-weight: bold;
	}

	input[type='text'] {
		width: 100%;
		margin: 0 0 15px 0;
	}

	.btn {
		width: 100%;
		padding: 10px;
		cursor: pointer;
		background: lightgray;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>