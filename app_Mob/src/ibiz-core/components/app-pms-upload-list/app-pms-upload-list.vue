<template>
  <div class="app-pms-upload-list">
    <div class="app-pms-upload-list_item" @click="onItemClick(item)" v-for="item in items" :key="item.id">
      <div class="index_icon">
        <ion-icon class="doc" v-if="item.extension == 'doc' || item.extension == 'docx'" name="file-word-o"></ion-icon> 
        <ion-icon class="txt" v-else-if="item.extension == 'txt'" name="file-text-o"></ion-icon> 
        <ion-icon class="pdf" v-else-if="item.extension == 'pdf'" name="file-pdf-o"></ion-icon> 
        <ion-icon class="zip" v-else-if="item.extension == 'zip' || item.extension == 'rar'" name="file-archive-o"></ion-icon> 
        <ion-icon class="xls" v-else-if="item.extension == 'xls' || item.extension == 'xlsx'" name="file-excel-o"></ion-icon> 
        <ion-icon class="ppt" v-else-if="item.extension == 'pptx' || item.extension == 'ppt'" name="file-powerpoint-o"></ion-icon> 
        <ion-icon class="mp4" v-else-if="item.extension == 'mp4'" name="file-video-o"></ion-icon> 
        <img @click.stop="openImages(getImage(item))" v-else-if="isImages(item)" :src="getImage(item)" alt="">
        <ion-icon class="txt" v-else name="file-o"></ion-icon> 
      
      </div>
      <div class="file_info_content">
        <div class="file_name"> <strong>{{ item.srfmajortext }}</strong></div>
        
        <div class="file_footer">
            <div class="file_size">{{item.strsize}}</div>
            <div class="file_size">|</div>
            <div class="file_created_date">{{item.addeddate}}</div>
        </div>
      </div>
        <div class="file_delete_icon"><ion-icon class="app-pms-upload-list_item_icon ios hydrated" name="close-outline" @click.stop="item_delete(item)"></ion-icon></div>
    </div>
    <div class="nofile" v-if="items.length == 0">{{$t('no_file')}}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch, } from "vue-property-decorator";
import { Environment } from "@/environments/environment";
import { Uploader } from "vant";
import { ImagePreview } from 'vant';
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
    components: { [ImagePreview.Component.name]: ImagePreview.Component, }
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
     * 是否为图片类型
     */
    public isImages(item: any) {
        return Object.is(item.extension, 'jpg') || Object.is(item.extension, 'gif') || Object.is(item.extension, 'bmp') || Object.is(item.extension, 'png')
    }

    /**
     * 文件项删除事件
     * 
     * @memberof AppPmsUploadList
     */
    public item_delete(item: any) {
        this.$emit("delete", [item]);
    }
    /**
     * 解析图片地址
     */
    public getImage(item: any) {
        return `${this.downloadUrl}` + `/${item.id}`
    }

    /**
     * 打开图片预览
     */
    public openImages(src: any) {
        ImagePreview({
            images: [
                src,
            ],
            showIndex: false,
        });
    }

}
</script>

<style lang="less">
@import "./app-pms-upload-list.less";
</style>