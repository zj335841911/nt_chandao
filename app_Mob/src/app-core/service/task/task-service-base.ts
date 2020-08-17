!!!!模版产生代码错误:----
Tip: If the failing expression is known to be legally refer to something that's sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use <#if myOptionalVar??>when-present<#else>when-missing</#if>. (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: #assign singleServiceApi = singleAppM...  [in template "TEMPLCODE_en_US" in macro "service_block" at line 106, column 5]
	- Reached through: @service_block item=item singleAppMet...  [in template "TEMPLCODE_en_US" at line 622, column 5]
----