<template>
  <NuxtImg v-if="src" :src="src" :alt="alt" :style="varStyle" class="image" />
</template>

<script>
export default {
  name: "ImageCustom",
  props: {
    src: {
      type: String,
      require: true,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: "100%",
    },

    borderRadius: {
      type: String,
      default: "0px",
    },
    height: {
      type: String,
      default: "auto",
    },
    href: {
      type: String,
      default: null,
    },
  },
  computed: {
    varStyle() {
      return {
        "--width": this.width,
        "--height": this.height,
        "--borderRadius": this.borderRadius,
      };
    },
  },
};
</script>
<style scoped>
.image {
  width: var(--width);
  border-radius: var(--borderRadius);
  overflow: hidden;
  height: var(--height);
}
</style>
