function formLayout(){
	var valueSubmit= document.getElementsByClassName("input1");
	var textSubmit="你提交的值是:";
	for(i=0;i<valueSubmit.length;i++){
		textSubmit+=valueSubmit[i].value+=';';
	}
	alert(textSubmit);
}
