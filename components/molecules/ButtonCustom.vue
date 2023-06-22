<template>
  <div class="wrapper-button">
    <AtomButton
      :style="cssVars"
      border-radius="100px"
      :bg-color="bgColor"
      color="var(--light1100)"
      font-size="var(--fontSizeTextP3)"
      font-weight="500"
      height="68px"
      :border-color="borderColor"
      :hover-border-color="hoverBorderColor"
      color-hover="var(--light1100)"
      :hover-bg-color="hoverBgColor"
      class="button-custom"
    >
      {{ text }}

      <div class="icon-button">
        <i :class="`icon gg-${icon}`"></i>
      </div>
    </AtomButton>
  </div>
</template>

<script>
export default {
  name: "ButtonCustom",
  props: {
    text: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "var(--primary600)",
    },
    borderColor: {
      type: String,
      default: "var(--primary600)",
    },
    hoverBgColor: {
      type: String,
      default: "var(--primary900)",
    },
    hoverBorderColor: {
      type: String,
      default: "var(--primary900)",
    },
    backgroundIcon: {
      type: String,
      default: "var(--light1100)",
    },
    backgroundIconHover: {
      type: String,
      default: "var(--primary600)",
    },
    colorIcon: {
      type: String,
      default: "var(--primary600)",
    },
    colorIconHover: {
      type: String,
      default: "var(--light1100)",
    },
  },

  computed: {
    cssVars() {
      return {
        "--backgroundIcon": this.backgroundIcon,
        "--backgroundIconHover": this.backgroundIconHover,
        "--colorIconHover": this.colorIconHover,
        "--colorIcon": this.colorIcon,
      };
    },
  },
};
</script>

<style scoped>
.wrapper-button {
  width: 312px;
}

.button-custom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 0 0 0 24px;
}

.icon-button {
  color: var(--colorIcon);
  background: var(--backgroundIcon);
  cursor: pointer;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-custom:hover .icon-button {
  background: var(--backgroundIconHover) !important;
  color: var(--colorIconHover) !important;
  transition-delay: 0.1s;
}
</style>
