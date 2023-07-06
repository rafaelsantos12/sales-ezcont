<template>
  <section class="wrapper-integration">
    <div class="title">
      <AtomTitle
        tag="h1"
        font-size="var(--fontSizeTitleH7)"
        font-weight="500"
        color="var(--dark100)"
        font-family="Inter, sans-serif"
        line-height="33.6px"
        text-align="center"
        class="title"
      >
        Integre sua plataforma de venda de maneira rápida e fácil
      </AtomTitle>
    </div>
    <div class="wrapper-logo">
      <AtomImageCustom
        src="/images/hotmart-logo.svg"
        width="100%"
        class="selo-logo"
      />
      <AtomImageCustom
        src="/images/appmax.svg"
        width="100%"
        class="selo-logo"
      />
      <AtomImageCustom src="/images/yampi.svg" width="100%" class="selo-logo" />
      <AtomImageCustom
        src="/images/monetizze-logo.svg"
        width="100%"
        class="selo-logo"
      />
      <AtomImageCustom
        src="/images/eduzz-logo.svg"
        width="100%"
        class="selo-logo"
      />
      <AtomImageCustom src="/images/braip.svg" width="50%" class="logo-braip" />
    </div>
  </section>
</template>

<script>
export default {
  name: "OrganismIntegration",
};
</script>

<style scoped>
.wrapper-integration {
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 1216px;
  padding: 80px 0px;
  margin: 0 auto;
}

.wrapper-logo {
  display: flex;

  justify-content: center;
  gap: 48px;
}

.selo-logo {
  margin: 0 auto;
  max-width: 140px;
}

.logo-braip{
  margin: 0 auto;
  max-width: 100px;
}

@media (max-width: 768px) {
  .wrapper-integration {
    padding: 64px 32px;
  }

  .wrapper-logo {
    flex-direction: column;
    gap: 32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .selo-logo {
    max-width: 140px;
  }
}
</style>
