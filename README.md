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

### .gitignore

- .gitignore は Node 用のテンプレートファイルが GitHub で公開されているので利用する

### package.json

- TypeScript をコンパイルするために npm パッケージがある。そのパッケージを管理するのが package.json
  - `$ npm init -y` で自動生成される

### tsconfig.json

- `$ npx tsc --init` で自動生成される

## 内容

### セクション 2：型

- 暫定的に any 型を使うのは良いが、基本的には型定義する
- enum 型は大文字から始める
- 複数の型を持ちうる場合は共用型で指定
- 漠然と型を指定すると困るときは literal 型でスコープを狭める。また const を用いると literal 型になる
- 型エイリアスは大文字から始める
- 戻り値がない関数は void 型を指定
- 暫定的に unknown 型を指定して、typeof で型ガードして安全に実行できる。any より厳しくできる
- エラー処理のように戻らない関数は never 型を指定

### セクション 3：トランスパイラ

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

### セクション 4：クラス

#### this

- TS ではクラス内メソッドの引数で this の型を宣言することで this を厳密に利用することができる
- function 内の this は呼び出されたときに決定するので複雑

#### 修飾子

- インスタンスのメンバやメソッドをクラスの外からアクセスできないようにするには private をつける
- インスタンスのメンバやメソッドをクラス内と継承先を除きアクセスできないようにするには protected をつける
- クラスの内外どこからも読むだけにするには readonly 修飾子をつける
  - readonly ならアクセス可能を意味するので public を省略できるが、明示的な宣言でなくなるのでやめる
- TS では constructor の引数にアクセス修飾子をつけることで自動で初期化処理まで行ってくれる

#### getter, setter

- メンバ変数のリネームは慣習的に `_` を接頭語としてつける
- メンバ変数を外から変更できないが参照はしたいとき：メンバ変数を private にして get でラップする
- メンバ変数を外から参照できないが変更はしたいとき：メンバ変数を private にして set でラップする

#### 静的メンバ

- Ruby でいうクラス変数のこと

#### 継承と抽象クラス・抽象メソッド

- 継承元で初期化出来ることは済ませ、継承先独自の初期化だけ明示的に行う
- 抽象クラスと抽象メソッドは継承先に処理を書く  
  MUST 機能を抽象化しておけば、コンパイル時に未使用だったら教えてくれる
- 抽象クラスはインスタンスを生成できない
