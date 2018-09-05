$(document).ready(function(){

    var modalImg = '';
    var modalCopy = '';
    var iconClicked = '';
    var modalOpen = false;

    $('button').click(function(){
        iconClicked = this.id;
        console.log(iconClicked);
        showModal(iconClicked);
    });

    $('.closeButton').click(function(){
        $('.myModal').toggle();
        modalOpen = false;
    })

    function showModal(partner){
        modalImg = ($("#" + partner).find('img').attr("src"));
        console.log(iconClicked);
        console.log(modalImg);
        $('.myModal').find('h4').text(iconClicked);
        $('.myModal').find('img').attr("src", modalImg);
        $('.myModal').toggle();
        modalOpen = true;
        
    }

    // $(document).click(function(){
    //     if (event.target != $('.myModal') && modalOpen == true) {
    //         $('.myModal').toggle();
    //         modalOpen = false;
    //     }
    // })
 });