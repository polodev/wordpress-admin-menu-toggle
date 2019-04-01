"use strict";

;(function ($) {

var adminMenuToggle = {
  menuColor: 'green',
  init: function () {
    this.domCached();
    this.bindEvents();
    this.closeOtherSiblings();
    this.titlePopup();
  },
  domCached: function () {
    this.mainMenu = $('.menu.ui-sortable');
    this.menuItem0 = $('.menu-item.menu-item-depth-0');
  },
  bindEvents: function () {
    this.menuItem0.each(function(index, el) {
      $(el).on('click', this.showSiblings.bind(this, el))
    }.bind(this));
  },
  titlePopup: function () {
    this.menuItem0.each(function(index, el) {
      $(el).attr('title', 'Click to expand');
      var allSiblings = $(el).nextUntil('.menu-item.menu-item-depth-0');
      if (allSiblings.length) {
        var oldText = $(el).find('.menu-item-title').text();
        var newText = oldText + ' - (Click to view Nested menu).';
        $(el).find('.menu-item-title').text(newText).css({
          color: this.menuColor,
          'font-weight': 'bold',
        });
      }
    }.bind(this));
  },
  showSiblings: function (el) {
    this.closeOtherSiblings();
    var $rootLiEl = $(el);
    var allSiblings = $rootLiEl.nextUntil('.menu-item.menu-item-depth-0');
    if ($rootLiEl.hasClass('show-siblings')) {
      allSiblings.hide();
      $rootLiEl.removeClass('show-siblings');
    }else {
      allSiblings.show();
      $rootLiEl.addClass('show-siblings');
    }
  },
  closeOtherSiblings() {
    this.mainMenu.find('li.menu-item').not('.menu-item.menu-item-depth-0').hide();
  }
}

$(document).ready(function () {
  adminMenuToggle.init();
})



})(jQuery);
