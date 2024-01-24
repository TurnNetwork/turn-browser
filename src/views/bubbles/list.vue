<template>
  <div class="gray-content content-padding">
    <div class="table _default_table">
      <div class="validators-search node-validators-search">
        <el-input placeholder="Please enter node Bubble ID to query" clearable v-model="keyword" @keyup.enter.native="searchFn"
                  @change="clearInput" size="mini"></el-input>
        <el-button type="primary" class="el-btn" @click="searchFn">{{ $t('search.searchBtn') }}</el-button>
      </div>
      <el-tabs v-model="tabIndex" type="card" @tab-click="tabChange">
        <el-tab-pane :label="`${$t('contract.all')}`" v-loading="tLoading" name="1">
          <div class="table-content">
            <el-table :data="tableData">
              <el-table-column label="Bubble ID" align="center" prop="bubbleId">
              </el-table-column>
              <el-table-column label="createTime" min-width="165">
                <template slot-scope="scope">
                  <span> {{ scope.row.createTime | formatTime }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Status" align="center" prop="status">
                <template slot-scope="scope">
                  <span> {{ scope.row.status | formatBubbleStatus }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Active" v-loading="tLoading" name="2">
          <div class="table-content">
            <el-table :data="tableData">
              <el-table-column label="Bubble ID" align="center" prop="bubbleId">
              </el-table-column>
              <el-table-column label="createTime" min-width="165">
                <template slot-scope="scope">
                  <span> {{ scope.row.createTime | formatTime }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Status" align="center" prop="status">
                <template slot-scope="scope">
                  <span> {{ scope.row.status | formatBubbleStatus }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="To Be Released" v-loading="tLoading" name="3">
          <div class="table-content">
            <el-table :data="tableData">
              <el-table-column label="Bubble ID" align="center" prop="bubbleId">
              </el-table-column>
              <el-table-column label="createTime" min-width="165">
                <template slot-scope="scope">
                  <span> {{ scope.row.createTime | formatTime }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Status" align="center" prop="status">
                <template slot-scope="scope">
                  <span> {{ scope.row.status | formatBubbleStatus }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Released" v-loading="tLoading" name="4">
          <div class="table-content">
            <el-table :data="tableData">
              <el-table-column label="Bubble ID" align="center" prop="bubbleId">
              </el-table-column>
              <el-table-column label="createTime" min-width="165">
                <template slot-scope="scope">
                  <span> {{ scope.row.createTime | formatTime }}</span>
                </template>
              </el-table-column>
              <el-table-column label="Status" align="center" prop="status">
                <template slot-scope="scope">
                  <span> {{ scope.row.status | formatBubbleStatus }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="pagination-box">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                       :current-page.sync="currentPage" :page-sizes="pageSizes" :page-size="pageSize"
                       layout="sizes,total,  prev, pager, next" :total="pageTotal"
                       :pager-count="windowWidth < 750 ? 5 : 9"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import apiService from '@/services/API-services';
  import API from '@/config/API-config';
  import IconImg from '@/assets/images/icon-quest.svg';

  export default {
    name: 'BubbleList',
    data() {
      return {
        tabIndex: "1",
        tableData: [],
        currentPage: 1,
        pageSize: 300,
        pageSizes: [10, 20, 50, 100, 150, 300, 500],
        pageTotal: 0,
        keyword: '',
        queryStatus: 'all',
        tLoading: false,
        timer: null,
        websocket: null,
        issafariBrowser:
          /Safari/.test(navigator.userAgent) &&
          !/Chrome/.test(navigator.userAgent),
      };
    },
    props: {
      type: String,
    },
    computed: {},
    watch: {},
    components: {},
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getTradeList();
        this.replace();
      },
      handleSizeChange(val) {
        this.currentPage = 1;
        this.pageSize = val;
        this.getTradeList();
        this.replace();
      },
      renderHeader(h, { column, $index }) {
        let tooltipsInfo = '';
        if (column.labelClassName == 'yield3') {
          //预计年化收益率
          tooltipsInfo = this.$t('tips.validatorYield');
        } else if (column.labelClassName == 'delegatedYield') {
          //预计委托年化率
          tooltipsInfo = this.$t('tips.delegatedYield');
        }
        return h('div', [
          h('span', column.label),
          h(
            'el-tooltip',
            {
              props: {
                content: tooltipsInfo,
                placement: 'bottom',
              },
            },
            [
              h('img', {
                class: 'tipsImg',
                attrs: {
                  src: IconImg,
                  alt: 'tips',
                },
              }),
            ],
            {
              content: tooltipsInfo,
            }
          ),
        ]);
      },
      tabChange() {
        console.log(this.tabIndex);
        switch (+this.tabIndex) {
          case 2:
            this.queryStatus = 'active'; break
          case 3:
            this.queryStatus = 'releasing'; break
          case 4:
            this.queryStatus = 'released'; break
          case 1:
          default:
            this.queryStatus = 'all'; break
        }
        this.currentPage = 1;
        this.getBubbleList();
      },
      clearInput(value) {
        this.currentPage = 1;
        this.tabIndex = "1";
        this.queryStatus = 'all';
        this.getBubbleList();
      },
      getBubbleList() {
        let param = {
          pageNo:this.currentPage,
          pageSize:this.pageSize,
          queryStatus:this.queryStatus,
          bubbleId:this.keyword.trim()
        };
        this.tLoading = true;
        this.tableData.length = 0;
        apiService.search
          .bubbleList(param)
          .then((res) => {
            let { errMsg, code, data,totalCount } = res;
            if (code == 0) {
              this.tableData = data;
              this.pageTotal = totalCount;
            } else {
              this.$message.error(errMsg);
            }
          })
          .catch((error) => {
            this.$message.error(error);
          })
          .finally(() => {
          if (param.queryStatus && param.queryStatus !== this.queryStatus) {
            return;
          }
          this.tLoading = false;
        });
      },
      //查询
      searchFn() {
        this.currentPage = 1;
        this.tabIndex = "1";
        this.queryStatus = 'all';
        this.getBubbleList();
      },
    },
    //生命周期函数
    created() {
      if (this.$route.query.currentPage) {
        this.currentPage = this.$route.query.currentPage - 0;
        this.pageSize = this.$route.query.pageSize - 0;
      }
      this.getBubbleList();
    },
    mounted() {

    },
  };
</script>
<style lang="less" scoped>
  .table {
    position: relative;
  }

  .history-validators-header {
    margin-top: 50px;
  }

  /deep/.el-pagination {
    .el-select .el-input__inner {
      background: transparent;
    }
  }

  .validators-search {
    width: 400px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.03);
    border-radius: 4px;
    display: flex;
    margin-left: 30px;
    background: rgba(#fff, 0.1);
    align-items: center;
    padding-left: 5px;

    /deep/.el-input--mini {
      .el-input__icon {
        line-height: 18px;
      }
    }

    /deep/.el-btn {
      border: none;
      background: transparent;
      color: #0075FF;
    }

    /deep/.el-input {
      background: transparent;
      font-size: 14px;
      border: none;
      border-radius: 0px 4px 4px 0px;
      border-left: 1px solid rgba(255, 255, 255, 0.03);
      color: #0798de;

      .el-input__inner {
        background: transparent;
        color: #fff;
        height: 100%;
      }

      .el-input__inner::placeholder {
        color: rgba(#fff, 0.5);
      }

      .el-input__inner &:hover {
        background: transparent;
      }



      &:active {
        color: #0e52ac;
      }
    }
  }

  .table {


    /deep/.el-table {
      padding: 0;
    }

    /deep/.el-table__fixed::before {
      background-color: transparent
    }

    /deep/ .el-table__fixed {
      .el-table__body tr.hover-row>td {
        background-color: transparent;
      }

      /deep/ .el-table__body tr.hover-row.current-row>td,
      /deep/ .el-table__body tr.hover-row.el-table__row--striped>td,
      /deep/.el-table__body tr.hover-row.el-table__row--striped.current-row>td {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

  }

  ._default_table {
    padding-top: 50px;

    .validators-search {
      position: absolute;
      right: 0;
      top: 45px;
      z-index: 2;
    }

    ._link {
      position: absolute;
      right: 0px;
      top: 10px;

      .historical-btn {
        margin-left: 20px;
        color: #0075FF;
      }
    }
  }

  .historical-validators {
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1200px) {
      justify-content: initial;
      margin-top: 10px;
    }

    .historical-btn {
      display: inline-block;
      margin-right: 10px;
      margin-left: 0 !important;
      color: #0798de;
    }
  }

  .validators-tab {
    display: flex;
  }

  .validators-search {
    width: 400px;
    height: 44px;
    // border: 1px solid #e6e6e6;
    border-radius: 4px;
    display: flex;
    margin-left: 30px;

    .el-searchs {
      font-size: 14px;
      border: none;
      border-radius: 0px 4px 4px 0px;
      // border-left: 1px solid #e6e6e6;
      color: #0798de;
      background: #030911;

      &:hover {
        background: #454545;
        color: #5cb2db;
        border-left: 1px solid #e6e6e6;
      }

      &:active {
        color: #0e52ac;
      }
    }

    &.node-validators-search {
      .el-searchs {
        background: #030911;

        &:hover {
          background: #454545;
        }
      }
    }
  }

  .node-stability {
    display: flex;
    width: 100%;
    // i {
    //   vertical-align: sub;
    // }
  }

  .history-validators-search {
    float: right;
  }

  .validator-name {
    position: relative;
    width: 100%;

    .el-icon-info {
      position: absolute;
      left: -10px;
    }

    .icon-remark {
      position: absolute;
      top: 5px;
      left: -17px;
      width: 14px;
      height: 14px;
    }
  }

  .node-avtor {
    width: 30px;
    height: 30px;
    margin: 0 8px;
    border-radius: 50%;
    margin-top: -3px;
  }


  .slash-tips {
    padding: 2px 0;
    width: 140px;
    text-align: center;
  }
</style>
<style lang="less">
  .validators-search {
    .el-input--mini .el-input__inner {
      height: 40px;
      line-height: 40px;
      background: #fff;
    }

    &.node-validators-search {
      .el-input--mini .el-input__inner {
        color: #FFF;
        background: transparent;
      }
    }
  }

  .node-table .el-table {

    /*overflow: visible;*/
    .cell {
      overflow: visible;
    }

    .el-table__body-wrapper {
      overflow: visible;
    }
  }

  .el-table {

    .tipsTitle,
    .tipsImg {
      display: inline;
      vertical-align: middle;
    }

    .tipsImg {
      width: 14px;
      margin-left: 4px;
      vertical-align: text-bottom;
    }
  }

  .node-table .table-content {
    width: 100%;
    overflow-x: auto;

    .el-table__header-wrapper {
      /*overflow: visible;*/
    }
  }
</style>
