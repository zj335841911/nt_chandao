package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.util.ibizzentao.common.ChangeUtil;
import cn.ibizlab.pms.core.zentao.domain.Action;
import cn.ibizlab.pms.core.zentao.domain.DocLib;
import cn.ibizlab.pms.core.zentao.domain.History;
import cn.ibizlab.pms.core.zentao.mapper.DocLibMapper;
import cn.ibizlab.pms.util.dict.StaticDict;
import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.security.AuthenticationUser;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
public class DocLibHelper extends ZTBaseHelper<DocLibMapper, DocLib> {


        @Autowired
        ProductHelper productHelper;
        @Autowired
        ActionHelper actionHelper;



        @Override
        @Transactional
        public boolean create(DocLib et){
            if (et.getType().equals("product")) et.setProject(0L);
            if (et.getType().equals("project")) et.setProduct(0L);
            if (et.getAcl().equals("private")) et.setUsers(AuthenticationUser.getAuthenticationUser().getUsername());
            boolean flag =  super.create(et);
            actionHelper.create(StaticDict.Action__object_type.DOCLIB.getValue(),et.getId(),StaticDict.Action__type.CREATED.getValue(),"","",null,true);
            return flag;
        }

        @Transactional
        public boolean edit(DocLib et){
            long libId =  et.getId();
            DocLib old = new DocLib();
            CachedBeanCopier.copy(this.get(et.getId()),old);
            if (et.getAcl().equals("private")){
                String libCreatedBy = actionHelper.getOne(new QueryWrapper<Action>().eq("objectType","doclib").eq("objectID",libId).eq("action","created")).getActor();
                et.setUsers(libCreatedBy != null ? libCreatedBy : AuthenticationUser.getAuthenticationUser().getUsername());
            }
            boolean flag =  this.internalUpdate(et);
            List<History> changes = ChangeUtil.diff(old,et);
            if (changes.size() > 0) {
                Action action = actionHelper.create(StaticDict.Action__object_type.DOCLIB.getValue(),et.getId(),StaticDict.Action__type.EDITED.getValue(),"","",null,true);
                actionHelper.logHistory(action.getId(),changes);
            }
            return flag;
        }


}
