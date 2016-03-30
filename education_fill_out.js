
//產生指定整數亂數
function GetRandom(Min,Max){
  return Math.floor(Math.random()* (Max-Min+1) )+Min
}

//計算有多少個欄位
function count_id( count , index){
	var test = 0;
	while(true){
		test = document.getElementById('_' + index + '_' + count + '_1');
		if(test == null){
			break
		}
		count++;
	}
	return (count-1);
}

//填寫兩個部分一般、業界師資、亂數選項(最小1最大5)
function fill_out( n , m , Min , Max){
	var test = 0;
	for(var i=1;i<=n;i++){
	test = document.getElementById('_1_' + i + '_' + GetRandom( Min , Max));
	test.click();
	}
	for(;i<=m;i++){
	test = document.getElementById('_5_' + i + '_' + GetRandom( Min , Max));
	test.click();
	}
}

if(location.href.match('https://stu255.ntust.edu.tw/ntust_stu/stu_midjudge.aspx')){
	var link = document.querySelector('tbody tr td font a');
	if(link == null){
		alert('表單全部填寫完成囉');
	}else{
		location.href = link.href;
	}
}else if(location.href.match('https://stu255.ntust.edu.tw/ntust_stu/stu_midjudge_course.aspx?')){
		var n = count_id(1,1); //一般選項欄位數
		var m = count_id(n+1,5); //業界選項欄位數
		fill_out(n,m,2,4);//填寫表單
		Button1.click();//送出
}
	