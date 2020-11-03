!!!!模版产生代码错误:----
Tip: If you just want "true"/"false" result as you are generting computer-language output, use "?c", like ${myBool?c}.
----
Tip: You can write myBool?string('yes', 'no') and like to specify boolean formatting in place.
----
Tip: If you need the same two values on most places, the programmers should set the "boolean_format" setting to something like "yes,no".
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: #assign newOut = newOut?replace("\\",...  [in template "CODETEMPL_en_US" in function "formatOutput" at line 8, column 5]
	- Reached through: ${formatOutput(true)}  [in template "CODETEMPL_en_US" at line 79, column 1]
----