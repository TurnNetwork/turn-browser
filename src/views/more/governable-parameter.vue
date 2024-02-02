<template>
  <div class="governable-wrapper">
    <h2 class="title">{{ $t('more.governableParameter') }}</h2>
    <!-- staking -->
    <div class="section" v-if="lis.staking">
      <div class="sub-title">Staking</div>
      <div class="cont-row">
        <!-- 内容分割1 -->
        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>StakeThreshold</div>
              <span>{{ $t('more.stakeThreshold') }}</span>
            </div>

            <!-- Current Value: -->
            <div class="tongyiBottom">
              <div class="underline"></div>
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{ lis.staking.stakeThreshold.value | formatMoney }}TURN</span>
                </div>
                <div class="progress-box">
                  <el-progress :define-back-color="'var(--Gray-300, #22252B)'"
                               :percentage="getPercentage(lis.staking.stakeThreshold, 1)" :show-text="false" :stroke-width="20"
                               color="#0075FF"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.staking.stakeThreshold.initValue | formatMoney
                }}TURN</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.stakeThreshold, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                  <span class="regular">{{
                  lis.staking.stakeThreshold.startValue | formatMoney
                }}TURN</span>
                </div>
                <div>
                <span class="regular">{{
                  lis.staking.stakeThreshold.endValue | formatMoney
                }}TURN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 内容分割2 -->
        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>OperatingThreshold</div>
              <span>{{ $t('more.operatingThreshold') }}</span>
            </div>

            <div class="tongyiBottom">
              <div class="underline"></div>
              <!-- Current Value: -->
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.staking.operatingThreshold.value | formatMoney
                }}TURN</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.operatingThreshold, 1)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.staking.operatingThreshold.initValue | formatMoney
                }}TURN</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.operatingThreshold, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                <span class="regular">{{
                  lis.staking.operatingThreshold.startValue | formatMoney
                }}TURN</span>
                </div>
                <div>
                <span class="regular">{{
                  lis.staking.operatingThreshold.endValue | formatMoney
                }}TURN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 内容分割3 -->
        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>MaxValidators</div>
              <span>{{ $t('more.maxValidators') }}</span>
            </div>

            <div class="tongyiBottom">
              <div class="underline"></div>
              <!-- Current Value: -->
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{ lis.staking.maxValidators.value }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.maxValidators, 1)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.staking.maxValidators.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.maxValidators, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                <span class="regular">{{
                  lis.staking.maxValidators.startValue
                }}</span>
                </div>
                <div>
                <span class="regular">{{
                  lis.staking.maxValidators.endValue
                }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 内容分割4 -->
        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>UnStakeFreezeDuration</div>
              <span>{{ $t('more.unStakeFreezeDuration') }}</span>
            </div>

            <div class="tongyiBottom">
              <div class="underline"></div>
              <!-- Current Value: -->
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.staking.unStakeFreezeDuration.value
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.unStakeFreezeDuration, 1)
                    " :show-text="false" :stroke-width="20" color="#0075FF"
                               :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.staking.unStakeFreezeDuration.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.unStakeFreezeDuration, 2)
                    " :show-text="false" :stroke-width="20" color="#0075FF"
                               :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                  <!--                <span class="medium">{{-->
                  <!--                  lis.staking.unStakeFreezeDuration.start-->
                  <!--                }}</span>-->
                  <span class="regular">maxEvidenceAge</span>
                </div>
                <div>
                <span class="regular">{{
                  lis.staking.unStakeFreezeDuration.endValue
                }}</span>
                  <!--                <span class="medium">{{-->
                  <!--                  lis.staking.unStakeFreezeDuration.end-->
                  <!--                }}</span>-->
                </div>
              </div>
            </div>


          </div>
        </div>
        <!-- 内容分割4-1 -->
        <div v-if="lis.staking.unDelegateFreezeDuration" class="cont-box">
