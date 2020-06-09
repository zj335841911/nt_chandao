import { MockAdapter } from '../mock-adapter';
const mock = MockAdapter.getInstance();

import Mock from 'mockjs'

// 获取全部数组
mock.onGet('./assets/json/data-dictionary.json').reply((config: any) => {
    let status = MockAdapter.mockStatus(config);
    return [status, [
        {
        srfkey: 'Product__status',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'normal',
                label: '正常',
                text: '正常',
                "data":"",
                "codename":"Normal",
                "color": "rgba(13, 255, 0, 1)",
                value: 'normal',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '结束',
                text: '结束',
                "data":"",
                "codename":"Closed",
                value: 'closed',
                
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
                "data":"",
                "codename":"Active",
                "color": "rgba(0, 157, 255, 1)",
                value: 'active',
                
                disabled: false,
            },
            {
                id: 'resolved',
                label: '已解决',
                text: '已解决',
                "data":"",
                "codename":"Resolved",
                "color": "rgba(1, 217, 19, 1)",
                value: 'resolved',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                "data":"",
                "codename":"Closed",
                "color": "rgba(151, 152, 141, 1)",
                value: 'closed',
                
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
                "data":"",
                "codename":"Done",
                value: 'done',
                
                disabled: false,
            },
            {
                id: 'subdivided',
                label: '已细分',
                text: '已细分',
                "data":"",
                "codename":"Subdivided",
                value: 'subdivided',
                
                disabled: false,
            },
            {
                id: 'duplicate',
                label: '重复',
                text: '重复',
                "data":"",
                "codename":"Duplicate",
                value: 'duplicate',
                
                disabled: false,
            },
            {
                id: 'postponed',
                label: '延期',
                text: '延期',
                "data":"",
                "codename":"Postponed",
                value: 'postponed',
                
                disabled: false,
            },
            {
                id: 'willnotdo',
                label: '不做',
                text: '不做',
                "data":"",
                "codename":"Willnotdo",
                value: 'willnotdo',
                
                disabled: false,
            },
            {
                id: 'cancel',
                label: '已取消',
                text: '已取消',
                "data":"",
                "codename":"Cancel",
                value: 'cancel',
                
                disabled: false,
            },
            {
                id: 'bydesign',
                label: '设计如此',
                text: '设计如此',
                "data":"",
                "codename":"Bydesign",
                value: 'bydesign',
                
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
                "data":"",
                "codename":"Design",
                value: 'design',
                
                disabled: false,
            },
            {
                id: 'devel',
                label: '开发',
                text: '开发',
                "data":"",
                "codename":"Devel",
                value: 'devel',
                
                disabled: false,
            },
            {
                id: 'test',
                label: '测试',
                text: '测试',
                "data":"",
                "codename":"Test",
                value: 'test',
                
                disabled: false,
            },
            {
                id: 'study',
                label: '研究',
                text: '研究',
                "data":"",
                "codename":"Study",
                value: 'study',
                
                disabled: false,
            },
            {
                id: 'discuss',
                label: '讨论',
                text: '讨论',
                "data":"",
                "codename":"Discuss",
                value: 'discuss',
                
                disabled: false,
            },
            {
                id: 'ui',
                label: '界面',
                text: '界面',
                "data":"",
                "codename":"Ui",
                value: 'ui',
                
                disabled: false,
            },
            {
                id: 'affair',
                label: '事务',
                text: '事务',
                "data":"",
                "codename":"Affair",
                value: 'affair',
                
                disabled: false,
            },
            {
                id: 'misc',
                label: '其他',
                text: '其他',
                "data":"",
                "codename":"Misc",
                value: 'misc',
                
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
                "data":"",
                "codename":"Item_1",
                value: 1,
                
                disabled: false,
            },
            {
                id: '2',
                label: '2',
                text: '2',
                "data":"",
                "codename":"Item_2",
                value: 2,
                
                disabled: false,
            },
            {
                id: '3',
                label: '3',
                text: '3',
                "data":"",
                "codename":"Item_3",
                "color": "rgba(49, 27, 146, 1)",
                value: 3,
                
                disabled: false,
            },
            {
                id: '4',
                label: '4',
                text: '4',
                "data":"",
                "codename":"Item_4",
                value: 4,
                
                disabled: false,
            },
        ]
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
                "data":"",
                "codename":"Unittest",
                value: 'unittest',
                
                disabled: false,
            },
            {
                id: 'feature',
                label: '功能测试阶段',
                text: '功能测试阶段',
                "data":"",
                "codename":"Feature",
                value: 'feature',
                
                disabled: false,
            },
            {
                id: 'intergrate',
                label: '集成测试阶段',
                text: '集成测试阶段',
                "data":"",
                "codename":"Intergrate",
                value: 'intergrate',
                
                disabled: false,
            },
            {
                id: 'system',
                label: '系统测试阶段',
                text: '系统测试阶段',
                "data":"",
                "codename":"System",
                value: 'system',
                
                disabled: false,
            },
            {
                id: 'smoke',
                label: '冒烟测试阶段',
                text: '冒烟测试阶段',
                "data":"",
                "codename":"Smoke",
                value: 'smoke',
                
                disabled: false,
            },
            {
                id: 'bvt',
                label: '版本验证阶段',
                text: '版本验证阶段',
                "data":"",
                "codename":"Bvt",
                value: 'bvt',
                
                disabled: false,
            },
        ]
    },
    {
        srfkey: 'ProjectTimeType',
        emptytext: '',
        "codelisttype":"static",
        items: [
            {
                id: 'CONSUMED',
                label: '消耗时间',
                text: '消耗时间',
                "data":"",
                "codename":"Consumed",
                value: 'CONSUMED',
                
                disabled: false,
            },
            {
                id: 'LEFT',
                label: '剩余时间',
                text: '剩余时间',
                "data":"",
                "codename":"Left",
                value: 'LEFT',
                
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
                "data":"",
                "codename":"Codeerror",
                value: 'codeerror',
                
                disabled: false,
            },
            {
                id: 'config',
                label: '配置相关',
                text: '配置相关',
                "data":"",
                "codename":"Config",
                value: 'config',
                
                disabled: false,
            },
            {
                id: 'install',
                label: '安装部署',
                text: '安装部署',
                "data":"",
                "codename":"Install",
                value: 'install',
                
                disabled: false,
            },
            {
                id: 'security',
                label: '安全相关',
                text: '安全相关',
                "data":"",
                "codename":"Security",
                value: 'security',
                
                disabled: false,
            },
            {
                id: 'performance',
                label: '性能问题',
                text: '性能问题',
                "data":"",
                "codename":"Performance",
                value: 'performance',
                
                disabled: false,
            },
            {
                id: 'standard',
                label: '标准规范',
                text: '标准规范',
                "data":"",
                "codename":"Standard",
                value: 'standard',
                
                disabled: false,
            },
            {
                id: 'automation',
                label: '测试脚本',
                text: '测试脚本',
                "data":"",
                "codename":"Automation",
                value: 'automation',
                
                disabled: false,
            },
            {
                id: 'designdefect',
                label: '设计缺陷',
                text: '设计缺陷',
                "data":"",
                "codename":"Designdefect",
                value: 'designdefect',
                
                disabled: false,
            },
            {
                id: 'others',
                label: '其他',
                text: '其他',
                "data":"",
                "codename":"Others",
                value: 'others',
                
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
                "data":"",
                "codename":"Open",
                value: 'open',
                
                disabled: false,
            },
            {
                id: 'private',
                label: '私有产品相关负责人和项目团队成员才能访问)',
                text: '私有产品相关负责人和项目团队成员才能访问)',
                "data":"",
                "codename":"Private",
                value: 'private',
                
                disabled: false,
            },
            {
                id: 'custom',
                label: '自定义白名单(团队成员和白名单的成员可以访问)',
                text: '自定义白名单(团队成员和白名单的成员可以访问)',
                "data":"",
                "codename":"Custom",
                value: 'custom',
                
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
                "data":"",
                "codename":"Created",
                value: 'created',
                
                disabled: false,
            },
            {
                id: 'opened',
                label: '创建',
                text: '创建',
                "data":"",
                "codename":"Opened",
                value: 'opened',
                
                disabled: false,
            },
            {
                id: 'changed',
                label: '变更了',
                text: '变更了',
                "data":"",
                "codename":"Changed",
                value: 'changed',
                
                disabled: false,
            },
            {
                id: 'edited',
                label: '编辑了',
                text: '编辑了',
                "data":"",
                "codename":"Edited",
                value: 'edited',
                
                disabled: false,
            },
            {
                id: 'assigned',
                label: '指派了',
                text: '指派了',
                "data":"",
                "codename":"Assigned",
                value: 'assigned',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '关闭了',
                text: '关闭了',
                "data":"",
                "codename":"Closed",
                value: 'closed',
                
                disabled: false,
            },
            {
                id: 'deleted',
                label: '删除了',
                text: '删除了',
                "data":"",
                "codename":"Deleted",
                value: 'deleted',
                
                disabled: false,
            },
            {
                id: 'deletedfile',
                label: '删除附件',
                text: '删除附件',
                "data":"",
                "codename":"Deletedfile",
                value: 'deletedfile',
                
                disabled: false,
            },
            {
                id: 'editfile',
                label: '编辑附件',
                text: '编辑附件',
                "data":"",
                "codename":"Editfile",
                value: 'editfile',
                
                disabled: false,
            },
            {
                id: 'erased',
                label: '删除了',
                text: '删除了',
                "data":"",
                "codename":"Erased",
                value: 'erased',
                
                disabled: false,
            },
            {
                id: 'undeleted',
                label: '还原了',
                text: '还原了',
                "data":"",
                "codename":"Undeleted",
                value: 'undeleted',
                
                disabled: false,
            },
            {
                id: 'hidden',
                label: '隐藏了',
                text: '隐藏了',
                "data":"",
                "codename":"Hidden",
                value: 'hidden',
                
                disabled: false,
            },
            {
                id: 'commented',
                label: '评论了',
                text: '评论了',
                "data":"",
                "codename":"Commented",
                value: 'commented',
                
                disabled: false,
            },
            {
                id: 'activated',
                label: '激活了',
                text: '激活了',
                "data":"",
                "codename":"Activated",
                value: 'activated',
                
                disabled: false,
            },
            {
                id: 'blocked',
                label: '阻塞了',
                text: '阻塞了',
                "data":"",
                "codename":"Blocked",
                value: 'blocked',
                
                disabled: false,
            },
            {
                id: 'resolved',
                label: '解决了',
                text: '解决了',
                "data":"",
                "codename":"Resolved",
                value: 'resolved',
                
                disabled: false,
            },
            {
                id: 'reviewed',
                label: '评审了',
                text: '评审了',
                "data":"",
                "codename":"Reviewed",
                value: 'reviewed',
                
                disabled: false,
            },
            {
                id: 'moved',
                label: '移动了',
                text: '移动了',
                "data":"",
                "codename":"Moved",
                value: 'moved',
                
                disabled: false,
            },
            {
                id: 'confirmed',
                label: '确认了需求',
                text: '确认了需求',
                "data":"",
                "codename":"Confirmed",
                value: 'confirmed',
                
                disabled: false,
            },
            {
                id: 'bugconfirmed',
                label: '确认了',
                text: '确认了',
                "data":"",
                "codename":"Bugconfirmed",
                value: 'bugconfirmed',
                
                disabled: false,
            },
            {
                id: 'tostory',
                label: '转需求',
                text: '转需求',
                "data":"",
                "codename":"Tostory",
                value: 'tostory',
                
                disabled: false,
            },
            {
                id: 'frombug',
                label: '转需求',
                text: '转需求',
                "data":"",
                "codename":"Frombug",
                value: 'frombug',
                
                disabled: false,
            },
            {
                id: 'fromlib',
                label: '从用例库导入',
                text: '从用例库导入',
                "data":"",
                "codename":"Fromlib",
                value: 'fromlib',
                
                disabled: false,
            },
            {
                id: 'totask',
                label: '转任务',
                text: '转任务',
                "data":"",
                "codename":"Totask",
                value: 'totask',
                
                disabled: false,
            },
            {
                id: 'svncommited',
                label: '提交代码',
                text: '提交代码',
                "data":"",
                "codename":"Svncommited",
                value: 'svncommited',
                
                disabled: false,
            },
            {
                id: 'gitcommited',
                label: '提交代码',
                text: '提交代码',
                "data":"",
                "codename":"Gitcommited",
                value: 'gitcommited',
                
                disabled: false,
            },
            {
                id: 'linked2plan',
                label: '关联计划',
                text: '关联计划',
                "data":"",
                "codename":"Linked2plan",
                value: 'linked2plan',
                
                disabled: false,
            },
            {
                id: 'unlinkedfromplan',
                label: '移除计划',
                text: '移除计划',
                "data":"",
                "codename":"Unlinkedfromplan",
                value: 'unlinkedfromplan',
                
                disabled: false,
            },
            {
                id: 'changestatus',
                label: '修改状态',
                text: '修改状态',
                "data":"",
                "codename":"Changestatus",
                value: 'changestatus',
                
                disabled: false,
            },
            {
                id: 'marked',
                label: '编辑了',
                text: '编辑了',
                "data":"",
                "codename":"Marked",
                value: 'marked',
                
                disabled: false,
            },
            {
                id: 'linked2project',
                label: '关联项目',
                text: '关联项目',
                "data":"",
                "codename":"Linked2project",
                value: 'linked2project',
                
                disabled: false,
            },
            {
                id: 'unlinkedfromproject',
                label: '移除项目',
                text: '移除项目',
                "data":"",
                "codename":"Unlinkedfromproject",
                value: 'unlinkedfromproject',
                
                disabled: false,
            },
            {
                id: 'unlinkedfrombuild',
                label: '移除版本',
                text: '移除版本',
                "data":"",
                "codename":"Unlinkedfrombuild",
                value: 'unlinkedfrombuild',
                
                disabled: false,
            },
            {
                id: 'linked2release',
                label: '关联发布',
                text: '关联发布',
                "data":"",
                "codename":"Linked2release",
                value: 'linked2release',
                
                disabled: false,
            },
            {
                id: 'unlinkedfromrelease',
                label: '移除发布',
                text: '移除发布',
                "data":"",
                "codename":"Unlinkedfromrelease",
                value: 'unlinkedfromrelease',
                
                disabled: false,
            },
            {
                id: 'linkrelatedbug',
                label: '关联了相关Bug',
                text: '关联了相关Bug',
                "data":"",
                "codename":"Linkrelatedbug",
                value: 'linkrelatedbug',
                
                disabled: false,
            },
            {
                id: 'unlinkrelatedbug',
                label: '移除了相关Bug',
                text: '移除了相关Bug',
                "data":"",
                "codename":"Unlinkrelatedbug",
                value: 'unlinkrelatedbug',
                
                disabled: false,
            },
            {
                id: 'linkrelatedcase',
                label: '关联了相关用例',
                text: '关联了相关用例',
                "data":"",
                "codename":"Linkrelatedcase",
                value: 'linkrelatedcase',
                
                disabled: false,
            },
            {
                id: 'unlinkrelatedcase',
                label: '移除了相关用例',
                text: '移除了相关用例',
                "data":"",
                "codename":"Unlinkrelatedcase",
                value: 'unlinkrelatedcase',
                
                disabled: false,
            },
            {
                id: 'linkrelatedstory',
                label: '关联了相关需求',
                text: '关联了相关需求',
                "data":"",
                "codename":"Linkrelatedstory",
                value: 'linkrelatedstory',
                
                disabled: false,
            },
            {
                id: 'unlinkrelatedstory',
                label: '移除了相关需求',
                text: '移除了相关需求',
                "data":"",
                "codename":"Unlinkrelatedstory",
                value: 'unlinkrelatedstory',
                
                disabled: false,
            },
            {
                id: 'subdividestory',
                label: '细分了需求',
                text: '细分了需求',
                "data":"",
                "codename":"Subdividestory",
                value: 'subdividestory',
                
                disabled: false,
            },
            {
                id: 'unlinkchildstory',
                label: '移除了细分需求',
                text: '移除了细分需求',
                "data":"",
                "codename":"Unlinkchildstory",
                value: 'unlinkchildstory',
                
                disabled: false,
            },
            {
                id: 'started',
                label: '开始了',
                text: '开始了',
                "data":"",
                "codename":"Started",
                value: 'started',
                
                disabled: false,
            },
            {
                id: 'restarted',
                label: '继续了',
                text: '继续了',
                "data":"",
                "codename":"Restarted",
                value: 'restarted',
                
                disabled: false,
            },
            {
                id: 'recordestimate',
                label: '记录了工时',
                text: '记录了工时',
                "data":"",
                "codename":"Recordestimate",
                value: 'recordestimate',
                
                disabled: false,
            },
            {
                id: 'editestimate',
                label: '编辑了工时',
                text: '编辑了工时',
                "data":"",
                "codename":"Editestimate",
                value: 'editestimate',
                
                disabled: false,
            },
            {
                id: 'canceled',
                label: '取消了',
                text: '取消了',
                "data":"",
                "codename":"Canceled",
                value: 'canceled',
                
                disabled: false,
            },
            {
                id: 'finished',
                label: '完成了',
                text: '完成了',
                "data":"",
                "codename":"Finished",
                value: 'finished',
                
                disabled: false,
            },
            {
                id: 'paused',
                label: '暂停了',
                text: '暂停了',
                "data":"",
                "codename":"Paused",
                value: 'paused',
                
                disabled: false,
            },
            {
                id: 'verified',
                label: '验收了',
                text: '验收了',
                "data":"",
                "codename":"Verified",
                value: 'verified',
                
                disabled: false,
            },
            {
                id: 'delayed',
                label: '延期',
                text: '延期',
                "data":"",
                "codename":"Delayed",
                value: 'delayed',
                
                disabled: false,
            },
            {
                id: 'suspended',
                label: '挂起',
                text: '挂起',
                "data":"",
                "codename":"Suspended",
                value: 'suspended',
                
                disabled: false,
            },
            {
                id: 'login',
                label: '登录系统',
                text: '登录系统',
                "data":"",
                "codename":"Login",
                value: 'login',
                
                disabled: false,
            },
            {
                id: 'logout',
                label: '退出登录',
                text: '退出登录',
                "data":"",
                "codename":"Logout",
                value: 'logout',
                
                disabled: false,
            },
            {
                id: 'deleteestimate',
                label: '删除了工时',
                text: '删除了工时',
                "data":"",
                "codename":"Deleteestimate",
                value: 'deleteestimate',
                
                disabled: false,
            },
            {
                id: 'linked2build',
                label: '关联了',
                text: '关联了',
                "data":"",
                "codename":"Linked2build",
                value: 'linked2build',
                
                disabled: false,
            },
            {
                id: 'linked2bug',
                label: '关联了',
                text: '关联了',
                "data":"",
                "codename":"Linked2bug",
                value: 'linked2bug',
                
                disabled: false,
            },
            {
                id: 'linkchildtask',
                label: '关联子任务',
                text: '关联子任务',
                "data":"",
                "codename":"Linkchildtask",
                value: 'linkchildtask',
                
                disabled: false,
            },
            {
                id: 'unlinkchildrentask',
                label: '取消关联子任务',
                text: '取消关联子任务',
                "data":"",
                "codename":"Unlinkchildrentask",
                value: 'unlinkchildrentask',
                
                disabled: false,
            },
            {
                id: 'linkparenttask',
                label: '关联到父任务',
                text: '关联到父任务',
                "data":"",
                "codename":"Linkparenttask",
                value: 'linkparenttask',
                
                disabled: false,
            },
            {
                id: 'unlinkparenttask',
                label: '从父任务取消关联',
                text: '从父任务取消关联',
                "data":"",
                "codename":"Unlinkparenttask",
                value: 'unlinkparenttask',
                
                disabled: false,
            },
            {
                id: 'batchcreate',
                label: '批量创建任务',
                text: '批量创建任务',
                "data":"",
                "codename":"Batchcreate",
                value: 'batchcreate',
                
                disabled: false,
            },
            {
                id: 'createchildren',
                label: '创建子任务',
                text: '创建子任务',
                "data":"",
                "codename":"Createchildren",
                value: 'createchildren',
                
                disabled: false,
            },
            {
                id: 'managed',
                label: '维护',
                text: '维护',
                "data":"",
                "codename":"Managed",
                value: 'managed',
                
                disabled: false,
            },
            {
                id: 'deletechildrentask',
                label: '删除子任务',
                text: '删除子任务',
                "data":"",
                "codename":"Deletechildrentask",
                value: 'deletechildrentask',
                
                disabled: false,
            },
            {
                id: 'createchildrenstory',
                label: '创建子需求',
                text: '创建子需求',
                "data":"",
                "codename":"Createchildrenstory",
                value: 'createchildrenstory',
                
                disabled: false,
            },
            {
                id: 'linkchildstory',
                label: '关联子需求',
                text: '关联子需求',
                "data":"",
                "codename":"Linkchildstory",
                value: 'linkchildstory',
                
                disabled: false,
            },
            {
                id: 'unlinkchildrenstory',
                label: '取消关联子需求',
                text: '取消关联子需求',
                "data":"",
                "codename":"Unlinkchildrenstory",
                value: 'unlinkchildrenstory',
                
                disabled: false,
            },
            {
                id: 'linkparentstory',
                label: '关联到父需求',
                text: '关联到父需求',
                "data":"",
                "codename":"Linkparentstory",
                value: 'linkparentstory',
                
                disabled: false,
            },
            {
                id: 'unlinkparentstory',
                label: '从父需求取消关联',
                text: '从父需求取消关联',
                "data":"",
                "codename":"Unlinkparentstory",
                value: 'unlinkparentstory',
                
                disabled: false,
            },
            {
                id: 'deletechildrenstory',
                label: '删除子需求',
                text: '删除子需求',
                "data":"",
                "codename":"Deletechildrenstory",
                value: 'deletechildrenstory',
                
                disabled: false,
            },
        ]
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
                "data":"",
                "codename":"F",
                value: 'f',
                
                disabled: false,
            },
            {
                id: 'm',
                label: '男',
                text: '男',
                "data":"",
                "codename":"M",
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
                "data":"",
                "codename":"Product",
                value: 'product',
                
                disabled: false,
            },
            {
                id: 'story',
                label: '需求',
                text: '需求',
                "data":"",
                "codename":"Story",
                value: 'story',
                
                disabled: false,
            },
            {
                id: 'productplan',
                label: '计划',
                text: '计划',
                "data":"",
                "codename":"Productplan",
                value: 'productplan',
                
                disabled: false,
            },
            {
                id: 'release',
                label: '发布',
                text: '发布',
                "data":"",
                "codename":"Release",
                value: 'release',
                
                disabled: false,
            },
            {
                id: 'project',
                label: '项目',
                text: '项目',
                "data":"",
                "codename":"Project",
                value: 'project',
                
                disabled: false,
            },
            {
                id: 'task',
                label: '任务',
                text: '任务',
                "data":"",
                "codename":"Task",
                value: 'task',
                
                disabled: false,
            },
            {
                id: 'build',
                label: '版本',
                text: '版本',
                "data":"",
                "codename":"Build",
                value: 'build',
                
                disabled: false,
            },
            {
                id: 'bug',
                label: 'Bug',
                text: 'Bug',
                "data":"",
                "codename":"Bug",
                value: 'bug',
                
                disabled: false,
            },
            {
                id: 'case',
                label: '用例',
                text: '用例',
                "data":"",
                "codename":"Case",
                value: 'case',
                
                disabled: false,
            },
            {
                id: 'caseresult',
                label: '用例结果',
                text: '用例结果',
                "data":"",
                "codename":"Caseresult",
                value: 'caseresult',
                
                disabled: false,
            },
            {
                id: 'stepresult',
                label: '用例步骤',
                text: '用例步骤',
                "data":"",
                "codename":"Stepresult",
                value: 'stepresult',
                
                disabled: false,
            },
            {
                id: 'testtask',
                label: '测试单',
                text: '测试单',
                "data":"",
                "codename":"Testtask",
                value: 'testtask',
                
                disabled: false,
            },
            {
                id: 'user',
                label: '用户',
                text: '用户',
                "data":"",
                "codename":"User",
                value: 'user',
                
                disabled: false,
            },
            {
                id: 'doc',
                label: '文档',
                text: '文档',
                "data":"",
                "codename":"Doc",
                value: 'doc',
                
                disabled: false,
            },
            {
                id: 'doclib',
                label: '文档库',
                text: '文档库',
                "data":"",
                "codename":"Doclib",
                value: 'doclib',
                
                disabled: false,
            },
            {
                id: 'todo',
                label: '待办',
                text: '待办',
                "data":"",
                "codename":"Todo",
                value: 'todo',
                
                disabled: false,
            },
            {
                id: 'branch',
                label: '分支',
                text: '分支',
                "data":"",
                "codename":"Branch",
                value: 'branch',
                
                disabled: false,
            },
            {
                id: 'module',
                label: '模块',
                text: '模块',
                "data":"",
                "codename":"Module",
                value: 'module',
                
                disabled: false,
            },
            {
                id: 'testsuite',
                label: '套件',
                text: '套件',
                "data":"",
                "codename":"Testsuite",
                value: 'testsuite',
                
                disabled: false,
            },
            {
                id: 'caselib',
                label: '用例库',
                text: '用例库',
                "data":"",
                "codename":"Caselib",
                value: 'caselib',
                
                disabled: false,
            },
            {
                id: 'testreport',
                label: '报告',
                text: '报告',
                "data":"",
                "codename":"Testreport",
                value: 'testreport',
                
                disabled: false,
            },
            {
                id: 'entry',
                label: '应用',
                text: '应用',
                "data":"",
                "codename":"Entry",
                value: 'entry',
                
                disabled: false,
            },
            {
                id: 'webhook',
                label: 'Webhook',
                text: 'Webhook',
                "data":"",
                "codename":"Webhook",
                value: 'webhook',
                
                disabled: false,
            },
        ]
    },
    {
        "srfkey": "CurProductPlan",
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
                "data":"",
                "codename":"Item_1",
                value: 1,
                
                disabled: false,
            },
            {
                id: '2',
                label: '2',
                text: '2',
                "data":"",
                "codename":"Item_2",
                value: 2,
                
                disabled: false,
            },
            {
                id: '3',
                label: '3',
                text: '3',
                "data":"",
                "codename":"Item_3",
                value: 3,
                
                disabled: false,
            },
            {
                id: '4',
                label: '4',
                text: '4',
                "data":"",
                "codename":"Item_4",
                value: 4,
                
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
                "data":"",
                "codename":"Wait",
                value: 'wait',
                
                disabled: false,
            },
            {
                id: 'doing',
                label: '进行中',
                text: '进行中',
                "data":"",
                "codename":"Doing",
                value: 'doing',
                
                disabled: false,
            },
            {
                id: 'suspended',
                label: '已挂起',
                text: '已挂起',
                "data":"",
                "codename":"Suspended",
                value: 'suspended',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                "data":"",
                "codename":"Closed",
                value: 'closed',
                
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
                "data":"",
                "codename":"Normal",
                "color": "rgba(13, 255, 0, 1)",
                value: 'normal',
                
                disabled: false,
            },
            {
                id: 'terminate',
                label: '停止维护',
                text: '停止维护',
                "data":"",
                "codename":"Terminate",
                value: 'terminate',
                
                disabled: false,
            },
        ]
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
                "data":{},
                "codename":"All",
                value: 'All',
                
                disabled: false,
            },
            {
                id: 'UNCLOSED',
                label: '未关闭',
                text: '未关闭',
                "data":{"n_status_noteq":"closed"},
                "codename":"Unclosed",
                value: 'UNCLOSED',
                
                disabled: false,
            },
            {
                id: 'TOME',
                label: '指派给我',
                text: '指派给我',
                "data":{"n_assignedto_eq":"%srfloginname%"},
                "codename":"Tome",
                value: 'TOME',
                
                disabled: false,
            },
            {
                id: 'MORE',
                label: '更多',
                text: '更多',
                "data":"",
                "codename":"More",
                value: 'MORE',
                
                disabled: false,
            },
            {
                id: 'NOTSTARTED',
                label: '未开始',
                text: '未开始',
                "data":{"n_status_eq":"wait"},
                "codename":"Notstarted",
                value: 'NOTSTARTED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'INPROGRESS',
                label: '进行中',
                text: '进行中',
                "data":{"n_status_eq":"doing"},
                "codename":"Inprogress",
                value: 'INPROGRESS',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'UNACCOMPLISHED',
                label: '未完成',
                text: '未完成',
                "data":{"n_status_noteq":"done"},
                "codename":"Unaccomplished",
                value: 'UNACCOMPLISHED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'IFINISHED',
                label: '我完成',
                text: '我完成',
                "data":{"n_finishedby_eq":"%srfloginname%"},
                "codename":"Ifinished",
                value: 'IFINISHED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'COMPLETED',
                label: '已完成',
                text: '已完成',
                "data":{"n_status_eq":"done"},
                "codename":"Completed",
                value: 'COMPLETED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'CLOSED',
                label: '已关闭',
                text: '已关闭',
                "data":{"n_status_eq":"closed"},
                "codename":"Closed",
                value: 'CLOSED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'CANCELLED',
                label: '已取消',
                text: '已取消',
                "data":{"n_status_eq":"cancel"},
                "codename":"Cancelled",
                value: 'CANCELLED',
                "pvalue": "MORE",
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
                "data":{},
                "codename":"All",
                value: 'All',
                
                disabled: false,
            },
            {
                id: 'UNCLOSED',
                label: '未关闭',
                text: '未关闭',
                "data":{"n_status_noteq":"closed"},
                "codename":"Unclosed",
                value: 'UNCLOSED',
                
                disabled: false,
            },
            {
                id: 'ICREATE',
                label: '由我创建',
                text: '由我创建',
                "data":{"n_openedby_eq":"%SRFUSERID%"},
                "codename":"Icreate",
                value: 'ICREATE',
                
                disabled: false,
            },
            {
                id: 'TOME',
                label: '指派给我',
                text: '指派给我',
                "data":{"n_assignedto_eq":"%SRFUSERID%"},
                "codename":"Tome",
                value: 'TOME',
                
                disabled: false,
            },
            {
                id: 'BYME',
                label: '由我解决',
                text: '由我解决',
                "data":{"n_resolvedby_eq":"%SRFUSERID%"},
                "codename":"Byme",
                value: 'BYME',
                
                disabled: false,
            },
            {
                id: 'WAITCLOSED',
                label: '待关闭',
                text: '待关闭',
                "data":{"n_status_eq":"closed"},
                "codename":"Waitclosed",
                value: 'WAITCLOSED',
                
                disabled: false,
            },
            {
                id: 'UNRESOLVED',
                label: '未解决',
                text: '未解决',
                "data":{"n_status_eq":"resolved"},
                "codename":"Unresolved",
                value: 'UNRESOLVED',
                
                disabled: false,
            },
            {
                id: 'MORE',
                label: '更多',
                text: '更多',
                "data":"",
                "codename":"More",
                value: 'MORE',
                
                disabled: false,
            },
            {
                id: 'UNCONFIRMED',
                label: '未确认',
                text: '未确认',
                "data":{"n_confirmed_eq": 0},
                "codename":"Unconfirmed",
                value: 'UNCONFIRMED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'UNASSIGNED',
                label: '未指派',
                text: '未指派',
                "data":{"n_assignedto_eq":""},
                "codename":"Unassigned",
                value: 'UNASSIGNED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'EXPIREDBUG',
                label: '过期Bug',
                text: '过期Bug',
                "data":{"n_deadline_lt": "%srfcurdate%"},
                "codename":"Expiredbug",
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
                "data":"",
                "codename":"Done",
                value: 'done',
                
                disabled: false,
            },
            {
                id: 'cancel',
                label: '已取消',
                text: '已取消',
                "data":"",
                "codename":"Cancel",
                value: 'cancel',
                
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
                "data":"",
                "codename":"All",
                value: 'all',
                
                disabled: false,
            },
            {
                id: 'windows',
                label: 'Windows',
                text: 'Windows',
                "data":"",
                "codename":"Windows",
                value: 'windows',
                
                disabled: false,
            },
            {
                id: 'win10',
                label: 'Windows 10',
                text: 'Windows 10',
                "data":"",
                "codename":"Win10",
                value: 'win10',
                
                disabled: false,
            },
            {
                id: 'win8',
                label: 'Windows 8',
                text: 'Windows 8',
                "data":"",
                "codename":"Win8",
                value: 'win8',
                
                disabled: false,
            },
            {
                id: 'win7',
                label: 'Windows 7',
                text: 'Windows 7',
                "data":"",
                "codename":"Win7",
                value: 'win7',
                
                disabled: false,
            },
            {
                id: 'vista',
                label: 'Windows Vista',
                text: 'Windows Vista',
                "data":"",
                "codename":"Vista",
                value: 'vista',
                
                disabled: false,
            },
            {
                id: 'winxp',
                label: 'Windows XP',
                text: 'Windows XP',
                "data":"",
                "codename":"Winxp",
                value: 'winxp',
                
                disabled: false,
            },
            {
                id: 'win2012',
                label: 'Windows 2012',
                text: 'Windows 2012',
                "data":"",
                "codename":"Win2012",
                value: 'win2012',
                
                disabled: false,
            },
            {
                id: 'win2008',
                label: 'Windows 2008',
                text: 'Windows 2008',
                "data":"",
                "codename":"Win2008",
                value: 'win2008',
                
                disabled: false,
            },
            {
                id: 'win2003',
                label: 'Windows 2003',
                text: 'Windows 2003',
                "data":"",
                "codename":"Win2003",
                value: 'win2003',
                
                disabled: false,
            },
            {
                id: 'win2000',
                label: 'Windows 2000',
                text: 'Windows 2000',
                "data":"",
                "codename":"Win2000",
                value: 'win2000',
                
                disabled: false,
            },
            {
                id: 'android',
                label: 'Android',
                text: 'Android',
                "data":"",
                "codename":"Android",
                value: 'android',
                
                disabled: false,
            },
            {
                id: 'ios',
                label: 'IOS',
                text: 'IOS',
                "data":"",
                "codename":"Ios",
                value: 'ios',
                
                disabled: false,
            },
            {
                id: 'wp8',
                label: 'WP8',
                text: 'WP8',
                "data":"",
                "codename":"Wp8",
                value: 'wp8',
                
                disabled: false,
            },
            {
                id: 'wp7',
                label: 'WP7',
                text: 'WP7',
                "data":"",
                "codename":"Wp7",
                value: 'wp7',
                
                disabled: false,
            },
            {
                id: 'symbian',
                label: 'Symbian',
                text: 'Symbian',
                "data":"",
                "codename":"Symbian",
                value: 'symbian',
                
                disabled: false,
            },
            {
                id: 'linux',
                label: 'Linux',
                text: 'Linux',
                "data":"",
                "codename":"Linux",
                value: 'linux',
                
                disabled: false,
            },
            {
                id: 'freebsd',
                label: 'FreeBSD',
                text: 'FreeBSD',
                "data":"",
                "codename":"Freebsd",
                value: 'freebsd',
                
                disabled: false,
            },
            {
                id: 'osx',
                label: 'OS X',
                text: 'OS X',
                "data":"",
                "codename":"Osx",
                value: 'osx',
                
                disabled: false,
            },
            {
                id: 'unix',
                label: 'Unix',
                text: 'Unix',
                "data":"",
                "codename":"Unix",
                value: 'unix',
                
                disabled: false,
            },
            {
                id: 'others',
                label: '其他',
                text: '其他',
                "data":"",
                "codename":"Others",
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
        srfkey: 'Product__type',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'normal',
                label: '正常',
                text: '正常',
                "data":"",
                "codename":"Normal",
                "color": "blue",
                value: 'normal',
                
                disabled: false,
            },
            {
                id: 'branch',
                label: '多分支',
                text: '多分支',
                "data":"",
                "codename":"Branch",
                value: 'branch',
                
                disabled: false,
            },
            {
                id: 'platform',
                label: '多平台',
                text: '多平台',
                "data":"",
                "codename":"Platform",
                value: 'platform',
                
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
                "data":"",
                "codename":"Feature",
                value: 'feature',
                
                disabled: false,
            },
            {
                id: 'performance',
                label: '性能测试',
                text: '性能测试',
                "data":"",
                "codename":"Performance",
                value: 'performance',
                
                disabled: false,
            },
            {
                id: 'config',
                label: '配置相关',
                text: '配置相关',
                "data":"",
                "codename":"Config",
                value: 'config',
                
                disabled: false,
            },
            {
                id: 'install',
                label: '安装部署',
                text: '安装部署',
                "data":"",
                "codename":"Install",
                value: 'install',
                
                disabled: false,
            },
            {
                id: 'security',
                label: '安全相关',
                text: '安全相关',
                "data":"",
                "codename":"Security",
                value: 'security',
                
                disabled: false,
            },
            {
                id: 'interface',
                label: '接口测试',
                text: '接口测试',
                "data":"",
                "codename":"Interface",
                value: 'interface',
                
                disabled: false,
            },
            {
                id: 'unit',
                label: '单元测试',
                text: '单元测试',
                "data":"",
                "codename":"Unit",
                value: 'unit',
                
                disabled: false,
            },
            {
                id: 'other',
                label: '其他',
                text: '其他',
                "data":"",
                "codename":"Other",
                value: 'other',
                
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
                "data":"",
                "codename":"Item_1",
                value: 1,
                
                disabled: false,
            },
            {
                id: '2',
                label: '2',
                text: '2',
                "data":"",
                "codename":"Item_2",
                value: 2,
                
                disabled: false,
            },
            {
                id: '3',
                label: '3',
                text: '3',
                "data":"",
                "codename":"Item_3",
                value: 3,
                
                disabled: false,
            },
            {
                id: '4',
                label: '4',
                text: '4',
                "data":"",
                "codename":"Item_4",
                value: 4,
                
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
                "data":"",
                "codename":"Wait",
                value: 'wait',
                
                disabled: false,
            },
            {
                id: 'normal',
                label: '正常',
                text: '正常',
                "data":"",
                "codename":"Normal",
                value: 'normal',
                
                disabled: false,
            },
            {
                id: 'blocked',
                label: '被阻塞',
                text: '被阻塞',
                "data":"",
                "codename":"Blocked",
                value: 'blocked',
                
                disabled: false,
            },
            {
                id: 'investigate',
                label: '研究中',
                text: '研究中',
                "data":"",
                "codename":"Investigate",
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
                "data":"",
                "codename":"All",
                value: 'ALL',
                
                disabled: false,
            },
            {
                id: 'UNCLOSED',
                label: '未关闭',
                text: '未关闭',
                "data":{"n_stage_noteq":"closed"},
                "codename":"Unclosed",
                value: 'UNCLOSED',
                
                disabled: false,
            },
            {
                id: 'TOME',
                label: '指给我',
                text: '指给我',
                "data":{"n_assignedto_eq":"%SRFUSERID%"},
                "codename":"Tome",
                value: 'TOME',
                
                disabled: false,
            },
            {
                id: 'ICREATE',
                label: '我创建',
                text: '我创建',
                "data":{"n_openedby_eq":"%SRFUSERID%"},
                "codename":"Icreate",
                value: 'ICREATE',
                
                disabled: false,
            },
            {
                id: 'IREVIEW',
                label: '我评审',
                text: '我评审',
                "data":{"n_reviewedby_eq":"%SRFUSERID%"},
                "codename":"Ireview",
                value: 'IREVIEW',
                
                disabled: false,
            },
            {
                id: 'DRAFT',
                label: '草稿',
                text: '草稿',
                "data":{"n_status_eq":"draft"},
                "codename":"Draft",
                value: 'DRAFT',
                
                disabled: false,
            },
            {
                id: 'MORE',
                label: '更多',
                text: '更多',
                "data":"",
                "codename":"More",
                value: 'MORE',
                
                disabled: false,
            },
            {
                id: 'ICLOSE',
                label: '我关闭',
                text: '我关闭',
                "data":{"n_closedby_eq":"%SRFUSERID%"},
                "codename":"Iclose",
                value: 'ICLOSE',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'ACTIVED',
                label: '激活',
                text: '激活',
                "data":{"n_status_eq":"active"},
                "codename":"Actived",
                value: 'ACTIVED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'CHANGED',
                label: '已变更',
                text: '已变更',
                "data":{"n_status_eq":"changed"},
                "codename":"Changed",
                value: 'CHANGED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'TOBECLOSED',
                label: '待关闭',
                text: '待关闭',
                "data":{"n_stage_eq":"released"},
                "codename":"Tobeclosed",
                value: 'TOBECLOSED',
                "pvalue": "MORE",
                disabled: false,
            },
            {
                id: 'CLOSED',
                label: '已关闭',
                text: '已关闭',
                "data":{"n_status_eq":"closed"},
                "codename":"Closed",
                value: 'CLOSED',
                "pvalue": "MORE",
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
                "data":"",
                "codename":"All",
                value: 'all',
                
                disabled: false,
            },
            {
                id: 'ie',
                label: 'IE系列',
                text: 'IE系列',
                "data":"",
                "codename":"Ie",
                value: 'ie',
                
                disabled: false,
            },
            {
                id: 'ie11',
                label: 'IE11',
                text: 'IE11',
                "data":"",
                "codename":"Ie11",
                value: 'ie11',
                
                disabled: false,
            },
            {
                id: 'ie10',
                label: 'IE10',
                text: 'IE10',
                "data":"",
                "codename":"Ie10",
                value: 'ie10',
                
                disabled: false,
            },
            {
                id: 'ie9',
                label: 'IE9',
                text: 'IE9',
                "data":"",
                "codename":"Ie9",
                value: 'ie9',
                
                disabled: false,
            },
            {
                id: 'ie8',
                label: 'IE8',
                text: 'IE8',
                "data":"",
                "codename":"Ie8",
                value: 'ie8',
                
                disabled: false,
            },
            {
                id: 'ie7',
                label: 'IE7',
                text: 'IE7',
                "data":"",
                "codename":"Ie7",
                value: 'ie7',
                
                disabled: false,
            },
            {
                id: 'ie6',
                label: 'IE6',
                text: 'IE6',
                "data":"",
                "codename":"Ie6",
                value: 'ie6',
                
                disabled: false,
            },
            {
                id: 'chrome',
                label: 'chrome',
                text: 'chrome',
                "data":"",
                "codename":"Chrome",
                value: 'chrome',
                
                disabled: false,
            },
            {
                id: 'firefox',
                label: 'firefox系列',
                text: 'firefox系列',
                "data":"",
                "codename":"Firefox",
                value: 'firefox',
                
                disabled: false,
            },
            {
                id: 'firefox4',
                label: 'firefox4',
                text: 'firefox4',
                "data":"",
                "codename":"Firefox4",
                value: 'firefox4',
                
                disabled: false,
            },
            {
                id: 'firefox3',
                label: 'firefox3',
                text: 'firefox3',
                "data":"",
                "codename":"Firefox3",
                value: 'firefox3',
                
                disabled: false,
            },
            {
                id: 'firefox2',
                label: 'firefox2',
                text: 'firefox2',
                "data":"",
                "codename":"Firefox2",
                value: 'firefox2',
                
                disabled: false,
            },
            {
                id: 'opera',
                label: 'opera系列',
                text: 'opera系列',
                "data":"",
                "codename":"Opera",
                value: 'opera',
                
                disabled: false,
            },
            {
                id: 'opera11',
                label: 'opera11',
                text: 'opera11',
                "data":"",
                "codename":"Opera11",
                value: 'opera11',
                
                disabled: false,
            },
            {
                id: 'oprea10',
                label: 'oprea10',
                text: 'oprea10',
                "data":"",
                "codename":"Oprea10",
                value: 'oprea10',
                
                disabled: false,
            },
            {
                id: 'opera9',
                label: 'opera9',
                text: 'opera9',
                "data":"",
                "codename":"Opera9",
                value: 'opera9',
                
                disabled: false,
            },
            {
                id: 'safari',
                label: 'safari',
                text: 'safari',
                "data":"",
                "codename":"Safari",
                value: 'safari',
                
                disabled: false,
            },
            {
                id: 'maxthon',
                label: '傲游',
                text: '傲游',
                "data":"",
                "codename":"Maxthon",
                value: 'maxthon',
                
                disabled: false,
            },
            {
                id: 'uc',
                label: 'UC',
                text: 'UC',
                "data":"",
                "codename":"Uc",
                value: 'uc',
                
                disabled: false,
            },
            {
                id: 'others',
                label: '其他',
                text: '其他',
                "data":"",
                "codename":"Others",
                value: 'others',
                
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
                "data":"",
                "codename":"Sprint",
                value: 'sprint',
                
                disabled: false,
            },
            {
                id: 'waterfall',
                label: '长期项目',
                text: '长期项目',
                "data":"",
                "codename":"Waterfall",
                value: 'waterfall',
                
                disabled: false,
            },
            {
                id: 'ops',
                label: '运维项目',
                text: '运维项目',
                "data":"",
                "codename":"Ops",
                value: 'ops',
                
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
                "data":"",
                "codename":"Wait",
                value: 'wait',
                
                disabled: false,
            },
            {
                id: 'planned',
                label: '已计划',
                text: '已计划',
                "data":"",
                "codename":"Planned",
                value: 'planned',
                
                disabled: false,
            },
            {
                id: 'projected',
                label: '已立项',
                text: '已立项',
                "data":"",
                "codename":"Projected",
                value: 'projected',
                
                disabled: false,
            },
            {
                id: 'developing',
                label: '研发中',
                text: '研发中',
                "data":"",
                "codename":"Developing",
                value: 'developing',
                
                disabled: false,
            },
            {
                id: 'developed',
                label: '研发完毕',
                text: '研发完毕',
                "data":"",
                "codename":"Developed",
                value: 'developed',
                
                disabled: false,
            },
            {
                id: 'testing',
                label: '测试中',
                text: '测试中',
                "data":"",
                "codename":"Testing",
                value: 'testing',
                
                disabled: false,
            },
            {
                id: 'tested',
                label: '测试完毕',
                text: '测试完毕',
                "data":"",
                "codename":"Tested",
                value: 'tested',
                
                disabled: false,
            },
            {
                id: 'verified',
                label: '已验收',
                text: '已验收',
                "data":"",
                "codename":"Verified",
                value: 'verified',
                
                disabled: false,
            },
            {
                id: 'released',
                label: '已发布',
                text: '已发布',
                "data":"",
                "codename":"Released",
                value: 'released',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                "data":"",
                "codename":"Closed",
                value: 'closed',
                
                disabled: false,
            },
        ]
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
                "data":"",
                "codename":"Item_1",
                value: '1',
                
                disabled: false,
            },
            {
                id: '0',
                label: '不允许',
                text: '不允许',
                "data":"",
                "codename":"Item_0",
                value: '0',
                
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
                "data":"",
                "codename":"Draft",
                value: 'draft',
                
                disabled: false,
            },
            {
                id: 'active',
                label: '激活',
                text: '激活',
                "data":"",
                "codename":"Active",
                value: 'active',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                "data":"",
                "codename":"Closed",
                value: 'closed',
                
                disabled: false,
            },
            {
                id: 'changed',
                label: '已变更',
                text: '已变更',
                "data":"",
                "codename":"Changed",
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
                "data":"",
                "codename":"Item_0",
                value: '0',
                
                disabled: false,
            },
            {
                id: '1',
                label: '1',
                text: '1',
                "data":"",
                "codename":"Item_1",
                value: '1',
                
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
                "data":"",
                "codename":"Yes",
                value: 'yes',
                
                disabled: false,
            },
            {
                id: 'no',
                label: '否',
                text: '否',
                "data":"",
                "codename":"No",
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
                "data":"",
                "codename":"Customer",
                value: 'customer',
                
                disabled: false,
            },
            {
                id: 'user',
                label: '用户',
                text: '用户',
                "data":"",
                "codename":"User",
                value: 'user',
                
                disabled: false,
            },
            {
                id: 'po',
                label: '产品经理',
                text: '产品经理',
                "data":"",
                "codename":"Po",
                value: 'po',
                
                disabled: false,
            },
            {
                id: 'market',
                label: '市场',
                text: '市场',
                "data":"",
                "codename":"Market",
                value: 'market',
                
                disabled: false,
            },
            {
                id: 'service',
                label: '客服',
                text: '客服',
                "data":"",
                "codename":"Service",
                value: 'service',
                
                disabled: false,
            },
            {
                id: 'operation',
                label: '运营',
                text: '运营',
                "data":"",
                "codename":"Operation",
                value: 'operation',
                
                disabled: false,
            },
            {
                id: 'support',
                label: '技术支持',
                text: '技术支持',
                "data":"",
                "codename":"Support",
                value: 'support',
                
                disabled: false,
            },
            {
                id: 'competitor',
                label: '竞争对手',
                text: '竞争对手',
                "data":"",
                "codename":"Competitor",
                value: 'competitor',
                
                disabled: false,
            },
            {
                id: 'partner',
                label: '合作伙伴',
                text: '合作伙伴',
                "data":"",
                "codename":"Partner",
                value: 'partner',
                
                disabled: false,
            },
            {
                id: 'dev',
                label: '开发人员',
                text: '开发人员',
                "data":"",
                "codename":"Dev",
                value: 'dev',
                
                disabled: false,
            },
            {
                id: 'tester',
                label: '测试人员',
                text: '测试人员',
                "data":"",
                "codename":"Tester",
                value: 'tester',
                
                disabled: false,
            },
            {
                id: 'bug',
                label: 'Bug',
                text: 'Bug',
                "data":"",
                "codename":"Bug",
                value: 'bug',
                
                disabled: false,
            },
            {
                id: 'forum',
                label: '论坛',
                text: '论坛',
                "data":"",
                "codename":"Forum",
                value: 'forum',
                
                disabled: false,
            },
            {
                id: 'other',
                label: '其它',
                text: '其它',
                "data":"",
                "codename":"Other",
                value: 'other',
                
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
                "data":"",
                "codename":"Wait",
                "color": "rgba(131, 138, 157, 1)",
                value: 'wait',
                
                disabled: false,
            },
            {
                id: 'doing',
                label: '进行中',
                text: '进行中',
                "data":"",
                "codename":"Doing",
                "color": "rgba(255, 93, 93, 1)",
                value: 'doing',
                
                disabled: false,
            },
            {
                id: 'done',
                label: '已完成',
                text: '已完成',
                "data":"",
                "codename":"Done",
                "color": "rgba(67, 160, 71, 1)",
                value: 'done',
                
                disabled: false,
            },
            {
                id: 'pause',
                label: '已暂停',
                text: '已暂停',
                "data":"",
                "codename":"Pause",
                "color": "rgba(255, 152, 0, 1)",
                value: 'pause',
                
                disabled: false,
            },
            {
                id: 'cancel',
                label: '已取消',
                text: '已取消',
                "data":"",
                "codename":"Cancel",
                "color": "rgba(131, 138, 157, 1)",
                value: 'cancel',
                
                disabled: false,
            },
            {
                id: 'closed',
                label: '已关闭',
                text: '已关闭',
                "data":"",
                "codename":"Closed",
                "color": "rgba(131, 138, 157, 1)",
                value: 'closed',
                
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
                "data":"",
                "codename":"Item_1",
                value: 1,
                
                disabled: false,
            },
            {
                id: '2',
                label: '2',
                text: '2',
                "data":"",
                "codename":"Item_2",
                value: 2,
                
                disabled: false,
            },
            {
                id: '3',
                label: '3',
                text: '3',
                "data":"",
                "codename":"Item_3",
                value: 3,
                
                disabled: false,
            },
            {
                id: '4',
                label: '4',
                text: '4',
                "data":"",
                "codename":"Item_4",
                value: 4,
                
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
                "data":"",
                "codename":"Item_1",
                value: 1,
                
                disabled: false,
            },
            {
                id: '0',
                label: '否',
                text: '否',
                "data":"",
                "codename":"Item_0",
                value: 0,
                
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
        srfkey: 'Testcase__result',
        emptytext: '未定义',
        "codelisttype":"static",
        items: [
            {
                id: 'n/a',
                label: '忽略',
                text: '忽略',
                "data":"",
                "codename":"N_a",
                value: 'n/a',
                
                disabled: false,
            },
            {
                id: 'pass',
                label: '通过',
                text: '通过',
                "data":"",
                "codename":"Pass",
                value: 'pass',
                
                disabled: false,
            },
            {
                id: 'fail',
                label: '失败',
                text: '失败',
                "data":"",
                "codename":"Fail",
                value: 'fail',
                
                disabled: false,
            },
            {
                id: 'blocked',
                label: '阻塞',
                text: '阻塞',
                "data":"",
                "codename":"Blocked",
                value: 'blocked',
                
                disabled: false,
            },
        ]
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
                "data":"",
                "codename":"Item_1",
                value: 1,
                
                disabled: false,
            },
            {
                id: '2',
                label: '2',
                text: '2',
                "data":"",
                "codename":"Item_2",
                value: 2,
                
                disabled: false,
            },
            {
                id: '3',
                label: '3',
                text: '3',
                "data":"",
                "codename":"Item_3",
                value: 3,
                
                disabled: false,
            },
            {
                id: '4',
                label: '4',
                text: '4',
                "data":"",
                "codename":"Item_4",
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
                "data":"",
                "codename":"Bydesign",
                value: 'bydesign',
                
                disabled: false,
            },
            {
                id: 'duplicate',
                label: '重复Bug',
                text: '重复Bug',
                "data":"",
                "codename":"Duplicate",
                value: 'duplicate',
                
                disabled: false,
            },
            {
                id: 'external',
                label: '外部原因',
                text: '外部原因',
                "data":"",
                "codename":"External",
                value: 'external',
                
                disabled: false,
            },
            {
                id: 'fixed',
                label: '已解决',
                text: '已解决',
                "data":"",
                "codename":"Fixed",
                value: 'fixed',
                
                disabled: false,
            },
            {
                id: 'notrepro',
                label: '无法重现',
                text: '无法重现',
                "data":"",
                "codename":"Notrepro",
                value: 'notrepro',
                
                disabled: false,
            },
            {
                id: 'postponed',
                label: '延期处理',
                text: '延期处理',
                "data":"",
                "codename":"Postponed",
                value: 'postponed',
                
                disabled: false,
            },
            {
                id: 'willnotfix',
                label: '不予解决',
                text: '不予解决',
                "data":"",
                "codename":"Willnotfix",
                value: 'willnotfix',
                
                disabled: false,
            },
            {
                id: 'tostory',
                label: '转为需求',
                text: '转为需求',
                "data":"",
                "codename":"Tostory",
                value: 'tostory',
                
                disabled: false,
            },
        ]
    }
    ]];
});

