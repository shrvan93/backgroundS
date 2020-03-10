document
    .querySelector('.container')
    .addEventListener('scroll', rotate);
    
    function rotate() {
        let distance = document.querySelector('.container').scrollTop; 
        document.querySelector('.gear')
                .style.transform = `rotate(${distance}deg)`;
    }