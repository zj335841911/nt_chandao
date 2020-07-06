<template src="./file-file-dowload-view.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { FileFileDowloadViewBase } from './file-file-dowload-view-base';

/**
 * 附件下载视图
 *
 * @export
 * @class FileFileDowloadView
 * @extends {FileFileDowloadViewBase}
 */
@Component({
    components: {
    },
    beforeRouteEnter: (to: any, from: any, next: any) => {
        next((vm: any) => {
            vm.$appService.navHistory.setViewTag(vm.viewtag, to);
            vm.$appService.navHistory.setViewContext(vm.context, to);
        });
    }
})
@VueLifeCycleProcessing()
export default class FileFileDowloadView extends FileFileDowloadViewBase { }
</script>
