!!!!模版产生代码错误:----
Tip: If you just want "true"/"false" result as you are generting computer-language output, use "?c", like ${myBool?c}.
----
Tip: You can write myBool?string('yes', 'no') and like to specify boolean formatting in place.
----
Tip: If you need the same two values on most places, the programmers should set the "boolean_format" setting to something like "yes,no".
----

----
FTL stack trace ("~" means nesting-related):
	- Failed at: ${item.isDefault()}  [in template "TEMPLCODE_en_US" at line 909, column 25]
----