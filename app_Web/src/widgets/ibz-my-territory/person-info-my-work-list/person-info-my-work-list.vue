<template src="./person-info-my-work-list.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { PersonInfoMyWorkListBase } from './person-info-my-work-list-base';
 

/**
 * list部件
 *
 * @export
 * @class PersonInfoMyWorkList
 * @extends {PersonInfoMyWorkListBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class PersonInfoMyWorkList extends PersonInfoMyWorkListBase {}
</script>
