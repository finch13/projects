'use strict';

var downloadInput = document.getElementById("fileUpload");
var nodetoRender = document.querySelector('.listLoad');
var hide = document.querySelector('.cansel');

var Modal = new function(){
    this.view = document.getElementById('modalWin');
    
    this.show = function(imgURL) {
        this.view.classList.add('active');
        this.view.querySelector('img').src = imgURL;     
    }

    this.hide = function() {
        this.view.classList.remove('active');
    }
}();

downloadInput.addEventListener('change', e => {
      
    Array.prototype.forEach.call(e.target.files, el => {
         
        //console.log(el);
        let url = URL.createObjectURL(el);
        let img = new Image();
        img.src = url;

        createViewListItem(el, img);

        (function() { 
            let gifUp = document.querySelectorAll('.gifUp');
            for(var i = 0; i < gifUp.length; i++) (function(i) {
                img.onload = function() {
                    gifUp[i].parentNode.replaceChild(img, gifUp[i]);
                }
            } (i))
        } ());

        //console.log(getFormatSize(el.size));
        //console.log(el.type.match(/^(image)\/(.*)$/));
        if(el.type.match(/^(image)\/(.*)$/)) {
            console.log("This file is image");
        } else {
            return alert("This file is NOT image");
        }
    });    
});

function getFormatSize(size) {
    const Kbsize = 1024;
    const Mbsize = 1024*1024;

    if(size >= Mbsize) return (size / Mbsize).toFixed(1) + ' Mb';
    
    if(size >= Kbsize)  return (size / Kbsize).toFixed(1) + ' Kb';

    return (size / Kbsize).toFixed(3) + ' Kb';
}

function createViewListItem(element, img) {
    
    var liWrap = document.createElement('li'),
        gifUp = document.createElement('img'),
        spnaWrap = document.createElement('div'),
            spanName = document.createElement('span'),
            spanSize = document.createElement('span'),
        rightElem = document.createElement('div'),
            checkCircle = document.createElement('i');

    liWrap.addEventListener('click', e => {
        let target = e.target;

        if(target.closest('.fa-check-circle')) {
            var delElem = e.currentTarget;
            
            e.currentTarget.classList.add('slowAnim');
            var timer = setTimeout(function() {
                delElem.parentElement.removeChild(delElem);
            }, 1500);
        } else if(target.closest('.currentImg')){
            console.log(target);
            Modal.show(target.src);
        }
    });

    
    liWrap.className = 'clearfix';
    gifUp.className = 'gifUp';
    spnaWrap.className = 'spanWrap';
    spanName.className = 'file name';
    spanSize.className = 'file size';
    rightElem.className = 'rightelem';
    img.className = 'currentImg';
    checkCircle.className = 'fa fa-check-circle';

    
    spanName.innerHTML = element.name;
    spanSize.innerHTML = getFormatSize(element.size);
    gifUp.src = 'img/rolling.gif';

    liWrap.appendChild(gifUp);
    liWrap.appendChild(spnaWrap);
        spnaWrap.appendChild(spanName);
        spnaWrap.appendChild(spanSize);
    liWrap.appendChild(rightElem);
        rightElem.appendChild(img);
        rightElem.appendChild(checkCircle);

    nodetoRender.appendChild(liWrap);
}

hide.addEventListener('click', function() {
    Modal.hide();
});