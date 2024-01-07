const template = document.getElementById('user-template');

const copies = 5;

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

    if(i===0){
        imageElement.src="https://cdn-icons-png.flaticon.com/128/3940/3940446.png"
        name.textContent = "John Doe";
        age.textContent = "28 years old";
        info.textContent = "A passionate wildlife enthusiast and photographer often found exploring nature."
    }
    else if(i===1){
        imageElement.src="https://cdn-icons-png.flaticon.com/128/4128/4128176.png"
        name.textContent = "Jane Smith";
        email.textContent = "janesmith@example.com";
        info.textContent = "An avid reader and aspiring novelist, Jane loves spending her weekends at local cafes."
    }
    else if(i===2){
        email.textContent = "mikebrown@example.com";
        age.textContent = "45 years old";
        info.textContent = "tech savvy and innovative, Sarah is known for her cutting-edge software solutions."
    }
    else if(i===3){
        imageElement.src="https://cdn-icons-png.flaticon.com/128/4333/4333609.png"
        name.textContent = "Sarah Johnson";
        email.textContent = "sarahjohnson@example.com";
        age.textContent = "30 years old";
        info.textContent = "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country"
    }
    else if(i===4){
        name.textContent = "Alex Martinez";
        age.textContent = "27 years old"
    }

    document.body.appendChild(clone)
}


  

