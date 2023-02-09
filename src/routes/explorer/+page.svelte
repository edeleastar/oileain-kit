<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
	import LeafletMap from "$lib/LeafletMap.svelte";
	import IslandLatLng from "$lib/IslandLatLng.svelte";
	import IslandDescription from "$lib/IslandDescription.svelte";
	import { markerSelected } from "../../services/stores";
	import { oileain } from "../../services/oileain-api";
	import { generateMarkerSpec } from "../../services/oileaiin-markers";
	import type { MarkerSpec } from "../../services/markers";
	import type { Island } from "../../services/oileain-types";

	let island: Island;
	let navigator: LeafletMap;

	markerSelected.subscribe(async (marker: MarkerSpec) => {
		if (marker) {
			island = await oileain.getIslandById(marker.id);
			navigator.addPopupMarkerAndZoom("selected", generateMarkerSpec(island));
		}
	});
</script>

<div class="columns">
	<div class="column has-text-centered">
		<LeafletMap id="map-main" zoom={7} height={60} markerLayers={data.markerLayers} />
		{#if island}
			<IslandLatLng {island} />
		{/if}
	</div>
	<div class="column">
		<LeafletMap id="map-secondary" height={30} activeLayer="Satellite" bind:this={navigator} />
		{#if island}
			<IslandDescription {island} />
		{/if}
	</div>
</div>
