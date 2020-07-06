<template src="./file-list-view9.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { FileListView9Base } from './file-list-view9-base';
import view_list from '@widgets/file/list-list/list-list.vue';

/**
 * 附件视图
 *
 * @export
 * @class FileListView9
 * @extends {FileListView9Base}
 */
@Component({
    components: {
        view_list, 
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class FileListView9 extends FileListView9Base { }
</script>
