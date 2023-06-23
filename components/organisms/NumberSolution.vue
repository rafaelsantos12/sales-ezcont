<template>
  <section id="solucoes" class="section-number-solution">
    <div class="wrapper-container">
      <div class="wrapper-number">
        <div class="wrapper-number-text">
          <MoleculeLineText text="NÚMEROS" />
          <div class="wrapper-cards">
            <MoleculeCardNumber
              value="800"
              description="Produtores e afiliados utilizam 
            os nossos serviços de contabilidade digital."
            />
            <MoleculeCardNumber
              value="200"
              description="Especialistas por trás das 
            diversas soluções de contabilidade digital."
            />
            <MoleculeCardNumber
              value="93%"
              description="De problemas financeiros 
            resolvidos com as nossas soluções contábeis."
            />
          </div>
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
      <div class="wrapper-solution">
        <div class="wrapper-text">
          <MoleculeLineText text="SOLUÇÕES" />
          <AtomTitle
            font-family="Poppins"
            font-size="var(--fontSizeTitleH6)"
            color="var(--dark100)"
            line-height="140%"
            font-weight="500"
          >
            Da abertura do CNPJ à eficiência na gestão das suas finanças!
          </AtomTitle>
        </div>
        <div class="wrapper-cards">
          <MoleculeCardSolution
            title="Serviços contábeis"
            description="De impostos a relatórios detalhados, 
            nós cuidamos de toda a burocracia."
            icon-name="calculator"
          />
          <MoleculeCardSolution
            title="Emissão de NF"
            description="Emita facilmente as notas 
            fiscais necessárias para suas transações comerciais."
            icon-name="mail-opened"
          />
          <MoleculeCardSolution
            title="Escritório virtual"
            description="Acesse tudo a qualquer momento e 
            de forma rápida no seu escritório virtual."
            icon-name="iphonex"
          />
          <MoleculeCardSolution
            title="Conciliação bancária"
            description="Evite surpresas financeiras e 
            mantenha suas finanças organizadas."
            icon-name="money"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NumberSolution",
};
</script>

<style scoped>
.section-number-solution {
  width: 100%;
  background-color: var(--light1100);
  padding: 0 112px;
  z-index: 1;
  position: relative;
}

.wrapper-container {
  display: grid;
  grid-template-columns: auto 696px;
  grid-template-rows: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 0 0;
}

.wrapper-number-text,
.wrapper-text {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.wrapper-number {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 50px;
}

.wrapper-solution {
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.wrapper-cards {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
