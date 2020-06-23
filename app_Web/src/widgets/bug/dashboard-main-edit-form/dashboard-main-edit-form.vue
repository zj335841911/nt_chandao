<template src="./dashboard-main-edit-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashboardMainEditBase } from './dashboard-main-edit-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DashboardMainEdit
 * @extends {DashboardMainEditBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class DashboardMainEdit extends DashboardMainEditBase { }
</script>
