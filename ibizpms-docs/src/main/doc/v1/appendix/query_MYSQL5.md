
# **系统日志**(ZT_ACTION)

### DEFAULT(DEFAULT)<div id="Action_Default"></div>
```sql
SELECT
t1.`ACTION`,
(case when t1.objectType in ('bug','story','release') and t1.action in ('changestatus','resolved','closed', 'reviewed') and t1.extra <> '' then CONCAT_WS('_',t1.objectType,t1.action,t1.extra) else '' end) AS `ACTIONMANNER`,
t1.ACTOR AS `ACTOR`,
t1.`COMMENT`,
t1.`DATE`,
DATE_FORMAT(t1.date,'%m月%d日 %H:%i') as `date1`,
t1.`ID`,
t1.id as srfkey,
0 AS `ISACTORSS`,
t1.`comment` AS `LASTCOMMENT`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`READ`
FROM `zt_action` t1
```
### 动态(根据类型过滤)(MobType)<div id="Action_MobType"></div>
```sql
SELECT t1.`ACTION`, t1.`actor` as actor, t1.`DATE`, t1.`ID`, t1.`OBJECTID`, t1.id as srfkey,t1.`OBJECTTYPE`, t1.`PRODUCT`, t1.`PROJECT`, t1.`READ`, t1.`comment`, t1.extra, case when t1.objectType in ('bug','story','release') and t1.action in ('changestatus','resolved','closed', 'reviewed') and t1.extra <> '' then CONCAT_WS('_',t1.objectType,t1.action,t1.extra) else '' end as ActionManner FROM `zt_action` t1  WHERE ( t1.`OBJECTID` = ${srfdatacontext('srfparentkey','{"defname":"OBJECTID","dename":"ZT_ACTION"}')} AND t1.`OBJECTTYPE` = ${srfdatacontext('objecttype','{"defname":"OBJECTTYPE","dename":"ZT_ACTION"}')} )
```
### 产品动态(产品相关所有)(ProductTrends)<div id="Action_ProductTrends"></div>
```sql
select t1.* from (SELECT
t1.`ACTION`,
t1.actor as actor,
t1.`DATE`,
t1.`ID`,
t1.id as srfkey,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`READ`,
t1.extra,
case when t1.objectType in ('bug','story','release') and t1.action in ('changestatus','resolved','closed', 'reviewed') and t1.extra <> '' then CONCAT_WS('_',t1.objectType,t1.action,t1.extra) else '' end as ActionManner,
(case when DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(now(),'%Y-%m-%d') then '1' end) as Today,
(case when DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(DATE_ADD(now(),INTERVAL -1 DAY),'%Y-%m-%d') then '1' end) as yesterday,
(case when YEARWEEK(now()) = YEARWEEK(t1.date) then '1' end) as thisweek,
(case when YEARWEEK(DATE_ADD(now(),INTERVAL -1 WEEK)) = YEARWEEK(t1.date) then '1' end) as lastweek,
(case when DATE_FORMAT(t1.date,'%Y-%m') = DATE_FORMAT(now(),'%Y-%m') then '1' end) as thismonth,
(case when DATE_FORMAT(t1.date,'%Y-%m') = DATE_FORMAT(DATE_ADD(now(),INTERVAL -1 MONTH),'%Y-%m') then '1' end) as lastmonth
FROM `zt_action` t1 
) t1

WHERE ( t1.`PRODUCT` LIKE  CONCAT('%,',${srfdatacontext('srfparentkey','{"defname":"PRODUCT","dename":"ZT_ACTION"}')},',%') ) 

```
### 项目动态(项目相关所有)(ProjectTrends)<div id="Action_ProjectTrends"></div>
```sql
SELECT
	t1.* 
FROM
	(
SELECT
	t1.`ACTION`,
	t1.actor AS actor,
	t1.`DATE`,
	t1.`ID`,
	t1.`OBJECTID`,
	t1.`OBJECTTYPE`,
	t1.`PRODUCT`,
	t1.`PROJECT`,
	t1.`READ`,
	t1.extra,
CASE
	
	WHEN t1.objectType IN ( 'bug', 'story', 'release' ) 
	AND t1.action IN ( 'changestatus', 'resolved', 'closed', 'reviewed' ) 
	AND t1.extra <> '' THEN
		CONCAT_WS( '_', t1.objectType, t1.action, t1.extra ) ELSE '' 
	END AS ActionManner,
	( CASE WHEN DATE_FORMAT( t1.date, '%Y-%m-%d' ) = DATE_FORMAT( now( ), '%Y-%m-%d' ) THEN '1' END ) AS Today,
	t1.id AS srfkey,
	(
	CASE
			
			WHEN DATE_FORMAT( t1.date, '%Y-%m-%d' ) = DATE_FORMAT( DATE_ADD( now( ), INTERVAL - 1 DAY ), '%Y-%m-%d' ) THEN
			'1' 
		END 
		) AS yesterday,
		( CASE WHEN YEARWEEK( now( ) ) = YEARWEEK( t1.date ) THEN '1' END ) AS thisweek,
		(
		CASE
				
				WHEN YEARWEEK( DATE_ADD( now( ), INTERVAL - 1 WEEK ) ) = YEARWEEK( t1.date ) THEN
				'1' 
			END 
			) AS lastweek,
			( CASE WHEN DATE_FORMAT( t1.date, '%Y-%m' ) = DATE_FORMAT( now( ), '%Y-%m' ) THEN '1' END ) AS thismonth,
			(
			CASE
					
					WHEN DATE_FORMAT( t1.date, '%Y-%m' ) = DATE_FORMAT( DATE_ADD( now( ), INTERVAL - 1 MONTH ), '%Y-%m' ) THEN
					'1' 
				END 
				) AS lastmonth 
			FROM
				`zt_action` t1
) t1
WHERE ( t1.`PROJECT` = ${srfdatacontext('srfparentkey','{"defname":"PROJECT","dename":"ZT_ACTION"}')} ) 

```
### 查询用户使用年(QueryUserYEAR)<div id="Action_QueryUserYEAR"></div>
```sql
select DISTINCT DATE_FORMAT(t1.date,'%Y') as date1 from zt_action t1
WHERE  t1.actor = #{srf.sessioncontext.srfloginname} 

```
### 动态(根据类型过滤)(Type)<div id="Action_Type"></div>
```sql
SELECT
t1.`ACTION`,
t1.`actor` as actor,
t1.`DATE`,
t1.`ID`,
t1.id as srfkey,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`READ`,
t1.`comment`,
t1.extra,
(case when t1.actor =  #{srf.sessioncontext.srfloginname} then 1 else 0 end) as ISACTORSS,
case when t1.objectType in ('bug','story','release') and t1.action in ('changestatus','resolved','closed', 'reviewed') and t1.extra <> '' then CONCAT_WS('_',t1.objectType,t1.action,t1.extra) else '' end as ActionManner
FROM `zt_action` t1 
WHERE 
( t1.`OBJECTID` = ${srfdatacontext('srfparentkey','{"defname":"OBJECTID","dename":"ZT_ACTION"}')}  AND  t1.`OBJECTTYPE` =  ${srfdatacontext('objecttype','{"defname":"OBJECTTYPE","dename":"ZT_ACTION"}')} )
```
### 默认（全部数据）(VIEW)<div id="Action_View"></div>
```sql
SELECT
t1.`ACTION`,
(case when t1.objectType in ('bug','story','release') and t1.action in ('changestatus','resolved','closed', 'reviewed') and t1.extra <> '' then CONCAT_WS('_',t1.objectType,t1.action,t1.extra) else '' end) AS `ACTIONMANNER`,
t1.`ACTOR`,
t1.`COMMENT`,
t1.`DATE`,
DATE_FORMAT(t1.date,'%m月%d日 %H:%i') AS `DATE1`,
t1.`EXTRA`,
t1.`ID`,
0 AS `ISACTORSS`,
t1.`comment` AS `LASTCOMMENT`,
(case when DATE_FORMAT(t1.date,'%Y-%m') = DATE_FORMAT(DATE_ADD(now(),INTERVAL -1 MONTH),'%Y-%m') then '1' end) AS `LASTMONTH`,
(case when YEARWEEK(DATE_ADD(now(),INTERVAL -1 WEEK)) = YEARWEEK(t1.date) then '1' end) AS `LASTWEEK`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`READ`,
t1.id AS `SRFKEY`,
(case when DATE_FORMAT(t1.date,'%Y-%m') = DATE_FORMAT(now(),'%Y-%m') then '1' end) AS `THISMONTH`,
(case when YEARWEEK(now()) = YEARWEEK(t1.date) then '1' end) AS `THISWEEK`,
(case when DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(now(),'%Y-%m-%d') then '1' end) AS `TODAY`,
(case when DATE_FORMAT(t1.date,'%Y-%m-%d') = DATE_FORMAT(DATE_ADD(now(),INTERVAL -1 DAY),'%Y-%m-%d') then '1' end) AS `YESTERDAY`
FROM `zt_action` t1 

```

# **block**(ZT_BLOCK)

### DEFAULT(DEFAULT)<div id="Block_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`BLOCK`,
t1.`GRID`,
t1.`HEIGHT`,
t1.`HIDDEN`,
t1.`ID`,
t1.`MODULE`,
t1.`ORDER`,
t1.`SOURCE`,
t1.`TITLE`
FROM `zt_block` t1 

```
### 默认（全部数据）(VIEW)<div id="Block_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`BLOCK`,
t1.`GRID`,
t1.`HEIGHT`,
t1.`HIDDEN`,
t1.`ID`,
t1.`MODULE`,
t1.`ORDER`,
t1.`PARAMS`,
t1.`SOURCE`,
t1.`TITLE`
FROM `zt_block` t1 

```

# **产品的分支和平台信息**(ZT_BRANCH)

### CurProduct(CurProduct)<div id="Branch_CurProduct"></div>
```sql
select t1.* from (select '0' as `DELETED`,0 as `ID`,'所有平台' AS `NAME`, 0 as `order`, (case when #{srf.webcontext.product} is not null then #{srf.webcontext.product} else #{srf.webcontext.products} end  ) as product from dual union all SELECT t1.`DELETED`, t1.`ID`, t1.`NAME`, t1.`ORDER`, t1.`PRODUCT` FROM `zt_branch` t1) t1
WHERE t1.DELETED = '0' 
( ( t1.`PRODUCT` = ${srfwebcontext('product','{"defname":"PRODUCT","dename":"ZT_BRANCH"}')}  OR  t1.`PRODUCT` = ${srfdatacontext('product','{"defname":"PRODUCT","dename":"ZT_BRANCH"}')}  OR  t1.`PRODUCT` = ${srfdatacontext('products','{"defname":"PRODUCT","dename":"ZT_BRANCH"}')}  or t1.`product` is null) ) 

```
### DEFAULT(DEFAULT)<div id="Branch_Default"></div>
```sql
SELECT
t1.`DELETED`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER`,
t1.`PRODUCT`
FROM `zt_branch` t1 

WHERE t1.DELETED = '0' 

```
### DefaultBranch(DefaultBranch)<div id="Branch_DefaultBranch"></div>
```sql
SELECT
'0' AS `DELETED`,
0 AS `ID`,
'所有平台' AS`NAME`,
0 AS `ORDER`,
t2.`id` AS `PRODUCT`
FROM `zt_branch` t1 RIGHT JOIN `zt_product` t2 ON t1.product=t2.id
WHERE
( ( t2.`ID` = ${srfwebcontext('product','{"defname":"PRODUCT","dename":"ZT_BRANCH"}')}  OR  t2.`ID` = ${srfdatacontext('product','{"defname":"PRODUCT","dename":"ZT_BRANCH"}')}  OR  t2.`ID` = ${srfdatacontext('products','{"defname":"PRODUCT","dename":"ZT_BRANCH"}')} ) )
```
### 默认（全部数据）(VIEW)<div id="Branch_View"></div>
```sql
SELECT
t1.`DELETED`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER`,
t1.`PRODUCT`
FROM `zt_branch` t1 

WHERE t1.DELETED = '0' 

```

# **Bug**(ZT_BUG)

### 指派给我Bug(AssignedToMyBug)<div id="Bug_AssignedToMyBug"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'bug' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) as overduebugs 
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID
WHERE t1.DELETED = '0' 
( t1.`ASSIGNEDTO` =  ${srfsessioncontext('srfloginname','{"defname":"ASSIGNEDTO","dename":"ZT_BUG"}')} ) 

```
### 版本关联Bug（已解决）(BuildBugs)<div id="Bug_BuildBugs"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'bug' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) as overduebugs 
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
WHERE t1.`DELETED` ='0' AND FIND_IN_SET ( t1.ID, (SELECT BUGS FROM ZT_BUILD WHERE ID= ${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_BUILD"}')}))
```
### 版本可关联的已解决的Bugs集合(buildLinkResolvedBugs)<div id="Bug_BuildLinkResolvedBugs"></div>
```sql
SELECT
	t1.`ACTIVATEDCOUNT`,
	t1.`ACTIVATEDDATE`,
	t1.`ASSIGNEDDATE`,
	t1.`ASSIGNEDTO`,
	t1.`BRANCH`,
	t1.`BROWSER`,
	t1.`CASE`,
	t1.`CASEVERSION`,
	t1.`CLOSEDBY`,
	t1.`CLOSEDDATE`,
	t1.`COLOR`,
	t1.`CONFIRMED`,
	t1.`DEADLINE`,
	t1.`DELETED`,
	t1.`DUPLICATEBUG`,
	t1.`ENTRY`,
	t1.`FOUND`,
	t1.`HARDWARE`,
	t1.`ID`,
	0 AS `ISFAVORITES`,
	t1.`KEYWORDS`,
	t1.`LASTEDITEDBY`,
	t1.`LASTEDITEDDATE`,
	t1.`LINES`,
	t1.`LINKBUG`,
	t1.`MAILTO`,
	t1.`MODULE`,
	t1.`OPENEDBUILD`,
	t1.`OPENEDBY`,
	t1.`OPENEDDATE`,
	t1.`OS`,
	t1.`PLAN`,
	t1.`PRI`,
	t1.`PRODUCT`,
	t1.`PROJECT`,
	t1.`REPO`,
	t1.`REPOTYPE`,
	t1.`RESOLUTION`,
	t1.`RESOLVEDBUILD`,
(case when t1.`RESOLVEDBY` is null or t1.`RESOLVEDBY` = '' then  #{srf.sessioncontext.srfloginname} else t1.`RESOLVEDBY` end)	as `RESOLVEDBY`,
	t1.`RESOLVEDDATE`,
	t1.`RESULT`,
	t1.`SEVERITY`,
	t1.`STATUS`,
	t1.`STORY`,
	t1.`STORYVERSION`,
	t1.`SUBSTATUS`,
	t1.`TASK`,
	t1.`TESTTASK`,
	t1.`TITLE`,
	t1.`TOSTORY`,
	t1.`TOTASK`,
	t1.`TYPE`,
	t1.`V1`,
	case when t1.`status` = 'resolved' then '10' else '20' end as V2,
	( CASE WHEN t1.DEADLINE = '0000-00-00' THEN 0 ELSE datediff( t1.deadline, now( ) ) END ) AS overduebugs 
FROM
	`zt_bug` t1
WHERE t1.DELETED = '0' 
t1.product = ( SELECT product FROM zt_build WHERE project =  #{srf.datacontext.project}
		AND id = #{srf.datacontext.build} ) 
	AND t1.project = #{srf.datacontext.project} 
	AND t1.`status` <> 'closed' 
	AND t1.id NOT IN ( SELECT t3.id FROM zt_bug t3, zt_build t4  WHERE
		t4.id = #{srf.datacontext.build} AND FIND_IN_SET( t3.id, t4.bugs ) ) 

```
### 版本关联Bug（已解决）(BuildOpenBugs)<div id="Bug_BuildOpenBugs"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'bug' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) as overduebugs 
FROM `zt_bug` t1 
	where 
	t1.DELETED = '0'  
	AND
FIND_IN_SET(
 ${srfdatacontext('srfparentkey','{"defname":"PROJECT","dename":"ZT_BUILD"}')},(SELECT OPENEDBUILD FROM `zt_bug` WHERE ID=t1.ID))
```
### Build产生的Bug(BuildProduceBug)<div id="Bug_BuildProduceBug"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t71.`TITLE` AS `CASENAME`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
LEFT JOIN zt_case t71 ON t1.CASE = t71.ID 

WHERE t1.DELETED = '0' 
( FIND_IN_SET((select t.build from zt_testtask t inner join zt_testreport tt on t.id = tt.tasks where tt.id = #{srf.datacontext.srfparentkey} 
),t1.OPENEDBUILD)  and t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select tt.`end` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey} 
) ) 

```
### Build产生的Bug-模块分布(BuildProduceBugModule)<div id="Bug_BuildProduceBugModule"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
CONCAT(
	'/',
 case when	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t51.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) is not null then (
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t51.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) when t51.`name` is null then '' else t51.`name` end
	)  AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID
WHERE t1.DELETED = '0' 
FIND_IN_SET((select t.build from zt_testtask t inner join zt_testreport tt on t.id = tt.tasks where tt.id = #{srf.datacontext.srfparentkey} 
),t1.OPENEDBUILD)  and t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select tt.`end` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey} 
) 

```
### Build产生的Bug-模块分布(项目)(BuildProduceBugModule_Project)<div id="Bug_BuildProduceBugModule_Project"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
CONCAT(
	'/',
 case when	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t51.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) is not null then (
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t51.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) when t51.`name` is null then '' else t51.`name` end
	)  AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
	INNER JOIN (select tt.id from zt_build tt where tt.deleted = '0' and tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id = #{srf.datacontext.srfparentkey} )))) t71 on FIND_IN_SET(t71.id,t1.openedBuild)

WHERE t1.DELETED = '0' 
( t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select CONCAT(DATE_FORMAT(tt.`end`,'%Y-%m-%d'),' 23:59:59') from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and not EXISTS(select 1 from zt_build t where FIND_IN_SET(t.id,t1.openedBuild) and FIND_IN_SET(t.id,(select GROUP_CONCAT(tt.id) from (select tt.* from zt_build tt where  tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id =  #{srf.datacontext.srfparentkey} )))) tt GROUP BY tt.product)) = 0) and FIND_IN_SET('trunk',t1.openedBuild) = 0 ) 

```
### Build产生的Bug-创建者分布(BuildProduceBugOpenedBy)<div id="Bug_BuildProduceBugOpenedBy"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t71.realname AS `OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
LEFT JOIN zt_user t71 on t1.openedBy = t71.account
WHERE t1.DELETED = '0' 
FIND_IN_SET((select t.build from zt_testtask t inner join zt_testreport tt on t.id = tt.tasks where tt.id = #{srf.datacontext.srfparentkey} 
),t1.OPENEDBUILD)  and t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select tt.`end` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey} 
) 

```
### Build产生的Bug-创建者分布(项目)(BuildProduceBugOpenedBy_Project)<div id="Bug_BuildProduceBugOpenedBy_Project"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t71.realname as `OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
LEFT JOIN zt_user t71 on t1.openedBy = t71.account
	INNER JOIN (select tt.id from zt_build tt where tt.deleted = '0' and tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id = #{srf.datacontext.srfparentkey} )))) t81 on FIND_IN_SET(t81.id,t1.openedBuild)

WHERE t1.DELETED = '0' 
( t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select CONCAT(DATE_FORMAT(tt.`end`,'%Y-%m-%d'),' 23:59:59') from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and not EXISTS(select 1 from zt_build t where FIND_IN_SET(t.id,t1.openedBuild) and FIND_IN_SET(t.id,(select GROUP_CONCAT(tt.id) from (select tt.* from zt_build tt where  tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id =  #{srf.datacontext.srfparentkey} )))) tt GROUP BY tt.product)) = 0) and FIND_IN_SET('trunk',t1.openedBuild) = 0 ) 
t1.openedBy is not null and t1.openedBy <> '' 

```
### Build产生的Bug（已解决）(BuildProduceBugRES)<div id="Bug_BuildProduceBugRES"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t71.`TITLE` AS `CASENAME`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
LEFT JOIN zt_case t71 ON t1.CASE = t71.ID 

WHERE t1.DELETED = '0' 
( FIND_IN_SET((select t.build from zt_testtask t inner join zt_testreport tt on t.id = tt.tasks where tt.id = #{srf.datacontext.srfparentkey} 
),t1.OPENEDBUILD)  and t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select tt.`end` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey} 
)  AND  t1.resolution is not null and t1.resolution <> '' and t1.`status` in ('resolved','closed') ) 

```
### Build产生的Bug-解决者分布(BuildProduceBugRESOLVEDBY)<div id="Bug_BuildProduceBugRESOLVEDBY"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t71.realname AS `RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
LEFT JOIN zt_user t71 on t1.RESOLVEDBY = t71.account
WHERE t1.DELETED = '0' 
FIND_IN_SET((select t.build from zt_testtask t inner join zt_testreport tt on t.id = tt.tasks where tt.id = #{srf.datacontext.srfparentkey} 
),t1.OPENEDBUILD)  and t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select tt.`end` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey} 
) 
t1.resolution is not null and t1.resolution <> '' and t1.`status` in ('resolved','closed') 

```
### Build产生的Bug-解决者分布(项目)(BuildProduceBugRESOLVEDBY_Project)<div id="Bug_BuildProduceBugRESOLVEDBY_Project"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t71.realname as  `RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
LEFT JOIN zt_user t71 on t1.RESOLVEDBY = t71.account
INNER JOIN (select tt.id from zt_build tt where tt.deleted = '0' and tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id = #{srf.datacontext.srfparentkey} )))) t81 on FIND_IN_SET(t81.id,t1.openedBuild)

WHERE t1.DELETED = '0' 
( t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select CONCAT(DATE_FORMAT(tt.`end`,'%Y-%m-%d'),' 23:59:59') from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and not EXISTS(select 1 from zt_build t where FIND_IN_SET(t.id,t1.openedBuild) and FIND_IN_SET(t.id,(select GROUP_CONCAT(tt.id) from (select tt.* from zt_build tt where  tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id =  #{srf.datacontext.srfparentkey} )))) tt GROUP BY tt.product)) = 0) and FIND_IN_SET('trunk',t1.openedBuild) = 0 ) 
t1.RESOLVEDBY is not null and t1.RESOLVEDBY <> '' 

```
### Build产生的Bug-解决方案分布(项目)(BuildProduceBugResolution_Project)<div id="Bug_BuildProduceBugResolution_Project"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
INNER JOIN (select tt.id from zt_build tt where tt.deleted = '0' and tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id = #{srf.datacontext.srfparentkey} )))) t71 on FIND_IN_SET(t71.id,t1.openedBuild)


WHERE t1.DELETED = '0' 
( t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select CONCAT(DATE_FORMAT(tt.`end`,'%Y-%m-%d'),' 23:59:59') from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and not EXISTS(select 1 from zt_build t where FIND_IN_SET(t.id,t1.openedBuild) and FIND_IN_SET(t.id,(select GROUP_CONCAT(tt.id) from (select tt.* from zt_build tt where  tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id =  #{srf.datacontext.srfparentkey} )))) tt GROUP BY tt.product)) = 0) and FIND_IN_SET('trunk',t1.openedBuild) = 0 ) 
t1.`RESOLUTION` is not null and t1.`RESOLUTION` <> '' 

```
### Build产生的Bug-严重程度分布(项目)(BuildProduceBugSeverity_Project)<div id="Bug_BuildProduceBugSeverity_Project"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
INNER JOIN (select tt.id from zt_build tt where tt.deleted = '0' and tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id = #{srf.datacontext.srfparentkey} )))) t71 on FIND_IN_SET(t71.id,t1.openedBuild)

WHERE t1.DELETED = '0' 
( t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select CONCAT(DATE_FORMAT(tt.`end`,'%Y-%m-%d'),' 23:59:59') from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and not EXISTS(select 1 from zt_build t where FIND_IN_SET(t.id,t1.openedBuild) and FIND_IN_SET(t.id,(select GROUP_CONCAT(tt.id) from (select tt.* from zt_build tt where  tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id =  #{srf.datacontext.srfparentkey} )))) tt GROUP BY tt.product)) = 0) and FIND_IN_SET('trunk',t1.openedBuild) = 0 ) 

```
### Build产生的Bug-状态分布(项目)(BuildProduceBugStatus_Project)<div id="Bug_BuildProduceBugStatus_Project"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
INNER JOIN (select tt.id from zt_build tt where tt.deleted = '0' and tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id = #{srf.datacontext.srfparentkey} )))) t71 on FIND_IN_SET(t71.id,t1.openedBuild)

WHERE t1.DELETED = '0' 
( t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select CONCAT(DATE_FORMAT(tt.`end`,'%Y-%m-%d'),' 23:59:59') from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and not EXISTS(select 1 from zt_build t where FIND_IN_SET(t.id,t1.openedBuild) and FIND_IN_SET(t.id,(select GROUP_CONCAT(tt.id) from (select tt.* from zt_build tt where  tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id =  #{srf.datacontext.srfparentkey} )))) tt GROUP BY tt.product)) = 0) and FIND_IN_SET('trunk',t1.openedBuild) = 0 ) 

```
### Build产生的Bug-类型分布(项目)(BuildProduceBugType_Project)<div id="Bug_BuildProduceBugType_Project"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
INNER JOIN (select tt.id from zt_build tt where tt.deleted = '0' and tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id = #{srf.datacontext.srfparentkey} )))) t71 on FIND_IN_SET(t71.id,t1.openedBuild)

WHERE t1.DELETED = '0' 
( t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select CONCAT(DATE_FORMAT(tt.`end`,'%Y-%m-%d'),' 23:59:59') from  zt_testreport tt  where tt.id =  #{srf.datacontext.srfparentkey} 
) and not EXISTS(select 1 from zt_build t where FIND_IN_SET(t.id,t1.openedBuild) and FIND_IN_SET(t.id,(select GROUP_CONCAT(tt.id) from (select tt.* from zt_build tt where  tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id =  #{srf.datacontext.srfparentkey} )))) tt GROUP BY tt.product)) = 0) and FIND_IN_SET('trunk',t1.openedBuild) = 0) 
t1.type is not null and t1.type <> '' 

```
### 当前用户解决的Bug(CurUserResolve)<div id="Bug_CurUserResolve"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t71.`TITLE` AS `CASENAME`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
LEFT JOIN zt_case t71 ON t1.CASE = t71.ID 

WHERE t1.DELETED = '0' 
( t1.`RESOLVEDBY` =  ${srfsessioncontext('srfloginname','{"defname":"RESOLVEDBY","dename":"ZT_BUG"}')}  AND  ((DATE_FORMAT(t1.resolvedDate,'%Y') = DATE_FORMAT(now(),'%Y')  and #{srf.datacontext.curyear} is null) or (DATE_FORMAT(t1.resolvedDate,'%Y') = #{srf.datacontext.curyear}) ) ) 

```
### DEFAULT(DEFAULT)<div id="Bug_Default"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'bug' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) as overduebugs 
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID
WHERE t1.DELETED = '0' 

```
### 累计创建的Bug数(MyCurOpenedBug)<div id="Bug_MyCurOpenedBug"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t71.`TITLE` AS `CASENAME`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
LEFT JOIN zt_case t71 ON t1.CASE = t71.ID 

WHERE t1.DELETED = '0' 
( DATE_FORMAT( t1.openedDate, '%Y' ) = DATE_FORMAT(now(), '%Y' )  AND  t1.`OPENEDBY` =  ${srfsessioncontext('srfloginname','{"defname":"OPENEDBY","dename":"ZT_BUG"}')} ) 

```
### 我的收藏(MyFavorites)<div id="Bug_MyFavorites"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'bug' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) as overduebugs 
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 

WHERE t1.DELETED = '0' 
t1.id in (select t.OBJECTID from T_IBZ_FAVORITES t where t.type = 'bug' and t.account = #{srf.sessioncontext.srfloginname}) 

```
### 发布关联Bug（已解决）(ReleaseBugs)<div id="Bug_ReleaseBugs"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'bug' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) as overduebugs 
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
WHERE t1.`DELETED` ='0' AND FIND_IN_SET ( t1.ID, (SELECT BUGS FROM ZT_RELEASE WHERE ID= ${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_RELEASE"}')}))
```
### 发布关联Bug（未解决）(ReleaseLeftBugs)<div id="Bug_ReleaseLeftBugs"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'bug' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) as overduebugs 
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
WHERE t1.`DELETED` = '0' AND FIND_IN_SET ( t1.ID, (SELECT LEFTBUGS FROM ZT_RELEASE WHERE ID= ${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_RELEASE"}')}))
```
### 发布可关联的bug（遗留）(ReleaseLinkableLeftBug)<div id="Bug_ReleaseLinkableLeftBug"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t71.`TITLE` AS `CASENAME`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
LEFT JOIN zt_case t71 ON t1.CASE = t71.ID 

WHERE t1.DELETED = '0' 
( t1.`PRODUCT` = ${srfdatacontext('product','{"defname":"PRODUCT","dename":"ZT_BUG"}')} ) 

```
### 发布可关联的bug（已解决）(ReleaseLinkableResolvedBug)<div id="Bug_ReleaseLinkableResolvedBug"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t71.`TITLE` AS `CASENAME`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
LEFT JOIN zt_case t71 ON t1.CASE = t71.ID 

WHERE t1.DELETED = '0' 
( t1.`PRODUCT` = ${srfdatacontext('product','{"defname":"PRODUCT","dename":"ZT_BUG"}')} ) 

```
### 发布关联Bug（未解决）(ReportBugs)<div id="Bug_ReportBugs"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'bug' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) as overduebugs 
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
WHERE t1.`DELETED` = '0' AND FIND_IN_SET ( t1.ID, (SELECT BUGS FROM ZT_TESTREPORT WHERE ID= ${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_TESTREPORT "}')}))
```
### 版本关联bug(遗留得bug)(SelectBugByBuild)<div id="Bug_SelectBugByBuild"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t71.`TITLE` AS `CASENAME`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
LEFT JOIN zt_case t71 ON t1.CASE = t71.ID 

WHERE t1.DELETED = '0' 
( FIND_IN_SET((select t.build from zt_testtask t inner join zt_testreport tt on t.id = tt.tasks where tt.id = #{srf.datacontext.srfparentkey} 
),t1.OPENEDBUILD)  and t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey} 
) and t1.openedDate < (select tt.`end` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey} 
)  AND  (t1.`status` = 'active' or t1.resolvedDate > (select zt_testreport.`end` from zt_testreport where zt_testreport.id = 
 #{srf.datacontext.srfparentkey} 
)) ) 

```
### 查询遗留得bug(项目)(SelectBugsByProject)<div id="Bug_SelectBugsByProject"></div>
```sql
SELECT distinct
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root ) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
INNER JOIN (select tt.id from zt_build tt where tt.deleted = '0' and tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id, (select tasks from zt_testreport where id = #{srf.datacontext.srfparentkey} )))) t71 on FIND_IN_SET(t71.id,t1.openedBuild)
WHERE t1.deleted = '0' 
 t1.openedDate > (select tt.`begin` from  zt_testreport tt  where tt.id = #{srf.datacontext.srfparentkey}
) and t1.openedDate < (select CONCAT(DATE_FORMAT(tt.`end`,'%Y-%m-%d'),' 23:59:59') from  zt_testreport tt  where tt.id =#{srf.datacontext.srfparentkey}
) and not EXISTS(select 1 from zt_build t where FIND_IN_SET(t.id,t1.openedBuild) and FIND_IN_SET(t.id,(select GROUP_CONCAT(tt.id) from (select tt.* from zt_build tt where  tt.id in (
	select t1.build from zt_testtask t1 where FIND_IN_SET(t1.id,(SELECT tasks from zt_testreport where id =#{srf.datacontext.srfparentkey})))) tt GROUP BY tt.product)) = 0) and FIND_IN_SET('trunk',t1.openedBuild) = 0 and  (t1.`status` = 'active' or t1.resolvedDate > (select CONCAT(DATE_FORMAT(tt.`end`,'%Y-%m-%d'),' 23:59:59') from zt_testreport tt where tt.id = #{srf.datacontext.srfparentkey})) 

```
### 默认（全部数据）(VIEW)<div id="Bug_View"></div>
```sql
SELECT
t1.`ACTIVATEDCOUNT`,
t1.`ACTIVATEDDATE`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t61.`NAME` AS `BRANCHNAME`,
t1.`BROWSER`,
t1.`CASE`,
t71.`TITLE` AS `CASENAME`,
t1.`CASEVERSION`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`COLOR`,
t1.`CONFIRMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DUPLICATEBUG`,
t1.`ENTRY`,
t1.`FOUND`,
t1.`HARDWARE`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINES`,
t1.`LINKBUG`,
t1.`MAILTO`,
t1.`MODULE`,
t51.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t51.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBUILD`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OS`,
(case when t1.DEADLINE = '0000-00-00' then 0 else datediff(t1.deadline, now() ) end) AS `OVERDUEBUGS`,
t1.`PLAN`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPO`,
t1.`REPOTYPE`,
t1.`RESOLUTION`,
t1.`RESOLVEDBUILD`,
t1.`RESOLVEDBY`,
t1.`RESOLVEDDATE`,
t1.`RESULT`,
t1.`SEVERITY`,
t1.`STATUS`,
t1.`STEPS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TASK`,
t41.`NAME` AS `TASKNAME`,
t1.`TESTTASK`,
t1.`TITLE`,
t1.`TOSTORY`,
t1.`TOTASK`,
t1.`TYPE`,
t1.`V1`,
t1.`V2`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_task t41 ON t1.TASK = t41.ID 
LEFT JOIN zt_module t51 ON t1.MODULE = t51.ID 
LEFT JOIN zt_branch t61 ON t1.BRANCH = t61.ID 
LEFT JOIN zt_case t71 ON t1.CASE = t71.ID 

WHERE t1.DELETED = '0' 

```

# **Bug统计**(IBZ_BUGSTATS)

### Bug指派表(BugassignedTo)<div id="BugStats_BugassignedTo"></div>
```sql
SELECT
	t1.assignedTo , t1.product,t1.productname,t1.bugcnt,t11.bugcnt as bugtotal
FROM
	(
SELECT
	t1.assignedTo,
	t1.product,
	t11.`name` as productname,
	COUNT( t1.id ) AS bugcnt 
FROM
	`zt_bug` t1
	LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
WHERE
	t1.deleted = '0' 
	AND t1.assignedTo <> '' 
	AND t1.assignedTo IS NOT NULL 
	AND t1.product <> 0 
	AND t1.assignedTo <> 'closed' 
	AND t1.`status` = 'active'
	and t11.deleted = '0'
GROUP BY
	t1.assignedTo,
	t1.product,
	t11.`name` 
	) t1 inner join (SELECT
	t1.assignedTo,
	COUNT( t1.id ) AS bugcnt 
FROM
	`zt_bug` t1
	LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
WHERE
	t1.deleted = '0' 
	AND t1.assignedTo <> '' 
	AND t1.assignedTo IS NOT NULL 
	AND t1.product <> 0 
	AND t1.assignedTo <> 'closed' 
	AND t1.`status` = 'active'
	and t11.deleted = '0'
GROUP BY
	t1.assignedTo) t11 on t1.assignedTo = t11.assignedTo
ORDER BY
	t1.assignedTo asc
	
	
```
### Bug创建表(DEFAULT)<div id="BugStats_Default"></div>
```sql
SELECT
	t1.openedBy,
	sum( IF ( t1.resolution = '', t1.v1, 0 ) ) AS Bugwjj,
	sum( IF ( t1.resolution = 'bydesign', t1.v1, 0 ) ) AS Bugbydesign,
	SUM( IF ( t1.resolution = 'duplicate', t1.v1, 0 ) ) AS Bugduplicate,
	SUM( IF ( t1.resolution = 'fixed', t1.v1, 0 ) ) AS Bugfixed,
	SUM( IF ( t1.resolution = 'external', t1.v1, 0 ) ) AS Bugexternal,
	sum( IF ( t1.resolution = 'notrepro', t1.v1, 0 ) ) AS Bugnotrepro,
	SUM( IF ( t1.resolution = 'postponed', t1.v1, 0 ) ) AS Bugpostponed,
	SUM( IF ( t1.resolution = 'willnotfix', t1.v1, 0 ) ) AS Bugwillnotfix,
	CONCAT( ROUND( case when (SUM( IF ( t1.resolution = 'fixed', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'postponed', t1.v1, 0 ) )) = 0 then 0 else (SUM( IF ( t1.resolution = 'fixed', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'postponed', t1.v1, 0 ) ))/ (sum( IF ( t1.resolution = 'bydesign', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'duplicate', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'fixed', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'external', t1.v1, 0 ) ) + sum( IF ( t1.resolution = 'notrepro', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'postponed', t1.v1, 0 ) ) + SUM( IF ( t1.resolution = 'willnotfix', t1.v1, 0 ) )) * 100 end,2), '%') as BugEfficient,
	SUM( IF ( t1.resolution = 'tostory', t1.v1, 0 ) ) AS Bugtostory,
	SUM( t1.v1 ) AS BUGTOTAL 
FROM
	(
SELECT
	t1.`OPENEDBY`,
	t1.`OPENEDDATE`,
	t1.`PRODUCT`,
	t1.`PROJECT`,
	t1.`RESOLUTION`,
	1 AS `V1` 
FROM
	`zt_bug` t1
	LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID
WHERE
	t1.deleted = '0' 
	) t1 
WHERE
	( t1.openedDate >= #{srf.datacontext.openeddatelt}  OR #{srf.datacontext.openeddatelt} IS NULL ) 
	AND ( t1.openedDate <= #{srf.datacontext.openeddategt} OR #{srf.datacontext.openeddategt} is null ) 
	AND ( t1.PRODUCT = #{srf.datacontext.producteq} OR #{srf.datacontext.producteq}  IS NULL ) 
	AND ( t1.PROJECT = #{srf.datacontext.projecteq}  OR #{srf.datacontext.projecteq}  IS NULL ) 
GROUP BY
	t1.openedBy
```
### 产品创建bug占比(ProductCreateBug)<div id="BugStats_ProductCreateBug"></div>
```sql
SELECT t1.*,t2.productallbug, CONCAT(ROUND(t1.createbugcnt/(case when t2.productallbug = 0 or t2.productallbug is null then 1 else t2.productallbug end)*100,1),'%') from (
SELECT t1.openedBy,t1.productid,t1.productname,COUNT(1) as createbugcnt from (
SELECT t1.id ,t1.openedBy,t2.id as productid,t1.product,t2.`name` as productname from zt_bug t1
LEFT JOIN zt_product t2 on t2.id = t1.product
) t1 GROUP BY t1.openedBy,t1.productid  )t1
LEFT JOIN ( select t1.productid,t1.productname,count(1) as productallbug from (
SELECT t1.id ,t1.openedBy,t2.id as productid,t1.product,t2.`name` as productname from zt_bug t1
LEFT JOIN zt_product t2 on t2.id = t1.product
) t1 GROUP BY t1.productid ) t2 on t2.productid = t1.productid HAVING t1.openedBy = #{srf.sessioncontext.srfloginname}
```
### 默认（全部数据）(VIEW)<div id="BugStats_View"></div>
```sql
SELECT
t1.`ASSIGNEDTO`,
0 AS `BUGBYDESIGN`,
0 AS `BUGCNT`,
0 AS `BUGDUPLICATE`,
0% AS `BUGEFFICIENT`,
0 AS `BUGEXTERNAL`,
0 AS `BUGFIXED`,
0 AS `BUGNOTREPRO`,
0 AS `BUGPOSTPONED`,
0 AS `BUGTOSTORY`,
0 AS `BUGTOTAL`,
0 AS `BUGWILLNOTFIX`,
0 AS `BUGWJJ`,
t1.`ID`,
t1.`OPENEDBY`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`TITLE`
FROM `zt_bug` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 

```

# **版本**(ZT_BUILD)

### Bug产品版本(BugProductBuild)<div id="Build_BugProductBuild"></div>
```sql
select t1.* from (select 0 as `BRANCH`,
	'' as `BUILDER`,
	null as `DATE`,
	'0' AS `DELETED`,
	'' AS `FILEPATH`,
	100000000 AS `ID`,
	'trunk' AS `IDs`,
	'主干' AS `NAME`,
	null AS `PRODUCT`,
	'' AS `PRODUCTNAME`,
	null as `PROJECT`,
	'' AS `SCMPATH`  from dual 
union all

SELECT
	t1.`BRANCH`,
	t1.`BUILDER`,
	t1.`DATE`,
	t1.`DELETED`,
	t1.`FILEPATH`,
	t1.`ID`,
	t1.`ID` AS `IDS`,
	(case when (select tt.`name` from zt_release tt where tt.build = t1.id and tt.deleted = '0'  order by tt.date desc LIMIT 0,1) is null then t1.`name` else (select tt.`name` from zt_release tt where tt.build = t1.id and tt.deleted = '0' order by tt.date desc LIMIT 0,1) end) AS `NAME`,
	t1.`PRODUCT`,
	t11.`NAME` AS `PRODUCTNAME`,
	t1.`PROJECT`,
	t1.`SCMPATH` 
FROM
	`zt_build` t1
	LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID where not EXISTS(select 1 from zt_release t2 where t2.build = t1.id and t2.`status` = 'terminate')) t1
WHERE t1.DELETED = '0' 
( t1.`PRODUCT` = ${srfdatacontext('bugproduct','{"defname":"PRODUCT","dename":"ZT_BUILD"}')}  OR  t1.`PRODUCT` = ${srfwebcontext('bugproduct','{"defname":"PRODUCT","dename":"ZT_BUILD"}')} 
 or t1.`PRODUCT` is null) 
( t1.`PROJECT` = ${srfdatacontext('bugproject','{"defname":"PRODUCT","dename":"ZT_BUILD"}')}  
 or t1.`PROJECT` is null or ${srfdatacontext('bugproject','{"defname":"PRODUCT","dename":"ZT_BUILD"}')} is null) 

```
### 产品版本(CurProduct)<div id="Build_CurProduct"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`BUILDER`,
t1.`DATE`,
t1.`DELETED`,
t1.`FILEPATH`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t1.`SCMPATH`
FROM `zt_build` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 

WHERE t1.DELETED = '0' 
( ( t1.`PRODUCT` = ${srfdatacontext('product','{"defname":"PRODUCT","dename":"ZT_BUILD"}')}  OR  t1.`PRODUCT` = ${srfwebcontext('product','{"defname":"PRODUCT","dename":"ZT_BUILD"}')} ) ) 

```
### DEFAULT(DEFAULT)<div id="Build_Default"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`BUILDER`,
t1.`DATE`,
t1.`DELETED`,
t1.`FILEPATH`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t1.`SCMPATH`
FROM `zt_build` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 

WHERE t1.DELETED = '0' 

```
### 测试版本(TestBuild)<div id="Build_TestBuild"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`BUILDER`,
t1.`DATE`,
t1.`DELETED`,
t1.`FILEPATH`,
t1.`ID`,
case when (select t2.`name` from zt_release t2 where t2.build = t1.id and t2.deleted = '0' ORDER BY t2.date desc LIMIT 0,1) is null then t1.`name` else (select t2.`name` from zt_release t2 where t2.build = t1.id and t2.deleted = '0' ORDER BY t2.date desc LIMIT 0,1) end as `NAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t1.`SCMPATH`
FROM `zt_build` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID
WHERE t1.DELETED = '0' 

```
### 测试轮次(TestRounds)<div id="Build_TestRounds"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`BUILDER`,
t1.`DATE`,
t1.`DELETED`,
t1.`FILEPATH`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t1.`SCMPATH`
FROM `zt_build` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 

WHERE t1.DELETED = '0' 
( FIND_IN_SET(t1.id,(select tt.builds from zt_testreport tt where tt.id = ${srfwebcontext('srfparentkey','{"defname":"ID","dename":"ZT_BUILD"}')})) ) 

```
### 更新日志(UpdateLog)<div id="Build_UpdateLog"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`BUGS`,
t1.`BUILDER`,
t1.`DATE`,
t1.`DELETED`,
t1.`DESC`,
t1.`FILEPATH`,
t1.`ID`,
CONCAT_WS('','PMS ',t1.`name`,' 主要更新') as `NAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t1.`SCMPATH`,
t1.`STORIES`
FROM `zt_build` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID
WHERE t1.deleted = '0' 

```
### 默认（全部数据）(VIEW)<div id="Build_View"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`BUGS`,
t1.`BUILDER`,
t1.`DATE`,
t1.`DELETED`,
t1.`DESC`,
t1.`FILEPATH`,
t1.`ID`,
t1.`NAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t1.`SCMPATH`,
t1.`STORIES`
FROM `zt_build` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 

WHERE t1.DELETED = '0' 

```

# **burn**(ZT_BURN)

### DEFAULT(DEFAULT)<div id="Burn_Default"></div>
```sql
SELECT
t1.`CONSUMED`,
t1.`DATE`,
t1.`ESTIMATE`,
concat(t1.`PROJECT`,'__',t1.`TASK`,'__',t1.`DATE`) AS `ID`,
t1.`LEFT`,
t1.`PROJECT`,
t1.`TASK`
FROM `zt_burn` t1 

```
### 燃尽图预计（含周末）(ESTIMATEANDLEFT)<div id="Burn_ESTIMATEANDLEFT"></div>
```sql
SELECT
t1.`CONSUMED`,
t1.`DATE`,
ROUND((select estimate from zt_burn where date=t2.begin and project=t1.project)*(1-(DATEDIFF(t1.date,t2.`begin`))/(DATEDIFF(t2.`end`,t2.`begin`))),1) AS `ESTIMATE`,
t1.`LEFT`,
t1.`PROJECT`
FROM `zt_burn` t1  
LEFT JOIN zt_project t2 on t1.project=t2.id
```
### 默认（全部数据）(VIEW)<div id="Burn_View"></div>
```sql
SELECT
t1.`CONSUMED`,
t1.`DATE`,
t1.`ESTIMATE`,
concat(t1.`PROJECT`,'__',t1.`TASK`,'__',t1.`DATE`) AS `ID`,
t1.`LEFT`,
t1.`PROJECT`,
t1.`TASK`
FROM `zt_burn` t1 

```

# **测试用例**(ZT_CASE)

### 批量新建用例(BatchNew)<div id="Case_BatchNew"></div>
```sql
SELECT
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LASTRUNDATE`,
t1.`LASTRUNNER`,
t1.`LASTRUNRESULT`,
(case when t1.`LASTRUNRESULT` = '' or t1.`LASTRUNRESULT` is null then 'no' else t1.`LASTRUNRESULT` end) AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID 

WHERE t1.DELETED = '0' 
( 1<>1 ) 

```
### 累计创建的用例(CurOpenedCase)<div id="Case_CurOpenedCase"></div>
```sql
SELECT
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LASTRUNDATE`,
t1.`LASTRUNNER`,
t1.`LASTRUNRESULT`,
(case when t1.`LASTRUNRESULT` = '' or t1.`LASTRUNRESULT` is null then 'no' else t1.`LASTRUNRESULT` end) AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID 

WHERE t1.DELETED = '0' 
( DATE_FORMAT( t1.openedDate, '%Y' ) = DATE_FORMAT(now(), '%Y' )  AND  t1.`OPENEDBY` =  ${srfsessioncontext('srfloginname','{"defname":"OPENEDBY","dename":"ZT_CASE"}')} ) 

```
### 套件关联用例(CurSuite)<div id="Case_CurSuite"></div>
```sql
SELECT
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LASTRUNDATE`,
t1.`LASTRUNNER`,
t1.`LASTRUNRESULT`,
(case when t1.`LASTRUNRESULT` = '' or t1.`LASTRUNRESULT` is null then 'no' else t1.`LASTRUNRESULT` end) AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID 

WHERE EXISTS(SELECT * FROM zt_suitecase t51 
 WHERE 
 t1.ID = t51.CASE  AND  ( t51.`SUITE` = ${srfdatacontext('srfparentkey','{"defname":"SUITE","dename":"ZT_SUITECASE"}')} ) ) 
t1.DELETED = '0' 

```
### 测试单关联用例(CurTestTask)<div id="Case_CurTestTask"></div>
```sql
SELECT
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'case' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t41.`LASTRUNDATE`,
t41.`LASTRUNNER`,
t41.`LASTRUNRESULT`,
(case when (select count(1) from zt_testresult tt where tt.`case` = t1.id and tt.run = t41.id and tt.caseResult = 'fail') > 0 then 'fail' when t41.`LASTRUNRESULT` = '' or t41.`LASTRUNRESULT` is null then 'no' else t41.`LASTRUNRESULT` end) as  `LASTRUNRESULT1`,
t1.`LIB`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TYPE`,
t41.task as task,
t1.`VERSION`,
t41.assignedTo as assignedTo,
(case when t1.version > t41.version then 'casechange' else t41.`status` end) as `status1`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testrun t41 ON t1.id = t41.`case`
WHERE t41.`TASK` = ${srfdatacontext('srfparentkey','{"defname":"TASK","dename":"ZT_TESTRUN"}')} 
t1.DELETED = '0' 

```
### DEFAULT(DEFAULT)<div id="Case_Default"></div>
```sql
SELECT
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'case' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LASTRUNDATE`,
t1.`LASTRUNNER`,
t1.`LASTRUNRESULT`,
(case when t1.`LASTRUNRESULT` = '' or t1.`LASTRUNRESULT` is null then 'no' else t1.`LASTRUNRESULT` end) AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID
WHERE t1.DELETED = '0' 

```
### 测试报告关联-按模块(ModuleRePortCase)<div id="Case_ModuleRePortCase"></div>
```sql
SELECT 
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.LASTRUNDATE AS `LASTRUNDATE`,
t1.`LASTRUNNER`,
t1.LASTRUNRESULT AS `LASTRUNRESULT`,
(case when t1.`LASTRUNRESULT` = '' or t1.`LASTRUNRESULT` is null then 'no' else t1.`LASTRUNRESULT` end) AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
	CONCAT(
	'/',
 case when	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t11.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) is not null then (
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t11.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) when t11.`name` is null then '' else t11.`name` end
	) AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID
LEFT JOIN zt_testrun t51 on t51.`case` = t1.id
LEFT JOIN zt_testreport t61 on t51.task = t61.tasks
WHERE t1.DELETED = '0' 
t61.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')} 

```
### 测试报告关联-按模块-条目(ModuleRePortCaseEntry)<div id="Case_ModuleRePortCaseEntry"></div>
```sql
select t1.lastRunResult1,t1.RESULTCNT as RESULTCNT, t1.PRODUCT,CONCAT(ROUND(t1.RESULTCNT / t1.sss * 100, 2),'','%') as TASK from( select t1.PRODUCT,t1.lastRunResult1,t1.resultcnt,(SELECT
	COUNT( 1 ) 
FROM
	zt_case ttt 
LEFT JOIN zt_testrun t51 on t51.`case` = ttt.id
LEFT JOIN zt_testreport t61 on t51.task = t61.tasks
WHERE
	t61.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')}
	AND ttt.DELETED = '0' ) as sss from ( select t1.PRODUCT,t1.lastRunResult1,COUNT(t1.lastRunResult1) as RESULTCNT from ( SELECT 
	CONCAT(
	'/',
 case when	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t11.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) is not null then (
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t11.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) when t11.`name` is null then '' else t11.`name` end
	) AS `lastRunResult1`,
t1.`PRODUCT`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_testrun t51 on t51.`case` = t1.id
LEFT JOIN zt_testreport t61 on t51.task = t61.tasks
where
t61.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')} 
	AND t1.DELETED = '0' ) t1 GROUP BY t1.lastRunResult1 ) t1) t1
```
### 项目报告关联-按模块(ModuleRePortCase_Project)<div id="Case_ModuleRePortCase_Project"></div>
```sql
SELECT 
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.LASTRUNDATE AS `LASTRUNDATE`,
t1.`LASTRUNNER`,
t1.LASTRUNRESULT AS `LASTRUNRESULT`,
(case when t1.`LASTRUNRESULT` = '' or t1.`LASTRUNRESULT` is null then 'no' else t1.`LASTRUNRESULT` end) AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
	CONCAT(
	'/',
 case when	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t11.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) is not null then (
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t11.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) when t11.`name` is null then '' else t11.`name` end
	) AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID
LEFT JOIN zt_testrun t51 on t51.`case` = t1.id
LEFT JOIN zt_testreport t61 on FIND_IN_SET(t51.task, t61.tasks)
WHERE t1.DELETED = '0' 
t61.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')} 

```
### 用例我得收藏(MyFavorite)<div id="Case_MyFavorite"></div>
```sql
SELECT
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LASTRUNDATE`,
t1.`LASTRUNNER`,
t1.`LASTRUNRESULT`,
(case when t1.`LASTRUNRESULT` = '' or t1.`LASTRUNRESULT` is null then 'no' else t1.`LASTRUNRESULT` end) AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID 

WHERE t1.DELETED = '0' 
( t1.id in (select t.OBJECTID from T_IBZ_FAVORITES t where t.type = 'case' and t.account = #{srf.sessioncontext.srfloginname})  AND  t1.DELETED = '0' ) 

```
### 套件关联用例(NotCurTestSuite)<div id="Case_NotCurTestSuite"></div>
```sql
SELECT
	t1.`AUTO`,
	t1.`BRANCH`,
	t1.`COLOR`,
	t1.`DELETED`,
	t1.`FRAME`,
	t1.`FREQUENCY`,
	t1.`FROMBUG`,
	t1.`FROMCASEID`,
	t1.`FROMCASEVERSION`,
	t1.`HOWRUN`,
	t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'case' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
	t1.`KEYWORDS`,
	t1.`LASTEDITEDBY`,
	t1.`LASTEDITEDDATE`,
	t1.`LASTRUNDATE`,
	t1.`LASTRUNNER`,
	t1.`LASTRUNRESULT`,
(case when t1.`LASTRUNRESULT` = '' or t1.`LASTRUNRESULT` is null then 'no' else t1.`LASTRUNRESULT` end) as  `LASTRUNRESULT1`,
	t1.`LIB`,
	t1.`LINKCASE`,
	t1.`MODULE`,
	t11.`NAME` AS `MODULENAME`,
	t1.`OPENEDBY`,
	t1.`OPENEDDATE`,
	t1.`ORDER`,
	t1.`PATH`,
	t1.`PRI`,
	t1.`PRODUCT`,
	t31.`NAME` AS `PRODUCTNAME`,
	( SELECT COUNT( 1 ) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
	( SELECT COUNT( 1 ) FROM zt_testresult WHERE `case` = t1.`ID` AND caseResult IN ( 'fail', 'blocked' ) ) AS `RESULTFALICNT`,
	t1.`REVIEWEDBY`,
	t1.`REVIEWEDDATE`,
	t1.`SCRIPTEDBY`,
	t1.`SCRIPTEDDATE`,
	t1.`SCRIPTLOCATION`,
	t1.`SCRIPTSTATUS`,
	t1.`STAGE`,
	t1.`STATUS`,
	( CASE WHEN t1.storyVersion < t21.version AND t21.`status` <> 'changed' THEN 'storychange' ELSE t1.`status` END ) AS `STATUS1`,
	( SELECT COUNT( 1 ) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
	t1.`STORY`,
	t21.`TITLE` AS `STORYNAME`,
	t1.`STORYVERSION`,
	t1.`SUBSTATUS`,
	t1.`TITLE`,
	( SELECT COUNT( 1 ) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
	t1.`TYPE`,
	t1.`VERSION` 
FROM
	`zt_case` t1
	LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID
	LEFT JOIN zt_story t21 ON t1.STORY = t21.ID
	LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID
WHERE NOT(EXISTS(SELECT * FROM zt_suitecase t41 
 WHERE 
 t1.ID = t41.`CASE`  AND  ( t41.`suite` = ${srfwebcontext('suite','{"defname":"TASK","dename":"ZT_TESTRUN"}')} ) )) 
t1.`deleted` = '0' 

```
### 测试单关联用例(NotCurTestTask)<div id="Case_NotCurTestTask"></div>
```sql
SELECT
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'case' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LASTRUNDATE`,
t1.`LASTRUNNER`,
t1.`LASTRUNRESULT`,
(case when t1.`LASTRUNRESULT` = '' or t1.`LASTRUNRESULT` is null then 'no' else t1.`LASTRUNRESULT` end) as  `LASTRUNRESULT1`,
t1.`LIB`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 

WHERE NOT(EXISTS(SELECT * FROM zt_testrun t41 
 WHERE 
 t1.ID = t41.`CASE`  AND  ( t41.`task` = ${srfwebcontext('task','{"defname":"TASK","dename":"ZT_TESTRUN"}')} ) )) 
t1.DELETED = '0' 

```
### 测试报告关联用例(RePortCase)<div id="Case_RePortCase"></div>
```sql
SELECT
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t51.`LASTRUNDATE` as LASTRUNDATE,
t51.`LASTRUNNER` as LASTRUNNER,
t51.`LASTRUNRESULT` as LASTRUNRESULT,
(case when t51.`LASTRUNRESULT` = '' or t51.`LASTRUNRESULT` is null then 'no' else t51.`LASTRUNRESULT` end) AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
t51.assignedTo as assignedTo,
(case when t1.version > t51.version then 'casechange' else t51.`status` end) as `status1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
case when t1.`TYPE` = 'feature' then '功能测试' when t1.`TYPE` = 'performance' then '性能测试' when t1.`TYPE` = 'config' then '配置相关' when t1.`TYPE` = 'nstall' then '安装部署' when t1.`TYPE` = '	security' then '安全相关' when t1.`TYPE` = 'interface' then '接口测试' when t1.`TYPE` = 'unit' then '单元测试' when t1.`TYPE` = 'other' then '其他' end  as `TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID
LEFT JOIN zt_testrun t51 on t51.`case` = t1.id
LEFT JOIN zt_testreport t61 on t51.task = t61.tasks
WHERE t1.DELETED = '0' 
t61.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')} 

```
### 测试报告关联用例-条目(RePortCaseEntry)<div id="Case_RePortCaseEntry"></div>
```sql
select t1.lastRunResult1,t1.RESULTCNT as RESULTCNT, t1.PRODUCT,CONCAT(ROUND(t1.RESULTCNT / t1.sss * 100, 2),'','%') as TASK from (SELECT
	t1.PRODUCT,
	t1.lastRunResult1,
	t1.RESULTCNT,
	(
SELECT
	COUNT( 1 ) 
FROM
	zt_case ttt 
LEFT JOIN zt_testrun t51 on t51.`case` = ttt.id
LEFT JOIN zt_testreport t61 on t51.task = t61.tasks
WHERE
	t61.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')} 
	AND ttt.DELETED = '0' 
	) AS sss 
FROM
	(
SELECT
	t1.PRODUCT,
	t1.lastRunResult1,
	count( t1.lastRunResult1 ) AS RESULTCNT 
FROM
	(
SELECT
	t1.`PRODUCT`,
CASE
	
	WHEN t1.`TYPE` = 'feature' THEN
	'功能测试' 
	WHEN t1.`TYPE` = 'performance' THEN
	'性能测试' 
	WHEN t1.`TYPE` = 'config' THEN
	'配置相关' 
	WHEN t1.`TYPE` = 'nstall' THEN
	'安装部署' 
	WHEN t1.`TYPE` = '	security' THEN
	'安全相关' 
	WHEN t1.`TYPE` = 'interface' THEN
	'接口测试' 
	WHEN t1.`TYPE` = 'unit' THEN
	'单元测试' 
	WHEN t1.`TYPE` = 'other' THEN
	'其他' 
	END AS `lastRunResult1` 
FROM
	`zt_case` t1 
        LEFT JOIN zt_testrun t51 on t51.`case` = t1.id
        LEFT JOIN zt_testreport t61 on t51.task = t61.tasks
WHERE
	t61.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')}
	AND t1.DELETED = '0' 
	) t1 
GROUP BY
	t1.lastRunResult1 
) t1) t1
```
### 项目报告关联用例-关联用例(RePortCase_Project)<div id="Case_RePortCase_Project"></div>
```sql
SELECT DISTINCT
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LASTRUNDATE`,
t1.`LASTRUNNER`,
t1.`LASTRUNRESULT`,
(case when t1.`LASTRUNRESULT` = '' or t1.`LASTRUNRESULT` is null then 'no' else t1.`LASTRUNRESULT` end) AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
case when t1.`TYPE` = 'feature' then '功能测试' when t1.`TYPE` = 'performance' then '性能测试' when t1.`TYPE` = 'config' then '配置相关' when t1.`TYPE` = 'nstall' then '安装部署' when t1.`TYPE` = '	security' then '安全相关' when t1.`TYPE` = 'interface' then '接口测试' when t1.`TYPE` = 'unit' then '单元测试' when t1.`TYPE` = 'other' then '其他' end  as `TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID
LEFT JOIN zt_testrun t51 on t51.`case` = t1.id
LEFT JOIN zt_testreport t61 on FIND_IN_SET(t51.task, t61.tasks)
WHERE t1.DELETED = '0' 
t61.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')} 

```
### 测试报告关联-执行人(RunERRePortCase)<div id="Case_RunERRePortCase"></div>
```sql
SELECT 
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t71.date AS `LASTRUNDATE`,
t81.realname as `LASTRUNNER`,
t71.caseResult AS `LASTRUNRESULT`,
(case when t71.`caseResult` = '' or t71.`caseResult` is null then 'no' else t71.`caseResult` end) AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID 
LEFT JOIN zt_testrun t61 on t61.`case` = t1.id 
LEFT JOIN zt_testresult t71 on t61.id = t71.run AND t71.`case` = t1.id
LEFT JOIN zt_user t81 on t71.lastRunner = t81.account
inner join zt_testreport t91 on t61.task = t91.tasks
WHERE t1.DELETED = '0' 
t91.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')}
and 
( FIND_IN_SET(t1.id,t91.cases) ) and t71.date > t91.`begin` and t71.date < t91.`end` 

```
### 测试报告关联-执行人-条目(RunERRePortCaseEntry)<div id="Case_RunERRePortCaseEntry"></div>
```sql
select t1.lastRunResult1,t1.RESULTCNT as RESULTCNT,t1.PRODUCT, CONCAT(ROUND(t1.RESULTCNT / t1.sss * 100, 2),'','%') as TASK from (select t1.PRODUCT,
	t1.lastRunResult1,
	t1.RESULTCNT, (SELECT
	count(1)
FROM
	`zt_case` t1
	LEFT JOIN zt_testrun t61 ON t61.`case` = t1.id
	LEFT JOIN zt_testresult t71 ON t61.id = t71.run 
	AND t71.`case` = t1.id
	LEFT JOIN zt_user t81 ON t71.lastRunner = t81.account 
WHERE
	t1.DELETED = '0' 
	AND ( FIND_IN_SET( t1.id, ( SELECT tt.cases FROM zt_testreport tt WHERE tt.id = #{srf.webcontext.srfparentkey} ) ) ) 
	AND t61.task = ( SELECT tt.tasks FROM zt_testreport tt WHERE tt.id = #{srf.webcontext.srfparentkey} ) ) as sss from (SELECT
	t1.PRODUCT,
	t1.lastRunResult1,
	count( t1.lastRunResult1 ) AS RESULTCNT 
FROM
	(
SELECT
	t81.realname AS `lastRunResult1`,
	t1.`PRODUCT` 
FROM
	`zt_case` t1
	LEFT JOIN zt_testrun t61 ON t61.`case` = t1.id
	LEFT JOIN zt_testresult t71 ON t61.id = t71.run 
	AND t71.`case` = t1.id
	LEFT JOIN zt_user t81 ON t71.lastRunner = t81.account 
WHERE
	t1.DELETED = '0' 
	AND ( FIND_IN_SET( t1.id, ( SELECT tt.cases FROM zt_testreport tt WHERE tt.id = #{srf.webcontext.srfparentkey} ) ) ) 
	AND t61.task = ( SELECT tt.tasks FROM zt_testreport tt WHERE tt.id = #{srf.webcontext.srfparentkey} ) 
	) t1 
GROUP BY
	t1.LASTRUNRESULT1) t1) t1
```
### 项目报告关联-执行人(RunERRePortCase_Project)<div id="Case_RunERRePortCase_Project"></div>
```sql
SELECT 
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t71.date AS `LASTRUNDATE`,
t81.realname as `LASTRUNNER`,
t71.caseResult AS `LASTRUNRESULT`,
(case when t71.`caseResult` = '' or t71.`caseResult` is null then 'no' else t71.`caseResult` end) AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID 
LEFT JOIN zt_testrun t61 on t61.`case` = t1.id 
LEFT JOIN zt_testresult t71 on t61.id = t71.run AND t71.`case` = t1.id
LEFT JOIN zt_user t81 on t71.lastRunner = t81.account
inner join zt_testreport t91 on FIND_IN_SET(t61.task, t91.tasks)
WHERE t1.DELETED = '0' 
t91.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')}
and 
( FIND_IN_SET(t1.id,t91.cases) ) and t71.date > t91.`begin` and t71.date < CONCAT(DATE_FORMAT(t91.`end`,'%Y-%m-%d'),' 23:59:59') 

```
### 测试报告关联--执行结果(RunRePortCase)<div id="Case_RunRePortCase"></div>
```sql
SELECT 
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t71.date AS `LASTRUNDATE`,
t71.`LASTRUNNER`,
t71.caseResult AS `LASTRUNRESULT`,
case when t71.caseResult = 'n/a' then '忽略' when t71.caseResult = 'pass' then '通过' when t71.caseResult = 'fail' then '失败' when t71.caseResult = 'blocked' then '阻塞' end AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID 
LEFT JOIN zt_testrun t61 on t61.`case` = t1.id 
LEFT JOIN zt_testresult t71 on t61.id = t71.run AND t71.`case` = t1.id
inner join zt_testreport t81 on t61.task = t81.tasks
WHERE t1.DELETED = '0' 
 t81.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')}
and 
( FIND_IN_SET(t1.id,t81.cases) ) and t71.date > t81.`begin` and t71.date < t81.`end` 

```
### 测试报告关联--执行结果条目(RunRePortCaseEntry)<div id="Case_RunRePortCaseEntry"></div>
```sql
select  t1.lastRunResult1,t1.product,t1.RESULTCNT as RESULTCNT, CONCAT(ROUND(t1.RESULTCNT / t1.sss * 100, 2),'','%') as TASK from (SELECT
	t1.*,
	(
SELECT
	count( 1 ) 
FROM
	(
SELECT

CASE
	
WHEN
	t71.caseResult = 'n/a' THEN
	'忽略' 
WHEN t71.caseResult = 'pass' THEN
'通过' 
WHEN t71.caseResult = 'fail' THEN
'失败' 
WHEN t71.caseResult = 'blocked' THEN
'阻塞' 
END AS `LASTRUNRESULT1` 
FROM
	`zt_case` t1
	LEFT JOIN zt_testrun t61 ON t61.`case` = t1.id
	LEFT JOIN zt_testresult t71 ON t61.id = t71.run 
	AND t71.`case` = t1.id 
WHERE
	t1.DELETED = '0' 
	AND ( FIND_IN_SET( t1.id, ( SELECT tt.cases FROM zt_testreport tt WHERE tt.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')} ) ) ) 
	AND t61.task = ( SELECT tt.tasks FROM zt_testreport tt WHERE tt.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')} ) 
	) tt1 
	) AS sss 
FROM
	(
	SELECT
		t1.LASTRUNRESULT1,
t1.product,
		count( t1.LASTRUNRESULT1 ) AS RESULTCNT 
	FROM
		(
		SELECT
t1.product,
		CASE
				
			WHEN
				t71.caseResult = 'n/a' THEN
					'忽略' 
					WHEN t71.caseResult = 'pass' THEN
					'通过' 
					WHEN t71.caseResult = 'fail' THEN
					'失败' 
					WHEN t71.caseResult = 'blocked' THEN
					'阻塞' 
				END AS `LASTRUNRESULT1` 
			FROM
				`zt_case` t1
				LEFT JOIN zt_testrun t61 ON t61.`case` = t1.id
				LEFT JOIN zt_testresult t71 ON t61.id = t71.run 
				AND t71.`case` = t1.id 
			WHERE
				t1.DELETED = '0' 
				AND ( FIND_IN_SET( t1.id, ( SELECT tt.cases FROM zt_testreport tt WHERE tt.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')} ) ) ) 
				AND t61.task = ( SELECT tt.tasks FROM zt_testreport tt WHERE tt.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')} ) 
			) t1 
		GROUP BY
		t1.LASTRUNRESULT1 
) t1) t1
```
### 项目报告关联-执行结果(RunRePortCase_Project)<div id="Case_RunRePortCase_Project"></div>
```sql
SELECT 
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t71.date AS `LASTRUNDATE`,
t71.`LASTRUNNER`,
t71.caseResult AS `LASTRUNRESULT`,
case when t71.caseResult = 'n/a' then '忽略' when t71.caseResult = 'pass' then '通过' when t71.caseResult = 'fail' then '失败' when t71.caseResult = 'blocked' then '阻塞' end AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID 
LEFT JOIN zt_testrun t61 on t61.`case` = t1.id 
LEFT JOIN zt_testresult t71 on t61.id = t71.run AND t71.`case` = t1.id
inner join zt_testreport t81 on FIND_IN_SET(t61.task, t81.tasks)
WHERE t1.DELETED = '0' 
 t81.id = ${srfwebcontext('srfparentkey','{"defname":"PATH","dename":"ZT_CASE"}')}
and 
( FIND_IN_SET(t1.id,t81.cases) ) and t71.date > t81.`begin` and t71.date <  CONCAT(DATE_FORMAT(t81.`end`,'%Y-%m-%d'),' 23:59:59') 

```
### 默认（全部数据）(VIEW)<div id="Case_View"></div>
```sql
SELECT
t1.`AUTO`,
t1.`BRANCH`,
t1.`COLOR`,
t1.`DELETED`,
t1.`FRAME`,
t1.`FREQUENCY`,
t1.`FROMBUG`,
t1.`FROMCASEID`,
t1.`FROMCASEVERSION`,
t1.`HOWRUN`,
t1.`ID`,
0 AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LASTRUNDATE`,
t1.`LASTRUNNER`,
t1.`LASTRUNRESULT`,
(case when t1.`LASTRUNRESULT` = '' or t1.`LASTRUNRESULT` is null then 'no' else t1.`LASTRUNRESULT` end) AS `LASTRUNRESULT1`,
t1.`LIB`,
t41.`NAME` AS `LIBNAME`,
t1.`LINKCASE`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' )  FROM zt_module tt WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story'  GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRECONDITION`,
t1.`PRI`,
t1.`PRODUCT`,
t31.`NAME` AS `PRODUCTNAME`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID` ) AS `RESULTCNT`,
(SELECT COUNT(1) FROM zt_testresult WHERE `case` = t1.`ID`  and caseResult in('fail','blocked') ) AS `RESULTFALICNT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
(SELECT COUNT(1) FROM zt_casestep WHERE `case` = t1.`ID` AND version = t1.`VERSION` ) AS `STEPCNT`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TITLE`,
(SELECT COUNT(1) FROM zt_bug WHERE `case` = t1.`ID` ) AS `TOBUGCNT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_testsuite t41 ON t1.LIB = t41.ID 

WHERE t1.DELETED = '0' 

```

# **用例步骤**(ZT_CASESTEP)

### 当前测试步骤(CurTest)<div id="CaseStep_CurTest"></div>
```sql
SELECT
t1.`CASE`,
t1.`DESC`,
t1.`EXPECT`,
t1.`ID`,
t1.id AS `CASESTEPID`,
t1.`PARENT`,
t1.`TYPE`,
t1.`VERSION`,
t21.stepResults as STEPS
FROM `zt_casestep` t1 
RIGHT JOIN zt_case t11 ON t1.`CASE` = t11.ID 
LEFT OUTER JOIN zt_testresult t21 ON t11.ID = t21.`CASE`  AND t1.version = t21.version

WHERE ( t21.`ID` = ${srfwebcontext('srfparentkey','{"defname":"ID","dename":"ZT_TESTRESULT"}')} ) 

```
### DEFAULT(DEFAULT)<div id="CaseStep_Default"></div>
```sql
SELECT
	t1.`CASE`,
	t1.`DESC`,
	t1.`EXPECT`,
        t1.id AS `CASESTEPID`,
	t1.`ID`,
	@rownum := @rownum + 1 AS RUNID,
	t1.`PARENT`,
	t1.`TYPE`,
	t1.`VERSION` 
FROM
	`zt_casestep` t1, (select @rownum := 0) m 

```
### DEFAULT1(DEFAULT1)<div id="CaseStep_Default1"></div>
```sql
SELECT
t1.`CASE`,
t1.id AS `CASESTEPID`,
t1.`DESC`,
t1.`EXPECT`,
t1.`ID`,
t1.`PARENT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_casestep` t1 

```
### Mob(Mob)<div id="CaseStep_Mob"></div>
```sql
SELECT
	t1.`CASE`,
	t1.`DESC`,
	t1.`EXPECT`,
	t1.`ID`,
        t1.id AS `CASESTEPID`,
	t1.`PARENT`,
	t1.`TYPE`,
	t1.`VERSION` 
FROM
	`zt_casestep` t1
	inner JOIN zt_case t11 ON t1.`case` = t11.id 
	AND t1.version = t11.version
```
### 版本(Version)<div id="CaseStep_Version"></div>
```sql
SELECT t1.`CASE`,t1.type,t1.parent,t1.expect,t1.`desc`, t1.`ID`, t1.`VERSION` FROM `zt_casestep` t1
```
### 版本1(Versions)<div id="CaseStep_Versions"></div>
```sql
SELECT
	t1.ID,t1.`case`,t1.VERSION,CONCAT('#',t1.VERSION) as expect
FROM
	(
SELECT
	t1.`ID`,
	t1.`CASE`,
	t1.`VERSION` 
FROM
	`zt_casestep` t1 where t1.version <> 1 
GROUP BY
	t1.`CASE`,
	t1.`VERSION` UNION ALL
SELECT
	1 AS ID,
	t1.`id` AS `CASE`,
	1 AS `VERSION` 
FROM
	zt_case t1 

	) t1
```
### 默认（全部数据）(VIEW)<div id="CaseStep_View"></div>
```sql
SELECT
t1.`CASE`,
t1.id AS `CASESTEPID`,
t1.`DESC`,
t1.`EXPECT`,
t1.`ID`,
t1.`PARENT`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_casestep` t1 

```

# **公司**(ZT_COMPANY)

### DEFAULT(DEFAULT)<div id="Company_Default"></div>
```sql
SELECT
t1.`ADDRESS`,
t1.`ADMINS`,
t1.`BACKYARD`,
t1.`DELETED`,
t1.`FAX`,
t1.`GUEST`,
t1.`ID`,
t1.`NAME`,
t1.`PHONE`,
t1.`WEBSITE`,
t1.`ZIPCODE`
FROM `zt_company` t1 

WHERE t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="Company_View"></div>
```sql
SELECT
t1.`ADDRESS`,
t1.`ADMINS`,
t1.`BACKYARD`,
t1.`DELETED`,
t1.`FAX`,
t1.`GUEST`,
t1.`ID`,
t1.`NAME`,
t1.`PHONE`,
t1.`WEBSITE`,
t1.`ZIPCODE`
FROM `zt_company` t1 

WHERE t1.DELETED = '0' 

```

# **compile**(ZT_COMPILE)

### DEFAULT(DEFAULT)<div id="Compile_Default"></div>
```sql
SELECT
t1.`ATTIME`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`ID`,
t1.`JOB`,
t1.`NAME`,
t1.`QUEUE`,
t1.`STATUS`,
t1.`TAG`,
t1.`TESTTASK`,
t1.`UPDATEDATE`
FROM `zt_compile` t1 

WHERE t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="Compile_View"></div>
```sql
SELECT
t1.`ATTIME`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`ID`,
t1.`JOB`,
t1.`LOGS`,
t1.`NAME`,
t1.`QUEUE`,
t1.`STATUS`,
t1.`TAG`,
t1.`TESTTASK`,
t1.`UPDATEDATE`
FROM `zt_compile` t1 

WHERE t1.DELETED = '0' 

```

# **配置**(ZT_CONFIG)

### DEFAULT(DEFAULT)<div id="Config_Default"></div>
```sql
SELECT
t1.`ID`,
t1.`KEY`,
t1.`MODULE`,
t1.`OWNER`,
t1.`SECTION`
FROM `zt_config` t1 

```
### 默认（全部数据）(VIEW)<div id="Config_View"></div>
```sql
SELECT
t1.`ID`,
t1.`KEY`,
t1.`MODULE`,
t1.`OWNER`,
t1.`SECTION`,
t1.`VALUE`
FROM `zt_config` t1 

```

# **cron**(ZT_CRON)

### DEFAULT(DEFAULT)<div id="Cron_Default"></div>
```sql
SELECT
t1.`BUILDIN`,
t1.`DOM`,
t1.`DOW`,
t1.`H`,
t1.`ID`,
t1.`LASTTIME`,
t1.`M`,
t1.`MON`,
t1.`REMARK`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_cron` t1 

```
### 默认（全部数据）(VIEW)<div id="Cron_View"></div>
```sql
SELECT
t1.`BUILDIN`,
t1.`COMMAND`,
t1.`DOM`,
t1.`DOW`,
t1.`H`,
t1.`ID`,
t1.`LASTTIME`,
t1.`M`,
t1.`MON`,
t1.`REMARK`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_cron` t1 

```

# **部门**(ZT_DEPT)

### DEFAULT(DEFAULT)<div id="Dept_Default"></div>
```sql
SELECT
t1.`FUNCTION`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_DEPT WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`MANAGER`,
t1.`NAME`,
t1.`ORDER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`POSITION`
FROM `zt_dept` t1 
LEFT JOIN zt_dept t11 ON t1.PARENT = t11.ID 

```
### 根部门(ROOT)<div id="Dept_Root"></div>
```sql
SELECT
t1.`FUNCTION`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_DEPT WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`MANAGER`,
t1.`NAME`,
t1.`ORDER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`POSITION`
FROM `zt_dept` t1 
LEFT JOIN zt_dept t11 ON t1.PARENT = t11.ID 

WHERE ( t1.`PARENT` = 0 ) 

```
### 默认（全部数据）(VIEW)<div id="Dept_View"></div>
```sql
SELECT
t1.`FUNCTION`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_DEPT WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`MANAGER`,
t1.`NAME`,
t1.`ORDER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`POSITION`
FROM `zt_dept` t1 
LEFT JOIN zt_dept t11 ON t1.PARENT = t11.ID 

```

# **文档**(ZT_DOC)

### DEFAULT(DEFAULT)<div id="Doc_Default"></div>
```sql
SELECT
t1.`ACL`,
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LIB`,
t1.`MODULE`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VIEWS`
FROM `zt_doc` t1 

WHERE t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="Doc_View"></div>
```sql
SELECT
t1.`ACL`,
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`COLLECTOR`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GROUPS`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LIB`,
t1.`MODULE`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`TITLE`,
t1.`TYPE`,
t1.`USERS`,
t1.`VERSION`,
t1.`VIEWS`
FROM `zt_doc` t1 

WHERE t1.DELETED = '0' 

```

# **文档内容**(ZT_DOCCONTENT)

### DEFAULT(DEFAULT)<div id="DocContent_Default"></div>
```sql
SELECT
t1.`DIGEST`,
t1.`DOC`,
t1.`ID`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_doccontent` t1 

```
### 默认（全部数据）(VIEW)<div id="DocContent_View"></div>
```sql
SELECT
t1.`CONTENT`,
t1.`DIGEST`,
t1.`DOC`,
t1.`FILES`,
t1.`ID`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_doccontent` t1 

```

# **文档库**(ZT_DOCLIB)

### 产品文档库(ByProduct)<div id="DocLib_ByProduct"></div>
```sql
SELECT
t1.`ACL`,
t1.`DELETED`,
t1.`GROUPS`,
t1.`ID`,
t1.`MAIN`,
t1.`NAME`,
t1.`ORDER`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`TYPE`
FROM `zt_doclib` t1 

WHERE t1.DELETED = '0' 
( t1.`PRODUCT` = ${srfdatacontext('product','{"defname":"PRODUCT","dename":"ZT_DOCLIB"}')} ) 

```
### DEFAULT(DEFAULT)<div id="DocLib_Default"></div>
```sql
SELECT
t1.`ACL`,
t1.`DELETED`,
t1.`GROUPS`,
t1.`ID`,
t1.`MAIN`,
t1.`NAME`,
t1.`ORDER`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`TYPE`
FROM `zt_doclib` t1 

WHERE t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="DocLib_View"></div>
```sql
SELECT
t1.`ACL`,
t1.`COLLECTOR`,
t1.`DELETED`,
t1.`GROUPS`,
t1.`ID`,
t1.`MAIN`,
t1.`NAME`,
t1.`ORDER`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`TYPE`,
t1.`USERS`
FROM `zt_doclib` t1 

WHERE t1.DELETED = '0' 

```

# **动态数据看板**(DYNADASHBOARD)

### DEFAULT(DEFAULT)<div id="DynaDashboard_Default"></div>
```sql
SELECT
t1.`APPID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`MODELID`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERID`
FROM `T_DYNADASHBOARD` t1 

```
### 默认（全部数据）(VIEW)<div id="DynaDashboard_View"></div>
```sql
SELECT
t1.`APPID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DYNADASHBOARDID`,
t1.`DYNADASHBOARDNAME`,
t1.`MODEL`,
t1.`MODELID`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERID`
FROM `T_DYNADASHBOARD` t1 

```

# **员工负载表**(IBZ_EMPLOYEELOAD)

### 数据查询(DEFAULT)<div id="EMPLOYEELOAD_Default"></div>
```sql
SELECT
t1.`ASSIGN`,
t1.`ASSIGNEDTO`,
t1.`ID`,
０ AS `LEFT`,
t1.`NAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
０ AS `TASKCNT`,
０ AS `TOTALLEFT`,
０ AS `TOTALTASKCNT`,
０ AS `WORKLOAD`
FROM `ZT_TASK` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 

```
### 获取员工负载表(GETWOERKLOAD)<div id="EMPLOYEELOAD_GETWOERKLOAD"></div>
```sql
select t1.* from(select t1.assignedTo,t1.project,t1.projectname,t1.taskcnt,t1.`left`,t1.totaltaskcnt,t1.totalleft,t1.workload,'assign' as isassigned from (
select t1.*,t4.taskcnt as totaltaskcnt,t4.`left` as totalleft,CONCAT(ROUND( t4.`left`/ ((case when  #{srf.datacontext.workday} 
is null then 6 else 
#{srf.datacontext.workday}  
end) * (case when 
#{srf.datacontext.everydaytime}  
is null then 7 else 
#{srf.datacontext.everydaytime}  
end)) * 100, 2),'%')  as WORKLOAD from ( select  t1.assignedTo,t1.project,t1.projectname,COUNT(1) as taskcnt,sum(t1.`left`) as `left` from( select t1.id,t1.`name`,t1.`left`,t1.project ,t2.`name` as projectname,t1.assignedTo from zt_task t1 left join zt_project t2 on t1.project = t2.id 
where t1.deleted = '0' and t1.`status` in ('wait','doing') and t2.deleted = '0' and t2.`status` in ('wait','doing') and t1.assignedTo <> '' and t1.parent >= 0 and not EXISTS(select  1  from zt_team t where t.type = 'task' and t.root = t1.id) 
union 
select t1.id,t1.`name`,t3.`left`,t1.project ,t2.`name` as projectname,t3.account as assignedTo from zt_task t1 left join zt_project t2 on t1.project = t2.id 
INNER join zt_team t3 on t1.id = t3.root and t3.type = 'task'
where t1.deleted = '0' and t1.`status` in ('wait','doing') and t2.deleted = '0' and t2.`status` in ('wait','doing')  and t1.`left` > 0 ) t1 GROUP BY t1.assignedTo,t1.project,t1.projectname) t1 left join zt_user tt on tt.account = t1.assignedTo 
left join  ( select  t1.assignedTo,COUNT(1) as taskcnt,sum(t1.`left`) as `left` from( select t1.id,t1.`name`,t1.`left`,t1.project ,t2.`name` as projectname,t1.assignedTo from zt_task t1 left join zt_project t2 on t1.project = t2.id 
where t1.deleted = '0' and t1.`status` in ('wait','doing') and t2.deleted = '0' and t2.`status` in ('wait','doing') and t1.assignedTo <> '' and t1.parent >= 0 and not EXISTS(select  1  from zt_team t where t.type = 'task' and t.root = t1.id) 
union 
select t1.id,t1.`name`,t3.`left`,t1.project ,t2.`name` as projectname,t3.account as assignedTo from zt_task t1 left join zt_project t2 on t1.project = t2.id 
INNER join zt_team t3 on t1.id = t3.root and t3.type = 'task'
where t1.deleted = '0' and t1.`status` in ('wait','doing') and t2.deleted = '0' and t2.`status` in ('wait','doing')  and t1.`left` > 0 ) t1 GROUP BY t1.assignedTo) t4 on t4.assignedTo = t1.assignedTo
where tt.dept =  #{srf.datacontext.dept} 
or  #{srf.datacontext.dept} 
is null) t1 
union
select t1.assignedTo,t1.project,t1.projectname,t1.taskcnt,t1.`left`,t1.totaltaskcnt,t1.totalleft,t1.workload, t1.isassigned as isassigned from (select  t1.account as assignedTo,t2.id as project,t2.`name` as projectname, 0 as taskcnt,0 as `left`,0 as totaltaskcnt,0 as totalleft,'0%' as workload,'noassign' as isassigned  from zt_team t1 
LEFT JOIN zt_project t2 on t2.id = t1.root
where t2.`status` not in ('cancel','closed','done','suspended')  and t1.type = 'project' 
and t1.account not in (SELECT assignedTo from zt_task where project = t1.root and `status` not in ('cancel','closed','done','pause') and assignedTo <> '' GROUP BY assignedTo) ORDER BY t1.ACCOUNT,t2.`name`)t1) t1 
where (t1.isassigned = #{srf.datacontext.assign}) or (#{srf.datacontext.assign} is null and t1.isassigned = 'assign')
```
### 默认（全部数据）(VIEW)<div id="EMPLOYEELOAD_View"></div>
```sql
SELECT
t1.`ASSIGN`,
t1.`ASSIGNEDTO`,
t1.`ID`,
０ AS `LEFT`,
t1.`NAME`,
t1.`PROJECT`,
t11.`NAME` AS `PROJECTNAME`,
０ AS `TASKCNT`,
０ AS `TOTALLEFT`,
０ AS `TOTALTASKCNT`,
０ AS `WORKLOAD`
FROM `ZT_TASK` t1 
LEFT JOIN zt_project t11 ON t1.PROJECT = t11.ID 

```

# **effort**(ZT_EFFORT)

### DEFAULT(DEFAULT)<div id="Effort_Default"></div>
```sql
SELECT
t1.`BEGIN`,
t1.`DATE`,
t1.`DESC`,
t1.`END`,
t1.`ID`,
t1.`IDVALUE`,
t1.`NAME`,
t1.`STATUS`,
t1.`TODO`,
t1.`TYPE`,
t1.`USER`
FROM `zt_effort` t1 

```
### 默认（全部数据）(VIEW)<div id="Effort_View"></div>
```sql
SELECT
t1.`BEGIN`,
t1.`DATE`,
t1.`DESC`,
t1.`END`,
t1.`ID`,
t1.`IDVALUE`,
t1.`NAME`,
t1.`STATUS`,
t1.`TODO`,
t1.`TYPE`,
t1.`USER`
FROM `zt_effort` t1 

```

# **entry**(ZT_ENTRY)

### DEFAULT(DEFAULT)<div id="Entry_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CALLEDTIME`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`FREEPASSWD`,
t1.`ID`,
t1.`IP`,
t1.`KEY`,
t1.`NAME`
FROM `zt_entry` t1 

WHERE t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="Entry_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CALLEDTIME`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`DESC`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`FREEPASSWD`,
t1.`ID`,
t1.`IP`,
t1.`KEY`,
t1.`NAME`
FROM `zt_entry` t1 

WHERE t1.DELETED = '0' 

```

# **extension**(ZT_EXTENSION)

### DEFAULT(DEFAULT)<div id="Extension_Default"></div>
```sql
SELECT
t1.`AUTHOR`,
t1.`CODE`,
t1.`DEPENDS`,
t1.`ID`,
t1.`INSTALLEDTIME`,
t1.`NAME`,
t1.`SITE`,
t1.`STATUS`,
t1.`TYPE`,
t1.`VERSION`,
t1.`ZENTAOCOMPATIBLE`
FROM `zt_extension` t1 

```
### 默认（全部数据）(VIEW)<div id="Extension_View"></div>
```sql
SELECT
t1.`AUTHOR`,
t1.`CODE`,
t1.`DEPENDS`,
t1.`DESC`,
t1.`DIRS`,
t1.`FILES`,
t1.`ID`,
t1.`INSTALLEDTIME`,
t1.`LICENSE`,
t1.`NAME`,
t1.`SITE`,
t1.`STATUS`,
t1.`TYPE`,
t1.`VERSION`,
t1.`ZENTAOCOMPATIBLE`
FROM `zt_extension` t1 

```

# **附件**(ZT_FILE)

### DEFAULT(DEFAULT)<div id="File_Default"></div>
```sql
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`DOWNLOADS`,
t1.`EXTENSION`,
t1.`EXTRA`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PATHNAME`,
t1.`SIZE`,
t1.`TITLE`
FROM `zt_file` t1 

WHERE t1.DELETED = '0' 

```
### 动态(根据类型过滤)(Type)<div id="File_Type"></div>
```sql
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`DOWNLOADS`,
t1.`EXTENSION`,
t1.`EXTRA`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PATHNAME`,
t1.`SIZE`,
t1.`TITLE`
FROM `zt_file` t1 

WHERE t1.DELETED = '0' 
( t1.`OBJECTID` = ${srfdatacontext('srfparentkey','{"defname":"OBJECTID","dename":"ZT_FILE"}')}  AND  t1.`OBJECTTYPE` =  ${srfdatacontext('objecttype','{"defname":"OBJECTTYPE","dename":"ZT_FILE"}')}  AND  t1.`EXTRA` <> 'editor' ) 

```
### 默认（全部数据）(VIEW)<div id="File_View"></div>
```sql
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`DOWNLOADS`,
t1.`EXTENSION`,
t1.`EXTRA`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`PATHNAME`,
t1.`SIZE`,
t1.`TITLE`
FROM `zt_file` t1 

WHERE t1.DELETED = '0' 

```

# **群组**(ZT_GROUP)

### DEFAULT(DEFAULT)<div id="Group_Default"></div>
```sql
SELECT
t1.`DESC`,
t1.`ID`,
t1.`NAME`,
t1.`ROLE`
FROM `zt_group` t1 

```
### 默认（全部数据）(VIEW)<div id="Group_View"></div>
```sql
SELECT
t1.`ACL`,
t1.`DESC`,
t1.`ID`,
t1.`NAME`,
t1.`ROLE`
FROM `zt_group` t1 

```

# **群组权限**(ZT_GROUPPRIV)

### DEFAULT(DEFAULT)<div id="GroupPriv_Default"></div>
```sql
SELECT
t1.`GROUP`,
concat(t1.`GROUP`,'__',t1.`MODULE`,'__',t1.`METHOD`) AS `ID`,
t1.`METHOD`,
t1.`MODULE`
FROM `zt_grouppriv` t1 

```
### 默认（全部数据）(VIEW)<div id="GroupPriv_View"></div>
```sql
SELECT
t1.`GROUP`,
concat(t1.`GROUP`,'__',t1.`MODULE`,'__',t1.`METHOD`) AS `ID`,
t1.`METHOD`,
t1.`MODULE`
FROM `zt_grouppriv` t1 

```

# **操作历史**(ZT_HISTORY)

### DEFAULT(DEFAULT)<div id="History_Default"></div>
```sql
SELECT
t1.`ACTION`,
t1.`DIFF`,
t1.`FIELD`,
t1.`ID`,
t1.`NEW`,
t1.`OLD`
FROM `zt_history` t1 

```
### 默认（全部数据）(VIEW)<div id="History_View"></div>
```sql
SELECT
t1.`ACTION`,
t1.`DIFF`,
t1.`FIELD`,
t1.`ID`,
t1.`NEW`,
t1.`OLD`
FROM `zt_history` t1 

```

# **平台产品**(IBZPRO_PRODUCT)

### 数据查询(DEFAULT)<div id="IBZProProduct_Default"></div>
```sql
SELECT
t1.`CODE`,
t1.`IBIZ_ID`,
t1.`ID`,
t1.`NAME`
FROM `zt_product` t1 

```
### 默认（全部数据）(VIEW)<div id="IBZProProduct_View"></div>
```sql
SELECT
t1.`CODE`,
t1.`IBIZ_ID`,
t1.`ID`,
t1.`NAME`
FROM `zt_product` t1 

```

# **需求**(IBZPRO_STORY)

### 数据查询(DEFAULT)<div id="IBZProStory_Default"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`IBIZ_ID`,
t1.`IBIZ_SOURCEID`,
t1.`IBIZ_SOURCENAME`,
t1.`IBIZ_SOURCEOBJECT`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PRI`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_story` t1 

```
### 默认（全部数据）(VIEW)<div id="IBZProStory_View"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`IBIZ_ID`,
t1.`IBIZ_SOURCEID`,
t1.`IBIZ_SOURCENAME`,
t1.`IBIZ_SOURCEOBJECT`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PRI`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_story` t1 

```

# **需求模块**(IBZPRO_STORYMODULE)

### 数据查询(DEFAULT)<div id="IBZProStoryModule_Default"></div>
```sql
SELECT
t1.`DELETED`,
t1.`GRADE`,
t1.`IBIZ_ID`,
t1.`IBIZ_STORYTYPE`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID 

```
### 默认（全部数据）(VIEW)<div id="IBZProStoryModule_View"></div>
```sql
SELECT
t1.`COLLECTOR`,
t1.`DELETED`,
t1.`GRADE`,
t1.`IBIZ_ID`,
t1.`IBIZ_STORYTYPE`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID 

```

# **系统模板**(IBZPRO_SYSTPL)

### 数据查询(DEFAULT)<div id="IBZProSysTpl_Default"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`FILE`,
t1.`IBIZ_SOURCEOBJECT`,
t1.`IBZPRO_SYSTPLID`,
t1.`IBZPRO_SYSTPLNAME`,
t1.`PUBLIC`,
t1.`TPLTYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZPRO_SYSTPL` t1 

```
### 默认（全部数据）(VIEW)<div id="IBZProSysTpl_View"></div>
```sql
SELECT
t1.`CONTENT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`FILE`,
t1.`IBIZ_SOURCEOBJECT`,
t1.`IBZPRO_SYSTPLID`,
t1.`IBZPRO_SYSTPLNAME`,
t1.`PUBLIC`,
t1.`TPLTYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZPRO_SYSTPL` t1 

```

# **运行生产系统**(IBZPRO_SYSTEM)

### 数据查询(DEFAULT)<div id="IBZProSystem_Default"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`IBZPRO_SYSTEMID`,
t1.`IBZPRO_SYSTEMNAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZPRO_SYSTEM` t1 

```
### 默认（全部数据）(VIEW)<div id="IBZProSystem_View"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`IBZPRO_SYSTEMID`,
t1.`IBZPRO_SYSTEMNAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZPRO_SYSTEM` t1 

```

# **实体**(IBZ_LOGIN)

### DEFAULT(DEFAULT)<div id="IBZ_LOGIN_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`COMMITER`,
t1.`ID`,
t1.`REALNAME`
FROM `zt_user` t1 

```
### 默认（全部数据）(VIEW)<div id="IBZ_LOGIN_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`COMMITER`,
t1.`ID`,
t1.`REALNAME`
FROM `zt_user` t1 

```

# **文档**(IBZ_DOC)

### 产品下所有文档（用户）(AllDoc)<div id="IBzDoc_AllDoc"></div>
```sql
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`IBZ_DOCID`,
t1.`IBZ_DOCNAME`,
t1.`ISCOLLECT`,
t1.`LIB`,
t1.`OBJECTTYPE`,
t1.`SIZE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_DOC` t1 

```
### DEFAULT(DEFAULT)<div id="IBzDoc_Default"></div>
```sql
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`IBZ_DOCID`,
t1.`IBZ_DOCNAME`,
t1.`ISCOLLECT`,
t1.`LIB`,
t1.`OBJECTTYPE`,
t1.`ORDER`,
t1.`SIZE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_DOC` t1 

```
### 默认（全部数据）(VIEW)<div id="IBzDoc_View"></div>
```sql
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`IBZ_DOCID`,
t1.`IBZ_DOCNAME`,
t1.`ISCOLLECT`,
t1.`LIB`,
t1.`OBJECTTYPE`,
t1.`ORDER`,
t1.`SIZE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_DOC` t1 

```

# **测试用例**(IBZ_CASE)

### DEFAULT(DEFAULT)<div id="IbzCase_Default"></div>
```sql
SELECT
t1.`AUTO`,
t1.`DELETED`,
t1.`HOWRUN`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LIB`,
t21.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRI`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_testsuite t21 ON t1.LIB = t21.ID 

```
### 默认（全部数据）(VIEW)<div id="IbzCase_View"></div>
```sql
SELECT
t1.`AUTO`,
t1.`DELETED`,
t1.`HOWRUN`,
t1.`ID`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LIB`,
t21.`NAME` AS `LIBNAME`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`ORDER`,
t1.`PATH`,
t1.`PRECONDITION`,
t1.`PRI`,
t1.`SCRIPTEDBY`,
t1.`SCRIPTEDDATE`,
t1.`SCRIPTLOCATION`,
t1.`SCRIPTSTATUS`,
t1.`STAGE`,
t1.`STATUS`,
t1.`TITLE`,
t1.`TYPE`,
t1.`VERSION`
FROM `zt_case` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_testsuite t21 ON t1.LIB = t21.ID 

```

# **收藏**(IBZ_FAVORITES)

### 数据查询(DEFAULT)<div id="IbzFavorites_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`IBZ_FAVORITESID`,
t1.`IBZ_FAVORITESNAME`,
t1.`OBJECTID`,
t1.`TYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_FAVORITES` t1 

```
### 默认（全部数据）(VIEW)<div id="IbzFavorites_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`IBZ_FAVORITESID`,
t1.`IBZ_FAVORITESNAME`,
t1.`OBJECTID`,
t1.`TYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_FAVORITES` t1 

```

# **用例库**(IBZ_LIB)

### DEFAULT(DEFAULT)<div id="IbzLib_Default"></div>
```sql
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`ID`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`NAME`,
t1.`PRODUCT`,
t1.`TYPE`
FROM `zt_testsuite` t1 

WHERE ( t1.`TYPE` = 'library' ) 

```
### 默认（全部数据）(VIEW)<div id="IbzLib_View"></div>
```sql
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`DESC`,
t1.`ID`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`NAME`,
t1.`PRODUCT`,
t1.`TYPE`
FROM `zt_testsuite` t1 

```

# **用例库用例步骤**(IBZ_CASESTEP)

### DEFAULT(DEFAULT)<div id="IbzLibCaseStep_Default"></div>
```sql
SELECT
t1.`DESC`,
t1.`EXPECT`,
t1.`ID`,
t1.`TYPE`
FROM `ZT_CASESTEP` t1 

```
### 默认（全部数据）(VIEW)<div id="IbzLibCaseStep_View"></div>
```sql
SELECT
t1.`DESC`,
t1.`EXPECT`,
t1.`ID`,
t1.`TYPE`
FROM `ZT_CASESTEP` t1 

```

# **用例库用例步骤**(IBZ_LIBCASESTEPS)

### DEFAULT(DEFAULT)<div id="IbzLibCaseSteps_Default"></div>
```sql
SELECT
t1.`CASE`,
t1.`DESC`,
t1.`EXPECT`,
t1.`ID`,
t1.`PARENT`,
t1.`TYPE`,
t11.`VERSION`
FROM `zt_casestep` t1 
LEFT JOIN zt_case t11 ON t1.CASE = t11.ID 

```
### 默认（全部数据）(VIEW)<div id="IbzLibCaseSteps_View"></div>
```sql
SELECT
t1.`CASE`,
t1.`DESC`,
t1.`EXPECT`,
t1.`ID`,
t1.`PARENT`,
t1.`TYPE`,
t11.`VERSION`
FROM `zt_casestep` t1 
LEFT JOIN zt_case t11 ON t1.CASE = t11.ID 

```

# **用例库模块**(IBZ_LIBMODULE)

### DEFAULT(DEFAULT)<div id="IbzLibModule_Default"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

WHERE ( t1.`TYPE` = 'caselib' ) 

```
### 无枝叶(Root_NoBranch)<div id="IbzLibModule_Root_NoBranch"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

WHERE ( t1.`TYPE` = 'caselib'  AND  ( t1.`PARENT` IS NULL  OR  t1.`PARENT` = 0 ) ) 

```
### 默认（全部数据）(VIEW)<div id="IbzLibModule_View"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`COLLECTOR`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

```

# **我的地盘**(IBZ_MYTERRITORY)

### DEFAULT(DEFAULT)<div id="IbzMyTerritory_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

```
### 我的工作(MyWork)<div id="IbzMyTerritory_MyWork"></div>
```sql
SELECT
	t1.`ACCOUNT`,
	t11.mytasks,
	CONCAT('已延期 ',t51.MYETASKS) as MYETASKS,
	t21.mybugs,
	CONCAT('已延期 ', t31.myEbugs) as myEbugs,
	t41.mystorys ,
	(select count(1) as projects from zt_project tt where tt.deleted = '0' and (tt.`status` <> 'closed' )) as  projects,
	concat('已延期 ', (select count(1) as eprojects from zt_project tt where tt.deleted = '0' and (tt.`status` <> 'closed' ) and tt.`end` < DATE_FORMAT(now(),'%Y-%m-%d'))) as  eprojects,
	(select count(1) as products from zt_product tt where tt.`status` = 'normal' and tt.deleted = '0' and tt.acl = 'open') as  products
FROM
	(select DISTINCT t1.actor as account from zt_action t1 where t1.actor <> '' and t1.actor is not null) t1
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS mytasks FROM zt_task t GROUP BY t.assignedTo ) t11 ON t1.account = t11.account
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS mybugs FROM zt_bug t GROUP BY t.assignedTo ) t21 ON t1.account = t21.account
	LEFT JOIN (
SELECT
	t.assignedTo AS account,
	COUNT( 1 ) AS myEbugs 
FROM
	zt_bug t 
WHERE
	t.DEADLINE < DATE_FORMAT( now( ), '%Y-%m-%d' ) 
	AND t.`status` = 'active' 
GROUP BY
	t.assignedTo 
	) t31 ON t1.account = t31.account
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS mystorys FROM zt_story t GROUP BY t.assignedTo ) t41 ON t1.account = t41.account
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS MYETASKS FROM zt_task t where (t.`status` = 'wait' or t.`status` = 'doing') and (t.DEADLINE < DATE_FORMAT(now(),'%Y-%m-%d') and t.deadline <> '0000-00-00') GROUP BY t.assignedTo ) t51 ON t1.account = t51.account
```
### 我的工作(MyWorkMob)<div id="IbzMyTerritory_MyWorkMob"></div>
```sql
SELECT
	t1.`ACCOUNT`,
	t1.`ADDRESS`,
	t1.`AVATAR`,
	t1.`BIRTHDAY`,
	t1.`CLIENTLANG`,
	t1.`CLIENTSTATUS`,
	t1.`COMMITER`,
	t1.`DELETED`,
	t1.`DEPT`,
	t1.`DINGDING`,
	t1.`EMAIL`,
	t1.`FAILS`,
	t1.`GENDER`,
	t1.`ID`,
	t1.`IP`,
	t1.`JOIN`,
	t1.`LAST`,
	t1.`LOCKED`,
	t1.`MOBILE`,
	t1.`NICKNAME`,
	t1.`PASSWORD`,
	t1.`PHONE`,
	t1.`QQ`,
	t1.`RANZHI`,
	t1.`REALNAME`,
	t1.`ROLE`,
	t1.`SCORE`,
	t1.`SCORELEVEL`,
	t1.`SKYPE`,
	t1.`SLACK`,
	t1.`VISITS`,
	t1.`WEIXIN`,
	t1.`WHATSAPP`,
	t1.`ZIPCODE`,
	t11.mytasks,
	CONCAT(t51.MYETASKS) as MYETASKS,
	t21.mybugs,
	CONCAT( t31.myEbugs) as myEbugs,
	t41.mystorys ,
	(select count(1) as projects from zt_project tt where tt.deleted = '0' and (tt.`status` <> 'closed' )) as  projects,
	concat((select count(1) as eprojects from zt_project tt where tt.deleted = '0' and (tt.`status` <> 'closed' ) and tt.`end` < DATE_FORMAT(now(),'%Y-%m-%d'))) as  eprojects,
	(select count(1) as products from zt_product tt where tt.`status` = 'normal' and tt.deleted = '0' and tt.acl = 'open') as  products
FROM
	`zt_user` t1
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS mytasks FROM zt_task t GROUP BY t.assignedTo ) t11 ON t1.account = t11.account
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS mybugs FROM zt_bug t GROUP BY t.assignedTo ) t21 ON t1.account = t21.account
	LEFT JOIN (
SELECT
	t.assignedTo AS account,
	COUNT( 1 ) AS myEbugs 
FROM
	zt_bug t 
WHERE
	t.DEADLINE < DATE_FORMAT( now( ), '%Y-%m-%d' ) 
	AND t.`status` = 'active' 
GROUP BY
	t.assignedTo 
	) t31 ON t1.account = t31.account
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS mystorys FROM zt_story t GROUP BY t.assignedTo ) t41 ON t1.account = t41.account
	LEFT JOIN ( SELECT t.assignedTo AS account, COUNT( 1 ) AS MYETASKS FROM zt_task t where (t.`status` = 'wait' or t.`status` = 'doing') and (t.DEADLINE < DATE_FORMAT(now(),'%Y-%m-%d') and t.deadline <> '0000-00-00') GROUP BY t.assignedTo ) t51 ON t1.account = t51.account
```
### 默认（全部数据）(VIEW)<div id="IbzMyTerritory_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

```
### 欢迎(welcome)<div id="IbzMyTerritory_Welcome"></div>
```sql
select CONCAT(t1.REALNAME,'，',t1.NICKNAME,'!') as realname, t1.ACCOUNT from (SELECT
	t1.`ACCOUNT`,
	(case when DATE_FORMAT(now(),'%H') < 11 AND DATE_FORMAT(now(),'%H') >= 5   then '早上好' when DATE_FORMAT(now(),'%H') < 14 AND DATE_FORMAT(now(),'%H') >= 11 then '中午好' when DATE_FORMAT(now(),'%H') < 19 AND DATE_FORMAT(now(),'%H') >= 14 then '下午好' when (DATE_FORMAT(now(),'%H') >= 19 || DATE_FORMAT(now(),'%H') < 5) then '晚上好' end) AS `NICKNAME`,
	t1.`REALNAME`
FROM
	`zt_user` t1) t1
```

# **项目相关成员**(IBZ_PROJECTMEMBER)

### DEFAULT(DEFAULT)<div id="IbzProjectMember_Default"></div>
```sql
SELECT
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 4,1) AS `FIFTHMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 3,1) AS `FOURTHMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 0,1) AS `FRISTMEMBER`,
t1.`ID`,
t1.`NAME`,
t1.PM AS `PM`,
t1.PO AS `PO`,
t1.QD AS `QD`,
t1.RD AS `RD`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 1,1) AS `SECONDMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 5,1) AS `SIXTHMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 2,1) AS `THIRDMEMBER`
FROM `zt_project` t1 

```
### 默认（全部数据）(VIEW)<div id="IbzProjectMember_View"></div>
```sql
SELECT
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 4,1) AS `FIFTHMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 3,1) AS `FOURTHMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 0,1) AS `FRISTMEMBER`,
t1.`ID`,
t1.`NAME`,
t1.PM AS `PM`,
t1.PO AS `PO`,
t1.QD AS `QD`,
t1.RD AS `RD`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 1,1) AS `SECONDMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 5,1) AS `SIXTHMEMBER`,
(select t.account from zt_team t where t.type = 'project' and t.root = t1.id order by t.id asc LIMIT 2,1) AS `THIRDMEMBER`
FROM `zt_project` t1 

```

# **置顶**(IBZ_TOP)

### 数据查询(DEFAULT)<div id="IbzTop_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`IBZ_TOPID`,
t1.`IBZ_TOPNAME`,
t1.`OBJECTID`,
t1.`OBJECTORDER`,
t1.`TYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_TOP` t1 

```
### 默认（全部数据）(VIEW)<div id="IbzTop_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`IBZ_TOPID`,
t1.`IBZ_TOPNAME`,
t1.`OBJECTID`,
t1.`OBJECTORDER`,
t1.`TYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_TOP` t1 

```

# **im_chat**(ZT_IM_CHAT)

### DEFAULT(DEFAULT)<div id="Im_chat_Default"></div>
```sql
SELECT
t1.`ADMINS`,
t1.`COMMITTERS`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DISMISSDATE`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GID`,
t1.`ID`,
t1.`LASTACTIVETIME`,
t1.`NAME`,
t1.`PUBLIC`,
t1.`SUBJECT`,
t1.`TYPE`
FROM `zt_im_chat` t1 

```
### 默认（全部数据）(VIEW)<div id="Im_chat_View"></div>
```sql
SELECT
t1.`ADMINS`,
t1.`COMMITTERS`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DISMISSDATE`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`GID`,
t1.`ID`,
t1.`LASTACTIVETIME`,
t1.`NAME`,
t1.`PUBLIC`,
t1.`SUBJECT`,
t1.`TYPE`
FROM `zt_im_chat` t1 

```

# **im_chatuser**(ZT_IM_CHATUSER)

### DEFAULT(DEFAULT)<div id="Im_chatuser_Default"></div>
```sql
SELECT
t1.`CATEGORY`,
t1.`CGID`,
t1.`FREEZE`,
t1.`HIDE`,
t1.`ID`,
t1.`JOIN`,
t1.`MUTE`,
t1.`ORDER`,
t1.`QUIT`,
t1.`STAR`,
t1.`USER`
FROM `zt_im_chatuser` t1 

```
### 默认（全部数据）(VIEW)<div id="Im_chatuser_View"></div>
```sql
SELECT
t1.`CATEGORY`,
t1.`CGID`,
t1.`FREEZE`,
t1.`HIDE`,
t1.`ID`,
t1.`JOIN`,
t1.`MUTE`,
t1.`ORDER`,
t1.`QUIT`,
t1.`STAR`,
t1.`USER`
FROM `zt_im_chatuser` t1 

```

# **im_client**(ZT_IM_CLIENT)

### DEFAULT(DEFAULT)<div id="Im_client_Default"></div>
```sql
SELECT
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DESC`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`ID`,
t1.`STATUS`,
t1.`STRATEGY`,
t1.`VERSION`
FROM `zt_im_client` t1 

```
### 默认（全部数据）(VIEW)<div id="Im_client_View"></div>
```sql
SELECT
t1.`CHANGELOG`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DESC`,
t1.`DOWNLOADS`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`ID`,
t1.`STATUS`,
t1.`STRATEGY`,
t1.`VERSION`
FROM `zt_im_client` t1 

```

# **im_conference**(ZT_IM_CONFERENCE)

### DEFAULT(DEFAULT)<div id="Im_conference_Default"></div>
```sql
SELECT
t1.`CGID`,
t1.`ID`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`RID`,
t1.`STATUS`
FROM `zt_im_conference` t1 

```
### 默认（全部数据）(VIEW)<div id="Im_conference_View"></div>
```sql
SELECT
t1.`CGID`,
t1.`ID`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARTICIPANTS`,
t1.`RID`,
t1.`STATUS`
FROM `zt_im_conference` t1 

```

# **im_conferenceaction**(ZT_IM_CONFERENCEACTION)

### DEFAULT(DEFAULT)<div id="Im_conferenceaction_Default"></div>
```sql
SELECT
t1.`DATE`,
t1.`ID`,
t1.`RID`,
t1.`TYPE`,
t1.`USER`
FROM `zt_im_conferenceaction` t1 

```
### 默认（全部数据）(VIEW)<div id="Im_conferenceaction_View"></div>
```sql
SELECT
t1.`DATE`,
t1.`ID`,
t1.`RID`,
t1.`TYPE`,
t1.`USER`
FROM `zt_im_conferenceaction` t1 

```

# **im_message**(ZT_IM_MESSAGE)

### DEFAULT(DEFAULT)<div id="Im_message_Default"></div>
```sql
SELECT
t1.`CGID`,
t1.`CONTENTTYPE`,
t1.`DATE`,
t1.`DELETED`,
t1.`GID`,
t1.`ID`,
t1.`ORDER`,
t1.`TYPE`,
t1.`USER`
FROM `zt_im_message` t1 

WHERE t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="Im_message_View"></div>
```sql
SELECT
t1.`CGID`,
t1.`CONTENT`,
t1.`CONTENTTYPE`,
t1.`DATA`,
t1.`DATE`,
t1.`DELETED`,
t1.`GID`,
t1.`ID`,
t1.`ORDER`,
t1.`TYPE`,
t1.`USER`
FROM `zt_im_message` t1 

WHERE t1.DELETED = '0' 

```

# **im_messagestatus**(ZT_IM_MESSAGESTATUS)

### DEFAULT(DEFAULT)<div id="Im_messagestatus_Default"></div>
```sql
SELECT
concat(t1.`USER`,'__',t1.`MESSAGE`) AS `ID`,
t1.`MESSAGE`,
t1.`STATUS`,
t1.`USER`
FROM `zt_im_messagestatus` t1 

```
### 默认（全部数据）(VIEW)<div id="Im_messagestatus_View"></div>
```sql
SELECT
concat(t1.`USER`,'__',t1.`MESSAGE`) AS `ID`,
t1.`MESSAGE`,
t1.`STATUS`,
t1.`USER`
FROM `zt_im_messagestatus` t1 

```

# **im_queue**(ZT_IM_QUEUE)

### DEFAULT(DEFAULT)<div id="Im_queue_Default"></div>
```sql
SELECT
t1.`ADDDATE`,
t1.`ID`,
t1.`PROCESSDATE`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_im_queue` t1 

```
### 默认（全部数据）(VIEW)<div id="Im_queue_View"></div>
```sql
SELECT
t1.`ADDDATE`,
t1.`CONTENT`,
t1.`ID`,
t1.`PROCESSDATE`,
t1.`RESULT`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_im_queue` t1 

```

# **jenkins**(ZT_JENKINS)

### DEFAULT(DEFAULT)<div id="Jenkins_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`ID`,
t1.`NAME`,
t1.`PASSWORD`,
t1.`TOKEN`,
t1.`URL`
FROM `zt_jenkins` t1 

WHERE t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="Jenkins_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`ID`,
t1.`NAME`,
t1.`PASSWORD`,
t1.`TOKEN`,
t1.`URL`
FROM `zt_jenkins` t1 

WHERE t1.DELETED = '0' 

```

# **job**(ZT_JOB)

### DEFAULT(DEFAULT)<div id="Job_Default"></div>
```sql
SELECT
t1.`ATDAY`,
t1.`ATTIME`,
t1.`COMMENT`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`FRAME`,
t1.`ID`,
t1.`JKHOST`,
t1.`JKJOB`,
t1.`LASTEXEC`,
t1.`LASTSTATUS`,
t1.`LASTTAG`,
t1.`NAME`,
t1.`PRODUCT`,
t1.`REPO`,
t1.`SVNDIR`,
t1.`TRIGGERTYPE`
FROM `zt_job` t1 

WHERE t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="Job_View"></div>
```sql
SELECT
t1.`ATDAY`,
t1.`ATTIME`,
t1.`COMMENT`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`FRAME`,
t1.`ID`,
t1.`JKHOST`,
t1.`JKJOB`,
t1.`LASTEXEC`,
t1.`LASTSTATUS`,
t1.`LASTTAG`,
t1.`NAME`,
t1.`PRODUCT`,
t1.`REPO`,
t1.`SVNDIR`,
t1.`TRIGGERTYPE`
FROM `zt_job` t1 

WHERE t1.DELETED = '0' 

```

# **lang**(ZT_LANG)

### DEFAULT(DEFAULT)<div id="Lang_Default"></div>
```sql
SELECT
t1.`ID`,
t1.`KEY`,
t1.`LANG`,
t1.`MODULE`,
t1.`SECTION`,
t1.`SYSTEM`
FROM `zt_lang` t1 

```
### 默认（全部数据）(VIEW)<div id="Lang_View"></div>
```sql
SELECT
t1.`ID`,
t1.`KEY`,
t1.`LANG`,
t1.`MODULE`,
t1.`SECTION`,
t1.`SYSTEM`,
t1.`VALUE`
FROM `zt_lang` t1 

```

# **log**(ZT_LOG)

### DEFAULT(DEFAULT)<div id="Log_Default"></div>
```sql
SELECT
t1.`ACTION`,
t1.`CONTENTTYPE`,
t1.`DATE`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`URL`
FROM `zt_log` t1 

```
### 默认（全部数据）(VIEW)<div id="Log_View"></div>
```sql
SELECT
t1.`ACTION`,
t1.`CONTENTTYPE`,
t1.`DATA`,
t1.`DATE`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`RESULT`,
t1.`URL`
FROM `zt_log` t1 

```

# **模块**(ZT_MODULE)

### BugModule(BugModule)<div id="Module_BugModule"></div>
```sql
SELECT
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`GRADE`,
	t1.`ID`,
	CONCAT(
	'/',
 case when	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t1.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) is not null then (
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t1.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	LIMIT 0,1
	) else t1.`name` end
	) AS `NAME`,
	t1.`ORDER`,
	t1.`OWNER`,
	t1.`PARENT`,
	t11.`NAME` AS `PARENTNAME`,
	t1.`PATH`,
	t1.`ROOT`,
	t1.`SHORT`,
	t1.`TYPE` 
FROM
	`zt_module` t1
	LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID
WHERE t1.DELETED = '0' 
t1.type = 'story' 

```
### DEFAULT(DEFAULT)<div id="Module_Default"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

WHERE t1.DELETED = '0' 

```
### 文档目录查询(DocModule)<div id="Module_DocModule"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'doc'  AND  t1.`ROOT` =  ${srfdatacontext('product','{"defname":"ROOT","dename":"ZT_MODULE"}')} ) 

```
### 产品线(Line)<div id="Module_Line"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'line' ) 

```
### 需求模块(StoryModule)<div id="Module_StoryModule"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

WHERE t1.DELETED = '0' 
( t1.`ROOT` =  ${srfwebcontext('product','{"defname":"ROOT","dename":"ZT_MODULE"}')}  AND  t1.`TYPE` = 'story'  AND  <#assign _value=srfdatacontext('branch','{"ignoreempty":true,"defname":"BRANCH","dename":"ZT_MODULE"}')><#if _value?length gt 0>t1.`BRANCH` = ${_value}<#else>1=1</#if> ) 

```
### 任务模块(TaskModule)<div id="Module_TaskModule"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

WHERE t1.DELETED = '0' 
( t1.`ROOT` =  ${srfdatacontext('project','{"defname":"ROOT","dename":"ZT_MODULE"}')}  AND  t1.`TYPE` = 'task' ) 

```
### 默认（全部数据）(VIEW)<div id="Module_View"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`COLLECTOR`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 

WHERE t1.DELETED = '0' 

```

# **通知**(ZT_NOTIFY)

### DEFAULT(DEFAULT)<div id="Notify_Default"></div>
```sql
SELECT
t1.`ACTION`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`SENDTIME`,
t1.`STATUS`,
t1.`SUBJECT`,
t1.`TOLIST`
FROM `zt_notify` t1 

```
### 默认（全部数据）(VIEW)<div id="Notify_View"></div>
```sql
SELECT
t1.`ACTION`,
t1.`CCLIST`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DATA`,
t1.`FAILREASON`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`SENDTIME`,
t1.`STATUS`,
t1.`SUBJECT`,
t1.`TOLIST`
FROM `zt_notify` t1 

```

# **实体属性**(PSDEFIELD)

### 数据查询(DEFAULT)<div id="PSDEField_Default"></div>
```sql
SELECT
t1.`ALLOWEMPTY`,
t1.`AUDITINFOFORMAT`,
t1.`BIZTAG`,
t1.`CHECKRECURSION`,
t1.`CODENAME`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CUSTOMEXPORTSCOPE`,
t1.`DBVALUEMODE`,
t1.`DBVALUEMODE2`,
t1.`DEFAULTVALUE`,
t1.`DEFTYPE`,
t1.`DERPSDEFID`,
t1.`DERPSDEFNAME`,
t1.`DUPCHECKMODE`,
t1.`DUPCHECKVALUES`,
t1.`DUPCHKPSDEFID`,
t1.`DUPCHKPSDEFNAME`,
t1.`DVT`,
t1.`DYNAMODELFLAG`,
t1.`ENABLEAUDIT`,
t1.`ENABLECOLPRIV`,
t1.`ENABLEQS`,
t1.`ENABLETEMPDATA`,
t1.`ENABLEUSERINPUT`,
t1.`ENAWRITEBACK`,
t1.`EXPORTSCOPE`,
t1.`EXTENDMODE`,
t1.`FKEY`,
t1.`FORMULAFIELDS`,
t1.`FORMULAFORMAT`,
t1.`IMPORTKEY`,
t1.`IMPORTORDER`,
t1.`IMPORTTAG`,
t1.`INDEXTYPE`,
t1.`LENGTH`,
t1.`LOCKFLAG`,
t1.`LOGICNAME`,
t1.`MAJORFIELD`,
t1.`MEMO`,
t1.`MULTIFORMFIELD`,
t1.`NO2DUPCHKPSDEFID`,
t1.`NO2DUPCHKPSDEFNAME`,
t1.`NO3DUPCHKPSDEFID`,
t1.`NO3DUPCHKPSDEFNAME`,
t1.`NULLVALORDER`,
t1.`ORDERVALUE`,
t1.`PASTERESET`,
t1.`PHYSICALFIELD`,
t1.`PKEY`,
t1.`PRECISION2`,
t1.`PREDEFINETYPE`,
t1.`PSDATATYPEID`,
t1.`PSDATATYPENAME`,
t1.`PSDEFIELDID`,
t1.`PSDEFIELDNAME`,
t1.`PSDEID`,
t1.`PSDENAME`,
t11.`PSSUBSYSSADEID`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`QUERYCOLUMN`,
t1.`QUERYCS`,
t1.`SERVICECODENAME`,
t1.`STATEFIELD`,
t1.`STRINGCASE`,
t1.`STRLENGTH`,
t1.`TABLENAME`,
t1.`TESTDATA`,
t1.`UNICODECHAR`,
t1.`UNIONKEYVALUE`,
t1.`UNIT`,
t1.`UNITWIDTH`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEOVMODE`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VALUEFORMAT`,
t1.`VALUEPSDEFID`,
t1.`VALUEPSDEFNAME`,
t1.`VIEWCOLLEVEL`
FROM `T_PSDEFIELD` t1 
LEFT JOIN T_PSDATAENTITY t11 ON t1.PSDEID = t11.PSDATAENTITYID 

```
### 默认（全部数据）(VIEW)<div id="PSDEField_View"></div>
```sql
SELECT
t1.`ALLOWEMPTY`,
t1.`AUDITINFOFORMAT`,
t1.`BIZTAG`,
t1.`CHECKRECURSION`,
t1.`CODENAME`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`CUSTOMEXPORTSCOPE`,
t1.`DBVALUEMODE`,
t1.`DBVALUEMODE2`,
t1.`DEFAULTVALUE`,
t1.`DEFTYPE`,
t1.`DERPSDEFID`,
t1.`DERPSDEFNAME`,
t1.`DUPCHECKMODE`,
t1.`DUPCHECKVALUES`,
t1.`DUPCHKPSDEFID`,
t1.`DUPCHKPSDEFNAME`,
t1.`DVT`,
t1.`DYNAMODELFLAG`,
t1.`ENABLEAUDIT`,
t1.`ENABLECOLPRIV`,
t1.`ENABLEQS`,
t1.`ENABLETEMPDATA`,
t1.`ENABLEUSERINPUT`,
t1.`ENAWRITEBACK`,
t1.`EXPORTSCOPE`,
t1.`EXTENDMODE`,
t1.`FKEY`,
t1.`FORMULAFIELDS`,
t1.`FORMULAFORMAT`,
t1.`IMPORTKEY`,
t1.`IMPORTORDER`,
t1.`IMPORTTAG`,
t1.`INDEXTYPE`,
t1.`LENGTH`,
t1.`LOCKFLAG`,
t1.`LOGICNAME`,
t1.`MAJORFIELD`,
t1.`MEMO`,
t1.`MULTIFORMFIELD`,
t1.`NO2DUPCHKPSDEFID`,
t1.`NO2DUPCHKPSDEFNAME`,
t1.`NO3DUPCHKPSDEFID`,
t1.`NO3DUPCHKPSDEFNAME`,
t1.`NULLVALORDER`,
t1.`ORDERVALUE`,
t1.`PASTERESET`,
t1.`PHYSICALFIELD`,
t1.`PKEY`,
t1.`PRECISION2`,
t1.`PREDEFINETYPE`,
t1.`PSDATATYPEID`,
t1.`PSDATATYPENAME`,
t1.`PSDEFIELDID`,
t1.`PSDEFIELDNAME`,
t1.`PSDEID`,
t1.`PSDENAME`,
t11.`PSSUBSYSSADEID`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`QUERYCOLUMN`,
t1.`QUERYCS`,
t1.`SERVICECODENAME`,
t1.`STATEFIELD`,
t1.`STRINGCASE`,
t1.`STRLENGTH`,
t1.`TABLENAME`,
t1.`TESTDATA`,
t1.`UNICODECHAR`,
t1.`UNIONKEYVALUE`,
t1.`UNIT`,
t1.`UNITWIDTH`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDATEOVMODE`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VALUEFORMAT`,
t1.`VALUEPSDEFID`,
t1.`VALUEPSDEFNAME`,
t1.`VIEWCOLLEVEL`
FROM `T_PSDEFIELD` t1 
LEFT JOIN T_PSDATAENTITY t11 ON t1.PSDEID = t11.PSDATAENTITYID 

```

# **实体**(PSDATAENTITY)

### 数据查询(DEFAULT)<div id="PSDataEntity_Default"></div>
```sql
SELECT
t1.`ACCCTRLARCH`,
t1.`AUDITMODE`,
t1.`BASECLSPARAMS`,
t1.`BIZTAG`,
t1.`CODENAME`,
t1.`COLOR`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DATAACCMODE`,
t1.`DATACHGLOGMODE`,
t1.`DATAIMPEXPFLAG`,
t1.`DBTABSPACE`,
t1.`DECAT`,
t1.`DELOCKFLAG`,
t1.`DESN`,
t1.`DETAG`,
t1.`DETAG2`,
t1.`DETYPE`,
t1.`DSLINK`,
t1.`DYNAMICMODE`,
t1.`DYNAMODELFLAG`,
t1.`ENABLEAUDIT`,
t1.`ENABLEDALOG`,
t1.`ENABLEDATAVER`,
t1.`ENABLEDEACTION`,
t1.`ENABLEDEDATASET`,
t1.`ENABLEENTITYCACHE`,
t1.`ENABLEMOB`,
t1.`ENABLEMULTIDS`,
t1.`ENABLEOPNAMEMODEL`,
t1.`ENABLEORGMODEL`,
t1.`ENABLESELECT`,
t1.`ENABLEWFMODEL`,
t1.`ENAMULTIFORM`,
t1.`ENATEMPDATA`,
t1.`ENTITYCACHETIMEOUT`,
t1.`EXISTINGMODEL`,
t1.`EXTABLENAME`,
t1.`INDEXDETYPE`,
t1.`KEYRULE`,
t1.`LOCKFLAG`,
t1.`LOGICINVALIDVALUE`,
t1.`LOGICNAME`,
t1.`LOGICVALID`,
t1.`LOGICVALIDVALUE`,
t1.`MAXENTITYCACHECNT`,
t1.`MEMO`,
t11.`COLOR` AS `MODCOLOR`,
t1.`MODELIMPEXPFLAG`,
t1.`MODELSTATE`,
t1.`NOVIEWMODE`,
t1.`PSDATAENTITYID`,
t1.`PSDATAENTITYNAME`,
t1.`PSMODULEID`,
t11.`PSMODULENAME`,
t1.`PSSUBSYSSADEID`,
t21.`PSSUBSYSSADENAME`,
t1.`PSSUBSYSSERVICEAPIID`,
t31.`PSSUBSYSSERVICEAPINAME`,
t1.`PSSYSREQITEMID`,
t41.`PSSYSREQITEMNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`REMOVEFLAG`,
t1.`SAASMODE`,
t1.`SERVICEAPIFLAG`,
t1.`SERVICECODENAME`,
t1.`STORAGEMODE`,
t1.`SUBSYSDE`,
t11.`SUBSYSMODULE`,
t1.`SVRPUBMODE`,
t1.`SYSTEMFLAG`,
t1.`TABLENAME`,
t1.`TESTCASEFLAG`,
t1.`TODOTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERACTION`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VIEWLEVEL`,
t1.`VIEWNAME`,
t1.`VIEWNAME2`,
t1.`VIEWNAME3`,
t1.`VIEWNAME4`,
t1.`VIRTUALFLAG`,
t1.`VKEYSEPARATOR`
FROM `T_PSDATAENTITY` t1 
LEFT JOIN T_PSMODULE t11 ON t1.PSMODULEID = t11.PSMODULEID 
LEFT JOIN T_PSSUBSYSSADE t21 ON t1.PSSUBSYSSADEID = t21.PSSUBSYSSADEID 
LEFT JOIN T_PSSUBSYSSERVICEAPI t31 ON t1.PSSUBSYSSERVICEAPIID = t31.PSSUBSYSSERVICEAPIID 
LEFT JOIN T_PSSYSREQITEM t41 ON t1.PSSYSREQITEMID = t41.PSSYSREQITEMID 

```
### 默认（全部数据）(VIEW)<div id="PSDataEntity_View"></div>
```sql
SELECT
t1.`ACCCTRLARCH`,
t1.`AUDITMODE`,
t1.`BASECLSPARAMS`,
t1.`BIZTAG`,
t1.`CODENAME`,
t1.`COLOR`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DATAACCMODE`,
t1.`DATACHGLOGMODE`,
t1.`DATAIMPEXPFLAG`,
t1.`DBTABSPACE`,
t1.`DECAT`,
t1.`DELOCKFLAG`,
t1.`DESN`,
t1.`DETAG`,
t1.`DETAG2`,
t1.`DETYPE`,
t1.`DSLINK`,
t1.`DYNAMICMODE`,
t1.`DYNAMODELFLAG`,
t1.`ENABLEAUDIT`,
t1.`ENABLEDALOG`,
t1.`ENABLEDATAVER`,
t1.`ENABLEDEACTION`,
t1.`ENABLEDEDATASET`,
t1.`ENABLEENTITYCACHE`,
t1.`ENABLEMOB`,
t1.`ENABLEMULTIDS`,
t1.`ENABLEOPNAMEMODEL`,
t1.`ENABLEORGMODEL`,
t1.`ENABLESELECT`,
t1.`ENABLEWFMODEL`,
t1.`ENAMULTIFORM`,
t1.`ENATEMPDATA`,
t1.`ENTITYCACHETIMEOUT`,
t1.`EXISTINGMODEL`,
t1.`EXTABLENAME`,
t1.`INDEXDETYPE`,
t1.`KEYRULE`,
t1.`LOCKFLAG`,
t1.`LOGICINVALIDVALUE`,
t1.`LOGICNAME`,
t1.`LOGICVALID`,
t1.`LOGICVALIDVALUE`,
t1.`MAXENTITYCACHECNT`,
t1.`MEMO`,
t11.`COLOR` AS `MODCOLOR`,
t1.`MODELIMPEXPFLAG`,
t1.`MODELSTATE`,
t1.`NOVIEWMODE`,
t1.`PSDATAENTITYID`,
t1.`PSDATAENTITYNAME`,
t1.`PSMODULEID`,
t11.`PSMODULENAME`,
t1.`PSSUBSYSSADEID`,
t21.`PSSUBSYSSADENAME`,
t1.`PSSUBSYSSERVICEAPIID`,
t31.`PSSUBSYSSERVICEAPINAME`,
t1.`PSSYSREQITEMID`,
t41.`PSSYSREQITEMNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`REMOVEFLAG`,
t1.`SAASMODE`,
t1.`SERVICEAPIFLAG`,
t1.`SERVICECODENAME`,
t1.`STORAGEMODE`,
t1.`SUBSYSDE`,
t11.`SUBSYSMODULE`,
t1.`SVRPUBMODE`,
t1.`SYSTEMFLAG`,
t1.`TABLENAME`,
t1.`TESTCASEFLAG`,
t1.`TODOTASK`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERACTION`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VIEWLEVEL`,
t1.`VIEWNAME`,
t1.`VIEWNAME2`,
t1.`VIEWNAME3`,
t1.`VIEWNAME4`,
t1.`VIRTUALFLAG`,
t1.`VKEYSEPARATOR`
FROM `T_PSDATAENTITY` t1 
LEFT JOIN T_PSMODULE t11 ON t1.PSMODULEID = t11.PSMODULEID 
LEFT JOIN T_PSSUBSYSSADE t21 ON t1.PSSUBSYSSADEID = t21.PSSUBSYSSADEID 
LEFT JOIN T_PSSUBSYSSERVICEAPI t31 ON t1.PSSUBSYSSERVICEAPIID = t31.PSSUBSYSSERVICEAPIID 
LEFT JOIN T_PSSYSREQITEM t41 ON t1.PSSYSREQITEMID = t41.PSSYSREQITEMID 

```

# **系统模块**(PSMODULE)

### 数据查询(DEFAULT)<div id="PSModule_Default"></div>
```sql
SELECT
t1.`CLSPKGPARAMS`,
t1.`CODENAME`,
t1.`COLOR`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFAULTFLAG`,
t1.`LOCKFLAG`,
t1.`MEMO`,
t1.`MODTAG`,
t1.`MODTAG2`,
t1.`MODTAG3`,
t1.`MODTAG4`,
t1.`MODULESN`,
t1.`NOVIEWMODE`,
t1.`ORDERVALUE`,
t1.`PKGCODENAME`,
t1.`PSMODULEID`,
t1.`PSMODULENAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`SERVICEAPIFLAG`,
t1.`SUBSYSMODULE`,
t1.`SYSREFTYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`
FROM `T_PSMODULE` t1 

```
### 默认（全部数据）(VIEW)<div id="PSModule_View"></div>
```sql
SELECT
t1.`CLSPKGPARAMS`,
t1.`CODENAME`,
t1.`COLOR`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFAULTFLAG`,
t1.`LOCKFLAG`,
t1.`MEMO`,
t1.`MODTAG`,
t1.`MODTAG2`,
t1.`MODTAG3`,
t1.`MODTAG4`,
t1.`MODULESN`,
t1.`NOVIEWMODE`,
t1.`ORDERVALUE`,
t1.`PKGCODENAME`,
t1.`PSMODULEID`,
t1.`PSMODULENAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`SERVICEAPIFLAG`,
t1.`SUBSYSMODULE`,
t1.`SYSREFTYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`
FROM `T_PSMODULE` t1 

```

# **外部接口实体**(PSSUBSYSSADE)

### 数据查询(DEFAULT)<div id="PSSubSysSADE_Default"></div>
```sql
SELECT
t1.`CODENAME`,
t1.`CODENAME2`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DETAG`,
t1.`DETAG2`,
t1.`LOGICNAME`,
t1.`MAJORFLAG`,
t1.`MEMO`,
t1.`PSSUBSYSSADEID`,
t1.`PSSUBSYSSADENAME`,
t1.`PSSUBSYSSERVICEAPIID`,
t11.`PSSUBSYSSERVICEAPINAME`,
t1.`SYNCMODELMODE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`
FROM `T_PSSUBSYSSADE` t1 
LEFT JOIN T_PSSUBSYSSERVICEAPI t11 ON t1.PSSUBSYSSERVICEAPIID = t11.PSSUBSYSSERVICEAPIID 

```
### 默认（全部数据）(VIEW)<div id="PSSubSysSADE_View"></div>
```sql
SELECT
t1.`CODENAME`,
t1.`CODENAME2`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DETAG`,
t1.`DETAG2`,
t1.`LOGICNAME`,
t1.`MAJORFLAG`,
t1.`MEMO`,
t1.`PSSUBSYSSADEID`,
t1.`PSSUBSYSSADENAME`,
t1.`PSSUBSYSSERVICEAPIID`,
t11.`PSSUBSYSSERVICEAPINAME`,
t1.`SYNCMODELMODE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`
FROM `T_PSSUBSYSSADE` t1 
LEFT JOIN T_PSSUBSYSSERVICEAPI t11 ON t1.PSSUBSYSSERVICEAPIID = t11.PSSUBSYSSERVICEAPIID 

```

# **外部服务接口**(PSSUBSYSSERVICEAPI)

### 数据查询(DEFAULT)<div id="PSSubSysServiceAPI_Default"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`PSMODULEID`,
t11.`PSMODULENAME`,
t1.`PSSUBSYSSERVICEAPIID`,
t1.`PSSUBSYSSERVICEAPINAME`,
t1.`PSSYSSERVICEAPIID`,
t21.`PSSYSSERVICEAPINAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_PSSUBSYSSERVICEAPI` t1 
LEFT JOIN T_PSMODULE t11 ON t1.PSMODULEID = t11.PSMODULEID 
LEFT JOIN T_PSSYSSERVICEAPI t21 ON t1.PSSYSSERVICEAPIID = t21.PSSYSSERVICEAPIID 

```
### 默认（全部数据）(VIEW)<div id="PSSubSysServiceAPI_View"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`PSMODULEID`,
t11.`PSMODULENAME`,
t1.`PSSUBSYSSERVICEAPIID`,
t1.`PSSUBSYSSERVICEAPINAME`,
t1.`PSSYSSERVICEAPIID`,
t21.`PSSYSSERVICEAPINAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_PSSUBSYSSERVICEAPI` t1 
LEFT JOIN T_PSMODULE t11 ON t1.PSMODULEID = t11.PSMODULEID 
LEFT JOIN T_PSSYSSERVICEAPI t21 ON t1.PSSYSSERVICEAPIID = t21.PSSYSSERVICEAPIID 

```

# **系统应用**(PSSYSAPP)

### 版本(Build)<div id="PSSysApp_Build"></div>
```sql
SELECT
t1.`APPFOLDER`,
t1.`APPMODE`,
t1.`APPPKGNAME`,
t1.`APPSN`,
t1.`APPTAG`,
t1.`APPTAG2`,
t1.`APPTAG3`,
t1.`APPTAG4`,
t1.`AUTOADDAPPVIEW`,
t1.`BTNNOPRIVDM`,
t1.`CODEFOLDER`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFAULTPUB`,
t1.`ENABLEC12TOC24`,
t1.`ENABLEDYNASYS`,
t1.`ENABLESTORYBOARD`,
t1.`ENALOCALSERVICE`,
t1.`FINOPRIVDM`,
t1.`FIUPDATEPRIVTAG`,
t1.`GCNOPRIVDM`,
t1.`GRIDCOLENABLELINK`,
t1.`GRIDFORCEFIT`,
t1.`GRIDROWACTIVEMODE`,
t1.`ICONFILE`,
t1.`LOGICNAME`,
t1.`MAINMENUSIDE`,
t1.`MEMO`,
t1.`ORIENTATIONMODE`,
t1.`PREVENTXSS`,
t1.`PSAPPTYPEID`,
t1.`PSAPPTYPENAME`,
t1.`PSPFCDNID`,
t1.`PSPFCDNNAME`,
t1.`PSPFID`,
t1.`PSPFSTYLEID`,
t1.`PSSTUDIOTHEMEID`,
t1.`PSSTUDIOTHEMENAME`,
t1.`PSSYSAPPID`,
t1.`PSSYSAPPNAME`,
t1.`PSSYSSERVICEAPIID`,
t11.`PSSYSSERVICEAPINAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBREFVIEWONLY`,
t1.`PUBSYSREFVIEWONLY`,
t1.`REMOVEFLAG`,
t1.`SERVICECODENAME`,
t1.`STARTPAGEFILE`,
t1.`UACLOGIN`,
t1.`UISTYLE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`
FROM `T_PSSYSAPP` t1 
LEFT JOIN T_PSSYSSERVICEAPI t11 ON t1.PSSYSSERVICEAPIID = t11.PSSYSSERVICEAPIID 

```
### 数据查询(DEFAULT)<div id="PSSysApp_Default"></div>
```sql
SELECT
t1.`APPFOLDER`,
t1.`APPMODE`,
t1.`APPPKGNAME`,
t1.`APPSN`,
t1.`APPTAG`,
t1.`APPTAG2`,
t1.`APPTAG3`,
t1.`APPTAG4`,
t1.`AUTOADDAPPVIEW`,
t1.`BTNNOPRIVDM`,
t1.`CODEFOLDER`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFAULTPUB`,
t1.`ENABLEC12TOC24`,
t1.`ENABLEDYNASYS`,
t1.`ENABLESTORYBOARD`,
t1.`ENALOCALSERVICE`,
t1.`FINOPRIVDM`,
t1.`FIUPDATEPRIVTAG`,
t1.`GCNOPRIVDM`,
t1.`GRIDCOLENABLELINK`,
t1.`GRIDFORCEFIT`,
t1.`GRIDROWACTIVEMODE`,
t1.`ICONFILE`,
t1.`LOGICNAME`,
t1.`MAINMENUSIDE`,
t1.`MEMO`,
t1.`ORIENTATIONMODE`,
t1.`PREVENTXSS`,
t1.`PSAPPTYPEID`,
t1.`PSAPPTYPENAME`,
t1.`PSPFCDNID`,
t1.`PSPFCDNNAME`,
t1.`PSPFID`,
t1.`PSPFSTYLEID`,
t1.`PSSTUDIOTHEMEID`,
t1.`PSSTUDIOTHEMENAME`,
t1.`PSSYSAPPID`,
t1.`PSSYSAPPNAME`,
t1.`PSSYSSERVICEAPIID`,
t11.`PSSYSSERVICEAPINAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBREFVIEWONLY`,
t1.`PUBSYSREFVIEWONLY`,
t1.`REMOVEFLAG`,
t1.`SERVICECODENAME`,
t1.`STARTPAGEFILE`,
t1.`UACLOGIN`,
t1.`UISTYLE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`
FROM `T_PSSYSAPP` t1 
LEFT JOIN T_PSSYSSERVICEAPI t11 ON t1.PSSYSSERVICEAPIID = t11.PSSYSSERVICEAPIID 

```
### 默认（全部数据）(VIEW)<div id="PSSysApp_View"></div>
```sql
SELECT
t1.`APPFOLDER`,
t1.`APPMODE`,
t1.`APPPKGNAME`,
t1.`APPSN`,
t1.`APPTAG`,
t1.`APPTAG2`,
t1.`APPTAG3`,
t1.`APPTAG4`,
t1.`AUTOADDAPPVIEW`,
t1.`BTNNOPRIVDM`,
t1.`CODEFOLDER`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFAULTPUB`,
t1.`ENABLEC12TOC24`,
t1.`ENABLEDYNASYS`,
t1.`ENABLESTORYBOARD`,
t1.`ENALOCALSERVICE`,
t1.`FINOPRIVDM`,
t1.`FIUPDATEPRIVTAG`,
t1.`GCNOPRIVDM`,
t1.`GRIDCOLENABLELINK`,
t1.`GRIDFORCEFIT`,
t1.`GRIDROWACTIVEMODE`,
t1.`ICONFILE`,
t1.`LOGICNAME`,
t1.`MAINMENUSIDE`,
t1.`MEMO`,
t1.`ORIENTATIONMODE`,
t1.`PFSTYLEPARAM`,
t1.`PREVENTXSS`,
t1.`PSAPPTYPEID`,
t1.`PSAPPTYPENAME`,
t1.`PSPFCDNID`,
t1.`PSPFCDNNAME`,
t1.`PSPFID`,
t1.`PSPFSTYLEID`,
t1.`PSSTUDIOTHEMEID`,
t1.`PSSTUDIOTHEMENAME`,
t1.`PSSYSAPPID`,
t1.`PSSYSAPPNAME`,
t1.`PSSYSSERVICEAPIID`,
t11.`PSSYSSERVICEAPINAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBREFVIEWONLY`,
t1.`PUBSYSREFVIEWONLY`,
t1.`REMOVEFLAG`,
t1.`SERVICECODENAME`,
t1.`STARTPAGEFILE`,
t1.`UACLOGIN`,
t1.`UISTYLE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`
FROM `T_PSSYSAPP` t1 
LEFT JOIN T_PSSYSSERVICEAPI t11 ON t1.PSSYSSERVICEAPIID = t11.PSSYSSERVICEAPIID 

```

# **系统需求项**(PSSYSREQITEM)

### 数据查询(DEFAULT)<div id="PSSysReqItem_Default"></div>
```sql
SELECT
t1.`CODENAME`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`ITEMSN`,
t1.`ITEMTAG`,
t1.`ITEMTAG2`,
t1.`ITEMTYPE`,
t1.`MEMO`,
t1.`ORDERVALUE`,
t1.`PPSSYSREQITEMID`,
t11.`PSSYSREQITEMNAME` AS `PPSSYSREQITEMNAME`,
t1.`PSSYSREQITEMID`,
t1.`PSSYSREQITEMNAME`,
t1.`PSSYSREQMODULEID`,
t21.`PSSYSREQMODULENAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PSSYSUSERCASEID`,
t1.`PSSYSUSERCASENAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VER`
FROM `T_PSSYSREQITEM` t1 
LEFT JOIN T_PSSYSREQITEM t11 ON t1.PPSSYSREQITEMID = t11.PSSYSREQITEMID 
LEFT JOIN T_PSSYSREQMODULE t21 ON t1.PSSYSREQMODULEID = t21.PSSYSREQMODULEID 

```
### 默认（全部数据）(VIEW)<div id="PSSysReqItem_View"></div>
```sql
SELECT
t1.`CODENAME`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`ITEMSN`,
t1.`ITEMTAG`,
t1.`ITEMTAG2`,
t1.`ITEMTYPE`,
t1.`MEMO`,
t1.`ORDERVALUE`,
t1.`PPSSYSREQITEMID`,
t11.`PSSYSREQITEMNAME` AS `PPSSYSREQITEMNAME`,
t1.`PSSYSREQITEMID`,
t1.`PSSYSREQITEMNAME`,
t1.`PSSYSREQMODULEID`,
t21.`PSSYSREQMODULENAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PSSYSUSERCASEID`,
t1.`PSSYSUSERCASENAME`,
t1.`REQCONTENT`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VER`
FROM `T_PSSYSREQITEM` t1 
LEFT JOIN T_PSSYSREQITEM t11 ON t1.PPSSYSREQITEMID = t11.PSSYSREQITEMID 
LEFT JOIN T_PSSYSREQMODULE t21 ON t1.PSSYSREQMODULEID = t21.PSSYSREQMODULEID 

```

# **系统需求模块**(PSSYSREQMODULE)

### 数据查询(DEFAULT)<div id="PSSysReqModule_Default"></div>
```sql
SELECT
t1.`CODENAME`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`MEMO`,
t1.`MODULESN`,
t1.`MODULETAG`,
t1.`MODULETAG2`,
t1.`MODULETAG3`,
t1.`MODULETAG4`,
t1.`ORDERVALUE`,
t1.`PPSSYSREQMODULEID`,
t11.`PSSYSREQMODULENAME` AS `PPSSYSREQMODULENAME`,
t1.`PSMODULEID`,
t21.`PSMODULENAME`,
t1.`PSSYSREQMODULEID`,
t1.`PSSYSREQMODULENAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`
FROM `T_PSSYSREQMODULE` t1 
LEFT JOIN T_PSSYSREQMODULE t11 ON t1.PPSSYSREQMODULEID = t11.PSSYSREQMODULEID 
LEFT JOIN T_PSMODULE t21 ON t1.PSMODULEID = t21.PSMODULEID 

```
### 默认（全部数据）(VIEW)<div id="PSSysReqModule_View"></div>
```sql
SELECT
t1.`CODENAME`,
t1.`CONTENT`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`MEMO`,
t1.`MODULESN`,
t1.`MODULETAG`,
t1.`MODULETAG2`,
t1.`MODULETAG3`,
t1.`MODULETAG4`,
t1.`ORDERVALUE`,
t1.`PPSSYSREQMODULEID`,
t11.`PSSYSREQMODULENAME` AS `PPSSYSREQMODULENAME`,
t1.`PSMODULEID`,
t21.`PSMODULENAME`,
t1.`PSSYSREQMODULEID`,
t1.`PSSYSREQMODULENAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`
FROM `T_PSSYSREQMODULE` t1 
LEFT JOIN T_PSSYSREQMODULE t11 ON t1.PPSSYSREQMODULEID = t11.PSSYSREQMODULEID 
LEFT JOIN T_PSMODULE t21 ON t1.PSMODULEID = t21.PSMODULEID 

```

# **系统运行会话**(PSSYSRUNSESSION)

### 数据查询(DEFAULT)<div id="PSSysRunSession_Default"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEBUGMODE`,
t1.`ENABLEVC`,
t1.`ENDTIME`,
t1.`FIXDBMODEL`,
t1.`MEMO`,
t1.`PACKMODE`,
t1.`PSDSCONSOLEID`,
t1.`PSSYSAPPID`,
t1.`PSSYSAPPID2`,
t1.`PSSYSAPPNAME`,
t1.`PSSYSAPPNAME2`,
t1.`PSSYSRUNSESSIONID`,
t1.`PSSYSRUNSESSIONNAME`,
t1.`PSSYSSERVICEAPIID`,
t1.`PSSYSSERVICEAPINAME`,
t1.`PSSYSSFPUBID`,
t1.`PSSYSSFPUBNAME`,
t1.`PSSYSTEMDBCFGID`,
t1.`PSSYSTEMDBCFGNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`REBUILDMODE`,
t1.`RUNMODE`,
t1.`RUNPARAM`,
t1.`RUNPARAM2`,
t1.`RUNPARAM3`,
t1.`RUNPARAM4`,
t1.`RUNPARAM5`,
t1.`RUNPARAM6`,
t1.`RUNSTATE`,
t1.`STARTTIME`,
t1.`STOPWHENTEMPLERROR`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_PSSYSRUNSESSION` t1 

```
### 默认（全部数据）(VIEW)<div id="PSSysRunSession_View"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEBUGMODE`,
t1.`ENABLEVC`,
t1.`ENDTIME`,
t1.`FIXDBMODEL`,
t1.`MEMO`,
t1.`PACKMODE`,
t1.`PSDSCONSOLEID`,
t1.`PSSYSAPPID`,
t1.`PSSYSAPPID2`,
t1.`PSSYSAPPNAME`,
t1.`PSSYSAPPNAME2`,
t1.`PSSYSRUNSESSIONID`,
t1.`PSSYSRUNSESSIONNAME`,
t1.`PSSYSSERVICEAPIID`,
t1.`PSSYSSERVICEAPINAME`,
t1.`PSSYSSFPUBID`,
t1.`PSSYSSFPUBNAME`,
t1.`PSSYSTEMDBCFGID`,
t1.`PSSYSTEMDBCFGNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`REBUILDMODE`,
t1.`RUNMODE`,
t1.`RUNPARAM`,
t1.`RUNPARAM2`,
t1.`RUNPARAM3`,
t1.`RUNPARAM4`,
t1.`RUNPARAM5`,
t1.`RUNPARAM6`,
t1.`RUNSTATE`,
t1.`STARTTIME`,
t1.`STOPWHENTEMPLERROR`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_PSSYSRUNSESSION` t1 

```

# **后台服务架构**(PSSYSSFPUB)

### 版本(Build)<div id="PSSysSFPub_Build"></div>
```sql
SELECT
t1.`BASECLSPKGCODENAME`,
t1.`CODENAME`,
t1.`CONTENTTYPE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFAULTPUB`,
t1.`DOCPSSFSTYLEID`,
t1.`DOCPSSFSTYLENAME`,
t1.`MEMO`,
t1.`PKGCODENAME`,
t1.`PPSSYSSFPUBID`,
t11.`PSSYSSFPUBNAME` AS `PPSSYSSFPUBNAME`,
t1.`PSSFSTYLEID`,
t1.`PSSFSTYLEPARAMID`,
t1.`PSSFSTYLEPARAMNAME`,
t1.`PSSFSTYLEVERID`,
t1.`PSSYSSFPUBID`,
t1.`PSSYSSFPUBNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBFOLDER`,
t1.`PUBTAG`,
t1.`PUBTAG2`,
t1.`PUBTAG3`,
t1.`PUBTAG4`,
t1.`REMOVEFLAG`,
t1.`STYLEPARAMS`,
t1.`SUBSYSPKGFLAG`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VERSTR`
FROM `T_PSSYSSFPUB` t1 
LEFT JOIN T_PSSYSSFPUB t11 ON t1.PPSSYSSFPUBID = t11.PSSYSSFPUBID 

```
### 数据查询(DEFAULT)<div id="PSSysSFPub_Default"></div>
```sql
SELECT
t1.`BASECLSPKGCODENAME`,
t1.`CODENAME`,
t1.`CONTENTTYPE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFAULTPUB`,
t1.`DOCPSSFSTYLEID`,
t1.`DOCPSSFSTYLENAME`,
t1.`MEMO`,
t1.`PKGCODENAME`,
t1.`PPSSYSSFPUBID`,
t11.`PSSYSSFPUBNAME` AS `PPSSYSSFPUBNAME`,
t1.`PSSFSTYLEID`,
t1.`PSSFSTYLEPARAMID`,
t1.`PSSFSTYLEPARAMNAME`,
t1.`PSSFSTYLEVERID`,
t1.`PSSYSSFPUBID`,
t1.`PSSYSSFPUBNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBFOLDER`,
t1.`PUBTAG`,
t1.`PUBTAG2`,
t1.`PUBTAG3`,
t1.`PUBTAG4`,
t1.`REMOVEFLAG`,
t1.`STYLEPARAMS`,
t1.`SUBSYSPKGFLAG`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VERSTR`
FROM `T_PSSYSSFPUB` t1 
LEFT JOIN T_PSSYSSFPUB t11 ON t1.PPSSYSSFPUBID = t11.PSSYSSFPUBID 

```
### 默认（全部数据）(VIEW)<div id="PSSysSFPub_View"></div>
```sql
SELECT
t1.`BASECLSPKGCODENAME`,
t1.`CODENAME`,
t1.`CONTENTTYPE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFAULTPUB`,
t1.`DOCPSSFSTYLEID`,
t1.`DOCPSSFSTYLENAME`,
t1.`MEMO`,
t1.`PKGCODENAME`,
t1.`PPSSYSSFPUBID`,
t11.`PSSYSSFPUBNAME` AS `PPSSYSSFPUBNAME`,
t1.`PSSFSTYLEID`,
t1.`PSSFSTYLEPARAMID`,
t1.`PSSFSTYLEPARAMNAME`,
t1.`PSSFSTYLEVERID`,
t1.`PSSYSSFPUBID`,
t1.`PSSYSSFPUBNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBFOLDER`,
t1.`PUBTAG`,
t1.`PUBTAG2`,
t1.`PUBTAG3`,
t1.`PUBTAG4`,
t1.`REMOVEFLAG`,
t1.`STYLEPARAMS`,
t1.`SUBSYSPKGFLAG`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VERSTR`
FROM `T_PSSYSSFPUB` t1 
LEFT JOIN T_PSSYSSFPUB t11 ON t1.PPSSYSSFPUBID = t11.PSSYSSFPUBID 

```

# **系统服务接口**(PSSYSSERVICEAPI)

### 数据查询(DEFAULT)<div id="PSSysServiceAPI_Default"></div>
```sql
SELECT
t1.`APIMODE`,
t1.`APITAG`,
t1.`APITAG2`,
t1.`APITYPE`,
t1.`AUTHCHECKTOKENURI`,
t1.`AUTHCLIENTID`,
t1.`AUTHCLIENTSECRET`,
t1.`AUTHMODE`,
t1.`AUTHPARAM`,
t1.`AUTHPARAM2`,
t1.`AUTHPARAM3`,
t1.`AUTHPARAM4`,
t1.`CFGPSMODELSTORAGEID`,
t1.`CFGTAG`,
t1.`CODENAME`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFDEACTIONREQMETHOD`,
t1.`DEFDEDATASETREQMETHOD`,
t1.`DEFSELECTREQMETHOD`,
t1.`LOCKFLAG`,
t1.`MEMO`,
t1.`PREDEFINEDTYPE`,
t1.`PSMODULEID`,
t11.`PSMODULENAME`,
t1.`PSSYSSERVICEAPIID`,
t1.`PSSYSSERVICEAPINAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`SERVICECODENAME`,
t1.`SERVICEPARAM`,
t1.`SERVICEPARAM2`,
t1.`SERVICEPARAM3`,
t1.`SERVICEPARAM4`,
t1.`SERVICETYPE`,
t1.`UNIQUETAG`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VER`
FROM `T_PSSYSSERVICEAPI` t1 
LEFT JOIN T_PSMODULE t11 ON t1.PSMODULEID = t11.PSMODULEID 

```
### 默认（全部数据）(VIEW)<div id="PSSysServiceAPI_View"></div>
```sql
SELECT
t1.`APIMODE`,
t1.`APITAG`,
t1.`APITAG2`,
t1.`APITYPE`,
t1.`AUTHCHECKTOKENURI`,
t1.`AUTHCLIENTID`,
t1.`AUTHCLIENTSECRET`,
t1.`AUTHMODE`,
t1.`AUTHPARAM`,
t1.`AUTHPARAM2`,
t1.`AUTHPARAM3`,
t1.`AUTHPARAM4`,
t1.`CFGPSMODELSTORAGEID`,
t1.`CFGTAG`,
t1.`CODENAME`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEFDEACTIONREQMETHOD`,
t1.`DEFDEDATASETREQMETHOD`,
t1.`DEFSELECTREQMETHOD`,
t1.`LOCKFLAG`,
t1.`MEMO`,
t1.`PREDEFINEDTYPE`,
t1.`PSMODULEID`,
t11.`PSMODULENAME`,
t1.`PSSYSSERVICEAPIID`,
t1.`PSSYSSERVICEAPINAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`SERVICECODENAME`,
t1.`SERVICEPARAM`,
t1.`SERVICEPARAM2`,
t1.`SERVICEPARAM3`,
t1.`SERVICEPARAM4`,
t1.`SERVICETYPE`,
t1.`UNIQUETAG`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`,
t1.`VALIDFLAG`,
t1.`VER`
FROM `T_PSSYSSERVICEAPI` t1 
LEFT JOIN T_PSMODULE t11 ON t1.PSMODULEID = t11.PSMODULEID 

```

# **系统数据库**(PSSYSTEMDBCFG)

### 版本(Build)<div id="PSSystemDBCfg_Build"></div>
```sql
SELECT
t1.`APPENDSCHEMA`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DBSCHEMANAME`,
t1.`DEFAULTFLAG`,
t1.`ENABLEWEBTOOL`,
t1.`MEMO`,
t1.`NODBINSTMODE`,
t1.`NULLVALORDER`,
t1.`OBJNAMECASE`,
t1.`PSSYSTEMDBCFGID`,
t1.`PSSYSTEMDBCFGNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBCOMMENTFLAG`,
t1.`PUBDBMODELFLAG`,
t1.`PUBFKEYFLAG`,
t1.`PUBINDEXFLAG`,
t1.`PUBVIEWFLAG`,
t1.`RESINFO`,
t1.`RESREADYTIME`,
t1.`RESSTATE`,
t1.`TABSPACE`,
t1.`TABSPACE2`,
t1.`TABSPACE3`,
t1.`TABSPACE4`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`
FROM `T_PSSYSTEMDBCFG` t1 

```
### 数据查询(DEFAULT)<div id="PSSystemDBCfg_Default"></div>
```sql
SELECT
t1.`APPENDSCHEMA`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DBSCHEMANAME`,
t1.`DEFAULTFLAG`,
t1.`ENABLEWEBTOOL`,
t1.`MEMO`,
t1.`NODBINSTMODE`,
t1.`NULLVALORDER`,
t1.`OBJNAMECASE`,
t1.`PSSYSTEMDBCFGID`,
t1.`PSSYSTEMDBCFGNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBCOMMENTFLAG`,
t1.`PUBDBMODELFLAG`,
t1.`PUBFKEYFLAG`,
t1.`PUBINDEXFLAG`,
t1.`PUBVIEWFLAG`,
t1.`RESINFO`,
t1.`RESREADYTIME`,
t1.`RESSTATE`,
t1.`TABSPACE`,
t1.`TABSPACE2`,
t1.`TABSPACE3`,
t1.`TABSPACE4`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`
FROM `T_PSSYSTEMDBCFG` t1 

```
### 默认（全部数据）(VIEW)<div id="PSSystemDBCfg_View"></div>
```sql
SELECT
t1.`APPENDSCHEMA`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DBSCHEMANAME`,
t1.`DEFAULTFLAG`,
t1.`ENABLEWEBTOOL`,
t1.`MEMO`,
t1.`NODBINSTMODE`,
t1.`NULLVALORDER`,
t1.`OBJNAMECASE`,
t1.`PSSYSTEMDBCFGID`,
t1.`PSSYSTEMDBCFGNAME`,
t1.`PSSYSTEMID`,
t1.`PSSYSTEMNAME`,
t1.`PUBCOMMENTFLAG`,
t1.`PUBDBMODELFLAG`,
t1.`PUBFKEYFLAG`,
t1.`PUBINDEXFLAG`,
t1.`PUBVIEWFLAG`,
t1.`RESINFO`,
t1.`RESREADYTIME`,
t1.`RESSTATE`,
t1.`TABSPACE`,
t1.`TABSPACE2`,
t1.`TABSPACE3`,
t1.`TABSPACE4`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`USERCAT`,
t1.`USERPARAMS`,
t1.`USERTAG`,
t1.`USERTAG2`,
t1.`USERTAG3`,
t1.`USERTAG4`
FROM `T_PSSYSTEMDBCFG` t1 

```

# **产品**(ZT_PRODUCT)

### 全部产品(AllList)<div id="Product_AllList"></div>
```sql
SELECT
t1.`ACL`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0') AS `BUILDCNT`,
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0') AS `CASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='changed' AND DELETED = '0') AS `CHANGEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='closed' AND DELETED = '0') AS `CLOSEDSTORYCNT`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`CREATEDVERSION`,
t1.`DELETED`,
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0') AS `DOCCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='draft' AND DELETED = '0') AS `DRAFTSTORYCNT`,
t1.`ID`,
'0' AS `ISTOP`,
t1.`LINE`,
t11.`NAME` AS `LINENAME`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`PO`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
t1.`QD`,
t1.`RD`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RELATEDBUGCNT`,
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0') AS `RELATEDPROJECTS`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`
FROM `zt_product` t1 
LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 

WHERE t1.DELETED = '0' 
( ( t1.`STATUS` <> 'closed'  OR  (#{srf.datacontext.products} is not null and t1.id = #{srf.datacontext.products}) ) ) 

```
### 校验产品名称或产品代号是否已经存在(CheckNameOrCode)<div id="Product_CheckNameOrCode"></div>
```sql
SELECT
t1.id
FROM `zt_product` t1 

```
### 当前项目(CURPROJECT)<div id="Product_CurProject"></div>
```sql
SELECT
t1.`ACL`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0') AS `BUILDCNT`,
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0') AS `CASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='changed' AND DELETED = '0') AS `CHANGEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='closed' AND DELETED = '0') AS `CLOSEDSTORYCNT`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`CREATEDVERSION`,
t1.`DELETED`,
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0') AS `DOCCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='draft' AND DELETED = '0') AS `DRAFTSTORYCNT`,
t1.`ID`,
'0' AS `ISTOP`,
t1.`LINE`,
t11.`NAME` AS `LINENAME`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`PO`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
t1.`QD`,
t1.`RD`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RELATEDBUGCNT`,
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0') AS `RELATEDPROJECTS`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`
FROM `zt_product` t1 
LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 

WHERE EXISTS(SELECT * FROM zt_projectproduct t21 
 WHERE 
 t1.ID = t21.PRODUCT  AND  ( t21.`PROJECT` = ${srfdatacontext('srfparentkey','{"defname":"PROJECT","dename":"ZT_PROJECTPRODUCT"}')} ) ) 
t1.DELETED = '0' 

```
### 当前用户(CurUer)<div id="Product_CurUer"></div>
```sql
SELECT
	t1.* 
FROM
	(
SELECT
	t1.`ACL`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVESTORYCNT`,
	( SELECT count( 1 ) FROM zt_build t WHERE t.product = t1.id AND t.deleted = '0' ) AS `BUILDCNT`,
	( SELECT count( 1 ) FROM zt_case t WHERE t.product = t1.id AND t.deleted = '0' ) AS `CASECNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'changed' AND DELETED = '0' ) AS `CHANGEDSTORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'closed' AND DELETED = '0' ) AS `CLOSEDSTORYCNT`,
	t1.`CODE`,
	t1.`CREATEDBY`,
	t1.`CREATEDDATE`,
	t1.`CREATEDVERSION`,
	t1.`DELETED`,
	( SELECT count( 1 ) FROM zt_doc t WHERE t.product = t1.id AND t.deleted = '0' ) AS `DOCCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'draft' AND DELETED = '0' ) AS `DRAFTSTORYCNT`,
	t1.`ID`,
	t1.`LINE`,
	t11.`NAME` AS `LINENAME`,
	t1.`NAME`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `NOTCLOSEDBUGCNT`,
	t1.`ORDER`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`,
	t1.`PO`,
	( SELECT COUNT( 1 ) FROM ZT_PRODUCTPLAN WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `PRODUCTPLANCNT`,
	t1.`QD`,
	t1.`RD`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `RELATEDBUGCNT`,
	(
SELECT
	count( 1 ) 
FROM
	zt_projectproduct t
	INNER JOIN zt_project t2 ON t2.id = t.project 
WHERE
	t.product = t1.id 
	AND t2.deleted = '0' 
	) AS `RELATEDPROJECTS`,
	( SELECT COUNT( 1 ) FROM ZT_RELEASE WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `RELEASECNT`,
	t1.`STATUS`,
	t1.`SUBSTATUS`,
	t1.`TYPE`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMBUGCNT` 
FROM
	`zt_product` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'product' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
	LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 
WHERE
	t1.deleted = '0' 
	AND (t1.acl = 'open' or  t1.CREATEDBY =  #{srf.sessioncontext.srfloginname} or t1.PO = #{srf.sessioncontext.srfloginname} or t1.RD = #{srf.sessioncontext.srfloginname} or t1.QD =  #{srf.sessioncontext.srfloginname} ) UNION
SELECT
	t1.`ACL`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVESTORYCNT`,
	( SELECT count( 1 ) FROM zt_build t WHERE t.product = t1.id AND t.deleted = '0' ) AS `BUILDCNT`,
	( SELECT count( 1 ) FROM zt_case t WHERE t.product = t1.id AND t.deleted = '0' ) AS `CASECNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'changed' AND DELETED = '0' ) AS `CHANGEDSTORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'closed' AND DELETED = '0' ) AS `CLOSEDSTORYCNT`,
	t1.`CODE`,
	t1.`CREATEDBY`,
	t1.`CREATEDDATE`,
	t1.`CREATEDVERSION`,
	t1.`DELETED`,
	( SELECT count( 1 ) FROM zt_doc t WHERE t.product = t1.id AND t.deleted = '0' ) AS `DOCCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'draft' AND DELETED = '0' ) AS `DRAFTSTORYCNT`,
	t1.`ID`,
	t1.`LINE`,
	t11.`NAME` AS `LINENAME`,
	t1.`NAME`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `NOTCLOSEDBUGCNT`,
	t1.`ORDER`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`,
	t1.`PO`,
	( SELECT COUNT( 1 ) FROM ZT_PRODUCTPLAN WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `PRODUCTPLANCNT`,
	t1.`QD`,
	t1.`RD`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `RELATEDBUGCNT`,
	(
SELECT
	count( 1 ) 
FROM
	zt_projectproduct t
	INNER JOIN zt_project t2 ON t2.id = t.project 
WHERE
	t.product = t1.id 
	AND t2.deleted = '0' 
	) AS `RELATEDPROJECTS`,
	( SELECT COUNT( 1 ) FROM ZT_RELEASE WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `RELEASECNT`,
	t1.`STATUS`,
	t1.`SUBSTATUS`,
	t1.`TYPE`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMBUGCNT` 
FROM
	`zt_product` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'product' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
	LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 
WHERE
	t1.deleted = '0' 
	AND t1.id IN (
SELECT
	t.product 
FROM
	zt_projectproduct t 
WHERE
	t.project IN (
SELECT
	t3.root 
FROM
	zt_team t3 
WHERE
	t3.account = #{srf.sessioncontext.srfloginname} 
	AND t3.type = 'project' 
	) 
	) 
	) t1
```
### DEFAULT(DEFAULT)<div id="Product_Default"></div>
```sql
SELECT
t1.`ACL`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0') AS `BUILDCNT`,
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0') AS `CASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='changed' AND DELETED = '0') AS `CHANGEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='closed' AND DELETED = '0') AS `CLOSEDSTORYCNT`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`CREATEDVERSION`,
t1.`DELETED`,
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0') AS `DOCCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='draft' AND DELETED = '0') AS `DRAFTSTORYCNT`,
t1.`ID`,
'0' AS `ISTOP`,
t1.`LINE`,
t11.`NAME` AS `LINENAME`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`PO`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
t1.`QD`,
t1.`RD`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RELATEDBUGCNT`,
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0') AS `RELATEDPROJECTS`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`
FROM `zt_product` t1 
LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 

WHERE t1.DELETED = '0' 

```
### 产品总览(ProductPM)<div id="Product_ProductPM"></div>
```sql
select t.`status`, count(t.id) as SRFCOUNT from zt_product t where t.`status` <> '' and t.`status` is not null and t.deleted = '0' GROUP BY t.`status`
```
### 当前项目(StoryCURPROJECT)<div id="Product_StoryCurProject"></div>
```sql
SELECT
t1.`ACL`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0') AS `BUILDCNT`,
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0') AS `CASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='changed' AND DELETED = '0') AS `CHANGEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='closed' AND DELETED = '0') AS `CLOSEDSTORYCNT`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`CREATEDVERSION`,
t1.`DELETED`,
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0') AS `DOCCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='draft' AND DELETED = '0') AS `DRAFTSTORYCNT`,
t1.`ID`,
'0' AS `ISTOP`,
t1.`LINE`,
t11.`NAME` AS `LINENAME`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`PO`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
t1.`QD`,
t1.`RD`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RELATEDBUGCNT`,
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0') AS `RELATEDPROJECTS`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`
FROM `zt_product` t1 
LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 

WHERE EXISTS(SELECT * FROM zt_projectproduct t21 
 WHERE 
 t1.ID = t21.PRODUCT  AND  ( t21.`PROJECT` = ${srfdatacontext('project','{"defname":"PROJECT","dename":"ZT_PROJECTPRODUCT"}')} ) ) 
t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="Product_View"></div>
```sql
SELECT
t1.`ACL`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
(select count(1) from zt_build t where t.product = t1.id and t.deleted = '0') AS `BUILDCNT`,
(select count(1) from zt_case t where t.product = t1.id and t.deleted = '0') AS `CASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='changed' AND DELETED = '0') AS `CHANGEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='closed' AND DELETED = '0') AS `CLOSEDSTORYCNT`,
t1.`CODE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`CREATEDVERSION`,
t1.`DELETED`,
t1.`DESC`,
(select count(1) from zt_doc t where t.product = t1.id and t.deleted = '0') AS `DOCCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='draft' AND DELETED = '0') AS `DRAFTSTORYCNT`,
t1.`ID`,
'0' AS `ISTOP`,
t1.`LINE`,
t11.`NAME` AS `LINENAME`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`PO`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
t1.`QD`,
t1.`RD`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RELATEDBUGCNT`,
(select count(1) from zt_projectproduct t inner join zt_project t2 on t2.id = t.project where t.product = t1.id and t2.deleted = '0') AS `RELATEDPROJECTS`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`,
t1.`WHITELIST`
FROM `zt_product` t1 
LEFT JOIN zt_module t11 ON t1.LINE = t11.ID 

WHERE t1.DELETED = '0' 

```

# **产品生命周期**(IBZ_PRODUCTLIFE)

### DEFAULT(DEFAULT)<div id="ProductLife_Default"></div>
```sql
SELECT
t1.`BEGIN`,
t1.`BRANCH`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`END`,
t1.`IBZ_PRODUCTLIFEID`,
t1.`IBZ_PRODUCTLIFENAME`,
t1.`MARKER`,
t1.`PARENT`,
t1.`PRODUCT`,
t1.`TYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`YEAR`
FROM `T_IBZ_PRODUCTLIFE` t1 

```
### 获取产品路线(GetRoadmap)<div id="ProductLife_GetRoadmap"></div>
```sql
SELECT
	*
FROM
	(
		(
			SELECT
				t111.*
			FROM
				(
					SELECT
						CONCAT(
							t1.product,
							'-productplan-',
							t1.id
						) AS ibz_productlifeid,
						CASE
					WHEN t11.title IS NULL THEN
						t1.title
					ELSE
						CONCAT(t11.title, '/', t1.title)
					END AS ibz_productlifename,
					t1.product AS product,
					t1.branch AS branch,
					t1.parent AS parent,
					'productplan' AS type,
					t1.`begin` AS `begin`,
					t1.`end` AS `end`,
					LEFT (t1.`end`, 4) AS `year`,
					null AS marker
				FROM
					zt_productplan t1
				LEFT JOIN zt_productplan t11 ON t1.parent = t11.id
				WHERE
					t1.DELETED = '0'
				AND t1.product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')}
				AND t1.parent != '-1'
				AND (#{srf.datacontext.branch} is null or t1.branch =  #{srf.datacontext.branch})
				AND LEFT (t1.`end`, 4) = ${srfdatacontext('year','{"defname":"year","dename":"IBZ_PRODUCTLIFE"}')}
				) t111,
				(
					SELECT
						(
							CASE
							WHEN max(date) IS NULL THEN
								0
							ELSE
								max(date)
							END
						) AS `lastdata`
					FROM
						zt_release
					WHERE
						DELETED = '0'
					AND product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')}
					AND (#{srf.datacontext.branch} is null or branch =  #{srf.datacontext.branch})
				) t112
			WHERE
				t111.`end` > t112.lastdata
		)
		UNION
			(
				SELECT
					CONCAT(
						t2.product,
						'-release-',
						t2.id
					) AS ibz_productlifeid,
					t2.`name` AS ibz_productlifename,
					t2.product AS product,
					t2.branch AS branch,
					null AS parent,
					'release' AS type,
					null AS `begin`,
					t2.`date` AS `end`,
					LEFT (t2.`date`, 4) AS `year`,
					t2.marker AS marker
				FROM
					zt_release t2
				WHERE
					t2.DELETED = '0'
				AND t2.product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')}
				AND LEFT (t2.`date`, 4) = ${srfdatacontext('year','{"defname":"year","dename":"IBZ_PRODUCTLIFE"}')}
				AND (#{srf.datacontext.branch} is null or t2.branch =  #{srf.datacontext.branch})
			)
	) AS ibz_productlife
ORDER BY
	`end`  ASC
```
### 获取产品路线(GetRoadmapS)<div id="ProductLife_GetRoadmapS"></div>
```sql
SELECT * FROM ( ( SELECT t111.* FROM ( SELECT CONCAT( t1.product, '-productplan-', t1.id ) AS ibz_productlifeid, CASE WHEN t11.title IS NULL THEN t1.title ELSE CONCAT(t11.title, '/', t1.title) END AS ibz_productlifename, t1.product AS product, t1.branch AS branch, t1.parent AS parent, 'productplan' AS type, t1.`begin` AS `begin`, t1.`end` AS `end`, LEFT (t1.`end`, 4) AS `year`, null AS marker FROM zt_productplan t1 LEFT JOIN zt_productplan t11 ON t1.parent = t11.id WHERE t1.DELETED = '0' AND t1.product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')} AND t1.parent != '-1' AND (#{srf.datacontext.branch} is null or t1.branch = #{srf.datacontext.branch}) AND LEFT (t1.`end`, 4) = ${srfdatacontext('year','{"defname":"year","dename":"IBZ_PRODUCTLIFE"}')} ) t111, ( SELECT ( CASE WHEN max(date) IS NULL THEN 0 ELSE max(date) END ) AS `lastdata` FROM zt_release WHERE DELETED = '0' AND product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')} AND (#{srf.datacontext.branch} is null or branch = #{srf.datacontext.branch}) ) t112 WHERE t111.`end` > t112.lastdata ) UNION ( SELECT CONCAT( t2.product, '-release-', t2.id ) AS ibz_productlifeid, t2.`name` AS ibz_productlifename, t2.product AS product, t2.branch AS branch, null AS parent, 'release' AS type, t2.`date` AS `begin`, t2.`date` AS `end`, LEFT (t2.`date`, 4) AS `year`, t2.marker AS marker FROM zt_release t2 WHERE t2.DELETED = '0' AND t2.product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')} AND LEFT (t2.`date`, 4) = ${srfdatacontext('year','{"defname":"year","dename":"IBZ_PRODUCTLIFE"}')} AND (#{srf.datacontext.branch} is null or t2.branch = #{srf.datacontext.branch}) ) ) AS ibz_productlife
```
### 获取路线图年份(RoadMapYear)<div id="ProductLife_RoadMapYear"></div>
```sql
SELECT
	*
FROM
	(
		(
			SELECT DISTINCT
				LEFT (`end`, 4) AS `year`
			FROM
				zt_productplan,
				(
					SELECT
						(
							CASE
							WHEN MIN(LEFT(`date`, 4)) IS NULL THEN
								0
							ELSE
								MIN(LEFT(`date`, 4))
							END
						) AS `minyear`
					FROM
						zt_release
					WHERE
						deleted = '0'
					AND product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')}
					AND (#{srf.datacontext.branch} is null or branch =  #{srf.datacontext.branch})
				) ztr
			WHERE
				deleted = '0'
			AND product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')}
			AND (#{srf.datacontext.branch} is null or branch =  #{srf.datacontext.branch})
			AND LEFT (`end`, 4) < '2030'
			AND LEFT (`end`, 4) > `minyear`
		)
		UNION
			(
				SELECT DISTINCT
					LEFT (`date`, 4) AS `year`
				FROM
					zt_release
				WHERE
					deleted = '0'
				AND product = ${srfdatacontext('product','{"defname":"product","dename":"IBZ_PRODUCTLIFE"}')}
				AND (#{srf.datacontext.branch} is null or branch =  #{srf.datacontext.branch})
			)
	) as ibz_productlife
```
### 默认（全部数据）(VIEW)<div id="ProductLife_View"></div>
```sql
SELECT
t1.`BEGIN`,
t1.`BRANCH`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`END`,
t1.`IBZ_PRODUCTLIFEID`,
t1.`IBZ_PRODUCTLIFENAME`,
t1.`MARKER`,
t1.`PARENT`,
t1.`PRODUCT`,
t1.`TYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`YEAR`
FROM `T_IBZ_PRODUCTLIFE` t1 

```

# **产品线**(IBZ_PRODUCTLINE)

### DEFAULT(DEFAULT)<div id="ProductLine_Default"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`IBZ_PRODUCTLINEID`,
t1.`IBZ_PRODUCTLINENAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_PRODUCTLINE` t1 

```
### 默认（全部数据）(VIEW)<div id="ProductLine_View"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`IBZ_PRODUCTLINEID`,
t1.`IBZ_PRODUCTLINENAME`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_IBZ_PRODUCTLINE` t1 

```

# **需求模块**(IBZ_PRODUCTMODULE)

### BYPATH(BYPATH)<div id="ProductModule_ByPath"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'story' ) 
FIND_IN_SET (${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_PRODUCTMODULE"}')}, t1.`PATH`) 

```
### DEFAULT(DEFAULT)<div id="ProductModule_Default"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'story' ) 

```
### 父模块(ParentModule)<div id="ProductModule_ParentModule"></div>
```sql
SELECT
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`GRADE`,
	t1.`ID`,
	( CASE WHEN EXISTS ( SELECT 1 FROM ZT_MODULE WHERE PARENT = t1.`ID` ) THEN FALSE ELSE TRUE END ) AS `ISLEAF`,
	CONCAT(
	'/',
	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t1.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	) 
	) AS `NAME`,
	t1.`ORDER`,
	t1.`OWNER`,
	t1.`PARENT`,
	t21.`NAME` AS `PARENTNAME`,
	t1.`PATH`,
	t1.`ROOT`,
	t11.`NAME` AS `ROOTNAME`,
	t1.`SHORT`,
	t1.`TYPE` 
FROM
	`zt_module` t1
	LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID
	LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID
WHERE t1.type = 'story' 
t1.id <> #{srf.webcontext.id} and find_in_set(#{srf.webcontext.id},t1.path) = 0 
t1.DELETED = '0' 

```
### 根模块(ROOT)<div id="ProductModule_Root"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'story'  AND  ( t1.`PARENT` IS NULL  OR  t1.`PARENT` = 0 ) ) 

```
### 根模块_无分支(Root_NoBranch)<div id="ProductModule_Root_NoBranch"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'story'  AND  t1.`BRANCH` = 0  AND  ( t1.`PARENT` IS NULL  OR  t1.`PARENT` = 0 ) ) 

```
### StoryModule(StoryModule)<div id="ProductModule_StoryModule"></div>
```sql
SELECT
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`GRADE`,
	t1.`ID`,
	( CASE WHEN EXISTS ( SELECT 1 FROM ZT_MODULE WHERE PARENT = t1.`ID` ) THEN FALSE ELSE TRUE END ) AS `ISLEAF`,
	CONCAT('/',(select GROUP_CONCAT(tt.name SEPARATOR '/') from zt_module tt where FIND_IN_SET(tt.id,t1.path) and tt.type = 'story' GROUP BY tt.root)) as `NAME`,
	t1.`ORDER`,
	t1.`OWNER`,
	t1.`PARENT`,
	t21.`NAME` AS `PARENTNAME`,
	t1.`PATH`,
	t1.`ROOT`,
	t11.`NAME` AS `ROOTNAME`,
	t1.`SHORT`,
	t1.`TYPE` 
FROM
	`zt_module` t1
	LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID
	LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID
WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'story' ) 

```
### 默认（全部数据）(VIEW)<div id="ProductModule_View"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`COLLECTOR`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'story' ) 

```

# **产品计划**(ZT_PRODUCTPLAN)

### DEFAULT(DEFAULT)<div id="ProductPlan_Default"></div>
```sql
SELECT
t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
t1.`BRANCH`,
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0')) AS `BUGCNT`,
t1.`DELETED`,
t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ) AS `ESTIMATECNT`,
(case when t1.`begin` = '2030-01-01' or t1.`end` = '2030-01-01' then 'on' else '' end) AS `FUTURE`,
t1.`ID`,
(case when t1.`end` > now() then '0' else '1' end) AS `ISEXPIRED`,
t1.`PARENT`,
t11.`TITLE` AS `PARENTNAME`,
t1.`PRODUCT`,
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end) AS `STATUSS`,
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )) AS `STORYCNT`,
t1.`TITLE`
FROM `zt_productplan` t1 
LEFT JOIN zt_productplan t11 ON t1.PARENT = t11.ID 

WHERE t1.DELETED = '0' 

```
### 默认查询(DefaultParent)<div id="ProductPlan_DefaultParent"></div>
```sql
SELECT
t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
t1.`BRANCH`,
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0')) AS `BUGCNT`,
t1.`DELETED`,
t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ) AS `ESTIMATECNT`,
(case when t1.`begin` = '2030-01-01' or t1.`end` = '2030-01-01' then 'on' else '' end) AS `FUTURE`,
t1.`ID`,
(case when t1.`end` > now() then '0' else '1' end) AS `ISEXPIRED`,
t1.`PARENT`,
t11.`TITLE` AS `PARENTNAME`,
t1.`PRODUCT`,
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end) AS `STATUSS`,
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )) AS `STORYCNT`,
t1.`TITLE`
FROM `zt_productplan` t1 
LEFT JOIN zt_productplan t11 ON t1.PARENT = t11.ID 

WHERE t1.DELETED = '0' 
( ( t1.`PARENT` <= 0 ) ) 

```
### 获取产品计划列表(GetList)<div id="ProductPlan_GetList"></div>
```sql
SELECT
t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
t1.`BRANCH`,
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0')) AS `BUGCNT`,
t1.`DELETED`,
t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ) AS `ESTIMATECNT`,
(case when t1.`begin` = '2030-01-01' or t1.`end` = '2030-01-01' then 'on' else '' end) AS `FUTURE`,
t1.`ID`,
(case when t1.`end` > now() then '0' else '1' end) AS `ISEXPIRED`,
t1.`PARENT`,
t11.`TITLE` AS `PARENTNAME`,
t1.`PRODUCT`,
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end) AS `STATUSS`,
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )) AS `STORYCNT`,
t1.`TITLE`
FROM `zt_productplan` t1 
LEFT JOIN zt_productplan t11 ON t1.PARENT = t11.ID 

WHERE t1.DELETED = '0' 
( ( t1.`PRODUCT` = ${srfdatacontext('product','{"defname":"PRODUCT","dename":"ZT_PRODUCTPLAN"}')}  OR  t1.`PRODUCT` = ${srfdatacontext('products','{"defname":"PRODUCT","dename":"ZT_PRODUCTPLAN"}')} ) ) 

```
### 计划（代码表）(PlanCodeList)<div id="ProductPlan_PlanCodeList"></div>
```sql
select t1.* from ( SELECT
t1.`ID`,
t1.`TITLE`,
t1.product,
t1.parent
FROM `zt_productplan` t1 
UNION
SELECT
0 as `ID`,
'未计划' as `TITLE`,
0 as product,
0 as parent
FROM dual  ) t1
```
### 项目计划列表(ProjectPlan)<div id="ProductPlan_ProjectPlan"></div>
```sql
SELECT
	t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
	t1.`ID`,
	t1.`PARENT`,
	t11.`TITLE` AS `PARENTNAME`,
	t1.`PRODUCT`,
	(CONCAT(t31.`name`,'/',t1.title,'[',case when t1.`begin` is not null then t1.`begin` else '' end,'~',case when t1.`end` is not null then t1.`end` else '' end,']')) as `TITLE` 
FROM
	`zt_productplan` t1
	LEFT JOIN zt_productplan t11 ON t1.PARENT = t11.ID
	LEFT JOIN zt_product t31 ON t1.product = t31.id 
	LEFT JOIN zt_projectproduct t21 ON t31.id = t21.product and t1.id = t21.plan
WHERE ( t21.`PROJECT` = ${srfdatacontext('srfparentkey','{"defname":"PROJECT","dename":"ZT_PROJECTPRODUCT"}')} ) 
t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="ProductPlan_View"></div>
```sql
SELECT
t1.`BEGIN`,
(case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end) AS `BEGINSTR`,
t1.`BRANCH`,
((select count(t.id) FROM zt_bug t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0')) AS `BUGCNT`,
t1.`DELETED`,
t1.`DESC`,
t1.`END`,
(case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end) AS `ENDSTR`,
(select sum(t.estimate) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' ) AS `ESTIMATECNT`,
(case when t1.`begin` = '2030-01-01' or t1.`end` = '2030-01-01' then 'on' else '' end) AS `FUTURE`,
t1.`ID`,
(case when t1.`end` > now() then '0' else '1' end) AS `ISEXPIRED`,
t1.`ORDER`,
t1.`PARENT`,
t11.`TITLE` AS `PARENTNAME`,
t1.`PRODUCT`,
(case when t1.parent = -1 then 'parent' when t1.parent > 0 then  'chlid' else 'normal' end) AS `STATUSS`,
((select COUNT(t.id) from zt_story t where (t.plan = t1.id or (t.plan in (select t2.id from zt_productplan t2 where t2.parent = t1.id and t2.deleted = '0')) )  and t.deleted = '0' )) AS `STORYCNT`,
t1.`TITLE`
FROM `zt_productplan` t1 
LEFT JOIN zt_productplan t11 ON t1.PARENT = t11.ID 

WHERE t1.DELETED = '0' 

```

# **产品统计**(IBZ_PRODUCTSTATS)

### DEFAULT(DEFAULT)<div id="ProductStats_Default"></div>
```sql
SELECT
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVESTORYCNT`,
	1 AS `ASSIGNTOMEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	t1.`CODE`,
	(
SELECT
	t.NAME 
FROM
	zt_project t,
	zt_projectproduct t2 
WHERE
	t.id = t2.project 
	AND t2.product = t1.id 
	LIMIT 1 
	) AS `CURRPROJECT`,
	t1.`DELETED`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'developing' AND DELETED = '0' ) AS `DEVELOPINGSTORYCNT`,
	t1.`ID`,
	t1.`NAME`,
	( SELECT COUNT( 1 ) FROM ZT_RELEASE WHERE PRODUCT = t1.`ID` AND `STATUS` = 'normal' AND DELETED = '0' ) AS `NORMALRELEASECNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `NOTCLOSEDBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'planned' AND DELETED = '0' ) AS `PLANNEDSTORYCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_PROJECT t2
	LEFT JOIN ZT_PROJECTPRODUCT t ON t2.ID = t.project 
WHERE
	t.PRODUCT = t1.id 
	AND t2.DELETED = '0' 
	AND t2.`status` IN ( 'wait', 'doing' ) 
	AND t2.`END` < now( ) 
	) AS `POSTPONEDPROJECTCNT`,
	( SELECT COUNT( 1 ) FROM ZT_PRODUCTPLAN WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `PRODUCTPLANCNT`,
	( SELECT COUNT( 1 ) FROM ZT_RELEASE WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `RELEASECNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'released' AND DELETED = '0' ) AS `RELEASEDSTORYCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_PROJECT
	LEFT JOIN ZT_PROJECTPRODUCT ON ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project 
WHERE
	PRODUCT = t1.`ID` 
	AND DELETED = '0' 
	) AS `RESPROJECTCNT`,
	t1.`STATUS`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `STORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'testing' AND DELETED = '0' ) AS `TESTINGSTORYCNT`,
	t1.`TYPE`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_PROJECT
	LEFT JOIN ZT_PROJECTPRODUCT ON ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project 
WHERE
	PRODUCT = t1.`ID` 
	AND `STATUS` <> 'closed' 
	AND DELETED = '0' 
	) AS `UNDONERESPROJECTCNT`,
	( SELECT COUNT( 1 ) FROM ZT_PRODUCTPLAN WHERE PRODUCT = t1.`ID` AND `END` > CURDATE( ) AND DELETED = '0' ) AS `UNENDPRODUCTPLANCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'wait' AND DELETED = '0' ) AS `WAITSTORYCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PRODUCT = t1.`ID` 
	AND DELETED = '0' 
	AND resolvedDate BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYCLOSEDBUGCNT`,
	5 AS `YESTERDAYCONFIRMBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PRODUCT = t1.`ID` 
	AND `STATUS` = 'closed' 
	AND DELETED = '0' 
	AND CLOSEDDATE BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYRESOLVEDBUGCNT` ,
		(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`
FROM
	`zt_product` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'product' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
WHERE t1.DELETED = '0' 
(t1.id IN (
SELECT
	t.product 
FROM
	zt_projectproduct t 
WHERE
	t.project IN (
SELECT
	t3.root 
FROM
	zt_team t3 
WHERE
	t3.account = #{srf.sessioncontext.srfloginname} 
	AND t3.type = 'project' 
	) 
	) or  t1.acl = 'open') 

```
### 未关闭产品(NoOpenProduct)<div id="ProductStats_NoOpenProduct"></div>
```sql
SELECT
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVESTORYCNT`,
	1 AS `ASSIGNTOMEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	t1.`CODE`,
	(
SELECT
	t.NAME 
FROM
	zt_project t,
	zt_projectproduct t2 
WHERE
	t.id = t2.project 
	AND t2.product = t1.id 
	LIMIT 1 
	) AS `CURRPROJECT`,
	t1.`DELETED`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'developing' AND DELETED = '0' ) AS `DEVELOPINGSTORYCNT`,
	t1.`ID`,
	t1.`NAME`,
	( SELECT COUNT( 1 ) FROM ZT_RELEASE WHERE PRODUCT = t1.`ID` AND `STATUS` = 'normal' AND DELETED = '0' ) AS `NORMALRELEASECNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `NOTCLOSEDBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'planned' AND DELETED = '0' ) AS `PLANNEDSTORYCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_PROJECT t2
	LEFT JOIN ZT_PROJECTPRODUCT t ON t2.ID = t.project 
WHERE
	t.PRODUCT = t1.id 
	AND t2.DELETED = '0' 
	AND t2.`status` IN ( 'wait', 'doing' ) 
	AND t2.`END` < now( ) 
	) AS `POSTPONEDPROJECTCNT`,
	( SELECT COUNT( 1 ) FROM ZT_PRODUCTPLAN WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `PRODUCTPLANCNT`,
	( SELECT COUNT( 1 ) FROM ZT_RELEASE WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `RELEASECNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'released' AND DELETED = '0' ) AS `RELEASEDSTORYCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_PROJECT
	LEFT JOIN ZT_PROJECTPRODUCT ON ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project 
WHERE
	PRODUCT = t1.`ID` 
	AND DELETED = '0' 
	) AS `RESPROJECTCNT`,
	t1.`STATUS`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND DELETED = '0' ) AS `STORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'testing' AND DELETED = '0' ) AS `TESTINGSTORYCNT`,
	t1.`TYPE`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_PROJECT
	LEFT JOIN ZT_PROJECTPRODUCT ON ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project 
WHERE
	PRODUCT = t1.`ID` 
	AND `STATUS` <> 'closed' 
	AND DELETED = '0' 
	) AS `UNDONERESPROJECTCNT`,
	( SELECT COUNT( 1 ) FROM ZT_PRODUCTPLAN WHERE PRODUCT = t1.`ID` AND `END` > CURDATE( ) AND DELETED = '0' ) AS `UNENDPRODUCTPLANCNT`,
	( SELECT COUNT( 1 ) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'wait' AND DELETED = '0' ) AS `WAITSTORYCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PRODUCT = t1.`ID` 
	AND DELETED = '0' 
	AND resolvedDate BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYCLOSEDBUGCNT`,
	5 AS `YESTERDAYCONFIRMBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PRODUCT = t1.`ID` 
	AND `STATUS` = 'closed' 
	AND DELETED = '0' 
	AND CLOSEDDATE BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYRESOLVEDBUGCNT` ,
		(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`
FROM
	`zt_product` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'product' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
WHERE t1.DELETED = '0' 
( t1.`STATUS` = 'normal' ) 
(t1.id IN (
SELECT
	t.product 
FROM
	zt_projectproduct t 
WHERE
	t.project IN (
SELECT
	t3.root 
FROM
	zt_team t3 
WHERE
	t3.account = #{srf.sessioncontext.srfloginname} 
	AND t3.type = 'project' 
	) 
	) or  t1.acl = 'open') 

```
### 默认（全部数据）(VIEW)<div id="ProductStats_View"></div>
```sql
SELECT
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'active' AND DELETED ='0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND `STATUS`='active' AND DELETED = '0') AS `ACTIVESTORYCNT`,
1 AS `ASSIGNTOMEBUGCNT`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
t1.`CODE`,
(SELECT t.name FROM zt_project t,zt_projectproduct t2 WHERE t.id=t2.project and t2.product = t1.id limit 1) AS `CURRPROJECT`,
t1.`DELETED`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'developing' AND DELETED = '0') AS `DEVELOPINGSTORYCNT`,
t1.`ID`,
t1.`NAME`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND  `STATUS`= 'normal' AND DELETED = '0') AS `NORMALRELEASECNT`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `NOTCLOSEDBUGCNT`,
t1.`order` AS `ORDER1`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'planned' AND DELETED ='0') AS `PLANNEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_PROJECT t2 LEFT JOIN ZT_PROJECTPRODUCT t ON t2.ID = t.project WHERE t.PRODUCT = t1.id AND t2.DELETED = '0' and t2.`status` in( 'wait','doing') and t2.`END` < now() ) AS `POSTPONEDPROJECTCNT`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `PRODUCTPLANCNT`,
(SELECT COUNT(1) FROM ZT_RELEASE WHERE PRODUCT= t1.`ID` AND DELETED = '0') AS `RELEASECNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'released' AND DELETED = '0') AS `RELEASEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_PROJECT LEFT JOIN ZT_PROJECTPRODUCT ON  ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `RESPROJECTCNT`,
t1.`STATUS`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'testing' AND DELETED = '0') AS `TESTINGSTORYCNT`,
t1.`TYPE`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMBUGCNT`,
(SELECT COUNT(1) FROM ZT_PROJECT LEFT JOIN ZT_PROJECTPRODUCT ON  ZT_PROJECT.ID = ZT_PROJECTPRODUCT.project WHERE PRODUCT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `UNDONERESPROJECTCNT`,
(SELECT COUNT(1) FROM ZT_PRODUCTPLAN WHERE PRODUCT= t1.`ID`  AND `END` > CURDATE() AND DELETED = '0') AS `UNENDPRODUCTPLANCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE PRODUCT = t1.`ID` AND STAGE = 'wait' AND DELETED = '0') AS `WAITSTORYCNT`,
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID`  AND DELETED = '0' and resolvedDate BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59')) AS `YESTERDAYCLOSEDBUGCNT`,
5 AS `YESTERDAYCONFIRMBUGCNT`,
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PRODUCT = t1.`ID` AND `STATUS` = 'closed' AND DELETED = '0' and CLOSEDDATE BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59')) AS `YESTERDAYRESOLVEDBUGCNT`
FROM `zt_product` t1 

WHERE t1.DELETED = '0' 

```

# **产品汇总表**(IBZ_PRODUCTSUM)

### 数据查询(DEFAULT)<div id="ProductSum_Default"></div>
```sql
select t1.*  from(select 
t1.id,t1.`NAME`,t1.po,t1.PLAN, case when t1.`begin` = '2030-01-01' then '待定' else t1.`begin` end as `begin`,case when t1.`end` = '2030-01-01' then '待定' else t1.`end` end as `end`,
	sum( IF ( t1.`status` = 'draft', t1.rowcnt, 0 ) ) AS WAITSTORYCNT,
	SUM( IF ( t1.`status` = 'active', t1.rowcnt, 0 ) ) AS ACTIVESTORYCNT,
	SUM( IF ( t1.`status` = 'changed', t1.rowcnt, 0 ) ) AS CHANGEDSTORYCNT,
	SUM( IF ( t1.`status` = 'closed', t1.rowcnt, 0 ) ) AS CLOSEDSTORYCNT,
	sum( IF ( t1.`deleted` = '0',  t1.rowcnt, 0) ) AS STORYCNT 
FROM
	(
	SELECT
		1 AS rowcnt,
	t41.id as plan,
		t31.`NAME` AS `NAME`,
		t31.id AS id,
		t1.`status`,
		t31.po,
		t41.`begin`,
		t41.`end` ,
		t1.deleted
	FROM
		zt_product t31
		LEFT JOIN ZT_PRODUCTPLAN t41 ON t41.PRODUCT = t31.ID
		LEFT JOIN  `zt_story` t1  ON t41.id = t1.plan 
where t31.deleted = '0' and  (
			( ( t31.`status` = 'normal' ) OR ( t31.`status` = 'closed' AND #{srf.datacontext.closed} = '1' ) ) 
			and ( t41.id is null or
				( t41.`end` >= now( ) ) 
				OR ( t41.`end` <= now( ) AND #{srf.datacontext.expired} = '1' ) 
			) 
		)
) t1 GROUP BY t1.id,t1.`NAME`,t1.po,t1.PLAN,t1.`begin`,t1.`end`) t1
```
### 产品创建bug数_测试人员(ProductBugcnt_QA)<div id="ProductSum_ProductBugcnt_QA"></div>
```sql
SELECT t1.productid as id,t1.productname as `name`,t1.createbugcnt as bugcnt,t1.createbugcnt as storycnt,t2.productallbug, CONCAT(ROUND(t1.createbugcnt/(case when t2.productallbug = 0 or t2.productallbug is null then 1 else t2.productallbug end)*100,1),'%') as zhanbi, t1.openedBy from (
SELECT t1.openedBy,t1.productid,t1.productname,COUNT(1) as createbugcnt from (
SELECT t1.id ,t1.openedBy,t2.id as productid,t1.product,t2.`name` as productname from zt_bug t1
LEFT JOIN zt_product t2 on t2.id = t1.product where YEAR(t2.createdDate) = #{srf.webcontext.curyear}
) t1 GROUP BY t1.openedBy,t1.productid  )t1
LEFT JOIN ( select t1.productid,t1.productname,count(1) as productallbug from (
SELECT t1.id ,t1.openedBy,t2.id as productid,t1.product,t2.`name` as productname from zt_bug t1
LEFT JOIN zt_product t2 on t2.id = t1.product
) t1 GROUP BY t1.productid ) t2 on t2.productid = t1.productid HAVING t1.openedBy = 
 #{srf.sessioncontext.srfloginname}
```
### 产品创建需求占比(ProductCreateStory)<div id="ProductSum_ProductCreateStory"></div>
```sql
	SELECT
0 AS `ACTIVESTORYCNT`,
0 AS `CHANGEDSTORYCNT`,
0 AS `CLOSEDSTORYCNT`,
t1.`ID`,
t1.`NAME`,
0 AS `PLAN`,
t1.`PO`,
t2.storycnt AS `STORYCNT`,
0 AS `WAITSTORYCNT`,
t2.zhanbi
FROM `zt_product` t1

INNER JOIN (
SELECT t1.*,IFNULL(t2.storycnt,0) as storycnt,IFNULL(t2.allstorycnt,0) as allstorycnt,IFNULL(t2.zhanbi,0) as zhanbi from (
SELECT t1.id,t1.`name`,t1.`status` from zt_product t1 where t1.id in (SELECT t1.id from zt_product t1 where YEAR(t1.createddate) =   #{srf.webcontext.curyear} 
and (t1.createdBy =  #{srf.sessioncontext.srfloginname} 
or t1.po =  #{srf.sessioncontext.srfloginname} 
or t1.QD =  #{srf.sessioncontext.srfloginname} 
or t1.RD =  #{srf.sessioncontext.srfloginname} )) 
or t1.id in (SELECT DISTINCT t1.product from zt_story t1 where t1.openedBy =  #{srf.sessioncontext.srfloginname} 
and YEAR(t1.openeddate) =   #{srf.webcontext.curyear}) 
or t1.id in (SELECT DISTINCT t1.product from zt_productplan t1 LEFT JOIN zt_action t2 on t1.id = t2.OBJECTID and t2.objectType = 'productplan' where YEAR(t2.date) =   #{srf.webcontext.curyear} 
and t2.actor =  #{srf.sessioncontext.srfloginname} 
and t2.action = 'opened' ) ) t1

LEFT JOIN (
select t1.*,t2.allstorycnt , CONCAT(ROUND(t1.storycnt/(case when t2.allstorycnt = 0 or t2.allstorycnt is null then 1 else t2.allstorycnt end)*100,1),'%') as zhanbi from
(SELECT t1.openedBy,t1.productid,t1.productname,COUNT(1) as storycnt from (
SELECT t1.id,t1.openedBy,t2.id as productid ,t2.`name` as productname from zt_story t1 LEFT JOIN zt_product t2 on t2.id = t1.product) t1 GROUP BY t1.openedBy,t1.productid ) t1
LEFT JOIN (select t1.productid,t1.productname,COUNT(1) as allstorycnt from (
SELECT t1.id,t1.openedBy,t2.id as productid ,t2.`name` as productname from zt_story t1 LEFT JOIN zt_product t2 on t2.id = t1.product ) t1 GROUP BY t1.productid) t2 on t2.productid = t1.productid

having t1.openedBy =  #{srf.sessioncontext.srfloginname}
) t2 on t1.id = t2.productid
) t2 on t1.id = t2.id
```
### 产品计划数和需求数_产品经理(ProductPlancntAndStorycnt_PO)<div id="ProductSum_ProductPlancntAndStorycnt_PO"></div>
```sql
SELECT 0 AS `ACTIVESTORYCNT`, 0 AS `CHANGEDSTORYCNT`, 0 AS `CLOSEDSTORYCNT`, t1.`ID`, t1.`NAME`, t2.plan AS `PLAN`, t1.`PO`, t2.storycnt AS `STORYCNT`, t2.plan AS `WAITSTORYCNT`, t2.zhanbi FROM `zt_product` t1 INNER JOIN ( SELECT t1.*,IFNULL(t2.storycnt,0) as storycnt,IFNULL(t2.allstorycnt,0) as allstorycnt,IFNULL(t2.zhanbi,0) as zhanbi,IFNULL(t3.plancnt,0) as plan from ( SELECT t1.id,t1.`name`,t1.`status` from zt_product t1 where t1.id in (SELECT t1.id from zt_product t1 where YEAR(t1.createddate) =   #{srf.webcontext.curyear}  and (t1.createdBy = #{srf.sessioncontext.srfloginname} or t1.po = #{srf.sessioncontext.srfloginname} or t1.QD = #{srf.sessioncontext.srfloginname} or t1.RD = #{srf.sessioncontext.srfloginname} )) or t1.id in (SELECT DISTINCT t1.product from zt_story t1 where t1.openedBy = #{srf.sessioncontext.srfloginname} and YEAR(t1.openeddate) =   #{srf.webcontext.curyear} ) or t1.id in (SELECT DISTINCT t1.product from zt_productplan t1 LEFT JOIN zt_action t2 on t1.id = t2.OBJECTID and t2.objectType = 'productplan' where YEAR(t2.date) =   
#{srf.webcontext.curyear}  and t2.actor = #{srf.sessioncontext.srfloginname} and t2.action = 'opened' ) ) t1 LEFT JOIN ( select t1.*,t2.allstorycnt , CONCAT(ROUND(t1.storycnt/(case when t2.allstorycnt = 0 or t2.allstorycnt is null then 1 else t2.allstorycnt end)*100,1),'%') as zhanbi from (SELECT t1.openedBy,t1.productid,t1.productname,COUNT(1) as storycnt from ( SELECT t1.id,t1.openedBy,t2.id as productid ,t2.`name` as productname from zt_story t1 LEFT JOIN zt_product t2 on t2.id = t1.product) t1 GROUP BY t1.openedBy,t1.productid ) t1 LEFT JOIN (select t1.productid,t1.productname,COUNT(1) as allstorycnt from ( SELECT t1.id,t1.openedBy,t2.id as productid ,t2.`name` as productname from zt_story t1 LEFT JOIN zt_product t2 on t2.id = t1.product ) t1 GROUP BY t1.productid) t2 on t2.productid = t1.productid having t1.openedBy = #{srf.sessioncontext.srfloginname} ) t2 on t1.id = t2.productid LEFT JOIN ( SELECT t1.productid,t1.productname,count(1) as plancnt from ( select t1.id,t2.id as productid,t2.`name` as productname from zt_productplan t1 LEFT JOIN zt_product t2 on t2.id = t1.product where t1.parent >= 0 and t1.`begin` >= (CONCAT( YEAR(NOW()),'-01-01',' 00:00:00')) and t1.`end` <= (CONCAT( YEAR(NOW()),'-12-31',' 23:59:59')) and t1.parent >= '0' ) t1 GROUP BY t1.productid ) t3 on t3.productid = t1.id ) t2 on t2.id = t1.id
```
### 默认（全部数据）(VIEW)<div id="ProductSum_View"></div>
```sql
SELECT
0 AS `ACTIVESTORYCNT`,
0 AS `BUGCNT`,
0 AS `CHANGEDSTORYCNT`,
0 AS `CLOSEDSTORYCNT`,
t1.`ID`,
t1.`NAME`,
0 AS `PLAN`,
t1.`PO`,
0 AS `STORYCNT`,
0 AS `WAITSTORYCNT`
FROM `zt_product` t1 

```

# **项目**(ZT_PROJECT)

### Bug表单中可选的项目列表(BugSelectableProjectList)<div id="Project_BugSelectableProjectList"></div>
```sql
SELECT
t1.`ACL`,
t1.`BEGIN`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CATID`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CODE`,
t1.`DAYS`,
t1.`DELETED`,
t1.`END`,
t1.`ID`,
t1.`ISCAT`,
'0' AS `ISTOP`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OPENEDVERSION`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PM`,
t1.`PO`,
t1.`PRI`,
t1.`QD`,
t1.`RD`,
t1.`STATGE`,
t1.`STATUS`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
t1.`SUBSTATUS`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `TASKCNT`,
t1.`TEAM`,
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALCONSUMED`,
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALESTIMATE`,
(select sum(days * hours)  from zt_team tt where type = 'project' and root = t1.id) AS `TOTALHOURS`,
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' and `status` in ('doing','wait','pause') AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALLEFT`,
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) AND `status` in ('doing','wait','pause')) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ))) AS `TOTALWH`,
t1.`TYPE`
FROM `zt_project` t1 
LEFT JOIN zt_project t11 ON t1.PARENT = t11.ID 
LEFT OUTER JOIN zt_projectproduct t21 ON t1.ID = t21.PROJECT 

WHERE ( ( ${srfwebcontext('product','{"defname":"PRODUCT","dename":"ZT_PROJECTPRODUCT"}')} is null  OR  t21.`PRODUCT` = ${srfwebcontext('product','{"defname":"PRODUCT","dename":"ZT_PROJECTPRODUCT"}')} ) ) 
t1.DELETED = '0' 

```
### 当前项目(CurProduct)<div id="Project_CurProduct"></div>
```sql
SELECT
t1.`ACL`,
t1.`BEGIN`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CATID`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CODE`,
t1.`DAYS`,
t1.`DELETED`,
t1.`END`,
t1.`ID`,
t1.`ISCAT`,
'0' AS `ISTOP`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OPENEDVERSION`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PM`,
t1.`PO`,
t1.`PRI`,
t1.`QD`,
t1.`RD`,
t1.`STATGE`,
t1.`STATUS`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
t1.`SUBSTATUS`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `TASKCNT`,
t1.`TEAM`,
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALCONSUMED`,
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALESTIMATE`,
(select sum(days * hours)  from zt_team tt where type = 'project' and root = t1.id) AS `TOTALHOURS`,
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' and `status` in ('doing','wait','pause') AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALLEFT`,
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) AND `status` in ('doing','wait','pause')) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ))) AS `TOTALWH`,
t1.`TYPE`
FROM `zt_project` t1 
LEFT JOIN zt_project t11 ON t1.PARENT = t11.ID 

WHERE EXISTS(SELECT * FROM zt_projectproduct t21 
 WHERE 
 t1.ID = t21.PROJECT  AND  ( t21.`PRODUCT` = ${srfdatacontext('n_product_eq','{"defname":"PRODUCT","dename":"ZT_PROJECTPRODUCT"}')} ) ) 
t1.DELETED = '0' 

```
### 当前用户项目(CurUser)<div id="Project_CurUser"></div>
```sql
select t1.* from (SELECT
t1.`ACL`,
t1.`BEGIN`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CATID`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CODE`,
t1.`DAYS`,
t1.`DELETED`,
t1.`END`,
t1.`ID`,
t1.`ISCAT`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OPENEDVERSION`,
t1.`ORDER`,
(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PM`,
t1.`PO`,
t1.`PRI`,
t1.`QD`,
t1.`RD`,
t1.`STATGE`,
t1.`STATUS`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
t1.`SUBSTATUS`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `TASKCNT`,
t1.`TEAM`,
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALCONSUMED`,
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALESTIMATE`,
(select sum(days * hours)  from zt_team tt where type = 'project' and root = t1.id) AS `TOTALHOURS`,
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' and `status` in ('doing','wait','pause') AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALLEFT`,
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) AND `status` in ('doing','wait','pause')) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ))) AS `TOTALWH`,
t1.`TYPE`
FROM `zt_project` t1 
left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'project' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
LEFT JOIN zt_project t11 ON t1.PARENT = t11.ID 
where t1.deleted = '0' and (t1.acl = 'open' or t1.OPENEDBY = #{srf.sessioncontext.srfloginname} or  t1.pm =  #{srf.sessioncontext.srfloginname} or t1.PO = #{srf.sessioncontext.srfloginname} or t1.RD = #{srf.sessioncontext.srfloginname} or t1.QD =  #{srf.sessioncontext.srfloginname} )
union 
SELECT
t1.`ACL`,
t1.`BEGIN`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CATID`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CODE`,
t1.`DAYS`,
t1.`DELETED`,
t1.`END`,
t1.`ID`,
t1.`ISCAT`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OPENEDVERSION`,
t1.`ORDER`,
(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PM`,
t1.`PO`,
t1.`PRI`,
t1.`QD`,
t1.`RD`,
t1.`STATGE`,
t1.`STATUS`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
t1.`SUBSTATUS`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `TASKCNT`,
t1.`TEAM`,
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALCONSUMED`,
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALESTIMATE`,
(select sum(days * hours)  from zt_team tt where type = 'project' and root = t1.id) AS `TOTALHOURS`,
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' and `status` in ('doing','wait','pause') AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALLEFT`,
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) AND `status` in ('doing','wait','pause')) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ))) AS `TOTALWH`,
t1.`TYPE`
FROM `zt_project` t1 
left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'project' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
LEFT JOIN zt_project t11 ON t1.PARENT = t11.ID 
where t1.deleted = '0' and t1.acl = 'private' and t1.id in (select t3.root from zt_team t3 where t3.account = #{srf.sessioncontext.srfloginname}  
and t3.type = 'project')) t1
```
### DEFAULT(DEFAULT)<div id="Project_Default"></div>
```sql
SELECT
t1.`ACL`,
t1.`BEGIN`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CATID`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CODE`,
t1.`DAYS`,
t1.`DELETED`,
t1.`END`,
t1.`ID`,
t1.`ISCAT`,
'0' AS `ISTOP`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OPENEDVERSION`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PM`,
t1.`PO`,
t1.`PRI`,
t1.`QD`,
t1.`RD`,
t1.`STATGE`,
t1.`STATUS`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
t1.`SUBSTATUS`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `TASKCNT`,
t1.`TEAM`,
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALCONSUMED`,
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALESTIMATE`,
(select sum(days * hours)  from zt_team tt where type = 'project' and root = t1.id) AS `TOTALHOURS`,
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' and `status` in ('doing','wait','pause') AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALLEFT`,
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) AND `status` in ('doing','wait','pause')) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ))) AS `TOTALWH`,
t1.`TYPE`
FROM `zt_project` t1 
LEFT JOIN zt_project t11 ON t1.PARENT = t11.ID 

WHERE t1.DELETED = '0' 

```
### 参与项目(年度总结)(InvolvedProject)<div id="Project_InvolvedProject"></div>
```sql
 SELECT
t1.`ACL`,
t1.`BEGIN`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CATID`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CODE`,
t1.`DAYS`,
t1.`DELETED`,
t1.`END`,
t1.`ID`,
t1.`ISCAT`,
'0' AS `ISTOP`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OPENEDVERSION`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PM`,
t1.`PO`,
t1.`PRI`,
t1.`QD`,
t1.`RD`,
t1.`STATGE`,
CASE 
	WHEN t1.`STATUS` = 'wait' THEN
		'doing'
	ELSE
		t1.`STATUS`
END  as `STATUS`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
t1.`SUBSTATUS`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `TASKCNT`,
t1.`TEAM`,
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALCONSUMED`,
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALESTIMATE`,
(select sum(days * hours)  from zt_team tt where type = 'project' and root = t1.id) AS `TOTALHOURS`,
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' and `status` in ('doing','wait','pause') AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALLEFT`,
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) AND `status` in ('doing','wait','pause')) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ))) AS `TOTALWH`,
t1.`TYPE`
FROM `zt_project` t1 
LEFT JOIN zt_project t11 ON t1.PARENT = t11.ID 
where t1.id in ( SELECT t1.id from zt_project t1 where (YEAR(t1.`begin`) <= #{srf.webcontext.curyear} 
and YEAR(t1.`end`) >= 
#{srf.webcontext.curyear}
) and ( t1.openedBy = #{srf.sessioncontext.srfloginname}
or t1.PO =#{srf.sessioncontext.srfloginname} 
or t1.PM =#{srf.sessioncontext.srfloginname}
or t1.QD =#{srf.sessioncontext.srfloginname} 
or t1.RD =#{srf.sessioncontext.srfloginname}
) ) or t1.id in ( select t1.root from zt_team t1 where t1.type = 'project' and t1.account =#{srf.sessioncontext.srfloginname} 
and 
YEAR(t1.`join`) = #{srf.webcontext.curyear} 
) or t1.id in  (SELECT DISTINCT t1.project from zt_task t1 LEFT JOIN zt_action t2 on t1.id = t2.OBJECTID and t2.objectType = 'task' where t2.actor = #{srf.sessioncontext.srfloginname}
and t2.action = 'finished' and left(t2.date,4) = #{srf.webcontext.curyear} 
)

```
### 参与项目完成需求任务bug(InvolvedProject_StoryTaskBug)<div id="Project_InvolvedProject_StoryTaskBug"></div>
```sql
SELECT t1.*,IFNULL(t2.storycnt,0) as storycnt,IFNULL(t3.taskcnt,0) as ycompletetaskcnt,IFNULL(t4.bugcnt,0) as bugcnt from (
select  t1.id,t1.`name`  from zt_project t1 where t1.id in ( SELECT t1.id from zt_project t1 where (YEAR(t1.`begin`) <= #{srf.webcontext.curyear} 
and YEAR(t1.`end`) >=#{srf.webcontext.curyear} ) and ( t1.openedBy =#{srf.sessioncontext.srfloginname}
or t1.PO =#{srf.sessioncontext.srfloginname} 
or t1.PM =#{srf.sessioncontext.srfloginname}
or t1.QD = #{srf.sessioncontext.srfloginname} 
or t1.RD = #{srf.sessioncontext.srfloginname}
) ) or t1.id in ( select t1.root from zt_team t1 where t1.type = 'project' and t1.account =#{srf.sessioncontext.srfloginname} 
and 
YEAR(t1.`join`) =#{srf.webcontext.curyear} 
) or t1.id in  (SELECT DISTINCT t1.project from zt_task t1 LEFT JOIN zt_action t2 on t1.id = t2.OBJECTID and t2.objectType = 'task' where t2.actor =#{srf.sessioncontext.srfloginname}

and t2.action = 'finished' and left(t2.date,4) =  #{srf.webcontext.curyear} 
)

) t1 
LEFT JOIN (
SELECT count(1) as storycnt,t1.project from (
select t1.id,t1.`title`,t1.`status`,t2.project from zt_story t1 LEFT JOIN zt_projectstory t2 on t2.story = t1.id 
) t1 GROUP BY t1.project 
) t2 on t2.project = t1.id
LEFT JOIN (
select  t1.project,count(1) as taskcnt from zt_task t1 where  t1.finishedBy = 
#{srf.sessioncontext.srfloginname} 
GROUP 
BY t1.project
) t3 on t3.project = t1.id
LEFT JOIN (
SELECT  t1.project,count(1) as bugcnt from zt_bug t1 where  t1.resolvedBy = 
#{srf.sessioncontext.srfloginname}	
GROUP BY t1.project
) t4 on t4.project = t1.id
```
### 我的项目(MyProject)<div id="Project_MyProject"></div>
```sql
select t1.* from (SELECT
	t1.`ACL`,
	t1.`BEGIN`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	t1.`CANCELEDBY`,
	t1.`CANCELEDDATE`,
	t1.`CATID`,
	t1.`CLOSEDBY`,
	t1.`CLOSEDDATE`,
	t1.`CODE`,
	t1.`DAYS`,
	t1.`DELETED`,
	t1.`END`,
	t1.`ID`,
	t1.`ISCAT`,
	t1.`NAME`,
	t1.`OPENEDBY`,
	t1.`OPENEDDATE`,
	t1.`OPENEDVERSION`,
	t1.`ORDER`,
	t1.`ORDER` AS `ORDER1`,
	t1.`PARENT`,
	t11.`NAME` AS `PARENTNAME`,
	t1.`PM`,
	t1.`PO`,
	t1.`PRI`,
	t1.`QD`,
	t1.`RD`,
	t1.`STATGE`,
	t1.`STATUS`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `STORYCNT`,
	t1.`SUBSTATUS`,
	( SELECT COUNT( 1 ) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `TASKCNT`,
	t1.`TEAM`,
	t1.`TYPE` ,
	t21.role,
	t21.account,
	t21.`join`,
	t21.hours
FROM
	`zt_project` t1
	LEFT JOIN zt_project t11 ON t1.PARENT = t11.ID
	INNER JOIN zt_team t21 on t1.ID = t21.root and t21.type= 'project' ) t1
WHERE t1.DELETED = '0' 

```
### 项目团队(ProjectTeam)<div id="Project_ProjectTeam"></div>
```sql
SELECT
t1.`ACL`,
t1.`BEGIN`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CATID`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CODE`,
t1.`DAYS`,
t1.`DELETED`,
t1.`END`,
t1.`ID`,
t1.`ISCAT`,
'0' AS `ISTOP`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OPENEDVERSION`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PM`,
t1.`PO`,
t1.`PRI`,
t1.`QD`,
t1.`RD`,
t1.`STATGE`,
t1.`STATUS`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
t1.`SUBSTATUS`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `TASKCNT`,
t1.`TEAM`,
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALCONSUMED`,
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALESTIMATE`,
(select sum(days * hours)  from zt_team tt where type = 'project' and root = t1.id) AS `TOTALHOURS`,
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALLEFT`,
((SELECT round(SUM( ESTIMATE ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) ) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) )) AS `TOTALWH`,
t1.`TYPE`
FROM `zt_project` t1 
LEFT JOIN zt_project t11 ON t1.PARENT = t11.ID 
left join zt_team t21 on t1.id = t21.root
WHERE t1.DELETED = '0' 
t21.type = 'project' 
 t21.account = #{srf.sessioncontext.srfloginname} 

```
### 需求影响项目(StoryProject)<div id="Project_StoryProject"></div>
```sql
select concat(t1.`name`, '  ' ,t.ACCOUNTS) accounts,t1.id ,t1.`name`  from zt_project t1 left join (select GROUP_CONCAT(t.realnames Separator ' ') as ACCOUNTS,t.root from (select t.account,t1.realname, CONCAT(UPPER(left(t.account,1)),':',t1.realname) as realnames,t.root from zt_team t left join zt_user t1 on t1.account = t.account where  t.type = 'project' and t1.deleted = '0') t GROUP BY t.root) t on t1.id = t.root
WHERE t1.id in ( select tt.project from zt_task tt where tt.deleted = '0' and tt.story = ${srfdatacontext('story','{"defname":"PRODUCT","dename":"ZT_PROJECTPRODUCT"}')} ) 

```
### 默认（全部数据）(VIEW)<div id="Project_View"></div>
```sql
SELECT
t1.`ACL`,
t1.`BEGIN`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CATID`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CODE`,
t1.`DAYS`,
t1.`DELETED`,
t1.`DESC`,
t1.`END`,
t1.`ID`,
t1.`ISCAT`,
'0' AS `ISTOP`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`OPENEDVERSION`,
t1.`ORDER`,
t1.`order` AS `ORDER1`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PM`,
t1.`PO`,
t1.`PRI`,
t1.`QD`,
t1.`RD`,
t1.`STATGE`,
t1.`STATUS`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
t1.`SUBSTATUS`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `TASKCNT`,
t1.`TEAM`,
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALCONSUMED`,
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALESTIMATE`,
(select sum(days * hours)  from zt_team tt where type = 'project' and root = t1.id) AS `TOTALHOURS`,
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' and `status` in ('doing','wait','pause') AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALLEFT`,
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) AND `status` in ('doing','wait','pause')) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ))) AS `TOTALWH`,
t1.`TYPE`,
t1.`WHITELIST`
FROM `zt_project` t1 
LEFT JOIN zt_project t11 ON t1.PARENT = t11.ID 

WHERE t1.DELETED = '0' 

```

# **任务模块**(IBZ_PROJECTMODULE)

### BYPATH(BYPATH)<div id="ProjectModule_ByPath"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 

WHERE t1.DELETED = '0' 
t1.`TYPE` = 'task' 
FIND_IN_SET (${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_PROJECTMODULE"}')}, t1.`PATH`) 

```
### DEFAULT(DEFAULT)<div id="ProjectModule_Default"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_project t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'task' ) 

```
### 父模块(ParentModule)<div id="ProjectModule_ParentModule"></div>
```sql
SELECT
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`GRADE`,
	t1.`ID`,
	( CASE WHEN EXISTS ( SELECT 1 FROM ZT_MODULE WHERE PARENT = t1.`ID` ) THEN FALSE ELSE TRUE END ) AS `ISLEAF`,
	CONCAT(
	'/',
	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t1.path ) 
	AND tt.type = 'task' 
GROUP BY
	tt.root 
	) 
	) AS `NAME`,
	t1.`ORDER`,
	t1.`OWNER`,
	t1.`PARENT`,
	t21.`NAME` AS `PARENTNAME`,
	t1.`PATH`,
	t1.`ROOT`,
	t11.`NAME` AS `ROOTNAME`,
	t1.`SHORT`,
	t1.`TYPE` 
FROM
	`zt_module` t1
	LEFT JOIN zt_project t11 ON t1.ROOT = t11.ID
	LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID
WHERE t1.type = 'task' 
t1.id <> #{srf.webcontext.id} and find_in_set(#{srf.webcontext.id},t1.path) = 0 
t1.DELETED = '0' 

```
### 根需求模块(ROOT)<div id="ProjectModule_Root"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_project t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'story'  AND  ( t1.`PARENT` IS NULL  OR  t1.`PARENT` = 0 ) ) 

```
### 根需求模块_无分支(Root_NoBranch)<div id="ProjectModule_Root_NoBranch"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_project t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'story'  AND  t1.`BRANCH` = 0  AND  ( t1.`PARENT` IS NULL  OR  t1.`PARENT` = 0 ) ) 

```
### 根任务模块(ROOT_TASK)<div id="ProjectModule_Root_Task"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_project t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'task'  AND  ( t1.`PARENT` IS NULL  OR  t1.`PARENT` = 0 ) ) 

```
### 任务模块(TaskModules)<div id="ProjectModule_TaskModules"></div>
```sql
select t1.* from (select t1.* from (SELECT
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`ID`,
	CONCAT(
	'/',
	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t1.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	) 
	) AS `NAME`,
	t1.`ORDER`,
	t1.`PARENT`,
	t1.`PATH`,
	t1.`ROOT`,
	t1.`TYPE` 
FROM
	`zt_module` t1
	LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID
	LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID
	where t1.type = 'story' and t1.deleted = '0' order by t1.path asc) t1
	UNION
	select t1.* from (SELECT
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`ID`,
	CONCAT(
	'/',
	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t1.path ) 
	AND tt.type = 'task' 
GROUP BY
	tt.root 
	) 
	) AS `NAME`,
	t1.`ORDER`,
	t1.`PARENT`,
	t1.`PATH`,
	t1.`ROOT`,
	t1.`TYPE` 
FROM
	`zt_module` t1
	LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID
	LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID
	where t1.type = 'task' and t1.deleted = '0' order by t1.path asc) t1
	UNION
	select 
	0 as branch,
	'0' as deleted,
	0 as id,
	'/' as `name`,
	0 as `order`,
  0 as parent,
  ',0,' as path,
 #{srf.webcontext.project} as root,
  'task' as type	
	) t1
WHERE t1.DELETED = '0' 
( ( t1.`type` = 'task' and t1.`ROOT` = ${srfwebcontext('project','{"defname":"ROOT","dename":"IBZ_PROJECTMODULE"}')} )  or 
(${srfwebcontext('allmodules','{"defname":"ROOT","dename":"IBZ_PROJECTMODULE"}')} = '1' and t1.`type` = 'story' and t1.`root` in (select product from zt_projectproduct where project =  ${srfwebcontext('project','{"defname":"ROOT","dename":"IBZ_PROJECTMODULE"}')}))  or (t1.`id` = ${srfwebcontext('module','{"defname":"ROOT","dename":"IBZ_PROJECTMODULE"}')})) 

```
### 默认（全部数据）(VIEW)<div id="ProjectModule_View"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`COLLECTOR`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t21.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t11.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_project t11 ON t1.ROOT = t11.ID 
LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID 

WHERE t1.DELETED = '0' 

```

# **项目产品**(ZT_PROJECTPRODUCT)

### DEFAULT(DEFAULT)<div id="ProjectProduct_Default"></div>
```sql
SELECT
t1.`BRANCH`,
concat(t1.`PROJECT`,'__',t1.`PRODUCT`) AS `ID`,
t1.`PLAN`,
t31.`TITLE` AS `PLANNAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`
FROM `zt_projectproduct` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_productplan t31 ON t1.PLAN = t31.ID 

```
### 关联计划(RelationPlan)<div id="ProjectProduct_RelationPlan"></div>
```sql
SELECT
t1.`BRANCH`,
concat(t1.`PROJECT`,'__',t1.`PRODUCT`) AS `ID`,
t1.`PLAN`,
t31.`TITLE` AS `PLANNAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`
FROM `zt_projectproduct` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_productplan t31 ON t1.PLAN = t31.ID 

WHERE ( t1.`PLAN` <> 0 ) 

```
### 默认（全部数据）(VIEW)<div id="ProjectProduct_View"></div>
```sql
SELECT
t1.`BRANCH`,
concat(t1.`PROJECT`,'__',t1.`PRODUCT`) AS `ID`,
t1.`PLAN`,
t31.`TITLE` AS `PLANNAME`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`
FROM `zt_projectproduct` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_productplan t31 ON t1.PLAN = t31.ID 

```

# **项目统计**(IBZ_PROJECTSTATS)

### DEFAULT(DEFAULT)<div id="ProjectStats_Default"></div>
```sql
SELECT
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY 
WHERE
	`STATUS` = 'closed' 
	AND FIND_IN_SET ( PRODUCT, ( SELECT GROUP_CONCAT( PRODUCT ) FROM ZT_PROJECTPRODUCT WHERE PROJECT = t1.`ID` ) ) 
	AND DELETED = '0' 
	) AS `CLOSEDSTORYCNT`,
	t1.`DELETED`,
	t1.`END`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'active' AND DELETED = '0' ) AS `FINISHBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	) AS `FINISHTASKCNT`,
	t1.`ID`,
	t1.`NAME`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	stage = 'released' 
	AND PROJECT = t1.id 
	AND DELETED = '0' 
	) AS `RELEASEDSTORYCNT`,
	t1.`STATUS`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `STORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `TASKCNT`,
	(
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALCONSUMED`,
	(
SELECT
	round( SUM( ESTIMATE ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALESTIMATE`,
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALLEFT`,
	(
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) + (
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) 
	) AS `TOTALWH`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `UNCLOSEDBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	`STATUS` <> 'closed' 
	AND PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `UNCLOSEDSTORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMEDBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` NOT IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	) AS `UNDONETASKCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	zt_task t 
WHERE
	t.deleted = '0' 
	AND t.project = t1.id 
	AND t.`status` = 'closed' 
	AND t.closedDate BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYCTASKCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` = 'resolved' 
	AND DELETED = '0' 
	AND RESOLVEDDATE BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYRBUGCNT` ,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`
FROM
	`zt_project` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'project' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
WHERE t1.DELETED = '0' 
((t1.acl = 'private' and t1.id in (select t3.root from zt_team t3 where t3.account = #{srf.sessioncontext.srfloginname}  and t3.type = 'project')) or t1.acl = 'open') 

```
### 未关闭产品(NOOpenProduct)<div id="ProjectStats_NoOpenProduct"></div>
```sql
SELECT
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0' ) AS `ACTIVEBUGCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `BUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY 
WHERE
	`STATUS` = 'closed' 
	AND FIND_IN_SET ( PRODUCT, ( SELECT GROUP_CONCAT( PRODUCT ) FROM ZT_PROJECTPRODUCT WHERE PROJECT = t1.`ID` ) ) 
	AND DELETED = '0' 
	) AS `CLOSEDSTORYCNT`,
	t1.`DELETED`,
	t1.`END`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'active' AND DELETED = '0' ) AS `FINISHBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	) AS `FINISHTASKCNT`,
	t1.`ID`,
	t1.`NAME`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	stage = 'released' 
	AND PROJECT = t1.id 
	AND DELETED = '0' 
	) AS `RELEASEDSTORYCNT`,
	t1.`STATUS`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `STORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' ) AS `TASKCNT`,
	(
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALCONSUMED`,
	(
SELECT
	round( SUM( ESTIMATE ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALESTIMATE`,
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) AS `TOTALLEFT`,
	(
	(
SELECT
	round( SUM( `LEFT` ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) + (
SELECT
	round( SUM( CONSUMED ), 0 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND DELETED = '0' 
	AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) 
	) 
	) AS `TOTALWH`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0' ) AS `UNCLOSEDBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_STORY
	LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY 
WHERE
	`STATUS` <> 'closed' 
	AND PROJECT = t1.`ID` 
	AND DELETED = '0' 
	) AS `UNCLOSEDSTORYCNT`,
	( SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0' ) AS `UNCONFIRMEDBUGCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_TASK 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` NOT IN ( 'done', 'cancel', 'closed' ) 
	AND DELETED = '0' 
	) AS `UNDONETASKCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	zt_task t 
WHERE
	t.deleted = '0' 
	AND t.project = t1.id 
	AND t.`status` = 'closed' 
	AND t.closedDate BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYCTASKCNT`,
	(
SELECT
	COUNT( 1 ) 
FROM
	ZT_BUG 
WHERE
	PROJECT = t1.`ID` 
	AND `STATUS` = 'resolved' 
	AND DELETED = '0' 
	AND RESOLVEDDATE BETWEEN CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 00:00:00' 
	) 
	AND CONCAT(
	YEAR ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	MONTH ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	'-',
	DAY ( DATE_ADD( now( ), INTERVAL - 1 DAY ) ),
	' 23:59:59' 
	) 
	) AS `YESTERDAYRBUGCNT` ,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN T2.OBJECTORDER ELSE  t1.`ORDER` END) as `ORDER1`,
	(CASE WHEN T2.OBJECTORDER IS NOT NULL THEN 1 ELSE 0 END) as `ISTOP`
FROM
	`zt_project` t1
	left join t_ibz_top t2 on t1.id = t2.OBJECTID and t2.type = 'project' and t2.ACCOUNT = #{srf.sessioncontext.srfloginname}
WHERE t1.DELETED = '0' 
( t1.`STATUS` <> 'closed' ) 
((t1.acl = 'private' and t1.id in (select t3.root from zt_team t3 where t3.account = #{srf.sessioncontext.srfloginname}  and t3.type = 'project')) or t1.acl = 'open') 

```
### 任务工时消耗剩余查询(TASKTIME)<div id="ProjectStats_TaskTime"></div>
```sql
SELECT
t1.`ID`,
(SELECT SUM(CONSUMED) FROM ZT_TASK WHERE PROJECT = t1.`ID`) AS `TIME`,
'CONSUMED' AS `TYPE`
FROM `zt_project` t1 WHERE t1.`ID` =  ${srfdatacontext('srfparentkey','{"defname":"PROJECTSTATS","dename":"IBZ_PROJECTSTATS"}')} AND t1.DELETED = 0
UNION ALL 
SELECT
t2.`ID`,
(SELECT SUM(`LEFT`) FROM ZT_TASK WHERE PROJECT = t2.`ID` AND t1.DELETED = 0) AS `TIME`,
'LEFT' AS `TYPE`
FROM `zt_project` t2 WHERE t2.`ID` = ${srfdatacontext('srfparentkey','{"defname":"PROJECTSTATS","dename":"IBZ_PROJECTSTATS"}')}  AND t1.DELETED = 0

```
### 默认（全部数据）(VIEW)<div id="ProjectStats_View"></div>
```sql
SELECT
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'active' AND DELETED = '0') AS `ACTIVEBUGCNT`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `BUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY WHERE `STATUS` =  'closed' AND FIND_IN_SET (PRODUCT, (SELECT GROUP_CONCAT(PRODUCT) FROM ZT_PROJECTPRODUCT WHERE PROJECT= t1.`ID`)) AND DELETED = '0' ) AS `CLOSEDSTORYCNT`,
t1.`DELETED`,
t1.`END`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'active' AND DELETED = '0') AS `FINISHBUGCNT`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND `STATUS` IN ('done','cancel','closed') AND DELETED = '0') AS `FINISHTASKCNT`,
t1.`ID`,
t1.`NAME`,
t1.`order` AS `ORDER1`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE stage = 'released' AND PROJECT = t1.id AND DELETED = '0') AS `RELEASEDSTORYCNT`,
t1.`STATUS`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `STORYCNT`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0') AS `TASKCNT`,
(SELECT round(SUM(CONSUMED),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALCONSUMED`,
(SELECT round(SUM(ESTIMATE),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED =  '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALESTIMATE`,
(SELECT round(SUM(`LEFT`),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' or `parent` = '0' or `parent` = '-1')) AS `TOTALLEFT`,
((SELECT round(SUM( `LEFT` ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) ) + (SELECT round(SUM( CONSUMED ),0) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND DELETED = '0' AND ( `parent` = '' OR `parent` = '0' OR `parent` = '-1' ) )) AS `TOTALWH`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` <> 'closed' AND DELETED = '0') AS `UNCLOSEDBUGCNT`,
(SELECT COUNT(1) FROM ZT_STORY LEFT JOIN ZT_PROJECTSTORY ON ZT_STORY.ID = ZT_PROJECTSTORY.STORY WHERE `STATUS` <>  'closed' AND PROJECT = t1.`ID` AND DELETED = '0') AS `UNCLOSEDSTORYCNT`,
(SELECT COUNT(1) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `CONFIRMED` = 0 AND DELETED = '0') AS `UNCONFIRMEDBUGCNT`,
(SELECT COUNT(1) FROM ZT_TASK WHERE PROJECT = t1.`ID` AND `STATUS` NOT IN ('done','cancel','closed') AND DELETED =  '0') AS `UNDONETASKCNT`,
(select COUNT(1) from zt_task t where t.deleted = '0' and t.project = t1.id and t.`status` = 'closed' and t.closedDate BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59') ) AS `YESTERDAYCTASKCNT`,
(SELECT COUNT( 1 ) FROM ZT_BUG WHERE PROJECT = t1.`ID` AND `STATUS` = 'resolved' AND DELETED = '0' and RESOLVEDDATE BETWEEN CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 00:00:00') and CONCAT(YEAR(DATE_ADD(now(),INTERVAL -1 day)),'-',month(DATE_ADD(now(),INTERVAL -1 day)),'-',day(DATE_ADD(now(),INTERVAL -1 day)),' 23:59:59')) AS `YESTERDAYRBUGCNT`
FROM `zt_project` t1 

WHERE t1.DELETED = '0' 

```

# **项目中需要做的需求**(ZT_PROJECTSTORY)

### DEFAULT(DEFAULT)<div id="ProjectStory_Default"></div>
```sql
SELECT
concat(t1.`PROJECT`,'__',t1.`STORY`) AS `ID`,
t1.`ORDER`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`STORY`,
t1.`VERSION`
FROM `zt_projectstory` t1 

```
### 默认（全部数据）(VIEW)<div id="ProjectStory_View"></div>
```sql
SELECT
concat(t1.`PROJECT`,'__',t1.`STORY`) AS `ID`,
t1.`ORDER`,
t1.`PRODUCT`,
t1.`PROJECT`,
t1.`STORY`,
t1.`VERSION`
FROM `zt_projectstory` t1 

```

# **项目团队**(IBZ_PROJECTTEAM)

### DEFAULT(DEFAULT)<div id="ProjectTeam_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DAYS`,
t1.`ESTIMATE`,
t1.`HOURS`,
t1.`ID`,
t1.`JOIN`,
t1.`LEFT`,
t1.`LIMITED`,
t1.`ORDER`,
t1.`ROLE`,
t1.`ROOT`,
(t1.`DAYS` * t1.`HOURS`) AS `TOTAL`,
t1.`TYPE`,
(select t.realname from zt_user t where t.account = t1.account) AS `USERNAME`
FROM `zt_team` t1 

WHERE ( t1.`TYPE` = 'project' ) 

```
### 行编辑查询(RowEditDefault)<div id="ProjectTeam_RowEditDefault"></div>
```sql
SELECT
	t1.* 
FROM
	(
SELECT
	t1.`ACCOUNT`,
	t1.`CONSUMED`,
	t1.`DAYS`,
	t1.`ESTIMATE`,
	t1.`HOURS`,
	t1.id as `ID`,
	t1.`JOIN`,
	t1.`LEFT`,
	t1.`LIMITED`,
	t1.`ORDER`,
	t1.`ROLE`,
	t1.`ROOT`,
	( t1.`DAYS` * t1.`HOURS` ) AS `TOTAL`,
	t1.`TYPE`,
	t2.`realname` AS `USERNAME` 
FROM
	`zt_team` t1
	LEFT JOIN `zt_user` t2 ON t2.`account` = t1.`account` 
	union 
	SELECT
	t1.`ACCOUNT`,
	0 AS `CONSUMED`,
	45 AS `DAYS`,
	0 AS `ESTIMATE`,
	7 AS `HOURS`,
	null as `ID`,
	'2020-07-13' AS `JOIN`,
	0 AS `LEFT`,
	'no' AS `LIMITED`,
	0 AS `ORDER`,
	t3.`name` as `ROLE`,
	#{srf.datacontext.root} as `ROOT`,
	90 AS `TOTAL`,
	'project' AS `TYPE`,
	t2.`realname` AS `USERNAME` 
FROM
	`zt_team` t1
	LEFT JOIN `zt_user` t2 ON t2.`account` = t1.`account` 
        left join zt_group t3 on t2.role = t3.role
	where t1.type = 'project' and t1.root = #{srf.datacontext.teams} and t1.account not in (select  t.account from zt_team t where t.root = #{srf.datacontext.root} and t.type = 'project')
	union 
	SELECT
	t2.`ACCOUNT`,
	0 AS `CONSUMED`,
	45 AS `DAYS`,
	0 AS `ESTIMATE`,
	7 AS `HOURS`,
	null as `ID`,
	'2020-07-13' AS `JOIN`,
	0 AS `LEFT`,
	'no' AS `LIMITED`,
	0 AS `ORDER`,
	t3.`name` as `ROLE`,
	#{srf.datacontext.root} as `ROOT`,
	90 AS `TOTAL`,
	'project' AS `TYPE`,
	t2.`realname` AS `USERNAME` 
FROM
	`zt_dept` t1
	LEFT JOIN `zt_user` t2 ON t2.`dept` = t1.`id` 
	left join zt_group t3 on t2.role = t3.role
	where t1.id = #{srf.datacontext.dept} and t2.account is not null and t2.account not in (select  t.account from zt_team t where t.root = #{srf.datacontext.root} and t.type = 'project')
	) t1
WHERE 	
( t1.`TYPE` = 'project' ) 

```
### 默认（全部数据）(VIEW)<div id="ProjectTeam_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DAYS`,
t1.`ESTIMATE`,
t1.`HOURS`,
t1.`ID`,
t1.`JOIN`,
t1.`LEFT`,
t1.`LIMITED`,
t1.`ORDER`,
t1.`ROLE`,
t1.`ROOT`,
(t1.`DAYS` * t1.`HOURS`) AS `TOTAL`,
t1.`TYPE`,
(select t.realname from zt_user t where t.account = t1.account) AS `USERNAME`
FROM `zt_team` t1 

WHERE ( t1.`TYPE` = 'project' ) 

```

# **relation**(ZT_RELATION)

### DEFAULT(DEFAULT)<div id="Relation_Default"></div>
```sql
SELECT
t1.`AID`,
t1.`ATYPE`,
t1.`AVERSION`,
t1.`BID`,
t1.`BTYPE`,
t1.`BVERSION`,
t1.`EXTRA`,
t1.`ID`,
t1.`PRODUCT`,
t1.`PROGRAM`,
t1.`PROJECT`,
t1.`RELATION`
FROM `zt_relation` t1 

```
### 默认（全部数据）(VIEW)<div id="Relation_View"></div>
```sql
SELECT
t1.`AID`,
t1.`ATYPE`,
t1.`AVERSION`,
t1.`BID`,
t1.`BTYPE`,
t1.`BVERSION`,
t1.`EXTRA`,
t1.`ID`,
t1.`PRODUCT`,
t1.`PROGRAM`,
t1.`PROJECT`,
t1.`RELATION`
FROM `zt_relation` t1 

```

# **发布**(ZT_RELEASE)

### DEFAULT(DEFAULT)<div id="Release_Default"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`BUILD`,
t11.`DATE` AS `BUILDDATE`,
t11.`BUILDER`,
t11.`NAME` AS `BUILDNAME`,
t1.`DATE`,
t1.`DELETED`,
t1.`ID`,
t1.`MARKER`,
t1.`NAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`STATUS`,
t1.`SUBSTATUS`
FROM `zt_release` t1 
LEFT JOIN zt_build t11 ON t1.BUILD = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 

WHERE t1.DELETED = '0' 

```
### 获取产品发布(GetList)<div id="Release_GetList"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`BUILD`,
t11.`DATE` AS `BUILDDATE`,
t11.`BUILDER`,
t11.`NAME` AS `BUILDNAME`,
t1.`DATE`,
t1.`DELETED`,
t1.`ID`,
t1.`MARKER`,
t1.`NAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`STATUS`,
t1.`SUBSTATUS`
FROM `zt_release` t1 
LEFT JOIN zt_build t11 ON t1.BUILD = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 

WHERE t1.DELETED = '0' 
( t1.`PRODUCT` = ${srfdatacontext('product','{"defname":"PRODUCT","dename":"ZT_RELEASE"}')}  AND  <#assign _value=srfdatacontext('status','{"ignoreempty":true,"defname":"STATUS","dename":"ZT_RELEASE"}')><#if _value?length gt 0>t1.`STATUS` =  ${_value}<#else>1=1</#if> ) 

```
### 测试报告关联发布(ReportRelease)<div id="Release_ReportRelease"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`BUILD`,
t11.`DATE` AS `BUILDDATE`,
t11.`BUILDER`,
t11.`NAME` AS `BUILDNAME`,
t1.`DATE`,
t1.`DELETED`,
t1.`ID`,
t1.`MARKER`,
t1.`NAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`STATUS`,
t1.`SUBSTATUS`
FROM `zt_release` t1 
LEFT JOIN zt_build t11 ON t1.BUILD = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 

WHERE t1.DELETED = '0' 
( FIND_IN_SET(t1.`ID`, (select tt.builds from zt_testreport tt where tt.id = ${srfwebcontext('srfparentkey','{"defname":"ID","dename":"ZT_BUILD"}')})) ) 

```
### 默认（全部数据）(VIEW)<div id="Release_View"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`BUGS`,
t1.`BUILD`,
t11.`DATE` AS `BUILDDATE`,
t11.`BUILDER`,
t11.`NAME` AS `BUILDNAME`,
t1.`DATE`,
t1.`DELETED`,
t1.`DESC`,
t1.`ID`,
t1.`LEFTBUGS`,
t1.`MARKER`,
t1.`NAME`,
t1.`PRODUCT`,
t21.`NAME` AS `PRODUCTNAME`,
t1.`STATUS`,
t1.`STORIES`,
t1.`SUBSTATUS`
FROM `zt_release` t1 
LEFT JOIN zt_build t11 ON t1.BUILD = t11.ID 
LEFT JOIN zt_product t21 ON t1.PRODUCT = t21.ID 

WHERE t1.DELETED = '0' 

```

# **repo**(ZT_REPO)

### DEFAULT(DEFAULT)<div id="Repo_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CLIENT`,
t1.`COMMITS`,
t1.`DELETED`,
t1.`ENCODING`,
t1.`ENCRYPT`,
t1.`ID`,
t1.`LASTSYNC`,
t1.`NAME`,
t1.`PASSWORD`,
t1.`PATH`,
t1.`PREFIX`,
t1.`SCM`,
t1.`SYNCED`
FROM `zt_repo` t1 

WHERE t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="Repo_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ACL`,
t1.`CLIENT`,
t1.`COMMITS`,
t1.`DELETED`,
t1.`DESC`,
t1.`ENCODING`,
t1.`ENCRYPT`,
t1.`ID`,
t1.`LASTSYNC`,
t1.`NAME`,
t1.`PASSWORD`,
t1.`PATH`,
t1.`PREFIX`,
t1.`SCM`,
t1.`SYNCED`
FROM `zt_repo` t1 

WHERE t1.DELETED = '0' 

```

# **repobranch**(ZT_REPOBRANCH)

### DEFAULT(DEFAULT)<div id="RepoBranch_Default"></div>
```sql
SELECT
t1.`BRANCH`,
concat(t1.`REPO`,'__',t1.`REVISION`,'__',t1.`BRANCH`) AS `ID`,
t1.`REPO`,
t1.`REVISION`
FROM `zt_repobranch` t1 

```
### 默认（全部数据）(VIEW)<div id="RepoBranch_View"></div>
```sql
SELECT
t1.`BRANCH`,
concat(t1.`REPO`,'__',t1.`REVISION`,'__',t1.`BRANCH`) AS `ID`,
t1.`REPO`,
t1.`REVISION`
FROM `zt_repobranch` t1 

```

# **repofiles**(ZT_REPOFILES)

### DEFAULT(DEFAULT)<div id="RepoFiles_Default"></div>
```sql
SELECT
t1.`ACTION`,
t1.`ID`,
t1.`PARENT`,
t1.`PATH`,
t1.`REPO`,
t1.`REVISION`,
t1.`TYPE`
FROM `zt_repofiles` t1 

```
### 默认（全部数据）(VIEW)<div id="RepoFiles_View"></div>
```sql
SELECT
t1.`ACTION`,
t1.`ID`,
t1.`PARENT`,
t1.`PATH`,
t1.`REPO`,
t1.`REVISION`,
t1.`TYPE`
FROM `zt_repofiles` t1 

```

# **repohistory**(ZT_REPOHISTORY)

### DEFAULT(DEFAULT)<div id="RepoHistory_Default"></div>
```sql
SELECT
t1.`COMMIT`,
t1.`COMMITTER`,
t1.`ID`,
t1.`REPO`,
t1.`REVISION`,
t1.`TIME`
FROM `zt_repohistory` t1 

```
### 默认（全部数据）(VIEW)<div id="RepoHistory_View"></div>
```sql
SELECT
t1.`COMMENT`,
t1.`COMMIT`,
t1.`COMMITTER`,
t1.`ID`,
t1.`REPO`,
t1.`REVISION`,
t1.`TIME`
FROM `zt_repohistory` t1 

```

# **score**(ZT_SCORE)

### DEFAULT(DEFAULT)<div id="Score_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`AFTER`,
t1.`BEFORE`,
t1.`DESC`,
t1.`ID`,
t1.`METHOD`,
t1.`MODULE`,
t1.`SCORE`,
t1.`TIME`
FROM `zt_score` t1 

```
### 默认（全部数据）(VIEW)<div id="Score_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`AFTER`,
t1.`BEFORE`,
t1.`DESC`,
t1.`ID`,
t1.`METHOD`,
t1.`MODULE`,
t1.`SCORE`,
t1.`TIME`
FROM `zt_score` t1 

```

# **需求**(ZT_STORY)

### 指派给我的需求(AssignedToMyStory)<div id="Story_AssignedToMyStory"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' ) FROM zt_module tt  WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story' GROUP BY	tt.root ) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VERSION` AS `VERSIONC`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID
WHERE t1.DELETED = '0' 
( t1.`ASSIGNEDTO` =  ${srfsessioncontext('srfloginname','{"defname":"ASSIGNEDTO","dename":"ZT_STORY"}')} ) 

```
### Bug相关需求(BugStory)<div id="Story_BugStory"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} 
and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
CONCAT(t1.id,':',t1.title,'(优先级:',t1.pri,',预计工时:',t1.estimate,')') AS `TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID
WHERE t1.DELETED = '0' 
( ( EXISTS ( SELECT 1 FROM zt_projectstory t51 WHERE t1.ID = t51.STORY AND ( t51.`PROJECT` = ${srfdatacontext('n_project_eq','{"defname":"PROJECT","dename":"ZT_PROJECTSTORY"}')}) )  OR  ${srfdatacontext('n_project_eq','{"defname":"PROJECT","dename":"ZT_PROJECTSTORY"}')} is null ) ) 

```
### 版本关联已完成的需求（选择数据源）(buildLinkCompletedStories)<div id="Story_BuildLinkCompletedStories"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VERSION` AS `VERSIONC`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID 

WHERE 
t1.DELETED = '0' 
AND
	t1.id IN ( SELECT tt.story FROM zt_projectstory tt WHERE tt.project = ${srfdatacontext('project','{"defname":"PROJECT","dename":"ZT_BUILD"}')} ) 
	AND t1.product = ( SELECT t2.product FROM zt_build t2 WHERE t2.id = ${srfdatacontext('build','{"defname":"ID","dename":"ZT_BUILD"}')} )
	and t1.id not in (select t3.id from zt_story t3, zt_build t4 where t4.id = ${srfdatacontext('build','{"defname":"ID","dename":"ZT_BUILD"}')} and FIND_IN_SET(t3.id,t4.stories))


```
### 版本可关联的需求（产品内）(BuildLinkableStories)<div id="Story_BuildLinkableStories"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID 

WHERE t1.`product` in ( select t2.`product` from zt_projectproduct t2 where t2.project = ${srfdatacontext('project','{"defname":"ID","dename":"ZT_PRODUCT"}')}  ) 
t1.`STATUS` = 'active' 
t1.DELETED = '0' 

```
### 获取版本相关需求(BuildStories)<div id="Story_BuildStories"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
(select spec from zt_storyspec where story = t1.`ID` and version= t1.`VERSION`) AS `SPEC`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
(select verify from zt_storyspec where story = t1.`ID` and version= t1.`VERSION`) AS `VERIFY`,
t1.`VERSION`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
WHERE t1.`DELETED` = '0' AND FIND_IN_SET ( t1.ID, (SELECT STORIES FROM ZT_BUILD WHERE ID = ${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_BUILD"}')}))
```
### 通过模块查询(ByModule)<div id="Story_ByModule"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
(case when t1.`PLAN` = '0' then '' else t1.plan end ) as `PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
(select spec from zt_storyspec where story = t1.`ID` and version= t1.`VERSION`) AS `SPEC`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
(select verify from zt_storyspec where story = t1.`ID` and version= t1.`VERSION`) AS `VERIFY`,
t1.`VERSION`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 

WHERE t1.DELETED = '0' 
FIND_IN_SET (${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_PROJECTMODULE"}')}, t11.`PATH`) 

```
### 相关用例需求(CaseStory)<div id="Story_CaseStory"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} 
and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
CONCAT(t1.id,':',t1.title,'(优先级:',t1.pri,',预计工时:',t1.estimate,')') AS `TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID
```
### DEFAULT(DEFAULT)<div id="Story_Default"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' ) FROM zt_module tt  WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story' GROUP BY	tt.root ) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
(case when t1.`PLAN` = '0' then '' else t1.plan end ) as `PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VERSION` AS `VERSIONC`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID
WHERE t1.DELETED = '0' 

```
### 获取产品需求(GetProductStories)<div id="Story_GetProductStories"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS `ISCHILD`,
0 AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' ) FROM zt_module tt  WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story' GROUP BY	tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VERSION` AS `VERSIONC`
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID 

WHERE t1.DELETED = '0' 
( t1.`PRODUCT` = ${srfdatacontext('product','{"defname":"PRODUCT","dename":"ZT_STORY"}')}  AND  <#assign _value=srfdatacontext('branch','{"ignoreempty":true,"defname":"BRANCH","dename":"ZT_STORY"}')><#if _value?length gt 0>t1.`BRANCH` = ${_value}<#else>1=1</#if>  AND  <#assign _value=srfdatacontext('nodeid','{"ignoreempty":true,"defname":"MODULE","dename":"ZT_STORY"}')><#if _value?length gt 0>t1.`MODULE` = ${_value}<#else>1=1</#if> ) 

```
### 所创建需求数和对应的优先级及状态(MyCurOpenedStory)<div id="Story_MyCurOpenedStory"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS `ISCHILD`,
0 AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' ) FROM zt_module tt  WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story' GROUP BY	tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VERSION` AS `VERSIONC`
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID 

WHERE t1.DELETED = '0' 
( DATE_FORMAT( t1.openedDate, '%Y' ) = DATE_FORMAT(now(), '%Y' )  AND  t1.`OPENEDBY` =  ${srfsessioncontext('srfloginname','{"defname":"OPENEDBY","dename":"ZT_STORY"}')} ) 

```
### 我的收藏(MyFavorites)<div id="Story_MyFavorites"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
1 AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' ) FROM zt_module tt  WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story' GROUP BY	tt.root ) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VERSION` AS `VERSIONC`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID
WHERE t1.DELETED = '0' 
t1.id in (select t.OBJECTID from T_IBZ_FAVORITES t where t.type = 'story' and t.account = #{srf.sessioncontext.srfloginname}) 

```
### 数据查询(ParentDefault)<div id="Story_ParentDefault"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' ) FROM zt_module tt  WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story' GROUP BY	tt.root ) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
(case when t1.`PLAN` = '0' then '' else t1.plan end ) as `PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VERSION` AS `VERSIONC`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID
WHERE t1.DELETED = '0' 
( ( t1.`PARENT` = -1  OR  t1.`PARENT` = 0 ) ) 

```
### 项目关联需求(projectLinkStory)<div id="Story_ProjectLinkStory"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS `ISCHILD`,
0 AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' ) FROM zt_module tt  WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story' GROUP BY	tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VERSION` AS `VERSIONC`
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID 
RIGHT JOIN zt_product t51 ON t1.PRODUCT = t51.ID 
LEFT OUTER JOIN zt_projectproduct t61 ON t51.ID = t61.PRODUCT 

WHERE ( t61.`PROJECT` = ${srfwebcontext('project','{"defname":"PROJECT","dename":"ZT_PROJECTPRODUCT"}')} ) 
NOT(EXISTS(SELECT * FROM zt_projectstory t71 
 WHERE 
 t1.ID = t71.STORY  AND  ( t71.`PROJECT` = ${srfwebcontext('project','{"defname":"PROJECT","dename":"ZT_PROJECTSTORY"}')} ) )) 
t1.DELETED = '0' 
( t1.`STATUS` NOT  IN ('draft','closed') ) 

```
### 项目相关需求(ProjectStories)<div id="Story_ProjectStories"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS `ISCHILD`,
0 AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' ) FROM zt_module tt  WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story' GROUP BY	tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VERSION` AS `VERSIONC`
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID 

WHERE EXISTS(SELECT * FROM zt_projectstory t51 
 WHERE 
 t1.ID = t51.STORY  AND  ( t51.`PROJECT` = ${srfdatacontext('srfparentkey','{"defname":"PROJECT","dename":"ZT_PROJECTSTORY"}')} ) ) 
t1.DELETED = '0' 

```
### 版本可关联的完成的需求(ReleaseLinkableStories)<div id="Story_ReleaseLinkableStories"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
0 AS `ISFAVORITES`,
FALSE AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VERSION` AS `VERSIONC`,
'0' AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID
WHERE t1.DELETED = '0' 
(t1.id IN ( select tt3.story from zt_release  tt1 
LEFT JOIN zt_build tt2 on tt1.build = tt2.id  
LEFT JOIN zt_projectstory tt3 on tt3.project = tt2.project
where tt1.id =  #{srf.datacontext.release}
)  or (select tt2.project from zt_release  tt1 
LEFT JOIN zt_build tt2 on tt1.build = tt2.id where tt1.id =  #{srf.datacontext.release}
) = 0)
	AND t1.product =  #{srf.datacontext.product}
	AND not FIND_IN_SET (
t1.ID,(SELECT STORIES FROM ZT_RELEASE WHERE ID =  #{srf.datacontext.release}
)) 

```
### 获取产品发布相关需求(ReleaseStories)<div id="Story_ReleaseStories"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
(select spec from zt_storyspec where story = t1.`ID` and version= t1.`VERSION`) AS `SPEC`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
(select verify from zt_storyspec where story = t1.`ID` and version= t1.`VERSION`) AS `VERIFY`,
t1.`VERSION`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
WHERE t1.`DELETED` = '0' AND FIND_IN_SET ( t1.ID, (SELECT STORIES FROM ZT_RELEASE WHERE ID = ${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_RELEASE"}')}))
```
### 报告完成需求(ReportStories)<div id="Story_ReportStories"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
(select spec from zt_storyspec where story = t1.`ID` and version= t1.`VERSION`) AS `SPEC`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
(select verify from zt_storyspec where story = t1.`ID` and version= t1.`VERSION`) AS `VERIFY`,
t1.`VERSION`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
WHERE t1.`DELETED` = '0' AND FIND_IN_SET ( t1.ID, (SELECT STORIES FROM ZT_TESTREPORT WHERE ID= ${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_TESTREPORT "}')}))
```
### 获取产品发布相关需求(StoryChild)<div id="Story_StoryChild"></div>
```sql
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`BRANCH`, t1.`CHILDSTORIES`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`DELETED`, t1.`DUPLICATESTORY`, t1.`ESTIMATE`, t1.`FROMBUG`, t1.`ID`, t1.`KEYWORDS`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LINKSTORIES`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t21.`TITLE` AS `PARENTNAME`, t11.`PATH`, t1.`PLAN`, t1.`PRI`, t31.`NAME` AS `PRODOCTNAME`, (select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,t1.`PRODUCT`, t1.`REVIEWEDBY`, t1.`REVIEWEDDATE`, t1.`SOURCE`, t1.`SOURCENOTE`, (select spec from zt_storyspec where story = t1.`ID` and version= t1.`VERSION`) AS `SPEC`, t1.`STAGE`, t1.`STAGEDBY`, t1.`STATUS`, t1.`SUBSTATUS`, t1.`TITLE`, t1.`TOBUG`, t1.`TYPE`, (select verify from zt_storyspec where story = t1.`ID` and version= t1.`VERSION`) AS `VERIFY`, t1.`VERSION` ,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID WHERE  FIND_IN_SET ( t1.ID, (select tt.childStories from zt_story tt where tt.id = ${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_RELEASE"}')}))
```
### 获取产品发布相关需求(StoryRelated)<div id="Story_StoryRelated"></div>
```sql
SELECT t1.`ASSIGNEDDATE`, t1.`ASSIGNEDTO`, t1.`BRANCH`, t1.`CHILDSTORIES`, t1.`CLOSEDBY`, t1.`CLOSEDDATE`, t1.`CLOSEDREASON`, t1.`COLOR`, t1.`DELETED`, t1.`DUPLICATESTORY`, t1.`ESTIMATE`, t1.`FROMBUG`, t1.`ID`, t1.`KEYWORDS`, t1.`LASTEDITEDBY`, t1.`LASTEDITEDDATE`, t1.`LINKSTORIES`, t1.`MODULE`, t11.`NAME` AS `MODULENAME`, t1.`OPENEDBY`, t1.`OPENEDDATE`, t1.`PARENT`, t21.`TITLE` AS `PARENTNAME`, t11.`PATH`, t1.`PLAN`, t1.`PRI`, t31.`NAME` AS `PRODOCTNAME`, (select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,t1.`PRODUCT`, t1.`REVIEWEDBY`, t1.`REVIEWEDDATE`, t1.`SOURCE`, t1.`SOURCENOTE`, (select spec from zt_storyspec where story = t1.`ID` and version= t1.`VERSION`) AS `SPEC`, t1.`STAGE`, t1.`STAGEDBY`, t1.`STATUS`, t1.`SUBSTATUS`, t1.`TITLE`, t1.`TOBUG`, t1.`TYPE`, (select verify from zt_storyspec where story = t1.`ID` and version= t1.`VERSION`) AS `VERIFY`, t1.`VERSION` ,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID WHERE  FIND_IN_SET ( t1.ID, (select tt.linkStories from zt_story tt where tt.id = ${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_RELEASE"}')}))
```
### 需求细分(SubStory)<div id="Story_SubStory"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS `ISCHILD`,
0 AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' ) FROM zt_module tt  WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story' GROUP BY	tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VERSION` AS `VERSIONC`
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID 

WHERE t1.DELETED = '0' 
( 1<>1 ) 

```
### 任务相关需求(TaskRelatedStory)<div id="Story_TaskRelatedStory"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'story' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
CONCAT(t1.id,':',t1.title,'(优先级:',t1.pri,',预计工时:',t1.estimate,')') AS `TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS isChild
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID
WHERE t1.DELETED = '0' 
(t1.`id` in (select tt.`story` from zt_projectstory tt where tt.`project` = ${srfdatacontext('project','{"defname":"ID","dename":"ZT_RELEASE"}')}) or ${srfdatacontext('project','{"defname":"ID","dename":"ZT_RELEASE"}')} is null) 
(t1.module = #{srf.datacontext.module} or #{srf.datacontext.module}  = '0' or #{srf.datacontext.module} is null) 

```
### 默认（全部数据）(VIEW)<div id="Story_View"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BRANCH`,
t41.`NAME` AS `BRANCHNAME`,
t1.`CHILDSTORIES`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`DELETED`,
t1.`DUPLICATESTORY`,
t1.`ESTIMATE`,
t1.`FROMBUG`,
t1.`ID`,
(case when t1.parent in (-1) and t1.stage = 'wait' then '1' when t1.parent in (0) and t1.stage = 'wait' then '2'  else '0' end) AS `ISCHILD`,
0 AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_STORY WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`KEYWORDS`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LINKSTORIES`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT GROUP_CONCAT( tt.NAME SEPARATOR '>' ) FROM zt_module tt  WHERE FIND_IN_SET( tt.id, t11.path ) AND tt.type = 'story' GROUP BY	tt.root limit 0,1) end) AS `MODULENAME1`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t21.`TITLE` AS `PARENTNAME`,
t11.`PATH`,
t1.`PLAN`,
t1.`PRI`,
t31.`NAME` AS `PRODOCTNAME`,
t1.`PRODUCT`,
t1.`REVIEWEDBY`,
t1.`REVIEWEDDATE`,
t1.`SOURCE`,
t1.`SOURCENOTE`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STATUS`,
t1.`SUBSTATUS`,
t1.`TITLE`,
t1.`TOBUG`,
t1.`TYPE`,
t1.`VERSION`,
t1.`VERSION` AS `VERSIONC`
FROM `zt_story` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.PARENT = t21.ID 
LEFT JOIN zt_product t31 ON t1.PRODUCT = t31.ID 
LEFT JOIN zt_branch t41 ON t1.BRANCH = t41.ID 

WHERE t1.DELETED = '0' 

```

# **需求描述**(ZT_STORYSPEC)

### DEFAULT(DEFAULT)<div id="StorySpec_Default"></div>
```sql
SELECT
concat(t1.`STORY`,'__',t1.`VERSION`) AS `ID`,
t1.`SPEC`,
t1.`STORY`,
t1.`TITLE`,
t1.`VERIFY`,
t1.`VERSION`
FROM `zt_storyspec` t1 

```
### 版本(Version)<div id="StorySpec_Version"></div>
```sql
SELECT
concat(t1.`STORY`,'__',t1.`VERSION`) AS `ID`,
t1.`STORY`,
t1.`VERSION`,
CONCAT('#',t1.`version`) as `TITLE`
FROM `zt_storyspec` t1 

```
### 默认（全部数据）(VIEW)<div id="StorySpec_View"></div>
```sql
SELECT
concat(t1.`STORY`,'__',t1.`VERSION`) AS `ID`,
t1.`SPEC`,
t1.`STORY`,
t1.`TITLE`,
t1.`VERIFY`,
t1.`VERSION`
FROM `zt_storyspec` t1 

```

# **需求阶段**(ZT_STORYSTAGE)

### DEFAULT(DEFAULT)<div id="StoryStage_Default"></div>
```sql
SELECT
t1.`BRANCH`,
concat(t1.`STORY`,'__',t1.`BRANCH`) AS `ID`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STORY`
FROM `zt_storystage` t1 

```
### 默认（全部数据）(VIEW)<div id="StoryStage_View"></div>
```sql
SELECT
t1.`BRANCH`,
concat(t1.`STORY`,'__',t1.`BRANCH`) AS `ID`,
t1.`STAGE`,
t1.`STAGEDBY`,
t1.`STORY`
FROM `zt_storystage` t1 

```

# **套件用例**(ZT_SUITECASE)

### DEFAULT(DEFAULT)<div id="SuiteCase_Default"></div>
```sql
SELECT
t1.`CASE`,
concat(t1.`SUITE`,'__',t1.`CASE`) AS `ID`,
t1.`PRODUCT`,
t1.`SUITE`,
t1.`VERSION`
FROM `zt_suitecase` t1 

```
### 默认（全部数据）(VIEW)<div id="SuiteCase_View"></div>
```sql
SELECT
t1.`CASE`,
concat(t1.`SUITE`,'__',t1.`CASE`) AS `ID`,
t1.`PRODUCT`,
t1.`SUITE`,
t1.`VERSION`
FROM `zt_suitecase` t1 

```

# **部门**(SYS_DEPT)

### 数据查询(DEFAULT)<div id="SysDepartment_Default"></div>
```sql
SELECT
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEPTCODE`,
t1.`DEPTID`,
t1.`DEPTLEVEL`,
t1.`DEPTNAME`,
t1.`DOMAINS`,
t1.`ENABLE`,
t1.`LEADERID`,
t1.`LEADERNAME`,
t1.`ORGID`,
t1.`PDEPTID`,
t1.`SHORTNAME`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_SYS_DEPT` t1 

WHERE t1.ENABLE = 1 

```
### 默认（全部数据）(VIEW)<div id="SysDepartment_View"></div>
```sql
SELECT
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DEPTCODE`,
t1.`DEPTID`,
t1.`DEPTLEVEL`,
t1.`DEPTNAME`,
t1.`DOMAINS`,
t1.`ENABLE`,
t1.`LEADERID`,
t1.`LEADERNAME`,
t1.`ORGID`,
t1.`PDEPTID`,
t1.`SHORTNAME`,
t1.`SHOWORDER`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_SYS_DEPT` t1 

WHERE t1.ENABLE = 1 

```

# **人员**(IBZEMP)

### Bug用户(BugUser)<div id="SysEmployee_BugUser"></div>
```sql

```
### 数据查询(DEFAULT)<div id="SysEmployee_Default"></div>
```sql
SELECT
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`ENABLE`,
t1.`IPADDR`,
t1.`LANG`,
t1.`MEMO`,
t1.`NICKNAME`,
t1.`PERSONNAME`,
t1.`PHONE`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SHOWORDER`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `T_IBZEMP` t1 

```
### 项目团队管理(ProjectTeamM)<div id="SysEmployee_ProjectTeamM"></div>
```sql
SELECT
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`ENABLE`,
t1.`IPADDR`,
t1.`LANG`,
t1.`MEMO`,
t1.`NICKNAME`,
t1.`PERSONNAME`,
t1.`PHONE`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SHOWORDER`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `T_IBZEMP` t1 

WHERE ( (t1.account = ${srfwebcontext('account','{"defname":"ACCOUNT","dename":"ZT_USER"}')} or t1.account not in (select t.account from zt_team t where t.type = 'project' and t.root = ${srfwebcontext('srfparentkey','{"defname":"ACCOUNT","dename":"ZT_USER"}')})) ) 

```
### 项目团队成员(ProjectTeamUser)<div id="SysEmployee_ProjectTeamUser"></div>
```sql

```
### 项目团队成员(ProjectTeamUser_Task)<div id="SysEmployee_ProjectTeamUser_Task"></div>
```sql

```
### 数据查询2(TASKTEAM)<div id="SysEmployee_TaskTeam"></div>
```sql

```
### 默认（全部数据）(VIEW)<div id="SysEmployee_View"></div>
```sql
SELECT
t1.`ADDR`,
t1.`AVATAR`,
t1.`BCODE`,
t1.`CREATEDATE`,
t1.`DOMAINS`,
t1.`EMAIL`,
t1.`ENABLE`,
t1.`IPADDR`,
t1.`LANG`,
t1.`MEMO`,
t1.`NICKNAME`,
t1.`PERSONNAME`,
t1.`PHONE`,
t1.`RESERVER`,
t1.`SEX`,
t1.`SHOWORDER`,
t1.`USERCODE`,
t1.`USERICON`,
t1.`USERID`,
t1.`USERNAME`
FROM `T_IBZEMP` t1 

```

# **系统更新功能**(SYS_UPDATE_FEATURES)

### 数据查询(DEFAULT)<div id="SysUpdateFeatures_Default"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DISPLAYORDER`,
t1.`SYS_UPDATE_FEATURESID`,
t1.`SYS_UPDATE_FEATURESNAME`,
t1.`SYS_UPDATE_LOGID`,
t11.`SYS_UPDATE_LOGNAME`,
t1.`TYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPFEATURES`,
t1.FEATURESDESC
FROM `T_SYS_UPDATE_FEATURES` t1 
LEFT JOIN T_SYS_UPDATE_LOG t11 ON t1.SYS_UPDATE_LOGID = t11.SYS_UPDATE_LOGID 

```
### 默认（全部数据）(VIEW)<div id="SysUpdateFeatures_View"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DISPLAYORDER`,
t1.`FEATURESDESC`,
t1.`SYS_UPDATE_FEATURESID`,
t1.`SYS_UPDATE_FEATURESNAME`,
t1.`SYS_UPDATE_LOGID`,
t11.`SYS_UPDATE_LOGNAME`,
t1.`TYPE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPFEATURES`
FROM `T_SYS_UPDATE_FEATURES` t1 
LEFT JOIN T_SYS_UPDATE_LOG t11 ON t1.SYS_UPDATE_LOGID = t11.SYS_UPDATE_LOGID 

```

# **更新日志**(SYS_UPDATE_LOG)

### 数据查询(DEFAULT)<div id="SysUpdateLog_Default"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`LATESTUPDATE`,
t1.`SYS_UPDATE_LOGID`,
t1.`SYS_UPDATE_LOGNAME`,
t1.`UPDATE`,
t1.`UPDATEBRANCH`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_SYS_UPDATE_LOG` t1 

```
### 默认（全部数据）(VIEW)<div id="SysUpdateLog_View"></div>
```sql
SELECT
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`LATESTUPDATE`,
t1.`SYS_UPDATE_LOGID`,
t1.`SYS_UPDATE_LOGNAME`,
t1.`UPDATE`,
t1.`UPDATEBRANCH`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`,
t1.`UPDESC`
FROM `T_SYS_UPDATE_LOG` t1 

```

# **任务**(ZT_TASK)

### 指派给我任务(AssignedToMyTask)<div id="Task_AssignedToMyTask"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_TASK WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) AS `MODULENAME1`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end) AS `TASKTYPE`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID
WHERE t1.DELETED = '0' 
( t1.`ASSIGNEDTO` =  ${srfsessioncontext('srfloginname','{"defname":"ASSIGNEDTO","dename":"ZT_TASK"}')} ) 

```
### Bug相关任务(BugTask)<div id="Task_BugTask"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
0 AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_TASK WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) AS `MODULENAME1`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
CONCAT_WS(':',t1.id,t61.realname,t1.`name`) as `NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end) AS `TASKTYPE`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID
LEFT JOIN zt_user t61 on t61.account = t1.assignedTo
WHERE t1.deleted = '0' 
t1.project = #{srf.webcontext.project} 

```
### 通过模块查询(ByModule)<div id="Task_ByModule"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end) AS `TASKTYPE`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID 

WHERE t1.DELETED = '0' 
FIND_IN_SET (${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_PROJECTMODULE"}')}, t11.`PATH`) 
( t1.`PARENT` = 0  or  t1.`PARENT` = -1) 

```
### 子任务(ChildTask)<div id="Task_ChildTask"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
0 AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_TASK WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end) AS `TASKTYPE`,
t1.`TYPE`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID 

WHERE t1.DELETED = '0' 
( 1<>1 ) 

```
### 用户年度完成任务(CurFinishTask)<div id="Task_CurFinishTask"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
0 AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_TASK WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end) AS `TASKTYPE`,
t1.`TYPE`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID 

WHERE t1.DELETED = '0' 
( t1.`FINISHEDBY` =  ${srfsessioncontext('srfloginname','{"defname":"FINISHEDBY","dename":"ZT_TASK"}')}  AND  left(t1.finishedDate,4) = #{srf.webcontext.curyear} ) 

```
### DEFAULT(DEFAULT)<div id="Task_Default"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_TASK WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) AS `MODULENAME1`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end) AS `TASKTYPE`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID
WHERE t1.DELETED = '0' 

```
### DefaultRow(DefaultRow)<div id="Task_DefaultRow"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_TASK WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1 ) AS `MODULENAME1`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end) AS `TASKTYPE`,
t1.`desc`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID
WHERE t1.DELETED = '0' 

```
### 我的收藏(MyFavorites)<div id="Task_MyFavorites"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_TASK WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) AS `MODULENAME1`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end) AS `TASKTYPE`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID
WHERE t1.DELETED = '0' 
t1.id in (select t.OBJECTID from T_IBZ_FAVORITES t where t.type = 'task' and t.account = #{srf.sessioncontext.srfloginname}) 

```
### 项目任务(ProjectTASK)<div id="Task_ProjectTASK"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_TASK WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root LIMIT 0,1) AS `MODULENAME1`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end) AS `TASKTYPE`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID
WHERE t1.DELETED = '0' 
( t1.`PARENT` <= 0 ) 

```
### 根任务(RootTask)<div id="Task_RootTask"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t61.`REALNAME`  AS `ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`))  AS `DURATION`,
(select (case when COUNT(t.IBZ_FAVORITESID) > 0 then 1 else 0 end ) as ISFAVORITES from T_IBZ_FAVORITES t where t.TYPE = 'task' and t.ACCOUNT = #{srf.sessioncontext.srfloginname} and t.OBJECTID = t1.id) AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_TASK WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end) AS `TASKTYPE`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID 
LEFT JOIN zt_user t61 on t1.ASSIGNEDTO =  t61.ACCOUNT

WHERE 
t1.DELETED = '0' 
AND
( ( t1.`PARENT` = 0  OR  t1.`PARENT` IS NULL  OR  t1.`PARENT` = -1 ) )
```
### todo任务列表查询(TodoListTask)<div id="Task_TodoListTask"></div>
```sql
SELECT
	t1.* 
FROM
	(
SELECT
	t1.id,
	t1.`name`,
	t1.pri,
	t1.assignedTo,
	t1.finishedBy,
	t1.finishedDate,
	t1.estStarted,
CASE
	
	WHEN t1.`status` IN ( 'done', 'closed' ) THEN
	'1' ELSE '0' 
	END AS isfinished,
	( SELECT count( 1 ) FROM zt_action WHERE objectType = 'task' AND action = 'commented' AND objectid = t1.id ) AS ReplyCount,
CASE
		
		WHEN t1.`desc` IS NULL 
		OR t1.`desc` = '' THEN
			'0' ELSE '1' 
		END AS hasDetail,
		t1.project,
		t1.`TYPE`,
		t1.`status`,
		t1.deleted,
		t1.openeddate,
		t1.closeddate,
		t1.assigneddate,
		t1.deadline,
		t11.`name` AS projectname,
		t1.canceleddate,
		t1.lastediteddate,
		t1.lasteditedby,
		t1.openedby,
		t1.closedby,
		t1.canceledby 
	FROM
		`zt_task` t1
	LEFT JOIN zt_project t11 ON t1.project = t11.id 
) t1
WHERE t1.deleted = '0' 

```
### 任务类型分组(TypeGroup)<div id="Task_TypeGroup"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DELETED`,
t1.`ESTIMATE`,
(SELECT MIN(ESTSTARTED) FROM `zt_task` WHERE DELETED = '0' AND TYPE = t1.`TYPE` AND PROJECT = t1.`PROJECT` and ESTSTARTED <> '0000-00-00') AS `ESTSTARTED`,
(SELECT MAX(DEADLINE) FROM `zt_task` WHERE DELETED = '0' AND TYPE = t1.`TYPE` AND PROJECT = t1.`PROJECT` and DEADLINE <> '0000-00-00') AS `DEADLINE`,
(SELECT DATEDIFF(MAX(DEADLINE),MIN(ESTSTARTED))  FROM `zt_task` WHERE DELETED = '0' AND TYPE = t1.`TYPE` AND PROJECT = t1.`PROJECT` and ESTSTARTED <> '0000-00-00' AND DEADLINE <> '0000-00-00') AS `DURATION`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FROMBUG`,
t1.`ID`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MODULE`,
t21.`NAME` AS `MODULENAME`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PRI`,
t31.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t51.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
t1.`STORY`,
t31.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
t1.`TYPE`,
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end) AS `TASKTYPE`,
(case when t1.storyVersion < t31.version and t31.`status` <> 'changed' then 'storychange'  else t1.`status` end ) as `STATUS1`
FROM `zt_task` t1 
LEFT JOIN zt_task t11 ON t1.PARENT = t11.ID 
LEFT JOIN zt_module t21 ON t1.MODULE = t21.ID 
LEFT JOIN zt_story t31 ON t1.STORY = t31.ID 
LEFT JOIN zt_product t41 ON t31.PRODUCT = t41.ID 
LEFT JOIN zt_project t51 ON t1.PROJECT = t51.ID 

WHERE 
t1.DELETED = '0'
```
### 默认（全部数据）(VIEW)<div id="Task_View"></div>
```sql
SELECT
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`CANCELEDBY`,
t1.`CANCELEDDATE`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CLOSEDREASON`,
t1.`COLOR`,
t1.`CONSUMED`,
t1.`DEADLINE`,
t1.`DELETED`,
t1.`DESC`,
(To_Days(t1.`DEADLINE`)-To_Days(t1.`ESTSTARTED`)) AS `DURATION`,
t1.`ESTIMATE`,
t1.`ESTSTARTED`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`FINISHEDLIST`,
t1.`FROMBUG`,
t1.`ID`,
0 AS `ISFAVORITES`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_TASK WHERE  PARENT = t1.`ID` AND DELETED = '0') THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`LEFT`,
t1.`MAILTO`,
t1.`MODULE`,
t11.`NAME` AS `MODULENAME`,
(case when t1.module = '0' then '/' else (SELECT case when tt.type = 'task' then GROUP_CONCAT( tt.NAME SEPARATOR '>' ) else CONCAT_WS('',t2.`name`,'>',GROUP_CONCAT( tt.NAME SEPARATOR '>' )) end as `name` FROM zt_module tt left join zt_product t2 on tt.root = t2.id WHERE FIND_IN_SET( tt.id, t11.path ) GROUP BY tt.root limit 0,1) end) AS `MODULENAME1`,
( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` ) AS `MULTIPLE`,
t1.`NAME`,
t1.`OPENEDBY`,
t1.`OPENEDDATE`,
t1.`PARENT`,
t51.`NAME` AS `PARENTNAME`,
t11.`PATH`,
t1.`PRI`,
t21.`PRODUCT`,
t41.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t31.`NAME` AS `PROJECTNAME`,
t1.`REALSTARTED`,
t1.`STATUS`,
(case when t1.storyVersion < t21.version and t21.`status` <> 'changed' then 'storychange'  else t1.`status` end ) AS `STATUS1`,
t1.`STORY`,
t21.`TITLE` AS `STORYNAME`,
t1.`STORYVERSION`,
t1.`SUBSTATUS`,
(case when ( SELECT case when count( t.`id` ) > 0 then 1 else 0 end FROM `zt_team` t WHERE t.`type` = 'task' AND t.`root` = t1.`id` )  = 1 then '10' when t1.parent = -1 or (select case when count(t.id) > 0 then 1 else 0 end from zt_task t where t.deleted = '0' and t.parent = t1.id ) = 1  then '20' when t1.parent = 0 then '30' else '40' end) AS `TASKTYPE`,
t1.`TYPE`
FROM `zt_task` t1 
LEFT JOIN zt_module t11 ON t1.MODULE = t11.ID 
LEFT JOIN zt_story t21 ON t1.STORY = t21.ID 
LEFT JOIN zt_project t31 ON t1.PROJECT = t31.ID 
LEFT JOIN zt_product t41 ON t21.PRODUCT = t41.ID 
LEFT JOIN zt_task t51 ON t1.PARENT = t51.ID 

WHERE t1.DELETED = '0' 

```

# **任务预计**(ZT_TASKESTIMATE)

### DEFAULT(DEFAULT)<div id="TaskEstimate_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DATE`,
t1.`date` AS `DATES`,
t1.`ID`,
t1.`LEFT`,
t1.`TASK`
FROM `zt_taskestimate` t1 

```
### DEFAULT1(DEFAULT1)<div id="TaskEstimate_Defaults"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DATE`,
t1.`date` AS `DATES`,
t1.`ID`,
t1.`LEFT`,
t1.`TASK`
FROM `zt_taskestimate` t1 

WHERE ( 1<>1 ) 

```
### 默认（全部数据）(VIEW)<div id="TaskEstimate_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DATE`,
t1.`date` AS `DATES`,
t1.`ID`,
t1.`LEFT`,
t1.`TASK`,
t1.`WORK`
FROM `zt_taskestimate` t1 

```

# **待办消息记录**(TASKMSGRECORD)

### 数据查询(DEFAULT)<div id="TaskMsgRecord_Default"></div>
```sql
SELECT
t1.`APPTASKID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DATAID`,
t1.`ENABLE`,
t1.`MEMO`,
t1.`TASKMSGRECORDID`,
t1.`TASKMSGRECORDNAME`,
t1.`TASKTYPE`,
t1.`TASKUSERID`,
t1.`TITLE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_TASKMSGRECORD` t1 

WHERE t1.ENABLE = 1 

```
### 默认（全部数据）(VIEW)<div id="TaskMsgRecord_View"></div>
```sql
SELECT
t1.`APPTASKID`,
t1.`CREATEDATE`,
t1.`CREATEMAN`,
t1.`DATAID`,
t1.`ENABLE`,
t1.`MEMO`,
t1.`TASKMSGRECORDID`,
t1.`TASKMSGRECORDNAME`,
t1.`TASKTYPE`,
t1.`TASKUSERID`,
t1.`TITLE`,
t1.`UPDATEDATE`,
t1.`UPDATEMAN`
FROM `T_TASKMSGRECORD` t1 

WHERE t1.ENABLE = 1 

```

# **任务团队**(IBZ_TASKTEAM)

### DEFAULT(DEFAULT)<div id="TaskTeam_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DAYS`,
t1.`ESTIMATE`,
t1.`HOURS`,
t1.`ID`,
t1.`JOIN`,
t1.`LEFT`,
t1.`LIMITED`,
t1.`ORDER`,
t1.`ROLE`,
t1.`ROOT`,
(t1.`DAYS` * t1.`HOURS`) AS `TOTAL`,
t1.`TYPE`,
t1.account AS `USERNAME`
FROM `zt_team` t1 

WHERE ( t1.`TYPE` = 'task' ) 

```
### 默认（全部数据）(VIEW)<div id="TaskTeam_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DAYS`,
t1.`ESTIMATE`,
t1.`HOURS`,
t1.`ID`,
t1.`JOIN`,
t1.`LEFT`,
t1.`LIMITED`,
t1.`ORDER`,
t1.`ROLE`,
t1.`ROOT`,
(t1.`DAYS` * t1.`HOURS`) AS `TOTAL`,
t1.`TYPE`,
t1.account AS `USERNAME`
FROM `zt_team` t1 

```

# **群组**(ZT_TEAM)

### DEFAULT(DEFAULT)<div id="Team_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DAYS`,
t1.`ESTIMATE`,
t1.`HOURS`,
t1.`ID`,
t1.`JOIN`,
t1.`LEFT`,
t1.`LIMITED`,
t1.`ORDER`,
t1.`ROLE`,
t1.`ROOT`,
t1.`TYPE`
FROM `zt_team` t1 

```
### 默认（全部数据）(VIEW)<div id="Team_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CONSUMED`,
t1.`DAYS`,
t1.`ESTIMATE`,
t1.`HOURS`,
t1.`ID`,
t1.`JOIN`,
t1.`LEFT`,
t1.`LIMITED`,
t1.`ORDER`,
t1.`ROLE`,
t1.`ROOT`,
t1.`TYPE`
FROM `zt_team` t1 

```

# **测试模块**(IBZ_TESTMODULE)

### BYPATH(BYPATH)<div id="TestModule_ByPath"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t1.`PATH`,
t1.`ROOT`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'story' ) 
FIND_IN_SET (${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_PRODUCTMODULE"}')}, t1.`PATH`) 

```
### DEFAULT(DEFAULT)<div id="TestModule_Default"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t21.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 
LEFT JOIN zt_product t21 ON t1.ROOT = t21.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'story'  AND  t1.`DELETED` = '0' ) 

```
### 父模块(ParentModule)<div id="TestModule_ParentModule"></div>
```sql
SELECT
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`GRADE`,
	t1.`ID`,
	( CASE WHEN EXISTS ( SELECT 1 FROM ZT_MODULE WHERE PARENT = t1.`ID` ) THEN FALSE ELSE TRUE END ) AS `ISLEAF`,
	CONCAT(
	'/',
	(
SELECT
	GROUP_CONCAT( tt.NAME SEPARATOR '/' ) 
FROM
	zt_module tt 
WHERE
	FIND_IN_SET( tt.id, t1.path ) 
	AND tt.type = 'story' 
GROUP BY
	tt.root 
	) 
	) AS `NAME`,
	t1.`ORDER`,
	t1.`OWNER`,
	t1.`PARENT`,
	t21.`NAME` AS `PARENTNAME`,
	t1.`PATH`,
	t1.`ROOT`,
	t11.`NAME` AS `ROOTNAME`,
	t1.`SHORT`,
	t1.`TYPE` 
FROM
	`zt_module` t1
	LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID
	LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID
WHERE t1.type = 'story' 
t1.id <> #{srf.webcontext.id} and find_in_set(#{srf.webcontext.id},t1.path) = 0 
t1.DELETED = '0' 

```
### 根模块(ROOT)<div id="TestModule_Root"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t21.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 
LEFT JOIN zt_product t21 ON t1.ROOT = t21.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'story'  AND  ( t1.`PARENT` IS NULL  OR  t1.`PARENT` = 0 ) ) 

```
### 根模块_无分支(Root_NoBranch)<div id="TestModule_Root_NoBranch"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t21.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 
LEFT JOIN zt_product t21 ON t1.ROOT = t21.ID 

WHERE t1.DELETED = '0' 
( t1.`TYPE` = 'story'  AND  t1.`BRANCH` = 0  AND  ( t1.`PARENT` IS NULL  OR  t1.`PARENT` = 0 ) ) 

```
### TestModule(TestModule)<div id="TestModule_TestModule"></div>
```sql
SELECT
	t1.`BRANCH`,
	t1.`DELETED`,
	t1.`GRADE`,
	t1.`ID`,
	( CASE WHEN EXISTS ( SELECT 1 FROM ZT_MODULE WHERE PARENT = t1.`ID` ) THEN FALSE ELSE TRUE END ) AS `ISLEAF`,
	CONCAT('/',(select GROUP_CONCAT(tt.name SEPARATOR '/') from zt_module tt where FIND_IN_SET(tt.id,t1.path) and tt.type = 'story' GROUP BY tt.root)) as `NAME`,
	t1.`ORDER`,
	t1.`OWNER`,
	t1.`PARENT`,
	t21.`NAME` AS `PARENTNAME`,
	t1.`PATH`,
	t1.`ROOT`,
	t11.`NAME` AS `ROOTNAME`,
	t1.`SHORT`,
	t1.`TYPE` 
FROM
	`zt_module` t1
	LEFT JOIN zt_product t11 ON t1.ROOT = t11.ID
	LEFT JOIN zt_module t21 ON t1.PARENT = t21.ID
WHERE ( t1.`TYPE` = 'story'  AND  t1.`DELETED` = '0' ) 

```
### 默认（全部数据）(VIEW)<div id="TestModule_View"></div>
```sql
SELECT
t1.`BRANCH`,
t1.`COLLECTOR`,
t1.`DELETED`,
t1.`GRADE`,
t1.`ID`,
(CASE WHEN EXISTS (SELECT 1 FROM ZT_MODULE WHERE  PARENT = t1.`ID`) THEN FALSE ELSE TRUE  END ) AS `ISLEAF`,
t1.`NAME`,
t1.`ORDER`,
t1.`OWNER`,
t1.`PARENT`,
t11.`NAME` AS `PARENTNAME`,
t1.`PATH`,
t1.`ROOT`,
t21.`NAME` AS `ROOTNAME`,
t1.`SHORT`,
t1.`TYPE`
FROM `zt_module` t1 
LEFT JOIN zt_module t11 ON t1.PARENT = t11.ID 
LEFT JOIN zt_product t21 ON t1.ROOT = t21.ID 

WHERE t1.DELETED = '0' 

```

# **测试报告**(ZT_TESTREPORT)

### DEFAULT(DEFAULT)<div id="TestReport_Default"></div>
```sql
SELECT
t1.`BEGIN`,
t1.`BUILDS`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`END`,
t1.`ID`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`OWNER`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`TASKS`,
t1.`TITLE`
FROM `zt_testreport` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 

WHERE t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="TestReport_View"></div>
```sql
SELECT
t1.`BEGIN`,
t1.`BUGS`,
t1.`BUILDS`,
t1.`CASES`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`END`,
t1.`ID`,
t1.`MEMBERS`,
t1.`OBJECTID`,
t1.`OBJECTTYPE`,
t1.`OWNER`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTNAME`,
t1.`REPORT`,
t1.`STORIES`,
t1.`TASKS`,
t1.`TITLE`
FROM `zt_testreport` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 

WHERE t1.DELETED = '0' 

```

# **测试结果**(ZT_TESTRESULT)

### CurTestRun(CurTestRun)<div id="TestResult_CurTestRun"></div>
```sql
SELECT
t1.`CASE`,
t1.`CASERESULT`,
t1.`COMPILE`,
t1.`DATE`,
t1.`DURATION`,
t1.`ID`,
t1.`JOB`,
t1.`LASTRUNNER`,
t11.`MODULE`,
t11.`PRODUCT`,
t1.`RUN`,
t11.`STORY`,
t11.`TITLE`,
t1.`VERSION`
FROM `zt_testresult` t1 
LEFT JOIN zt_case t11 ON t1.CASE = t11.ID 
RIGHT JOIN zt_testrun t21 ON t1.RUN = t21.ID 

WHERE ( t21.`TASK` = ${srfwebcontext('task','{"defname":"TASK","dename":"ZT_TESTRUN"}')} ) 

```
### DEFAULT(DEFAULT)<div id="TestResult_Default"></div>
```sql
SELECT
t1.`CASE`,
t1.`CASERESULT`,
t1.`COMPILE`,
t1.`DATE`,
t1.`DURATION`,
t1.`ID`,
t1.`JOB`,
t1.`LASTRUNNER`,
t11.`MODULE`,
t11.`PRODUCT`,
t1.`RUN`,
t11.`STORY`,
t11.`TITLE`,
t1.`VERSION`
FROM `zt_testresult` t1 
LEFT JOIN zt_case t11 ON t1.CASE = t11.ID 

```
### 默认（全部数据）(VIEW)<div id="TestResult_View"></div>
```sql
SELECT
t1.`CASE`,
t1.`CASERESULT`,
t1.`COMPILE`,
t1.`DATE`,
t1.`DURATION`,
t1.`ID`,
t1.`JOB`,
t1.`LASTRUNNER`,
t11.`MODULE`,
t11.`PRECONDITION`,
t11.`PRODUCT`,
t1.`RUN`,
t1.`STEPRESULTS`,
t11.`STORY`,
t11.`TITLE`,
t1.`VERSION`,
t1.`XML`
FROM `zt_testresult` t1 
LEFT JOIN zt_case t11 ON t1.CASE = t11.ID 

```

# **测试运行**(ZT_TESTRUN)

### DEFAULT(DEFAULT)<div id="TestRun_Default"></div>
```sql
SELECT
t1.`ASSIGNEDTO`,
t1.`CASE`,
t1.`ID`,
t1.`LASTRUNDATE`,
t1.`LASTRUNNER`,
t1.`LASTRUNRESULT`,
t1.`STATUS`,
t1.`TASK`,
t1.`VERSION`
FROM `zt_testrun` t1 

```
### 默认（全部数据）(VIEW)<div id="TestRun_View"></div>
```sql
SELECT
t1.`ASSIGNEDTO`,
t1.`CASE`,
t1.`ID`,
t1.`LASTRUNDATE`,
t1.`LASTRUNNER`,
t1.`LASTRUNRESULT`,
t1.`STATUS`,
t1.`TASK`,
t1.`VERSION`
FROM `zt_testrun` t1 

```

# **测试套件**(ZT_TESTSUITE)

### DEFAULT(DEFAULT)<div id="TestSuite_Default"></div>
```sql
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`ID`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`NAME`,
t1.`PRODUCT`,
t1.`TYPE`
FROM `zt_testsuite` t1 

WHERE t1.DELETED = '0' 

```
### 公开套件(PublicTestSuite)<div id="TestSuite_PublicTestSuite"></div>
```sql
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`ID`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`NAME`,
t1.`PRODUCT`,
t1.`TYPE`
FROM `zt_testsuite` t1 

WHERE t1.DELETED = '0' 
( ( t1.`TYPE` = 'public'  OR  ( t1.`TYPE` = 'private'  AND  t1.`ADDEDBY` =  ${srfsessioncontext('srfloginname','{"defname":"ADDEDBY","dename":"ZT_TESTSUITE"}')} ) ) ) 

```
### 默认（全部数据）(VIEW)<div id="TestSuite_View"></div>
```sql
SELECT
t1.`ADDEDBY`,
t1.`ADDEDDATE`,
t1.`DELETED`,
t1.`DESC`,
t1.`ID`,
t1.`LASTEDITEDBY`,
t1.`LASTEDITEDDATE`,
t1.`NAME`,
t1.`PRODUCT`,
t1.`TYPE`
FROM `zt_testsuite` t1 

WHERE t1.DELETED = '0' 

```

# **测试版本**(ZT_TESTTASK)

### DEFAULT(DEFAULT)<div id="TestTask_Default"></div>
```sql
SELECT
t1.`AUTO`,
t1.`BEGIN`,
t1.`BUILD`,
t31.`NAME` AS `BUILDNAME`,
t1.`DELETED`,
t1.`END`,
t1.`ID`,
t1.`NAME`,
t1.`OWNER`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTTNAME`,
t1.`STATUS`,
t1.`SUBSTATUS`
FROM `zt_testtask` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_build t31 ON t1.BUILD = t31.ID 

WHERE t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="TestTask_View"></div>
```sql
SELECT
t1.`AUTO`,
t1.`BEGIN`,
t1.`BUILD`,
t31.`NAME` AS `BUILDNAME`,
t1.`DELETED`,
t1.`DESC`,
t1.`END`,
t1.`ID`,
t1.`MAILTO`,
t1.`NAME`,
t1.`OWNER`,
t1.`PRI`,
t1.`PRODUCT`,
t11.`NAME` AS `PRODUCTNAME`,
t1.`PROJECT`,
t21.`NAME` AS `PROJECTTNAME`,
t1.`REPORT`,
t1.`STATUS`,
t1.`SUBSTATUS`
FROM `zt_testtask` t1 
LEFT JOIN zt_product t11 ON t1.PRODUCT = t11.ID 
LEFT JOIN zt_project t21 ON t1.PROJECT = t21.ID 
LEFT JOIN zt_build t31 ON t1.BUILD = t31.ID 

WHERE t1.DELETED = '0' 

```

# **待办事宜表**(ZT_TODO)

### DEFAULT(DEFAULT)<div id="Todo_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ASSIGNEDBY`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
case when t1.`BEGIN` = 2400 then null else t1.`begin` end as `begin`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CONFIG`,
t1.`CYCLE`,
t1.`DATE` as `DATE`,
(case when t1.`DATE` = '2030-01-01' then '待定' else t1.`DATE` end) AS `DATE1`,
case when t1.`END` = 2400 then null else t1.`END` end as `END`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`ID`,
t1.`IDVALUE`,
case when t1.type = 'bug' then t11.`TITLE` when t1.type = 'task' then t21.`name` when t1.type = 'story' then t31.`TITLE` else t1.`NAME` end `name`,
t1.`PRI`,
t1.`PRIVATE`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_todo` t1 
LEFT JOIN zt_bug t11 on t11.id = t1.idvalue
LEFT JOIN zt_task t21 on t21.id = t1.idvalue
LEFT JOIN zt_story t31 on t31.id = t1.idvalue
WHERE ((#{srf.datacontext.thisyear} = 'thisyear' and YEAR(t1.date) = year(now())) or #{srf.datacontext.thisyear} is null) 
( t1.`ACCOUNT` =  ${srfsessioncontext('srfloginname','{"defname":"ACCOUNT","dename":"ZT_TODO"}')}  or t1.`assignedTo` =  ${srfsessioncontext('srfloginname','{"defname":"ACCOUNT","dename":"ZT_TODO"}')}  or t1.`finishedBy` =  ${srfsessioncontext('srfloginname','{"defname":"ACCOUNT","dename":"ZT_TODO"}')}   ) 

```
### 我的待办(MyTodo)<div id="Todo_MyTodo"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ASSIGNEDBY`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BEGIN`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CONFIG`,
t1.`CYCLE`,
t1.`DATE`,
(case when t1.`DATE` = '2030-01-01' then '待定' else t1.`DATE` end) AS `DATE1`,
t1.`END`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`ID`,
t1.`IDVALUE`,
t1.`NAME`,
t1.`PRI`,
t1.`PRIVATE`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_todo` t1 

WHERE ( t1.`ACCOUNT` =  ${srfsessioncontext('srfloginname','{"defname":"ACCOUNT","dename":"ZT_TODO"}')}  or t1.`assignedTo` =  ${srfsessioncontext('srfloginname','{"defname":"ACCOUNT","dename":"ZT_TODO"}')}  or t1.`finishedBy` =  ${srfsessioncontext('srfloginname','{"defname":"ACCOUNT","dename":"ZT_TODO"}')}   ) 
t1.`CYCLE` = 0 

```
### MyUpcoming(MyUpcoming)<div id="Todo_MyUpcoming"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ASSIGNEDBY`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
case when t1.`BEGIN` = 2400 then null else t1.`begin` end as `begin`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CONFIG`,
t1.`CYCLE`,
t1.`DATE` as `DATE`,
DATE_FORMAT(t1.`date`,'%c月%d日') AS `DATE1`,
case when t1.`END` = 2400 then null else t1.`END` end as `END`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`ID`,
t1.`IDVALUE`,
case when t1.type = 'bug' then t11.`TITLE` when t1.type = 'task' then t21.`name` when t1.type = 'story' then t31.`TITLE` else t1.`NAME` end `name`,
t1.`PRI`,
t1.`PRIVATE`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_todo` t1 
LEFT JOIN zt_bug t11 on t11.id = t1.idvalue
LEFT JOIN zt_task t21 on t21.id = t1.idvalue
LEFT JOIN zt_story t31 on t31.id = t1.idvalue
WHERE ( t1.`ACCOUNT` =  ${srfsessioncontext('srfloginname','{"defname":"ACCOUNT","dename":"ZT_TODO"}')}  or t1.`assignedTo` =  ${srfsessioncontext('srfloginname','{"defname":"ACCOUNT","dename":"ZT_TODO"}')}  or t1.`finishedBy` =  ${srfsessioncontext('srfloginname','{"defname":"ACCOUNT","dename":"ZT_TODO"}')}   ) 

```
### 默认（全部数据）(VIEW)<div id="Todo_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ASSIGNEDBY`,
t1.`ASSIGNEDDATE`,
t1.`ASSIGNEDTO`,
t1.`BEGIN`,
t1.`CLOSEDBY`,
t1.`CLOSEDDATE`,
t1.`CONFIG`,
t1.`CYCLE`,
t1.`DATE`,
(case when t1.`DATE` = '2030-01-01' then '待定' else t1.`DATE` end) AS `DATE1`,
t1.`DESC`,
t1.`END`,
t1.`FINISHEDBY`,
t1.`FINISHEDDATE`,
t1.`ID`,
t1.`IDVALUE`,
t1.`NAME`,
t1.`PRI`,
t1.`PRIVATE`,
t1.`STATUS`,
t1.`TYPE`
FROM `zt_todo` t1 

```

# **用户**(ZT_USER)

### Bug用户(BugUser)<div id="User_BugUser"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

WHERE t1.DELETED = '0' 
(${srfdatacontext('project','{"defname":"ID","dename":"ZT_RELEASE"}')} is null or ${srfdatacontext('project','{"defname":"ID","dename":"ZT_RELEASE"}')} = '0' or t1.account in (select tt.account from zt_team tt where tt.type = 'project' and tt.root = ${srfdatacontext('project','{"defname":"ID","dename":"ZT_RELEASE"}')})) 

```
### DEFAULT(DEFAULT)<div id="User_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

WHERE t1.DELETED = '0' 

```
### 账户获取登录名(getByLogin)<div id="User_GetByLogin"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

WHERE t1.DELETED = '0' 
( ( t1.`ACCOUNT` = 'account'  OR  t1.`MOBILE` = 'mobile'  OR  t1.`EMAIL` = 'email'  OR  t1.`COMMITER` = 'commiter' ) ) 

```
### 项目团队管理(ProjectTeamM)<div id="User_ProjectTeamM"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

WHERE t1.DELETED = '0' 
( (t1.account = ${srfwebcontext('account','{"defname":"ACCOUNT","dename":"ZT_USER"}')} or t1.account not in (select t.account from zt_team t where t.type = 'project' and t.root = ${srfwebcontext('srfparentkey','{"defname":"ACCOUNT","dename":"ZT_USER"}')})) ) 

```
### 项目团队成员(ProjectTeamUser)<div id="User_ProjectTeamUser"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

WHERE t1.DELETED = '0' 
t1.`account` in (select t.`account` from zt_team t where t.`type` = 'project' and t.`root` = ${srfdatacontext('project','{"defname":"ID","dename":"ZT_RELEASE"}')}) 
t1.`account` not in(select t2.`account` from zt_user t2 where FIND_IN_SET(t2.`account`, ${srfdatacontext('account','{"defname":"ID","dename":"ZT_RELEASE"}')})) 

```
### 项目团队成员(ProjectTeamUser_Task)<div id="User_ProjectTeamUser_Task"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

WHERE t1.DELETED = '0' 
t1.`account` in (select t.`account` from zt_team t where t.`type` = 'project' and t.`root` = (select tt.`project` from zt_task tt where tt.`id` = ${srfdatacontext('srfparentkey','{"defname":"ID","dename":"ZT_RELEASE"}')})) 
t1.`account` not in(select t2.`account` from zt_user t2 where FIND_IN_SET(t2.`account`, ${srfdatacontext('account','{"defname":"ID","dename":"ZT_RELEASE"}')})) 

```
### TASKTEAM(TASKTEAM)<div id="User_TaskTeam"></div>
```sql
SELECT t1.`ACCOUNT`, t1.`ADDRESS`, t1.`AVATAR`, t1.`BIRTHDAY`, t1.`CLIENTLANG`, t1.`CLIENTSTATUS`, t1.`COMMITER`, t1.`DELETED`, t1.`DEPT`, t1.`DINGDING`, t1.`EMAIL`, t1.`FAILS`, t1.`GENDER`, t1.`ID`, t1.`IP`, t1.`JOIN`, t1.`LAST`, t1.`LOCKED`, t1.`MOBILE`, t1.`NICKNAME`, t1.`PASSWORD`, t1.`PHONE`, t1.`QQ`, t1.`RANZHI`, t1.`REALNAME`, t1.`ROLE`, t1.`SCORE`, t1.`SCORELEVEL`, t1.`SKYPE`, t1.`SLACK`, t1.`VISITS`, t1.`WEIXIN`, t1.`WHATSAPP`, t1.`ZIPCODE` FROM `zt_user` t1
WHERE t1.DELETED = '0' 
(t1.`account` in (select t.`account` from zt_team t where t.`type` = 'task' and ${srfdatacontext('multiple','{"defname":"ID","dename":"ZT_RELEASE"}')} = '1'  and t.`root` = ${srfdatacontext('id','{"defname":"ID","dename":"ZT_RELEASE"}')}) or 
t1.`account` in (select t.`account` from zt_team t where t.`type` = 'project' and ${srfdatacontext('multiple','{"defname":"ID","dename":"ZT_RELEASE"}')} = '0'  and t.`root` = (select tt.`project` from zt_task tt where tt.`id` = ${srfdatacontext('id','{"defname":"ID","dename":"ZT_RELEASE"}')}))
) 

```
### 默认（全部数据）(VIEW)<div id="User_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
t1.`ZIPCODE`
FROM `zt_user` t1 

WHERE t1.DELETED = '0' 

```

# **用户联系方式**(ZT_USERCONTACT)

### DEFAULT(DEFAULT)<div id="UserContact_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ID`,
t1.`LISTNAME`
FROM `zt_usercontact` t1 

```
### 默认（全部数据）(VIEW)<div id="UserContact_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ID`,
t1.`LISTNAME`,
t1.`USERLIST`
FROM `zt_usercontact` t1 

```

# **用户组**(ZT_USERGROUP)

### DEFAULT(DEFAULT)<div id="UserGroup_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`GROUP`,
concat(t1.`ACCOUNT`,'__',t1.`GROUP`) AS `ID`
FROM `zt_usergroup` t1 

```
### 默认（全部数据）(VIEW)<div id="UserGroup_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`GROUP`,
concat(t1.`ACCOUNT`,'__',t1.`GROUP`) AS `ID`
FROM `zt_usergroup` t1 

```

# **用户查询**(ZT_USERQUERY)

### DEFAULT(DEFAULT)<div id="UserQuery_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ID`,
t1.`MODULE`,
t1.`SHORTCUT`,
t1.`TITLE`
FROM `zt_userquery` t1 

```
### 默认（全部数据）(VIEW)<div id="UserQuery_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`FORM`,
t1.`ID`,
t1.`MODULE`,
t1.`SHORTCUT`,
t1.`SQL`,
t1.`TITLE`
FROM `zt_userquery` t1 

```

# **用户模板**(ZT_USERTPL)

### DEFAULT(DEFAULT)<div id="UserTpl_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CONTENT`,
t1.`ID`,
t1.`PUBLIC`,
t1.`TITLE`,
t1.`TYPE`
FROM `zt_usertpl` t1 

WHERE ( ( t1.`PUBLIC` = '1'  OR  t1.`ACCOUNT` =  ${srfwebcontext('account','{"defname":"ACCOUNT","dename":"ZT_USERTPL"}')} )  AND  t1.`TYPE` =  ${srfwebcontext('type','{"defname":"TYPE","dename":"ZT_USERTPL"}')} ) 

```
### 默认（全部数据）(VIEW)<div id="UserTpl_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`CONTENT`,
t1.`ID`,
t1.`PUBLIC`,
t1.`TITLE`,
t1.`TYPE`
FROM `zt_usertpl` t1 

```

# **用户视图**(ZT_USERVIEW)

### DEFAULT(DEFAULT)<div id="UserView_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
concat(t1.`ACCOUNT`) AS `ID`
FROM `zt_userview` t1 

```
### 默认（全部数据）(VIEW)<div id="UserView_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
concat(t1.`ACCOUNT`) AS `ID`,
t1.`PRODUCTS`,
t1.`PROJECTS`
FROM `zt_userview` t1 

```

# **用户年度工作内容统计**(IBZ_USERYEARWORKSTATS)

### 数据查询(DEFAULT)<div id="UserYearWorkStats_Default"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
'一月' AS `CURMONTH`,
(DATE_FORMAT(now(),'%Y')) AS `CURYEAR`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
(case when t1.role in ('dev','td','pm') then 'dev' when t1.role in ('qd','qa') then 'qa' else 'po' end) AS `JUDGEROLE`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
0 AS `MONTESTIMATE`,
0 AS `MONTHFINISHTASK`,
0 AS `MONTRESOLVEDBUG`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
 CONCAT_WS('',(DATE_FORMAT(now(),'%Y')),'年工作内容统计一览表 —— ',t1.realname) AS `TITLE`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
0 AS `YEARACTIONCNT`,
0 AS `YEARBUGCNT`,
0 AS `YEARCASECNT`,
0 AS `YEARESTIMATECNT`,
0 AS `YEARLOGCNT`,
0 AS `YEARPLANCNT`,
0 AS `YEARPRODUCTCNT`,
0 AS `YEARSTORYCNT`,
(select count(1) from zt_action t where t.actor = t1.account and t.action = 'login' and DATE_FORMAT(t.date,'%Y') = DATE_FORMAT(now(),'%Y')) AS `YEARVISITS`,
t1.`ZIPCODE`
FROM `zt_user` t1 

```
### 月完成任务数及累计工时和解决Bug数(MonthFinishTaskAndBug)<div id="UserYearWorkStats_MonthFinishTaskAndBug"></div>
```sql
select t1.account,CONCAT_WS('',CASE 
	WHEN t21.`YEAR` is NULL THEN
		#{srf.webcontext.curyear}
	ELSE
		t21.`YEAR`
END ,'-',t1.CURMONTH,'-01 00:00:00') as CURMONTH,case when t11.consumed is null then 0 else t11.consumed end as MONTESTIMATE,case when t11.MONTHFINISHTASK is null then 0 else t11.MONTHFINISHTASK end as MONTHFINISHTASK,case when t21.ss is null then 0 else t21.ss end as MONTRESOLVEDBUG   from (
select * from (select DISTINCT t1.actor as account,'01' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'02' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'03' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'04' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'05' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'06' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'07' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'08' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'09' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'10' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'11' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'12' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t) t1 left join (
SELECT
	t11.account,
	t11.date,
	sum( t11.`consumed` ) AS `consumed`,
	COUNT( t11.task ) AS MONTHFINISHTASK 
FROM
	(
SELECT
  DATE_FORMAT( t11.date, '%Y' ) AS `YEAR`,
	DATE_FORMAT( t11.date, '%m' ) AS date,
	t11.account,
	t11.`consumed`,
	t11.task 
FROM
	zt_taskestimate t11 
	) t11 
WHERE
	t11.date NOT IN ( '00', '' ) and t11.`YEAR` = #{srf.webcontext.curyear}
GROUP BY
	t11.account,
	t11.date ) t11 on t11.account = t1.account and t11.date = t1.curmonth
	left join (
SELECT
	tt.`YEAR`,
	tt.resolvedBy,
	tt.resolvedDate,
	COUNT( 1 ) AS ss 
FROM
	( SELECT DATE_FORMAT( t.resolvedDate, '%Y' ) as `YEAR`,DATE_FORMAT( t.resolvedDate, '%m' ) AS resolvedDate, t.resolvedBy FROM zt_bug t WHERE t.resolvedBy <> '' ) tt 
WHERE
	tt.resolvedDate <> '00'  and tt.`YEAR` =   #{srf.webcontext.curyear}
GROUP BY
	tt.resolvedBy,
	tt.resolvedDate ) t21 on t1.account = t21.resolvedBy AND t21.resolvedDate = t1.CURMONTH
WHERE t1.account = #{srf.sessioncontext.srfloginname} 

```
### 月创建Bug数和创建用例数(MonthOpenedBugAndCase)<div id="UserYearWorkStats_MonthOpenedBugAndCase"></div>
```sql
 select t1.account,CONCAT_WS('',case when t11.`year` is not null then t11.`YEAR` when t21.`year` is not null then t21.`year` else DATE_FORMAT( now(), '%Y' ) end  ,'-',t1.CURMONTH,'-01 00:00:00') as CURMONTH,case when t11.MONTRESOLVEDBUG is null then 0 else t11.MONTRESOLVEDBUG end as MONTRESOLVEDBUG,case when t21.YEARCASECNT is null then 0 else t21.YEARCASECNT end as YEARCASECNT  from (
select * from (select DISTINCT t1.actor as account,'01' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'02' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'03' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'04' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'05' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'06' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'07' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'08' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'09' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'10' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'11' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'12' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t) t1 left join (select t11.openedBy,t11.openedDate,COUNT(1) as MONTRESOLVEDBUG,t11.`year` from (select t11.openedBy, DATE_FORMAT( t11.openedDate, '%Y' ) AS `YEAR`, 	DATE_FORMAT( t11.openedDate, '%m' ) AS openedDate from zt_bug t11  where t11.deleted = '0') t11 where t11.`YEAR` = #{srf.webcontext.curyear}
					 GROUP BY t11.openedBy,t11.openedDate ) t11 on t11.openedBy = t1.account and t11.openedDate = t1.curmonth 	left join (select t11.openedBy,t11.openedDate,COUNT(1) as YEARCASECNT,t11.`year` from (select t11.openedBy, DATE_FORMAT( t11.openedDate, '%Y' ) AS `YEAR`, 	DATE_FORMAT( t11.openedDate, '%m' ) AS openedDate from zt_case t11  where t11.deleted = '0') t11 where t11.`YEAR` =#{srf.webcontext.curyear} 
					 GROUP BY t11.openedBy,t11.openedDate ) t21 on t21.openedBy = t1.account and t21.openedDate = t1.curmonth
WHERE t1.account = #{srf.sessioncontext.srfloginname} 

```
### 月创建需求数(MonthOpenedStory)<div id="UserYearWorkStats_MonthOpenedStory"></div>
```sql
select t1.account,CONCAT_WS('',CASE 
	WHEN t11.`YEAR` is NULL THEN
		 #{srf.webcontext.curyear}
	ELSE
		t11.`YEAR`
END ,'-',t1.CURMONTH,'-01 00:00:00') as CURMONTH,case when t11.YEARSTORYCNT is null then 0 else t11.YEARSTORYCNT end as YEARSTORYCNT  from (
select * from (select DISTINCT t1.actor as account,'01' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'02' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'03' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'04' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'05' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'06' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'07' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'08' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'09' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'10' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'11' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t
UNION
select * from (select DISTINCT t1.actor as account,'12' as curmonth from zt_action t1 where t1.actor <> '' and t1.actor is not null) t) t1 left join (select t11.openedBy,t11.`year`,t11.openedDate,COUNT(1) as YEARSTORYCNT from (select t11.openedBy, DATE_FORMAT( t11.openedDate, '%Y' ) AS `YEAR`,
	DATE_FORMAT( t11.openedDate, '%m' ) AS openedDate from zt_story t11  where t11.deleted = '0') t11 where t11.`YEAR` =  #{srf.webcontext.curyear}
	GROUP BY t11.openedBy,t11.openedDate ) t11 on t11.openedBy = t1.account and t11.openedDate = t1.curmonth
WHERE t1.account = #{srf.sessioncontext.srfloginname} 

```
### 默认（全部数据）(VIEW)<div id="UserYearWorkStats_View"></div>
```sql
SELECT
t1.`ACCOUNT`,
t1.`ADDRESS`,
t1.`AVATAR`,
t1.`BIRTHDAY`,
t1.`CLIENTLANG`,
t1.`CLIENTSTATUS`,
t1.`COMMITER`,
'一月' AS `CURMONTH`,
(DATE_FORMAT(now(),'%Y')) AS `CURYEAR`,
t1.`DELETED`,
t1.`DEPT`,
t1.`DINGDING`,
t1.`EMAIL`,
t1.`FAILS`,
t1.`GENDER`,
t1.`ID`,
t1.`IP`,
t1.`JOIN`,
(case when t1.role in ('dev','td','pm') then 'dev' when t1.role in ('qd','qa') then 'qa' else 'po' end) AS `JUDGEROLE`,
t1.`LAST`,
t1.`LOCKED`,
t1.`MOBILE`,
0 AS `MONTESTIMATE`,
0 AS `MONTHFINISHTASK`,
0 AS `MONTRESOLVEDBUG`,
t1.`NICKNAME`,
t1.`PASSWORD`,
t1.`PHONE`,
t1.`QQ`,
t1.`RANZHI`,
t1.`REALNAME`,
t1.`ROLE`,
t1.`SCORE`,
t1.`SCORELEVEL`,
t1.`SKYPE`,
t1.`SLACK`,
 CONCAT_WS('',(DATE_FORMAT(now(),'%Y')),'年工作内容统计一览表 —— ',t1.realname) AS `TITLE`,
t1.`VISITS`,
t1.`WEIXIN`,
t1.`WHATSAPP`,
0 AS `YEARACTIONCNT`,
0 AS `YEARBUGCNT`,
0 AS `YEARCASECNT`,
0 AS `YEARESTIMATECNT`,
0 AS `YEARLOGCNT`,
0 AS `YEARPLANCNT`,
0 AS `YEARPRODUCTCNT`,
0 AS `YEARSTORYCNT`,
(select count(1) from zt_action t where t.actor = t1.account and t.action = 'login' and DATE_FORMAT(t.date,'%Y') = DATE_FORMAT(now(),'%Y')) AS `YEARVISITS`,
t1.`ZIPCODE`
FROM `zt_user` t1 

```

# **网页钩子**(ZT_WEBHOOK)

### DEFAULT(DEFAULT)<div id="WebHook_Default"></div>
```sql
SELECT
t1.`CONTENTTYPE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`DOMAIN`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`ID`,
t1.`NAME`,
t1.`PARAMS`,
t1.`SECRET`,
t1.`SENDTYPE`,
t1.`TYPE`,
t1.`URL`
FROM `zt_webhook` t1 

WHERE t1.DELETED = '0' 

```
### 默认（全部数据）(VIEW)<div id="WebHook_View"></div>
```sql
SELECT
t1.`ACTIONS`,
t1.`CONTENTTYPE`,
t1.`CREATEDBY`,
t1.`CREATEDDATE`,
t1.`DELETED`,
t1.`DESC`,
t1.`DOMAIN`,
t1.`EDITEDBY`,
t1.`EDITEDDATE`,
t1.`ID`,
t1.`NAME`,
t1.`PARAMS`,
t1.`PRODUCTS`,
t1.`PROJECTS`,
t1.`SECRET`,
t1.`SENDTYPE`,
t1.`TYPE`,
t1.`URL`
FROM `zt_webhook` t1 

WHERE t1.DELETED = '0' 

```

