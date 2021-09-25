let intro = document.querySelector('.intro');
let logo = document.querySelector('skyline');
let logospan = document.querySelectorAll('.logo');



window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logospan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx+1)*400)
        });

        setTimeout(()=>{
            logospan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList('active');
                    span.classList('fade');
                }, (idx+1)*50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top ='-150vh'
        },2300)
    })
})