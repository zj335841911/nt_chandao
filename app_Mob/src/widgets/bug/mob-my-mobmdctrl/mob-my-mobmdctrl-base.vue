!!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: #if item.getPSSysImage().getCssClass?...  [in template "TEMPLCODE_en_US" in macro "setIcon" at line 580, column 1]
	- Reached through: @setIcon item  [in template "TEMPLCODE_en_US" at line 1445, column 330]
----