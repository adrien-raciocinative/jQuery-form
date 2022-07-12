$(document).ready(function () {
  $flag = true;
  var inputs = $("input");
  var form = $("#myform");
  var name = $("#name");
  var email = $("#email");

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
  validateOnKeypress(email);

  // validateemail
  function validatesEmail() {
    if ($(name).val().length < 2) {
      $(email).css("border", "1px solid red");
      $(email).next().css("display", "inline-block");
      $flag = false;
    } else {
      $(email).css("border", "1px solid green");
      $(email).next().css("display", "none");
    }
  }

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

  $(form).submit(function () {
    validateName();
    validatesEmail();
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
