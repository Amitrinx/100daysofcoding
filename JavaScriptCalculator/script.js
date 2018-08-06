var vDisplay=null;
var operator=null;
function Result(v)
{
    var vDisplay = document.getElementById("D").value;
    if(operator!=null)
    {
        if(operator=="+"){vDisplay=parseInt(vDisplay)+parseInt(v);}
        if(operator=="-"){vDisplay=parseInt(vDisplay)-parseInt(v);}
        if(operator=="/"){vDisplay=parseInt(vDisplay)/parseInt(v);}
        if(operator=="*"){vDisplay=parseInt(vDisplay)*parseInt(v);}
        operator=null;
    }
    else
    {    
        vDisplay+= v;
    }
    document.getElementById("D").value=vDisplay;
}
function AllClear(v)
{
    operator=null;
    document.getElementById("D").value = '';
    vDisplay=document.getElementById("D").value;
}
function Clear()
{
    var vDisplay = document.getElementById("D").value;
    if(vDisplay!='' && vDisplay!=undefined && vDisplay!=null)
    {
        vDisplay= vDisplay.substring(0, vDisplay.length-1);
    }
    document.getElementById("D").value=vDisplay;
}
function Operator(v)
{
    operator=v;
    document.getElementById("D").value += v;
    
}
function GetResult()
{
    
}
