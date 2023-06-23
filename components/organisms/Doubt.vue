<template>
  <section id="duvidas" class="wrapper-case">
    <div class="wrapper-main">
      <div class="wrapper-left">
        <div class="wrapper-text-button">
          <MoleculeLineText text="DÚVIDAS" />
          <div class="wrapper-text">
            <AtomTitle
              font-family="Poppins"
              font-size="var(--fontSizeTitleH6)"
              color="var(--dark100)"
              line-height="140%"
              font-weight="500"
            >
              Ficou alguma dúvida?
            </AtomTitle>
            <AtomParagraph
              font-family="Inter, sans-serif"
              type="text-p3"
              color="var(--dark500)"
              line-height="140%"
              font-weight="400"
            >
              Confira nossa seção de Perguntas Frequentes e encontre as
              respostas que precisa para aproveitar ao máximo as soluções da
              EzCont!
            </AtomParagraph>
          </div>
        </div>
        <MoleculeButtonCustom
          text="Fale com a gente"
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
      <div class="wrapper-right">
        <MoleculeAccordion
          v-for="(item, index) in listFaq"
          :key="index"
          :label="item.title"
        >
          <AtomParagraph
            type="text-p3"
            font-weight="400"
            line-height="28.8px"
            color="var(--dark500)"
            font-family="Inter, sans-serif"
          >
            {{ item.text }}
          </AtomParagraph>
        </MoleculeAccordion>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrganismDoubt",
  data() {
    return {
      listFaq: [
        {
          title: "O que é a EzCont?",
          text: "A EzCont é uma plataforma de contabilidade digital que oferece soluções completas para facilitar a gestão financeira da sua empresa para que você não precise utilizar aquele modelo ultrapassado de contabilidade tradicional.  ",
        },
        {
          title: "Quais vantagens de ser cliente EzCont?",
          text: "Nossa plataforma foi desenvolvida para simplificar todos os processos contábeis, desde a abertura da empresa até a emissão de notas fiscais e relatórios. Tudo é feito de forma intuitiva, descomplicada e segura.",
        },
        {
          title: " A EzCont atende somente empresas?",
          text: "Sim! Você pode personalizar, programar e disparar mensagens ilimitadas para os seus leads de forma automática e super rápida.",
        },
        {
          title: "Meu computador precisa estar ligado 24h?",
          text: "Não. Além de atender empresas, a EzCont tem como foco negócios e empreendedores digitais. Temos diversas soluções contábeis que automatizam processos e simplificam a burocracia de quem empreende online.",
        },
        {
          title: "Quanto o valor do serviço de contabilidade da EzCont?",
          text: "O custo do serviço de contabilidade da EzCont varia de acordo com o plano escolhido e as necessidades específicas do seu negócio.",
        },
        {
          title:
            "O que acontece se eu precisar de suporte ou tiver alguma dúvida?",
          text: "Oferecemos suporte completo. Se você tiver alguma dúvida ou precisar de assistência, nossa equipe de especialistas estará pronta para ajudá-lo via chat, e-mail ou telefone.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper-case {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 120px 0;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.wrapper-main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.wrapper-left {
  display: flex;
  gap: 75px;
  flex-direction: column;
  max-width: 384px;
  position: sticky;
  height: 0;
  top: 150px;
  margin-bottom: 388px;
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

.wrapper-right {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.button-mobile {
  display: none !important;
}

@media (max-width: 1024px) {
  .wrapper-case {
    padding: 120px 32px;
  }

  .wrapper-main {
    flex-direction: column;
    gap: 32px;
  }

  .wrapper-left {
    position: relative;
    top: 0;
  }

  .button-mobile {
    display: flex !important;
  }

  .button-desk {
    display: none !important;
  }

  .wrapper-left {
    margin-bottom: 250px;
  }
}
</style>
