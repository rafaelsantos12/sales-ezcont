<template>
  <section class="section-testimony">
    <div class="wrapper-container">
      <div class="wrapper-left">
        <div class="wrapper-text-button">
          <MoleculeLineText text="DEPOIMENTOS" />
          <div class="wrapper-text">
            <AtomTitle
              font-family="Poppins"
              font-size="var(--fontSizeTitleH6)"
              color="var(--dark100)"
              line-height="140%"
              font-weight="500"
              class="title"
            >
              Centenas de negócios cresceram com as finanças em ordem!
            </AtomTitle>
          </div>
        </div>
        <MoleculeButtonCustom
          text="Acelerar meu negócio"
          icon="arrow-top-right"
          bg-color="var(--dark100)"
          border-color="var(--dark100)"
          hover-bg-color="var(--dark300)"
          background-icon="var(--primary600)"
          background-icon-hover="var(--light1100)"
          color-icon="var(--light1100)"
          hover-border-color="var(--dark300)"
          color-icon-hover="var(--primary600)"
          class="button-testimony-desktop"
          has-shadow
          @click="setShowForm(true)"
        />
      </div>
      <div class="wrapper-right">
        <MoleculeComment
          img="/images/avatar.svg"
          comment="Lorem ipsum dolor sit amet, cons 
          ectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit am et. Lorem ipsum dolor 
          sit amet, consectetur adipiscing elit, sed. 
          Cons ectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Lorem 
          ipsum dolor sit am et. Lorem ipsum dolor sit amet, 
          consectetur. "
          name="Marcos André Vória"
          profile="CEO da WebOnline"
        />
        <MoleculeComment
          img="/images/avatar.svg"
          comment="Lorem ipsum dolor sit amet, cons 
          ectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit am et. Lorem ipsum dolor 
          sit amet, consectetur adipiscing elit, sed. 
          Cons ectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Lorem 
          ipsum dolor sit am et. Lorem ipsum dolor sit amet, 
          consectetur. "
          name="Marcos André Vória"
          profile="CEO da WebOnline"
        />
        <MoleculeComment
          img="/images/avatar.svg"
          comment="Lorem ipsum dolor sit amet, cons 
          ectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit am et. Lorem ipsum dolor 
          sit amet, consectetur adipiscing elit, sed. 
          Cons ectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Lorem 
          ipsum dolor sit am et. Lorem ipsum dolor sit amet, 
          consectetur. "
          name="Marcos André Vória"
          profile="CEO da WebOnline"
        />
        <MoleculeComment
          img="/images/avatar.svg"
          comment="Lorem ipsum dolor sit amet, cons 
          ectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit am et. Lorem ipsum dolor 
          sit amet, consectetur adipiscing elit, sed. 
          Cons ectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Lorem 
          ipsum dolor sit am et. Lorem ipsum dolor sit amet, 
          consectetur. "
          name="Marcos André Vória"
          profile="CEO da WebOnline"
        />
        <MoleculeComment
          class="card-comment-testimony"
          img="/images/avatar.svg"
          comment="Lorem ipsum dolor sit amet, cons 
          ectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. 
          Lorem ipsum dolor sit am et. Lorem ipsum dolor 
          sit amet, consectetur adipiscing elit, sed. 
          Cons ectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Lorem 
          ipsum dolor sit am et. Lorem ipsum dolor sit amet, 
          consectetur. "
          name="Marcos André Vória"
          profile="CEO da WebOnline"
        />
      </div>

       <MoleculeButtonCustom
          text="Acelerar meu negócio"
          icon="arrow-top-right"
          bg-color="var(--dark100)"
          border-color="var(--dark100)"
          hover-bg-color="var(--dark100)"
          background-icon="var(--primary600)"
          background-icon-hover="var(--light1100)"
          color-icon="var(--light1100)"
          hover-border-color="var(--dark100)"
          color-icon-hover="var(--primary600)"
          class="button-testimony-mobile"
          @click="setShowForm(true)"
        />
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "OrganismTestimony",
  methods: {
    ...mapMutations("form", ["setShowForm"]),
  },
};
</script>

<style scoped>
.section-testimony {
  width: 100%;
  background-color: var(--light1100);
  padding: 0 112px;
}

.wrapper-container {
  display: grid;
  grid-template-columns: 384px 696px;
  justify-content: space-between;
  grid-template-rows: auto;
  max-width: 1216px;
  margin: 0 auto;
  padding: 120px 0 16px;
  position: relative;
}

.wrapper-left {
  display: flex;
  flex-direction: column;
  gap: 75px;
}

.wrapper-text-button {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.wrapper-right {
  display: flex;
  flex-direction: column;
  gap: 80px;
  height: 504px;
  overflow-y: auto;
}

.wrapper-right::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px; /* Ajuste a altura conforme necessário */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
  pointer-events: none;
}

.wrapper-right::-webkit-scrollbar {
  display: none;
}

.card-comment-testimony {
  margin-bottom: 180px;
}

.button-testimony-mobile{
  display: none;
}

@media (max-width: 1199.98px) {

  .wrapper-container {
    grid-template-columns: auto;
  }
}

@media (max-width: 767.98px) {
  .section-testimony {
    padding: 0 32px;
  }

  .wrapper-container {
    grid-template-columns: auto;
    padding: 64px 0 16px;
  }

  .wrapper-left{
    padding-bottom: 48px;
  }

  .title{
    font-size: 24px !important;
  }

  .button-testimony-mobile{
    display: block;
    margin-top: 50px;
  }

  .button-testimony-desktop{
    display: none;
  }

  .card-comment-testimony{
    margin-bottom: 0;
  }

  .wrapper-right::before{
    bottom: 110px;
  }
}
</style>
