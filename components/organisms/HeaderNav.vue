<template>
  <div class="header-nav">
    <div class="container">
      <div class="wrapper-menu">
        <AtomImageCustom
          src="/images/logotipo.svg"
          alt="Logotipo"
          width="106px"
          class="image-logo"
          @click.native="$router.push('/')"
        />
        <ul class="nav-list">
          <li
            v-for="(item, index) in itens"
            :key="index"
            class="nav-item"
            :class="{ active: item.to === selected }"
          >
            <NuxtLink class="nav-link" :to="item.to">
              <div class="nav-title">
                <span>{{ item.title }}</span>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="wrapper-actions">
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
      </div>

      <div class="button-mobile">
        <AtomIcon
          name="menu"
          color="var(--light1100)"
          cursor="pointer"
          @click.native="$emit('clickMenuMobile')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { scrollToElement } from "@/static/utils";
export default {
  name: "HeaderNav",
  props: {
    selected: {
      type: String,
      default: "",
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
    };
  },

  methods: {
    ...mapMutations("form", ["setShowForm"]),
    click(item) {
      this.$nextTick(() => {
        const firstErroMessageEl = this.$el.querySelector("item.to");
        scrollToElement(firstErroMessageEl);
      });
    },

    app() {
      window.open("https://app.ezcont.com.br/login", "_blank");
    },
  },
};
</script>

<style scoped>
.header-nav {
  z-index: 999;
  position: fixed;
  border-bottom: 1px solid var(--dark100);
  background: var(--dark0);
  align-items: center;
  width: 100%;
}

.container {
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 112px;
  height: 95px;
}

.wrapper-menu {
  display: flex;
  gap: 128px;
}

.nav-list {
  display: flex;
  flex-flow: wrap;
  gap: 24px min(50px, 3vw);
}

.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-item span {
  font-size: var(--fontSizeTextP5);
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: var(--dark700);
  cursor: pointer;
}

.nav-item.active {
  font-size: var(--fontSizeTextP5);
  font-weight: 500;
  cursor: pointer;
}

.nav-item.active span,
.nav-item:hover span {
  color: var(--light1100);
}

.nav-link {
  display: flex;
  flex-direction: column;
}

.wrapper-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.image-logo {
  cursor: pointer;
}

.wrapper-actions-mobile {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: 16px;
}

.button-mobile {
  display: none;
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

  .container {
    padding: 0 32px;
  }
}
</style>
