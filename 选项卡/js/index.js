window.onload = function(){
	var oUl = document.getElementById('nav');
	var aLi = oUl.getElementsByTagName('li');

	var oDiv = document.getElementById('tab');
	var aDiv = oDiv.getElementsByTagName('div');
	var len = aLi.length;

	for(var i = 0; i<len; i++){

		aLi[i].index = i;
		aLi[i].onclick = function(){

			for(var i = 0; i<len; i++){

				aLi[i].className = '';
				aDiv[i].className = 'hide';
			}

			aLi[this.index].className = 'act';
			aDiv[this.index].className = '';
		}
	}

}