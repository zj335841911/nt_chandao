<template>
    <i-form :model="this.data" class='app-form' ref='form'  id='form' style="">
    <input style="display:none;" />
    <row >
            
<i-col v-show="detailsModel.group1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 14, offset: 1 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.group1.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.task.mainedit_form.details.group1')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.name.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 20, offset: 0 }">
    <app-form-item name='name' :itemRules="this.rules.name" class='' :caption="$t('entities.task.mainedit_form.details.name')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.name.error" :isEmptyCaption="false" labelPos="NONE">
    <input-box v-model="data.name"  @enter="onEnter($event)"   unit=""  :disabled="detailsModel.name.disabled" type='text'  style=""></input-box>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.multiple.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 4, offset: 0 }">
    <app-form-item name='multiple' :itemRules="this.rules.multiple" class='' :caption="$t('entities.task.mainedit_form.details.multiple')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.multiple.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-switch name='multiple' :value="this.data.multiple" @change="($event)=>{this.data.multiple = $event} " :disabled="detailsModel.multiple.disabled" style=""></app-switch>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.grouppanel6.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel6.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.task.mainedit_form.details.grouppanel6')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.desc.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='desc' :itemRules="this.rules.desc" class='' :caption="$t('entities.task.mainedit_form.details.desc')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.desc.error" :isEmptyCaption="false" labelPos="NONE">
    <app-rich-text-editor :formState="formState" :value="data.desc" @change="(val) =>{this.data.desc =val}" :disabled="detailsModel.desc.disabled"  name="desc" style=""></app-rich-text-editor>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel7.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel7.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.task.mainedit_form.details.grouppanel7')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.comment.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='comment' :itemRules="this.rules.comment" class='' :caption="$t('entities.task.mainedit_form.details.comment')" uiStyle="DEFAULT" :labelWidth="0" :isShowCaption="false" :error="detailsModel.comment.error" :isEmptyCaption="false" labelPos="NONE">
    <app-rich-text-editor :formState="formState" :value="data.comment" @change="(val) =>{this.data.comment =val}" :disabled="detailsModel.comment.disabled"  name="comment" style=""></app-rich-text-editor>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.files.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='files' :itemRules="this.rules.files" class='' :caption="$t('entities.task.mainedit_form.details.files')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.files.error" :isEmptyCaption="false" labelPos="TOP">
    <app-file-upload :formState="formState" :ignorefieldvaluechange="ignorefieldvaluechange" @formitemvaluechange="onFormItemValueChange" :data="JSON.stringify(this.data)" name='files' :value="data.files" :disabled="detailsModel.files.disabled" uploadparams='{objecttype:"task",objectid: "%id%",version:"1"}' exportparams='{objecttype:"task",objectid: "%id%",version:"1"}' :customparams="{}" style="overflow: auto;"></app-file-upload>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.grouppanel2.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel2.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.task.mainedit_form.details.grouppanel2')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.druipart1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-druipart
    
    :formState="formState"
    paramItem='task' 
    :parentdata='{"srfparentdename":"ZT_TASK","SRFPARENTTYPE":"CUSTOM"}'
    :parameters="[
    ]"
    :context="context"
    :viewparams="viewparams"
    parameterName='task'
    parentName="Task"  
    refviewtype='DELISTVIEW' 
    refreshitems='' 
    :ignorefieldvaluechange="ignorefieldvaluechange"
    viewname='action-history-list-view' 
    :data="JSON.stringify(this.data)" 
    @drdatasaved="drdatasaved($event)"
    style=";overflow: auto;">
</app-form-druipart>

</i-col>
    
    </row>
</app-form-group>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel3.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 7, offset: 1 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel3.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.task.mainedit_form.details.grouppanel3')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.grouppanel1.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel1.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.task.mainedit_form.details.grouppanel1')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.projectname.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='projectname' :itemRules="this.rules.projectname" class='' :caption="$t('entities.task.mainedit_form.details.projectname')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.projectname.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-picker  
  :formState="formState"
  :data="data"
  :context="context"
  :viewparams="viewparams"
  :itemParam='{ }' 
  :disabled="detailsModel.projectname.disabled"
  name='projectname' 
  deMajorField='name'
  deKeyField='project'
  :service="service"
  :acParams="{ serviceName: 'ProjectService', interfaceName: 'FetchDefault'}"
  valueitem='project' 
  :value="data.projectname" 
  editortype="dropdown" 
  style="" 
  @formitemvaluechange="onFormItemValueChange">
</app-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.modulename.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 20, offset: 0 }">
    <app-form-item name='modulename' :itemRules="this.rules.modulename" class='' :caption="$t('entities.task.mainedit_form.details.modulename')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.modulename.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-picker  
  :formState="formState"
  :data="data"
  :context="context"
  :viewparams="viewparams"
  :itemParam='{ }' 
  :disabled="detailsModel.modulename.disabled"
  name='modulename' 
  deMajorField='name'
  deKeyField='projectmodule'
  :service="service"
  :acParams="{ serviceName: 'ProjectModuleService', interfaceName: 'FetchTaskModules'}"
  valueitem='module' 
  :value="data.modulename" 
  editortype="dropdown" 
  style="" 
  @formitemvaluechange="onFormItemValueChange">
</app-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.allmodules.visible" :style="{}"  :lg="{ span: 24, offset: 0 }" :xl="{ span: 4, offset: 0 }">
    <app-form-item name='allmodules' :itemRules="this.rules.allmodules" class='' :caption="$t('entities.task.mainedit_form.details.allmodules')" uiStyle="DEFAULT" :labelWidth="80" :isShowCaption="true" :error="detailsModel.allmodules.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-switch name='allmodules' :value="this.data.allmodules" @change="($event)=>{this.data.allmodules = $event} " :disabled="detailsModel.allmodules.disabled" style=""></app-switch>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.storyname.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='storyname' :itemRules="this.rules.storyname" class='' :caption="$t('entities.task.mainedit_form.details.storyname')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.storyname.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-picker  
  :formState="formState"
  :data="data"
  :context="context"
  :viewparams="viewparams"
  :itemParam='{ }' 
  :disabled="detailsModel.storyname.disabled"
  name='storyname' 
  deMajorField='title'
  deKeyField='story'
  :service="service"
  :acParams="{ serviceName: 'StoryService', interfaceName: 'FetchTaskRelatedStory'}"
  valueitem='story' 
  :value="data.storyname" 
  editortype="dropdown" 
  style="" 
  @formitemvaluechange="onFormItemValueChange">
</app-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.parentname.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='parentname' :itemRules="this.rules.parentname" class='' :caption="$t('entities.task.mainedit_form.details.parentname')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.parentname.error" :isEmptyCaption="false" labelPos="LEFT">
    <app-picker  
  :formState="formState"
  :data="data"
  :context="context"
  :viewparams="viewparams"
  :itemParam='{ }' 
  :disabled="detailsModel.parentname.disabled"
  name='parentname' 
  deMajorField='name'
  deKeyField='task'
  :service="service"
  :acParams="{ serviceName: 'TaskService', interfaceName: 'FetchDefault'}"
  valueitem='parent' 
  :value="data.parentname" 
  editortype="dropdown" 
  style="" 
  @formitemvaluechange="onFormItemValueChange">
</app-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.assignedto.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='assignedto' :itemRules="this.rules.assignedto" class='' :caption="$t('entities.task.mainedit_form.details.assignedto')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.assignedto.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.assignedto" :data="data" :itemParam="{}" :disabled="detailsModel.assignedto.disabled"  tag='UserRealNameProject' codelistType='DYNAMIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.grouppanel8.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel8.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.task.mainedit_form.details.grouppanel8')" :isShowCaption="false" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.druipart2.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-druipart
    
    :formState="formState"
    paramItem='task' 
    :parentdata='{"srfparentdefname":"ROOT","srfparentdename":"ZT_TASK","SRFPARENTTYPE":"DER1N","srfparentmode":"DER1N_IBZ_TASKTEAM_ZT_TASK_ROOT","SRFDER1NID":"DER1N_IBZ_TASKTEAM_ZT_TASK_ROOT"}'
    :parameters="[
        { pathName: 'tasks', parameterName: 'task' },
    ]"
    :context="context"
    :viewparams="viewparams"
    parameterName='task'
    parentName="Task"  
    refviewtype='DEGRIDVIEW9' 
    refreshitems='' 
    :ignorefieldvaluechange="ignorefieldvaluechange"
    viewname='task-team-grid-view9-edit' 
    :data="JSON.stringify(this.data)" 
    @drdatasaved="drdatasaved($event)"
    style=";overflow: auto;">
