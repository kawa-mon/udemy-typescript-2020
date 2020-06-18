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
- 上記の `--lib` に記載されているが、ES6 の場合、DOM,ES6,DOM.Iterable,ScriptHost が自動で読み込まれている
- 上記の `--noEmitOnError` に記載されているが、エラーがあれば出力しないオプション
- 上記の `--strict` に記載されているが、`true`を指定すると、--noImplicitAny, --noImplicitThis, --alwaysStrict, --strictBindCallApply, --strictNullChecks, --strictFunctionTypes and --strictPropertyInitialization が有効になる

| オプション値        | 説明                                                           |
| :------------------ | :------------------------------------------------------------- |
| noImplicitAny       | 暗黙的な any を許容しない                                      |
| strictNullChecks    | null チェックを厳格にする                                      |
| strictBindCallApply | bind, call, apply で増える引数変化に応じて厳しく型チェックする |

- 上記の `--noUnusedLocals` に記載されているが、`true`を指定すると、未使用のローカル変数をエラーにしてくれる
- 上記の `--noUnusedParameters` に記載されているが、`true`を指定すると、未使用の引数をエラーにしてくれる
- 上記の `--noImplicitReturns` に記載されているが、`true`を指定すると、暗黙的なリターンをエラーにしてくれる
- 上記の `--` に記載されているが、`true`を指定すると、をエラーにしてくれる
