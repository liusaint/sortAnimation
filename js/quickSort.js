//快速排序。  给一个tag。比它小的放在左边的数组，比它大的放到右边的数组。然后左边数组和右边数组进行同样的操作，直到排序完成。 这是用的递归实现 。
// a,b标记起始位

function quickSort(arr,a,b,backupArr){

	var len = arr.length,leftArr=[],rightArr=[],tag;
	if(a == undefined && b == undefined){
		a = 0; b= arr.length-1;//初始化起始位置。
	}
	if(backupArr == undefined){
		backupArr = arr;
	}

	if(len<2){
		return;
	}
	if(len == 2 && arr[0] == arr[1]){
		return;
	}
	tag = backupArr[a];

	for (var i = 1; i < len;) {
		var tagIndex;
		if(backupArr[a+i]<=tag){
			leftArr.push(backupArr[a+i]);
			backupArr[a+i-1] = backupArr[a+i];
			backupArr[a+i] = tag;
			tagIndex = a+i;			
			i++;

		}else{
			if(leftArr.length+rightArr.length == len-1){
				break;
			}
			var temp = backupArr[a+i];
			backupArr[a+i] = backupArr[b-rightArr.length];
			backupArr[b-rightArr.length] = temp;
			rightArr.push(temp);
			tagIndex = a+i-1;
		}
		this.pushHis(backupArr.slice(),a,b,tagIndex);
	}

	var len_l = leftArr.length;
	var len_r = rightArr.length;
	if(len_l== 0){
		var lb = a;
	}else{
		var lb = a+len_l -1;
		this.sort(leftArr,a,lb,backupArr);
	}

	if(len_r == 0){
		var ra = b;
	}else{
		var ra = b + 1 - len_r;
		this.sort(rightArr,ra,b,backupArr)
	}

}



function quickSortDom(arr,a,b,tag){
	$(".sort_ul").empty();
	var html='',item= '';
	$.each(arr, function(i, val) {
		item = '<li class="sort_li"><span class="sort_span" style="height: '+val+'%"></span></li>';
		html= html+item;
	});
	$(".sort_ul").append(html);

	var len = $(".sort_span").length;
	for (var i = a; i <= b; i++) {
		$(".sort_span").eq(i).addClass('sort_span_blue');
	}

	$(".sort_span").eq(tag).addClass('sort_span_tag');

}

