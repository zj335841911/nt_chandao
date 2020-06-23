<template src="./project-exp-view-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectExpViewBase } from './project-exp-view-portlet-base';
 

/**
 * db_projectexpportlet部件
 *
 * @export
 * @class ProjectExpView
 * @extends {ProjectExpViewBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProjectExpView extends ProjectExpViewBase { }
</script>
