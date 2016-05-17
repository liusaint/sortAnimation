
function shellSortDom(arr,a,b,c,temp,gap){
	$(".sort_ul").empty();
	var html='',item= '';
	var len = arr.length;
	$.each(arr, function(i, val) {
		item = '<li class="sort_li"><span class="sort_span" style="height: '+val+'%"></span></li>';
		html= html+item;
	});
	$(".sort_ul").append(html);

	for (var i = c; i < len; i=i+gap) {
		$(".sort_span").eq(i).addClass('sort_span_blue');
	}


	for (var i = c; i <= a; i=i+gap) {
		$(".sort_span").eq(i).addClass('sort_span_green');
	}

	
	$(".sort_span").eq(b).parent().append('<span class="sort_span_in" style="height:'+temp+'%"></span>');
}



function shellSort(arr){
	var i,k,j,len=arr.length,gap = Math.ceil(len/2),temp,timeCount=0;
	while(gap>0){
		for (var k = 0; k < gap; k++) {
			for (i = k+gap; i < len; i=i+gap) {				
				temp = arr[i];
				for (j=i-gap; j >-1; j=j-gap) {
					if(arr[j]>temp){
						arr[j+gap] = arr[j];
						this.pushHis(arr.slice(),i,j,k,temp,gap);	
					}else{
						break;
					}
				}
				arr[j+gap] = temp;
				this.pushHis(arr.slice(),i,j+gap,k,temp,gap);
			}
		}
		gap = parseInt(gap/2);
	}
	return arr;
}
