  $(document).ready(function(){
    $("#selesai").click(function(){
      var hasil = 0;
      var jenis = "TWK";
      for(a=1; a<11; a++) {
        if ($("[name="+a+"]").is(":checked")) {
           var nilai = $("[name="+a+"]:checked").attr("poin");
            if (jenis != "TKP") {
               if (parseInt(nilai) < 5) {
                   $("[name="+a+"]:checked").siblings('label').find('span').after(" <i class='fa fa-remove text-danger'></i>");
               }
               if (parseInt(nilai) == 5) {
                   $("[name="+a+"]:checked").siblings('label').find('span').after(" <i class='fa fa-check text-success'></i>");
               }
            }
            if (jenis == "TKP") {
                $("[name="+a+"]:checked").siblings('label').find('span.pilihannya').after(" <i class='fa fa-circle text-primary'></i>");
            }
        } else {
          nilai=0;
        }
        hasil = hasil + parseInt(nilai);
    }
    if (jenis != "TKP") {
        $(".pilihannya[poin='5']").after(" <i class='fa fa-check text-success'></i>");
    }
    $("#nilainya").text(hasil);
    $(".pilih").hide();
    $(".pointkp").show();
    $("#kuis_lagi").show();
    $("#nilai").show();
    $("#selesai").hide();
    $("#kuis_lagi").addClass("d-block");
    $('.pilihannya').unwrap();
    $('html, body').animate({
        scrollTop: $("#atas").offset().top
    }, 1000);
    });
    $ganti = $('.pilihannya p');
    $ganti.replaceWith($ganti.html());
    $("#kuis_lagi").click(function(){
      window.location.href = "../kuis.html";
    });
  });

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
