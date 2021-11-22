<template>
  <div>
    <div class="boxItem">
      <div class="boxItemContent">
        <div class="boxItemPhoto">
          <img :src="photeSrc()" height="186" width="279" />
        </div>
        <div class="boxItemTitle">
          <h3>{{ boxContent.baseTitleText }}</h3>
          <h4>{{ boxContent.descriptionText }}</h4>
        </div>
      </div>
      {{ boxContent.boxText }}
    </div>
  </div>
</template>
<script>
export default {
  name: "BoxContents",
  components: {},
  props: {
    boxContent: "",
  },
  data() {
    return {};
  },
  created: function () {},
  computed: {},
  methods: {
    photeSrc() {
      console.log(this.boxContent.imgName);
      return require("@/assets/" + this.boxContent.imgName);
    },
  },
};
</script>
<style>
.boxItemContent {
  margin: 0 5rem;
  padding: 2rem 2rem;
  display: flex;
  transition: all 0.5s ease-in-out;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.boxItemContent:hover {
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.45);
}
.boxItemTitle {
  margin: 0 0 0 4rem;
  vertical-align: middle;
}
.boxItemTitle h3 {
  font-size: 2rem;
}
</style>
