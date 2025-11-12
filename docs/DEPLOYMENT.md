```markdown
# 详细部署指南

## Cloudflare Workers 部署

### 步骤 1：准备工作

1. 注册 [Cloudflare 账号](https://dash.cloudflare.com/sign-up)
2. 安装 Node.js（版本 16 或更高）

### 步骤 2：使用 Dashboard 部署（最简单）

1. 登录 Cloudflare Dashboard
2. 进入 "Workers & Pages"
3. 点击 "创建应用程序"
4. 选择 "创建 Worker"
5. 给 Worker 命名（例如：subscription-checker）
6. 将 `worker.js` 的完整代码复制粘贴到编辑器
7. 点击 "保存并部署"

### 步骤 3：配置环境变量

1. 在 Worker 页面点击 "设置"
2. 找到 "环境变量"
3. 添加以下变量：

   **必需变量：**
   - `SUBSCRIPTION_URL`: 你的订阅链接
   - `PROXY_URL`: 你的SNIP反代链接

   **可选变量：**
   - `TELEGRAM_URL`: 群组链接
   - `BUTTON_TEXT_1`: 第一个按钮文字
   - `BUTTON_TEXT_2`: 第二个按钮文字

4. 点击 "保存"

### 步骤 4：绑定自定义域名（可选）

1. 在 Worker 设置中找到 "触发器"
2. 点击 "添加自定义域"
3. 输入你的域名（需要域名已托管在 Cloudflare）
4. 等待 SSL 证书自动配置

## Cloudflare Pages 部署

### 步骤 1：准备 GitHub 仓库

1. Fork 本项目或创建新仓库
2. 将所有文件推送到 GitHub

### 步骤 2：连接到 Pages

1. 登录 Cloudflare Dashboard
2. 进入 "Workers & Pages"
3. 点击 "创建应用程序"
4. 选择 "Pages" → "连接到 Git"
5. 授权 Cloudflare 访问你的 GitHub
6. 选择你的仓库

### 步骤 3：配置构建

- **项目名称**：自定义名称
- **生产分支**：main 或 master
- **构建命令**：留空
- **构建输出目录**：留空
- **根目录**：/

### 步骤 4：添加环境变量

在 "环境变量" 部分添加：
- `SUBSCRIPTION_URL`
- `PROXY_URL`
- `TELEGRAM_URL`（可选）
- `BUTTON_TEXT_1`（可选）
- `BUTTON_TEXT_2`（可选）

### 步骤 5：部署

点击 "保存并部署"，等待部署完成。

## 使用 Wrangler CLI 部署

### 安装 Wrangler

```bash
npm install -g wrangler
```

### 登录 Cloudflare

```bash
wrangler login
```

### 部署

```bash
wrangler deploy
```

### 设置环境变量

```bash
wrangler secret put SUBSCRIPTION_URL
wrangler secret put PROXY_URL
```

## 验证部署

1. 访问你的 Worker 或 Pages 域名
2. 检查页面是否正常加载
3. 检查状态指示器是否显示正确
4. 测试订阅链接复制功能

## 故障排除

### 问题：环境变量未生效

**解决方案**：
- 确认环境变量已正确添加
- 重新部署 Worker
- 检查变量名是否正确（区分大小写）

### 问题：API 返回 403 错误

**解决方案**：
- 这是 Referer 检查导致的
- 确保从正确的域名访问
- 不要直接访问 API 端点

### 问题：链接检测失败

**解决方案**：
- 检查环境变量中的链接是否正确
- 确认链接可以访问
- 查看浏览器控制台的错误信息
