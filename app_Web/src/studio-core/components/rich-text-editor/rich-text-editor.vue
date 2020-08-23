<template>
    <div class="rich-text-editor">
        <div class="editor-custom-action">
            <Poptip ref="propip" trigger="hover" placement="top-end" title="请输入模板标题" :width="250" @on-popper-show="openPoper()">
                <Button class="appTemplate">
                    保存模板
                </Button>
                <template slot="content">
                    <div>
                        <Input v-model="templateTitle" placeholder="请输入模板标题" />
                        <div style="margin-top: 5px;">
                            <Checkbox v-model="single">公开的</Checkbox>
                            <Button @click="saveTemplate()">{{ $t('app.commonWords.save') }}</Button>&nbsp;
                            <Button @click="onCancel()">{{ $t('app.commonWords.cancel') }}</Button>
                        </div>
                    </div>
                </template>
            </Poptip>
            <Dropdown trigger="click">
                <Button class="appTemplate">
                    应用模板
                    <Icon type="ios-arrow-down"></Icon>
                </Button>
                <DropdownMenu slot="list" >
                    <Tabs v-model="ibizpublic" :animated="false">
                        <TabPane label="私人的" name="0"></TabPane>
                        <TabPane label="公开的" name="1"></TabPane>
                    </Tabs>
                    <DropdownItem v-for="(item,index) in appTemplate" :key='index' :value="item.content">
                        <div class="keyOperation" v-if="item.ibizpublic == ibizpublic">
                            <span class="span-content" @click="appTemplateFill(item.content)">
                                {{item.title+"-"+item.account}}
                            </span> 
                            <span class="icon-close" @click="removeAppTemplate(item)">
                                <Icon type="md-close" size="18"/>
                            </span>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div :class="editorClass">
            <textarea :id="id"></textarea>
        </div>
    </div>
</template>
<script lang = 'ts'>
import { Vue, Component, Prop, Model, Watch } from 'vue-property-decorator';
import { Subject } from 'rxjs';
import { Environment } from '@/environments/environment';
import axios from 'axios';

import tinymce from "tinymce/tinymce";
// import 'tinymce/themes/modern';
import 'tinymce/themes/silver';
import 'tinymce/plugins/link';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/table';
import 'tinymce/plugins/image';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/icons/default/icons.min.js';

const tinymceCode:any = tinymce;

import UserTplService from '@/service/user-tpl/user-tpl-service';

@Component({})
export default class RichTextEditor extends Vue {

    /**
     * 传入值
     * 
     * @type {*}
     * @memberof RichTextEditor
     */
    @Prop() value?: any;
    
    /**
     * 输入name
     * 
     * @type {string}
     * @memberof RichTextEditor
     */
    @Prop() name?: string;

    /**
     * 输入高度
     * 
     * @type {*}
     * @memberof RichTextEditor
     */
    @Prop() height?: any;

    /**
     * 是否禁用
     * 
     * @type {boolean}
     * @memberof RichTextEditor
     */
    @Prop() disabled?: boolean;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof RichTextEditor
     */
    @Prop() public formState?: Subject<any>;

    /**
     * 上传文件路径
     * 
     * @type {string}
     * @memberof RichTextEditor
     */
    public uploadUrl = Environment.BaseUrl + Environment.UploadFile;

    /**
     * 下载路径
     * 
     * @type {string}
     * @memberof RichTextEditor
     */
    public downloadUrl =  Environment.BaseUrl + Environment.ExportFile;

    /**
     * 当前富文本
     * 
     * @type {*}
     * @memberof RichTextEditor
     */
    public editor: any = null;

    /**
     *  当前富文本id
     * 
     * @type {string}
     * @memberof RichTextEditor
     */
    public id: string = this.$util.createUUID();

    /**
     * 当前语言,默认中文
     * 
     * @type {*}
     * @memberof RichTextEditor
     */
    public langu: any = localStorage.getItem('local') ? localStorage.getItem('local') : 'zh-CN' ;

    /**
     * 上传params
     *
     * @type {Array<any>}
     * @memberof RichTextEditor
     */
    public upload_params: Array<any> = [];

    /**
     * 导出params
     *
     * @type {Array<any>}
     * @memberof RichTextEditor
     */
    public export_params: Array<any> = [];

    /**
     * 上传参数
     *
     * @type {string}
     * @memberof RichTextEditor
     */
    @Prop() public uploadparams?: any;

    /**
     * 下载参数
     *
     * @type {string}
     * @memberof RichTextEditor
     */
    @Prop() public exportparams?: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof RichTextEditor
     */
    @Prop() public viewparams!: any;

