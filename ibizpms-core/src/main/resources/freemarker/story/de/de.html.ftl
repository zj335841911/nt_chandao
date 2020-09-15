<h2 class="md-end-block md-heading md-focus"><span class="md-plain md-expand">${item.getLogicname()}</span></h2>
<h3 class="md-end-block md-heading md-focus"><span class="md-plain md-expand">【业务实体】</span></h3>
<p style="padding-left:40px;">${item.getCodename()}</p>
<h3 class="md-end-block md-heading md-focus"><span class="md-plain md-expand">【业务描述】</span></h3>
<p style="padding-left:40px;">${item.getMemo()}</p>
<h3 class="md-end-block md-heading md-focus"><span class="md-plain md-expand">【所属模块】</span></h3>
<p style="padding-left:40px;"><span class="md-plain md-expand">${item.getPsmodulename()}</span></p>
<h3 class="md-end-block md-heading md-focus"><span class="md-plain md-expand">【关联需求】</span></h3>
<p style="padding-left:40px;"><span class="md-plain md-expand"><a href="<#if item.get("preqlink")??>${item.get("preqlink")}<#else>#</#if>">[STORY #${item.get("preqnum")}]</a> ${item.getPssysreqitemname()}</span></p>
