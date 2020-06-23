<template src="./cur-suit-case-grid-view-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CurSuitCaseGridViewBase } from './cur-suit-case-grid-view-portlet-base';
 

/**
 * dashboard_sysportlet1部件
 *
 * @export
 * @class CurSuitCaseGridView
 * @extends {CurSuitCaseGridViewBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class CurSuitCaseGridView extends CurSuitCaseGridViewBase { }
</script>
