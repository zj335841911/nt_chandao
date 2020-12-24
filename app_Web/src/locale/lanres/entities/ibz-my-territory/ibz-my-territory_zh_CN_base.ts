import commonLogic from '@/locale/logic/common/common-logic';
function getLocaleResourceBase(){
	const data:any = {
		appdename: commonLogic.appcommonhandle("我的地盘", null),
		fields: {
			fails: commonLogic.appcommonhandle("fails",null),
			address: commonLogic.appcommonhandle("通讯地址",null),
			password: commonLogic.appcommonhandle("密码",null),
			weixin: commonLogic.appcommonhandle("微信",null),
			dingding: commonLogic.appcommonhandle("钉钉",null),
			account: commonLogic.appcommonhandle("账户",null),
			ranzhi: commonLogic.appcommonhandle("ranzhi",null),
			slack: commonLogic.appcommonhandle("slack",null),
			realname: commonLogic.appcommonhandle("真实姓名",null),
			locked: commonLogic.appcommonhandle("locked",null),
			scorelevel: commonLogic.appcommonhandle("scoreLevel",null),
			avatar: commonLogic.appcommonhandle("avatar",null),
			zipcode: commonLogic.appcommonhandle("zipcode",null),
			dept: commonLogic.appcommonhandle("所属部门",null),
			commiter: commonLogic.appcommonhandle("源代码账户",null),
			deleted: commonLogic.appcommonhandle("逻辑删除标志",null),
			last: commonLogic.appcommonhandle("最后登录",null),
			skype: commonLogic.appcommonhandle("skype",null),
			score: commonLogic.appcommonhandle("score",null),
			whatsapp: commonLogic.appcommonhandle("whatsapp",null),
			visits: commonLogic.appcommonhandle("访问次数",null),
			mobile: commonLogic.appcommonhandle("手机",null),
			clientlang: commonLogic.appcommonhandle("clientLang",null),
			join: commonLogic.appcommonhandle("入职日期",null),
			ip: commonLogic.appcommonhandle("ip",null),
			email: commonLogic.appcommonhandle("邮箱",null),
			nickname: commonLogic.appcommonhandle("nickname",null),
			phone: commonLogic.appcommonhandle("电话",null),
			birthday: commonLogic.appcommonhandle("birthday",null),
			id: commonLogic.appcommonhandle("ID",null),
			qq: commonLogic.appcommonhandle("QQ",null),
			gender: commonLogic.appcommonhandle("男女",null),
			role: commonLogic.appcommonhandle("职位",null),
			clientstatus: commonLogic.appcommonhandle("clientStatus",null),
			mytasks: commonLogic.appcommonhandle("我的任务",null),
			mybugs: commonLogic.appcommonhandle("我的bugs",null),
			myebugs: commonLogic.appcommonhandle("我的过期bug数",null),
			mystorys: commonLogic.appcommonhandle("我的需求数",null),
			products: commonLogic.appcommonhandle("未关闭产品数",null),
			eprojects: commonLogic.appcommonhandle("过期项目数",null),
			projects: commonLogic.appcommonhandle("未关闭项目数",null),
			myetasks: commonLogic.appcommonhandle("我的过期任务数",null),
			mytodocnt: commonLogic.appcommonhandle("我的待办数",null),
			myfavoritestorys: commonLogic.appcommonhandle("我收藏的需求数",null),
			myfavoritebugs: commonLogic.appcommonhandle("我收藏的bugs",null),
			myfavoritetasks: commonLogic.appcommonhandle("我收藏的任务",null),
			myfavorites: commonLogic.appcommonhandle("我的收藏",null),
			myterritorycnt: commonLogic.appcommonhandle("我的地盘",null),
		},
			views: {
				tabexpview: {
					caption: commonLogic.appcommonhandle("我的地盘",null),
					title: commonLogic.appcommonhandle("我的地盘",null),
				},
				editview: {
					caption: commonLogic.appcommonhandle("我的地盘",null),
					title: commonLogic.appcommonhandle("我的地盘编辑视图",null),
				},
				calendarexpview: {
					caption: commonLogic.appcommonhandle("我的地盘",null),
					title: commonLogic.appcommonhandle("我的地盘日历导航视图",null),
				},
				reporttabexpview: {
					caption: commonLogic.appcommonhandle("汇报",null),
					title: commonLogic.appcommonhandle("我的地盘分页导航视图",null),
				},
				calendarview: {
					caption: commonLogic.appcommonhandle("我的地盘",null),
					title: commonLogic.appcommonhandle("我的地盘日历视图",null),
				},
				usersumtreeexpview: {
					caption: commonLogic.appcommonhandle("用户汇总表",null),
					title: commonLogic.appcommonhandle("我的地盘树导航视图",null),
				},
				usr3tabexpview: {
					caption: commonLogic.appcommonhandle("我的地盘",null),
					title: commonLogic.appcommonhandle("管理",null),
				},
				testtreeexpview: {
					caption: commonLogic.appcommonhandle("测试统计",null),
					title: commonLogic.appcommonhandle("我的地盘树导航视图（测试统计）",null),
				},
				mywork: {
					caption: commonLogic.appcommonhandle("我的工作",null),
					title: commonLogic.appcommonhandle("我的工作",null),
				},
				statstabexpview: {
					caption: commonLogic.appcommonhandle("统计",null),
					title: commonLogic.appcommonhandle("我的地盘分页导航视图（统计）",null),
				},
				employtreeexpview: {
					caption: commonLogic.appcommonhandle("员工负载",null),
					title: commonLogic.appcommonhandle("我的地盘树导航视图（员工负载计）",null),
				},
				dashboardview: {
					caption: commonLogic.appcommonhandle("首页",null),
					title: commonLogic.appcommonhandle("首页",null),
				},
				productsumtreeexpview: {
					caption: commonLogic.appcommonhandle("产品汇总表",null),
					title: commonLogic.appcommonhandle("我的地盘树导航视图（产品汇总表）",null),
				},
				listview: {
					caption: commonLogic.appcommonhandle("欢迎",null),
					title: commonLogic.appcommonhandle("欢迎",null),
				},
				listview9: {
					caption: commonLogic.appcommonhandle("我的工作",null),
					title: commonLogic.appcommonhandle("我的工作",null),
				},
				treeexpviewprojectstats: {
					caption: commonLogic.appcommonhandle("项目汇总表",null),
					title: commonLogic.appcommonhandle("我的地盘我的地盘实体树导航视图（项目汇总表）导航视图",null),
				},
			},
			main_form: {
				details: {
					group1: commonLogic.appcommonhandle("我的地盘基本信息",null), 
					formpage1: commonLogic.appcommonhandle("基本信息",null), 
					group2: commonLogic.appcommonhandle("操作信息",null), 
					formpage2: commonLogic.appcommonhandle("其它",null), 
					srforikey: commonLogic.appcommonhandle("",null), 
					srfkey: commonLogic.appcommonhandle("ID",null), 
					srfmajortext: commonLogic.appcommonhandle("真实姓名",null), 
					srftempmode: commonLogic.appcommonhandle("",null), 
					srfuf: commonLogic.appcommonhandle("",null), 
					srfdeid: commonLogic.appcommonhandle("",null), 
					srfsourcekey: commonLogic.appcommonhandle("",null), 
					id: commonLogic.appcommonhandle("ID",null), 
				},
				uiactions: {
				},
			},
			mywork_list: {
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			welcome_list: {
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			editviewtoolbar_toolbar: {
				tbitem3: {
					caption: commonLogic.appcommonhandle("保存",null),
					tip: commonLogic.appcommonhandle("保存",null),
				},
				tbitem4: {
					caption: commonLogic.appcommonhandle("保存并新建",null),
					tip: commonLogic.appcommonhandle("保存并新建",null),
				},
				tbitem5: {
					caption: commonLogic.appcommonhandle("保存并关闭",null),
					tip: commonLogic.appcommonhandle("保存并关闭",null),
				},
				tbitem7: {
					caption: commonLogic.appcommonhandle("删除",null),
					tip: commonLogic.appcommonhandle("删除",null),
				},
			},
			productsum_treeview: {
				nodata:commonLogic.appcommonhandle("",null),
				nodes: {
					productbugtypesum: commonLogic.appcommonhandle("产品Bug类型统计表",null),
					storyhourssum: commonLogic.appcommonhandle("需求工时汇总表",null),
					productinputtable: commonLogic.appcommonhandle("产品投入表",null),
					productquantity: commonLogic.appcommonhandle("产品质量表",null),
					root: commonLogic.appcommonhandle("默认根节点",null),
					productcompletetable: commonLogic.appcommonhandle("产品完成度统计表",null),
					productsum: commonLogic.appcommonhandle("产品汇总表",null),
					productstorysum: commonLogic.appcommonhandle("需求汇总表",null),
				},
				uiactions: {
				},
			},
			test_treeview: {
				nodata:commonLogic.appcommonhandle("",null),
				nodes: {
					productbugstatussum: commonLogic.appcommonhandle("产品Bug状态汇总表",null),
					bugassignedto: commonLogic.appcommonhandle("Bug指派表",null),
					productbugresolutionstats: commonLogic.appcommonhandle("产品Bug解决方案汇总表",null),
					bugopenendby: commonLogic.appcommonhandle("Bug创建表",null),
					bugresolvedby: commonLogic.appcommonhandle("Bug完成表",null),
					root: commonLogic.appcommonhandle("默认根节点",null),
					testcasestats: commonLogic.appcommonhandle("用例统计表",null),
				},
				uiactions: {
				},
			},
			projectstats_treeview: {
				nodata:commonLogic.appcommonhandle("",null),
				nodes: {
					tasktypecount: commonLogic.appcommonhandle("项目任务类型统计",null),
					projectquality: commonLogic.appcommonhandle("项目质量表",null),
					projectstorystagestats: commonLogic.appcommonhandle("项目需求阶段分布表",null),
					bugresolutioncount: commonLogic.appcommonhandle("bug解决方案统计",null),
					bugtype: commonLogic.appcommonhandle("bug类型统计",null),
					projectprogress: commonLogic.appcommonhandle("项目进展表",null),
					bugstatuscount: commonLogic.appcommonhandle("bug状态统计",null),
					projectinputstats: commonLogic.appcommonhandle("项目投入统计表",null),
					root: commonLogic.appcommonhandle("默认根节点",null),
					projectstorystatusstats: commonLogic.appcommonhandle("项目需求状态分布表",null),
					taskstatuscount: commonLogic.appcommonhandle("项目任务状态统计",null),
				},
				uiactions: {
				},
			},
			employeeload_treeview: {
				nodata:commonLogic.appcommonhandle("",null),
				nodes: {
					bugresolved: commonLogic.appcommonhandle("bug解决汇总表",null),
					employeeload: commonLogic.appcommonhandle("员工负载表",null),
					root: commonLogic.appcommonhandle("默认根节点",null),
					companydynamicstats: commonLogic.appcommonhandle("公司动态汇总表",null),
					taskfinish: commonLogic.appcommonhandle("任务完成汇总表",null),
				},
				uiactions: {
				},
			},
			usersum_treeview: {
				nodata:commonLogic.appcommonhandle("",null),
				nodes: {
					userfinashtasksum: commonLogic.appcommonhandle("用户完成任务汇总表",null),
					root: commonLogic.appcommonhandle("默认根节点",null),
				},
				uiactions: {
				},
			},
			myworkpc_calendar: {
				nodata:commonLogic.appcommonhandle("",null),
				uiactions: {
				},
			},
			tabexpviewtabexppanel_tabexppanel: {
				tabviewpanels: {
					tabviewpanel: {
						caption: commonLogic.appcommonhandle("首页",null),
					},
					tabviewpanel10: {
						caption: commonLogic.appcommonhandle("日历",null),
					},
					tabviewpanel3: {
						caption: commonLogic.appcommonhandle("日程",null),
					},
					tabviewpanel4: {
						caption: commonLogic.appcommonhandle("任务",null),
					},
					tabviewpanel5: {
						caption: commonLogic.appcommonhandle("BUG",null),
					},
					tabviewpanel6: {
						caption: commonLogic.appcommonhandle("测试",null),
					},
					tabviewpanel2: {
						caption: commonLogic.appcommonhandle("需求",null),
					},
					tabviewpanel7: {
						caption: commonLogic.appcommonhandle("项目",null),
					},
					tabviewpanel9: {
						caption: commonLogic.appcommonhandle("动态",null),
					},
					tabviewpanel13: {
						caption: commonLogic.appcommonhandle("密码",null),
					},
					tabviewpanel8: {
						caption: commonLogic.appcommonhandle("联系人",null),
					},
					tabviewpanel11: {
						caption: commonLogic.appcommonhandle("模板",null),
					},
					tabviewpanel12: {
						caption: commonLogic.appcommonhandle("汇报",null),
					}
				},
				uiactions: {
				},
			},
			reporttabexpviewtabexppanel_tabexppanel: {
				tabviewpanels: {
					tabviewpanel: {
						caption: commonLogic.appcommonhandle("日报",null),
					},
					tabviewpanel2: {
						caption: commonLogic.appcommonhandle("周报",null),
					},
					tabviewpanel3: {
						caption: commonLogic.appcommonhandle("月报",null),
					},
					tabviewpanel4: {
						caption: commonLogic.appcommonhandle("汇报",null),
					}
				},
				uiactions: {
				},
			},
			usr3tabexpviewtabexppanel_tabexppanel: {
				tabviewpanels: {
					tabviewpanel3: {
						caption: commonLogic.appcommonhandle("标签",null),
					},
					tabviewpanel2: {
						caption: commonLogic.appcommonhandle("关键字",null),
					},
					tabviewpanel: {
						caption: commonLogic.appcommonhandle("插件管理",null),
					}
				},
				uiactions: {
				},
			},
			statstabexpviewtabexppanel_tabexppanel: {
				tabviewpanels: {
					tabviewpanel3: {
						caption: commonLogic.appcommonhandle("产品",null),
					},
					tabviewpanel5: {
						caption: commonLogic.appcommonhandle("项目",null),
					},
					tabviewpanel: {
						caption: commonLogic.appcommonhandle("测试",null),
					},
					tabviewpanel2: {
						caption: commonLogic.appcommonhandle("组织",null),
					},
					tabviewpanel6: {
						caption: commonLogic.appcommonhandle("用户",null),
					}
				},
				uiactions: {
				},
			},
			dashboardviewdashboard_container1_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container4_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container2_portlet: {
				uiactions: {
				},
			},
			mywork_portlet: {
				mywork: {
					title: commonLogic.appcommonhandle("剩余工作", null)
				},
				uiactions: {
				},
			},
			dashboardviewdashboard_container5_portlet: {
				uiactions: {
				},
			},
			dashboardviewdashboard_container6_portlet: {
				dashboardviewdashboard_container6: {
					title: commonLogic.appcommonhandle("我收到的汇报", null)
				},
				uiactions: {
				},
			},
			dashboardviewdashboard_container3_portlet: {
				uiactions: {
				},
			},
		};
		return data;
}
export default getLocaleResourceBase;