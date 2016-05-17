		//选择排序  依次跟每一个比较求最小值。
		function selectSort(arr){

			var i,j,k,len=arr.length,temp,timeCount=1;
			for (i = 0; i < len-1; i++) {
				k=i;
				temp = arr[i];
				for (j = i+1; j < len; j++) {				
					if(temp>arr[j]){
						temp = arr[j];
						k = j;
					}
					this.pushHis(arr.slice(),k,j,temp);
				}
				arr[k] = arr[i];
				arr[i] = temp;
				this.pushHis(arr.slice());
			}
			return arr;
		}


		function selectSortDom(arr,a,b,temp){
			$(".sort_ul").empty();
			var html='',item= '';
			$.each(arr, function(i, val) {
				item = '<li class="sort_li"><span class="sort_span" style="height: '+val+'%"></span></li>';
				html= html+item;
			});
			$(".sort_ul").append(html);


			// for (var i = 0; i <= a; i++) {
			// 	$(".sort_span").eq(i).addClass('sort_span_blue');
			// }
			if(a){
				$(".sort_span").eq(a).addClass('sort_span_tag');
				$(".sort_span").eq(b).parent().append('<span class="sort_span_in" style="height:'+temp+'%"></span>');
			}

		}
