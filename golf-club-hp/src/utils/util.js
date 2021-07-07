export default {
  methods: {
    /**
     * Date -> hh:mm:ssに変換
     * @param {*} date
     */
    formatDateToTime(value) {
      var hour = this.zeroPadding(value.getHours(), 2);
      var minute = this.zeroPadding(value.getMinutes(), 2);
      var second = this.zeroPadding(value.getSeconds(), 2);
      return hour + ":" + minute + ":" + second;
    },
    /**
     * 0のパディング処理
     */
    zeroPadding(num, len) {
      let zero = "";
      for (var i = 0; i < len; i++) {
        zero += "0";
      }
      return (zero + num).slice(-len);
    },
  },
};
