<template>
  <section id="planos" class="section-plans">
    <div class="wrapper-container">
      <div class="wrapper-left">
        <div class="wrapper-title">
          <div class="wrapper-text-description">
            <MoleculeLineText text="PLANOS" />
            <div class="wrapper-text">
              <AtomTitle
                font-family="Poppins"
                font-size="var(--fontSizeTitleH6)"
                color="var(--light1100)"
                line-height="140%"
                font-weight="500"
              >
                Planos pensados nas suas necessidades!
              </AtomTitle>
              <AtomParagraph
                font-family="Inter, sans-serif"
                type="text-p3"
                color="var(--dark500)"
                line-height="160%"
                font-weight="400"
              >
                Soluções que vão facilitar o seu dia a dia e transformar as
                finanças do seu negócio!
              </AtomParagraph>
            </div>
          </div>
          <div class="wrapper-checkbox">
            <AtomSwitchCheckbox @input="planYearly = !planYearly" />
            <AtomParagraph
              font-family="Inter, sans-serif"
              type="text-p3"
              color="var(--dark600)"
              line-height="160%"
              font-weight="400"
            >
              Plano anual / <span class="color-green">20% de desconto</span>
            </AtomParagraph>
          </div>
        </div>
        <table class="table">
          <tr v-for="(item, index) in itens" :key="index">
            <td class="table-td">
              <AtomTitle
                font-family="Inter, sans-serif"
                font-size="var(--fontSizeTextP5)"
                color="var(--dark800)"
                line-height="140%"
                font-weight="500"
              >
                {{ item.title }}
              </AtomTitle>
              <AtomIcon v-if="item.info" name="info" color="var(--dark500)" />
            </td>
          </tr>
        </table>
      </div>
      <div class="wrapper-right">
        <div class="wrapper-tabs">
          <AtomButton
            border-radius="100px"
            :bg-color="isAffiliate ? 'var(--dark800)' : 'var(--dark100)'"
            :color="isAffiliate ? 'var(--dark100)' : 'var(--dark600)'"
            :color-hover="isAffiliate ? 'var(--dark100)' : 'var(--dark600)'"
            font-size="var(--fontSizeTextP4)"
            font-weight="600"
            height="40px"
            :border-color="isAffiliate ? 'var(--dark800)' : 'var(--dark100)'"
            :hover-border-color="
              isAffiliate ? 'var(--dark800)' : 'var(--dark200)'
            "
            :hover-bg-color="isAffiliate ? 'var(--dark800)' : 'var(--dark200)'"
            @click="
              isAffiliate = true;
              isProducer = false;
            "
          >
            Sou afiliado
          </AtomButton>
          <AtomButton
            border-radius="100px"
            :bg-color="isProducer ? 'var(--dark800)' : 'var(--dark100)'"
            :color="isProducer ? 'var(--dark100)' : 'var(--dark600)'"
            :color-hover="isProducer ? 'var(--dark100)' : 'var(--dark600)'"
            font-size="var(--fontSizeTextP4)"
            font-weight="600"
            height="40px"
            :border-color="isProducer ? 'var(--dark800)' : 'var(--dark100)'"
            :hover-border-color="
              isProducer ? 'var(--dark800)' : 'var(--dark200)'
            "
            :hover-bg-color="isProducer ? 'var(--dark800)' : 'var(--dark200)'"
            @click="
              isAffiliate = false;
              isProducer = true;
            "
          >
            Sou produtor
          </AtomButton>
        </div>
        <div class="wrapper-plan">
          <div
            v-for="(plan, index) in plans"
            :key="index"
            class="plan"
            :class="{
              'disabled-afiliate': isProducer && plan.for === 'afiliado',
              'disabled-producer': isAffiliate && plan.for === 'produtor',
            }"
          >
            <div class="plan-top" :class="{ tag: plan.tag }">
              <div class="wrapper-text">
                <div v-if="plan.tag" class="tag">
                  <AtomParagraph
                    font-family="Inter, sans-serif"
                    type="text-p5"
                    color="var(--light1100)"
                    line-height="160%"
                    font-weight="400"
                    text-align="center"
                  >
                    Mais popular
                  </AtomParagraph>
                </div>
                <AtomTitle
                  font-family="Inter, sans-serif"
                  font-size="var(--fontSizeTextP4)"
                  color="var(--dark700)"
                  line-height="140%"
                  font-weight="500"
                  text-align="center"
                >
                  {{ plan.type }}
                </AtomTitle>

                <div class="price">
                  <AtomTitle
                    font-family="Inter, sans-serif"
                    font-size="var(--fontSizeTitleH6)"
                    color="var(--light1100)"
                    line-height="140%"
                    font-weight="500"
                    text-align="center"
                  >
                    <span style="font-size: 14px">R$</span>{{ plan.price }}
                    <span style="font-size: 14px">,00</span>
                  </AtomTitle>
                  <AtomParagraph
                    font-family="Inter, sans-serif"
                    type="text-p5"
                    color="var(--dark700)"
                    line-height="160%"
                    font-weight="400"
                    text-align="center"
                  >
                    Valor {{ plan.payment }}
                  </AtomParagraph>
                </div>
              </div>
              <div class="wrapper-action">
                <AtomButton
                  border-radius="100px"
                  bg-color="var(--primary600)"
                  color="var(--light1100)"
                  color-hover="var(--light1100)"
                  font-size="var(--fontSizeTextP5)"
                  font-weight="500"
                  height="40px"
                  border-color="var(--dark200)"
                  hover-border-color="var(--primary900)"
                  hover-bg-color="var(--primary900)"
                >
                  Contratar
                </AtomButton>
                <AtomParagraph
                  font-family="Inter, sans-serif"
                  type="text-p5"
                  color="var(--dark600)"
                  line-height="160%"
                  font-weight="400"
                  text-decoration="underline"
                  text-align="center"
                >
                  Saiba mais
                </AtomParagraph>
              </div>
            </div>
            <table class="table plan">
              <tr v-for="(item, indexPlan) in itensPlan" :key="indexPlan">
                <td class="table-td td-plan">
                  <AtomTitle
                    class="title-plan"
                    font-family="Inter, sans-serif"
                    font-size="var(--fontSizeTextP5)"
                    color="var(--dark800)"
                    line-height="140%"
                    font-weight="500"
                  >
                    {{ item.title }}
                  </AtomTitle>
                  <AtomTitle
                    v-if="item.info"
                    font-family="Inter, sans-serif"
                    font-size="var(--fontSizeTextP5)"
                    color="var(--dark800)"
                    line-height="140%"
                    font-weight="400"
                  >
                    {{ item.text }}
                  </AtomTitle>
                  <AtomIconSVG v-else name="icon-check" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrganismPlans",
  data() {
    return {
      planYearly: false,
      isAffiliate: false,
      isProducer: true,
      itens: [
        {
          title: "Imposto de renda PJ e PF",
          info: true,
        },
        {
          title: "Imposto de renda dos sócios/empresa",
          info: false,
        },
        {
          title: "Abertura de empresa",
          info: false,
        },
        {
          title: "Conciliação financeira e contábil",
          info: false,
        },
        {
          title: "Fechamento fiscal e contábil",
          info: false,
        },
        {
          title: "Fechamento de imposto de renda PJ",
          info: false,
        },
        {
          title: "Escritório e secretária virtual",
          info: false,
        },
        {
          title: "Domicílio fiscal",
          info: true,
        },
        {
          title: "Contabilização automatizada de comissões",
          info: false,
        },
        {
          title: "Emissão de NF ilimitadas",
          info: false,
        },
        {
          title: "Suporte e-mail / chat",
          info: false,
        },
        {
          title: "Suporte especializado",
          info: true,
        },
      ],
      plans: [
        {
          type: "INICIANTE",
          price: "309",
          payment: "mensal",
          tag: false,
          for: "afiliado",
        },
        {
          type: "PROFISSIONAL",
          price: "419",
          payment: "mensal",
          tag: true,
          for: "afiliado",
        },
        {
          type: "AVANÇADO",
          price: "549",
          payment: "mensal",
          tag: false,
          for: "afiliado",
        },
        {
          type: "PREMIUM",
          price: "597",
          payment: "mensal",
          tag: false,
          for: "produtor",
        },
      ],
      tabActive: false,
      itensPlan: [
        {
          title: "Imposto de renda PJ e PF",
          info: true,
          text: "--",
        },
        {
          title: "Imposto de renda dos sócios/empresa",
          info: false,
        },
        {
          title: "Abertura de empresa",
          info: false,
        },
        {
          title: "Conciliação financeira e contábil",
          info: false,
        },
        {
          title: "Fechamento fiscal e contábil",
          info: false,
        },
        {
          title: "Fechamento de imposto de renda PJ",
          info: false,
        },
        {
          title: "Escritório e secretária virtual",
          info: false,
        },
        {
          title: "Domicílio fiscal",
          info: true,
          text: "2 contas",
        },
        {
          title: "Contabilização automatizada de comissões",
          info: false,
        },
        {
          title: "Emissão de NF ilimitadas",
          info: false,
        },
        {
          title: "Suporte e-mail / chat",
          info: false,
        },
        {
          title: "Suporte especializado",
          info: true,
          text: "5 contas",
        },
      ],
    };
  },
};
</script>

