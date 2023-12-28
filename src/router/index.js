import Vue from 'vue'
import Router from 'vue-router'
import Index from './map/index'
import newHome from './map/newHome'
import { faucet } from './map/faucet'
import { tradeList, tradeDetail } from './map/trade'
import { contractDetail } from './map/contract'
import { addressDetail, restrictingInfo, frozenDelegateInfo } from './map/address'
import { blockDetail, blockList } from './map/block'
import {
  nodeDetail, nodeList, historyNode, zeroNode,
  micro_node_List, micro_nodeDetail
} from './map/node'
import { proposalList, proposalDetail } from './map/proposal.js'
import { tokensList, tokensDetail } from './map/tokens.js'
import DownLoad from './map/download'
import Redirect from './map/Redirect'
import { governableParameter, foundationAddress, addToExtension } from './map/more'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    Index, // 主页
    newHome,//新主页
    tradeList,
    tradeDetail,
    contractDetail,
    addressDetail,
    nodeDetail,
    nodeList,
    micro_node_List,
    micro_nodeDetail,
    historyNode,
    zeroNode,
    restrictingInfo,
    frozenDelegateInfo,
    blockDetail,
    blockList,
    DownLoad,
    proposalList,
    proposalDetail,
    governableParameter,
    foundationAddress,
    addToExtension,
    tokensList,
    faucet,
    ...tokensDetail,
    ...Redirect // 路由重定向(访问不存在的页面时，重定向到这个页面) 放最后面
  ]
})
