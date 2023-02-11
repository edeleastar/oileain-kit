<script lang="ts">
	import Icon from "svelte-awesome";
	import { faMap } from "@fortawesome/free-regular-svg-icons";
	import { faMapLocation, faMapLocationDot, faMapMarked, faMapPin } from "@fortawesome/free-solid-svg-icons";
</script>

<div class="columns is-vcentered">
	<div class="column is-two-thirds">
		<div class="box has-text-centered columns m-2 p-1">
			<div class="column is-2">
				<img src="/favicon.png" width="40" alt="img" />
			</div>
			<div class="column">
				<div class="title">Oileain: islands of Ireand</div>
			</div>
		</div>
	</div>
	<div class="column">
		<div class="box has-text-centered columns m-2 p-1">
			<a href="/" class="column">
				<Icon data={faMap} scale={3} />
			</a>
			<a href="/explorer" class="column">
				<Icon data={faMapMarked} scale={3} />
			</a>
			<a href="/navigator/Great-Saltee-Island" class="column">
				<Icon data={faMapPin} scale={3} />
			</a>
		</div>
	</div>
</div>
