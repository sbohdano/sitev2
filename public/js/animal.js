const addButton = document.querySelector('.addButton');
const closePage = document.querySelector('.close');
const nameofpet = document.querySelector('.nameinput');
const ageofpet = document.querySelector('.ageinput');
const biopet = document.querySelector('.biopet');
const sentBTN = document.querySelector('.sent');
const AddBlock = document.querySelector('.addblock');
const mainSection = document.querySelector('.mainsection');
const InputImg = document.querySelector('.inputac');

addButton.addEventListener('click', function() {
    AddBlock.style.display = 'block';
    AddBlock.style.transform = 'translateY(650px)';
});

closePage.addEventListener('click', function() {
    AddBlock.style.transform = 'translateY(-100px)';
    AddBlock.style.display = 'none';
});

function adding() {
    // let name = nameofpet.value;
    // let age = ageofpet.value;
    // let info = biopet.value;
    // let infoText = document.createElement('p')
    // AddBlock.appendChild(infoText);
    

    // if (name == '' || age == '' || info == '') {
    //     infoText.innerText = 'Не всі поля заповнені';
    // }

    // else {
    //     nameofpet.value = '';
    //     ageofpet.value = '';
    //     biopet.value = '';
    //     AddBlock.style.display = 'none';
    //     infoText.innerText = '';
        
    //     let newPet = document.createElement('div');
    //     mainSection.appendChild(newPet);
    //     newPet.className = 'petBlock';

    //     let photoblock = document.createElement('div')
    //     newPet.appendChild(photoblock);
    //     photoblock.className = 'photo';

       
    //     let photo = document.createElement('img');
    //     photo.className = 'photoimg';
    //     photo.src = URL.createObjectURL(InputImg.files[0]);
    //     photoblock.appendChild(photo);

    //     let newPetName = document.createElement('h2');
    //     newPet.appendChild(newPetName);
    //     newPetName.innerText = name;


    //     let newPetAge = document.createElement('h3');
    //     newPet.appendChild(newPetAge);
    //     newPetAge.innerText = age;

    //     let newPetInfo = document.createElement('p');
    //     newPet.appendChild(newPetInfo);
    //     newPetInfo.innerText = info;
    //     };

    let myObj = {name: nameofpet.value, age: ageofpet.value}
    let myJSON = JSON.stringify(myObj);
    localStorage.setItem('testJSON',myJSON);

    let text = localStorage.getItem('testJSON');
    let obj = JSON.parse(text);
    let newBlock = document.createElement('div');
    mainSection.appendChild(newBlock);

    newBlock.innerHTML = `
        <div class="petBlock">
            <div class="photo">
                <img  class="photoimg" src="img/logo.png" alt="">
            </div>
            <h2>${obj.name}</h2>
            <h3>${obj.age}</h3>
            <p>Біографія</p>
    </div>
    `
    AddBlock.style.display = 'none';

};


sentBTN.addEventListener('click',adding);