function Function1() {
    // Get the checkbox
    var checkBox = document.getElementById("checking1");
    // Get the output text
    var text = document.getElementById("text1");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      alert("Your money will be diposited");
    } 
    else {
      console.log("diposited");
    }
  }

  function Function2() {
    // Get the checkbox
    var checkBox = document.getElementById("checking2");
    // Get the output text
    var text = document.getElementById("text2");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      alert("Your money will be withdrawn");
    } 
    else {
      console.log("money-withdrawn");
    }
  }

  function Function3() {
    // Get the checkbox
    var checkBox = document.getElementById("checking3");
    // Get the output text
    var text = document.getElementById("text3");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      alert("Your money will be transfered");
    } 
    else {
      console.log("money-transfer");
    }
  }