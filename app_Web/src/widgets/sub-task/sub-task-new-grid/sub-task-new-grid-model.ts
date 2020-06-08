/**
 * SubTaskNew 部件模型
 *
 * @export
 * @class SubTaskNewModel
 */
export default class SubTaskNewModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof SubTaskNewGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof SubTaskNewGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'module',
          prop: 'module',
          dataType: 'PICKUP',
        },
        {
          name: 'desc',
          prop: 'desc',
          dataType: 'LONGTEXT',
        },
        {
          name: 'frombug',
          prop: 'frombug',
          dataType: 'PICKUP',
        },
        {
          name: 'parent',
          prop: 'parent',
          dataType: 'PICKUP',
        },
        {
          name: 'storyname',
          prop: 'storyname',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'type',
          prop: 'type',
          dataType: 'SSCODELIST',
        },
        {
          name: 'srfmajortext',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'srfdataaccaction',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'srfkey',
          prop: 'id',
          dataType: 'ACID',
        },
        {
          name: 'assignedto_text',
          prop: 'assignedto',
          dataType: 'TEXT',
        },
        {
          name: 'project',
          prop: 'project',
          dataType: 'PICKUP',
        },
        {
          name: 'modulename',
          prop: 'modulename',
          dataType: 'PICKUPTEXT',
        },
        {
          name: 'assignedto',
          prop: 'assignedto',
          dataType: 'TEXT',
        },
        {
          name: 'story',
          prop: 'story',
          dataType: 'PICKUP',
        },
        {
          name: 'pri',
          prop: 'pri',
          dataType: 'NSCODELIST',
        },
        {
          name: 'name',
          prop: 'name',
          dataType: 'TEXT',
        },
        {
          name: 'left',
          prop: 'left',
          dataType: 'FLOAT',
        },
        {
          name: 'task',
          prop: 'id',
          dataType: 'FONTKEY',
        },
        {
          name: 'subtask',
          prop: 'id',
        },
        {
          name:'size',
          prop:'size'
        },
        {
          name:'query',
          prop:'query'
        },
        {
          name:'page',
          prop:'page'
        },
        {
          name:'sort',
          prop:'sort'
        },
        {
          name:'srfparentdata',
          prop:'srfparentdata'
        },
        // 前端新增修改标识，新增为"0",修改为"1"或未设值
        {
          name: 'srffrontuf',
          prop: 'srffrontuf',
          dataType: 'TEXT',
        },
      ]
    }
  }

}