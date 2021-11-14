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
    institutionContents: [
      {
        id: 0,
        imgName: "clubhouse.jpg",
        baseTitleText: "クラブハウス",
        descriptionText: "福知山東ゴルフクラブ場のクラブハウスです。",
      },
      {
        id: 1,
        imgName: "golf-factory.jpg",
        baseTitleText: "ゴルフ工房",
        descriptionText: "ご自身で、クラブの改造を行っていただけます。",
      },
      {
        id: 2,
        imgName: "bbq.jpg",
        baseTitleText: "バーベキュー場",
        descriptionText:
          "ラウンド・練習後に美味しいお肉を召し上がっていただけます。",
      },
      {
        id: 3,
        imgName: "ground-golf.jpg",
        baseTitleText: "ゴルフ場",
        descriptionText: "グランドゴルフにもご利用いただけます。",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
