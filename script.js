
let btn  = document.getElementById('arrow')
let div  = document.getElementById('hide')

btn.addEventListener('click', () => {
	if(div.style.display === 'none'){
		div.style.display = 'block';
	}
	else{
		div.style.display = 'none'
	}
})


