<template src="./task-whedit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TaskWHEditViewBase } from './task-whedit-view-base';
import view_form from '@widgets/task/task-estimate-form/task-estimate-form.vue';

/**
 * 工时视图
 *
 * @export
 * @class TaskWHEditView
 * @extends {TaskWHEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TaskWHEditView extends TaskWHEditViewBase { }
</script>
