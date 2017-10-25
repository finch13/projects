'use strict';

var modulDynamicApi = function(store) {
    var 
        _baseList = store,
        listToRender = _baseList,
        search = document.querySelector('input[type="search"]'),
        nodeToRender = document.querySelector('.list-group-content'),
        dateFrom = getDefaultDateFrom(),
        dateTo = getDefaultDateTo(),
        searchByString = '',
        datepickerFrom = document.querySelector('#dateFrom'),
        datepickerTo = document.querySelector('#dateTo'),
        buttonFilteAZ = document.querySelector('.filterAZ'),
        buttonFilteDate = document.querySelector('.filterDate')
    ;

    search.addEventListener('keyup', function(e) {
        searchByString = e.target.value.toLowerCase();
        sort();
        render();
    });
    
    datepickerFrom.addEventListener('change', function(e) {
        if(e.target.valueAsNumber) {
            dateFrom = (new Date (e.target.valueAsNumber)).setHours(0);
        } else {
            dateFrom = getDefaultDateFrom();
        }
        sort();
        render();
    });
    datepickerTo.addEventListener('change', function(e) {
        if(e.target.valueAsNumber) {
            dateTo = (new Date (e.target.valueAsNumber)).setHours(0);
        } else {
            dateTo = getDefaultDateTo();
        }
        sort();
        render();
    });

    
    buttonFilteAZ.addEventListener('click', function(e) {
        listToRender = listToRender.sort(function(a,b) {
            if(a.name > b.name) {
                return 1;
            }
            if(a.name < b.name) {
                return -1;
            }
            return 0;
        });
        render();        
    });
    buttonFilteDate.addEventListener('click', function(e) {
        listToRender = listToRender.sort(function(a,b) {
            if(a.date > b.date) {
                return 1;
            }
            if(a.date < b.date) {
                return -1;
            }
            return 0;
        });
        render();        
    });


    function getDefaultDateFrom() {
        return _baseList.reduce((prev, element) => {
            return (prev.date < element.date) 
                ? prev : element;
        }).date;
    }

    function getDefaultDateTo() {
        return _baseList.reduce((prev, element) => {
            return (prev.date > element.date) 
                ? prev : element;
        }).date;
    }

    function sort() {
        listToRender = _baseList.filter( e => {
                return e.name.toLowerCase().includes(searchByString);
            }).filter(e => e.date >= dateFrom && e.date <= dateTo);
        
    }

    function render() {
        let container = document.createElement('ul');
        container.className = 'list-group-content';
        container.setAttribute('id', 'group-list');
        listToRender.forEach( e => {
            var 
                liWrap = document.createElement('li'),
                paragraphImgWrap = document.createElement('p'),
                imagePos = document.createElement('img'),
                caption = document.createElement('h4'),
                paragraphTitle = document.createElement('p'),
                spanDate = document.createElement('span');
    

            liWrap.className = 'liWrap';        
            caption.className = 'list-group-head';
            caption.innerHTML = e.name;
            paragraphImgWrap.className = 'poster-wrap clearfix';
            imagePos.className = 'poster';
            imagePos.src = e.poster;
            paragraphTitle.className = "list-group-text";
            paragraphTitle.innerHTML = e.description;
            spanDate.className = 'lebel-info';
            spanDate.innerHTML = `Date: ${new Date(+e.date).toLocaleString(
                'en', {year: 'numeric', month: 'long', day: 'numeric'}
            )}`;
    
    
            paragraphImgWrap.appendChild(imagePos);
            liWrap.appendChild(paragraphImgWrap);
            liWrap.appendChild(caption);
            liWrap.appendChild(paragraphTitle);
            liWrap.appendChild(spanDate);
    
            
            container.appendChild(liWrap);
    
        });
        console.log(container);
        nodeToRender.parentElement.replaceChild(container, nodeToRender);
        nodeToRender = container;
    }

    


    return {
        sort: sort,
        render: render
    }
} (store);

