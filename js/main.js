document.addEventListener('DOMContentLoaded', ()=>{
    anime.timeline({
        
    })
    .add({
        targets: '.bg-color',
        left: ['-100%', '100%'],
        easing: 'easeOutExpo',
        duration: 3000,
        delay: (el,i)=>i*10
    })
    .add({
        targets: ['.title','.sub-title'],
        scale:[0.7,1],
        opacity: [0,9],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: (el, i)=>i*100,
        offset: '-=2000'
    })
    .add({
        targets:['#circlebar','button','h1','h2','h3','h4','h5','p'],
        scale:[0,1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: (el, i)=>i*100,
        offset: '-=2000'

    })
    .add({
        targets: 'img',
        right: ['-2%', '0'],
        easing: 'easeOutExpo',
        duration: 1000,
        delay:100
    })
    
})


