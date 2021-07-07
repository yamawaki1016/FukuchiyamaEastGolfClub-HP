<template>
  <div class="header-content">
    <div class="header-logo">
      <img src="@/assets/main-top-icon.png" class="main-top-icon" />
    </div>
    <div class="header-navContainer">
      <nav class="header-nav">
        <ul class="header-navList">
          <li class="header-navItem">
            <a>
              <span class="en">HogeHoge</span>
              <span class="ja">ほげほげ</span>
            </a>
          </li>
          <li class="header-navItem">
            <a>
              <span class="en">HogeHoge</span>
              <span class="ja">ほげほげ</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import util from "@/utils/util.js";
export default {
  name: "Header",
  components: {},
  mixins: [util],
  data() {},
  created: function () {},
  mounted: function () {},
  methods: {},
};
</script>
<style>
.header-content {
  background-color: white;
  position: fixed;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}
.header-logo {
  /* flex: 1; */
  height: 100%;
  padding: 0 10px 10px 30px;
}
.main-top-icon {
  height: 100%;
  z-index: 100;
  /* position: fixed; */
  /* top: 0;
  left: 0; */
  /* width: 100%; */
}
.header-navContainer {
  flex: 1;
  display: table-cell;
  max-height: 100px;
  vertical-align: middle;
}
.header-nav {
  padding-right: 48px;
  transition: 1s;
}
.header-navList {
  padding-left: 20px;
  letter-spacing: -0.5em;
}
.header-navItem {
  display: inline-block;
  position: relative;
  letter-spacing: 0;
}
.header-navItem .en {
  font-size: 18px;
  letter-spacing: 0.1lem;
  font-family: abel, "abel";
}
</style>