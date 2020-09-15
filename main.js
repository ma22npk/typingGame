// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'
{

//keydownはボタンを押された時のメソッド
document.addEventListener('keydown', e => {
const target = document.getElementById('target');
target.textContent = e.key;

});
}