var SpeechRecognition = window.webkitSpeechRecognition; //API utilizada para reconhecer o que estamos dizendo
  
var recognition = new SpeechRecognition();//criar um nova fala API para usar no App

function start()
{
    document.getElementById("textbox").innerHTML = ""; //Atualiza a textarea para valor vazio
    recognition.start();//chamar a função start (é uma função pre-definida  e converterá toda a fala em teto)
} 
 
recognition.onresult = function(event) {//função para obter os textos convertidos em onresult:

 console.log(event); 

var Content = event.results[0][0].transcript;// pega o resultado da nossa falapara texto, então armaz isso dentro de uma variável

    document.getElementById("textbox").innerHTML = Content;// atualiza o valor da textarea com esse valor
    console.log(Content);
      if(Content =="tire minha selfie")
      {
        console.log("tirando selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;
    speak_data = "tirando selfie por 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format : "jpeg",
    jpeg_quality:90
}

);
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';

    });
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}