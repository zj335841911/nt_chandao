<template src="./ibz-dailymain-edit-view.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IbzDailymainEditViewBase } from './ibz-dailymain-edit-view-base';
import view_form from '@widgets/ibz-daily/daily-edit-form/daily-edit-form.vue';

/**
 * 日报编辑视图（主数据）视图
 *
 * @export
 * @class IbzDailymainEditView
 * @extends {IbzDailymainEditViewBase}
 */
@Component({
    components: {
        view_form, 
    }
})
@VueLifeCycleProcessing()
export default class IbzDailymainEditView extends IbzDailymainEditViewBase {}
</script>
