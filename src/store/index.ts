import { createStore } from "vuex";

export default createStore({
  state: {
    header: {
      menuList: [
        {
          en: "Top",
          ja: "トップ",
        },
        {
          en: "COURSE GUIDE",
          ja: "コースガイド",
        },
        {
          en: "NEWS",
          ja: "お知らせ",
        },
        {
          en: "FARE",
          ja: "料金",
        },
        {
          en: "INFORMATION",
          ja: "施設案内",
        },
        {
          en: "ACCESS",
          ja: "アクセス",
        },
        {
          en: "お問い合わせ",
          ja: "お問い合わせ",
        },
      ],
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
