// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"

import Sidebar from './_sidebar.js';
const Layout = ({ config, title, content, script, sidebar, outputPath }) => (React.createElement("html", null,
    React.createElement("head", null,
        React.createElement("script", { async: true, src: "https://www.google-analytics.com/analytics.js" }),
        React.createElement("script", { dangerouslySetInnerHTML: {
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-45256157-14');`
            } }),
        React.createElement("title", null, outputPath !== 'index.html' ? `${title} · ${config.title}` : title),
        React.createElement("meta", { charSet: "utf-8" }),
        React.createElement("link", { rel: "shortcut icon", type: "image/png", href: "//xcatliu.github.io/favicon.ico" }),
        React.createElement("link", { rel: "stylesheet", href: "/assets/prism.css" }),
        React.createElement("link", { rel: "stylesheet", href: "/assets/index.css" })),
    React.createElement("body", null,
        React.createElement("header", null,
            React.createElement("h1", null,
                React.createElement("a", { href: "/" }, config.title)),
            React.createElement("nav", null,
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "https://github.com/xcatliu/typescript-tutorial" }, "GitHub")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "https://github.com/xcatliu/buy-me-a-coffee" }, "\u8D5E\u52A9\u4F5C\u8005")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "https://github.com/xcatliu/pagic" }, "\u672C\u7F51\u7AD9\u4F7F\u7528 Pagic \u6784\u5EFA"))))),
        React.createElement(Sidebar, { sidebar: sidebar, outputPath: outputPath }),
        React.createElement("section", { className: "main" }, content),
        script)));
export default Layout;
