<template>
  <div class="footer-wrap">
    <div class="footer-main-top">
      <p>
        Powered by Bubble Network
      </p>
      <div class="download-btn" @click="connect">
        <img src="./../../assets/images/metamask.png" width="20px" height="20px" />
        Add Bubble Network
      </div>
    </div>
    <div>
      © 2023 BubbleScan . All rights reserved.
    </div>
    <!-- <div class="sub-foot" v-if="path == '/' && configData.links"> -->
    <!-- <h3>{{ $t('indexInfo.resource') }}</h3>
      <div class="foot-tabs">
        <span
          v-for="item in configData.links"
          :key="item.order"
          :class="{ hanim: windowWidth > 750 }"
        >
          <a
            class="ellipsis"
            style="padding: 0 4px"
            :href="item.url[configLang]"
            target="_blank"
          >
            {{ item.name[configLang] }}
          </a>
        </span>
      </div>
      <div class="foot-line"></div> -->
    <!-- </div> -->
    <!-- <div class="foot-index" v-if="path == '/' && configData.social">
      <div class="link-wrap">
        <a :href="configData.social[0].url[configLang] || 'https://t.me/UsaFeNetwork'
          " target="_blank" class="link-1"></a>
        <a href="javascript:void(0);" class="link-2">
          <img :src="logoPrevURL + configData.social[1].qrcode ||
            '../../assets/images/weixin.jpg'
            " alt="" class="wx-img" />
        </a>
        <a :href="configData.social[2].url[configLang] ||
          'https://twitter.com/UsaFe_Network'
          " target="_blank" class="link-3"></a>
        <a :href="configData.social[3].url[configLang] ||
          'https://www.reddit.com/user/UsaFe_Network'
          " target="_blank" class="link-4"></a>
        <a :href="configData.social[4].url[configLang] ||
          'https://medium.com/@UsaFe_Network'
          " target="_blank" class="link-5"></a>
        <div class="link-br" />
        <a :href="configData.social[5].url[configLang] ||
          'https://github.com/UsaFenetwork'
          " target="_blank" class="link-6"></a>

        <a :href="configData.social[6].url[configLang] ||
          'https://www.linkedin.com/company/platonnetwork/'
          " target="_blank" class="link-7"></a>
        <a :href="configData.social[7].url[configLang] ||
          'https://www.facebook.com/UsaFeNetwork/'
          " target="_blank" class="link-8"></a> -->
    <!-- <a
          :href="
            configData.social[8].url[configLang] ||
            'https://bihu.com/people/1215832888'
          "
          target="_blank"
          class="link-9"
        ></a> -->
    <!-- <a :href="configData.social[9].url[configLang] ||
          'https://www.chainnode.com/forum/267'
          " target="_blank" class="link-10"></a>
      </div>
    </div> -->
    <!-- <div class="foot-no-index foot-index" v-if="path != '/' && configData.social"> -->
    <!-- <div class="foot-left"> -->
    <!-- <img :src="logoPrevURL + configData.logo" style="width: 82px; height: 30px" alt="" class="foot-logo" /> -->
    <!-- <p>
          {{
            $t('indexInfo.platScan', {
              siteName: configData.siteName,
              chain: configData.chainName,
            })
          }}
        </p> -->
    <!-- </div> -->
    <!-- <div class="foot-right">
        <div class="link-wrap">
          <a :href="configData.social[0].url[configLang] ||
            'https://t.me/UsaFeNetwork'
            " target="_blank" class="link-1"></a>
          <a href="javascript:void(0);" class="link-2">
            <img :src="logoPrevURL + configData.social[1].qrcode ||
              '../../assets/images/weixin.jpg'
              " alt="" class="wx-img" />
          </a>
          <a :href="configData.social[2].url[configLang] ||
            'https://twitter.com/UsaFe_Network'
            " target="_blank" class="link-3"></a>
          <a :href="configData.social[3].url[configLang] ||
            'https://www.reddit.com/user/UsaFe_Network'
            " target="_blank" class="link-4"></a>
          <a :href="configData.social[4].url[configLang] ||
            'https://medium.com/@UsaFe_Network'
            " target="_blank" class="link-5"></a>
          <div class="link-br" />
          <a :href="configData.social[5].url[configLang] ||
            'https://github.com/UsaFenetwork'
            " target="_blank" class="link-6"></a>
          <a :href="configData.social[6].url[configLang] ||
            'https://www.linkedin.com/company/platonnetwork/'
            " target="_blank" class="link-7"></a>
          <a :href="configData.social[7].url[configLang] ||
            'https://www.facebook.com/UsaFetwork/'
            " target="_blank" class="link-8"></a>
          <a
            :href="
              configData.social[8].url[configLang] ||
              'https://bihu.com/people/1215832888'
            "
            target="_blank"
            class="link-9"
          ></a> -->
    <!-- <a :href="configData.social[9].url[configLang] ||
        'https://www.chainnode.com/forum/267'
        " target="_blank" class="link-10"></a>
    </div> -->
    <!-- <p> -->
    <!-- {{
            $t('indexInfo.international', {
              year: curYear,
              copyRight: configData.copyRight.toUpperCase(),
            })
          }} -->
    <!-- </p> -->
    <!-- </div> -->
    <!-- </div> -->
  </div>
