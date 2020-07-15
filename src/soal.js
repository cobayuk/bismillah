$(document).ready(function () {
        //Disable part of page
        $('.content-wrapper').bind('cut copy paste', function (e) {
            e.preventDefault();
        });
          $(document).bind("contextmenu", function(e) {
             if(!$(e.target).is('a')){
                return false;
             }
          });
    });

$(document).ready(function(){ $(".pembahasan").click(function(){ var no = $(this).attr("nomor-soal"); $("[nomor-jawab='"+no+"']").fadeToggle(); }); $(".page1").removeClass("btn-outline"); $(".page1").addClass("btn-primary"); var bagian = 1; if (bagian==1) { $(".sebelum").hide(); } if (bagian==105) { $(".berikut").hide(); } });

