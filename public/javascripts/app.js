$(document).ready(function() {
  var max_genral_symptoms    = 100; 
  var wrapper         = $(".input_genral_symptoms_wrap"); 
  var add_button      = $(".add_genral_symptoms_button"); 
  
  var x = 1;
	
  $(add_button).click(function(e) { 
    e.preventDefault();
    if(x < max_genral_symptoms){ 
      $(wrapper).append('<div><input class="form-control genral_symptoms-data mb-3" type="text" name="genral_symptoms"><a href="#" class="remove_field"><svg class="genral_symptoms" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M275.676,256l111.169-111.169c5.435-5.433,5.435-14.242,0.001-19.675c-5.435-5.433-14.243-5.433-19.677,0L256.001,236.325L144.832,125.156c-5.433-5.433-14.243-5.433-19.678,0c-5.435,5.433-5.433,14.243,0,19.677l111.169,111.169L125.154,367.169c-5.433,5.433-5.433,14.243,0,19.677c2.717,2.717,6.278,4.075,9.838,4.075c3.561,0,7.122-1.358,9.838-4.075l111.169-111.169l111.169,111.169c2.716,2.717,6.278,4.075,9.838,4.075s7.122-1.358,9.838-4.075c5.433-5.433,5.433-14.243,0-19.677L275.676,256z"/></g><g><path d="M255.999,0.001C114.841,0.001,0,114.841,0,256s114.841,255.999,255.999,255.999S512,397.159,512,256S397.158,0.001,255.999,0.001z M255.999,484.173C130.185,484.173,27.827,381.816,27.827,256c0-125.815,102.357-228.172,228.172-228.172S484.173,130.186,484.173,256C484.173,381.816,381.815,484.173,255.999,484.173z"/></g></svg></a></div>');
      x++; 
    }
  });
  
  $(wrapper).on("click",".remove_field", function(e) {
    e.preventDefault(); 
    $(this).parent('div').remove(); 
    x--;
  })
});

$(document).ready(function() {
  var max_score_symptoms = 100; 
  var wrapper            = $(".input_score_symptoms_wrap"); 
  var add_button         = $(".add_score_symptoms_button"); 
  var x = 1; 


  $(add_button).click(function(e) { 
    e.preventDefault();
    if(x < max_score_symptoms) { 
      $(wrapper).append('<div class="row"><div class="col-2"><input class="form-control scores mb-3" type="number" name="scores"></div><div class="col-10"><input class="form-control symptoms mb-3" type="text" name="symptoms"></div><a href="#" class="remove_field"><svg class="score_symptoms" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M275.676,256l111.169-111.169c5.435-5.433,5.435-14.242,0.001-19.675c-5.435-5.433-14.243-5.433-19.677,0L256.001,236.325L144.832,125.156c-5.433-5.433-14.243-5.433-19.678,0c-5.435,5.433-5.433,14.243,0,19.677l111.169,111.169L125.154,367.169c-5.433,5.433-5.433,14.243,0,19.677c2.717,2.717,6.278,4.075,9.838,4.075c3.561,0,7.122-1.358,9.838-4.075l111.169-111.169l111.169,111.169c2.716,2.717,6.278,4.075,9.838,4.075s7.122-1.358,9.838-4.075c5.433-5.433,5.433-14.243,0-19.677L275.676,256z"/></g><g><path d="M255.999,0.001C114.841,0.001,0,114.841,0,256s114.841,255.999,255.999,255.999S512,397.159,512,256S397.158,0.001,255.999,0.001z M255.999,484.173C130.185,484.173,27.827,381.816,27.827,256c0-125.815,102.357-228.172,228.172-228.172S484.173,130.186,484.173,256C484.173,381.816,381.815,484.173,255.999,484.173z"/></g></svg></a></div>'); 
      x++; 
    }
  });
  
  $(wrapper).on("click",".remove_field", function(e){ 
      
    e.preventDefault(); 
    $(this).parent('div').remove(); 
    x--;
  })
});

