<template>
  <div class="faucet-wrap" v-loading.fullscreen="loading">
    <div class="faucet-main">
      <h2>Turn Network Faucet</h2>
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
        <el-form-item label="Wallet:">
          <el-input class="_faucet_form" placeholder="Enter your wallet address(0x...)" v-model="address"> </el-input>
        </el-form-item>

        <el-form-item label="Email:" required :error="emailError">
          <el-input @blur="checkEmail" @input="checkEmail" class="_faucet_form" placeholder="Enter your Email" v-model="email"> </el-input>
        </el-form-item>

        <el-form-item label="Verification Code:">
          <el-input    maxlength="12" class="_faucet_form" placeholder="Enter Verification Code" v-model="verificationCode">
          </el-input>
          <button class="sendCode" :disabled="isSending" @click="sendCode">{{sendCodeStr}}</button>
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
  import { faucetApi } from '@/services/API-services'
  export default {
    name: 'faucet',
    data() {
      return {
        // 显示非表单校验的内容
        emailError: '',
        isSending:false,
        countdown: null,// 用于倒计时
        sendCodeStr:"Send Verification Code",
        loading: false,
        centerDialogVisible: false,
        token: 'FAUCET_SYMBOL',
        address: '',
        email: '',
        verificationCode:'',
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
    beforeDestroy() {
      if (this.countdown) {
        clearTimeout(this.countdown); // 在组件销毁前清除计时器，避免内存泄漏
      }
    },
    methods: {
      // 2、非表单校验
      checkEmail() {
        let reg = new RegExp("[a-zA-Z0-9]+[\\.]{0,1}[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z]+");
        //校验
        let emailInput = this.email;
        if (emailInput == null) {
          this.emailError = '非表单校验不能为空'
          return false;
        }
        if (!reg.exec(emailInput)) {
          this.emailError = '请输入有效的邮箱地址'
          return false;
        }
        this.emailError = '';
        return true;
      }
      ,
      sendCode() {
        this.sendCodeStr = "验证码已发送,5秒内不得重复发送";
        this.isSending = true; // 禁用按钮
        // 在这里发送验证码的逻辑，例如调用API发送验证码
        // 假设异步操作需要30秒完成，你可以使用setTimeout函数来实现倒计时
        this.countdown = setTimeout(() => {
          this.isSending = false; // 重新启用按钮
          this.sendCodeStr = "Send Verification Code";
        }, 5000); // 30秒后重新启用按钮
      },
      request() {

        if (!this.address) return this.$message.error('Sorry address error')
        this.loading = true
        faucetApi(this.token, { address: this.address }).then(res => {
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
              path: '/address-detail',
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
      color: rgba(#F1F2F4, .6);
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
            color: rgba(#F1F2F4, .8);
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
    width: 380px;

    /deep/.el-select-dropdown {
      width: 380px;
      background: rgba(21, 25, 30, .9);
      margin-left: -5px;
    }
  }

  .sendCodeInput{
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
    margin-top: 30px;
    width: 380px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    color: var(--Gray-900, #D5D8DD);
    border-radius: var(--Number6, 6px);
    border: 1px solid var(--Transparency-300, rgba(255, 255, 255, 0.10));
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), var(--Blue-600, #0075FF);
    box-shadow: 0px 3px 6px 0px var(--Blue-300, #002F66);

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

  .sendCode{
    position: absolute;
    float: right;
    right: 8px;
    top: 51px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: rgba(241, 242, 244, 0.8);
    font-size: inherit;
  }
</style>

