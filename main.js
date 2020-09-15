// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'

{
  const word = 'red';
  //loc = ロケーションの意味の関数。今何文字目を打ってるか管理する変数
  let loc = 0;
  const target = document.getElementById('target');
  target.textContent = word;

  //keydownはボタンを押された時のメソッド
  document.addEventListener('keydown', e => {
    if (e.key === word[loc]) {
      loc++;
      //０文字目が正解だった場合、locは１増えて_edで表示される
      //1文字目が正解だった場合、locは１増えて__dで表示される
      //2文字目が正解だった場合、locは１増えて___で表示される
    }
  });
}