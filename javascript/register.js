function register() {

    firebase.auth().signInWithEmailAndPassword("danielmmmelquiades@gmail.com", "123456").then(response => { console.log('success', response); }).catch(error => { console.log('error', error); });


    //window.location.href="cadastra.html"
}
