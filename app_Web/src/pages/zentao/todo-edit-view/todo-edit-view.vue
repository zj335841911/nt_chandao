<template src="./todo-edit-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TodoEditViewBase } from './todo-edit-view-base';
import view_form from '@widgets/todo/main-form/main-form.vue';

/**
 * todo编辑视图视图
 *
 * @export
 * @class TodoEditView
 * @extends {TodoEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class TodoEditView extends TodoEditViewBase { }
</script>
