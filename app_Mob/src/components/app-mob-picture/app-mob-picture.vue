<template>
    <div class="app-mobile-picture">
        <van-uploader 
            :class="singleChoiceBtnState"
            multiple="false" 
            :disabled="state" 
            :fileList="files" 
            :result-type="resultType" 
            :before-read="beforeRead" 
            :after-read="afterRead"  
            @delete="onDelete"
            />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Provide, Emit, Watch } from 'vue-property-decorator';
import { Environment } from '@/environments/environment';
import { Subject, Unsubscribable } from 'rxjs';
import Axios from 'axios';

import { Uploader } from 'vant';
import { Loading } from '@/ibiz-core/utils';
Vue.use(Uploader);
@Component({
    components: {
    }
})
export default class AppMobPicture extends Vue {

    // MOB LOGIC BEGIN
    /**
     * 单选按钮状态
     *
     * @readonly
     * @type {Array<string>}
     * @memberof AppMobPicture
     */
    get singleChoiceBtnState(): Array<string> {
        return [
            !this.multiple && this.files.length === 1 ? 'hidden-choice-button' : '',
        ];
    }

    /**
     * 编辑器状态
     *
     * @readonly
     * @type {boolean}
     * @memberof AppMobPicture
     */
    get state(): boolean {
        // 禁用
        if (this.disabled) {
            return true;
        }
        // 单选
        if (!this.multiple && this.files.length === 1) {
            return true;
        }
        return false;
    }
    
    /**
     * 开发模式文件数组
     *
     * @private
     * @type {Array<any>}
     * @memberof AppMobPicture
     */
    private devFiles: Array<any> = [];

    /**
     * 文件上传模式
     *
     * @type {string}
     * @memberof AppMobPicture
     */
    public resultType: string = process.env.NODE_ENV === 'development' ? 'dataUrl' : 'file';

    /**
     * 文件删除
     *
     * @param {*} file 文件信息
     * @param {*} detail 详情
     * @memberof AppMobPicture
     */
    public onDelete(file: any, detail: any): void {
        this.onRemove({ id: file.id, name: file.name }, this.files);
    }

    /**
     * 上传之前
     *
     * @param {*} file
     * @param {*} detail
     * @returns {boolean}
     * @memberof AppMobPicture
     */
    public beforeRead(file: any, detail: any): boolean {
        if (file && Array.isArray(file)) {
            this.$notify({ type: 'warning', message: '该功能只支持单个文件上传' });
            return false;
        }
        return true;
    }

    /**
     * 文件选择完成
     *
     * @protected
     * @param {*} file 文件信息
     * @param {*} detail 详情
     * @memberof AppMobPicture
     */
    protected afterRead(file: any, detail: any): void {
        const params = new FormData()
        params.append('file', file.file, file.file.name)
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        Loading.show('上传中');
        Axios.post(this.uploadUrl, params, config).then((response: any) => {
            Loading.hidden();
            if (response && response.data && response.status === 200) {
                let data: any = response.data;
                if (process.env.NODE_ENV === 'development') {
                    this.devFiles.push(Object.assign({}, data, { url: file.content }));
                }
                this.onSuccess(data, file, this.files);
            } else {
                this.onError(response, file, this.files);
            }
        }).catch((response: any) => {
            Loading.hidden();
            this.onError(response, file, this.files);
        });
    }
    // MOB LOGIC END

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof AppMobPicture
     */
    @Prop() public formState?: Subject<any>

    /**
     * 是否忽略表单项书香值变化
     *
     * @type {boolean}
     * @memberof AppMobPicture
     */
    @Prop() public ignorefieldvaluechange?: boolean;

    /**
     * 表单状态事件
     *
     * @private
     * @type {(Unsubscribable | undefined)}
     * @memberof AppMobPicture
     */
    private formStateEvent: Unsubscribable | undefined;

    /**
     * 表单数据
     *
     * @type {string}
     * @memberof AppMobPicture
     */
    @Prop() public data!: string;

    /**
     * 初始化值
     *
     * @type {*}
     * @memberof AppMobPicture
     */
    @Prop() public value?: any;

