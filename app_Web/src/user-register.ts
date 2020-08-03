import Vue from 'vue';
import { UserDefaultComponent } from './user-default-register';
import { iBizProjectCore } from './ibiz-project-core';
import CombFormItem from './ibiz-project-core/components/comb-form-item/comb-form-item.vue'
import GroupStepTable from './studio-core/components/group-step-table/group-step-table.vue'
import RichTextEditor from './studio-core/components/rich-text-editor/rich-text-editor.vue'
import DropDownListExtend from './studio-core/components/dropdown-list-extend/dropdown-list-extend.vue'

// 注册Vue插件
export const UserComponent = {
    install(v: any, opt: any) {
        Vue.use(UserDefaultComponent);
        Vue.use(iBizProjectCore);
        v.component('comb-form-item',CombFormItem);
        v.component('group-step-table',GroupStepTable);
        v.component('rich-text-editor',RichTextEditor);
        v.component('dropdown-list-extend',DropDownListExtend);
    }
};