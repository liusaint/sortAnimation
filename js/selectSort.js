//选择排序  依次跟每一个比较求最小值。
function selectSort(oriArr){

	var arr = oriArr.slice(),i,j,k,len=arr.length,temp;
	for (i = 0; i < len-1; i++) {
		k=i;
		temp = arr[i];
		for (j = i+1; j < len; j++) {				
			if(temp>arr[j]){
				temp = arr[j];
				k = j;
			}
			this.pushHis(arr.slice(),i-1,j,k,temp);
		}
		arr[k] = arr[i];
		arr[i] = temp;
		this.pushHis(arr.slice(),i);
	}
	return arr;
}

/*
*  arr:数组
*  a:当前已完成排序的数量。排序循环中的i。
*  b:当前在比较的位。循环中的j;
*  c:标记当前找到的最小位。循环中的k;
*  temp:当前找到的最小值;
*/

function selectSortDom(arr,a,b,c,temp){

	var html='',item= '',spanClass='',len = arr.length,i;
	for (i = 0; i <len; i++) {

		spanClass = 'sort_span';

		if(i<=a){
			spanClass += ' sort_span_blue';
		}
		if(c == i){
			spanClass += ' sort_span_tag';
		}

		if(i == b){
			item = 	'<li class="sort_li"><span class="'+ spanClass +'" style="height: '+arr[i]+'%"></span><span class="sort_span_in" style="height:'+temp+'%"></span></li>';
		}else{
			item = '<li class="sort_li"><span class="'+ spanClass +'" style="height: '+arr[i]+'%"></span></li>';
		}

		html= html+item;
	}
	document.querySelector('.sort_ul').innerHTML = html;
}
