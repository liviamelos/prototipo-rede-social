
function render(arr) {
   
    const ul = document.querySelector(".ul-posts")

    totalLikes = 0
 
    arr.forEach(element => {
        const li = document.createElement("li")

        const divCardPost = document.createElement("div")
        divCardPost.classList.add('card-post')

        const divPost = document.createElement("div")
        divPost.classList.add('card')

        const img = document.createElement("img")
        img.classList.add('img-perfil')
        img.src = users[element.user].img
        img.alt = element.name

        const perfilName = document.createElement("span")
        perfilName.classList.add('perfil-name')

        const name = document.createElement("h2")
        name.innerText = users[element.user - 1].user

        const office = document.createElement("p")
        office.innerText = users[element.user - 1].stack

        const perfilContent = document.createElement("span")
        perfilContent.classList.add('perfil-content')

        const titlePost = document.createElement("h2")
        titlePost.innerText = element.title

        const contentPost = document.createElement("p")
        contentPost.innerText = element.text

        const buttonPost = document.createElement("button")
        buttonPost.classList.add('button-post')
        buttonPost.innerText = "Abrir Post"
        buttonPost.dataset.id = element.id_post

        const spanLike = document.createElement("span")
        spanLike.classList.add('likes')
        const imgLike = document.createElement ("img")
        imgLike.classList.add('img-likes')
        imgLike.src = "./src/assets/img/likegrey.svg"
        const numberLike = document.createElement ("p")

        imgLike.addEventListener("click", () =>{
            totalLikes ++
            totalLikes.innerHTML = `${totalLikes}`

            imgLike.src = "./src/assets/img/likered.svg"
        })

        numberLike.innerHTML = ('0')

        li.append(divCardPost, perfilContent, spanLike)
        divCardPost.appendChild(divPost)
        divPost.append(img, perfilName)
        perfilName.append(name, office)
        perfilContent.append(titlePost, contentPost)
        spanLike.append(numberLike, imgLike,  buttonPost)
        ul.appendChild(li)
     
    });

    return ul
}

function renderModal(){
    const modal = document.querySelector(".modal")
    const buttons = document.querySelectorAll(".button-post")


    for (let i = 0; i < buttons.length; i++){
        const button = buttons[i]

        button.addEventListener( 'click', () => {
            const modalContent = createModal(button.dataset.id)

            modal.innerHTML = " "

            modal.appendChild(modalContent)

            modal.showModal()

            closeModal()
        })
    }
}

function createModal(id){
    const modalContainer = document.createElement('div')
    modalContainer.classList.add('modal-container')

    const divCardModal = document.createElement('div')
    divCardModal.classList.add('card-modal')

    const modalImg = document.createElement('img')
    const modalName= document.createElement('h2')
    const modalOffice = document.createElement('p')

    const modalTitle = document.createElement('h2')
    modalTitle.classList.add('modal-title')
    const modalContent = document.createElement('p')
    modalContent.classList.add('modal-content')

    const modalCloseButton = document.createElement('button')
    modalCloseButton.classList.add('modal-button')
   
    console.log(modalCloseButton)
    let element = {}

    for(let i = 0; i < posts.length; i++ ){
        if(posts[i].id_post == Number(id)){
            element = posts[i]
        }
    }

    modalImg.src = users[element.user].img
    modalImg.alt = users[element.user].user
    modalName.innerText = users[element.user - 1].user
    modalOffice.innerText = users[element.user - 1].stack
    modalTitle.innerText = element.title
    modalContent.innerText = element.long_text
    modalCloseButton.innerText = "x"

    modalContainer.append(divCardModal, modalTitle, modalContent, modalCloseButton)
    divCardModal.append(modalImg, modalName, modalOffice)

   
    return modalContainer
}

function closeModal(){
    const modal = document.querySelector(".modal")
    const closeButton = document.querySelector(".modal-button")

    closeButton.addEventListener('click', () => {
        modal.close()
    })
}

render(posts)
renderModal()

// SUGESTOES PARA SEGUIR

function createSugestUsers(arr){

    const ul = document.querySelector(".ul-aside")

    arr.forEach(element =>{

        const li = document.createElement("li")

        const divCardAside = document.createElement("div")
        divCardAside.classList.add('card-aside')

        const divCard1 = document.createElement("div")
        divCard1.classList.add('card-1')

        const img = document.createElement("img")
        img.classList.add('img-aside')
        img.src = users[element.user].img
        img.alt = element.name

        const perfilName = document.createElement("span")
        perfilName.classList.add('perfil-name')

        const name = document.createElement("h2")
        name.innerText = users[element.user - 1].user

        const office = document.createElement("p")
        office.innerText = users[element.user - 1].stack 

        const buttonFollow = document.createElement("button")
        buttonFollow.classList.add('button-aside')
        buttonFollow.innerText = "Seguir"
        buttonFollow.addEventListener("click", () => {

            let buttonFollowing = buttonFollow.classList.toggle(".button-aside")

            if(buttonFollowing){
                buttonFollow.innerText = "Seguindo"
            }else{
                buttonFollow.innerText = "Seguir"
            }
        })

        divCard1.append(img, perfilName)
        perfilName.append(name, office)
        divCardAside.append(divCard1, buttonFollow)
        li.append(divCardAside)
        ul.appendChild(li)
    })
   
    return ul
}

function renderSugestUsers(list) {

    let suggestions = document.querySelector(".ul-aside")

    suggestions.innerHTML = ""


    suggestions.append(list(posts))
    createSugestUsers(sugestUsers)


}
renderSugestUsers(createSugestUsers)