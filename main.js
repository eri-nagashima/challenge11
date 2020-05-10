// モーダル要素の取得
const modalElem = document.getElementById('easyModal');

// 開くボタン取得
const modalOpenBtn = document.getElementById('modalOpen');

// 閉じるボタン取得
const modalCloseBtn = document.querySelector('.modalClose');

// クリックで開くイベントリスナー
modalOpenBtn.addEventListener('click', modalOpen);

// クリックで閉じるイベントリスナー
modalCloseBtn.addEventListener('click', modalClose);

// モーダル以外の場所クリックのイベントリスナー
const modal = document.querySelector('.modal');

// モーダルオープンの関数
function modalOpen() {
  modalElem.style.display = 'block';
}

// モーダルを閉じる関数
function modalClose() {
  modalElem.style.display = 'none';
}

// モーダル以外がクリックされた時に閉じる関数
function modalCloseOutside() {
  modalElem.style.display = 'none';
}
