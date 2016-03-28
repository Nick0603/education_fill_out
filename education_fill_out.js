function GetRandom(Min,Max){
  return Math.floor(Math.random()* (Max-Min+1) )+Min
}

var text = 0;
var n = 0;
while(text != null){
	n++;
	text = document.getElementById('_1_' + n + '_1');
}
n--;

for(var i=1;i<=n;i++){
	text = document.getElementById('_1_' + i + '_' + GetRandom(2,4));
	text.click();
}
Button1.click();