# 产品统计

产品统计移动端多数据视图(ProductStatsMobMDView)

{% plantuml %}

digraph ProductStatsMobMDView {

label="产品统计";    

#rankdir=LR;

start [shape=circle,size="1,1",label="",style=filled, fillcolor=black]
end [shape=doublecircle,label=""]

own [shape=none, margin=0,size="6,6", label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">产品统计<BR/><BR/></TD>
</TR>
</TABLE>
>];

part [shape=none, margin=0, label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">P</TD> 
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">
新建<BR/>
<BR/></TD>
</TR>
</TABLE>
>];


New [shape=none, margin=0, label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">新建<BR/><BR/></TD>
</TR>
</TABLE>
>];



start -> own ;
own -> part [style=dashed,arrowhead=diamond,label="<包含>"] ;


part -> New [style=dashed,label=<新建>];

New -> end ;



}

{% endplantuml %}
