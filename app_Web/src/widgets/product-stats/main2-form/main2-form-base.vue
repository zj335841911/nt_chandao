<template>
    <i-form :model="this.data" class='app-form info-form-mode' ref='form'  id='form' style="">
    <input style="display:none;" />
    <row >
            
<i-col v-show="detailsModel.group1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.group1.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.productstats.main2_form.details.group1')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.grouppanel1.visible" :style="{}"  :lg="{ span: 12, offset: 0 }" :xl="{ span: 12, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel1.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.productstats.main2_form.details.grouppanel1')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.rawitem1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <div class="" style="">
    <br/>
<br/>
</div>

</i-col>
<i-col v-show="detailsModel.rawitem3.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 22, offset: 0 }">
    <div class="text-center" style="">
    需求数
</div>

</i-col>
<i-col v-show="detailsModel.storycnt.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 16, offset: 8 }">
    <app-form-item name='storycnt' :itemRules="this.rules.storycnt" class='MainInfo' :caption="$t('entities.productstats.main2_form.details.storycnt')" uiStyle="DEFAULT" :labelWidth="1" :isShowCaption="true" :error="detailsModel.storycnt.error" :isEmptyCaption="true" labelPos="TOP">
    <app-span   name='storycnt'
:value="data.storycnt" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.grouppanel6.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel6.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.productstats.main2_form.details.grouppanel6')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.button4.visible" :style="{}"  :lg="{ span: 8, offset: 8 }" :xl="{ span: 8, offset: 8 }">
        <i-button type="primary" @click="button4_click($event)"
         style="">
           
        <span >{{$t('entities.productstats.main2_form.details.button4')}}</span>
    </i-button>

</i-col>
<i-col v-show="detailsModel.button5.visible" :style="{}"  :lg="{ span: 8, offset: 8 }" :xl="{ span: 8, offset: 8 }">
        <i-button type="primary" @click="button5_click($event)"
         style="">
           
        <span >{{$t('entities.productstats.main2_form.details.button5')}}</span>
    </i-button>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.rawitem2.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <div class="" style="">
    <br/>
</div>

</i-col>
<i-col v-show="detailsModel.grouppanel13.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel13.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.productstats.main2_form.details.grouppanel13')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.waitstorycnt.visible" :style="{}"  :lg="{ span: 4, offset: 2 }" :xl="{ span: 4, offset: 2 }">
    <app-form-item name='waitstorycnt' :itemRules="this.rules.waitstorycnt" class='' :caption="$t('entities.productstats.main2_form.details.waitstorycnt')" uiStyle="DEFAULT" :labelWidth="70" :isShowCaption="true" :error="detailsModel.waitstorycnt.error" :isEmptyCaption="false" labelPos="TOP">
    <app-span   name='waitstorycnt'
:value="data.waitstorycnt" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.plannedstorycnt.visible" :style="{}"  :lg="{ span: 4, offset: 0 }" :xl="{ span: 4, offset: 0 }">
    <app-form-item name='plannedstorycnt' :itemRules="this.rules.plannedstorycnt" class='' :caption="$t('entities.productstats.main2_form.details.plannedstorycnt')" uiStyle="DEFAULT" :labelWidth="70" :isShowCaption="true" :error="detailsModel.plannedstorycnt.error" :isEmptyCaption="false" labelPos="TOP">
    <app-span   name='plannedstorycnt'
:value="data.plannedstorycnt" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.developingstorycnt.visible" :style="{}"  :lg="{ span: 4, offset: 0 }" :xl="{ span: 4, offset: 0 }">
    <app-form-item name='developingstorycnt' :itemRules="this.rules.developingstorycnt" class='' :caption="$t('entities.productstats.main2_form.details.developingstorycnt')" uiStyle="DEFAULT" :labelWidth="70" :isShowCaption="true" :error="detailsModel.developingstorycnt.error" :isEmptyCaption="false" labelPos="TOP">
    <app-span   name='developingstorycnt'
:value="data.developingstorycnt" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.testingstorycnt.visible" :style="{}"  :lg="{ span: 4, offset: 0 }" :xl="{ span: 4, offset: 0 }">
    <app-form-item name='testingstorycnt' :itemRules="this.rules.testingstorycnt" class='' :caption="$t('entities.productstats.main2_form.details.testingstorycnt')" uiStyle="DEFAULT" :labelWidth="70" :isShowCaption="true" :error="detailsModel.testingstorycnt.error" :isEmptyCaption="false" labelPos="TOP">
    <app-span   name='testingstorycnt'
:value="data.testingstorycnt" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.releasedstorycnt.visible" :style="{}"  :lg="{ span: 4, offset: 0 }" :xl="{ span: 4, offset: 0 }">
    <app-form-item name='releasedstorycnt' :itemRules="this.rules.releasedstorycnt" class='' :caption="$t('entities.productstats.main2_form.details.releasedstorycnt')" uiStyle="DEFAULT" :labelWidth="70" :isShowCaption="true" :error="detailsModel.releasedstorycnt.error" :isEmptyCaption="false" labelPos="TOP">
    <app-span   name='releasedstorycnt'
:value="data.releasedstorycnt" style=""></app-span>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel2.visible" :style="{}"  :lg="{ span: 12, offset: 0 }" :xl="{ span: 12, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel2.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.productstats.main2_form.details.grouppanel2')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.grouppanel8.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel8.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.productstats.main2_form.details.grouppanel8')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.productplancnt.visible" :style="{}"  :lg="{ span: 8, offset: 16 }" :xl="{ span: 8, offset: 16 }">
    <app-form-item name='productplancnt' :itemRules="this.rules.productplancnt" class='' :caption="$t('entities.productstats.main2_form.details.productplancnt')" uiStyle="DEFAULT" :labelWidth="70" :isShowCaption="true" :error="detailsModel.productplancnt.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='productplancnt'
