<template>
  <div class="hogehoge">
    <TopVisual />
    <Institution />
  </div>
</template>
<script>
import TopVisual from "@/components/Top/TopVisual.vue";
import Institution from "@/components/Top/Institution.vue";

export default {
  name: "Top",
  components: { TopVisual, Institution },
  data() {},
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
</style>