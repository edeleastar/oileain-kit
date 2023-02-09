<script lang="ts">
	import LeafletMap from '$lib/LeafletMap.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let map: LeafletMap;
</script>

<LeafletMap markerLayers={data.mapSpec.markerLayers} bind:this={map} />
