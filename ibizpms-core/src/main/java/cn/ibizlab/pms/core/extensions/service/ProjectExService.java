package cn.ibizlab.pms.core.extensions.service;

import cn.ibizlab.pms.core.zentao.service.impl.ProjectServiceImpl;
import lombok.extern.slf4j.Slf4j;
import cn.ibizlab.pms.core.zentao.domain.Project;
import org.springframework.stereotype.Service;
import io.seata.spring.annotation.GlobalTransactional;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Primary;
import java.util.*;

/**
 * 实体[项目] 自定义服务对象
 */
@Slf4j
@Primary
@Service("ProjectExService")
public class ProjectExService extends ProjectServiceImpl {

    @Override
    protected Class currentModelClass() {
        return com.baomidou.mybatisplus.core.toolkit.ReflectionKit.getSuperClassGenericType(this.getClass().getSuperclass(), 1);
    }

    /**
     * 自定义行为[Activate]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Project activate(Project et) {
        return super.activate(et);
    }
    /**
     * 自定义行为[BatchUnlinkStory]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Project batchUnlinkStory(Project et) {
        return super.batchUnlinkStory(et);
    }
    /**
     * 自定义行为[Close]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Project close(Project et) {
        return super.close(et);
    }
    /**
     * 自定义行为[LinkStory]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Project linkStory(Project et) {
        return super.linkStory(et);
    }
    /**
     * 自定义行为[ManageMembers]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Project manageMembers(Project et) {
        return super.manageMembers(et);
    }
    /**
     * 自定义行为[Putoff]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Project putoff(Project et) {
        return super.putoff(et);
    }
    /**
     * 自定义行为[Start]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Project start(Project et) {
        return super.start(et);
    }
    /**
     * 自定义行为[Suspend]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Project suspend(Project et) {
        return super.suspend(et);
    }
    /**
     * 自定义行为[UnlinkMember]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Project unlinkMember(Project et) {
        return super.unlinkMember(et);
    }
    /**
     * 自定义行为[UnlinkStory]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Project unlinkStory(Project et) {
        return super.unlinkStory(et);
    }
    /**
     * 自定义行为[UpdateOrder]用户扩展
     * @param et
     * @return
     */
    @Override
    @Transactional
    public Project updateOrder(Project et) {
        return super.updateOrder(et);
    }
}

