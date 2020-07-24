<template src="./ibz-my-territory-my-work.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzMyTerritoryMyWorkBase } from './ibz-my-territory-my-work-base';
import view_list from '@widgets/ibz-my-territory/my-work-list/my-work-list.vue';

/**
 * 我的工作视图
 *
 * @export
 * @class IbzMyTerritoryMyWork
 * @extends {IbzMyTerritoryMyWorkBase}
 */
@Component({
    components: {
        view_list, 
    }
})
@VueLifeCycleProcessing()
export default class IbzMyTerritoryMyWork extends IbzMyTerritoryMyWorkBase { }
</script>
