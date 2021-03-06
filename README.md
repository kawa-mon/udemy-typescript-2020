# udemy-typescript-2020

- https://www.udemy.com/course/typescript-complete/

## 開発環境

- Node.js v13.11.0
- npm v6.14.4
- TypeScript v3.9.5

## TypeScript

- TypeScript は JavaScript の全てを包括している
- **型安全によってバグを減らす環境を手に入れられることが大きな利点**

## 各種設定

## .gitignore

- .gitignore は Node 用のテンプレートファイルが GitHub で公開されているので利用する

## package.json

- TypeScript をコンパイルするために npm パッケージがある。そのパッケージを管理するのが package.json
  - `$ npm init -y` で自動生成される

## tsconfig.json

- `$ npx tsc --init` で自動生成される

## 内容

## セクション 2：型

- 暫定的に any 型を使うのは良いが、基本的には型定義する
- enum 型は大文字から始める
- 複数の型を持ちうる場合は共用型で指定
- 漠然と型を指定すると困るときは literal 型でスコープを狭める。また const を用いると literal 型になる
- 型エイリアスは大文字から始める
- 戻り値がない関数は void 型を指定
- 暫定的に unknown 型を指定して、typeof で型ガードして安全に実行できる。any より厳しくできる
- エラー処理のように戻らない関数は never 型を指定

## セクション 3：トランスパイラ

