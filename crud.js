var database = firebase.database();


function writeUserData() {
    
    var userId = $("#userid").val();
    var name = $("#name").val();
    var age = $("#age").val();
    
  firebase.database().ref('users/' + userId).set({    
      Name: name,
      ager : age    
  });
}