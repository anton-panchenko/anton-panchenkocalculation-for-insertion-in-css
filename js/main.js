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

    $('.item_insert').on('click', function () {
       
        var $tmp = $("<input>");
        $("body").append($tmp);
        $tmp.val($(this).text()).select();
        document.execCommand("copy");
        $tmp.remove();

        var rng, sel;
        if ( document.createRange ) {
            rng = document.createRange();
            rng.selectNode( this );
            sel = window.getSelection();
            var strSel = ''+sel;
            if (!strSel.length) {
                sel.removeAllRanges();
                sel.addRange( rng );
            }
        } else {
            var rng = document.body.createTextRange();
            rng.moveToElementText( this );
            rng.select();
        };

    });
  
});

