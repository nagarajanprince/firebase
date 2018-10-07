//source()
var database = firebase.database();


function writeUserData() {

    var userId = $("#userid").val();
    var name = $("#name").val();
    var age = $("#age").val();

    database.ref('users/' + userId).set({
        Name: name,
        age: age
    }, function (error) {
        if (error) {
            $(".message").html("The write failed...");
            $(".page-wrap").addClass("show");
        } else {
            $(".message").html("Data saved successfully!");
            $('input[type="text"]').val('');
            $(".page-wrap").addClass("show");
        }
    });
}

function findData() {
    var userId = $("#findid").val();

    return database.ref('users/' + userId).once('value').then(function (snapshot) {
        $("#userid").val(userId);
        $("#name").val((snapshot.val() && snapshot.val().Name) || 'Anonymous');
        $("#age").val((snapshot.val() && snapshot.val().age) || 'Anonymous');
    });
}

$(document).ready(function () {
    $(".close").click(function () {
        $(".page-wrap").removeClass("show");

    });
});