import { CounterService } from '@/ibiz-core/counter/counter-service-base';
/**
 * 产品移动端计数器计数器服务对象基类
 *
 * @export
 * @class ProductMobCounterCounterServiceBase
 */
export default class ProductMobCounterCounterServiceBase extends CounterService {

    /**
     * 当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  ProductMobCounterCounterServiceBase
     */
    public counterData:any ={};

    /**
     * Creates an instance of  ProductMobCounterCounterServiceBase.
     * 
     * @param {*} [opts={}]
     * @memberof  ProductMobCounterCounterServiceBase
     */
    constructor(opts: any = {}) {
        super(opts);
        this.initCounterData();
        setInterval(() => {
            this.fetchCounterData();
        }, 60000);
    }

    /**
     * 初始化当前计数器数据对象
     * 
     * @param {*} [opts={}]
     * @memberof  ProductMobCounterCounterServiceBase
     */
    public initCounterData(){
        this.fetchCounterData();
    }

    /**
     * 查询数据
     * 
     * @param {*} [opts={}]
     * @memberof  ProductMobCounterCounterServiceBase
     */
    public async fetchCounterData(){
        this.counterData = {
            item1:parseInt((Math.random()*10)+''),
            item2:parseInt((Math.random()*100)+''),
            item3:parseInt((Math.random()*100)+''),
            item4:parseInt((Math.random()*100)+''),
            item5:parseInt((Math.random()*100)+''),
            item6:parseInt((Math.random()*100)+''),
            item7:parseInt((Math.random()*100)+''),
            item8:parseInt((Math.random()*100)+''),
            item9:parseInt((Math.random()*100)+''),
            item10:parseInt((Math.random()*100)+'')
        }
    }

    /**
     * 刷新数据
     *
     * @memberof ProductMobCounterCounterServiceBase
     */
    public async refreshData(){
        const res = await this.fetchCounterData();
        return res;
    }

}