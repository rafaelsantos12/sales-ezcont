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
          img="/images/avatar-comments/avatar-kelly.png"
          comment="Não sei como eu vivia sem a EzCont! 
          Com a ajuda deles, consigo ter uma visão clara das minhas 
          finanças, emitir notas fiscais com facilidade. "
          name="Kelly Souza"
          profile="Afiliada"
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

        <div class="form" >
          <form action="https://www.rdstation.com.br/api/1.2/conversions" method="POST" class="wrapper-form">
              <input type="hidden" name="token_rdstation" value="21e04d530cda5a7c2567d9426dabcd39" />
              <input type="hidden" name="identificador" value="ezcont-form-oficial" />
              <input type="hidden" name="redirect_to" value="https://ezcont.com.br/obrigado" />
              <AtomSelect id="cf_plano_de_interesse" name="cf_plano_de_interesse">
                <option value="" disabled :selected="optionPlanSelected === null ">Plano de interesse</option>
                <option value="Iniciante" :selected="optionPlanSelected === 'INICIANTE' ">Iniciante</option>
                <option value="Profissional" :selected="optionPlanSelected === 'PROFISSIONAL'">Profissional</option>
                <option value="Avançado" :selected="optionPlanSelected === 'AVANÇADO'">Avançado</option>
                <option value="Premium" :selected="optionPlanSelected === 'PREMIUM'">Premium</option>
              </AtomSelect>

              <AtomInput 
                label="Nome" 
                type="text" 
                name="name" 
                :value="name"
                @input="name = $event"
              />
              <div class="wrapper-email-tel">
                <AtomInput 
                  label="Email" 
                  type="email" 
                  name="email"
                  :value="email"
                  @input="email = $event"
                />
                <AtomInput 
                  label="Telefone" 
                  type="number" 
                  name="telefone" 
                  :value="tel"
                  @input="tel = $event"
                />
              </div>
              <AtomSelect id="cf_onde_nos_conheceu" name="cf_onde_nos_conheceu">
                  <option value="" disabled selected>Onde nos conheceu?</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Indicação">Indicação</option>
                  <option value="Eventos">Eventos</option>
              </AtomSelect>
              <div class="wrapper-check">
                <input id="vehicle1" type="checkbox" name="vehicle1" value="true" />
                <AtomParagraph
                  font-family="Inter, sans-serif"
                  type="text-p5"
                  color="var(--dark500)"
                  line-height="140%"
                  font-weight="400"
                >
                  Eu declaro que li e concordo com os <NuxtLink :to="{ name: 'termos' }" class="link">termos de uso.</NuxtLink>
                </AtomParagraph>
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
                type="submit"
              >
                Quero começar agora
              </AtomButton>
          </form>
        </div>
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
      name: "",
      email: "",
      tel: "",
      plan: "",
      where: "",
      terms: false,
    };
  },
  computed: {
    ...mapGetters("form", ["showForm","planSelected"]),
    optionPlanSelected() {
      return this.planSelected;
    },
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
  height: 100%;
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

.form{
  display: flex;
  flex-direction: column;
  gap: 24px;
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


.link{
  text-decoration: underline;
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
    max-height: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }

  .close-desktop {
    display: none !important;
  }

  .section-capture{
    height: 95%;
  }

  .wrapper-email-tel{
    flex-direction: column;
  }
}
</style>