    /**
     * 视图上下文
     *
     * @type {*}
     * @memberof RichTextEditor
     */
    @Prop() public context!: any;

    /**
     * 表单数据
     *
     * @type {string}
     * @memberof RichTextEditor
     */
    @Prop() public data!: string;

    /**
     * 应用模板参数
     * 
     * @type {string}
     * @memberof RichTextEditor
     */
    @Prop() public templParams: any;

    /**
     * 注入实体服务
     */
    public userTplService: UserTplService = new UserTplService();

    /**
     * 应用模板集合
     */
    public appTemplate: Array<any>=[];

    /**
     * 模板标题
     */
    public templateTitle: string = '';

    /**
     * 语言映射文件
     * 
     * @type {*}
     * @memberof RichTextEditor
     */
    public languMap:any = {
        'zh-CN': 'zh_CN',
        'en-US': 'en_US',
    };

    /**
     * 是否处于激活状态
     * 
     * @type {boolean}
     * @memberof RichTextEditor
     */
    public isActived: boolean = true;

    /**
     * 是否需要初始化
     * 
     * @type {boolean}
     * @memberof RichTextEditor
     */
    public isNeedInit: boolean = false;

    /**
     * 多选框默认值
     * @type {boolean}
     * @memberof RichTextEditor
     */
    public single: boolean = false;

    /**
     * 模板类型（默认所有类型）
     * @type {string}
     * @memberof RichTextEditor
     */
    public ibizpublic: string = '0';

    /**
     * 上传的图片id与类型集合
     * @type {string}
     * @memberof RichTextEditor
     */
    public imgsrc: Array<any> = [];

    /**
     * 编辑器样式类
     * @type {string}
     * @memberof RichTextEditor
     */
    public editorClass: string = 'app-rich-text-editor';

    /**
     * 生命周期
     *
     * @memberof RichTextEditor
     */
    public created() {
        this.appTemplateData();
        if(this.formState) {
            this.formState.subscribe(({ type, data }) => {
                if (Object.is('load', type)) {
                    this.getParams();
                    if (!this.value) {
                        this.init();
                    }
                }
            });
        }
    }
    
    /**
     * 生命周期：激活
     *
     * @memberof RichTextEditor
     */
    public activated(){
        this.isActived = true;
        if(this.isNeedInit){
            this.init();
            this.isNeedInit = false;
        }
    }

    /**
     * 生命周期：缓存
     *
     * @memberof RichTextEditor
     */
    public deactivated(){
        this.isActived = false;
    }

    /**
     * 生命周期：初始化富文本
     * 
     * @memberof AppRichTextEditor
     */
    public mounted() {
        this.init();
        const ele: any = this.isDrawer(this.$el);
        if(ele) {
            let index: number = ele.style.transform.indexOf('translateX');
            if(index >= 0) {
                let num: string = ele.style.transform.substring(index + 12, index + 15);
                this.editorClass = this.editorClass + (-parseInt(num));
            }
        }
    }
    
    /**
     * 是否抽屉打开
     * 
     * @memberof AppRichTextEditor
     */
    public isDrawer(ele: any): any {
        let pele: any = ele.parentNode;
        if(!pele) {
            return false;
        }
        if(pele.className && pele.className.indexOf('studio-drawer-content') >= 0) {
            return pele;
        }
        return this.isDrawer(pele);
        
    }
    
    /**
     * 生命周期：销毁富文本
     * 
     * @memberof RichTextEditor
     */
    public destoryed(){
        if(this.editor){
            tinymceCode.remove('#' + this.id);
        }
    }

    /**
     * 监听value值
     * 
     * @memberof RichTextEditor
     */
    @Watch('value', { immediate: true, deep: true })
    oncurrentContent(newval: any, val: any) {
        const content: any = this.editor ? this.editor.getContent() : undefined;
        const url = this.downloadUrl.indexOf('../') === 0 ? this.downloadUrl.substring(3) : this.downloadUrl;
        if(newval) {
            newval = newval.replace(/\{(\d+)\.(bmp|jpg|jpeg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp)\}/g, `${url}/$1`);
        }
        if (!Object.is(newval,content)) {
            this.init();
        }
        this.getParams();
    }

    /**
     * 监听语言变化
     */
    @Watch('$i18n.locale')
    onLocaleChange(newval: any, val: any) {
        this.langu = newval;
        if(this.isActived){
            this.init();
        }else{
            this.isNeedInit = true;
        }
    }

