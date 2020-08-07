import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取全部数组
mock.onGet('./assets/json/data-dictionary.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status, [
        {
        srfkey: 'ProjectQuickpaketMy',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'All',
                label: '我的项目',
                text: '我的项目',
                value: 'All',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Bug__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'active',
                label: '激活',
                text: '激活',
                "color": "rgba(0, 157, 255, 1)",
                value: 'active',
                
                disabled: false,
            },
            {
                id: 'resolved',
                label: '已解决',
                text: '已解决',
                "color": "rgba(1, 217, 19, 1)",
                value: 'resolved',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                "color": "rgba(151, 152, 141, 1)",
                value: 'closed',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Testresult__result',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'n/a',
                label: '忽略',
                text: '忽略',
                value: 'n/a',
                
                disabled: false,
            },
            {
                id: 'pass',
                label: '通过',
                text: '通过',
                value: 'pass',
                
                disabled: false,
            },
            {
                id: 'fail',
                label: '失败',
                text: '失败',
                value: 'fail',
                
                disabled: false,
            },
            {
                id: 'blocked',
                label: '阻塞',
                text: '阻塞',
                value: 'blocked',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Story__closed_reason',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'done',
                label: '已完成',
                text: '已完成',
                value: 'done',
                
                disabled: false,
            },
            {
                id: 'subdivided',
                label: '已细分',
                text: '已细分',
                value: 'subdivided',
                
                disabled: false,
            },
            {
                id: 'duplicate',
                label: '重复',
                text: '重复',
                value: 'duplicate',
                
                disabled: false,
            },
            {
                id: 'postponed',
                label: '延期',
                text: '延期',
                value: 'postponed',
                
                disabled: false,
            },
            {
                id: 'willnotdo',
                label: '不做',
                text: '不做',
                value: 'willnotdo',
                
                disabled: false,
            },
            {
                id: 'cancel',
                label: '已取消',
                text: '已取消',
                value: 'cancel',
                
                disabled: false,
            },
            {
                id: 'bydesign',
                label: '设计如此',
                text: '设计如此',
                value: 'bydesign',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Testsuite__type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'library',
                label: '用例库',
                text: '用例库',
                value: 'library',
                
                disabled: false,
            },
            {
                id: 'private',
                label: '私有',
                text: '私有',
                value: 'private',
                
                disabled: false,
            },
            {
                id: 'public',
                label: '公开',
                text: '公开',
                value: 'public',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "RelatedStory",
        "emptytext": "",
        "codelisttype":"dynamic",
        "appdataentity":"Story",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: 'Testcase__stage',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'unittest',
                label: '单元测试阶段',
                text: '单元测试阶段',
                value: 'unittest',
                
                disabled: false,
            },
            {
                id: 'feature',
                label: '功能测试阶段',
                text: '功能测试阶段',
                value: 'feature',
                
                disabled: false,
            },
            {
                id: 'intergrate',
                label: '集成测试阶段',
                text: '集成测试阶段',
                value: 'intergrate',
                
                disabled: false,
            },
            {
                id: 'system',
                label: '系统测试阶段',
                text: '系统测试阶段',
                value: 'system',
                
                disabled: false,
            },
            {
                id: 'smoke',
                label: '冒烟测试阶段',
                text: '冒烟测试阶段',
                value: 'smoke',
                
                disabled: false,
            },
            {
                id: 'bvt',
                label: '版本验证阶段',
                text: '版本验证阶段',
                value: 'bvt',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Task__color',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '#3da7f5',
                label: '#3da7f5',
                text: '#3da7f5',
                "color": "rgba(61, 167, 245, 1)",
                value: '#3da7f5',
                
                disabled: false,
            },
            {
                id: '#75c941',
                label: '#75c941',
                text: '#75c941',
                "color": "rgba(117, 201, 65, 1)",
                value: '#75c941',
                
                disabled: false,
            },
            {
                id: '#2dbdb2',
                label: '#2dbdb2',
                text: '#2dbdb2',
                "color": "rgba(45, 189, 178, 1)",
                value: '#2dbdb2',
                
                disabled: false,
            },
            {
                id: '#797ec9',
                label: '#797ec9',
                text: '#797ec9',
                "color": "rgba(121, 126, 201, 1)",
                value: '#797ec9',
                
                disabled: false,
            },
            {
                id: '#ffaf38',
                label: '#ffaf38',
                text: '#ffaf38',
                "color": "rgba(255, 175, 56, 1)",
                value: '#ffaf38',
                
                disabled: false,
            },
            {
                id: '#ff4e3e',
                label: '#ff4e3e',
                text: '#ff4e3e',
                "color": "rgba(255, 78, 62, 1)",
                value: '#ff4e3e',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "ProductBranch_Cache",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Branch",
        "appdedataset":"FetchCurProduct",
        "items": []
    },
    {
        srfkey: 'Casestep__type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'step',
                label: '步骤',
                text: '步骤',
                value: 'step',
                
                disabled: false,
            },
            {
                id: 'group',
                label: '分组',
                text: '分组',
                value: 'group',
                
                disabled: false,
            },
            {
                id: 'item',
                label: '分组步骤',
                text: '分组步骤',
                value: 'item',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'BugQuickpacketMy',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'TOME',
                label: '指派给我',
                text: '指派给我',
                value: 'TOME',
                
                disabled: false,
            },
            {
                id: 'ICREATE',
                label: '由我创建',
                text: '由我创建',
                value: 'ICREATE',
                
                disabled: false,
            },
            {
                id: 'BYME',
                label: '由我解决',
                text: '由我解决',
                value: 'BYME',
                
                disabled: false,
            },
            {
                id: 'WAITCLOSED',
                label: '由我关闭',
                text: '由我关闭',
                value: 'WAITCLOSED',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'StoryQuickpacketMy',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'TOME',
                label: '指给我',
                text: '指给我',
                value: 'TOME',
                
                disabled: false,
            },
            {
                id: 'ICREATE',
                label: '由我创建',
                text: '由我创建',
                value: 'ICREATE',
                
                disabled: false,
            },
            {
                id: 'IREVIEW',
                label: '由我评审',
                text: '由我评审',
                value: 'IREVIEW',
                
                disabled: false,
            },
            {
                id: 'ICLOSE',
                label: '由我关闭',
                text: '由我关闭',
                value: 'ICLOSE',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Product__acl',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'open',
                label: '默认设置(有产品视图权限，即可访问)',
                text: '默认设置(有产品视图权限，即可访问)',
                value: 'open',
                
                disabled: false,
            },
            {
                id: 'private',
                label: '私有产品(相关负责人和项目团队成员才能访问)',
                text: '私有产品(相关负责人和项目团队成员才能访问)',
                value: 'private',
                
                disabled: false,
            },
            {
                id: 'custom',
                label: '自定义白名单(团队成员和白名单的成员可以访问)',
                text: '自定义白名单(团队成员和白名单的成员可以访问)',
                value: 'custom',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'BugCodeList2',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'All',
                label: '所有',
                text: '所有',
                value: 'All',
                
                disabled: false,
            },
            {
                id: 'active',
                label: '未解决',
                text: '未解决',
                value: 'active',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Project__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'wait',
                label: '未开始',
                text: '未开始',
                value: 'wait',
                
                disabled: false,
            },
            {
                id: 'doing',
                label: '进行中',
                text: '进行中',
                value: 'doing',
                
                disabled: false,
            },
            {
                id: 'suspended',
                label: '已挂起',
                text: '已挂起',
                value: 'suspended',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                value: 'closed',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "CurProductPlan",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"ProductPlan",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: 'Task_quickpacket',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'All',
                label: '所有',
                text: '所有',
                value: 'All',
                
                disabled: false,
            },
            {
                id: 'UNCLOSED',
                label: '未关闭',
                text: '未关闭',
                value: 'UNCLOSED',
                
                disabled: false,
            },
            {
                id: 'TOME',
                label: '指派给我',
                text: '指派给我',
                value: 'TOME',
                
                disabled: false,
            },
            {
                id: 'MORE',
                label: '更多',
                text: '更多',
                value: 'MORE',
                
                disabled: false,
            },
            {
                id: 'NOTSTARTED',
                label: '未开始',
                text: '未开始',
                value: 'NOTSTARTED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'INPROGRESS',
                label: '进行中',
                text: '进行中',
                value: 'INPROGRESS',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'UNACCOMPLISHED',
                label: '未完成',
                text: '未完成',
                value: 'UNACCOMPLISHED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'IFINISHED',
                label: '我完成',
                text: '我完成',
                value: 'IFINISHED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'COMPLETED',
                label: '已完成',
                text: '已完成',
                value: 'COMPLETED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'CLOSED',
                label: '已关闭',
                text: '已关闭',
                value: 'CLOSED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'CANCELLED',
                label: '已取消',
                text: '已取消',
                value: 'CANCELLED',
                "pvalue": "MORE",
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'ActionManner',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'story_closed_willnotdo',
                label: '不做',
                text: '不做',
                value: 'story_closed_willnotdo',
                
                disabled: false,
            },
            {
                id: 'story_closed_cancel',
                label: '已取消',
                text: '已取消',
                value: 'story_closed_cancel',
                
                disabled: false,
            },
            {
                id: 'story_closed_done',
                label: '已完成',
                text: '已完成',
                value: 'story_closed_done',
                
                disabled: false,
            },
            {
                id: 'story_closed_subdivided',
                label: '已细分',
                text: '已细分',
                value: 'story_closed_subdivided',
                
                disabled: false,
            },
            {
                id: 'story_closed_postponed',
                label: '延期',
                text: '延期',
                value: 'story_closed_postponed',
                
                disabled: false,
            },
            {
                id: 'story_closed_bydesign',
                label: '设计如此',
                text: '设计如此',
                value: 'story_closed_bydesign',
                
                disabled: false,
            },
            {
                id: 'story_closed_duplicate',
                label: '重复',
                text: '重复',
                value: 'story_closed_duplicate',
                
                disabled: false,
            },
            {
                id: 'bug_resolved_willnotfix',
                label: '不予解决',
                text: '不予解决',
                value: 'bug_resolved_willnotfix',
                
                disabled: false,
            },
            {
                id: 'bug_resolved_external',
                label: '外部原因',
                text: '外部原因',
                value: 'bug_resolved_external',
                
                disabled: false,
            },
            {
                id: 'bug_resolved_fixed',
                label: '已解决',
                text: '已解决',
                value: 'bug_resolved_fixed',
                
                disabled: false,
            },
            {
                id: 'bug_resolved_postponed',
                label: '延期处理',
                text: '延期处理',
                value: 'bug_resolved_postponed',
                
                disabled: false,
            },
            {
                id: 'bug_resolved_notrepro',
                label: '无法重现',
                text: '无法重现',
                value: 'bug_resolved_notrepro',
                
                disabled: false,
            },
            {
                id: 'bug_resolved_bydesign',
                label: '设计如此',
                text: '设计如此',
                value: 'bug_resolved_bydesign',
                
                disabled: false,
            },
            {
                id: 'bug_resolved_tostory',
                label: '转为需求',
                text: '转为需求',
                value: 'bug_resolved_tostory',
                
                disabled: false,
            },
            {
                id: 'bug_resolved_duplicate',
                label: '重复Bug',
                text: '重复Bug',
                value: 'bug_resolved_duplicate',
                
                disabled: false,
            },
            {
                id: 'story_reviewed_reject',
                label: '拒绝',
                text: '拒绝',
                value: 'story_reviewed_reject',
                
                disabled: false,
            },
            {
                id: 'story_reviewed_revert',
                label: '撤销变更',
                text: '撤销变更',
                value: 'story_reviewed_revert',
                
                disabled: false,
            },
            {
                id: 'story_reviewed_clarify',
                label: '有待明确',
                text: '有待明确',
                value: 'story_reviewed_clarify',
                
                disabled: false,
            },
            {
                id: 'story_reviewed_pass',
                label: '确认通过',
                text: '确认通过',
                value: 'story_reviewed_pass',
                
                disabled: false,
            },
            {
                id: ' release_changestatus_terminate',
                label: '停止维护',
                text: '停止维护',
                value: ' release_changestatus_terminate',
                
                disabled: false,
            },
            {
                id: ' release_changestatus_normal',
                label: '正常',
                text: '正常',
                value: ' release_changestatus_normal',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "UserRealNameTask",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"User",
        "appdedataset":"FetchProjectTeamUser_Task",
        "items": []
    },
    {
        srfkey: 'Pri',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '一般',
                text: '一般',
                "color": "rgba(25, 65, 152, 1)",
                value: '1',
                
                disabled: false,
            },
            {
                id: '2',
                label: '最高',
                text: '最高',
                "color": "rgba(247, 5, 5, 1)",
                value: '2',
                
                disabled: false,
            },
            {
                id: '3',
                label: '较高',
                text: '较高',
                "color": "rgba(255, 0, 43, 0.68)",
                value: '3',
                
                disabled: false,
            },
            {
                id: '4',
                label: '最低',
                text: '最低',
                "color": "rgba(41, 137, 46, 1)",
                value: '4',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Beginend_disable',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'on',
                label: '暂时不设定时间',
                text: '暂时不设定时间',
                value: 'on',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'CodeList47',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '1号',
                text: '1号',
                value: '1',
                
                disabled: false,
            },
            {
                id: '2',
                label: '2号',
                text: '2号',
                value: '2',
                
                disabled: false,
            },
            {
                id: '3',
                label: '3号',
                text: '3号',
                value: '3',
                
                disabled: false,
            },
            {
                id: '4',
                label: '4号',
                text: '4号',
                value: '4',
                
                disabled: false,
            },
            {
                id: '5',
                label: '5号',
                text: '5号',
                value: '5',
                
                disabled: false,
            },
            {
                id: '6',
                label: '6号',
                text: '6号',
                value: '6',
                
                disabled: false,
            },
            {
                id: '7',
                label: '7号',
                text: '7号',
                value: '7',
                
                disabled: false,
            },
            {
                id: '8',
                label: '8号',
                text: '8号',
                value: '8',
                
                disabled: false,
            },
            {
                id: '9',
                label: '9号',
                text: '9号',
                value: '9',
                
                disabled: false,
            },
            {
                id: '10',
                label: '10号',
                text: '10号',
                value: '10',
                
                disabled: false,
            },
            {
                id: '11',
                label: '11号',
                text: '11号',
                value: '11',
                
                disabled: false,
            },
            {
                id: '12',
                label: '12号',
                text: '12号',
                value: '12',
                
                disabled: false,
            },
            {
                id: '13',
                label: '13号',
                text: '13号',
                value: '13',
                
                disabled: false,
            },
            {
                id: '14',
                label: '14号',
                text: '14号',
                value: '14',
                
                disabled: false,
            },
            {
                id: '15',
                label: '15号',
                text: '15号',
                value: '15',
                
                disabled: false,
            },
            {
                id: '16',
                label: '16号',
                text: '16号',
                value: '16',
                
                disabled: false,
            },
            {
                id: '17',
                label: '17号',
                text: '17号',
                value: '17',
                
                disabled: false,
            },
            {
                id: '18',
                label: '18号',
                text: '18号',
                value: '18',
                
                disabled: false,
            },
            {
                id: '19',
                label: '19号',
                text: '19号',
                value: '19',
                
                disabled: false,
            },
            {
                id: '20',
                label: '20号',
                text: '20号',
                value: '20',
                
                disabled: false,
            },
            {
                id: '21',
                label: '21号',
                text: '21号',
                value: '21',
                
                disabled: false,
            },
            {
                id: '22',
                label: '22号',
                text: '22号',
                value: '22',
                
                disabled: false,
            },
            {
                id: '23',
                label: '23号',
                text: '23号',
                value: '23',
                
                disabled: false,
            },
            {
                id: '24',
                label: '24号',
                text: '24号',
                value: '24',
                
                disabled: false,
            },
            {
                id: '25',
                label: '25号',
                text: '25号',
                value: '25',
                
                disabled: false,
            },
            {
                id: '26',
                label: '26号',
                text: '26号',
                value: '26',
                
                disabled: false,
            },
            {
                id: '27',
                label: '27号',
                text: '27号',
                value: '27',
                
                disabled: false,
            },
            {
                id: '28',
                label: '28号',
                text: '28号',
                value: '28',
                
                disabled: false,
            },
            {
                id: '29',
                label: '29号',
                text: '29号',
                value: '29',
                
                disabled: false,
            },
            {
                id: '30',
                label: '30号',
                text: '30号',
                value: '30',
                
                disabled: false,
            },
            {
                id: '31',
                label: '31号',
                text: '31号',
                value: '31',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'YesNo',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '是',
                text: '是',
                value: '1',
                
                disabled: false,
            },
            {
                id: '0',
                label: '否',
                text: '否',
                value: '0',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Bug__os',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'all',
                label: '全部',
                text: '全部',
                value: 'all',
                
                disabled: false,
            },
            {
                id: 'windows',
                label: 'Windows',
                text: 'Windows',
                value: 'windows',
                
                disabled: false,
            },
            {
                id: 'win10',
                label: 'Windows 10',
                text: 'Windows 10',
                value: 'win10',
                
                disabled: false,
            },
            {
                id: 'win8',
                label: 'Windows 8',
                text: 'Windows 8',
                value: 'win8',
                
                disabled: false,
            },
            {
                id: 'win7',
                label: 'Windows 7',
                text: 'Windows 7',
                value: 'win7',
                
                disabled: false,
            },
            {
                id: 'vista',
                label: 'Windows Vista',
                text: 'Windows Vista',
                value: 'vista',
                
                disabled: false,
            },
            {
                id: 'winxp',
                label: 'Windows XP',
                text: 'Windows XP',
                value: 'winxp',
                
                disabled: false,
            },
            {
                id: 'win2012',
                label: 'Windows 2012',
                text: 'Windows 2012',
                value: 'win2012',
                
                disabled: false,
            },
            {
                id: 'win2008',
                label: 'Windows 2008',
                text: 'Windows 2008',
                value: 'win2008',
                
                disabled: false,
            },
            {
                id: 'win2003',
                label: 'Windows 2003',
                text: 'Windows 2003',
                value: 'win2003',
                
                disabled: false,
            },
            {
                id: 'win2000',
                label: 'Windows 2000',
                text: 'Windows 2000',
                value: 'win2000',
                
                disabled: false,
            },
            {
                id: 'android',
                label: 'Android',
                text: 'Android',
                value: 'android',
                
                disabled: false,
            },
            {
                id: 'ios',
                label: 'IOS',
                text: 'IOS',
                value: 'ios',
                
                disabled: false,
            },
            {
                id: 'wp8',
                label: 'WP8',
                text: 'WP8',
                value: 'wp8',
                
                disabled: false,
            },
            {
                id: 'wp7',
                label: 'WP7',
                text: 'WP7',
                value: 'wp7',
                
                disabled: false,
            },
            {
                id: 'symbian',
                label: 'Symbian',
                text: 'Symbian',
                value: 'symbian',
                
                disabled: false,
            },
            {
                id: 'linux',
                label: 'Linux',
                text: 'Linux',
                value: 'linux',
                
                disabled: false,
            },
            {
                id: 'freebsd',
                label: 'FreeBSD',
                text: 'FreeBSD',
                value: 'freebsd',
                
                disabled: false,
            },
            {
                id: 'osx',
                label: 'OS X',
                text: 'OS X',
                value: 'osx',
                
                disabled: false,
            },
            {
                id: 'unix',
                label: 'Unix',
                text: 'Unix',
                value: 'unix',
                
                disabled: false,
            },
            {
                id: 'others',
                label: '其他',
                text: '其他',
                value: 'others',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "UserRealName",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"User",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        "srfkey": "ProductBranch",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Branch",
        "appdedataset":"FetchCurProduct",
        "items": []
    },
    {
        srfkey: 'TypeAll',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'custom',
                label: '自定义',
                text: '自定义',
                value: 'custom',
                
                disabled: false,
            },
            {
                id: 'bug',
                label: 'Bug',
                text: 'Bug',
                value: 'bug',
                
                disabled: false,
            },
            {
                id: 'task',
                label: '项目任务',
                text: '项目任务',
                value: 'task',
                
                disabled: false,
            },
            {
                id: 'story',
                label: '项目需求',
                text: '项目需求',
                value: 'story',
                
                disabled: false,
            },
            {
                id: 'cycle',
                label: '周期',
                text: '周期',
                value: 'cycle',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "CurProductBuild",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Build",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: 'Product__type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'normal',
                label: '正常',
                text: '正常',
                "color": "blue",
                value: 'normal',
                
                disabled: false,
            },
            {
                id: 'branch',
                label: '多分支',
                text: '多分支',
                value: 'branch',
                
                disabled: false,
            },
            {
                id: 'platform',
                label: '多平台',
                text: '多平台',
                value: 'platform',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Bug__severity',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '1',
                text: '1',
                value: 1,
                
                disabled: false,
            },
            {
                id: '2',
                label: '2',
                text: '2',
                value: 2,
                
                disabled: false,
            },
            {
                id: '3',
                label: '3',
                text: '3',
                value: 3,
                
                disabled: false,
            },
            {
                id: '4',
                label: '4',
                text: '4',
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Bug__browser',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'all',
                label: '全部',
                text: '全部',
                value: 'all',
                
                disabled: false,
            },
            {
                id: 'ie',
                label: 'IE系列',
                text: 'IE系列',
                value: 'ie',
                
                disabled: false,
            },
            {
                id: 'ie11',
                label: 'IE11',
                text: 'IE11',
                value: 'ie11',
                
                disabled: false,
            },
            {
                id: 'ie10',
                label: 'IE10',
                text: 'IE10',
                value: 'ie10',
                
                disabled: false,
            },
            {
                id: 'ie9',
                label: 'IE9',
                text: 'IE9',
                value: 'ie9',
                
                disabled: false,
            },
            {
                id: 'ie8',
                label: 'IE8',
                text: 'IE8',
                value: 'ie8',
                
                disabled: false,
            },
            {
                id: 'ie7',
                label: 'IE7',
                text: 'IE7',
                value: 'ie7',
                
                disabled: false,
            },
            {
                id: 'ie6',
                label: 'IE6',
                text: 'IE6',
                value: 'ie6',
                
                disabled: false,
            },
            {
                id: 'chrome',
                label: 'chrome',
                text: 'chrome',
                value: 'chrome',
                
                disabled: false,
            },
            {
                id: 'firefox',
                label: 'firefox系列',
                text: 'firefox系列',
                value: 'firefox',
                
                disabled: false,
            },
            {
                id: 'firefox4',
                label: 'firefox4',
                text: 'firefox4',
                value: 'firefox4',
                
                disabled: false,
            },
            {
                id: 'firefox3',
                label: 'firefox3',
                text: 'firefox3',
                value: 'firefox3',
                
                disabled: false,
            },
            {
                id: 'firefox2',
                label: 'firefox2',
                text: 'firefox2',
                value: 'firefox2',
                
                disabled: false,
            },
            {
                id: 'opera',
                label: 'opera系列',
                text: 'opera系列',
                value: 'opera',
                
                disabled: false,
            },
            {
                id: 'opera11',
                label: 'opera11',
                text: 'opera11',
                value: 'opera11',
                
                disabled: false,
            },
            {
                id: 'oprea10',
                label: 'oprea10',
                text: 'oprea10',
                value: 'oprea10',
                
                disabled: false,
            },
            {
                id: 'opera9',
                label: 'opera9',
                text: 'opera9',
                value: 'opera9',
                
                disabled: false,
            },
            {
                id: 'safari',
                label: 'safari',
                text: 'safari',
                value: 'safari',
                
                disabled: false,
            },
            {
                id: 'maxthon',
                label: '傲游',
                text: '傲游',
                value: 'maxthon',
                
                disabled: false,
            },
            {
                id: 'uc',
                label: 'UC',
                text: 'UC',
                value: 'uc',
                
                disabled: false,
            },
            {
                id: 'others',
                label: '其他',
                text: '其他',
                value: 'others',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Todo__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'wait',
                label: '未开始',
                text: '未开始',
                value: 'wait',
                
                disabled: false,
            },
            {
                id: 'doing',
                label: '进行中',
                text: '进行中',
                "color": "rgba(245, 18, 18, 1)",
                value: 'doing',
                
                disabled: false,
            },
            {
                id: 'done',
                label: '已完成',
                text: '已完成',
                "color": "rgba(4, 251, 17, 1)",
                value: 'done',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                value: 'closed',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Project__type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'sprint',
                label: '短期项目',
                text: '短期项目',
                value: 'sprint',
                
                disabled: false,
            },
            {
                id: 'waterfall',
                label: '长期项目',
                text: '长期项目',
                value: 'waterfall',
                
                disabled: false,
            },
            {
                id: 'ops',
                label: '运维项目',
                text: '运维项目',
                value: 'ops',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Story__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'draft',
                label: '草稿',
                text: '草稿',
                "color": "rgba(185, 111, 241, 1)",
                value: 'draft',
                
                disabled: false,
            },
            {
                id: 'active',
                label: '激活',
                text: '激活',
                value: 'active',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                "color": "rgba(203, 198, 198, 0.84)",
                value: 'closed',
                
                disabled: false,
            },
            {
                id: 'changed',
                label: '已变更',
                text: '已变更',
                "color": "rgba(217, 68, 68, 1)",
                value: 'changed',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Action__read',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '0',
                label: '0',
                text: '0',
                value: '0',
                
                disabled: false,
            },
            {
                id: '1',
                label: '1',
                text: '1',
                value: '1',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Module__type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'line',
                label: '产品线',
                text: '产品线',
                value: 'line',
                
                disabled: false,
            },
            {
                id: 'story',
                label: '需求',
                text: '需求',
                value: 'story',
                
                disabled: false,
            },
            {
                id: 'task',
                label: '任务',
                text: '任务',
                value: 'task',
                
                disabled: false,
            },
            {
                id: 'doc',
                label: '文档目录',
                text: '文档目录',
                value: 'doc',
                
                disabled: false,
            },
            {
                id: 'case',
                label: '测试用例',
                text: '测试用例',
                value: 'case',
                
                disabled: false,
            },
            {
                id: 'bug',
                label: 'Bug',
                text: 'Bug',
                value: 'bug',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Task__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'wait',
                label: '未开始',
                text: '未开始',
                "color": "rgba(131, 138, 157, 1)",
                value: 'wait',
                
                disabled: false,
            },
            {
                id: 'doing',
                label: '进行中',
                text: '进行中',
                "color": "rgba(255, 93, 93, 1)",
                value: 'doing',
                
                disabled: false,
            },
            {
                id: 'done',
                label: '已完成',
                text: '已完成',
                "color": "rgba(67, 160, 71, 1)",
                value: 'done',
                
                disabled: false,
            },
            {
                id: 'pause',
                label: '已暂停',
                text: '已暂停',
                "color": "rgba(255, 152, 0, 1)",
                value: 'pause',
                
                disabled: false,
            },
            {
                id: 'cancel',
                label: '已取消',
                text: '已取消',
                "color": "rgba(131, 138, 157, 1)",
                value: 'cancel',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                "color": "rgba(131, 138, 157, 1)",
                value: 'closed',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Story__review_result',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'pass',
                label: '确认通过',
                text: '确认通过',
                value: 'pass',
                
                disabled: false,
            },
            {
                id: 'revert',
                label: '撤销变更',
                text: '撤销变更',
                value: 'revert',
                
                disabled: false,
            },
            {
                id: 'clarify',
                label: '有待明确',
                text: '有待明确',
                "color": "rgba(49, 27, 146, 1)",
                value: 'clarify',
                
                disabled: false,
            },
            {
                id: 'reject',
                label: '拒绝',
                text: '拒绝',
                value: 'reject',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'CaseQuickpacketMy',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'TOME',
                label: '给我的用例',
                text: '给我的用例',
                value: 'TOME',
                
                disabled: false,
            },
            {
                id: 'ICREATE',
                label: '我建的用例',
                text: '我建的用例',
                value: 'ICREATE',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'YesNo2',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '是',
                text: '是',
                value: 1,
                
                disabled: false,
            },
            {
                id: '0',
                label: '否',
                text: '否',
                value: 0,
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "BugModule",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Module",
        "appdedataset":"FetchBugModule",
        "items": []
    },
    {
        srfkey: 'CaseQuickpachet',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'ALL',
                label: '所有',
                text: '所有',
                value: 'ALL',
                
                disabled: false,
            },
            {
                id: 'TOME',
                label: '需求变动',
                text: '需求变动',
                value: 'TOME',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'CodeList46',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '2',
                label: '星期一',
                text: '星期一',
                value: '2',
                
                disabled: false,
            },
            {
                id: '3',
                label: '星期二',
                text: '星期二',
                value: '3',
                
                disabled: false,
            },
            {
                id: '4',
                label: '星期三',
                text: '星期三',
                value: '4',
                
                disabled: false,
            },
            {
                id: '5',
                label: '星期四',
                text: '星期四',
                value: '5',
                
                disabled: false,
            },
            {
                id: '6',
                label: '星期五',
                text: '星期五',
                value: '6',
                
                disabled: false,
            },
            {
                id: '7',
                label: '星期六',
                text: '星期六',
                value: '7',
                
                disabled: false,
            },
            {
                id: '1',
                label: '星期日',
                text: '星期日',
                value: '1',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "Role",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Group",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        "srfkey": "TestTask",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"TestTask",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: 'Date_disable',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'on',
                label: '待定',
                text: '待定',
                value: 'on',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Product__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'normal',
                label: '正常',
                text: '正常',
                "color": "rgba(13, 255, 0, 1)",
                value: 'normal',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '结束',
                text: '结束',
                value: 'closed',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Task__type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'design',
                label: '设计',
                text: '设计',
                value: 'design',
                
                disabled: false,
            },
            {
                id: 'devel',
                label: '开发',
                text: '开发',
                value: 'devel',
                
                disabled: false,
            },
            {
                id: 'test',
                label: '测试',
                text: '测试',
                value: 'test',
                
                disabled: false,
            },
            {
                id: 'study',
                label: '研究',
                text: '研究',
                value: 'study',
                
                disabled: false,
            },
            {
                id: 'discuss',
                label: '讨论',
                text: '讨论',
                value: 'discuss',
                
                disabled: false,
            },
            {
                id: 'ui',
                label: '界面',
                text: '界面',
                value: 'ui',
                
                disabled: false,
            },
            {
                id: 'affair',
                label: '事务',
                text: '事务',
                value: 'affair',
                
                disabled: false,
            },
            {
                id: 'misc',
                label: '其他',
                text: '其他',
                value: 'misc',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Testtask__pri',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '1',
                text: '1',
                value: 1,
                
                disabled: false,
            },
            {
                id: '2',
                label: '2',
                text: '2',
                value: 2,
                
                disabled: false,
            },
            {
                id: '3',
                label: '3',
                text: '3',
                value: 3,
                
                disabled: false,
            },
            {
                id: '4',
                label: '4',
                text: '4',
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Story__pri',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '1',
                text: '1',
                "color": "rgba(230, 43, 43, 1)",
                value: 1,
                
                disabled: false,
            },
            {
                id: '2',
                label: '2',
                text: '2',
                "color": "rgba(225, 228, 33, 1)",
                value: 2,
                
                disabled: false,
            },
            {
                id: '3',
                label: '3',
                text: '3',
                "color": "rgba(49, 27, 146, 1)",
                value: 3,
                
                disabled: false,
            },
            {
                id: '4',
                label: '4',
                text: '4',
                "color": "rgba(80, 133, 63, 1)",
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "ProjectProductPlan",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"ProductPlan",
        "appdedataset":"FetchProjectPlan",
        "items": []
    },
    {
        srfkey: 'TestQuickpacket',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'ALL',
                label: '全部',
                text: '全部',
                value: 'ALL',
                
                disabled: false,
            },
            {
                id: 'ICREATE',
                label: '待测测试单',
                text: '待测测试单',
                value: 'ICREATE',
                
                disabled: false,
            },
            {
                id: 'IREVIEW',
                label: '测试中测试单',
                text: '测试中测试单',
                value: 'IREVIEW',
                
                disabled: false,
            },
            {
                id: 'ICLOSE',
                label: '被阻塞测试单',
                text: '被阻塞测试单',
                value: 'ICLOSE',
                
                disabled: false,
            },
            {
                id: 'Tested',
                label: '已测测试单',
                text: '已测测试单',
                value: 'Tested',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "BugUserRealName",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"User",
        "appdedataset":"FetchBugUser",
        "items": []
    },
    {
        srfkey: 'Project__acl',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'open',
                label: '默认设置(有项目视图权限，即可访问)',
                text: '默认设置(有项目视图权限，即可访问)',
                value: 'open',
                
                disabled: false,
            },
            {
                id: 'private',
                label: '私有项目(只有项目团队成员才能访问)',
                text: '私有项目(只有项目团队成员才能访问)',
                value: 'private',
                
                disabled: false,
            },
            {
                id: 'custom',
                label: '自定义白名单(团队成员和白名单的成员可以访问)',
                text: '自定义白名单(团队成员和白名单的成员可以访问)',
                value: 'custom',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'BeginendDropList',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '0600',
                label: '06:00',
                text: '06:00',
                value: '0600',
                
                disabled: false,
            },
            {
                id: '0610',
                label: '06:10',
                text: '06:10',
                value: '0610',
                
                disabled: false,
            },
            {
                id: '0620',
                label: '06:20',
                text: '06:20',
                value: '0620',
                
                disabled: false,
            },
            {
                id: '0630',
                label: '06:30',
                text: '06:30',
                value: '0630',
                
                disabled: false,
            },
            {
                id: '0640',
                label: '06:40',
                text: '06:40',
                value: '0640',
                
                disabled: false,
            },
            {
                id: '0650',
                label: '06:50',
                text: '06:50',
                value: '0650',
                
                disabled: false,
            },
            {
                id: '0700',
                label: '07:00',
                text: '07:00',
                value: '0700',
                
                disabled: false,
            },
            {
                id: '0710',
                label: '07:10',
                text: '07:10',
                value: '0710',
                
                disabled: false,
            },
            {
                id: '0720',
                label: '07:20',
                text: '07:20',
                value: '0720',
                
                disabled: false,
            },
            {
                id: '0730',
                label: '07:30',
                text: '07:30',
                value: '0730',
                
                disabled: false,
            },
            {
                id: '0740',
                label: '07:40',
                text: '07:40',
                value: '0740',
                
                disabled: false,
            },
            {
                id: '0750',
                label: '07:50',
                text: '07:50',
                value: '0750',
                
                disabled: false,
            },
            {
                id: '0800',
                label: '08:00',
                text: '08:00',
                value: '0800',
                
                disabled: false,
            },
            {
                id: '0810',
                label: '08:10',
                text: '08:10',
                value: '0810',
                
                disabled: false,
            },
            {
                id: '0820',
                label: '08:20',
                text: '08:20',
                value: '0820',
                
                disabled: false,
            },
            {
                id: '0830',
                label: '08:30',
                text: '08:30',
                value: '0830',
                
                disabled: false,
            },
            {
                id: '0840',
                label: '08:40',
                text: '08:40',
                value: '0840',
                
                disabled: false,
            },
            {
                id: '0850',
                label: '08:50',
                text: '08:50',
                value: '0850',
                
                disabled: false,
            },
            {
                id: '0900',
                label: '09:00',
                text: '09:00',
                value: '0900',
                
                disabled: false,
            },
            {
                id: '0910',
                label: '09:10',
                text: '09:10',
                value: '0910',
                
                disabled: false,
            },
            {
                id: '0920',
                label: '09:20',
                text: '09:20',
                value: '0920',
                
                disabled: false,
            },
            {
                id: '0930',
                label: '09:30',
                text: '09:30',
                value: '0930',
                
                disabled: false,
            },
            {
                id: '0940',
                label: '09:40',
                text: '09:40',
                value: '0940',
                
                disabled: false,
            },
            {
                id: '0950',
                label: '09:50',
                text: '09:50',
                value: '0950',
                
                disabled: false,
            },
            {
                id: '1000',
                label: '10:00',
                text: '10:00',
                value: '1000',
                
                disabled: false,
            },
            {
                id: '1010',
                label: '10:10',
                text: '10:10',
                value: '1010',
                
                disabled: false,
            },
            {
                id: '1020',
                label: '10:20',
                text: '10:20',
                value: '1020',
                
                disabled: false,
            },
            {
                id: '1030',
                label: '10:30',
                text: '10:30',
                value: '1030',
                
                disabled: false,
            },
            {
                id: '1040',
                label: '10:40',
                text: '10:40',
                value: '1040',
                
                disabled: false,
            },
            {
                id: '1050',
                label: '10:50',
                text: '10:50',
                value: '1050',
                
                disabled: false,
            },
            {
                id: '1100',
                label: '11:00',
                text: '11:00',
                value: '1100',
                
                disabled: false,
            },
            {
                id: '1110',
                label: '11:10',
                text: '11:10',
                value: '1110',
                
                disabled: false,
            },
            {
                id: '1120',
                label: '11:20',
                text: '11:20',
                value: '1120',
                
                disabled: false,
            },
            {
                id: '1130',
                label: '11:30',
                text: '11:30',
                value: '1130',
                
                disabled: false,
            },
            {
                id: '1140',
                label: '11:40',
                text: '11:40',
                value: '1140',
                
                disabled: false,
            },
            {
                id: '1150',
                label: '11:50',
                text: '11:50',
                value: '1150',
                
                disabled: false,
            },
            {
                id: '1200',
                label: '12:00',
                text: '12:00',
                value: '1200',
                
                disabled: false,
            },
            {
                id: '1210',
                label: '12:10',
                text: '12:10',
                value: '1210',
                
                disabled: false,
            },
            {
                id: '1220',
                label: '12:20',
                text: '12:20',
                value: '1220',
                
                disabled: false,
            },
            {
                id: '1230',
                label: '12:30',
                text: '12:30',
                value: '1230',
                
                disabled: false,
            },
            {
                id: '1240',
                label: '12:40',
                text: '12:40',
                value: '1240',
                
                disabled: false,
            },
            {
                id: '1250',
                label: '12:50',
                text: '12:50',
                value: '1250',
                
                disabled: false,
            },
            {
                id: '1300',
                label: '13:00',
                text: '13:00',
                value: '1300',
                
                disabled: false,
            },
            {
                id: '1310',
                label: '13:10',
                text: '13:10',
                value: '1310',
                
                disabled: false,
            },
            {
                id: '1320',
                label: '13:20',
                text: '13:20',
                value: '1320',
                
                disabled: false,
            },
            {
                id: '1330',
                label: '13:30',
                text: '13:30',
                value: '1330',
                
                disabled: false,
            },
            {
                id: '1340',
                label: '13:40',
                text: '13:40',
                value: '1340',
                
                disabled: false,
            },
            {
                id: '1350',
                label: '13:50',
                text: '13:50',
                value: '1350',
                
                disabled: false,
            },
            {
                id: '1400',
                label: '14:00',
                text: '14:00',
                value: '1400',
                
                disabled: false,
            },
            {
                id: '1410',
                label: '14:10',
                text: '14:10',
                value: '1410',
                
                disabled: false,
            },
            {
                id: '1420',
                label: '14:20',
                text: '14:20',
                value: '1420',
                
                disabled: false,
            },
            {
                id: '1430',
                label: '14:30',
                text: '14:30',
                value: '1430',
                
                disabled: false,
            },
            {
                id: '1440',
                label: '14:40',
                text: '14:40',
                value: '1440',
                
                disabled: false,
            },
            {
                id: '1450',
                label: '14:50',
                text: '14:50',
                value: '1450',
                
                disabled: false,
            },
            {
                id: '1500',
                label: '15:00',
                text: '15:00',
                value: '1500',
                
                disabled: false,
            },
            {
                id: '1510',
                label: '15:10',
                text: '15:10',
                value: '1510',
                
                disabled: false,
            },
            {
                id: '1520',
                label: '15:20',
                text: '15:20',
                value: '1520',
                
                disabled: false,
            },
            {
                id: '1530',
                label: '15:30',
                text: '15:30',
                value: '1530',
                
                disabled: false,
            },
            {
                id: '1540',
                label: '15:40',
                text: '15:40',
                value: '1540',
                
                disabled: false,
            },
            {
                id: '1550',
                label: '15:50',
                text: '15:50',
                value: '1550',
                
                disabled: false,
            },
            {
                id: '1600',
                label: '16:00',
                text: '16:00',
                value: '1600',
                
                disabled: false,
            },
            {
                id: '1610',
                label: '16:10',
                text: '16:10',
                value: '1610',
                
                disabled: false,
            },
            {
                id: '1620',
                label: '16:20',
                text: '16:20',
                value: '1620',
                
                disabled: false,
            },
            {
                id: '1630',
                label: '16:30',
                text: '16:30',
                value: '1630',
                
                disabled: false,
            },
            {
                id: '1640',
                label: '16:40',
                text: '16:40',
                value: '1640',
                
                disabled: false,
            },
            {
                id: '1650',
                label: '16:50',
                text: '16:50',
                value: '1650',
                
                disabled: false,
            },
            {
                id: '1700',
                label: '17:00',
                text: '17:00',
                value: '1700',
                
                disabled: false,
            },
            {
                id: '1710',
                label: '17:10',
                text: '17:10',
                value: '1710',
                
                disabled: false,
            },
            {
                id: '1720',
                label: '17:20',
                text: '17:20',
                value: '1720',
                
                disabled: false,
            },
            {
                id: '1730',
                label: '17:30',
                text: '17:30',
                value: '1730',
                
                disabled: false,
            },
            {
                id: '1740',
                label: '17:40',
                text: '17:40',
                value: '1740',
                
                disabled: false,
            },
            {
                id: '1750',
                label: '17:50',
                text: '17:50',
                value: '1750',
                
                disabled: false,
            },
            {
                id: '1800',
                label: '18:00',
                text: '18:00',
                value: '1800',
                
                disabled: false,
            },
            {
                id: '1810',
                label: '18:10',
                text: '18:10',
                value: '1810',
                
                disabled: false,
            },
            {
                id: '1820',
                label: '18:20',
                text: '18:20',
                value: '1820',
                
                disabled: false,
            },
            {
                id: '1830',
                label: '18:30',
                text: '18:30',
                value: '1830',
                
                disabled: false,
            },
            {
                id: '1840',
                label: '18:40',
                text: '18:40',
                value: '1840',
                
                disabled: false,
            },
            {
                id: '1850',
                label: '18:50',
                text: '18:50',
                value: '1850',
                
                disabled: false,
            },
            {
                id: '1900',
                label: '19:00',
                text: '19:00',
                value: '1900',
                
                disabled: false,
            },
            {
                id: '1910',
                label: '19:10',
                text: '19:10',
                value: '1910',
                
                disabled: false,
            },
            {
                id: '1920',
                label: '19:20',
                text: '19:20',
                value: '1920',
                
                disabled: false,
            },
            {
                id: '1930',
                label: '19:30',
                text: '19:30',
                value: '1930',
                
                disabled: false,
            },
            {
                id: '1940',
                label: '19:40',
                text: '19:40',
                value: '1940',
                
                disabled: false,
            },
            {
                id: '1950',
                label: '19:50',
                text: '19:50',
                value: '1950',
                
                disabled: false,
            },
            {
                id: '2000',
                label: '20:00',
                text: '20:00',
                value: '2000',
                
                disabled: false,
            },
            {
                id: '2010',
                label: '20:10',
                text: '20:10',
                value: '2010',
                
                disabled: false,
            },
            {
                id: '2020',
                label: '20:20',
                text: '20:20',
                value: '2020',
                
                disabled: false,
            },
            {
                id: '2030',
                label: '20:30',
                text: '20:30',
                value: '2030',
                
                disabled: false,
            },
            {
                id: '2040',
                label: '20:40',
                text: '20:40',
                value: '2040',
                
                disabled: false,
            },
            {
                id: '2050',
                label: '20:50',
                text: '20:50',
                value: '2050',
                
                disabled: false,
            },
            {
                id: '2100',
                label: '21:00',
                text: '21:00',
                value: '2100',
                
                disabled: false,
            },
            {
                id: '2110',
                label: '21:10',
                text: '21:10',
                value: '2110',
                
                disabled: false,
            },
            {
                id: '2120',
                label: '21:20',
                text: '21:20',
                value: '2120',
                
                disabled: false,
            },
            {
                id: '2130',
                label: '21:30',
                text: '21:30',
                value: '2130',
                
                disabled: false,
            },
            {
                id: '2140',
                label: '21:40',
                text: '21:40',
                value: '2140',
                
                disabled: false,
            },
            {
                id: '2150',
                label: '21:50',
                text: '21:50',
                value: '2150',
                
                disabled: false,
            },
            {
                id: '2200',
                label: '22:00',
                text: '22:00',
                value: '2200',
                
                disabled: false,
            },
            {
                id: '2210',
                label: '22:10',
                text: '22:10',
                value: '2210',
                
                disabled: false,
            },
            {
                id: '2220',
                label: '22:20',
                text: '22:20',
                value: '2220',
                
                disabled: false,
            },
            {
                id: '2230',
                label: '22:30',
                text: '22:30',
                value: '2230',
                
                disabled: false,
            },
            {
                id: '2240',
                label: '22:40',
                text: '22:40',
                value: '2240',
                
                disabled: false,
            },
            {
                id: '2250',
                label: '22:50',
                text: '22:50',
                value: '2250',
                
                disabled: false,
            },
            {
                id: '2300',
                label: '23:00',
                text: '23:00',
                value: '2300',
                
                disabled: false,
            },
            {
                id: '2310',
                label: '23:10',
                text: '23:10',
                value: '2310',
                
                disabled: false,
            },
            {
                id: '2320',
                label: '23:20',
                text: '23:20',
                value: '2320',
                
                disabled: false,
            },
            {
                id: '2330',
                label: '23:30',
                text: '23:30',
                value: '2330',
                
                disabled: false,
            },
            {
                id: '2340',
                label: '23:40',
                text: '23:40',
                value: '2340',
                
                disabled: false,
            },
            {
                id: '2350',
                label: '23:50',
                text: '23:50',
                value: '2350',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Bug__type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'codeerror',
                label: '代码错误',
                text: '代码错误',
                value: 'codeerror',
                
                disabled: false,
            },
            {
                id: 'config',
                label: '配置相关',
                text: '配置相关',
                value: 'config',
                
                disabled: false,
            },
            {
                id: 'install',
                label: '安装部署',
                text: '安装部署',
                value: 'install',
                
                disabled: false,
            },
            {
                id: 'security',
                label: '安全相关',
                text: '安全相关',
                value: 'security',
                
                disabled: false,
            },
            {
                id: 'performance',
                label: '性能问题',
                text: '性能问题',
                value: 'performance',
                
                disabled: false,
            },
            {
                id: 'standard',
                label: '标准规范',
                text: '标准规范',
                value: 'standard',
                
                disabled: false,
            },
            {
                id: 'automation',
                label: '测试脚本',
                text: '测试脚本',
                value: 'automation',
                
                disabled: false,
            },
            {
                id: 'designdefect',
                label: '设计缺陷',
                text: '设计缺陷',
                value: 'designdefect',
                
                disabled: false,
            },
            {
                id: 'others',
                label: '其他',
                text: '其他',
                value: 'others',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Team__type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'project',
                label: '项目团队',
                text: '项目团队',
                value: 'project',
                
                disabled: false,
            },
            {
                id: 'task',
                label: '任务团队',
                text: '任务团队',
                value: 'task',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "Product",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"Product",
        "appdedataset":"FetchDefault",
        "items": []
    },
    {
        srfkey: 'Zt__delta',
        emptytext: '按时间段',
        "codelisttype":"static",
        items: [
            {
                id: '7',
                label: '一星期',
                text: '一星期',
                value: '7',
                
                disabled: false,
            },
            {
                id: '14',
                label: '两星期',
                text: '两星期',
                value: '14',
                
                disabled: false,
            },
            {
                id: '31',
                label: '一个月',
                text: '一个月',
                value: '31',
                
                disabled: false,
            },
            {
                id: '62',
                label: '两个月',
                text: '两个月',
                value: '62',
                
                disabled: false,
            },
            {
                id: '93',
                label: '三个月',
                text: '三个月',
                value: '93',
                
                disabled: false,
            },
            {
                id: '186',
                label: '半年',
                text: '半年',
                value: '186',
                
                disabled: false,
            },
            {
                id: '365',
                label: '一年',
                text: '一年',
                value: '365',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'TestCaseStatusGrid',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'wait',
                label: '未开始',
                text: '未开始',
                value: 'wait',
                
                disabled: false,
            },
            {
                id: 'normal',
                label: '正常',
                text: '正常',
                "color": "rgba(84, 238, 19, 1)",
                value: 'normal',
                
                disabled: false,
            },
            {
                id: 'blocked',
                label: '被阻塞',
                text: '被阻塞',
                "color": "rgba(230, 242, 3, 0.97)",
                value: 'blocked',
                
                disabled: false,
            },
            {
                id: 'investigate',
                label: '研究中',
                text: '研究中',
                "color": "rgba(245, 12, 12, 1)",
                value: 'investigate',
                
                disabled: false,
            },
            {
                id: 'done',
                label: '已完成',
                text: '已完成',
                value: 'done',
                
                disabled: false,
            },
            {
                id: 'storychange',
                label: '需求变更',
                text: '需求变更',
                "color": "rgba(254, 8, 8, 1)",
                value: 'storychange',
                
                disabled: false,
            },
            {
                id: 'casechange',
                label: '原用例更新',
                text: '原用例更新',
                "color": "rgba(247, 31, 7, 1)",
                value: 'casechange',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Cycle_enable',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '周期',
                text: '周期',
                value: '1',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Action__type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'created',
                label: '创建',
                text: '创建',
                value: 'created',
                
                disabled: false,
            },
            {
                id: 'opened',
                label: '创建',
                text: '创建',
                value: 'opened',
                
                disabled: false,
            },
            {
                id: 'changed',
                label: '变更了',
                text: '变更了',
                value: 'changed',
                
                disabled: false,
            },
            {
                id: 'edited',
                label: '编辑了',
                text: '编辑了',
                value: 'edited',
                
                disabled: false,
            },
            {
                id: 'assigned',
                label: '指派了',
                text: '指派了',
                value: 'assigned',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '关闭了',
                text: '关闭了',
                value: 'closed',
                
                disabled: false,
            },
            {
                id: 'deleted',
                label: '删除了',
                text: '删除了',
                value: 'deleted',
                
                disabled: false,
            },
            {
                id: 'deletedfile',
                label: '删除附件',
                text: '删除附件',
                value: 'deletedfile',
                
                disabled: false,
            },
            {
                id: 'editfile',
                label: '编辑附件',
                text: '编辑附件',
                value: 'editfile',
                
                disabled: false,
            },
            {
                id: 'erased',
                label: '删除了',
                text: '删除了',
                value: 'erased',
                
                disabled: false,
            },
            {
                id: 'undeleted',
                label: '还原了',
                text: '还原了',
                value: 'undeleted',
                
                disabled: false,
            },
            {
                id: 'hidden',
                label: '隐藏了',
                text: '隐藏了',
                value: 'hidden',
                
                disabled: false,
            },
            {
                id: 'commented',
                label: '评论了',
                text: '评论了',
                value: 'commented',
                
                disabled: false,
            },
            {
                id: 'activated',
                label: '激活了',
                text: '激活了',
                value: 'activated',
                
                disabled: false,
            },
            {
                id: 'blocked',
                label: '阻塞了',
                text: '阻塞了',
                value: 'blocked',
                
                disabled: false,
            },
            {
                id: 'resolved',
                label: '解决了',
                text: '解决了',
                value: 'resolved',
                
                disabled: false,
            },
            {
                id: 'reviewed',
                label: '评审了',
                text: '评审了',
                value: 'reviewed',
                
                disabled: false,
            },
            {
                id: 'moved',
                label: '移动了',
                text: '移动了',
                value: 'moved',
                
                disabled: false,
            },
            {
                id: 'confirmed',
                label: '确认了需求',
                text: '确认了需求',
                value: 'confirmed',
                
                disabled: false,
            },
            {
                id: 'bugconfirmed',
                label: '确认了',
                text: '确认了',
                value: 'bugconfirmed',
                
                disabled: false,
            },
            {
                id: 'tostory',
                label: '转需求',
                text: '转需求',
                value: 'tostory',
                
                disabled: false,
            },
            {
                id: 'frombug',
                label: '转需求',
                text: '转需求',
                value: 'frombug',
                
                disabled: false,
            },
            {
                id: 'fromlib',
                label: '从用例库导入',
                text: '从用例库导入',
                value: 'fromlib',
                
                disabled: false,
            },
            {
                id: 'totask',
                label: '转任务',
                text: '转任务',
                value: 'totask',
                
                disabled: false,
            },
            {
                id: 'svncommited',
                label: '提交代码',
                text: '提交代码',
                value: 'svncommited',
                
                disabled: false,
            },
            {
                id: 'gitcommited',
                label: '提交代码',
                text: '提交代码',
                value: 'gitcommited',
                
                disabled: false,
            },
            {
                id: 'linked2plan',
                label: '关联计划',
                text: '关联计划',
                value: 'linked2plan',
                
                disabled: false,
            },
            {
                id: 'unlinkedfromplan',
                label: '移除计划',
                text: '移除计划',
                value: 'unlinkedfromplan',
                
                disabled: false,
            },
            {
                id: 'changestatus',
                label: '修改状态',
                text: '修改状态',
                value: 'changestatus',
                
                disabled: false,
            },
            {
                id: 'marked',
                label: '编辑了',
                text: '编辑了',
                value: 'marked',
                
                disabled: false,
            },
            {
                id: 'linked2project',
                label: '关联项目',
                text: '关联项目',
                value: 'linked2project',
                
                disabled: false,
            },
            {
                id: 'unlinkedfromproject',
                label: '移除项目',
                text: '移除项目',
                value: 'unlinkedfromproject',
                
                disabled: false,
            },
            {
                id: 'unlinkedfrombuild',
                label: '移除版本',
                text: '移除版本',
                value: 'unlinkedfrombuild',
                
                disabled: false,
            },
            {
                id: 'linked2release',
                label: '关联发布',
                text: '关联发布',
                value: 'linked2release',
                
                disabled: false,
            },
            {
                id: 'unlinkedfromrelease',
                label: '移除发布',
                text: '移除发布',
                value: 'unlinkedfromrelease',
                
                disabled: false,
            },
            {
                id: 'linkrelatedbug',
                label: '关联了相关Bug',
                text: '关联了相关Bug',
                value: 'linkrelatedbug',
                
                disabled: false,
            },
            {
                id: 'unlinkrelatedbug',
                label: '移除了相关Bug',
                text: '移除了相关Bug',
                value: 'unlinkrelatedbug',
                
                disabled: false,
            },
            {
                id: 'linkrelatedcase',
                label: '关联了相关用例',
                text: '关联了相关用例',
                value: 'linkrelatedcase',
                
                disabled: false,
            },
            {
                id: 'unlinkrelatedcase',
                label: '移除了相关用例',
                text: '移除了相关用例',
                value: 'unlinkrelatedcase',
                
                disabled: false,
            },
            {
                id: 'linkrelatedstory',
                label: '关联了相关需求',
                text: '关联了相关需求',
                value: 'linkrelatedstory',
                
                disabled: false,
            },
            {
                id: 'unlinkrelatedstory',
                label: '移除了相关需求',
                text: '移除了相关需求',
                value: 'unlinkrelatedstory',
                
                disabled: false,
            },
            {
                id: 'subdividestory',
                label: '细分了需求',
                text: '细分了需求',
                value: 'subdividestory',
                
                disabled: false,
            },
            {
                id: 'unlinkchildstory',
                label: '移除了细分需求',
                text: '移除了细分需求',
                value: 'unlinkchildstory',
                
                disabled: false,
            },
            {
                id: 'started',
                label: '开始了',
                text: '开始了',
                value: 'started',
                
                disabled: false,
            },
            {
                id: 'restarted',
                label: '继续了',
                text: '继续了',
                value: 'restarted',
                
                disabled: false,
            },
            {
                id: 'recordestimate',
                label: '记录了工时',
                text: '记录了工时',
                value: 'recordestimate',
                
                disabled: false,
            },
            {
                id: 'editestimate',
                label: '编辑了工时',
                text: '编辑了工时',
                value: 'editestimate',
                
                disabled: false,
            },
            {
                id: 'canceled',
                label: '取消了',
                text: '取消了',
                value: 'canceled',
                
                disabled: false,
            },
            {
                id: 'finished',
                label: '完成了',
                text: '完成了',
                value: 'finished',
                
                disabled: false,
            },
            {
                id: 'paused',
                label: '暂停了',
                text: '暂停了',
                value: 'paused',
                
                disabled: false,
            },
            {
                id: 'verified',
                label: '验收了',
                text: '验收了',
                value: 'verified',
                
                disabled: false,
            },
            {
                id: 'delayed',
                label: '延期',
                text: '延期',
                value: 'delayed',
                
                disabled: false,
            },
            {
                id: 'suspended',
                label: '挂起',
                text: '挂起',
                value: 'suspended',
                
                disabled: false,
            },
            {
                id: 'login',
                label: '登录系统',
                text: '登录系统',
                value: 'login',
                
                disabled: false,
            },
            {
                id: 'logout',
                label: '退出登录',
                text: '退出登录',
                value: 'logout',
                
                disabled: false,
            },
            {
                id: 'deleteestimate',
                label: '删除了工时',
                text: '删除了工时',
                value: 'deleteestimate',
                
                disabled: false,
            },
            {
                id: 'linked2build',
                label: '关联了',
                text: '关联了',
                value: 'linked2build',
                
                disabled: false,
            },
            {
                id: 'linked2bug',
                label: '关联了',
                text: '关联了',
                value: 'linked2bug',
                
                disabled: false,
            },
            {
                id: 'linkchildtask',
                label: '关联子任务',
                text: '关联子任务',
                value: 'linkchildtask',
                
                disabled: false,
            },
            {
                id: 'unlinkchildrentask',
                label: '取消关联子任务',
                text: '取消关联子任务',
                value: 'unlinkchildrentask',
                
                disabled: false,
            },
            {
                id: 'linkparenttask',
                label: '关联到父任务',
                text: '关联到父任务',
                value: 'linkparenttask',
                
                disabled: false,
            },
            {
                id: 'unlinkparenttask',
                label: '从父任务取消关联',
                text: '从父任务取消关联',
                value: 'unlinkparenttask',
                
                disabled: false,
            },
            {
                id: 'batchcreate',
                label: '批量创建任务',
                text: '批量创建任务',
                value: 'batchcreate',
                
                disabled: false,
            },
            {
                id: 'createchildren',
                label: '创建子任务',
                text: '创建子任务',
                value: 'createchildren',
                
                disabled: false,
            },
            {
                id: 'managed',
                label: '维护',
                text: '维护',
                value: 'managed',
                
                disabled: false,
            },
            {
                id: 'deletechildrentask',
                label: '删除子任务',
                text: '删除子任务',
                value: 'deletechildrentask',
                
                disabled: false,
            },
            {
                id: 'createchildrenstory',
                label: '创建子需求',
                text: '创建子需求',
                value: 'createchildrenstory',
                
                disabled: false,
            },
            {
                id: 'linkchildstory',
                label: '关联子需求',
                text: '关联子需求',
                value: 'linkchildstory',
                
                disabled: false,
            },
            {
                id: 'unlinkchildrenstory',
                label: '取消关联子需求',
                text: '取消关联子需求',
                value: 'unlinkchildrenstory',
                
                disabled: false,
            },
            {
                id: 'linkparentstory',
                label: '关联到父需求',
                text: '关联到父需求',
                value: 'linkparentstory',
                
                disabled: false,
            },
            {
                id: 'unlinkparentstory',
                label: '从父需求取消关联',
                text: '从父需求取消关联',
                value: 'unlinkparentstory',
                
                disabled: false,
            },
            {
                id: 'deletechildrenstory',
                label: '删除子需求',
                text: '删除子需求',
                value: 'deletechildrenstory',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "CurCaseVersion",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"CaseStep",
        "appdedataset":"FetchVersions",
        "items": []
    },
    {
        srfkey: 'User__gender',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'f',
                label: '女',
                text: '女',
                value: 'f',
                
                disabled: false,
            },
            {
                id: 'm',
                label: '男',
                text: '男',
                value: 'm',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Action__object_type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'product',
                label: '产品',
                text: '产品',
                value: 'product',
                
                disabled: false,
            },
            {
                id: 'story',
                label: '需求',
                text: '需求',
                value: 'story',
                
                disabled: false,
            },
            {
                id: 'productplan',
                label: '计划',
                text: '计划',
                value: 'productplan',
                
                disabled: false,
            },
            {
                id: 'release',
                label: '发布',
                text: '发布',
                value: 'release',
                
                disabled: false,
            },
            {
                id: 'project',
                label: '项目',
                text: '项目',
                value: 'project',
                
                disabled: false,
            },
            {
                id: 'task',
                label: '任务',
                text: '任务',
                value: 'task',
                
                disabled: false,
            },
            {
                id: 'build',
                label: '版本',
                text: '版本',
                value: 'build',
                
                disabled: false,
            },
            {
                id: 'bug',
                label: 'Bug',
                text: 'Bug',
                value: 'bug',
                
                disabled: false,
            },
            {
                id: 'case',
                label: '用例',
                text: '用例',
                value: 'case',
                
                disabled: false,
            },
            {
                id: 'caseresult',
                label: '用例结果',
                text: '用例结果',
                value: 'caseresult',
                
                disabled: false,
            },
            {
                id: 'stepresult',
                label: '用例步骤',
                text: '用例步骤',
                value: 'stepresult',
                
                disabled: false,
            },
            {
                id: 'testtask',
                label: '测试单',
                text: '测试单',
                value: 'testtask',
                
                disabled: false,
            },
            {
                id: 'user',
                label: '用户',
                text: '用户',
                value: 'user',
                
                disabled: false,
            },
            {
                id: 'doc',
                label: '文档',
                text: '文档',
                value: 'doc',
                
                disabled: false,
            },
            {
                id: 'doclib',
                label: '文档库',
                text: '文档库',
                value: 'doclib',
                
                disabled: false,
            },
            {
                id: 'todo',
                label: '待办',
                text: '待办',
                value: 'todo',
                
                disabled: false,
            },
            {
                id: 'branch',
                label: '分支',
                text: '分支',
                value: 'branch',
                
                disabled: false,
            },
            {
                id: 'module',
                label: '模块',
                text: '模块',
                value: 'module',
                
                disabled: false,
            },
            {
                id: 'testsuite',
                label: '套件',
                text: '套件',
                value: 'testsuite',
                
                disabled: false,
            },
            {
                id: 'caselib',
                label: '用例库',
                text: '用例库',
                value: 'caselib',
                
                disabled: false,
            },
            {
                id: 'testreport',
                label: '报告',
                text: '报告',
                value: 'testreport',
                
                disabled: false,
            },
            {
                id: 'entry',
                label: '应用',
                text: '应用',
                value: 'entry',
                
                disabled: false,
            },
            {
                id: 'webhook',
                label: 'Webhook',
                text: 'Webhook',
                value: 'webhook',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'CaseTestTaskQuickpachet',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'ALL',
                label: '所有用例',
                text: '所有用例',
                value: 'ALL',
                
                disabled: false,
            },
            {
                id: 'TOME',
                label: '指派给我',
                text: '指派给我',
                value: 'TOME',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "ProductPlan",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"ProductPlan",
        "appdedataset":"FetchCurProductPlan",
        "items": []
    },
    {
        srfkey: 'Task__pri',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '1',
                text: '1',
                value: 1,
                
                disabled: false,
            },
            {
                id: '2',
                label: '2',
                text: '2',
                value: 2,
                
                disabled: false,
            },
            {
                id: '3',
                label: '3',
                text: '3',
                value: 3,
                
                disabled: false,
            },
            {
                id: '4',
                label: '4',
                text: '4',
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Release__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'normal',
                label: '正常',
                text: '正常',
                "color": "rgba(13, 255, 0, 1)",
                value: 'normal',
                
                disabled: false,
            },
            {
                id: 'terminate',
                label: '停止维护',
                text: '停止维护',
                value: 'terminate',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'custom',
                label: '自定义',
                text: '自定义',
                value: 'custom',
                
                disabled: false,
            },
            {
                id: 'bug',
                label: 'Bug',
                text: 'Bug',
                value: 'bug',
                
                disabled: false,
            },
            {
                id: 'task',
                label: '项目任务',
                text: '项目任务',
                value: 'task',
                
                disabled: false,
            },
            {
                id: 'story',
                label: '项目需求',
                text: '项目需求',
                value: 'story',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Bug__quickpacket',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'All',
                label: '所有',
                text: '所有',
                value: 'All',
                
                disabled: false,
            },
            {
                id: 'UNCLOSED',
                label: '未关闭',
                text: '未关闭',
                value: 'UNCLOSED',
                
                disabled: false,
            },
            {
                id: 'ICREATE',
                label: '由我创建',
                text: '由我创建',
                value: 'ICREATE',
                
                disabled: false,
            },
            {
                id: 'TOME',
                label: '指派给我',
                text: '指派给我',
                value: 'TOME',
                
                disabled: false,
            },
            {
                id: 'BYME',
                label: '由我解决',
                text: '由我解决',
                value: 'BYME',
                
                disabled: false,
            },
            {
                id: 'WAITCLOSED',
                label: '待关闭',
                text: '待关闭',
                value: 'WAITCLOSED',
                
                disabled: false,
            },
            {
                id: 'UNRESOLVED',
                label: '未解决',
                text: '未解决',
                value: 'UNRESOLVED',
                
                disabled: false,
            },
            {
                id: 'MORE',
                label: '更多',
                text: '更多',
                value: 'MORE',
                
                disabled: false,
            },
            {
                id: 'UNCONFIRMED',
                label: '未确认',
                text: '未确认',
                value: 'UNCONFIRMED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'UNASSIGNED',
                label: '未指派',
                text: '未指派',
                value: 'UNASSIGNED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'EXPIREDBUG',
                label: '过期Bug',
                text: '过期Bug',
                value: 'EXPIREDBUG',
                "pvalue": "MORE",
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Task__closed_reason',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'done',
                label: '已完成',
                text: '已完成',
                value: 'done',
                
                disabled: false,
            },
            {
                id: 'cancel',
                label: '已取消',
                text: '已取消',
                value: 'cancel',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'TodoQuickpacketMy',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'All',
                label: '所有待办',
                text: '所有待办',
                value: 'All',
                
                disabled: false,
            },
            {
                id: 'thisyear',
                label: '本年度',
                text: '本年度',
                value: 'thisyear',
                
                disabled: false,
            },
            {
                id: 'Unfinished',
                label: '未完',
                text: '未完',
                value: 'Unfinished',
                
                disabled: false,
            },
            {
                id: 'BYME',
                label: '待定',
                text: '待定',
                value: 'BYME',
                
                disabled: false,
            },
            {
                id: 'cycle',
                label: '周期',
                text: '周期',
                value: 'cycle',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'TASK_QuickacketMy',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'TOME',
                label: '指派给我',
                text: '指派给我',
                value: 'TOME',
                
                disabled: false,
            },
            {
                id: 'CANCELLED',
                label: '由我创建',
                text: '由我创建',
                value: 'CANCELLED',
                
                disabled: false,
            },
            {
                id: 'IFINISHED',
                label: '由我完成',
                text: '由我完成',
                value: 'IFINISHED',
                
                disabled: false,
            },
            {
                id: 'COMPLETED',
                label: '由我关闭',
                text: '由我关闭',
                value: 'COMPLETED',
                
                disabled: false,
            },
            {
                id: 'CLOSED',
                label: '由我取消',
                text: '由我取消',
                value: 'CLOSED',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "UserRealNameProject",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"User",
        "appdedataset":"FetchProjectTeamUser",
        "items": []
    },
    {
        srfkey: 'Private_choose',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '是',
                text: '是',
                value: '1',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Testcase__type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'feature',
                label: '功能测试',
                text: '功能测试',
                value: 'feature',
                
                disabled: false,
            },
            {
                id: 'performance',
                label: '性能测试',
                text: '性能测试',
                value: 'performance',
                
                disabled: false,
            },
            {
                id: 'config',
                label: '配置相关',
                text: '配置相关',
                value: 'config',
                
                disabled: false,
            },
            {
                id: 'install',
                label: '安装部署',
                text: '安装部署',
                value: 'install',
                
                disabled: false,
            },
            {
                id: 'security',
                label: '安全相关',
                text: '安全相关',
                value: 'security',
                
                disabled: false,
            },
            {
                id: 'interface',
                label: '接口测试',
                text: '接口测试',
                value: 'interface',
                
                disabled: false,
            },
            {
                id: 'unit',
                label: '单元测试',
                text: '单元测试',
                value: 'unit',
                
                disabled: false,
            },
            {
                id: 'other',
                label: '其他',
                text: '其他',
                value: 'other',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Testcase__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'wait',
                label: '待评审',
                text: '待评审',
                value: 'wait',
                
                disabled: false,
            },
            {
                id: 'normal',
                label: '正常',
                text: '正常',
                "color": "rgba(84, 238, 19, 1)",
                value: 'normal',
                
                disabled: false,
            },
            {
                id: 'blocked',
                label: '被阻塞',
                text: '被阻塞',
                "color": "rgba(242, 238, 7, 1)",
                value: 'blocked',
                
                disabled: false,
            },
            {
                id: 'investigate',
                label: '研究中',
                text: '研究中',
                "color": "rgba(245, 12, 12, 1)",
                value: 'investigate',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Story__quickpacket',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'ALL',
                label: '所有',
                text: '所有',
                value: 'ALL',
                
                disabled: false,
            },
            {
                id: 'UNCLOSED',
                label: '未关闭',
                text: '未关闭',
                value: 'UNCLOSED',
                
                disabled: false,
            },
            {
                id: 'TOME',
                label: '指给我',
                text: '指给我',
                value: 'TOME',
                
                disabled: false,
            },
            {
                id: 'ICREATE',
                label: '我创建',
                text: '我创建',
                value: 'ICREATE',
                
                disabled: false,
            },
            {
                id: 'IREVIEW',
                label: '我评审',
                text: '我评审',
                value: 'IREVIEW',
                
                disabled: false,
            },
            {
                id: 'DRAFT',
                label: '草稿',
                text: '草稿',
                value: 'DRAFT',
                
                disabled: false,
            },
            {
                id: 'MORE',
                label: '更多',
                text: '更多',
                value: 'MORE',
                
                disabled: false,
            },
            {
                id: 'ICLOSE',
                label: '我关闭',
                text: '我关闭',
                value: 'ICLOSE',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'ACTIVED',
                label: '激活',
                text: '激活',
                value: 'ACTIVED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'CHANGED',
                label: '已变更',
                text: '已变更',
                value: 'CHANGED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'TOBECLOSED',
                label: '待关闭',
                text: '待关闭',
                value: 'TOBECLOSED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'CLOSED',
                label: '已关闭',
                text: '已关闭',
                value: 'CLOSED',
                "pvalue": "MORE",
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'CycleType',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'day',
                label: '天',
                text: '天',
                value: 'day',
                
                disabled: false,
            },
            {
                id: 'week',
                label: '周',
                text: '周',
                value: 'week',
                
                disabled: false,
            },
            {
                id: 'month',
                label: '月度',
                text: '月度',
                value: 'month',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Story__stage',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'wait',
                label: '未开始',
                text: '未开始',
                value: 'wait',
                
                disabled: false,
            },
            {
                id: 'planned',
                label: '已计划',
                text: '已计划',
                value: 'planned',
                
                disabled: false,
            },
            {
                id: 'projected',
                label: '已立项',
                text: '已立项',
                value: 'projected',
                
                disabled: false,
            },
            {
                id: 'developing',
                label: '研发中',
                text: '研发中',
                value: 'developing',
                
                disabled: false,
            },
            {
                id: 'developed',
                label: '研发完毕',
                text: '研发完毕',
                value: 'developed',
                
                disabled: false,
            },
            {
                id: 'testing',
                label: '测试中',
                text: '测试中',
                value: 'testing',
                
                disabled: false,
            },
            {
                id: 'tested',
                label: '测试完毕',
                text: '测试完毕',
                value: 'tested',
                
                disabled: false,
            },
            {
                id: 'verified',
                label: '已验收',
                text: '已验收',
                value: 'verified',
                
                disabled: false,
            },
            {
                id: 'released',
                label: '已发布',
                text: '已发布',
                value: 'released',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                value: 'closed',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "CurStory",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"StorySpec",
        "appdedataset":"FetchVersion",
        "items": []
    },
    {
        srfkey: 'Company__guest',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '允许',
                text: '允许',
                value: '1',
                
                disabled: false,
            },
            {
                id: '0',
                label: '不允许',
                text: '不允许',
                value: '0',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'YesNo3',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'yes',
                label: '是',
                text: '是',
                value: 'yes',
                
                disabled: false,
            },
            {
                id: 'no',
                label: '否',
                text: '否',
                value: 'no',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Story__source',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'customer',
                label: '客户',
                text: '客户',
                value: 'customer',
                
                disabled: false,
            },
            {
                id: 'user',
                label: '用户',
                text: '用户',
                value: 'user',
                
                disabled: false,
            },
            {
                id: 'po',
                label: '产品经理',
                text: '产品经理',
                value: 'po',
                
                disabled: false,
            },
            {
                id: 'market',
                label: '市场',
                text: '市场',
                value: 'market',
                
                disabled: false,
            },
            {
                id: 'service',
                label: '客服',
                text: '客服',
                value: 'service',
                
                disabled: false,
            },
            {
                id: 'operation',
                label: '运营',
                text: '运营',
                value: 'operation',
                
                disabled: false,
            },
            {
                id: 'support',
                label: '技术支持',
                text: '技术支持',
                value: 'support',
                
                disabled: false,
            },
            {
                id: 'competitor',
                label: '竞争对手',
                text: '竞争对手',
                value: 'competitor',
                
                disabled: false,
            },
            {
                id: 'partner',
                label: '合作伙伴',
                text: '合作伙伴',
                value: 'partner',
                
                disabled: false,
            },
            {
                id: 'dev',
                label: '开发人员',
                text: '开发人员',
                value: 'dev',
                
                disabled: false,
            },
            {
                id: 'tester',
                label: '测试人员',
                text: '测试人员',
                value: 'tester',
                
                disabled: false,
            },
            {
                id: 'bug',
                label: 'Bug',
                text: 'Bug',
                value: 'bug',
                
                disabled: false,
            },
            {
                id: 'forum',
                label: '论坛',
                text: '论坛',
                value: 'forum',
                
                disabled: false,
            },
            {
                id: 'other',
                label: '其它',
                text: '其它',
                value: 'other',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Testcase__pri',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '1',
                text: '1',
                value: 1,
                
                disabled: false,
            },
            {
                id: '2',
                label: '2',
                text: '2',
                value: 2,
                
                disabled: false,
            },
            {
                id: '3',
                label: '3',
                text: '3',
                value: 3,
                
                disabled: false,
            },
            {
                id: '4',
                label: '4',
                text: '4',
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'StoryStageKane',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'projected',
                label: '已立项',
                text: '已立项',
                "color": "rgba(139, 173, 237, 1)",
                value: 'projected',
                
                disabled: false,
            },
            {
                id: 'developing',
                label: '研发中',
                text: '研发中',
                "color": "rgba(63, 77, 238, 1)",
                value: 'developing',
                
                disabled: false,
            },
            {
                id: 'developed',
                label: '研发完毕',
                text: '研发完毕',
                "color": "rgba(73, 227, 101, 1)",
                value: 'developed',
                
                disabled: false,
            },
            {
                id: 'testing',
                label: '测试中',
                text: '测试中',
                "color": "rgba(224, 198, 54, 1)",
                value: 'testing',
                
                disabled: false,
            },
            {
                id: 'tested',
                label: '测试完毕',
                text: '测试完毕',
                "color": "rgba(234, 233, 237, 1)",
                value: 'tested',
                
                disabled: false,
            },
            {
                id: 'verified',
                label: '已验收',
                text: '已验收',
                "color": "rgba(109, 108, 108, 1)",
                value: 'verified',
                
                disabled: false,
            },
            {
                id: 'released',
                label: '已发布',
                text: '已发布',
                "color": "rgba(11, 11, 11, 1)",
                value: 'released',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Testcase__result',
        emptytext: '未执行',
        "codelisttype":"static",
        items: [
            {
                id: 'n/a',
                label: '忽略',
                text: '忽略',
                "color": "rgba(190, 184, 184, 1)",
                value: 'n/a',
                
                disabled: false,
            },
            {
                id: 'pass',
                label: '通过',
                text: '通过',
                "color": "rgba(93, 238, 9, 1)",
                value: 'pass',
                
                disabled: false,
            },
            {
                id: 'fail',
                label: '失败',
                text: '失败',
                "color": "rgba(251, 12, 12, 1)",
                value: 'fail',
                
                disabled: false,
            },
            {
                id: 'blocked',
                label: '阻塞',
                text: '阻塞',
                "color": "rgba(228, 15, 15, 1)",
                value: 'blocked',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "UserRealNameTaskTeam",
        "emptytext": "未定义",
        "codelisttype":"dynamic",
        "appdataentity":"User",
        "appdedataset":"FetchTaskTeam",
        "items": []
    },
    {
        srfkey: 'Bug__pri',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: '1',
                label: '1',
                text: '1',
                value: 1,
                
                disabled: false,
            },
            {
                id: '2',
                label: '2',
                text: '2',
                value: 2,
                
                disabled: false,
            },
            {
                id: '3',
                label: '3',
                text: '3',
                value: 3,
                
                disabled: false,
            },
            {
                id: '4',
                label: '4',
                text: '4',
                value: 4,
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Bug__resolution',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'bydesign',
                label: '设计如此',
                text: '设计如此',
                value: 'bydesign',
                
                disabled: false,
            },
            {
                id: 'duplicate',
                label: '重复Bug',
                text: '重复Bug',
                value: 'duplicate',
                
                disabled: false,
            },
            {
                id: 'external',
                label: '外部原因',
                text: '外部原因',
                value: 'external',
                
                disabled: false,
            },
            {
                id: 'fixed',
                label: '已解决',
                text: '已解决',
                value: 'fixed',
                
                disabled: false,
            },
            {
                id: 'notrepro',
                label: '无法重现',
                text: '无法重现',
                value: 'notrepro',
                
                disabled: false,
            },
            {
                id: 'postponed',
                label: '延期处理',
                text: '延期处理',
                value: 'postponed',
                
                disabled: false,
            },
            {
                id: 'willnotfix',
                label: '不予解决',
                text: '不予解决',
                value: 'willnotfix',
                
                disabled: false,
            },
            {
                id: 'tostory',
                label: '转为需求',
                text: '转为需求',
                value: 'tostory',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'Testtask__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'wait',
                label: '未开始',
                text: '未开始',
                "color": "rgba(220, 214, 214, 1)",
                value: 'wait',
                
                disabled: false,
            },
            {
                id: 'doing',
                label: '进行中',
                text: '进行中',
                "color": "rgba(208, 20, 20, 1)",
                value: 'doing',
                
                disabled: false,
            },
            {
                id: 'done',
                label: '已完成',
                text: '已完成',
                "color": "rgba(30, 234, 12, 1)",
                value: 'done',
                
                disabled: false,
            },
            {
                id: 'blocked',
                label: '被阻塞',
                text: '被阻塞',
                "color": "rgba(221, 217, 10, 1)",
                value: 'blocked',
                
                disabled: false,
            },
        ]
    }
    ]];
});

