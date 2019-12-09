// kreiranje parent diva u kojeg drop-amo

const container = document.createElement('div');
container.setAttribute('id','container');

// dodavanje stila na container
container.style = `
    position: relative;
    border: 2px solid black;
    height: 250px;
    width: 250px;
    background-color: gray;
    color: white;
    `

//kreiranje child diva koji sadrži tekstualne poruke

const containerText = document.createElement('div');
containerText.setAttribute('id','containerText');
containerText.innerHTML = "Drag and drop here";

// dodavanje stila na containerText
containerText.style = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
`

// ubacivanje child diva u parent div i parent diva u body na početak

container.appendChild(containerText);
document.body.insertBefore(container, document.body.firstElementChild);

// dodavanje event listenera za dragover, dragleave i drop

container.addEventListener('dragover', e => {
    e.preventDefault();
    container.style.border = "2px dashed yellow";
    containerText.innerText = "You can drop now";
}, false)

container.addEventListener('dragleave', e => {
    container.style.border = "2px solid black";
    containerText.innerText = "Drag and drop here";
}, false)

container.addEventListener('drop', e => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const todaysDate = new Date();
    const fileDate = file.lastModifiedDate;
    const dateDiff = Math.abs(todaysDate - fileDate);
    const diffDays = Math.ceil(dateDiff / (1000 * 60 * 60 * 24)); 
    console.log(`
        File name: ${file.name}
        Size: ${file.size}
        Type: ${file.type}
        Days passed since last modification: ${diffDays}
    `);
    containerText.innerText = `Successfull drop!
    
    Take a look in console for more information`; 
}, false)
