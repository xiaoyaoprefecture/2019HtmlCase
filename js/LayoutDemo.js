liList=[
	"运动","音乐","电影","电视","网络","美女"
];
srcList=[
	"sport","music","video","tv","it","girl"
];
function changeImage(e){
	var abc=e.innerText;//获取鼠标指向的元素的显示文本	
	var a=0;//定义一个保存数字下标的变量
	var b="";//定义一个保存路劲的变量
	for(var i=0;i<liList.length;i++){
		if(liList[i]==abc){
			a=i;
		}
	}
	//console.log("当前指向的是第"+(a+1)+"项");
	//获取图片的路径
	var imgs=document.getElementsByTagName("img");
	//console.log(imgs);
	for(var i=0;i<imgs.length;i++){
		imgs[i].src="../img/lastImg/"+srcList[a]+(i+1)+".jpg";
	}
}
