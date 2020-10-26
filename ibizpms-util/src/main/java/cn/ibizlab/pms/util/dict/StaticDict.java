package cn.ibizlab.pms.util.dict;

import lombok.Getter;

public class StaticDict {

    /**
     * 代码表[月份（01～12）]
     */
    @Getter
    public enum DCodeList {
        VALUE_01("01","一月"),
        VALUE_02("02","二月"),
        VALUE_03("03","三月"),
        VALUE_04("04","四月"),
        VALUE_05("05","五月"),
        VALUE_06("06","六月"),
        VALUE_07("07","七月"),
        VALUE_08("08","八月"),
        VALUE_09("09","九月"),
        VALUE_10("10","十月"),
        VALUE_11("11","十一月"),
        VALUE_12("12","十二月");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        DCodeList(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[页面参数]
     */
    @Getter
    public enum CodeList64 {

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList64(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[文档库权限]
     */
    @Getter
    public enum Doclib__acl {
        VALUE_open("open","公开"),
        VALUE_private("private","私有"),
        VALUE_custom("custom","自定义");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Doclib__acl(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[起止时间选择(下拉列表)]
     */
    @Getter
    public enum BeginendDropList {
        VALUE_600("600","06:00"),
        VALUE_610("610","06:10"),
        VALUE_620("620","06:20"),
        VALUE_630("630","06:30"),
        VALUE_640("640","06:40"),
        VALUE_650("650","06:50"),
        VALUE_700("700","07:00"),
        VALUE_710("710","07:10"),
        VALUE_720("720","07:20"),
        VALUE_730("730","07:30"),
        VALUE_740("740","07:40"),
        VALUE_750("750","07:50"),
        VALUE_800("800","08:00"),
        VALUE_810("810","08:10"),
        VALUE_820("820","08:20"),
        VALUE_830("830","08:30"),
        VALUE_840("840","08:40"),
        VALUE_850("850","08:50"),
        VALUE_900("900","09:00"),
        VALUE_910("910","09:10"),
        VALUE_920("920","09:20"),
        VALUE_930("930","09:30"),
        VALUE_940("940","09:40"),
        VALUE_950("950","09:50"),
        VALUE_1000("1000","10:00"),
        VALUE_1010("1010","10:10"),
        VALUE_1020("1020","10:20"),
        VALUE_1030("1030","10:30"),
        VALUE_1040("1040","10:40"),
        VALUE_1050("1050","10:50"),
        VALUE_1100("1100","11:00"),
        VALUE_1110("1110","11:10"),
        VALUE_1120("1120","11:20"),
        VALUE_1130("1130","11:30"),
        VALUE_1140("1140","11:40"),
        VALUE_1150("1150","11:50"),
        VALUE_1200("1200","12:00"),
        VALUE_1210("1210","12:10"),
        VALUE_1220("1220","12:20"),
        VALUE_1230("1230","12:30"),
        VALUE_1240("1240","12:40"),
        VALUE_1250("1250","12:50"),
        VALUE_1300("1300","13:00"),
        VALUE_1310("1310","13:10"),
        VALUE_1320("1320","13:20"),
        VALUE_1330("1330","13:30"),
        VALUE_1340("1340","13:40"),
        VALUE_1350("1350","13:50"),
        VALUE_1400("1400","14:00"),
        VALUE_1410("1410","14:10"),
        VALUE_1420("1420","14:20"),
        VALUE_1430("1430","14:30"),
        VALUE_1440("1440","14:40"),
        VALUE_1450("1450","14:50"),
        VALUE_1500("1500","15:00"),
        VALUE_1510("1510","15:10"),
        VALUE_1520("1520","15:20"),
        VALUE_1530("1530","15:30"),
        VALUE_1540("1540","15:40"),
        VALUE_1550("1550","15:50"),
        VALUE_1600("1600","16:00"),
        VALUE_1610("1610","16:10"),
        VALUE_1620("1620","16:20"),
        VALUE_1630("1630","16:30"),
        VALUE_1640("1640","16:40"),
        VALUE_1650("1650","16:50"),
        VALUE_1700("1700","17:00"),
        VALUE_1710("1710","17:10"),
        VALUE_1720("1720","17:20"),
        VALUE_1730("1730","17:30"),
        VALUE_1740("1740","17:40"),
        VALUE_1750("1750","17:50"),
        VALUE_1800("1800","18:00"),
        VALUE_1810("1810","18:10"),
        VALUE_1820("1820","18:20"),
        VALUE_1830("1830","18:30"),
        VALUE_1840("1840","18:40"),
        VALUE_1850("1850","18:50"),
        VALUE_1900("1900","19:00"),
        VALUE_1910("1910","19:10"),
        VALUE_1920("1920","19:20"),
        VALUE_1930("1930","19:30"),
        VALUE_1940("1940","19:40"),
        VALUE_1950("1950","19:50"),
        VALUE_2000("2000","20:00"),
        VALUE_2010("2010","20:10"),
        VALUE_2020("2020","20:20"),
        VALUE_2030("2030","20:30"),
        VALUE_2040("2040","20:40"),
        VALUE_2050("2050","20:50"),
        VALUE_2100("2100","21:00"),
        VALUE_2110("2110","21:10"),
        VALUE_2120("2120","21:20"),
        VALUE_2130("2130","21:30"),
        VALUE_2140("2140","21:40"),
        VALUE_2150("2150","21:50"),
        VALUE_2200("2200","22:00"),
        VALUE_2210("2210","22:10"),
        VALUE_2220("2220","22:20"),
        VALUE_2230("2230","22:30"),
        VALUE_2240("2240","22:40"),
        VALUE_2250("2250","22:50"),
        VALUE_2300("2300","23:00"),
        VALUE_2310("2310","23:10"),
        VALUE_2320("2320","23:20"),
        VALUE_2330("2330","23:30"),
        VALUE_2340("2340","23:40"),
        VALUE_2350("2350","23:50");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        BeginendDropList(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[时间周期]
     */
    @Getter
    public enum Zt__delta {
        VALUE_7("7","一星期"),
        VALUE_14("14","两星期"),
        VALUE_31("31","一个月"),
        VALUE_62("62","两个月"),
        VALUE_93("93","三个月"),
        VALUE_186("186","半年"),
        VALUE_365("365","一年");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="按时间段";

        Zt__delta(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }



    /**
     * 代码表[扩展表格单元格垂直对齐方式]
     */
    @Getter
    public enum CodeList75 {
        VALUE_TOP("TOP","上对齐"),
        VALUE_MIDDLE("MIDDLE","居中对齐"),
        VALUE_BOTTOM("BOTTOM","下对齐");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList75(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[项目快速分组]
     */
    @Getter
    public enum Project_quickpacket {
        VALUE_All("All","所有"),
        VALUE_wait("wait","未开始"),
        VALUE_MORE("MORE","更多"),
        VALUE_doing("doing","进行中"),
        VALUE_suspended("suspended","已挂起"),
        VALUE_closed("closed","已关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Project_quickpacket(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[数据库触发器目标]
     */
    @Getter
    public enum CodeList68 {
        VALUE_TABLE("TABLE","主表"),
        VALUE_VIEW("VIEW","视图");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList68(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[ZT_COMPANY__GUEST]
     */
    @Getter
    public enum Company__guest {
        VALUE_1("1","允许"),
        VALUE_0("0","不允许");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Company__guest(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[同构汇总表时间维度]
     */
    @Getter
    public enum CodeList95 {

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList95(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[区块模块]
     */
    @Getter
    public enum Block__module {
        VALUE_product("product","产品"),
        VALUE_project("project","项目"),
        VALUE_qa("qa","测试"),
        VALUE_todo("todo","待办"),
        VALUE_my("my","我的地盘");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Block__module(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[审计行为]
     */
    @Getter
    public enum CodeList27 {
        VALUE_CREATE("CREATE","建立"),
        VALUE_UPDATE("UPDATE","更新"),
        VALUE_DELETE("DELETE","删除");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList27(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[Bug快速分组（版本所有bug）]
     */
    @Getter
    public enum BugCodeList2 {
        VALUE_All("All","所有"),
        VALUE_active("active","未解决");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        BugCodeList2(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[平台内置处理组件类型]
     */
    @Getter
    public enum CodeList118 {
        VALUE_CODELISTFILLER("CODELISTFILLER","代码表填充器"),
        VALUE_WFPROCESS("WFPROCESS","工作流嵌入处理"),
        VALUE_DGACTIONHELPER("DGACTIONHELPER","表格后台处理对象"),
        VALUE_FORMACTIONHELPER("FORMACTIONHELPER","表单后台处理类"),
        VALUE_PAGE("PAGE","页面对象");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList118(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[模块类型]
     */
    @Getter
    public enum Module__type {
        VALUE_line("line","产品线"),
        VALUE_story("story","需求"),
        VALUE_task("task","任务"),
        VALUE_doc("doc","文档目录"),
        VALUE_case("case","测试用例"),
        VALUE_bug("bug","Bug");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Module__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }



    /**
     * 代码表[消息模板内容类型]
     */
    @Getter
    public enum CodeList42 {
        VALUE_TEXT("TEXT","纯文本"),
        VALUE_HTML("HTML","HTML网页");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList42(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[发布快速分组]
     */
    @Getter
    public enum Realease_sort {
        VALUE_all("all","所有"),
        VALUE_normal("normal","正常"),
        VALUE_terminate("terminate","停止维护");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Realease_sort(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[测试用例工具/框架]
     */
    @Getter
    public enum Testcase__frame {
        VALUE_junit("junit","JUnit"),
        VALUE_testng("testng","TestNG"),
        VALUE_phpunit("phpunit","PHPUnit"),
        VALUE_pytest("pytest","Pytest"),
        VALUE_jtest("jtest","JTest"),
        VALUE_cppunit("cppunit","CppUnit"),
        VALUE_gtest("gtest","GTest"),
        VALUE_qtest("qtest","QTest");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testcase__frame(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[字段查询扩展选项]
     */
    @Getter
    public enum CodeList60 {
        VALUE_LIKE("LIKE","LIKE大小写敏感"),
        VALUE_=("=","=（含其它）大小写敏感"),
        VALUE_LIKESPLIT("LIKESPLIT","LIKE分解");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList60(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[年份（2010～2020）]
     */
    @Getter
    public enum CodeList81 {
        VALUE_2010("2010","2010年"),
        VALUE_2011("2011","2011年"),
        VALUE_2012("2012","2012年"),
        VALUE_2013("2013","2013年"),
        VALUE_2014("2014","2014年"),
        VALUE_2015("2015","2015年"),
        VALUE_2016("2016","2016年"),
        VALUE_2017("2017","2017年"),
        VALUE_2018("2018","2018年"),
        VALUE_2019("2019","2019年"),
        VALUE_2020("2020","2020年");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList81(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[季度（1～4）]
     */
    @Getter
    public enum CodeList83 {
        VALUE_1("1","1季度"),
        VALUE_2("2","2季度"),
        VALUE_3("3","3季度"),
        VALUE_4("4","4季度");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList83(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[树视图节点类型]
     */
    @Getter
    public enum CodeList94 {
        VALUE_STATIC("STATIC","静态"),
        VALUE_DE("DE","动态（实体）"),
        VALUE_CODELIST("CODELIST","动态（代码表）");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList94(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[项目优先级]
     */
    @Getter
    public enum Project__pri {
        VALUE_1("1","1"),
        VALUE_2("2","2"),
        VALUE_3("3","3"),
        VALUE_4("4","4");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Project__pri(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[系统内置菜单]
     */
    @Getter
    public enum CodeList79 {

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList79(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[Bug快速分组（移动端）]
     */
    @Getter
    public enum MobBugQuickGroup {
        VALUE_All("All","所有"),
        VALUE_UNCLOSED("UNCLOSED","未关闭"),
        VALUE_ICREATE("ICREATE","由我创建"),
        VALUE_MORE("MORE","更多"),
        VALUE_TOME("TOME","指派给我"),
        VALUE_BYME("BYME","由我解决"),
        VALUE_WAITCLOSED("WAITCLOSED","待关闭"),
        VALUE_UNRESOLVED("UNRESOLVED","未解决"),
        VALUE_UNCONFIRMED("UNCONFIRMED","未确认"),
        VALUE_UNASSIGNED("UNASSIGNED","未指派"),
        VALUE_EXPIREDBUG("EXPIREDBUG","过期Bug");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        MobBugQuickGroup(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[任务关闭原因]
     */
    @Getter
    public enum Task__closed_reason {
        VALUE_done("done","已完成"),
        VALUE_cancel("cancel","已取消");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Task__closed_reason(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[补字应用场合类型]
     */
    @Getter
    public enum CodeList30 {
        VALUE_GG("GG","公共"),
        VALUE_SH("SH","审核"),
        VALUE_PG("PG","派工"),
        VALUE_SABTYY("SABTYY","SABTYY"),
        VALUE_RKDSH("RKDSH","入库单审核"),
        VALUE_CKDSH("CKDSH","出库单审核"),
        VALUE_BSDSH("BSDSH","报损单审核"),
        VALUE_SAOA("SAOA","SAOA"),
        VALUE_FW("FW","发文"),
        VALUE_SW("SW","收文");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList30(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[待办类型（全部）]
     */
    @Getter
    public enum TypeAll {
        VALUE_custom("custom","自定义"),
        VALUE_bug("bug","Bug"),
        VALUE_task("task","项目任务"),
        VALUE_story("story","项目需求"),
        VALUE_cycle("cycle","周期");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        TypeAll(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[用例步骤类型]
     */
    @Getter
    public enum Casestep__type {
        VALUE_step("step","步骤"),
        VALUE_group("group","分组"),
        VALUE_item("item","分组步骤");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Casestep__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[运行模式]
     */
    @Getter
    public enum RELEASE_Type {
        VALUE_DEPLOYPKG("DEPLOYPKG","部署系统组件到仓库"),
        VALUE_PACKMOBAPP("PACKMOBAPP","打包移动应用"),
        VALUE_PACKVER("PACKVER","打包版本"),
        VALUE_PUBCODE("PUBCODE","代码发布"),
        VALUE_PUBCODE2("PUBCODE2","代码发布（模板开发）"),
        VALUE_STARTMSAPI("STARTMSAPI","启动微服务"),
        VALUE_STARTMSAPP("STARTMSAPP","启动微服务应用"),
        VALUE_STARTMSFUNC("STARTMSFUNC","启动微服务功能"),
        VALUE_STARTX("STARTX","启动系统");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        RELEASE_Type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[页面跳转处理_页面类型]
     */
    @Getter
    public enum CodeList113 {
        VALUE_PAGE("PAGE","内置页面"),
        VALUE_URL("URL","网页路径"),
        VALUE_SCRIPT("SCRIPT","脚本");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList113(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[需求快速分组]
     */
    @Getter
    public enum Story__quickpacket {
        VALUE_ALL("ALL","所有"),
        VALUE_UNCLOSED("UNCLOSED","未关闭"),
        VALUE_TOME("TOME","指给我"),
        VALUE_ICREATE("ICREATE","我创建"),
        VALUE_IREVIEW("IREVIEW","我评审"),
        VALUE_DRAFT("DRAFT","草稿"),
        VALUE_MORE("MORE","更多"),
        VALUE_ICLOSE("ICLOSE","我关闭"),
        VALUE_ACTIVED("ACTIVED","激活"),
        VALUE_CHANGED("CHANGED","已变更"),
        VALUE_TOBECLOSED("TOBECLOSED","待关闭"),
        VALUE_CLOSED("CLOSED","已关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Story__quickpacket(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[Bug快速分组（我的地盘）]
     */
    @Getter
    public enum BugQuickpacketMy {
        VALUE_TOME("TOME","指派给我"),
        VALUE_ICREATE("ICREATE","由我创建"),
        VALUE_BYME("BYME","由我解决"),
        VALUE_WAITCLOSED("WAITCLOSED","由我关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        BugQuickpacketMy(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[ZT_USER__GENDER]
     */
    @Getter
    public enum User__gender {
        VALUE_f("f","女"),
        VALUE_m("m","男");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        User__gender(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试套件&用例库类型]
     */
    @Getter
    public enum Testsuite__type {
        VALUE_library("library","用例库"),
        VALUE_private("private","私有"),
        VALUE_public("public","公开");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testsuite__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[ZT_ACTION__READ]
     */
    @Getter
    public enum Action__read {
        VALUE_0("0","0"),
        VALUE_1("1","1");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Action__read(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[数据操作步骤]
     */
    @Getter
    public enum CodeList11 {
        VALUE_USERDECLARE("USERDECLARE","变量定义"),
        VALUE_USERINIT("USERINIT","变量初始化"),
        VALUE_INPUTCHECK("INPUTCHECK","数据检查"),
        VALUE_BEFOREACTION("BEFOREACTION","操作之前"),
        VALUE_EXECUTEACTION("EXECUTEACTION","执行操作"),
        VALUE_AFTERACTION("AFTERACTION","操作之后");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList11(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[代码发布路径]
     */
    @Getter
    public enum CodeList116 {
        VALUE_DEFAULT("DEFAULT","默认");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList116(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试报告对象类型]
     */
    @Getter
    public enum Testreport__object_type {
        VALUE_testtask("testtask","测试单"),
        VALUE_project("project","项目");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testreport__object_type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[年周（1～52）]
     */
    @Getter
    public enum CodeList84 {
        VALUE_01("01","第1周"),
        VALUE_02("02","第2周"),
        VALUE_03("03","第3周"),
        VALUE_04("04","第4周"),
        VALUE_05("05","第5周"),
        VALUE_06("06","第6周"),
        VALUE_07("07","第7周"),
        VALUE_08("08","第8周"),
        VALUE_09("09","第9周"),
        VALUE_10("10","第10周"),
        VALUE_11("11","第11周"),
        VALUE_12("12","第12周"),
        VALUE_13("13","第13周"),
        VALUE_14("14","第14周"),
        VALUE_15("15","第15周"),
        VALUE_16("16","第16周"),
        VALUE_17("17","第17周"),
        VALUE_18("18","第18周"),
        VALUE_19("19","第19周"),
        VALUE_20("20","第20周"),
        VALUE_21("21","第21周"),
        VALUE_22("22","第22周"),
        VALUE_23("23","第23周"),
        VALUE_24("24","第24周"),
        VALUE_25("25","第25周"),
        VALUE_26("26","第26周"),
        VALUE_27("27","第27周"),
        VALUE_28("28","第28周"),
        VALUE_29("29","第29周"),
        VALUE_30("30","第30周"),
        VALUE_31("31","第31周"),
        VALUE_32("32","第32周"),
        VALUE_33("33","第33周"),
        VALUE_34("34","第34周"),
        VALUE_35("35","第35周"),
        VALUE_36("36","第36周"),
        VALUE_37("37","第37周"),
        VALUE_38("38","第38周"),
        VALUE_39("39","第39周"),
        VALUE_40("40","第40周"),
        VALUE_41("41","第41周"),
        VALUE_42("42","第42周"),
        VALUE_43("43","第43周"),
        VALUE_44("44","第44周"),
        VALUE_45("45","第45周"),
        VALUE_46("46","第46周"),
        VALUE_47("47","第47周"),
        VALUE_48("48","第48周"),
        VALUE_49("49","第49周"),
        VALUE_50("50","第50周"),
        VALUE_51("51","第51周"),
        VALUE_52("52","第52周");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList84(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[数据库触发器操作]
     */
    @Getter
    public enum CodeList65 {
        VALUE_BEFORE("BEFORE","Before"),
        VALUE_AFTER("AFTER","After"),
        VALUE_INSTEADOF("INSTEADOF","Instead of");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList65(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[平台内置流程状态]
     */
    @Getter
    public enum WFStates {
        VALUE_0("0","未启动"),
        VALUE_1("1","流程中"),
        VALUE_2("2","已完成"),
        VALUE_3("3","已取消"),
        VALUE_31("31","已取消(人工)"),
        VALUE_32("32","已取消(超时)"),
        VALUE_4("4","处理故障");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        WFStates(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试用例状态（表格）]
     */
    @Getter
    public enum TestCaseStatusGrid {
        VALUE_wait("wait","未开始"),
        VALUE_normal("normal","正常"),
        VALUE_blocked("blocked","被阻塞"),
        VALUE_investigate("investigate","研究中"),
        VALUE_done("done","已完成"),
        VALUE_storychange("storychange","需求变更"),
        VALUE_casechange("casechange","原用例更新");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        TestCaseStatusGrid(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[表单嵌入表格工具栏能力]
     */
    @Getter
    public enum CodeList77 {
        VALUE_INSERT("INSERT","新建"),
        VALUE_UPDATE("UPDATE","更新"),
        VALUE_DELETE("DELETE","删除"),
        VALUE_ROWEDIT("ROWEDIT","启用行编辑");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList77(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[任务优先级]
     */
    @Getter
    public enum Task__pri {
        VALUE_1("1","1"),
        VALUE_2("2","2"),
        VALUE_3("3","3"),
        VALUE_4("4","4");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Task__pri(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[需求模块类型]
     */
    @Getter
    public enum Ibizpro_storymodule__type {
        VALUE_pmsStoryModule("pmsStoryModule","PMS需求模块"),
        VALUE_iBizSysModule("iBizSysModule","iBiz系统模块"),
        VALUE_iBizReqModule("iBizReqModule","iBiz需求模块");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Ibizpro_storymodule__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[页面处理逻辑类型]
     */
    @Getter
    public enum CodeList70 {
        VALUE_AFTERINITPAGEPARAM("AFTERINITPAGEPARAM","页面变量初始化之后");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList70(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试单快速分组（移动端）]
     */
    @Getter
    public enum MobTestQuickpacket {
        VALUE_ALL("ALL","全部"),
        VALUE_ICREATE("ICREATE","待测测试单"),
        VALUE_IREVIEW("IREVIEW","测试中测试单"),
        VALUE_MORE("MORE","更多"),
        VALUE_ICLOSE("ICLOSE","被阻塞测试单"),
        VALUE_Tested("Tested","已测测试单");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        MobTestQuickpacket(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[不需要评审（新建）]
     */
    @Getter
    public enum NeedNotReviewNew {
        VALUE_1("1","不需要评审");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        NeedNotReviewNew(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[日期类型]
     */
    @Getter
    public enum CodeList48 {
        VALUE_1("1","每周"),
        VALUE_2("2","每月");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList48(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[系统日志对象类型]
     */
    @Getter
    public enum Action__object_type {
        VALUE_product("product","产品"),
        VALUE_story("story","需求"),
        VALUE_productplan("productplan","计划"),
        VALUE_release("release","发布"),
        VALUE_project("project","项目"),
        VALUE_task("task","任务"),
        VALUE_build("build","版本"),
        VALUE_bug("bug","Bug"),
        VALUE_case("case","用例"),
        VALUE_caseresult("caseresult","用例结果"),
        VALUE_stepresult("stepresult","用例步骤"),
        VALUE_testtask("testtask","测试单"),
        VALUE_user("user","用户"),
        VALUE_doc("doc","文档"),
        VALUE_doclib("doclib","文档库"),
        VALUE_todo("todo","待办"),
        VALUE_branch("branch","分支"),
        VALUE_module("module","模块"),
        VALUE_testsuite("testsuite","套件"),
        VALUE_caselib("caselib","用例库"),
        VALUE_testreport("testreport","报告"),
        VALUE_entry("entry","应用"),
        VALUE_webhook("webhook","Webhook");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Action__object_type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[需求颜色]
     */
    @Getter
    public enum Story__color {
        VALUE_#3da7f5("#3da7f5","#3da7f5"),
        VALUE_#75c941("#75c941","#75c941"),
        VALUE_#2dbdb2("#2dbdb2","#2dbdb2"),
        VALUE_#797ec9("#797ec9","#797ec9"),
        VALUE_#ffaf38("#ffaf38","#ffaf38"),
        VALUE_#ff4e3e("#ff4e3e","#ff4e3e");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Story__color(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[服务运行状态]
     */
    @Getter
    public enum CodeList38 {
        VALUE_START("START","启动"),
        VALUE_STOP("STOP","停止");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList38(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[ZT_TODO__STATUS]
     */
    @Getter
    public enum Todo__status {
        VALUE_wait("wait","未开始"),
        VALUE_doing("doing","进行中"),
        VALUE_done("done","已完成"),
        VALUE_closed("closed","已关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Todo__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[需求状态]
     */
    @Getter
    public enum Story__status {
        VALUE_draft("draft","草稿"),
        VALUE_active("active","激活"),
        VALUE_closed("closed","已关闭"),
        VALUE_changed("changed","已变更");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Story__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[用户对象类型]
     */
    @Getter
    public enum CodeList5 {
        VALUE_USER("USER","用户"),
        VALUE_USERGROUP("USERGROUP","用户组");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList5(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[不需要评审]
     */
    @Getter
    public enum NeedNotReview {
        VALUE_0("0","不需要评审");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        NeedNotReview(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[DA日志操作类型]
     */
    @Getter
    public enum CodeList24 {
        VALUE_CREATE("CREATE","新建"),
        VALUE_UPDATE("UPDATE","更新"),
        VALUE_DELETE("DELETE","删除");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList24(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[脚本功能]
     */
    @Getter
    public enum CodeList114 {
        VALUE_1("1","基础"),
        VALUE_128("128","树视图常规"),
        VALUE_2("2","树视图高级"),
        VALUE_4("4","TAB视图"),
        VALUE_8("8","动态面板"),
        VALUE_16("16","搜索面板"),
        VALUE_32("32","表格视图常规"),
        VALUE_64("64","表格视图高级"),
        VALUE_256("256","数据视图");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList114(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[待办类型]
     */
    @Getter
    public enum Type {
        VALUE_custom("custom","自定义"),
        VALUE_bug("bug","Bug"),
        VALUE_task("task","项目任务"),
        VALUE_story("story","项目需求"),
        VALUE_cycle("cycle","周期");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体快捷应用范围]
     */
    @Getter
    public enum CodeList41 {
        VALUE_1("1","拾取链接");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList41(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[项目访问控制]
     */
    @Getter
    public enum Project__acl {
        VALUE_open("open","默认设置(有项目视图权限，即可访问)"),
        VALUE_private("private","私有项目(只有项目团队成员才能访问)"),
        VALUE_custom("custom","自定义白名单(团队成员和白名单的成员可以访问)");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Project__acl(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[是否（TRUE，FALSE）]
     */
    @Getter
    public enum TrueFalse {
        VALUE_TRUE("TRUE","是"),
        VALUE_FALSE("FALSE","否");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        TrueFalse(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[服务启动模式]
     */
    @Getter
    public enum CodeList37 {
        VALUE_AUTO("AUTO","自动"),
        VALUE_MANUAL("MANUAL","手动");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList37(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体规则处理_操作逻辑]
     */
    @Getter
    public enum CodeList111 {
        VALUE_=("=","等于"),
        VALUE_<>("<>","不等于"),
        VALUE_>=(">=","大于等于"),
        VALUE_>(">","大于"),
        VALUE_<=("<=","小于等于"),
        VALUE_<("<","小于"),
        VALUE_LIKE("LIKE","文本匹配"),
        VALUE_ISNULL("ISNULL","为空"),
        VALUE_ISNOTNULL("ISNOTNULL","不为空");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList111(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[产品动态快速分组]
     */
    @Getter
    public enum ProductActionQuickpacket {
        VALUE_All("All","所有"),
        VALUE_today("today","今天"),
        VALUE_yesterday("yesterday","昨天"),
        VALUE_thisweek("thisweek","本周"),
        VALUE_lastweek("lastweek","上周"),
        VALUE_thismonth("thismonth","本月"),
        VALUE_lastmonth("lastmonth","上月");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        ProductActionQuickpacket(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试单快速分组]
     */
    @Getter
    public enum TestQuickpacket {
        VALUE_ALL("ALL","全部"),
        VALUE_ICREATE("ICREATE","待测测试单"),
        VALUE_IREVIEW("IREVIEW","测试中测试单"),
        VALUE_ICLOSE("ICLOSE","被阻塞测试单"),
        VALUE_Tested("Tested","已测测试单");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        TestQuickpacket(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[任务状态]
     */
    @Getter
    public enum Task__status {
        VALUE_wait("wait","未开始"),
        VALUE_doing("doing","进行中"),
        VALUE_done("done","已完成"),
        VALUE_pause("pause","已暂停"),
        VALUE_cancel("cancel","已取消"),
        VALUE_closed("closed","已关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Task__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试单优先级]
     */
    @Getter
    public enum Testtask__pri {
        VALUE_1("1","1"),
        VALUE_2("2","2"),
        VALUE_3("3","3"),
        VALUE_4("4","4");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testtask__pri(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[预定义属性类型]
     */
    @Getter
    public enum CodeList34 {
        VALUE_LOGICVALID("LOGICVALID","逻辑有效标识"),
        VALUE_CREATEMAN("CREATEMAN","建立人"),
        VALUE_CREATEDATE("CREATEDATE","建立时间"),
        VALUE_UPDATEMAN("UPDATEMAN","更新人"),
        VALUE_UPDATEDATE("UPDATEDATE","更新时间"),
        VALUE_ORGUNITID("ORGUNITID","组织单元标识"),
        VALUE_ORGUNITNAME("ORGUNITNAME","组织单元名称");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList34(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[todo快速分组（我的地盘）]
     */
    @Getter
    public enum TodoQuickpacketMy {
        VALUE_All("All","所有待办"),
        VALUE_thisyear("thisyear","本年度"),
        VALUE_Unfinished("Unfinished","未完"),
        VALUE_BYME("BYME","待定"),
        VALUE_cycle("cycle","周期");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        TodoQuickpacketMy(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[需求快速分组（我的地盘）]
     */
    @Getter
    public enum StoryQuickpacketMy {
        VALUE_TOME("TOME","指给我"),
        VALUE_ICREATE("ICREATE","由我创建"),
        VALUE_IREVIEW("IREVIEW","由我评审"),
        VALUE_ICLOSE("ICLOSE","由我关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        StoryQuickpacketMy(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[任务类型]
     */
    @Getter
    public enum Task__type {
        VALUE_design("design","设计"),
        VALUE_devel("devel","开发"),
        VALUE_test("test","测试"),
        VALUE_study("study","研究"),
        VALUE_discuss("discuss","讨论"),
        VALUE_ui("ui","界面"),
        VALUE_affair("affair","事务"),
        VALUE_misc("misc","其他");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Task__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[列编辑器样式]
     */
    @Getter
    public enum CodeList28 {
        VALUE_DROPDOWNLIST("DROPDOWNLIST","下拉列表框"),
        VALUE_PICKER("PICKER","数据选择框");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList28(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试单状态]
     */
    @Getter
    public enum Testtask__status {
        VALUE_wait("wait","未开始"),
        VALUE_doing("doing","进行中"),
        VALUE_done("done","已完成"),
        VALUE_blocked("blocked","被阻塞");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testtask__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[数据通知_时间条件]
     */
    @Getter
    public enum CodeList62 {
        VALUE_BEFORE("BEFORE","之前"),
        VALUE_AFTER("AFTER","之后");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList62(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[日期_待定]
     */
    @Getter
    public enum Date_disable {
        VALUE_on("on","待定");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Date_disable(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[需求评审结果]
     */
    @Getter
    public enum Story__review_result {
        VALUE_pass("pass","确认通过"),
        VALUE_revert("revert","撤销变更"),
        VALUE_clarify("clarify","有待明确"),
        VALUE_reject("reject","拒绝");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Story__review_result(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[网页部件类型]
     */
    @Getter
    public enum CodeList6 {
        VALUE_CHART("CHART","图形部件"),
        VALUE_LIST("LIST","列表"),
        VALUE_CUSTOMWP("CUSTOMWP","自定义");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList6(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[星期（1～7）]
     */
    @Getter
    public enum CodeList46 {
        VALUE_2("2","星期一"),
        VALUE_3("3","星期二"),
        VALUE_4("4","星期三"),
        VALUE_5("5","星期四"),
        VALUE_6("6","星期五"),
        VALUE_7("7","星期六"),
        VALUE_1("1","星期日");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList46(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[DA日志对象类型]
     */
    @Getter
    public enum CodeList23 {
        VALUE_DATAENTITY("DATAENTITY","实体"),
        VALUE_DEFIELD("DEFIELD","实体属性"),
        VALUE_DER1N("DER1N","实体关系");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList23(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[系统日志操作方式]
     */
    @Getter
    public enum ActionManner {
        VALUE_story_closed_willnotdo("story_closed_willnotdo","不做"),
        VALUE_story_closed_cancel("story_closed_cancel","已取消"),
        VALUE_story_closed_done("story_closed_done","已完成"),
        VALUE_story_closed_subdivided("story_closed_subdivided","已细分"),
        VALUE_story_closed_postponed("story_closed_postponed","延期"),
        VALUE_story_closed_bydesign("story_closed_bydesign","设计如此"),
        VALUE_story_closed_duplicate("story_closed_duplicate","重复"),
        VALUE_bug_resolved_willnotfix("bug_resolved_willnotfix","不予解决"),
        VALUE_bug_resolved_external("bug_resolved_external","外部原因"),
        VALUE_bug_resolved_fixed("bug_resolved_fixed","已解决"),
        VALUE_bug_resolved_postponed("bug_resolved_postponed","延期处理"),
        VALUE_bug_resolved_notrepro("bug_resolved_notrepro","无法重现"),
        VALUE_bug_resolved_bydesign("bug_resolved_bydesign","设计如此"),
        VALUE_bug_resolved_tostory("bug_resolved_tostory","转为需求"),
        VALUE_bug_resolved_duplicate("bug_resolved_duplicate","重复Bug"),
        VALUE_story_reviewed_reject("story_reviewed_reject","拒绝"),
        VALUE_story_reviewed_revert("story_reviewed_revert","撤销变更"),
        VALUE_story_reviewed_clarify("story_reviewed_clarify","有待明确"),
        VALUE_story_reviewed_pass("story_reviewed_pass","确认通过"),
        VALUE_ release_changestatus_terminate(" release_changestatus_terminate","停止维护"),
        VALUE_ release_changestatus_normal(" release_changestatus_normal","正常");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        ActionManner(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[需求关闭原因]
     */
    @Getter
    public enum Story__closed_reason {
        VALUE_done("done","已完成"),
        VALUE_subdivided("subdivided","已细分"),
        VALUE_duplicate("duplicate","重复"),
        VALUE_postponed("postponed","延期"),
        VALUE_willnotdo("willnotdo","不做"),
        VALUE_cancel("cancel","已取消"),
        VALUE_bydesign("bydesign","设计如此");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Story__closed_reason(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[是否（YESNO）]
     */
    @Getter
    public enum YesNo3 {
        VALUE_yes("yes","是"),
        VALUE_no("no","否");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        YesNo3(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[月周（1～5）]
     */
    @Getter
    public enum CodeList86 {
        VALUE_1("1","1周"),
        VALUE_2("2","2周"),
        VALUE_3("3","3周"),
        VALUE_4("4","4周"),
        VALUE_5("5","5周");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList86(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[系统日志操作类型]
     */
    @Getter
    public enum Action__type {
        VALUE_created("created","创建"),
        VALUE_opened("opened","创建"),
        VALUE_changed("changed","变更了"),
        VALUE_edited("edited","编辑了"),
        VALUE_assigned("assigned","指派了"),
        VALUE_closed("closed","关闭了"),
        VALUE_deleted("deleted","删除了"),
        VALUE_deletedfile("deletedfile","删除附件"),
        VALUE_editfile("editfile","编辑附件"),
        VALUE_erased("erased","删除了"),
        VALUE_undeleted("undeleted","还原了"),
        VALUE_hidden("hidden","隐藏了"),
        VALUE_commented("commented","评论了"),
        VALUE_activated("activated","激活了"),
        VALUE_blocked("blocked","阻塞了"),
        VALUE_resolved("resolved","解决了"),
        VALUE_reviewed("reviewed","评审了"),
        VALUE_moved("moved","移动了"),
        VALUE_confirmed("confirmed","确认了需求"),
        VALUE_bugconfirmed("bugconfirmed","确认了"),
        VALUE_tostory("tostory","转需求"),
        VALUE_frombug("frombug","转需求"),
        VALUE_fromlib("fromlib","从用例库导入"),
        VALUE_totask("totask","转任务"),
        VALUE_svncommited("svncommited","提交代码"),
        VALUE_gitcommited("gitcommited","提交代码"),
        VALUE_linked2plan("linked2plan","关联计划"),
        VALUE_unlinkedfromplan("unlinkedfromplan","移除计划"),
        VALUE_changestatus("changestatus","修改状态"),
        VALUE_marked("marked","编辑了"),
        VALUE_linked2project("linked2project","关联项目"),
        VALUE_unlinkedfromproject("unlinkedfromproject","移除项目"),
        VALUE_unlinkedfrombuild("unlinkedfrombuild","移除版本"),
        VALUE_linked2release("linked2release","关联发布"),
        VALUE_unlinkedfromrelease("unlinkedfromrelease","移除发布"),
        VALUE_linkrelatedbug("linkrelatedbug","关联了相关Bug"),
        VALUE_unlinkrelatedbug("unlinkrelatedbug","移除了相关Bug"),
        VALUE_linkrelatedcase("linkrelatedcase","关联了相关用例"),
        VALUE_unlinkrelatedcase("unlinkrelatedcase","移除了相关用例"),
        VALUE_linkrelatedstory("linkrelatedstory","关联了相关需求"),
        VALUE_unlinkrelatedstory("unlinkrelatedstory","移除了相关需求"),
        VALUE_subdividestory("subdividestory","细分了需求"),
        VALUE_unlinkchildstory("unlinkchildstory","移除了细分需求"),
        VALUE_started("started","开始了"),
        VALUE_restarted("restarted","继续了"),
        VALUE_recordestimate("recordestimate","记录了工时"),
        VALUE_editestimate("editestimate","编辑了工时"),
        VALUE_canceled("canceled","取消了"),
        VALUE_finished("finished","完成了"),
        VALUE_paused("paused","暂停了"),
        VALUE_verified("verified","验收了"),
        VALUE_delayed("delayed","延期"),
        VALUE_suspended("suspended","挂起"),
        VALUE_login("login","登录系统"),
        VALUE_logout("logout","退出登录"),
        VALUE_deleteestimate("deleteestimate","删除了工时"),
        VALUE_linked2build("linked2build","关联了"),
        VALUE_linked2bug("linked2bug","关联了"),
        VALUE_linkchildtask("linkchildtask","关联子任务"),
        VALUE_unlinkchildrentask("unlinkchildrentask","取消关联子任务"),
        VALUE_linkparenttask("linkparenttask","关联到父任务"),
        VALUE_unlinkparenttask("unlinkparenttask","从父任务取消关联"),
        VALUE_batchcreate("batchcreate","批量创建任务"),
        VALUE_createchildren("createchildren","创建子任务"),
        VALUE_managed("managed","维护"),
        VALUE_deletechildrentask("deletechildrentask","删除子任务"),
        VALUE_createchildrenstory("createchildrenstory","创建子需求"),
        VALUE_linkchildstory("linkchildstory","关联子需求"),
        VALUE_unlinkchildrenstory("unlinkchildrenstory","取消关联子需求"),
        VALUE_linkparentstory("linkparentstory","关联到父需求"),
        VALUE_unlinkparentstory("unlinkparentstory","从父需求取消关联"),
        VALUE_deletechildrenstory("deletechildrenstory","删除子需求");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Action__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[功能测试快速分组（我的地盘）]
     */
    @Getter
    public enum CaseQuickpacketMy {
        VALUE_TOME("TOME","给我的用例"),
        VALUE_ICREATE("ICREATE","我建的用例");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CaseQuickpacketMy(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[数据库操作]
     */
    @Getter
    public enum CodeList89 {
        VALUE_INSERT("INSERT","插入"),
        VALUE_UPDATE("UPDATE","更新"),
        VALUE_DELETE("DELETE","删除");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList89(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[需求阶段_看板]
     */
    @Getter
    public enum StoryStageKane {
        VALUE_projected("projected","已立项"),
        VALUE_developing("developing","研发中"),
        VALUE_developed("developed","研发完毕"),
        VALUE_testing("testing","测试中"),
        VALUE_tested("tested","测试完毕"),
        VALUE_verified("verified","已验收"),
        VALUE_released("released","已发布");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        StoryStageKane(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体属性更新模式]
     */
    @Getter
    public enum CodeList2 {
        VALUE_VERSION("VERSION","版本模式");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList2(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[属性引用关系类型]
     */
    @Getter
    public enum CodeList90 {
        VALUE_DER1N("DER1N","1:N关系"),
        VALUE_DERCUSTOM("DERCUSTOM","自定义关系");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList90(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[ZT_IM_MESSAGE__TYPE]
     */
    @Getter
    public enum Im_message__type {
        VALUE_normal("normal","normal"),
        VALUE_broadcast("broadcast","broadcast"),
        VALUE_notify("notify","notify");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Im_message__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[ZT_IM_CLIENT__STATUS]
     */
    @Getter
    public enum Im_client__status {
        VALUE_released("released","released"),
        VALUE_wait("wait","wait");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Im_client__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体归属]
     */
    @Getter
    public enum CodeList19 {
        VALUE_SRFDA("SRFDA","系统"),
        VALUE_APPLICATION("APPLICATION","应用"),
        VALUE_USER("USER","用户");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList19(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[DB2触发器代码模式]
     */
    @Getter
    public enum CodeList67 {
        VALUE_For Each Row("For Each Row","For Each Row"),
        VALUE_For Each Statement("For Each Statement","For Each Statement");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList67(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[任务颜色]
     */
    @Getter
    public enum Task__color {
        VALUE_#3da7f5("#3da7f5","#3da7f5"),
        VALUE_#75c941("#75c941","#75c941"),
        VALUE_#2dbdb2("#2dbdb2","#2dbdb2"),
        VALUE_#797ec9("#797ec9","#797ec9"),
        VALUE_#ffaf38("#ffaf38","#ffaf38"),
        VALUE_#ff4e3e("#ff4e3e","#ff4e3e");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Task__color(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[功能类型]
     */
    @Getter
    public enum CodeList4 {
        VALUE_DEDATAGRID("DEDATAGRID","默认实体表格视图"),
        VALUE_PAGELINK("PAGELINK","页面链接"),
        VALUE_JSCODE("JSCODE","纯JS代码"),
        VALUE_DEGRIDVIEW("DEGRIDVIEW","指定实体表格视图"),
        VALUE_PAGE("PAGE","内置页面");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList4(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[测试用例优先级]
     */
    @Getter
    public enum Testcase__pri {
        VALUE_1("1","1"),
        VALUE_2("2","2"),
        VALUE_3("3","3"),
        VALUE_4("4","4");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testcase__pri(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[周期选择_启用]
     */
    @Getter
    public enum Cycle_enable {
        VALUE_1("1","周期");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Cycle_enable(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[待办优先级]
     */
    @Getter
    public enum Pri {
        VALUE_1("1","一般"),
        VALUE_2("2","最高"),
        VALUE_3("3","较高"),
        VALUE_4("4","最低");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Pri(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[产品状态]
     */
    @Getter
    public enum Product__status {
        VALUE_normal("normal","正常"),
        VALUE_closed("closed","结束");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Product__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[ZT_USER__CLIENTSTATUS]
     */
    @Getter
    public enum User__clientStatus {
        VALUE_online("online","online"),
        VALUE_away("away","away"),
        VALUE_busy("busy","busy"),
        VALUE_offline("offline","offline");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        User__clientStatus(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[输入辅助_消息模板宏]
     */
    @Getter
    public enum CodeList102 {
        VALUE_CARETTEMPLGROUP_SRFMSG_MSGTEMPLATE("CARETTEMPLGROUP_SRFMSG_MSGTEMPLATE","消息模板"),
        VALUE_CARETTEMPLGROUP_SRFDA_FILLENTITYPARAM("CARETTEMPLGROUP_SRFDA_FILLENTITYPARAM","系统属性");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList102(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[周期类型]
     */
    @Getter
    public enum CycleType {
        VALUE_day("day","天"),
        VALUE_week("week","周"),
        VALUE_month("month","月度");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CycleType(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[ZT_IM_MESSAGESTATUS__STATUS]
     */
    @Getter
    public enum Im_messagestatus__status {
        VALUE_waiting("waiting","waiting"),
        VALUE_sent("sent","sent"),
        VALUE_readed("readed","readed"),
        VALUE_deleted("deleted","deleted");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Im_messagestatus__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[代码表或模式]
     */
    @Getter
    public enum CodeList20 {
        VALUE_NUMBERORMODE("NUMBERORMODE","数字或处理"),
        VALUE_STRINGORMODE("STRINGORMODE","文本或模式");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList20(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[Bug颜色]
     */
    @Getter
    public enum Bug__color {
        VALUE_#3da7f5("#3da7f5","#3da7f5"),
        VALUE_#75c941("#75c941","#75c941"),
        VALUE_#2dbdb2("#2dbdb2","#2dbdb2"),
        VALUE_#797ec9("#797ec9","#797ec9"),
        VALUE_#ffaf38("#ffaf38","#ffaf38"),
        VALUE_#ff4e3e("#ff4e3e","#ff4e3e");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Bug__color(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[是否（蓝、红）]
     */
    @Getter
    public enum CodeList50 {
        VALUE_1("1","是"),
        VALUE_0("0","否");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList50(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[表格列构建器]
     */
    @Getter
    public enum CodeList9 {
        VALUE_NUMBER("NUMBER","数值"),
        VALUE_CODELIST("CODELIST","代码表");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList9(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[起止时间_暂时不设定时间]
     */
    @Getter
    public enum Beginend_disable {
        VALUE_on("on","暂时不设定时间");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Beginend_disable(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[来源区块模块]
     */
    @Getter
    public enum Block__source {
        VALUE_product("product","产品"),
        VALUE_project("project","项目"),
        VALUE_qa("qa","测试"),
        VALUE_todo("todo","待办");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Block__source(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[消息类型]
     */
    @Getter
    public enum CodeList29 {
        VALUE_1("1","系统消息"),
        VALUE_2("2","电子邮件"),
        VALUE_4("4","手机短信"),
        VALUE_8("8","MSN消息"),
        VALUE_16("16","检务通消息"),
        VALUE_32("32","微信");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList29(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[工作日类型]
     */
    @Getter
    public enum CodeList45 {
        VALUE_1("1","工作日"),
        VALUE_2("2","非工作日"),
        VALUE_3("3","自定义工作日");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList45(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[关闭产品]
     */
    @Getter
    public enum CloseProduct {
        VALUE_1("1","关闭产品");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CloseProduct(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[扩展表格单元格水平对齐方式]
     */
    @Getter
    public enum CodeList74 {
        VALUE_LEFT("LEFT","左对齐"),
        VALUE_CENTER("CENTER","居中"),
        VALUE_RIGHT("RIGHT","右对齐");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList74(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[项目时间类型]
     */
    @Getter
    public enum ProjectTimeType {
        VALUE_CONSUMED("CONSUMED","消耗时间"),
        VALUE_LEFT("LEFT","剩余时间");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        ProjectTimeType(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[团队类型]
     */
    @Getter
    public enum Team__type {
        VALUE_project("project","项目团队"),
        VALUE_task("task","任务团队");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Team__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[ZT_IM_CONFERENCE__STATUS]
     */
    @Getter
    public enum Im_conference__status {
        VALUE_closed("closed","closed"),
        VALUE_open("open","open");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Im_conference__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[文件编码]
     */
    @Getter
    public enum CodeList39 {
        VALUE_ANSI("ANSI","ANSI"),
        VALUE_UTF-8("UTF-8","UTF-8");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList39(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[输入辅助_控件参数]
     */
    @Getter
    public enum CodeList101 {
        VALUE_CARETTEMPLGROUP_SRFDA_CONTROLPARAM("CARETTEMPLGROUP_SRFDA_CONTROLPARAM","控件基本参数"),
        VALUE_CARETTEMPLGROUP_SRFDA_CONTROLPARAM_CARET("CARETTEMPLGROUP_SRFDA_CONTROLPARAM_CARET","辅助输入控件参数"),
        VALUE_CARETTEMPLGROUP_SRFDA_CONTROLPARAM_PICKUP("CARETTEMPLGROUP_SRFDA_CONTROLPARAM_PICKUP","选择控件参数"),
        VALUE_CARETTEMPLGROUP_SRFDA_CONTROLPARAM_TEXTBOX("CARETTEMPLGROUP_SRFDA_CONTROLPARAM_TEXTBOX","文本控件参数"),
        VALUE_CARETTEMPLGROUP_SRFDA_CONTROLPARAM_PICKUPLISTBOX("CARETTEMPLGROUP_SRFDA_CONTROLPARAM_PICKUPLISTBOX","选择列表控件参数");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList101(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[需求优先级]
     */
    @Getter
    public enum Story__pri {
        VALUE_1("1","1"),
        VALUE_2("2","2"),
        VALUE_3("3","3"),
        VALUE_4("4","4");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Story__pri(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体属性表单默认值类型]
     */
    @Getter
    public enum CodeList3 {
        VALUE_SESSION("SESSION","用户全局对象"),
        VALUE_APPLICATION("APPLICATION","系统全局对象"),
        VALUE_UNIQUEID("UNIQUEID","唯一编码"),
        VALUE_CONTEXT("CONTEXT","网页请求"),
        VALUE_PARAM("PARAM","数据对象属性"),
        VALUE_OPERATOR("OPERATOR","当前操作用户(编号)"),
        VALUE_OPERATORNAME("OPERATORNAME","当前操作用户(名称)"),
        VALUE_CURTIME("CURTIME","当前时间");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList3(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[来源区块]
     */
    @Getter
    public enum Block__source_block {
        VALUE_statistic("statistic","统计"),
        VALUE_overview("overview","总览"),
        VALUE_list("list","列表"),
        VALUE_task("task","任务"),
        VALUE_bug("bug","bug"),
        VALUE_case("case","用例"),
        VALUE_testtask("testtask","测试版本");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Block__source_block(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体属性插入模式]
     */
    @Getter
    public enum CodeList1 {
        VALUE_VERSION("VERSION","版本模式");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList1(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[Bug解决方案]
     */
    @Getter
    public enum Bug__resolution {
        VALUE_bydesign("bydesign","设计如此"),
        VALUE_duplicate("duplicate","重复Bug"),
        VALUE_external("external","外部原因"),
        VALUE_fixed("fixed","已解决"),
        VALUE_notrepro("notrepro","无法重现"),
        VALUE_postponed("postponed","延期处理"),
        VALUE_willnotfix("willnotfix","不予解决"),
        VALUE_tostory("tostory","转为需求");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Bug__resolution(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[日志级别]
     */
    @Getter
    public enum CodeList32 {
        VALUE_50000("50000","致命(FATAL)"),
        VALUE_40000("40000","错误(ERROR)"),
        VALUE_30000("30000","警告(WARN)"),
        VALUE_20000("20000","信息(INFO)"),
        VALUE_10000("10000","调试(DEBUG)"),
        VALUE_5000("5000","调试(TRACE)");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList32(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[时间维度类型]
     */
    @Getter
    public enum CodeList87 {
        VALUE_YM("YM","年、月"),
        VALUE_YMW("YMW","年、月、周"),
        VALUE_YMWD("YMWD","年、月、周、天"),
        VALUE_YMWDH("YMWDH","年、月、周、天、小时"),
        VALUE_YMD("YMD","年、月、天"),
        VALUE_YMDH("YMDH","年、月、天、小时"),
        VALUE_YW("YW","年、周"),
        VALUE_YWD("YWD","年、周、天"),
        VALUE_YWDH("YWDH","年、周、天、小时");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList87(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[附件对象类型]
     */
    @Getter
    public enum File__object_type {
        VALUE_product("product","产品"),
        VALUE_story("story","需求"),
        VALUE_productplan("productplan","计划"),
        VALUE_release("release","发布"),
        VALUE_project("project","项目"),
        VALUE_task("task","任务"),
        VALUE_build("build","版本"),
        VALUE_bug("bug","Bug"),
        VALUE_case("case","用例"),
        VALUE_caseresult("caseresult","用例结果"),
        VALUE_stepresult("stepresult","用例步骤"),
        VALUE_testtask("testtask","测试单"),
        VALUE_user("user","用户"),
        VALUE_doc("doc","文档"),
        VALUE_doclib("doclib","文档库"),
        VALUE_todo("todo","待办"),
        VALUE_branch("branch","分支"),
        VALUE_module("module","模块"),
        VALUE_testsuite("testsuite","套件"),
        VALUE_caselib("caselib","用例库"),
        VALUE_testreport("testreport","报告"),
        VALUE_entry("entry","应用"),
        VALUE_webhook("webhook","Webhook");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        File__object_type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[ZT_CASE__FREQUENCY]
     */
    @Getter
    public enum Case__frequency {
        VALUE_1("1","1"),
        VALUE_2("2","2"),
        VALUE_3("3","3");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Case__frequency(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[物理信息更新模式]
     */
    @Getter
    public enum CodeList57 {
        VALUE_UPDATEWHENMODIFY("UPDATEWHENMODIFY","变更时更新");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList57(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[项目快速分组（我的地盘）]
     */
    @Getter
    public enum ProjectQuickpaketMy {
        VALUE_All("All","我的项目");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        ProjectQuickpaketMy(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[项目快速分组]
     */
    @Getter
    public enum ProjectQuickpacket {
        VALUE_All("All","所有"),
        VALUE_nowait("nowait","未完成"),
        VALUE_wait("wait","未开始"),
        VALUE_doing("doing","进行中"),
        VALUE_suspended("suspended","已挂起"),
        VALUE_closed("closed","已关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        ProjectQuickpacket(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[统一资源类型]
     */
    @Getter
    public enum CodeList16 {
        VALUE_PAGE("PAGE","内置页面"),
        VALUE_REPORT("REPORT","报表"),
        VALUE_CUSTOM("CUSTOM","自定义");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList16(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[缩略界面类型]
     */
    @Getter
    public enum CodeList7 {
        VALUE_FORM("FORM","表单"),
        VALUE_PAGE("PAGE","内置页面");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList7(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[需求类型]
     */
    @Getter
    public enum Story__type {
        VALUE_requirement("requirement","用户需求"),
        VALUE_story("story","软件需求");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Story__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[Bug浏览器]
     */
    @Getter
    public enum Bug__browser {
        VALUE_all("all","全部"),
        VALUE_ie("ie","IE系列"),
        VALUE_ie11("ie11","IE11"),
        VALUE_ie10("ie10","IE10"),
        VALUE_ie9("ie9","IE9"),
        VALUE_ie8("ie8","IE8"),
        VALUE_ie7("ie7","IE7"),
        VALUE_ie6("ie6","IE6"),
        VALUE_chrome("chrome","chrome"),
        VALUE_firefox("firefox","firefox系列"),
        VALUE_firefox4("firefox4","firefox4"),
        VALUE_firefox3("firefox3","firefox3"),
        VALUE_firefox2("firefox2","firefox2"),
        VALUE_opera("opera","opera系列"),
        VALUE_opera11("opera11","opera11"),
        VALUE_oprea10("oprea10","oprea10"),
        VALUE_opera9("opera9","opera9"),
        VALUE_safari("safari","safari"),
        VALUE_maxthon("maxthon","傲游"),
        VALUE_uc("uc","UC"),
        VALUE_others("others","其他");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Bug__browser(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[任务快速分组（我的地盘）]
     */
    @Getter
    public enum TASK_QuickacketMy {
        VALUE_TOME("TOME","指派给我"),
        VALUE_CANCELLED("CANCELLED","由我创建"),
        VALUE_IFINISHED("IFINISHED","由我完成"),
        VALUE_COMPLETED("COMPLETED","由我关闭"),
        VALUE_CLOSED("CLOSED","由我取消");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        TASK_QuickacketMy(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试用例阶段]
     */
    @Getter
    public enum Testcase__stage {
        VALUE_unittest("unittest","单元测试阶段"),
        VALUE_feature("feature","功能测试阶段"),
        VALUE_intergrate("intergrate","集成测试阶段"),
        VALUE_system("system","系统测试阶段"),
        VALUE_smoke("smoke","冒烟测试阶段"),
        VALUE_bvt("bvt","版本验证阶段");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testcase__stage(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[文档库类型]
     */
    @Getter
    public enum Doclib__type {
        VALUE_product("product","产品文档库"),
        VALUE_project("project","项目文档库"),
        VALUE_custom("custom","自定义文档库");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Doclib__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[周期时间类型]
     */
    @Getter
    public enum CodeList40 {
        VALUE_MONTH("MONTH","月度"),
        VALUE_SEASON("SEASON","季度"),
        VALUE_WEEK("WEEK","周"),
        VALUE_DAY("DAY","天");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList40(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[日期选择]
     */
    @Getter
    public enum Datecheckbox {
        VALUE_on("on","待定");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Datecheckbox(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[应用界面主题]
     */
    @Getter
    public enum CodeList58 {

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList58(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[文档类型]
     */
    @Getter
    public enum Doc__type {
        VALUE_text("text","文档"),
        VALUE_url("url","链接");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Doc__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[IBIZ模板类型]
     */
    @Getter
    public enum Ibz__systpl__type {
        VALUE_tpltype__freemarker("tpltype__freemarker","Freemarker");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Ibz__systpl__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[发布状态]
     */
    @Getter
    public enum Release__status {
        VALUE_normal("normal","正常"),
        VALUE_terminate("terminate","停止维护");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Release__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体数据操作]
     */
    @Getter
    public enum CodeList10 {
        VALUE_INSERT("INSERT","插入"),
        VALUE_UPDATE("UPDATE","更新"),
        VALUE_DELETE("DELETE","删除"),
        VALUE_SELECT("SELECT","简单查询"),
        VALUE_CUSTOMCALL("CUSTOMCALL","自定义"),
        VALUE_CUSTOMPROCCALL("CUSTOMPROCCALL","自定义存储过程");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList10(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[补丁归属]
     */
    @Getter
    public enum CodeList36 {
        VALUE_1("1","框架基本"),
        VALUE_2("2","框架高级"),
        VALUE_4("4","工作流"),
        VALUE_8("8","EAI"),
        VALUE_16("16","UAC"),
        VALUE_32("32","全文检索"),
        VALUE_64("64","数据分析"),
        VALUE_128("128","基础网盘"),
        VALUE_256("256","基础组织");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList36(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[动态面板分区缩放样式]
     */
    @Getter
    public enum CodeList93 {
        VALUE_EXPAND("EXPAND","展开"),
        VALUE_COLLAPSE("COLLAPSE","收缩");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList93(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[功能测试快速分组_测试单]
     */
    @Getter
    public enum CaseTestTaskQuickpachet {
        VALUE_ALL("ALL","所有用例"),
        VALUE_TOME("TOME","指派给我");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CaseTestTaskQuickpachet(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[Bug快速分组]
     */
    @Getter
    public enum Bug__quickpacket {
        VALUE_All("All","所有"),
        VALUE_UNCLOSED("UNCLOSED","未关闭"),
        VALUE_ICREATE("ICREATE","由我创建"),
        VALUE_TOME("TOME","指派给我"),
        VALUE_BYME("BYME","由我解决"),
        VALUE_WAITCLOSED("WAITCLOSED","待关闭"),
        VALUE_UNRESOLVED("UNRESOLVED","未解决"),
        VALUE_MORE("MORE","更多"),
        VALUE_UNCONFIRMED("UNCONFIRMED","未确认"),
        VALUE_UNASSIGNED("UNASSIGNED","未指派"),
        VALUE_EXPIREDBUG("EXPIREDBUG","过期Bug");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Bug__quickpacket(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[ZT_WEBHOOK__SENDTYPE]
     */
    @Getter
    public enum Webhook__sendType {
        VALUE_sync("sync","sync"),
        VALUE_async("async","async");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Webhook__sendType(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[需求快速分组（移动端）]
     */
    @Getter
    public enum MobStoryQuickGroup {
        VALUE_ALL("ALL","所有"),
        VALUE_UNCLOSED("UNCLOSED","未关闭"),
        VALUE_TOME("TOME","指给我"),
        VALUE_ICREATE("ICREATE","我创建"),
        VALUE_MORE("MORE","更多"),
        VALUE_IREVIEW("IREVIEW","我评审"),
        VALUE_DRAFT("DRAFT","草稿"),
        VALUE_ICLOSE("ICLOSE","我关闭"),
        VALUE_ACTIVED("ACTIVED","激活"),
        VALUE_CHANGED("CHANGED","已变更"),
        VALUE_TOBECLOSED("TOBECLOSED","待关闭"),
        VALUE_CLOSED("CLOSED","已关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        MobStoryQuickGroup(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[时间分组类型]
     */
    @Getter
    public enum CodeList92 {
        VALUE_Q("Q","季度"),
        VALUE_M("M","月份"),
        VALUE_D("D","月天"),
        VALUE_H("H","小时");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList92(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体数据处理_数据对象操作]
     */
    @Getter
    public enum CodeList107 {
        VALUE_CREATENEW("CREATENEW","新建数据对象"),
        VALUE_CREATEFROM("CREATEFROM","拷贝新建数据对象"),
        VALUE_COPY("COPY","拷贝数据对象"),
        VALUE_COPYRESET("COPYRESET","拷贝数据对象(重置)");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList107(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[功能测试快速分组]
     */
    @Getter
    public enum CaseQuickpachet {
        VALUE_ALL("ALL","所有"),
        VALUE_TOME("TOME","需求变动");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CaseQuickpachet(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体属性访问控制]
     */
    @Getter
    public enum CodeList88 {
        VALUE_NONE("NONE","无"),
        VALUE_READ("READ","读取"),
        VALUE_UPDATE("UPDATE","更新");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList88(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }



    /**
     * 代码表[测试用例颜色]
     */
    @Getter
    public enum Testcase__color {
        VALUE_#3da7f5("#3da7f5","#3da7f5"),
        VALUE_#75c941("#75c941","#75c941"),
        VALUE_#2dbdb2("#2dbdb2","#2dbdb2"),
        VALUE_#797ec9("#797ec9","#797ec9"),
        VALUE_#ffaf38("#ffaf38","#ffaf38"),
        VALUE_#ff4e3e("#ff4e3e","#ff4e3e");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testcase__color(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[项目阶段]
     */
    @Getter
    public enum Project__statge {
        VALUE_1("1","1"),
        VALUE_2("2","2"),
        VALUE_3("3","3"),
        VALUE_4("4","4"),
        VALUE_5("5","5");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Project__statge(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[实体存储类型]
     */
    @Getter
    public enum CodeList80 {
        VALUE_STATIC("STATIC","静态存储"),
        VALUE_DYNAMIC("DYNAMIC","动态存储"),
        VALUE_NONE("NONE","无存储");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList80(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[重新构建]
     */
    @Getter
    public enum RELEASE_rebuild {
        VALUE_0("0","无操作"),
        VALUE_1("1","快速（删除本地项目与代码仓库多余文件）"),
        VALUE_4("4","修复模型"),
        VALUE_2("2","完整（完全重建本地项目及代码仓库）");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        RELEASE_rebuild(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[Bug优先级]
     */
    @Getter
    public enum Bug__pri {
        VALUE_1("1","1"),
        VALUE_2("2","2"),
        VALUE_3("3","3"),
        VALUE_4("4","4");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Bug__pri(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[图表控件_表格位置]
     */
    @Getter
    public enum CodeList52 {
        VALUE_NONE("NONE","无表格"),
        VALUE_TOPLEFT("TOPLEFT","上左"),
        VALUE_TOP("TOP","上中"),
        VALUE_TOPRIGHT("TOPRIGHT","上右"),
        VALUE_BOTTOMLEFT("BOTTOMLEFT","下左"),
        VALUE_BOTTOM("BOTTOM","下中"),
        VALUE_BOTTOMRIGHT("BOTTOMRIGHT","下右"),
        VALUE_LEFTTOP("LEFTTOP","左上"),
        VALUE_LEFT("LEFT","左中"),
        VALUE_LEFTBOTTOM("LEFTBOTTOM","左下"),
        VALUE_RIGHTTOP("RIGHTTOP","右上"),
        VALUE_RIGHT("RIGHT","右中"),
        VALUE_RIGHTBOTTOM("RIGHTBOTTOM","右下");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList52(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[日历、邮件重要程度]
     */
    @Getter
    public enum CodeList8 {
        VALUE_HIGH("HIGH","高"),
        VALUE_NORMAL("NORMAL","普通"),
        VALUE_LOW("LOW","低");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList8(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[输入辅助_实体处理逻辑代码]
     */
    @Getter
    public enum CodeList103 {
        VALUE_CARETTEMPLGROUP_SRFDA_DEDCCONTEXT("CARETTEMPLGROUP_SRFDA_DEDCCONTEXT","实体处理逻辑引擎"),
        VALUE_CARETTEMPLGROUP_SRFDA_DEACTION("CARETTEMPLGROUP_SRFDA_DEACTION","实体属性操作");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList103(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[系统错误代码]
     */
    @Getter
    public enum CodeList35 {
        VALUE_0("0","正确(0)"),
        VALUE_1("1","内部发生错误(INTERNALERROR)"),
        VALUE_2("2","访问被拒绝(ACCESSDENY)"),
        VALUE_3("3","无效的数据(INVALIDDATA)"),
        VALUE_4("4","无效的数据键(INVALIDDATAKEYS)"),
        VALUE_5("5","输入的信息有误(INPUTERROR)"),
        VALUE_6("6","重复的数据键值(DUPLICATEKEY)"),
        VALUE_7("7","重复的数据(DUPLICATEDATA)"),
        VALUE_8("8","删除拒绝(DELETEREJECT)"),
        VALUE_9("9","逻辑处理错误(LOGICERROR)");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList35(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[语言资源类型]
     */
    @Getter
    public enum CodeList55 {
        VALUE_DEF.LNAME("DEF.LNAME","实体属性逻辑名称"),
        VALUE_CL.ITEM.LNAME("CL.ITEM.LNAME","代码表项"),
        VALUE_TBB.TEXT("TBB.TEXT","工具栏按钮文本"),
        VALUE_TBB.TOOLTIP("TBB.TOOLTIP","工具栏按钮提示"),
        VALUE_MENUITEM.CAPTION("MENUITEM.CAPTION","菜单项文本"),
        VALUE_PAGE.HEADER("PAGE.HEADER","界面头部标题"),
        VALUE_PAGE.COMMON("PAGE.COMMON","界面常规"),
        VALUE_CONTROL("CONTROL","控件文本"),
        VALUE_ERROR.STD("ERROR.STD","标准错误"),
        VALUE_CTRL("CTRL","处理逻辑"),
        VALUE_COMMON("COMMON","通用"),
        VALUE_OTHER("OTHER","其它");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList55(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试用例状态]
     */
    @Getter
    public enum Testcase__status {
        VALUE_wait("wait","待评审"),
        VALUE_normal("normal","正常"),
        VALUE_blocked("blocked","被阻塞"),
        VALUE_investigate("investigate","研究中");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testcase__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[数据库类型]
     */
    @Getter
    public enum CodeList33 {
        VALUE_DB2("DB2","DB2"),
        VALUE_ORACLE("ORACLE","ORACLE"),
        VALUE_MSSQL("MSSQL","MSSQLSERVER"),
        VALUE_MYSQL("MYSQL","MySQL"),
        VALUE_SYBASE("SYBASE","SYBASE"),
        VALUE_INFORMIX("INFORMIX","INFORMIX");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList33(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[产品快速分组]
     */
    @Getter
    public enum ProductQuickpacket {
        VALUE_All("All","所有"),
        VALUE_normal("normal","未关闭"),
        VALUE_closed("closed","已关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        ProductQuickpacket(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[时区]
     */
    @Getter
    public enum CodeList59 {
        VALUE_Etc_GMT_12("Etc/GMT+12","(UTC-12:00)GMT-12:00"),
        VALUE_Etc_GMT_11("Etc/GMT+11","(UTC-11:00)GMT-11:00"),
        VALUE_MIT("MIT","(UTC-11:00)West Samoa Time"),
        VALUE_Pacific_Midway("Pacific/Midway","(UTC-11:00)Samoa Standard Time"),
        VALUE_Pacific_Niue("Pacific/Niue","(UTC-11:00)Niue Time"),
        VALUE_America_Adak("America/Adak","(UTC-10:00)Hawaii-Aleutian Standard Time"),
        VALUE_Etc_GMT_10("Etc/GMT+10","(UTC-10:00)GMT-10:00"),
        VALUE_HST("HST","(UTC-10:00)Hawaii Standard Time"),
        VALUE_Pacific_Fakaofo("Pacific/Fakaofo","(UTC-10:00)Tokelau Time"),
        VALUE_Pacific_Rarotonga("Pacific/Rarotonga","(UTC-10:00)Cook Is. Time"),
        VALUE_Pacific_Tahiti("Pacific/Tahiti","(UTC-10:00)Tahiti Time"),
        VALUE_Pacific_Marquesas("Pacific/Marquesas","(UTC-9:00)Marquesas Time"),
        VALUE_AST("AST","(UTC-9:00)Alaska Standard Time"),
        VALUE_Etc_GMT_9("Etc/GMT+9","(UTC-9:00)GMT-09:00"),
        VALUE_Pacific_Gambier("Pacific/Gambier","(UTC-9:00)Gambier Time"),
        VALUE_America_Dawson("America/Dawson","(UTC-8:00)Pacific Standard Time"),
        VALUE_Etc_GMT_8("Etc/GMT+8","(UTC-8:00)GMT-08:00"),
        VALUE_Pacific_Pitcairn("Pacific/Pitcairn","(UTC-8:00)Pitcairn Standard Time"),
        VALUE_America_Boise("America/Boise","(UTC-7:00)Mountain Standard Time"),
        VALUE_Etc_GMT_7("Etc/GMT+7","(UTC-7:00)GMT-07:00"),
        VALUE_America_Belize("America/Belize","(UTC-6:00)Central Standard Time"),
        VALUE_Chile_EasterIsland("Chile/EasterIsland","(UTC-6:00)Easter Is. Time"),
        VALUE_Etc_GMT_6("Etc/GMT+6","(UTC-6:00)GMT-06:00"),
        VALUE_Pacific_Galapagos("Pacific/Galapagos","(UTC-6:00)Galapagos Time"),
        VALUE_America_Atikokan("America/Atikokan","(UTC-5:00)Eastern Standard Time"),
        VALUE_America_Bogota("America/Bogota","(UTC-5:00)Colombia Time"),
        VALUE_America_Eirunepe("America/Eirunepe","(UTC-5:00)Acre Time"),
        VALUE_America_Guayaquil("America/Guayaquil","(UTC-5:00)Ecuador Time"),
        VALUE_America_Havana("America/Havana","(UTC-5:00)Cuba Standard Time"),
        VALUE_America_Lima("America/Lima","(UTC-5:00)Peru Time"),
        VALUE_Etc_GMT_5("Etc/GMT+5","(UTC-5:00)GMT-05:00"),
        VALUE_America_Caracas("America/Caracas","(UTC-4:00)Venezuela Time"),
        VALUE_America_Anguilla("America/Anguilla","(UTC-4:00)Atlantic Standard Time"),
        VALUE_America_Asuncion("America/Asuncion","(UTC-4:00)Paraguay Time"),
        VALUE_America_Boa_Vista("America/Boa_Vista","(UTC-4:00)Amazon Time"),
        VALUE_America_Guyana("America/Guyana","(UTC-4:00)Guyana Time"),
        VALUE_America_La_Paz("America/La_Paz","(UTC-4:00)Bolivia Time"),
        VALUE_America_Santiago("America/Santiago","(UTC-4:00)Chile Time"),
        VALUE_Atlantic_Stanley("Atlantic/Stanley","(UTC-4:00)Falkland Is. Time"),
        VALUE_Etc_GMT_4("Etc/GMT+4","(UTC-4:00)GMT-04:00"),
        VALUE_America_St_Johns("America/St_Johns","(UTC-3:00)Newfoundland Standard Time"),
        VALUE_AGT("AGT","(UTC-3:00)Argentine Time"),
        VALUE_America_Araguaina("America/Araguaina","(UTC-3:00)Brasilia Time"),
        VALUE_America_Cayenne("America/Cayenne","(UTC-3:00)French Guiana Time"),
        VALUE_America_Godthab("America/Godthab","(UTC-3:00)Western Greenland Time"),
        VALUE_America_Miquelon("America/Miquelon","(UTC-3:00)Pierre & Miquelon Standard Time"),
        VALUE_America_Montevideo("America/Montevideo","(UTC-3:00)Uruguay Time"),
        VALUE_America_Paramaribo("America/Paramaribo","(UTC-3:00)Suriname Time"),
        VALUE_Antarctica_Rothera("Antarctica/Rothera","(UTC-3:00)Rothera Time"),
        VALUE_Etc_GMT_3("Etc/GMT+3","(UTC-3:00)GMT-03:00"),
        VALUE_America_Noronha("America/Noronha","(UTC-2:00)Fernando de Noronha Time"),
        VALUE_Atlantic_South_Georgia("Atlantic/South_Georgia","(UTC-2:00)South Georgia Standard Time"),
        VALUE_Etc_GMT_2("Etc/GMT+2","(UTC-2:00)GMT-02:00"),
        VALUE_America_Scoresbysund("America/Scoresbysund","(UTC-1:00)Eastern Greenland Time"),
        VALUE_Atlantic_Azores("Atlantic/Azores","(UTC-1:00)Azores Time"),
        VALUE_Atlantic_Cape_Verde("Atlantic/Cape_Verde","(UTC-1:00)Cape Verde Time"),
        VALUE_Etc_GMT_1("Etc/GMT+1","(UTC-1:00)GMT-01:00"),
        VALUE_Africa_Abidjan("Africa/Abidjan","(UTC0:00)Greenwich Mean Time"),
        VALUE_Africa_Accra("Africa/Accra","(UTC0:00)Ghana Mean Time"),
        VALUE_Africa_Casablanca("Africa/Casablanca","(UTC0:00)Western European Time"),
        VALUE_Etc_GMT("Etc/GMT","(UTC0:00)GMT+00:00"),
        VALUE_Etc_UCT("Etc/UCT","(UTC0:00)Coordinated Universal Time"),
        VALUE_Africa_Algiers("Africa/Algiers","(UTC+1:00)Central European Time"),
        VALUE_Africa_Bangui("Africa/Bangui","(UTC+1:00)Western African Time"),
        VALUE_Etc_GMT-1("Etc/GMT-1","(UTC+1:00)GMT+01:00"),
        VALUE_MET("MET","(UTC+1:00)Middle Europe Time"),
        VALUE_ART("ART","(UTC+2:00)Eastern European Time"),
        VALUE_Africa_Blantyre("Africa/Blantyre","(UTC+2:00)Central African Time"),
        VALUE_Africa_Johannesburg("Africa/Johannesburg","(UTC+2:00)South Africa Standard Time"),
        VALUE_Asia_Jerusalem("Asia/Jerusalem","(UTC+2:00)Israel Standard Time"),
        VALUE_Etc_GMT-2("Etc/GMT-2","(UTC+2:00)GMT+02:00"),
        VALUE_Africa_Addis_Ababa("Africa/Addis_Ababa","(UTC+3:00)Eastern African Time"),
        VALUE_Antarctica_Syowa("Antarctica/Syowa","(UTC+3:00)Syowa Time"),
        VALUE_Asia_Aden("Asia/Aden","(UTC+3:00)Arabia Standard Time"),
        VALUE_Etc_GMT-3("Etc/GMT-3","(UTC+3:00)GMT+03:00"),
        VALUE_Europe_Moscow("Europe/Moscow","(UTC+3:00)Moscow Standard Time"),
        VALUE_Europe_Volgograd("Europe/Volgograd","(UTC+3:00)Volgograd Time"),
        VALUE_Asia_Riyadh87("Asia/Riyadh87","(UTC+3:00)GMT+03:07"),
        VALUE_Asia_Tehran("Asia/Tehran","(UTC+3:00)Iran Standard Time"),
        VALUE_Asia_Baku("Asia/Baku","(UTC+4:00)Azerbaijan Time"),
        VALUE_Asia_Dubai("Asia/Dubai","(UTC+4:00)Gulf Standard Time"),
        VALUE_Asia_Tbilisi("Asia/Tbilisi","(UTC+4:00)Georgia Time"),
        VALUE_Asia_Yerevan("Asia/Yerevan","(UTC+4:00)Armenia Time"),
        VALUE_Etc_GMT-4("Etc/GMT-4","(UTC+4:00)GMT+04:00"),
        VALUE_Europe_Samara("Europe/Samara","(UTC+4:00)Samara Time"),
        VALUE_Indian_Mahe("Indian/Mahe","(UTC+4:00)Seychelles Time"),
        VALUE_Indian_Mauritius("Indian/Mauritius","(UTC+4:00)Mauritius Time"),
        VALUE_Indian_Reunion("Indian/Reunion","(UTC+4:00)Reunion Time"),
        VALUE_Asia_Kabul("Asia/Kabul","(UTC+4:00)Afghanistan Time"),
        VALUE_Asia_Aqtau("Asia/Aqtau","(UTC+5:00)Aqtau Time"),
        VALUE_Asia_Aqtobe("Asia/Aqtobe","(UTC+5:00)Aqtobe Time"),
        VALUE_Asia_Ashgabat("Asia/Ashgabat","(UTC+5:00)Turkmenistan Time"),
        VALUE_Asia_Dushanbe("Asia/Dushanbe","(UTC+5:00)Tajikistan Time"),
        VALUE_Asia_Karachi("Asia/Karachi","(UTC+5:00)Pakistan Time"),
        VALUE_Asia_Oral("Asia/Oral","(UTC+5:00)Oral Time"),
        VALUE_Asia_Samarkand("Asia/Samarkand","(UTC+5:00)Uzbekistan Time"),
        VALUE_Asia_Yekaterinburg("Asia/Yekaterinburg","(UTC+5:00)Yekaterinburg Time"),
        VALUE_Etc_GMT-5("Etc/GMT-5","(UTC+5:00)GMT+05:00"),
        VALUE_Indian_Kerguelen("Indian/Kerguelen","(UTC+5:00)French Southern & Antarctic Lands Time"),
        VALUE_Indian_Maldives("Indian/Maldives","(UTC+5:00)Maldives Time"),
        VALUE_Asia_Calcutta("Asia/Calcutta","(UTC+5:00)India Standard Time"),
        VALUE_Asia_Katmandu("Asia/Katmandu","(UTC+5:00)Nepal Time"),
        VALUE_Antarctica_Mawson("Antarctica/Mawson","(UTC+6:00)Mawson Time"),
        VALUE_Antarctica_Vostok("Antarctica/Vostok","(UTC+6:00)Vostok Time"),
        VALUE_Asia_Almaty("Asia/Almaty","(UTC+6:00)Alma-Ata Time"),
        VALUE_Asia_Bishkek("Asia/Bishkek","(UTC+6:00)Kirgizstan Time"),
        VALUE_Asia_Dacca("Asia/Dacca","(UTC+6:00)Bangladesh Time"),
        VALUE_Asia_Novosibirsk("Asia/Novosibirsk","(UTC+6:00)Novosibirsk Time"),
        VALUE_Asia_Omsk("Asia/Omsk","(UTC+6:00)Omsk Time"),
        VALUE_Asia_Qyzylorda("Asia/Qyzylorda","(UTC+6:00)Qyzylorda Time"),
        VALUE_Asia_Thimbu("Asia/Thimbu","(UTC+6:00)Bhutan Time"),
        VALUE_Etc_GMT-6("Etc/GMT-6","(UTC+6:00)GMT+06:00"),
        VALUE_Indian_Chagos("Indian/Chagos","(UTC+6:00)Indian Ocean Territory Time"),
        VALUE_Asia_Rangoon("Asia/Rangoon","(UTC+6:00)Myanmar Time"),
        VALUE_Indian_Cocos("Indian/Cocos","(UTC+6:00)Cocos Islands Time"),
        VALUE_Antarctica_Davis("Antarctica/Davis","(UTC+7:00)Davis Time"),
        VALUE_Asia_Bangkok("Asia/Bangkok","(UTC+7:00)Indochina Time"),
        VALUE_Asia_Hovd("Asia/Hovd","(UTC+7:00)Hovd Time"),
        VALUE_Asia_Jakarta("Asia/Jakarta","(UTC+7:00)West Indonesia Time"),
        VALUE_Asia_Krasnoyarsk("Asia/Krasnoyarsk","(UTC+7:00)Krasnoyarsk Time"),
        VALUE_Etc_GMT-7("Etc/GMT-7","(UTC+7:00)GMT+07:00"),
        VALUE_Indian_Christmas("Indian/Christmas","(UTC+7:00)Christmas Island Time"),
        VALUE_Antarctica_Casey("Antarctica/Casey","(UTC+8:00)Western Standard Time (Australia)"),
        VALUE_Asia_Brunei("Asia/Brunei","(UTC+8:00)Brunei Time"),
        VALUE_Asia_Choibalsan("Asia/Choibalsan","(UTC+8:00)Choibalsan Time"),
        VALUE_Asia_Shanghai("Asia/Shanghai","(UTC+8:00)China Standard Time"),
        VALUE_Asia_Hong_Kong("Asia/Hong_Kong","(UTC+8:00)Hong Kong Time"),
        VALUE_Asia_Irkutsk("Asia/Irkutsk","(UTC+8:00)Irkutsk Time"),
        VALUE_Asia_Kuala_Lumpur("Asia/Kuala_Lumpur","(UTC+8:00)Malaysia Time"),
        VALUE_Asia_Makassar("Asia/Makassar","(UTC+8:00)Central Indonesia Time"),
        VALUE_Asia_Manila("Asia/Manila","(UTC+8:00)Philippines Time"),
        VALUE_Asia_Singapore("Asia/Singapore","(UTC+8:00)Singapore Time"),
        VALUE_Asia_Ulaanbaatar("Asia/Ulaanbaatar","(UTC+8:00)Ulaanbaatar Time"),
        VALUE_Etc_GMT-8("Etc/GMT-8","(UTC+8:00)GMT+08:00"),
        VALUE_Australia_Eucla("Australia/Eucla","(UTC+8:00)Central Western Standard Time (Australia)"),
        VALUE_Asia_Dili("Asia/Dili","(UTC+9:00)Timor-Leste Time"),
        VALUE_Asia_Jayapura("Asia/Jayapura","(UTC+9:00)East Indonesia Time"),
        VALUE_Asia_Pyongyang("Asia/Pyongyang","(UTC+9:00)Korea Standard Time"),
        VALUE_Asia_Tokyo("Asia/Tokyo","(UTC+9:00)Japan Standard Time"),
        VALUE_Asia_Yakutsk("Asia/Yakutsk","(UTC+9:00)Yakutsk Time"),
        VALUE_Etc_GMT-9("Etc/GMT-9","(UTC+9:00)GMT+09:00"),
        VALUE_Pacific_Palau("Pacific/Palau","(UTC+9:00)Palau Time"),
        VALUE_ACT("ACT","(UTC+9:00)Central Standard Time (Northern Territory)"),
        VALUE_Australia_Adelaide("Australia/Adelaide","(UTC+9:00)Central Standard Time (South Australia)"),
        VALUE_Australia_Broken_Hill("Australia/Broken_Hill","(UTC+9:00)Central Standard Time (South Australia/New South Wales)"),
        VALUE_AET("AET","(UTC+10:00)Eastern Standard Time (New South Wales)"),
        VALUE_Antarctica_DumontDUrville("Antarctica/DumontDUrville","(UTC+10:00)Dumont-d|Urville Time"),
        VALUE_Asia_Sakhalin("Asia/Sakhalin","(UTC+10:00)Sakhalin Time"),
        VALUE_Asia_Vladivostok("Asia/Vladivostok","(UTC+10:00)Vladivostok Time"),
        VALUE_Australia_Brisbane("Australia/Brisbane","(UTC+10:00)Eastern Standard Time (Queensland)"),
        VALUE_Australia_Hobart("Australia/Hobart","(UTC+10:00)Eastern Standard Time (Tasmania)"),
        VALUE_Australia_Melbourne("Australia/Melbourne","(UTC+10:00)Eastern Standard Time (Victoria)"),
        VALUE_Etc_GMT-10("Etc/GMT-10","(UTC+10:00)GMT+10:00"),
        VALUE_Pacific_Guam("Pacific/Guam","(UTC+10:00)Chamorro Standard Time"),
        VALUE_Pacific_Port_Moresby("Pacific/Port_Moresby","(UTC+10:00)Papua New Guinea Time"),
        VALUE_Pacific_Truk("Pacific/Truk","(UTC+10:00)Truk Time"),
        VALUE_Australia_LHI("Australia/LHI","(UTC+10:00)Lord Howe Standard Time"),
        VALUE_Asia_Magadan("Asia/Magadan","(UTC+11:00)Magadan Time"),
        VALUE_Etc_GMT-11("Etc/GMT-11","(UTC+11:00)GMT+11:00"),
        VALUE_Pacific_Efate("Pacific/Efate","(UTC+11:00)Vanuatu Time"),
        VALUE_Pacific_Guadalcanal("Pacific/Guadalcanal","(UTC+11:00)Solomon Is. Time"),
        VALUE_Pacific_Kosrae("Pacific/Kosrae","(UTC+11:00)Kosrae Time"),
        VALUE_Pacific_Noumea("Pacific/Noumea","(UTC+11:00)New Caledonia Time"),
        VALUE_Pacific_Ponape("Pacific/Ponape","(UTC+11:00)Ponape Time"),
        VALUE_Pacific_Norfolk("Pacific/Norfolk","(UTC+11:00)Norfolk Time"),
        VALUE_Antarctica_McMurdo("Antarctica/McMurdo","(UTC+12:00)New Zealand Standard Time"),
        VALUE_Asia_Anadyr("Asia/Anadyr","(UTC+12:00)Anadyr Time"),
        VALUE_Asia_Kamchatka("Asia/Kamchatka","(UTC+12:00)Petropavlovsk-Kamchatski Time"),
        VALUE_Etc_GMT-12("Etc/GMT-12","(UTC+12:00)GMT+12:00"),
        VALUE_Kwajalein("Kwajalein","(UTC+12:00)Marshall Islands Time"),
        VALUE_Pacific_Fiji("Pacific/Fiji","(UTC+12:00)Fiji Time"),
        VALUE_Pacific_Funafuti("Pacific/Funafuti","(UTC+12:00)Tuvalu Time"),
        VALUE_Pacific_Nauru("Pacific/Nauru","(UTC+12:00)Nauru Time"),
        VALUE_Pacific_Tarawa("Pacific/Tarawa","(UTC+12:00)Gilbert Is. Time"),
        VALUE_Pacific_Wake("Pacific/Wake","(UTC+12:00)Wake Time"),
        VALUE_Pacific_Wallis("Pacific/Wallis","(UTC+12:00)Wallis & Futuna Time"),
        VALUE_NZ-CHAT("NZ-CHAT","(UTC+12:00)Chatham Standard Time"),
        VALUE_Etc_GMT-13("Etc/GMT-13","(UTC+13:00)GMT+13:00"),
        VALUE_Pacific_Enderbury("Pacific/Enderbury","(UTC+13:00)Phoenix Is. Time"),
        VALUE_Pacific_Tongatapu("Pacific/Tongatapu","(UTC+13:00)Tonga Time"),
        VALUE_Etc_GMT-14("Etc/GMT-14","(UTC+14:00)GMT+14:00"),
        VALUE_Pacific_Kiritimati("Pacific/Kiritimati","(UTC+14:00)Line Is. Time");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList59(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[任务状态（查看）]
     */
    @Getter
    public enum TaskStatusCK {
        VALUE_wait("wait","未开始"),
        VALUE_doing("doing","进行中"),
        VALUE_done("done","已完成"),
        VALUE_pause("pause","已暂停"),
        VALUE_cancel("cancel","已取消"),
        VALUE_closed("closed","已关闭"),
        VALUE_storychange("storychange","需求变更");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        TaskStatusCK(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[输入辅助_图表参数]
     */
    @Getter
    public enum CodeList104 {
        VALUE_CARETTEMPLGROUP_SRFREPORT_CHARTDATA("CARETTEMPLGROUP_SRFREPORT_CHARTDATA","图表数据定义"),
        VALUE_CARETTEMPLGROUP_SRFREPORT_CHART("CARETTEMPLGROUP_SRFREPORT_CHART","图表表现定义");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList104(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[民族（公安部身份证）]
     */
    @Getter
    public enum CodeList99 {
        VALUE_01("01","汉"),
        VALUE_02("02","蒙古"),
        VALUE_03("03","回"),
        VALUE_04("04","藏"),
        VALUE_05("05","维吾尔"),
        VALUE_06("06","苗"),
        VALUE_07("07","彝"),
        VALUE_08("08","壮"),
        VALUE_09("09","布依"),
        VALUE_10("10","朝鲜"),
        VALUE_11("11","满"),
        VALUE_12("12","侗"),
        VALUE_13("13","瑶"),
        VALUE_14("14","白"),
        VALUE_15("15","土家"),
        VALUE_16("16","哈尼"),
        VALUE_17("17","哈萨克"),
        VALUE_18("18","傣"),
        VALUE_19("19","黎"),
        VALUE_20("20","傈僳"),
        VALUE_21("21","佤"),
        VALUE_22("22","畲"),
        VALUE_23("23","高山"),
        VALUE_24("24","拉祜"),
        VALUE_25("25","水"),
        VALUE_26("26","东乡"),
        VALUE_27("27","纳西"),
        VALUE_28("28","景颇"),
        VALUE_29("29","柯尔克孜"),
        VALUE_30("30","土"),
        VALUE_31("31","达斡尔"),
        VALUE_32("32","仫佬"),
        VALUE_33("33","羌"),
        VALUE_34("34","布朗"),
        VALUE_35("35","撒拉"),
        VALUE_36("36","毛南"),
        VALUE_37("37","仡佬"),
        VALUE_38("38","锡伯"),
        VALUE_39("39","阿昌"),
        VALUE_40("40","普米"),
        VALUE_41("41","塔吉克"),
        VALUE_42("42","怒"),
        VALUE_43("43","乌孜别克"),
        VALUE_44("44","俄罗斯"),
        VALUE_45("45","鄂温克"),
        VALUE_46("46","德昂"),
        VALUE_47("47","保安"),
        VALUE_48("48","裕固"),
        VALUE_49("49","京"),
        VALUE_50("50","塔塔尔"),
        VALUE_51("51","独龙"),
        VALUE_52("52","鄂伦春"),
        VALUE_53("53","赫哲"),
        VALUE_54("54","门巴"),
        VALUE_55("55","珞巴"),
        VALUE_56("56","基诺");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList99(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[主实体删除关系实体操作]
     */
    @Getter
    public enum CodeList21 {
        VALUE_1("1","同时删除"),
        VALUE_2("2","置空"),
        VALUE_3("3","限制删除");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList21(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[实体数据处理_数据操作]
     */
    @Getter
    public enum CodeList108 {
        VALUE_INSERT("INSERT","新建"),
        VALUE_UPDATE("UPDATE","更新"),
        VALUE_SAVE("SAVE","保存（自动判断）"),
        VALUE_DELETE("DELETE","删除"),
        VALUE_CUSTOMCALL("CUSTOMCALL","自定义调用"),
        VALUE_CUSTOMPROCCALL("CUSTOMPROCCALL","自定义存储过程调用"),
        VALUE_CUSTOMRAWPROCCALL("CUSTOMRAWPROCCALL","自定义存储过程调用（全称）"),
        VALUE_GET("GET","获取(GET)"),
        VALUE_CHECKKEYSTATE("CHECKKEYSTATE","检查主键状态(CHECKKEYSTATE)");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList108(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[需求阶段]
     */
    @Getter
    public enum Story__stage {
        VALUE_wait("wait","未开始"),
        VALUE_planned("planned","已计划"),
        VALUE_projected("projected","已立项"),
        VALUE_developing("developing","研发中"),
        VALUE_developed("developed","研发完毕"),
        VALUE_testing("testing","测试中"),
        VALUE_tested("tested","测试完毕"),
        VALUE_verified("verified","已验收"),
        VALUE_released("released","已发布"),
        VALUE_closed("closed","已关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Story__stage(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[前端展现技术]
     */
    @Getter
    public enum CodeList96 {
        VALUE_HTML("HTML","HTML"),
        VALUE_SL("SL","SilverLight"),
        VALUE_WinRT("WinRT","WinRT"),
        VALUE_Android("Android","Android"),
        VALUE_IOS("IOS","IOS");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList96(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体规则处理_数据类型]
     */
    @Getter
    public enum CodeList112 {
        VALUE_VARCHAR("VARCHAR","文本"),
        VALUE_INT("INT","整形"),
        VALUE_FLOAT("FLOAT","浮点"),
        VALUE_DATETIME("DATETIME","日期");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList112(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体关系明细类型]
     */
    @Getter
    public enum CodeList14 {
        VALUE_PAGE("PAGE","内建页面"),
        VALUE_PAGEPATH("PAGEPATH","页面路径"),
        VALUE_DER1N("DER1N","1:N关系"),
        VALUE_DER11("DER11","1:1关系"),
        VALUE_WFSTEP("WFSTEP","工作流处理步骤"),
        VALUE_WFSTEPACTOR("WFSTEPACTOR","工作流当前处理用户"),
        VALUE_FILELIST("FILELIST","附件列表"),
        VALUE_DATAAUDIT("DATAAUDIT","行为审计"),
        VALUE_DERTYPE("DERTYPE","实体关系分组");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList14(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试状态]
     */
    @Getter
    public enum Test__status {
        VALUE_wait("wait","未开始"),
        VALUE_doing("doing","进行中"),
        VALUE_done("done","已完成"),
        VALUE_blocked("blocked","被阻塞");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Test__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[任务快速分组]
     */
    @Getter
    public enum Task_quickpacket {
        VALUE_All("All","所有"),
        VALUE_UNCLOSED("UNCLOSED","未关闭"),
        VALUE_TOME("TOME","指派给我"),
        VALUE_storychange("storychange","需求变更"),
        VALUE_MORE("MORE","更多"),
        VALUE_NOTSTARTED("NOTSTARTED","未开始"),
        VALUE_INPROGRESS("INPROGRESS","进行中"),
        VALUE_UNACCOMPLISHED("UNACCOMPLISHED","未完成"),
        VALUE_IFINISHED("IFINISHED","我完成"),
        VALUE_COMPLETED("COMPLETED","已完成"),
        VALUE_CLOSED("CLOSED","已关闭"),
        VALUE_CANCELLED("CANCELLED","已取消");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Task_quickpacket(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[ZT_IM_CONFERENCEACTION__TYPE]
     */
    @Getter
    public enum Im_conferenceaction__type {
        VALUE_create("create","create"),
        VALUE_join("join","join"),
        VALUE_leave("leave","leave"),
        VALUE_close("close","close");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Im_conferenceaction__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[过期计划]
     */
    @Getter
    public enum ExpiredPlan {
        VALUE_1("1","过期计划");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        ExpiredPlan(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }



    /**
     * 代码表[本地语言]
     */
    @Getter
    public enum CodeList56 {
        VALUE_EN("EN","英文"),
        VALUE_ZH_CN("ZH_CN","中文简体"),
        VALUE_ZH_TW("ZH_TW","中文繁体（台湾）");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList56(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[私人事务选择]
     */
    @Getter
    public enum Private_choose {
        VALUE_1("1","是");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Private_choose(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[项目类型]
     */
    @Getter
    public enum Project__type {
        VALUE_sprint("sprint","短期项目"),
        VALUE_waterfall("waterfall","长期项目"),
        VALUE_ops("ops","运维项目");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Project__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[输入辅助_页面参数]
     */
    @Getter
    public enum CodeList100 {
        VALUE_CARETTEMPLGROUP_SRFDA_PAGEPARAM("CARETTEMPLGROUP_SRFDA_PAGEPARAM","常规页面参数"),
        VALUE_CARETTEMPLGROUP_SRFDA_GRIDVIEWPAGEPARAM("CARETTEMPLGROUP_SRFDA_GRIDVIEWPAGEPARAM","表格页面参数"),
        VALUE_CARETTEMPLGROUP_SRFDA_EDITVIEWPAGEPARAM("CARETTEMPLGROUP_SRFDA_EDITVIEWPAGEPARAM","编辑页面参数");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList100(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[性能分析指标]
     */
    @Getter
    public enum CodeList117 {
        VALUE_PODBACTION("PODBACTION","数据库操作性能"),
        VALUE_PODBQUERY("PODBQUERY","数据库查询性能"),
        VALUE_PODEDC("PODEDC","实体处理逻辑性能"),
        VALUE_POWORKFLOW("POWORKFLOW","工作流性能"),
        VALUE_POPAGE("POPAGE","页面性能"),
        VALUE_POPAGEBACKEND("POPAGEBACKEND","页面性能(后台)"),
        VALUE_POPAGESESSION("POPAGESESSION","并发性能");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList117(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[数据库触发器事件]
     */
    @Getter
    public enum CodeList66 {
        VALUE_INSERT("INSERT","Insert"),
        VALUE_UPDATE("UPDATE","Update"),
        VALUE_DELETE("DELETE","Delete");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList66(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[是否]
     */
    @Getter
    public enum YesNo {
        VALUE_1("1","是"),
        VALUE_0("0","否");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        YesNo(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[模板类型]
     */
    @Getter
    public enum Usertpl__type {
        VALUE_story("story","story"),
        VALUE_task("task","task"),
        VALUE_bug("bug","bug");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Usertpl__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[属性预定义值规则]
     */
    @Getter
    public enum CodeList13 {
        VALUE_INT("INT","整数"),
        VALUE_POSITIVEINT("POSITIVEINT","正整数"),
        VALUE_STRING("STRING","字符串"),
        VALUE_STRING_EMAIL("STRING_EMAIL","电子邮件"),
        VALUE_FLOAT("FLOAT","浮点数"),
        VALUE_FLOAT_PERCENT("FLOAT_PERCENT","百分比数值(0~100)"),
        VALUE_DATETIME("DATETIME","日期时间"),
        VALUE_DATETIME_GTNOW("DATETIME_GTNOW","大于当天时间"),
        VALUE_DATETIME_GTNOWNOHOUR("DATETIME_GTNOWNOHOUR","大于当天日期"),
        VALUE_DATETIME_GTNOW3DAY("DATETIME_GTNOW3DAY","后3天");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList13(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[Bug创建解决版本]
     */
    @Getter
    public enum BugCreateResolve {
        VALUE_1("1","创建");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        BugCreateResolve(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[Bug严重程度]
     */
    @Getter
    public enum Bug__severity {
        VALUE_1("1","1"),
        VALUE_2("2","2"),
        VALUE_3("3","3"),
        VALUE_4("4","4");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Bug__severity(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[报表输出格式]
     */
    @Getter
    public enum CodeList54 {
        VALUE_PDF("PDF","PDF"),
        VALUE_EXCEL("EXCEL","EXCEL"),
        VALUE_HTML("HTML","HTML");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList54(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试用例类型]
     */
    @Getter
    public enum Testcase__type {
        VALUE_feature("feature","功能测试"),
        VALUE_performance("performance","性能测试"),
        VALUE_config("config","配置相关"),
        VALUE_install("install","安装部署"),
        VALUE_security("security","安全相关"),
        VALUE_interface("interface","接口测试"),
        VALUE_unit("unit","单元测试"),
        VALUE_other("other","其他");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testcase__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[生产体系类型]
     */
    @Getter
    public enum Ibzpro__pssystype {
        VALUE_iBizSys6("iBizSys6","iBizSys6");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Ibzpro__pssystype(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试运行状态]
     */
    @Getter
    public enum Testrun__status {
        VALUE_wait("wait","未开始"),
        VALUE_doing("doing","进行中"),
        VALUE_done("done","已完成"),
        VALUE_blocked("blocked","被阻塞");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testrun__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[文档内容类型]
     */
    @Getter
    public enum Doccontent__type {
        VALUE_html("html","富文本"),
        VALUE_markdown("markdown","Markdown"),
        VALUE_url("url","链接"),
        VALUE_word("word","Word"),
        VALUE_ppt("ppt","PPT"),
        VALUE_excel("excel","Excel");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Doccontent__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[测试结果]
     */
    @Getter
    public enum Testresult__result {
        VALUE_n_a("n/a","忽略"),
        VALUE_pass("pass","通过"),
        VALUE_fail("fail","失败"),
        VALUE_blocked("blocked","阻塞");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testresult__result(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[文档权限]
     */
    @Getter
    public enum Doc__acl {
        VALUE_open("open","公开"),
        VALUE_private("private","私有"),
        VALUE_custom("custom","自定义");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Doc__acl(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[报表分类]
     */
    @Getter
    public enum CodeList12 {
        VALUE_REPORTFOLDER_1("REPORTFOLDER_1","经营性报表"),
        VALUE_REPORTFOLDER_2("REPORTFOLDER_2","财务报表");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList12(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[来源对象]
     */
    @Getter
    public enum Ibizpro_story__sourceobject {
        VALUE_sourcenote__dataentity("sourcenote__dataentity","实体");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Ibizpro_story__sourceobject(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[产品快速分组]
     */
    @Getter
    public enum Product_quickpacket {
        VALUE_All("All","所有"),
        VALUE_normal("normal","正常"),
        VALUE_MORE("MORE","更多"),
        VALUE_closed("closed","结束"),
        VALUE_branch("branch","多平台"),
        VALUE_platform("platform","多分支");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Product_quickpacket(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[用户数据行为]
     */
    @Getter
    public enum CodeList71 {
        VALUE_1("1","无建立"),
        VALUE_2("2","无更新"),
        VALUE_4("4","无删除"),
        VALUE_8("8","无查看");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList71(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[数据通知监控行为（新建、更新、删除）]
     */
    @Getter
    public enum CodeList98 {
        VALUE_1("1","新建"),
        VALUE_2("2","更新"),
        VALUE_4("4","删除");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList98(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[开发帮助重要程度]
     */
    @Getter
    public enum CodeList31 {
        VALUE_LOW("LOW","低"),
        VALUE_NORMAIL("NORMAIL","中"),
        VALUE_HIGH("HIGH","高");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList31(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[产品访问控制]
     */
    @Getter
    public enum Product__acl {
        VALUE_open("open","默认设置(有产品视图权限，即可访问)"),
        VALUE_private("private","私有产品(相关负责人和项目团队成员才能访问)"),
        VALUE_custom("custom","自定义白名单(团队成员和白名单的成员可以访问)");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Product__acl(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[需求来源]
     */
    @Getter
    public enum Story__source {
        VALUE_customer("customer","客户"),
        VALUE_user("user","用户"),
        VALUE_po("po","产品经理"),
        VALUE_market("market","市场"),
        VALUE_service("service","客服"),
        VALUE_operation("operation","运营"),
        VALUE_support("support","技术支持"),
        VALUE_competitor("competitor","竞争对手"),
        VALUE_partner("partner","合作伙伴"),
        VALUE_dev("dev","开发人员"),
        VALUE_tester("tester","测试人员"),
        VALUE_bug("bug","Bug"),
        VALUE_forum("forum","论坛"),
        VALUE_other("other","其它"),
        VALUE_iBiz("iBiz","iBiz");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Story__source(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[数据库存储区域]
     */
    @Getter
    public enum CodeList105 {

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList105(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[页面样式]
     */
    @Getter
    public enum CodeList22 {
        VALUE_0("0","跳转处理界面"),
        VALUE_1("1","数据编辑界面"),
        VALUE_2("2","数据表格界面"),
        VALUE_9("9","数据树形界面"),
        VALUE_3("3","数据选择界面"),
        VALUE_4("4","工作流数据编辑界面"),
        VALUE_5("5","工作流表格界面"),
        VALUE_6("6","工作流管理表格界面"),
        VALUE_7("7","导航界面"),
        VALUE_8("8","信息展示界面");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList22(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[页面资源类型]
     */
    @Getter
    public enum CodeList17 {
        VALUE_NONE("NONE","无资源"),
        VALUE_DEDATA("DEDATA","数据操作"),
        VALUE_PAGE("PAGE","页面对象"),
        VALUE_CUSTOM("CUSTOM","自定义");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList17(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }



    /**
     * 代码表[项目状态(wait=doing)]
     */
    @Getter
    public enum Project_staus {
        VALUE_doing("doing","进行中"),
        VALUE_suspended("suspended","已挂起"),
        VALUE_closed("closed","已关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Project_staus(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[计划快速分组]
     */
    @Getter
    public enum Zt__productplan {
        VALUE_All("All","所有"),
        VALUE_UNEXPIRED("UNEXPIRED","未过期"),
        VALUE_ISEXPIRED("ISEXPIRED","已过期");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Zt__productplan(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[月（1～31）]
     */
    @Getter
    public enum CodeList47 {
        VALUE_1("1","1号"),
        VALUE_2("2","2号"),
        VALUE_3("3","3号"),
        VALUE_4("4","4号"),
        VALUE_5("5","5号"),
        VALUE_6("6","6号"),
        VALUE_7("7","7号"),
        VALUE_8("8","8号"),
        VALUE_9("9","9号"),
        VALUE_10("10","10号"),
        VALUE_11("11","11号"),
        VALUE_12("12","12号"),
        VALUE_13("13","13号"),
        VALUE_14("14","14号"),
        VALUE_15("15","15号"),
        VALUE_16("16","16号"),
        VALUE_17("17","17号"),
        VALUE_18("18","18号"),
        VALUE_19("19","19号"),
        VALUE_20("20","20号"),
        VALUE_21("21","21号"),
        VALUE_22("22","22号"),
        VALUE_23("23","23号"),
        VALUE_24("24","24号"),
        VALUE_25("25","25号"),
        VALUE_26("26","26号"),
        VALUE_27("27","27号"),
        VALUE_28("28","28号"),
        VALUE_29("29","29号"),
        VALUE_30("30","30号"),
        VALUE_31("31","31号");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList47(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[数据通知类型]
     */
    @Getter
    public enum CodeList61 {
        VALUE_TIME("TIME","定时"),
        VALUE_NORMAL("NORMAL","值变更"),
        VALUE_TIMEEX("TIMEEX","定时+值判断");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList61(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体数据操作步骤]
     */
    @Getter
    public enum CodeList106 {
        VALUE_GETDEFAULT("GETDEFAULT","获取默认值"),
        VALUE_BEFORESAVE("BEFORESAVE","保存之前"),
        VALUE_AFTERSAVE("AFTERSAVE","保存之后"),
        VALUE_BEFOREREMOVE("BEFOREREMOVE","删除之前"),
        VALUE_AFTERREMOVE("AFTERREMOVE","删除之后"),
        VALUE_TESTSAVE("TESTSAVE","测试保存"),
        VALUE_CUSTOMCALL("CUSTOMCALL","自定义操作"),
        VALUE_INTERNALCALL("INTERNALCALL","内部调用");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList106(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[是否指派]
     */
    @Getter
    public enum IsAssigned {
        VALUE_assign("assign","已指派"),
        VALUE_noassign("noassign","未指派");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        IsAssigned(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[数据同步方向]
     */
    @Getter
    public enum CodeList97 {
        VALUE_IN("IN","输入"),
        VALUE_OUT("OUT","输出");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList97(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[表格列对齐]
     */
    @Getter
    public enum CodeList18 {
        VALUE_left("left","左对齐"),
        VALUE_center("center","剧中"),
        VALUE_right("right","右对齐");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList18(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[数据通知取值规则]
     */
    @Getter
    public enum CodeList69 {
        VALUE_AFTER("AFTER","变更后"),
        VALUE_BEFORE("BEFORE","变更前"),
        VALUE_CHANGE("CHANGE","值变更");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList69(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[开发数据版本控制状态]
     */
    @Getter
    public enum CodeList115 {
        VALUE_CHECKIN("CHECKIN","签入"),
        VALUE_CHECKOUT("CHECKOUT","签出");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList115(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[页面参数值变量]
     */
    @Getter
    public enum CodeList63 {
        VALUE_PARAM1("PARAM1","参数1(字符)"),
        VALUE_PARAM2("PARAM2","参数2(字符)");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList63(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[工作时间代码表]
     */
    @Getter
    public enum CodeList49 {

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList49(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[表格每页记录数]
     */
    @Getter
    public enum CodeList26 {
        VALUE_10("10","10行"),
        VALUE_20("20","20行"),
        VALUE_30("30","30行"),
        VALUE_40("40","40行"),
        VALUE_50("50","50行"),
        VALUE_60("60","60行"),
        VALUE_70("70","70行"),
        VALUE_80("80","80行"),
        VALUE_90("90","90行"),
        VALUE_100("100","100行");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList26(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[Bug类型]
     */
    @Getter
    public enum Bug__type {
        VALUE_codeerror("codeerror","代码错误"),
        VALUE_config("config","配置相关"),
        VALUE_install("install","安装部署"),
        VALUE_security("security","安全相关"),
        VALUE_performance("performance","性能问题"),
        VALUE_standard("standard","标准规范"),
        VALUE_automation("automation","测试脚本"),
        VALUE_designdefect("designdefect","设计缺陷"),
        VALUE_others("others","其他");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Bug__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[界面功能类型]
     */
    @Getter
    public enum CodeList91 {
        VALUE_INHERIT("INHERIT","继承模板"),
        VALUE_DEFAULT("DEFAULT","默认功能"),
        VALUE_CUSTOM("CUSTOM","自定义");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList91(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[日小时（0～23）]
     */
    @Getter
    public enum CodeList85 {
        VALUE_00("00","0点"),
        VALUE_01("01","1点"),
        VALUE_02("02","2点"),
        VALUE_03("03","3点"),
        VALUE_04("04","4点"),
        VALUE_05("05","5点"),
        VALUE_06("06","6点"),
        VALUE_07("07","7点"),
        VALUE_08("08","8点"),
        VALUE_09("09","9点"),
        VALUE_10("10","10点"),
        VALUE_11("11","11点"),
        VALUE_12("12","12点"),
        VALUE_13("13","13点"),
        VALUE_14("14","14点"),
        VALUE_15("15","15点"),
        VALUE_16("16","16点"),
        VALUE_17("17","17点"),
        VALUE_18("18","18点"),
        VALUE_19("19","19点"),
        VALUE_20("20","20点"),
        VALUE_21("21","21点"),
        VALUE_22("22","22点"),
        VALUE_23("23","23点");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList85(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[月份（1～12）]
     */
    @Getter
    public enum CodeList82 {
        VALUE_01("01","1月"),
        VALUE_02("02","2月"),
        VALUE_03("03","3月"),
        VALUE_04("04","4月"),
        VALUE_05("05","5月"),
        VALUE_06("06","6月"),
        VALUE_07("07","7月"),
        VALUE_08("08","8月"),
        VALUE_09("09","9月"),
        VALUE_10("10","10月"),
        VALUE_11("11","11月"),
        VALUE_12("12","12月");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList82(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[数据通知监控行为]
     */
    @Getter
    public enum CodeList72 {
        VALUE_1("1","新建"),
        VALUE_2("2","更新"),
        VALUE_3("3","新建或更新"),
        VALUE_4("4","删除");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList72(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体规则处理_值处理函数]
     */
    @Getter
    public enum CodeList110 {
        VALUE_DATE_DIFF_D("DATE_DIFF_D","距今天数（日期）"),
        VALUE_DATE_DIFF_W("DATE_DIFF_W","距今周数（日期）"),
        VALUE_DATE_DIFF_M("DATE_DIFF_M","距今月份数（日期）"),
        VALUE_DATE_DIFF_Q("DATE_DIFF_Q","距今季度数（日期）"),
        VALUE_DATE_DIFF_Y("DATE_DIFF_Y","距今年数（日期）");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList110(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试用例结果]
     */
    @Getter
    public enum Testcase__result {
        VALUE_n_a("n/a","忽略"),
        VALUE_pass("pass","通过"),
        VALUE_fail("fail","失败"),
        VALUE_blocked("blocked","阻塞");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="未执行";

        Testcase__result(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[是否（数值）]
     */
    @Getter
    public enum YesNo2 {
        VALUE_1("1","是"),
        VALUE_0("0","否");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        YesNo2(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[产品类型]
     */
    @Getter
    public enum Product__type {
        VALUE_normal("normal","正常"),
        VALUE_branch("branch","多分支"),
        VALUE_platform("platform","多平台");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Product__type(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[项目状态]
     */
    @Getter
    public enum Project__status {
        VALUE_wait("wait","未开始"),
        VALUE_doing("doing","进行中"),
        VALUE_suspended("suspended","已挂起"),
        VALUE_closed("closed","已关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Project__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[页面参数类型]
     */
    @Getter
    public enum CodeList78 {

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList78(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[Bug操作系统]
     */
    @Getter
    public enum Bug__os {
        VALUE_all("all","全部"),
        VALUE_windows("windows","Windows"),
        VALUE_win10("win10","Windows 10"),
        VALUE_win8("win8","Windows 8"),
        VALUE_win7("win7","Windows 7"),
        VALUE_vista("vista","Windows Vista"),
        VALUE_winxp("winxp","Windows XP"),
        VALUE_win2012("win2012","Windows 2012"),
        VALUE_win2008("win2008","Windows 2008"),
        VALUE_win2003("win2003","Windows 2003"),
        VALUE_win2000("win2000","Windows 2000"),
        VALUE_android("android","Android"),
        VALUE_ios("ios","IOS"),
        VALUE_wp8("wp8","WP8"),
        VALUE_wp7("wp7","WP7"),
        VALUE_symbian("symbian","Symbian"),
        VALUE_linux("linux","Linux"),
        VALUE_freebsd("freebsd","FreeBSD"),
        VALUE_osx("osx","OS X"),
        VALUE_unix("unix","Unix"),
        VALUE_others("others","其他");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Bug__os(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[Bug状态]
     */
    @Getter
    public enum Bug__status {
        VALUE_active("active","激活"),
        VALUE_resolved("resolved","已解决"),
        VALUE_closed("closed","已关闭");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Bug__status(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[Bug严重程度（Mob）]
     */
    @Getter
    public enum Bug__severity_mob {
        VALUE_1("1","1"),
        VALUE_2("2","2"),
        VALUE_3("3","3"),
        VALUE_4("4","4");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Bug__severity_mob(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[ZT_IM_MESSAGE__CONTENTTYPE]
     */
    @Getter
    public enum Im_message__contentType {
        VALUE_text("text","text"),
        VALUE_plain("plain","plain"),
        VALUE_emotion("emotion","emotion"),
        VALUE_image("image","image"),
        VALUE_file("file","file"),
        VALUE_object("object","object"),
        VALUE_code("code","code");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Im_message__contentType(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体数据处理_变量名称]
     */
    @Getter
    public enum CodeList109 {
        VALUE_%DEFAULT%("%DEFAULT%","默认变量"),
        VALUE_%ENV%("%ENV%","环境变量"),
        VALUE_PARAM1("PARAM1","变量1"),
        VALUE_PARAM2("PARAM2","变量2"),
        VALUE_PARAM3("PARAM3","变量3"),
        VALUE_PARAM4("PARAM4","变量4"),
        VALUE_PARAM5("PARAM5","变量5"),
        VALUE_%LAST%("%LAST%","历史值"),
        VALUE_%GLOBAL1%("%GLOBAL1%","全局变量1"),
        VALUE_%GLOBAL2%("%GLOBAL2%","全局变量2"),
        VALUE_%GLOBAL3%("%GLOBAL3%","全局变量3"),
        VALUE_%GLOBAL4%("%GLOBAL4%","全局变量4"),
        VALUE_%GLOBAL5%("%GLOBAL5%","全局变量5"),
        VALUE_%BRINST%("%BRINST%","全局规则引擎实例变量");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList109(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }


    /**
     * 代码表[字段排序方向]
     */
    @Getter
    public enum SortDir {
        VALUE_ASC("ASC","升序"),
        VALUE_DESC("DESC","降序");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        SortDir(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[日历参与者状态]
     */
    @Getter
    public enum CodeList15 {
        VALUE_UNDECIDED("UNDECIDED","未确定"),
        VALUE_ACCEPT("ACCEPT","接受"),
        VALUE_REJECT("REJECT","拒绝");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList15(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[测试执行结果]
     */
    @Getter
    public enum Testrun__result {
        VALUE_n_a("n/a","忽略"),
        VALUE_pass("pass","通过"),
        VALUE_fail("fail","失败"),
        VALUE_blocked("blocked","阻塞");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        Testrun__result(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[实体数据库操作]
     */
    @Getter
    public enum CodeList53 {
        VALUE_INSERT("INSERT","插入"),
        VALUE_UPDATE("UPDATE","更新"),
        VALUE_SELECT("SELECT","查询"),
        VALUE_DELETE("DELETE","删除"),
        VALUE_CUSTOM("CUSTOM","自定义");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList53(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

    /**
     * 代码表[扩展表格单元格边框样式]
     */
    @Getter
    public enum CodeList76 {
        VALUE_LEFT("LEFT","左边框"),
        VALUE_TOP("TOP","上边框"),
        VALUE_RIGHT("RIGHT","右边框"),
        VALUE_BOTTOM("BOTTOM","下边框");

        private String value;
        private String text;
        private String valueSeparator="";
        private String textSeparator="";
        private String emptyText="";

        CodeList76(String value , String text) {
            this.value=value;
            this.text = text;
        }
    }

}

