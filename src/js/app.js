let orderComment = document.getElementById('comment');

let customerComment = document.getElementById('comment__content');

orderComment.addEventListener('click', e => {
  e.preventDefault();
  customerComment.classList.toggle('is-visible');
  orderComment.style.cssText = 'display: none';
});

