<template>
  <div class="content">
    <main>
      <OrganismHeaderNav />
      <Nuxt />
    </main>
  </div>
</template>
<script>
export default {
  name: "DefaultLayout",
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
