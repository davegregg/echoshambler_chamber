$(document).ready(function(){

  var source   = $("#grunts-template").html()
  var template = Handlebars.compile(source)

  Handlebars.registerHelper("howlongago", (date) => {
    return $.timeago(date)
  })

  $.get({ url: 'https://echoshambler.herokuapp.com/grunts', data_type: 'json' })
   .then((response) => {
     $("#grunts").html(template(response))
   })

})
