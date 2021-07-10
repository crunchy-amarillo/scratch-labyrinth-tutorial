function init() {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = $(this).data('include');
      $(this).load(file);
    });

   // $('.carousel').carousel();
}

function docReady() {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(init, 1);
    } else {
        document.addEventListener("DOMContentLoaded", init);
    }
}  

docReady();
