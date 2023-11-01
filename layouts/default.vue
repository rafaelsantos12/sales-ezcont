<template>
  <div class="content">
    <main>
      <OrganismHeaderNav @clickMenuMobile="isActiveMobile = !isActiveMobile" />
      <OrganismHeaderNavMobile
        :active-mobile="isActiveMobile"
        @clickCloseModal="isActiveMobile = false"
      />
      <Nuxt />
    </main>
  </div>
</template>
<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      isActiveMobile: false,
    };
  },
};
</script>

<style>
.content {
  width: 100%;
  min-height: 100vh;
  background-color: var(--light1100);
  display: flex;
  flex-direction: column;
}

</style>
