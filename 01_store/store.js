/*
  table datas adding for session
*/
function addDatas(dataNum) {

  //
  var myStorage;

  // table datas
  var id = document.getElementsByName('id')[dataNum].value;
  var name = document.getElementsByName('name')[dataNum].value;
  var email = document.getElementsByName('e-mail')[dataNum].value;

  // out
  if (typeof window.localStorage !== 'undefined'){
    console.log('localStorage対応');
    myStorage = localStorage; // init

    // adding for store
    if (myStorage !== null) {
      sessionStorage.clear()
    }

    // set data
    myStorage.setItem("id", id);
    myStorage.setItem("name", name);
    myStorage.setItem("e-mail", email);

    // Transition
    window.location.href = './mailForm.html';

  } else {
    console.error('localStorage未対応');
  }
}


/*
  Get data in session
*/
function getStorageData() {
  // storage defined
  var myStorage = localStorage;

  // get datas for storage
  var id = myStorage.getItem("id");
  var name = myStorage.getItem("name");
  var email = myStorage.getItem("e-mail");

  // set text
  document.datas.to.value = name + ":<" + email + ">";

}

/*
  send mail
*/
function sendMail() {

  if(window.confirm("send, OK?")) {
    alert("Complete")
    // Transition
    window.location.href = './list.html';

  } else {
    alert("Canceled")

  }
}
