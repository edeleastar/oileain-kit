<script lang="ts">
	import LeafletMap from "$lib/LeafletMap.svelte";
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<LeafletMap height={85} markerLayers={data.markerLayers} />
