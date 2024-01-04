<style lang="less" scoped>
  *{margin:0;padding: 0}
  .box-div{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items:flex-start;
      /*height: 1500px;*/
      //height: 1800px;
      width: 80%;
      background-color: #1d1e1f;
      //border: 1px solid #00ff00;
      margin-left: 10%;
  }

  .tou{
    text-shadow: 0px 4px 13.3px var(--Blue-100, #000C1A);
    /* H1 */
    font-family: Montserrat;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 98.437%; /* 63px */
    letter-spacing: -2.56px;
    background: linear-gradient(117deg, #CCE3FF 24.62%, #414A56 66.88%);
    /*background-clip: text;*/
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align:left;
    margin-top: 100px
  }

  .box-div .line1{
    float: top;
    margin-left: 10px;
    margin-top: 10px;
    //border: 2px solid #0D6CDA;
    height: 500px;
    width: 60%;
  }

  .box-div .line1-2{
    display: flex;
    justify-content: center;
    align-items: center;
    float: top;
    margin-right: 10px;
    margin-top: 10px;
    //border: 2px solid #0D6CDA;
    height: 500px;
    width: 35%;
    /*overflow:hidden;*/
    background:  url("../../assets/imagesV2/Vector 3.png") no-repeat center;
    background-size: 600px;

    /*background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),*/
    /*linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),*/
    /*linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),*/
    /*linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));*/
    /*//background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%;*/
    /*background-position: center center, center center, center center, center center;*/
    /*background-repeat: repeat, repeat, repeat, repeat;*/
  }
  .box-div .line2{
    display: block;
    //border: 1px solid #5DC572;
    height: 200px;
    width: 100%;
    //margin-top:-300px
    background: url("../../assets/imagesV2/div.GridItem_asset___ix8N.png") no-repeat ;
    background-size: 400px 200px;
    background-position: right;
  }

  .border-kuang{
    border-radius: var(--Number20, 20px);
    border: 1px solid rgba(255, 255, 255, 0.18);
  }

  .line-title{
    display: block;
    //border: 1px solid #5DC572;
    height: 50px;
    width: 100%;
    float: left;
    color: #C1C6CD;
    font-family: Montserrat;
    font-size: 26px;
    font-style: normal;
    line-height: normal;
    letter-spacing: -1.04px;
    /*margin-top: 100px;*/
  }

  .box-div .line2 .imgRight{
    position: absolute;
    top: 0;
    right: 0;
  }

  .box-div .line2 .line2-1{
    display: block;
    //border: 1px solid #094296;
    height: 200px;
    width: 200px;
    float: left;
    margin-right: 20px;
    text-align: center;
    padding-top: 50px;
  }


  .box-div .line3{
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border: 1px solid #a027ad;
    height: 200px;
    width: 100%;
    //margin-top:-100px
  }

  .box-div .line3 .line3-1{
    display: block;
    //border: 1px solid #0D6CDA;
    border-radius: 10px;
    height: 200px;
    width: 500px;
    float: left;
    //margin-top:-100px

    /*display: flex;*/
    /*width: 600px;*/
    /*height: 302px;*/
    /*justify-content: center;*/
    /*align-items: center;*/
  }

  table, td, th {
    /*border: 1px solid black;*/
    text-align: center;
    color:white;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    height: 70px;
  }

  td {
    font-size: 20px;
  }

  .box-div .line4{
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border: 1px solid #a027ad;
    height: 150px;
    width: 100%;
    //margin-top:-100px
  }

  .box-div .line4 .line4-1{
    display: block;
    //border: 1px solid #0D6CDA;
    border-radius: 10px;
    height: 150px;
    width: 100%;
    float: bottom;
    //margin-top:-100px
  }


  .box-div .line5{
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border: 1px solid #a027ad;
    height: 300px;
    width: 100%;
    //margin-top:-100px
  }
  .box-div .line5 .line5-1{
    display: block;
    //border: 1px solid #0D6CDA;
    border-radius: 10px;
    height: 300px;
    width: 100%;
    float: bottom;
    //margin-top:-100px
  }

  .box-div .line6{
    display: flex;
    justify-content: space-between;
    align-items: center;
    //border: 1px solid #a027ad;
    height: 300px;
    width: 100%;
  }

  .box-div .line6 .line6-1{
    display: block;
    //border: 1px solid #094296;
    height: 300px;
    width: 600px;
    float: left;
    /*margin-right: 20px;*/
    border-radius: 10px;
    text-align: center;
    padding-top: 50px;
    color:white;
    padding: 10px 10px;
  }

  .box-div .line1 .searchBtn{
    display: block;
    //border: 1px solid #00ff00;
    border-radius: 10px;
    width: 300px;
    height: 40px;
    opacity: 0.5;
  }


  .search-container {
    position: relative;
    margin-top: 10px;
  }

  .search-input {
    width: 80%; /* 根据需要调整宽度 */
    padding-right: 30px; /* 为图标留出空间 */
    height: 40px;
  }

  .search-icon {
    position: absolute;
    right: 22%; /* 根据需要调整图标位置 */
    top:10px;
    cursor: pointer; /* 鼠标悬停时显示为手形光标 */
  }

  .box-div .line-end{
    display: flex;
    justify-content: center;
    align-items: center;
    //border: 1px solid #4b3350;
    height: 200px;
    width: 100%;
    background:  url("../../assets/imagesV2/Footer img.png") repeat center;
    background-size: 100%;

    opacity: 0.4;
    //background: url("../../assets/imagesV2/Footer img.png"), lightgray 0% 0% / 60.90909242630005px 60.90909242630005px repeat;
    mix-blend-mode: overlay;
  }

   .myTh{
     color: var(--Gray-700, #9AA1AC);
     /* P2 */
     font-family: Montserrat;
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     letter-spacing: -0.32px;
   }

  .myTd{
    color: var(--Blue-1000, #CCE3FF);

    /* NumberL */
    font-family: Bebas Neue;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.8px;
  }


</style>

<template>
  <!--写一个大框，定义长宽高-->
  <div class="box-div">
    <!--定义个框，左边是文字，右边是图片，同一行-->
    <div class="line1">
      <p class="tou" >The Turn Network<br/>Blockchain Explorer</p>
      <div class="search-container">
        <input type="text" class="search-input" v-model="searchKey" placeholder="The Turn Network Blockchain Explorer" @keyup.enter.native="searchFn">
        <i class="search-icon" aria-hidden="true" v-model="searchKey"  @click="searchFn">🔍</i>
      </div>
    </div>
    <div class="line1-2">
      <img style="max-width:100%;max-height: 100%" src="../../assets/imagesV2/Retro Glass Material 2.png" alt="" />
    </div>

    <div class="line-title">
      <b>Utrecht Symptoom Dagboek</b>
    </div>

    <div class="line2 border-kuang">

      <!--靠左新增3个框浮动左-->
      <div class="line2-1">
        <table>
          <tr>
            <th>Active Bubbles</th>
          </tr>
          <tr>
            <td>1.11K</td>
          </tr>
        </table>
      </div>
      <div class="line2-1">
        <table>
          <tr>
            <th>Active Micro-Nodes</th>
          </tr>
          <tr>
            <td>50.12K</td>
          </tr>
        </table>
      </div>
      <div class="line2-1">
        <table>
          <tr>
            <th>L1/L2 Peak Instantaneous TPS</th>
          </tr>
          <tr>
            <td>110/300</td>
          </tr>
        </table>
        <br/>
      </div>
<!--      <div class="imgRight">-->
<!--        <img style="float:right;max-width:100%;max-height: 100%" src="../../assets/imagesV2/div.GridItem_asset___ix8N.png" alt="" />-->
<!--      </div>-->

    </div>
    <div class="line-title">
      <b>Epilepsieregistratie ILAE 2017 classificatie</b>
    </div>
    <div class="line3" >
        <div class="line3-1 border-kuang">
          <table>
            <tr>
              <th class="myTh">Current Block Height</th>
              <th class="myTh">Real-time Block Generation uration(s)</th>
            </tr>
            <tr>
              <td>19978</td>
              <td>1.0032</td>
            </tr>
            <tr>
              <th class="myTh">Address count</th>
              <th class="myTh">Total number of L1 transactions</th>
            </tr>
            <tr>
              <td>100M</td>
              <td>12.18M</td>
            </tr>
          </table>
        </div>
        <div class="line3-1 border-kuang">
          <table>
            <tr>
              <th class="myTh">Real-Time Block Trade Count</th>
              <th class="myTh">Mining Node</th>
            </tr>
            <tr>
              <td>10</td>
              <td>ABC007</td>
            </tr>
            <tr>
              <th class="myTh">Total Number Of L2 Transactions</th>
              <th class="myTh">Ongoing/Overall Proposal</th>
            </tr>
            <tr>
              <td>120.18M</td>
              <td>1/4</td>
            </tr>
          </table>
        </div>
    </div>
    <div class="line-title">
      <b>Catherine Bergego Schaal</b>
    </div>
    <div class="line4 border-kuang">
      <div class="line4-1">
        <table>
          <tr>
            <th class="myTh">Total Circulation</th>
            <th class="myTh">Circulation</th>
            <th class="myTh">Pledge Rate</th>
            <th class="myTh">Inflation Rate</th>
          </tr>

          <tr>
            <td>900.58M</td>
            <td>125.09M</td>
            <td>86.11%</td>
            <td>3.17%</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="line-title">
      <b>Catherine Bergego Schaal</b>
    </div>
    <div class="line5 border-kuang">
      <div class="line5-1">
          <table>
            <tr>
              <th>Block</th>
              <th>Producer</th>
              <th>Txn</th>
              <th>Block Reward(TURN)</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>18466814</td>
              <td>ABC007</td>
              <td>2 Txns</td>
              <td>4.483294189788</td>
              <td>6s ago</td>
            </tr>
            <tr>
              <td>18466814</td>
              <td>ABC007</td>
              <td>2 Txns</td>
              <td>4.483294189788</td>
              <td>6s ago</td>
            </tr>
            <tr>
              <td>18466814</td>
              <td>ABC007</td>
              <td>2 Txns</td>
              <td>4.483294189788</td>
              <td>6s ago</td>
            </tr>
            <tr>
              <td>18466814</td>
              <td>ABC007</td>
              <td>2 Txns</td>
              <td>4.483294189788</td>
              <td>6s ago</td>
            </tr>
            <tr>
              <td>18466814</td>
              <td>ABC007</td>
              <td>2 Txns</td>
              <td>4.483294189788</td>
              <td>6s ago</td>
            </tr>
            <tr>
              <td>18466814</td>
              <td>ABC007</td>
              <td>2 Txns</td>
              <td>4.483294189788</td>
              <td>6s ago</td>
            </tr>
            <tr>
              <td>18466814</td>
              <td>ABC007</td>
              <td>2 Txns</td>
              <td>4.483294189788</td>
              <td>6s ago</td>
            </tr>
            <tr>
              <td>18466814</td>
              <td>ABC007</td>
              <td>2 Txns</td>
              <td>4.483294189788</td>
              <td>6s ago</td>
            </tr>

          </table>
      </div>
    </div>

    <div class="line6">
      <div class="line6-1 border-kuang">
        <div class="line-title" style="text-align: left">
          <b>Active Bubbles(L2)</b>
        </div>
        <ul style="margin-top: 50px">
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div class="borderDiv">
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
          <br/>
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div>
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
          <br/>
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div>
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
          <br/>
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div>
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
          <br/>
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div>
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
          <br/>
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div>
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
          <br/>
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div>
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="line6-1 border-kuang">
        <div class="line-title" style="text-align: left">
          <b>Active Bubbles(L2)</b>
        </div>
        <ul style="margin-top: 50px">
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div class="borderDiv">
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
          <br/>
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div>
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
          <br/>
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div>
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
          <br/>
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div>
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
          <br/>
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div>
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
          <br/>
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div>
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
          <br/>
          <li>
            <div>
              <b style="float: left">ABC007</b>
              <b style="float:right">100.11% Yield</b>
            </div>
            <br/>
            <div>
              <span style="float: left">Total Stakes 10000123123123123123 TURN</span>
              <span style="float: right">6 Rank</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="line-end">
<!--        <b style="font-size: 150px;color: white">TURN</b>-->
    </div>
  </div>

</template>
<script>

  import apiService from '@/services/API-services';
  import ChartService from '@/services/chart-services';
  import IndexService from '@/services/index-service';
  import { timeDiff } from '@/services/time-services';

  import { mapGetters, mapMutations } from 'vuex';
  import { toBech32Address, isAddress } from '@/services/web3-utils';

  import comHeader from '@/components/header/header.vue';

  const blockTimeChart = new ChartService();
  const blockTradeChart = new ChartService();

  let indexService = null;

  export default {
    name: 'newHome',
    data() {
      return {
        input:"",
        searchKey: '',
        disabledBtn: false,
        isFocus: false,
        tabIndex: 1,
        i18nLocale: 'zh-cn',
        // isMove:false,
        // isMove2: false,
        styleEle: null,
        ele: null,
        chartMove: false,
        clientHeight: 700,
        barColorList: [
          '#fff',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
          'rgba(255,255,255,0.5)',
        ],
        tooltipData: {
          number: 0,
          txs: 0,
          time: 0,
        },
        tooltipEl: null,
        isShowTooltip: false,
        isWebkit: false,
      };
    },
    props: {},
    computed: {
      ...mapGetters([
        'chartData',
        'blockStatisticData',
        'blockData',
        'ValidatorData',
        'hideSearch',
        'configData',
        'isMove',
        'isMove2',
      ]),
      showedValidatorData() {
        if (this.ValidatorData.dataList.length > 8) {
          if (this.styleEle && this.ValidatorData.isRefresh) {
            // const index = document.styleSheets[0].cssRules.length
            // debugger
            // console.log('bbbb',this.styleEle)

            const index = this.isWebkit ? 2 : 0;
            if (this.styleEle.cssRules[index]) {
              this.styleEle.deleteRule(index);
            }
            this.addCSSRule(
              this.styleEle,
              '@keyframes nodeMove',
              `from {
                            transform: translate(0,${this.ValidatorData.dataList.length * -83
              }px);
                        }
                        to {
                            transform: translate(0,0);
                        }`,
              index
            );
          }
          return this.ValidatorData.dataList.slice(0, 8);
        } else {
          return [];
        }
      },
    },
    watch: {
      chartData(val) {
        this.updateChart(val);
      },
      chainId(val) {
        indexService.disconnect();
        indexService.connect();
      },
      chainContext(val) {
        indexService.disconnect();
        indexService.connect();
      },
    },
    components: {
      comHeader,
    },
    methods: {
      ...mapMutations({
        hide: 'HIDE_SEARCH',
        updateIsMove: 'UPDATE_IS_MOVE',
        updateIsMove2: 'UPDATE_IS_MOVE2',
        updateBarIsMove: 'UPDATE_BAR_IS_MOVE',
        updateBlack: 'UPDATE_BLACK_DADA',
        updateValidators: 'UPDATE_VALIDATOR_DADA',
        updateChartData: 'UPDATE_CHART_DADA',
        updateBlockStatisticData: 'UPDATE_STATISTIC_DADA',
      }),
      //查询
      searchFn() {
        let param = this.searchKey.trim();
        if (!param) {
          return
        }
        let isHEX = false;
        if (/^(0x)[\da-f]{40}|$|^(atp|lat)[\da-f]{39}$/i.test(param)) {
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
            this.searchKey = '';
            let { errMsg, code, data } = res;
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
          });
      },
      //
      getStaking() {
        let param = {};
        apiService.search
          .stakingOnIndex(param)
          .then((res) => {
            let { errMsg, code, data } = res;
            this.updateValidators(data);
          })
          .catch((error) => {
            this.$message.error(error);
          });
      },
      getStatistic() {
        let param = {};
        apiService.search
          .chainStatistic(param)
          .then((res) => {
            let { errMsg, code, data } = res;
            if (code == 0) {
              this.updateBlockStatisticData(data);
              this.updateBlack(data.blockList);
            } else {
              this.$message.error(errMsg);
            }
          })
          .catch((error) => {
            this.$message.error(error);
          });
      },
      getChartData() {
        let param = {};
        apiService.search
          .blockStatistic(param)
          .then((res) => {
            let { errMsg, code, data } = res;
            if (code == 0) {
              this.updateChartData(data);
            } else {
              this.$message.error(errMsg);
            }
          })
          .catch((error) => {
            this.$message.error(error);
          });
      },
      switchFn(type, struct) {
        switch (type) {
          //区块详情
          case 'block':
            return this.$router.push({
              path: '/block-detail',
              query: {
                height: struct.number,
              },
            });
            break;
          //交易详情
          case 'transaction':
            // let path = ''
            // struct.txReceiptStatus == -1 ? path='/trade-pending-detail' : path = '/trade-detail'
            return this.$router.push({
              path: '/trade-detail',
              query: {
                txHash: struct.txHash,
              },
            });
            break;
          //节点详情
          case 'staking':
            return this.$router.push({
              path: '/node-detail',
              query: {
                address: struct.nodeId,
              },
            });
            break;
          //地址详情==(钱包地址详情)
          case 'address':
            return this.$router.push({
              path: '/address-detail',
              query: {
                address: struct.address,
              },
            });
            break;
          //合约详情
          case 'contract':
            return this.$router.push({
              path: '/contract-detail',
              query: {
                address: struct.address,
              },
            });
            break;
        }
      },
      handleBarHover(e) {
        // console.log('aaa','Hover')
        this.isShowTooltip = true;
        this.$nextTick(() => {
          this.tooltipData.time = this.chartData.ya[e.dataIndex];
          this.tooltipData.txs = this.chartData.yb[e.dataIndex];
          this.tooltipEl[0].style.top = 36 + 'px';
          this.tooltipEl[0].style.left = e.event.offsetX - 80 + 'px';
          this.tooltipEl[1].style.top = 36 + 'px';
          this.tooltipEl[1].style.left = e.event.offsetX - 80 + 'px';
          this.tooltipData.number = e.name;
        });

        this.barColorList.forEach((value, index) => {
          if (e.dataIndex == index) {
            this.barColorList[index] = '#66B7DE';
          } else {
            this.barColorList[index] = 'rgba(255,255,255,0.5)';
          }
        });
        if (e.dataIndex != 0) {
          this.barColorList[0] = '#fff';
        }
        // console.log('barColorList',this.barColorList)
        this.updateBarColor();

        this.updateBarIsMove(false);
        // indexService.unsubBlock();
      },
      handleBarMouseout() {
        // console.log('aaa','Mouseout')
        this.isShowTooltip = false;
        this.barColorList.forEach((value, index) => {
          if (index == 0) {
            this.barColorList[index] = '#FFF';
          } else {
            this.barColorList[index] = 'rgba(255,255,255,0.5)';
          }
        });
        this.updateBarColor();
      },
      initBlockTimeChart() {
        let r = this.$refs;
        // console.log(r);

        blockTimeChart.init(r.blockTimeChart, blockTimeChart.blockTimeOption);
        blockTimeChart.chart.on('mouseover', (e) => {
          this.handleBarHover(e);
        });
        blockTimeChart.chart.on('mouseout', () => {
          // indexService.getChartData();
          this.updateBarIsMove(true);
          this.handleBarMouseout();
        });
      },
      initBlockTradeChart() {
        let r = this.$refs;
        blockTradeChart.init(r.blockTradeChart, blockTradeChart.blockTradeOption);
        blockTradeChart.chart.on('mouseover', (e) => {
          this.handleBarHover(e);
        });
        blockTradeChart.chart.on('mouseout', () => {
          // indexService.getChartData();
          this.updateBarIsMove(true);
          this.handleBarMouseout();
        });
      },
      updateChart(data) {
        // console.warn('data>>>>>>',typeof data,data.length)
        //遍历data  得到 x轴  双 y轴
        let xList = [],
          yListTime = [],
          yListNum = [];
        // this.chartMove = true;
        // setTimeout(()=>{
        //     this.chartMove = false;
        // },500)
        if (data) {
          xList = data.x;
          yListTime = data.ya;
          yListNum = data.yb;
        }
        blockTimeChart.update({
          xAxis: [
            {
              data: xList,
            },
          ],
          series: [
            {
              data: yListTime,
            },
          ],
        });
        blockTradeChart.update({
          xAxis: [
            {
              data: xList,
            },
          ],
          series: [
            {
              data: yListNum,
            },
          ],
        });
      },
      updateBarColor() {
        blockTimeChart.update({
          series: [
            {
              itemStyle: {
                normal: {
                  //通过数组下标选择颜色
                  color: (params) => {
                    return this.barColorList[params.dataIndex];
                  },
                },
              },
            },
          ],
        });
        blockTradeChart.update({
          series: [
            {
              itemStyle: {
                normal: {
                  //通过数组下标选择颜色
                  color: (params) => {
                    return this.barColorList[params.dataIndex];
                  },
                },
              },
            },
          ],
        });
      },
      timeDiffFn(beginTime, endTime) {
        return timeDiff(beginTime, endTime);
      },
      // percentage(a,b){
      //     console.log(a/b*100)
      //     if(a&&b){
      //         return (a/b*100).toFixed(2);
      //     }
      //     return 0;
      // },
      scrollHandle() {
        const windowH =
          document.documentElement.clientHeight || document.body.clientHeight;
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        let count = 320;
        if (windowH < 768) {
          count = 280;
        }
        if (top > count) {
          this.hide(false);
        } else {
          this.hide(true);
        }
      },
      //进入提案列表
      goProposal() {
        this.$router.push('/proposal');
      },
      // 动态追加css
      addCSSRule(sheet, selector, rules, index) {
        if ('insertRule' in sheet) {
          sheet.insertRule(selector + '{' + rules + '}', index);
        } else if ('addRule' in sheet) {
          sheet.addRule(selector, rules, index);
        }
      },
      //处理验证人轮播
      createStyle() {
        this.ele = document.createElement('style');
        // 设置style属性
        this.ele.type = 'text/css';
        // 将 keyframes样式写入style内
        // 将style样式存放到head标签
        document.getElementsByTagName('head')[0].appendChild(this.ele);
        this.styleEle = document.styleSheets[document.styleSheets.length - 1];
        // 设置滚动条颜色
        if (this.isWebkit) {
          this.addCSSRule(
            this.styleEle,
            '::-webkit-scrollbar-track-piece',
            `background-color:#111111;`,
            0
          );
          this.addCSSRule(
            this.styleEle,
            '::-webkit-scrollbar-thumb',
            `background-color:#202020;`,
            1
          );
        }

        // console.log("aaaa", this.styleEle);
      },
    },
    //生命周期函数
    created() {
      const agent = navigator.userAgent.toLowerCase();
      this.isWebkit =
        agent.indexOf('applewebkit/') > -1 && agent.indexOf('edge/') == -1;
      this.updateIsMove(false); //避免视图摧毁后websocket才拿到数据，又将IsMove置为true了。
      this.updateIsMove2(false);
      // console.log("aaa", IndexService);
      // indexService = new IndexService();
      //当选验证节点
      this.getStaking();

      //统计数据
      this.getStatistic();
      //图标数据
      this.getChartData();

      indexService = new IndexService();
      indexService.getChartData();
      indexService.getStatisticData();
      indexService.getValidatorData();
      // indexService.getBlockData();
    },
    mounted() {
      // console.log('aaaa',document.styleSheets);
      // this.styleEle = document.styleSheets[0];
      this.createStyle();

      this.clientHeight =
        (document.documentElement.clientHeight || document.body.clientHeight) -
        100;

      this.initBlockTimeChart();
      this.initBlockTradeChart();
      echarts.connect([blockTimeChart.chart, blockTradeChart.chart]);

      window.onresize = function () {
        blockTimeChart.chart.resize();
        blockTradeChart.chart.resize();
      };

      this.scrollHandle(); //处理从其他页面返回首页搜索框隐藏的问题
      window.addEventListener('scroll', this.scrollHandle, false);

      const block1 = document.getElementById('zhezhao');
      const block2 = document.getElementById('blocks-ul-new2');
      this.tooltipEl = document.getElementsByClassName('bar-tooltip');
      block2.addEventListener(
        'transitionend',
        () => {
          // this.isMove2 = true;
          this.updateIsMove2(true);
        },
        false
      );
      block1.addEventListener(
        'transitionend',
        () => {
          // console.log("cccc", this.isMove);
          this.updateIsMove(false);

          // this.isMove2 = false;
          this.updateIsMove2(false);
        },
        false
      );
    },
    beforeDestroy() {
      // indexService.disconnect();
      //视图摧毁需要将IsMove重置为false,否则在区块生长过程中的时候离开了视图，IsMove一直都是true；
      this.updateIsMove(false);
      this.updateIsMove2(false);
      if (this.ele) {
        // 移除动态追加的style
        document.getElementsByTagName('head')[0].removeChild(this.ele);
        this.ele = null;
      }
    },
    destroyed() {
      //此事件并不一定百分百触发
      window.removeEventListener('scroll', this.scrollHandle);
      indexService.disconnect();

      //视图摧毁需要将IsMove重置为false,否则在区块生长过程中的时候离开了视图，IsMove一直都是true；
      this.updateIsMove(false);
      this.updateIsMove2(false);
      if (this.ele) {
        // 移除动态追加的style
        document.getElementsByTagName('head')[0].removeChild(this.ele);
        this.ele = null;
      }
    },
  };
</script>

