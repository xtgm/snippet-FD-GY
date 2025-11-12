// Cloudflare Worker 主文件 - 完全加密版本
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // API端点：获取订阅链接
    if (url.pathname === '/api/get-subscription') {
      return handleGetSubscription(request, env);
    }
    
    // API端点：获取SNIP反代链接
    if (url.pathname === '/api/get-proxy') {
      return handleGetProxy(request, env);
    }
    
    // 主页面
    return new Response(getHTML(env), {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
    });
  },
};

// 处理订阅链接请求
function handleGetSubscription(request, env) {
  const referer = request.headers.get('Referer');
  const origin = new URL(request.url).origin;
  
  if (!referer || !referer.startsWith(origin)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  const subscriptionUrl = env.SUBSCRIPTION_URL;
  
  if (!subscriptionUrl) {
    return new Response(JSON.stringify({ error: 'SUBSCRIPTION_URL not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  return new Response(JSON.stringify({ url: subscriptionUrl }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

// 处理SNIP反代链接请求
function handleGetProxy(request, env) {
  const referer = request.headers.get('Referer');
  const origin = new URL(request.url).origin;
  
  if (!referer || !referer.startsWith(origin)) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  const proxyUrl = env.PROXY_URL;
  
  if (!proxyUrl) {
    return new Response(JSON.stringify({ error: 'PROXY_URL not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  return new Response(JSON.stringify({ url: proxyUrl }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

// HTML页面生成函数
function getHTML(env) {
  const telegramUrl = env.TELEGRAM_URL || '#';
  const buttonText1 = env.BUTTON_TEXT_1 || '可以修改你需要显示的内容';
  const buttonText2 = env.BUTTON_TEXT_2 || '可以修改你需要显示的内容';
  
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Snippets!</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            background: #f5f5f7;
            border-radius: 24px;
            padding: 48px 40px;
            max-width: 440px;
            width: 100%;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            text-align: center;
        }

        .icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto 24px;
            box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
        }

        .icon svg {
            width: 40px;
            height: 40px;
            fill: white;
        }

        h1 {
            font-size: 32px;
            color: #1d1d1f;
            margin-bottom: 32px;
            font-weight: 700;
        }

        .status-indicators {
            margin-bottom: 24px;
        }

        .status-indicator {
            color: white;
            padding: 14px 32px;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 12px;
            width: 100%;
            justify-content: center;
            transition: all 0.3s;
            pointer-events: none;
            user-select: none;
        }

        .status-indicator.checking {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
        }

        .status-indicator.online {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .status-indicator.offline {
            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }

        .status-indicator.online::before {
            content: '✓';
            font-size: 20px;
        }

        .status-indicator.offline::before {
            content: '✗';
            font-size: 20px;
        }

        .status-indicator.checking::before {
            content: '⟳';
            font-size: 20px;
            animation: rotate 1s linear infinite;
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .description {
            color: #6e6e73;
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 32px;
        }

        .button {
            display: block;
            width: 100%;
            padding: 16px;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;
            color: white;
            margin-bottom: 16px;
        }

        .button-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }

        .button-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .button-secondary {
            background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
            box-shadow: 0 4px 12px rgba(8, 145, 178, 0.4);
        }

        .button-secondary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(8, 145, 178, 0.5);
        }

        .button svg {
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 8px;
            vertical-align: middle;
            fill: currentColor;
        }

        .footer {
            margin-top: 32px;
            color: #86868b;
            font-size: 12px;
        }

        @media (max-width: 480px) {
            .container {
                padding: 36px 24px;
            }

            h1 {
                font-size: 28px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="icon">
            <svg viewBox="0 0 24 24">
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
            </svg>
        </div>
        
        <h1>Hello Snippets!</h1>
        
        <div class="status-indicators">
            <div id="proxyStatus" class="status-indicator checking">
                正在检测代理功能...
            </div>
            
            <div id="subscriptionStatus" class="status-indicator checking">
                正在检测公益订阅...
            </div>
        </div>
        
        <p id="description" class="description">
            正在检测服务状态,请稍候...
        </p>
        
        <a href="#" id="subscriptionBtn" class="button button-primary">
            <svg viewBox="0 0 24 24">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
            </svg>
            ${buttonText1}
        </a>
        
        <a href="${telegramUrl}" id="telegramBtn" class="button button-secondary" target="_blank">
            <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            ${buttonText2}
        </a>
        
        <div class="footer">
            Powered by Cloudflare Workers
        </div>
    </div>

    <script>
        async function getSubscriptionUrl() {
            try {
                const response = await fetch('/api/get-subscription', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });
                
                if (!response.ok) throw new Error('Failed to fetch subscription URL');
                const data = await response.json();
                return data.url;
            } catch (error) {
                console.error('获取订阅链接失败:', error);
                return null;
            }
        }

        async function getProxyUrl() {
            try {
                const response = await fetch('/api/get-proxy', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });
                
                if (!response.ok) throw new Error('Failed to fetch proxy URL');
                const data = await response.json();
                return data.url;
            } catch (error) {
                console.error('获取代理链接失败:', error);
                return null;
            }
        }

        async function checkLinkStatus(url) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 10000);
                const response = await fetch(url, {
                    method: 'HEAD',
                    mode: 'no-cors',
                    signal: controller.signal,
                    cache: 'no-cache'
                });
                clearTimeout(timeoutId);
                return true;
            } catch (error) {
                try {
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 10000);
                    await fetch(url, {
                        method: 'GET',
                        mode: 'no-cors',
                        signal: controller.signal,
                        cache: 'no-cache'
                    });
                    clearTimeout(timeoutId);
                    return true;
                } catch (retryError) {
                    return false;
                }
            }
        }

        function updateProxyStatus(isOnline) {
            const statusElement = document.getElementById('proxyStatus');
            if (isOnline) {
                statusElement.className = 'status-indicator online';
                statusElement.textContent = '代理功能正常运行';
            } else {
                statusElement.className = 'status-indicator offline';
                statusElement.textContent = '代理功能检测失效需更新';
            }
        }

        function updateSubscriptionStatus(isOnline) {
            const statusElement = document.getElementById('subscriptionStatus');
            if (isOnline) {
                statusElement.className = 'status-indicator online';
                statusElement.textContent = '公益订阅链接正常运行';
            } else {
                statusElement.className = 'status-indicator offline';
                statusElement.textContent = '公益订阅链接失效请更新';
            }
        }

        function updateDescription(proxyOnline, subscriptionOnline) {
            const description = document.getElementById('description');
            if (proxyOnline && subscriptionOnline) {
                description.textContent = '所有服务正在正常运行,享受安全、快速的网络连接体验';
            } else if (!proxyOnline && !subscriptionOnline) {
                description.textContent = '抱歉,代理服务和订阅链接当前均无法访问,请稍后重试或联系管理员';
            } else if (!proxyOnline) {
                description.textContent = '代理功能当前无法访问,但订阅链接正常,请检查代理配置';
            } else {
                description.textContent = '代理功能正常,但订阅链接当前无法访问,请稍后重试';
            }
        }

        window.addEventListener('DOMContentLoaded', async () => {
            const [proxyUrl, subscriptionUrl] = await Promise.all([
                getProxyUrl(),
                getSubscriptionUrl()
            ]);

            if (subscriptionUrl) {
                const subscriptionBtn = document.getElementById('subscriptionBtn');
                subscriptionBtn.addEventListener('click', async (e) => {
                    e.preventDefault();
                    try {
                        await navigator.clipboard.writeText(subscriptionUrl);
                        const originalText = subscriptionBtn.innerHTML;
                        subscriptionBtn.innerHTML = '<svg viewBox="0 0 24 24" style="display: inline-block; width: 20px; height: 20px; margin-right: 8px; vertical-align: middle; fill: currentColor;"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>复制成功!';
                        setTimeout(() => {
                            subscriptionBtn.innerHTML = originalText;
                        }, 2000);
                    } catch (err) {
                        alert('复制失败,请手动复制链接');
                    }
                });
            }

            const [proxyOnline, subscriptionOnline] = await Promise.all([
                proxyUrl ? checkLinkStatus(proxyUrl) : Promise.resolve(false),
                subscriptionUrl ? checkLinkStatus(subscriptionUrl) : Promise.resolve(false)
            ]);

            updateProxyStatus(proxyOnline);
            updateSubscriptionStatus(subscriptionOnline);
            updateDescription(proxyOnline, subscriptionOnline);
        });
    </script>
</body>
</html>`;
}
