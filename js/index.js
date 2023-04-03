

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
    




  /* $(document).ready(function(){

   $('.tablinks').click(function(){
     $('.tablinks').removeClass('').addClass('active');
 
 
      $('.tablinks img').css({
        'width':'80px',
        'height':'80px'
      });

      });
    
    }); */

    