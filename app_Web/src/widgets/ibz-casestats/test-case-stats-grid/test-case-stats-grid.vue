<template src="./test-case-stats-grid.html" />
<script lang="tsx">
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { TestCaseStatsGridBase } from './test-case-stats-grid-base';
 

/**
 * grid部件
 *
 * @export
 * @class TestCaseStatsGrid
 * @extends {TestCaseStatsGridBase}
 */
@Component({
    components: {
         
    },
})
@VueLifeCycleProcessing()
export default class TestCaseStatsGrid extends TestCaseStatsGridBase {}
</script>
