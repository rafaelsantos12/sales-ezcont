<template>
  <button
    class="button"
    type="button"
    :style="varCSS"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "ButtonCustom",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    minWidth: {
      type: String,
      default: "auto",
    },
    height: {
      type: String,
      default: "56px",
    },
    bgColor: {
      type: String,
      default: "var(--dark100)",
    },
    color: {
      type: String,
      default: "#000",
    },
    colorHover: {
      type: String,
      default: "#000",
    },
    borderRadius: {
      type: String,
      default: "0px",
    },
    borderColor: {
      type: String,
      default: "#fff",
    },
    hoverBgColor: {
      type: String,
      default: "#808080",
    },
    fontWeight: {
      type: String,
      default: "normal",
    },
    fontSize: {
      type: String,
      default: "var(--fontSizeTextP6)",
    },
    hoverBorderColor: {
      type: String,
      default: "#fff",
    },
  },
  computed: {
    varCSS() {
      return {
        "--width": this.width,
        "--height": this.height,
        "--bgColor": this.bgColor,
        "--color": this.color,
        "--colorHover": this.colorHover,
        "--borderRadius": this.borderRadius,
        "--borderColor": this.borderColor,
        "--hoverBgColor": this.hoverBgColor,
        "--fontWeight": this.fontWeight,
        "--fontSize": this.fontSize,
        "--hoverBorderColor": this.hoverBorderColor,
        "--minWidth": this.minWidth,
      };
    },
  },
};
</script>
<style scoped>
.button {
  width: var(--width);
  min-width: var(--minWidth);
  height: var(--height);
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
  border-radius: var(--borderRadius);
  color: var(--color);
  font-family: "Inter", sans-serif;
  font-weight: var(--fontWeight);
  font-size: var(--fontSize);
  font-style: normal;
}

.button:hover {
  background: var(--hoverBgColor);
  color: var(--colorHover);
  border-color: var(--hoverBorderColor);
}
</style>
