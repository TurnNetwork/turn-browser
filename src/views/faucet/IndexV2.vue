<template>
  <div class="faucet-wrap" v-loading.fullscreen="loading">
    <div class="faucet-main">
      <H3 class="faucetTitle">Turn Network Faucet</H3>
<!--      <h2>Turn Network Faucet</h2>-->
      <!--      <span class="title-em" style="visibility: hidden">-->
      <!--        Drops are limited to 1 request in 24 hours / Token .-->
      <!--      </span>-->
      <el-form>
        <el-form-item label="Select Token:">
          <el-select class="_faucet_form" :popper-append-to-body="false" placeholder="please select token"
            v-model="token">
            <el-option v-for="item in tokenList" :key="item.type" :value="item.type" :label="item.label"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Wallet:" required :error="addressError">
          <el-input @blur="checkAddress" @input="checkAddress" class="_faucet_form" placeholder="Enter your wallet address(0x...)" v-model="address"> </el-input>
        </el-form-item>

        <el-form-item label="Email:" required :error="emailError">
          <el-input @blur="checkEmail" @input="checkEmail" class="_faucet_form" placeholder="Enter your Email"
            v-model="email"> </el-input>
        </el-form-item>

        <el-form-item label="Verification Code:" required :error="verifyCodeError">
          <el-input @blur="checkVerifyCode" @input="checkVerifyCode" :maxlength="6" class="_faucet_form"
            placeholder="Verification Code"
                    v-model="verificationCode">
            <span class="sendCode" slot="suffix"><el-button :disabled="isSending" @click="sendCode">{{ sendCodeStr
            }}</el-button></span>
          </el-input>
          <!-- <button class="sendCode" :disabled="isSending" @click="sendCode">{{sendCodeStr}}</button> -->
        </el-form-item>


      </el-form>
      <button class="_request" @click="request">Claim</button>
    </div>
    <el-dialog title=" " :visible.sync="centerDialogVisible" width="494px" center>
      <template>
        <div class="_request_title">Request successful</div>
        <div class="info-title">Transaction Hash</div>
        <div class="info-wrap" @click="link(tHash, 'hash')">{{ tHash | filterHash }}</div>
      </template>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">OK</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { faucetApi, faucetSendEmailApi } from '@/services/API-services'
