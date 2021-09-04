<template>
  <Header class="header" />
  <main class="main">
    <router-view />
  </main>
  <Footer class="footer" />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>


<style lang="scss">
html {
  width: 100%;
  height: 100%;
  font-family: "游ゴシック", YuGothic, "ヒラギノ角ゴ Pro",
    "Hiragino Kaku Gothic Pro", "メイリオ", "Meiryo", Osaka, "ＭＳ Ｐゴシック",
    "MS PGothic", sans-serif;
  color: #333333;
}
body {
  margin: 0px;
  line-height: 1;
}
figure {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
}
::selection {
  background: rgba(0, 168, 135, 0.3);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // display: flex;
  // flex-direction: column;
  width: 100vm;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/** ------------------------------------- */
.header {
  // height: 10vh;
  // margin-top: 5px;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.main {
  // flex: 1;
  background-color: rgb(245, 235, 231);
  overflow: hidden;
}
/** ------------------------------------- */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
</style>
