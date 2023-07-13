<template>
    <section class="wrapper-thanks">
        <div class="wrapper-main">
            <div class="wrapper-logo">
                <AtomImageCustom    
                    src="/images/logotipo.svg"
                    alt="Logotipo"
                    width="106px"
                    class="image-logo"
                    @click.native="$router.push('/')"
            />
            </div>
            <div class="wrapper-content">
                <div class="wrapper-text">
                    <AtomTitle
                    font-family="Poppins"
                    font-size="var(--fontSizeTitleH4)"
                    color="var(--light1100)"
                    line-height="140%"
                    font-weight="500"
                    text-align="center"
                    class="title-thanks"
                    >
                    <span>Obrigado!</span> <br> 
                    Agora você já deu o primeiro passo <br/> para ser um parceiro Ezcont!
                    </AtomTitle>
                    <AtomParagraph
                    font-family="Inter, sans-serif"
                    type="text-p2"
                    color="var(--dark500)"
                    line-height="140%"
                    font-weight="400"
                    text-align="center"
                    class="paragraph-thanks"
                    >
                    Nossa equipe entrará em contato para ativar a sua conta.<br/> 
                    Aproveite nossos conteúdos no Instagram!
                    </AtomParagraph>
                </div>
                <AtomButton
                    border-radius="100px"
                    bg-color="var(--primary600)"
                    color="var(--light1100)"
                    color-hover="var(--light1100)"
                    font-size="var(--fontSizeTextP5)"
                    font-weight="600"
                    height="48px"
                    min-width="238px"
                    width="238px"
                    border-color="var(--dark200)"
                    hover-border-color="var(--primary900)"
                    hover-bg-color="var(--primary900)"
                    class="button-instagram"
                    @click="sendInstagram"
                >
                    <AtomIcon
                        name="instagram"
                        color="var(--light1100)"
                        font-size="var(--fontSizeTextP5)"
                        font-weight="600"
                        margin-right="8px"
                        :size="0.8"
                    />
                    Conhecer Instagram
                </AtomButton>
            </div>      
        </div>
    </section>
</template>

<script>
    export default {
        name: "ObrigadoTemplate",
        methods: {
            sendInstagram(){
                window.open('https://www.instagram.com/ezcontoficial/', '_blank');
            }
        }
    }
</script>

<style scoped>

.wrapper-thanks{
    background: var(--dark0);
    height: 100vh;
    padding: 61px 112px 0;
}

.wrapper-main{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 140px;
    max-width: 1216px;
    height: -webkit-fill-available;
    margin: 0 auto;
    background-image: url('/images/bg-obrigado.png');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: contain;
}

span{
    font-weight: 600;
}

.button-instagram{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.wrapper-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
}

.wrapper-text{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}


@media ( max-width:768px){
   .wrapper-thanks{
         padding: 61px 64px 0;
   }

   .title-thanks{
         font-size: 28px !important;
   }

   .paragraph-thanks{
         font-size: 16px !important;
   }
}
</style>