<template>
  <NuxtLink :to="to || href" class="link" :style="varStyle">
    <slot />
  </NuxtLink>
</template>
<script>
export default {
  name: "InternalLink",
  props: {
    to: {
      type: Object,
      default: () => {},
    },
    href: {
      type: String,
      default: "#",
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
    hoverColor: {
      type: String,
      default: "#333",
    },
    fontFamily: {
      type: String,
      default: "sans-serif",
    },
    decoration: {
      type: String,
      default: "none",
    },
  },
  computed: {
    varStyle() {
      return {
        "--fontSize": this.fontSize,
        "--fontWeight": this.fontWeight,
        "--color": this.color,
        "--fontFamily": this.fontFamily,
        "--decoration": this.decoration,
        "--hoverColor": this.hoverColor,
      };
    },
  },
};
</script>

<style scoped>
.link {
  font-family: var(--fontFamily);
  font-size: var(--fontSize);
  color: var(--color);
  font-weight: var(--fontWeight);
  text-decoration: var(--decoration);
}

.link:hover {
  color: var(--hoverColor);
  text-decoration: var(--decoration);
}
</style>
