

function openTab(evt, tabName) {
    // Declaring variables
    var i, tabcontent, tablinks;
  
    // all elements with class="tabcontent" , hide
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // all elements with class="tablinks" , remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
    




/*    $(document).ready(function(){

   $('.tablinks').click(function(){
     $('.tablinks').removeClass('').addClass('active');
 
 
      $('.tablinks pic1').css({
        'width':'80px',
        'height':'80px'
      });

      });
    
    });  */


    

    function openCity(evt, cityName) {
      // Declare all variables
      var i, cardcontent, cardlinks;
    
      // Get all elements with class="tabcontent" and hide them
      cardcontent = document.getElementsByClassName("cardcontent");
      for (i = 0; i < cardcontent.length; i++) {
        cardcontent[i].style.display = "none";
      }
    
      // Get all elements with class="tablinks" and remove the class "active"
      cardlinks = document.getElementsByClassName("cardlinks");
      for (i = 0; i < cardlinks.length; i++) {
        cardlinks[i].className = cardlinks[i].className.replace(" active", "");
      }
    
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
