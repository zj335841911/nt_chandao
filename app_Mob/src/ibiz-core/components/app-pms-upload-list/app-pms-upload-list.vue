<template>
  <div class="app-pms-upload-list">
    <ion-item @click="onItemClick(item)" v-for="item in items" :key="item.id">
      <ion-label class="app-pms-upload-list_item_label">
        {{ item.srfmajortext }}
      </ion-label>
      <ion-icon class="app-pms-upload-list_item_icon ios hydrated" name="close-outline" @click.stop="item_delete(item)"></ion-icon>
    </ion-item>
    <div class="nofile" v-if="items.length == 0">{{$t('no_file')}}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch, } from "vue-property-decorator";
import { Environment } from "@/environments/environment";
import { Uploader } from "vant";

Vue.use(Uploader);
@Component({
    i18n: {
        messages: {
            "ZH-CN": {
                no_file: "暂无附件",
            },
            "EN-US": {
                no_file: "no data",
            },
        },
    },
    components: {},
})
export default class AppPmsUploadList extends Vue {
    /**
     * 下载文件路径
     *
     * @memberof AppPmsUploadList
     */
    public downloadUrl = Environment.BaseUrl + Environment.ExportFile;

    /**
     * 视图参数
     *
     * @memberof AppPmsUploadList
     */
    @Prop() protected items!: any;

    /**
     * 文件项点击事件
     * 
     * @memberof AppPmsUploadList
     */
    public onItemClick(item: any) {
        let tempUrl = window.location.href.split("#")[0];
        let url = tempUrl + `${this.downloadUrl}` + `/${item.id}`;
        window.open(url);
    }

    /**
     * 文件项删除事件
     * 
     * @memberof AppPmsUploadList
     */
    public item_delete(item: any) {
        this.$emit("delete", [item]);
    }
}
</script>

<style lang="less">
@import "./app-pms-upload-list.less";
</style>