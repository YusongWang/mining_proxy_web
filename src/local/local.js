
import Vue from 'vue'
import VueI18n from "vue-i18n";
Vue.use(VueI18n)

const messages = {
    en: {
      menu: {
        dashborad: "Dashborad",
        crate_proxy: "Crate Proxy",
        online_proxy: "Online Proxy Services",
      },
      system: {
        login: "Login",
        passworderror: "Password length must not be less than 6 bits",
        logout: "logout",
        password: "password",
      },
      dashboard: {
        open_pool: "Open Pools",
        online_workers: "Online Workers",
        total_hashrate: "Total Hashrate",
        share_rate: "Share Rate",
        start_time: "Runtime",
        version: "Version",
      },
      onlinepool: {
        total_overview: "Total Share/Total Accept/Total Reject/Total Rate",
        total_fee_share: "Fee Accept/Total Fee Rate",
        total_fee_hashrate: "Fee Hash(estimate)",
        port: "PROT - TCP/SSL/ENCRYPT",
        mode: "Run Mode",
        pool: "Pool",
        wallet: "Wallet",
        workername: "Worker",
        report_hashrate: "Report HashRate",
        total_share: "Total ",
        total_accept: "Total Share",
        total_reject: "Total Accept",
        fee_accept: "Total Reject",
        online_time: "Online Time",
        last_share_time: "Last Share Time",
      },
      proxy: {
        select: "Select",
        mode1: "Directly",
        mode2: "Prorate Dividends",
        mode3: "Take all",
      },
      message: {
        hello: "hello world",
      },
    },
    cn: {
      menu: {
        dashborad: "仪表盘",
        crate_proxy: "创建代理",
        online_proxy: "在线矿池",
      },
      system: {
        login: "系统登录",
        passworderror: "密码不能小于6位数",
        logout: "退出登录",
        password: "密码",
      },
      dashboard: {
        open_pool: "开启矿池",
        online_workers: "在线矿工",
        total_hashrate: "总算力",
        share_rate: "有效比",
        start_time: "运行时间",
        version: "版本号",
      },
      onlinepool: {
        total_overview: "总/接受/拒绝/百分比",
        total_fee_share: "抽水份额/百分比",
        total_fee_hashrate: "抽水算力(预估)",
        port: "端口TCP/SSL/加密",
        mode: "运行模式",
        pool: "池",
        wallet: "钱包",
        workername: "矿工名",
        report_hashrate: "报告算力",
        total_share: "总工作份额",
        total_accept: "接受份额",
        total_reject: "拒绝份额",
        fee_accept: "抽水份额",
        online_time: "在线时间",
        last_share_time: "最后一次提交时间",
      },
      proxy: {
        select: "请选择",
        mode1: "纯中转",
        mode2: "按比例抽水",
        mode3: "统一钱包",
      },
      message: {
        hello: "こんにちは、世界",
      },
    },
  };
  
  // 通过选项创建 VueI18n 实例
  const i18n = new VueI18n({
    locale: "en", // 设置地区
    messages, // 设置地区信息
  });


  export default i18n