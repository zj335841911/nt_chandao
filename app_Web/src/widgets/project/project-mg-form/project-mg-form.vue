<template src="./project-mg-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ProjectMGEditFormBase } from './project-mg-form-base';
 

/**
 * form部件
 *
 * @export
 * @class ProjectMGEditForm
 * @extends {ProjectMGEditFormBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ProjectMGEditForm extends ProjectMGEditFormBase { }
</script>