:value="data.productplancnt" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.grouppanel3.visible" :style="{}"  :lg="{ span: 16, offset: 0 }" :xl="{ span: 16, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel3.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.productstats.main2_form.details.grouppanel3')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.formitemex1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='formitemex1' :itemRules="this.rules.formitemex1" class='' :caption="$t('entities.productstats.main2_form.details.formitemex1')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.formitemex1.error" :isEmptyCaption="false" labelPos="NONE">
    <app-range-editor v-model="data.formitemex1" :activeData="data" :disabled="detailsModel.formitemex1.disabled" name="formitemex1" editorType="USERCONTROL" format="" :refFormItem="['custom1','custom2']" @formitemvaluechange="onFormItemValueChange" style=""></app-range-editor>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.button1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
        <i-button type="primary" @click="button1_click($event)"
         style="">
        <i class="fa fa-plus" style="margin-right: 2px;"></i>   
        <span >{{$t('entities.productstats.main2_form.details.button1')}}</span>
    </i-button>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.unendproductplancnt.visible" :style="{}"  :lg="{ span: 8, offset: 0 }" :xl="{ span: 8, offset: 0 }">
    <app-form-item name='unendproductplancnt' :itemRules="this.rules.unendproductplancnt" class='' :caption="$t('entities.productstats.main2_form.details.unendproductplancnt')" uiStyle="DEFAULT" :labelWidth="70" :isShowCaption="true" :error="detailsModel.unendproductplancnt.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='unendproductplancnt'
:value="data.unendproductplancnt" style=""></app-span>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel9.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel9.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.productstats.main2_form.details.grouppanel9')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.rawitem4.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 16, offset: 0 }">
    <div class="" style="">
    <div style="margin-top: 6px;"><Icon type="md-alert" color="red"/>&nbsp;已延期&nbsp;<b>{{data.postponedprojectcnt ? data.postponedprojectcnt : 0}}</b></div>
</div>

</i-col>
<i-col v-show="detailsModel.resprojectcnt.visible" :style="{}"  :lg="{ span: 8, offset: 16 }" :xl="{ span: 8, offset: 0 }">
    <app-form-item name='resprojectcnt' :itemRules="this.rules.resprojectcnt" class='' :caption="$t('entities.productstats.main2_form.details.resprojectcnt')" uiStyle="DEFAULT" :labelWidth="70" :isShowCaption="true" :error="detailsModel.resprojectcnt.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='resprojectcnt'
:value="data.resprojectcnt" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.grouppanel4.visible" :style="{}"  :lg="{ span: 16, offset: 0 }" :xl="{ span: 16, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel4.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.productstats.main2_form.details.grouppanel4')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.formitemex2.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='formitemex2' :itemRules="this.rules.formitemex2" class='' :caption="$t('entities.productstats.main2_form.details.formitemex2')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.formitemex2.error" :isEmptyCaption="false" labelPos="NONE">
    <app-range-editor v-model="data.formitemex2" :activeData="data" :disabled="detailsModel.formitemex2.disabled" name="formitemex2" editorType="USERCONTROL" format="" :refFormItem="['custom3','custom4']" @formitemvaluechange="onFormItemValueChange" style=""></app-range-editor>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.button2.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
        <i-button type="primary" @click="button2_click($event)"
         style="">
        <i class="fa fa-plus" style="margin-right: 2px;"></i>   
        <span >{{$t('entities.productstats.main2_form.details.button2')}}</span>
    </i-button>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.undoneresprojectcnt.visible" :style="{}"  :lg="{ span: 8, offset: 0 }" :xl="{ span: 8, offset: 0 }">
    <app-form-item name='undoneresprojectcnt' :itemRules="this.rules.undoneresprojectcnt" class='' :caption="$t('entities.productstats.main2_form.details.undoneresprojectcnt')" uiStyle="DEFAULT" :labelWidth="70" :isShowCaption="true" :error="detailsModel.undoneresprojectcnt.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='undoneresprojectcnt'
:value="data.undoneresprojectcnt" style=""></app-span>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel11.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel11.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.productstats.main2_form.details.grouppanel11')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.releasecnt.visible" :style="{}"  :lg="{ span: 8, offset: 16 }" :xl="{ span: 8, offset: 16 }">
    <app-form-item name='releasecnt' :itemRules="this.rules.releasecnt" class='' :caption="$t('entities.productstats.main2_form.details.releasecnt')" uiStyle="DEFAULT" :labelWidth="70" :isShowCaption="true" :error="detailsModel.releasecnt.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='releasecnt'
:value="data.releasecnt" style=""></app-span>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.grouppanel5.visible" :style="{}"  :lg="{ span: 16, offset: 0 }" :xl="{ span: 16, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel5.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.productstats.main2_form.details.grouppanel5')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="true">
    
    <row>
        <i-col v-show="detailsModel.formitemex3.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='formitemex3' :itemRules="this.rules.formitemex3" class='' :caption="$t('entities.productstats.main2_form.details.formitemex3')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.formitemex3.error" :isEmptyCaption="false" labelPos="NONE">
    <app-range-editor v-model="data.formitemex3" :activeData="data" :disabled="detailsModel.formitemex3.disabled" name="formitemex3" editorType="USERCONTROL" format="" :refFormItem="['custom5','custom6']" @formitemvaluechange="onFormItemValueChange" style=""></app-range-editor>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.button3.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
        <i-button type="primary" @click="button3_click($event)"
         style="">
        <i class="fa fa-plus" style="margin-right: 2px;"></i>   
        <span >{{$t('entities.productstats.main2_form.details.button3')}}</span>
    </i-button>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.normalreleasecnt.visible" :style="{}"  :lg="{ span: 8, offset: 0 }" :xl="{ span: 8, offset: 0 }">
    <app-form-item name='normalreleasecnt' :itemRules="this.rules.normalreleasecnt" class='' :caption="$t('entities.productstats.main2_form.details.normalreleasecnt')" uiStyle="DEFAULT" :labelWidth="70" :isShowCaption="true" :error="detailsModel.normalreleasecnt.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-span   name='normalreleasecnt'
:value="data.normalreleasecnt" style=""></app-span>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
    
    </row>
</app-form-group>

</i-col>
    
    </row>
</app-form-group>

</i-col>


    </row>
</i-form>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import ProductStatsService from '@/service/product-stats/product-stats-service';
import Main2Service from './main2-form-service';

import ProductStatsUIService from '@/uiservice/product-stats/product-stats-ui-service';
import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
    components: {
      
    }
})
export default class Main2Base extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof Main2
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof Main2
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof Main2
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof Main2
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof Main2
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof Main2
     */
    protected getControlType(): string {
        return 'FORM'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof Main2
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {Main2Service}
     * @memberof Main2
     */
    protected service: Main2Service = new Main2Service({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {ProductStatsService}
     * @memberof Main2
     */
    protected appEntityService: ProductStatsService = new ProductStatsService({ $store: this.$store });
    

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected form_button4_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {"srftabactivate":"TABVIEWPANEL2"};
        Object.assign(paramJO,{"srftabactivate":"TABVIEWPANEL2"});
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService:ProductStatsUIService  = new ProductStatsUIService();
        curUIService.ProductStats_OpenProductStoryView(datas,contextJO, paramJO,  $event, xData,this,"ProductStats");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected form_button5_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService:ProductStatsUIService  = new ProductStatsUIService();
        curUIService.ProductStats_OpenStoryCreateView(datas,contextJO, paramJO,  $event, xData,this,"ProductStats");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected form_button1_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService:ProductStatsUIService  = new ProductStatsUIService();
        curUIService.ProductStats_OpenProductPlanCreateView(datas,contextJO, paramJO,  $event, xData,this,"ProductStats");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected form_button2_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService:ProductStatsUIService  = new ProductStatsUIService();
        curUIService.ProductStats_OpenProjectCreateView(datas,contextJO, paramJO,  $event, xData,this,"ProductStats");
    }

    /**
     * 逻辑事件
     *
     * @param {*} [params={}]
     * @param {*} [tag]
     * @param {*} [$event]
     * @memberof 
     */
    protected form_button3_click(params: any = {}, tag?: any, $event?: any) {
        // 取数
        let datas: any[] = [];
        let xData: any = null;
        // _this 指向容器对象
        const _this: any = this;
        let paramJO:any = {};
        
        let contextJO:any = {};
        xData = this;
        if (_this.getDatas && _this.getDatas instanceof Function) {
            datas = [..._this.getDatas()];
        }
        // 界面行为
        const curUIService:ProductStatsUIService  = new ProductStatsUIService();
        curUIService.ProductStats_OpenReleasedCreateView(datas,contextJO, paramJO,  $event, xData,this,"ProductStats");
    }


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof Main2
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof Main2
     */
    public counterRefresh(){
        const _this:any =this;
        if(_this.counterServiceArray && _this.counterServiceArray.length >0){
            _this.counterServiceArray.forEach((item:any) =>{
                if(item.refreshData && item.refreshData instanceof Function){
                    item.refreshData();
                }
            })
        }
    }


    
    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof Main2
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof Main2
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof Main2
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof Main2
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof Main2
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof Main2
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof Main2
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof Main2
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof Main2
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof Main2
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof Main2
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof Main2
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof Main2
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof Main2
     */
    protected formState: Subject<any> = new Subject();

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof Main2
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof Main2
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof Main2
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof Main2
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof Main2
     */
    protected data: any = {
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        product: null,
        storycnt: null,
        waitstorycnt: null,
        plannedstorycnt: null,
        developingstorycnt: null,
        testingstorycnt: null,
        releasedstorycnt: null,
        productplancnt: null,
        custom1: null,
        custom2: null,
        formitemex1: null,
        unendproductplancnt: null,
        postponedprojectcnt: null,
        resprojectcnt: null,
        custom3: null,
        custom4: null,
        formitemex2: null,
        undoneresprojectcnt: null,
        releasecnt: null,
        custom5: null,
        custom6: null,
        formitemex3: null,
        normalreleasecnt: null,
        id: null,
        productstats:null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof Main2
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof Main2
      */
    protected drcounter: number = 0;

    /**
      * 需要等待关系界面保存时，第一次调用save参数的备份
      *
      * @type {number}
      * @memberof Main2
      */
    protected drsaveopt: any = {};

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof Main2
      */
    protected saveState:any ;

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof Main2
     */
    protected rules: any = {
        srforikey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { type: 'number', message: '产品编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '产品编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '产品编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '产品编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { type: 'string', message: '产品名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '产品名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '产品名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品名称 值不能为空', trigger: 'blur' },
        ],
        srftempmode: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfuf: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfdeid: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfsourcekey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        product: [
            { type: 'string', message: '产品标识 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '产品标识 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '产品标识 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '产品标识 值不能为空', trigger: 'blur' },
        ],
        storycnt: [
            { type: 'number', message: ' 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: ' 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: ' 值不能为空', trigger: 'blur' },
        ],
        waitstorycnt: [
            { type: 'number', message: '未开始 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未开始 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未开始 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未开始 值不能为空', trigger: 'blur' },
        ],
        plannedstorycnt: [
            { type: 'number', message: '已计划 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '已计划 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '已计划 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '已计划 值不能为空', trigger: 'blur' },
        ],
        developingstorycnt: [
            { type: 'number', message: '研发中 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '研发中 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '研发中 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '研发中 值不能为空', trigger: 'blur' },
        ],
        testingstorycnt: [
            { type: 'number', message: '测试中 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '测试中 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '测试中 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '测试中 值不能为空', trigger: 'blur' },
        ],
        releasedstorycnt: [
            { type: 'number', message: '已发布 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '已发布 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '已发布 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '已发布 值不能为空', trigger: 'blur' },
        ],
        productplancnt: [
            { type: 'number', message: '所有计划 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所有计划 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所有计划 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所有计划 值不能为空', trigger: 'blur' },
        ],
        custom1: [
            { type: 'number', message: '计划总数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '计划总数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '计划总数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '计划总数 值不能为空', trigger: 'blur' },
        ],
        custom2: [
            { type: 'number', message: '未过期计划数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未过期计划数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未过期计划数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未过期计划数 值不能为空', trigger: 'blur' },
        ],
        formitemex1: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        unendproductplancnt: [
            { type: 'number', message: '未过期 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未过期 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未过期 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未过期 值不能为空', trigger: 'blur' },
        ],
        postponedprojectcnt: [
            { type: 'number', message: '已延期 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '已延期 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '已延期 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '已延期 值不能为空', trigger: 'blur' },
        ],
        resprojectcnt: [
            { type: 'number', message: '所有项目 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所有项目 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所有项目 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所有项目 值不能为空', trigger: 'blur' },
        ],
        custom3: [
            { type: 'number', message: '关联项目数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '关联项目数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '关联项目数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '关联项目数 值不能为空', trigger: 'blur' },
        ],
        custom4: [
            { type: 'number', message: '未完成关联项目数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '未完成关联项目数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '未完成关联项目数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '未完成关联项目数 值不能为空', trigger: 'blur' },
        ],
        formitemex2: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        undoneresprojectcnt: [
            { type: 'number', message: '进行中 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '进行中 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '进行中 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '进行中 值不能为空', trigger: 'blur' },
        ],
        releasecnt: [
            { type: 'number', message: '所有发布 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所有发布 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所有发布 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所有发布 值不能为空', trigger: 'blur' },
        ],
        custom5: [
            { type: 'number', message: '发布总数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '发布总数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '发布总数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '发布总数 值不能为空', trigger: 'blur' },
        ],
        custom6: [
            { type: 'number', message: '维护中发布数 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '维护中发布数 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '维护中发布数 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '维护中发布数 值不能为空', trigger: 'blur' },
        ],
        formitemex3: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        normalreleasecnt: [
            { type: 'number', message: '维护中 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '维护中 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '维护中 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '维护中 值不能为空', trigger: 'blur' },
        ],
        id: [
            { type: 'number', message: '产品编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '产品编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '产品编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '产品编号 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof Main2
     */
    protected detailsModel: any = {
        rawitem1: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem1', visible: true, isShowCaption: true, form: this })
, 
        rawitem3: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem3', visible: true, isShowCaption: true, form: this })
, 
        button4: new FormButtonModel({ caption: '查看全部', detailType: 'BUTTON', name: 'button4', visible: false, isShowCaption: true, form: this, uiaction: { type: 'DEUIACTION', 
 tag: 'OpenProductStoryView', actiontarget: 'SINGLEKEY' } })
, 
        button5: new FormButtonModel({ caption: '提需求', detailType: 'BUTTON', name: 'button5', visible: false, isShowCaption: true, form: this, uiaction: { type: 'DEUIACTION', 
 tag: 'OpenStoryCreateView', actiontarget: 'SINGLEKEY' } })
, 
        grouppanel6: new FormGroupPanelModel({ caption: '', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } })
, 
        rawitem2: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem2', visible: true, isShowCaption: true, form: this })
, 
        grouppanel13: new FormGroupPanelModel({ caption: '需求状态统计', detailType: 'GROUPPANEL', name: 'grouppanel13', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel1: new FormGroupPanelModel({ caption: '产品需求统计', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } })
, 
        button1: new FormButtonModel({ caption: '创建计划', detailType: 'BUTTON', name: 'button1', visible: false, isShowCaption: true, form: this, uiaction: { type: 'DEUIACTION', 
 tag: 'OpenProductPlanCreateView', actiontarget: 'SINGLEKEY' } })
, 
        grouppanel3: new FormGroupPanelModel({ caption: '', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel8: new FormGroupPanelModel({ caption: '计划', detailType: 'GROUPPANEL', name: 'grouppanel8', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } })
, 
        rawitem4: new FormRowItemModel({ caption: '', detailType: 'RAWITEM', name: 'rawitem4', visible: true, isShowCaption: true, form: this })
, 
        button2: new FormButtonModel({ caption: '创建项目', detailType: 'BUTTON', name: 'button2', visible: false, isShowCaption: true, form: this, uiaction: { type: 'DEUIACTION', 
 tag: 'OpenProjectCreateView', actiontarget: 'SINGLEKEY' } })
, 
        grouppanel4: new FormGroupPanelModel({ caption: '', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel9: new FormGroupPanelModel({ caption: '项目', detailType: 'GROUPPANEL', name: 'grouppanel9', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } })
, 
        button3: new FormButtonModel({ caption: '创建发布', detailType: 'BUTTON', name: 'button3', visible: false, isShowCaption: true, form: this, uiaction: { type: 'DEUIACTION', 
 tag: 'OpenReleasedCreateView', actiontarget: 'SINGLEKEY' } })
, 
        grouppanel5: new FormGroupPanelModel({ caption: '', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel11: new FormGroupPanelModel({ caption: '发布', detailType: 'GROUPPANEL', name: 'grouppanel11', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '产品统计', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: false, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } })
, 
        group1: new FormGroupPanelModel({ caption: '统计', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.productstats.main2_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: '产品编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '产品名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        product: new FormItemModel({ caption: '产品标识', detailType: 'FORMITEM', name: 'product', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        storycnt: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'storycnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        waitstorycnt: new FormItemModel({ caption: '未开始', detailType: 'FORMITEM', name: 'waitstorycnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        plannedstorycnt: new FormItemModel({ caption: '已计划', detailType: 'FORMITEM', name: 'plannedstorycnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        developingstorycnt: new FormItemModel({ caption: '研发中', detailType: 'FORMITEM', name: 'developingstorycnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        testingstorycnt: new FormItemModel({ caption: '测试中', detailType: 'FORMITEM', name: 'testingstorycnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        releasedstorycnt: new FormItemModel({ caption: '已发布', detailType: 'FORMITEM', name: 'releasedstorycnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        productplancnt: new FormItemModel({ caption: '所有计划', detailType: 'FORMITEM', name: 'productplancnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom1: new FormItemModel({ caption: '计划总数', detailType: 'FORMITEM', name: 'custom1', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom2: new FormItemModel({ caption: '未过期计划数', detailType: 'FORMITEM', name: 'custom2', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex1: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex1', visible: false, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        unendproductplancnt: new FormItemModel({ caption: '未过期', detailType: 'FORMITEM', name: 'unendproductplancnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        postponedprojectcnt: new FormItemModel({ caption: '已延期', detailType: 'FORMITEM', name: 'postponedprojectcnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        resprojectcnt: new FormItemModel({ caption: '所有项目', detailType: 'FORMITEM', name: 'resprojectcnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom3: new FormItemModel({ caption: '关联项目数', detailType: 'FORMITEM', name: 'custom3', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom4: new FormItemModel({ caption: '未完成关联项目数', detailType: 'FORMITEM', name: 'custom4', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex2: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex2', visible: false, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        undoneresprojectcnt: new FormItemModel({ caption: '进行中', detailType: 'FORMITEM', name: 'undoneresprojectcnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        releasecnt: new FormItemModel({ caption: '所有发布', detailType: 'FORMITEM', name: 'releasecnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom5: new FormItemModel({ caption: '发布总数', detailType: 'FORMITEM', name: 'custom5', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        custom6: new FormItemModel({ caption: '维护中发布数', detailType: 'FORMITEM', name: 'custom6', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        formitemex3: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'formitemex3', visible: false, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        normalreleasecnt: new FormItemModel({ caption: '维护中', detailType: 'FORMITEM', name: 'normalreleasecnt', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '产品编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
    };

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.srforikey')
    onSrforikeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srforikey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfkey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.srfkey')
    onSrfkeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfkey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfmajortext 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.srfmajortext')
    onSrfmajortextChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfmajortext', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srftempmode 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.srftempmode')
    onSrftempmodeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srftempmode', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfuf 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.srfuf')
    onSrfufChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfuf', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfdeid 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.srfdeid')
    onSrfdeidChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfdeid', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfsourcekey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 product 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.product')
    onProductChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'product', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 storycnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.storycnt')
    onStorycntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'storycnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 waitstorycnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.waitstorycnt')
    onWaitstorycntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'waitstorycnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 plannedstorycnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.plannedstorycnt')
    onPlannedstorycntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'plannedstorycnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 developingstorycnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.developingstorycnt')
    onDevelopingstorycntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'developingstorycnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 testingstorycnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.testingstorycnt')
    onTestingstorycntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'testingstorycnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 releasedstorycnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.releasedstorycnt')
    onReleasedstorycntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'releasedstorycnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 productplancnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.productplancnt')
    onProductplancntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'productplancnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom1 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.custom1')
    onCustom1Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom1', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom2 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.custom2')
    onCustom2Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom2', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitemex1 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.formitemex1')
    onFormitemex1Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex1', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 unendproductplancnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.unendproductplancnt')
    onUnendproductplancntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'unendproductplancnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 postponedprojectcnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.postponedprojectcnt')
    onPostponedprojectcntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'postponedprojectcnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 resprojectcnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.resprojectcnt')
    onResprojectcntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'resprojectcnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom3 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.custom3')
    onCustom3Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom3', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom4 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.custom4')
    onCustom4Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom4', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitemex2 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.formitemex2')
    onFormitemex2Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex2', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 undoneresprojectcnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.undoneresprojectcnt')
    onUndoneresprojectcntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'undoneresprojectcnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 releasecnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.releasecnt')
    onReleasecntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'releasecnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom5 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.custom5')
    onCustom5Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom5', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 custom6 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.custom6')
    onCustom6Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'custom6', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 formitemex3 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.formitemex3')
    onFormitemex3Change(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'formitemex3', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 normalreleasecnt 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.normalreleasecnt')
    onNormalreleasecntChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'normalreleasecnt', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof Main2
     */
    @Watch('data.id')
    onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof Main2
     */
    private resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
    }

    /**
      * 置空对象
      *
      * @param {any[]} args
      * @memberof EditForm
      */
    protected ResetData(_datas:any){
        if(Object.keys(_datas).length >0){
            Object.keys(_datas).forEach((name: string) => {
                if (this.data.hasOwnProperty(name)) {
                    this.data[name] = null;
                }
            });
        }
    }

    /**
     * 表单逻辑
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof Main2
     */
    private formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                


        if (Object.is(name, '') || Object.is(name, 'storycnt')) {
            let ret = false;
            const _storycnt = this.data.storycnt;
            if (this.$verify.testCond(_storycnt, 'NOTEQ', '0')) {
                ret = true;
            }
            this.detailsModel.button4.setVisible(ret);
        }

        if (Object.is(name, '') || Object.is(name, 'storycnt')) {
            let ret = false;
            const _storycnt = this.data.storycnt;
            if (this.$verify.testCond(_storycnt, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.button5.setVisible(ret);
        }





        if (Object.is(name, '') || Object.is(name, 'productplancnt')) {
            let ret = false;
            const _productplancnt = this.data.productplancnt;
            if (this.$verify.testCond(_productplancnt, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.button1.setVisible(ret);
        }




        if (Object.is(name, '') || Object.is(name, 'resprojectcnt')) {
            let ret = false;
            const _resprojectcnt = this.data.resprojectcnt;
            if (this.$verify.testCond(_resprojectcnt, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.button2.setVisible(ret);
        }



        if (Object.is(name, '') || Object.is(name, 'releasecnt')) {
            let ret = false;
            const _releasecnt = this.data.releasecnt;
            if (this.$verify.testCond(_releasecnt, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.button3.setVisible(ret);
        }



        if (Object.is(name, '') || Object.is(name, 'storycnt')) {
            let ret = false;
            const _storycnt = this.data.storycnt;
            if (this.$verify.testCond(_storycnt, 'NOTEQ', '0')) {
                ret = true;
            }
            this.detailsModel.grouppanel2.setVisible(ret);
        }




















        if (Object.is(name, '') || Object.is(name, 'productplancnt')) {
            let ret = false;
            const _productplancnt = this.data.productplancnt;
            if (this.$verify.testCond(_productplancnt, 'NOTEQ', '0')) {
                ret = true;
            }
            this.detailsModel.formitemex1.setVisible(ret);
        }






        if (Object.is(name, '') || Object.is(name, 'resprojectcnt')) {
            let ret = false;
            const _resprojectcnt = this.data.resprojectcnt;
            if (this.$verify.testCond(_resprojectcnt, 'NOTEQ', '0')) {
                ret = true;
            }
            this.detailsModel.formitemex2.setVisible(ret);
        }





        if (Object.is(name, '') || Object.is(name, 'releasecnt')) {
            let ret = false;
            const _releasecnt = this.data.releasecnt;
            if (this.$verify.testCond(_releasecnt, 'NOTEQ', '0')) {
                ret = true;
            }
            this.detailsModel.formitemex3.setVisible(ret);
        }



    }

    /**
     * 表单值变化
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof Main2
     */
    private formDataChange({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (this.ignorefieldvaluechange) {
            return;
        }
        this.resetFormData({ name: name, newVal: newVal, oldVal: oldVal });
        this.formLogic({ name: name, newVal: newVal, oldVal: oldVal });
        this.dataChang.next(JSON.stringify(this.data));
    }

    /**
     * 表单加载完成
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof Main2
     */
    private onFormLoad(data: any = {},action:string): void {
        if(Object.is(action,"save") || Object.is(action,"autoSave"))
        // 更新context的实体主键
        if(data.productstats){
            Object.assign(this.context,{productstats:data.productstats})
        }
        this.setFormEnableCond(data);
        this.fillForm(data,action);
        this.oldData = {};
        Object.assign(this.oldData, JSON.parse(JSON.stringify(this.data)));
        this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: false });
        this.formLogic({ name: '', newVal: null, oldVal: null });
    }

    /**
     * 值填充
     *
     * @param {*} [_datas={}]
     * @param {string} [action]
     * @memberof Main2
     */
    protected fillForm(_datas: any = {},action:string): void {
        this.ignorefieldvaluechange = true;
        Object.keys(_datas).forEach((name: string) => {
            if (this.data.hasOwnProperty(name)) {
                this.data[name] = _datas[name];
            }
        });
        if(Object.is(action,'loadDraft')){
            this.createDefault();
        }
        this.$nextTick(function () {
            this.ignorefieldvaluechange = false;
        })
    }

    /**
     * 设置表单项是否启用
     *
     * @protected
     * @param {*} data
     * @memberof Main2
     */
    protected setFormEnableCond(data: any): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setEnableCond(data.srfuf);
        });
    }

    /**
     * 重置草稿表单状态
     *
     * @private
     * @memberof Main2
     */
    private resetDraftFormStates(): void {
        const form: any = this.$refs.form;
        if (form) {
            form.resetFields();
        }
    }

    /**
     * 重置校验结果
     *
     * @memberof Main2
     */
    protected resetValidates(): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setError('');
        });
    }

    /**
     * 填充校验结果 （后台）
     *
     * @param {any[]} fieldErrors
     * @memberof Main2
     */
    protected fillValidates(fieldErrors: any[]): void {
        fieldErrors.forEach((error: any) => {
            const formItem: FormItemModel = this.detailsModel[error.field];
            if (!formItem) {
                return;
            }
            this.$nextTick(() => {
                formItem.setError(error.message);
            });
        });
    }

    /**
     * 表单校验状态
     *
     * @returns {boolean} 
     * @memberof Main2
     */
    protected formValidateStatus(): boolean {
        const form: any = this.$refs.form;
        let validatestate: boolean = true;
        form.validate((valid: boolean) => {
            validatestate = valid ? true : false;
        });
        return validatestate
    }

    /**
     * 获取全部值
     *
     * @returns {*}
     * @memberof Main2
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof Main2
     */
    protected onFormItemValueChange($event: { name: string, value: any }): void {
        if (!$event) {
            return;
        }
        if (!$event.name || Object.is($event.name, '') || !this.data.hasOwnProperty($event.name)) {
            return;
        }
        this.data[$event.name] = $event.value;
    }

    /**
     * 设置数据项值
     *
     * @param {string} name
     * @param {*} value
     * @returns {void}
     * @memberof Main2
     */
    protected setDataItemValue(name: string, value: any): void {
        if (!name || Object.is(name, '') || !this.data.hasOwnProperty(name)) {
            return;
        }
        if (Object.is(this.data[name], value)) {
            return;
        }
        this.data[name] = value;
    }


	/**
	 * 表单 查看全部 事件
	 *
	 * @memberof @memberof Main2
	 */
    protected button4_click($event: any): void {
        this.form_button4_click(null, null, $event);

    }

	/**
	 * 表单 提需求 事件
	 *
	 * @memberof @memberof Main2
	 */
    protected button5_click($event: any): void {
        this.form_button5_click(null, null, $event);

    }

	/**
	 * 表单 创建计划 事件
	 *
	 * @memberof @memberof Main2
	 */
    protected button1_click($event: any): void {
        this.form_button1_click(null, null, $event);

    }

	/**
	 * 表单 创建项目 事件
	 *
	 * @memberof @memberof Main2
	 */
    protected button2_click($event: any): void {
        this.form_button2_click(null, null, $event);

    }

	/**
	 * 表单 创建发布 事件
	 *
	 * @memberof @memberof Main2
	 */
    protected button3_click($event: any): void {
        this.form_button3_click(null, null, $event);

    }


    /**
     * 分组界面行为事件
     *
     * @param {*} $event
     * @memberof Main2
     */
    protected groupUIActionClick($event: any): void {
        if (!$event) {
            return;
        }
        const item:any = $event.item;
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof Main2
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof Main2
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('autoload', action)) {
                    this.autoLoad(data);
                }
                if (Object.is('load', action)) {
                    this.load(data);
                }
                if (Object.is('loaddraft', action)) {
                    this.loadDraft(data);
                }
                if (Object.is('save', action)) {
                    this.save(data,data.showResultInfo);
                }
                if (Object.is('remove', action)) {
                    this.remove(data);
                }
                if (Object.is('saveandexit', action)) {
                    this.saveAndExit(data);
                }
                if (Object.is('saveandnew', action)) {
                    this.saveAndNew(data);
                }
                if (Object.is('removeandexit', action)) {
                    this.removeAndExit(data);
                }
                if (Object.is('refresh', action)) {
                    this.refresh(data);
                }
            });
        }
        this.dataChang
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            ).subscribe((data: any) => {
                if (this.autosave) {
                    this.autoSave();
                }
                const state = !Object.is(JSON.stringify(this.oldData), JSON.stringify(this.data)) ? true : false;
                this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: state });
            });
    }

    /**
     * vue 生命周期
     *
     * @memberof Main2
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof Main2
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        if (this.dataChangEvent) {
            this.dataChangEvent.unsubscribe();
        }
    }

    /**
     * 拷贝内容
     *
     * @param {*} [arg={}]
     * @memberof @memberof Main2
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     *打印
     *@memberof @memberof Main2
     */
    protected print(){
        let _this:any = this;
        _this.$print({id:'form',popTitle:'嵌入统计'});
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof Main2
     */
    protected refresh(args: any[]): void {
        let arg: any = {};
        Object.assign(arg,args[0]);
        if (this.data.srfkey && !Object.is(this.data.srfkey, '')) {
            Object.assign(arg, { srfkey: this.data.srfkey });
            this.load(arg);
            return;
        }
        if (this.data.srfkeys && !Object.is(this.data.srfkeys, '')) {
            Object.assign(arg, { srfkey: this.data.srfkeys });
            this.load(arg);
            return;
        }
    }

    /**
     * 自动加载
     *
     * @param {*} [arg={}]
     * @returns {void}
     * @memberof Main2
     */
    protected autoLoad(arg: any = {}): void {
        if (arg.srfkey && !Object.is(arg.srfkey, '')) {
            Object.assign(arg, { srfkey: arg.srfkey });
            this.load(arg);
            return;
        }
        if (arg.srfkeys && !Object.is(arg.srfkeys, '')) {
            Object.assign(arg, { srfkey: arg.srfkeys });
            this.load(arg);
            return;
        }
        this.loadDraft(arg);
    }

    /**
     * 加载
     *
     * @private
     * @param {*} [opt={}]
     * @memberof Main2
     */
    private load(opt: any = {}): void {
        if(!this.loadAction){
            this.$Notice.error({ title: '错误', desc: 'ProductStatsEditView9视图表单loadAction参数未配置' });
            return;
        }
        const arg: any = { ...opt };
        let viewparamResult:any = Object.assign(arg,this.viewparams);
        const get: Promise<any> = this.service.get(this.loadAction,JSON.parse(JSON.stringify(this.context)),{viewparams:viewparamResult}, this.showBusyIndicator);
        get.then((response: any) => {
            if (response && response.status === 200) {
                const data = response.data;
                this.onFormLoad(data,'load');
                this.$emit('load', data);
                this.$nextTick(() => {
                    this.formState.next({ type: 'load', data: data });
                });
            }
        }).catch((response: any) => {
            if (response && response.status) {
                this.$Notice.error({ title: '错误', desc: response.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 加载草稿
     *
     * @param {*} [opt={}]
     * @memberof Main2
     */
    protected loadDraft(opt: any = {}): void {
        if(!this.loaddraftAction){
            this.$Notice.error({ title: '错误', desc: 'ProductStatsEditView9视图表单loaddraftAction参数未配置' });
            return;
        }
        const arg: any = { ...opt } ;
        let viewparamResult:any = Object.assign(arg,this.viewparams);
        let post: Promise<any> = this.service.loadDraft(this.loaddraftAction,JSON.parse(JSON.stringify(this.context)),{viewparams:viewparamResult}, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: '错误', desc: response.errorMessage });
                }
                return;
            }

            const data = response.data;
            if(data.productstats){
                Object.assign(this.context,{productstats:data.productstats})
            }
            this.resetDraftFormStates();
            this.onFormLoad(data,'loadDraft');
            this.$emit('load', data);
            this.$nextTick(() => {
                this.formState.next({ type: 'load', data: data });
            });
            setTimeout(() => {
                const form: any = this.$refs.form;
                if (form) {
                    form.fields.forEach((field: any) => {
                        field.validateMessage = "";
                        field.validateState = "";
                        field.validateStatus = false;
                    });
                }
            });
        }).catch((response: any) => {
            if (response && response.status) {
                this.$Notice.error({ title: '错误', desc: response.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 自动保存
     *
     * @param {*} [opt={}]
     * @memberof Main2
     */
    protected autoSave(opt: any = {}): void {
        if (!this.formValidateStatus()) {
            return;
        }
        const arg: any = { ...opt };
        const data = this.getValues();
        Object.assign(arg, data);
        const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
        if(!action){
            let actionName:any = Object.is(data.srfuf, '1')?"updateAction":"createAction";
            this.$Notice.error({ title: '错误', desc: 'ProductStatsEditView9视图表单'+actionName+'参数未配置' });
            return;
        }
        Object.assign(arg,{viewparams:this.viewparams});
        const post: Promise<any> = this.service.add(action, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: '错误', desc: response.errorMessage });
                }
                return;
            }

            const data = response.data;
            this.onFormLoad(data,'autoSave');
            this.$emit('save', data);
            this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
            this.$nextTick(() => {
                this.formState.next({ type: 'save', data: data });
            });
        }).catch((response: any) => {
            if (response && response.status) {
                this.$Notice.error({ title: '错误', desc: response.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 保存
     *
     * @param {*} [opt={}]
     * @param {boolean} [showResultInfo] 
     * @param {boolean} [ifStateNext] formState是否下发通知
     * @returns {Promise<any>}
     * @memberof Main2
     */
    protected async save(opt: any = {}, showResultInfo?: boolean, ifStateNext: boolean = true): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            showResultInfo = showResultInfo === undefined ? true : false;
            if (!this.formValidateStatus()) {
                this.$Notice.error({ title: '错误', desc: '值规则校验异常' });
                return;
            }
            const arg: any = { ...opt };
            const data = this.getValues();
            Object.assign(arg, data);
            Object.assign(arg, this.context);
            if (ifStateNext) {
                this.drcounter = 0;
                if(this.drcounter !== 0){
                    this.drsaveopt = opt;
                    this.formState.next({ type: 'beforesave', data: arg });//先通知关系界面保存
                    this.saveState = resolve;
                    return;
                }
            }
            const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
            if(!action){
                let actionName:any = Object.is(data.srfuf, '1')?"updateAction":"createAction";
                this.$Notice.error({ title: '错误', desc: 'ProductStatsEditView9视图表单'+actionName+'参数未配置' });
                return;
            }
            Object.assign(arg,{viewparams:this.viewparams});
            const post: Promise<any> = Object.is(data.srfuf, '1')?this.service.update(action, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator):this.service.add(action,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
            post.then((response: any) => {
                if (!response.status || response.status !== 200) {
                    if (response.errorMessage) {
                        this.$Notice.error({ title: '错误', desc: response.errorMessage });
                    }
                    return;
                }

                const data = response.data;
                this.onFormLoad(data,'save');
                this.$emit('save', data);
                this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
                this.$nextTick(() => {
                    this.formState.next({ type: 'save', data: data });
                });
                if (showResultInfo) {
                    this.$Notice.success({ title: '', desc: (data.srfmajortext ? data.srfmajortext : '') + '&nbsp;保存成功！' });
                }
                resolve(response);
            }).catch((response: any) => {
                if (response && response.status) {
                    this.$Notice.error({ title: '错误', desc: response.message });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({ title: '错误', desc: '系统异常' });
                    reject(response);
                    return;
                }
                reject(response);
            });
        })
    }

    /**
    * 删除
    *
    * @private
    * @param {*} [opt={}]
    * @memberof EditForm
    */
    private remove(opt:Array<any> = [],showResultInfo?: boolean): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if(!this.removeAction){
                this.$Notice.error({ title: '错误', desc: 'ProductStatsEditView9视图表单removeAction参数未配置' });
                return;
            }
            const arg: any = opt[0];
            const _this: any = this;
            Object.assign(arg,{viewparams:this.viewparams});
            this.service.delete(_this.removeAction, JSON.parse(JSON.stringify(this.context)),arg, showResultInfo).then((response: any) => {
                if (response) {
                    const data = response.data;
                    this.$emit('remove',data);
                    this.formState.next({ type: 'remove', data: data });
                    this.data.ismodify = false;
                    this.$Notice.success({ title: '', desc: (data.srfmajortext ? data.srfmajortext : '') + '&nbsp;删除成功！' });
                    resolve(response);
                }
            }).catch((error: any) => {
                const { data: _data } = error;
                this.$Notice.error({ title: _data.title, desc: _data.message });
                reject(error);
            });
        });
    }

    /**
     * 工作流启动
     *
     * @param {*} [data={}]
     * @returns {Promise<any>}
     * @memberof Main2
     */
    protected async wfstart(data: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if(!this.WFStartAction){
                this.$Notice.error({ title: '错误', desc: 'WFCIDEditView视图表单WFStartAction参数未配置' });
                return;
            }
            const _this: any = this;
            const arg: any = data[0];
            Object.assign(arg,{viewparams:this.viewparams});
            const post: Promise<any> = Object.is(data.srfuf, '1')?this.service.update(this.updateAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator):this.service.add(this.createAction,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
            post.then((response:any) =>{
                const arg:any = response.data;
                if(this.viewparams){
                    Object.assign(arg,{viewparams:this.viewparams});
                }
                const result: Promise<any> = this.service.wfstart(_this.WFStartAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
                result.then((response: any) => {
                    if (!response || response.status !== 200) {
                        this.$Notice.error({ title: '', desc: '工作流启动失败, ' + response.info });
                        return;
                    }
                    this.$Notice.info({ title: '', desc: '工作流启动成功' });
                    resolve(response);
            }).catch((response: any) => {
                if (response && response.status) {
                    this.$Notice.error({ title: '错误', desc: response.message });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({ title: '错误', desc: '系统异常' });
                    reject(response);
                    return;
                }
                reject(response);
            });
            }).catch((response: any) => {
                    if (response && response.status) {
                        this.$Notice.error({ title: '错误', desc: response.message });
                        reject(response);
                        return;
                    }
                    if (!response || !response.status || !response.data) {
                        this.$Notice.error({ title: '错误', desc: '系统异常' });
                        reject(response);
                        return;
                    }
                    reject(response);
            })
        });
    }

    /**
     * 工作流提交
     *
     * @param {*} [data={}]
     * @returns {Promise<any>}
     * @memberof Main2
     */
    protected async wfsubmit(data: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
        if(!this.WFSubmitAction){
            this.$Notice.error({ title: '错误', desc: 'ProductStatsEditView9视图表单WFSubmitAction参数未配置' });
            return;
        }
        const _this: any = this;
        const arg: any = data[0];
        Object.assign(arg,{viewparams:this.viewparams});
        if (!arg.productstats || Object.is(arg.productstats, '')) {
            return;
        }
        const post: Promise<any> = Object.is(arg.srfuf, '1')?this.service.update(this.updateAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator):this.service.add(this.createAction,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
        post.then((response:any) =>{
                const arg:any = response.data;
                if(this.viewparams){
                    Object.assign(arg,{viewparams:this.viewparams});
                }
                const result: Promise<any> = this.service.wfsubmit(_this.WFSubmitAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
                result.then((response: any) => {
                    if (!response || response.status !== 200) {
                        this.$Notice.error({ title: '', desc: '工作流提交失败, ' + response.info });
                        return;
                    }
                    this.$Notice.info({ title: '', desc: '工作流提交成功' });
                    resolve(response);
            }).catch((response: any) => {
                if (response && response.status) {
                    this.$Notice.error({ title: '错误', desc: response.message });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({ title: '错误', desc: '系统异常' });
                    reject(response);
                    return;
                }
                reject(response);
            });
            }).catch((response: any) => {
                    if (response && response.status) {
                        this.$Notice.error({ title: '错误', desc: response.message });
                        reject(response);
                        return;
                    }
                    if (!response || !response.status || !response.data) {
                        this.$Notice.error({ title: '错误', desc: '系统异常' });
                        reject(response);
                        return;
                    }
                    reject(response);
            })
        })
    }

    /**
     * 表单项更新
     *
     * @param {string} mode 界面行为名称
     * @param {*} [data={}] 请求数据
     * @param {string[]} updateDetails 更新项
     * @param {boolean} [showloading] 是否显示加载状态
     * @returns {void}
     * @memberof Main2
     */
    protected updateFormItems(mode: string, data: any = {}, updateDetails: string[], showloading?: boolean): void {
        if (!mode || (mode && Object.is(mode, ''))) {
            return;
        }
        const arg: any = { ...data };
        Object.assign(arg,this.viewparams);
        const post: Promise<any> = this.service.frontLogic(mode,JSON.parse(JSON.stringify(this.context)),arg, showloading);
        post.then((response: any) => {
            if (!response || response.status !== 200) {
                this.$Notice.error({ title: '错误', desc: '表单项更新失败' });
                return;
            }
            const data = response.data;
            const _data: any = {};
            updateDetails.forEach((name: string) => {
                if (!data.hasOwnProperty(name)) {
                    return;
                }
                Object.assign(_data, { [name]: data[name] });
            });
            this.setFormEnableCond(_data);
            this.fillForm(_data,'updateFormItem');
            this.formLogic({ name: '', newVal: null, oldVal: null });
            this.dataChang.next(JSON.stringify(this.data));
            this.$nextTick(() => {
                this.formState.next({ type: 'updateformitem', ufimode: arg.srfufimode, data: _data });
            });
        }).catch((response: any) => {
            if (response && response.status) {
                this.$Notice.error({ title: '错误', desc: response.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 回车事件
     *
     * @param {*} $event
     * @memberof Main2
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @param {any[]} args
     * @memberof Main2
     */
    protected saveAndExit(data:any[]):Promise<any>{
        let _this = this;
        return new Promise((resolve: any, reject: any) =>{
            let arg: any = {};
            if(data && data.length > 0){
                Object.assign(arg,data[0]);
            }
            _this.currentAction = "saveAndExit";
            _this.save([arg]).then((res) =>{
                if(res){
                    _this.closeView(res.data);
                }
                resolve(res);
            }).catch((error) =>{
                reject(error);
            })
        })
    }

    /**
     * 保存并新建
     *
     * @param {any[]} args
     * @memberof Main2
     */
    protected saveAndNew(data:any[]):Promise<any>{
        let _this = this;
        return new Promise((resolve: any, reject: any) =>{
            let arg: any = {};
            if(data && data.length > 0){
                Object.assign(arg,data[0]);
            }
            _this.currentAction = "saveAndNew";
            _this.save([arg]).then((res) =>{
                _this.ResetData(res);
                _this.loadDraft({});
            }).catch((error) =>{
                reject(error);
            })
        })
    }

    /**
     * 删除并退出
     *
     * @param {any[]} args
     * @memberof Main2
     */
    protected removeAndExit(data:any[]):Promise<any>{
        let _this = this;
        return new Promise((resolve: any, reject: any) =>{
            let arg: any = {};
            if(data && data.length > 0){
                Object.assign(arg,data[0]);
            }
            _this.remove([arg]).then((res) =>{
                if(res){
                  _this.closeView(res.data);
                }
                resolve(res);
            }).catch((error) =>{
                reject(error);
            })
        })
    }

    /**
    * 关系界面数据保存完成
    *
    * @param {any} $event
    * @memberof Main2
    */
    protected drdatasaved($event:any){
        let _this = this;
        this.drcounter--;
        if(this.drcounter > 0){
            return;
        }
        this.save(this.drsaveopt, undefined, false).then((res) =>{
            this.saveState(res);
            this.drsaveopt = {};
            if(Object.is(_this.currentAction, "saveAndNew")){
                _this.ResetData(res);
                _this.loadDraft({});
            }else if(Object.is(_this.currentAction, "saveAndExit")){
                if(res){
                    _this.closeView(res.data);
                }
            }
        });
    }

    /**
     * 新建默认值
     * @memberof Main2
     */
    public createDefault(){                    
        if (this.data.hasOwnProperty('product')) {
            this.data['product'] = this.viewparams['product'];
        }
    }

    
}
</script>

<style lang='less'>
@import './main2-form.less';
</style>