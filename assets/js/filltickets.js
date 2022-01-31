let position = 1;
let tickets = document.querySelectorAll(".ticket");


$('#prev_btn').addClass("btn-disabled");



let numTickets = tickets.length;

if(position==numTickets){
    $('#next_btn').text("Payer");
}

$(tickets[0]).fadeIn();


let circleProgress = new CircleProgress('.progress');
circleProgress.max = numTickets;
circleProgress.value = position;


$('#next_btn').click((event) => {

    if (position < numTickets) {

        $('#prev_btn').removeClass("btn-disabled");

        $(tickets[position - 1]).hide();

        position += 1;

        circleProgress.value = position;

        $(tickets[position - 1]).fadeIn();

        if (position == numTickets) {
            $('#next_btn').text("Payer");
        }

    }

})

$('#prev_btn').click((event) => {

    if (1 < position) {

        $('#next_btn').text("Ticket suivant");

        $(tickets[position - 1]).hide();

        position -= 1;

        circleProgress.value = position;

        $(tickets[position - 1]).fadeIn();


        if (position === 1) {
            $('#prev_btn').addClass("btn-disabled");
        }


    }

})

// new MaterialDatepicker('#date_exp', {
//     onNewDate: function (date) {
//         $('#date_exp').val(date.toLocaleDateString("fr-FR"))
//     }
// });