    /**
     * 初始化富文本
     * 
     * @memberof RichTextEditor
     */
    public init() {
        this.destoryed();
        let richtexteditor = this;
        tinymceCode.init({
            selector: '#' + richtexteditor.id,
            width: 'calc( 100% - 2px )',
            height: richtexteditor.height,
            min_height: 400,
            branding: false,
            plugins: ['link', 'paste', 'table', 'image', 'codesample', 'code', 'fullscreen', 'preview', 'quickbars'],
            toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link image | preview code fullscreen',
            contextmenu:'cut copy paste pastetext inserttable link ',
            quickbars_insert_toolbar: false,
            quickbars_selection_toolbar: 'forecolor fontsizeselect fontselect',
            codesample_languages: [
                { text: 'HTML/XML', value: 'markup' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'CSS', value: 'css' },
                { text: 'PHP', value: 'php' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'Python', value: 'python' },
                { text: 'Java', value: 'java' },
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' }
            ],
            paste_data_images: true,
            codesample_content_css: 'assets/tinymce/prism.css',
            skin_url: './assets/tinymce/skins/lightgray/ui/oxide',
            language_url: './assets/tinymce/langs/' + richtexteditor.languMap[richtexteditor.langu] + '.js',
            language:richtexteditor.languMap[richtexteditor.langu],
            setup: (editor: any) => {
                richtexteditor.editor = editor;
                editor.on('blur', () => {
                    let content = editor.getContent();
                    const url = richtexteditor.downloadUrl.indexOf('../') === 0 ? richtexteditor.downloadUrl.substring(3) : richtexteditor.downloadUrl;
                    let newContent: string = "";
                    const imgsrc = richtexteditor.imgsrc;
                    if(imgsrc && imgsrc.length > 0){
                        imgsrc.forEach((item: any)=>{
                            newContent = content.replace(url+"/"+item.id,"{"+item.id+item.type+"}");
                            content = newContent;
                        });
                    }
                    richtexteditor.$emit('change', content);
                });  
                editor.on('FullscreenStateChanged',($event: any)=>{
                    let editorAction: any = richtexteditor.$el.getElementsByClassName("editor-custom-action");
                    if($event.state && editorAction){
                        editorAction[0].style.zIndex = "1300";
                        editorAction[0].style.position = "fixed";
                    }else if(editorAction){
                        editorAction[0].style.zIndex = "2";
                        editorAction[0].style.position = "absolute";
                    }
                })
            },

            images_upload_handler: (bolbinfo: any, success: any, failure: any) => {
                const formData = new FormData();
                formData.append('file', bolbinfo.blob(), bolbinfo.filename());
                let _url = richtexteditor.uploadUrl;
                if (this.upload_params.length > 0 ) {
                    _url +='?';
                    this.upload_params.forEach((item:any,i:any)=>{
                        _url += `${Object.keys(item)[0]}=${Object.values(item)[0]}`;
                        if(i<this.upload_params.length-1){
                            _url += '&';
                        }
                    })    
                }
                this.uploadUrl = _url;
                richtexteditor.uploadFile(_url, formData).subscribe((file: any) => {
                    const item: any = { id: file.fileid, type: file.ext };
                    richtexteditor.imgsrc.push(item);
                    let downloadUrl =  richtexteditor.downloadUrl;
                    if (file.filename) {
                        const id: string = file.fileid; 
                        const url: string = `${downloadUrl}/${id}`;
                        success(url);
                    }
                    if (this.export_params.length > 0) {
                        downloadUrl +='?';
                        this.export_params.forEach((item:any,i:any)=>{
                            downloadUrl += `${Object.keys(item)[0]}=${Object.values(item)[0]}`;
                            if(i<this.export_params.length-1){
                                downloadUrl += '&';
                            }
                        })
                    }
                }, (error: any) => {
                    console.log(error);
                    failure('HTTP Error: ' + error.status);
                });
            },
            init_instance_callback: (editor: any) => {
                richtexteditor.editor = editor;
                const url = richtexteditor.downloadUrl.indexOf('../') === 0 ? richtexteditor.downloadUrl.substring(3) : richtexteditor.downloadUrl;
                let value = (richtexteditor.value && richtexteditor.value.length > 0) ? richtexteditor.value : '';
                value = value.replace(/\{(\d+)\.(bmp|jpg|jpeg|png|tif|gif|pcx|tga|exif|fpx|svg|psd|cdr|pcd|dxf|ufo|eps|ai|raw|WMF|webp)\}/g, `${url}/$1`);
                if (richtexteditor.editor) {
                    richtexteditor.editor.setContent(value);
                }
                if (richtexteditor.disabled) {
                    richtexteditor.editor.setMode('readonly');
                }
            }
        });
    }

