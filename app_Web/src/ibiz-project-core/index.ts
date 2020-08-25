import { ActionTimeline } from './components/action-timeline/action-timeline';
import { ActionHistory } from './components/action-history/action-history';
import ActionHistoryDiff from './components/action-history-diff/action-history-diff.vue';
import { ProductList } from './components/product-list/product-list';
import { ProjectList } from './components/project-list/project-list';
import { TestList } from './components/test-list/test-list';
import { RoadMap } from './components/road-map/road-map';
import CodeListIcon from './components/codelist-icon/codelist-icon.vue'; 
import OverProgress from './components/over-progress/over-progress.vue';
import CircleProgress from './components/circle-progress/circle-progress.vue';

// 注册Vue插件
export const iBizProjectCore = {
    install(v: any, opt: any) {
        v.component('action-timeline', ActionTimeline);
        v.component('action-history', ActionHistory);
        v.component('action-history-diff', ActionHistoryDiff);
        v.component('product-list', ProductList);
        v.component('project-list', ProjectList);
        v.component('test-list', TestList);
        v.component('road-map', RoadMap);
        v.component('codelist-icon', CodeListIcon);
        v.component('over-progress', OverProgress);
        v.component('circle-progress', OverProgress);
    }
};