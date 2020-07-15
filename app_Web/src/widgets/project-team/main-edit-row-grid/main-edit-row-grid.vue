<template src="./main-edit-row-grid.html"/>
<script lang='tsx'>
import { Component } from 'vue-property-decorator';
import { VueLifeCycleProcessing } from '@/studio-core';
import { Main_EditRowGridBase } from './main-edit-row-grid-base';

import ControlService from '@/widgets/control-service';

/**
 * grid部件
 *
 * @export
 * @class Main_EditRowGrid
 * @extends {Main_EditRowGridBase}
 */
@Component({
    components: {
         
    }
})
@VueLifeCycleProcessing()
export default class Main_EditRowGrid extends Main_EditRowGridBase {

    /**
     * 保存行，批量保存
     */
    public async save() {
        if (!await this.validateAll()) {
            this.$Notice.error({ title: (this.$t('app.commonWords.wrong') as string), desc: (this.$t('app.commonWords.rulesException') as string),duration: 3 });
            return [];
        }
        let action = "saveBatch";
        let _context = JSON.parse(JSON.stringify(this.context));
        let result: Array<any> = [];
        for(const item of this.items){
            let _item: any = JSON.parse(JSON.stringify(item));
            if (Object.is(item.rowDataState, 'create')){
                _item.id = null;
            }
            let { data: Data,context: Context } = this.service.handleRequestData(action, _context, _item, true);
            result.push(Data);
        }
        const post: Promise<any> = this.appEntityService.saveBatch(_context, result, true);
        post.then((response:any) =>{
            if (response && response.status === 200) {
                this.$Notice.success({ 
                    title: (this.$t('app.commonWords.saveSuccess') as string),
                    duration: 3
                });
            }
        }).catch((error: any) =>{
            this.$Notice.error({
                title: (this.$t('app.commonWords.sysException') as string),
                duration: 3
            });
            console.error(error);
        })
    }
}
</script>
