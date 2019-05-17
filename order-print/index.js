var app = new Vue({
  el: "#app",
  data: {
    part3Right: [{ name: "收到图纸" }, { name: "收回图纸" }],
    table2: [
      "序号",
      "产品名称",
      "代号",
      "规格",
      "单位",
      "数量",
      "定额合计(h)",
      "工资系数",
      "金额合计(元)"
    ],
    table4: ["检验员签字", "组长签名", "考勤员签字", "主管签字"],
    message: "Hello Vue!"
  },
  mounted() {},
  methods: {
    printdata() {
      window.document.body.innerHTML = window.document.getElementById(
        "information1"
      ).innerHTML;
      window.print();
    }
  }
});
