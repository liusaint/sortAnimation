
/*
*  arr:数组
*  a:当前本轮已完成排序到哪一位。排序循环中的i。
*  b:当前在比较的位。循环中的j;
*  c:标记本轮插入排序的第一位。循环中的k。
*  temp:当前找到的最小值;
*  gap:当前排序的间隔;
*/



function shellSortDom(arr,a,b,c,temp,gap){

	var html='',item= '',len = arr.length,i;

	for (i = 0; i < len; i++) {
		spanClass = 'sort_span';

		if(c<=i &&((i-c)%gap == 0)){
			spanClass += ' sort_span_blue';
		}

		if(c<=i && i<= a && ((i-c)%gap == 0)){
			spanClass += ' sort_span_green';
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



function shellSort(oriArr){
	var arr =oriArr.slice(),i,k,j,len=arr.length,gap = Math.ceil(len/2),temp;
	while(gap>0){
		for (var k = 0; k < gap; k++) {
			for (i = k+gap; i < len; i=i+gap) {				
				temp = arr[i];
				for (j=i-gap; j >-1; j=j-gap) {
					if(arr[j]>temp){
						this.pushHis(arr.slice(),i,j,k,temp,gap);
						arr[j+gap] = arr[j];							
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
