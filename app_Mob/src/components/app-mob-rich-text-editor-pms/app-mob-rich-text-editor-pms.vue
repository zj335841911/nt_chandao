<template>
  <div class="app-mob-rich-text-editor" >
    <div class="rich-text-editor-info" v-html="showVal" ref="content" @click="open"></div>
    <ion-icon class="app-mob-rich-text-editor-icon" v-if="!showVal" name="options-outline" @click.stop="open"></ion-icon>
    <van-popup closeable v-model="picturePreview.status" @click-overlay="closePreview" get-container="#app" @opened="openedPreview"><img @click="closePreview" class="preview" v-show="picturePreview.status" :src="picturePreview.src"/></van-popup>
  </div>
</template>
<script lang = 'ts'>
import { Vue, Component, Prop, Model, Watch,Provide } from 'vue-property-decorator';
import { Environment } from '@/environments/environment';
import qs from 'qs';
@Component({})
export default class AppRichTextEditor extends Vue {

    /**
     * 值
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    @Prop() public value?: any;

    /**
     * 是否禁用
     *
     * @type {boolean}
     * @memberof AppRichTextEditor
     */
    @Prop() public disabled?: boolean;


    /**
     * 富文本显示值
     *
     * @type {boolean}
     * @memberof AppRichTextEditor
     */
    public showVal:string = "";
    
    /**
     * 展示的值
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    @Watch("value")
    onValueChange(){
      const url:string = this.downloadUrl.indexOf('../') === 0 ? this.downloadUrl.substring(3) : this.downloadUrl;
      this.showVal = this.value ? this.value.replace(/\{(\d+)\.(bmp|jpg|jpeg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp)\}/g, `${url}/$1`) : "";
    }

    /**
     * 是否图片预览
     *
     * @memberof AppRichTextEditor
     */
    public picturePreview:any = {status:false};

    /**
     * 上传params
     *
     * @type {Array<any>}
     * @memberof AppRichTextEditor
     */
    public upload_params: Array<any> = [];

    /**
     * 导出params
     *
     * @type {Array<any>}
     * @memberof AppRichTextEditor
     */
    public export_params:any ;

    /**
     * 上传参数
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    @Prop() public uploadparams?: any;

    /**
     * 下载参数
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    @Prop() public exportparams?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof AppRichTextEditor
     */
    @Prop() public viewparams!: any;

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof AppRichTextEditor
     */
    @Prop() public context!: any;

    /**
     * 表单数据
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    @Prop() public data!: string;

    /**
     * 上传文件路径
     *
     * @memberof AppMobFileUpload
     */
    public uploadUrl = Environment.BaseUrl + Environment.UploadFile;

    /**
     * 下载文件路径
     *
     * @memberof AppMobFileUpload
     */
    public downloadUrl = Environment.BaseUrl + Environment.ExportFile;
    
    /**
     * 文件列表
     *
     * @memberof AppMobFileUpload
     */
    @Provide() public files: Array<any> = [];

    /**
     * 开发模式文件数组
     *
     * @private
     * @type {Array<any>}
     * @memberof AppMobFileUpload
     */
    private devFiles: Array<any> = [];

    /**
     * 打开富文本
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    public open(){
      if (this.disabled) {
        return false;
      }
      let curVal:any = null;
      if(this.value){
        const url:string = this.downloadUrl.indexOf('../') === 0 ? this.downloadUrl.substring(3) : this.downloadUrl;
        curVal = this.value.replace(/\{(\d+)\.(bmp|jpg|jpeg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp)\}/g, `${url}/$1`);
      }
      this.openPopupModal({ viewname: 'app-rich-text-pms', title: 'app-rich-text-pms'},{},{value:curVal,uploadUrl:this.uploadUrl,export_params:this.export_params});
    }

    /**
     * 模态打开富文本
     *
     * @type {string}
     * @memberof AppRichTextEditor
     */
    private async openPopupModal(view: any, context: any, param: any): Promise<any> {
        const result: any = await this.$appmodal.openModal(view, context, param);
        if (result || Object.is(result.ret, 'OK')) {
            this.$emit("change", result.datas[0].backEnd);
        }
    }

    /**
     * 数据处理
     *
     * @private
     * @memberof AppMobFileUpload
     */
    private dataProcess(): void {
        const { context: uploadContext, param: uploadParam }
            = this.$viewTool.formatNavigateParam(this.uploadparams, {}, this.context, this.viewparams, JSON.parse(this.data));
        const { context: exportContext, param: exportParam }
            = this.$viewTool.formatNavigateParam(this.exportparams, {}, this.context, this.viewparams, JSON.parse(this.data));
        this.export_params ={exportParamStr: qs.stringify(exportParam, { delimiter: '&' }),exportContextStr:qs.stringify(exportContext, { delimiter: '&' })};
        let _uploadUrl = `${Environment.BaseUrl}${Environment.UploadFile}`;
        const uploadContextStr: string = qs.stringify(uploadContext, { delimiter: '&' });
        const uploadParamStr: string = qs.stringify(uploadParam, { delimiter: '&' });
        if (!Object.is(uploadContextStr, '') ) {
            _uploadUrl = `${_uploadUrl}?${uploadContextStr}`;
        }
        if(!Object.is(uploadParamStr, '')){
          _uploadUrl += `&${uploadParamStr}`;
        }
        this.uploadUrl = _uploadUrl;
    }

    /**
     * 生命周期
     *
     * @private
     * @memberof AppMobFileUpload
     */
    public mounted(){
      this.dataProcess();
      this.getPictureDom();
    }

    /**
     * 获取图片DOM进行操作
     *
     * @memberof AppMobFileUpload
     */
    public getPictureDom(){
        // 获取到所有图片dom节点
        let contents:any = this.$refs.content;  
        let imgs:any = contents.getElementsByTagName("img");
        setTimeout(() => {
          Array.from(imgs).forEach((img:any)=>{
            img.addEventListener('click',(event:any)=>{
              localStorage.setItem('picture-preview',`{"src":"${img.src}","status":true}`);
              this.picturePreview = {"src":img.src,"status":true}
              event.stopPropagation();
            },false)
          })
        }, 500);
    }

    /**
     * 关闭图片预览弹出层
     *
     * @memberof AppMobFileUpload
     */
    public closePreview(){
      localStorage.setItem('picture-preview',`{"src":"","status":false}`);
      this.picturePreview = {"src":"","status":false};
    }

    /**
     * 打开图片预览弹出层后
     *
     * @memberof AppMobFileUpload
     */
    public openedPreview(){
      console.log('打开弹出层且动画结束后触发');
    }
}
</script>
<style lang="less">
@import './app-mob-rich-text-editor-pms.less';
</style>