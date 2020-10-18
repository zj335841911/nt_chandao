package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.zentao.domain.TestReport;
import cn.ibizlab.pms.core.zentao.mapper.TestReportMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Slf4j
public class TestReportHelper extends ZTBaseHelper<TestReportMapper, TestReport> {

    @Override
    @Transactional
    public boolean create(TestReport et) {
        return super.create(et);
    }

    @Override
    @Transactional
    public boolean edit(TestReport et) {
        return super.edit(et);
    }
}
