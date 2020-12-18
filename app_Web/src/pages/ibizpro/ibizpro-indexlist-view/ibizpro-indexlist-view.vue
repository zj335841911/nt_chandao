<template src="./ibizpro-indexlist-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IBIZPRO_INDEXListViewBase } from './ibizpro-indexlist-view-base';
import view_list from '@widgets/ibizpro-index/index-mob-list/index-mob-list.vue';
import view_searchform from '@widgets/ibizpro-index/default-searchform/default-searchform.vue';

/**
 * 索引检索列表视图视图
 *
 * @export
 * @class IBIZPRO_INDEXListView
 * @extends {IBIZPRO_INDEXListViewBase}
 */
@Component({
    components: {
        view_list, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class IBIZPRO_INDEXListView extends IBIZPRO_INDEXListViewBase {

    /**
     * 视图挂载完毕
     *
     * @protected
     * @memberof MDViewBase
     */
    protected viewMounted(): void {
        this.loadQuickGroupModel();
        if (this.$route.query.query) {
            this.query = this.$route.query.query as string;
        }
    }

    /**
     * 快速搜索
     *
     * @protected
     * @memberof ListViewBase
     */
    protected onSearch(): void {
        const list: any = this.$refs.list;
        if (list) {
            list.curPage = 1;
            list.load(this.context, true);
        }
    }
}
</script>
