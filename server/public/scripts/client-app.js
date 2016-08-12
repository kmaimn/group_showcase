$(document).ready(function() {
    console.log("Shiz werkin");
    loadPeeps();
    //listener

//defined the object;
    var peep = {};

//added the POST stuff;
    $.ajax({
      type: 'POST',
      url: '/people',
      data: peep,
      success: function(repsonse){
        console.log('this works')
        loadPeeps();
      },
      error: function(response){
        console.log('something is wrong')
      }
    });
    //AJAX
    function loadPeeps() {
        $.ajax({
            type: 'GET',
            url: '/people',
            success: function(response) {
                response.forEach(function(peeps){
                    appendDOM(peeps);
                });
            },
            //added an error response;
            error: function(respose) {
              console.log('GET: something is wrong');
            }
        });
    };

    function appendDOM(peeps) {
        $('.peeps-container').append('<div class="people-spot"></div>');
        $el = $(".peeps-container").children().last();
        $el.append('<img class="peep-image" src="' + peeps.url + '"></img>');
        $el.append('<h2 class="peep-name">' + peeps.name + '</h2>');
        $el.append('<p class="peep-bio">' + peeps.bio + '</p>');
        $el.append('<button class="like">Like!</button>');
        //added the like button;
    }


});
