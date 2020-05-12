// モーダル要素の取得
// const modalElem = document.getElementById('easyModal');
const modal = document.querySelector('.modal');

// 開くボタン取得
const modalOpenBtn = document.getElementById('modalOpen');

// 閉じるボタン取得
const modalCloseBtn = document.querySelector('.modalClose');

// クリックで開くイベントリスナー
modalOpenBtn.addEventListener('click', modalOpen);

// クリックで閉じるイベントリスナー
modalCloseBtn.addEventListener('click', modalClose);

// モーダル以外の場所クリックのイベントリスナー
modal.addEventListener('click', function (e) {
  if (e.target == modal) {
    modalCloseOutside();
  }
});

// モーダルオープンの関数
function modalOpen() {
  modal.style.display = 'block';
}

// モーダルを閉じる関数
function modalClose() {
  modal.style.display = 'none';
}

// モーダル以外がクリックされた時に閉じる関数
function modalCloseOutside() {
  modal.style.display = 'none';
}
