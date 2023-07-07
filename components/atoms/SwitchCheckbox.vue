<template>
  <div class="switch-checkbox" @click="hasChecked">
    <input :disabled="disabled" type="checkbox" :checked="isChecked" />
    <span class="slider round"></span>
  </div>
</template>

<script>
export default {
  name: "SwitchCheckbox",
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isChecked: false,
    };
  },
  watch: {
    checked(newChecked) {
      this.isChecked = newChecked;
    },
    isChecked(newIsChecked) {
      this.$emit("input", newIsChecked);
    },
  },
  mounted() {
    this.isChecked = this.checked;
  },
  methods: {
    hasChecked() {
      if (this.disabled) return;
      this.isChecked = !this.isChecked;
    },
  },
};
</script>

<style scoped>
.switch-checkbox {
  position: relative;
  display: inline-block;
  min-width: 50px;
  height: 30px;
}

.switch-checkbox input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--dark200);
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 4px;
  bottom: 3px;
  background-color: #ffffff;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--primary600);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--primary600);
}

input:checked + .slider:before {
  transform: translateX(18px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
