import express from 'express';
const app = express();
const port = 3000;
// 可以通过process.env获取启动命令上的参数

app.use(express.json());
app.get('/login', async (req, res) => {
    //
})
// 启动服务器
app.listen(port, () => {
    console.log(`Node.js 中间层服务运行在 http://localhost:${port}`);
});