<style scoped>
.section-plans {
  width: 100%;
  background-color: var(--dark0);
  padding: 80px 112px 80px;
}

.wrapper-container {
  display: grid;
  grid-template-columns: 520px auto;
  grid-template-rows: auto;
  max-width: 1200px;
  margin: 0 auto;
}

.wrapper-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 132px;
}

.wrapper-title {
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 384px;
}

.wrapper-text-description {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.wrapper-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.wrapper-text .tag {
  height: 27px;
  padding: 4px 12px;
  background: #d88100;
  border-radius: 100px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: -45px;
}

.wrapper-checkbox {
  display: flex;
  gap: 24px;
  align-items: center;
}

.color-green {
  color: var(--green600);
}

.table {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-collapse: separate;
  border: solid var(--dark0) 1px;
  border-spacing: 0px;
  width: 100%;
  text-align: center;
  overflow: hidden;
}

.table-td {
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  height: 58px;
  align-items: center;
}

.table tr {
  background-color: var(--dark200);
}

.table tr:nth-child(even) {
  background-color: var(--dark100);
}

.plan {
  opacity: 1;
  transition: 0.3s;
}

.plan.disabled-producer,
.plan.disabled-afiliate {
  opacity: 0.5;
  transition: 0.3s;
}

.table.plan {
  border-radius: 0px;
  border: solid var(--dark0) 0px;
}

.wrapper-right {
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-top: 49px;
}

.wrapper-plan {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 1px;
  grid-template-rows: auto;
  margin-top: 14px;
}

.wrapper-tabs {
  display: flex;
  gap: 8px;
  background: var(--dark100);
  padding: 8px;
  height: 58px;
  border-radius: 100px;
}

.plan-top {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: #152031;
  max-width: 174px;
  height: 279px;
  justify-content: center;
}

.plan-top.tag {
  background: var(--dark300);
}

.wrapper-action {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.title-plan {
  display: none;
}

.td-plan {
  display: flex;
  justify-content: center;
  padding: 10px 24px;
  height: 58px;
  align-items: center;
}
</style>