window.onload = function() {
    modulDynamicApi.render();
}



//----------------------------
/* function render(store) {
    let container = document.createElement('ul');
    container.className = 'list-group-content';
    container.setAttribute('id', 'group-list');
    store.forEach( e => {
        var liWrap = document.createElement('li')
        var paragraphImgWrap = document.createElement('p');
        var imagePos = document.createElement('img');
        var caption = document.createElement('h4');
        var paragraphTitle = document.createElement('p');
        var spanDate = document.createElement('span');

        liWrap.className = 'liWrap';        
        caption.className = 'list-group-head';
        caption.innerHTML = e.name;
        paragraphImgWrap.className = 'poster-wrap clearfix';
        imagePos.className = 'poster';
        imagePos.src = e.poster;
        paragraphTitle.className = "list-group-text";
        paragraphTitle.innerHTML = e.description;
        spanDate.className = 'lebel-info';
        spanDate.innerHTML = `Date: ${new Date(+e.date).toLocaleString(
            'en', {year: 'numeric', month: 'long', day: 'numeric'}
        )}`;


спочатку ідуть paragraphImgWrap так як має флоат
        paragraphImgWrap.appendChild(imagePos);
        liWrap.appendChild(paragraphImgWrap);
        liWrap.appendChild(caption);
        liWrap.appendChild(paragraphTitle);
        liWrap.appendChild(spanDate);

        
        container.appendChild(liWrap);

    });
    console.log(container);
    let oldUlContainer = document.querySelector('#group-list');
    oldUlContainer.parentElement.replaceChild(container, oldUlContainer)
}
render(store);

    store.forEach( e => {
    console.log(e.name);    
});

    var appStore = store.map(e => {
    var liContainer = document.createElement('li');
    liContainer.classList.add("liWrap");
setAttribute - якщо потрібно створити якийсь новтий 
елемент окрім класу (також є classList і className)
    var title = document.createElement('h4');
    title.classList.add("list-group-head");
    var paragraph = document.createElement('p');
    paragraph.classList.add('list-group-text');
    var label = document.createElement('span');
    label.classList.add('lebel-info');

    title.innerHTML = e.name;
    paragraph.innerHTML = e.description;
    label.innerHTML = `Date: ${new Date(+e.date).toLocaleString(
        'en', {year: 'numeric', month: 'long', day: 'numeric'}
    )}`;


    liContainer.appendChild(title);
    liContainer.appendChild(paragraph);
    liContainer.appendChild(label);

    return liContainer;
});

    function render(list, node) {
    list.forEach( e => {
        node.appendChild(e);
    });
}
render(appStore, document.getElementById("group-list"));


    var build = function(list) {
    var conteinerToRender =  document.createElement('ul');
    conteinerToRender.classList.add('list-group-content');
    conteinerToRender.setAttribute('id', 'group-list');
    list.forEach( e => {
        var conteiner = document.createElement('li');
        conteiner.classList.add("liWrap");
        var title = document.createElement('h4');
        title.classList.add("list-group-head");
        var paragraph = document.createElement('p');
        paragraph.classList.add('list-group-text');
        var label = document.createElement('span');
        label.classList.add('lebel-info');
    
        title.innerHTML = e.name;
        paragraph.innerHTML = e.description;
        label.innerHTML = `Date: ${new Date(+e.date).toLocaleString(
            'en', {year: 'numeric', month: 'long', day: 'numeric'}
        )}`;

        conteiner.appendChild(title);
        conteiner.appendChild(paragraph);
        conteiner.appendChild(label);

        conteinerToRender.appendChild(conteiner);
    });

    return conteinerToRender;
};

    var searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', function(event) {
    console.log(event.target.value);
    var tempStore = store.filter(function(e) {
        return e.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    var newConteiner = build(tempStore);
    var oldConteiner = document.querySelector('.list-group-content');
    oldConteiner.parentElement.replaceChild(newConteiner, oldConteiner);
}); */


