<template>
  <div class="header-wrap" :style="{ background: scrollTop > 80 ? '#030911' : 'transparent' }">
    <div class="header-main">
      <div class="logo cursor">
        <img style="width: 120px;" src="@/assets/imagesV2/Fullname-horizontal.png" />
      </div>
      <div class="menu">
        <el-menu :default-active="$route.path" :router="true" class="el-menu-demo" mode="horizontal" hide-timeout="1000"
          background-color="transparent" text-color="#999" active-text-color="#FFF">
          <el-menu-item @click="cancelSearch" index="/" >
            <span :class="{ active: $route.path == '/' }">{{ $t('menu.home') }}</span>
          </el-menu-item>
          <el-menu-item @click="cancelSearch" class="more-item">
            <el-dropdown placement="bottom-start" class="more-dropdown" @command="dropdownCommand"
              @visible-change="nodeDropdownChangHandle">
              <span class="el-dropdown-link more-title" :class="{
                active:
                  $route.path.indexOf('/node') > -1 ||
                  $route.path.indexOf('/micro_node') > -1
              }">{{ $t('menu.nodes') }}
                <i :class="{
                  arrowDown: nodeDropdownShow == false,
                  arrowUp: nodeDropdownShow == true,
                }" class="arrow el-icon-arrow-down arrowUp"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/node">{{
                  $t('menu.validator')
                }}</el-dropdown-item>
                <el-dropdown-item command="/micro_node">{{
                  $t('menu.microNode')
                }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
          <el-menu-item @click="cancelSearch" class="more-item">
            <el-dropdown placement="bottom-start" class="more-dropdown" @command="dropdownCommand"
              @visible-change="blockDropdownChangHandle">
              <span class="el-dropdown-link more-title" :class="{
                active:
                  $route.path.indexOf('block') > -1 ||
                  $route.path.indexOf('trade') > -1 ||
                  $route.path.indexOf('/address') > -1,
              }">{{ $t('menu.blockChain') }}
                <i :class="{
                  arrowDown: blockDropdownShow == false,
                  arrowUp: blockDropdownShow == true,
                }" class="arrow el-icon-arrow-down arrowUp"></i>
              </span>
              <el-dropdown-menu >
                <div class="navibarBlockChain">
                  <div class="navibarContent ">
                    <div>L1:</div>
                    <div class="selectNavibarHover">
                      <router-link to="/block/index" class="navibarFont">{{$t('menu.block')}}</router-link>
                    </div>
                    <div class="selectNavibarHover">
                      <router-link to="/block/trade" class="navibarFont">{{$t('menu.transaction')}}</router-link>
                    </div>
                  </div>
                  <div class="navibarContent">
                    <div>L2(Bubbles):</div>
                    <div class="selectNavibarHover">
                      <router-link to="/bubblesList" class="navibarFont">{{$t('menu.block')}}</router-link>
                    </div>
                    <div class="selectNavibarHover">
                      <router-link to="/tradeLayerTwo" class="navibarFont">{{$t('menu.transaction')}}</router-link>
                    </div>
                  </div>

                </div>
              </el-dropdown-menu>
<!--              <el-dropdown-menu slot="dropdown">-->
<!--                <el-dropdown-item command="/block/index">{{-->
<!--                  $t('menu.block')-->
<!--                }}</el-dropdown-item>-->
<!--                <el-dropdown-item command="/block/trade">{{-->
<!--                  $t('menu.transaction')-->
<!--                }}</el-dropdown-item>-->
<!--              </el-dropdown-menu>-->
            </el-dropdown>
          </el-menu-item>
          <el-menu-item @click="cancelSearch" class="more-item">
            <el-dropdown placement="bottom-start" class="more-dropdown" @command="dropdownCommand"
              @visible-change="tokensDropdownChangHandle">
              <span class="el-dropdown-link more-title" :class="{
                active: $route.path.indexOf('tokens') > -1,
              }">{{ $t('menu.tokens') }}
                <i :class="{
                  arrowDown: tokensDropdownShow == false,
                  arrowUp: tokensDropdownShow == true,
                }" class="arrow el-icon-arrow-down arrowUp"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/tokens/tokensTranfer/prc20">{{
                  $t('menu.erc20Transfer')
                }}</el-dropdown-item>