<!--          <h4 class="h4">unDelegateFreezeDuration</h4>-->
<!--          <p class="exp">{{ $t('more.unDelegateFreezeDuration') }}</p>-->
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>UnDelegateFreezeDuration</div>
              <span>{{ $t('more.unDelegateFreezeDuration') }}</span>
            </div>

            <div class="tongyiBottom">
              <div class="underline"></div>
              <!-- Current Value: -->
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.staking.unDelegateFreezeDuration.value
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.unDelegateFreezeDuration, 1)
                    " :show-text="false" :stroke-width="20" color="#0075FF"
                               :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.staking.unDelegateFreezeDuration.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.unDelegateFreezeDuration, 2)
                    " :show-text="false" :stroke-width="20" color="#0075FF"
                               :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                  <!--                <span class="medium">{{-->
                  <!--                  lis.staking.unDelegateFreezeDuration.start-->
                  <!--                }}</span>-->
                  <span class="regular">{{
                  lis.staking.unDelegateFreezeDuration.startValue
                }}</span>
                </div>
                <div>
                  <span class="regular">unStakeFreezeDuration</span>
                  <!--                <span class="medium">{{-->
                  <!--                  lis.staking.unDelegateFreezeDuration.end-->
                  <!--                }}</span>-->
                </div>
              </div>
            </div>


          </div>
        </div>
        <!-- 内容分割5 -->
        <div class="cont-box">
<!--          <h4 class="h4">rewardPerMaxChangeRange</h4>-->
<!--          <p class="exp">{{ $t('more.rewardPerMaxChangeRange') }}</p>-->
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>RewardPerMaxChangeRange</div>
              <span>{{ $t('more.rewardPerMaxChangeRange') }}</span>
            </div>

            <div class="tongyiBottom">
              <div class="underline"></div>
              <!-- Current Value: -->
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.staking.rewardPerMaxChangeRange.value
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.rewardPerMaxChangeRange, 1)
                    " :show-text="false" :stroke-width="20" color="#0075FF"
                               :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.staking.rewardPerMaxChangeRange.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.rewardPerMaxChangeRange, 2)
                    " :show-text="false" :stroke-width="20" color="#0075FF"
                               :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                  <!--                <span class="medium">{{-->
                  <!--                  lis.staking.rewardPerMaxChangeRange.start-->
                  <!--                }}</span>-->
                  <span class="regular">{{
                  lis.staking.rewardPerMaxChangeRange.startValue
                }}</span>
                </div>
                <div>
                <span class="regular">{{
                  lis.staking.rewardPerMaxChangeRange.endValue
                }}</span>
                  <!--                <span class="medium">{{-->
                  <!--                  lis.staking.rewardPerMaxChangeRange.end-->
                  <!--                }}</span>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 内容分割6 -->
        <div class="cont-box">
