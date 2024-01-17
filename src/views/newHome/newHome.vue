<style lang="less" scoped>
* {
  margin: 0;
  padding: 0
}
.hoverBlue{
  &:hover {
    color: #66b7de;
  }
}

.tdBorderBottom{
  border-bottom: 1px solid #333;
}

.line5 .line5-1 table tr:last-child{
  border-bottom: none; /* 不显示下边框 */
}

.box-div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 1224px;
  overflow: auto;
  margin: auto;

  &::after{
    content: "";
    position: absolute;
    display: block;
    width: 1660px;
    height: 721px;
    /*background: url(./../../assets/imagesV2/Footer_img.png) no-repeat;*/
    background: url(./../../assets/imagesV2/Footerimg2.png) no-repeat;
    background-size: 100%;
    bottom: 0px;
    left:calc(50% - 830px);
    z-index: 1;
    opacity:0.3;
  }
}

.tou {
  //text-shadow: 0px 4px 13.3px var(--Blue-100, #030911);
  /* H1 */
  font-family: Montserrat-SemiBold;
  font-size: 64px;
  font-style: normal;
  //font-weight: 700;
  line-height: 98.437%;
  /* 63px */
  letter-spacing: 0.44px;
  background: linear-gradient(117deg, #CCE3FF 24.62%, #414A56 66.88%);
  /*background-clip: text;*/
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
  margin-top: 100px
}

.box-div .line1 {
  float: top;
  //margin-left: 10px;
  margin-top: 18%;
  //border: 2px solid #0D6CDA;
  height: 500px;
  width: 60%;
}

.box-div .line1-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  float: top;
  margin-right: 10px;
  margin-top: 10%;
  //border: 2px solid #0D6CDA;
  height: 500px;
  width: 35%;
  /*overflow:hidden;*/
  background: url("../../assets/imagesV2/Vector 3.png") no-repeat center;
  background-size: 600px;

  /*background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),*/
  /*linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),*/
  /*linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),*/
  /*linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));*/
  /*//background-size: 100% 100%, 100% 100%, 100% 100%, 100% 100%;*/
  /*background-position: center center, center center, center center, center center;*/
  /*background-repeat: repeat, repeat, repeat, repeat;*/
}

.box-div .line2 {
  display: block;
  height: 243px;
  width: 100%;
  //margin-top:200px
}

