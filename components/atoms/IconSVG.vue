<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="box"
    :class="{ 'wrapper-background': isBackground }"
    :style="cssVars"
    @click="$emit('click')"
    v-html="src"
  ></div>
</template>

<script>
export default {
  name: "IconSVG",
  props: {
    name: {
      type: String,
      required: true,
    },
    isBackground: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: "transparent",
    },
    margin: {
      type: String,
      default: "0px",
    },
    width: {
      type: String,
      default: "48px",
    },
    zoom: {
      type: String,
      default: "unset",
    },
    cursor: {
      type: String,
      default: "default",
    },
    borderRadius: {
      type: String,
      default: "0",
    },
    colorFill: {
      type: String,
      default: "var(--lightGrey1)",
    },
    hoverColorFill: {
      type: String,
      default: "var(--colorFill)",
    },
    hoverBackground: {
      type: String,
      default: "transparent",
    },
    border: {
      type: String,
      default: "none",
    },
    padding: {
      type: String,
      default: "0px",
    },
  },
  computed: {
    src() {
      return require(`~/assets/icons/${this.name}.svg?raw`);
    },
    cssVars() {
      return {
        "--background": this.background,
        "--margin": this.margin,
        "--width": this.width,
        "--zoom": this.zoom,
        "--cursor": this.cursor,
        "--borderRadius": this.borderRadius,
        "--colorFill": this.colorFill,
        "--hoverColorFill": this.hoverColorFill,
        "--hoverBackground": this.hoverBackground,
        "--border": this.border,
        "--padding": this.padding,
      };
    },
  },
};
</script>

<style scoped>
.box {
  width: var(--width);
  height: var(--width);
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background);
  zoom: var(--zoom);
  cursor: var(--cursor);
  border-radius: var(--borderRadius);
  border: var(--border);
  padding: var(--padding);
}

.box:hover {
  --colorFill: var(--hoverColorFill) !important;
  --secondaryFill: var(--hoverBackground) !important;
  background: var(--hoverBackground);
}

.wrapper-background {
  width: var(--width, 99px);
  background: var(--background);
  border-radius: 1.76667px;
  margin: var(--margin);
  padding: var(--padding);
}
</style>
