import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("系统应用", null),
		fields: {
			pssysappid: commonLogic.appcommonhandle("系统应用标识",null),
			createdate: commonLogic.appcommonhandle("建立时间",null),
			updateman: commonLogic.appcommonhandle("更新人",null),
			createman: commonLogic.appcommonhandle("建立人",null),
			pssysappname: commonLogic.appcommonhandle("系统应用名称",null),
			updatedate: commonLogic.appcommonhandle("更新时间",null),
			appfolder: commonLogic.appcommonhandle("应用目录",null),
			apppkgname: commonLogic.appcommonhandle("代码名称",null),
			appmode: commonLogic.appcommonhandle("应用模式",null),
			apptag: commonLogic.appcommonhandle("应用标记",null),
			appsn: commonLogic.appcommonhandle("应用编号",null),
			apptag2: commonLogic.appcommonhandle("应用标记2",null),
			apptag4: commonLogic.appcommonhandle("应用标记4",null),
			apptag3: commonLogic.appcommonhandle("应用标记3",null),
			autoaddappview: commonLogic.appcommonhandle("自动添加应用视图",null),
			btnnoprivdm: commonLogic.appcommonhandle("按钮无权限显示模式",null),
			codefolder: commonLogic.appcommonhandle("代码目录",null),
			defaultpub: commonLogic.appcommonhandle("默认应用",null),
			enabledynasys: commonLogic.appcommonhandle("支持动态系统",null),
			enablec12toc24: commonLogic.appcommonhandle("转换12列至24列布局",null),
			enalocalservice: commonLogic.appcommonhandle("启用本地服务",null),
			finoprivdm: commonLogic.appcommonhandle("表单项无权限显示模式",null),
			enablestoryboard: commonLogic.appcommonhandle("启用故事板",null),
			gcnoprivdm: commonLogic.appcommonhandle("表格列无权限显示模式",null),
			fiupdateprivtag: commonLogic.appcommonhandle("输出表单项更新权限标记",null),
			gridforcefit: commonLogic.appcommonhandle("表格适应屏宽",null),
			gridcolenablelink: commonLogic.appcommonhandle("表格列启用链接",null),
			iconfile: commonLogic.appcommonhandle("图标文件",null),
			gridrowactivemode: commonLogic.appcommonhandle("表格行激活模式",null),
			mainmenuside: commonLogic.appcommonhandle("视图主菜单方向",null),
			logicname: commonLogic.appcommonhandle("中文名称",null),
			orientationmode: commonLogic.appcommonhandle("移动端方向设置",null),
			memo: commonLogic.appcommonhandle("备注",null),
			pfstyleparam: commonLogic.appcommonhandle("应用样式参数",null),
			preventxss: commonLogic.appcommonhandle("防止XSS攻击",null),
			psapptypeid: commonLogic.appcommonhandle("应用类型",null),
			psapptypename: commonLogic.appcommonhandle("应用类型",null),
			pspfcdnid: commonLogic.appcommonhandle("应用CDN",null),
			pspfcdnname: commonLogic.appcommonhandle("应用CDN",null),
			pspfid: commonLogic.appcommonhandle("前台技术架构",null),
			pspfstyleid: commonLogic.appcommonhandle("应用样式",null),
			psstudiothemename: commonLogic.appcommonhandle("应用主题",null),
			psstudiothemeid: commonLogic.appcommonhandle("应用主题",null),
			pubrefviewonly: commonLogic.appcommonhandle("只发布引用视图",null),
			pubsysrefviewonly: commonLogic.appcommonhandle("只发布系统引用视图（废弃）",null),
			removeflag: commonLogic.appcommonhandle("删除模式",null),
			servicecodename: commonLogic.appcommonhandle("服务代码名称",null),
			startpagefile: commonLogic.appcommonhandle("起始页图片文件",null),
			uaclogin: commonLogic.appcommonhandle("启用统一认证",null),
			uistyle: commonLogic.appcommonhandle("内建界面式样",null),
			pssysserviceapiname: commonLogic.appcommonhandle("默认服务接口",null),
			pssysserviceapiid: commonLogic.appcommonhandle("默认服务接口",null),
			usercat: commonLogic.appcommonhandle("用户分类",null),
			usertag: commonLogic.appcommonhandle("用户标记",null),
			userparams: commonLogic.appcommonhandle("自定义参数",null),
			usertag2: commonLogic.appcommonhandle("用户标记2",null),
			usertag4: commonLogic.appcommonhandle("用户标记4",null),
			usertag3: commonLogic.appcommonhandle("用户标记3",null),
			validflag: commonLogic.appcommonhandle("是否启用",null),
			pssystemid: commonLogic.appcommonhandle("系统",null),
			pssystemname: commonLogic.appcommonhandle("系统",null),
		},
		};
		return data;
}
export default getLocaleResourceBase;