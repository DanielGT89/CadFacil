function register() {

    firebase.auth().signInWithEmailAndPassword("", "").then(response => { console.log('success', response); }).catch(error => { console.log('error', error); });


    //window.location.href="cadastra.html"
}
