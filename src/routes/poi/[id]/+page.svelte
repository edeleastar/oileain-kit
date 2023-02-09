<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
	import LeafletMap from "$lib/LeafletMap.svelte";
	import IslandCoordinates from "$lib/IslandCoordinates.svelte";
	import IslandDescription from "$lib/IslandDescription.svelte";
</script>

<div class="columns">
	<div class="column">
		<LeafletMap id="map-main" marker={data.marker} zoom={7} height={40} />
		<IslandCoordinates island={data.island} />
	</div>
	<div class="column">
		<IslandDescription island={data.island} />
	</div>
</div>
