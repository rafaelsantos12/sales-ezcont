<template>
  <div class="wrapper-card-advantage">
    <div class="icon">
      <AtomIconSVG :name="iconName" color="var(--dark100)" />
    </div>
    <div class="wrapper-text">
      <AtomTitle
        font-family="Poppins"
        font-size="var(--fontSizeTitleH7)"
        color="var(--light1100)"
        line-height="140%"
        font-weight="500"
        class="title"
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
.wrapper-card-advantage {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 64px 32px 32px;
  border: 1px solid var(--dark200);
  border-radius: 20px;
  position: relative;
  max-width: 332px;
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
  border: 6px solid var(--primary1000);
  align-items: center;
  display: flex;
  justify-content: center;
  left: 30px;
  top: -24px;
  background: var(--primary600);
}

@media (max-width: 768px) {
  .wrapper-card-advantage {
    min-width: 262px;
    padding: 50px 24px 24px;
  }

  .title{
    font-size: 20px !important;
  }
}
</style>
