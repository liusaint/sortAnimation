//快速排序。  给一个tag。比它小的放在左边的数组，比它大的放到右边的数组。然后左边数组和右边数组进行同样的操作，直到排序完成。 这是用的递归实现 。
// a,b标记起始位

function quickSort2(arr,a,b,backupArr){

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

	for (var i = 1,tagIndex = 0; i < len;) {


		if(backupArr[a+i]>=tag){
			rightArr.push(backupArr[a+i]);
			i++;

		}else{
			var temp = backupArr[a+i];
			for(var j = a+i;j>a+tagIndex;j--){
				
				backupArr[j] = backupArr[j-1];
				// this.pushHis(backupArr.slice(),a,b,a+tagIndex);
			}
			backupArr[a+tagIndex] = temp;
			leftArr.push(temp);
			tagIndex++;
			i++;

		}
		this.pushHis(backupArr.slice(),a,b,a+tagIndex,i-1);
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

function quickSortDom2(arr,a,b,tag,k){
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
	$(".sort_span").eq(a+k).parent().append('<span class="sort_span_in" style="height:'+arr[tag]+'%"></span>');

}