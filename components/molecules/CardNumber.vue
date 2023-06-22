<template>
  <div class="wrapper-card">
    <div class="wrapper-title">
      <AtomTitle
        font-size="var(--fontSizeTitleH4)"
        font-weight="500"
        color="var(--dark400)"
        class="characteristics"
        font-family="Poppins, sans-serif"
      >
        <AtomTitle
          font-size="var(--fontSizeTitleH4)"
          font-weight="500"
          color="var(--primary600)"
          font-family="Poppins, sans-serif"
        >
          +
        </AtomTitle>
        <span>{{ value }}</span>
      </AtomTitle>
      <AtomParagraph
        color="var(--dark500)"
        type="text-p3"
        font-family="Inter, sans-serif"
        font-weight="400"
        class="description"
      >
        {{ description }}
      </AtomParagraph>
    </div>
    <AtomLineDivision color="var(--light900)" />
  </div>
</template>

<script>
export default {
  name: "MoleculeCardNumber",
  props: {
    value: {
      type: String,
      default: "0000",
    },
    description: {
      type: String,
      default: "Description",
    },
    icon: {
      type: String,
      default: "math-plus",
    },
  },
};
</script>

<style scoped>
.wrapper-card {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 384px;
}

.wrapper-title {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.characteristics {
  display: flex;
}

@media (max-width: 768px) {
  .about-title {
    text-align: center !important;
  }

  .characteristics {
    justify-content: center;
  }

  .description {
    text-align: center !important;
  }
}
</style>
