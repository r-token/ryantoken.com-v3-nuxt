<script setup>
	defineProps({
		doc: Object
	})
</script>

<template>
	<div class="text-right">
		<ul>
			<li
				v-for="link of doc.body.toc.links"
				:key="link.id"
				:class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
			>
				<NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
			</li>
		</ul>
	</div>
</template>