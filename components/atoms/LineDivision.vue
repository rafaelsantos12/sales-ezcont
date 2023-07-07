<template>
  <div class="wrapper-line" :style="varStyle"></div>
</template>

<script>
export default {
  name: "AtomLineDivision",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "1px",
    },
    color: {
      type: String,
      default: "var(--darkGrey3)",
    },
    opacity: {
      type: Number,
      default: 0.5,
    },
    borderRadius: {
      type: String,
      default: "none",
    },
  },
  computed: {
    varStyle() {
      return {
        "--opacity": this.opacity,
        "--color": this.color,
        "--height": this.height,
        "--width": this.width,
        "--borderRadius": this.borderRadius,
      };
    },
  },
};
</script>

<style scoped>
.wrapper-line {
  width: var(--width);
  height: var(--height);
  background: var(--color);
  opacity: var(--opacity);
  border-radius: var(--borderRadius);
}
</style>
