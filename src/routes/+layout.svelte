<script lang="ts">
	import SideBar from "$lib/SideBar.svelte";
	import Header from "../lib/Header.svelte";
</script>

<Header />
<div class="container">
	<div class="columns">
		<div class="column is-four-fifths">
			<slot />
		</div>
		<div class="column">
			<SideBar />
		</div>
	</div>
</div>
