// ==UserScript==
// @name         [Captcha Skip]
// @version      666
// @description  This solve google recaptcha automatic after sec.
// @author       Vixer
// @match	 ebonus.gg google.com
// @icon         https://i.ibb.co/nMBgVNz/skull.png
// @include      *
// @grant        none
// @namespace https://greasyfork.org/users/200015
// @downloadURL https://update.greasyfork.org/scripts/384610/%5BCaptcha%20Skip%5D.user.js
// @updateURL https://update.greasyfork.org/scripts/384610/%5BCaptcha%20Skip%5D.meta.js
// ==/UserScript==

var domain = (window.location != window.parent.location) ? document.referrer.toString() : document.location.toString();
if (domain.indexOf('miped.ru') == -1 && domain.indexOf('indiegala') == -1 && domain.indexOf('gleam.io') == -1) { //You can exclude domains here (advanced)
    if (location.href.indexOf('google.com/recaptcha') > -1) {
        var clickCheck = setInterval(function() {
            if (document.querySelectorAll('.recaptcha-checkbox-checkmark').length > 0) {
                clearInterval(clickCheck);
                document.querySelector('.recaptcha-checkbox-checkmark').click();
            }
        }, 5000);
    } else {
        var forms = document.forms;
        for (var i = 0; i < forms.length; i++) {
            if (forms[i].innerHTML.indexOf('google.com/recaptcha') > -1) {
                var rc_form = forms[i];
                var solveCheck = setInterval(function() {
                    if (grecaptcha.getResponse().length > 0) {
                        clearInterval(solveCheck);
                        rc_form.submit();
                    }
                }, 100);
            }
        }
    }
}