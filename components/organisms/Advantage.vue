<template>
  <section id="vantagens" class="section-advantage">
    <div class="wrapper-container">
      <div class="wrapper-text">
        <div class="top-advantage">
          <MoleculeLineText text="VANTAGENS" />
          <div class="wrapper-text-advantage">
            <AtomTitle
              font-family="Poppins"
              font-size="var(--fontSizeTitleH6)"
              color="var(--light1100)"
              line-height="140%"
              font-weight="500"
            >
              Diversas vantagens que simplificam a burocracia financeira!
            </AtomTitle>
            <AtomParagraph
              font-family="Inter, sans-serif"
              type="text-p3"
              color="var(--dark500)"
              line-height="140%"
              font-weight="400"
            >
              Soluções que simplificam a rotina financeira com praticidade e
              segurança.
            </AtomParagraph>
          </div>
        </div>
        <MoleculeButtonCustom
          text="Falar com especialista"
          icon="arrow-top-right"
        />
      </div>
      <div class="wrapper-cards">
        <div class="cards">
          <MoleculeCardAdvantage
            title="Empreendedores"
            description="Desenvolvido para negócios 
            digitais que desejam otimizar as finanças 
            e simplificar processos."
            icon-name="money-white"
          />
          <MoleculeCardAdvantage
            title="De qualquer lugar"
            description="Liberdade para gerenciar sua 
            contabilidade de qualquer lugar do Brasil."
            icon-name="settings-white"
          />
        </div>
        <div class="cards">
          <MoleculeCardAdvantage
            title="Assessoria"
            description="Orientação especializada em 
            soluções contábeis para o seu sucesso."
            icon-name="group-chat"
          />
          <MoleculeCardAdvantage
            title="Suporte"
            description="Uma nova experiência de 
            contabilidade: humanizada, especializada
            e ágil."
            icon-name="info-white"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrganismAdvantage",
};
</script>

<style scoped>
.section-advantage {
  width: 100%;
  background-color: var(--dark0);
  padding: 120px 112px 80px;
}

.wrapper-container {
  display: grid;
  grid-template-columns: 384px 696px;
  grid-template-rows: auto;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
}

.top-advantage {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.wrapper-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.wrapper-text-advantage {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.wrapper-cards {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.cards {
  display: flex;
  gap: 32px;
}
</style>
