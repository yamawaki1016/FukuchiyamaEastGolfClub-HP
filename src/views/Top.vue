<template>
  <div>
    <TopVisual />
    <!-- ご案内 -->
    <section class="p-index_conteiner mg-section">
      <div class="c-secTit -operationTit">
        <h2 class="c-secTit__heading isActive">
          <span class="c-secTit__en">Golf</span>
          <span class="c-secTit__jp">福知山東ゴルフクラブ</span>
        </h2>
      </div>
      <div class="flex">
        <div class="mr-24">
          <div class="fs-32 bold center mb-32">どんな一打も一打です！</div>
          <div class="top-text-style">
            アプローチ、パターをもっと練習しよう！
          </div>
          <div class="top-text-style">ゴルフがもっと好きになるはずです。</div>
          <div class="top-text-style">
            ドライバーの300yも1打。パットも1打。どちらも同じ1打です。
          </div>
          <div class="top-text-style">
            本当にいいスコアを出したいなら、パッティングとアプローチの技術向上が一番の近道です。
          </div>
          <div class="top-text-style">
            コース、もしくは打ちっぱなし（65球
            500円）をご利用になられた方ならどなたでもパット練習・アプローチ練習をしていただけます。
          </div>
          <div class="top-text-style">
            練習の後はパター、アプローチ練習を納得連取ができ、スコアを大幅にアップさせましょう。
          </div>
        </div>
        <img src="@/assets/teachGolfWithJunior.png" class="teach-img" />
      </div>
    </section>
    <!-- 施設案内 -->
    <section class="p-index_conteiner mg-section">
      <div class="c-secTit -operationTit">
        <h2 class="c-secTit__heading isActive">
          <span class="c-secTit__en">Institution</span>
          <span class="c-secTit__jp">施設案内</span>
        </h2>
      </div>
      <Institution :institutionContents="institutionContents" />
    </section>
  </div>
</template>
<script>
import InstsitutionContents from "@/components/Top/InstitutionContents.vue";
import TopVisual from "@/components/Top/TopVisual.vue";
import Institution from "@/components/Top/Institution.vue";

export default {
  name: "Top",
  components: { TopVisual, Institution },
  data() {
    return {
      institutionContents: this.$store.state.institutionContents,
    };
  },
  created: function () {},
  mounted: function () {},
  methods: {},
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
.teach-img {
  width: 50%;
}
</style>