<template src="./default-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DEFAULTListBase } from './default-list-base';
 

/**
 * list部件
 *
 * @export
 * @class DEFAULT
 * @extends {DEFAULTListBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class DEFAULTList extends DEFAULTListBase { }
</script>
