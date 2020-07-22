<template src="./welcome-list.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { WelcomeListBase } from './welcome-list-base';
 

/**
 * list部件
 *
 * @export
 * @class WelcomeList
 * @extends {WelcomeListBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class WelcomeList extends WelcomeListBase { }
</script>
