import React from "react";

const Question = function () {
  return (
    <section>
      <p>
        n が正の整数の時、関数 f(n) は次のような条件を満たします。
        <br />
        これらを満たす 関数 f(n) を書いてください。
        <br />
        f(0) = 0<br />
        f(1) = 1<br />
        f(n) = f(n - 1) + f(n - 2)
        <br />
        ... え？簡単すぎる？では、もう少し条件を追加しましょう。
        <br />
        条件：
        <br />
        * 関数 fibとして、上記の f(n) を作成すること
        <br />
        * 非常に大きな n でも動作すること
        <br />
        * 非常に大きな n でも高速に処理すること
        <br />
        Javascriptは
        53ビットの整数しかサポートしていません。この関数では、それ以上の整数も処理する必要があります。
        <br />
        そこで、bignumber.js
        を使って任意精度の数値演算を行えるようにしましょう。
        <br />
        https://github.com/MikeMcl/bignumber.js/
        <br />
        https://mikemcl.github.io/bignumber.js/
        <br />
        エッジケースを考慮することを忘れないでください。n
        が負の場合はエラーになります。
      </p>
    </section>
  );
};

export default Question;
