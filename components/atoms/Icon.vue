<template>
  <div class="wrapper-icon" :style="varStyle" @click="$emit('click')">
    <i :class="`icon gg-${name}`"></i>
  </div>
</template>

<script>
export default {
  name: "AtomIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 1,
    },
    color: {
      type: String,
      default: "inherit",
    },
    margin: {
      type: String,
      default: "0",
    },
    hoverColor: {
      type: String,
      default: "var(--color)",
    },
    width: {
      type: String,
      default: "auto",
    },
    height: {
      type: String,
      default: "auto",
    },
    background: {
      type: String,
      default: "transparent",
    },
    backgroundHover: {
      type: String,
      default: "transparent",
    },
    cursor: {
      type: String,
      default: "default",
    },
    borderRadius: {
      type: String,
      default: "0",
    },
  },
  computed: {
    varStyle() {
      return {
        "--size": this.size,
        "--color": this.color,
        "--margin": this.margin,
        "--hoverColor": this.hoverColor,
        "--width": this.width,
        "--background": this.background,
        "--cursor": this.cursor,
        "--borderRadius": this.borderRadius,
        "--height": this.height,
        "--backgroundHover": this.backgroundHover,
      };
    },
  },
};
</script>

<style scoped>
.wrapper-icon {
  margin: var(--margin);
  width: var(--width);
  height: var(--height);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background);
  cursor: var(--cursor);
  border-radius: var(--borderRadius);
}
.icon {
  --ggs: var(--size);
  color: var(--color);
}
.wrapper-icon:hover .icon {
  color: var(--hoverColor);
}

.wrapper-icon:hover {
  background: var(--backgroundHover);
}
</style>
