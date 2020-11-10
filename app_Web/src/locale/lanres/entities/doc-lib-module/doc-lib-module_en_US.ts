export default {
  fields: {
    isleaf: "叶子模块",
    name: "名称",
    ibizshort: "简称",
    grade: "grade",
    collector: "collector",
    branch: "branch",
    id: "id",
    order: "排序值",
    deleted: "逻辑删除标志",
    path: "path",
    owner: "owner",
    type: "类型（story）",
    root: "编号",
    parent: "id",
    doclibname: "所属文档库",
    modulename: "上级模块",
  },
	views: {
		treeexpview: {
			caption: "文档库分类",
      		title: "文档库分类树导航视图",
		},
	},
	treedoclib_treeview: {
		nodes: {
			root: "默认根节点",
		},
		uiactions: {
		},
	},
};