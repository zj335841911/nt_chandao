<template src="./action-history-list-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ActionHistoryListBase } from './action-history-list-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class ActionHistoryList
 * @extends {ActionHistoryListBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ActionHistoryList extends ActionHistoryListBase { }
</script>
