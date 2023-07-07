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
           src: "https://d335luupugsy2.cloudfront.net/js/loader-scripts/fb89bfb2-6e60-4919-bf4c-27be442c39f8-loader.js",
           body: true,
           async: true,
        }
      ],
    };
  }
};
</script>
