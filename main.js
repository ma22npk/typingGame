// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'

{
  const words = [
    'red',
    'blue',
    'pink',
    'yellow',
    'black',
  ];

  let word;
  //loc = ロケーションの意味の関数。今何文字目を打ってるか管理する変数
  let loc = 0;
  const target = document.getElementById('target');
  word = words[Math.floor(Math.random() * words.length)];
  target.textContent = word;

  //keydownはボタンを押された時のメソッド
  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;
    }
    loc++;
    //０文字目が正解だった場合、locは１増えて_edで表示される
    //1文字目が正解だった場合、locは１増えて__dで表示される
    //2文字目が正解だった場合、locは１増えて___で表示される
    //_はloc残す宇文つなげる repeat()メソッド　※()の中は数
    //substringは文字列を分割したり任意の箇所を抽出したりする
    //str.substring(開始位置, 終了位置);
    target.textContent = '_'.repeat(loc) + word.substring(loc);

  });
}