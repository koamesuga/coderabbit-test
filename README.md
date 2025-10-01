# CodeRabbit Seeded Defects v2 (Next.js + TypeScript)

2つ目の“欠陥入り”最小プロジェクトです。v1 とは異なる観点（XSS/オープンリダイレクト/CSRF的GET更新/Cookie設定不備/ミドルウェアの過剰収集/レース等）を含みます。

## 使い方
```bash
npm i
npm run dev
```

## 代表的な seeded defects
- 反射型 XSS: `app/search/page.tsx` でクエリ `q` をそのまま `dangerouslySetInnerHTML` に流用
- オープンリダイレクト: `app/api/redirect/route.ts` で `?to=` を無検証で `redirect()`
- CSRF的GET更新: `app/api/toggle/route.ts` GET で状態更新を行う
- Cookie の不適切属性: `app/api/session/route.ts` で `httpOnly=false, secure=false`
- ミドルウェアでの過度なヘッダ収集・ログ出力: `middleware.ts`
- レース・ステート不整合: `components/ExpensiveList.tsx` で `useEffect` 依存配列不備、古いクロージャ参照
- 脆弱なトークン検証: `lib/auth.ts` で特定値なら常に通す
- 不必要なサーバーサイド `eval` 相当: `lib/unsafe.ts` で `Function` コンストラクタを使用
- キャッシュヘッダの誤設定: API 応答が `no-store` でない（個人情報含む体裁）
