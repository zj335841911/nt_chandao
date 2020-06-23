<template src="./default-searchform.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DefaultBase } from './default-searchform-base';
 

/**
 * searchform部件
 *
 * @export
 * @class Default
 * @extends {DefaultBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Default extends DefaultBase { }
</script>
