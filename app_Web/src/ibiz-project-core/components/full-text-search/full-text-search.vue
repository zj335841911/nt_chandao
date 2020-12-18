<template>
    <div class="full-text-search">
        <i-input clearable search @on-search="onSearch" size="small" placeholder="全文检索"></i-input>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, } from 'vue-property-decorator';

@Component({})
export default class FullTextSearch extends Vue{
    
    /**
     * 路由跳转地址
     * 
     * @type {string}
     * @memberof FullTextSearch
     */
    @Prop()
    public path!: string;

    /**
     * 执行全文检索时打开索引检索界面
     * 
     * @param query 检索值
     * @memberof FullTextSearch
     */
    public onSearch(query: string){
        if (query && !Object.is(query,'')) {
            if (this.path && !Object.is(this.path,'')) {
                this.$router.push({ path: this.path, query: { query: query } });
            } else{
                console.log('请配置全文检索页面路径');
            }
        } else {
            this.$Notice.error({ title: '全文检索', desc: '关键字不能少于1个'});
        }
    }
}
</script>
<style lang="less">
@import './full-text-search.less';
</style>