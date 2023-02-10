<script lang="ts">
	import { page } from "$app/stores";
	import type { PageData } from "./$types";
	export let data: PageData;
	import LeafletMap from "$lib/LeafletMap.svelte";
	import IslandCoordinates from "$lib/IslandCoordinates.svelte";
	import IslandDescription from "$lib/IslandDescription.svelte";
	import { generateMarkerSpec } from "../../../services/oileaiin-markers";
	let navigator: LeafletMap;

	page.subscribe((path) => {
		if (navigator) {
			navigator.addPopupMarkerAndZoom("selected", generateMarkerSpec(data.island));
		}
	});
</script>

<div class="columns">
	<div class="column">
		<LeafletMap id="map-main" marker={data.marker} zoom={7} height={40} bind:this={navigator} />
		<IslandCoordinates island={data.island} />
	</div>
	<div class="column">
		<IslandDescription island={data.island} />
	</div>
</div>
