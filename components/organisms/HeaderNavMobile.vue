<template>
  <div
    class="header-nav-mobile"
    :class="{ show: activeMenuMobile }"
    @click="clickCloseModal"
  >
    <div class="wrapper-content">
      <div class="menu-header">
        <AtomIcon
          name="close"
          color="var(--light1100)"
          cursor="pointer"
          class="close-menu"
        />
      </div>
      <div class="menu-mobile">
        <ul class="nav-list-mobile">
          <li
            v-for="(item, index) in itens"
            :key="index"
            class="nav-item-mobile"
            :class="{ active: item.to === selected }"
          >
            <NuxtLink class="nav-link-mobile" :to="item.to">
              <div class="nav-title-mobile">
                <span>{{ item.title }}</span>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <div class="wrapper-actions-mobile">
          <AtomButton
            border-radius="100px"
            bg-color="var(--primary600)"
            color="var(--light1100)"
            color-hover="var(--light1100)"
            font-size="var(--fontSizeTextP5)"
            font-weight="500"
            height="48px"
            min-width="176px"
            border-color="var(--dark200)"
            hover-border-color="var(--primary900)"
            hover-bg-color="var(--primary900)"
            @click="setShowForm(true)"
          >
            Fale com a gente
          </AtomButton>
          <AtomButton
            border-radius="100px"
            bg-color="transparent"
            color="var(--light1100)"
            font-size="var(--fontSizeTextP5)"
            font-weight="500"
            height="48px"
            min-width="103px"
            border-color="var(--dark200)"
            hover-border-color="var(--dark300)"
            color-hover="var(--light1100)"
            hover-bg-color="var(--dark300)"
            @click="app"
          >
            Acessar
          </AtomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNavMobile",
  props: {
    selected: {
      type: String,
      default: "",
    },
    activeMobile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      itens: [
        {
          title: "Soluções",
          to: "#solucoes",
        },
        {
          title: "Como funciona",
          to: "#como-funciona",
        },
        {
          title: "Vantagens",
          to: "#vantagens",
        },
        {
          title: "Planos",
          to: "#planos",
        },
        {
          title: "Dúvidas",
          to: "#duvidas",
        },
      ],
      activeMenuMobile: this.activeMobile,
    };
  },
  watch: {
    activeMobile() {
      this.activeMenuMobile = this.activeMobile;
    },
  },
  mounted() {
    this.activeMenuMobile = this.activeMobile;
  },
  methods: {
    clickCloseModal() {
      this.activeMenuMobile = false;
      this.$emit("clickCloseModal");
    },
  },
};
</script>

<style scoped>
.header-nav-mobile {
  z-index: 999;
  position: fixed;
  height: 100%;
  border-bottom: 1px solid var(--dark100);
  background: var(--dark0);
  align-items: center;
  width: min(90%, 290px);
  right: 0;
  transform: translateX(100%);
  transition: box-shadow 1s, transform 1s;
  border-bottom-left-radius: 40px;
  border-top-left-radius: 40px;
}

.header-nav-mobile.show {
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
  transform: translateX(0);
  transition: background-color 0.5s, box-shadow 1s, transform 1s;
}

.container {
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 112px;
  height: 90px;
}

.nav-title-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 66px;
  height: 32px;
  padding: 0 0 0 32px;
}

.menu-header {
  display: flex;
  padding: 44px 32px 20px 32px;
  justify-content: flex-end;
}

.wrapper-menu {
  display: flex;
  gap: 78px;
}

.nav-list-mobile {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-item-mobile span {
  font-size: var(--fontSizeTextP2);
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: var(--light900);
  cursor: pointer;
}

.nav-item-mobile.active {
  font-size: var(--fontSizeTextP5);
  font-weight: 500;
  border-left: 4px solid var(--primary800);
  cursor: pointer;
}

.nav-item-mobile.active span,
.nav-item-mobile:hover span {
  color: var(--light1100);
}

.nav-link {
  display: flex;
  flex-direction: column;
}

.nav-item:hover,
.nav-item.active {
  border-bottom: 2px solid var(--primary800);
}

.wrapper-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.image-logo {
  cursor: pointer;
}

.button-mobile {
  display: none;
}

.menu-mobile {
  display: flex;
  flex-direction: column;
  background: var(--dark0);
  height: 100%;
  position: sticky;
  align-items: left;
  padding: 56px 32px 0 0;
  gap: 10rem;
}

.wrapper-actions-mobile {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: 16px;
  padding: 0 0 0 32px;
}

.close-menu {
  background: #152031;
  padding: 12px;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .nav-list {
    display: none;
  }

  .wrapper-actions {
    display: none;
  }

  .button-mobile {
    display: flex;
    align-items: center;
  }

  .menu-mobile {
    display: flex;
  }
}
</style>
