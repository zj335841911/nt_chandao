<template src="./text-exp-view-portlet.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TextExpViewPortletBase } from './text-exp-view-portlet-base';
 

/**
 * db_sysportlet2部件
 *
 * @export
 * @class TextExpView
 * @extends {TextExpViewPortletBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class TextExpViewPortlet extends TextExpViewPortletBase { }
</script>
