/**
 * TaskFinishGird 部件模型
 *
 * @export
 * @class TaskFinishGirdModel
 */
export default class TaskFinishGirdModel {

	/**
	 * 是否是实体数据导出
	 *
	 * @returns {any[]}
	 * @memberof TaskFinishGirdGridMode
	 */
	public isDEExport: boolean = false;

	/**
	 * 获取数据项集合
	 *
	 * @returns {any[]}
	 * @memberof TaskFinishGirdGridMode
	 */
	public getDataItems(): any[] {
    if(this.isDEExport){
		  return [
      ]
    }else{
		  return [
        {
          name: 'finishedby',
          prop: 'finishedby',
          dataType: 'TEXT',
        },
        {
          name: 'projectname',
          prop: 'projectname',
          dataType: 'TEXT',
        },
        {
          name: 'taskid',
          prop: 'taskid',
          dataType: 'INT',
        },
        {
          name: 'taskname',
          prop: 'taskname',
          dataType: 'TEXT',
        },
        {
          name: 'taskpri',
          prop: 'taskpri',
          dataType: 'INT',
        },
        {
          name: 'taskeststarted',
          prop: 'taskeststarted',
          dataType: 'DATE',
        },
        {
          name: 'taskrealstart',
          prop: 'taskrealstart',
          dataType: 'DATE',
        },
        {
          name: 'taskdeadline',
          prop: 'taskdeadline',
          dataType: 'DATE',
        },
        {
          name: 'taskfinisheddate',
          prop: 'taskfinisheddate',
          dataType: 'DATE',
        },
        {
          name: 'taskdelay',
          prop: 'taskdelay',
          dataType: 'TEXT',
        },
        {
          name: 'taskestimate',
          prop: 'taskestimate',
          dataType: 'INT',
        },
        {
          name: 'totalconsumed',
          prop: 'totalconsumed',
          dataType: 'INT',
        },
        {
          name: 'taskcnt',
          prop: 'taskcnt',
          dataType: 'INT',
        },
        {
          name: 'projectconsumed',
          prop: 'projectconsumed',
          dataType: 'INT',
        },
        {
          name: 'userconsumed',
          prop: 'userconsumed',
          dataType: 'INT',
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
          isEditable:true
        },
        {
          name: 'taskstats',
          prop: 'id',
        },
      {
        name: 'n_dept_eq',
        prop: 'n_dept_eq',
        dataType: 'SSCODELIST',
      },
      {
        name: 'begin',
        prop: 'begin',
        dataType: 'DATE',
      },
      {
        name: 'end',
        prop: 'end',
        dataType: 'DATE',
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
          name:'filter',
          prop:'filter'
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