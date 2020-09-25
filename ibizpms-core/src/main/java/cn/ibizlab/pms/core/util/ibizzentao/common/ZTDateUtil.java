package cn.ibizlab.pms.core.util.ibizzentao.common;

import cn.ibizlab.pms.core.zentao.domain.Story;
import lombok.extern.slf4j.Slf4j;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;

@Slf4j
public class ZTDateUtil {

    public static Timestamp nul(){
        Story story = new Story() ;
        story.set("closeddate","0001-01-01");
        return new Timestamp(story.getCloseddate().getTime()) ;
    }

    public static  Timestamp now(){
        return new Timestamp(System.currentTimeMillis()) ;
    }


}