<!--                <div class="dividing-line"></div>-->
                <el-dropdown-item command="/tokens/tokensTranfer/prc721">{{
                  $t('menu.erc721Transfer')
                }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
          <el-menu-item @click="cancelSearch" class="more-item">
            <el-dropdown placement="bottom-start" class="more-dropdown" @command="dropdownCommand"
              @visible-change="moreDropdownChangHandle">
              <span class="el-dropdown-link more-title" :class="{
                active:
                  ['/proposal', '/governable-parameter', '/foundation-address', '/add-to-extension'].includes($route.path)
              }">{{ $t('menu.more') }}
                <i :class="{
                  arrowDown: moreDropdownShow == false,
                  arrowUp: moreDropdownShow == true,
                }" class="arrow el-icon-arrow-down arrowUp"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="/proposal">{{
                  $t('menu.proposal')
                }}</el-dropdown-item>
                <el-dropdown-item command="/governable-parameter">{{
                  $t('more.governableParameter')
                }}</el-dropdown-item>
                <el-dropdown-item command="/add-to-extension">{{
                  $t('more.addToExtension')
                }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>

          <el-menu-item @click="cancelSearch" index="/faucet">
               <span :class="{
                  active: $route.path.indexOf('faucet') > -1,
                }">
                Faucet
              </span>
          </el-menu-item>
          <el-menu-item @click="cancelSearch" class="more-item">
            <el-dropdown placement="bottom-start" class="more-dropdown" @command="handleCommandLangage"
              @visible-change="LangVisibleChange">
              <span class="el-dropdown-link _dropdown-link-active">
                {{ networkObj[network] }}
                <i :class="{
                  arrowDown: langDropdownShow == false,
                  arrowUp: langDropdownShow == true,
                }" class="arrow el-icon-arrow-down arrowUp"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item, index) in options" :key="index" :command="item.value">{{ item.label
                }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
        </el-menu>
        <div class="search-wrap" v-if="windowWidth >= 750 && $route.path != '/' && hideSearch">
          <!-- @mouseleave="searchShow = true" -->
          <span @click="showSearch" class="text-size cursor">
            <img  src="../../assets/imagesV2/search.svg" alt="">
          </span>
          <!-- v-else -->
          <div v-show="searchShow"
            class="search search-header" :class="{
              'search-active': isFocus
            }" :style="{ width: !searchShow ? '0px' : '50vw' }">

            <el-input :placeholder="$t('search.placeHolder')" @focus="isFocus = true" @blur="isFocus = false"
              v-model="searchKey" @keyup.enter.native="searchFn" size="mini"></el-input>
            <el-button type="primary" class="btn-header el-searchs" :class="{ 'search-btn-active': isFocus }"
              @click="cancelSearch" >Cancel</el-button>
          </div>
        </div>
      </div>

      <div class="search search-header mobile-search" :class="{
        'search-active': isFocus,
      }" v-if="windowWidth < 750 && $route.path != '/'">
        <el-input :placeholder="$t('search.placeHolder')" @focus="isFocus = true" @blur="isFocus = false"
          v-model="searchKey" @keyup.enter.native="searchFn" size="mini"></el-input>
        <el-button type="primary" class="btn-header el-searchs" :class="{ 'search-btn-active': isFocus }"
          @click="cancelSearch" :disabled="disabledBtn">Cancel</el-button>
      </div>
      <div :class="{ mobileMenuWrapper: true, opened: mobileMenuOpenend }" v-if="windowWidth < 750">
        <div class="mobile-menu-back" @click="toggleMobileMenuOpenend"></div>
        <div class="mobile-menu-content">
          <el-menu :default-active="$route.pth" :router="true" class="mobile-menu" background-color="#FFF"
            text-color="#121f38" active-text-color="#121f38">
            <el-menu-item @click="toggleMobileMenuOpenend" index="/">
              <span :class="{ active: $route.path == '/' }">
                {{ $t('menu.home') }}
              </span>
