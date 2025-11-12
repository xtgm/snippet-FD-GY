# 🚀 Hello Snippets -   



【你可以把它作为你的snip反代检测域名是否失效 支持手动写入多个公益订阅链接进行分享】

此项目为snip反代检测域名是否失效为制作 【主要】

也可以作为你的公益订阅分享站 【次要】

双模式完美支持 【更新完成 完美支持worker部署 支持Pages GitHub 部署】

特别声明：此项目不支持pages上传部署！ 【取消上传部署的方式禁上传】

一个snip反代域名检测+公益订阅链接分享，具有自动链接状态检测功能。

**✅ 完美支持 Cloudflare Workers**  
**✅ 完美支持 Cloudflare Pages**  

<img width="1280" height="612" alt="image" src="https://github.com/user-attachments/assets/b6a064bd-e51d-477f-952c-4015c8d5e0a3" />





---

## 📞 支持

- **Telegram群组**: https://t.me/zyssadmin
- **telegram作者**：https://t.me/ym94203
- **Cloudflare Docs支持**: https://developers.cloudflare.com/

---








⚠️ **免责声明**
本免责声明适用于 GitHub 上的 “snippet-FD-GY” 项目 【非新项目】

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

------------------------------------------------------------------------

## ✨ 特性

- 🔐 **完全加密** - 所有敏感链接通过环境变量管理，不出现在代码中
- 🛡️ **防盗用保护** - API 端点具有 Referer 检查
- 📊 **实时检测** - 自动检测订阅链接和代理链接的可用性
- 📋 **一键复制** - 点击按钮即可复制订阅链接
- 🎨 **现代设计** - 响应式界面，支持移动设备
- ⚡ **高性能** - 基于 Cloudflare Workers，全球加速

------------------------------------------------------------------------


------------------------------------------------------------------------

**环境变量重要设置**


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


------------------------------------------------------------------------







## 🚀 快速开始

--- **worker部署**（小白最优选择）
部署 CF Worker：

登录你的cloudflare
找到计算和AI里的Workers 和 Pages：
选择从 Hello World! 开始：

<img width="1264" height="602" alt="image" src="https://github.com/user-attachments/assets/2b80a97b-ee57-42a8-be1a-8180254f54dc" />


输入任意的work名称之后点击部署即可

<img width="1645" height="806" alt="image" src="https://github.com/user-attachments/assets/b26217ed-d17c-465d-bcbd-b232ab5a4fd0" />


然后在cloudflare的Workers 和 Pages里面 找到你部署好的work项目 以我的项目为例： 点击编辑代码

<img width="1646" height="128" alt="image" src="https://github.com/user-attachments/assets/a7f0c75a-56c3-467b-a07f-d37cafb8dd6c" />


将 worker.js 的内容粘贴到 Worker 编辑器中并完成部署

<img width="1906" height="621" alt="image" src="https://github.com/user-attachments/assets/c84e249d-4673-4a5e-ad1a-e18d20bb0ec6" />

**到这里worker部署就结束了**


------------------------------------------------------------------------




----------------------------------------------------------
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
   bash
   cp .env.example .dev.vars
   

2. **编辑 .dev.vars 文件，填入你的配置**

3. **启动开发服务器**
   bash
   npm run dev
   

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











---

## ✅ 验证清单

部署完成后，请检查以下项目：

- ✅ Worker/Pages 可以正常访问
- ✅ 页面样式显示正常
- ✅ 状态指示器显示"检测中"后变为"正常"或"失效"
- ✅ 点击订阅按钮可以复制链接
- ✅ 点击群组按钮可以跳转
- ✅ 浏览器控制台没有错误
- ✅ F12 查看源代码，确认没有硬编码的链接

---

## 🔐 安全性确认

worker.js 文件中：
- ✅ 没有任何 https:// 链接硬编码
- ✅ 所有链接通过 env 参数获取
- ✅ API 端点有 Referer 检查
- ✅ 环境变量未配置时返回错误
- ✅ 完全符合加密要求








## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🙏 鸣谢

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
```
