
$(document).ready(function(){

  // $.get({ url: 'http://localhost:3000/grunts', data_type: 'json' })
  $.get({ url: 'https://echoshambler.herokuapp.com/grunts', data_type: 'json' })
   .then((response) => {
     response.grunts.forEach((grunt) => {
       $('#grunts').append(`
           <div class="col-lg-6 col-lg-offset-3 panel panel-default">
             <article class="panel-body text-right">
                 <div class="row">
                   <blockquote class="col-lg-10 text-left">${grunt.body}</blockquote>
                   <img src="${grunt.user.photo_url}" class="col-lg-2 image-responsive img-circle">
                 </div>
                 <div class="row">
                  <small class="col-lg-6 text-left">${$.timeago(grunt.created_at)}</small>
                  <small class="col-lg-6 text-right">&mdash; ${grunt.user.fullname} (@${grunt.user.username})</small>
             </article>
           </div>
        `)
     })
   })

})
