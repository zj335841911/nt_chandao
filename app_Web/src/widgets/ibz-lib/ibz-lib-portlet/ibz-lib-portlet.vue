<template src="./ibz-lib-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzLibPortletBase } from './ibz-lib-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class IbzLibPortlet
 * @extends {IbzLibPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class IbzLibPortlet extends IbzLibPortletBase { }
</script>
