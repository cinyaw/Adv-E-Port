// template_92jerbe
// service_9p4liia
// vB4B4VgeYV6UNHy1p

function contact(event) {
    event.preventDefault()
    // await emailjs
    //     .sendForm(
    //         'service_9p4liia',
    //         'template_92jerbe',
    //         event.target,
    //         'vB4B4VgeYV6UNHy1p'
    //     ).then(() => {
    //         console.log('this worked1')
    //     })
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    
    setTimeout(() => {
        console.log('it worked 1')
    }, 500)
}