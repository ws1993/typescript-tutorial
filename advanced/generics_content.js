
import React from 'https://dev.jspm.io/react@16.13.1';
export default function() {
  return React.createElement('article', {"dangerouslySetInnerHTML":{"__html":"<h1 id=\"%E6%B3%9B%E5%9E%8B\">泛型 <a class=\"header-anchor\" href=\"#%E6%B3%9B%E5%9E%8B\">§</a></h1>\n<p>泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。</p>\n<h2 id=\"%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90\">简单的例子 <a class=\"header-anchor\" href=\"#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90\">§</a></h2>\n<p>首先，我们来实现一个函数 <code>createArray</code>，它可以创建一个指定长度的数组，同时将每一项都填充一个默认值：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">function</span> <span class=\"token function\">createArray</span><span class=\"token punctuation\">(</span>length<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token builtin\">any</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token known-class-name class-name\">Array</span><span class=\"token operator\">&lt;</span><span class=\"token builtin\">any</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> result <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> length<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        result<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> value<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> result<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token function\">createArray</span><span class=\"token punctuation\">(</span><span class=\"token number\">3</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'x'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// ['x', 'x', 'x']</span>\n</code></pre>\n<p>上例中，我们使用了<a href=\"../basics/type-of-array.html#%E6%95%B0%E7%BB%84%E6%B3%9B%E5%9E%8B\">之前提到过的数组泛型</a>来定义返回值的类型。</p>\n<p>这段代码编译不会报错，但是一个显而易见的缺陷是，它并没有准确的定义返回值的类型：</p>\n<p><code>Array&lt;any&gt;</code> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 <code>value</code> 的类型。</p>\n<p>这时候，泛型就派上用场了：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">function</span> <span class=\"token generic-function\"><span class=\"token function\">createArray</span><span class=\"token generic class-name\"><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span></span></span><span class=\"token punctuation\">(</span>length<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token known-class-name class-name\">Array</span><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> result<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> length<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        result<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> value<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> result<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token generic-function\"><span class=\"token function\">createArray</span><span class=\"token generic class-name\"><span class=\"token operator\">&lt;</span><span class=\"token builtin\">string</span><span class=\"token operator\">></span></span></span><span class=\"token punctuation\">(</span><span class=\"token number\">3</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'x'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// ['x', 'x', 'x']</span>\n</code></pre>\n<p>上例中，我们在函数名后添加了 <code>&lt;T&gt;</code>，其中 <code>T</code> 用来指代任意输入的类型，在后面的输入 <code>value: T</code> 和输出 <code>Array&lt;T&gt;</code> 中即可使用了。</p>\n<p>接着在调用的时候，可以指定它具体的类型为 <code>string</code>。当然，也可以不手动指定，而让类型推论自动推算出来：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">function</span> <span class=\"token generic-function\"><span class=\"token function\">createArray</span><span class=\"token generic class-name\"><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span></span></span><span class=\"token punctuation\">(</span>length<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token known-class-name class-name\">Array</span><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> result<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> length<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        result<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> value<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> result<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token function\">createArray</span><span class=\"token punctuation\">(</span><span class=\"token number\">3</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'x'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// ['x', 'x', 'x']</span>\n</code></pre>\n<h2 id=\"%E5%A4%9A%E4%B8%AA%E7%B1%BB%E5%9E%8B%E5%8F%82%E6%95%B0\">多个类型参数 <a class=\"header-anchor\" href=\"#%E5%A4%9A%E4%B8%AA%E7%B1%BB%E5%9E%8B%E5%8F%82%E6%95%B0\">§</a></h2>\n<p>定义泛型的时候，可以一次定义多个类型参数：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">function</span> <span class=\"token generic-function\"><span class=\"token function\">swap</span><span class=\"token generic class-name\"><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token punctuation\">,</span> <span class=\"token constant\">U</span><span class=\"token operator\">></span></span></span><span class=\"token punctuation\">(</span>tuple<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token constant\">T</span><span class=\"token punctuation\">,</span> <span class=\"token constant\">U</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token constant\">U</span><span class=\"token punctuation\">,</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">]</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">[</span>tuple<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> tuple<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token function\">swap</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token number\">7</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'seven'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// ['seven', 7]</span>\n</code></pre>\n<p>上例中，我们定义了一个 <code>swap</code> 函数，用来交换输入的元组。</p>\n<h2 id=\"%E6%B3%9B%E5%9E%8B%E7%BA%A6%E6%9D%9F\">泛型约束 <a class=\"header-anchor\" href=\"#%E6%B3%9B%E5%9E%8B%E7%BA%A6%E6%9D%9F\">§</a></h2>\n<p>在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">function</span> <span class=\"token generic-function\"><span class=\"token function\">loggingIdentity</span><span class=\"token generic class-name\"><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span></span></span><span class=\"token punctuation\">(</span>arg<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token constant\">T</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token console class-name\">console</span><span class=\"token punctuation\">.</span><span class=\"token method function property-access\">log</span><span class=\"token punctuation\">(</span>arg<span class=\"token punctuation\">.</span><span class=\"token property-access\">length</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> arg<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">// index.ts(2,19): error TS2339: Property 'length' does not exist on type 'T'.</span>\n</code></pre>\n<p>上例中，泛型 <code>T</code> 不一定包含属性 <code>length</code>，所以编译的时候报错了。</p>\n<p>这时，我们可以对泛型进行约束，只允许这个函数传入那些包含 <code>length</code> 属性的变量。这就是泛型约束：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">interface</span> <span class=\"token class-name\"><span class=\"token maybe-class-name\">Lengthwise</span></span> <span class=\"token punctuation\">{</span>\n    length<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token generic-function\"><span class=\"token function\">loggingIdentity</span><span class=\"token generic class-name\"><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span> <span class=\"token keyword\">extends</span> <span class=\"token maybe-class-name\">Lengthwise</span><span class=\"token operator\">></span></span></span><span class=\"token punctuation\">(</span>arg<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token constant\">T</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token console class-name\">console</span><span class=\"token punctuation\">.</span><span class=\"token method function property-access\">log</span><span class=\"token punctuation\">(</span>arg<span class=\"token punctuation\">.</span><span class=\"token property-access\">length</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> arg<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>上例中，我们使用了 <code>extends</code> 约束了泛型 <code>T</code> 必须符合接口 <code>Lengthwise</code> 的形状，也就是必须包含 <code>length</code> 属性。</p>\n<p>此时如果调用 <code>loggingIdentity</code> 的时候，传入的 <code>arg</code> 不包含 <code>length</code>，那么在编译阶段就会报错了：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">interface</span> <span class=\"token class-name\"><span class=\"token maybe-class-name\">Lengthwise</span></span> <span class=\"token punctuation\">{</span>\n    length<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token generic-function\"><span class=\"token function\">loggingIdentity</span><span class=\"token generic class-name\"><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span> <span class=\"token keyword\">extends</span> <span class=\"token maybe-class-name\">Lengthwise</span><span class=\"token operator\">></span></span></span><span class=\"token punctuation\">(</span>arg<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token constant\">T</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token console class-name\">console</span><span class=\"token punctuation\">.</span><span class=\"token method function property-access\">log</span><span class=\"token punctuation\">(</span>arg<span class=\"token punctuation\">.</span><span class=\"token property-access\">length</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> arg<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token function\">loggingIdentity</span><span class=\"token punctuation\">(</span><span class=\"token number\">7</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// index.ts(10,17): error TS2345: Argument of type '7' is not assignable to parameter of type 'Lengthwise'.</span>\n</code></pre>\n<p>多个类型参数之间也可以互相约束：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">function</span> <span class=\"token generic-function\"><span class=\"token function\">copyFields</span><span class=\"token generic class-name\"><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span> <span class=\"token keyword\">extends</span> <span class=\"token constant\">U</span><span class=\"token punctuation\">,</span> <span class=\"token constant\">U</span><span class=\"token operator\">></span></span></span><span class=\"token punctuation\">(</span>target<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">,</span> source<span class=\"token operator\">:</span> <span class=\"token constant\">U</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token constant\">T</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> id <span class=\"token keyword\">in</span> source<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        target<span class=\"token punctuation\">[</span>id<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span>source<span class=\"token punctuation\">)</span><span class=\"token punctuation\">[</span>id<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> target<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">let</span> x <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> a<span class=\"token operator\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> b<span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> c<span class=\"token operator\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> d<span class=\"token operator\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token function\">copyFields</span><span class=\"token punctuation\">(</span>x<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> b<span class=\"token operator\">:</span> <span class=\"token number\">10</span><span class=\"token punctuation\">,</span> d<span class=\"token operator\">:</span> <span class=\"token number\">20</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<p>上例中，我们使用了两个类型参数，其中要求 <code>T</code> 继承 <code>U</code>，这样就保证了 <code>U</code> 上不会出现 <code>T</code> 中不存在的字段。</p>\n<h2 id=\"%E6%B3%9B%E5%9E%8B%E6%8E%A5%E5%8F%A3\">泛型接口 <a class=\"header-anchor\" href=\"#%E6%B3%9B%E5%9E%8B%E6%8E%A5%E5%8F%A3\">§</a></h2>\n<p><a href=\"../basics/type-of-function.html#%E6%8E%A5%E5%8F%A3%E4%B8%AD%E5%87%BD%E6%95%B0%E7%9A%84%E5%AE%9A%E4%B9%89\">之前学习过</a>，可以使用接口的方式来定义一个函数需要符合的形状：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">interface</span> <span class=\"token class-name\"><span class=\"token maybe-class-name\">SearchFunc</span></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token punctuation\">(</span>source<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">,</span> subString<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token builtin\">boolean</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">let</span> mySearch<span class=\"token operator\">:</span> <span class=\"token maybe-class-name\">SearchFunc</span><span class=\"token punctuation\">;</span>\n<span class=\"token function-variable function\">mySearch</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span>source<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">,</span> subString<span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> source<span class=\"token punctuation\">.</span><span class=\"token method function property-access\">search</span><span class=\"token punctuation\">(</span>subString<span class=\"token punctuation\">)</span> <span class=\"token operator\">!==</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>当然也可以使用含有泛型的接口来定义函数的形状：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">interface</span> <span class=\"token class-name\"><span class=\"token maybe-class-name\">CreateArrayFunc</span></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span><span class=\"token punctuation\">(</span>length<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token known-class-name class-name\">Array</span><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">let</span> createArray<span class=\"token operator\">:</span> <span class=\"token maybe-class-name\">CreateArrayFunc</span><span class=\"token punctuation\">;</span>\n<span class=\"token function-variable function\">createArray</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span><span class=\"token punctuation\">(</span>length<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token known-class-name class-name\">Array</span><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> result<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> length<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        result<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> value<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> result<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token function\">createArray</span><span class=\"token punctuation\">(</span><span class=\"token number\">3</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'x'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// ['x', 'x', 'x']</span>\n</code></pre>\n<p>进一步，我们可以把泛型参数提前到接口名上：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">interface</span> <span class=\"token class-name\"><span class=\"token maybe-class-name\">CreateArrayFunc</span><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token punctuation\">(</span>length<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token known-class-name class-name\">Array</span><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">let</span> createArray<span class=\"token operator\">:</span> <span class=\"token maybe-class-name\">CreateArrayFunc</span><span class=\"token operator\">&lt;</span><span class=\"token builtin\">any</span><span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n<span class=\"token function-variable function\">createArray</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span><span class=\"token punctuation\">(</span>length<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token known-class-name class-name\">Array</span><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> result<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> length<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        result<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> value<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> result<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token function\">createArray</span><span class=\"token punctuation\">(</span><span class=\"token number\">3</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'x'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// ['x', 'x', 'x']</span>\n</code></pre>\n<p>注意，此时在使用泛型接口的时候，需要定义泛型的类型。</p>\n<h2 id=\"%E6%B3%9B%E5%9E%8B%E7%B1%BB\">泛型类 <a class=\"header-anchor\" href=\"#%E6%B3%9B%E5%9E%8B%E7%B1%BB\">§</a></h2>\n<p>与泛型接口类似，泛型也可以用于类的类型定义中：</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">class</span> <span class=\"token class-name\"><span class=\"token maybe-class-name\">GenericNumber</span><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span></span> <span class=\"token punctuation\">{</span>\n    zeroValue<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">;</span>\n    <span class=\"token function-variable function\">add</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span>x<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">,</span> y<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">)</span> <span class=\"token arrow operator\">=></span> <span class=\"token constant\">T</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">let</span> myGenericNumber <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\"><span class=\"token maybe-class-name\">GenericNumber</span><span class=\"token operator\">&lt;</span><span class=\"token builtin\">number</span><span class=\"token operator\">></span></span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nmyGenericNumber<span class=\"token punctuation\">.</span><span class=\"token property-access\">zeroValue</span> <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\nmyGenericNumber<span class=\"token punctuation\">.</span><span class=\"token method-variable function-variable method function property-access\">add</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span>x<span class=\"token punctuation\">,</span> y<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span> <span class=\"token keyword\">return</span> x <span class=\"token operator\">+</span> y<span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n</code></pre>\n<h2 id=\"%E6%B3%9B%E5%9E%8B%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E7%B1%BB%E5%9E%8B\">泛型参数的默认类型 <a class=\"header-anchor\" href=\"#%E6%B3%9B%E5%9E%8B%E5%8F%82%E6%95%B0%E7%9A%84%E9%BB%98%E8%AE%A4%E7%B1%BB%E5%9E%8B\">§</a></h2>\n<p>在 TypeScript 2.3 以后，我们可以为泛型中的类型参数指定默认类型。当使用泛型时没有在代码中直接指定类型参数，从实际值参数中也无法推测出时，这个默认类型就会起作用。</p>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">function</span> <span class=\"token generic-function\"><span class=\"token function\">createArray</span><span class=\"token generic class-name\"><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span> <span class=\"token operator\">=</span> <span class=\"token builtin\">string</span><span class=\"token operator\">></span></span></span><span class=\"token punctuation\">(</span>length<span class=\"token operator\">:</span> <span class=\"token builtin\">number</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token known-class-name class-name\">Array</span><span class=\"token operator\">&lt;</span><span class=\"token constant\">T</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> result<span class=\"token operator\">:</span> <span class=\"token constant\">T</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> length<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        result<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> value<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> result<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<h2 id=\"%E5%8F%82%E8%80%83\">参考 <a class=\"header-anchor\" href=\"#%E5%8F%82%E8%80%83\">§</a></h2>\n<ul>\n<li><a href=\"http://www.typescriptlang.org/docs/handbook/generics.html\">Generics</a>（<a href=\"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/generics.html\">中文版</a>）</li>\n<li><a href=\"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#generic-parameter-defaults\">Generic parameter defaults</a></li>\n</ul>\n<hr>\n<ul>\n<li><a href=\"class-and-interfaces.html\">上一章：类与接口</a></li>\n<li><a href=\"declaration-merging.html\">下一章：声明合并</a></li>\n</ul>\n"}})
};
