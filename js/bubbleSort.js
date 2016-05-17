		//冒泡排序  将这一个跟下一个做比较，这一个比下一个大就交换位置。
		function bubbleSort(arr){

			var resArr = arr.slice(),len=resArr.length,i=len-1,j,temp,sortOk;
			while(i--){
				sortOk = true;
				for (j = 0; j < len-1; j++) {
					temp = resArr[j];			
					if(resArr[j+1]<resArr[j]){
						temp = resArr[j]
						resArr[j] = resArr[j+1];
						resArr[j+1] = temp;
						sortOk = false;
						this.pushHis(resArr.slice(),j);
					}
				}
				if(sortOk == true){
					break;
				}				
			}
			return resArr;
		}

		function bubbleSortDom(arr,j){
			var html='<ul class="sort_ul">',item= '';
			$.each(arr, function(i, val) {
				if(i == j || i == j+1){
					item = '<li class="sort_li"><span class="sort_span sort_span_blue" style="height: '+val+'%"></span></li>';
				}else{
					item = '<li class="sort_li"><span class="sort_span" style="height: '+val+'%"></span></li>';
				}				
				html= html+item;
			});
			html = html+ '</ul>';
			$(".sort_ul").replaceWith(html);
		}

