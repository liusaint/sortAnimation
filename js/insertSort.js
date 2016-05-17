
/*
*  arr:数组
*  a:当前已完成排序的数量。排序循环中的i。
*  b:当前在比较的位。循环中的j+1;
*  temp:当前比较的值;
*/


function insertSortDom(arr,a,b,temp){

	var html='<ul class="sort_ul">',item= '',spanClass='';
	$.each(arr, function(i, val) {

		spanClass = 'sort_span';

		if(i<=a){
			spanClass += ' sort_span_blue';
		}

		item = '<li class="sort_li"><span class="'+ spanClass +'" style="height: '+val+'%"></span></li>';

		if(i == b){
		item = 	'<li class="sort_li"><span class="'+ spanClass +'" style="height: '+val+'%"></span><span class="sort_span_in" style="height:'+temp+'%"></span></li>';
		}
		
		html= html+item;
	});
	html += '</ul>';

	$(".sort_ul").replaceWith(html);

}



//插入排序：
function insertSort(oriArr){
	var arr = oriArr.slice(),i,j,len=arr.length,temp;

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
		this.pushHis(arr.slice(),i,j,temp);
	}
	return arr;
}

