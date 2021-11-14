<template>
  <div>
    <a class="a-slide">
      <div class="box-content">{{ boxText }}</div>
    </a>
  </div>
</template>
<script>
export default {
  name: "BoxColorSlide",
  components: {},
  props: {
    boxText: "",
    JumpTo: "",
  },
  data() {
    return {};
  },
  created: function () {},
  computed: {},
  methods: {},
};
</script>
<style>
.a-slide {
  width: 250px;
  height: 250px;
  display: block;
  padding: 20px 0;
  border-radius: 6px;
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: 200% auto;
  background-image: linear-gradient(
    to right,
    #afc29e 0%,
    #adc770 50%,
    #d88d8d 50%,
    #f16b6b 100%
  );
  box-shadow: 0 3px 10px rgb(0 0 0 / 16%);
  transition: background-position ease 0.4s;
  text-align: center;
  color: #fff;
  text-decoration: none;
  position: relative;
}

.a-slide:hover {
  background-position: 0 0;
}
.box-content {
  width: 100%;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
/****** Base style. ******/
/* body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: "Yu Gothic Medium", "游ゴシック Medium", "Yu Gothic",
    "游ゴシック", YuGothic, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",
    "メイリオ", "Meiryo";
} */
</style>
