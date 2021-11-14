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
    <section class="p-index_conteiner mg-section">
      <div class="c-secTit -operationTit top-text-style">
        <h2 class="c-secTit__heading isActive">
          <span class="c-secTit__en">STATUS/ACCESS</span>
          <span class="c-secTit__jp">ゴルフクラブ概要・アクセス</span>
        </h2>
        <div class="golfclub-info-card flex left">
          <div class="golfclub-info-left w-100">
            <div class="golfclub-info-content">
              <div class="golfclub-info-title">ゴルフクラブ名</div>
              <div class="golfclub-info-text">福知山東ゴルフクラブ</div>
            </div>
            <div class="golfclub-info-content">
              <div class="golfclub-info-title">電話番号</div>
              <div class="golfclub-info-text">0773-58-2224</div>
            </div>
            <div class="golfclub-info-content">
              <div class="golfclub-info-title">営業時間</div>
              <div class="golfclub-info-text">8:00～21:00</div>
            </div>
            <div class="golfclub-info-content">
              <div class="golfclub-info-title">定休日</div>
              <div class="golfclub-info-text">不定休</div>
            </div>
          </div>
          <div class="golfclub-info-right w-100">
            <div class="golfclub-info-content">
              <div class="golfclub-info-title">アクセス</div>
              <div class="golfclub-info-text">
                〒620-1444 京都府福知山市三和町芦渕５３−１
              </div>
              <div class="mt-16 ml-16">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13034.675985193839!2d135.221742!3d35.239609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb96acf7a92fe3a5d!2z56aP55-l5bGx5p2x44K044Or44OV44Kv44Op44OW!5e0!3m2!1sja!2sjp!4v1636886575532!5m2!1sja!2sjp"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  class="access-map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
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
/* 会社概要 */
.golfclub-info-card {
  border-radius: 20px;
  background-color: white;
  margin: 24px 36px;
  padding: 36px;
}
.golfclub-info-title {
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin-left: 16px;
  margin-bottom: 8px;
}
.golfclub-info-content {
  margin: 8px 0;
}
.golfclub-info-right {
  border-left: 2px solid #ffbccb;
}
.golfclub-info-text {
  text-align: center;
}
.access-map {
  width: 100%;
  height: 300px;
}
</style>