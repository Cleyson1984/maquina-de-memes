function enablePhotoUpLoad(){
    const imageInput = document.querySelector("#image-input")
    imageInput.addEventListener("change", function(){
        const reader = new FileReader()
        reader.addEventListener("load", ()=>{
            const uploadImage = reader.result
            changeMemePicture(uploadImage)
          //  document.querySelector("#display-image").style
            //.backgroundImage = `url(${uploadImage})`
        })
        reader.readAsDataURL(this.files[0])
    })
}

async function mapImageList(){
    const memesObject = [
        {
        "name": "caminhao",
        "path": "pictures/caminhao.jpg"
    },
    {
        "name": "esquilo",
        "path": "pictures/esquilo.jpg"
    },
    {
        "name": "fly",
        "path": "pictures/fly.jpg"
    },
    {
        "name": "homer",
        "path": "pictures/homer-simpson.jpg"
      
    },
    {
        "name": "image",
        "path": "pictures/image-thumb9.png"
       
    },
]
    return memesObject

    
}
async function createGallery(imageList){
    const memeSelector = document.querySelector("#memes-list")
    imageList.forEach(picture => {
        let newOpiton = document.createElement("option")
        newOpiton.text = picture.name.toUpperCase()
        newOpiton.value = picture.path
        memeSelector.appendChild(newOpiton)
        }); 
        
}
async function changeMemePicture(photo){
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main (){
    const memesImageList = await mapImageList()
    enablePhotoUpLoad()
    await createGallery(memesImageList)
    await changeMemePicture(memesImageList[3].path)
  }

main()