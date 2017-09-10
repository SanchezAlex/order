'use strict';

var orderComment = document.getElementById('comment');

var customerComment = document.getElementById('comment__content');

orderComment.addEventListener('click', function (e) {
  e.preventDefault();
  customerComment.classList.toggle('is-visible');
  orderComment.style.cssText = 'display: none';
});