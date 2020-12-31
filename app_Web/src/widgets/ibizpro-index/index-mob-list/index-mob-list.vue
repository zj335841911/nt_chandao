<template src="./index-mob-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { IndexMobListBase } from './index-mob-list-base';
 

/**
 * list部件
 *
 * @export
 * @class IndexMobList
 * @extends {IndexMobListBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class IndexMobList extends IndexMobListBase {}
</script>
