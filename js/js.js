window.onload=function(){
	var oU=document.getElementById('u');
	var aLi=oU.getElementsByTagName('li');
	var oInd=document.getElementById('ind');

	function fnTab(aaa){
		for(var i=0;i<aLi.length;i++){
			aLi[i].className='';		
		}
		aLi[aaa].className='show';
		oInd.innerHTML='<li style="background:url(img/img'+(aaa+1)+'.jpg) no-repeat center;"><a href="javascript:;"></a></li>';		
	}
	
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			n=this.index;
			fnTab(this.index);
		};	
	}
		var timer=null;
		var n=0;
		var oBox=document.getElementById('box');	
		function next(){
			n++;
			if(n>=9){
				n=0;	
			}
			fnTab(n);
		};	
		
		timer=setInterval(next,4000);
		
		oBox.onmouseover=function(){
			clearInterval(timer);
		};
		oBox.onmouseout=function(){
			timer=setInterval(next,4000);
		};

}
$(document).on('mouseover',function(){
	$('#dis li').hover(function(){
		$('#dis li .top').removeClass('show');
		$('#dis li .top').eq($(this).index()).addClass('show');
		$('#dis li .bot').removeClass('active');
		$('#dis li .bot').eq($(this).index()).addClass('active');
	})
	$('#play li').hover(function(){
		$('#play li .top').removeClass('show');
		$('#play li .top').eq($(this).index()).addClass('show');
		$('#play li .bot').removeClass('active');
		$('#play li .bot').eq($(this).index()).addClass('active');
	})
	$('#block li').hover(function(){
		$('#block li .top').removeClass('show');
		$('#block li .top').eq($(this).index()).addClass('show');
		$('#block li .bot').removeClass('active');
		$('#block li .bot').eq($(this).index()).addClass('active');
	})
})
	

