<!--              <router-link to="/">{{ $t('menu.home') }}</router-link>-->
            </el-menu-item>
            <el-submenu index="/nodes">
              <template slot="title">
                <span>{{ $t('menu.nodes') }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/node" @click="toggleMobileMenuOpenend" :class="{ active: $route.path == '/node' }">
                  <router-link to="/node">{{
                    $t('menu.validator')
                  }}</router-link>
                </el-menu-item>
                <el-menu-item index="/micro_node" @click="toggleMobileMenuOpenend"
                  :class="{ active: $route.path == '/micro_node' }">
                  <router-link to="/micro_node">{{
                    $t('menu.microNode')
                  }}</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <span>{{ $t('menu.blockChain') }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/block/index" @click="toggleMobileMenuOpenend"
                  :class="{ active: $route.path == '/block/index' }">
                  <router-link to="/block/index">{{
                    $t('menu.block')
                  }}</router-link>
                </el-menu-item>
                <el-menu-item index="/block/trade" @click="toggleMobileMenuOpenend"
                  :class="{ active: $route.path == '/block/trade' }">
                  <router-link to="/block/trade">{{
                    $t('menu.transaction')
                  }}</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <span>{{ $t('menu.tokens') }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/tokens/tokensTranfer/prc20" @click="toggleMobileMenuOpenend" :class="{
                  active: $route.path == '/tokens/tokensTranfer/prc20',
                }">
                  <router-link to="/tokens/tokensTranfer/prc20">{{
                    $t('menu.erc20Transfer')
                  }}</router-link>
                </el-menu-item>
                <el-menu-item index="/tokens/tokensTranfer/prc721" @click="toggleMobileMenuOpenend" :class="{
                      active: $route.path == '/tokens/tokensTranfer/prc721',
                    }">
                  <router-link to="/tokens/tokensTranfer/prc721">{{
                    $t('menu.erc721Transfer')
                  }}</router-link>

                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <span>{{ $t('menu.more') }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item @click="toggleMobileMenuOpenend" index="/proposal"
                  :class="{ active: $route.path == '/proposal' }">
                  <router-link to="/proposal">{{
                    $t('menu.proposal')
                  }}</router-link>
                </el-menu-item>
                <el-menu-item @click="toggleMobileMenuOpenend" index="/governable-parameter"
                  :class="{ active: $route.path == '/governable-parameter' }">
                  <router-link to="/governable-parameter">{{
                    $t('more.governableParameter')
                  }}</router-link>
                </el-menu-item>
                <el-menu-item @click="toggleMobileMenuOpenend" index="/add-to-extension"
                  :class="{ active: $route.path == '/add-to-extension' }">
                  <router-link to="/add-to-extension">{{
                    $t('more.addToExtension')
                  }}</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
<!--            <el-menu-item index="/faucet" :class="{-->
<!--                  active: $route.path.indexOf('faucet') > -1,-->
<!--                }">-->
<!--              <router-link to="/faucet">FAUCET</router-link>-->
<!--            </el-menu-item>-->

            <el-menu-item index="/faucet">
               <span :class="{
                  active: $route.path.indexOf('faucet') > -1,
                }">
                Faucet
              </span>
            </el-menu-item>
          </el-menu>


          <div class="language-section">

            <div v-for="(item, index) in options" :key="index" :class="{
              languageItem: true,
              active: network == item.value,
            }">
              <span class="language-text" @click="handleCommandLangage(item.value)">{{ item.value == 'test'
                ? 'TEST' : 'MAINNET' }}</span>
              <span class="language-divider">/</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/API-services';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import store from '@/vuex/store';
import { toBech32Address, isAddress } from '@/services/web3-utils';

