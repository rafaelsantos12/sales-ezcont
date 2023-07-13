<template>
  <div class="form-input">
    <div class="wrapper-input" :class="{ 'show-label': showLabel || value }">
      <label class="label-placeholder">
        {{ label }} 
      </label>
      <input
        :type="type"
        :placeholder="placeholder"
        :value="inputValue"
        :name="name"
        class="input"
         required
        :style="varStyle"
        @focus="showLabel = true"
        @focusout="showLabel = false"
        @input="onInput($event)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "AtomInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number, Boolean],
      default: null,
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "56px",
    },
    borderColor: {
      type: String,
      default: "#DCDCF0",
    },
    borderRadius: {
      type: String,
      default: "5px",
    },
    inputPadding: {
      type: String,
      default: "10px",
    },
    color: {
      type: String,
      default: "#8383A4",
    },
  },
  data() {
    return {
      showLabel: false,
      showPassword: false,
      placeholder: this.label,
      inputValue: this.value,
    };
  },
  computed: {
    varStyle() {
      return {
        "--width": this.width,
        "--height": this.height,
        "--borderColor": this.borderColor,
        "--borderRadius": this.borderRadius,
        "--inputPadding": this.inputPadding,
        "--color": this.color,
      };
    },
  },
  watch: {
    value(newValue) {
      this.inputValue = newValue;
    },
  },
  methods: {
    onInput(ev) {
      const value = ev.target.value;
      this.$emit("input", value);
    },
  },
};
</script>
<style scoped>
.form-input {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.input {
  width: var(--width);
  height: var(--height);
  color: var(--color);
  border: 1px solid #ebebf8;
  border-radius: var(--borderRadius);
  padding: var(--inputPadding);
  outline: none;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  font-family: "Gotham Light", sans-serif;
  font-weight: 400;
}
input:focus,
input:focus-visible {
  border-color: #35befd;
  box-shadow: 0px 0px 1px #35befd;
}

input:hover {
  background: #fff;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.wrapper-input {
  position: relative;
  display: flex;
  align-items: center;
}

.label-placeholder {
  border-radius: 500px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  padding: 0 8px;
  position: absolute;
  transform: translate(13px, -50%);
  pointer-events: none;
  color: #8383a4;
  transition: color 0.5s;
  background: #fff;
  animation: anim-hide-label 1s ease forwards;
}
@keyframes anim-hide-label {
  0% {
    top: 0;
    left: 0;
    font-size: var(--fontSizeTextP5);
    opacity: 1;
  }
  50% {
    top: 50%;
    left: -5px;
    font-size: var(--fontSizeTextP5);
    opacity: 1;
  }
  100% {
    top: 50%;
    left: -5px;
    font-size: var(--fontSizeTextP5);
    opacity: 0;
  }
}

.show-label .label-placeholder {
  animation: anim-show-label 0.75s ease forwards;
}
@keyframes anim-show-label {
  from {
    top: 50%;
    left: -5px;
    font-size: var(--fontSizeTextP5);
    opacity: 0;
  }
  to {
    top: 0;
    left: 0;
    font-size: var(--fontSizeTextP5);
    opacity: 1;
  }
}
</style>
