var input_1, input_2, total = 0;

$(document).ready(function() {
    start();
});

function start(){
    $('#button_hapus').on('click', function () {
        $('#input_1').val('');
        $('#input_2').val('');

        $('.ionItem').remove();
        $("#label_3").text('Rp. 0,00');
        total = 0;
        console.log(total)
    } );
  
    $('#button_tambah').on('click', function () {
    input_1 = $('#input_1').val();
    input_2 = $('#input_2').val();
    if(input_1 == '' || input_2 == ''){
        handleButtonClick();
    }
    else{
        hitung(input_1, input_2);
        $('#input_1').val('');
        $('#input_2').val('');
    }
    } );
}

function handleButtonClick() {
    controller.create({
      header: 'Terjadi Kesalahan',
      message: 'Mohon masukkan nama dan jumlah pengeluaran.',
      buttons: ['Tutup']
    }).then(alert => {
      alert.present();
    });
  }

function hitung(input_1, input_2) {
    var itemAppend1 = '<ion-item class="ionItem">' +
                        '<ion-label>' + input_1 + '</ion-label>' +
                        '<ion-label> Rp. ' + input_2 + ',00</ion-label>' +
                        '</ion-item>';
    total += parseInt(input_2);
    // $("#list").append(itemAppend1);
    $( itemAppend1).insertBefore( "#list" );

    $("#label_3").text('Rp. ' + total + ',00');

    console.log(input_1);
    console.log(input_2);
}