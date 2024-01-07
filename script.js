const userInfoList = [
    {
        image:"https://cdn-icons-png.flaticon.com/128/3940/3940446.png",
        name:"John Doe",
        email:null,
        age:"28 years old",
        info:"A passionate wildlife enthusiast and photographer often found exploring nature."
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/4128/4128176.png",
        name:"Jane Smith",
        email:"janesmith@example.com",
        age:null,
        info:"An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes."
    },
    {
        image:null,
        name:null,
        email:"mikebrown@example.com",
        age:"45 years old",
        info:null
    },
    {
        image:"https://cdn-icons-png.flaticon.com/128/4333/4333609.png",
        name:"Sarah Johnson",
        email:"sarahjohnson@example.com",
        age:"30 years old",
        info:"Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions."
    },
    {
        image:null,
        name:"Alex Martinez",
        email:null,
        age:"27 years old",
        info:"A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country"
    },

]
const template = document.getElementById('user-template');
const copies = userInfoList.length

for(let i=0; i<copies; i++){
    const clone = document.importNode(template.content, true);
    const imageElement = clone.querySelector('.user-image');
    imageElement.style.width = "100px"
    const name = clone.querySelector('.user-name');
    const email = clone.querySelector('.user-email');
    const age = clone.querySelector('.user-age');
    const info =  clone.querySelector('.user-info');
    const xbutton = clone.querySelector('.btn-close');
    xbutton.textContent = "X"
    xbutton.classList.add("xButton")
    xbutton.addEventListener('click',function(){
        const card = xbutton.closest('.user-container');
        card.remove();
    })

    imageElement.src=userInfoList[i].image;
    name.textContent=userInfoList[i].name;
    email.textContent=userInfoList[i].email;
    age.textContent=userInfoList[i].age;
    info.textContent=userInfoList[i].info;

    document.body.appendChild(clone)
}


  

