<template>
  <section class="section-capture">
    <div class="wrapper-container">
      <div class="wrapper-left">
        <div class="wrapper-text-button">
          <MoleculeLineText text="CONTATO" />
          <div class="wrapper-text">
            <AtomTitle
              font-family="Poppins"
              font-size="var(--fontSizeTitleH6)"
              color="var(--dark100)"
              line-height="140%"
              font-weight="500"
            >
              Contrate agora e transforme a sua rotina financeira.
            </AtomTitle>
            <AtomParagraph
              font-family="Inter, sans-serif"
              type="text-p3"
              color="var(--dark500)"
              line-height="140%"
              font-weight="400"
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
        />
      </div>
      <div class="wrapper-right"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrganismCapture",
};
</script>

<style scoped>
.section-capture {
  position: relative;
  background-color: var(--dark0);
  padding: 80px 112px 80px;
}

.wrapper-container {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  max-width: 1200px;
  margin: 0 auto;
}

.wrapper-left {
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--light1000);
}

.wrapper-text-button {
  display: flex;
  flex-direction: column;
  gap: 87px;
}

.wrapper-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
