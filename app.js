$(document).ready(function () {
  $flag = true;

  $psw = false;
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

  // close modal
  $(".conte").click(function () {
    if ($(this).hasClass("modals")) {
    } else {
      $(this).css("display", "none");
    }
  });

  function nospace(input) {
    $(input).keydown(function (event) {
      if (input.val().length === 0 && event.which === 32) {
        event.preventDefault();
      }
    });
  }
  nospace(name);
  nospace(email);
  nospace(pass);
  nospace(cpass);

  $(name).blur(function () {
    $(this).val($(this).val().trim());
  });

  function validatePassAndCpass() {
    let pwdmt = $(".pswdmatch");
    if ($(pass).length != 0 && $(cpass).length != 0) {
      if (pass.val() != cpass.val()) {
        pwdmt.html("Password does not match");
        pwdmt.css("color", "red");
        $(pass).css("border", "1px solid red");
        $(cpass).css("border", "1px solid red");
        $flag = false;
      }
    } else {
      pwdmt.html("Password match");
      pwdmt.css("color", "green");
      $(pass).css("border", "1px solid green");
      $(cpass).css("border", "1px solid green");
    }
    return $psw;
  }

  // keyup email

  $(email).keyup(function () {
    if (validateEmails()) {
      $(email).css("border", "1px solid green");
      $(email).next().css("display", "inline-block");
      $(email).next().html("email is valid");
      $(email).next().css("color", "green");
    } else {
      $(email).css("border", "1px solid red");
      $(email).next().css("display", "inline-block");
      $(email).next().html("email is not valid");
      $(email).next().css("color", "red");
    }
  });

  // keyup email

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
  function validateEmails() {
    var emailtest = $("#email").val();
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(emailtest)) {
      return true;
    } else {
      return false;
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
    validatesPass();
    validatescPass();
    validateEmails();
    validatePassAndCpass();
    console.log($flag);

    if ($flag === true) {
      modal.css("display", "block");
    }
    return $flag;
  });
});
