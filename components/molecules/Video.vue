<template>
  <div>
    <div class="wrapper-video">
      <div class="embed-container">
        <div class="play" @click="modalVisible = true">
          <img src="/images/play.svg" alt="play" />
        </div>
      </div>
    </div>

    <div class="modal" :class="{ 'open-modal': modalVisible }">
      <div class="modal-content">
        <span class="close" @click="modalVisible = false">&times;</span>
        <iframe
          width="560"
          height="315"
          :src="src"
          title="Vídeo apresentação"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoleculeVideo",
  props: {
    src: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      modalVisible: false,
    };
  },

  watch: {
    modalVisible: function (value) {
      const iframeElement = document.querySelector('iframe');
      if (!value) {
        iframeElement.src = '';
        return;
      } 
      iframeElement.src = this.src;
    },
  },

};
</script>

<style scoped>
.wrapper-video {
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  align-items: flex-start;
  gap: 24px;
}

.embed-container {
  position: relative;
  padding-bottom: 400px; /* 41.66666667% */
  width: 1440px;
  background-repeat: no-repeat;
  background-position: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
  url("/images/reuniao.jpeg");
  border-radius: 20px;
}

.play {
  z-index: 10;
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 10px;

  position: absolute;
  width: 88px;
  height: 88px;
  left: calc(50% - 88px / 2);
  top: calc(50% - 88px / 2);

  /* Neutral/1100 */

  background: #ffffff;
  border: 12px solid rgba(255, 255, 255, 0.2);
  border-radius: 100px;
}

.play::before {
  content: "";
  position: absolute;
  border: 15px solid rgb(233 233 233 / 25%);
  border-radius: 50%;
  top: -27px;
  left: -27px;
  right: -27px;
  bottom: -27px;
  opacity: 1;
  z-index: -999;
}

.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  margin: 10% auto;
  width: 70%;
  max-width: 800px;
  position: relative;
  padding: 20px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  text-decoration: none;
  cursor: pointer;
}

iframe {
  width: 100%;
  height: 400px;
  border: none;
}

.open-modal {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  border: none;
  cursor: pointer;
}

@media (max-width: 1199.98px) {
  .embed-container {
    width: 100%;
  }

  .modal-content {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .embed-container {
    width: 100%;
    background-size: contain;
    padding-bottom: 200px;
  }

  .modal-content {
    width: 100%;
  }

  .play{
    zoom: 0.7;
  }
}
</style>
