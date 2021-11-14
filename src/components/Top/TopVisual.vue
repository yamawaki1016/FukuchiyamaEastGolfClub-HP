<template>
  <div id="visual" class="p-index_visual">
    <div class="p-index_visualLeft">
      <div class="p-index_visualLeftPanel">
        <p class="p-index_visualCatch">
          <span class="li">楽しみづくり！</span>
          <br />
          <span class="l2">健康づくり！</span>
          <br />
          <span class="l3">仲間づくり！</span>
        </p>
        <p class="p-index_visualLead"></p>
      </div>
    </div>
    <div class="p-index_social">
      <ul class="p-index_socialList">
        <li class="p-index_socialItem">
          <a href="" target="blank">
            <img
              src="@/assets/instagrum-icon.svg"
              alt="twitter"
              class="h-100"
            />
          </a>
        </li>
        <li class="p-index_socialItem">
          <a href="" target="blank">
            <img src="@/assets/twitter-icon.svg" alt="twitter" class="h-100" />
          </a>
        </li>
      </ul>
    </div>
    <div class="p-index_visualRight">
      <div class="p-index_visualRightPanel">
        <div class="p-index_obj p-index_picture1">
          <img
            class="p-index_img"
            src="http://hirogolf.wp.xdomain.jp/wp-content/uploads/2020/05/unnamed-scaled.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import util from "@/utils/util.js";
export default {
  name: "TopVisual",
  components: {},
  mixins: [util],
  data() {},
  created: function () {},
  mounted: function () {},
  methods: {},
};
</script>
<style>
.p-index_visual {
  position: relative;
  min-height: 736px;
  height: 100vh;
}
/** p-index_visualLeft */
.p-index_visualLeft {
  left: 0;
  z-index: 30;
  background-color: salmon;
}
.p-index_visualLeft .p-index_visualRight {
  position: absolute;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 20;
}
.p-index_visualLeft .p-index_visualLeftPanel {
  background-color: "ffbccb";
}
.p-index_visualLeftPanel {
  position: absolute;
  width: 490px;
  top: calc(50% - 200px);
  right: 30px;
}
.p-index_visualCatch {
  font-size: 66px;
  line-height: 90px;
  margin-bottom: 22px;
}
/** p-index_social */
.p-index_social {
  position: absolute;
  right: 100px;
  z-index: 22px;
}
/* .p-index_visualRightPanel {
  display: none;
  width: 100%;
  height: 100%;
  opacity: 0;
} */
.p-index_visualLeft .p-index_visualRightPanel {
  background-color: #ffbccb;
}
.p-index_obj {
  height: 100%;
  position: absolute;
  /* bottom: calc(50% - 70px); */
  /* padding-top: 78px; */
}
/* .p-index_picture1 {
  left: calc(50% - 70px);
} */
.p-index_img {
  height: 100%;
}
/** ----------------@media screarn------------------ */

@media screen and (min-width: 769px) {
  .p-index_visualLeft,
  .p-index_visualRight {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: 20;
  }
  .p-index_visualLeft {
    left: 0;
    z-index: 30;
  }
  .p-index_visualLeftPanel {
    position: absolute;
    width: 490px;
    top: calc(50% - 200px);
    right: 30px;
  }
  .p-index_visualRight {
    right: 0;
  }
  .p-index_visualCatch {
    font-size: 66px;
    line-height: 90px;
    margin-bottom: 22px;
  }
  .p-index_visualLead {
    font-size: 31px;
    line-height: 51px;
  }
}

@media screen and (max-width: 768px) {
  .p-index_visual {
    height: auto !important;
  }
  .p-index_visualLeft {
    position: static;
    width: 100%;
    margin-top: 50vh;
  }
  .p-index_visualLeftPanel {
    padding: 30px 30px 0;
    text-align: center;
  }
  .p-index_visualCatch {
    margin-bottom: 2px;
  }
  .p-index_visualCatch .l1,
  .p-index_visualCatch .l3 {
    display: inline-block;
    text-indent: 0.5em;
  }
}
/* :::::: SNS :::::: */
.p-index_social {
  position: absolute;
  right: 100px;
  z-index: 22;
}
@media screen and (max-width: 768px) {
  .p-index_social {
    position: static;
    text-align: center;
    background-color: #ffbccb;
    padding: 25px 30px 30px;
  }
}
@media screen and (min-width: 769px) {
  .p-index_social {
    width: 1200px;
    margin: 0 0 0 -600px;
    bottom: 26px;
  }
}
@media screen and (max-width: 768px) {
  .p-index_socialList {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
  }
}
@media screen and (min-width: 769px) {
  .p-index_socialList {
    float: right;
  }
}
.p-index_socialItem {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
@media screen and (max-width: 768px) {
  .p-index_socialItem {
    margin: 0 0 0 14px;
  }
}
@media screen and (min-width: 769px) {
  .p-index_socialItem {
    margin: 14px 0 0;
  }
}
.p-index_socialItem:first-child {
  margin: auto;
}
@media screen and (max-width: 768px) {
  .p-index_socialItem:first-child {
    margin: 0;
  }
}
.p-index_social a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  opacity: 1;
  -webkit-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
}
.p-index_social a:hover {
  opacity: 0.9;
}
.p-index_social .icon {
  font-size: 22px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.loading .p-index_social {
  z-index: 1 !important;
}
</style>