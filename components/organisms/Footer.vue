<template>
  <section class="section-footer">
    <div class="wrapper-info">
      <div class="wrapper-text">
        <AtomTitle
          font-family="Poppins"
          font-size="var(--fontSizeTitleH6)"
          color="var(--light1100)"
          line-height="140%"
          font-weight="500"
          text-align="center"
          class="title"
        >
          Passe para o próximo nível<br />
          sendo um cliente EzCont!
        </AtomTitle>
        <AtomParagraph
          font-family="Inter, sans-serif"
          type="text-p3"
          color="var(--light1100)"
          line-height="140%"
          font-weight="400"
          class="paragraph"
        >
          Deixe o modelo contábil ultrapassado de lado e automatize sua rotina
          financeira!
        </AtomParagraph>
      </div>
      <MoleculeButtonCustom
        text="Quero estas soluções"
        icon="arrow-top-right"
        bg-color="var(--dark100)"
        border-color="var(--dark100)"
        hover-bg-color="var(--dark100)"
        background-icon="var(--primary600)"
        background-icon-hover="var(--light1100)"
        color-icon="var(--light1100)"
        hover-border-color="var(--dark100)"
        color-icon-hover="var(--primary600)"
      />
    </div>
    <AtomLineDivision color="var(--dark200)" class="line-division" />
    <div class="wrapper-bottom">
      <AtomParagraph
        color="var(--dark400)"
        type="text-p5"
        font-family="Inter, sans-serif"
        font-weight="300"
      >
        © Copyright 2023. Todos os direitos reservados.
      </AtomParagraph>
      <AtomInternalLink
        target="_blank"
        alt="termos"
        aria-label="termos"
        decoration="underline"
        color="var(--dark400)"
        font-size="var(--fontSizeTextP4)"
        font-family="Inter, sans-serif"
        font-weight="300"
      >
        Termos de Uso e Privacidade
      </AtomInternalLink>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrganismFooter",
};
</script>

<style scoped>
.section-footer {
  background-color: var(--dark100);
  padding: 0px 112px;
  margin: 0 auto;
  position: relative;
  margin-top: 200px;
}

.wrapper-info {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: 80px 208px;
  background: var(--primary600);
  height: 429px;
  border-radius: 20px;
  align-items: center;
  background-image: url("/images/bg-footer.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  top: -200px;
  position: relative;
}

.wrapper-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.wrapper-bottom {
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
  align-items: center;
}

.line-division {
  margin-top: -150px;
}

@media (max-width: 768px) {
  .section-footer {
    padding: 0px 32px;
  }

  .wrapper-info {
    padding: 32px;
    height: auto;
  }

  .title {
    font-size: 24px !important;
  }

  .paragraph {
    font-size: 16px !important;
  }
}
</style>
