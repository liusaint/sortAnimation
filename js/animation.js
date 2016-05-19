

function SortAnimation(){
	this.arrHis = [];
	this.timer = '';
	this.sortName = 'bubble';
	this.sortObj = {
		bubble:[bubbleSort,bubbleSortDom],
		insert:[insertSort,insertSortDom],
		select:[selectSort,selectSortDom],
		quick:[quickSort,quickSortDom],
		quick2:[quickSort2,quickSortDom2],
		merge:[mergeSort,mergeSortDom],
		shell:[shellSort,shellSortDom]
	};//目前拥有的排序方法。
	this.sort = this.sortObj[this.sortName][0];
	this.sortDom = this.sortObj[this.sortName][1];
	this.speed = 100;
	this.arr = [66,78,90,22,64,18,86,32,19,60,28,24,23,17,67,82,57,89,33,11,76,43,79,5,42,99,14,95,68,51,4,77,91,83,27,21,84,72,8,30,71,52,20,94,80,29,81,26,39,53];
	this.arrLen = 50;
	this.sortRes = [];
}


SortAnimation.prototype = {
	pushHis:function(){
		this.arrHis.push(arguments);
	},
	startAnimation:function(){
		var arrHis = this.arrHis;
		var that = this;
		this.timer = setInterval(function(){
			if(arrHis.length>0){
				that.sortDom(arrHis[0][0],arrHis[0][1],arrHis[0][2],arrHis[0][3],arrHis[0][4],arrHis[0][5],arrHis[0][6]);
				arrHis.shift();
			}else{
				that.initDom(that.sortRes);
				clearInterval(that.timer);
			}
		},this.speed);
	},
	chagngeSort:function(arg){
		if(arg && this.sortObj[arg]){
			this.sort = this.sortObj[arg][0];
			this.sortDom = this.sortObj[arg][1];
		}else{
			this.sort = this.sortObj['bubble'][0];
			this.sortDom = this.sortObj['bubble'][1];
		}
	},
	createArr:function(num){
		var arr = this.arr;
		arr.length = 0;
		this.arrLen = num || this.arrLen;
		for (var i = 0; i < this.arrLen; i++) {
			arr.push(getRandom(100));
		}
		$("textarea[name=arr]").html(JSON.stringify(arr));
		this.initDom(arr);
	},
	addEvent:function(){
		var that = this;
		$("form").click(function(event) {
			var target = event.target;
			if(target.type == 'button'){
				var id = target.id
				if(id == 'createArr'){
					var len = $("input[name=arrLen]").val();
					that.createArr(len);
				}else if(id =='speedUp' || id == 'speedDown'){
					that.changeSpeed(id);
				}else{
					$(".sorting_btn").removeClass('sorting_btn');
					$(target).addClass('sorting_btn');
					that.chagngeSort(id);
					that.arrHis.length = 0;
					clearInterval(that.timer);
					that.sortRes = that.sort(that.arr);
					that.startAnimation();
				}

			}
		});
	},
	changeSpeed:function(id){
		if(id == 'speedUp'){
			if(this.speed >=40){
				this.speed = this.speed - 30;
			}else{
				return;
			}
		}
		if(id == 'speedDown'){
			if(this.speed < 500){
				this.speed = this.speed + 30;
			}else{
				return;
			}
		}
		clearInterval(this.timer);
		this.startAnimation();
	},
	init:function(){
		this.addEvent();
		this.initDom(this.arr);
	},
	initDom:function(arr){
		arr = arr || [];
		var html='',item= '',spanClass='',len = arr.length,i;
		for (i = 0; i <len; i++) {
			item = 	'<li class="sort_li"><span class="sort_span" style="height: '+arr[i]+'%"></span></li>';
			html= html+item;
		}
		document.querySelector('.sort_ul').innerHTML = html;
	}

}

var s = new SortAnimation();
s.init();

function getRandom(n){
	return Math.floor(Math.random()*n+1)
}