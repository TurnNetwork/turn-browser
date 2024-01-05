<template>
  <div class="faucet-wrap" v-loading="loading">

    <!--    <div class="tou">-->
    <!--      <img src="../../assets/imagesV2/Vector 7.png" alt="" />-->
    <!--    </div>-->

    <h2>Bubble Network Faucet</h2>
    <span class="title-em">
      Drops are limited to 1 request in 24 hours / Token .
    </span>
    <el-form>
      <el-form-item label="Select Token:">
        <el-select class="_faucet_form" placeholder="please select token" v-model="token">
          <el-option v-for="item in tokenList" :key="item.type" :value="item.type" :label="item.label"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Wallet:">
        <el-input class="_faucet_form" placeholder="Enter your wallet address(0x...)" v-model="address"> </el-input>
      </el-form-item>
    </el-form>
    <!-- <el-button :loading="loading" class="_button" type="primary" @click="request">Request</el-button> -->
    <!--    <span :loading="loading" class="download-btn _button" @click="request">Request</span>-->
    <img class="download-btn _button" src="../../assets/imagesV2/blue.png" alt="" />

    <el-dialog title="Success" :visible.sync="centerDialogVisible" width="50%" center>
      <div>
        <div class="info-wrap">
          <span class="label">Address:</span><span @click="link(address, 'address')">
            <!-- @click="link(window.location.href = `/address-detail?address=${tHash}`)"> -->
            {{
              address }}</span>
        </div>
        <div class="info-wrap">
          <span class="label">txHash:</span><span @click="link(tHash, 'hash')">{{
            tHash }}</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="centerDialogVisible = false">取 消</el-button> -->
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
      loading: false,
      centerDialogVisible: false,
      token: 'FAUCET_SYMBOL',
      address: '',
      activeToken: 'symbol',
      tHash: '',
      tokenList: [
        {
          label: '50 TURN',
          type: 'FAUCET_SYMBOL'
        },
        {
          label: '20 USDT',
          type: 'FAUCET_USDT'
        },
        {
          label: '20 USDC',
          type: 'FAUCET_USDC'
        }
      ]
    };
  },
  props: {},
  computed: {},
  watch: {},
  components: {},
  methods: {
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #333333 url("../../assets/imagesV2/Vector 7.png") no-repeat center;
  background-size: 580px;
  color: white;

  h2 {
    margin-top: 100px;
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 800;
  }

  .title-em {
    font-size: 14px;
    margin-bottom: 50px;
  }
}

/deep/ ._faucet_form {
  border: 1px solid #999;
  border-radius: 4px;
  width: 380px;
}

.download-btn {
  //border: 1px solid #0798de;
  border-radius: 2px;
  padding: 8px 50px;
  font-size: 14px;
  color: #0798de;
  letter-spacing: 0;
  cursor: pointer;

  white-space: nowrap;
  //height: 37px;

  &:hover {
    color: #5cb2db;
    //border: 1px solid #5cb2db;
  }

  &:active {
    color: #0e52ac;
    //border: 1px solid #0e52ac;
  }
}

._button {
  margin-top: 50px;
  width: 380px;
  display: flex;
  justify-content: center;
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

.info-wrap {
  display: flex;
  // align-items: center;
  margin-top: 20px;

  .label {
    flex: 0 0 120px;
    width: 120px;
    display: inline-block;
    margin-right: 10px;
  }

  span {
    cursor: pointer;
    color: #0798de;
    word-wrap: break-word;
    word-break: break-all;
    line-height: 20px;
  }

  .label {
    color: #030911;
  }
}

/deep/ .el-dialog__title {
  color: #030911;
  font-weight: 800;
}
</style>