</app-form-druipart>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.type.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='type' :itemRules="this.rules.type" class='' :caption="$t('entities.task.mainedit_form.details.type')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.type.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.type" :data="data" :itemParam="{}" :disabled="detailsModel.type.disabled"  tag='Task__type' codelistType='STATIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.status.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='status' :itemRules="this.rules.status" class='' :caption="$t('entities.task.mainedit_form.details.status')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.status.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.status" :data="data" :itemParam="{}" :disabled="detailsModel.status.disabled"  tag='Task__status' codelistType='STATIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.pri.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='pri' :itemRules="this.rules.pri" class='' :caption="$t('entities.task.mainedit_form.details.pri')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.pri.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.pri" :data="data" :itemParam="{}" :disabled="detailsModel.pri.disabled"  tag='Task__pri' codelistType='STATIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.mailto.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='mailto' :itemRules="this.rules.mailto" class='' :caption="$t('entities.task.mainedit_form.details.mailto')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.mailto.error" :isEmptyCaption="false" labelPos="LEFT">
    <dropdown-list-mpicker v-model="data.mailto" :itemParam="{}" :disabled="detailsModel.mailto.disabled"  tag='UserRealName' codelistType='DYNAMIC' valueSeparator="," placeholder='请选择...' style=""></dropdown-list-mpicker>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel4.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel4.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.task.mainedit_form.details.grouppanel4')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.eststarted.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='eststarted' :itemRules="this.rules.eststarted" class='' :caption="$t('entities.task.mainedit_form.details.eststarted')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.eststarted.error" :isEmptyCaption="false" labelPos="LEFT">
    <date-picker type="date" :transfer="true" format="yyyy-MM-dd" placeholder="请选择时间..." :value="data.eststarted" :disabled="detailsModel.eststarted.disabled" style="min-width: 150px; width:100px;" @on-change="(val1, val2) => { this.data.eststarted = val1 }"></date-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.deadline.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='deadline' :itemRules="this.rules.deadline" class='' :caption="$t('entities.task.mainedit_form.details.deadline')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.deadline.error" :isEmptyCaption="false" labelPos="LEFT">
    <date-picker type="date" :transfer="true" format="yyyy-MM-dd" placeholder="请选择时间..." :value="data.deadline" :disabled="detailsModel.deadline.disabled" style="min-width: 150px; width:100px;" @on-change="(val1, val2) => { this.data.deadline = val1 }"></date-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.estimate.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='estimate' :itemRules="this.rules.estimate" class='' :caption="$t('entities.task.mainedit_form.details.estimate')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.estimate.error" :isEmptyCaption="false" labelPos="LEFT">
    <input-box v-model="data.estimate"  @enter="onEnter($event)"   unit="小时"  :disabled="detailsModel.estimate.disabled" type='number'  style=""></input-box>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.consumed.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='consumed' :itemRules="this.rules.consumed" class='' :caption="$t('entities.task.mainedit_form.details.consumed')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.consumed.error" :isEmptyCaption="false" labelPos="LEFT">
    <input-box v-model="data.consumed"  @enter="onEnter($event)"   unit="小时"  :disabled="detailsModel.consumed.disabled" type='number'  style=""></input-box>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.left.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='left' :itemRules="this.rules.left" class='' :caption="$t('entities.task.mainedit_form.details.left')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.left.error" :isEmptyCaption="false" labelPos="LEFT">
    <input-box v-model="data.left"  @enter="onEnter($event)"   unit="小时"  :disabled="detailsModel.left.disabled" type='number'  style=""></input-box>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
<i-col v-show="detailsModel.grouppanel5.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-group layoutType="TABLE_24COL" titleStyle="" class='' uiActionGroup="detailsModel.grouppanel5.uiActionGroup" @groupuiactionclick="groupUIActionClick($event)" :caption="$t('entities.task.mainedit_form.details.grouppanel5')" :isShowCaption="true" uiStyle="DEFAULT" :titleBarCloseMode="0" :isInfoGroupMode="false">
    
    <row>
        <i-col v-show="detailsModel.openedby.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='openedby' :itemRules="this.rules.openedby" class='' :caption="$t('entities.task.mainedit_form.details.openedby')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.openedby.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.openedby" :data="data" :itemParam="{}" :disabled="detailsModel.openedby.disabled"  tag='UserRealName' codelistType='DYNAMIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.realstarted.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='realstarted' :itemRules="this.rules.realstarted" class='' :caption="$t('entities.task.mainedit_form.details.realstarted')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.realstarted.error" :isEmptyCaption="false" labelPos="LEFT">
    <date-picker type="date" :transfer="true" format="yyyy-MM-dd" placeholder="请选择时间..." :value="data.realstarted" :disabled="detailsModel.realstarted.disabled" style="min-width: 150px; width:100px;" @on-change="(val1, val2) => { this.data.realstarted = val1 }"></date-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.finishedby.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='finishedby' :itemRules="this.rules.finishedby" class='' :caption="$t('entities.task.mainedit_form.details.finishedby')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.finishedby.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.finishedby" :data="data" :itemParam="{}" :disabled="detailsModel.finishedby.disabled"  tag='UserRealName' codelistType='DYNAMIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.finisheddate.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='finisheddate' :itemRules="this.rules.finisheddate" class='' :caption="$t('entities.task.mainedit_form.details.finisheddate')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.finisheddate.error" :isEmptyCaption="false" labelPos="LEFT">
    <date-picker type="date" :transfer="true" format="yyyy-MM-dd" placeholder="请选择时间..." :value="data.finisheddate" :disabled="detailsModel.finisheddate.disabled" style="min-width: 150px; width:100px;" @on-change="(val1, val2) => { this.data.finisheddate = val1 }"></date-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.canceledby.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='canceledby' :itemRules="this.rules.canceledby" class='' :caption="$t('entities.task.mainedit_form.details.canceledby')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.canceledby.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.canceledby" :data="data" :itemParam="{}" :disabled="detailsModel.canceledby.disabled"  tag='UserRealName' codelistType='DYNAMIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.canceleddate.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='canceleddate' :itemRules="this.rules.canceleddate" class='' :caption="$t('entities.task.mainedit_form.details.canceleddate')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.canceleddate.error" :isEmptyCaption="false" labelPos="LEFT">
    <date-picker type="datetime" :transfer="true" format="yyyy-MM-dd HH:mm:ss" placeholder="请选择时间..." :value="data.canceleddate" :disabled="detailsModel.canceleddate.disabled" style="min-width: 150px; width:160px;" @on-change="(val1, val2) => { this.data.canceleddate = val1 }"></date-picker>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.closedby.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='closedby' :itemRules="this.rules.closedby" class='' :caption="$t('entities.task.mainedit_form.details.closedby')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.closedby.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.closedby" :data="data" :itemParam="{}" :disabled="detailsModel.closedby.disabled"  tag='UserRealName' codelistType='DYNAMIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.closedreason.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='closedreason' :itemRules="this.rules.closedreason" class='' :caption="$t('entities.task.mainedit_form.details.closedreason')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.closedreason.error" :isEmptyCaption="false" labelPos="LEFT">
     <dropdown-list v-model="data.closedreason" :data="data" :itemParam="{}" :disabled="detailsModel.closedreason.disabled"  tag='Task__closed_reason' codelistType='STATIC' placeholder='请选择...' style=""></dropdown-list>
</app-form-item>

