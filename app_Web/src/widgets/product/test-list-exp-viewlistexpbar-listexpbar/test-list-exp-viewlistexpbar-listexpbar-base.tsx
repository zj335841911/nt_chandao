!!!!模版产生代码错误:----
Tip: Maybe using obj.something instead of obj.getSomething will yield the desired value.
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${field.getName?lower_case}  [in template "TEMPLCODE_en_US" in macro "getSearchPlaceholder" at line 402, column 89]
	- Reached through: @getSearchPlaceholder ctrl  [in template "TEMPLCODE_en_US" at line 417, column 26]
----