(function () {
  "use strict";

  var requiredByForm = {
    "newsletter-interest": ["email"],
    "contact-house-pendale": ["name", "email", "message"]
  };

  function enforceConstraints() {
    Object.keys(requiredByForm).forEach(function (formName) {
      var form = document.querySelector('form[name="' + formName + '"]');
      if (!form) return;
      requiredByForm[formName].forEach(function (fieldName) {
        var field = form.elements[fieldName];
        if (field) field.required = true;
      });
    });
  }

  enforceConstraints();
  document.addEventListener("DOMContentLoaded", enforceConstraints);
  new MutationObserver(enforceConstraints).observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form || !requiredByForm[form.name]) return;

    var missing = requiredByForm[form.name].find(function (name) {
      var field = form.elements[name];
      return !field || !String(field.value || "").trim();
    });

    if (!missing) return;
    event.preventDefault();
    var field = form.elements[missing];
    field.setCustomValidity("Please complete this field before sending it to the House.");
    field.reportValidity();
    field.addEventListener("input", function clearMessage() {
      field.setCustomValidity("");
      field.removeEventListener("input", clearMessage);
    });
  }, true);
}());
