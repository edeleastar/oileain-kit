import type { MarkerSpec } from "./markers";
import { writable } from "svelte/store";

export const markerSelected = writable<MarkerSpec>();