- [tsconfig.json の設定一覧](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

| オプション値        | 説明                                                                                                                                             |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| lib                 | ES6 の場合、DOM,ES6,DOM.Iterable,ScriptHost が自動で読み込まれる                                                                                 |
| noEmitOnError       | エラーがあれば出力しない                                                                                                                         |
| strict              | noImplicitAny, noImplicitThis, alwaysStrict, strictBindCallApply, strictNullChecks, strictFunctionTypes, strictPropertyInitialization を一括有効 |
| noImplicitAny       | 暗黙的な any を許容しない                                                                                                                        |
| strictNullChecks    | null チェックを厳格にする                                                                                                                        |
| strictBindCallApply | bind, call, apply で増える引数変化に応じて厳しく型チェックする                                                                                   |
| noUnusedLocals      | 未使用のローカル変数をエラーにする                                                                                                               |
| noUnusedParameters  | 未使用の引数をエラーにする                                                                                                                       |
| noImplicitReturns   | 暗黙的なリターンをエラーにする                                                                                                                   |

## セクション 4：クラス

### this

- TS ではクラス内メソッドの引数で this の型を宣言することで this を厳密に利用することができる
- function 内の this は呼び出されたときに決定するので複雑

### 修飾子

- インスタンスのメンバやメソッドをクラスの外からアクセスできないようにするには private をつける
- インスタンスのメンバやメソッドをクラス内と継承先を除きアクセスできないようにするには protected をつける
- クラスの内外どこからも読むだけにするには readonly 修飾子をつける
  - readonly ならアクセス可能を意味するので public を省略できるが、明示的な宣言でなくなるのでやめる
- TS では constructor の引数にアクセス修飾子をつけることで自動で初期化処理まで行ってくれる

### getter, setter

- メンバ変数のリネームは慣習的に `_` を接頭語としてつける
- メンバ変数を外から変更できないが参照はしたいとき：メンバ変数を private にして get でラップする
- メンバ変数を外から参照できないが変更はしたいとき：メンバ変数を private にして set でラップする

### 静的メンバ

- Ruby でいうクラス変数のこと

### 継承と抽象クラス・抽象メソッド

- 継承元で初期化出来ることは済ませ、継承先独自の初期化だけ明示的に行う
- 抽象クラスと抽象メソッドは継承先に処理を書く  
  MUST 機能を抽象化しておけば、コンパイル時に未使用だったら教えてくれる
- 抽象クラスはインスタンスを生成できない

### シングルトンパターン

- Teacher のように教室にひとつのインスタンスしかいないデザインパターン **シングルトンパターン** を作りたい
- constructor を private にすることで外部からクラスを new できなくさせ複製させないようにする
- 1 回目も new できなくなるのでクラス内部で static を用いて new を呼び出す
- 2 回目以降呼ばれても 1 回目の処理が呼ばれるように static な instance 変数を設けておく

## セクション 5：インターフェース

- オブジェクトのみの型エイリアスのこと
- インターフェースではオブジェクトのみを扱うので可読性が良くなるのが利点
- implements を用いることでクラスが生成するインスタンスの型を明示させることができる
- クラスは 1 つしか継承できないが、インターフェイスは複数実装できる
- **構造的部分型** ：宣言時に実態より型定義の範囲が狭くても満たしていればエラーにならない
- インターフェースでも readonly 修飾子は使える  
  ただし、インスタンスの構造的部分型を外すとクラスの constructor が外れて書き換えられてしまう
- インターフェースで関数の型定義はできる。**が、オブジェクト以外なので読みにくく使わない**

## セクション 6：応用

[型の互換性ドキュメント](https://github.com/microsoft/TypeScript/blob/master/doc/spec.md#3.11.4)

### 交差型

- 型は既存の型を足し合わせるだけで作ることが可能

### 3 つの型ガード

- typeof 演算子：基本。ただし、7 つしか選べない
- in 演算子：object の key で更に絞り込みたいとき
- instanceof 演算子：class 名で更に絞り込みたいとき

### タグ付きユニオン

literal 型で共通のタグを持たせることでその値に応じて処理を分ける方法

### 型アサーション

- 手動で型を変換する方法
- 型推論では厳密に規定しきれず、開発者の方が型を理解できているときに使う
- 左辺で型定義するのではなく、右辺の早い段階で型定義する方が堅牢な型システムと言える
- `as` と `<>` を用いる方法 2 つがあるが、後者は React の記法と被るので非推奨

### インデックスシグネチャ

- 動的に様々なプロパティを設定したいときに使うと便利
- `[ index: typeForIndex ]: typeForValue }` の形式
- ただし、すべてのプロパティがインデックスシグネチャを満たす必要があるので、 typeForValue の設定は注意

```typescript
interface Profile {
  name: string
  underTwenty: boolean
  [index: string]: string | number | boolean
}
```

### 関数のオーバーロード

- 関数の戻り値を正しく TypeScript に伝えたいときに使う
- オーバーロードはシグネチャを用いる
  - **シグネチャとは処理の実態は書かずに、関数の名前、引数、引数の型、戻り値の型いわゆる概略だけを示したもの**。
  - シグネチャは関数定義の手前に書く
- 型定義は各シグネチャが務めるため実態の関数は any 型で良い。シグネチャで宣言していない型はきちんとエラーになる。

### Optional Chaining

- オプショナルプロパティは何も実装しなければ undefined を返す
- undefined かもしれないプロパティをそのままチェーンすることはできない
- そこで、`?`をプロパティ末尾につけると、存在する場合はチェーンする
- 存在しない場合は undefined を返すという処理になる
- TypeScript 3.7 から登場

### Nullish Coalescing

- null もしくは undefined を返す場合に処理を分岐させたい場合、`??` の後に処理をかける
- or 演算子 `||` では空文字も分岐させてしまう
- TypeScript 3.7 から登場

### レストパラメータ

- タプル型を用いることで配列個数を制限できる
- レストパラメータの利点を失うように見える
- が、タプルで型を厳密に規定しつつ配列要素数も指定できるので簡潔に仕様を表せる
- オプショナルも指定可能
- またレストパラメータのタプル型内でのみレストパラメータを再度呼ぶことができる
  - ただし、オプショナルな要素がある場合、それが指定されたときのみレストパラメータも呼ばれる
- 配列部分に readonly 修飾子を指定することもできる  
  これによりレストパラメータへの値追加・変更ができなくなる。

### const アサーション

- const アサーションは変数に用いると定数のように扱える
- **オブジェクトに用いると全てのプロパティが readonly になる**。

## セクション 7：ジェネリクス

- 複数の型で同じ処理を作りたいとき、ジェネリクス `<T>` を用いる(Type の T)
- 呼び出し側で省略しても型推論が働く
- クラスの implements 同様、ジェネリクスでは extends によって取りうる型の範囲を明示して狭められる
- オブジェクトのキー一覧をユニオン型で返す keyof と一緒に用いられることも多い
- デフォルトの型パラメータは any で指定する

### ユーティリティ

- 型のライブラリのこと。[公式ドキュメント](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- 一例
  - Partial：すべてをオプショナルにする
  - Readonly：すべてを readonly にする
- Promise もジェネリック型として扱われているので型を明示することができる
- 他にも Array など複数のジェネリック型が内蔵されている

### MappedTypes

- 型にロジックを入れるもの
- マイナス記号を用いることで readonly やオプショナルの設定を解除できたりする
- ユーティリティの内部処理で使われている

## セクション 8：デコレーション

- クラスを受け取ってデコレーションする関数のこと
- ES7 から JS に組み込まれる機能
  - tsconfig.json の`"experimentalDecorators": true` のコメントアウトを外す必要がある
- デコレータ関数名は大文字から始める慣習

### クラス・デコレータ

- [公式ドキュメントの日本語訳](https://mae.chab.in/archives/59845#post59845-1-3)
- クラス・デコレータはクラスのコンストラクタに適用され、クラスの定義の検査、修正、置換に使われる
- クラス・デコレータの式は、実行時に関数として呼び出される
- 引数は 1 つ取る

  - デコレートされるクラスのコンストラクタのみ

- デコレータ内部でクラスのインスタンスにアクセスしたいとき、以下の書き方をする

  ```typescript
  // new (クラスが持ちうる引数): アクセスしたいインスタンスのメソッド名とその型定義
    return function (constructor: { new (...args: any[]): { name: string } }) {
    // 「constructor は new できるもの」と伝える
    const instance = new constructor()
  ```

- 下から順に実行される
- クラスを上書きする場合、[ドキュメント「Class Decorators: クラス・デコレータ」](https://mae.chab.in/archives/59845#post59845-1-3)の最後のようにジェネリクスを使う

### デコレータ・ファクトリ

- デコレータを返す関数
- デコレータに対して値を渡したい場合に利用
- 上から順に実行される

### プロパティ・デコレータ

- プロパティの宣言の直前で宣言し、クラス内部のプロパティをデコレートする
- 引数は 2 つ取る

  - 宣言したプロパティが static メンバーの場合はクラスのコンストラクタ関数、インスタンスメンバーの場合はクラスの prototype
  - メンバー名

### メソッド・デコレータ

- メソッドの宣言の直前で宣言し、クラス内部のメソッドをデコレートする
- 引数は 3 つ取る

  - 宣言したプロパティが static メンバーの場合はクラスのコンストラクタ関数、インスタンスメンバーの場合はクラスの prototype
  - メンバー名
  - メンバーの Property Descriptor（プロパティ・ディスクリプタ）

- プロパティ・ディスクリプタは [ES5 に定義されているもの](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)
  - `Object.getOwnPropertyDescriptor(user, 'name')` でも取れる

### アクセサー・デコレータ

- メソッド・デコレータと同じ使い方

### パラメータ・デコレータ

- 引数は 3 つ取る

  - 宣言したプロパティが static メンバーの場合はクラスのコンストラクタ関数、インスタンスメンバーの場合はクラスの prototype
  - メンバー名
  - 関数のパラメーターリストにおけるパラメーターのオーディナル・インデックス（順序を表すインデックス）

## セクション 10：モジュールと webpack

### ES モジュール

- typescript は ES モジュールに対応している
- 他のファイルでクラスやファンクションを呼び出したいとき, export を接頭語にする
- 呼び出し側では `import xx from xx` の形式で記載
- モジュール機能は tsconfig の `module` が担う
  - ES5 まではモジュール機能がなくサードパーティが多く開発されていたので target とは別指定
- script タグを HTML で読み込むときは `type="module"` と記載する
  - 一部ブラウザは未対応：https://caniuse.com/#feat=es6-module
  - HTTP 通信なので同じサーバから取得する必要がある
  - つまりローカルサーバを立ち上げないと動かない

## セクション 11：TypeScript で JavaScript ライブラリを使う

- 型定義ファイル（.d.ts）の話
- axios には存在するが、lodash には存在しないので独自設定が必要
  1. `@types/ライブラリ名` で検索して誰かが型定義ファイルを作っていないか調べる  
     node_modules/@types 配下は TypeScript が見に行ける  
     https://www.npmjs.com/package/@types/lodash
  2. 誰も型定義ファイルを作っていない場合、自分が作るしかない  
     [公式ドキュメントに記載例あり](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html)
