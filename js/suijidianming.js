//填写数据
ruan3=["杨骑铭","唐慧娟","胡昊天","唐欣悦","牟亚兰","何玉凤","卢真",
		"李浩","袁翀","李志远","徐蜜","蒋雨欣","侯静","刘宛诗","赖文杰"
		,"刘延龙","周冬琪","程渝","周游","李泞江","蹇江欢","尹锐","徐越凡",
		"王秋菊","赵天霞","陈文峰"
];
jiwang6=["王松","唐雯","陈霖","吴波","黄果","唐柯","向庆","杨丹","宋文宇"
	,"李承治","闫思懿","冯莹","彭念","施静","李盈盈","杨泽林","刘中平"
	,"向洪林","罗甜甜","张睿","杨子怡","谭小静","王祥","叶元平","杨渔鸿"
	,"洪启兰","叶璇","田俊杰","周才琳","杨军军","李洪君","陆佳","黎萌"
	,"刘兴","陈思睿","张林雪","阙韩非","周鹏","温山林"
];
jiwang7=["朱世杰","浦俊","李俊谋","董海波","王善宇","韩秋延","朱超",
	"张宇灿","杨得印","蒋奕麟","杨博涛","田浩","晏仔","蒋大钊","查远堃"
	,"徐瑞","汪虹宇","何浩","吴季壕","杨德","李廷辉","段嘉尧","禹翔"
	,"龙佳","刘妍","杜静","郭佳佳","张诗雨","雷欣怡","樊鑫","曹洪琴"
	,"周思懿","刘新","杨莎莎","黄舒婷","彭梨","张星月","应书熔","秦慧"
	,"程金凤","刘桂琴","吴肖肖","秦泽芳","吴昊","杨绍峰"
];
/*根据对应的选择生成对应的表格*/
//获取下拉框的value值
var obj=document.getElementById("selectid").value;
//获取装动态生成的div盒子的对象
var nameList=document.getElementById("nameList");
function birthTable(){
	//获取所有class=div1的盒子对象
	var classdiv1=document.querySelectorAll(".div1");
	//清空原有追加的div盒子
		for(i=0;i<classdiv1.length;i++){
			nameList.removeChild(classdiv1[i]);
		}
	//如果选中的下拉列表的value==1，也就是软件3班
	if(obj==1){
		//动态生成软件3班的名单		
		for(i=1;i<=ruan3.length;i++){	
			//创建一个div元素
			var newName=document.createElement("div");
			//给创建的div元素设置class属性为div1
			newName.setAttribute("class","div1")
			//为创建的div元素赋值
			newName.innerHTML=ruan3[i-1];
			//将创建好的div元素追加到装名单的div盒子里面
			nameList.appendChild(newName);		
		}
	}
	//如果选中的下拉列表的value==2，也就是计网6班
	if(obj==2){
		//动态生成计网6班的名单
		for(i=1;i<=jiwang6.length;i++){			
			var newName=document.createElement("div");
			newName.setAttribute("class","div1")
			newName.innerHTML=jiwang6[i-1];
			nameList.appendChild(newName);		
		}
	}
	//如果选中的下拉列表的value==3，也就是计网7班
	if(obj==3){
		//动态生成计网7班的名单		
		for(i=1;i<=jiwang7.length;i++){			
			var newName=document.createElement("div");
			newName.setAttribute("class","div1")
			newName.innerHTML=jiwang7[i-1];
			nameList.appendChild(newName);		
		}
	}
}
//开始实现随机点名
//声明随机函数对象
var bian;
//声明一个计数
var num=0;
function randomName(){
	//判断是否选中班级
	if(obj==0){
		alert("请选择班级");
	}else{
		//首先获取当前按钮对象
		var btn=document.getElementById("btn_suiji");		
		//更改当前按钮的文本
		if(btn.innerHTML=="开始"){//判断当前的按钮文字
			//更改当前的按钮文字
			btn.innerHTML="结束";
			//开始随机点名，10毫秒进行一次随机
			bian=setInterval("startRan()",10);
		}else{	
			//结束随机点名
			clearInterval(bian);
			//更改当前的按钮文字
			btn.innerHTML="开始";
		}	
	}
}

//写一个开始随机的函数
function startRan(){
	//获取所有的名字对象
	var classdiv1=document.querySelectorAll(".div1");
	//从0开始
	
	//设置当前文字颜色为黑色
	classdiv1[num].style.color="black";
	//生成一个随机数
	num=parseInt(Math.random()*(classdiv1.length));
	//将随机到的名字颜色改为红色
	classdiv1[num].style.color="red";	
}
