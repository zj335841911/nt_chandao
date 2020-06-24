<template src="./project-exp-view-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectExpViewPortletBase } from './project-exp-view-portlet-base';
 

/**
 * db_projectexpportlet部件
 *
 * @export
 * @class ProjectExpView
 * @extends {ProjectExpViewPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProjectExpViewPortlet extends ProjectExpViewPortletBase { }
</script>
