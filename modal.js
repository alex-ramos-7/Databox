$(document).ready(function(){

    var modalImg = '';
    var modalCopy = '';
    var iconClicked = '';
    var modalOpen = false;

    $('button').click(function(){
        iconClicked = this.id;
        showModal(iconClicked);
    });

    function showModal(partner){
        modalImg = ($("#" + partner).find('img').attr("src"));
        $('.myModal').find('h4').text(iconClicked.replace('_', ' '));
        $('.myModal').find('img').attr("src", modalImg);
        $('.myModal').toggle();
        modalOpen = true;
    }

    $('.closeButton').click(function(){
        $('.myModal').toggle();
        modalOpen = false;
    });

    $(document).click(function(event) {
        //if you click on anything except the modal itself or the "open modal" link, close the modal
        if(!modalOpen){
          $("body").find(".myModal").css("display", "none");
        }
        modalOpen = false;
      });
 });