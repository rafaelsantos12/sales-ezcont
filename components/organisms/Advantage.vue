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
          class="button-advantage-desktop"
          @click="setShowForm(true)"
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
            class="card-advantage-desktop"
          />
           <MoleculeCardAdvantage
            title="Empreendedores"
            description="Desenvolvido para negócios 
            digitais que desejam simplificar seus 
            processos."
            icon-name="money-white"
            class="card-advantage-mobile"
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
      <MoleculeButtonCustom
          text="Falar com especialista"
          icon="arrow-top-right"
          class="button-advantage-mobile"
          @click="setShowForm(true)"
      />
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "OrganismAdvantage",
  methods: {
    ...mapMutations("form", ["setShowForm"]),
  },
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
  max-width: 1216px;
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

.button-advantage-mobile{
  display: none;
}

.card-advantage-mobile{
  display: none !important;
}

@media (max-width: 1199.98px) {
  .section-advantage {
    padding: 120px 80px 80px;
  }

  .wrapper-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 40px;
  }

  .wrapper-text {
    gap: 40px;
  }

  .wrapper-cards {
    gap: 40px;
  }
}

@media (max-width: 767.98px) {
  .section-advantage {
    padding: 120px 32px 80px;
  }

  .wrapper-container {
    grid-template-columns: auto;
  }

  .button-advantage-desktop{
    display: none;
  }

  .button-advantage-mobile{
    display: block;
  }

  .wrapper-cards{
    overflow: hidden;
    overflow-x: scroll;
    flex-direction: row;
    padding-bottom: 30px;
  }

  .cards {
    padding-top: 25px;
  }

  .card-advantage-mobile{
    display: block !important;
  }

  .card-advantage-desktop{
    display: none !important;
  }

}
</style>
