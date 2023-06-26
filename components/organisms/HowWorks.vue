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
        >
          Quem utiliza a EzCont, confia e recomenda!
        </AtomTitle>

        <div class="comment">
          <MoleculeComment
            img="/images/avatar.svg"
            comment="Lorem ipsum dolor sit amet, 
            cons ectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore 
            et dolore magna "
            name="Marcos André Vória"
            profile="CEO da WebOnline"
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
          @click="setShowForm(true)"
        />
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
          src="https://www.youtube.com/embed/7e90gBu4pas"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "HowWorks",
  methods: {
    ...mapMutations(["setShowForm"]),
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
  gap: 136px;
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
  }
}
</style>
