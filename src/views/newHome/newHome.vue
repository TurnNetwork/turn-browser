<style lang="less" scoped>
  *{margin:0;padding: 0}
  .box-div{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items:flex-start;
      /*height: 1500px;*/
      height: 1500px;
      width: 100%;
      background-color: #1d1e1f;
      border: 1px solid #00ff00;
  }

  .box-div .line1{
    float: top;
    margin-left: 10px;
    margin-top: 10px;
    border: 2px solid #0D6CDA;
    height: 226px;
    width: 500px;
  }

  .box-div .line1-2{
    float: top;
    margin-right: 10px;
    margin-top: 10px;
    border: 2px solid #0D6CDA;
    height: 226px;
    width: 400px;
    /*overflow:hidden;*/
    background:  url("../../assets/imagesV2/Vector 3.png") no-repeat center;
    background-size: 350px;
  }
  .box-div .line2{
    display: block;
    border: 1px solid #5DC572;
    height: 200px;
    width: 100%;
    //margin-top:-300px
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
    border: 1px solid #a027ad;
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
    border: 1px solid #a027ad;
    height: 150px;
    width: 100%;
    //margin-top:-100px
  }

  .box-div .line4 .line4-1{
    display: block;
    border: 1px solid #0D6CDA;
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
    border: 1px solid #a027ad;
    height: 300px;
    width: 100%;
    //margin-top:-100px
  }
  .box-div .line5 .line5-1{
    display: block;
    border: 1px solid #0D6CDA;
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
    border: 1px solid #a027ad;
    height: 300px;
    width: 100%;
  }

  .box-div .line6 .line6-1{
    display: block;
    border: 1px solid #094296;
    height: 300px;
    width: 600px;
    float: left;
    /*margin-right: 20px;*/
    border-radius: 10px;
    text-align: center;
    padding-top: 50px;
    color:white;
    padding: 0px 10px;
  }

  .box-div .line1 .searchBtn{
    display: block;
    border: 1px solid #00ff00;
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
    width: 400px; /* 根据需要调整宽度 */
    padding-right: 30px; /* 为图标留出空间 */
    height: 40px;
  }

  .search-icon {
    position: absolute;
    right: 100px; /* 根据需要调整图标位置 */
    top:10px;
    cursor: pointer; /* 鼠标悬停时显示为手形光标 */
  }



</style>

<template>
  <!--写一个大框，定义长宽高-->
  <div class="box-div">
    <!--定义个框，左边是文字，右边是图片，同一行-->
    <div class="line1">
      <p style="font-family: Montserrat;color:white;font-size: 40px;text-align:left;margin-top: 50px">The Turn Network<br/>Blockchain Explorer</p>
<!--      <p style="font-family: Montserrat;font-size: 40px">The Turn Network<br/>Blockchain Explorer</p>-->
<!--      <img style="display:inline-block;transform: scale(0.3);" src="../../assets/imagesV2/Retro Glass Material 2.png">-->


<!--      <div class="searchBtn">-->
<!--        <el-input  v-model="input" placeholder="The Turn Network Blockchain Explorer"></el-input>-->
<!--        <i class="search-icon" aria-hidden="true">🔍</i>-->
<!--      </div>-->

      <div class="search-container">
        <input type="text" class="search-input" placeholder="The Turn Network Blockchain Explorer">
        <i class="search-icon" aria-hidden="true">🔍</i>
      </div>


<!--      <el-input v-model="input" placeholder="请输入内容"></el-input>-->
<!--      <el-button type="primary" class="el-btn el-searchs"  @click="searchFn"-->
<!--                 >查询</el-button>-->
    </div>



    <div class="line1-2">
<!--      <img style="transform: scale(0.3);" src="../../assets/imagesV2/Retro Glass Material 2.png" alt="" />-->
      <img style="margin-left: 130px;max-width:100%;max-height: 100%" src="../../assets/imagesV2/Retro Glass Material 2.png" alt="" />
    </div>

    <div class="line2">
<!--      <b style="display:block;margin-top: -350px">asdfasdfa</b>-->
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
    </div>

    <div class="line3">
        <div class="line3-1">
          <table>
            <tr>
              <th>Current Block Height</th>
              <th>Real-time Block Generation uration(s)</th>
            </tr>
            <tr>
              <td>19978</td>
              <td>1.0032</td>
            </tr>
            <tr>
              <th>Address count</th>
              <th>Total number of L1 transactions</th>
            </tr>
            <tr>
              <td>100M</td>
              <td>12.18M</td>
            </tr>
          </table>
        </div>
        <div class="line3-1">
          <table>
            <tr>
              <th>Real-Time Block Trade Count</th>
              <th>Mining Node</th>
            </tr>
            <tr>
              <td>10</td>
              <td>ABC007</td>
            </tr>
            <tr>
              <th>Total Number Of L2 Transactions</th>
              <th>Ongoing/Overall Proposal</th>
            </tr>
            <tr>
              <td>120.18M</td>
              <td>1/4</td>
            </tr>
          </table>
        </div>
    </div>

    <div class="line4">
      <div class="line4-1">
        <table>
          <tr>
            <th>Total Circulation</th>
            <th>Circulation</th>
            <th>Pledge Rate</th>
            <th>Inflation Rate</th>
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

    <div class="line5">
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
      <div class="line6-1">
        <ul>
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
      <div class="line6-1">
        <ul>
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



  </div>


</template>
<script>


  export default {
    name: 'newHome',
    data() {
      return {
        input:""
      };
    },
    props: {},
    computed: {

    },
    watch: {

    },
    components: {
      // comHeader,
    },
    methods: {

    },
    //生命周期函数
    created() {

    },
    mounted() {

    },
    beforeDestroy() {

    },
    destroyed() {

    },
  };
</script>

