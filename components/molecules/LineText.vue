<template>
  <div class="wrapper-line">
    <AtomLineDivision width="20px" height="2px" color="var(--primary800)" />
    <AtomParagraph
      color="var(--dark600)"
      font-family="Inter, sans-serif"
      type="text-p5"
      font-weight="500"
    >
      {{ text }}
    </AtomParagraph>
  </div>
</template>

<script>
export default {
  name: "LineText",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.wrapper-line {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
