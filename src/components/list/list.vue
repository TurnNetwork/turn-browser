<template>
    <div class="list-wrap" :class="{ 'border': border }">
        <div class="title" v-if="title">
            {{ title }}
        </div>
        <div class="item-wrap kuang" :class="{ 'flex-inline': inline, 'flex-vertical': !inline }">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import apiService from '@/services/API-services'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    name: 'list',
    data() {
        return {

        }
    },
    props: {
        title: String,
        border: Boolean,
        inline: {
            type: Boolean,
            default: false
        }
    },
    computed: {

    },
    watch: {

    },
    components: {

    },
    methods: {

    },
    //生命周期函数
    created() {

    },
    mounted() {

    }
}
</script>
<style lang="less" scoped>


.list-wrap {
    &.border {
        border: 1px solid #F5F5F5;
    }

    .title {
        font-size: 20px;
        color: #F5F5F5;
        line-height: 24px;
        /*padding: 9px 20px;*/
        padding: 9px 0;
        //border-top:2px solid #030911;
        // border-bottom: 1px solid #F5F5F5;
        //margin-bottom: 30px;

    }
}

.item-wrap {
    display: flex;
    flex-flow: column wrap;
    padding: 24px;
    width: 1224px;
    /*border-radius: 0px 12px 12px 12px;*/
    /*border: 1px solid var(--Gray-500, #535A65);*/
    /*background: linear-gradient(0deg, var(--Transparency-100, rgba(255, 255, 255, 0.03)) 0%, var(--Transparency-100, rgba(255, 255, 255, 0.03)) 100%), var(--Gray-100, #030911);*/

    &.flex-inline {
        flex-flow: row wrap;
    }
}
</style>