$(document).ready(function() {
  var max_causes  = 100; 
  var wrapper     = $(".input_causes_wrap"); 
  var add_button  = $(".add_causes_button"); 
  
  var x = 1;
	
  $(add_button).click(function(e) { 
    e.preventDefault();
    if(x < max_causes){ 
      $(wrapper).append('<div><input class="form-control causes-data mb-3" type="text" name="causes"><a href="#" class="remove_field"><svg class="causes" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M275.676,256l111.169-111.169c5.435-5.433,5.435-14.242,0.001-19.675c-5.435-5.433-14.243-5.433-19.677,0L256.001,236.325L144.832,125.156c-5.433-5.433-14.243-5.433-19.678,0c-5.435,5.433-5.433,14.243,0,19.677l111.169,111.169L125.154,367.169c-5.433,5.433-5.433,14.243,0,19.677c2.717,2.717,6.278,4.075,9.838,4.075c3.561,0,7.122-1.358,9.838-4.075l111.169-111.169l111.169,111.169c2.716,2.717,6.278,4.075,9.838,4.075s7.122-1.358,9.838-4.075c5.433-5.433,5.433-14.243,0-19.677L275.676,256z"/></g><g><path d="M255.999,0.001C114.841,0.001,0,114.841,0,256s114.841,255.999,255.999,255.999S512,397.159,512,256S397.158,0.001,255.999,0.001z M255.999,484.173C130.185,484.173,27.827,381.816,27.827,256c0-125.815,102.357-228.172,228.172-228.172S484.173,130.186,484.173,256C484.173,381.816,381.815,484.173,255.999,484.173z"/></g></svg></a></div>');
      x++; 
    }
  });
  
  $(wrapper).on("click",".remove_field", function(e) {
    e.preventDefault(); 
    $(this).parent('div').remove(); 
    x--;
  })
});

$(document).ready(function() {
  var max_score_diseases = 100; 
  var wrapper            = $(".input_score_diseases_wrap"); 
  var add_button         = $(".add_score_diseases_button"); 
  var x = 1; 
  var innerContent       = $("#first-disease-for-meds").html();
  
  $(add_button).click(function(e) { 
    e.preventDefault();
    if(x < max_score_diseases) { 
      $(wrapper).append('<div class="row"><div class="col-2"><input class="form-control scores mb-3" type="number" name="scores"></div><div class="col-10"><select class="form-control disease-name-for-medicine mb-3" name="diseases">' + innerContent + '</select></div><a href="#" class="remove_field"><svg class="score_symptoms" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M275.676,256l111.169-111.169c5.435-5.433,5.435-14.242,0.001-19.675c-5.435-5.433-14.243-5.433-19.677,0L256.001,236.325L144.832,125.156c-5.433-5.433-14.243-5.433-19.678,0c-5.435,5.433-5.433,14.243,0,19.677l111.169,111.169L125.154,367.169c-5.433,5.433-5.433,14.243,0,19.677c2.717,2.717,6.278,4.075,9.838,4.075c3.561,0,7.122-1.358,9.838-4.075l111.169-111.169l111.169,111.169c2.716,2.717,6.278,4.075,9.838,4.075s7.122-1.358,9.838-4.075c5.433-5.433,5.433-14.243,0-19.677L275.676,256z"/></g><g><path d="M255.999,0.001C114.841,0.001,0,114.841,0,256s114.841,255.999,255.999,255.999S512,397.159,512,256S397.158,0.001,255.999,0.001z M255.999,484.173C130.185,484.173,27.827,381.816,27.827,256c0-125.815,102.357-228.172,228.172-228.172S484.173,130.186,484.173,256C484.173,381.816,381.815,484.173,255.999,484.173z"/></g></svg></a></div>'); 
      x++; 
    }
  });
  
  $(wrapper).on("click",".remove_field", function(e){ 
      
    e.preventDefault(); 
    $(this).parent('div').remove(); 
    x--;
  })
});

const filterDisease = () => {
  let filter_input = document.getElementById('filter_input').value.toUpperCase();
  let element = document.querySelectorAll('.disease-list');
  let disease_name = document.querySelectorAll('.disease-name');

  for(let i = 0; i < element.length; i++) {

    let textValue = disease_name[i].textContent || disease_name[i].innerHTML;

    if (textValue.toUpperCase().indexOf(filter_input) > -1) {
      element[i].style.display = "";
    } else {
      element[i].style.display = "none";
    }

  }
};
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}