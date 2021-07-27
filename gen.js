function nameGen(type){
      var tp=type;
      var op=document.getElementById('option').value;
      var ip=document.getElementById('berapa').value;
      var element=document.createElement("textarea");
      element.setAttribute("class","form-control input-sm u-full-width");
      element.setAttribute("style","height:350px");
      element.setAttribute("id","result");
      for(i=0;i<ip;i++){
        if(op==="JP"){
        if(tp===1){
          rnd=Math.floor(Math.random()*jp2.length);
          rnd2=Math.floor(Math.random()*jp1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
          names=jp2[rnd]+tanda2[tag1]+jp1[rnd2]+tanda1[tag2]+Math.floor(99 + Math.random() * 311)+"\n";
        }
        else{
          rnd=Math.floor(Math.random()*jp2.length);
          rnd2=Math.floor(Math.random()*jp1.length);
          names=jp2[rnd]+" "+jp1[rnd2]+"\n";
        }}
        if(op==="US"){
        if(tp===1){
          rnd=Math.floor(Math.random()*us1.length);
          rnd2=Math.floor(Math.random()*us1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
          names=us1[rnd]+tanda2[tag1]+us1[rnd2]+tanda1[tag2]+Math.floor(99 + Math.random() * 311)+"\n";
        }
          else{
          rnd=Math.floor(Math.random()*us1.length);
          rnd2=Math.floor(Math.random()*us1.length);
          names=us1[rnd]+" "+us1[rnd2]+"\n";
        }}
        if(op==="DE"){
        if(tp===1){
          rnd=Math.floor(Math.random()*de2.length);
          rnd2=Math.floor(Math.random()*de1.length);
          tag1=Math.floor(Math.random()*tanda2.length);
          tag2=Math.floor(Math.random()*tanda1.length);
          names=de2[rnd]+tanda2[tag1]+de1[rnd2]+tanda1[tag2]+Math.floor(99 + Math.random() * 311)+"\n";
        }
        else{
          rnd=Math.floor(Math.random()*de2.length);
          rnd2=Math.floor(Math.random()*de1.length);
          names=de2[rnd]+" "+de1[rnd2]+"\n";
        }}
        br=document.createElement('br');
        element.appendChild(document.createTextNode(names));
        element.appendChild(br);
      }
      if(document.getElementById("result")){
        document.getElementById("placeholder").removeChild(document.getElementById("result"));
      }
document.getElementById("placeholder").appendChild(element);
    }
    function copy() {
        let textarea = document.getElementById("result");
        textarea.select();
        document.execCommand("copy");
      }
