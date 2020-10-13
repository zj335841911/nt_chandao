package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ibiz.domain.ProductModule;
import cn.ibizlab.pms.core.zentao.domain.Module;
import cn.ibizlab.pms.core.zentao.mapper.ModuleMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Slf4j
public class ModuleHelper extends ZTBaseHelper<ModuleMapper, Module> {


    public Module fix(Module et) {
        return et;
    }

    @Override
    @Transactional
    public boolean create(Module et) {
        return super.create(et);
    }

    @Override
    @Transactional
    public boolean edit(Module et) {
        boolean bOk = super.edit(et);
        if (!bOk)
            return bOk;

        StringBuffer path = new StringBuffer();
        path.append(String.format(",%s,",et.getId()));
        fillPath(et,path);
        et.setPath(path.toString());
        et.setGrade(et.getPath().length()-et.getPath().replace(",","").length()-1);

        Module maxModule = this.getOne(new QueryWrapper<Module>().eq("root",et.getRoot()).eq("grade",et.getGrade()).orderByDesc("`order`").last("limit 0,1")) ;
        if(maxModule==null){
            et.setOrder(10);
        }else{
            et.setOrder(maxModule.getOrder()+10);
        }


        this.internalUpdate(et);

        return bOk;
    }

    @Override
    @Transactional
    public boolean delete(Long key) {
        return super.delete(key);
    }

    private void fillPath(Module et, StringBuffer path) {
        System.out.println(path);
        if (et.getParent() != 0) {
            Module parent = this.get(et.getParent());

            path.insert(0,String.format(",%s",parent.getId())) ;
            fillPath(parent, path);
        }
    }
}