    /**
     * 数据值变化
     *
     * @param {*} newval
     * @param {*} val
     * @returns
     * @memberof AppMobPicture
     */
    @Watch('value')
    onValueChange(newval: any, val: any) {
        if (this.ignorefieldvaluechange) {
            return;
        }
        if (newval) {
            this.files = JSON.parse(newval);
            this.dataProcess();
        } else {
            this.files = [];
        }
    }

    /**
     * 所属表单项名称
     *
     * @type {string}
     * @memberof AppMobPicture
     */
    @Prop() public name!: string;

    /**
     * 是否禁用
     *
     * @type {boolean}
     * @memberof AppMobPicture
     */
    @Prop() public disabled?: boolean;

    /**
     * 上传参数
     *
     * @type {string}
     * @memberof AppMobPicture
     */
    @Prop() public uploadparams?: string;

    /**
     * 下载参数
     *
     * @type {string}
     * @memberof AppMobPicture
     */
    @Prop() public exportparams?: string;

    /**
     * 自定义参数
     *
     * @type {*}
     * @memberof AppMobPicture
     */
    @Prop() public customparams?: any;

    /**
     * 上传文件路径
     *
     * @memberof AppMobPicture
     */
    public uploadUrl = Environment.BaseUrl + Environment.UploadFile;

    /**
     * 下载文件路径
     *
     * @memberof AppMobPicture
     */
    public downloadUrl = Environment.BaseUrl + Environment.ExportFile;

    /**
     * 文件列表
     *
     * @memberof AppMobPicture
     */
    @Provide() public files: Array<any> = [];

    /**
     * 上传keys
     *
     * @type {Array<any>}
     * @memberof AppMobPicture
     */
    public upload_keys: Array<any> = [];

    /**
     * 导出keys
     *
     * @type {Array<any>}
     * @memberof AppMobPicture
     */
    public export_keys: Array<any> = [];

    /**
     * 自定义数组
     *
     * @type {Array<any>}
     * @memberof AppMobPicture
     */
    public custom_arr: Array<any> = [];

    /**
     * 应用参数
     *
     * @type {*}
     * @memberof AppMobPicture
     */
    public appData: any = "";

    /**
     * 数据处理
     *
     * @private
     * @memberof AppMobPicture
     */
    private dataProcess(): void {
        let upload_arr: Array<string> = [];
        let export_arr: Array<string> = [];
        const _data: any = JSON.parse(this.data);
        this.upload_keys.forEach((key: string) => {
            upload_arr.push(`${key}=${_data[key]}`);
        });
        this.export_keys.forEach((key: string) => {
            export_arr.push(`${key}=${_data[key]}`);
        });

        let _url = `${Environment.BaseUrl}${Environment.UploadFile}`;
        if (upload_arr.length > 0 || this.custom_arr.length > 0) {
            _url = `${_url}?${upload_arr.join('&')}${upload_arr.length > 0 ? '&' : ''}${this.custom_arr.join('&')}`;
        }
        this.uploadUrl = _url;

        this.files.forEach((file: any) => {
            if (process.env.NODE_ENV === 'development') {
                let index = this.devFiles.findIndex((devFile: any) => Object.is(devFile.id, file.id));
                if (index !== -1) {
                    file.url = this.devFiles[index].url;
                    file.isImage = true;
                }
                return;
            }
            let url = `${this.downloadUrl}/${file.id}`;
            if (upload_arr.length > 0 || this.custom_arr.length > 0) {
                url = `${url}?${upload_arr.join('&')}${upload_arr.length > 0 ? '&' : ''}${this.custom_arr.join('&')}`;
            }
            file.isImage = true;
            file.url = url;
        });
    }

    /**
     * vue 生命周期
     *
     * @memberof AppMobPicture
     */
    public created() {
        if (this.formState) {
            this.formStateEvent = this.formState.subscribe(($event: any) => {
                // 表单加载完成
                if (Object.is($event.type, 'load')) {
                    if (this.value) {
                        // console.log(this.value);
                        this.files = JSON.parse(this.value);
                    }
                    this.dataProcess();
                }
            });
        }
    }

