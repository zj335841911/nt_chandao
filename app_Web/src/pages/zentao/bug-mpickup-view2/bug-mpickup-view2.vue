<template src="./bug-mpickup-view2.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { BugMPickupView2Base } from './bug-mpickup-view2-base';
import view_pickupviewpanel from '@widgets/bug/mpickup-view2pickupviewpanel-pickupviewpanel/mpickup-view2pickupviewpanel-pickupviewpanel.vue';

/**
 * 关联Bug视图
 *
 * @export
 * @class BugMPickupView2
 * @extends {BugMPickupView2Base}
 */
@Component({
    components: {
        view_pickupviewpanel, 
    }
})
@VueLifeCycleProcessing()
export default class BugMPickupView2 extends BugMPickupView2Base { }
</script>