<!--          <h4 class="h4">rewardPerChangeInterval</h4>-->
<!--          <p class="exp">{{ $t('more.rewardPerChangeInterval') }}</p>-->
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>RewardPerChangeInterval</div>
              <span>{{ $t('more.rewardPerChangeInterval') }}</span>
            </div>

            <div class="tongyiBottom">
              <div class="underline"></div>
              <!-- Current Value: -->
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.staking.rewardPerChangeInterval.value
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.rewardPerChangeInterval, 1)
                    " :show-text="false" :stroke-width="20" color="#0075FF"
                               :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.staking.rewardPerChangeInterval.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.rewardPerChangeInterval, 2)
                    " :show-text="false" :stroke-width="20" color="#0075FF"
                               :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                  <!--                <span class="medium">{{-->
                  <!--                  lis.staking.rewardPerChangeInterval.start-->
                  <!--                }}</span>-->
                  <span class="regular">{{
                  lis.staking.rewardPerChangeInterval.startValue
                }}</span>
                </div>
                <div>
                <span class="regular">{{
                  lis.staking.rewardPerChangeInterval.endValue
                }}</span>
                  <!--                <span class="medium">{{-->
                  <!--                  lis.staking.rewardPerChangeInterval.end-->
                  <!--                }}</span>-->
                </div>
              </div>
            </div>


          </div>
        </div>
        <div class="blank"></div>
        <div class="blank"></div>
      </div>
    </div>
    <!-- slashing -->
    <div class="section" v-if="lis.slashing">
      <div class="sub-title">Slashing</div>
      <div class="cont-row">
        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>SlashBlocksReward</div>
              <span>{{ $t('more.slashBlocksReward') }}</span>
            </div>

            <!-- Current Value: -->
            <div class="tongyiBottom">
              <div class="underline"></div>
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.slashing.slashBlocksReward.value
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :define-back-color="'var(--Gray-300, #22252B)'"
                               :percentage="getPercentage(lis.slashing.slashBlocksReward, 1)" :show-text="false" :stroke-width="20"
                               color="#0075FF"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.slashing.slashBlocksReward.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.slashing.slashBlocksReward, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                <span class="regular">{{
                  lis.slashing.slashBlocksReward.startValue
                }}</span>
                </div>
                <div>
                <span class="regular">{{
                  lis.slashing.slashBlocksReward.endValue
                }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>SlashFractionDuplicateSign</div>
              <span>{{ $t('more.slashFractionDuplicateSign') }}</span>
            </div>

            <!-- Current Value: -->
            <div class="tongyiBottom">
              <div class="underline"></div>
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.slashing.slashFractionDuplicateSign.value
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :define-back-color="'var(--Gray-300, #22252B)'"
                               :percentage="getPercentage(lis.slashing.slashFractionDuplicateSign, 1)" :show-text="false" :stroke-width="20"
                               color="#0075FF"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.slashing.slashFractionDuplicateSign.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.slashing.slashFractionDuplicateSign, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                <span class="regular">{{
                  lis.slashing.slashFractionDuplicateSign.startValue
                }}</span>
                </div>
                <div>
                <span class="regular">{{
                  lis.slashing.slashFractionDuplicateSign.endValue
                }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>DuplicateSignReportReward</div>
              <span>{{ $t('more.duplicateSignReportReward') }}</span>
            </div>

            <!-- Current Value: -->
            <div class="tongyiBottom">
              <div class="underline"></div>
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.slashing.duplicateSignReportReward.value
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :define-back-color="'var(--Gray-300, #22252B)'"
                               :percentage="getPercentage(lis.slashing.duplicateSignReportReward, 1)" :show-text="false" :stroke-width="20"
                               color="#0075FF"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.slashing.duplicateSignReportReward.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.slashing.duplicateSignReportReward, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                <span class="regular">{{
                  lis.slashing.duplicateSignReportReward.startValue
                }}</span>
                </div>
                <div>
                <span class="regular">{{
                  lis.slashing.duplicateSignReportReward.endValue
                }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>MaxEvidenceAge</div>
              <span>{{ $t('more.maxEvidenceAge') }}</span>
            </div>

            <!-- Current Value: -->
            <div class="tongyiBottom">
              <div class="underline"></div>
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.slashing.maxEvidenceAge.value
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :define-back-color="'var(--Gray-300, #22252B)'"
                               :percentage="getPercentage(lis.slashing.maxEvidenceAge, 1)" :show-text="false" :stroke-width="20"
                               color="#0075FF"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.slashing.maxEvidenceAge.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.slashing.maxEvidenceAge, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                <span class="regular">{{
                  lis.slashing.maxEvidenceAge.startValue
                }}</span>
                </div>
                <div>
                  <span class="regular">unStakeFreezeDuration</span>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>ZeroProduceCumulativeTime</div>
              <span>{{ $t('more.zeroProduceCumulativeTime') }}</span>
            </div>

            <!-- Current Value: -->
            <div class="tongyiBottom">
              <div class="underline"></div>
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.slashing.zeroProduceCumulativeTime.value
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :define-back-color="'var(--Gray-300, #22252B)'"
                               :percentage="getPercentage(lis.slashing.zeroProduceCumulativeTime, 1)" :show-text="false" :stroke-width="20"
                               color="#0075FF"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.slashing.zeroProduceCumulativeTime.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.slashing.zeroProduceCumulativeTime, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                  <span class="regular">ZeroProduceNumberThreshold</span>
                </div>
                <div>
                <span class="regular">{{
                  lis.slashing.zeroProduceCumulativeTime.endValue
                }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>ZeroProduceNumberThreshold</div>
              <span>{{ $t('more.zeroProduceNumberThreshold') }}</span>
            </div>

            <!-- Current Value: -->
            <div class="tongyiBottom">
              <div class="underline"></div>
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.slashing.zeroProduceNumberThreshold.value
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :define-back-color="'var(--Gray-300, #22252B)'"
                               :percentage="getPercentage(lis.slashing.zeroProduceNumberThreshold, 1)" :show-text="false" :stroke-width="20"
                               color="#0075FF"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.slashing.zeroProduceNumberThreshold.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.slashing.zeroProduceNumberThreshold, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                <span class="regular">{{
                  lis.slashing.zeroProduceNumberThreshold.startValue
                }}</span>
                </div>
                <div>
                  <span class="regular">ZeroProduceCumulativeTime </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>ZeroProduceFreezeDuration</div>
              <span>{{ $t('more.zeroProduceFreezeDuration') }}</span>
            </div>

            <!-- Current Value: -->
            <div class="tongyiBottom">
              <div class="underline"></div>
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.slashing.zeroProduceFreezeDuration.value
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :define-back-color="'var(--Gray-300, #22252B)'"
                               :percentage="getPercentage(lis.slashing.zeroProduceFreezeDuration, 1)" :show-text="false" :stroke-width="20"
                               color="#0075FF"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.slashing.zeroProduceFreezeDuration.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.slashing.zeroProduceFreezeDuration, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                <span class="regular">{{
                  lis.slashing.zeroProduceFreezeDuration.startValue
                }}</span>
                </div>
                <div>
                  <span class="regular">UnStakeFreezeDuration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- block -->
    <div class="section" v-if="lis.block">
<!--      <h3 class="h3">block</h3>-->
      <div class="sub-title">Block</div>
      <div class="cont-row">

        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>StakeThreshold</div>
              <span>{{ $t('more.stakeThreshold') }}</span>
            </div>

            <!-- Current Value: -->
            <div class="tongyiBottom">
              <div class="underline"></div>
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{ lis.staking.stakeThreshold.value | formatMoney }}TURN</span>
                </div>
                <div class="progress-box">
                  <el-progress :define-back-color="'var(--Gray-300, #22252B)'"
                               :percentage="getPercentage(lis.staking.stakeThreshold, 1)" :show-text="false" :stroke-width="20"
                               color="#0075FF"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.staking.stakeThreshold.initValue | formatMoney
                }}TURN</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.staking.stakeThreshold, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                  <span class="regular">{{
                  lis.staking.stakeThreshold.startValue | formatMoney
                }}TURN</span>
                </div>
                <div>
                <span class="regular">{{
                  lis.staking.stakeThreshold.endValue | formatMoney
                }}TURN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- reward -->
    <div class="section" v-if="lis.reward">
<!--      <h3 class="h3">reward</h3>-->
      <div class="sub-title">Reward</div>
      <div class="cont-row">

        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>IncreaseIssuanceRatio</div>
              <span>{{ $t('more.increaseIssuanceRatio') }}</span>
            </div>

            <!-- Current Value: -->
            <div class="tongyiBottom">
              <div class="underline"></div>
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{
                  lis.reward.increaseIssuanceRatio.value
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :define-back-color="'var(--Gray-300, #22252B)'"
                               :percentage="getPercentage(lis.reward.increaseIssuanceRatio, 1)" :show-text="false" :stroke-width="20"
                               color="#0075FF"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{
                  lis.reward.increaseIssuanceRatio.initValue
                }}</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.reward.increaseIssuanceRatio, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                <span class="regular">{{
                  lis.reward.increaseIssuanceRatio.startValue
                }}</span>
                </div>
                <div>
                <span class="regular">{{
                  lis.reward.increaseIssuanceRatio.endValue
                }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- restricting -->
    <div class="section" v-if="lis.restricting">
<!--      <h3 class="h3">restricting</h3>-->
      <div class="sub-title">Restricting</div>
      <div class="cont-row">
        <div class="cont-box">
          <!-- 有背景内容块 -->
          <div class="cont-block">
            <div class="subTitleDsc">
              <div>MinimumRelease</div>
              <span>{{ $t('more.minimumRelease') }}</span>
            </div>

            <!-- Current Value: -->
            <div class="tongyiBottom">
              <div class="underline"></div>
              <div class="current">
                <div>
                  <span class="lable">{{ $t('more.currentValue') }}</span>
                  <span class="lable">{{ lis.restricting.minimumRelease.value }}TURN</span>
                </div>
                <div class="progress-box">
                  <el-progress :define-back-color="'var(--Gray-300, #22252B)'"
                               :percentage="getPercentage(lis.restricting.minimumRelease, 1)" :show-text="false" :stroke-width="20"
                               color="#0075FF"></el-progress>
                </div>
              </div>
              <!-- Genesis Value: -->
              <div class="genesis">
                <div>
                  <span class="lable">{{ $t('more.genesisValue') }}</span>
                  <span class="black">{{ lis.restricting.minimumRelease.initValue }}TURN</span>
                </div>
                <div class="progress-box">
                  <el-progress :percentage="getPercentage(lis.restricting.minimumRelease, 2)" :show-text="false"
                               :stroke-width="20" color="#0075FF" :define-back-color="'var(--Gray-300, #22252B)'"></el-progress>
                </div>
              </div>
              <!-- 底部数字 -->
              <div class="bottom">
                <div>
                  <span class="regular">{{ lis.restricting.minimumRelease.startValue }} TURN</span>
                </div>
                <div>
                  <span class="regular">{{ lis.restricting.minimumRelease.endValue }} TURN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '@/services/API-services';
export default {
  name: 'governable-parameter',
  data() {
    return {
      lis: {
        block: null,
        slashing: null,
        staking: null,
        reward: null,
      },
    };
  },
  methods: {
    getPercentage(d, s) {
      let i = 0,
        j = d.endValue - d.startValue,
        k = 0;
      if (j <= 0) {
        return 100
      }
      if (s == 1) i = d.value - d.startValue;
      else if (s == 2) i = d.initValue - d.startValue;
      k = (i / j) * 100;
      if (k < 0.3) k = 0.3;
      return k;
    },
  },
  created() {
    apiService.more
      .queryConfig()
      .then((res) => {
        let { errMsg, code, data } = res;
        if (code == 0 && data.config) {
          for (let i = 0, d = data.config; i < d.length; i++) {
            let obj = {};
            for (let j = 0, k = d[i].detail; j < k.length; j++) {
              obj[k[j].name] = k[j];
            }
            this.lis[d[i].module] = obj;
          }
        } else {
          this.$message.error(errMsg);
        }
        // console.log('this.lis: ', this.lis);
      })
      .catch((error) => {
        this.$message.error(error);
      });
  },
};
</script>

<style lang="less" scoped>
  .underline{
    border-bottom: 1px solid #535A65;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .margin-left24{
    margin-left: 24px;
  }
  .margin-right24{
    margin-right: 24px;
  }

  .subTitleDsc{
    /*height: 72px;*/
    width: 100%;
    text-align: left;
    div {
      color: var(--Light-Gray-900, var(--Gray-900, #D5D8DD));
      font-family: Montserrat-Regular;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.32px;
      margin-bottom: 12px;
    }
    span{
      color: var(--Light-Gray-900, var(--Gray-900, #D5D8DD));
      font-family: Montserrat-Regular;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 19.6px */
    }
  }
.title {
  color: var(--Gray-900, #D5D8DD);
  text-shadow: 0px 4px 13.3px var(--Blue-100, #000C1A);
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 98.437%; /* 47.25px */
  letter-spacing: -1.92px;
  margin: 25px 0 20px 0;
}

.sub-title{
  color: var(--Light-Gray-900, var(--Gray-900, #D5D8DD));
  font-family: Montserrat-Regular;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.04px;
}

.section {
  margin-bottom: 20px;
  //   border: 1px solid black;
}

.h3 {

  font-size: 24px;
  color: #F5F5F5;
  letter-spacing: 0;
  line-height: 24px;
}

.cont-row {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
}

.blank {
  width: 495px;
  height: 0;
}
.tongyiBottom{
  /*height: 200px;*/
  /*float: bottom;*/
}

.cont-box {
  width: 392px;
  height: 340px;
  margin-bottom: 20px;
  display: flex;
  padding: 24px 24px 32px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: var(--Number12, 12px);
  border: 1px solid var(--Gray-500, #535A65);
  background: linear-gradient(0deg, var(--Transparency-100, rgba(255, 255, 255, 0.03)) 0%, var(--Transparency-100, rgba(255, 255, 255, 0.03)) 100%), var(--Gray-100, #030911);
}

.h4 {
  font-size: 20px;
  color: #F5F5F5;
  letter-spacing: 0;
  line-height: 24px;
}

.exp {
  min-height: 48px;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0;
  line-height: 24px;
  margin: 10px 0 6px 0;
}

.cont-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  /*overflow: auto;*/
  /*display: flex;*/
  /*padding: 24px 24px 32px 24px;*/
  /*flex-direction: column;*/
  /*align-items: flex-start;*/
  /*gap: 16px;*/
  /*flex: 1 0 0;*/


  /*border-radius: var(--Number12, 12px);*/
  /*border: 1px solid var(--Gray-500, #535A65);*/
  /*background: linear-gradient(0deg, var(--Transparency-100, rgba(255, 255, 255, 0.03)) 0%, var(--Transparency-100, rgba(255, 255, 255, 0.03)) 100%), var(--Gray-100, #030911);*/


  /*border-radius: var(--Number12, 12px);*/
  /*border: 1px solid var(--Gray-500, #535A65);*/
  /*background: linear-gradient(0deg, var(--Transparency-100, rgba(255, 255, 255, 0.03)) 0%, var(--Transparency-100, rgba(255, 255, 255, 0.03)) 100%), var(--Gray-100, #030911);*/
  /*padding: 20px;*/
  /*color: #fff;*/

  .current {
    margin-bottom: 16px;
  }

  .genesis {
    margin-bottom: 6px;
  }

  .bottom {
    display: flex;
    justify-content: space-between;

    .medium {

      font-size: 12px;
      color: #666666;
      letter-spacing: 0;
      line-height: 24px;
    }

    .regular {
      font-size: 12px;
      color: #666666;
      letter-spacing: 0;
      text-align: right;
      line-height: 24px;
    }
  }
}

.lable {

  /*font-size: 14px;*/
  /*color: #666666;*/
  /*letter-spacing: 0;*/
  margin-right: 8px;

  color: var(--Light-Gray-900, var(--Gray-900, #D5D8DD));
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}

.progress-box {
  width: 100%;
  margin-top: 6px;

  .el-progress-bar__outer {
    background-color: #22252B;
    border-radius: 1px;
  }
}

.green {
  font-size: 13px;
  color: var(--Green-600, #00F0C5);
  letter-spacing: 0;
}

.black {

  font-size: 13px;
  color: #030911;
  letter-spacing: 0;
}

@media (max-width: 750px) {
  .governable-wrapper {
    padding: 0 40px;
  }
}

@media (max-width: 500px) {
  .governable-wrapper {
    padding: 0 20px;

    .title {
      font-size: 26px;
      line-height: 46px;
    }
  }
}
</style>
<style lang="less">
.progress-box {
  .el-progress-bar__outer {
    background-color: #22252B;
    border-radius: 1px;
  }

  .el-progress-bar__inner {
    border-radius: 1px;
  }
}
</style>
