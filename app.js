$(document).ready(function () {
  $flag = true;
  var inputs = $("input");
  var form = $("#myform");
  var name = $("#name");
  var email = $("#email");
  var pass = $("#pass");
  var cpass = $("#cpass");

  // remove space in forms
  // function noSpace(field) {
  //   $(field).change(function () {
  //     $(this).val($(this).val().trim());
  //   });
  //   console.log(this);
  // }
  // noSpace(name);
  // noSpace(pass);
  // noSpace(email);
  // noSpace(cpass);

  // // on keyup remove space
  // function trimSpace(x) {
  //   let field = $(x).attr("id");
  //   $(x).blur(function () {
  //     if (!/\S/.test($(x).val())) {
  //       alert("form can not be only space");
  //     } else {
  //     }
  //   });
  // }

  // trimSpace(name);

  // validates form on keyup

  // validate if password is equal to confirm password

  function validatePassAndCpass() {
    let pwdmt = $(".pswdmatch");
    if (pass.val() != cpass.val()) {
      pwdmt.html("Password does not match");
      pwdmt.css("color", "red");
      $(pass).css("border", "1px solid red");
      $(cpass).css("border", "1px solid red");
      $flag = false;
    } else {
      pwdmt.html("Password match");
      pwdmt.css("color", "green");
      $(pass).css("border", "1px solid green");
      $(cpass).css("border", "1px solid green");
    }
  }

  function valall(x) {
    let field = $(x).attr("id");
    $(x).keyup(function () {
      if ($(x).val().length <= 2) {
        $(x).css("border", "1px solid red");
        $(x).next().css("display", "inline-block");
        $(x)
          .next()
          .html(field + "" + " should be atleat 2 characters");
        $(x).next().css("color", "red");
      } else {
        $(x).css("border", "1px solid green");
        $(x).next().css("color", "green");
        $(x).next().html("nice job dude");
      }
    });
  }
  valall(name);
  valall(pass);
  valall(email);
  valall(cpass);

  // validatepassword
  function validatesPass() {
    if ($(pass).val().length < 2) {
      $(pass).css("border", "1px solid red");
      $(pass).next().css("display", "inline-block");
      $flag = false;
    } else {
      $(pass).css("border", "1px solid green");
      $(pass).next().css("display", "none");
      $flag = true;
    }
  }

  // validatepassword
  function validatescPass() {
    if ($(cpass).val().length < 2) {
      $(cpass).css("border", "1px solid red");
      $(cpass).next().css("display", "inline-block");
      $flag = false;
    } else {
      $(cpass).css("border", "1px solid green");
      $(cpass).next().css("display", "none");
      $flag = true;
    }
  }
  function validatesPass() {
    if ($(pass).val().length < 2) {
      $(pass).css("border", "1px solid red");
      $(pass).next().css("display", "inline-block");
      $flag = false;
    } else {
      $(pass).css("border", "1px solid green");
      $(pass).next().css("display", "none");
      $flag = true;
    }
  }

  // validateemail
  function validatesEmail() {
    if ($(email).val().length < 2) {
      $(email).css("border", "1px solid red");
      $(email).next().css("display", "inline-block");
      $flag = false;
    } else {
      $(email).css("border", "1px solid green");
      $(email).next().css("display", "none");
      $flag = true;
    }
  }

  // validatename
  function validateName() {
    if ($(name).val().length < 2) {
      $(name).css("border", "1px solid red");
      $(name).next().css("display", "inline-block");
      $flag = false;
    } else {
      $(name).css("border", "1px solid green");
      $(name).next().css("display", "none");
      $flag = true;
    }
  }

  $(form).submit(function (e) {
    let modal = $(".modals");
    e.preventDefault();
    validateName();
    validatesEmail();
    validatesPass();
    validatescPass();
    validatePassAndCpass();
    console.log($flag);

    if ($flag === true) {
      modal.css("display", "block");
    }
    return $flag;
  });
});
