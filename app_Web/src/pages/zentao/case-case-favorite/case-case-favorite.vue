<template src="./case-case-favorite.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { CaseCaseFavoriteBase } from './case-case-favorite-base';
import view_grid from '@widgets/case/main-grid/main-grid.vue';
import view_searchform from '@widgets/case/default-searchform/default-searchform.vue';

/**
 * case我得收藏视图
 *
 * @export
 * @class CaseCaseFavorite
 * @extends {CaseCaseFavoriteBase}
 */
@Component({
    components: {
        view_grid, 
        view_searchform, 
    }
})
@VueLifeCycleProcessing()
export default class CaseCaseFavorite extends CaseCaseFavoriteBase { }
</script>