</i-col>
<i-col v-show="detailsModel.closeddate.visible" :style="{}"  :lg="{ span: 24, offset: 0 }">
    <app-form-item name='closeddate' :itemRules="this.rules.closeddate" class='' :caption="$t('entities.task.mainedit_form.details.closeddate')" uiStyle="DEFAULT" :labelWidth="100" :isShowCaption="true" :error="detailsModel.closeddate.error" :isEmptyCaption="false" labelPos="LEFT">
    <date-picker type="datetime" :transfer="true" format="yyyy-MM-dd HH:mm:ss" placeholder="请选择时间..." :value="data.closeddate" :disabled="detailsModel.closeddate.disabled" style="min-width: 150px; width:160px;" @on-change="(val1, val2) => { this.data.closeddate = val1 }"></date-picker>
</app-form-item>

</i-col>
    
    </row>
</app-form-group>

</i-col>
    
    </row>
</app-form-group>

</i-col>


    </row>
</i-form>
</template>

<script lang='tsx'>
import { Vue, Component, Prop, Provide, Emit, Watch, Model } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import { Subject, Subscription } from 'rxjs';
import { ControlInterface } from '@/interface/control';
import { UIActionTool,Util } from '@/utils';
import TaskService from '@/service/task/task-service';
import MainEditService from './main-edit-form-service';

import { FormButtonModel, FormPageModel, FormItemModel, FormDRUIPartModel, FormPartModel, FormGroupPanelModel, FormIFrameModel, FormRowItemModel, FormTabPageModel, FormTabPanelModel, FormUserControlModel } from '@/model/form-detail';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
    components: {
      
    }
})
export default class MainEditBase extends Vue implements ControlInterface {

    /**
     * 名称
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected name?: string;

    /**
     * 视图通讯对象
     *
     * @type {Subject<ViewState>}
     * @memberof MainEdit
     */
    @Prop() protected viewState!: Subject<ViewState>;

    /**
     * 应用上下文
     *
     * @type {*}
     * @memberof MainEdit
     */
    @Prop() protected context: any;

    /**
     * 视图参数
     *
     * @type {*}
     * @memberof MainEdit
     */
    @Prop() protected viewparams: any;

    /**
     * 视图状态事件
     *
     * @protected
     * @type {(Subscription | undefined)}
     * @memberof MainEdit
     */
    protected viewStateEvent: Subscription | undefined;

    /**
     * 获取部件类型
     *
     * @returns {string}
     * @memberof MainEdit
     */
    protected getControlType(): string {
        return 'FORM'
    }



    /**
     * 计数器服务对象集合
     *
     * @type {Array<*>}
     * @memberof MainEdit
     */    
    protected counterServiceArray:Array<any> = [];

    /**
     * 建构部件服务对象
     *
     * @type {MainEditService}
     * @memberof MainEdit
     */
    protected service: MainEditService = new MainEditService({ $store: this.$store });

    /**
     * 实体服务对象
     *
     * @type {TaskService}
     * @memberof MainEdit
     */
    protected appEntityService: TaskService = new TaskService({ $store: this.$store });
    


    /**
     * 关闭视图
     *
     * @param {any} args
     * @memberof MainEdit
     */
    protected closeView(args: any): void {
        let _this: any = this;
        _this.$emit('closeview', [args]);
    }

    /**
     *  计数器刷新
     *
     * @memberof MainEdit
     */
    public counterRefresh(){
        const _this:any =this;
        if(_this.counterServiceArray && _this.counterServiceArray.length >0){
            _this.counterServiceArray.forEach((item:any) =>{
                if(item.refreshData && item.refreshData instanceof Function){
                    item.refreshData();
                }
            })
        }
    }


    
    /**
     * 获取多项数据
     *
     * @returns {any[]}
     * @memberof MainEdit
     */
    public getDatas(): any[] {
        return [this.data];
    }

    /**
     * 获取单项树
     *
     * @returns {*}
     * @memberof MainEdit
     */
    public getData(): any {
        return this.data;
    }

    /**
     * 是否默认保存
     *
     * @type {boolean}
     * @memberof MainEdit
     */
    @Prop({ default: false }) protected autosave?: boolean;

    /**
     * 显示处理提示
     *
     * @type {boolean}
     * @memberof MainEdit
     */
    @Prop({ default: true }) protected showBusyIndicator?: boolean;

    /**
     * 部件行为--submit
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected WFSubmitAction!: string;
    
    /**
     * 部件行为--start
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected WFStartAction!: string;
    
    /**
     * 部件行为--update
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected updateAction!: string;
    
    /**
     * 部件行为--remove
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected removeAction!: string;
    
    /**
     * 部件行为--loaddraft
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected loaddraftAction!: string;
    
    /**
     * 部件行为--load
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected loadAction!: string;
    
    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected createAction!: string;

    /**
     * 部件行为--create
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected searchAction!: string;

    /**
     * 视图标识
     *
     * @type {string}
     * @memberof MainEdit
     */
    @Prop() protected viewtag!: string;

    /**
     * 表单状态
     *
     * @type {Subject<any>}
     * @memberof MainEdit
     */
    protected formState: Subject<any> = new Subject();

    /**
     * 忽略表单项值变化
     *
     * @type {boolean}
     * @memberof MainEdit
     */
    protected ignorefieldvaluechange: boolean = false;

    /**
     * 数据变化
     *
     * @private
     * @type {Subject<any>}
     * @memberof MainEdit
     */
    private dataChang: Subject<any> = new Subject();

    /**
     * 视图状态事件
     *
     * @private
     * @type {(Subscription | undefined)}
     * @memberof MainEdit
     */
    private dataChangEvent: Subscription | undefined;

    /**
     * 原始数据
     *
     * @private
     * @type {*}
     * @memberof MainEdit
     */
    private oldData: any = {};

    /**
     * 表单数据对象
     *
     * @type {*}
     * @memberof MainEdit
     */
    protected data: any = {
        srfupdatedate: null,
        srforikey: null,
        srfkey: null,
        srfmajortext: null,
        srftempmode: null,
        srfuf: null,
        srfdeid: null,
        srfsourcekey: null,
        id: null,
        name: null,
        multiple: null,
        desc: null,
        comment: null,
        files: null,
        projectname: null,
        project: null,
        module: null,
        modulename: null,
        allmodules: null,
        storyname: null,
        story: null,
        parentname: null,
        parent: null,
        assignedto: null,
        type: null,
        status: null,
        pri: null,
        mailto: null,
        eststarted: null,
        deadline: null,
        estimate: null,
        consumed: null,
        left: null,
        openedby: null,
        realstarted: null,
        finishedby: null,
        finisheddate: null,
        canceledby: null,
        canceleddate: null,
        closedby: null,
        closedreason: null,
        closeddate: null,
        task:null,
    };

    /**
      * 当前执行的行为逻辑
      *
      * @type {string}
      * @memberof MainEdit
      */
    protected currentAction: string = "";

    /**
      * 关系界面计数器
      *
      * @type {number}
      * @memberof MainEdit
      */
    protected drcounter: number = 0;

    /**
      * 需要等待关系界面保存时，第一次调用save参数的备份
      *
      * @type {number}
      * @memberof MainEdit
      */
    protected drsaveopt: any = {};

    /**
      * 表单保存回调存储对象
      *
      * @type {any}
      * @memberof MainEdit
      */
    protected saveState:any ;

