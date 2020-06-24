<template src="./base-info-edit-mode-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BaseInfo_EditModePortletBase } from './base-info-edit-mode-portlet-base';
 

/**
 * dashboard_sysportlet2部件
 *
 * @export
 * @class BaseInfo_EditMode
 * @extends {BaseInfo_EditModePortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class BaseInfo_EditModePortlet extends BaseInfo_EditModePortletBase { }
</script>
