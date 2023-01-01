const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            TypeAnimation(entry.target);
        }
    })
})

function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}  

async function TypeAnimation(element){
    if(!element)
        return;
    if(element.classList.contains('shown'))
        return;
    const Content = element.innerHTML;
    element.innerHTML = '';
    for(let i = 0; i < Content.length; i++){
        element.innerHTML = element.innerHTML + Content[i];
        await delay(5);
    }
    element.classList.add('shown');
}

const hiddenElements = document.querySelectorAll('.hidden');

//hiddenElements.forEach((element) => observer.observe(element));