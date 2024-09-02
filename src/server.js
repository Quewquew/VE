const express = require('express');
const path = require('path');
const app = express();

// 静的ファイルを提供する設定
app.use(express.static(path.join(__dirname, '../public')));

// サーバーのポート設定
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
