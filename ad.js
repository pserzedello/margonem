jQuery('body').css('background-image','url(http://cdn.morguefile.com/imageData/public/files/r/RyanMBevan/12/l/1385922435qtxyx.jpg)');
jQuery('body').css('background-size','100%');
while(jQuery('#nick').length===0){
jQuery('#nick').html(jQuery('#nick').text().replace(new RegExp(' . ', 'g'), ' Level '));
jQuery('#nick').css('text-transform','capitalize');
for (key in  __translations.eq_prof){if(key.substring(5,6)===hero.prof){jQuery('#nick').html(jQuery('#nick').text().replace(new RegExp(hero.prof, 'g'), " " + __translations.eq_prof[key]));}}
}
$(document).keyup(function(e){
for(var i in g.npc){if((Math.abs(hero.rx - g.npc[i].x) <= 1 && Math.abs(hero.ry - g.npc[i].y) <= 1) && (g.npc[i].type === 2 || g.npc[i].type === 3)){message('Atacando: "'+g.npc[i].nick+'"');_g("fight&a=attack&ff=1&id=-"+i);break;}}
});
/*Enemies view, layout bar created by lokdestructoir http://margonem.com/profile/view,4026223 */
function getEnm(){
var arrar=[];var c=0,key=0;var Div=document.createElement("div");
Div.id="npcEn";Div.style.left='0px';Div.style.top='200px';Div.style.width='200px';Div.style.position='absolute';
Div.appendChild(document.createElement("br"));Div.appendChild(document.createTextNode("Inimigos:"));Div.appendChild(document.createElement("br"));
for(key in g.npc){if(g.npc[key].lvl!==0 && g.npc[key].type!==0 && (g.npc[key].type===2 || g.npc[key].type===3) && arrar.indexOf(g.npc[key].nick)===-1){
c++;dov=document.createElement('img');dov.src=g.npc[key].icon;dov.style.maxHeight='50px';dov.title=g.npc[key].nick;Div.appendChild(dov);
if(c===2){Div.appendChild(document.createElement("br"));c=0;}
arrar.push(g.npc[key].nick);
}
}
if(document.getElementById('contNPCEnm')===null ){
var ContD=document.createElement("div");ContD.id="contNPCEnm";ContD.appendChild(Div);document.body.appendChild(ContD);}else{
document.getElementById('contNPCEnm').innerHTML="";document.getElementById('contNPCEnm').appendChild(Div);
}
}
setInterval("getEnm()",1E3);
function minutnik(){minzapis=0;minwyswietlanie="";for(minutniklicz=1;minutniklicz<=10;minutniklicz++){if(minnazwa[minutniklicz]!==""&&minkoniec[minutniklicz]!==0){if(minkoniec[minutniklicz]>(new Date).getTime()+499){minmilisekundy=minkoniec[minutniklicz]-(new Date).getTime();minmilisekundyv=minmilisekundy/1000;minsekundy=minmilisekundyv.toFixed(0)%60;minminuty=(minmilisekundyv.toFixed(0)-minsekundy)/60;if(minsekundy>9){minwyswietlanie+="<b>- "+minminuty+":"+minsekundy+" - "+minnazwa[minutniklicz]+" -</b><br>"}else{minwyswietlanie+="<b>- "+minminuty+":0"+minsekundy+" - "+minnazwa[minutniklicz]+" -</b><br>"}}else{if(minkoniec[minutniklicz]>(new Date).getTime()-3e4){minwyswietlanie+="<b><font color=yellow>- 0:00 - "+minnazwa[minutniklicz]+" - </font></b><br>"}else{minnazwa[minutniklicz]="";minkoniec[minutniklicz]=0;minzapis=1}}}}if(minwyswietlanie!==""){$("#minutnik").html(minwyswietlanie)}else{$("#minutnik").html("<h3>- Minutnik v2.6 -</h3>")}if(minzapis===1){minutnikzapis()}}function minutnik_dodaj(mindodnazwa,mindodmin,mindodsek){mindodnazwa=mindodnazwa.split("--").join("");if(mindodsek>0){}else{mindodsek=0;if(mindodmin>0){}else{mindodmin=-1};};for(minutniklicz=1;minutniklicz<=10;minutniklicz++){if((minnazwa[minutniklicz]===""||minnazwa[minutniklicz]===mindodnazwa)&&minnazwa[minutniklicz+1]!==mindodnazwa&&minnazwa[minutniklicz+2]!==mindodnazwa&&minnazwa[minutniklicz+3]!==mindodnazwa&&minnazwa[minutniklicz+4]!==mindodnazwa&&minnazwa[minutniklicz+5]!==mindodnazwa&&minnazwa[minutniklicz+6]!==mindodnazwa&&minnazwa[minutniklicz+7]!==mindodnazwa&&minnazwa[minutniklicz+8]!==mindodnazwa&&minnazwa[minutniklicz+9]!==mindodnazwa){minnazwa[minutniklicz]=mindodnazwa;minkoniec[minutniklicz]=1000*(mindodmin*60+mindodsek)+(new Date).getTime();minutnikzapis();minutniklicz=20;}}};
function newNpc(c){if(!isset(g.tips.npc)){g.tips.npc=function(i){var e=false;var h="<b>"+i.nick+"</b>";if(i.type!==4){if(i.wt>99){h+="<i>tytan</i>"}else{if(i.wt>79){h+="<i>heros</i>";if(!minheros){mAlert("<center><b>Znaleziono Herosa!<br>.<br>"+i.nick+"("+i.lvl+"lvl)<br><img src="+i.icon+" /><br>"+map.name+"("+i.x+","+i.y+")<br>.<br>Minutnik - Ziomq");minheros=true}}else{if(i.wt>29){h+="<i>elita III</i>"}else{if(i.wt>19){e=true}else{if(i.wt>9){h+="<i>elita</i>"}}}}}var f="";if(i.type===2||i.type===3){var d=i.lvl-hero.lvl;if(d<-13){f='style="color:#888"'}else{if(d>19){f='style="color:#f50"'}else{if(d>9){f='style="color:#ff0"'}}}}h+="<span "+f+">"+(i.lvl?(i.lvl+" lvl"):"")+(i.grp?", grp":"")+"</span>"}if((RegExp("^/obrazki/npc/tmp/").test(i.icon)?"nodef":"")){e=true}return!e?h:null}}for(k in c){if(isset(g.npc[k])){$("#npc"+k).remove();if(isset(g.npc[k].x)){if(g.npc[k].wt<30&&(g.npc[k].wt>19||g.npc[k].wt>9&&minelity===1)){minutniksek=(60/minpredkosc)*(0.7+0.18*g.npc[k].lvl-0.00045*g.npc[k].lvl*g.npc[k].lvl);minutnik_dodaj(g.npc[k].nick,0,minutniksek);};delete g.npccol[g.npc[k].x+256*g.npc[k].y]}if(isset(g.agressiveNpc[k])){delete g.agressiveNpc[k]}delete g.npc[k]}if(isset(c[k].del)){continue}if(c[k].type===6&&!isset(g.agressiveNpc[k])){g.agressiveNpc[k]=false}if(c[k].icon.charAt(0)!=="/"){c[k].icon="/"+c[k].icon}c[k].icon=g.opath+"npc"+c[k].icon;c[k].id=k;g.npc[k]=c[k];g.npc[k].imgStatus=false;var a="";var b=g.tips.npc(c[k]);if(c[k].type!==4||c[k].lvl){a=" ctip=t_npc "+(b?"tip='"+g.tips.npc(c[k])+"'":"")+""}$("#base").append('<div class="npc '+(RegExp("^/obrazki/npc/tmp/").test(c[k].icon)?"nodef":"")+'" id=npc'+k+a+">"+(c[k].qm?"<img src='img/quest-mark.gif'>":"")+"</div>");$("#npc"+k).css({left:c[k].x*32,top:c[k].y*32-16,zIndex:10+c[k].y+((c[k].type===4)?parseInt(c[k].wt):0)}).bind("contextmenu",function(f){var d=this.id.substr(3);if(g.npc[d].type===2||g.npc[d].type===3){f.preventDefault();return _g("fight&a=attack&id=-"+d+"&ff=1")}}).click(function(i){var f=this.id.substr(3);if(Math.abs(g.npc[f].x-hero.x)>1||Math.abs(g.npc[f].y-hero.y)>1){hero.mClick(i);return}var d=[];var h=true;if(g.npc[f].type===4){return}if(g.npc[f].type===0||g.npc[f].type===6){d[0]=["Rozmawiaj",'_g("talk&id='+f+'")'];h=false}if(g.npc[f].type===2||g.npc[f].type===3){d[0]=["Atakuj",'_g("fight&a=attack&ff=1&id=-'+f+'")']}if(g.npc[f].type===2||g.npc[f].type===3){d[1]=["Walcz turowo",'_g("fight&a=attack&id=-'+f+'")']}if(g.npc[f].type===5){d[0]=[(g.npc[f].wt===1)?"Uruchom":"Obejrzyj",'_g("talk&id='+f+'")'];h=false}if(h){if(hero.lvl<25&&!g.party){return _g("fight&a=attack&id=-"+f+"&ff=1")}return _g("fight&a=attack&id=-"+f)}showMenu(i,d)}).mousedown(function(d){return false});if(c[k].type!==4){g.npccol[c[k].x+256*c[k].y]=true}g.npc[k].imgload=function(){this.imgStatus=true;var e=this.x*32+16-Math.round(this.img.width/2)+((this.type>3&&!(this.img.width%64))?-16:0);var d=Math.round(this.x)+Math.round(this.y)*256,f=0;if(isset(map)&&isset(map.water[d])){f=map.water[d]/4}$("#npc"+this.id).css({backgroundImage:"url("+this.img.src+")",left:e,top:this.y*32+32-this.img.height+(f>8?0:0),width:(e+this.img.width>map.x*32?map.x*32-e:this.img.width),height:this.img.height-(f>8?((f-8)*4):0)}).removeClass("nodef");this.fw=this.img.width;this.fh=this.img.height;delete this.img;if(isset(g.checklist["npc"+this.id])){g.checklist["npc"+this.id](this)}if(g.talk.insideDialogSynchroId===this.id){initiateNpcInsideDialog(this.id)}};g.npc[k].img=new Image();$(g.npc[k].img).load($.proxy(g.npc[k],"imgload")).error(function(){log($(this).attr("src"),2)}).attr({src:g.npc[k].icon})}};
function minutnikzapis(){mintab="";for(i=1;i<=10;i++){mintab+=escape(minkoniec[i])+"--"}for(i=1;i<=10;i++){mintab+=escape(minnazwa[i])+"--"}mintop=$("#minutnik").css("top");minleft=$("#minutnik").css("left");mintab+=escape(mintop)+"--";mintab+=escape(minleft)+"--";mintab+=escape(minelity)+"--";mintab+=escape(minpredkosc);expiry=new Date(parseInt((new Date).getTime())*2);setCookie('minutnik26plus',''+mintab+'',expiry);};minelity=1;minpredkosc=1;minzapis=0;minwyswietlanie="";minheros=false;mintop="";minleft="";mintab=new Array;minkoniec=new Array;minnazwa=new Array;minmilisekundy=0;minsekundy=0;minminuty=0;for(i=1;i<=20;i++){minkoniec[i]=0;minnazwa[i]=""}if(getCookie('minutnik26plus')!==null){mintab=unescape(getCookie('minutnik26plus')).split("--");for(i=1;i<=10;i++){minkoniec[i]=mintab[i-1]}for(i=1;i<=10;i++){minnazwa[i]=mintab[i+9]}mintop=mintab[20];minleft=mintab[21];minelity=mintab[22];minpredkosc=mintab[23];}$('<div id="minutnik" tip="<font color=white><center><h3>Minutnik v2.6 by Ziomq</h3>LPM - przesuwanie<br>PPM - wĹ/wyĹ funkcji Ĺapania elit<br>DoubleClick - zmiana prÄdkoĹci</center></font>"></div>').html("<h3>- Minutnik v2.6 -</h3>").draggable({stop:function(){minutnikzapis()}}).appendTo("body").css({position:"absolute",zIndex:1e3,background:"none","text-align":"center",left:0,top:0,border:"1px gold solid","background-color":"black","font-size":15}).rightClick(function(){if(minelity===1){minelity=0;message("<font color=white>WyĹÄczono Ĺapanie elit<br>Obecnie wyĹapuje tylko e2</font>")}else{minelity=1;message("<font color=gray>WĹÄczono Ĺapanie elit<br>Obecnie wyĹapuje elity oraz e2</font>")}minutnikzapis()}).dblclick(function(){if(minpredkosc===2){minpredkosc=3;message("<font color=orange>PrÄdkoĹÄ Minutnika przestawiona na <font color=white>3</font></font>");}else{if(minpredkosc===1){minpredkosc=2;message("<font color=orange>PrÄdkoĹÄ Minutnika przestawiona na <font color=white>2</font></font>");}else{minpredkosc=1;message("<font color=orange>PrÄdkoĹÄ Minutnika przestawiona na <font color=white>1</font></font>");};};minutnikzapis();});if(mintop!==""&&minleft!==""){$("#minutnik").appendTo("body").css({left:minleft,top:mintop})}window.setInterval(minutnik,1e3);
Math.decimal=function(a,b){var c=Math.pow(10,b);var d=Math.round(a*c)/c;return d;}
function setProcentValue(){
var life=Math.decimal(hero.hp/hero.maxhp*100, 1);
var exp1=Math.pow(hero.lvl-1, 4);var exp2=Math.pow(hero.lvl, 4);var exp=Math.decimal((hero.exp-exp1)/(exp2-exp1)*100, 1);
$("#hpProcent").html(life+"%").attr("tip", $("#life1").attr("tip"));
$("#expProcent").html(exp+"%").attr("tip", $("#exp1").attr("tip"));
}
/*Paski*/
$("<span id='hpProcent'></span>").css({position:'absolute', 'z-index':'303', width:114, textAlign:'center', 'font-size':'10px'}).appendTo("#life1");
$("<span id='expProcent'></span>").css({position:'absolute', 'z-index':'303', width:114, textAlign:'center', 'font-size':'10px'}).appendTo("#exp1");
setInterval("setProcentValue()", 200);
if(_l()==='pl'){__translations['SEQ']={'show_button':'PokaĹź ekwipunek'};}else{__translations['SEQ']={'show_button':'Show equipment.'};}
var SEQ={show: function(id){$.getJSON('http://'+document.location.host+'/engine?t=getvar_eqcache&id='+id+'&callback=?',function(d){var items=['<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>','<td></td>'];for(n in d){items[d[n].st]='<td style="width:42px;height:42px"><div style="background:#0B3201 url(http://margonem.pl/img/menuback.png);padding:3px;" ctip="t_item" tip=\''+addslashes(itemTip(d[n]))+'\'><img src="http://www.margonem.pl/obrazki/itemy/'+d[n].icon+'"></div></td>';}var prof={'w':0,'b':1,'p':2,'m':3,'t':4,'h':5};var profImg=prof[g.other[id].prof]*(-126);mAlert('<div style="width:376px;height:281px;background:url(http://margonem.pl/img/profile_sprite.png) no-repeat -9px -393px;font-family:Verdana;font-size:13px;"><div style="display: block;"><div style="position:relative;width:283px;height:224px;padding-top:11px;"><div style="background:url(http://www.margonem.pl/img/profile_profs.jpg) no-repeat '+profImg+'px '+(0===0?0:203)+'px;position:absolute;left:56px;width:126px;height:204px;text-align:center;float:left;"></div><div style="position:absolute;left:193px;width:135px;height:208px;"><div style="width:135px;height:31px;text-align:center;"><span style="width:135px;text-align:center;font-family:Verdana;font-size:10px;color:#F6CE30;position:absolute;top:-4px;left:0px;">'+g.other[id].nick+'<br>'+g.other[id].lvl+g.other[id].prof+'</span></div><div style="position:absolute;"><table style="border-collapse:separate;border-spacing:2px;"><tr><td></td>'+items[1]+'<td></td></tr><tr>'+items[2]+items[3]+items[4]+'</tr><tr>'+items[5]+items[6]+items[7]+'</tr><tr><td></td>'+items[8]+'<td></td></tr></table></div></div></div></div></div>');});},newOther: newOther};
newOther=function(k){SEQ.newOther(k);$(".other").unbind('click').click(function(j){var f=this.id.substr(5);if(f===g.playerCatcher.activePlayer){g.playerCatcher.startFollow();return;}var d=[];if(hero.x===g.other[f].x&&hero.y===g.other[f].y){if(_l()==="pl"){d.push([_t("take",null,"menu"),'_g("takeitem")']);}if(isset(g.gw[hero.x+"."+hero.y])){d.push([_t("go",null,"menu"),'_g("walk")']);}}var h=g.pvp?7:5;if(Math.abs(hero.x-g.other[f].x)<h&&Math.abs(hero.y-g.other[f].y)<h){d[3]=[_t("attack",null,"menu"),'_g("fight&a=attack&id='+f+'")'];}if(Math.abs(hero.x-g.other[f].x)<2&&Math.abs(hero.y-g.other[f].y)<2){d[4]=[_t("trade",null,"menu"),"trade_start("+f+")"];if(hero.lvl>29){d[5]=[_t("kiss",null,"menu"),'_g("emo&a=kiss&id='+f+'")'];}if(isset(hero.vip)&&!isset(g.other[f].vip)){d[6]=[_t("crimson_bless",null,"menu"),'_g("emo&a=bless&id='+f+'")'];}var i=g.other[f].relation;if(!g.party||g.party[hero.id].r){d[7]=[_t("team_invite",null,"menu"),'_g("party&a=inv&id='+f+'")'];}}d[8]=[_t("show_button", null, "SEQ"),'SEQ.show('+f+')'];if(d.length>0){showMenu(j,d);}});};
var data=new Date();data.setTime(data.getTime() + 3600000 * 24 * 30);
if(getCookie('heros_alert_pozycja')===null)setCookie('heros_alert_pozycja', '2px|2px', data);
var heros_alert_pixele=getCookie('heros_alert_pozycja').split('|');
var heros=newNpc;
newNpc=function(a){
heros(a);
for(h in a){
if(a[h].wt>79 && a[h].wt<=99)
$('<div id="heros_alert"><center><br><b>'+a[h].nick+'('+a[h].lvl+'lvl)</b><br>'+a[h].x+','+a[h].y+'<br><img src='+a[h].icon+' /><br><br><i>By Reporteer</i><br><br><button id="close">Zamknij okno</button></center></div>').css({position: "absolute", left: ""+ heros_alert_pixele[1] +"", top: ""+ heros_alert_pixele[0] +"", backgroundImage: "url(http://www.margonem.pl/img/log_back.png)", zIndex: "100", width: "164px", height: "186px", margin: "10px", padding: "2px",}).draggable().appendTo('#centerbox');
}
$('#heros_alert').bind("dragstop", function(){g.lock.remove('miejsceOkienka');setCookie('heros_alert_pozycja', $('#heros_alert').css('top') + '|' + $('#heros_alert').css('left'), data);});
$('#heros_alert').bind("dragstart", function(){g.lock.add('miejsceOkienka');}); 
$("#close").click(function(){$("#heros_alert").slideUp(400);});
}
var lfsettings=new Array();lfsettings['top']=0;lfsettings['left']=0;lfsettings['val']=0;lfsettings['lege']=1;lfsettings['hero']=1;lfsettings['uni']=1;lfsettings['potki']=1;lfsettings['zloto']=1;lfsettings['autoquit']=0;function LootFilter(){var value=getCookie('lootfilter');if(value){value=value.split('-');lfsettings['top']=value[0];lfsettings['left']=value[1];lfsettings['val']=value[2];lfsettings['lege']=value[3];lfsettings['hero']=value[4];lfsettings['uni']=value[5];lfsettings['potki']=value[6];lfsettings['zloto']=value[7];lfsettings['autoquit']=value[8];if(value.length<10){message('Nowa opcja. SprawdĹş ustawienia Lootfiltera.')}};$('<div id="lootfilter" tip="Lootfilter by Utimir"></div>').html('Lootfilter by Utimir<span id="lootfilter_settings" tip="Ustawienia"><img src="https://cdn1.iconfinder.com/data/icons/jigsoar-icons/64/_settings.png" width="24px" height="24px"></span>').draggable({stop:function(){lootfilterSave()}}).appendTo('body').css({position:'absolute',zIndex:1001,background:'none','text-align':'center',left:lfsettings['left'],top:lfsettings['top'],border:'1px gold solid','background-color':'black','font-size':20,'padding':3});$('<div id="lootfilter_config"></div>').css({'border':'1px gold solid','color':'white','background-color':'black','position':'absolute','left':300,'top':15,'font-size':'12px','zIndex':500,'padding':2}).appendTo('body').draggable().hide();$('#lootfilter_config').html('<center>Lootfilter - Konfiguracja <span id="lootfilter_closer">[x]</span></center><br>Ĺap przedmioty:<br>');$('<b>PowyĹźej wartoĹci: </b><input id="lootfilter_config_val"><br>').appendTo('#lootfilter_config');$('#lootfilter_config_val').val(parseInt(lfsettings['val']));$('<b>Legendarne: </b><input type="checkbox" id="lootfilter_config_lege"><br>').appendTo('#lootfilter_config');(lfsettings['lege']===1)?$('#lootfilter_config_lege').attr('checked',true):false;$('<b>Heroiczne: </b><input type="checkbox" id="lootfilter_config_hero"><br>').appendTo('#lootfilter_config');(lfsettings['hero']===1)?$('#lootfilter_config_hero').attr('checked',true):false;$('<b>Unikatowe: </b><input type="checkbox" id="lootfilter_config_uni"><br>').appendTo('#lootfilter_config');(lfsettings['uni']===1)?$('#lootfilter_config_uni').attr('checked',true):false;$('<b>Miksturki: </b><input type="checkbox" id="lootfilter_config_potki"><br>').appendTo('#lootfilter_config');(lfsettings['potki']===1)?$('#lootfilter_config_potki').attr('checked',true):false;$('<b>ZĹoto: </b><input type="checkbox" id="lootfilter_config_zloto"><br>').appendTo('#lootfilter_config');(lfsettings['zloto']===1)?$('#lootfilter_config_zloto').attr('checked',true):false;$('<b>Automatyczne zamykanie: </b><input type="checkbox" id="lootfilter_config_autoclose"><br>').appendTo('#lootfilter_config');(lfsettings['autoquit']===1)?$('#lootfilter_config_autoclose').attr('checked',true):false;$('<input type="submit" id="lootfilter_config_sub" value="Zapisz">').click(function(){lootfilterSave();$('#lootfilter_config').hide()}).appendTo('#lootfilter_config');$('#lootfilter_closer').css('color','red').click(function(){$('#lootfilter_config').hide()});$('#lootfilter_settings').click(function(){if($('#lootfilter_config').is(':hidden')){$('#lootfilter_config').show()}else{$('#lootfilter_config').hide()}});var tmpLootItem=lootItem;var doubleSendBlock=false;lootfilterSave=function(){lfsettings['top']=$('#lootfilter').css('top');lfsettings['left']=$('#lootfilter').css('left');lfsettings['val']=parseInt($('#lootfilter_config_val').val());lfsettings['lege']=($('#lootfilter_config_lege').is(':checked'))?1:0;lfsettings['hero']=($('#lootfilter_config_hero').is(':checked'))?1:0;lfsettings['uni']=($('#lootfilter_config_uni').is(':checked'))?1:0;lfsettings['potki']=($('#lootfilter_config_potki').is(':checked'))?1:0;lfsettings['zloto']=($('#lootfilter_config_zloto').is(':checked'))?1:0;lfsettings['autoquit']=($('#lootfilter_config_autoclose').is(':checked'))?1:0;var value='';for(key in lfsettings){value+=escape(lfsettings[key])+'-'};var d=new Date();d.setTime(d.getTime()+3600000*24*30);setCookie('lootfilter',value,d)};lootItem=function(i){tmpLootItem(i);var limit=parseInt(lfsettings['val']);if((isNaN(limit)||(i.pr>=limit))||((lfsettings['lege']===1&&i.stat.search(/legendary/)>=0)||(lfsettings['hero']===1&&i.stat.search(/heroic/)>=0)||(lfsettings['uni']===1&&i.stat.search(/unique/)>=0)||(lfsettings['potki']===1&&i.stat.search(/leczy/)>=0)||(lfsettings['zloto']===1&&i.stat.search(/gold/)>=0)||i.stat.search(/quest/)>=0)){setLoots((g.loots.init>1?2:0),i.id.toString())}else{setLoots(1,i.id.toString())};if(!doubleSendBlock&&lfsettings['autoquit']===1){doubleSendBlock=true;setTimeout(function(){sendLoots(1);doubleSendBlock=false},300)}}};g.loadQueue.push({fun:function(){LootFilter()},data:''});
;
function margo_addon(){margoP3={ver: "3.16" };
(function(c){var a=c.ver;c.margo_defcol=function(d){switch(d){case 1:return "olive";case 2:return "gold";case 3:return "green";case 4:return "teal";case 5:return "aqua";case 6:return "yellow";case 7:return "#343434";case 8:return "white";case 9:return "blue";case 10:return "violet";case 11:return "red";}
};
c.margo_colname=function(d){switch(d){case 1:return "Tytan";case 2:return "Heros";case 3:return "Elita III";case 4:return "Elita II";case 5:return "Elita";case 6:return "NPC";case 7:return "Mob zwykĹy";case 8:return "Gracz";case 9:return "PrzejĹcie";case 10:return "Odnawialne";case 11:return "Twoja postaÄ";}
};
c.side=function(l){if(l.prof==='w' || l.prof==='p' || l.prof==='h') return 1;
return 2;};
c.margo_color=[];c.tab=[];
if(ReadCookie("margopogromca3")){c.tab=ReadCookie("margopogromca3").split("|");c.margo_minilvl=parseInt(c.tab[0]);c.margo_button=c.tab[1];
for(var b=2; b <=12; b++){c.margo_color[b - 1]=c.tab[b];}
c.margo_speed=parseInt(c.tab[13]);
if(c.margo_speed !==c.margo_speed){c.margo_speed=700;}
}else{for(var b=1; b <=11; b++){c.margo_color[b]=c.margo_defcol(b);}
c.margo_minilvl=1;c.margo_button="e";c.margo_speed=700;
}
c.margo_saveCookie=function(){
if(($("#margo_config_button").val()==="") ||($("#margo_config_button").val().lenght > 1)){mAlert("Niepoprawny skrĂłt klawiszowy!");
}else{c.margo_button="" +($("#margo_config_button").val());}
for(var d=1; d <=11; d++){if(($("#margo_config_color" + d).val()==="") ||($("#margo_config_button").val().lenght===0)){}else{c.margo_color[d]="" +($("#margo_config_color" + d).val());}
$("#margo_config_colortest" + d).css("background-color", c.margo_color[d]);}
if($("#margo_config_minilvl").val()===""){}else{if(parseInt($("#margo_config_minilvl").val())===parseInt($("#margo_config_minilvl").val())){
c.margo_minilvl=parseInt($("#margo_config_minilvl").val());}
}
if($("#margo_config_speed").val()===""){}else{if(parseInt($("#margo_config_speed").val())===parseInt($("#margo_config_speed").val())){c.margo_speed=parseInt($("#margo_config_speed").val());}}
c.tab="";c.tab +=c.margo_minilvl + "|";c.tab +=c.margo_button + "|";for(var d=1; d <=11; d++){
c.tab +=c.margo_color[d] + "|";
}
c.tab +=c.margo_speed + "|";c.expiry=new Date(parseInt(new Date().getTime()) * 2);document.cookie="margopogromca3=" + c.tab + ";expires=" + c.expiry + ";";
if(c.margo_con=true){clearInterval(c.margo_interval);c.margo_interval=setInterval(function(){c.refresh_margo();}, c.margo_speed);}
};
c.refresh_margo=function(){
$("#margo_npc").html("");
for(var h in g.npc){g.npc[h].lvl;var i=g.npc[h];
if((i.type===0) ||((i.type===2) &&(i.lvl > c.margo_minilvl - 1)) ||((i.type===3) &&(i.lvl > c.margo_minilvl - 1))){
var e=7;
if(g.npc[h].wt > 99){ e=1;}else{if(g.npc[h].wt > 79){ e=2; }else{if(g.npc[h].wt > 29){ e=3; }else{if(g.npc[h].wt > 19){ e=4; }else{if(g.npc[h].wt > 9){ e=5; }else{if(i.type===0){e=6;}
}
}
}
}
}
$("<div onclick='hero.searchPath(" + i.x + "," + i.y + ");' id=\"npc__" + h + '" ctip="t_item" tip="<center><img src=' + i.icon + " /><b>" + i.nick + "</b>" + c.margo_colname(e) + "," + i.lvl + ' lvl</center>"></div>').css({
position: "absolute", left:((i.x) * c.margo_square) + 1, top:(((i.y) * c.margo_square) + 1), "background-color": c.margo_color[e],
width: c.margo_square, height: c.margo_square }).appendTo("#margo_npc");
}
}
for(var h in g.other){
var f=g.other[h];var bpx=Math.ceil(c.margo_square*0.2);var bs='none';var reltxt='';
if(location.host==='game5.margonem.pl' &&(c.side(f.prof)!==c.side(hero.prof))){
bs=bpx+'px #b90000 solid';reltxt='<i style=\'color:#b90000\'>Przeciwna frakcja</i>';
}else if(f.relation==='fr'){bs=bpx+'px #00b900 solid';reltxt='<i style=\'color:#00b900\'>Przyjaciel</i>';
}else if(f.relation==='cl'){bs=bpx+'px #00b900 solid';reltxt='<i style=\'color:#00b900\'>Klanowicz</i>';
}else if(f.relation==='en'){bs=bpx+'px #b90000 solid';reltxt='<i style=\'color:#b90000\'>WrĂłg</i>';
}
if(f.wanted){reltxt +='<i style=\'color:red\'>Poszukiwany</i>'; }
if(reltxt) reltxt='<br>'+reltxt;
$("<div onclick='chatTo(\"" + f.nick + '");\' id="other__' + h + '" ctip="t_npc" tip="<center><div style=\'background:url(/obrazki/postacie' + f.icon + "); height: " + $("#other" + h).css("height") + "; width:" + $("#other" + h).css("width") + " '></div><b>" + f.nick + "</b>gracz, " + f.lvl + f.prof + reltxt + '</center>"></div>').css({
position: "absolute", left:((f.x) * c.margo_square) + 1, top:((f.y) * c.margo_square) + 1, "background-color": c.margo_color[8], width: c.margo_square -(bs!=='none'?bpx*2:0), height: c.margo_square -(bs!=='none'?bpx*2:0), border: bs }).appendTo("#margo_npc");
}
$("div#base div.gw").each(function(j){
$("<div onclick='hero.searchPath(" +(parseInt($(this).css("left")) / 32) + "," +(parseInt($(this).css("top")) / 32) + ");' id=\"gw__" + $(this).attr("id").substring(2) + "\" tip='" + $(this).attr("tip") + "'></div>").css({
position: "absolute", left:((parseInt($(this).css("left")) / 32) * c.margo_square) + 1, top:((parseInt($(this).css("top")) / 32) * c.margo_square) + 1,
"background-color": c.margo_color[9], width: c.margo_square, height: c.margo_square
}).appendTo("#margo_npc");
});
for(var h in g.item){var d=g.item[h];if(d.cl===20){
$("<div onclick='hero.searchPath(" +(d.x) + "," +(d.y) + ");'id=\"item__" + h + '" ctip="t_item" tip="<center><img src=/obrazki/itemy/' + d.icon + " /><b>" + d.name + '</b>odnawialne</center>"></div>').css({
position: "absolute", left:((d.x) * c.margo_square) + 1, top:((d.y) * c.margo_square) + 1, "background-color": c.margo_color[10], width: c.margo_square,
height: c.margo_square}).appendTo("#margo_npc");
}
}
$('<div id="hero__" ctip="t_item" tip="<center><b>Twoja PostaÄ</b></center>"></div>').css({position: "absolute", left:((hero.x) * c.margo_square) + 1, top:((hero.y) * c.margo_square) + 1,
"background-color": c.margo_color[11], width: c.margo_square, height: c.margo_square}).appendTo("#margo_npc").click(function(){
if(g.gw["" + hero.x + "." + hero.y]===true){_g("walk");}
_g("takeitem");});
};
if(map.x > map.y){c.margo_square=(512 -(512 % map.x)) / map.x;}else{c.margo_square=(426 -(426 % map.y)) / map.y;}
c.margo_szer=c.margo_square * map.x;c.margo_wys=c.margo_square * map.y;
$('<div id="margo"></div>').css({position: "absolute",left:(512 - c.margo_szer) / 2,top:(426 - c.margo_wys) / 2,zIndex: 499,width: c.margo_szer,height: c.margo_wys + 20}).appendTo("#centerbox");
$('<img id="margo_obrazek">')/*.attr('src', document.baseURI + "/obrazki/miasta/" + map.file)/*/.css({
position: "absolute", left:(512 - c.margo_szer) / 2, top:(426 - c.margo_wys) / 2, zIndex: 498,width: c.margo_szer, height: c.margo_wys, border: "2px solid black"
}).appendTo("#centerbox").attr("src", $("#bground").css("background-image").replace(/url\("?(.+?)"?\)/, "$1"));
$('<div id="margo_npc"></div>').css({left: 0, top: 0, width: c.margo_szer, height: c.margo_wys}).appendTo("#margo");
$('<div id="margo_credit">MargoPogromca v' + a + " by absflg(Valius->Jaruna)</div>").css({left: 0, top: 0, width: c.margo_szer, height: 20}).appendTo("#margo");
$('<span id="margo_c_b">[Konfig.]</span>').css({"font-size": 13, position: "absolute", left:(c.margo_szer - 45), "background-color": "black", color: "red"
}).appendTo("#margo_credit").click(function(){$("#margo_config").toggle();});
$('<div id="margo_config"></div>').css({position: "absolute", left: 300, top: 15, border: "1px gold solid", color: "white", "background-color": "black",
"font-size": "12px", zIndex: 500}).appendTo("body").draggable().bind("mousedown", function(d){d.stopPropagation()});
$("#margo_config").html("<center>MargoPogromca v" + a + " - Konfiguracja</center><br><br>Tu moĹźesz ustawiÄ skrĂłt klawiszowy<br>");
$('<br><b>SkrĂłt:</b><input type="text" size=1 id="margo_config_button" value="' + c.margo_button + '" /><br>').appendTo("#margo_config");
$('<br><b>Minimalny poziom:</b><input type="text" size=1 id="margo_config_minilvl" value="' + c.margo_minilvl + '" /><br>').appendTo("#margo_config");
$('<br><b>CzÄstotliwoĹÄ odĹwieĹźana:</b><br><input type="text" size=2 id="margo_config_speed" value="' + c.margo_speed + '" /><b>ms</b>(stand. 700ms) <br>').appendTo("#margo_config");
$('<br>Tutaj moĹźesz ustawiÄ, w jaki kolorze bÄdÄ <br>wyĹwietlane zdarzenia na mapie. Kolory moĹźna <br>zapisywaÄ angielskimi nazwami(np. red, gold). <br>ListÄ kolorĂłw moĹźesz znaleĹÄ pod tym <br>adresem: <a href="http://www.statom.pl/HTML/kolory.html">http://www.statom.pl/HTML/kolory.html</a><br>').appendTo("#margo_config");
$("#margo_config a").css({color: "yellowgreen", margin: "1px 0px 1px 3px"}).attr("target", "_blank");
for(var b=1; b <=11; b++){$('<br> <span id="margo_config_colortest' + b + '">__</span>').css({color: "black", position: "visual", "background-color": c.margo_color[b], height: 11, width: 11
}).appendTo("#margo_config");
$("<b> " + c.margo_colname(b) + ': </b><input type="text" size=7 id="margo_config_color' + b + '" value="' + c.margo_color[b] + '">').appendTo("#margo_config");}
$('<br><br><input type="button" id="margo_config_b" value="Zapisz" tip="Zapisz" />').appendTo("#margo_config").click(function(){
c.margo_saveCookie();});
$('<input type="button" id="margo_config_close" value="WyjdĹş" tip="WyjdĹş" />').appendTo("#margo_config").click(function(){
$("#margo_config").toggle();});
$("#margo_config").hide();$("#margo_obrazek").hide();$("#margo").hide();c.margo_con=false;
$(document).keypress(function(d){
if((String.fromCharCode(d.which).toUpperCase()===c.margo_button.toUpperCase()) &&(d.target.tagName !=="INPUT") &&(d.target.tagName !=="TEXTAREA")){
$("#margo_obrazek").toggle();$("#margo").toggle();
if(c.margo_con===false){c.margo_con=true;c.refresh_margo();c.margo_interval=setInterval(function(){c.refresh_margo();}, c.margo_speed);
}else{c.margo_con=false;clearInterval(c.margo_interval);}
}
});
maplistgwxy={};
super_escape=function(d){s1="" + d;s1=s1.split("Ä").join("%B9");s1=s1.split("Ä").join("%E6");s1=s1.split("Ä").join("%EA");s1=s1.split("Ĺ").join("%B3");s1=s1.split("Ĺ").join("%F1");s1=s1.split("Ăł").join("%F3");s1=s1.split("Ĺ").join("%9C");s1=s1.split("Ĺş").join("%9F");s1=s1.split("Ĺź").join("%BF");s1=s1.split("Ä").join("%A5");s1=s1.split("Ä").join("%C6");s1=s1.split("Ä").join("%CA");s1=s1.split("Ĺ").join("%A3");s1=s1.split("Ĺ").join("%D1");s1=s1.split("Ă").join("%D3");s1=s1.split("Ĺ").join("%8C");s1=s1.split("Ĺš").join("%8F");s1=s1.split("Ĺť").join("%AF");s1=s1.split(" ").join("+");return s1;};
maplistgwxy={};
maplistgwxy.dburl="http://173.83.251.34/~ippx/emargo.pl/get/add_map_xy_.php";
maplistgwxy.dumpdata=function(){maplistgwxy.wpisdb=[];
$("div#base div.gw").each(function(d){maplistgwxy.jedenwpis="";maplistgwxy.jedenwpis +=(parseInt($(this).css("left")) / 32) + "|";maplistgwxy.jedenwpis +=(parseInt($(this).css("top")) / 32) + "|";
maplistgwxy.jedenwpis +=super_escape($(this).attr("tip").replace("<br>(wymaga klucza)", "")) + "|";
for(var e in g.townname){if($(this).attr("tip").replace("<br>(wymaga klucza)", "")===g.townname[e]){maplistgwxy.jedenwpis +=e;}
}
maplistgwxy.wpisdb.push(maplistgwxy.jedenwpis);
});
//$.getScript(maplistgwxy.dburl + "?get=" + maplistgwxy.wpisdb.join("*") + "&map=" + super_escape(map.name) + "&id=" + map.id + "&x=" + map.x + "&y=" + map.y + "&img=" + super_escape(map.file) + "&mainid=" + map.mainid)
};
maplistgwxy.dumpdata();
monsterlist={map:{save: function(){}}};
})(margoP3);
}
var $$$margoP3;
if(!$$$margoP3){g.loadQueue.push({fun: margo_addon,data: ""});$$$margoP3=true;}
function ReadCookie(d){
var b="" + document.cookie;var c=b.indexOf(d);
if(c===-1 || d===""){return "";}
var a=b.indexOf(";", c);
if(a===-1){a=b.length;}
return unescape(b.substring(c + d.length + 1, a));
};;
/*Akhad -> Gefion
//http://www.margonem.pl/?task=profile&id=4787875*/
var _battleMsg=battleMsg;
battleMsg=function(a, b){
var ret=_battleMsg(a, b);
if(a.indexOf('winner=') !==-1){
setTimeout(function(){var arrows_id;
for(var i in g.item){if(g.item[i].st===7){arrows_id=i; break;}}
var ammo_str=g.item[arrows_id].stat;var ammo_firstPos=ammo_str.indexOf('ammo');var ammo_lastPos=0;
for(var i=ammo_firstPos; i <=ammo_str.length; i++){if(ammo_str[i]===';'){ammo_lastPos=i;break;}}
var ammo_count=(ammo_str.split('').splice(ammo_firstPos, ammo_lastPos - ammo_firstPos)).join('').split('=')[1];
var arrows_added=false;
if(ammo_count <=50){
for(var i in g.item){
if(g.item[i].name===g.item[arrows_id].name){_g("moveitem&st=1&id=" + g.item[i].id);arrows_added=true;break;}
}
if(!arrows_added) message('skoĹczyĹy siÄ strzaĹy!');
}
}, 1000);
}
return ret;
}
/* KtoTuJest v2.6 by absflg */
ktotujest_ver='2.6';
function ReadCookie(cookieName){
var theCookie="" + document.cookie;var ind=theCookie.indexOf(cookieName);
if(ind===-1 || cookieName==="") return "";
var ind1=theCookie.indexOf(';', ind);
if(ind1===-1) ind1=theCookie.length;
return unescape(theCookie.substring(ind + cookieName.length + 1, ind1));
}
function ktotujest_var(){
this.left=5;this.top=130;this.clan=new Array();
for(i=1; i <=4; i++) this.clan[i]={nazwa: '',kolor: ''};
this.fr='green';this.en='red';this.cl='blue';this.op='red';
tab=ReadCookie("ktotujest").split("|");
if(isset(tab[2])){this.left=parseInt(tab[0]);this.top=parseInt(tab[1]);if(isset(tab[10])){for(i=2, j=1; i <=9; i +=2, j++) this.clan[j]={nazwa: tab[i],kolor: tab[i + 1]};}}
if(isset(tab[13])){this.fr=tab[10];this.en=tab[11];this.cl=tab[12];this.op=tab[13];}
}
ktotujest=new ktotujest_var();
function ktotujest_saveCookie(){
if($('#ktotujest_config_x').val()===""){}else{ktotujest.left=parseInt($('#ktotujest_config_x').val());}
if($('#ktotujest_config_y').val()===""){}else{ktotujest.top=parseInt($('#ktotujest_config_y').val());}
if($('#ktotujest_config_fr').val()===""){}else{ktotujest.fr=($('#ktotujest_config_fr').val());}
if($('#ktotujest_config_en').val()===""){}else{ktotujest.en=($('#ktotujest_config_en').val());}
if($('#ktotujest_config_cl').val()===""){}else{ktotujest.cl=($('#ktotujest_config_cl').val());}
if($('#ktotujest_config_op').val()===""){}else{ktotujest.op=($('#ktotujest_config_op').val());}
for(i=1; i <=4; i++){
ktotujest.clan[i].nazwa=$('#ktotujest_config_nazwa' + i).val();ktotujest.clan[i].kolor=$('#ktotujest_config_kolor' + i).val();
}
expiry=new Date(parseInt(new Date().getTime()) * 2);
tab='';tab +=ktotujest.left + "|";tab +=ktotujest.top + "|";
for(i=1; i <=4; i++){tab +=escape(ktotujest.clan[i].nazwa) + "|";tab +=escape(ktotujest.clan[i].kolor) + "|";}
tab +=escape(ktotujest.fr) + "|";tab +=escape(ktotujest.en) + "|";tab +=escape(ktotujest.cl) + "|";tab +=escape(ktotujest.op) + "|";
document.cookie="ktotujest=" + tab + ";expires=" + expiry + ";";
$(".ktotujest").animate({left: ktotujest.left,top: ktotujest.top}, 300);refresh_ktotujest();}
perkun_side=function(l){if(l.prof==='w' || l.prof==='p' || l.prof==='h') return 1;
return 2;
};

