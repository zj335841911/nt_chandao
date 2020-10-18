package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.StorySpec;
import cn.ibizlab.pms.core.zentao.domain.StoryStage;
import cn.ibizlab.pms.core.zentao.mapper.StorySpecMapper;
import cn.ibizlab.pms.core.zentao.mapper.StoryStageMapper;
import org.springframework.stereotype.Component;

@Component
public class StoryStageHelper extends ZTBaseHelper<StoryStageMapper, StoryStage> {

    @Override
    public boolean hasDeleted() {
        return false;
    }

    @Override
    public boolean hasId() {
        return false;
    }
}
