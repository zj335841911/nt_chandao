package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.ProjectStory;
import cn.ibizlab.pms.core.zentao.mapper.ProjectStoryMapper;
import org.springframework.stereotype.Component;

@Component
public class ProjectStoryHelper extends ZTBaseHelper<ProjectStoryMapper, ProjectStory> {

    @Override
    public boolean hasDeleted() {
        return false;
    }
}
