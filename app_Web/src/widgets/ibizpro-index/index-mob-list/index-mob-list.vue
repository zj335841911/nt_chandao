<template src="./index-mob-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IndexMobListBase } from './index-mob-list-base';
import layout_list_itempanel from '@widgets/ibizpro-index/index-mob2-panel/index-mob2-panel.vue';
 

/**
 * list部件
 *
 * @export
 * @class IndexMobList
 * @extends {IndexMobListBase}
 */
@Component({
    components: {
        layout_list_itempanel,
         
    },
})
@VueLifeCycleProcessing()
export default class IndexMobList extends IndexMobListBase {}
</script>
