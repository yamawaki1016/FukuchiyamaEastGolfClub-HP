<template>
  <div class="l-header">
    <div class="l-header__inner">
      <div class="l-header__logo">
        <a href="/" class="l-header__logo-a">
          <img src="@/assets/main-top-icon.png" class="main-top-icon" />
        </a>
      </div>
      <!-- メニュー一覧（large) -->
      <ul v-if="isWindowSizeLarge" class="l-header__gnavListLarge">
        <li
          v-for="content in headerContents"
          :key="content.en"
          @click="selectList(content)"
        >
          <a>
            <span class="en">{{ content.en }}</span>
          </a>
        </li>
      </ul>
      <!-- メニュー一覧（small) -->
      <a
        v-if="!isWindowSizeLarge"
        class="l-header__gnavOpen"
        @click="openMenu()"
        >MENU</a
      >
      <transition name="fade">
        <div v-if="menuFlg" class="l-header__gnavContainer">
          <nav class="l-header__gnav">
            <a class="l-header__gnavClose" @click="closeMenu()">CLOSE</a>
            <ul class="l-header__gnavList">
              <li
                class="l-header__gnavItem"
                v-for="content in headerContents"
                :key="content.en"
                @click="selectList(content)"
              >
                <a>
                  <span class="en">{{ content.en }}</span>
                  <span class="ja">{{ content.ja }}</span>
                </a>
              </li>
            </ul>
            <a class="l-header__gnavToggle">
              <span class="bar"></span>
            </a>
          </nav>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import util from "@/utils/util.js";
export default {
  name: "Header",
  components: {},
  mixins: [util],
  data() {
    return {
      menuFlg: false,
      width: window.innerWidth,
      headerContents: this.$store.state.header.menuList,
    };
  },
  created: function () {},
  mounted: function () {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    /**
     * 画面サイズが769pxより大きかどうか
     */
    isWindowSizeLarge() {
      return this.width >= 769;
    },
  },
  methods: {
    /**
     * 画面サイズの再設定
     */
    handleResize: function () {
      // resizeのたびにこいつが発火するので、ここでやりたいことをやる
      this.width = window.innerWidth;
    },
    selectList(content) {
      console.log(content);
    },
    openMenu() {
      this.menuFlg = true;
    },
    closeMenu() {
      this.menuFlg = false;
    },
  },
};
</script>
<style>
.l-header__inner {
  height: 84px;
  width: 100%;
  display: flex;
  align-items: center;
}
/* ヘッダー全体 (幅小さい) */
@media screen and (max-width: 768px) {
  .l-header__inner {
    height: 54px;
    width: 100%;
    background-color: #fff;
  }
}
@media screen and (min-width: 769ppx) {
  .l-header__inner {
    position: absolute;
    padding-top: 10px;
  }
  .l-header__inner,
  .l-header__gnavContainer {
    display: table;
    margin: 0 auto;
  }
  .l-header__inner {
    overflow: hidden;
  }
  .l-header__inner,
  .c-panel__inner,
  .c-figure__inner {
    width: 1200px;
  }

  .l-header__gnavClose,
  .l-header__gnavOpen,
  .l-header__gnavItem .ja,
  .l-header__gnavItem:first-child {
    display: none;
  }
  .l-header__inner > *,
  .l-header__gnavContainer > * {
    display: table-cell;
    max-height: 100px;
    vertical-align: middle;
  }
}
/* ヘッダーロゴ */
.l-header a:link {
  display: block;
  text-decoration: inherit;
}
a {
  color: #333333;
}
.l-header__logo-a {
  height: 100%;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
.l-header__logo {
  width: 120px;
  height: 20px;
}
@media screen and (max-width: 768px) {
  .l-header__logo {
    float: left;
  }
  .l-header__logo,
  .l-header__gnavClose,
  .l-header__gnavOpen,
  .l-header__gnavItem a {
    height: 24px;
    padding: 14px 20px;
    line-height: 26px;
  }
}
/* ナビメニュー：オープン */
@media screen and (max-width: 768px) {
  .l-header__gnavOpen {
    float: right;
  }
  .l-header__gnavOpen,
  .l-header__gnavClose {
    font-size: 10px;
  }
}
.l-header__gnavOpen::after,
.l-header__gnavClose::after {
  content: url(../assets/close.svg);
  display: inline-block;
  position: relative;
  top: -3px;
  width: 16px;
  height: 16px;
  margin-left: 1em;
  vertical-align: middle;
}
.l-header__gnavOpen::after {
  content: url(../assets/menu.svg);
  width: 20px;
  height: 20px;
}
.l-header__gnavClose::after {
  content: url(../assets/close.svg);
  width: 16px;
  height: 16px;
}
/* ---------- */
ol,
ul {
  list-style: none;
}
@media screen and (max-width: 768px) {
  .l-header__gnavContainer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ffbccb;
  }
}
/* コンテンツ：gnav */
.l-header__gnavItem .en {
  font-family: abel, "abel";
}
.l-header a:link {
  display: block;
  text-decoration: inherit;
}
@media screen and (max-width: 768px) {
  .l-header__gnavOpen,
  .l-header__gnavClose {
    font-size: 10px;
  }
  .l-header__gnavClose,
  .l-header__gnavItem a {
    display: block;
    border-bottom: 1px solid #fff;
    text-align: right;
  }
  .l-header__gnavItem .en {
    float: right;
    font-size: 24px;
  }
  .l-header__gnavItem .ja {
    margin-right: 1em;
    font-size: 10px;
  }
  .l-header__gnavItem a {
    display: block;
  }
}
/* コンテンツ：btnWrap */
.l-header {
  background-color: white;
  width: 1200px;
  position: fixed;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
}
.l-header__logo {
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
.l-header__gnavContainer {
  flex: 1;
  display: table-cell;
  max-height: 100%;
  vertical-align: middle;
  z-index: 100;
}
.l-header__gnav {
  padding-top: 8px;
  padding-right: 12px;
  transition: 1s;
}
.header-navList {
  padding-left: 20px;
  letter-spacing: -0.5em;
}
@media screen and (min-width: 769px) {
  .l-header_inner,
  .c-panel_inner,
  .c-figure_inner {
    width: 1200px;
  }
  .p-index_visual {
    position: relative;
    min-height: 736px;
    height: 100vh;
  }
}

@media screen and (max-width: 768px) {
  .c-figure_inner,
  .c-panel_inner {
    padding-right: 20px !important;
    padding-left: 20px !important;
  }
}
.l-header__gnavListLarge {
  width: 100%;
  display: flex;
}
.l-header__gnavListLarge li {
  width: 100%;
  text-align: center;
}
.l-header__gnavListLarge li a .en {
  font-family: abel, "abel";
}
.l-header__gnavOpen {
  position: absolute;
  right: 10px;
}
/* 表示アニメーションをする前のスタイル */
.fade-enter {
  opacity: 0;
}

/* 表示アニメーション後のスタイル */
.fade-enter-to {
  opacity: 1;
}

/* 表示アニメーション動作中のスタイル */
.fade-enter-active {
  transition: all 500ms;
}
/* 非表示アニメーション動作前のスタイル */
.fade-leave {
  opacity: 1;
}

/* 非表示アニメーション動作後のスタイル */
.fade-leave-to {
  opacity: 0;
}

/* 非表示アニメーション動作中のスタイル */
.fade-leave-active {
  transition: all 500ms;
}
</style>