let configRetryTime = 1000;
export default {
  name: '',
  data() {
    return {
      scrollTop: 0,
      searchShow: false,
      mobileMenuOpenend: false,
      netDropdownShow: false,
      langDropdownShow: false,
      blockDropdownShow: false,
      nodeDropdownShow: false,
      moreDropdownShow: false,
      tokensDropdownShow: false,
      iconClass1: 'el-icon-arrow-down',
      iconClass2: 'el-icon-arrow-down',
      disabledBtn: false,
      dropDisabled: false,
      searchKey: '', //搜索
      network: 'test',
      chainList: [
        {
          en: 'Alaya',
          zh: 'Alaya',
        },
      ],
      options: [
        {
          value: 'test',
          // label: 'Bubble Test',
          label: 'Turn Test',
        },
        // {
        //   value: 'main',
        //   label: 'Bubble Mainnet',
        // },
      ],
      networkObj: {
        'test': 'Turn Test',
        // 'main': 'Bubble Mainnet',
      },
      // options: [
      //   {
      //     value: 'zh-cn',
      //     label: '简体中文',
      //   },
      //   {
      //     value: 'en',
      //     label: 'English',
      //   },
      // ],
      // languageObj: {
      //   'zh-cn': '简体中文',
      //   en: 'English',
      // },
      isFocus: false,
    };
  },
  computed: {
    ...mapGetters(['chainId', 'chainHttp', 'hideSearch', 'configData']),
    lang() {
      return this.$i18n.locale.indexOf('zh') !== -1 ? 'zh' : 'en';
    },
    logoURL() {
      return this.configData.logo
        ? process.env.VUE_APP_API_ROOT + this.configData.logo
        : '#';
    },
  },
  watch: {},
  components: {},
  inject: ['reload'],
  methods: {
    ...mapActions(['changeChainId', 'updateConfigData']),
    getConfig() {
      let flag = true;
      apiService.more
        .globalConfig({ v: Date.now() })
        .then((res) => {
          // debugger
          flag = false;
          let sortByOrder = (a, b) => a.order - b.order;
          res.links.sort(sortByOrder);
          res.social.sort(sortByOrder);
          this.updateConfigData(res);
        })
        .catch((err) => {
          console.error('err: ', err);
          configRetryTime = Math.ceil(configRetryTime * 1.2);
          if (flag) {
            setTimeout(this.getConfig, configRetryTime);
          }
        });
    },
    toggleMobileMenuOpenend() {
      this.mobileMenuOpenend = !this.mobileMenuOpenend;
      this.cancelSearch();
    },
    netVisibleChange(boolean) {
      this.netDropdownShow = boolean;
    },
    blockDropdownChangHandle(boolean) {
      this.blockDropdownShow = boolean;
    },
    nodeDropdownChangHandle(boolean) {
      this.nodeDropdownShow = boolean;
    },
    tokensDropdownChangHandle(boolean) {
      this.tokensDropdownShow = boolean;
    },
    moreDropdownChangHandle(boolean) {
      this.moreDropdownShow = boolean;
    },
    goIndex() {
      this.$router.push('/');
    },
    visibleChange1(val) {
      if (val) {
        this.iconClass1 = 'el-icon-arrow-up';
      } else {
        this.iconClass1 = 'el-icon-arrow-down';
      }
    },
    LangVisibleChange(boolean) {
      this.langDropdownShow = boolean;
    },
    getNetObj(id) {
      console.warn('首次id》》》', id);
      let arr = this.chainList.filter((item, index) => {
        return item.cid == id;
      });
      // let arr = sessionStorage.getItem('chainList').filter((item,index)=>{
      //     return item.cid == id
      // })
      // debugger
      if (!arr.length) {
        return '';
      }
      let arr1 = arr[0];
      console.warn('首次net》》》', arr1['en']);
      return arr1['en'];
    },
    handleCommand(command) {
      console.log('网络切换》》》', command);
      store.commit('CHANGE_ID', command);
      let arr = this.chainList.filter((item, index) => {
        return item.cid == command;
      });
      store.commit('CHANGE_HTTP', arr[0].http);
      store.commit('CHANGE_CONTEXT', arr[0].context);
      //切换网络之后，将当前网络存在sessionStorage
      sessionStorage.setItem('commandId', command);
      sessionStorage.setItem('commandHttp', arr[0].http);
      sessionStorage.setItem('commandContext', arr[0].context);
      localStorage.setItem('commandContext', arr[0].context);
      localStorage.setItem('cid', command);
      this.$router.push({
        path: '/',
      });
    },
    handleCommandLangage(command) {
      console.log(command);
      this.network = command
      // this.toggleMobileMenuOpenend();
      // console.warn('command>>>>', command);
      // this.$i18n.locale = command;
      // this.language = command;
      // window.i18nLocale = command;
      // localStorage.setItem('i18nLocale', command);

      // // 处理交易失败提示语的语言切换，需要重新请求接口
      // const path = this.$route.path;
      // if (
      //   path == '/block/trade' ||
      //   path == '/address-detail' ||
      //   path == '/block-detail' ||
      //   path == '/trade-detail'
      // ) {
      //   this.reload();
      // }
      // this.$i18n.locale = localStorage.getItem('i18nLocale')
    },

    showSearch(){
      console.log("11xxx")
      this.searchShow = true;
    },

    cancelSearch(){
      console.log("xxx")
      this.searchShow = false;
    },

    //查询
    searchFn() {
      let param = this.searchKey.trim();
      if (!param) {
        return
      }
      let isHEX = false;
      if (/^(0x)[\da-f]{40}/i.test(param)) {
        param = param.toLowerCase()
      }
      // if (isAddress(param)) {
      //   isHEX = param;
      //   param = toBech32Address(process.env.VUE_APP_ADR_PREV, param);
      // }
      this.disabledBtn = true;
      apiService.search
        .query({ parameter: param })
        .then((res) => {
          let { errMsg, code, data } = res;

          this.searchKey = '';
          if (code == 0) {
            //根据type不同进入不同的详情页
            if (!data.type) {
              this.$message.warning(this.$t('indexInfo.searchno'));
            } else {
              if (isHEX && data.struct.address) {
                data.struct.address = isHEX;
              }
              this.switchFn(data.type, data.struct);
            }
          } else {
            this.$message.warning(this.$t('indexInfo.searchno'));
          }
        })
        .catch((error) => {
          this.searchKey = '';
          this.$message.error(error);
        })
        .finally(() => {
          this.disabledBtn = false;
          this.cancelSearch();
        });
    },
    switchFn(type, struct) {
      switch (type) {
        //区块详情
        case 'block':
          this.$router.push({
            path: '/block-detail',
            query: {
              height: struct.number,
            },
          });
          if (this.$route.path == '/block-detail') {
            this.reload();
          }
          break;
        //交易详情
        case 'transaction':
          // let path = ''
          // struct.txReceiptStatus == -1 ? path='/trade-pending-detail' : path = '/trade-detail'
          this.$router.push({
            path: '/trade-detail',
            query: {
              txHash: struct.txHash,
            },
          });
          if (this.$route.path == '/trade-detail') {
            this.reload();
          }
          break;
        //节点详情
        case 'staking':
          this.$router.push({
            path: '/node-detail',
            query: {
              address: struct.nodeId,
            },
          });
          if (this.$route.path == '/node-detail') {
            this.reload();
          }
          break;
        //地址详情==(钱包地址详情)
        case 'address':
          this.$router.push({
            path: '/address-detail',
            query: {
              address: struct.address,
            },
          });
          if (this.$route.path == '/address-detail') {
            this.reload();
          }
          break;
        //合约详情
        case 'contract':
          this.$router.push({
            path: '/contract-detail',
            query: {
              address: struct.address,
            },
          });
          if (this.$route.path == '/contract-detail') {
            this.reload();
          }
          break;
      }
    },
    // 更多 选项选中事件
    dropdownCommand(command) {
      this.$router.push({
        path: command,
        query: {
          //   address: address
        },
      });
    },
  },
  //生命周期函数
  created() {
    this.language = this.$i18n.locale.indexOf('zh') !== -1 ? 'zh-cn' : 'en';
    this.getConfig();
  },
  mounted() {
    window.addEventListener('scroll', (e) => {
      this.scrollTop = document.documentElement.scrollTop
      // console.log(document.documentElement.scrollTop);
    })
  },
};
</script>
<style lang="less" scoped>
.navibarBlockChain {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  height: 110px;
  border-radius: 4px;
  //border: 1px solid var(--Transparency-300, rgba(255, 255, 255, 0.10));
  background: var(--Gray-200, #15191E);
  color: #FFFFFF;
  margin: 0 0 0 0 !important;

  .navibarContent{
    //background-color: #cf326e;
    width: 145px;
    height: 100%;
    margin: 0 0 0 0 !important;
    padding: 0px 10px;
    border-radius: var(--Number4, 4px);
    font-family: Montserrat-Regular;
    font-size: 14px;
    color: #FFFFFF !important;
  }
}

.selectNavibarHover{
  /*color: var(--Blue-600, #0075FF);*/
  font-family: Montserrat-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  margin-top: 10px;
  padding: 5px 0px;

  &:hover{
    //color: var(--Gray-900, #D5D8DD);
    border-radius: var(--Number4, 4px);
    //border: 1px solid var(--Transparency-100, rgba(255, 255, 255, 0.03));
    background: var(--Gray-300, #22252B);
    padding: 5px 0px;
  }
}

.navibarFont{
  color: #7f868d;
  font-family: Montserrat-Regular;

}




  /deep/.search .el-button.el-searchs{
    /*font-size: 14px;*/
    color: var(--Blue-600, #0075FF);
    background: var(--Gray-200, #15191E);;
    border: none;
    border-left: 0px;
    /*border-left: 1px solid #333333;*/
    /*border-radius: 0px 4px 4px 0px;*/
    height: 100%;
  }

  /deep/.search .el-button.el-searchs.btn-header:hover{
    color: var(--Blue-600, #0075FF);
    border-left: 0px;
  }

  /deep/.search {
    border-radius: 6px;
    .el-input input{
      color: var(--Font-Scence-, #D5D8DD) !important;
      font-family: Montserrat-Regular;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 19.6px */


      background: var(--Gray-200, #15191E);
      font-size: 14px;
      &::placeholder {
        color: var(--Font-Scence-, #6C7584);
        font-family: Montserrat-Regular;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
      }
      /*&:focus{*/
      /*  color: var(--Font-Scence-, #D5D8DD) !important;*/
      /*  font-family: Montserrat-Regular;*/
      /*  font-size: 14px;*/
      /*  font-style: normal;*/
      /*  font-weight: 400;*/
      /*  line-height: 140%; !* 19.6px *!*/
      /*}*/
    }
  }

.searchV2{
  display: flex;
  width: 485px;
  height: 40px;
  fill: var(--Gray-200, #15191E);
  stroke-width: 1px;
  stroke: var(--Transparency-300, rgba(255, 255, 255, 0.10));
}

.text-size {
  display: flex;
  font-size: 20px;
  margin-left: 20px;
}

.header-wrap {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 90px;
  width: 100%;
  z-index: 2000;
  user-select: none;

  .header-main {
    max-width: 1224px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center; //居中对齐
    justify-content: space-between; //两端对齐
  }

  .menu {
    margin-right: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    .active {
      color: #fff !important;
      padding-bottom: 10px !important;
      border-bottom: 1px solid var(--Gray-1000, #F1F2F4) !important;
      /*span{*/
      /*  padding-bottom: 10px !important;*/
      /*  border-bottom: 1px solid var(--Gray-1000, #F1F2F4) !important;*/
      /*}*/

      /*div{*/
      /*  span{*/
      /*    padding-bottom: 10px !important;*/
      /*    border-bottom: 1px solid var(--Gray-1000, #F1F2F4) !important;*/
      /*  }*/
      /*}*/

    }
  }

  .search {
    display: flex;
    opacity: 1;
    transition: opacity 0.3s ease;

    // &.search-hide {
    //   opacity: 1;
    //   display: flex;
    // }
  }

  .search-wrap {
    margin-left: 12px;
    position: relative;

    .search-header {
      position: absolute;
      transition: 3s;
      right: 0px;
      top: 35px;
      width: 485px !important;
    }
  }
}

.logo {
  display: inline-block;
  // height: 100%;
  // width: 225px;
  // overflow: hidden;
  margin-right: 20px;

  .logo-right {
    margin-top: 5px;
    margin-left: 42px;
  }

  .iconAlaya {
    width: 82px;
    height: 30px;
  }

  .icon1 {
    // padding-top: 10px;
    padding-right: 4px;
    float: left;
  }

  .icon2 {
    padding-top: 6px;
    padding-bottom: 2px;
  }

  p {
    font-size: 12px;
    color: #b3b3b3;
    letter-spacing: 0;
    white-space: nowrap;
    min-width: 84px;
  }
}

.el-menu-demo {
  display: flex;

  li.el-menu-item {
    border: 0px;
  }
}

.right-most {
  flex-shrink: 0; // 网络切换+中英文不缩小
  // width: 200px;
  display: flex;
  justify-content: flex-end;

  div {
    font-size: 14px;
    color: #fff;
    letter-spacing: 0;
    text-align: right;

    .el-dropdown-link {
      cursor: pointer;
    }
  }
}

.right-most>.el-dropdown:first-child {
  margin: 0 25px;
}

.el-dropdown-menu {
  /*padding: 0 0 0 0;*/
  padding: 10px !important;
  /*background-color: black;*/
  background-color: var(--Gray-200, #15191E);
  border-radius: 6px;

  .el-dropdown-menu__item {
    color: #7f868d;
    background-color: var(--Gray-200, #15191E);
    font-family: Montserrat-Regular;
    letter-spacing: 0;
    border-radius: 4px;
    line-height: 40px;
    padding: 0 10px;
  }

  .el-dropdown-menu__item:hover {
    background: var(--Gray-300, #22252B);
  }

  .el-dropdown-menu__item:focus {

  }


  :first-child {
    margin: 9px 0 0 0;
  }
}

.search-header {
  min-width: 355px;
  width: 50vw;

  // max-width: 80%;
  flex: 1;

  @media only screen and (max-width: 1366px) {
    .el-button {
      padding: 12px 14px;
    }
  }
}

.el-menu-demo {
  .el-menu-item {
    padding: 0 19px;
  }
}

@media only screen and (max-width: 1680px) {
  .header-wrap {
    // padding: 0 3.2%;
  }

  .el-menu-demo {
    .el-menu-item {
      padding: 0 13px;

      &:last-child {
        padding-right: 0px;
      }
    }
  }
}

@media only screen and (max-width: 1366px) {
  .header-wrap {
    padding: 0 0;

    .logo {
      width: 80px;
      margin-right: 0;
      flex-shrink: 0;

      .icon2 {
        padding-top: 15px;
      }

      .text {
        display: none;
      }
    }
  }
}

.to-help {
  width: 100%;
  display: inline-block;
}

.more-title {
  font-size: 14px;
  color: inherit;
  letter-spacing: 0;
  text-align: right;
  outline: none;
}

.more-dropdown {
  display: inline;
  color: inherit;
}

.more-item {
  color: #999999 !important;
}

.mobile-menu-btn {
  display: none;
}

.mobileMenuWrapper {
  position: fixed;
  left: 100vw;
  right: -100vw;
  transition: all 0.5s;
  top: 0;
  bottom: 0;
  z-index: 101;
  display: flex;
  flex-direction: row-reverse;

  .mobile-menu-back {
    z-index: 100;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: none;
  }

  &.opened {
    left: 0;
    right: 0;

    .mobile-menu-back {
      display: block;
    }
  }

  .mobile-menu-content {
    width: 208px;
    background-color: white;
    z-index: 102;
    padding: 12px;
    overflow-y: auto;

    .mobile-menu {
      .el-menu-item {
        color: #121f38;
        min-width: auto;

        a {
          color: #121f38;
        }

        &.active {
          font-weight: 700;

          a {
            font-weight: 700;
          }
        }
      }

      li {
        padding: 0 !important;
        text-align: center;
      }
    }

    .language-section {
      display: flex;
      justify-content: center;
      align-items: center;

      .languageItem {
        color: #121f38;
        font-size: 14px;
        line-height: 56px;

        .language-text {
          cursor: pointer;
          padding: 8px;
          color: #7d7d7d;
        }

        &.active {
          .language-text {
            color: #121f38;
          }
        }

        &:last-child {
          .language-divider {
            display: none;
          }
        }
      }
    }
  }
}

@media (max-width: 750px) {
  .header-wrap {
    flex-wrap: wrap;
    min-height: 102px;
    height: auto;
    // padding: 30px 0;
    z-index: 9999;

    .logo.cursor {
      margin-left: 30px;
    }

    .menu {
      .el-menu-demo {
        //display: none;
      }
    }

    .mobile-search {
      min-width: calc(100% - 80px);
      max-width: unset;
      margin: 0 30px;
      margin-top: 30px;
      opacity: 1;

      button {
        padding: 0 8px !important;
      }
    }

    .right-most {
      .el-dropdown {
        display: none;
      }

      .mobile-menu-btn {
        display: block;
        margin-right: 30px;

        img {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .header-wrap {
    flex-wrap: wrap;
    min-height: 102px;
    height: auto;
    padding: 20px 0;

    .logo.cursor {
      margin-left: 20px;
    }

    .menu {
      .el-menu-demo {
        //display: none;
      }
    }

    .mobile-search {
      min-width: calc(100% - 80px);
      max-width: unset;
      margin: 0 20px;
      margin-top: 20px;
      opacity: 1;

      button {
        padding: 0 8px !important;
      }
    }

    .right-most {
      .el-dropdown {
        display: none;
      }

      .mobile-menu-btn {
        display: block;
        margin-right: 20px;

        img {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
<style lang="less">
.search-header .el-input .el-input__inner {
  color: #fff !important;
}

.search-header .el-button.el-button--primary.is-disabled {
  color: #8e8e8e;
  background: #030911;
}

.menu {
  .el-menu-demo>.el-menu-item {
    background: transparent !important;

    &:hover {
      color: var(--Gray-1000, #F1F2F4) !important;
      // background: transparent !important;
    }
  }
}

.el-menu--horizontal,
.el-menu--horizontal>ul {
  border: 0 !important;
}

.el-menu--popup,
.el-menu--popup>li {
  background: #0e1438 !important;
}

.el-menu--popup {
  min-width: 150px;
  margin: 0 0 0 0;
  padding: 0 0 0 0;

  a {
    color: #8d9bb8;
  }

  .el-menu-item:hover {
    background: #1f254c !important;
  }

  .el-menu-item:active {
    background: #0f83cd !important;
  }
}

//右边的dropdown
.el-dropdown-menu {
  padding: 0 0 0 0 !important;
  border: 0px solid #ebeef5 !important;
}

.el-dropdown-menu__item.is-disabled {
  opacity: 0.25;
}

.right-most {
  .el-select .el-input .el-input__inner {
    font-family: ArialMT;
    font-size: 14px;
    color: #d7dde9;
    letter-spacing: 0;
    border: none;
    background: transparent;
  }

  .el-select:hover .el-input__inner {
    background: transparent;
    border: none;
    color: #d7dde9;
  }

  .el-select .el-input.is-focus .el-input__inner {
    background: transparent;
    border: none;
    color: #d7dde9;
  }
}

.search .el-button.el-searchs.btn-header {
  &.search-btn-active {
    /*color: #fff;*/
    /*border-left: 1px solid #666;*/
    border-left: none !important;
    color: var(--Blue-600, #0075FF) !important;
  }

  &:hover {
    color: #0798de;
    background: #15191E !important;
    border-left: none !important;
  }

  &:active {
    color: #2d8ebc;
  }
}

.faucet {
  a {
    color: #fff;
  }
}

._faucet {
  margin: 0 10px;
}

.search-header.search-active {
  border: 1px solid #666;

  .search-btn-active:hover {
    border-left: 1px solid #666 !important;
  }
}

.dividing-line {
  position: relative;
  padding: 4px;

  &::after {
    content: '';
    position: absolute;
    display: block;
    left: 20px;
    right: 20px;
    height: 1px;
    background: #e4e7ed;
  }
}

// @media screen and (max-width: 1680px) {
//     .search {
//         .el-input{
//             // width:300px;
//             width:350px;
//         }
//     }
// }
// @media screen and (max-width: 1440px) {
//     .search {
//         .el-input{
//             // width:270px;
//             width:350px;
//         }
//     }
// }
// @media screen and (max-width: 1366px) {
//     .search {
//         .el-input{
//             // width:200px;
//             width:344px;
//         }
//     }

// }

.mobileMenuWrapper {
  .mobile-menu-content {
    .mobile-menu {
      border-right: none !important;

      li {
        .el-submenu__title {
          padding: 0 !important;

          .el-submenu__icon-arrow {
            color: #121f38;
            font-size: 16px;
          }
        }
      }

      .el-submenu {
        .el-menu {
          .el-menu-item-group {
            .el-menu-item-group__title {
              display: none;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .mobile-search {
    input {
      padding: 0 8px !important;
    }
  }
}
</style>
