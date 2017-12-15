
$(document).ready(function(){

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


});
$(document).ready(function(){

});