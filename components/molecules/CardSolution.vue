<template>
  <div class="wrapper-card-solution">
    <div class="icon">
      <AtomIconSVG :name="iconName" color="var(--dark100)" />
    </div>
    <div class="wrapper-text">
      <AtomTitle
        font-family="Poppins"
        font-size="var(--fontSizeTitleH7)"
        color="var(--dark100)"
        line-height="140%"
        font-weight="500"
      >
        {{ title }}
      </AtomTitle>
      <AtomParagraph
        color="var(--dark500)"
        type="text-p4"
        font-family="Inter, sans-serif"
        font-weight="400"
        class="description"
      >
        {{ description }}
      </AtomParagraph>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardSolution",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    description: {
      type: String,
      default: "Description",
    },
    iconName: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.wrapper-card-solution {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px 32px 32px 64px;
  border: 1px solid var(--light900);
  border-radius: 20px;
  position: relative;
}

.wrapper-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.icon {
  position: absolute;
  width: 54px;
  height: 54px;
  border-radius: 100px;
  border: 6px solid var(--primary100);
  align-items: center;
  display: flex;
  justify-content: center;
  left: -24px;
  background: var(--light1100);
}
</style>