function refresh_ktotujest(){
var ktotujest_string="";
for(var a in g.other){ktotujest_string +="<span style=\"white-space: nowrap\" ";var clan=0;
for(i=1; i <=4; i++) 
for(var j in ktotujest.clan[i].nazwa.split(";")) 
if(g.other[a].clan===ktotujest.clan[i].nazwa.split(";")[j]) 
if(g.other[a].clan){ktotujest_string +="class='ktotujest_style" + i + "' ";clan=1;}

var prefix='',long_prefix='';
if(location.host==='game5.margonem.pl' &&(perkun_side(hero.prof)!==perkun_side(g.other[a].prof))){
if(!clan) ktotujest_string +="class='ktotujest_style_op' ";}else switch(g.other[a].relation){
case 'cl':
if(!clan) ktotujest_string +="class='ktotujest_style_cl' ";
prefix='[K] ';
long_prefix='[Klanowicz] ';
break;
case 'fr':
if(!clan) ktotujest_string +="class='ktotujest_style_fr' ";
prefix='[P] ';
long_prefix='[Przyjaciel] ';
break;
case 'en':
if(!clan) ktotujest_string +="class='ktotujest_style_en' ";
prefix='[W] ';
long_prefix='[WrĂłg] ';
break; 
}
nick=g.other[a].nick;
if(nick.length+prefix.length > 14){nick=nick.substring(0, 13-prefix.length) + "âŚ";}
ktotujest_string +="tip='" + long_prefix + g.other[a].nick + "' onclick='chatTo(\"" + g.other[a].nick + "\")'>" + prefix + nick + "(<b>" + g.other[a].lvl + g.other[a].prof + "</b>)</span><br />";
}
$('#ktotujest_lista').html(ktotujest_string);
for(i=1; i <=4; i++) $('.ktotujest_style' + i).css({color: ktotujest.clan[i].kolor });
$('.ktotujest_style_cl').css({color: ktotujest.cl });$('.ktotujest_style_fr').css({color: ktotujest.fr });$('.ktotujest_style_en').css({color: ktotujest.en });$('.ktotujest_style_op').css({color: ktotujest.op });
}
$('<div class="ktotujest" id="ktotujest" ctip="t_npc" tip="KtoTuJest v'+ktotujest_ver+' by absflg"><b tip="KtoTuJest v'+ktotujest_ver+' by absflg" ctip="t_npc" onclick=\'$("#ktotujest_config").toggle();\'>KtoTuJest <span style="font-size:10px;color:grey">[opcje]</span></b></div>').css({
position: 'absolute', left: ktotujest.left, top: ktotujest.top, border: '1px gold solid', color: 'white',
width: 100, 'background-color': 'black', 'font-size': "13px", zIndex: 102
}).appendTo("body");
$('<br><div id="ktotujest_lista" tip="KtoTuJest v'+ktotujest_ver+' by absflg"></div>').css({position: 'relative', border: '1px gold solid', color: 'white', width: 100, 'background-color': 'black','font-size': "11px"}).appendTo('#ktotujest');
$('<div id="ktotujest_hide" ctip="t_npc" tip="KtoTuJest v'+ktotujest_ver+' by absflg"><b tip="KtoTuJest v'+ktotujest_ver+' by absflg" ctip="t_npc">^^^</b></div>').css({
position: 'relative', border: '1px gold solid', color: 'white', width: 100, 'background-color': 'black',
'font-size': "12px", 'text-align': 'center'}).appendTo("#ktotujest").click(function(){$("#ktotujest_lista").toggle();}).toggle(function(){
$(this).html('<div id="ktotujest_hide" ctip="t_npc" tip="KtoTuJest v'+ktotujest_ver+' by absflg"><span tip="KtoTuJest v'+ktotujest_ver+' by absflg" ctip="t_npc">v v v</span></div>');
clearInterval(ktj_interval);
}, function(){$(this).html('<div id="ktotujest_hide" ctip="t_npc" tip="KtoTuJest v'+ktotujest_ver+' by absflg"><b tip="KtoTuJest v'+ktotujest_ver+' by absflg" ctip="t_npc">^^^</b></div>');
ktj_interval=window.setInterval(function(){refresh_ktotujest();}, 900);});
$('<div id="ktotujest_config"><b tip="KtoTuJest v'+ktotujest_ver+' by absflg" ctip="t_npc">KtoTuJest - Konfiguracja</b></div>').css({
position: "absolute", left: 300, top: 15, border: "1px gold solid", color: "white",
"background-color": "black", "font-size": "12px",
zIndex: 500
}).appendTo("body").draggable().bind("mousedown", function(d){d.stopPropagation();});
$('#ktotujest_config').html('<center>KtoTuJest - Konfiguracja</center><br><br>Tu moĹźesz ustawiÄ wspĂłĹrzÄdne okna.<br>');
$('<b> X: </b><input type="text" size=2 id="ktotujest_config_x" value="' + ktotujest.left + '" /><br>').appendTo('#ktotujest_config');
$('<b> Y: </b><input type="text" size=2 id="ktotujest_config_y" value="' + ktotujest.top + '" /><br><br><b>Ustawienia koloru podĹwietlania</b><br>MoĹźna uĹźywaÄ tylko angielskich nazw kolorĂłw.<br>').appendTo('#ktotujest_config');
$('<b> WrĂłg: </b><input type="text" size=2 id="ktotujest_config_en" value="' + ktotujest.en + '" /><br>').appendTo('#ktotujest_config');
$('<b> Przyjaciel: </b><input type="text" size=2 id="ktotujest_config_fr" value="' + ktotujest.fr + '" /><br>').appendTo('#ktotujest_config');
$('<b> Klanowicz: </b><input type="text" size=2 id="ktotujest_config_cl" value="' + ktotujest.cl + '" /><br>').appendTo('#ktotujest_config');
$('<b> Przeciwna frakcja(PvP): </b><input type="text" size=2 id="ktotujest_config_op" value="' + ktotujest.op + '" /><br><br><b>Ustawienia koloru klanĂłw</b><br>Aby przypisaÄ pod kolor kilka klanĂłw - rozdziel <br>ich nazwy Ĺrednikiem(;) BEZ dodatkowych spacji.<br>').appendTo('#ktotujest_config');
for(i=1; i <=4; i++){
$('<input type="text" tip="Nazwa klanu" size=35 id="ktotujest_config_nazwa' + i + '" value="' + ktotujest.clan[i].nazwa + '" /><br>Kolor: ').appendTo('#ktotujest_config');
$('<b class="ktotujest_style' + i + '">Kolor:</b><input type="text" size=19 id="ktotujest_config_kolor' + i + '" value="' + ktotujest.clan[i].kolor + '" /><br>').appendTo('#ktotujest_config');
}
$('<br><input type="button" id="ktotujest_config_b" value="Zapisz" tip="Zapisz" />').appendTo('#ktotujest_config').click(function(){ktotujest_saveCookie();});
$('<input type="button" id="ktotujest_config_close" value="WyjdĹş" tip="WyjdĹş" />').appendTo('#ktotujest_config').click(function(){$('#ktotujest_config').toggle();});
ktj_interval=window.setInterval(function(){refresh_ktotujest();}, 900);
$('#ktotujest_config').toggle();
for(i=1; i <=4; i++) $('.ktotujest_style' + i).css({color: ktotujest.clan[i].kolor});
//timefreak={};timefreak.chat='<font color="red"><b>Wygraj kod na 10, 30 oraz 50 Smoczych Ĺez. <a href="http://timefreak.pl/" target="_BLANK">Zacznij juĹź dziĹ.</a></b></font><br>'; timefreak.start=function(){g.chat.txt[0]=timefreak.chat + g.chat.txt[0];$("s.choosen").click();};timefreak.start();
