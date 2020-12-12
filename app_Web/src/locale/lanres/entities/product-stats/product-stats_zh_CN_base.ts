import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("产品统计", null),
		fields: {
			id: commonLogic.appcommonhandle("产品编号",null),
			deleted: commonLogic.appcommonhandle("已删除",null),
			storycnt: commonLogic.appcommonhandle("需求总数",null),
			productplancnt: commonLogic.appcommonhandle("计划总数",null),
			releasecnt: commonLogic.appcommonhandle("发布总数",null),
			waitstorycnt: commonLogic.appcommonhandle("未开始需求数",null),
			plannedstorycnt: commonLogic.appcommonhandle("已计划需求数",null),
			developingstorycnt: commonLogic.appcommonhandle("开发中需求数",null),
			testingstorycnt: commonLogic.appcommonhandle("测试中需求数",null),
			releasedstorycnt: commonLogic.appcommonhandle("已发布需求数",null),
			unendproductplancnt: commonLogic.appcommonhandle("未过期计划数",null),
			resprojectcnt: commonLogic.appcommonhandle("关联项目数",null),
			undoneresprojectcnt: commonLogic.appcommonhandle("未完成关联项目数",null),
			normalreleasecnt: commonLogic.appcommonhandle("维护中发布数",null),
			activestorycnt: commonLogic.appcommonhandle("激活需求数",null),
			activebugcnt: commonLogic.appcommonhandle("未解决Bug数",null),
			name: commonLogic.appcommonhandle("产品名称",null),
			assigntomebugcnt: commonLogic.appcommonhandle("指派给我的Bug数",null),
			notclosedbugcnt: commonLogic.appcommonhandle("未关闭Bug数",null),
			bugcnt: commonLogic.appcommonhandle("所有Bug数",null),
			unconfirmbugcnt: commonLogic.appcommonhandle("未确认Bug数",null),
			yesterdayclosedbugcnt: commonLogic.appcommonhandle("昨天关闭Bug数",null),
			yesterdayconfirmbugcnt: commonLogic.appcommonhandle("昨天确认Bug数",null),
			yesterdayresolvedbugcnt: commonLogic.appcommonhandle("昨天解决Bug数",null),
			postponedprojectcnt: commonLogic.appcommonhandle("已延期",null),
			currproject: commonLogic.appcommonhandle("当前项目",null),
			status: commonLogic.appcommonhandle("状态",null),
			code: commonLogic.appcommonhandle("产品代号",null),
			type: commonLogic.appcommonhandle("产品类型",null),
			order1: commonLogic.appcommonhandle("产品排序",null),
			istop: commonLogic.appcommonhandle("是否置顶",null),
		},
			views: {
				allgridview: {
					caption: commonLogic.appcommonhandle("所有产品",null),
					title: commonLogic.appcommonhandle("所有产品",null),
				},
				testeditview9: {
					caption: commonLogic.appcommonhandle("产品统计",null),
					title: commonLogic.appcommonhandle("产品统计编辑视图",null),
				},
				editview9: {
					caption: commonLogic.appcommonhandle("产品统计",null),
					title: commonLogic.appcommonhandle("产品统计编辑视图",null),
				},
				gridview9: {
					caption: commonLogic.appcommonhandle("产品统计",null),
					title: commonLogic.appcommonhandle("产品统计表格视图",null),
				},
			},
			main2_form: {
				details: {
					rawitem1: commonLogic.appcommonhandle("",null), 
					rawitem3: commonLogic.appcommonhandle("",null), 
					button4: commonLogic.appcommonhandle("查看全部",null), 
					button5: commonLogic.appcommonhandle("提需求",null), 
					grouppanel6: commonLogic.appcommonhandle("",null), 
					rawitem2: commonLogic.appcommonhandle("",null), 
					grouppanel13: commonLogic.appcommonhandle("需求状态统计",null), 
					grouppanel1: commonLogic.appcommonhandle("产品需求统计",null), 
					rawitem5: commonLogic.appcommonhandle("",null), 
					button1: commonLogic.appcommonhandle("创建计划",null), 
					grouppanel3: commonLogic.appcommonhandle("",null), 
					rawitem6: commonLogic.appcommonhandle("",null), 
					grouppanel8: commonLogic.appcommonhandle("计划",null), 
					rawitem4: commonLogic.appcommonhandle("",null), 
					rawitem11: commonLogic.appcommonhandle("",null), 
					button2: commonLogic.appcommonhandle("创建项目",null), 
					grouppanel4: commonLogic.appcommonhandle("",null), 
					rawitem7: commonLogic.appcommonhandle("",null), 
					rawitem8: commonLogic.appcommonhandle("",null), 
					grouppanel10: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel9: commonLogic.appcommonhandle("项目",null), 
					rawitem9: commonLogic.appcommonhandle("",null), 
					button3: commonLogic.appcommonhandle("创建发布",null), 
					grouppanel5: commonLogic.appcommonhandle("",null), 
					rawitem10: commonLogic.appcommonhandle("",null), 
					grouppanel11: commonLogic.appcommonhandle("发布",null), 
					grouppanel2: commonLogic.appcommonhandle("产品统计",null), 
					group1: commonLogic.appcommonhandle("统计",null), 
					grouppanel7: commonLogic.appcommonhandle("隐藏表单项",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("产品编号",null), 
					srfmajortext: commonLogic.appcommonhandle("产品名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					product: commonLogic.appcommonhandle("产品标识",null), 
					storycnt: commonLogic.appcommonhandle("",null), 
					waitstorycnt: commonLogic.appcommonhandle("未开始",null), 
					plannedstorycnt: commonLogic.appcommonhandle("已计划",null), 
					developingstorycnt: commonLogic.appcommonhandle("研发中",null), 
					testingstorycnt: commonLogic.appcommonhandle("测试中",null), 
					releasedstorycnt: commonLogic.appcommonhandle("已发布",null), 
					custom1: commonLogic.appcommonhandle("计划总数",null), 
					custom2: commonLogic.appcommonhandle("未过期计划数",null), 
					formitemex1: commonLogic.appcommonhandle("",null), 
					custom3: commonLogic.appcommonhandle("关联项目数",null), 
					custom4: commonLogic.appcommonhandle("未完成关联项目数",null), 
					formitemex2: commonLogic.appcommonhandle("",null), 
					postponedprojectcnt: commonLogic.appcommonhandle("已延期",null), 
					custom5: commonLogic.appcommonhandle("发布总数",null), 
					custom6: commonLogic.appcommonhandle("维护中发布数",null), 
					formitemex3: commonLogic.appcommonhandle("",null), 
					productplancnt: commonLogic.appcommonhandle("",null), 
					unendproductplancnt: commonLogic.appcommonhandle("",null), 
					resprojectcnt: commonLogic.appcommonhandle("",null), 
					undoneresprojectcnt: commonLogic.appcommonhandle("",null), 
					releasecnt: commonLogic.appcommonhandle("",null), 
					normalreleasecnt: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("产品编号",null), 
				},
				uiactions: {
					productstats_openproductstoryview: commonLogic.appcommonhandle("查看全部",null),
					productstats_openstorycreateview: commonLogic.appcommonhandle("提需求",null),
					productstats_openproductplancreateview: commonLogic.appcommonhandle("创建计划",null),
					productstats_openprojectcreateview: commonLogic.appcommonhandle("创建项目",null),
					productstats_openreleasedcreateview: commonLogic.appcommonhandle("创建发布",null),
				},
			},
			testmain2_form: {
				details: {
					group1: commonLogic.appcommonhandle("产品统计基本信息",null), 
					rawitem1: commonLogic.appcommonhandle("",null), 
					rawitem2: commonLogic.appcommonhandle("",null), 
					rawitem3: commonLogic.appcommonhandle("",null), 
					grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("产品编号",null), 
					srfmajortext: commonLogic.appcommonhandle("产品名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					custom1: commonLogic.appcommonhandle("所有Bug数",null), 
					custom2: commonLogic.appcommonhandle("指派给我的Bug数",null), 
					formitemex1: commonLogic.appcommonhandle("所有",null), 
					assigntomebugcnt: commonLogic.appcommonhandle("指派给我",null), 
					yesterdayresolvedbugcnt: commonLogic.appcommonhandle("昨天解决Bug数",null), 
					custom3: commonLogic.appcommonhandle("所有Bug数",null), 
					custom4: commonLogic.appcommonhandle("未解决Bug数",null), 
					formitemex2: commonLogic.appcommonhandle("",null), 
					activebugcnt: commonLogic.appcommonhandle("未解决",null), 
					yesterdayconfirmbugcnt: commonLogic.appcommonhandle("昨天确认Bug数",null), 
					custom5: commonLogic.appcommonhandle("所有Bug数",null), 
					custom6: commonLogic.appcommonhandle("未确认Bug数",null), 
					formitemex3: commonLogic.appcommonhandle("",null), 
					unconfirmbugcnt: commonLogic.appcommonhandle("未确认",null), 
					yesterdayclosedbugcnt: commonLogic.appcommonhandle("昨天关闭Bug数",null), 
					custom7: commonLogic.appcommonhandle("所有Bug数",null), 
					custom8: commonLogic.appcommonhandle("未关闭Bug数",null), 
					formitemex4: commonLogic.appcommonhandle("",null), 
					notclosedbugcnt: commonLogic.appcommonhandle("未关闭",null), 
					id: commonLogic.appcommonhandle("产品编号",null), 
				},
				uiactions: {
				},
			},
			allproduct_grid: {
				columns: {
					name: commonLogic.appcommonhandle("产品名称",null),
					currproject: commonLogic.appcommonhandle("当前项目",null),
					productplancnt: commonLogic.appcommonhandle("计划数",null),
					releasecnt: commonLogic.appcommonhandle("发布数",null),
					activestorycnt: commonLogic.appcommonhandle("激活需求",null),
					activebugcnt: commonLogic.appcommonhandle("未解决Bug",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			openitems_grid: {
				columns: {
					name: commonLogic.appcommonhandle("产品名称",null),
					currproject: commonLogic.appcommonhandle("当前项目",null),
					productplancnt: commonLogic.appcommonhandle("计划数",null),
					releasecnt: commonLogic.appcommonhandle("发布数",null),
					activestorycnt: commonLogic.appcommonhandle("激活需求",null),
					activebugcnt: commonLogic.appcommonhandle("未解决Bug",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			allgridviewtoolbar_toolbar: {
				deuiaction3_addproduct: {
					caption: commonLogic.appcommonhandle("添加产品",null),
					tip: commonLogic.appcommonhandle("添加产品",null),
				},
				deuiaction2: {
					caption: commonLogic.appcommonhandle("刷新",null),
					tip: commonLogic.appcommonhandle("刷新",null),
				},
				deuiaction1: {
					caption: commonLogic.appcommonhandle("导出",null),
					tip: commonLogic.appcommonhandle("导出",null),
				},
				deuiaction4: {
					caption: commonLogic.appcommonhandle("过滤",null),
					tip: commonLogic.appcommonhandle("过滤",null),
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;