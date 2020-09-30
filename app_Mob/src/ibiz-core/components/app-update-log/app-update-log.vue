<template>
  <van-overlay class="app-update-log" :show="show" @click="onClick">
    <div class="wrapper" @click.stop>
        <div class="title">
            <!-- Bug修复&功能新增 -->
            系统调试中,可能会遇到弹窗、报错等情况,敬请谅解。
        </div>
        <div class="content">
            <ol>
                <!-- <li>调试中！！</li> -->
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