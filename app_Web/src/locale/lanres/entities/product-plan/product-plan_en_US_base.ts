import commonLogic from '@/locale/logic/common/common-logic';

function getLocaleResourceBase(){
	const data:any = {
		fields: {
			title: commonLogic.appcommonhandle("名称",null),
			id: commonLogic.appcommonhandle("编号",null),
			begin: commonLogic.appcommonhandle("开始日期",null),
			desc: commonLogic.appcommonhandle("描述",null),
			end: commonLogic.appcommonhandle("结束日期",null),
			deleted: commonLogic.appcommonhandle("已删除",null),
			order: commonLogic.appcommonhandle("排序",null),
			parentname: commonLogic.appcommonhandle("父计划名称",null),
			branch: commonLogic.appcommonhandle("平台/分支",null),
			parent: commonLogic.appcommonhandle("父计划",null),
			product: commonLogic.appcommonhandle("产品",null),
			statuss: commonLogic.appcommonhandle("状态",null),
			future: commonLogic.appcommonhandle("待定",null),
			delta: commonLogic.appcommonhandle("周期",null),
			oldtitle: commonLogic.appcommonhandle("上一次计划名称",null),
			storycnt: commonLogic.appcommonhandle("需求数",null),
			bugcnt: commonLogic.appcommonhandle("bug数",null),
			isexpired: commonLogic.appcommonhandle("是否过期",null),
			estimatecnt: commonLogic.appcommonhandle("工时数",null),
			beginstr: commonLogic.appcommonhandle("开始日期",null),
			endstr: commonLogic.appcommonhandle("结束日期",null),
			plantemplet: commonLogic.appcommonhandle("计划模板",null),
		},
			views: {
				maintabexp: {
					caption: commonLogic.appcommonhandle("产品计划",null),
					title: commonLogic.appcommonhandle("计划",null),
				},
				maineditview: {
					caption: commonLogic.appcommonhandle("产品计划",null),
					title: commonLogic.appcommonhandle("计划详情",null),
				},
				gridview: {
					caption: commonLogic.appcommonhandle("产品计划",null),
					title: commonLogic.appcommonhandle("产品计划表格视图",null),
				},
				projectgridview9: {
					caption: commonLogic.appcommonhandle("项目",null),
					title: commonLogic.appcommonhandle("产品计划表格视图（项目）",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("产品计划",null),
					title: commonLogic.appcommonhandle("计划",null),
				},
				maindataeditview: {
					caption: commonLogic.appcommonhandle("产品计划",null),
					title: commonLogic.appcommonhandle("产品计划编辑视图",null),
				},
				optionview: {
					caption: commonLogic.appcommonhandle("导入计划模板",null),
					title: commonLogic.appcommonhandle("导入计划模板",null),
				},
			},
			main_form: {
				details: {
					grouppanel2: commonLogic.appcommonhandle("分组面板",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("productplan基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					product: commonLogic.appcommonhandle("产品",null), 
					branch: commonLogic.appcommonhandle("平台/分支",null), 
					title: commonLogic.appcommonhandle("名称",null), 
					oldtitle: commonLogic.appcommonhandle("",null), 
					begin: commonLogic.appcommonhandle("开始日期",null), 
					future: commonLogic.appcommonhandle("",null), 
					end: commonLogic.appcommonhandle("结束日期",null), 
					delta: commonLogic.appcommonhandle("",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			maindata_form: {
				details: {
					druipart2: commonLogic.appcommonhandle("",null), 
					grouppanel4: commonLogic.appcommonhandle("分组面板",null), 
					formpage2: commonLogic.appcommonhandle("需求",null), 
					druipart3: commonLogic.appcommonhandle("",null), 
					grouppanel3: commonLogic.appcommonhandle("分组面板",null), 
					formpage3: commonLogic.appcommonhandle("Bug",null), 
					druipart4: commonLogic.appcommonhandle("",null), 
					grouppanel5: commonLogic.appcommonhandle("子计划",null), 
					druipart1: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("历史记录",null), 
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("计划详情",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					product: commonLogic.appcommonhandle("产品",null), 
					title: commonLogic.appcommonhandle("名称",null), 
					begin: commonLogic.appcommonhandle("开始日期",null), 
					beginstr: commonLogic.appcommonhandle("开始日期",null), 
					end: commonLogic.appcommonhandle("结束日期",null), 
					endstr: commonLogic.appcommonhandle("结束日期",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					statuss: commonLogic.appcommonhandle("状态",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			importplantemplet_form: {
				details: {
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					plantemplet: commonLogic.appcommonhandle("计划模板",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			info_form: {
				details: {
					grouppanel1: commonLogic.appcommonhandle("分组面板",null), 
					druipart1: commonLogic.appcommonhandle("",null), 
					grouppanel2: commonLogic.appcommonhandle("历史记录",null), 
					group1: commonLogic.appcommonhandle("基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("编号",null), 
					srfmajortext: commonLogic.appcommonhandle("名称",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					product: commonLogic.appcommonhandle("产品",null), 
					title: commonLogic.appcommonhandle("名称",null), 
					begin: commonLogic.appcommonhandle("开始日期",null), 
					end: commonLogic.appcommonhandle("结束日期",null), 
					desc: commonLogic.appcommonhandle("描述",null), 
					id: commonLogic.appcommonhandle("编号",null), 
				},
				uiactions: {
				},
			},
			mainproject_grid: {
				columns: {
					title: commonLogic.appcommonhandle("名称",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			maininfo_grid: {
				columns: {
					id: commonLogic.appcommonhandle("编号",null),
					title: commonLogic.appcommonhandle("名称",null),
					beginstr: commonLogic.appcommonhandle("开始日期",null),
					endstr: commonLogic.appcommonhandle("结束日期",null),
					storycnt: commonLogic.appcommonhandle("需求数",null),
					bugcnt: commonLogic.appcommonhandle("bug数",null),
					actions: commonLogic.appcommonhandle("操作",null),
				},
				nodata:commonLogic.appcommonhandle("",null),
			exportColumns: {
					id: commonLogic.appcommonhandle("编号",null),
					title: commonLogic.appcommonhandle("名称",null),
					beginstr: commonLogic.appcommonhandle("开始日期",null),
					begin: commonLogic.appcommonhandle("开始日期",null),
					end: commonLogic.appcommonhandle("结束日期",null),
					endstr: commonLogic.appcommonhandle("结束日期",null),
					storycnt: commonLogic.appcommonhandle("需求数",null),
					bugcnt: commonLogic.appcommonhandle("bug数",null),
					statuss: commonLogic.appcommonhandle("状态",null),
			},
				uiactions: {
				productplan_addproject: commonLogic.appcommonhandle("添加项目",null),
				productplan_relationstory: commonLogic.appcommonhandle("关联需求",null),
				productplan_relationbug: commonLogic.appcommonhandle("关联Bug",null),
				productplan_mainedit: commonLogic.appcommonhandle("编辑",null),
				productplan_newsubplan: commonLogic.appcommonhandle("子计划",null),
				copy: commonLogic.appcommonhandle("Copy",null),
				productplan_delete: commonLogic.appcommonhandle("删除",null),
				},
			},
			editviewtoolbar_toolbar: {
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Save And Close",null),
					tip: commonLogic.appcommonhandle("Save And Close Window",null),
				},
			},
			maindataeditviewtoolbar_toolbar: {
				deuiaction1_newsubplancz: {
					caption: commonLogic.appcommonhandle("子计划",null),
					tip: commonLogic.appcommonhandle("子计划",null),
				},
				deuiaction1_mainedit: {
					caption: commonLogic.appcommonhandle("编辑",null),
					tip: commonLogic.appcommonhandle("编辑",null),
				},
				deuiaction1_deletecz: {
					caption: commonLogic.appcommonhandle("删除",null),
					tip: commonLogic.appcommonhandle("删除",null),
				},
			},
			gridviewtoolbar_toolbar: {
				deuiaction3_create: {
					caption: commonLogic.appcommonhandle("创建计划",null),
					tip: commonLogic.appcommonhandle("创建计划",null),
				},
				deuiaction3_addplantemplet: {
					caption: commonLogic.appcommonhandle("导入模板",null),
					tip: commonLogic.appcommonhandle("导入模板",null),
				},
				deuiaction2: {
					caption: commonLogic.appcommonhandle("刷新",null),
					tip: commonLogic.appcommonhandle("刷新",null),
				},
				deuiaction1: {
					caption: commonLogic.appcommonhandle("Export",null),
					tip: commonLogic.appcommonhandle("Export {0} Data To Excel",null),
				},
				deuiaction4: {
					caption: commonLogic.appcommonhandle("Filter",null),
					tip: commonLogic.appcommonhandle("Filter",null),
				},
			},
			maintabexptabexppanel_tabexppanel: {
				tabviewpanels: {
					tabviewpanel: {
						caption: commonLogic.appcommonhandle("需求",null),
					},
					tabviewpanel2: {
						caption: commonLogic.appcommonhandle("Bug",null),
					},
					tabviewpanel4: {
						caption: commonLogic.appcommonhandle("计划详情",null),
					}
				},
				uiactions: {
				},
			},
		};
		return data;
}

export default getLocaleResourceBase;