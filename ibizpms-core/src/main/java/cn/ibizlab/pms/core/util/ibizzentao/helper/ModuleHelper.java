package cn.ibizlab.pms.core.util.ibizzentao.helper;

import cn.ibizlab.pms.core.ibiz.domain.ProductModule;
import cn.ibizlab.pms.core.zentao.domain.*;
import cn.ibizlab.pms.core.zentao.domain.Module;
import cn.ibizlab.pms.core.zentao.mapper.ModuleMapper;
import cn.ibizlab.pms.util.dict.StaticDict;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@Slf4j
public class ModuleHelper extends ZTBaseHelper<ModuleMapper, Module> {

    @Autowired
    StoryHelper storyHelper;

    @Autowired
    BugHelper bugHelper;

    @Autowired
    TaskHelper taskHelper;

    @Autowired
    CaseHelper caseHelper;

    @Autowired
    ProductHelper productHelper;

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
        if(et.getParent() == null)
            et.setParent(0l);
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
        List<Module> list = this.list(new QueryWrapper<Module>().like("path", "," + et.getId() + ",").ne("id", et.getId()));
        for (Module module : list) {
            module.setPath(module.getPath().replace(("," + et.getId() + ","), path.toString()));
            this.internalUpdate(module);
        }

        return bOk;
    }

    @Override
    @Transactional
    public boolean delete(Long key) {
        Module et = this.get(key);
        Long parent = et.getParent();
        List<Module> childList = this.list(new QueryWrapper<Module>().eq("type", et.getType()).eq("root", et.getRoot()).ne("id",key).last(" AND find_in_set('"+ key +"',path)"));
        String modules = String.valueOf(key);
        for(Module module : childList) {

            modules += "," + module.getId();

            super.delete(module.getId());
        }
        if(StaticDict.Module__type.LINE.getValue().equals(et.getType())) {
            Product product = new Product();
            product.setLine(0l);
            productHelper.update(product,new QueryWrapper<Product>().eq("line", et.getId()));
        }
        else if(StaticDict.Module__type.STORY.getValue().equals(et.getType())) {
            // Story
            Story story = new Story();
            story.setModule(parent);
            storyHelper.update(story, new QueryWrapper<Story>().last(String.format(" AND FIND_IN_SET(module,'%1$s')", modules)));
            // Bug
            Bug bug = new Bug();
            bug.setModule(parent);
            bugHelper.update(bug, new QueryWrapper<Bug>().last(String.format(" AND  FIND_IN_SET(module,'%1$s')", modules)));
            // Task
            Task task = new Task();
            task.setModule(parent);
            taskHelper.update(task, new QueryWrapper<Task>().last(String.format(" AND FIND_IN_SET(module,'%1$s')", modules)));
            // Case
            Case cases = new Case();
            cases.setModule(parent);
            caseHelper.update(cases, new QueryWrapper<Case>().last(String.format(" AND FIND_IN_SET(module,'%1$s')", modules)));
        }else if(StaticDict.Module__type.TASK.getValue().equals(et.getType())) {
            // Task
            Task task = new Task();
            task.setModule(parent);
            taskHelper.update(task, new QueryWrapper<Task>().last(String.format(" AND FIND_IN_SET(module,'%1$s')", modules)));
        }
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
