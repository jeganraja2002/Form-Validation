
	let  check= JSON.parse(sessionStorage.getItem("store"))

	let append = document.querySelector(".loginImg")
	let boolean =false
	let boolean1 =false


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



	let inputPass = document.querySelector(".password")
	let inputEmail = document.querySelector(".email")
	let form = document.querySelector("#form")

	form.addEventListener("submit",(e)=>{
			
				e.preventDefault()
				boolean=false
				boolean1=false

		if (inputPass.value==""&&inputEmail.value=="") {
			
			inputPass.style.border="2px solid"
			inputEmail.style.border="2px solid"
			}

		else if(inputPass.value==""){
			inputPass.style.border="2px solid"
			inputEmail.style.border="none"
		}

		else if(inputEmail.value==""){
			inputEmail.style.border="2px solid"
			inputPass.style.border="none"
		}

		else if(inputPass.value!==""&&inputEmail.value!==""){		
			
			let a = checkEmail()
			let objStore={}
			checkPass()
			
				if(boolean&&boolean1){
					objStore["name"]=a
					sessionStorage.setItem("name",JSON.stringify(objStore))
					location.href="../name/index.html"
				}


		}



	})


	function checkEmail() {

		let ans = check.find(e=>e.email==inputEmail.value)
		
			if (ans==undefined) {
				inputEmail.style.border="2px solid"
				alert("Email is wrong")
				boolean=false
			}
			else{
				boolean=true
				inputEmail.style.border="none"
				return ans.name
			}
		
	}


	function checkPass() {

		let ans = check.find(e=>e.password==inputPass.value)
		
			if (ans==undefined) {
				inputPass.style.border="2px solid"
				alert("password is wrong")
				boolean1=false
			}
			else{
				boolean1=true
				inputPass.style.border="none"
			}
		
	}

