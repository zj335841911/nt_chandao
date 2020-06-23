<template src="./main-toolbar-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { MainToolbarBase } from './main-toolbar-portlet-base';
 

/**
 * dashboard_sysportlet3部件
 *
 * @export
 * @class MainToolbar
 * @extends {MainToolbarBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class MainToolbar extends MainToolbarBase { }
</script>
