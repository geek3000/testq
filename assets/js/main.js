let selectable_items1 = document.querySelectorAll(".selectable_btn");

selectable_items1.forEach(selectable_item => {

    selectable_item.addEventListener("click", (e) => {

        e.stopPropagation();
        e.cancelBubble = true;

        let item = e.currentTarget;

        let cid = item.id;


        if (cid == document.querySelector("#travel_type").value) {

            return;

        }


        document.querySelector("#travel_type").value = cid;


        $(item).removeClass("btn-outline");



        selectable_items1.forEach(item1 => {


            if (item1.id !== cid) {

                $(item1).addClass("btn-outline");

            }

        })


    }, true)

});

let selectable_items = document.querySelectorAll(".selectable_mean");

selectable_items.forEach(selectable_item => {

    selectable_item.addEventListener("click", (e) => {

        e.stopPropagation();
        e.cancelBubble = true;

        let item = e.currentTarget;

        let cid = item.id;


        if (cid == document.querySelector("#travel_mean").value) {

            return;

        }


        document.querySelector("#travel_mean").value = cid;


        $(item).removeClass("btn-outline");

        $(item.querySelector("#check")).show()



        selectable_items.forEach(item1 => {


            if (item1.id !== cid) {

                $(item1).addClass("btn-outline");
                $(item1.querySelector("#check")).hide()

            }

        })


    }, true)

});


$(".passenger_btn").click((event) => {

    if ($(event.currentTarget).hasClass("minus")) {

        let categ = $(event.currentTarget).parent().parent().attr('id');


        let current_value = parseInt($("#" + categ + "_input").val(), 10);

        if (current_value != 0) {

            $("#" + categ + "_input").val(current_value - 1);


            $('#count_' + categ).text(current_value - 1);

        }

    }

    if ($(event.currentTarget).hasClass("plus")) {



        let categ = $(event.currentTarget).parent().parent().attr('id');


        let current_value = parseInt($("#" + categ + "_input").val(), 10);


        $("#" + categ + "_input").val(current_value + 1);


        $('#count_' + categ).text(current_value + 1);



    }


    $("#adulte_input").val()

    $("#input_passenger").val($("#adulte_input").val() + " adulte(s) " + $("#enfant_input").val() + " enfant(s) " + $("#bebe_input").val() + " bébé(s)") //2 Adultes, 5 enfants, 3 bébés

})

$("#heure_slide").on("input", function () {

    $("#display_heure").text($(this).val());

});



