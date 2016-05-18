//快速排序。  给一个tag。比它小的放在左边的数组，比它大的放到右边的数组。然后左边数组和右边数组进行同样的操作，直到排序完成。 这是用的递归实现 。
// a,b标记起始位

function quickSort(arr,a,b,qArr){

	var len = arr.length,leftArr=[],rightArr=[],tag,i,k,len_l,len_r,lb,ra,temp;
	if(a == undefined && b == undefined){
		a = 0; b= arr.length-1;//初始化起始位置。
	}
	if(qArr == undefined){
		qArr = arr.slice();
	}

	if((len == 2 && arr[0] == arr[1])||len<2){
		return arr;
	}

	tag = qArr[a];

	for (i = 1; i < len;) {
		if(qArr[a+i]<=tag){
			leftArr.push(qArr[a+i]);
			qArr[a+i-1] = qArr[a+i];
			qArr[a+i] = tag;
			k = a+i;			
			i++;
		}else{
			if(leftArr.length+rightArr.length == len-1){
				break;
			}
			temp = qArr[a+i];
			qArr[a+i] = qArr[b-rightArr.length];
			qArr[b-rightArr.length] = temp;
			rightArr.push(temp);
			k = a+i-1;
		}
		this.pushHis(qArr.slice(),a,b,k);
	}

	len_l = leftArr.length;
	len_r = rightArr.length;
	if(len_l== 0){
		lb = a;
	}else{
		lb = a+len_l -1;
		this.sort(leftArr,a,lb,qArr);
	}

	if(len_r == 0){
		ra = b;
	}else{
		ra = b + 1 - len_r;
		this.sort(rightArr,ra,b,qArr)
	}
	return qArr
}


/*
*  arr:数组
*  a:标记本轮插入排序的开始位。
*  b:标记本轮插入排序的结束位。
*  tag:当前在对比的序号;循环中的k
*/
function quickSortDom(arr,a,b,tag){

	var html='',item= '',len = arr.length,i;
	for (i = 0; i < len; i++) {

		spanClass = 'sort_span';

		if(a<=i && i<=b){
			spanClass += ' sort_span_blue';
		}

		if(i == tag){
			spanClass += ' sort_span_tag';
		}
		item = '<li class="sort_li"><span class="'+ spanClass +'" style="height: '+arr[i]+'%"></span></li>';

		html= html+item;
	}
	document.querySelector('.sort_ul').innerHTML = html;
}

