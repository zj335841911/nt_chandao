<template src="./dash-board-info-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DashBoardInfoBase } from './dash-board-info-form-base';
 

/**
 * form部件
 *
 * @export
 * @class DashBoardInfo
 * @extends {DashBoardInfoBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class DashBoardInfo extends DashBoardInfoBase { }
</script>
