$(document).ready(function () {
  $flag = true;
  var inputs = $("input");
  var form = $("#myform");
  var name = $("#name");

  function validateOnKeypress(field) {
    $("input").keyup(function () {
      if ($(field).val().length <= 2) {
        $(field).css("border", "1px solid red");
        $(field).next().css("display", "inline-block");
        $(field).next().html("field should be atleat 2 characters");
        $(field).next().css("color", "red");
      } else {
        $(field).css("border", "1px solid green");
        $(field).next().css("color", "green");
        $(field).next().html("nice job dude");
      }
    });
  }
  validateOnKeypress(name);

  function validateName() {
    if ($(name).val().length < 2) {
      $(name).css("border", "1px solid red");
      $(name).next().css("display", "inline-block");
      $flag = false;
    } else {
      $(name).css("border", "1px solid green");
      $(name).next().css("display", "none");
    }
  }

  $(form).submit(function (e) {
    e.preventDefault();
    validateName();
    console.log(
      $(form)
        .find(inputs)
        .each(function () {
          $(this).val().trim();
        })
    );
    return $flag;
  });
});
