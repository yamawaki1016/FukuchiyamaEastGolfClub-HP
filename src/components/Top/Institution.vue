<template>
  <section class="p-index_conteiner">
    <!-- タイトル -->
    <div class="c-secTit -operationTit">
      <h2 class="c-secTit__heading isActive">
        <span class="c-secTit__en">Institution</span>
        <span class="c-secTit__jp">施設案内</span>
      </h2>
    </div>
    <!-- コンテンツ -->
    <div class="p-operation__inner">
      <div class="p-operation_baseWrap">
        <InstitutionContents
          imgName="clubhouse.jpg"
          baseTitleText="クラブハウス"
          descriptionText="福知山東ゴルフクラブ場のクラブハウスです。"
        />
        <InstitutionContents
          imgName="golf-factory.jpg"
          baseTitleText="ゴルフ工房"
          descriptionText="ご自身で、クラブの改造を行っていただけます。"
        />
      </div>
    </div>
  </section>
</template>
<script>
import InstitutionContents from "@/components/Top/InstitutionContents.vue";
export default {
  name: "Institution",
  components: { InstitutionContents },
  data() {},
  created: function () {},
  mounted: function () {},
  methods: {},
};
</script>
<style>
/* 全体 */
.p-operation__inner {
  background: #fff;
  border-bottom: 1px solid #e5e5e5;
}
.p-operation_baseWrap {
  display: flex;
  margin: 0 auto;
}
@media screen and (min-width: 769px) {
  .p-operation__inner {
    padding: 0 0 48px;
    margin-top: -40px;
  }
  .p-operation__baseWrap {
    width: 1200px;
    padding: 0 0 32px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
}
</style>