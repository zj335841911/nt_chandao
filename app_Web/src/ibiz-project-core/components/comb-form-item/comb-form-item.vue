<template>
    <div v-if="formItems"  class="comb-form-item">
        <template v-for="(item, i) of formItems">
            <app-form-item v-if="!item.hidden" :key="i" :name='item.prop' :caption="item.name" uiStyle="DEFAULT" :labelWidth="130" :isShowCaption="true" :isEmptyCaption="false" labelPos="LEFT">
                <template v-for="val of valItems">
                    <slot :name="item.prop" :item="val"></slot>
                </template>
                <slot :name="item.prop" :item='defItem'></slot>
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
                        if(val) {
                            this.addValItem(item.prop, val);
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
        Object.keys(item).forEach(key => {
            let value = item[key];
            Object.defineProperty(item, key, {
                get: () => {
                    return value;
                },
                set: (a: any) => {
                    value = a;
                    if(value) {
                        return;
                    }
                    if(Object.values(item).findIndex((v) => (v || v === 0)) < 0) {
                        let index = this.valItems.indexOf(item);
                        this.valItems.splice(index, 1);
                    }
                }
            })
        })
        item[name] = val;
        this.valItems.push(item);
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
            this.valItems = JSON.parse(JSON.stringify(this.value));
        } else {
            try {
                this.valItems = JSON.parse(this.value);
            } catch (error) {
                this.$Notice.error({desc: '数据格式有误！'});
            }
        }
    }
}
</script>

<style lang="less">
@import "./comb-form-item.less";
</style>