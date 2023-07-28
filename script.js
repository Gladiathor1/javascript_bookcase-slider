
    
var info_width=0;


// Give Active Class
document.getElementsByClassName('info')[0].classList.add('active');

// $('.info').first().addClass('active');

// Show First Info
var inactive_slide_width=4;
info_width=100-(((document.getElementsByClassName("info").length)-1)*inactive_slide_width);   //96
var info_width_copy=info_width + "%";
var info_default=inactive_slide_width+"%";


var slide_count=document.querySelectorAll("section.slide_section img");

slide_count.forEach(element => {
    element.style.width=info_width+"vw";
    
});

if (window.innerWidth <1023) {
    slide_count.forEach(element => {
        element.style.width="90vw";
        
    });
} else {
    slide_count.forEach(element => {
        element.style.width=info_width+"vw";
        
    });
}



document.getElementsByClassName("info")[0].style.width = info_width_copy
var current;

function right()
{
    if (window.innerWidth <1023) {
        info_width_copy="100%";
    } else {
        info_width_copy=info_width+ "%";
        info_default=inactive_slide_width+"%";
    }

    current=document.getElementsByClassName('active')[0];
    current.classList.remove('active');

    current.style.width=info_default;
    


    try {
        current.nextElementSibling.classList.add('active');
        current.nextElementSibling.style.width=info_width_copy;
        
    } catch (error) {
        document.getElementsByClassName('info')[0].classList.add('active');
        document.getElementsByClassName('info')[0].style.width=info_width_copy;
    }

}
function left()
{

    if (window.innerWidth <1023) {
        info_width_copy="100%";
    } else {
        info_width_copy=info_width + "%";
        info_default=inactive_slide_width+"%";
    }


    current=document.getElementsByClassName('active')[0];
    current.classList.remove('active');
    current.style.width=info_default;


    try {
        current.previousElementSibling.classList.add('active');
        current.previousElementSibling.style.width=info_width_copy;
        
    } catch (error) {
        var last_item = document.getElementsByClassName('info').length - 1;
        document.getElementsByClassName('info')[last_item].classList.add('active');
        document.getElementsByClassName('info')[last_item].style.width=info_width_copy;
    }

}

// Show Info On Click

function slide_click(e)
{
    if (window.innerWidth <1023) {
        info_width_copy="100%";
    } else {
        info_width_copy=info_width + "%";
        info_default=inactive_slide_width+"%";
    }


    current=document.getElementsByClassName('active')[0];
    current.classList.remove('active');
    current.style.width=info_default;

    var clicked_slide = document.getElementsByClassName("info")[e];
    clicked_slide.classList.add('active');
    clicked_slide.style.width=info_width_copy;
    document.getElementsByClassName("slider_pagination_btn active")[0].classList.remove("active");
    document.getElementsByClassName("slider_pagination_btn")[e].classList.add("active");
}

//new pagination
var slideElements = ((document.getElementsByClassName("info").length));
    var slidesLength = slideElements;
    var paginationElement = document.getElementsByClassName("slider_pagination")[0];
    var paginationHTML="";
    for (var i = 0; i < slidesLength; i++) {
        if(i==0){
            paginationHTML+='<button onclick="dotclick('+i+')" class="slider_pagination_btn active"></button>';
        }
        else{
            paginationHTML+='<button onclick="dotclick('+i+')" class="slider_pagination_btn"></button>';
        }
        
    }
    paginationElement.innerHTML = paginationHTML;
    
    function dotclick(dotval){
    document.getElementsByClassName("slider_pagination_btn active")[0].classList.remove("active");
    document.getElementsByClassName("slider_pagination_btn")[dotval].classList.add("active");
    slide_click(dotval);
    
    }















// $('.info').click(function () {
    
//     $(this).siblings('.info').removeClass('active');
//     $(this).addClass("active");

//     if (window.innerWidth <1023) {
//         info_width_copy="100%";
//     } else {
//         info_width_copy=(info_width - 4) + "%";
//         info_default="4%";
//     }

//     $(this).width(info_width_copy)
//     $(this).siblings('.info').width(info_default);
    
// });




