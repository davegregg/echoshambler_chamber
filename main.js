$(document).ready(function() {

    var template         = Handlebars.compile(   $("#grunts-template").html()   )
    var errors_template  = Handlebars.compile(   $("#errors-template").html()   )
    var modals_template  = Handlebars.compile(   $("#modals-template").html()   )

    Handlebars.registerHelper("howlongago", (date) => {
        return $.timeago(date)
    })

    var aryGrunts = new Array()
    $.get({
            url: 'https://echoshambler.herokuapp.com/grunts',
            data_type: 'json'
        })
        .done((response) => {
          $("#grunts").html(template(response))
        })
        .fail((status, textStatus, xhr) => {
            error = {
                code: status,
                textStatus: textStatus,
                message: xhr
            }
            $("#grunts").html(errors_template(error))
        })
        .then((response) => {
          modals_data = {
            modal: [
              {
                kind: 'user',
                title: 'User',
                body: 'This is the user body.'
              },
              {
                kind: 'grunt',
                title: 'Grunt',
                body: 'This is the grunt body.'
              }
            ]
          }

          modals_data.modal.forEach((modal) => {
            $('#modals').html(modals_template(modals_data))
          })

        })

})
