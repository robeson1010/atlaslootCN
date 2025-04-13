String.prototype.GetId=function(){
    return this.split('=')[1].split('/')[0]
}

let item=$$('a.listview-cleartext')[0];
let mts=item.closest('.listview-row').children[3].querySelectorAll('.iconmedium');
let mtList=[]
mts.forEach(mt=>{
    let id=mt.querySelector('a').href.GetId()
    let num=mt.querySelector('span');
    num=num?num.textContent:1;
    mtList.push([id,num]);
})
let tuzhi=$$('#tab-see-also')[0].querySelector('a.listview-cleartext').href.GetId();
let req=item.closest('.listview-row').children[4].textContent.split(/[ ()]+/);
req.splice(3,1);
let classMap={
   
    ["制皮"] : 3, 
	["裁缝"] : 8, 
	["工程学"] : 9, 
	["锻造"] : 2, 
	["烹饪"] : 6, 
	["炼金术"] : 4,
	["急救"] : 1,
	["附魔"] : 10, 
	["钓鱼"] : 11, 

    ["Leatherworking"] : 3, 
	["Tailoring"] : 8, 
	["Engineering"] : 9, 
	["Blacksmithing"] : 2, 
	["Cooking"] : 6, 
	["Alchemy"] : 4,
	["First Aid"] : 1,
	["Enchanting"] : 10, 
	["Fishing"] : 11, 
}

str=`[${item.href.GetId()}] = {${location.href.GetId()},${classMap[req[0]]},${req.slice(1).join(',')}, {${mtList.map(e=>e[0]).join(',')}},{${mtList.map(e=>e[1]).join(',')}}}, `
str2=`[${tuzhi}] = {${classMap[req[0]]},${req[1]},${item.href.GetId()}},`
str3=`{AA,${item.href.GetId()}},`
console.log(str)
console.log(str2)
console.log(str3)