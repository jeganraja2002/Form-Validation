

	let append = document.querySelector(".loginImg")
	let obj=[{img:"img/leaf_01.png"},
			 {img:"img/leaf_02.png"},
			 {img:"img/leaf_03.png"},
			 {img:"img/leaf_04.png"}
			 ]

	setInterval(()=>{


		let ran = Math.floor(Math.random()*innerWidth)
		let imgRan = Math.floor(Math.random()*obj.length)

		let img = document.createElement("img")
			img.setAttribute("src",obj[imgRan].img)
			img.setAttribute("class","leaf")
			img.style.left=ran+"px"
			append.append(img)

			setTimeout(function() {
				img.remove()
			}, 10000);

	},2000)	




	let inputName = document.querySelector(".name")
	let inputPass = document.querySelector(".password")
	let inputEmail = document.querySelector(".email")
	let form = document.querySelector("#form")
	let array = []

	form.addEventListener("submit",(e)=>{
			
				e.preventDefault()

		if (inputName.value==""&&inputPass.value==""&&inputEmail.value=="") {
			
			inputName.style.border="2px solid"
			inputPass.style.border="2px solid"
			inputEmail.style.border="2px solid"
			}

		else if(inputName.value==""){
			inputName.style.border="2px solid"
			inputPass.style.border="none"
			inputEmail.style.border="none"
			
		}

		else if(inputEmail.value==""){
			inputEmail.style.border="2px solid"
			inputPass.style.border="none"
			inputName.style.border="none"
		}

		else if(inputPass.value==""){
			inputPass.style.border="2px solid"
			inputName.style.border="none"
			inputEmail.style.border="none"
		}


		else{
			let obj ={name:inputName.value,email:inputEmail.value,password:inputPass.value}
			array.push(obj)
			sessionStorage.setItem("store",JSON.stringify(array))
			location.href="Home/index.html"
			setTimeout(function() {
				inputEmail.value=""
				inputName.value=""
				inputPass.value=""
			}, 10);
		}

	})
