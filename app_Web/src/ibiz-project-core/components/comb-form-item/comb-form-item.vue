<template>
    <div v-if="formItems"  class="comb-form-item">
        <template v-for="(item, i) of formItems">
            <app-form-item v-if="!item.hidden" :key="i" :name='item.prop' :caption="item.name" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :isEmptyCaption="false" labelPos="LEFT">
                <template v-for="(val, n) of valItems">
                    <div class="comb-item" :key="n">
                        <slot :name="item.prop" :item="val"></slot>
                    </div>
                </template>
                <div :key="renderTime" class="comb-item">
                    <slot :name="item.prop" :item='defItem'></slot>
                </div>
            </app-form-item>
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class CombFormItem extends Vue {

    /**
     * 名称
     *
     * @type {string}
     * @memberof CombFormItem
     */
    @Prop() name!: string;

    /**
     * 表单项集合
     *
     * @type {*}
     * @memberof CombFormItem
     */
    @Prop() formItems: any;

    /**
     * 值
     *
     * @type {string | Array<any>}
     * @memberof CombFormItem
     */
    @Prop() value!: string | Array<any>;

    /**
     * 值集合
     *
     * @type {*}
     * @memberof CombFormItem
     */
    public valItems: any[] = [];

    /**
     * 绘制时间戳
     *
     * @type {number}
     * @memberof CombFormItem
     */
    public renderTime: number = new Date().getTime();

    /**
     * 获取默认对象
     *
     * @memberof CombFormItem
     */
    get defItem() {
        let def: any = {};
        if(this.formItems) {
            this.formItems.forEach((item: any) => {
                Object.defineProperty(def, item.prop, {
                    get: () => {
                        return null;
                    },
                    set: (val) => {
                        if(item.unique && this.valItems.findIndex((v: any) => Object.is(v[item.prop], val)) >= 0) {
                            this.renderTime = new Date().getTime();
                            return;
                        }
                        if(val || val === 0) {
                            this.addValItem(item.prop, val);
                            this.renderTime = new Date().getTime();
                        }
                    }
                });
            });
        }
        return def;
    }
 
    /**
     * 监听值变化
     *
     * @memberof CombFormItem
     */
    @Watch('value')
    onValueChange(newVal: any) {
        this.setValItems();
    }

    /**
     * 生命周期
     *
     * @memberof CombFormItem
     */
    public created() {
        this.setValItems();
    }

    /**
     * 添加值对象
     *
     * @memberof CombFormItem
     */
    public addValItem(name: string, val: any) {
        let item: any = {};
        this.formItems.forEach((formItem: any) => {
            item[formItem.prop] = null;
        });
        item[name] = val;
        this.valItems.push(item);
        this.onChange();
    }

    /**
     * 设置值集合
     *
     * @memberof CombFormItem
     */
    public setValItems() {
        if(!this.value) {
            this.valItems = [];
            return;
        }
        if (Array.isArray(this.value)) {
            this.transformData(this.value)
        } else {
            try {
                this.transformData(JSON.parse(this.value))
            } catch (error) {
                this.$Notice.error({desc: '数据格式有误！'});
            }
        }
    }

    /**
     * 处理数据
     *
     * @memberof CombFormItem
     */
    public transformData(datas: any[]) {
        this.valItems = [];
        datas.forEach((data: any) => {
            let vals: any[] = [];
            if(this.formItems.length > 0) {
                let prop = this.formItems[0].prop;
                vals = data[prop];
            }
            vals.forEach((val: any, index: number) => {
                let item: any = {};
                this.formItems.forEach((formItem: any) => {
                    item[formItem.prop] = data[formItem.prop][index];
                });
                this.valItems.push(item);
            })
        })
        this.listenerProperty();
    }

    /**
     * 监听属性值变化
     *
     * @memberof CombFormItem
     */   
    public listenerProperty() {
        this.valItems.forEach((item) => {
            Object.keys(item).forEach(key => {
                let value = item[key];
                Object.defineProperty(item, key, {
                    get: () => {
                        return value;
                    },
                    set: (a: any) => {
                        value = a;
                        if(value) {
                            this.onChange();
                            return;
                        }
                        if(Object.values(item).findIndex((v) => (v || v === 0)) < 0) {
                            let index = this.valItems.indexOf(item);
                            this.valItems.splice(index, 1);
                        }
                        this.onChange();
                    }
                })
            })
        })
    } 

    /**
     * 值变化
     *
     * @memberof CombFormItem
     */
    public onChange() {
        let item: any = {};
        this.formItems.forEach((formItem: any) => {
            item[formItem.prop] = [];
        });
        this.valItems.forEach((valItem: any) => {
            Object.keys(valItem).forEach((key: string) => {
                item[key].push(valItem[key]);
            })
        })
        this.$emit('formitemvaluechange', { name: this.name, value: JSON.stringify([item]) });
    }
}
</script>

<style lang="less">
@import "./comb-form-item.less";
</style>