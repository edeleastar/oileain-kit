<script lang="ts">
	import { onMount } from "svelte";
	import IslandDescription from "$lib/IslandDescription.svelte";
	import LeafletMap from "$lib/LeafletMap.svelte";
	import { page } from "$app/stores";
	import type { PageData } from "./$types";
	import { generateMarkerSpec } from "../../../services/oileaiin-markers";
	import type { MarkerSpec } from "../../../services/markers";
	export let data: PageData;

	let mapTerrain: LeafletMap;
	let mapSat: LeafletMap;
	let mapContext: LeafletMap;

	function zoomTo(marker: MarkerSpec) {
		mapTerrain?.addPopupMarkerAndZoom("selected", marker);
		mapSat?.moveTo(marker.location, 14);
		mapContext?.moveTo(marker.location, 10);
	}

	onMount(async () => {
		zoomTo(generateMarkerSpec(data.island));
	});

	page.subscribe((path) => {
		const marker = generateMarkerSpec(data.island);
		mapTerrain?.addPopupMarkerAndZoom("selected", marker);
		mapSat?.moveTo(marker.location, 14);
		mapContext?.moveTo(marker.location, 10);
	});
</script>

<div class="columns">
	<div class="column">
		<LeafletMap id="terrain" height={45} bind:this={mapTerrain} zoom={14} />
	</div>
	<div class="column" style="height: 45vh; overflow-y: auto">
		<IslandDescription island={data.island} />
	</div>
</div>
<div class="columns">
	<div class="column">
		<LeafletMap id="sat" activeLayer={"Satellite"} height={45} bind:this={mapSat} zoom={14} />
	</div>
	<div class="column">
		<LeafletMap id="context" height={45} markerLayers={data.markerLayers} bind:this={mapContext} zoom={12} />
	</div>
</div>
