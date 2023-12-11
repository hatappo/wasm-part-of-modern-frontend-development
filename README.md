[Modern Frontend Development with Node.js](https://www.packtpub.com/product/modern-frontend-development-with-nodejs/9781804618295)

の第10章 `Integrating Native Code with WebAssembly` のコードを試したものです。

November 2022 の出版ですが、既に古くなっている箇所があるように思います。
動かすためにサンプルコードを少し修正する必要がありました。

ポイント

- `asconfig.json` に `"extends": "./node_modules/@assemblyscript/wasi-shim/asconfig.json",` を追加する

コマンド

```sh
# インストール
npm install

# コンパイル
npx asc assembly/index.ts -o echo.wasm --use abort=wasi_abort --debug

# 実行
node --experimental-wasi-unstable-preview1 --no-warnings app.mjs ワールド
#=> Hello ワールド!
```

参考

- [Server-side AssemblyScript: How to read a file? - Stack Overflow](https://stackoverflow.com/a/75378019/5022162)
- https://www.assemblyscript.org/
