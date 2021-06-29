$(function () {
    $('.summary').hide();
    $('.find').hide();
    
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);


        let order = (f, s, c, t, n, total) => {
            return { f, s, c, t, n, total };
        };

        let price, totalPrice;
        switch (flavour) {
            case flavour = "vegtikka":
                switch (size) {
                    case size = "regular":
                        price = 450;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "chicken":
                switch (size) {
                    case size = "regular":
                        price = 450;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "beef":
                switch (size) {
                    case size = "regular":
                        price = 450;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "Pepperoni Pizza":
                switch (size) {
                    case size = "regular":
                        price = 450;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "Garlic Fingers":
                switch (size) {
                    case size = "regular":
                        price = 450;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "Sushi Pizza":
                switch (size) {
                    case size = "regular":
                        price = 450
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "mushroom":
                switch (size) {
                    case size = "regular":
                        price = 450;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
            case flavour = "pineapple":
                switch (size) {
                    case size = "regular":
                        price = 450;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 900;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thincrust") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thickcrust") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "heavycrust") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                }
                break;
        }
        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 80;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 80;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 80;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 80;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 120;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 120;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 120;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 120;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 120;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 170;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 170;
                break;

        }

        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder); 

        $('.summary').slideDown(2500);
        $('.find').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1500);
        $('.delivernot').show(1500);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });


    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1500);
        $('.delivernot').hide(1500);
        $('.find').slideDown();
    });


    $(".delivernot").click(function () {

    });


    $(function () {
        $.scrollify.move('#sum-order');
    });
});