</template>
<script>
import apiService from '@/services/API-services';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  name: '',
  data() {
    return {
      path: '/',
      curYear: new Date().getFullYear(),
      loading: {
        connect: false,
        add: false,
      },
      status: {
        isMobile: true,
        isChrome: true,
        metamaskEnable: false,
        accounts: [],
      },
    };
  },
  props: {},
  computed: {
    ...mapGetters(['configData']),
    lang() {
      return this.$i18n.locale.indexOf('zh') !== -1 ? 'zh' : 'en';
    },
    configLang() {
      return this.$i18n.locale.indexOf('zh') !== -1 ? 'cn' : 'en';
    },
    logoPrevURL() {
      return process.env.VUE_APP_API_ROOT;
    },
    config() {
      // console.log(this.configData);
      // debugger
      return this.configData.metamask || null
    },
  },
  watch: {
    '$route.path'(newVal, oldVal) {
      this.path = newVal;
    },
  },
  components: {},
  methods: {
    setAccounts(accounts) {
      this.status.accounts = accounts || []
    },
    handleErr(error) {
      console.log('error: ', error)
      let msg = error.message
      if (this.lang === 'cn' && error.code === 4001) {
        msg = '用户拒绝了该请求'
      }
      this.$message.error(msg)
    },
    connect() {
      // add-to-extension
      this.$router.push({ path: '/add-to-extension' })
      // if (this.status.accounts) {
      //   this.$message.warning('Connected to network')
      //   return
      // }
      // if (!this.status.metamaskEnable) {
      //   this.$alert(this.$t('extension.error.noMetaMask'), this.$t('extension.error.tips'), {
      //     type: 'warning',
      //     dangerouslyUseHTMLString: true,
      //     showConfirmButton: false,
      //   })
      //   return
      // }
      // this.loading.connect = true
      // ethereum
      //   .request({ method: 'eth_requestAccounts' })
      //   .then(this.setAccounts)
      //   .catch(this.handleErr)
      //   .finally(() => {
      //     this.loading.connect = false
      //   })
    },
  },
  //生命周期函数
  created() {
    this.path = this.$route.path;
  },
  mounted() {
    this.clientHeight = (document.documentElement.clientHeight || document.body.clientHeight) - 100
    this.status.metamaskEnable = Boolean(window.ethereum && window.ethereum.isMetaMask)
    if (this.status.metamaskEnable) {
      ethereum.request({ method: 'eth_accounts' }).then(this.setAccounts)
      ethereum.on('accountsChanged', this.setAccounts)
    }
    console.log(this.configData)
  },
};
</script>
<style lang="less" scoped>
.footer-wrap {
  background: #000;
  color: rgb(153, 153, 153);

  padding: 14px 5.2%;

  @media (max-width: 750px) {
    padding: 0 5.2%;
  }

  @media (max-width: 500px) {
    padding: 0 5.2%;
  }
}

.footer-main-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #6e6e6e;
  padding-bottom: 14px;
  margin-bottom: 14px;
}

