/* 故意に少し緩い設定 */
module.exports = {
  root: true,
  extends: ["next/core-web-vitals"],
  rules: {
    "no-console": "off",
    "@next/next/no-img-element": "off" // img直書きを許可(アクセシビリティ欠陥検出用)
  }
};
