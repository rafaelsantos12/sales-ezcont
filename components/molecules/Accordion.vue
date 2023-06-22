<template>
  <div class="accordion" :class="{ isOpen: accIsOpen }" :style="cssVars">
    <div class="accordion-label" @click="toggleIsOpen">
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
          class="icon"
          cursor="pointer"
          :class="{ active: accIsOpen }"
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
    isOpen: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      accIsOpen: this.isOpen,
    };
  },
  computed: {
    cssVars() {
      return {
        "--zIndex": this.zIndex,
      };
    },
  },
  methods: {
    toggleIsOpen() {
      this.accIsOpen = !this.accIsOpen;
    },
  },
};
</script>

<style scoped>
.accordion {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  z-index: var(--zIndex);
  max-width: 696px;
  border: 1px solid var(--light900);
  border-radius: 20px;
}

.icon {
  position: absolute;
  right: 0px;
  top: 0px;
  transition: transform 500ms;
  transform: rotate(-90deg);
}

.active {
  transform: rotate(0deg);
}

.accordion-label {
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
  animation: closeAccordion 1s forwards;
}
@keyframes closeAccordion {
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

.isOpen {
  background-color: #f9f9f9;
  border-bottom: 0px;
  gap: 32px;
}

.accordion.isOpen .accordion-content {
  margin: 15px 0;
  transition: margin 1s;
  animation: openAccordion 3s forwards;
}
@keyframes openAccordion {
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

@media (max-width: 768px) {
  .accordion {
    padding: 20px;
  }

  .accordion-label {
    gap: 5px;
  }
}
</style>
