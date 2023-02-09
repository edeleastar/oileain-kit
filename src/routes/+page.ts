import type { PageLoad } from "./$types";

import { oileain } from "../services/oileain-api";
import type { MapSpec } from "../services/markers";
import L from "leaflet";
import { currentPoi } from "../services/stores";
import { goto } from "$app/navigation";

async function getCoasts() {
	await oileain.getCoasts();
	const location = L.latLng(53.2734, -7.7783203);
	const zoom = 8;

	const mapSpec: MapSpec = {
		location: location,
		zoom: zoom,
		markerLayers: oileain.markerLayers,
		markerClick(marker): void {
			oileain.getIslandById(marker.id).then((islandSelected) => {
				console.log(islandSelected);
				const island = islandSelected;
				goto(`/poi/${island.safeName}`);
			});
		}
	};
	currentPoi.set({ title: "<p>Ireland</p>", lat: 53.2734, lng: -7.7783203 });
	return mapSpec;
}

export const ssr = false;

export const load: PageLoad = async ({ params }) => {
	return {
		mapSpec: getCoasts()
	};
};
