/*
1- changing nav background color on scroll  ... done
2- to top arrow  .... done
3- adding plugin 
4- adding loader  .... done
*/
const navHeight = $(".navbar").height();
const aboutOffset = $("#info").offset().top;
// function for changing nav background color on scroll
function changeBckground(){
    $(window).on("scroll", ()=>{
        if($(window).scrollTop() >= aboutOffset - navHeight){
            $(".navbar").addClass("bg-light");
            $(".arrow").removeClass("d-none");
            $(".arrow").on("click", ()=>{
                $(window).scrollTop(0) 
            })
        }else{
            $(".navbar").removeClass("bg-light");
            $(".arrow").addClass("d-none");
        }
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    AOS.init({
        duration: 1000,
    })
})

changeBckground();
$('.content').addClass('d-none');
    setTimeout(()=>{
        $('.content').removeClass('d-none');
        $("#loaderContainer").addClass("d-none");
    }, 1000)
