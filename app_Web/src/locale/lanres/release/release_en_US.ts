
export default {
  fields: {
    stories: '完成的需求',
    marker: '里程碑',
    id: 'ID',
    leftbugs: '遗留的Bug',
    bugs: '解决的Bug',
    deleted: '已删除',
    name: '发布名称',
    date: '发布日期',
    status: '状态',
    substatus: '子状态',
    desc: '描述',
    buildname: '版本',
    product: '产品',
    build: '版本',
    branch: '平台/分支',
  },
	views: {
		gridview: {
			caption: "发布",
      title: '发布',
		},
		editview: {
			caption: "发布",
      title: '发布',
		},
	},
	main_form: {
		details: {
			group1: "release基本信息", 
			formpage1: "基本信息", 
			group2: "操作信息", 
			formpage2: "其它", 
			srforikey: "", 
			srfkey: "ID", 
			srfmajortext: "发布名称", 
			srftempmode: "", 
			srfuf: "", 
			srfdeid: "", 
			srfsourcekey: "", 
			name: "发布名称", 
			id: "ID", 
		},
		uiactions: {
		},
	},
	main_grid: {
		columns: {
			id: "ID",
			name: "发布名称",
			buildname: "版本",
			status: "状态",
			date: "发布日期",
		},
		uiactions: {
		},
	},
	gridviewtoolbar_toolbar: {
		deuiaction1: {
			caption: "New",
			tip: "New",
		},
		deuiaction4: {
			caption: "Remove",
			tip: "Remove {0}",
		},
		seperator1: {
			caption: "",
			tip: "",
		},
		deuiaction2: {
			caption: "刷新",
			tip: "刷新",
		},
	},
	editviewtoolbar_toolbar: {
		tbitem3: {
			caption: "Save",
			tip: "Save",
		},
		tbitem4: {
			caption: "Save And New",
			tip: "Save And New",
		},
		tbitem5: {
			caption: "Save And Close",
			tip: "Save And Close Window",
		},
		tbitem6: {
			caption: "-",
			tip: "",
		},
		tbitem7: {
			caption: "Remove And Close",
			tip: "Remove And Close Window",
		},
		tbitem8: {
			caption: "-",
			tip: "",
		},
		tbitem12: {
			caption: "New",
			tip: "New",
		},
		tbitem13: {
			caption: "-",
			tip: "",
		},
		tbitem14: {
			caption: "Copy",
			tip: "Copy {0}",
		},
		tbitem16: {
			caption: "-",
			tip: "",
		},
		tbitem23: {
			caption: "第一个记录",
			tip: "第一个记录",
		},
		tbitem24: {
			caption: "上一个记录",
			tip: "上一个记录",
		},
		tbitem25: {
			caption: "下一个记录",
			tip: "下一个记录",
		},
		tbitem26: {
			caption: "最后一个记录",
			tip: "最后一个记录",
		},
		tbitem21: {
			caption: "-",
			tip: "",
		},
		tbitem22: {
			caption: "Help",
			tip: "Help",
		},
	},
};