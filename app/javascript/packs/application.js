// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

// 顧客一覧ページにスライドショーをしようするためimport
import "jquery";
import "popper.js";
import "bootstrap";
import "../stylesheets/application";



$(document).on('turbolinks:load',function() {
  $('.slider').slick({
      arrows: false,  //ボタン非表示
      autoplay: true, //自動再生
      autoplaySpeed: 2300, //再生スピード
  });
});


Rails.start()
Turbolinks.start()
ActiveStorage.start()
