$(document).ready(function() {

    var source = $("#grunts-template").html()
    var template = Handlebars.compile(source)
    var errors_source = $("#errors-template").html()
    var errors_template = Handlebars.compile(errors_source)

    Handlebars.registerHelper("howlongago", (date) => {
        return $.timeago(date)
    })

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
})
