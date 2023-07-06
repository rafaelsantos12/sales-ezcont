<template>
  <div id="dropdown-wrapper" class="dropdown-wrapper" tabindex="1">
    <span>{{ value }}</span>
    <ul class="dropdown-list">
      <li v-for="(option, index) in options" :key="index">
        <a href="#">{{ option }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AtomSelect",
  props: {
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      value: this.label,
    };
  },
  mounted() {
    const dd = document.querySelector("#dropdown-wrapper");
    const links = document.querySelectorAll(".dropdown-list a");

    dd.addEventListener("click", function () {
      console.log("click");
      this.classList.toggle("is-active");
    });

    links.forEach((element) => {
      element.addEventListener("click", function (evt) {
        this.value = evt.currentTarget.textContent;
      });
    });
  },
};
</script>

<style scoped>
.dropdown-wrapper {
  position: relative;
  padding: 15px 10px 10px 10px;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #dcdcf0;
  outline: none;
  transition: all 0.3s ease-out;
  height: 56px;
}
.dropdown-wrapper:after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  top: 50%;
  right: 15px;
  margin-top: -3px;
  border-width: 6px 6px 0 6px;
  border-style: solid;
  border-color: #657080 transparent;
}
.dropdown-wrapper.is-active {
  border-radius: 5px 5px 0 0;
  background: #dcdcf0;
  box-shadow: none;
  border-bottom: none;
  color: white;
}
.dropdown-wrapper.is-active:after {
  border-color: #ffffff transparent;
  transform: rotate(180deg);
}
.dropdown-wrapper.is-active .dropdown-list {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  max-height: 400px;
}

.dropdown-list {
  /* Size & position */
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  /* Styles */
  background: #fff;
  border-radius: 0 0 5px 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-top: none;
  border-bottom: none;
  list-style: none;
  transition: all 0.3s ease-out;
  /* Hiding */
  max-height: 0;
  overflow: hidden;
  z-index: 99;
}
.dropdown-list li {
  padding: 0 10px;
}
.dropdown-list li:hover a {
  color: var(--primary900);
}
.dropdown-list li:last-of-type a {
  border: none;
}
.dropdown-list a {
  display: block;
  text-decoration: none;
  color: #657080;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding: 10px 0;
  transition: all 0.3s ease-out;
  border-bottom: 1px solid #e6e8ea;
}

span {
  color: #657080;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
}
</style>
