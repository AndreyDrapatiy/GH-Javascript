

var keys =[];  // тут хранятся все ключи от item, по которым мы будем искать их контент(Заголовок, картинку и описание)
var returnAllKeys = JSON.parse(localStorage.getItem('allKeys')); // получаем все ключи которые уже есть в Storage и парсим

function getKeysAfterReload()  {   //пополняем массив keys из хранилища ключами если они там были

    if(returnAllKeys !== null){   //Что бы не было ошибки Can not read property of null
        for (var i = 0; i < returnAllKeys.length; i++) {
            keys.unshift(returnAllKeys[i]);
        }
        return keys;
    }
    else console.log('Storage is empty yet')
}

window.onload = function () {
    getKeysAfterReload();
    getItems();
};


function getItems() {   // берем ранее полученый ключ от записи.
                        // По нему находим соответсвующую запись в storage
                        // наполняем страницу из storage циклом

    if(returnAllKeys !== null){  //Что бы не было ошибки Can not read property of null
        for (var i = 0; i < returnAllKeys.length; i++) {

            var thisItem = JSON.parse(localStorage.getItem(returnAllKeys[i]));

            var  newItemTitle = thisItem['title'];
            var  newItemImage = thisItem['image'];
            var  newItemDescription = thisItem['description'];

            var template  = '<div class="col s12 card-panel grey lighten-5 z-depth-1 item"' + ' id="'+ newItemTitle +'">'+
                '<div class="col s4">'+ '<img class="responsive-img"' + ' src="'+ newItemImage +'">'+ '</div>'+
                '<div class="col s8">'+
                '<h2 class="item-title">'+ newItemTitle +'</h2>'+
                '<p class="item-description">'+ newItemDescription +'</p>'+
                '</div>'+
                '<button onclick="removeItem(this, this.parentNode.id)">remove</button>'+
                '</div>';

            document.getElementById('items-list').innerHTML += template;
        }
    }
    else console.log('Storage is empty yet')
}


function createNewItem() {
    var title = document.getElementById('create-title').value;
    var image = document.getElementById('create-image-link').value;
    var description = document.getElementById('create-description').value;

    var key = title;    //ключ для поиска контента равен заголовку записи, передаем его в keys, который потом запищем в storage
                        //по нему мы потом найдем и саму запись и ее контент
    var obj = {
        title : title,
        image : image,
        description : description
    };

    var serialObj = JSON.stringify(obj); //сериализуем обьект
    localStorage.setItem(key, serialObj); //запишем его в хранилище по ключу, который равен заголовку

    var returnObj = JSON.parse(localStorage.getItem(key)); //спарсим его обратно

    var inStorageTitleToKey = returnObj['title'];


    keys.push(inStorageTitleToKey); //записываем заголовок как ключь для поиска в массив keys


    function updateKeys() {
        var serialKeys = JSON.stringify(keys);
        localStorage.setItem('allKeys', serialKeys);
        return keys;
    }

    updateKeys(); //обновляем keys  в storage

    // вставляем в DOM
    var template  = '<div class="col s12 card-panel grey lighten-5 z-depth-1 item"' + ' id="'+ title +'">'+
        '<div class="col s4">'+ '<img class="responsive-img"' + ' src="'+ image +'">'+ '</div>'+
        '<div class="col s8">'+
        '<h2 class="item-title">'+ title +'</h2>'+
        '<p class="item-description">'+ description +'</p>'+
        '</div>'+
        '<button onclick="removeItem(this, this.parentNode.id)">remove</button>'+
        '</div>';

    document.getElementById('items-list').innerHTML += template;

    //очистка инпут
    document.getElementById('create-title').value = '';
    document.getElementById('create-image-link').value = '';
    document.getElementById('create-description').value = '';
}



function openCreator() {
    document.getElementById('items-list').classList.toggle('invisible');
    document.getElementById('creator').classList.toggle('invisible');
    document.getElementById('addBtn').classList.toggle('invisible');
}

function closeCreator() {
    document.getElementById('items-list').classList.toggle('invisible');
    document.getElementById('creator').classList.toggle('invisible');
    document.getElementById('addBtn').classList.toggle('invisible');
}


function removeItem(thisElem, parentId) {

    thisElem.parentNode.remove(); //Удаляем Item из DOM

    localStorage.removeItem(parentId) // Удаляем из Storage. Id елементов они же и ключи к их контенту в storage.



}





