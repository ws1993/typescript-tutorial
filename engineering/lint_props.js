import Gitalk from '/_gitalk.js';
import Ga from '/_ga.js';
export default {
    'config': {
        "srcDir": ".",
        "publicDir": "public",
        "ignore": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "base": "/",
        "theme": "docs",
        "plugins": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "watch": false,
        "serve": false,
        "port": 8000,
        "title": "TypeScript 入门教程",
        "sidebar": [
            "README.md",
            {
                "link": "introduction/README.md",
                "children": [
                    "introduction/what-is-typescript.md",
                    "introduction/get-typescript.md",
                    "introduction/hello-typescript.md"
                ]
            },
            {
                "link": "basics/README.md",
                "children": [
                    "basics/primitive-data-types.md",
                    "basics/any.md",
                    "basics/type-inference.md",
                    "basics/union-types.md",
                    "basics/type-of-object-interfaces.md",
                    "basics/type-of-array.md",
                    "basics/type-of-function.md",
                    "basics/type-assertion.md",
                    "basics/declaration-files.md",
                    "basics/built-in-objects.md"
                ]
            },
            {
                "link": "advanced/README.md",
                "children": [
                    "advanced/type-aliases.md",
                    "advanced/string-literal-types.md",
                    "advanced/tuple.md",
                    "advanced/enum.md",
                    "advanced/class.md",
                    "advanced/class-and-interfaces.md",
                    "advanced/generics.md",
                    "advanced/declaration-merging.md",
                    "advanced/further-reading.md"
                ]
            },
            {
                "link": "engineering/README.md",
                "children": [
                    "engineering/lint.md",
                    "engineering/compiler-options.md"
                ]
            },
            "thanks/README.md"
        ],
        "nav": [
            {
                "text": "GitHub",
                "link": "https://github.com/xcatliu/typescript-tutorial"
            },
            {
                "text": "赞助作者",
                "link": "https://github.com/xcatliu/typescript-tutorial"
            },
            {
                "text": "本网站使用 Pagic 构建",
                "link": "https://github.com/xcatliu/pagic"
            }
        ],
        "gitalk": {
            "clientID": "29aa4941759fc887ed4f",
            "clientSecret": "33e355efdf3a1959624506a5d88311145208471b",
            "repo": "typescript-tutorial",
            "owner": "xcatliu",
            "admin": [
                "xcatliu"
            ]
        },
        "ga": {
            "id": "UA-45256157-14"
        }
    },
    'pagePath': "engineering/lint.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "engineering/lint.html",
    'title': "代码检查",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5">代码检查 <a class="header-anchor" href="#%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5">§</a></h1>\n<p>2019 年 1 月，<a href="https://www.oschina.net/news/103818/future-typescript-eslint">TypeScirpt 官方决定全面采用 ESLint</a> 作为代码检查的工具，并创建了一个新项目 <a href="https://github.com/typescript-eslint/typescript-eslint">typescript-eslint</a>，提供了 TypeScript 文件的解析器 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser">@typescript-eslint/parser</a> 和相关的配置选项 <a href="https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin">@typescript-eslint/eslint-plugin</a> 等。而之前的两个 lint 解决方案都将弃用：</p>\n<ul>\n<li><a href="https://github.com/eslint/typescript-eslint-parser">typescript-eslint-parser</a> 已停止维护</li>\n<li><a href="https://palantir.github.io/tslint/">TSLint</a> 将提供迁移工具，并在 typescript-eslint 的功能足够完整后停止维护 TSLint（Once we consider ESLint feature-complete w.r.t. TSLint, we will deprecate TSLint and help users migrate to ESLint<sup><a href="https://medium.com/palantir/tslint-in-2019-1a144c2317a9">1</a></sup>）</li>\n</ul>\n<p>综上所述，目前以及将来的 TypeScript 的代码检查方案就是 <a href="https://github.com/typescript-eslint/typescript-eslint">typescript-eslint</a>。</p>\n<h2 id="%E4%BB%80%E4%B9%88%E6%98%AF%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5">什么是代码检查 <a class="header-anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5">§</a></h2>\n<p>代码检查主要是用来发现代码错误、统一代码风格。</p>\n<p>在 JavaScript 项目中，我们一般使用 <a href="https://eslint.org/">ESLint</a> 来进行代码检查，它通过插件化的特性极大的丰富了适用范围，搭配 <a href="https://github.com/typescript-eslint/typescript-eslint">typescript-eslint</a> 之后，甚至可以用来检查 TypeScript 代码。</p>\n<h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5">为什么需要代码检查 <a class="header-anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5">§</a></h2>\n<p>有人会觉得，JavaScript 非常灵活，所以需要代码检查。而 TypeScript 已经能够在编译阶段检查出很多问题了，为什么还需要代码检查呢？</p>\n<p>因为 TypeScript 关注的重心是类型的检查，而不是代码风格。当团队的人员越来越多时，同样的逻辑不同的人写出来可能会有很大的区别：</p>\n<ul>\n<li>缩进应该是四个空格还是两个空格？</li>\n<li>是否应该禁用 <code>var</code>？</li>\n<li>接口名是否应该以 <code>I</code> 开头？</li>\n<li>是否应该强制使用 <code>===</code> 而不是 <code>==</code>？</li>\n</ul>\n<p>这些问题 TypeScript 不会关注，但是却影响到多人协作开发时的效率、代码的可理解性以及可维护性。</p>\n<p>下面来看一个具体的例子：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">\'Tom\'</span><span class="token punctuation">;</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myNane<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myName<span class="token punctuation">.</span><span class="token method function property-access">toStrng</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<p>以上代码你能看出有什么错误吗？</p>\n<p>分别用 tsc 编译和 eslint 检查后，报错信息如下：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">\'Tom\'</span><span class="token punctuation">;</span>\n<span class="token comment">// eslint 报错信息：</span>\n<span class="token comment">// Unexpected var, use let or const instead.eslint(no-var)</span>\n\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myNane<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// tsc 报错信息：</span>\n<span class="token comment">// Cannot find name \'myNane\'. Did you mean \'myName\'?</span>\n<span class="token comment">// eslint 报错信息：</span>\n<span class="token comment">// \'myNane\' is not defined.eslint(no-undef)</span>\n<span class="token console class-name">console</span><span class="token punctuation">.</span><span class="token method function property-access">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>myName<span class="token punctuation">.</span><span class="token method function property-access">toStrng</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// tsc 报错信息：</span>\n<span class="token comment">// Property \'toStrng\' does not exist on type \'string\'. Did you mean \'toString\'?</span>\n</code></pre>\n<table>\n<thead>\n<tr>\n<th>存在的问题</th>\n<th><code>tsc</code> 是否报错</th>\n<th><code>eslint</code> 是否报错</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>应该使用 <code>let</code> 或 <code>const</code> 而不是 <code>var</code></td>\n<td>❌</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><code>myName</code> 被误写成了 <code>myNane</code></td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td><code>toString</code> 被误写成了 <code>toStrng</code></td>\n<td>✅️</td>\n<td>❌</td>\n</tr>\n</tbody>\n</table>\n<p>上例中，我们使用了 <code>var</code> 来定义一个变量，但其实 ES6 中有更先进的语法 <code>let</code> 和 <code>const</code>，此时就可以通过 <code>eslint</code> 检查出来，提示我们应该使用 <code>let</code> 或 <code>const</code> 而不是 <code>var</code>。</p>\n<p>对于未定义的变量 <code>myNane</code>，<code>tsc</code> 和 <code>eslint</code> 都可以检查出来。</p>\n<p>由于 <code>eslint</code> 无法识别 <code>myName</code> 存在哪些方法，所以对于拼写错误的 <code>toString</code> 没有检查出来。</p>\n<p>由此可见，<code>eslint</code> 能够发现出一些 <code>tsc</code> 不会关心的错误，检查出一些潜在的问题，所以代码检查还是非常重要的。</p>\n<h2 id="%E5%9C%A8-typescript-%E4%B8%AD%E4%BD%BF%E7%94%A8-eslint">在 TypeScript 中使用 ESLint <a class="header-anchor" href="#%E5%9C%A8-typescript-%E4%B8%AD%E4%BD%BF%E7%94%A8-eslint">§</a></h2>\n<h3 id="%E5%AE%89%E8%A3%85-eslint">安装 ESLint <a class="header-anchor" href="#%E5%AE%89%E8%A3%85-eslint">§</a></h3>\n<p>ESLint 可以安装在当前项目中或全局环境下，因为代码检查是项目的重要组成部分，所以我们一般会将它安装在当前项目中。可以运行下面的脚本来安装：</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint\n</code></pre>\n<p>由于 ESLint 默认使用 <a href="https://github.com/eslint/espree">Espree</a> 进行语法解析，无法识别 TypeScript 的一些语法，故我们需要安装 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser"><code>@typescript-eslint/parser</code></a>，替代掉默认的解析器，别忘了同时安装 <code>typescript</code>：</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev typescript @typescript-eslint/parser\n</code></pre>\n<p>接下来需要安装对应的插件 <a href="https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin">@typescript-eslint/eslint-plugin</a> 它作为 eslint 默认规则的补充，提供了一些额外的适用于 ts 语法的规则。</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev @typescript-eslint/eslint-plugin\n</code></pre>\n<h3 id="%E5%88%9B%E5%BB%BA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">创建配置文件 <a class="header-anchor" href="#%E5%88%9B%E5%BB%BA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">§</a></h3>\n<p>ESLint 需要一个配置文件来决定对哪些规则进行检查，配置文件的名称一般是 <code>.eslintrc.js</code> 或 <code>.eslintrc.json</code>。</p>\n<p>当运行 ESLint 的时候检查一个文件的时候，它会首先尝试读取该文件的目录下的配置文件，然后再一级一级往上查找，将所找到的配置合并起来，作为当前被检查文件的配置。</p>\n<p>我们在项目的根目录下创建一个 <code>.eslintrc.js</code>，内容如下：</p>\n<pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    parser<span class="token operator">:</span> <span class="token string">\'@typescript-eslint/parser\'</span><span class="token punctuation">,</span>\n    plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'@typescript-eslint\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 禁止使用 var</span>\n        <span class="token string">\'no-var\'</span><span class="token operator">:</span> <span class="token string">"error"</span><span class="token punctuation">,</span>\n        <span class="token comment">// 优先使用 interface 而不是 type</span>\n        <span class="token string">\'@typescript-eslint/consistent-type-definitions\'</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token string">"error"</span><span class="token punctuation">,</span>\n            <span class="token string">"interface"</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>以上配置中，我们指定了两个规则，其中 <code>no-var</code> 是 ESLint 原生的规则，<code>@typescript-eslint/consistent-type-definitions</code> 是 <code>@typescript-eslint/eslint-plugin</code> 新增的规则。</p>\n<p>规则的取值一般是一个数组（上例中的 <code>@typescript-eslint/consistent-type-definitions</code>），其中第一项是 <code>off</code>、<code>warn</code> 或 <code>error</code> 中的一个，表示关闭、警告和报错。后面的项都是该规则的其他配置。</p>\n<p>如果没有其他配置的话，则可以将规则的取值简写为数组中的第一项（上例中的 <code>no-var</code>）。</p>\n<p>关闭、警告和报错的含义如下：</p>\n<ul>\n<li>关闭：禁用此规则</li>\n<li>警告：代码检查时输出错误信息，但是不会影响到 exit code</li>\n<li>报错：发现错误时，不仅会输出错误信息，而且 exit code 将被设为 1（一般 exit code 不为 0 则表示执行出现错误）</li>\n</ul>\n<h3 id="%E6%A3%80%E6%9F%A5%E4%B8%80%E4%B8%AA-ts-%E6%96%87%E4%BB%B6">检查一个 ts 文件 <a class="header-anchor" href="#%E6%A3%80%E6%9F%A5%E4%B8%80%E4%B8%AA-ts-%E6%96%87%E4%BB%B6">§</a></h3>\n<p>创建了配置文件之后，我们来创建一个 ts 文件看看是否能用 ESLint 去检查它。</p>\n<p>创建一个新文件 <code>index.ts</code>，将以下内容复制进去：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">\'Tom\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">type</span> <span class="token class-name"><span class="token maybe-class-name">Foo</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>然后执行以下命令：</p>\n<pre class="language-bash"><code class="language-bash">./node_modules/.bin/eslint index.ts\n</code></pre>\n<p>则会得到如下报错信息：</p>\n<pre class="language-bash"><code class="language-bash">/path/to/index.ts\n  <span class="token number">1</span>:1  error  Unexpected var, use <span class="token builtin class-name">let</span> or const instead  no-var\n  <span class="token number">3</span>:6  error  Use an <span class="token variable"><span class="token variable">`</span>interface<span class="token variable">`</span></span> instead of a <span class="token variable"><span class="token variable">`</span><span class="token builtin class-name">type</span><span class="token variable">`</span></span>    @typescript-eslint/consistent-type-definitions\n\n✖ <span class="token number">2</span> problems <span class="token punctuation">(</span><span class="token number">2</span> errors, <span class="token number">0</span> warnings<span class="token punctuation">)</span>\n  <span class="token number">2</span> errors and <span class="token number">0</span> warnings potentially fixable with the <span class="token variable"><span class="token variable">`</span>--fix<span class="token variable">`</span></span> option.\n</code></pre>\n<p>上面的结果显示，刚刚配置的两个规则都生效了：禁止使用 <code>var</code>；优先使用 <code>interface</code> 而不是 <code>type</code>。</p>\n<p>需要注意的是，我们使用的是 <code>./node_modules/.bin/eslint</code>，而不是全局的 <code>eslint</code> 脚本，这是因为代码检查是项目的重要组成部分，所以我们一般会将它安装在当前项目中。</p>\n<p>可是每次执行这么长一段脚本颇有不便，我们可以通过在 <code>package.json</code> 中添加一个 <code>script</code> 来创建一个 npm script 来简化这个步骤：</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"eslint"</span><span class="token operator">:</span> <span class="token string">"eslint index.ts"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>这时只需执行 <code>npm run eslint</code> 即可。</p>\n<h3 id="%E6%A3%80%E6%9F%A5%E6%95%B4%E4%B8%AA%E9%A1%B9%E7%9B%AE%E7%9A%84-ts-%E6%96%87%E4%BB%B6">检查整个项目的 ts 文件 <a class="header-anchor" href="#%E6%A3%80%E6%9F%A5%E6%95%B4%E4%B8%AA%E9%A1%B9%E7%9B%AE%E7%9A%84-ts-%E6%96%87%E4%BB%B6">§</a></h3>\n<p>我们的项目源文件一般是放在 <code>src</code> 目录下，所以需要将 <code>package.json</code> 中的 <code>eslint</code> 脚本改为对一个目录进行检查。由于 <code>eslint</code> 默认不会检查 <code>.ts</code> 后缀的文件，所以需要加上参数 <code>--ext .ts</code>：</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"eslint"</span><span class="token operator">:</span> <span class="token string">"eslint src --ext .ts"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>此时执行 <code>npm run eslint</code> 即会检查 <code>src</code> 目录下的所有 <code>.ts</code> 后缀的文件。</p>\n<h3 id="%E5%9C%A8-vscode-%E4%B8%AD%E9%9B%86%E6%88%90-eslint-%E6%A3%80%E6%9F%A5">在 VSCode 中集成 ESLint 检查 <a class="header-anchor" href="#%E5%9C%A8-vscode-%E4%B8%AD%E9%9B%86%E6%88%90-eslint-%E6%A3%80%E6%9F%A5">§</a></h3>\n<p>在编辑器中集成 ESLint 检查，可以在开发过程中就发现错误，甚至可以在保存时自动修复错误，极大的增加了开发效率。</p>\n<p>要在 VSCode 中集成 ESLint 检查，我们需要先安装 ESLint 插件，点击「扩展」按钮，搜索 ESLint，然后安装即可。</p>\n<p>VSCode 中的 ESLint 插件默认是不会检查 <code>.ts</code> 后缀的，需要在「文件 =&gt; 首选项 =&gt; 设置 =&gt; 工作区」中（也可以在项目根目录下创建一个配置文件 <code>.vscode/settings.json</code>），添加以下配置：</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"javascript"</span><span class="token punctuation">,</span>\n        <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span>\n        <span class="token string">"typescript"</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">"typescript.tsdk"</span><span class="token operator">:</span> <span class="token string">"node_modules/typescript/lib"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>这时再打开一个 <code>.ts</code> 文件，将鼠标移到红色提示处，即可看到这样的报错信息了：</p>\n<p><img src="../assets/vscode-eslint-error.png" alt="VSCode ESLint 错误信息"></p>\n<p>我们还可以开启保存时自动修复的功能，通过配置：</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"eslint.autoFixOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"javascript"</span><span class="token punctuation">,</span>\n        <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">"language"</span><span class="token operator">:</span> <span class="token string">"typescript"</span><span class="token punctuation">,</span>\n            <span class="token property">"autoFix"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">"typescript.tsdk"</span><span class="token operator">:</span> <span class="token string">"node_modules/typescript/lib"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>就可以在保存文件后，自动修复为：</p>\n<pre class="language-ts"><code class="language-ts"><span class="token keyword">let</span> myName <span class="token operator">=</span> <span class="token string">\'Tom\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token maybe-class-name">Foo</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E4%BD%BF%E7%94%A8-prettier-%E4%BF%AE%E5%A4%8D%E6%A0%BC%E5%BC%8F%E9%94%99%E8%AF%AF">使用 Prettier 修复格式错误 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8-prettier-%E4%BF%AE%E5%A4%8D%E6%A0%BC%E5%BC%8F%E9%94%99%E8%AF%AF">§</a></h3>\n<p>ESLint 包含了一些代码格式的检查，比如空格、分号等。但前端社区中有一个更先进的工具可以用来格式化代码，那就是 <a href="https://prettier.io/">Prettier</a>。</p>\n<p>Prettier 聚焦于代码的格式化，通过语法分析，重新整理代码的格式，让所有人的代码都保持同样的风格。</p>\n<p>首先需要安装 Prettier：</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev prettier\n</code></pre>\n<p>然后创建一个 <code>prettier.config.js</code> 文件，里面包含 Prettier 的配置项。Prettier 的配置项很少，这里我推荐大家一个配置规则，作为参考：</p>\n<pre class="language-js"><code class="language-js"><span class="token comment">// prettier.config.js or .prettierrc.js</span>\nmodule<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 一行最多 100 字符</span>\n    printWidth<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n    <span class="token comment">// 使用 4 个空格缩进</span>\n    tabWidth<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n    <span class="token comment">// 不使用缩进符，而使用空格</span>\n    useTabs<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 行尾需要有分号</span>\n    semi<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token comment">// 使用单引号</span>\n    singleQuote<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token comment">// 对象的 key 仅在必要时用引号</span>\n    quoteProps<span class="token operator">:</span> <span class="token string">\'as-needed\'</span><span class="token punctuation">,</span>\n    <span class="token comment">// jsx 不使用单引号，而使用双引号</span>\n    jsxSingleQuote<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 末尾不需要逗号</span>\n    trailingComma<span class="token operator">:</span> <span class="token string">\'none\'</span><span class="token punctuation">,</span>\n    <span class="token comment">// 大括号内的首尾需要空格</span>\n    bracketSpacing<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token comment">// jsx 标签的反尖括号需要换行</span>\n    jsxBracketSameLine<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 箭头函数，只有一个参数的时候，也需要括号</span>\n    arrowParens<span class="token operator">:</span> <span class="token string">\'always\'</span><span class="token punctuation">,</span>\n    <span class="token comment">// 每个文件格式化的范围是文件的全部内容</span>\n    rangeStart<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    rangeEnd<span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>\n    <span class="token comment">// 不需要写文件开头的 @prettier</span>\n    requirePragma<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 不需要自动在文件开头插入 @prettier</span>\n    insertPragma<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token comment">// 使用默认的折行标准</span>\n    proseWrap<span class="token operator">:</span> <span class="token string">\'preserve\'</span><span class="token punctuation">,</span>\n    <span class="token comment">// 根据显示样式决定 html 要不要折行</span>\n    htmlWhitespaceSensitivity<span class="token operator">:</span> <span class="token string">\'css\'</span><span class="token punctuation">,</span>\n    <span class="token comment">// 换行符使用 lf</span>\n    endOfLine<span class="token operator">:</span> <span class="token string">\'lf\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>接下来安装 VSCode 中的 Prettier 插件，然后修改 <code>.vscode/settings.json</code>：</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"files.eol"</span><span class="token operator">:</span> <span class="token string">"\n"</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.tabSize"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span><span class="token punctuation">,</span>\n    <span class="token property">"eslint.autoFixOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"javascript"</span><span class="token punctuation">,</span>\n        <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">"language"</span><span class="token operator">:</span> <span class="token string">"typescript"</span><span class="token punctuation">,</span>\n            <span class="token property">"autoFix"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">"typescript.tsdk"</span><span class="token operator">:</span> <span class="token string">"node_modules/typescript/lib"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<p>这样就实现了保存文件时自动格式化并且自动修复 ESLint 错误。</p>\n<p>需要注意的是，由于 ESLint 也可以检查一些代码格式的问题，所以在和 Prettier 配合使用时，我们一般会把 ESLint 中的代码格式相关的规则禁用掉，否则就会有冲突了。</p>\n<h3 id="%E4%BD%BF%E7%94%A8-alloyteam-%E7%9A%84-eslint-%E9%85%8D%E7%BD%AE">使用 AlloyTeam 的 ESLint 配置 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8-alloyteam-%E7%9A%84-eslint-%E9%85%8D%E7%BD%AE">§</a></h3>\n<p>ESLint 原生的规则和 <code>@typescript-eslint/eslint-plugin</code> 的规则太多了，而且原生的规则有一些在 TypeScript 中支持的不好，需要禁用掉。</p>\n<p>这里我推荐使用 <a href="https://github.com/AlloyTeam/eslint-config-alloy#typescript">AlloyTeam ESLint 规则中的 TypeScript 版本</a>，它已经为我们提供了一套完善的配置规则，并且与 Prettier 是完全兼容的（eslint-config-alloy 不包含任何代码格式的规则，代码格式的问题交给更专业的 Prettier 去处理）。</p>\n<p>安装：</p>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy\n</code></pre>\n<p>在你的项目根目录下创建 <code>.eslintrc.js</code>，并将以下内容复制到文件中即可：</p>\n<pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">\'alloy\'</span><span class="token punctuation">,</span>\n        <span class="token string">\'alloy/typescript\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    env<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 您的环境变量（包含多个预定义的全局变量）</span>\n        <span class="token comment">// Your environments (which contains several predefined global variables)</span>\n        <span class="token comment">//</span>\n        <span class="token comment">// browser: true,</span>\n        <span class="token comment">// node: true,</span>\n        <span class="token comment">// mocha: true,</span>\n        <span class="token comment">// jest: true,</span>\n        <span class="token comment">// jquery: true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    globals<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 您的全局变量（设置为 false 表示它不允许被重新赋值）</span>\n        <span class="token comment">// Your global variables (setting to false means it\'s not allowed to be reassigned)</span>\n        <span class="token comment">//</span>\n        <span class="token comment">// myGlobal: false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 自定义您的规则</span>\n        <span class="token comment">// Customize your rules</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n<p>更多的使用方法，请参考 <a href="https://github.com/AlloyTeam/eslint-config-alloy">AlloyTeam ESLint 规则</a></p>\n<h3 id="%E4%BD%BF%E7%94%A8-eslint-%E6%A3%80%E6%9F%A5-tsx-%E6%96%87%E4%BB%B6">使用 ESLint 检查 tsx 文件 <a class="header-anchor" href="#%E4%BD%BF%E7%94%A8-eslint-%E6%A3%80%E6%9F%A5-tsx-%E6%96%87%E4%BB%B6">§</a></h3>\n<p>如果需要同时支持对 tsx 文件的检查，则需要对以上步骤做一些调整：</p>\n<h4>安装 <code>eslint-plugin-react</code></h4>\n<pre class="language-bash"><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> --save-dev eslint-plugin-react\n</code></pre>\n<h4>package.json 中的 scripts.eslint 添加 <code>.tsx</code> 后缀</h4>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"eslint"</span><span class="token operator">:</span> <span class="token string">"eslint src --ext .ts,.tsx"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h4>VSCode 的配置中新增 typescriptreact 检查</h4>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"files.eol"</span><span class="token operator">:</span> <span class="token string">"\n"</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.tabSize"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span><span class="token punctuation">,</span>\n    <span class="token property">"eslint.autoFixOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token property">"eslint.validate"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"javascript"</span><span class="token punctuation">,</span>\n        <span class="token string">"javascriptreact"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">"language"</span><span class="token operator">:</span> <span class="token string">"typescript"</span><span class="token punctuation">,</span>\n            <span class="token property">"autoFix"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            <span class="token property">"language"</span><span class="token operator">:</span> <span class="token string">"typescriptreact"</span><span class="token punctuation">,</span>\n            <span class="token property">"autoFix"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">"typescript.tsdk"</span><span class="token operator">:</span> <span class="token string">"node_modules/typescript/lib"</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h4>使用 AlloyTeam ESLint 规则中的 TypeScript React 版本</h4>\n<p><a href="https://github.com/AlloyTeam/eslint-config-alloy#typescript-react">AlloyTeam ESLint 规则中的 TypeScript React 版本</a></p>\n<h2 id="troubleshootings">Troubleshootings <a class="header-anchor" href="#troubleshootings">§</a></h2>\n<h3 id="cannot-find-module-\'%40typescript-eslint%2Fparser\'">Cannot find module \'@typescript-eslint/parser\' <a class="header-anchor" href="#cannot-find-module-\'%40typescript-eslint%2Fparser\'">§</a></h3>\n<p>你运行的是全局的 eslint，需要改为运行 <code>./node_modules/.bin/eslint</code>。</p>\n<h3 id="vscode-%E6%B2%A1%E6%9C%89%E6%98%BE%E7%A4%BA%E5%87%BA-eslint-%E7%9A%84%E6%8A%A5%E9%94%99">VSCode 没有显示出 ESLint 的报错 <a class="header-anchor" href="#vscode-%E6%B2%A1%E6%9C%89%E6%98%BE%E7%A4%BA%E5%87%BA-eslint-%E7%9A%84%E6%8A%A5%E9%94%99">§</a></h3>\n<ol>\n<li>检查「文件 =&gt; 首选项 =&gt; 设置」中有没有配置正确</li>\n<li>检查必要的 npm 包有没有安装</li>\n<li>检查 <code>.eslintrc.js</code> 有没有配置</li>\n<li>检查文件是不是在 <code>.eslintignore</code> 中</li>\n</ol>\n<p>如果以上步骤都不奏效，则可以在「文件 =&gt; 首选项 =&gt; 设置」中配置 <code>&quot;eslint.trace.server&quot;: &quot;messages&quot;</code>，按 <code>Ctrl</code>+<code>Shift</code>+<code>U</code> 打开输出面板，然后选择 ESLint 输出，查看具体错误。</p>\n<p><img src="../assets/vscode-output-eslint.png" alt="VSCode 的 ESLint 输出"></p>\n<h3 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%BA%9B%E5%AE%9A%E4%B9%89%E4%BA%86%E7%9A%84%E5%8F%98%E9%87%8F%EF%BC%88%E6%AF%94%E5%A6%82%E4%BD%BF%E7%94%A8-enum-%E5%AE%9A%E4%B9%89%E7%9A%84%E5%8F%98%E9%87%8F%EF%BC%89%E6%9C%AA%E4%BD%BF%E7%94%A8%EF%BC%8Ceslint-%E5%8D%B4%E6%B2%A1%E6%9C%89%E6%8A%A5%E9%94%99%EF%BC%9F">为什么有些定义了的变量（比如使用 <code>enum</code> 定义的变量）未使用，ESLint 却没有报错？ <a class="header-anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%BA%9B%E5%AE%9A%E4%B9%89%E4%BA%86%E7%9A%84%E5%8F%98%E9%87%8F%EF%BC%88%E6%AF%94%E5%A6%82%E4%BD%BF%E7%94%A8-enum-%E5%AE%9A%E4%B9%89%E7%9A%84%E5%8F%98%E9%87%8F%EF%BC%89%E6%9C%AA%E4%BD%BF%E7%94%A8%EF%BC%8Ceslint-%E5%8D%B4%E6%B2%A1%E6%9C%89%E6%8A%A5%E9%94%99%EF%BC%9F">§</a></h3>\n<p>因为无法支持这种变量定义的检查。建议在 <code>tsconfig.json</code> 中添加以下配置，使 <code>tsc</code> 编译过程能够检查出定义了未使用的变量：</p>\n<pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"noUnusedLocals"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"noUnusedParameters"</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n<h3 id="%E5%90%AF%E7%94%A8%E4%BA%86-nounusedparameters-%E4%B9%8B%E5%90%8E%EF%BC%8C%E5%8F%AA%E4%BD%BF%E7%94%A8%E4%BA%86%E7%AC%AC%E4%BA%8C%E4%B8%AA%E5%8F%82%E6%95%B0%EF%BC%8C%E4%BD%86%E6%98%AF%E5%8F%88%E5%BF%85%E9%A1%BB%E4%BC%A0%E5%85%A5%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%EF%BC%8C%E8%BF%99%E5%B0%B1%E4%BC%9A%E6%8A%A5%E9%94%99%E4%BA%86">启用了 noUnusedParameters 之后，只使用了第二个参数，但是又必须传入第一个参数，这就会报错了 <a class="header-anchor" href="#%E5%90%AF%E7%94%A8%E4%BA%86-nounusedparameters-%E4%B9%8B%E5%90%8E%EF%BC%8C%E5%8F%AA%E4%BD%BF%E7%94%A8%E4%BA%86%E7%AC%AC%E4%BA%8C%E4%B8%AA%E5%8F%82%E6%95%B0%EF%BC%8C%E4%BD%86%E6%98%AF%E5%8F%88%E5%BF%85%E9%A1%BB%E4%BC%A0%E5%85%A5%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%82%E6%95%B0%EF%BC%8C%E8%BF%99%E5%B0%B1%E4%BC%9A%E6%8A%A5%E9%94%99%E4%BA%86">§</a></h3>\n<p>第一个参数以下划线开头即可，参考 https://github.com/Microsoft/TypeScript/issues/9458</p>\n<hr>\n<ul>\n<li><a href="index.html">上一章：工程</a></li>\n<li><a href="./compiler-options.html">下一章：编译选项</a></li>\n</ul>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'sidebar': [
        {
            "text": "TypeScript 入门教程",
            "link": "index.html"
        },
        {
            "link": "introduction/index.html",
            "children": [
                {
                    "text": "什么是 TypeScript",
                    "link": "introduction/what-is-typescript.html"
                },
                {
                    "text": "安装 TypeScript",
                    "link": "introduction/get-typescript.html"
                },
                {
                    "text": "Hello TypeScript",
                    "link": "introduction/hello-typescript.html"
                }
            ],
            "text": "简介"
        },
        {
            "link": "basics/index.html",
            "children": [
                {
                    "text": "原始数据类型",
                    "link": "basics/primitive-data-types.html"
                },
                {
                    "text": "任意值",
                    "link": "basics/any.html"
                },
                {
                    "text": "类型推论",
                    "link": "basics/type-inference.html"
                },
                {
                    "text": "联合类型",
                    "link": "basics/union-types.html"
                },
                {
                    "text": "对象的类型——接口",
                    "link": "basics/type-of-object-interfaces.html"
                },
                {
                    "text": "数组的类型",
                    "link": "basics/type-of-array.html"
                },
                {
                    "text": "函数的类型",
                    "link": "basics/type-of-function.html"
                },
                {
                    "text": "类型断言",
                    "link": "basics/type-assertion.html"
                },
                {
                    "text": "声明文件",
                    "link": "basics/declaration-files.html"
                },
                {
                    "text": "内置对象",
                    "link": "basics/built-in-objects.html"
                }
            ],
            "text": "基础"
        },
        {
            "link": "advanced/index.html",
            "children": [
                {
                    "text": "类型别名",
                    "link": "advanced/type-aliases.html"
                },
                {
                    "text": "字符串字面量类型",
                    "link": "advanced/string-literal-types.html"
                },
                {
                    "text": "元组",
                    "link": "advanced/tuple.html"
                },
                {
                    "text": "枚举",
                    "link": "advanced/enum.html"
                },
                {
                    "text": "类",
                    "link": "advanced/class.html"
                },
                {
                    "text": "类与接口",
                    "link": "advanced/class-and-interfaces.html"
                },
                {
                    "text": "泛型",
                    "link": "advanced/generics.html"
                },
                {
                    "text": "声明合并",
                    "link": "advanced/declaration-merging.html"
                },
                {
                    "text": "扩展阅读",
                    "link": "advanced/further-reading.html"
                }
            ],
            "text": "进阶"
        },
        {
            "link": "engineering/index.html",
            "children": [
                {
                    "text": "代码检查",
                    "link": "engineering/lint.html"
                },
                {
                    "text": "编译选项",
                    "link": "engineering/compiler-options.html"
                }
            ],
            "text": "工程"
        },
        {
            "text": "感谢",
            "link": "thanks/index.html"
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'xcatliu'
        ], clientID: "29aa4941759fc887ed4f", clientSecret: "33e355efdf3a1959624506a5d88311145208471b", id: "engineering/lint.html", owner: "xcatliu", repo: "typescript-tutorial", title: "\u4EE3\u7801\u68C0\u67E5" }),
    'ga': React.createElement(Ga, { id: "UA-45256157-14" })
};