    /**
     * 应用模板参数处理
     * 
     * @memberof RichTextEditor
     */
    public getTemplParams(){
        let data: any = {};
        let _param = this.viewparams ? JSON.parse(JSON.stringify(this.viewparams)) : {};
        let _context = this.context ? JSON.parse(JSON.stringify(this.context)) : {};
        if (this.templParams && Object.keys(this.templParams).length >0){
            data = this.$util.computedNavData({}, _context, _param, this.templParams);
        }
        return data;
    }

    /**
     * 获取应用模板数据集
     * 
     * @memberof RichTextEditor
     */
    public async appTemplateData() {
        const templParams = this.getTemplParams();
        const response: any = await this.userTplService.FetchDefault({},templParams,false);
        if(response && response.status === 200){
            const { data: _data } = response;
            _data.forEach((item:any)=>{
                if(Object.is(item.account,templParams.account) || Object.is(item.ibizpublic,'1')){
                    this.appTemplate.push(item);
                }
            });
        }
    }

    /**
     * 打开气泡时
     * 
     * @memberof RichTextEditor
     */
    public openPoper(){
        this.templateTitle = '';
        this.single = false;
    }

    /**
     * 保存模板
     * 
     * @memberof RichTextEditor
     */
    public async saveTemplate(){
        let templParams = this.getTemplParams();
        const templateTitle = this.templateTitle;
        const templateContent = this.editor.getContent();
        templParams.public = this.single == true? 1 : 0;
        if(!templateContent || Object.is(templateContent,'')){
            this.$Notice.error({
                    title: '请填充模板内容!!!',
            });
            return;
        }
        if(!templateTitle || Object.is(templateTitle,'')){
            this.$Notice.error({
                    title: '请输入模板标题!!!',
            });
            return;
        }
        templParams.title = templateTitle;
        templParams.content = templateContent;
        const response: any = await this.userTplService.Create({}, templParams, false);
        if(response && response.status === 200){
            this.$Notice.success({
                title: '保存模板成功!!!',
            });
        }else{
            this.$Notice.error({
                title: '保存模板失败!!!',
            });
        }
        this.appTemplateData();
        let propip: any = this.$refs.propip;
        propip.handleMouseleave();
    }

    /**
     * 取消
     */
    public onCancel(){
        let propip: any = this.$refs.propip;
        propip.handleMouseleave();
    }

    /**
     * 应用模板填充
     * 
     * @param content 应用模板内容
     * @memberof RichTextEditor
     */
    public appTemplateFill(content: any){
        this.editor.setContent(content == null ? '' : content);
    }

    /**
     * 删除应用模板
     * 
     * @param event 选中的应用模板
     */
    public async removeAppTemplate(event: any){
        let context: any = {};
        context.usertpl = event.id;
        const response: any = await this.userTplService.Remove(context,{},false);
        if(response && response.status === 200){
            this.$Notice.success({
                title: '删除模板成功!!!',
            });
        }else{
            this.$Notice.error({
                title: '删除模板失败!!!',
            });
        }
        this.appTemplateData();
    }

    /**
     * 上传文件
     * 
     * @param url 路径
     * @param formData 文件对象 
     * @memberof RichTextEditor
     */
    public uploadFile(url: string, formData: any) {
        let _this = this;
        const subject: Subject<any> = new Subject<any>();
        axios({
            method: 'post',
            url: url,
            data: formData,
            headers: { 'Content-Type': 'image/png', 'Accept': 'application/json' },
        }).then((response: any) => {
            if (response.status === 200) {
                subject.next(response.data);
            } else {
                subject.error(response);
            }
        }).catch((response: any) => {
            subject.error(response);
        });
        return subject;
    }

    /**
     *获取上传，导出参数
     *
     *@memberof RichTextEditor
     */
    public getParams(){
        let uploadparams: any = JSON.parse(JSON.stringify(this.uploadparams));
        let exportparams: any = JSON.parse(JSON.stringify(this.exportparams));

        let upload_params: Array<string> = [];
        let export_params: Array<string> = [];

        let param:any = this.viewparams;
        let context:any = this.context;
        let _data:any = JSON.parse(this.data);

        if (this.uploadparams && !Object.is(this.uploadparams, '')) {
            upload_params = this.$util.computedNavData(_data,param,context,uploadparams);    
        }
        if (this.exportparams && !Object.is(this.exportparams, '')) {
            export_params = this.$util.computedNavData(_data,param,context,exportparams);
        }
        
        this.upload_params = [];
        this.export_params = [];

        for (const item in upload_params) {
            this.upload_params.push({
                [item]:upload_params[item]
            })
        }
        for (const item in export_params) {
            this.export_params.push({
                [item]:export_params[item]
            })
        }
    }
}
</script>
<style lang="less">
@import './rich-text-editor.less';
.tox-statusbar__text-container{
    display: none !important;
}
</style>