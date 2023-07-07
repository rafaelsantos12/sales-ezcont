<template>
  <div class="wrapper-button" >
    <AtomButton
      :style="varStyle"
      border-radius="100px"
      :bg-color="bgColor"
      color="var(--light1100)"
      font-size="var(--fontSizeTextP3)"
      font-weight="600"
      height="68px"
      :border-color="borderColor"
      :hover-border-color="hoverBorderColor"
      color-hover="var(--light1100)"
      :hover-bg-color="hoverBgColor"
      class="button-custom"
      :class="{'box-shadow': hasShadow}"
      @click="$emit('click')"
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
    hasShadow: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    varStyle() {
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
  justify-content: space-between;
  padding: 8px 8px 8px 24px;
}

.button-custom.box-shadow:hover {
  box-shadow: 0 0 35px 2px rgba(0,0,0,0.24);
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
  transition: 0.5s;
}

.icon {
  zoom: 1.4;
  margin-top: -4px;
  margin-left: 4px;
}

.button-custom:hover .icon-button {
  background: var(--backgroundIconHover) !important;
  color: var(--colorIconHover) !important;
}
</style>