    /**
     * 属性值规则
     *
     * @type {*}
     * @memberof MainEdit
     */
    protected rules: any = {
        srfupdatedate: [
            { type: 'string', message: '最后修改日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '最后修改日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '最后修改日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '最后修改日期 值不能为空', trigger: 'blur' },
        ],
        srforikey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfkey: [
            { type: 'number', message: '编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'blur' },
        ],
        srfmajortext: [
            { type: 'string', message: '任务名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '任务名称 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '任务名称 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '任务名称 值不能为空', trigger: 'blur' },
        ],
        srftempmode: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfuf: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfdeid: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        srfsourcekey: [
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: ' 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: ' 值不能为空', trigger: 'blur' },
        ],
        id: [
            { type: 'number', message: '编号 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '编号 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '编号 值不能为空', trigger: 'blur' },
        ],
        name: [
            { type: 'string', message: '任务名称 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '任务名称 值必须为字符串类型', trigger: 'blur' },
            { required: true, type: 'string', message: '任务名称 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '任务名称 值不能为空', trigger: 'blur' },
        ],
        multiple: [
            { type: 'number', message: '多人任务 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '多人任务 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '多人任务 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '多人任务 值不能为空', trigger: 'blur' },
        ],
        desc: [
            { type: 'string', message: '任务描述 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '任务描述 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '任务描述 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '任务描述 值不能为空', trigger: 'blur' },
        ],
        comment: [
            { type: 'string', message: '备注 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '备注 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '备注 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '备注 值不能为空', trigger: 'blur' },
        ],
        files: [
            { type: 'string', message: '附件 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '附件 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '附件 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '附件 值不能为空', trigger: 'blur' },
        ],
        projectname: [
            { type: 'string', message: '所属项目 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '所属项目 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '所属项目 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所属项目 值不能为空', trigger: 'blur' },
        ],
        project: [
            { type: 'number', message: '所属项目 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '所属项目 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '所属项目 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '所属项目 值不能为空', trigger: 'blur' },
        ],
        module: [
            { type: 'number', message: 'id 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: 'id 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: 'id 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: 'id 值不能为空', trigger: 'blur' },
        ],
        modulename: [
            { type: 'string', message: '所属模块 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '所属模块 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '所属模块 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所属模块 值不能为空', trigger: 'blur' },
        ],
        allmodules: [
            { type: 'string', message: '所有模块 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '所有模块 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '所有模块 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '所有模块 值不能为空', trigger: 'blur' },
        ],
        storyname: [
            { type: 'string', message: '相关需求 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '相关需求 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '相关需求 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '相关需求 值不能为空', trigger: 'blur' },
        ],
        story: [
            { type: 'number', message: '相关需求 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '相关需求 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '相关需求 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '相关需求 值不能为空', trigger: 'blur' },
        ],
        parentname: [
            { type: 'string', message: '父任务 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '父任务 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '父任务 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '父任务 值不能为空', trigger: 'blur' },
        ],
        parent: [
            { type: 'number', message: '父任务 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '父任务 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '父任务 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '父任务 值不能为空', trigger: 'blur' },
        ],
        assignedto: [
            { type: 'string', message: '指派给 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '指派给 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '指派给 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '指派给 值不能为空', trigger: 'blur' },
        ],
        type: [
            { type: 'string', message: '任务类型 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '任务类型 值必须为字符串类型', trigger: 'blur' },
            { required: true, type: 'string', message: '任务类型 值不能为空', trigger: 'change' },
            { required: true, type: 'string', message: '任务类型 值不能为空', trigger: 'blur' },
        ],
        status: [
            { type: 'string', message: '任务状态 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '任务状态 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '任务状态 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '任务状态 值不能为空', trigger: 'blur' },
        ],
        pri: [
            { type: 'number', message: '优先级 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '优先级 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '优先级 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '优先级 值不能为空', trigger: 'blur' },
        ],
        mailto: [
            { type: 'string', message: '抄送给 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '抄送给 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '抄送给 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '抄送给 值不能为空', trigger: 'blur' },
        ],
        eststarted: [
            { type: 'string', message: '预计开始 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '预计开始 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '预计开始 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '预计开始 值不能为空', trigger: 'blur' },
        ],
        deadline: [
            { type: 'string', message: '截止日期 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '截止日期 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '截止日期 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '截止日期 值不能为空', trigger: 'blur' },
        ],
        estimate: [
            { type: 'number', message: '最初预计 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '最初预计 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '最初预计 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '最初预计 值不能为空', trigger: 'blur' },
        ],
        consumed: [
            { type: 'number', message: '总计消耗 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '总计消耗 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '总计消耗 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '总计消耗 值不能为空', trigger: 'blur' },
        ],
        left: [
            { type: 'number', message: '预计剩余 值必须为数值类型', trigger: 'change' },
            { type: 'number', message: '预计剩余 值必须为数值类型', trigger: 'blur' },
            { required: false, type: 'number', message: '预计剩余 值不能为空', trigger: 'change' },
            { required: false, type: 'number', message: '预计剩余 值不能为空', trigger: 'blur' },
        ],
        openedby: [
            { type: 'string', message: '由谁创建 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '由谁创建 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '由谁创建 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁创建 值不能为空', trigger: 'blur' },
        ],
        realstarted: [
            { type: 'string', message: '实际开始 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '实际开始 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '实际开始 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '实际开始 值不能为空', trigger: 'blur' },
        ],
        finishedby: [
            { type: 'string', message: '由谁完成 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '由谁完成 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '由谁完成 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁完成 值不能为空', trigger: 'blur' },
        ],
        finisheddate: [
            { type: 'string', message: '实际完成 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '实际完成 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '实际完成 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '实际完成 值不能为空', trigger: 'blur' },
        ],
        canceledby: [
            { type: 'string', message: '由谁取消 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '由谁取消 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '由谁取消 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁取消 值不能为空', trigger: 'blur' },
        ],
        canceleddate: [
            { type: 'string', message: '取消时间 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '取消时间 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '取消时间 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '取消时间 值不能为空', trigger: 'blur' },
        ],
        closedby: [
            { type: 'string', message: '由谁关闭 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '由谁关闭 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '由谁关闭 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '由谁关闭 值不能为空', trigger: 'blur' },
        ],
        closedreason: [
            { type: 'string', message: '关闭原因 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '关闭原因 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '关闭原因 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关闭原因 值不能为空', trigger: 'blur' },
        ],
        closeddate: [
            { type: 'string', message: '关闭时间 值必须为字符串类型', trigger: 'change' },
            { type: 'string', message: '关闭时间 值必须为字符串类型', trigger: 'blur' },
            { required: false, type: 'string', message: '关闭时间 值不能为空', trigger: 'change' },
            { required: false, type: 'string', message: '关闭时间 值不能为空', trigger: 'blur' },
        ],
    }

    /**
     * 详情模型集合
     *
     * @type {*}
     * @memberof MainEdit
     */
    protected detailsModel: any = {
        grouppanel6: new FormGroupPanelModel({ caption: '任务描述', detailType: 'GROUPPANEL', name: 'grouppanel6', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel7: new FormGroupPanelModel({ caption: '备注', detailType: 'GROUPPANEL', name: 'grouppanel7', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        druipart1: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart1', visible: true, isShowCaption: true, form: this })
, 
        grouppanel2: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel2', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        group1: new FormGroupPanelModel({ caption: '任务基本信息', detailType: 'GROUPPANEL', name: 'group1', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        druipart2: new FormDRUIPartModel({ caption: '', detailType: 'DRUIPART', name: 'druipart2', visible: true, isShowCaption: true, form: this })
, 
        grouppanel8: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel8', visible: false, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel1: new FormGroupPanelModel({ caption: '基本信息', detailType: 'GROUPPANEL', name: 'grouppanel1', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel4: new FormGroupPanelModel({ caption: '工时信息', detailType: 'GROUPPANEL', name: 'grouppanel4', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel5: new FormGroupPanelModel({ caption: '任务的一生', detailType: 'GROUPPANEL', name: 'grouppanel5', visible: true, isShowCaption: true, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        grouppanel3: new FormGroupPanelModel({ caption: '分组面板', detailType: 'GROUPPANEL', name: 'grouppanel3', visible: true, isShowCaption: false, form: this, uiActionGroup: { caption: '', langbase: 'entities.task.mainedit_form', extractMode: 'ITEM', details: [] } })
, 
        formpage1: new FormPageModel({ caption: '基本信息', detailType: 'FORMPAGE', name: 'formpage1', visible: true, isShowCaption: true, form: this })
, 
        srfupdatedate: new FormItemModel({ caption: '最后修改日期', detailType: 'FORMITEM', name: 'srfupdatedate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srforikey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srforikey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfkey: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'srfkey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        srfmajortext: new FormItemModel({ caption: '任务名称', detailType: 'FORMITEM', name: 'srfmajortext', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srftempmode: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srftempmode', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfuf: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfuf', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfdeid: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfdeid', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        srfsourcekey: new FormItemModel({ caption: '', detailType: 'FORMITEM', name: 'srfsourcekey', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        id: new FormItemModel({ caption: '编号', detailType: 'FORMITEM', name: 'id', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 0 })
, 
        name: new FormItemModel({ caption: '任务名称', detailType: 'FORMITEM', name: 'name', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        multiple: new FormItemModel({ caption: '多人任务', detailType: 'FORMITEM', name: 'multiple', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        desc: new FormItemModel({ caption: '任务描述', detailType: 'FORMITEM', name: 'desc', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        comment: new FormItemModel({ caption: '备注', detailType: 'FORMITEM', name: 'comment', visible: true, isShowCaption: false, form: this, disabled: false, enableCond: 3 })
, 
        files: new FormItemModel({ caption: '附件', detailType: 'FORMITEM', name: 'files', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        projectname: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'projectname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        project: new FormItemModel({ caption: '所属项目', detailType: 'FORMITEM', name: 'project', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        module: new FormItemModel({ caption: 'id', detailType: 'FORMITEM', name: 'module', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        modulename: new FormItemModel({ caption: '所属模块', detailType: 'FORMITEM', name: 'modulename', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        allmodules: new FormItemModel({ caption: '所有模块', detailType: 'FORMITEM', name: 'allmodules', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        storyname: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'storyname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        story: new FormItemModel({ caption: '相关需求', detailType: 'FORMITEM', name: 'story', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        parentname: new FormItemModel({ caption: '父任务', detailType: 'FORMITEM', name: 'parentname', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        parent: new FormItemModel({ caption: '父任务', detailType: 'FORMITEM', name: 'parent', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        assignedto: new FormItemModel({ caption: '指派给', detailType: 'FORMITEM', name: 'assignedto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        type: new FormItemModel({ caption: '任务类型', detailType: 'FORMITEM', name: 'type', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        status: new FormItemModel({ caption: '任务状态', detailType: 'FORMITEM', name: 'status', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        pri: new FormItemModel({ caption: '优先级', detailType: 'FORMITEM', name: 'pri', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        mailto: new FormItemModel({ caption: '抄送给', detailType: 'FORMITEM', name: 'mailto', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        eststarted: new FormItemModel({ caption: '预计开始', detailType: 'FORMITEM', name: 'eststarted', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        deadline: new FormItemModel({ caption: '截止日期', detailType: 'FORMITEM', name: 'deadline', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        estimate: new FormItemModel({ caption: '最初预计', detailType: 'FORMITEM', name: 'estimate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        consumed: new FormItemModel({ caption: '总计消耗', detailType: 'FORMITEM', name: 'consumed', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        left: new FormItemModel({ caption: '预计剩余', detailType: 'FORMITEM', name: 'left', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        openedby: new FormItemModel({ caption: '由谁创建', detailType: 'FORMITEM', name: 'openedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        realstarted: new FormItemModel({ caption: '实际开始', detailType: 'FORMITEM', name: 'realstarted', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        finishedby: new FormItemModel({ caption: '由谁完成', detailType: 'FORMITEM', name: 'finishedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        finisheddate: new FormItemModel({ caption: '实际完成', detailType: 'FORMITEM', name: 'finisheddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        canceledby: new FormItemModel({ caption: '由谁取消', detailType: 'FORMITEM', name: 'canceledby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        canceleddate: new FormItemModel({ caption: '取消时间', detailType: 'FORMITEM', name: 'canceleddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        closedby: new FormItemModel({ caption: '由谁关闭', detailType: 'FORMITEM', name: 'closedby', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        closedreason: new FormItemModel({ caption: '关闭原因', detailType: 'FORMITEM', name: 'closedreason', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
        closeddate: new FormItemModel({ caption: '关闭时间', detailType: 'FORMITEM', name: 'closeddate', visible: true, isShowCaption: true, form: this, disabled: false, enableCond: 3 })
, 
    };

    /**
     * 监控表单属性 srfupdatedate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.srfupdatedate')
    onSrfupdatedateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfupdatedate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srforikey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.srforikey')
    onSrforikeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srforikey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfkey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.srfkey')
    onSrfkeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfkey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfmajortext 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.srfmajortext')
    onSrfmajortextChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfmajortext', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srftempmode 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.srftempmode')
    onSrftempmodeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srftempmode', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfuf 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.srfuf')
    onSrfufChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfuf', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfdeid 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.srfdeid')
    onSrfdeidChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfdeid', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 srfsourcekey 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.srfsourcekey')
    onSrfsourcekeyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'srfsourcekey', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 id 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.id')
    onIdChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'id', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 name 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.name')
    onNameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'name', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 multiple 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.multiple')
    onMultipleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'multiple', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 desc 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.desc')
    onDescChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'desc', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 comment 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.comment')
    onCommentChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'comment', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 files 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.files')
    onFilesChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'files', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 projectname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.projectname')
    onProjectnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'projectname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 project 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.project')
    onProjectChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'project', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 module 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.module')
    onModuleChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'module', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 modulename 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.modulename')
    onModulenameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'modulename', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 allmodules 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.allmodules')
    onAllmodulesChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'allmodules', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 storyname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.storyname')
    onStorynameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'storyname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 story 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.story')
    onStoryChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'story', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 parentname 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.parentname')
    onParentnameChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'parentname', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 parent 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.parent')
    onParentChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'parent', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 assignedto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.assignedto')
    onAssignedtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'assignedto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 type 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.type')
    onTypeChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'type', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 status 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.status')
    onStatusChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'status', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 pri 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.pri')
    onPriChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'pri', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 mailto 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.mailto')
    onMailtoChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'mailto', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 eststarted 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.eststarted')
    onEststartedChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'eststarted', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 deadline 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.deadline')
    onDeadlineChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'deadline', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 estimate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.estimate')
    onEstimateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'estimate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 consumed 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.consumed')
    onConsumedChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'consumed', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 left 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.left')
    onLeftChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'left', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 openedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.openedby')
    onOpenedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'openedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 realstarted 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.realstarted')
    onRealstartedChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'realstarted', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 finishedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.finishedby')
    onFinishedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'finishedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 finisheddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.finisheddate')
    onFinisheddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'finisheddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 canceledby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.canceledby')
    onCanceledbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'canceledby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 canceleddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.canceleddate')
    onCanceleddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'canceleddate', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 closedby 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.closedby')
    onClosedbyChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'closedby', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 closedreason 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.closedreason')
    onClosedreasonChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'closedreason', newVal: newVal, oldVal: oldVal });
    }

    /**
     * 监控表单属性 closeddate 值
     *
     * @param {*} newVal
     * @param {*} oldVal
     * @memberof MainEdit
     */
    @Watch('data.closeddate')
    onCloseddateChange(newVal: any, oldVal: any) {
        this.formDataChange({ name: 'closeddate', newVal: newVal, oldVal: oldVal });
    }


    /**
     * 重置表单项值
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MainEdit
     */
    private resetFormData({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
    }

    /**
      * 置空对象
      *
      * @param {any[]} args
      * @memberof EditForm
      */
    protected ResetData(_datas:any){
        if(Object.keys(_datas).length >0){
            Object.keys(_datas).forEach((name: string) => {
                if (this.data.hasOwnProperty(name)) {
                    this.data[name] = null;
                }
            });
        }
    }

    /**
     * 表单逻辑
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @memberof MainEdit
     */
    private formLogic({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
                






        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'EQ', '1')) {
                ret = true;
            }
            this.detailsModel.grouppanel8.setVisible(ret);
        }




































        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'ISNULL', '') || this.$verify.testCond(_multiple, 'EQ', '0')) {
                ret = true;
            }
            this.detailsModel.estimate.setDisabled(!ret);
        }

        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'EQ', '0') || this.$verify.testCond(_multiple, 'ISNULL', '')) {
                ret = true;
            }
            this.detailsModel.consumed.setDisabled(!ret);
        }

        if (Object.is(name, '') || Object.is(name, 'multiple')) {
            let ret = false;
            const _multiple = this.data.multiple;
            if (this.$verify.testCond(_multiple, 'EQ', '0') || this.$verify.testCond(_multiple, 'ISNULL', '')) {
                ret = true;
            }
            this.detailsModel.left.setDisabled(!ret);
        }










    }

    /**
     * 表单值变化
     *
     * @private
     * @param {{ name: string, newVal: any, oldVal: any }} { name, newVal, oldVal }
     * @returns {void}
     * @memberof MainEdit
     */
    private formDataChange({ name, newVal, oldVal }: { name: string, newVal: any, oldVal: any }): void {
        if (this.ignorefieldvaluechange) {
            return;
        }
        this.resetFormData({ name: name, newVal: newVal, oldVal: oldVal });
        this.formLogic({ name: name, newVal: newVal, oldVal: oldVal });
        this.dataChang.next(JSON.stringify(this.data));
    }

    /**
     * 表单加载完成
     *
     * @private
     * @param {*} [data={}]
     * @param {string} [action]
     * @memberof MainEdit
     */
    private onFormLoad(data: any = {},action:string): void {
        if(Object.is(action,"save") || Object.is(action,"autoSave"))
        // 更新context的实体主键
        if(data.task){
            Object.assign(this.context,{task:data.task})
        }
        this.setFormEnableCond(data);
        this.fillForm(data,action);
        this.oldData = {};
        Object.assign(this.oldData, JSON.parse(JSON.stringify(this.data)));
        this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: false });
        this.formLogic({ name: '', newVal: null, oldVal: null });
    }

    /**
     * 值填充
     *
     * @param {*} [_datas={}]
     * @param {string} [action]
     * @memberof MainEdit
     */
    protected fillForm(_datas: any = {},action:string): void {
        this.ignorefieldvaluechange = true;
        Object.keys(_datas).forEach((name: string) => {
            if (this.data.hasOwnProperty(name)) {
                this.data[name] = _datas[name];
            }
        });
        if(Object.is(action,'loadDraft')){
            this.createDefault();
        }
        this.$nextTick(function () {
            this.ignorefieldvaluechange = false;
        })
    }

    /**
     * 设置表单项是否启用
     *
     * @protected
     * @param {*} data
     * @memberof MainEdit
     */
    protected setFormEnableCond(data: any): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setEnableCond(data.srfuf);
        });
    }

    /**
     * 重置草稿表单状态
     *
     * @private
     * @memberof MainEdit
     */
    private resetDraftFormStates(): void {
        const form: any = this.$refs.form;
        if (form) {
            form.resetFields();
        }
    }

    /**
     * 重置校验结果
     *
     * @memberof MainEdit
     */
    protected resetValidates(): void {
        Object.values(this.detailsModel).forEach((detail: any) => {
            if (!Object.is(detail.detailType, 'FORMITEM')) {
                return;
            }
            const formItem: FormItemModel = detail;
            formItem.setError('');
        });
    }

    /**
     * 填充校验结果 （后台）
     *
     * @param {any[]} fieldErrors
     * @memberof MainEdit
     */
    protected fillValidates(fieldErrors: any[]): void {
        fieldErrors.forEach((error: any) => {
            const formItem: FormItemModel = this.detailsModel[error.field];
            if (!formItem) {
                return;
            }
            this.$nextTick(() => {
                formItem.setError(error.message);
            });
        });
    }

    /**
     * 表单校验状态
     *
     * @returns {boolean} 
     * @memberof MainEdit
     */
    protected formValidateStatus(): boolean {
        const form: any = this.$refs.form;
        let validatestate: boolean = true;
        form.validate((valid: boolean) => {
            validatestate = valid ? true : false;
        });
        return validatestate
    }

    /**
     * 获取全部值
     *
     * @returns {*}
     * @memberof MainEdit
     */
    protected getValues(): any {
        return this.data;
    }

    /**
     * 表单项值变更
     *
     * @param {{ name: string, value: any }} $event
     * @returns {void}
     * @memberof MainEdit
     */
    protected onFormItemValueChange($event: { name: string, value: any }): void {
        if (!$event) {
            return;
        }
        if (!$event.name || Object.is($event.name, '') || !this.data.hasOwnProperty($event.name)) {
            return;
        }
        this.data[$event.name] = $event.value;
    }

    /**
     * 设置数据项值
     *
     * @param {string} name
     * @param {*} value
     * @returns {void}
     * @memberof MainEdit
     */
    protected setDataItemValue(name: string, value: any): void {
        if (!name || Object.is(name, '') || !this.data.hasOwnProperty(name)) {
            return;
        }
        if (Object.is(this.data[name], value)) {
            return;
        }
        this.data[name] = value;
    }



    /**
     * 分组界面行为事件
     *
     * @param {*} $event
     * @memberof MainEdit
     */
    protected groupUIActionClick($event: any): void {
        if (!$event) {
            return;
        }
        const item:any = $event.item;
    }

    /**
     * Vue声明周期(处理组件的输入属性)
     *
     * @memberof MainEdit
     */
    protected created(): void {
        this.afterCreated();
    }

    /**
     * 执行created后的逻辑
     *
     *  @memberof MainEdit
     */    
    protected afterCreated(){
        if (this.viewState) {
            this.viewStateEvent = this.viewState.subscribe(({ tag, action, data }) => {
                if (!Object.is(tag, this.name)) {
                    return;
                }
                if (Object.is('autoload', action)) {
                    this.autoLoad(data);
                }
                if (Object.is('load', action)) {
                    this.load(data);
                }
                if (Object.is('loaddraft', action)) {
                    this.loadDraft(data);
                }
                if (Object.is('save', action)) {
                    this.save(data,data.showResultInfo);
                }
                if (Object.is('remove', action)) {
                    this.remove(data);
                }
                if (Object.is('saveandexit', action)) {
                    this.saveAndExit(data);
                }
                if (Object.is('saveandnew', action)) {
                    this.saveAndNew(data);
                }
                if (Object.is('removeandexit', action)) {
                    this.removeAndExit(data);
                }
                if (Object.is('refresh', action)) {
                    this.refresh(data);
                }
            });
        }
        this.dataChang
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            ).subscribe((data: any) => {
                if (this.autosave) {
                    this.autoSave();
                }
                const state = !Object.is(JSON.stringify(this.oldData), JSON.stringify(this.data)) ? true : false;
                this.$store.commit('viewaction/setViewDataChange', { viewtag: this.viewtag, viewdatachange: state });
            });
    }

    /**
     * vue 生命周期
     *
     * @memberof MainEdit
     */
    protected destroyed() {
        this.afterDestroy();
    }

    /**
     * 执行destroyed后的逻辑
     *
     * @memberof MainEdit
     */
    protected afterDestroy() {
        if (this.viewStateEvent) {
            this.viewStateEvent.unsubscribe();
        }
        if (this.dataChangEvent) {
            this.dataChangEvent.unsubscribe();
        }
    }

    /**
     * 拷贝内容
     *
     * @param {*} [arg={}]
     * @memberof @memberof MainEdit
     */
    protected copy(arg: any = {}): void {
        this.loadDraft(arg);
    }

    /**
     *打印
     *@memberof @memberof MainEdit
     */
    protected print(){
        let _this:any = this;
        _this.$print({id:'form',popTitle:'主信息编辑'});
    }

    /**
     * 部件刷新
     *
     * @param {any[]} args
     * @memberof MainEdit
     */
    protected refresh(args: any[]): void {
        let arg: any = {};
        Object.assign(arg,args[0]);
        if (this.data.srfkey && !Object.is(this.data.srfkey, '')) {
            Object.assign(arg, { srfkey: this.data.srfkey });
            this.load(arg);
            return;
        }
        if (this.data.srfkeys && !Object.is(this.data.srfkeys, '')) {
            Object.assign(arg, { srfkey: this.data.srfkeys });
            this.load(arg);
            return;
        }
    }

    /**
     * 自动加载
     *
     * @param {*} [arg={}]
     * @returns {void}
     * @memberof MainEdit
     */
    protected autoLoad(arg: any = {}): void {
        if (arg.srfkey && !Object.is(arg.srfkey, '')) {
            Object.assign(arg, { srfkey: arg.srfkey });
            this.load(arg);
            return;
        }
        if (arg.srfkeys && !Object.is(arg.srfkeys, '')) {
            Object.assign(arg, { srfkey: arg.srfkeys });
            this.load(arg);
            return;
        }
        this.loadDraft(arg);
    }

    /**
     * 加载
     *
     * @private
     * @param {*} [opt={}]
     * @memberof MainEdit
     */
    private load(opt: any = {}): void {
        if(!this.loadAction){
            this.$Notice.error({ title: '错误', desc: 'TaskMainEditView视图表单loadAction参数未配置' });
            return;
        }
        const arg: any = { ...opt };
        let viewparamResult:any = Object.assign(arg,this.viewparams);
        const get: Promise<any> = this.service.get(this.loadAction,JSON.parse(JSON.stringify(this.context)),{viewparams:viewparamResult}, this.showBusyIndicator);
        get.then((response: any) => {
            if (response && response.status === 200) {
                const data = response.data;
                this.onFormLoad(data,'load');
                this.$emit('load', data);
                this.$nextTick(() => {
                    this.formState.next({ type: 'load', data: data });
                });
            }
        }).catch((response: any) => {
            if (response && response.status) {
                this.$Notice.error({ title: '错误', desc: response.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 加载草稿
     *
     * @param {*} [opt={}]
     * @memberof MainEdit
     */
    protected loadDraft(opt: any = {}): void {
        if(!this.loaddraftAction){
            this.$Notice.error({ title: '错误', desc: 'TaskMainEditView视图表单loaddraftAction参数未配置' });
            return;
        }
        const arg: any = { ...opt } ;
        let viewparamResult:any = Object.assign(arg,this.viewparams);
        let post: Promise<any> = this.service.loadDraft(this.loaddraftAction,JSON.parse(JSON.stringify(this.context)),{viewparams:viewparamResult}, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: '错误', desc: response.errorMessage });
                }
                return;
            }

            const data = response.data;
            if(data.task){
                Object.assign(this.context,{task:data.task})
            }
            this.resetDraftFormStates();
            this.onFormLoad(data,'loadDraft');
            this.$emit('load', data);
            this.$nextTick(() => {
                this.formState.next({ type: 'load', data: data });
            });
            setTimeout(() => {
                const form: any = this.$refs.form;
                if (form) {
                    form.fields.forEach((field: any) => {
                        field.validateMessage = "";
                        field.validateState = "";
                        field.validateStatus = false;
                    });
                }
            });
        }).catch((response: any) => {
            if (response && response.status) {
                this.$Notice.error({ title: '错误', desc: response.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 自动保存
     *
     * @param {*} [opt={}]
     * @memberof MainEdit
     */
    protected autoSave(opt: any = {}): void {
        if (!this.formValidateStatus()) {
            return;
        }
        const arg: any = { ...opt };
        const data = this.getValues();
        Object.assign(arg, data);
        const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
        if(!action){
            let actionName:any = Object.is(data.srfuf, '1')?"updateAction":"createAction";
            this.$Notice.error({ title: '错误', desc: 'TaskMainEditView视图表单'+actionName+'参数未配置' });
            return;
        }
        Object.assign(arg,{viewparams:this.viewparams});
        const post: Promise<any> = this.service.add(action, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
        post.then((response: any) => {
            if (!response.status || response.status !== 200) {
                if (response.errorMessage) {
                    this.$Notice.error({ title: '错误', desc: response.errorMessage });
                }
                return;
            }

            const data = response.data;
            this.onFormLoad(data,'autoSave');
            this.$emit('save', data);
            this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
            this.$nextTick(() => {
                this.formState.next({ type: 'save', data: data });
            });
        }).catch((response: any) => {
            if (response && response.status) {
                this.$Notice.error({ title: '错误', desc: response.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 保存
     *
     * @param {*} [opt={}]
     * @param {boolean} [showResultInfo] 
     * @param {boolean} [ifStateNext] formState是否下发通知
     * @returns {Promise<any>}
     * @memberof MainEdit
     */
    protected async save(opt: any = {}, showResultInfo?: boolean, ifStateNext: boolean = true): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            showResultInfo = showResultInfo === undefined ? true : false;
            if (!this.formValidateStatus()) {
                this.$Notice.error({ title: '错误', desc: '值规则校验异常' });
                return;
            }
            const arg: any = { ...opt };
            const data = this.getValues();
            Object.assign(arg, data);
            Object.assign(arg, this.context);
            if (ifStateNext) {
                this.drcounter = 2;
                if(this.drcounter !== 0){
                    this.drsaveopt = opt;
                    this.formState.next({ type: 'beforesave', data: arg });//先通知关系界面保存
                    this.saveState = resolve;
                    return;
                }
            }
            const action: any = Object.is(data.srfuf, '1') ? this.updateAction : this.createAction;
            if(!action){
                let actionName:any = Object.is(data.srfuf, '1')?"updateAction":"createAction";
                this.$Notice.error({ title: '错误', desc: 'TaskMainEditView视图表单'+actionName+'参数未配置' });
                return;
            }
            Object.assign(arg,{viewparams:this.viewparams});
            const post: Promise<any> = Object.is(data.srfuf, '1')?this.service.update(action, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator):this.service.add(action,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
            post.then((response: any) => {
                if (!response.status || response.status !== 200) {
                    if (response.errorMessage) {
                        this.$Notice.error({ title: '错误', desc: response.errorMessage });
                    }
                    return;
                }

                const data = response.data;
                this.onFormLoad(data,'save');
                this.$emit('save', data);
                this.$store.dispatch('viewaction/datasaved', { viewtag: this.viewtag });
                this.$nextTick(() => {
                    this.formState.next({ type: 'save', data: data });
                });
                if (showResultInfo) {
                    this.$Notice.success({ title: '', desc: (data.srfmajortext ? data.srfmajortext : '') + '&nbsp;保存成功！' });
                }
                resolve(response);
            }).catch((response: any) => {
                if (response && response.status) {
                    this.$Notice.error({ title: '错误', desc: response.message });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({ title: '错误', desc: '系统异常' });
                    reject(response);
                    return;
                }
                reject(response);
            });
        })
    }

    /**
    * 删除
    *
    * @private
    * @param {*} [opt={}]
    * @memberof EditForm
    */
    private remove(opt:Array<any> = [],showResultInfo?: boolean): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if(!this.removeAction){
                this.$Notice.error({ title: '错误', desc: 'TaskMainEditView视图表单removeAction参数未配置' });
                return;
            }
            const arg: any = opt[0];
            const _this: any = this;
            Object.assign(arg,{viewparams:this.viewparams});
            this.service.delete(_this.removeAction, JSON.parse(JSON.stringify(this.context)),arg, showResultInfo).then((response: any) => {
                if (response) {
                    const data = response.data;
                    this.$emit('remove',data);
                    this.formState.next({ type: 'remove', data: data });
                    this.data.ismodify = false;
                    this.$Notice.success({ title: '', desc: (data.srfmajortext ? data.srfmajortext : '') + '&nbsp;删除成功！' });
                    resolve(response);
                }
            }).catch((error: any) => {
                const { data: _data } = error;
                this.$Notice.error({ title: _data.title, desc: _data.message });
                reject(error);
            });
        });
    }

    /**
     * 工作流启动
     *
     * @param {*} [data={}]
     * @returns {Promise<any>}
     * @memberof MainEdit
     */
    protected async wfstart(data: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
            if(!this.WFStartAction){
                this.$Notice.error({ title: '错误', desc: 'WFCIDEditView视图表单WFStartAction参数未配置' });
                return;
            }
            const _this: any = this;
            const arg: any = data[0];
            Object.assign(arg,{viewparams:this.viewparams});
            const post: Promise<any> = Object.is(data.srfuf, '1')?this.service.update(this.updateAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator):this.service.add(this.createAction,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
            post.then((response:any) =>{
                const arg:any = response.data;
                if(this.viewparams){
                    Object.assign(arg,{viewparams:this.viewparams});
                }
                const result: Promise<any> = this.service.wfstart(_this.WFStartAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
                result.then((response: any) => {
                    if (!response || response.status !== 200) {
                        this.$Notice.error({ title: '', desc: '工作流启动失败, ' + response.info });
                        return;
                    }
                    this.$Notice.info({ title: '', desc: '工作流启动成功' });
                    resolve(response);
            }).catch((response: any) => {
                if (response && response.status) {
                    this.$Notice.error({ title: '错误', desc: response.message });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({ title: '错误', desc: '系统异常' });
                    reject(response);
                    return;
                }
                reject(response);
            });
            }).catch((response: any) => {
                    if (response && response.status) {
                        this.$Notice.error({ title: '错误', desc: response.message });
                        reject(response);
                        return;
                    }
                    if (!response || !response.status || !response.data) {
                        this.$Notice.error({ title: '错误', desc: '系统异常' });
                        reject(response);
                        return;
                    }
                    reject(response);
            })
        });
    }

    /**
     * 工作流提交
     *
     * @param {*} [data={}]
     * @returns {Promise<any>}
     * @memberof MainEdit
     */
    protected async wfsubmit(data: any): Promise<any> {
        return new Promise((resolve: any, reject: any) => {
        if(!this.WFSubmitAction){
            this.$Notice.error({ title: '错误', desc: 'TaskMainEditView视图表单WFSubmitAction参数未配置' });
            return;
        }
        const _this: any = this;
        const arg: any = data[0];
        Object.assign(arg,{viewparams:this.viewparams});
        if (!arg.task || Object.is(arg.task, '')) {
            return;
        }
        const post: Promise<any> = Object.is(arg.srfuf, '1')?this.service.update(this.updateAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator):this.service.add(this.createAction,JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
        post.then((response:any) =>{
                const arg:any = response.data;
                if(this.viewparams){
                    Object.assign(arg,{viewparams:this.viewparams});
                }
                const result: Promise<any> = this.service.wfsubmit(_this.WFSubmitAction, JSON.parse(JSON.stringify(this.context)),arg, this.showBusyIndicator);
                result.then((response: any) => {
                    if (!response || response.status !== 200) {
                        this.$Notice.error({ title: '', desc: '工作流提交失败, ' + response.info });
                        return;
                    }
                    this.$Notice.info({ title: '', desc: '工作流提交成功' });
                    resolve(response);
            }).catch((response: any) => {
                if (response && response.status) {
                    this.$Notice.error({ title: '错误', desc: response.message });
                    reject(response);
                    return;
                }
                if (!response || !response.status || !response.data) {
                    this.$Notice.error({ title: '错误', desc: '系统异常' });
                    reject(response);
                    return;
                }
                reject(response);
            });
            }).catch((response: any) => {
                    if (response && response.status) {
                        this.$Notice.error({ title: '错误', desc: response.message });
                        reject(response);
                        return;
                    }
                    if (!response || !response.status || !response.data) {
                        this.$Notice.error({ title: '错误', desc: '系统异常' });
                        reject(response);
                        return;
                    }
                    reject(response);
            })
        })
    }

    /**
     * 表单项更新
     *
     * @param {string} mode 界面行为名称
     * @param {*} [data={}] 请求数据
     * @param {string[]} updateDetails 更新项
     * @param {boolean} [showloading] 是否显示加载状态
     * @returns {void}
     * @memberof MainEdit
     */
    protected updateFormItems(mode: string, data: any = {}, updateDetails: string[], showloading?: boolean): void {
        if (!mode || (mode && Object.is(mode, ''))) {
            return;
        }
        const arg: any = { ...data };
        Object.assign(arg,this.viewparams);
        const post: Promise<any> = this.service.frontLogic(mode,JSON.parse(JSON.stringify(this.context)),arg, showloading);
        post.then((response: any) => {
            if (!response || response.status !== 200) {
                this.$Notice.error({ title: '错误', desc: '表单项更新失败' });
                return;
            }
            const data = response.data;
            const _data: any = {};
            updateDetails.forEach((name: string) => {
                if (!data.hasOwnProperty(name)) {
                    return;
                }
                Object.assign(_data, { [name]: data[name] });
            });
            this.setFormEnableCond(_data);
            this.fillForm(_data,'updateFormItem');
            this.formLogic({ name: '', newVal: null, oldVal: null });
            this.dataChang.next(JSON.stringify(this.data));
            this.$nextTick(() => {
                this.formState.next({ type: 'updateformitem', ufimode: arg.srfufimode, data: _data });
            });
        }).catch((response: any) => {
            if (response && response.status) {
                this.$Notice.error({ title: '错误', desc: response.message });
                return;
            }
            if (!response || !response.status || !response.data) {
                this.$Notice.error({ title: '错误', desc: '系统异常' });
                return;
            }
        });
    }

    /**
     * 回车事件
     *
     * @param {*} $event
     * @memberof MainEdit
     */
    protected onEnter($event: any): void {
    }

    /**
     * 保存并退出
     *
     * @param {any[]} args
     * @memberof MainEdit
     */
    protected saveAndExit(data:any[]):Promise<any>{
        let _this = this;
        return new Promise((resolve: any, reject: any) =>{
            let arg: any = {};
            if(data && data.length > 0){
                Object.assign(arg,data[0]);
            }
            _this.currentAction = "saveAndExit";
            _this.save([arg]).then((res) =>{
                if(res){
                    _this.closeView(res.data);
                }
                resolve(res);
            }).catch((error) =>{
                reject(error);
            })
        })
    }

    /**
     * 保存并新建
     *
     * @param {any[]} args
     * @memberof MainEdit
     */
    protected saveAndNew(data:any[]):Promise<any>{
        let _this = this;
        return new Promise((resolve: any, reject: any) =>{
            let arg: any = {};
            if(data && data.length > 0){
                Object.assign(arg,data[0]);
            }
            _this.currentAction = "saveAndNew";
            _this.save([arg]).then((res) =>{
                _this.ResetData(res);
                _this.loadDraft({});
            }).catch((error) =>{
                reject(error);
            })
        })
    }

    /**
     * 删除并退出
     *
     * @param {any[]} args
     * @memberof MainEdit
     */
    protected removeAndExit(data:any[]):Promise<any>{
        let _this = this;
        return new Promise((resolve: any, reject: any) =>{
            let arg: any = {};
            if(data && data.length > 0){
                Object.assign(arg,data[0]);
            }
            _this.remove([arg]).then((res) =>{
                if(res){
                  _this.closeView(res.data);
                }
                resolve(res);
            }).catch((error) =>{
                reject(error);
            })
        })
    }

    /**
    * 关系界面数据保存完成
    *
    * @param {any} $event
    * @memberof MainEdit
    */
    protected drdatasaved($event:any){
        let _this = this;
        this.drcounter--;
        if(this.drcounter > 0){
            return;
        }
        this.save(this.drsaveopt, undefined, false).then((res) =>{
            this.saveState(res);
            this.drsaveopt = {};
            if(Object.is(_this.currentAction, "saveAndNew")){
                _this.ResetData(res);
                _this.loadDraft({});
            }else if(Object.is(_this.currentAction, "saveAndExit")){
                if(res){
                    _this.closeView(res.data);
                }
            }
        });
    }

    /**
     * 新建默认值
     * @memberof MainEdit
     */
    public createDefault(){                    
    }

    
}
</script>

<style lang='less'>
@import './main-edit-form.less';
</style>