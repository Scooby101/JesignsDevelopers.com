var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "50px";
    } 
  }
}
//============================================================
$(".handle").on("click", function () {
  $("nav ul").toggleClass("showing")
});
//===============================================
$("dropbtn").on("click", function () {
  $("nav ul").toggleClass("showing")
})
//==============================================================
function toggleClock() { 
    // get the clock 
    var myClock = document.getElementById('clock');

    // get the current value of the clock's display property 
    var displaySetting = myClock.style.display;

    // also get the clock button, so we can change what it says 
    var clockButton = document.getElementById('clockButton');
                
    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') { 
      // clock is visible. hide it
      myClock.style.display = 'none';

    }
    else { 
      // clock is hidden. show it 
      myClock.style.display = 'block';
      myClock.style.color= 'blue'

    }
  }  