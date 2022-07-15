$(document).ready(function () {
  var inputs = $("input");
  var form = $("#myform");
  var name = $("#name");
  var email = $("#email");
  var pass = $("#pass");
  var cpass = $("#cpass");

  $("#toggle").change(function () {
    // Check the checkbox state
    if ($(this).is(":checked")) {
      // Changing type attribute
      pass.attr("type", "text");
      cpass.attr("type", "text");

      // Change the Text
      $("#toggleText").text("Hide");
    } else {
      // Changing type attribute
      pass.attr("type", "password");
      cpass.attr("type", "password");

      // Change the Text
      $("#toggleText").text("Show");
    }
  });

  // close modal
  $(".conte").click(function () {
    if ($(this).hasClass("modals")) {
    } else {
      $(this).css("display", "none");
    }
  });

  // prevent spaces to be entered at the begining of fields
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

  // trimSpace(inout); remove spaces on all the end and all input on blur(after fucus on the filed is loose)
  function blurTrim(input) {
    $(input).blur(function () {
      $(this).val($(this).val().trim());
    });
  }
  blurTrim(name);
  blurTrim(email);
  blurTrim(pass);
  blurTrim(cpass);

  // validate if password is equal to confirm password

  function validatePassAndCpass() {
    var vraipass = pass.val();
    var vraicpass = cpass.val();
    let pwdmt = $(".pswdmatch");

    if (vraipass.length == 0 || vraicpass.length == 0) {
      pwdmt.css("color", "red");
      $(pass).css("border", "1px solid red");
      $(cpass).css("border", "1px solid red");

      return false;
    } else {
      if (vraipass == vraicpass) {
        pwdmt.html("Password match");
        pwdmt.css("color", "green");
        $(pass).css("border", "1px solid green");
        $(cpass).css("border", "1px solid green");
        return true;
      } else {
        pwdmt.html("Password does not match");
        pwdmt.css("color", "red");
        $(pass).css("border", "1px solid red");
        $(cpass).css("border", "1px solid red");
        return false;
      }

      return true;
    }
  }

  // validate name and paswords feilds to be more than 2 in lenght
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
        $(x).next().html("fields is correct");
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

      return false;
    } else {
      $(pass).css("border", "1px solid green");
      $(pass).next().css("display", "none");

      return true;
    }
  }

  // validatepassword
  function validatescPass() {
    if ($(cpass).val().length < 2) {
      $(cpass).css("border", "1px solid red");
      $(cpass).next().css("display", "inline-block");

      return false;
    } else {
      $(cpass).css("border", "1px solid green");
      $(cpass).next().css("display", "none");

      return true;
    }
  }

  // validateemail

  // display notice message if fields empty on submit
  function emptyEmail() {
    if ($(email).val().length < 2) {
      $(email).css("border", "1px solid red");
      $(email).next().css("display", "inline-block");

      return false;
    } else {
      return true;
    }
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

  // regular expressiong to check for email validity
  function validateEmails() {
    var emailtest = $("#email").val();
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (reg.test(emailtest)) {
      return true;
    } else {
      $(email).css("border", "1px solid red");
      $(email).next().css("display", "inline-block");
      $(email).next().html("email is not valid");
      $(email).next().css("color", "red");
      return false;
    }
  }

  // validatename
  function validateName() {
    if ($(name).val().length < 2) {
      $(name).css("border", "1px solid red");
      $(name).next().css("display", "inline-block");

      return false;
    } else {
      $(name).css("border", "1px solid green");
      $(name).next().css("display", "none");

      return true;
    }
  }

  // submit button code
  $(form).submit(function (e) {
    let modal = $(".modals");
    e.preventDefault();

    if (validateEmails() && validateName && validatePassAndCpass()) {
      // console.log("valid");
      modal.css("display", "block");
    } else {
      // console.log(validateName());
      // console.log(validateEmails());
      // console.log(validatePassAndCpass());
      // console.log("invalid");
      validateName();
      validatesPass();
      validatescPass();
      validateEmails();
      validatePassAndCpass();
      emptyEmail();
    }
  });
});
