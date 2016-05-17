function mergeSort(arr){
	var len= arr.length,arrleft=[],arrright =[],gap=1,maxgap=len-1,gapArr=[],glen,n=0;
	var that = this;
	while(gap<maxgap){  
		gap = Math.pow(2,n);  
		if(gap<=maxgap){  
			gapArr.push(gap);  
		}  
		n++;  
	} 
	glen = gapArr.length; 
	for (var i = 0; i < glen; i++) {  
		gap = gapArr[i];  
		for (var j = 0; j < len; j=j+gap*2) {
			// s1(arr,j,j+gap*2-1,gap);
			s1.call(this,arr,j,j+gap*2-1,gap);//借用方法。其实是为了传递this。
		}  
	}


}


//a是开始游标。b是结束游标。n是左数组的长度。

function s1(arr,a,b,n){

	var len = arr.length;

	if(len<2){
		return;
	}
	if(n == 0){
		return;
	}
	if(b - a + 1  == n){
		return;
	}

	if(b>len-1){
		b = len -1;
	}
	rn = b - a +1  - n;


	for (var i = a,j = a+n; n>0,i<=b,rn>0,j<=b; ) {

		if(arr[i]<arr[j]){
			i++;
			n--;
			this.pushHis(arr.slice(),i-1,j,a,b);
			continue ;
		}else{
			temp = arr[j];
			for(var k = j;k>i;k--){
				arr[k] = arr[k-1];
				this.pushHis(arr.slice(),i,j,a,b,k,temp);
			}
			arr[i] = temp;
			j++;
			i++;
			rn--;
			this.pushHis(arr.slice(),i-1,j-1,a,b);
			continue ;
		}

	}


}


function mergeSortDom(arr,a,b,c,d,tag,temp){
	$(".sort_ul").empty();
	var html='',item= '';
	var len = arr.length;
	$.each(arr, function(i, val) {
		item = '<li class="sort_li"><span class="sort_span" style="height: '+val+'%"></span></li>';
		html= html+item;
	});
	$(".sort_ul").append(html);

	//表示当前正在排序的。
	for (var i = c; i <= d; i++) {
		$(".sort_span").eq(i).addClass('sort_span_blue');
	}


	// for (var i = c; i <= a; i=i+gap) {
		//表示
		if(a == b){
			a = a-1;
		}
		$(".sort_span").eq(a).addClass('sort_span_green');
		$(".sort_span").eq(b).addClass('sort_span_green');
		console.log(a,b);
	// }

	if(tag){
		$(".sort_span").eq(tag).parent().append('<span class="sort_span_in" style="height:'+temp+'%"></span>');
	}
}
