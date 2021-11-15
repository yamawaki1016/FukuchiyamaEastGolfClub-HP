<template>
  <div class="relative">
    <div class="">
      <div class="menu-button">
        <img
          class="menu-icon"
          src="@/assets/menu.svg"
          alt="menu-icon"
          @click="changeMenu()"
        />
      </div>
      <transition name="fade" appear>
        <div v-if="menuFlg" class="menu">
          <div class="menu-inner">
            <div class="menuHeader">
              <div class="menuHeaderTitle">
                <div>FUKUCHIYAMA</div>
                <div>EAST</div>
                <div>GOLF CLUB</div>
              </div>
            </div>
            <nav class="menu-nav">
              <div class="menu-nav-body">
                <h3>MENU</h3>
                <!-- メニュー一覧（large) -->
                <ul>
                  <li
                    v-for="content in headerContents"
                    :key="content.en"
                    @click="selectList(content)"
                  >
                    <a>
                      <span class="en menu-contents-button">{{
                        content.en
                      }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      show: true,
      menuFlg: false,
      width: window.innerWidth,
      headerContents: this.$store.state.header.menuList,
    };
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
    openMenu() {
      this.menuFlg = true;
    },
    closeMenu() {
      this.menuFlg = false;
    },
    changeMenu() {
      this.menuFlg = !this.menuFlg;
      console.log(this.menuFlg);
    },
  },
};
</script>
<style>
.menu-icon {
  position: fixed;
  height: 48px;
  top: 16px;
  right: 16px;
  z-index: 100;
}
.menuHeader {
  position: relative;

  background-color: gray;
  background-size: cover;
  width: 30%;
  flex-shrink: 0;
  z-index: 2;
}
.menuHeaderTitle {
  color: #fff;
  font-size: 5rem;
  /* transform: rotate(-90deg); */
}
.menu {
  position: fixed;
  z-index: 0;
  background: #fff;
  /* opacity: 0; */
  width: 100vw;
  height: 100vh;
  z-index: 5;
}
.menu-inner {
  height: 100%;
  display: flex;
}
.menu-nav {
  width: 70%;
  position: relative;
}
.menu-nav-body {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 5rem;
  font-size: 2.5rem;
  letter-spacing: 0.18em;
  line-height: 1;
  z-index: 2;
}
.menu-nav-body li {
  margin: 0 0 3rem;
}
.menu-nav-body h3 {
  font-family: "Lato, sans-serif";
  font-size: 1.3rem;
  color: #959595;
  margin: 0 0 3rem;
}
.menu-nav-body ul {
  padding: 0 0 0 2rem;
}
.menu-contents-button {
  background: linear-gradient(currentColor 0 0) bottom / var(--d, 0) 3px
    no-repeat;
  transition: 0.5s;
}
.menu-contents-button:hover {
  --d: 100%;
}
/* ------menuアニメーション------------ */
/* 表示アニメーションをする前のスタイル */
.fade-enter {
  opacity: 0;
}
/* 表示アニメーション動作中のスタイル */
.fade-enter-active {
  opacity: 0;
  transition: all 500ms;
}

/* 表示アニメーション後のスタイル */
.fade-enter-to {
  opacity: 1;
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
/* ------------------------- */
</style>