.download-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-right: 10px;
  }

  border: 1px solid #0798de;
  border-radius: 2px;
  padding: 8px 7px;
  font-size: 14px;
  color: #0798de;
  letter-spacing: 0;
  cursor: pointer;
  font-family: Gilroy-Medium;
  white-space: nowrap;
  height: 37px;

  &:hover {
    color: #5cb2db;
    border: 1px solid #5cb2db;
  }

  &:active {
    color: #0e52ac;
    border: 1px solid #0e52ac;
  }
}

@media (min-height: 775px) {
  .download-btn {
    margin-top: 20px;
  }
}

@media (max-width: 775px) {
  .download-btn {
    margin-top: 20px;
  }
}


.sub-foot {
  text-align: center;
  // padding-bottom: 83px;
  padding-top: 120px;

  h3 {
    margin: 0px 0 78px;
    font-size: 40px;
    color: #ffffff;
    font-weight: 100;
    line-height: 47px;
    text-align: center;
  }

  .foot-line {
    height: 0;
    border-bottom: 1px dashed #929292;
    margin: 83px 5.2% 0;
  }

  .foot-tabs {
    display: flex;
    justify-content: center;

    span {
      background: #000;
      margin: 0 4%;
      width: 218px;
      height: 69px;
      line-height: 69px;
      border: 1px solid #979797;
      border-radius: 4px;
      display: block;
      font-size: 20px;

      a {
        display: block;
        color: #fff;
      }

      &.hanim:hover {
        background: #fff;
        border: 1px solid #fff;

        a {
          color: #000;
          -webkit-animation-duration: 0.75s;
          animation-duration: 0.75s;
          -webkit-animation-name: bounceIn;
          animation-name: bounceIn;
        }
      }
    }
  }

  @media (max-width: 750px) {
    padding-top: 100px;

    .download-btn {
      margin-top: 20px;
    }

    h3 {
      margin-bottom: 92px;
    }

    .foot-line {
      margin: 50px 0 0 0;
      border-style: dotted;
    }

    .foot-tabs {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      span {
        margin-right: 0;
        margin-bottom: 50px;
        width: 45%;

        a {
          width: 100%;
          line-height: 48px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    padding-top: 50px;

    h3 {
      margin-bottom: 46px;
    }

    .foot-line {
      margin: 25px 0 0 0;
      border-style: dotted;
    }

    .foot-tabs {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      span {
        margin-right: 0;
        margin-bottom: 25px;
        width: 45%;
        line-height: 1;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
      }
    }
  }
}

.foot-index {
  text-align: center;
  padding: 40px 0 31px;

  .foot-logo {
    width: 200px;
    margin: 0 auto;
  }

  p:nth-of-type(1) {
    font-size: 14px;
    color: #999999;
    margin: 20px 0;
  }

  p:nth-of-type(2) {
    font-size: 12px;
    color: #777777;
    margin-bottom: 25px;
  }

  .link-wrap {
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    padding-top: 10px;
    border-top: 1px dashed #555;

    .link-br {
      display: none;
    }

    a {
      // margin-right: 6px;
      width: 50px;
      height: 50px;
      background: url(../../assets/images/footer-link-init.svg);
      background-position-y: 0;

      &.link-1 {
        background-position-x: 0;
      }

      &.link-2 {
        position: relative;
        background-position-x: -50px;

        &:hover .wx-img {
          display: block;
        }

        .wx-img {
          position: absolute;
          width: 100px;
          height: 100px;
          bottom: 48px;
          left: -26px;
          display: none;
        }
      }

      &.link-3 {
        background-position-x: -100px;
      }

      &.link-4 {
        background-position-x: -150px;
      }

      &.link-5 {
        background-position-x: -200px;
      }

      &.link-6 {
        background-position-x: -250px;
      }

      &.link-7 {
        background-position-x: -300px;
      }

      &.link-8 {
        background-position-x: -350px;
      }

      &.link-9 {
        background-position-x: -400px;
      }

      &.link-10 {
        background-position-x: -449px;
      }

      &:hover {
        background-image: url(../../assets/images/footer-link-active.svg);
      }
    }
  }

  &.foot-no-index {
    display: flex;
    justify-content: space-between;
    padding: 17px 5.2% 10px;

    @media screen and (max-width: 1280px) {
      & {
        padding: 27px 0 10px;
      }
    }

    a.link-10 {
      margin-right: 0;
    }

    .foot-left {
      width: 40%;
      text-align: left;
      margin-top: 10px;

      .foot-logo {
        margin-left: 0;
        width: 82px;
        height: 30px;
      }

      p {
        color: #929292;
      }

      .copy-right {
        display: none;
      }
    }

    .foot-right {
      width: 50%;

      p {
        font-size: 12px;
        text-align: right;
        line-height: 14px;
        margin-top: 6px;
        padding-right: 10px;
        color: #777777;
      }
    }

    .link-wrap {
      width: 100%;
      padding-top: 0;
      border: none;
      justify-content: flex-end;
    }

    p {
      margin-top: 14px;
    }
  }

  @media (max-width: 750px) {
    padding: 80px 0 40px;
    width: 100%;

    .foot-logo {
      width: 100px;
      margin-bottom: 10px;
    }

    p:nth-of-type(1) {
      margin: 40px 0;
      font-size: 24px;
    }

    p:nth-of-type(2) {
      margin-bottom: 55px;
      font-size: 22px;
    }

    .link-wrap {
      border-style: dotted;
      padding-top: 20px;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-around;

      .link-br {
        display: block;
        width: 100%;
      }
    }

    &.foot-no-index {
      flex-direction: column;
      padding: 80px 0 50px;

      .foot-left {
        width: 100%;
        margin-top: 0;
        text-align: center;

        .foot-logo {
          width: 100px;
          height: auto;
          margin: auto;
        }

        .copy-right {
          display: block;
        }
      }

      .foot-right {
        width: 100%;

        .copy-right {
          display: none;
        }

        .link-wrap {
          justify-content: space-around;
          flex-wrap: wrap;
          border-top: 1px dotted #555;
          padding-top: 20px;
        }

        p {
          text-align: center;
          margin: 20px 0 0;
        }
      }
    }
  }

  @media (max-width: 500px) {
    padding: 40px 0 20px;

    .foot-logo {
      width: 100px;
      margin-bottom: 10px;
    }

    p:nth-of-type(1) {
      margin: 20px 0;
      font-size: 20px;
    }

    p:nth-of-type(2) {
      margin-bottom: 35px;
      font-size: 18px;
    }

    .link-wrap {
      border-style: dotted;
      padding-top: 10px;
      flex-wrap: wrap;
      width: 100%;
      justify-content: space-around;

      .link-br {
        display: block;
        width: 100%;
      }
    }

    &.foot-no-index {
      flex-direction: column;
      padding: 40px 0 25px;

      .foot-left {
        width: 100%;
        margin-top: 0;
        text-align: center;

        .foot-logo {
          width: 100px;
          height: auto;
          margin: auto;
        }

        .copy-right {
          display: block;
        }
      }

      .foot-right {
        width: 100%;

        .copy-right {
          display: none;
        }

        .link-wrap {
          justify-content: space-around;
          flex-wrap: wrap;
          border-top: 1px dotted #555;
          padding-top: 10px;
        }
      }
    }
  }
}

// .bounceIn {
//     -webkit-animation-duration: 0.75s;
//     animation-duration: 0.75s;
//     -webkit-animation-name: bounceIn;
//     animation-name: bounceIn;
// }
</style>
<style lang="less">
@keyframes bounceIn {

  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.sub-foot .tabs .el-button {
  background: #000;
  position: relative;
  margin-right: 8%;
  padding: 0;

  &:hover {
    // .bounceIn{
    //     -webkit-animation-duration: 0.75s;
    //     animation-duration: 0.75s;
    //     -webkit-animation-name: bounceIn;
    //     animation-name: bounceIn;
    // }
    background: #fff;

    a {
      color: #000;
      //  -webkit-animation-fill-mode: both;
      // animation-fill-mode: both;
      -webkit-animation-duration: 0.75s;
      animation-duration: 0.75s;
      -webkit-animation-name: bounceIn;
      animation-name: bounceIn;
    }
  }

  span {
    display: block;
    width: 100%;
    height: 100%;
    line-height: 67px;
    // position: absolute;
    // width: 100%;
    // z-index: 9999;
  }

  a {
    display: block;
    color: #fff;
  }
}
</style>
