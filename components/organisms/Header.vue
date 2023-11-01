<template>
  <section class="section-header">
    <div class="wrapper-header">
      <div class="wrapper-image">
        <AtomImageCustom
          src="/images/model.png"
          class="image-header"
        />
      </div>
      <div class="wrapper-text">
        <div class="text-header">
          <div class="wrapper-title">
            <MoleculeLineText text="EzCont" />
            <AtomTitle
              font-family="Poppins"
              font-size="var(--fontSizeTitleH3)"
              color="var(--light1100)"
              line-height="140%"
              class="title-header"
              font-weight="500"
            >
              Contabilidade digital para produtores, afiliados e negócios
              digitais!
            </AtomTitle>
          </div>
          <AtomParagraph
            font-family="Inter, sans-serif"
            type="text-p3"
            color="var(--dark500)"
            line-height="160%"
            font-weight="400"
          >
            Ideal para empreendedores digitais que desejam otimizar suas
            finanças e simplificar a burocracia com segurança, rapidez e
            facilidade.
          </AtomParagraph>
        </div>
        <MoleculeButtonCustom
          text="Quero começar agora"
          icon="arrow-top-right"
          @click="plan"
        />
      </div>
    </div>
    <div class="gradient"></div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "OrganismHeader",
  methods: {
    ...mapMutations("form", ["setShowForm"]),
    plan() {
      const messageErrorEl = this.$nuxt.$el.querySelector('#planos');
        this.$nextTick(() => {
            messageErrorEl.scrollIntoView({
                block: "start",
                behavior: "smooth",
            });
        });
    },
  },
};
</script>

<style scoped>
.section-header {
  width: 100%;
  background-color: var(--dark0);
  padding: 0 112px;
  background-image: url("/images/bg-header.png");
  background-repeat: no-repeat;
  background-position: right;
  background-position: 0 100%;
  background-size: 64%;
  position: relative;
}

.wrapper-header {
  display: grid;
  grid-template-columns: auto 700px;
  padding: 206px 0 0;
  max-width: 1216px;
  margin: 0 auto;
}

.gradient {
  z-index: 1;
  background: linear-gradient(#0e151f00, #0e151f);
  min-height: 417px;
  min-width: 100%;
  position: absolute;
  z-index: 1;
  margin-top: -417px;
  margin-left: -112px;
}

.wrapper-text {
  display: flex;
  flex-direction: column;
  gap: 56px;
  z-index: 2;
}

.wrapper-title {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.text-header {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
}

.wrapper-image {
  margin-bottom: -10px;
}

.image-header {
  margin-left: -65px;
  width: auto !important;
}

@media (max-width: 1199.98px) {
  .wrapper-header {
    display: flex;
  }

  .title-header {
    font-size: 30px !important;
  }

  .image-header {
    margin-left: 0px;
    margin-top: 56px;
    max-width: 400px
  }
}

@media (max-width: 991.98px) {
  .section-header {
    padding: 0 56px;
  }
}

@media (max-width: 767.98px) {
  .section-header {
    padding: 0 32px;
  }

  .image-header{
    width: 100% !important;
  }

  .wrapper-header {
    display: flex;
    flex-direction: column-reverse;
    padding: 160px 0 0;
  }

  .title-header {
    font-size: var(--fontSizeTitleH6) !important;
  }

  .gradient {
    margin-left: 0;
    min-width: 90%;
    margin-top: -300px;
  }
}
</style>
