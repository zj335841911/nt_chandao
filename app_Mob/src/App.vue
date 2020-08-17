<template>
	<ion-app>
				<keep-alive>
			<router-view/>
		</keep-alive>
	</ion-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue { }
</script>