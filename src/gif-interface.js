import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(function(){
  $('#gifButton').click(function() {
    let search = $('#findGif').val();

    $.ajax({
      url: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${search}&limit=100&offset=0&rating=G&lang=en`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        for(let i = 0; i < response.data.length; i++){
        $('.gif').append(`<img src="${response.data[i].images.original.url}"/>`);
      }
      },
      error: function() {
        $('.errors').text("There was an error processing your request. Please try again.");
      }
    });
  });

});
