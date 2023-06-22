<template>
  <div class="wrapper-comment">
    <div class="wrapper-top">
      <AtomIconSVG name="aspa" />
      <div class="comment-text">
        <AtomParagraph
          type="text-p3"
          color="var(--dark200)"
          font-weight="400"
          line-height="28px"
        >
          {{ comment }}
        </AtomParagraph>
      </div>
    </div>
    <div class="wrapper-bottom">
      <AtomImageCustom :src="img" width="56px" border-radius="10px" />
      <div class="wrapper-name">
        <AtomTitle
          font-family="Inter, sans-serif"
          font-size="var(--fontSizeTextP3)"
          color="var(--dark200)"
          line-height="24px"
          font-weight="500"
        >
          {{ name }}
        </AtomTitle>
        <AtomParagraph
          type="text-p3"
          color="var(--dark500)"
          font-weight="400"
          line-height="28px"
        >
          {{ profile }}
        </AtomParagraph>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoleculeComment",
  props: {
    img: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.wrapper-comment {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.wrapper-top {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.comment-text {
  padding: 0 32px 32px 0;
  border-bottom: 1px solid var(--light900);
  border-right: 1px solid var(--light900);
  border-bottom-right-radius: 20px;
}

.wrapper-bottom {
  display: flex;
  gap: 19px;
}
</style>
