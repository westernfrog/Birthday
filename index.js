$("#switch").click(function () {
  if (this.checked) {
    $("html").css("background-color", "#94B49F");
    $("html").css("transition", "3s");
    window.location.href = "birthday.html";
  } else {
    $("html").css("background-color", "#4C3A51");
  }
});
