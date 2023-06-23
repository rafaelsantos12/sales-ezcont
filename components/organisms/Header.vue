<template>
  <section class="section-header">
    <div class="wrapper-header">
      <div class="wrapper-image">
        <AtomImageCustom src="/images/model.png" width="100%" height="100%" />
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
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrganismHeader",
};
</script>

<style scoped>
.section-header {
  width: 100%;
  background-color: var(--dark0);
  padding: 0 112px;
}

.wrapper-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 206px 0 0;
  max-width: 1200px;
  margin: 0 auto;
  gap: 110px;
}

.wrapper-text {
  display: flex;
  flex-direction: column;
  gap: 56px;
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
}

.wrapper-image {
  margin-bottom: -10px;
}
</style>