    /**
     * vue 生命周期
     *
     * @memberof AppMobPicture
     */
    public mounted() {
        this.appData = this.$store.getters.getAppData();

        let custom_arr: Array<string> = [];
        let upload_keys: Array<string> = [];
        let export_keys: Array<string> = [];

        if (this.uploadparams && !Object.is(this.uploadparams, '')) {
            upload_keys = this.uploadparams.split(';');
        }
        if (this.exportparams && !Object.is(this.exportparams, '')) {
            export_keys = this.exportparams.split(';');
        }
        if (this.customparams && !Object.is(this.customparams, '')) {
            Object.keys(this.customparams).forEach((name: string) => {
                custom_arr.push(`${name}=${this.customparams[name]}`);
            });
        }
        this.upload_keys = upload_keys;
        this.export_keys = export_keys;
        this.custom_arr = custom_arr;

        if (this.value) {
            this.files = JSON.parse(this.value);
        }
        this.dataProcess();
        this.changeLabelStyle();
    }

    /**
     * 修改label默认样式
     * @memberof AppMobPicture
     */
    public changeLabelStyle() {
      document.querySelectorAll(".app-mobile-picture").forEach((element: any) => {
        let prev = this.getNearEle(element, 1);
        prev.style.transform = 'none';
        prev.style.marginBottom = "10px";
      })
    }

    /**
     * 查找相邻前一个元素
     * 
     *  @memberof AppMobPicture
     */
    public getNearEle(ele: any, type: any) {
      type = type == 1 ? "previousSibling" : "nextSibling";
      var nearEle = ele[type];
      while (nearEle) {
        if (nearEle.nodeType === 1) {
          return nearEle;
        }
        nearEle = nearEle[type];
        if (!nearEle) {
          break;
        }
      }
      return null;
    }

    /**
     * 组件销毁
     *
     * @memberof AppMobPicture
     */
    public destroyed(): void {
        if (this.formStateEvent) {
            this.formStateEvent.unsubscribe();
        }
    }

    /**
     * 上传之前
     *
     * @param {*} file
     * @memberof AppMobPicture
     */
    public beforeUpload(file: any) {
        // console.log('上传之前');
    }

    /**
     * 上传成功回调
     *
     * @param {*} response
     * @param {*} file
     * @param {*} fileList
     * @returns
     * @memberof AppMobPicture
     */
    public onSuccess(response: any, file: any, fileList: any) {
        if (!response) {
            return;
        }
        const data = { name: response.filename, id: response.fileid };
        let arr: Array<any> = [];
        this.files.forEach((_file: any) => {
            arr.push({ name: _file.name, id: _file.id })
        });
        arr.push(data);

        let value: any = arr.length > 0 ? JSON.stringify(arr) : null;
        this.$emit('formitemvaluechange', { name: this.name, value: value });
    }

    /**
     * 上传失败回调
     *
     * @param {*} error
     * @param {*} file
     * @param {*} fileList
     * @memberof AppMobPicture
     */
    public onError(error: any, file: any, fileList: any) {
        this.$notify({ type: 'danger', message: '上传失败' });
    }

    /**
     * 删除文件
     *
     * @param {*} file
     * @param {*} fileList
     * @memberof AppMobPicture
     */
    public onRemove(file: any, fileList: any) {
        let arr: Array<any> = [];
        fileList.forEach((f: any) => {
            if (f.id != file.id) {
                arr.push({ name: f.name, id: f.id });
            }
        });
        let value: any = arr.length > 0 ? JSON.stringify(arr) : null;
        this.$emit('formitemvaluechange', { name: this.name, value: value });
    }

    /**
     * 下载文件
     *
     * @param {*} file
     * @memberof AppMobPicture
     */
    public onDownload(file: any) {
        window.open(file.url);
    }

    /**
     * 预览图片地址
     *
     * @type {string}
     * @memberof AppMobPicture
     */
    public dialogImageUrl: string = '';

    /**
     * 是否显示预览界面
     *
     * @type {boolean}
     * @memberof AppMobPicture
     */
    public dialogVisible: boolean = false;

    /**
     * 是否支持多个上传
     *
     * @type {boolean}
     * @memberof AppMobPicture
     */
    @Prop({ default: true }) public multiple?: boolean;

    /**
     * 预览
     *
     * @param {*} file
     * @memberof AppMobPicture
     */
    public onPreview(file: any) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
    }
}
</script>

<style lang="less">
@import "./app-mob-picture.less";
</style>