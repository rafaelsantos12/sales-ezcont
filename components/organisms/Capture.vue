<template>
  <section
    class="section-capture"
    :class="{
      'show-effect': isShowEffect,
    }"
  >
    <div class="wrapper-container">
      <div class="wrapper-left">
        <div class="wrapper-text-button">
          <div class="wrapper-contact">
            <MoleculeLineText text="CONTATO" />
            <div class="button-close mobile">
              <AtomButton
                width="48px"
                height="48px"
                bg-color="var(--light900)"
                hover-bg-color="var(--light900)"
                color="var(--dark400)"
                border-radius="100px"
                font-size="var(--fontSizeTitleH6)"
                @click="setShowForm(false)"
              >
                <AtomIcon name="close" cursor="pointer" />
              </AtomButton>
            </div>
          </div>

          <div class="wrapper-text">
            <AtomTitle
              font-family="Poppins"
              font-size="var(--fontSizeTitleH6)"
              color="var(--dark100)"
              line-height="140%"
              font-weight="500"
              class="title"
            >
              Contrate agora e transforme a sua rotina financeira.
            </AtomTitle>
            <AtomParagraph
              font-family="Inter, sans-serif"
              type="text-p3"
              color="var(--dark500)"
              line-height="140%"
              font-weight="400"
              class="description"
            >
              Preencha o formulário e escolha a solução ideal para o seu
              negócio. Um de nossos especialistas entrará em contato!
            </AtomParagraph>
          </div>
        </div>
        <MoleculeComment
          img="/images/avatar.svg"
          comment="Lorem ipsum dolor sit amet, 
          cons ectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore 
          et dolore magna  "
          name="Marcos André Vória"
          profile="CEO da WebOnline"
          class="comment-capture"
        />
      </div>
      <div class="wrapper-right">
        <div class="button-close close-desktop">
          <AtomButton
            width="48px"
            height="48px"
            bg-color="var(--light900)"
            hover-bg-color="var(--light900)"
            color="var(--dark400)"
            border-radius="100px"
            font-size="var(--fontSizeTitleH6)"
            @click="setShowForm(false)"
          >
            <AtomIcon name="close" cursor="pointer" />
          </AtomButton>
        </div>
        <AtomTitle
          font-family="Poppins"
          font-size="var(--fontSizeTitleH7)"
          color="var(--dark100)"
          line-height="140%"
          font-weight="500"
        >
          Preencha seus dados abaixo
        </AtomTitle>

        <div class="wrapper-form">
          <AtomSelect
            label="Plano de interesse"
            :options="['Iniciante', 'Profissional', 'Avançado', 'Premium']"
          />
          <AtomInput label="Nome" type="text" />
          <div class="wrapper-email-tel">
            <AtomInput label="Email" type="email" />
            <AtomInput label="Telefone" type="tel" />
          </div>
          <AtomSelect
            label="Onde os conheceu"
            :options="['Iniciante', 'Profissional', 'Avançado', 'Premium']"
          />

          <div class="wrapper-check">
            <input id="vehicle1" type="checkbox" name="vehicle1" value="Bike" />
            <AtomParagraph
              font-family="Inter, sans-serif"
              type="text-p5"
              color="var(--dark500)"
              line-height="140%"
              font-weight="400"
            >
              Eu declaro que li e concordo com os <a>termos de uso</a>.
            </AtomParagraph>
          </div>
        </div>

        <AtomButton
          border-radius="100px"
          bg-color="var(--primary600)"
          color="var(--light1100)"
          color-hover="var(--light1100)"
          font-size="var(--fontSizeTextP5)"
          font-weight="500"
          height="48px"
          border-color="var(--primary600)"
          hover-border-color="var(--primary900)"
          hover-bg-color="var(--primary900)"
        >
          Quero começar agora
        </AtomButton>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "OrganismCapture",
  data() {
    return {
      isShowEffect: this.showForm,
      show: this.showForm,
    };
  },
  computed: {
    ...mapGetters("form", ["showForm"]),
  },
  watch: {
    showForm(value) {
      this.isShowEffect = value;
      this.show = value;
    },
  },
  methods: {
    ...mapMutations("form", ["setShowForm"]),
  },
};
</script>

<style scoped>
.section-capture {
  position: relative;
  position: absolute;
  margin: 0 auto;
  height: 705px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  z-index: 999;
  position: fixed;
  bottom: 0;
  transform: translateY(200%);
  width: 100%;
  transition: box-shadow 1s, transform 1s;
}

.section-capture.show-effect {
  transform: translateY(0);
  transition: box-shadow 1s, transform 1s;
}

.section-capture::before {
  background: #000000;
  content: "";
  height: 100%;
  left: 0;
  opacity: 0.75;
  position: absolute;
  top: 0;
  transition: opacity 1s;
  width: 100%;
}

.wrapper-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin: 0 auto;
  bottom: 0;
  position: absolute;
}

.wrapper-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 80px 108px 65px 112px;
  background: var(--light1000);
  border-top-left-radius: 40px;
}

.wrapper-right {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 80px 108px 65px 112px;
  background: var(--light1100);
  border-top-right-radius: 40px;
}

.wrapper-text-button {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.wrapper-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.wrapper-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.wrapper-email-tel {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.wrapper-check {
  display: flex;
  flex-direction: row;
  gap: 16px;
}

.button-close {
  display: flex;
  justify-content: flex-end;
}

.wrapper-contact {
  display: flex;
  justify-content: space-between;
}

.button-close.mobile {
  display: none;
}

@media (max-width: 768px) {
  .comment-capture {
    display: none !important;
  }

  .wrapper-left {
    padding: 48px 32px;
    border-top-right-radius: 20px;
  }

  .title {
    font-size: 24px !important;
  }

  .description {
    font-size: 18px !important;
  }

  .wrapper-right {
    padding: 48px 32px;
    border-top-right-radius: 0px;
  }

  .button-close.mobile {
    display: block;
  }

  .wrapper-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .close-desktop {
    display: none !important;
  }
}
</style>