.kuangBg {
  border-radius: var(--Number20, 20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: linear-gradient(0deg, var(--Transparency-100, rgba(255, 255, 255, 0.03)) 0%, var(--Transparency-100, rgba(255, 255, 255, 0.03)) 100%), var(--Gray-100, #030911);
}

.box-div .line2 .rightImgBg {
  display: flex;
  justify-content: right;
  align-items: center;
  //border: 1px solid #5DC572;
  height: 243px;
  width: 454px;
  max-width: 100%;
  max-height: 100%;
  float: right;
  //margin-top:-300px

  /*background: url("../../assets/imagesV2/div.GridItem_asset___ix8N.png") no-repeat ;*/
  /*background-size: 454px 243px;*/
  /*background-position: right;*/

  /*border-radius: var(--Number20, 20px);*/
  /*border: 1px solid rgba(255, 255, 255, 0.18);*/
  /*background: linear-gradient(0deg, var(--Transparency-100, rgba(255, 255, 255, 0.03)) 0%, var(--Transparency-100, rgba(255, 255, 255, 0.03)) 100%), var(--Gray-100, #030911);*/
}



.border-kuang {
  border-radius: var(--Number20, 20px);
  //border: 1px solid rgba(255, 255, 255, 0.18);
}

.line-title {
  display: block;
  //border: 1px solid #5DC572;
  height: 32px;
  width: 100%;
  float: left;
  color: #C1C6CD;
  font-family: Montserrat-SemiBold;
  font-size: 26px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1.04px;
  margin-top: 40px;
  margin-bottom: 32px;
  /*margin-top: 100px;*/
}

.box-div .line2 .imgRight {
  position: absolute;
  top: 0;
  right: 0;
}

.box-div .line2 .line2-1 {
  display: block;
  //border: 1px solid #094296;
  height: 243px;
  width: 17%;
  float: left;
  margin-right: 20px;
  text-align: center;
  padding-top: 50px;
}


.box-div .line3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border: 1px solid #a027ad;
  height: 302px;
  width: 100%;
  //margin-top:-100px
}

.box-div .line3 .line3-1 {
  display: block;
  //border: 1px solid #0D6CDA;
  border-radius: 20px;
  height: 302px;
  width: 600px;
  float: left;
  //margin-top:-100px

  display: flex;
  /*width: 600px;*/
  /*height: 302px;*/
  justify-content: center;
  align-items: center;
}

table,
td,
th {
  /*border: 1px solid black;*/
  text-align: center;
  color: white;
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

.box-div .line4 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border: 1px solid #a027ad;
  height: 150px;
  width: 100%;
  //margin-top:-100px
}

.box-div .line4 .line4-1 {
  display: block;
  //border: 1px solid #0D6CDA;
  border-radius: 20px;
  height: 156px;
  width: 100%;
  float: bottom;
  //margin-top:-100px
}


.box-div .line5 {
  /*display: flex;*/
  display: block;
  //justify-content: space-between;
  //align-items: center;
  //border: 1px solid #a027ad;
  //height: 579px;
  width: 100%;
  //margin-top:-100px
}

.box-div .line5 .line5-1 {
  display: block;
  //border: 1px solid #0D6CDA;
  border-radius: 20px;
  height: 650px;
  width: 100%;
  float: bottom;
  /*overflow: auto;*/
  //margin-top:-100px
}

.tableHead {
  display: block;
  float: right;
  height: 64px;
  width: 100%;
  /*border: 1px solid #0309119119119110ff;*/
  /*border-top-left-radius: 10px;*/
  /*border-top-right-radius: 10px;*/

  border-radius: var(--Number20, 20px) var(--Number20, 20px) 0px 0px;
  border-bottom: 1px solid var(--Transparency-300, rgba(255, 255, 255, 0.10));
  background: var(--Transparency-100, rgba(255, 255, 255, 0.03));
  /*background-color: #FFFFFF;*/
  /*opacity: 0.03;*/
}

.tableHead .fontCss {
  color: var(--Gray-900, #D5D8DD);
  /* P1S */
  font-family: Montserrat-SemiBold;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  float: left;
  margin-top: 20px;
  padding-left: 24px;
}

.tableHead .viewAll {
  color: var(--Blue-600, #0075FF);

  /* P3 */
  font-family: Montserrat-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 19.6px */
  text-align: center;
  float: right;
  margin-top: 24px;
  padding-right: 24px;
}

.box-div .line6 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //: 1px solid #a027ad;
  //height: 480px;
  width: 100%;
  margin-top: 24px;
}

.box-div .line6 .line6-1 {
  display: block;
  //border: 1px solid #094296;
  //height: 480px;
  /*width: 600px;*/
  width: 100%;
  //float: left;
  /*margin-right: 20px;*/
  border-radius: 20px;
  text-align: center;
  padding-top: 50px;
  color: white;
  padding: 1px 0px;
}

.box-div .line6 .twoLi img {
  margin-left: 14px;
  margin-right: 10px;
}


.box-div .line1 .searchBtn {
  display: block;
  border: 1px solid #00ff00;
  border-radius: 20px;
  width: 300px;
  height: 40px;
  opacity: 0.5;
}


.search-container {
  position: relative;
  margin-top: 40px;
  margin-left:2px;
  /*border-radius: var(--Number8, 8px);*/
  /*border: 1px solid var(--Gray-600, #0e5bdb);*/
  /*background: var(--Transparency-100, rgba(255, 255, 255, 0.03));*/

  display: flex;
  width: 508px;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  /*&::before{*/
  /*  display: inline-block;*/
  /*  border: 1px solid #0000ff;*/
  /*  position: relative;*/
  /*  width: 55px;*/
  /*  height: 20px;*/
  /*  top: 0;*/
  /*  right: 0;*/
  /*  background: url("../../assets/imagesV2/Rectangle 4.png") no-repeat;*/
  /*}*/
}

.search-input {
  width: 100%;
  /* 根据需要调整宽度 */
  /*padding-right: 30px;*/
  padding-right: 12%;
  padding-left: 20px;
  /*padding-left: 75px;*/
  /* 为图标留出空间 */
  height: 60px;
  display: flex;
  align-items: center;
  gap: var(--Number20, 20px);
  background-color: black !important;
  color: var(--Gray-500, #535A65);
  /* P2 */
  font-family: Montserrat-SemiBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
  border-radius: var(--Number8, 8px);
  border: 1px solid var(--Gray-600, #6C7584);
  background: var(--Transparency-100, rgba(255, 255, 255, 0.03));
}

.search-icon {
  position: absolute;
  right: 1%;
  top: 25%;
  /* 根据需要调整图标位置 */
  //top:10px;
  cursor: pointer;
  /* 鼠标悬停时显示为手形光标 */
}

.box-div .line-end {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border: 1px solid #4b3350;
  height: 200px;
  width: 100%;
  background: url("../../assets/imagesV2/Footer img.png") repeat center;
  background-size: 100%;
  opacity: 0.4;
  margin-top: 30px;
}

.line-end2 {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border: 1px solid #4b3350;
  height: 200px;
  width: 100%;
  background: url("../../assets/imagesV2/Footer img.png") repeat center;
  background-size: 100%;
  opacity: 0.4;
}

.myTh {
  color: var(--Gray-700, #9AA1AC);
  /* P2 */
  font-family: Montserrat-SemiBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.32px;
}

.myTd {
  color: var(--Blue-1000, #CCE3FF);

  /* NumberL */
  font-family: Bebas Neue;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
}

.tableTh1 {
  color: var(--Gray-900, #D5D8DD);
  /* P3 */
  font-family: Montserrat-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  width: 20%;
  //line-height: 140%; /* 19.6px */
}

/*.line5-1 table tr th:first-child {*/
/*  width: 130px;*/
/*}*/

/*.line5-1 table tr th:nth-child(2) {*/
/*  text-align: left;*/
/*}*/

/*.line5-1 table tr td:nth-child(2) {*/
/*  text-align: left;*/
/*}*/


.fangIcon {
  width: 64px;
  height: 64px;
  max-width: 100%;
  max-height: 100%;
  margin-left: 24px;
}

.activeBubble-1 {
  width: 64px;
  height: 64px;
  max-height: 100%;
  max-width: 100%;
}

.activeBubble-2 {
  width: 327px;
  height: 44px;
  text-align: left;
  line-height: 2;
}

.activeBubble-3 {
  width: 30%;
  height: 44px;
  text-align: right;
  line-height: 2;
  padding-right: 14px;
}

.activeBubble-1-right {
  width: 64px;
  height: 64px;
  max-height: 100%;
  max-width: 100%;
}

.activeBubble-2-right {
  width: 327px;
  height: 44px;
  text-align: left;
  line-height: 2;
}

.activeBubble-3-right {
  width: 30%;
  height: 44px;
  text-align: right;
  line-height: 2;
  padding-top: 17px;
}

.twoLi {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  border-bottom: 1px solid #333;
  width: 100%;
  height: 64px;

  &:last-child{
    border-bottom: none; /* 不显示下边框 */
    margin-bottom: 0;
  }
}

.activeBubbleFont-1 {
  display: block;
  color: var(--Gray-1000, #F1F2F4);
  /* P3 */
  font-family: Montserrat-Regular;
  font-size: 14px;
  font-style: normal;
  padding-bottom: 2px;
  font-weight: 400 !important;
  /*line-height: 140%; !* 19.6px *!*/
}

.activeBubbleFont-2 {
  display: block;
  color: var(--Gray-700, #9AA1AC);
  /*text-align: right;*/
  /* P3 */
  font-family: Montserrat-Regular;
  font-size: 14px;
  font-style: normal;
  padding-top: 2px;
  font-weight: 400 !important;
  /*line-height: 140%; !* 19.6px *!*/
}

.line1-div {
  width: 100%;
  height: 660px;
  //background: url("../../assets/imagesV2/bg_icon.png") no-repeat;
}

.box_content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 1224px;
  overflow: auto;
  margin: auto;
  z-index: 2;
}

.hoverTd:hover{
  color: blue;
}

.changeType{
  /*display: inline-block;*/
  width: 55px;
  height: 24px;
  /*border: 1px solid #cf326e;*/
  /*float: left;*/
  position: absolute;
  left: 2%;
  top: 30%;

  .changeLayer{
    color: var(--Gray-900, white);
    /* P2 */
    font-family: Montserrat-SemiBold;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.32px;
    width: 50px;
  }
  img{
    width: 5px;
    height: 5px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
}

  /deep/.selectLayerHover{
  font-size: 16px;

  &:hover{
    color: #cf326e;
  }
}

</style>

<template>
  <!--写一个大框，定义长宽高-->
  <div class="box-div">

    <div class="box_content">
      <!--定义个框，左边是文字，右边是图片，同一行-->
      <div class="line1-div">
        <div class="line1">
          <p class="tou">The Turn Network<br />Blockchain Explorer</p>
          <div class="search-container">
            <div class="changeType" style="display: none">
              <span style="font-size: 16px">Layer1</span>

<!--              <el-tooltip placement="top" class="changeLayer">-->
<!--                <div slot="content">-->
<!--                  <span class="selectLayerHover" @click="selectLayerInput(1)">Layer1</span>-->
<!--                  <br/>-->
<!--                  <span class="selectLayerHover" @click="selectLayerInput(2)">Layer2</span>-->
<!--                </div>-->
<!--                <el-button style="background-color: black;border:none" >{{selectLayer}}</el-button>-->
<!--              </el-tooltip>-->

              <img src="../../assets/imagesV2/Rectangle 4.png" alt="">
            </div>

            <input type="text" class="search-input" v-model="searchKey" placeholder="Search by Address/BlockHeight/BlockHash/TxHash"
                   @keyup.enter="searchFn"
            />
            <div class="search-icon" aria-hidden="true" v-model="searchKey" @click="searchFn">
              <img style="max-height: 60%;max-width: 60%" src="../../assets/imagesV2/search.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="line-title" style="display: none">
<!--      <div class="line-title">-->
        <b>Utrecht Symptoom Dagboek</b>
      </div>

      <div class="line2 border-kuang kuangBg" style="display: none">
<!--      <div class="line2 border-kuang kuangBg">-->
        <img class="rightImgBg" src="../../assets/imagesV2/div.GridItem_asset___ix8N.png" alt="" />
        <!--靠左新增3个框浮动左-->
        <div class="line2-1">
          <table>
            <tr>
              <th class="myTh">Active Bubbles</th>
            </tr>
            <tr>
              <td class="myTd">1.11K</td>
            </tr>
          </table>
        </div>
        <div class="line2-1">
          <table>
            <tr>
              <th class="myTh">Active Micro-Nodes</th>
            </tr>
            <tr>
              <td class="myTd">50.12K</td>
            </tr>
          </table>
        </div>
        <div class="line2-1">
          <table>
            <tr>
              <th class="myTh">L1/L2 Peak Instantaneous TPS</th>
            </tr>
            <tr>
              <td class="myTd">110/300</td>
            </tr>
          </table>
          <br />
        </div>
      </div>
      <div class="line-title">
        <b>Network Activity</b>
      </div>
      <div class="line3">
        <div class="line3-1 border-kuang kuangBg">
          <table>
            <tr>
              <th class="myTh">{{ $t('indexInfo.LIVEBLOCKHEIGHT') }}</th>
              <th class="myTh">{{ $t('indexInfo.LIVEBLOCKTIME') }}</th>
            </tr>
            <tr>
              <td class="myTd"><a class="cursor hoverBlue" @click="goBlockDetail(blockStatisticData.currentNumber)">{{ blockStatisticData.currentNumber
                }}</a></td>
<!--              <td class="myTd">1.0032</td>-->
              <td class="myTd">{{ tooltipData.time }}s</td>
            </tr>
<!--            <tr>-->
<!--              <th class="myTh">{{ $t('indexInfo.LIVEADDRESS') }}</th>-->
<!--              <th class="myTh">Total number of L1 transactions</th>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td class="myTd">{{ blockStatisticData.addressQty | formatNumber }}</td>-->
<!--              <td class="myTd">{{blockStatisticData.txQty | unit}}</td>-->
<!--            </tr>-->

            <tr>
              <th class="myTh">{{ $t('indexInfo.LIVEBLOCKTRANSACTIONS') }}</th>
              <th class="myTh">{{ $t('blockAbout.producer').toUpperCase() }}</th>
            </tr>
            <tr>
              <td class="myTd cursor hoverBlue" @click="$router.push('/trade')">{{ tooltipData.txs }}</td>
              <td class="myTd"><a class="cursor hoverBlue" @click="goNodeDetail(blockStatisticData.nodeId)">{{ blockStatisticData.nodeName }}</a></td>
            </tr>
          </table>
        </div>
        <div class="line3-1 border-kuang kuangBg">
          <table>
            <tr>
              <th class="myTh">{{ $t('indexInfo.LIVEADDRESS') }}</th>
              <th class="myTh">Total number of L1 transactions</th>
            </tr>
            <tr>
              <td class="myTd">{{ blockStatisticData.addressQty | formatNumber }}</td>
              <td class="myTd">{{blockStatisticData.txQty | unit}}</td>
            </tr>
<!--            <tr>-->
<!--              <th class="myTh">{{ $t('indexInfo.LIVEBLOCKTRANSACTIONS') }}</th>-->
<!--              <th class="myTh">{{ $t('blockAbout.producer').toUpperCase() }}</th>-->
<!--            </tr>-->
<!--            <tr>-->
<!--              <td class="myTd cursor hoverBlue" @click="$router.push('/trade')">{{ tooltipData.txs }}</td>-->
<!--              <td class="myTd"><a class="cursor hoverBlue" @click="goNodeDetail(blockStatisticData.nodeId)">{{ blockStatisticData.nodeName }}</a></td>-->
<!--            </tr>-->
            <tr>
              <th class="myTh">Total Number Of L2 Transactions</th>
              <th class="myTh">{{ $t('indexInfo.PENDINGTOTAL') }}</th>
            </tr>
            <tr>
<!--              <td class="myTd">{{blockStatisticData.txQty | unit}}</td>-->
              <td class="myTd">0</td>
              <td class="myTd cursor hoverBlue">
                <a @click="goProposal">
                  {{ blockStatisticData.doingProposalQty | formatNumber }}
                  <span>/ {{ blockStatisticData.proposalQty | formatNumber }}</span>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="line-title">
        <b>About TURN</b>
      </div>
      <div class="line4 border-kuang kuangBg">
        <div class="line4-1">
          <table>
            <tr>
              <th class="myTh">{{ $t('indexInfo.totalSupply') }}</th>
              <th class="myTh">{{ $t('indexInfo.circulatingSupply') }}</th>
              <th class="myTh">{{ $t('nodeInfo.stakeRate').toUpperCase() }}</th>
<!--              <th class="myTh">Inflation Rate</th>-->
            </tr>

            <tr>
              <td class="myTd">{{ blockStatisticData.issueValue | unit }}</td>
              <td class="myTd">{{ blockStatisticData.turnValue | unit }}</td>
              <td class="myTd">
                {{
                blockStatisticData.stakingDelegationValue
                | percentage(blockStatisticData.stakingDenominator)
                }}%&nbsp;
                <b class="tip">
                  ({{ blockStatisticData.stakingDelegationValue | formatNumber }})
                </b>

              </td>
<!--              <td class="myTd">3.17%</td>-->
            </tr>
          </table>
        </div>
      </div>
      <div class="line-title">
        <b>Transaction Blocks</b>
      </div>
      <div class="line5 border-kuang kuangBg">
        <div class="tableHead">
          <span class="fontCss">{{ $t('blockAbout.electedBlock') }}</span>
          <a class="viewAll" href="/block">View All ></a>
        </div>
        <div class="line5-1">
          <table>
            <tr class="tdBorderBottom">
              <th class="tableTh1"></th>
              <th class="tableTh1">Block</th>
              <th class="tableTh1">Producer</th>
              <th class="tableTh1">Txn</th>
<!--              <th class="tableTh1">Block Reward(TURN)</th>-->
              <th class="tableTh1">Age</th>
            </tr>

            <tr v-for="(item, index) in blockData" :key="index" class="tdBorderBottom">
              <td>
                <img class="fangIcon" src="../../assets/imagesV2/Box.png" alt="" />
              </td>
<!--              <td class="tableTh1 cursor hoverTd">-->
                <td class="tableTh1 hoverBlue"><span class="item-number cursor" @click="goBlockDetail(item.number)">{{ item.number }}</span>
<!--                <a href="#" target="_blank"></a>-->
<!--                18466814-->
              </td>
              <td class="tableTh1">
                <p>
                  {{ $t('blockAbout.producer') }}
                  <a class="cursor hoverBlue" @click="goNodeDetail(item.nodeId)">{{
                    item.nodeName
                    }}</a>
                </p>
              </td>
              <td class="tableTh1">
                <span class="item-txns">{{ item.statTxQty }}&nbsp;{{ $t('indexInfo.txns') }}</span>
              </td>
<!--              <td class="tableTh1">4.483294189788</td>-->
              <td class="tableTh1">
                <span class="item-time">{{ timeDiffFn(item.serverTime, item.timestamp) }}&nbsp;{{
                  $t('tradeAbout.before')
                }}</span>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div class="line6">
        <div class="line6-1 border-kuang kuangBg">
          <div class="tableHead">
            <span class="fontCss">{{ $t('indexInfo.currentValidators') }}</span>
            <a class="viewAll" href="/node">View All ></a>
          </div>
          <ul style="margin-top: 50px;padding:0 10px">
            <li class="twoLi cursor" v-for="(item, index) in ValidatorData.dataList" :key="index" @click="goNodeDetail(item.nodeId)">
              <div>
                <img class="activeBubble-1" src="../../assets/imagesV2/aa.png" alt="" />
              </div>
              <div class="activeBubble-2">
                <span class="activeBubbleFont-1 hoverBlue">{{ item.nodeName }}</span>
                <span class="activeBubbleFont-2 hoverBlue">{{ $t('nodeInfo.totalStakePower') }} {{ item.totalValue | formatMoney }} TURN</span>
              </div>
              <div class="activeBubble-3">
                <span class="activeBubbleFont-1">{{ item.expectedIncome }} {{ $t('nodeInfo.yield2') }}</span>
                <span class="activeBubbleFont-2">{{item.ranking}} {{ $t('nodeInfo.rank') }}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="line6-1 border-kuang kuangBg" style="display: none">
          <div class="tableHead">
            <span class="fontCss">Active Bubbles(L2)</span>
            <a class="viewAll" href="">View All ></a>
          </div>
          <ul style="margin-top: 50px;padding:0 10px">
            <li class="twoLi" v-for="(item, index) in bubbleList" :key="index" >
              <div>
                <img class="activeBubble-1-right" src="../../assets/imagesV2/svg.png" alt="" />
              </div>
              <div class="activeBubble-2-right">
                <span class="activeBubbleFont-1">{{item.bubbleId}}</span>
                <span class="activeBubbleFont-2">{{item.createTime | formatTime}}</span>
              </div>
              <div class="activeBubble-3-right">
                <span class="activeBubbleFont-1">{{item.status | formatBubbleStatus}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!--    <div class="line-end">-->

      <!--    </div>-->
      <div style="width: 100%;height: 406px">

      </div>
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
      bubbleList:null,
      selectLayer:'Layer1',//默认选中的layer
      searchLayer:null,//1 Layer1 ;2 Layer2
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
      // this.updateChart(val);
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
    selectLayerInput(type){
      if (type == 1){
        this.searchLayer = 1;
        this.selectLayer = "Layer1";
      }else if (type == 2){
        this.searchLayer = 2;
        this.selectLayer = "Layer2";
      }
    },
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
    getBubbleList() {
      console.log("请求bubbleList接口")
      let param = {pageNo:1,pageSize:10,queryStatus:'all'};
      apiService.search
        .bubbleList(param)
        .then((res) => {
          let { errMsg, code, data } = res;
          this.bubbleList = data;
          console.log("bubbleList是:",this.bubbleList);
          //this.updateValidators(data);
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
    // initBlockTimeChart() {
    //   let r = this.$refs;
    //   // console.log(r);
    //
    //   blockTimeChart.init(r.blockTimeChart, blockTimeChart.blockTimeOption);
    //   blockTimeChart.chart.on('mouseover', (e) => {
    //     this.handleBarHover(e);
    //   });
    //   blockTimeChart.chart.on('mouseout', () => {
    //     // indexService.getChartData();
    //     this.updateBarIsMove(true);
    //     this.handleBarMouseout();
    //   });
    // // },
    // initBlockTradeChart() {
    //   let r = this.$refs;
    //   blockTradeChart.init(r.blockTradeChart, blockTradeChart.blockTradeOption);
    //   blockTradeChart.chart.on('mouseover', (e) => {
    //     this.handleBarHover(e);
    //   });
    //   blockTradeChart.chart.on('mouseout', () => {
    //     // indexService.getChartData();
    //     this.updateBarIsMove(true);
    //     this.handleBarMouseout();
    //   });
    // },
    // updateChart(data) {
    //   // console.warn('data>>>>>>',typeof data,data.length)
    //   //遍历data  得到 x轴  双 y轴
    //   let xList = [],
    //     yListTime = [],
    //     yListNum = [];
    //   // this.chartMove = true;
    //   // setTimeout(()=>{
    //   //     this.chartMove = false;
    //   // },500)
    //   if (data) {
    //     xList = data.x;
    //     yListTime = data.ya;
    //     yListNum = data.yb;
    //   }
    //   blockTimeChart.update({
    //     xAxis: [
    //       {
    //         data: xList,
    //       },
    //     ],
    //     series: [
    //       {
    //         data: yListTime,
    //       },
    //     ],
    //   });
    //   blockTradeChart.update({
    //     xAxis: [
    //       {
    //         data: xList,
    //       },
    //     ],
    //     series: [
    //       {
    //         data: yListNum,
    //       },
    //     ],
    //   });
    // },
    // updateBarColor() {
    //   blockTimeChart.update({
    //     series: [
    //       {
    //         itemStyle: {
    //           normal: {
    //             //通过数组下标选择颜色
    //             color: (params) => {
    //               return this.barColorList[params.dataIndex];
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   });
    //   blockTradeChart.update({
    //     series: [
    //       {
    //         itemStyle: {
    //           normal: {
    //             //通过数组下标选择颜色
    //             color: (params) => {
    //               return this.barColorList[params.dataIndex];
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   });
    // },
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
    //bubbleList接口,等待layer2开发好
    //this.getBubbleList();
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

    // this.initBlockTimeChart();
    // this.initBlockTradeChart();
    // echarts.connect([blockTimeChart.chart, blockTradeChart.chart]);
    //
    // window.onresize = function () {
    //   blockTimeChart.chart.resize();
    //   blockTradeChart.chart.resize();
    // };

    this.scrollHandle(); //处理从其他页面返回首页搜索框隐藏的问题
    window.addEventListener('scroll', this.scrollHandle, false);

    // const block1 = document.getElementById('zhezhao');
    // const block2 = document.getElementById('blocks-ul-new2');
    // this.tooltipEl = document.getElementsByClassName('bar-tooltip');
    // block2.addEventListener(
    //   'transitionend',
    //   () => {
    //     // this.isMove2 = true;
    //     this.updateIsMove2(true);
    //   },
    //   false
    // );
    // block1.addEventListener(
    //   'transitionend',
    //   () => {
    //     // console.log("cccc", this.isMove);
    //     this.updateIsMove(false);
    //
    //     // this.isMove2 = false;
    //     this.updateIsMove2(false);
    //   },
    //   false
    // );
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

