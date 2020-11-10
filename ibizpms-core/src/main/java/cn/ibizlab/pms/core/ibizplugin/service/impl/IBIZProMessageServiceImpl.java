package cn.ibizlab.pms.core.ibizplugin.service.impl;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Collection;
import java.util.Objects;
import java.util.Optional;
import java.math.BigInteger;

import lombok.extern.slf4j.Slf4j;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanCopier;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.util.ObjectUtils;
import org.springframework.beans.factory.annotation.Value;
import cn.ibizlab.pms.util.errors.BadRequestAlertException;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.context.annotation.Lazy;
import cn.ibizlab.pms.core.ibizplugin.domain.IBIZProMessage;
import cn.ibizlab.pms.core.ibizplugin.filter.IBIZProMessageSearchContext;
import cn.ibizlab.pms.core.ibizplugin.service.IIBIZProMessageService;

import cn.ibizlab.pms.util.helper.CachedBeanCopier;
import cn.ibizlab.pms.util.helper.DEFieldCacheMap;


import cn.ibizlab.pms.core.ibizplugin.client.IBIZPRO_MESSAGEFeignClient;
import cn.ibizlab.pms.util.security.SpringContextHolder;
import cn.ibizlab.pms.util.helper.OutsideAccessorUtils;
import org.apache.commons.lang3.StringUtils;

/**
 * 实体[消息] 服务对象接口实现
 */
@Slf4j
@Service
public class IBIZProMessageServiceImpl implements IIBIZProMessageService {

    @Autowired
    IBIZPRO_MESSAGEFeignClient iBIZPRO_MESSAGEFeignClient;



    @Override
    public boolean create(IBIZProMessage et) {
        IBIZProMessage rt = iBIZPRO_MESSAGEFeignClient.create(et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;
    }


    public void createBatch(List<IBIZProMessage> list){
        iBIZPRO_MESSAGEFeignClient.createBatch(list) ;
    }


    @Override
    public boolean update(IBIZProMessage et) {
        IBIZProMessage rt = iBIZPRO_MESSAGEFeignClient.update(et.getIbizproMessageid(),et);
        if(rt==null)
            return false;
        CachedBeanCopier.copy(rt,et);
        return true;

    }


    public void updateBatch(List<IBIZProMessage> list){
        iBIZPRO_MESSAGEFeignClient.updateBatch(list) ;
    }


    @Override
    public boolean remove(String ibizpro_messageid) {
        boolean result=iBIZPRO_MESSAGEFeignClient.remove(ibizpro_messageid) ;
        return result;
    }


    public void removeBatch(Collection<String> idList){
        iBIZPRO_MESSAGEFeignClient.removeBatch(idList);
    }


    @Override
    public IBIZProMessage get(String ibizpro_messageid) {
		IBIZProMessage et=iBIZPRO_MESSAGEFeignClient.get(ibizpro_messageid);
        if(et==null){
            et=new IBIZProMessage();
            et.setIbizproMessageid(ibizpro_messageid);
        }
        else{
        }
        return  et;
    }


    @Override
    public IBIZProMessage getDraft(IBIZProMessage et) {
        et=iBIZPRO_MESSAGEFeignClient.getDraft();
        return et;
    }


    @Override
    public boolean checkKey(IBIZProMessage et) {
        return iBIZPRO_MESSAGEFeignClient.checkKey(et);
    }


    @Override
    @Transactional
    public IBIZProMessage markDone(IBIZProMessage et) {
        //自定义代码
        return et;
    }


    @Override
    @Transactional
    public IBIZProMessage markRead(IBIZProMessage et) {
        //自定义代码
        return et;
    }


    @Override
    @Transactional
    public boolean save(IBIZProMessage et) {
        if(et.getIbizproMessageid()==null) et.setIbizproMessageid((String)et.getDefaultKey(true));
        if(!iBIZPRO_MESSAGEFeignClient.save(et))
            return false;
        return true;
    }


    @Override
    public void saveBatch(List<IBIZProMessage> list) {
        iBIZPRO_MESSAGEFeignClient.saveBatch(list) ;
    }






    /**
     * 查询集合 数据集
     */
    @Override
    public Page<IBIZProMessage> searchDefault(IBIZProMessageSearchContext context) {
        Page<IBIZProMessage> iBIZProMessages=iBIZPRO_MESSAGEFeignClient.searchDefault(context);
        return iBIZProMessages;
    }





}



