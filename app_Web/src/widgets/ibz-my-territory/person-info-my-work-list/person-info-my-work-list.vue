<template src="./person-info-my-work-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PersonInfoMyWorkListBase } from './person-info-my-work-list-base';
import layout_list_itempanel from '@widgets/ibz-my-territory/my-work2-panel/my-work2-panel.vue';
 

/**
 * list部件
 *
 * @export
 * @class PersonInfoMyWorkList
 * @extends {PersonInfoMyWorkListBase}
 */
@Component({
    components: {
        layout_list_itempanel,
         
    },
})
@VueLifeCycleProcessing()
export default class PersonInfoMyWorkList extends PersonInfoMyWorkListBase {}
</script>
