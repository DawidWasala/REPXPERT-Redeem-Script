// ==UserScript==
// @name         REPXPERT Redeem Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script automatically clears text inputs and sets keyboard caret on the first input box.
// @author       dawidhere
// @match        https://www.repxpert.pl/pl/loyalty/redeem
// ==/UserScript==

(function() {
    'use strict';

    var codeVoucher1 = document.getElementById("voucherCode1")
    codeVoucher1.value = "";
    document.getElementById("voucherCode2").value = "";
    document.getElementById("voucherCode3").value = "";
    document.getElementById("voucherCode4").value = "";
    codeVoucher1.select();


})();