const loadImages = function () {
	fetch('http://www.splashbase.co/api/v1/images/search?query=flower', {
		method: 'GET',
		images_only: 'true',
	})
		.then((resp) => resp.json())
		.then((data) => {
			console.log(data);
			for (let i = 0; i < data.images.length; i++) {
				const element = data.images[i];
				const img = document.createElement('img');
				img.src = element;
				document.body.appendChild(img);
				
			}
		});
};

//EXERCISE-2////////
const loadSecondaryImages= function(){
    fetch('http://www.splashbase.co/api/v1/images/search?query=laptop',{
        method: 'GET',
        images_only: 'true'
    })
    .then((resp)=> resp.json())
    .then((data2)=>{
        console.log(data2);
        for(let i=0;i<data2.images.length;i++){
            const element=data2.images[i]
            const img = document.createElement('img');
				img.src = element;
				document.body.appendChild(img);
				
        }
    })
}



    

window.onload=function(){
    loadImages();
    loadSecondaryImages()


//EXERCISE-4////////
    const btnGrp=document.querySelectorAll('.btn-group')
     btnGrp.forEach(element =>element.lastElementChild.innerText='HIDE')
     const hideBtns=[]
     btnGrp.forEach(element => {(element.lastElementChild).onclick=function(){
        element.parentNode.style.display = 'none'
     }
    }
     
    // editBtns.forEach(element => element.innerText='HIDE');
     )}
