<template>
  <section id="como-funciona" class="section-works">
    <div class="wrapper-container">
      <div class="wrapper-comment">
        <AtomTitle
          font-family="Poppins"
          font-size="var(--fontSizeTitleH4)"
          color="var(--dark400)"
          line-height="56px"
          font-weight="500"
          class="title"
        >
          Quem utiliza a EzCont, confia e recomenda!
        </AtomTitle>

        <div class="comment">
          <MoleculeComment
            img="/images/avatar-comments/avatar-gilberto.png"
            comment="Além de ser muito fácil de mexer, 
            hoje consigo controlar meu faturamento, 
            calcular impostos e emitir notas fiscais 
            com agilidade e segurança."
            name="Gilberto Vasconcelos"
            profile="Infoprodutor"
          />
        </div>

        <MoleculeButtonCustom
          text="Garantir agora mesmo"
          icon="arrow-top-right"
          bg-color="var(--dark100)"
          border-color="var(--dark100)"
          hover-bg-color="var(--dark300)"
          background-icon="var(--primary600)"
          background-icon-hover="var(--light1100)"
          color-icon="var(--light1100)"
          hover-border-color="var(--dark300)"
          color-icon-hover="var(--primary600)"
          class="button-garantir-desktop"
          has-shadow
          @click="plan" 
        />

        <AtomLineDivision color="var(--light900)" class="division-work" />
      </div>
      <div class="wrapper-how">
        <div class="top-how">
          <MoleculeLineText text="COMO FUNCIONA" />
          <div class="wrapper-text-how">
            <AtomTitle
              font-family="Poppins"
              font-size="var(--fontSizeTitleH6)"
              color="var(--dark100)"
              line-height="140%"
              font-weight="500"
            >
              Entenda como nossas soluções facilitam sua gestão financeira por
              completo
            </AtomTitle>
            <AtomParagraph
              font-family="Inter, sans-serif"
              type="text-p3"
              color="var(--dark500)"
              line-height="140%"
              font-weight="400"
            >
              Assista o vídeo para saber como a EzCont pode otimizar o seu
              negócio online!
            </AtomParagraph>
          </div>
        </div>

        <MoleculeVideo
          src="https://player.vimeo.com/video/841945112?h=fe4a3b8818&title=0&byline=0&portrait=0"
          width="100%"
          height="100%"
        />
      </div>
      <MoleculeButtonCustom
          text="Garantir agora mesmo"
          icon="arrow-top-right"
          bg-color="var(--dark100)"
          border-color="var(--dark100)"
          hover-bg-color="var(--dark100)"
          background-icon="var(--primary600)"
          background-icon-hover="var(--light1100)"
          color-icon="var(--light1100)"
          hover-border-color="var(--dark100)"
          color-icon-hover="var(--primary600)"
           class="button-garantir-mobile"
          @click="plan"
        />
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "HowWorks",
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
.section-works {
  width: 100%;
  background-color: var(--light1100);
  padding: 0 112px 120px;
}

.wrapper-container {
  display: grid;
  grid-template-columns: 384px 696px;
  justify-content: space-between;
  grid-template-rows: auto;
  max-width: 1200px;
  margin: 0 auto;
}

.wrapper-comment {
  display: flex;
  flex-direction: column;
  gap: 69px;
}

.wrapper-how {
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.wrapper-text-how {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.top-how {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.button-garantir-mobile{
  display: none;
}

.division-work{
  display: none;
}

@media (max-width: 1199.98px) {
  .wrapper-container {
    grid-template-columns: auto;
  }
  .embed-container {
    width: 100%;
  }
}

@media (max-width: 767.98px) {
  .section-works {
    padding: 0 32px 120px;
  }

  .embed-container {
    width: 100%;
  }

  .wrapper-container {
    grid-template-columns: auto;
    gap: 64px;
  }

  .title{
    font-size: 32px !important;
  }

  .wrapper-comment{
    gap: 32px;
  }

  .button-garantir-desktop{
    display: none;
  }

  .button-garantir-mobile{
    display: block;
  }

  .division-work{
    margin-top: 48px;
    display: block;
  }
}
</style>
