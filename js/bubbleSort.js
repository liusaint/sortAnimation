		//冒泡排序  将这一个跟下一个做比较，这一个比下一个大就交换位置。
		function bubbleSort(arr){

			var len=arr.length,i=len-1,j,k,temp,sortOk;
			while(i--){
				sortOk = true;
				for (j = 0; j < len-1; j++) {
					k=j+1;
					temp = arr[j];			
					if(arr[k]<arr[j]){
						arr[j] = arr[k];
						arr[k] = temp;
						sortOk = false;
						this.pushHis(arr.slice(),j,k);
					}
				}
				if(sortOk == true){
					break;
				}				
			}
			return arr;
		}


		function bubbleSortDom(arr,j,k){
			// $(".sort_ul").empty();
			var html='<ul class="sort_ul">',
			item= '';
			$.each(arr, function(i, val) {
				if(i == j || i ==k){
					item = '<li class="sort_li"><span class="sort_span sort_span_blue" style="height: '+val+'%"></span></li>';
				}else{
					item = '<li class="sort_li"><span class="sort_span" style="height: '+val+'%"></span></li>';
				}				
				html= html+item;
			});
			html = html+ '</ul>';
			$(".sort_ul").replaceWith(html);
		}

