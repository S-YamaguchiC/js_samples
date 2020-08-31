function ctrlButtonStatus() {

  // 必要な値を配列で受け取る
  var status = document.getElementsByName("status");
  var effect = document.getElementsByName("effect");
  var invalid = document.getElementsByName("invalid");

  // forで値を比較、ボタンを無効にする
  status.forEach((status_name, i) => {
    console.log(i + ":" + status_name.value); // 0:Effectiveness, 1:Invalid

    // status_nameの値を見て、ボタンの有効・無効を切り替える
    if (status_name.value === "Effectiveness") {
      effect[i].disabled = true
      invalid[i].disabled = false
    } else if (status_name.value === "Invalid") {
      effect[i].disabled = false
      invalid[i].disabled = true
    } else {
      console.log("no effective");
    }
    console.log(i + ":" + effect[i].disabled);
    console.log(i + ":" + invalid[i].disabled);
  });
}
