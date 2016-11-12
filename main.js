function change_classes() {
    if (($(window).width() > 499)) {
        $("#log-buttons").addClass('w3-third');
        $("#log-form").addClass('w3-twothird');
        $('#log-buttons').removeClass("w3-border-bottom");
        $('#log-form').addClass("w3-border-left");
    } else {
        $("#log-buttons").removeClass('w3-third');
        $("#log-form").removeClass('w3-twothird');
        $('#log-buttons').addClass("w3-border-bottom");
        $('#log-form').removeClass("w3-border-left");
    }
}
$(window).ready(function() {
    change_classes();
});
$(window).resize(function() {
    change_classes();
});

function open_nav() {
    document.getElementById("main").style.marginLeft = "30%";
    document.getElementById("side-nav").style.width = "30%";
    document.getElementById("side-nav").style.display = "block";
    document.getElementById("openNav").style.display = 'none';

    document.getElementById("logout-button").style.marginRight = "30%";
    if (document.getElementById("yes-no")) {
        document.getElementById("yes-no").style.paddingRight = "15%";
        document.getElementById("yes-no").style.paddingLeft = "15%";
    }
}

function close_nav() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("side-nav").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";

    document.getElementById("logout-button").style.marginRight = "0%";
    document.getElementById("yes-no").style.paddingRight = "0%";
    document.getElementById("yes-no").style.paddingLeft = "0%";
}

function filtering() {
    document.getElementById('filter').style.display = 'block';

    function moveDSlider(e) {
        var pos = $(e.currentTarget).offset(),
            posX = e.pageX - pos.left,
            value = posX * 100 / $(e.currentTarget).outerWidth();

        if (posX >= 0 && posX <= $(e.currentTarget).outerWidth()) {
            $('#distance.slider > .progress').css('width', posX + 'px');
            $('#distance.slider > .indicator').css('left', posX + 'px');
            $('#distance.slider > .indicator').text(value.toFixed());
        }
    }

    function moveASlider(e) {
        var pos = $(e.currentTarget).offset(),
            posX = e.pageX - pos.left,
            value = posX * 100 / $(e.currentTarget).outerWidth();

        if (posX >= 0 && posX <= $(e.currentTarget).outerWidth()) {
            $('#age.slider > .progress').css('width', posX + 'px');
            $('#age.slider > .indicator').css('left', posX + 'px');
            $('#age.slider > .indicator').text(value.toFixed());
        }
    }

    function movePSlider(e) {
        var pos = $(e.currentTarget).offset(),
            posX = e.pageX - pos.left,
            value = posX * 100 / $(e.currentTarget).outerWidth();

        if (posX >= 0 && posX <= $(e.currentTarget).outerWidth()) {
            $('#pop.slider > .progress').css('width', posX + 'px');
            $('#pop.slider > .indicator').css('left', posX + 'px');
            $('#pop.slider > .indicator').text(value.toFixed());
        }
    }
    $('#distance.slider').on('mousedown', function(e) {
        moveDSlider(e);
        $('#distance.slider').on('mousemove', function(e) {
            moveDSlider(e);
        });
    }).on('mouseup', function() {
        $('#filter').off('mousemove');
    });
    $('#age.slider').on('mousedown', function(e) {
        moveASlider(e);
        $(this).on('mousemove', function(e) {
            moveASlider(e);
        });
    }).on('mouseup', function() {
        $(this).off('mousemove');
    });
    $('#pop.slider').on('mousedown', function(e) {
        movePSlider(e);
        $(this).on('mousemove', function(e) {
            movePSlider(e);
        });
    }).on('mouseup', function() {
        $('#filter').off('mousemove');
    });
    $('#filter').on('mouseup', function() {
        $('#filter').off('mousemove');
    });
}