# 文档

文档库分页导航视图（文档）(DocLibLibTabExpView)

{% plantuml %}

digraph DocLibLibTabExpView {

label="文档";    

#rankdir=LR;

start [shape=circle,size="1,1",label="",style=filled, fillcolor=black]
end [shape=doublecircle,label=""]

own [shape=none, margin=0,size="6,6", label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">文档<BR/><BR/></TD>
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
快速访问<BR/>
创建文档库<BR/>
创建文档<BR/>
<BR/></TD>
</TR>
</TABLE>
>];


LookDoc [shape=none, margin=0, label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">查看<BR/><BR/></TD>
</TR>
</TABLE>
>];



Create [shape=none, margin=0, label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">创建文档库<BR/><BR/></TD>
</TR>
</TABLE>
>];



LookDoc [shape=none, margin=0, label=<
<TABLE WIDTH="150" BORDER="1" CELLBORDER="1" >
<TR>
<TD WIDTH="115" BORDER="0" COLSPAN="3"></TD><TD WIDTH="35" BORDER="0">V</TD>
</TR>
<TR>
<TD BORDER="0" COLSPAN="4" CELLPADDING="10">查看<BR/><BR/></TD>
</TR>
</TABLE>
>];



start -> own ;
own -> part [style=dashed,arrowhead=diamond,label="<包含>"] ;


part -> LookDoc [style=dashed,label=<查看<BR/>(迁移/popup)>];

LookDoc -> end ;



part -> Create [style=dashed,label=<创建文档库<BR/>(迁移/popup)>];

Create -> end ;



part -> LookDoc [style=dashed,label=<查看<BR/>(迁移/popup)>];

LookDoc -> end ;



}

{% endplantuml %}