const countdownSendCode = 60;//发送验证码倒计时秒数
export default {
  name: 'faucet',
  data() {
    return {
      // 显示非表单校验的内容
      emailError: '',
      verifyCodeError: '',
      addressError:'',
      isSending: false,
      countdown: countdownSendCode,// 用于倒计时
      sendCodeStr: "Send Verification Code",
      loading: false,
      centerDialogVisible: false,
      token: 'FAUCET_SYMBOL',
      sendEmailToken: 'FAUCET_SEND_EMAIL',
      address: '',
      email: '',
      verificationCode: '',
      activeToken: 'symbol',
      tHash: '',
      tokenList: [
        {
          label: '300 TURN',
          type: 'FAUCET_SYMBOL'
        },
        // {
        //   label: '20 USDT',
        //   type: 'FAUCET_USDT'
        // },
        // {
        //   label: '20 USDC',
        //   type: 'FAUCET_USDC'
        // }
      ],
    };
  },
  props: {},
  computed: {},
  watch: {},
  components: {},
  // beforeDestroy() {
  //   if (this.countdown) {
  //     clearTimeout(this.countdown); // 在组件销毁前清除计时器，避免内存泄漏
  //   }
  // },
  methods: {
    //检验地址
    checkAddress(){
      if (!this.address){
        this.addressError = 'Wallet can not be empty'
        return false;
      }else{
        this.addressError = '';
        return true;
      }
    },
    // 校验邮箱
    checkEmail() {
      let reg = new RegExp("[a-zA-Z0-9]+[\\.]{0,1}[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]+");
      //校验
      let emailInput = this.email;
      if (!emailInput) {
        this.emailError = 'Email can not be empty'
        return false;
      }
      if (!reg.exec(emailInput)) {
        this.emailError = 'The email format is wrong'
        return false;
      }
      this.emailError = '';
      return true;
    },
    checkVerifyCode() {
      if (!this.verificationCode) {
        this.verifyCodeError = 'Verification code can not be empty';
        return false;
      } else {
        this.verifyCodeError = '';
        return true;
      }
    },
    sendCode() {
      if (!this.checkEmail() || !this.checkAddress()){
        return;
      }
      if(!this.isSending){
        this.loading = true
        faucetSendEmailApi(this.sendEmailToken, { email: this.email, address: this.address }).then(res => {
          const data = res.data
          this.loading = false
          if (data?.code == 0) {
            this.isSending = true; // 禁用按钮并开始倒计时
            let countdownInterval = setInterval(() => {
              this.countdown--; // 倒计时递减
              if (this.countdown > 0) { // 如果倒计时大于0，则更新显示倒计时秒数
                this.sendCodeStr = this.countdown+" s";
              } else { // 倒计时结束，清除定时器并重新启用按钮，显示“重新发送”的提示信息
                clearInterval(countdownInterval);
                this.isSending = false; // 重新启用按钮并结束倒计时
                this.sendCodeStr = 'Send Verification Code';
                this.countdown = countdownSendCode;
              }
            }, 1000); // 每秒更新一次倒计时秒数
            return;
          }
        }).catch(err => {
          this.loading = false
          console.log(err);
        })
      }
    },
    request() {
      if (!this.checkAddress() || !this.checkEmail() || !this.checkVerifyCode()){
        return ;
      }
      // if (!this.address) return this.$message.error('Sorry address error')
      this.loading = true
      faucetApi(this.token, { address: this.address,email:this.email,code:this.verificationCode }).then(res => {
        const data = res.data
        this.loading = false
        if (data?.code == 0) {
          this.tHash = data?.tHash || ''
          this.centerDialogVisible = true
          setTimeout(() => { this.$message.success('send success') })
          return
        }
        this.tHash = ''
        this.$message.error(data?.msg || 'Sorry  Drops are limited to 1 request in 24 hours ')
      }).catch(err => {
        this.loading = false
        console.log(err);
      })
    },
    link(str, type) {
      // window.location.href = url

      switch (type) {
        //交易详情
        case 'hash':
          return this.$router.push({
            path: '/trade-detail',
            query: {
              txHash: str,
            },
          });
          break;

        case 'address':
          return this.$router.push({
            path: '/address-det                                                                                                                                                                                                       ail',
            query: {
              address: str,
            },
          });
          break;
        // /
        default: break;
      }
      // this.$router.replace({
      //   path: '/trade-detail',
      //   query: {
      //     txHash: this.txHash,
      //   },
      // });
    }
  },
  //生命周期函数
  created() {
  },
  filters: {
    filterHash(str) {
      return str && (`${str.substr(0, 10)}...${str.substr(str.length - 10,)}`)
    }
  },
  mounted() {


  },
};
</script>
<style lang="less" scoped>
.tou {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 50%;
}

