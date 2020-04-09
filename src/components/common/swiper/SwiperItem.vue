<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    height: 500px;
    width: 100%;
    flex-shrink: 0;
    /* position: relative; */
  }

  .slide img {
    height: 500px;
    width: 100%;
  }
</style>
