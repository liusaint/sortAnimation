		function insertSortDom(arr,a,b,temp){
			$(".sort_ul").empty();
			var html='',item= '';
			$.each(arr, function(i, val) {
				item = '<li class="sort_li"><span class="sort_span" style="height: '+val+'%"></span></li>';
				html= html+item;
			});
			$(".sort_ul").append(html);


			for (var i = 0; i <= a; i++) {
				$(".sort_span").eq(i).addClass('sort_span_blue');
			}

			$(".sort_span").eq(b).parent().append('<span class="sort_span_in" style="height:'+temp+'%"></span>');
		}



//插入排序：
function insertSort(arr){
	var i,j,k,len=arr.length,temp,timeCount=1;

	for (i = 1; i < len; i++) {				
		temp = arr[i];
		for (j=i-1; j >-1; j--) {
			if(arr[j]>temp){
				arr[j+1] = arr[j];
				this.pushHis(arr.slice(),i,j+1,temp);
			}else{
				break;
			}
		}
		arr[j+1] = temp;
		this.pushHis(arr.slice(),i,j+1,temp);
	}
	return arr;
}

