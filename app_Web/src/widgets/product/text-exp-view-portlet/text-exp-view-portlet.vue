<template src="./text-exp-view-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TextExpViewBase } from './text-exp-view-portlet-base';
 

/**
 * db_sysportlet2部件
 *
 * @export
 * @class TextExpView
 * @extends {TextExpViewBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TextExpView extends TextExpViewBase { }
</script>