.faucet-wrap {
  color: white;
  min-height: calc(100vh - 102px);
  margin-top: -102px;
  padding-bottom: 109px;
  position: relative;

  /deep/.el-form-item__label {
    /*color: rgba(#F1F2F4, .6);*/
    /*font-size: 16px;*/
    color: var(--Gray-1000, #F1F2F4);
    /* P2 */
    font-family: Montserrat-Regular;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
    padding-top: 6px;
    padding-bottom: 6px;
  }

  /deep/.el-form {
    padding-top: 20px;

    .el-form-item {
      &:first-child {
        margin-bottom: 12px;
      }

      .el-input,
      .el-select {
        background: transparent;

        input {
          /*color: rgba(#F1F2F4, .8);*/
          color: var(--Gray-1000, #F1F2F4);
          background: transparent;
        }

        //输入框
        input::-webkit-input-placeholder {
          color: #6C7584;
        }

        input:-ms-input-placeholder {
          color: #6C7584;
        }

        input::-ms-input-placeholder {
          color: #6C7584;
        }

        input::placeholder {
          color: #6C7584;
        }
      }
    }
  }

  .faucet-main {
    padding-top: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2;
    position: relative;
  }

  &::after {
    width: 100%;
    height: 767px;
    content: ' ';
    position: absolute;
    top: 30px;
    left: 0;
    background: url("../../assets/imagesV2/Frame98.png") no-repeat;
    background-size: 100% 115%;
    z-index: 0;
    opacity: 0.3;
  }

  &::before {
    width: 100%;
    height: 100%;
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    background: url("../../assets/imagesV2/Vector 7.png") no-repeat;
    background-size: 100vh;
    background-position-x: 50%;
    opacity: .45;
    z-index: 0;
  }

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #CCE3FF;
  }

  .title-em {
    font-size: 18px;
    margin-bottom: 50px;
    color: #CCE3FF;
  }
}

._faucet_form {
  border: 1px solid #999;
  border-radius: 6px;
  width: 320px;
  height: 40px;

  /deep/.el-select-dropdown {
    width: 320px;
    /*height: 40px;*/
    background: rgba(21, 25, 30, .9);
    margin-left: -5px;
    border-radius: 6px;
    border: 1px solid #ffffff30;
    /*padding: 10px 8px 10px 14px;*/
    /*align-items: center;*/
    /*gap: 4px;*/

  }
}

.sendCodeInput {
  border: 1px solid #999;
  border-radius: 6px;
  width: 380px;
  height: 40px;
  background: transparent;
}

.faucet-wrap {
  /deep/.el-dialog {
    border-radius: var(--Number12, 12px);
    border: 1px solid var(--Transparency-300, rgba(255, 255, 255, 0.10));
    background: var(--Gray-200, #15191E);

    ._request_title {
      font-size: 26px;
      color: var(--Gray-900, #D5D8DD);
    }
  }
}


._request {
  /*margin-top: 30px;*/
  /*width: 380px;*/
  /*padding: 10px 20px;*/
  /*font-size: 16px;*/
  /*font-weight: 600;*/
  /*cursor: pointer;*/
  /*color: var(--Gray-900, #D5D8DD);*/
  /*border-radius: var(--Number6, 6px);*/
  /*border: 1px solid var(--Transparency-300, rgba(255, 255, 255, 0.10));*/
  /*background: linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), var(--Blue-600, #0075FF);*/
  /*box-shadow: 0px 3px 6px 0px var(--Blue-300, #002F66);*/

  margin-top: 30px;
  cursor: pointer;
  width: 318px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--Number6, 6px);
  border: 1px solid var(--Transparency-300, rgba(255, 255, 255, 0.10));
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), var(--Blue-600, #0075FF);
  box-shadow: 0px 3px 6px 0px var(--Blue-300, #002F66);

  color: var(--Gray-900, #D5D8DD);
  text-align: center;
  /* P2-S */
  font-family: Montserrat-SemiBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.32px;
  &:hover {
    color: #fff;
  }

  &:active {
    color: #0e52ac;
  }
}

._transactionHash {
  color: #67c23a;
  position: absolute;
  width: 100%;
}

._alert {
  padding: 0px 10px;
  width: 500px;
}

.info-title {
  color: var(--Gray-900, #D5D8DD);
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.info-wrap {
  color: var(--Blue-600, #0075FF);
  font-size: 14px;
  opacity: .8;
}

/deep/.el-dialog__footer {
  text-align: end;
}

.sendCode {
  cursor: pointer;
  color: rgba(241, 242, 244, 0.8);
  font-size: inherit;

  button {
    background: transparent;
    border: none;
    padding-right: 0px;
    color: rgba(241, 242, 244, 0.8);
    font-family: Montserrat-Regular;
    font-size: 12px;
    &:hover {
      background: transparent !important;
      border: none !important;
    }
    &:focus{
      color: rgba(241, 242, 244, 0.8);
    }
  }
}

  .faucetTitle{
    width: 833px;
    color: var(--Blue-1000, #CCE3FF);
    text-align: center;
    text-shadow: 0px 4px 13.3px var(--Blue-100, #000C1A);
    /* H3 */
    font-family: Montserrat-Bold;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.28px;
  }
</style>

