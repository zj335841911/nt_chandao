export default {
  fields: {
    name: "名称编号",
    builder: "构建者",
    desc: "描述",
    id: "id",
    deleted: "已删除",
    scmpath: "源代码地址",
    filepath: "下载地址",
    stories: "完成的需求",
    bugs: "解决的Bug",
    date: "打包日期",
    product: "产品",
    branch: "平台/分支",
    project: "所属项目",
    productname: "产品名称",
    ids: "Bug版本健值",
    files: "附件",
    rebuild: "重新构建",
    releasetype: "运行模式",
    frontapplication: "系统应用",
    backgroundid: "后台体系",
    sqlid: "运行数据库",
  },
	views: {
		mobpickupmdview: {
			caption: '版本',
		},
		mobmdview: {
			caption: '版本',
		},
		mobeditview: {
			caption: '版本',
		},
		mobpickupview: {
			caption: '版本',
		},
		newmobeditview: {
			caption: '版本',
		},
		mobmpickupview: {
			caption: '版本',
		},
	},
	mobmain_form: {
		details: {
			druipart1: '', 
			grouppanel1: '历史记录', 
			group1: '版本基本信息', 
			formpage1: '基本信息', 
			srforikey: '', 
			srfkey: 'id', 
			srfmajortext: '名称编号', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			name: '名称编号', 
			date: '打包日期', 
			builder: '构建者', 
			scmpath: '源代码地址', 
			filepath: '下载地址', 
			desc: '描述', 
			id: 'id', 
		},
		uiactions: {
		},
	},
	mobnewform_form: {
		details: {
			grouppanel2: '分组面板', 
			grouppanel1: '基本信息', 
			formpage1: '基本信息', 
			srforikey: '', 
			srfkey: 'id', 
			srfmajortext: '名称编号', 
			srftempmode: '', 
			srfuf: '', 
			srfdeid: '', 
			srfsourcekey: '', 
			project: '所属项目', 
			product: '产品', 
			productname: '产品名称', 
			name: '名称编号', 
			builder: '构建者', 
			date: '打包日期', 
			scmpath: '源代码地址', 
			filepath: '下载地址', 
			desc: '描述', 
			id: 'id', 
		},
		uiactions: {
		},
	},
	mobdef_searchform: {
		details: {
			formpage1: '常规条件', 
			n_name_like: '名称编号', 
			n_productname_like: '产品名称', 
			n_date_ltandeq: '截止日期', 
		},
		uiactions: {
		},
	},
	mobmdviewrighttoolbar_toolbar: {
	},
	mobeditviewrighttoolbar_toolbar: {
	},
	newmobeditviewrighttoolbar_toolbar: {
		tbitem1: {
			caption: '保存',
			tip: '保存',
		},
	},
};