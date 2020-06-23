<template src="./resolve-form.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { ResolveBase } from './resolve-form-base';
 

/**
 * form部件
 *
 * @export
 * @class Resolve
 * @extends {ResolveBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Resolve extends ResolveBase { }
</script>
