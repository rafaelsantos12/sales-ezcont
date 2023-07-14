<template>
  <TemplateHome />
</template>

<script>
export default {
  name: "IndexPage",
  head() {
    return {
      script: [
        {
           src: "https://d335luupugsy2.cloudfront.net/js/loader-scripts/8fdf4f23-0394-413c-bfa2-90baf10bf052-loader.js",
           body: true,
           async: true,
        }
        
      ],
    };
  }
};
</script>
