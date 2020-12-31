<template>
    <div class="app-mob-color-picker">
        <div class="text">
            <ion-input :disabled="disabled" :value="curVal" ref="colorPicker" :placeholder="placeholder"></ion-input>
        </div>
        <div class="picker">
            <ion-icon name="color-palette-outline" @click="openPicker"></ion-icon>
            <input type="color" ref="picker" v-model="colorValue" name="color" id="color" class="color" @change="changeColor">
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, Model } from 'vue-property-decorator';
import { CodeListService } from "@/ibiz-core";
import { Subject, Subscription } from 'rxjs';
@Component({
})
export default class AppMobDepartmentSelect extends Vue {
    /**
     * 双向绑定表单项数据
     * 
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Model('change') public value: any;

    /**
     * 表单数据
     * 
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public data: any;

    /**
     * 表单通讯对象
     * 
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public formState?: Subject<any>;

    /**
     * 禁用状态
     * 
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop({default: false}) public disabled?: boolean;

    /**
     * 占位提示
     * 
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public placeholder?: string;

    /**
     * 上下文
     * 
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public context: any;

    /**
     * 视图参数
     * 
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public viewparam: any;

    /**
     * 颜色对应字段值
     * 
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    @Prop() public color: any;

    /**
     * 双向绑定颜色
     * 
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    public colorValue: any = null;

    /**
     * 获取输入框值
     * 
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    get curVal() {
        return this.value;
    }

    /**
     * 设置值
     * 
     * @type {*}
     * @memberof AppMobDepartmentSelect
     */
    set curVal(val: any) {
        this.$emit('change', val);
    }

    /**
     * Vue生命周期
     * 
     * @memberof AppMobDepartmentSelect
     */
    public created() {
        this.handleData();
    }

    /**
     * 数据处理
     * 
     * @memberof AppMobDepartmentSelect
     */
    @Watch('value')
    public handleData() {
        if(!this.value && !this.color) {
            return;
        }
        this.colorValue = this.data[this.color];
        this.curVal = this.value;
        this.handleInputColor();
    }

    /**
     * 设置输入框字体颜色
     * 
     * @memberof AppMobDepartmentSelect
     */
    public handleInputColor() {
        let textDom: any = document.getElementsByClassName('text')[0];
        if(textDom){
            textDom.style.color = this.colorValue;
        }
    }

    /**
     * 颜色变化
     * 
     * @memberof AppMobDepartmentSelect
     */
    public changeColor($event: any){
        this.handleInputColor();
        this.$emit('colorChange', { name: this.color, value: this.colorValue });
    }

    /**
     * 打开颜色选择
     * 
     * @memberof AppMobDepartmentSelect
     */
    public openPicker(){
        let e: any = document.createEvent('MouseEvent');
        e.initEvent('click', true, true);
        let doc:any = document;
        let picker: any = doc.getElementById("color");
        picker.dispatchEvent(e);
    }
}
</script>

<style lang='less'>
@import './app-mob-color-picker.less';
</style>