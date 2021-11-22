<template>
  <div>
    <TopVisual />
    <!-- ご案内 -->
    <section class="p-index_conteiner mg-section">
      <Guidance />
    </section>
    <div @click="gotoAdmin()">管理画面</div>
    <div @click="gotoAdminDayReserve()">当日の予約画面</div>
    <!-- 施設案内 -->
    <section class="p-index_conteiner mg-section">
      <div class="c-secTit -operationTit">
        <h2 class="c-secTit__heading isActive">
          <span class="c-secTit__en">Institution</span>
          <span class="c-secTit__jp">施設案内</span>
        </h2>
      </div>
      <!-- <Institution :institutionContents="institutionContents" /> -->
      <div v-for="content in institutionContents" :key="content.id">
        <BoxContents :boxContent="content" />
      </div>
    </section>
    <!-- 会社情報 -->
    <section class="p-index_conteiner mg-section">
      <AccessInfomation />
    </section>
  </div>
</template>
<script>
import InstsitutionContents from "@/components/Top/InstitutionContents.vue";
import TopVisual from "@/components/Top/TopVisual.vue";
import Institution from "@/components/Top/Institution.vue";
import BoxContents from "@/components/mixins/BoxContents.vue";
import AccessInfomation from "@/components/Top/AccessInfomation.vue";
import Guidance from "@/components/Top/Guidance.vue";

export default {
  name: "Top",
  components: {
    TopVisual,
    Institution,
    BoxContents,
    AccessInfomation,
    Guidance,
  },
  data() {
    return {
      institutionContents: this.$store.state.institutionContents,
    };
  },
  created: function () {},
  mounted: function () {},
  methods: {
    gotoAdmin() {
      this.$router.push("AdminTop");
    },
    gotoAdminDayReserve() {
      this.$router.push("AdminDayReserve");
    },
  },
};
</script>
<style>
h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.top-text-style {
  font-size: 20px;
}
</style>