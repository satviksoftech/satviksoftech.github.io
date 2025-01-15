window.onload = function(){
    const form = document.querySelector("#contact-form")
    if (form){
      form.addEventListener("submit",function(e){
        e.preventDefault()
        // alert("asdsd")
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbydde06T9EfxEt-Mlq4sznZ_7rf4YnU1uqQhUbYD0JG_1RId4QoK0koOGLSNRd9oTW2og/exec'
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            alert('Thank You!', response)
            location.reload();
          })
          .catch(error => alert('Error!', error.message))
      })      
    }

    // document.addEventListener("click",function(e){
    //     e.preventDefault()
    //     // alert("asdsd")
    //     $(".courseBox").val($(".applyBtn").data("name"))
    
    //     const scriptURL = 'https://script.google.com/macros/s/AKfycbydde06T9EfxEt-Mlq4sznZ_7rf4YnU1uqQhUbYD0JG_1RId4QoK0koOGLSNRd9oTW2og/exec'
    //     const form = document.querySelector("#register-form")
    //     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //       .then(response => alert('Thank you!', response))
    //       .catch(error => alert('Error!', error.message))
    //   })
    

}