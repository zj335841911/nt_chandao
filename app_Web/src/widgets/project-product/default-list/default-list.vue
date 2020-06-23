<template src="./default-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { DEFAULTBase } from './default-list-base';
 

/**
 * list部件
 *
 * @export
 * @class DEFAULT
 * @extends {DEFAULTBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class DEFAULT extends DEFAULTBase { }
</script>
