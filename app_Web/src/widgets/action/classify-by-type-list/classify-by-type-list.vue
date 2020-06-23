<template src="./classify-by-type-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ClassifyByTypeBase } from './classify-by-type-list-base';
 

/**
 * list部件
 *
 * @export
 * @class ClassifyByType
 * @extends {ClassifyByTypeBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class ClassifyByType extends ClassifyByTypeBase { }
</script>
