<template src="./platform-management-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PlatformManagementBase } from './platform-management-form-base';
 

/**
 * form部件
 *
 * @export
 * @class PlatformManagement
 * @extends {PlatformManagementBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class PlatformManagement extends PlatformManagementBase { }
</script>
