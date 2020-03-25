$(document).ready(function () {
   
    for (let i = 15; i < 79; i++) {

        let result = 'calc(14px + ' + (100 * (i-14)) / window.innerWidth + 'vw)';
        $('<p>', { text: i, class: 'item_number' }).appendTo('#size_number');
        $('<p>', { text: result, class: 'item_insert' }).appendTo('#size_insert');
        
    };

    for (let i = 11; i < 203; i++) {

        let result = 'calc(' + i/2 + 'px + ' + (100 * (i/2)) / window.innerWidth + 'vw)';

        if (i < 75) {
            $('<p>', { text: i, class: 'item_number' }).appendTo('#distance_number__left');
            $('<p>', { text: result, class: 'item_insert' }).appendTo('#distance_insert__left');
        } else if ( i >= 75 && i < 139) {
            $('<p>', { text: i, class: 'item_number' }).appendTo('#distance_number__central');
            $('<p>', { text: result, class: 'item_insert' }).appendTo('#distance_insert__central');
        } else {
            $('<p>', { text: i, class: 'item_number' }).appendTo('#distance_number__right');
            $('<p>', { text: result, class: 'item_insert' }).appendTo('#distance_insert__right');
        };
            
    };

    $('.item_insert').on('click',function() {//Вешаем на клик
        var rng, sel;
        if ( document.createRange ) {//Не все браузеры поддерживают createRange 
            rng = document.createRange();//создаем объект область
            rng.selectNode( this )//выберем текущий узел
            sel = window.getSelection();//Получаем объект текущее выделение
            var strSel = ''+sel; //Преобразуем в строку (ох уж js...)
            if (!strSel.length) { //Если ничего не выделено
                sel.removeAllRanges();//Очистим все выделения (на всякий случай) 
                sel.addRange( rng ); //Выделим текущий узел
            }
        } else {//Если браузер не поддерживает createRange (IE<9, например)
            //Выделяем таким образом, уже без всяких проверок
            var rng = document.body.createTextRange();
            rng.moveToElementText( this );
            rng.select();
        }
    });

});

