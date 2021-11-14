<template>
  <!-- コンテンツ -->
  <div class="p-operation__inner">
    <div
      class="institution-list"
      v-for="content in institutionContents"
      :key="content.id"
    >
      <div class="institution-content">
        <BoxColorSlide :boxText="content.baseTitleText" />
      </div>
    </div>
  </div>
</template>
<script>
import BoxColorSlide from "@/components/mixins/BoxColorSlide.vue";
export default {
  name: "Institution",
  components: { BoxColorSlide },
  data() {
    return {};
  },
  props: {
    institutionContents: Array,
  },
  created: function () {},
  mounted: function () {},
  methods: {},
};
</script>
<style>
/* 全体 */
.p-operation__inner {
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.p-operation_baseWrap {
  display: flex;
  flex-wrap: wrap;
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
.institution-content {
  text-align: center;
  margin: 4px 4px;
}
</style>