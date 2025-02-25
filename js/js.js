function send(){
var templateParams = {
    name: document.getElementById["name"].value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,

  };
  
  emailjs.send('service_wu2li3u', 'template_beyrabq', templateParams).then(
    
        (response) => {
       console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
        console.log('FAILED...', error);
    },
  );

}
