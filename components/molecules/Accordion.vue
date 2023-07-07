<template>
  <div class="wrapper-accordion" :class="{ 'is-open': isOpen }">
    <div class="accordion-header" @click="clickOpen">
      <AtomTitle
        color="var(--dark100)"
        tag="h3"
        font-weight="500"
        font-family="Inter, sans-serif"
        line-height="28.8px"
        font-size="var(--fontSizeTextP3)"
      >
        {{ label }}
      </AtomTitle>
      <div class="button">
        <AtomIcon
          name="math-minus"
          color="var(--primary600)"
          margin="14px 0 0"
          cursor="pointer"
        />
        <AtomIcon
          name="math-minus"
          color="var(--primary600)"
          margin="14px 0 0"
          class="icon-minus"
          cursor="pointer"
          :class="{ active: isOpen }"
        />
      </div>
    </div>
    <div class="accordion-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "MoleculeAccordion",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    clickOpen() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.wrapper-accordion {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 696px;
  border: 1px solid var(--light900);
  border-radius: 20px;
}

.icon-minus {
  position: absolute;
  right: 0px;
  top: 0px;
  transition: transform 500ms;
  transform: rotate(-90deg);
}

.active {
  transform: rotate(0deg);
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
}

.accordion-content {
  display: flex;
  flex-direction: column;
  margin: 0;
  transition: margin 1s;
  animation: close 1s forwards;
}
.is-open {
  background-color: #f9f9f9;
  border-bottom: 0px;
  gap: 32px;
}

.wrapper-accordion.is-open .accordion-content {
  margin: 15px 0;
  transition: margin 1s;
  animation: open 3s forwards;
}


@keyframes open {
  from {
    overflow: hidden;
    opacity: 0;
    max-height: 0;
  }
  to {
    overflow: visible;
    opacity: 1;
    max-height: 2000px;
  }
}

@keyframes close {
  from {
    overflow: visible;
    opacity: 1;
    max-height: 2000px;
  }
  to {
    overflow: hidden;
    opacity: 0;
    max-height: 0;
  }
}

@media (max-width: 768px) {
  .accordion {
    padding: 20px;
  }

  .accordion-header {
    gap: 5px;
  }
}
</style>
