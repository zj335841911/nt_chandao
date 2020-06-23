<template src="./list-exp-viewlistexpbar-listexpbar.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ListExpViewlistexpbarBase } from './list-exp-viewlistexpbar-listexpbar-base';
import view_listexpbar_list from '@widgets/product/exp-list/exp-list.vue';
 

/**
 * listexpbar部件
 *
 * @export
 * @class ListExpViewlistexpbar
 * @extends {ListExpViewlistexpbarBase}
 */
@Component({
    components: {
        view_listexpbar_list, 
         
    }
})
@VueLifeCycleProcessing()
export default class ListExpViewlistexpbar extends ListExpViewlistexpbarBase { }
</script>
