<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		height: 100vh;
		width: 100%;
	}

	button {
		background: transparent;
		box-shadow: 0 0 0 transparent;
		border: 0 solid transparent;
		text-shadow: 0 0 0 transparent;
	}

	button:hover {
		background: transparent;
		box-shadow: 0 0 0 transparent;
		border: 0 solid transparent;
		text-shadow: 0 0 0 transparent;
	}

	button:active {
		outline: none;
		border: none;
	}

	button:focus {
		outline: 0;
	}
</style>
