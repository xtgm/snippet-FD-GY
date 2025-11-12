# 🚀 Hello Snippets -   

【你可以把它作为你的snip反代检测域名是否失效 支持手动写入多个公益订阅链接进行分享】

此项目为snip反代检测域名是否失效为制作 【主要】

也可以作为你的公益订阅分享站 【次要】

双模式完美支持 【更新完成 完美支持worker部署 支持Pages GitHub 部署】

特别声明：此项目不支持pages上传部署！ 【取消上传部署的方式禁上传】

一个snip反代域名检测+公益订阅链接分享，具有自动链接状态检测功能。

**✅ 完美支持 Cloudflare Workers**  
**✅ 完美支持 Cloudflare Pages**  

<img width="1920" height="919" alt="image" src="https://github.com/user-attachments/assets/1a3f6739-5f0e-477e-be24-8b8a5596e653" />




⚠️ 免责声明
本免责声明适用于 GitHub 上的 “hello-snippets” 项目 【非新项目】

用途
本项目仅供教育、研究和安全测试目的而设计和开发。旨在为安全研究人员、学术界人士及技术爱好者提供一个探索和实践网络通信技术的工具。

合法性
在下载和使用本项目代码时，必须遵守使用者所适用的法律和规定。使用者有责任确保其行为符合所在地区的法律框架、规章制度及其他相关规定。

免责
作为本项目的 作者【非首次开发】，我 LH 强调本项目仅应用于合法、道德和教育目的。
作者不认可、不支持亦不鼓励任何形式的非法使用。如果发现本项目被用于任何非法或不道德的活动，作者将对此强烈谴责。
作者对任何人或组织利用本项目代码从事的任何非法活动不承担责任。使用本项目代码所产生的任何后果，均由使用者自行承担。
作者不对使用本项目代码可能引起的任何直接或间接损害负责。
为避免任何意外后果或法律风险，使用者应在使用本项目代码后的 24 小时内删除代码。
通过使用本项目代码，使用者即表示理解并同意本免责声明的所有条款。如使用者不同意这些条款，应立即停止使用本项目。

作者保留随时更新本免责声明的权利，且不另行通知。最新版本的免责声明将发布在本项目的 GitHub 页面上。














## 🚀 快速开始

### 方法一：Cloudflare Workers 部署（推荐）

直接复制worker.js的内容去部署即可
【下方的worker部署小白勿看】
1. **克隆项目**
   bash
   git clone https://github.com/your-username/subscription-checker.git
   cd subscription-checker
   

2. **安装依赖**
   bash
   npm install
   

3. **配置环境变量**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
   - 进入 Workers & Pages
   - 创建新的 Worker
   - 复制 `worker.js` 的内容
   - 在 **设置 → 变量** 中添加环境变量

4. **部署**
   bash
   npm run deploy
   

### 方法二：Cloudflare Pages 部署

1. **Fork 本项目到你的 GitHub**

2. **连接到 Cloudflare Pages**
   - 登录 Cloudflare Dashboard
   - 进入 Pages
   - 点击 "创建项目"
   - 连接你的 GitHub 仓库
   - 选择本项目

3. **配置构建设置**
   - 构建命令：留空
   - 构建输出目录：留空
   - 根目录：/

4. **添加环境变量**
   在 Pages 项目的 **设置 → 环境变量** 中添加

5. **部署**
   - 点击 "保存并部署"

## 🔧 环境变量配置

### 必需变量

| 变量名 | 说明 | 示例 |
|--------|------|------|
| `SUBSCRIPTION_URL` | 订阅链接 | `https://your-subscription-link.com` |
| `PROXY_URL` | SNIP反代链接 | `https://your-snip-domain.com` |

### 可选变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `TELEGRAM_URL` | 群组/个人链接 | `#` |
| `BUTTON_TEXT_1` | 第一个按钮文字 | `可以修改你需要显示的内容` |
| `BUTTON_TEXT_2` | 第二个按钮文字 | `可以修改你需要显示的内容` |

## 📖 本地开发

1. **创建 .dev.vars 文件**
   ```bash
   cp .env.example .dev.vars
   ```

2. **编辑 .dev.vars 文件，填入你的配置**

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问 http://localhost:8787**

## 🔒 安全特性

- ✅ 所有敏感链接通过环境变量加密存储
- ✅ API 端点具有 Referer 验证
- ✅ 前端代码中不包含任何硬编码链接
- ✅ 防止爬虫抓取和 API 盗用

## 📝 API 端点

- `GET /` - 主页面
- `GET /api/get-subscription` - 获取订阅链接（需要 Referer 验证）
- `GET /api/get-proxy` - 获取代理链接（需要 Referer 验证）

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 鸣谢

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
```
