<template>
  <div class="p-operaion_base">
    <div class="p-operation_baseLogo">
      <div class="p-operation_baseCenter">
        <figure class="p-operation__baseImg">
          <source
            srcset="createImgSrc"
            media="(max-width:
                767px)"
          />
          <img :src="imgPath" :alt="imgName" />
        </figure>
        <div class="p-operation_text">
          <h3 class="p-operation__baseTitle">{{ baseTitleText }}</h3>
          <p class="p-operation__description">{{ descriptionText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InstitutionContents",
  components: {},
  props: {
    imgName: String,
    baseTitleText: String,
    descriptionText: String,
  },
  data() {
    return {
      imgPath: require("@/assets/" + this.imgName),
    };
  },
  created: function () {},
  mounted: function () {},
  computed: {
    // createImgSrc() {
    //   let srcText = "@/assets/" + this.imgName;
    //   //   console.log("*****：" + srcText);
    //   return require(srcText);
    // },
  },
  methods: {},
};
</script>
<style>
/* タイトル */
.p-operation__base {
  text-align: center;
}
.p-operation__baseLogo {
  border: 1px solid #ffbccb;
  position: relative;
}
.c-secTit {
  text-align: center;
}
.c-secTit__heading {
  position: relative;
  display: inline-block;
  padding: 0 0 16px;
}
.p-index_conteiner {
  overflow: hidden;
}
.c-secTit__en {
  font-family: abel, "abel";
  letter-spacing: 5.4px;
  display: block;
}
.c-secTit__jp {
  font-weight: bold;
  letter-spacing: 2.8px;
}
.c-secTit__heading:before {
  content: "";
  display: block;
  position: absolute;
  background: #f9bcca;
  height: 6px;
  border-radius: 3px;
  width: 100%;
  bottom: -6px;
}
.p-index__main .c-secTit {
  margin: 0;
  padding: 35px 0 30px;
}
@media screen and (min-width: 769px) {
  .p-operation__base {
    margin-top: 56px;
    width: 580px;
  }
  .p-operation__baseLogo {
    height: 632px;
  }
  .c-secTit {
    margin: 0 0 70px;
  }
  .p-index__main .c-secTit {
    padding: 70px 0 65px;
  }
  .c-secTit .c-secTit__heading {
    overflow: hidden;
    margin-bottom: -6px;
    padding-bottom: 22px;
  }
  .c-secTit .c-secTit__heading:before {
    z-index: 1;
    bottom: 0;
  }
  .c-secTit__heading.isActive > * {
    opacity: 1;
    -webkit-transform: none;
    -ms-transform: none;
    transform: none;
    -webkit-transition: opacity 1s 0.3s,
      -webkit-transform 1s 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: opacity 1s 0.3s,
      -webkit-transform 1s 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: opacity 1s 0.3s,
      transform 1s 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: opacity 1s 0.3s,
      transform 1s 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 1s 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .c-secTit__heading > * {
    opacity: 0;
    -webkit-transform: translateY(100px);
    -ms-transform: translateY(100px);
    transform: translateY(100px);
  }
  .c-secTit__en {
    font-size: 54px;
  }
  .c-secTit__jp {
    display: inline-block;
    font-size: 14px;
  }
}
/* コンテンツ */
/* img {
  width: 324px;
  aspect-ratio: auto 324 / 62;
  height: 62px;
} */
.p-operation__base {
  text-align: center;
}
.p-operation__baseCenter {
  text-align: center;
  width: 100%;
}
/* コンテンツ：画像 */
.p-operation__baseImg {
  display: block;
  max-width: 518px;
  max-height: 310px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 10px;
}
.p-operation__baseImg img {
  display: block;
  width: 100%;
  height: auto;
}
@media screen and (min-width: 769px) {
  .p-operation__baseImg {
    margin-top: 27px;
    max-width: 518px;
    max-height: 310px;
  }
  .p-operation__baseImg img {
    width: 518px;
    height: 310px;
  }
}

/* コンテンツ：説明 */
.p-operation__baseTitle {
  text-align: center;
  font-weight: bold;
}
.p-operation__description,
.p-operation__address {
  text-align: center;
  font-weight: normal;
}
@media screen and (min-width: 769px) {
  .p-operation__baseTitle {
    font-size: 24px;
    line-height: calc(42 / 24);
    margin: 26px 0 12px;
  }
  .p-operation__description,
  .p-operation__address {
    font-size: 14px;
    line-height: calc(24 / 14);
  }
}
</style>