<template>
  <div>
    <OrganismHeader />
    <OrganismNumberSolution />
    <div class="division">
      <AtomLineDivision color="var(--light900)" />
    </div>
    <OrganismHowWorks />
    <OrganismAdvantage />
    <div class="division-black">
      <AtomLineDivision color="var(--dark200)" />
    </div>
    <OrganismPlans  id="planos" />
    <OrganismIntegrations />
    <AtomLineDivision color="var(--light900)" />
    <OrganismTestimony />
    <div class="division-testimony">
      <AtomLineDivision color="var(--light900)" />
    </div>
    <OrganismDoubt />
    <OrganismFooter />

    <OrganismCapture />
  </div>
 
</template>


<script>
export default {
  name: "TemplateHome",
};
</script>

<style scoped>
.division {
  margin: 0 auto;
  padding: 120px 112px;
}

.division-black {
  margin: 0 auto;
  padding: 0px 112px;
  background-color: var(--dark0);
}

.division-testimony {
  margin: 0 auto;
  padding: 0px 112px;
  background-color: var(--light1100);
}

@media (max-width: 768px) {
  .division {
    padding: 64px 24px 48px;
  }
}

</style>
