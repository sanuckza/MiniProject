window.onload=function(){
    var firebaseRef=firebase.database().ref("Cake");
    firebaseRef.once('value').then(function(dataSnapshot){
        console.log(dataSnapshot.val());
    });
}