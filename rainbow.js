function rt_decodeHex(hex){
    var r = parseInt(hex.substr(1,2), 16);
    var g = parseInt(hex.substr(3,2), 16);
    var b = parseInt(hex.substr(5,2), 16);
    return [r, g, b];
}
function rt_encodeHex(r, g, b){
    var hex = "#";
    hex += r < 16 ? "0"+r.toString(16) : r.toString(16);
    hex += g < 16 ? "0"+g.toString(16) : g.toString(16);
    hex += b < 16 ? "0"+b.toString(16) : b.toString(16);
    return hex;
}
function rt_getColor(i){
    var interval = 15;
    var d = 255/interval;
    var r; var g; var b;
    if(i < interval){
        r = 255;
        g = i * d;
        b = 0;
    } else if(i < 2*interval){
        r = 255 - ((i-interval) * d);
        g = 255;
        b = 0;
    } else if(i < 3*interval){
        r = 0;
        g = 255;
        b = (i-2*interval)*d;
    } else if(i < 4*interval){
        r = 0;
        g = 255 - ((i-3*interval) * d);
        b = 255;
    } else if(i < 5*interval){
        r = (i-4*interval)*d;
        g = 0;
        b = 255;
    } else {
        r = 255;
        g = 0;
        b = 255 - ((i-5*interval) * d);
    }
    return rt_encodeHex(r, g, b);
}
function rt_loadColor(obj){
    var text = obj.innerHTML;
    var length = text.length;
    var d = (15*6)/length;
    for(var l=length-1; l>=0; l--){
        var i = Math.round(d*l);
        var color = rt_getColor(i);
        text = text.substr(0,l) +
               "<span style='color:"+color+"'>" + text.substr(l,1) + "</span>" +
               text.substr(l+1);
    }
    obj.innerHTML = text;
}
function rt_scriptStart(){
    var objs = document.getElementsByTagName("span");
    for(var i=0; i<objs.length; i++){
        var obj = objs[i];
        if(obj.className == "rainbow_text"){rt_loadColor(obj);}
    }
}
var rt_windowOnLoad = window.onload;
window.onload = function(){
    if(rt_windowOnLoad != undefined){
        rt_windowOnLoad();
    }
    rt_scriptStart();
}
