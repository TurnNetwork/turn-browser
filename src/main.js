import 'core-js/stable'
import 'regenerator-runtime/runtime';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';
import VueI18n from 'vue-i18n';
import messages from '@/lang/index';
import ElementUI from 'element-ui';
import ElementLocale from 'element-ui/lib/locale';
import AFTableColumn from 'af-table-column';
import VueWindowSize from 'vue-window-size';

import VueClipboard from 'vue-clipboard2';
import { mapActions } from 'vuex';

// 二维码生成
import VueQriously from 'vue-qriously';
Vue.use(VueQriously);

// 首页全屏动画
import VueParticles from 'vue-particles';
Vue.use(VueParticles);

import './filters';
import './directives';
import routeJump from './mixins';
// css
import '../public/static/css/reset.css';
import '../public/static/css/element-ui.css';
import '../public/static/css/iconfont.css';
import '../public/static/css/Montserrat.css';
// less
import '@/less/index.less';

Vue.use(VueI18n);
Vue.use(ElementUI);
Vue.use(VueClipboard);
Vue.use(VueWindowSize);
Vue.mixin(routeJump);

router.beforeEach((to, from, next) => {
  next();
});
router.afterEach(function (to) {
  window.scrollTo(0, 0);
});

Vue.config.productionTip = false;

// const GetQueryString = (name) => {
//   let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
//   let r = window.location.search.substr(1).match(reg);
//   if (r != null) return decodeURI(decodeURI(r[2])); return null;
// }
// let lang = GetQueryString('lang')
// if (lang =='zh'){
//     //中文
// localStorage.setItem('i18nLocale', 'zh-cn')
// } else if (lang == 'en'){
//     //英文
localStorage.setItem('i18nLocale', 'en')
// localStorage.setItem('i18nLocale', 'zh-cn')
// }
const language = navigator.language || window.navigator['browserLanguage'];
let browserLanguage = localStorage.getItem('i18nLocale')
  ? localStorage.getItem('i18nLocale')
  : language.toLowerCase();
browserLanguage = browserLanguage == 'zh-cn' ? 'zh-cn' : 'en';
const i18n = new VueI18n({
  locale: browserLanguage,
  messages
});

//table列宽自适应
Vue.use(AFTableColumn);

ElementLocale.i18n((key, value) => i18n.t(key, value));

export default window.vueVm = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
  methods: {
    ...mapActions(['initJsonData'])
  },
  beforeCreate() {
    store.dispatch('initJsonData', i18n.locale);
  },
  created() {
  },
  beforeDestroy() {
    localStorage.removeItem('i18nLocale');
  },
  destroyed() {
    localStorage.removeItem('i18nLocale');
  }
}).$mount('#app');



//提案类型   1：文本提案； 2：升级提案；  3参数提案。
Vue.filter('proposalType', (type) => {
  if (type === '1') return '文本提案';
  if (type === '2') return '升级提案';
  if (type === '3') return '参数提案';
  if (type === '4') return '取消提案';
  return '未知类型';
});

//状态  1：投票中  2：通过  3：失败   4：预升级  5：升级完成    已通过=2 或4 或 5
Vue.filter('proposalStatus', (status) => {
  if (status === '1') return '投票中';
  if (status === '2' || status === '4' || status === '5') return '已通过';
  if (status === '3') return '已拒绝';
  return '未知状态';
});

//投票选型  1：支持；  2：反对；  3弃权
Vue.filter('votePropotype', (status) => {
  if (status === '1') return '支持';
  if (status === '2') return '反对';
  if (status === '3') return '弃权';
  return '未知类型';
});
