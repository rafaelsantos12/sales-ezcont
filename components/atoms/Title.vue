<template>
  <component :is="tag" :style="varStyle" class="title">
    <slot />
  </component>
</template>

<script>
export default {
  name: "AtomTitle",
  props: {
    tag: {
      type: String,
      default: "h1",
    },
    fontSize: {
      type: String,
      default: "18px",
    },
    fontWeight: {
      type: String,
      default: "400",
    },
    color: {
      type: String,
      default: "#333",
    },
    fontFamily: {
      type: String,
      default: "sans-serif",
    },
    lineHeight: {
      type: String,
      default: "1",
    },
    textAlign: {
      type: String,
      default: "left",
    },
  },
  computed: {
    varStyle() {
      return {
        "--fontSize": this.fontSize,
        "--fontWeight": this.fontWeight,
        "--color": this.color,
        "--fontFamily": this.fontFamily,
        "--lineHeight": this.lineHeight,
        "--textAlign": this.textAlign,
      };
    },
  },
};
</script>

<style scoped>
.title {
  font-family: var(--fontFamily);
  font-size: var(--fontSize);
  color: var(--color);
  font-weight: var(--fontWeight);
  line-height: var(--lineHeight);
  text-align: var(--textAlign);
}
</style>
