<template>
  <div class="node-list-wrap">
    <div class="micro-main">
      <div class="page-title fontSize34">{{ $t('microNode.name') }}</div>
      <div class="node-list-header">
        <h3 class="Gilroy-Medium">{{ $t('nodeInfo.liveStakingInfo') }}</h3>
        <p class="staking-info">
          <span>Total Pledge &nbsp; </span>
          <span>{{ micro_node.stakingValue  | unitScoped}}</span>
          <span>&nbsp; TURN</span>
        </p>
        <div class="next-epoch"></div>
      </div>
    </div>
    <Validator></Validator>
  </div>
</template>
<script>
import apiService from '@/services/API-services';
import IndexService from '@/services/index-service';

import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';

import List from '@/components/list/list';
import Item from '@/components/list/item';
import Validator from './list';
import Vue from "vue";

let indexService = null;
export default {
  name: 'node-list',
  data() {
    return {};
  },
  props: {},
  filters:{
    //超过1k,以K为单位，超过1000K，单位M，小数点2位
    unitScoped : function (value) {
      if (!value) return "";
      if (value < 1000) {
        return value;
      } else if (1000 < value && value < 1000000) {
        return (value / 1000).toFixed(2) + "K";
      } else if (value > 1000000) {
        return (value / 1000000).toFixed(2) + "M";
      }
      return value
    }
  },
  computed: {
    ...mapGetters(['micro_node']),
    nextSetting() {
      let next = this.ValidatorStatisticData.nextSetting;
      if (next) {
        if (next < 10) {
          return '00000' + next;
        } else if (next < 100) {
          return '0000' + next;
        } else if (next < 1000) {
          return '000' + next;
        } else if (next < 10000) {
          return '00' + next;
        } else if (next < 100000) {
          return '0' + next;
        }
      } else {
        return '000000';
      }
    },
  },
  watch: {},
  components: {
    List,
    Item,
    Validator,
  },
  methods: {
    ...mapMutations({
      updateValidatorStatisticData: 'UPDATE_VALIDATOR_STATIC_DADA',
    }),
    getNodeStatistic() {
      let param = {};
      apiService.node
        .statistic(param)
        .then((res) => {
          let { errMsg, code, data } = res;
          if (code == 0) {
            this.updateValidatorStatisticData(data);
          } else {
            this.$message.error(errMsg);
          }
        })
        .catch((error) => {
          this.$message.error(error);
        });
    },
  },
  //生命周期函数
  created() {
    this.getNodeStatistic();
    indexService = new IndexService();
    indexService.getValidatorStatisticData();
  },
  mounted() { },
  destroyed() {
    indexService.disconnect();
  },
};
</script>
<style lang="less" scoped>
.node-list-header {
  margin-top: 50px;

  h3 {
    color: var(--Gray-900, #D5D8DD);
    font-size: 18px;
  }

  p {
    color: rgba(#D5D8DD, .7);
    font-size: 14px;
    display: flex;

  }
}

.micro-main {
  margin-bottom: 50px;
}
</style>
<style lang="less">
.node-list-header {
  .item-wrap {
    line-height: 24px;

    label {
      width: 171px;
      line-height: 21px;
      font-size: 14px;
    }

    p {
      font-size: 18px;
      width: auto;
    }
  }
}
</style>

