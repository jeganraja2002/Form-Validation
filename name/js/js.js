
	let  check= JSON.parse(sessionStorage.getItem("name"))

	let append = document.querySelector(".loginImg")

	let obj=[{img:"../img/leaf_01.png"},
			 {img:"../img/leaf_02.png"},
			 {img:"../img/leaf_03.png"},
			 {img:"../img/leaf_04.png"}
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


	let userName = document.querySelector(".userName")
	let fullContent = "Thanks for Login "+check.name
	
	let count=0
		function name() {

			userName.parentElement.classList.remove("d-none")
			setTimeout(()=>{
				let a = setInterval(()=>{

					userName.innerHTML+=fullContent[count].toUpperCase()
					count++

					if (count==fullContent.length) {
						userName.parentElement.classList.add("animes")
						clearInterval(a)
					}
				},200)
			},200)

		}

		name()
