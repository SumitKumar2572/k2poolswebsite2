var length_bold;
function tenBols(id) {
    length_bold = id;
    // localStorage.setItem('bols_lenth', id);
    console.log(id);
    $(".bols_question").hide();
    $("#" + id).show();
    if(length_bold == 'ten'){

        $(".fifty").each(function() {
            $(this).hide(); 
        });
        
        $(".hundred").hide();
    }else if(length_bold == 'fifty'){
        $(".fifty").show();
        $(".hundred").hide();
    }else if(length_bold == 'hundred'){
        $(".fifty").show();
        $(".hundred").show();
    }
}
tenBols('ten');



var singleNum = $('.number-box.common').find('.single-number');
var singleNum2 = $('.number-box.special').find('.single-number');

$(singleNum).on('click', function () {
    var singleNumLength = $('.number-box.common').find('.single-number.selected').length;
    var this_btn_number = parseInt($(this).text());

    if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
        $('.result-number-palate').find('#' + this_btn_number).remove();
    } else {
        if (singleNumLength < 100) {
            $(this).addClass('selected');
            // $('.result-number-palate').append("<button class='single-number selected' id='" + this_btn_number + "'>" + $(this).text() + "</button>");
        }
    }
});

// picking number of OneSpecial
$(singleNum2).on('click', function () {
    var singleNumLength = $('.number-box.special').find('.single-number.selected.special').length;
    var this_btn_number = parseInt($(this).text());

    if ($(this).hasClass('selected') && $(this).hasClass('special')) {
        $(this).removeClass('selected');
        $(this).removeClass('special');
        $('.result-number-palate').find('#' + '0' + this_btn_number).remove();
    } else {
        if (singleNumLength < 1) {
            $(this).addClass('selected');
            $(this).addClass('special');
            $('.result-number-palate').append("<button class='single-number selected special' id='" + '0' + this_btn_number + "'>" + $(this).text() + "</button>");
        }
    }
});

// clear all selected number 
var all_Single_Number = $('.number-box').find('.single-number');
var all_Result_Number = $('.result-number-palate');

function clearAllNumbers() {
    all_Result_Number.empty();
    all_Single_Number.removeClass('selected');
    all_Single_Number.removeClass('special');
}


function randomNumberGenerate() {
    let singleRandomNumberTo8;
    let singleRandomNumberTo16;
    let singleRandomNumberTo24;


    if (length_bold === 'ten') {
        singleRandomNumberTo8 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        // singleRandomNumberTo16 = Math.floor(Math.random() * (7 - 4 + 1) + 4);
        // singleRandomNumberTo24 = Math.floor(Math.random() * (10 - 8 + 1) + 8);

    } else if (length_bold === 'fifty') {
        singleRandomNumberTo8 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
        // singleRandomNumberTo16 = Math.floor(Math.random() * (30 - 9 + 1) + 9);
        // singleRandomNumberTo24 = Math.floor(Math.random() * (50 - 31 + 1) + 31);

    } else if (length_bold === 'hundred') {
        singleRandomNumberTo8 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        // singleRandomNumberTo16 = Math.floor(Math.random() * (60 - 31 + 1) + 9);
        // singleRandomNumberTo24 = Math.floor(Math.random() * (100 - 61 + 1) + 61);

    }



    $('.number-box.common').find('.single-number').each(function () {
        var thisInnerNumber = parseInt($(this).text());
        $(this).attr('id', thisInnerNumber);
        $('#' + singleRandomNumberTo8).addClass('selected');
        // $('#' + singleRandomNumberTo16).addClass('selected');
        // $('#' + singleRandomNumberTo24).addClass('selected');
    });

    $('.result-number-palate').append("<button class='single-number selected' id='" + singleRandomNumberTo8 + "'>" + $("#" + singleRandomNumberTo8).text() + "</button>");
    // $('.result-number-palate').append("<button class='single-number selected' id='" + singleRandomNumberTo16 + "'>" + $("#" + singleRandomNumberTo16).text() + "</button>");
    // $('.result-number-palate').append("<button class='single-number selected' id='" + singleRandomNumberTo24 + "'>" + $("#" + singleRandomNumberTo24).text() + "</button>");

}

$('.clear-btn').on('click', function () {
    clearAllNumbers();
});

// changing Quiz games items
var single_Quiz = $('.lotteries-selection-menu').find('ul').find('li');

function logoChange(element) {
    var active_Quiz_logo = $(element).find('.Quiz-icon').find('img').attr('src');

    $('.selected-Quiz-logo').find('img').attr('src', active_Quiz_logo);
}

single_Quiz.each(function () {
    $(this).find('.single-Quiz-item').on('click', function () {

        if ($(this).parent().siblings().find('.single-Quiz-item').hasClass('active')) {
            $(this).parent().siblings().find('.single-Quiz-item').removeClass('active');
            $(this).addClass('active');
        }
        else {
            $(this).addClass('active');
        }

        logoChange($(this));

        var active_Quiz_name = $(this).find('.Quiz-name').text();
        $('.part-Quiz-info').find('.Quiz-name').text(active_Quiz_name);
      
    });
});

// animate__animated animate__fadeInDown

$('.auto-select-btn').on('click', function () {
    clearAllNumbers();
    randomNumberGenerate();
});
// });




