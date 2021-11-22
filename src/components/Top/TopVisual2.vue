<template>
  <div class="relative TopVisualBack">
    <div class="TopVisualText">
      <span class="li">TO BE FUN</span>
      <br />
      <span class="l2">TO BE HEALTH</span>
      <br />
      <span class="l3">TO BE FRIENDS</span>
    </div>
    <div class="TopVisualPhotos">
      <img src="@/assets/bbq.jpg" />
    </div>
  </div>
</template>
<script>
import util from "@/utils/util.js";
export default {
  name: "TopVisual2",
  components: {},
  mixins: [util],
  data() {},
  created: function () {},
  mounted: function () {},
  methods: {},
};
</script>
<style>
/* .TopVisualBack {
  background: #000b22;
  height: 100vh;
} */
.TopVisualText {
  position: absolute;
  top: 50%;
  /* left: 50%; */
  transform: translate(10%, -50%);
  /* -webkit-transform: translate(-50%, -50%); */
  /* -ms-transform: translate(-50%, -50%); */
  /* background-color: white; */
  color: white;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 16%);
  font-size: 40px;
  font-weight: bold;
  padding: 64px;
}
/* .TopVisualText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  color: white;
  font-size: 64px;
  font-weight: bold;
} */
.TopVisualPhotos img {
  /* position: absolute; */
  right: 0px;
  width: 100%;
}
</style>