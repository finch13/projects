'use strict';


    function runSlots() {
        var slotOne = Math.floor(Math.random() * (3-1+1)) + 1;
        var slotTwo = Math.floor(Math.random() * (3-1+1)) + 1;;
        var slotThree = Math.floor(Math.random() * (3-1+1)) + 1;;

        var images = ["img/chery.png", 
        "img/bigWin.png", 
        "img/bar.png"];

        var logger = document.querySelector('.logger');
        var spanWrap = document.querySelectorAll('.spanWrap');

        spanWrap[0].innerHTML = `<img src="${images[slotOne-1]}">`;
        spanWrap[1].innerHTML = `<img src="${images[slotTwo-1]}">`;
        spanWrap[2].innerHTML = `<img src="${images[slotThree-1]}">`;

        if(slotOne === slotTwo && slotTwo === slotThree) {
            logger.innerHTML = `Result: ${slotOne} ${slotTwo}
            ${slotThree} - Its a win!`;
            return null;
        }

        if(slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined) {
            logger.innerHTML = `Result: ${slotOne} ${slotTwo}
            ${slotThree} - NOT a win!`;
            
        }

        return ([slotOne, slotTwo, slotThree]);
    }

    document.querySelector('.goInset').addEventListener('click', runSlots);
