<template>
  <van-overlay class="app-update-log" :show="show" @click="onClick">
    <div class="wrapper" @click.stop>
        <div class="title">
           V0.0.7.20200930 功能新增
        </div>
        <div class="content">
            <ol>
                <li>1.测试报告</li>
                <li>2.统计列表（匹配禅道开源版）</li>
            </ol>
        </div>
    </div>
  </van-overlay>
</template>
<script lang="ts">
import {Vue, Component, Prop, Provide, Emit, Watch} from "vue-property-decorator";

@Component({
  components: {},
})
export default class AppUpdateLog extends Vue {

    /**
     * 显示
     *
     * @type {boolean}
     * @memberof AppUpdateLog
     */
     public show :boolean = false;

    public onClick(){
        this.show = false;
        localStorage.setItem("updateLogStatus",'true');
    }

    created(){
        setTimeout(() => {
            this.show = true;
        }, 1500);
    }
    
}
</script>
<style lang = "less">
@import "./app-update-log.less";
</style>