## ${item.getLogicname()}
### 【业务实体】
${item.getCodename()}
### 【业务描述】
${item.getMemo()}
### 【所属模块】
${item.getPsmodulename()}
### 【关联需求】
[[STORY #${item.get("preqnum")}]](<#if item.get("preqlink")??>${item.get("preqlink")}</#if>) ${item.getPssysreqitemname()}
