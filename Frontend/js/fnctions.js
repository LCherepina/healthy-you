
$(document).ready(function(){
    $(".results-panel").hide();
    $("#countIMT").click(function(){ //Обрабатываем клик по кнопке
        //console.log("clicked");
        var first_number=$('.first_number_imt').val(); //Заносим первое число в переменную
        var second_number=$('.second_number_imt').val(); //Заносим второе число в переменную
        var third_number=$('.third_number_imt').val(); //Заносим второе число в переменную

        var send_form=true;

        if(first_number.length==0){ //Проверяем пустая ли переменная
            $('.first_number_imt').css('background','tomato'); //Если пустая, то подсвечиваем
            send_form=false;
        }

        if(second_number.length==0){ //Проверяем пустая ли переменная
            $('.second_number_imt').css('background','tomato'); //Если пустая, то подсвечиваем
            send_form=false;
        }
        if(third_number.length==0){ //Проверяем пустая ли переменная
            $('.third_number_imt').css('background','tomato'); //Если пустая, то подсвечиваем
            send_form=false;
        }

        first_number=parseFloat(first_number);
        second_number=parseFloat(second_number);
        //Каждую переменную, мы переводим в числовой тип с плавающей точкой


        if(send_form==true){
            //var type=$(this).attr('type'); //Получаем тип действия из атрибута type

            //if(type=='plus'){
            var result=first_number*10000/(second_number*second_number);
            //}

            $('.resultIMT span').text(result);
        }else{
            $('.resultIMT span').text('_');
        }
    });

    $('input').keyup(function(){
        $(this).css('background','#FFF');
    });

    $("#countWeight").click(function(){ //Обрабатываем клик по кнопке
        //console.log("clicked");
        var first_number1=$('.first_number_w').val(); //Заносим первое число в переменную
        //  var woman = $('#gender1').textContent;
        //   console.log(woman);
        var send_form=true;

        if(first_number1.length==0||first_number1<160){ //Проверяем пустая ли переменная
            $('.first_number_w').css('background','tomato'); //Если пустая, то подсвечиваем
            send_form=false;
        }

        first_number1=parseFloat(first_number1);
        //Каждую переменную, мы переводим в числовой тип с плавающей точкой

        if(send_form==true){
            var res=(first_number1-100)+(first_number1-150)/2;
            $('.resultWeight span').text(res);
        }else{
            $('.resultWeight span').text('_');
        }
    });



    $('input').keyup(function(){
        $(this).css('background','#FFF');
    });

    var first = 0;
    var second = 0;
    var third = 0;
    var forth = 0;
    var fifth = 0;

    $(".a11_label").click(function(){
        $('.a11').attr('checked', true);
        $('.a21').removeAttr('checked');
        $('.a31').removeAttr('checked');
        $('.a41').removeAttr('checked');
        $('.a51').removeAttr('checked');
        first++;
    });
    $(".a21_label").click(function(){
        $('.a11').removeAttr('checked');
        $('.a21').prop('checked', true);
        $('.a31').removeAttr('checked');
        $('.a41').removeAttr('checked');
        $('.a51').removeAttr('checked');
        second++;
    });
    $(".a31").click(function(){
        $('.a11').removeAttr('checked');
        $('.a21').removeAttr('checked');
        $('.a31').attr('checked', true);
        $('.a41').removeAttr('checked');
        $('.a51').removeAttr('checked');
        third++;
    });
    $(".a41_label").click(function(){
        $('.a11').removeAttr('checked');
        $('.a21').removeAttr('checked');
        $('.a31').removeAttr('checked');
        $('.a41').attr('checked', true);
        $('.a51').removeAttr('checked');
        forth++;
    });

    $(".a51_label").click(function(){
        $('.a11').removeAttr('checked');
        $('.a21').removeAttr('checked');
        $('.a31').removeAttr('checked');
        $('.a41').removeAttr('checked');
        $('.a51').attr('checked', true);
        fifth++;
    });

    $(".a12_label").click(function(){
        $('.a12').attr('checked', true);
        $('.a22').removeAttr('checked');
        $('.a32').removeAttr('checked');
        $('.a42').removeAttr('checked');
        $('.a52').removeAttr('checked');
        first++;
    });
    $(".a22_label").click(function(){
        $('.a12').removeAttr('checked');
        $('.a22').attr('checked', true);
        $('.a32').removeAttr('checked');
        $('.a42').removeAttr('checked');
        $('.a52').removeAttr('checked');
        second++;
    });
    $(".a32_label").click(function(){
        $('.a12').removeAttr('checked');
        $('.a22').removeAttr('checked');
        $('.a32').attr('checked', true);
        $('.a42').removeAttr('checked');
        $('.a52').removeAttr('checked');
        second++;
    });
    $(".a42_label").click(function(){
        $('.a12').removeAttr('checked');
        $('.a22').removeAttr('checked');
        $('.a32').removeAttr('checked');
        $('.a42').attr('checked', true);
        $('.a52').removeAttr('checked');
        forth++;
    });
    $(".a52_label").click(function(){
        $('.a12').removeAttr('checked', false);
        $('.a22').removeAttr('checked', false);
        $('.a32').removeAttr('checked', false);
        $('.a42').removeAttr('checked', false);
        $('.a52').attr('checked', true);
        fifth++;
    });
//third
    $(".a13_label").click(function(){
        $('.a13').attr('checked', true);
        $('.a23').removeAttr('checked');
        $('.a33').removeAttr('checked');
        $('.a43').removeAttr('checked');
        $('.a53').removeAttr('checked');
        first++;
    });
    $(".a23_label").click(function(){
        $('.a13').removeAttr('checked');
        $('.a23').attr('checked', true);
        $('.a33').removeAttr('checked');
        $('.a43').removeAttr('checked');
        $('.a53').removeAttr('checked');
        second++;
    });
    $(".a33_label").click(function(){
        $('.a13').removeAttr('checked');
        $('.a23').removeAttr('checked');
        $('.a33').attr('checked', true);
        $('.a43').removeAttr('checked');
        $('.a53').removeAttr('checked');
        third++;
    });
    $(".a43_label").click(function(){
        $('.a13').removeAttr('checked');
        $('.a23').removeAttr('checked');
        $('.a33').removeAttr('checked');
        $('.a43').attr('checked', true);
        $('.a53').removeAttr('checked');
        forth++;
    });

    $(".a53_label").click(function(){
        $('.a13').removeAttr('checked');
        $('.a23').removeAttr('checked');
        $('.a33').removeAttr('checked');
        $('.a43').removeAttr('checked');
        $('.a53').attr('checked', true);
        fifth++;
    });
    //forth
    $(".a14_label").click(function(){
        $('.a14').attr('checked', true);
        $('.a24').removeAttr('checked');
        $('.a34').removeAttr('checked');
        $('.a44').removeAttr('checked');
        $('.a54').removeAttr('checked');
        first++;
    });
    $(".a24_label").click(function(){
        $('.a14').removeAttr('checked');
        $('.a24').attr('checked', true);
        $('.a34').removeAttr('checked');
        $('.a44').removeAttr('checked');
        $('.a54').removeAttr('checked');
        second++;
    });
    $(".a34_label").click(function(){
        $('.a14').removeAttr('checked');
        $('.a24').removeAttr('checked');
        $('.a34').attr('checked', true);
        $('.a44').removeAttr('checked');
        $('.a54').removeAttr('checked');
        third++;
    });
    $(".a44_label").click(function(){
        $('.a14').removeAttr('checked');
        $('.a24').removeAttr('checked');
        $('.a34').removeAttr('checked');
        $('.a44').attr('checked', true);
        $('.a54').removeAttr('checked');
        forth++;
    });

    $(".a54_label").click(function(){
        $('.a14').removeAttr('checked');
        $('.a24').removeAttr('checked');
        $('.a34').removeAttr('checked');
        $('.a44').removeAttr('checked');
        $('.a54').attr('checked', true);
        fifth++;
    });


    //forth
    $(".a15_label").click(function(){
        $('.a15').attr('checked', true);
        $('.a25').removeAttr('checked');
        $('.a35').removeAttr('checked');
        $('.a45').removeAttr('checked');
        $('.a55').removeAttr('checked');
        first++;
    });
    $(".a25_label").click(function(){
        $('.a15').removeAttr('checked');
        $('.a25').attr('checked', true);
        $('.a35').removeAttr('checked');
        $('.a45').removeAttr('checked');
        $('.a55').removeAttr('checked');
        second++;
    });
    $(".a35_label").click(function(){
        $('.a15').removeAttr('checked');
        $('.a25').removeAttr('checked');
        $('.a35').attr('checked', true);
        $('.a45').removeAttr('checked');
        $('.a55').removeAttr('checked');
        third++;
    });
    $(".a45_label").click(function(){
        $('.a15').removeAttr('checked');
        $('.a25').removeAttr('checked');
        $('.a35').removeAttr('checked');
        $('.a45').attr('checked', true);
        $('.a55').removeAttr('checked');
        forth++;
    });

    $(".a55_label").click(function(){
        $('.a15').removeAttr('checked');
        $('.a25').removeAttr('checked');
        $('.a35').removeAttr('checked');
        $('.a45').removeAttr('checked');
        $('.a55').attr('checked', true);
        fifth++;
    });


    var max = 0;
    var string ="<br>Вам потрібні якісні силові навантаження<br>\n" +
        "\n" +
        "Вам подобається зосередження на роботі м'язів і перевірка можливостей власного тіла. Ви любите тренування, під час яких досягаєте максимальної напруги, і тренажерний зал - не останнє місце, де вам комфортно перебувати. Звичайні вправи, які пропонує фітнес, здаються вам занадто простими. В такому випадку вам прямо показані силові тренажери і потужна кардіо-навантаження. Однак не варто нехтувати і тими вправами, які пропонує класичний фітнес: більшість з них засновані на постійному повторенні, що саме по собі - прекрасна перевірка на витривалість.";
    function maxV(first, second, third, forth, fifth) {
        max = first;
        if (second > max) {
            max = second;
            string ="<br>Вам потрібно зміцнення зв'язку розуму, тіла і духу<br>\n" +
                "\n" +
                "Вправи бачаться вам як спосіб розслабитися, прийти в гармонію з собою, навчитися чути своє тіло. Ви не фанат силових навантажень, вам більше до душі відчуття спокою й умиротворення, яке залишається після спокійних і розмірених тренувань. Ймовірно, вам може знадобитися досвідчений інструктор, під керівництвом якого ви будете медитувати і занурюватися у свій внутрішній світ. Вам підійдуть будь-які види йоги, групи по розтяжці або плавання. Саме під час таких занять вам буде найлегше відчути справжній момент і стати максимально цілісним істотою." }
        if (third > max){
            max = third;
            string ="<br>Вам потрібні якісні силові навантаження<br>\n" +
                "\n" +
                "Вам подобається зосередження на роботі м'язів і перевірка можливостей власного тіла. Ви любите тренування, під час яких досягаєте максимальної напруги, і тренажерний зал - не останнє місце, де вам комфортно перебувати. Звичайні вправи, які пропонує фітнес, здаються вам занадто простими. В такому випадку вам прямо показані силові тренажери і потужна кардіо-навантаження. Однак не варто нехтувати і тими вправами, які пропонує класичний фітнес: більшість з них засновані на постійному повторенні, що саме по собі - прекрасна перевірка на витривалість.";

        }
        if (forth > max){
            max = forth;
            string ="<br>Вам потрібні якісні силові навантаження<br>\n" +
                "\n" +
                "Вам подобається зосередження на роботі м'язів і перевірка можливостей власного тіла. Ви любите тренування, під час яких досягаєте максимальної напруги, і тренажерний зал - не останнє місце, де вам комфортно перебувати. Звичайні вправи, які пропонує фітнес, здаються вам занадто простими. В такому випадку вам прямо показані силові тренажери і потужна кардіо-навантаження. Однак не варто нехтувати і тими вправами, які пропонує класичний фітнес: більшість з них засновані на постійному повторенні, що саме по собі - прекрасна перевірка на витривалість.";

        }

        if (fifth > max) {
            max = fifth;
            string ="<br>Вам потрібні якісні силові навантаження<br>\n" +
                "\n" +
                "Вам подобається зосередження на роботі м'язів і перевірка можливостей власного тіла. Ви любите тренування, під час яких досягаєте максимальної напруги, і тренажерний зал - не останнє місце, де вам комфортно перебувати. Звичайні вправи, які пропонує фітнес, здаються вам занадто простими. В такому випадку вам прямо показані силові тренажери і потужна кардіо-навантаження. Однак не варто нехтувати і тими вправами, які пропонує класичний фітнес: більшість з них засновані на постійному повторенні, що саме по собі - прекрасна перевірка на витривалість.";

        }
    }

    function result() {

        $('.results-panel').show();
        $('.container').hide();
        $('.test-title').hide();
        //$(".result").text(string);
        document.querySelector('.results-panel > span ').innerHTML = string;
    }
    $(".result").on('click', function(){
       result();
    });

});
