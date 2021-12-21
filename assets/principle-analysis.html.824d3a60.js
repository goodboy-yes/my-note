import{r as e,o as p,c as o,a as n,d as t,F as r,e as c,b as a}from"./app.eaa0b019.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var i="/my-notes/assets/tree-shaking-babel.1b908673.webp";const u={},k=c(`<h1 id="\u539F\u7406\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406\u5206\u6790" aria-hidden="true">#</a> \u539F\u7406\u5206\u6790</h1><h2 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> Tree Shaking</h2><p>Tree-Shaking \u662F\u4E00\u79CD\u57FA\u4E8E ES Module \u89C4\u8303\u7684 Dead Code Elimination \u6280\u672F\uFF0C\u5B83\u4F1A\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u9759\u6001\u5206\u6790\u6A21\u5757\u4E4B\u95F4\u7684\u5BFC\u5165\u5BFC\u51FA\uFF0C\u786E\u5B9A ESM \u6A21\u5757\u4E2D\u54EA\u4E9B\u5BFC\u51FA\u503C\u672A\u66FE\u5176\u5B83\u6A21\u5757\u4F7F\u7528\uFF0C\u5E76\u5C06\u5176\u5220\u9664\uFF0C\u4EE5\u6B64\u5B9E\u73B0\u6253\u5305\u4EA7\u7269\u7684\u4F18\u5316\u3002</p><p>Tree Shaking \u8F83\u65E9\u524D\u7531 Rich Harris \u5728 Rollup \u4E2D\u7387\u5148\u5B9E\u73B0\uFF0CWebpack \u81EA 2.0 \u7248\u672C\u5F00\u59CB\u63A5\u5165\uFF0C\u81F3\u4ECA\u5DF2\u7ECF\u6210\u4E3A\u4E00\u79CD\u5E94\u7528\u5E7F\u6CDB\u7684\u6027\u80FD\u4F18\u5316\u624B\u6BB5\u3002</p><h3 id="\u5728-webpack-\u4E2D\u542F\u52A8-tree-shaking" tabindex="-1"><a class="header-anchor" href="#\u5728-webpack-\u4E2D\u542F\u52A8-tree-shaking" aria-hidden="true">#</a> \u5728 Webpack \u4E2D\u542F\u52A8 Tree Shaking</h3><p>\u5728 Webpack \u4E2D\uFF0C\u542F\u52A8 Tree Shaking \u529F\u80FD\u5FC5\u987B\u540C\u65F6\u6EE1\u8DB3\u4E09\u4E2A\u6761\u4EF6\uFF1A</p><ul><li><p>\u4F7F\u7528 ESM \u89C4\u8303\u7F16\u5199\u6A21\u5757\u4EE3\u7801</p></li><li><p>\u914D\u7F6E optimization.usedExports \u4E3A true\uFF0C\u542F\u52A8\u6807\u8BB0\u529F\u80FD</p></li><li><p>\u542F\u52A8\u4EE3\u7801\u4F18\u5316\u529F\u80FD\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u5B9E\u73B0\uFF1A</p><ul><li>\u914D\u7F6E mode = production</li><li>\u914D\u7F6E optimization.minimize = true</li><li>\u63D0\u4F9B optimization.minimizer \u6570\u7EC4</li></ul></li></ul><p>\u4F8B\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  entry<span class="token operator">:</span> <span class="token string">&quot;./src/index&quot;</span><span class="token punctuation">,</span>
  mode<span class="token operator">:</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span>
  devtool<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
    usedExports<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>ESM \u4E0B\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\u662F\u9AD8\u5EA6\u786E\u5B9A\u7684\uFF0C\u4E0E\u8FD0\u884C\u72B6\u6001\u65E0\u5173\uFF0C\u7F16\u8BD1\u5DE5\u5177\u53EA\u9700\u8981\u5BF9 ESM \u6A21\u5757\u505A\u9759\u6001\u5206\u6790\uFF0C\u5C31\u53EF\u4EE5\u4ECE\u4EE3\u7801\u5B57\u9762\u91CF\u4E2D\u63A8\u65AD\u51FA\u54EA\u4E9B\u6A21\u5757\u503C\u672A\u66FE\u88AB\u5176\u5B83\u6A21\u5757\u4F7F\u7528\uFF0C\u8FD9\u662F\u5B9E\u73B0 Tree Shaking \u6280\u672F\u7684\u5FC5\u8981\u6761\u4EF6\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> bar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./bar&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bar.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u793A\u4F8B\u4E2D\uFF0Cbar.js \u6A21\u5757\u5BFC\u51FA\u4E86 bar \u3001foo \uFF0C\u4F46\u53EA\u6709 bar \u5BFC\u51FA\u503C\u88AB\u5176\u5B83\u6A21\u5757\u4F7F\u7528\uFF0C\u7ECF\u8FC7 Tree Shaking \u5904\u7406\u540E\uFF0Cfoo \u53D8\u91CF\u4F1A\u88AB\u89C6\u4F5C\u65E0\u7528\u4EE3\u7801\u5220\u9664\u3002</p><h3 id="\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> \u5B9E\u73B0\u539F\u7406</h3><p>Webpack \u4E2D\uFF0CTree-shaking \u7684\u5B9E\u73B0\u4E00\u662F\u5148\u6807\u8BB0\u51FA\u6A21\u5757\u5BFC\u51FA\u503C\u4E2D\u54EA\u4E9B\u6CA1\u6709\u88AB\u7528\u8FC7\uFF0C\u4E8C\u662F\u4F7F\u7528 Terser \u5220\u6389\u8FD9\u4E9B\u6CA1\u88AB\u7528\u5230\u7684\u5BFC\u51FA\u8BED\u53E5\u3002\u6807\u8BB0\u8FC7\u7A0B\u5927\u81F4\u53EF\u5212\u5206\u4E3A\u4E09\u4E2A\u6B65\u9AA4\uFF1A\uFF08\u5177\u4F53\u6B65\u9AA4\u89C1\u53C2\u8003\u94FE\u63A5\uFF09</p><ul><li>Make \u9636\u6BB5\uFF0C\u6536\u96C6\u6A21\u5757\u5BFC\u51FA\u53D8\u91CF\u5E76\u8BB0\u5F55\u5230\u6A21\u5757\u4F9D\u8D56\u5173\u7CFB\u56FE ModuleGraph \u53D8\u91CF\u4E2D</li><li>Seal \u9636\u6BB5\uFF0C\u904D\u5386 ModuleGraph \u6807\u8BB0\u6A21\u5757\u5BFC\u51FA\u53D8\u91CF\u6709\u6CA1\u6709\u88AB\u4F7F\u7528</li><li>\u751F\u6210\u4EA7\u7269\u65F6\uFF0C\u82E5\u53D8\u91CF\u6CA1\u6709\u88AB\u5176\u5B83\u6A21\u5757\u4F7F\u7528\u5219\u5220\u9664\u5BF9\u5E94\u7684\u5BFC\u51FA\u8BED\u53E5</li></ul><h3 id="\u6700\u4F73\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a> \u6700\u4F73\u5B9E\u8DF5</h3><p>\u867D\u7136 Webpack \u81EA 2.x \u5F00\u59CB\u5C31\u539F\u751F\u652F\u6301 Tree Shaking \u529F\u80FD\uFF0C\u4F46\u53D7\u9650\u4E8E JS \u7684\u52A8\u6001\u7279\u6027\u4E0E\u6A21\u5757\u7684\u590D\u6742\u6027\uFF0C\u76F4\u81F3\u6700\u65B0\u7684 5.0 \u7248\u672C\u4F9D\u7136\u6CA1\u6709\u89E3\u51B3\u8BB8\u591A\u4EE3\u7801\u526F\u4F5C\u7528\u5E26\u6765\u7684\u95EE\u9898\uFF0C\u4F7F\u5F97\u4F18\u5316\u6548\u679C\u5E76\u4E0D\u5982 Tree Shaking \u539F\u672C\u8BBE\u60F3\u7684\u90A3\u4E48\u5B8C\u7F8E\uFF0C\u6240\u4EE5\u9700\u8981\u4F7F\u7528\u8005\u6709\u610F\u8BC6\u5730\u4F18\u5316\u4EE3\u7801\u7ED3\u6784\uFF0C\u6216\u4F7F\u7528\u4E00\u4E9B\u8865\u4E01\u6280\u672F\u5E2E\u52A9 Webpack \u66F4\u7CBE\u786E\u5730\u68C0\u6D4B\u65E0\u6548\u4EE3\u7801\uFF0C\u5B8C\u6210 Tree Shaking \u64CD\u4F5C\u3002</p><p><strong>\u907F\u514D\u65E0\u610F\u4E49\u7684\u8D4B\u503C</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> bar<span class="token punctuation">,</span> foo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./bar&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> f <span class="token operator">=</span> foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u793A\u4F8B\u4E2D\uFF0Cindex.js \u6A21\u5757\u5F15\u7528\u4E86 bar.js \u6A21\u5757\u7684 foo \u5E76\u8D4B\u503C\u7ED9 f \u53D8\u91CF\uFF0C\u4F46\u540E\u7EED\u5E76\u6CA1\u6709\u7EE7\u7EED\u7528\u5230 foo \u6216 f \u53D8\u91CF\uFF0C\u8FD9\u79CD\u573A\u666F\u4E0B bar.js \u6A21\u5757\u5BFC\u51FA\u7684 foo \u503C\u5B9E\u9645\u4E0A\u5E76\u6CA1\u6709\u88AB\u4F7F\u7528\uFF0C\u7406\u5E94\u88AB\u5220\u9664\uFF0C\u4F46 Webpack \u7684 Tree Shaking \u64CD\u4F5C\u5E76\u6CA1\u6709\u751F\u6548\uFF0C\u4EA7\u7269\u4E2D\u4F9D\u7136\u4FDD\u7559</p><p><strong>\u4F7F\u7528 #pure \u6807\u6CE8\u7EAF\u51FD\u6570\u8C03\u7528</strong></p><p>\u4E0E\u8D4B\u503C\u8BED\u53E5\u7C7B\u4F3C\uFF0CJavaScript \u4E2D\u7684\u51FD\u6570\u8C03\u7528\u8BED\u53E5\u4E5F\u53EF\u80FD\u4EA7\u751F\u526F\u4F5C\u7528\uFF0C\u56E0\u6B64\u9ED8\u8BA4\u60C5\u51B5\u4E0B Webpack \u5E76\u4E0D\u4F1A\u5BF9\u51FD\u6570\u8C03\u7528\u505A Tree Shaking \u64CD\u4F5C\u3002\u4E0D\u8FC7\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u5728\u8C03\u7528\u8BED\u53E5\u524D\u6DFB\u52A0<code>/*#__PURE__*/</code>\u5907\u6CE8\uFF0C\u660E\u786E\u544A\u8BC9 Webpack \u8BE5\u6B21\u51FD\u6570\u8C03\u7528\u5E76\u4E0D\u4F1A\u5BF9\u4E0A\u4E0B\u6587\u73AF\u5883\u4EA7\u751F\u526F\u4F5C\u7528</p><p><strong>\u7981\u6B62 Babel \u8F6C\u8BD1\u6A21\u5757\u5BFC\u5165\u5BFC\u51FA\u8BED\u53E5</strong></p><p>Babel \u662F\u4E00\u4E2A\u975E\u5E38\u6D41\u884C\u7684 JavaScript \u4EE3\u7801\u8F6C\u6362\u5668\uFF0C\u5B83\u80FD\u591F\u5C06\u9AD8\u7248\u672C\u7684 JS \u4EE3\u7801\u7B49\u4EF7\u8F6C\u8BD1\u4E3A\u517C\u5BB9\u6027\u66F4\u4F73\u7684\u4F4E\u7248\u672C\u4EE3\u7801\uFF0C\u4F7F\u5F97\u524D\u7AEF\u5F00\u53D1\u8005\u80FD\u591F\u4F7F\u7528\u6700\u65B0\u7684\u8BED\u8A00\u7279\u6027\u5F00\u53D1\u51FA\u517C\u5BB9\u65E7\u7248\u672C\u6D4F\u89C8\u5668\u7684\u4EE3\u7801\u3002</p><p>\u4F46 Babel \u63D0\u4F9B\u7684\u90E8\u5206\u529F\u80FD\u7279\u6027\u4F1A\u81F4\u4F7F Tree Shaking \u529F\u80FD\u5931\u6548\uFF0C\u4F8B\u5982 Babel \u53EF\u4EE5\u5C06 import/export \u98CE\u683C\u7684 ESM \u8BED\u53E5\u7B49\u4EF7\u8F6C\u8BD1\u4E3A CommonJS \u98CE\u683C\u7684\u6A21\u5757\u5316\u8BED\u53E5\uFF0C\u4F46\u8BE5\u529F\u80FD\u5374\u5BFC\u81F4 Webpack \u65E0\u6CD5\u5BF9\u8F6C\u8BD1\u540E\u7684\u6A21\u5757\u5BFC\u5165\u5BFC\u51FA\u5185\u5BB9\u505A\u9759\u6001\u5206\u6790</p><p><img src="`+i+`" alt=""></p><p>\u793A\u4F8B\u4F7F\u7528 babel-loader \u5904\u7406 *.js \u6587\u4EF6\uFF0C\u5E76\u8BBE\u7F6E Babel \u914D\u7F6E\u9879 <code>modules = &#39;commonjs&#39;</code>\uFF0C\u5C06\u6A21\u5757\u5316\u65B9\u6848\u4ECE ESM \u8F6C\u8BD1\u5230 CommonJS\uFF0C\u5BFC\u81F4\u8F6C\u8BD1\u4EE3\u7801(\u53F3\u56FE\u4E0A\u4E00)\u6CA1\u6709\u6B63\u786E\u6807\u8BB0\u51FA\u672A\u88AB\u4F7F\u7528\u7684\u5BFC\u51FA\u503C foo\u3002\u4F5C\u4E3A\u5BF9\u6BD4\uFF0C\u53F3\u56FE 2 \u4E3A modules = false \u65F6\u6253\u5305\u7684\u7ED3\u679C\uFF0C\u6B64\u65F6 foo \u53D8\u91CF\u88AB\u6B63\u786E\u6807\u8BB0\u4E3A Dead Code\u3002</p><p>\u6240\u4EE5\uFF0C\u5728 Webpack \u4E2D\u4F7F\u7528 babel-loader \u65F6\uFF0C\u5EFA\u8BAE\u5C06 babel-preset-env \u7684 moduels \u914D\u7F6E\u9879\u8BBE\u7F6E\u4E3A false\uFF0C\u5173\u95ED\u6A21\u5757\u5BFC\u5165\u5BFC\u51FA\u8BED\u53E5\u7684\u8F6C\u8BD1\u3002</p><p><strong>\u4F18\u5316\u5BFC\u51FA\u503C\u7684\u7C92\u5EA6</strong></p><p>Tree Shaking \u903B\u8F91\u4F5C\u7528\u5728 ESM \u7684 export \u8BED\u53E5\u4E0A\uFF0C\u56E0\u6B64\u5BF9\u4E8E\u4E0B\u9762\u8FD9\u79CD\u5BFC\u51FA\u573A\u666F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  bar<span class="token operator">:</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">,</span>
  foo<span class="token operator">:</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5373\u4F7F\u5B9E\u9645\u4E0A\u53EA\u7528\u5230 default \u5BFC\u51FA\u503C\u7684\u5176\u4E2D\u4E00\u4E2A\u5C5E\u6027\uFF0C\u6574\u4E2A default \u5BF9\u8C61\u4F9D\u7136\u4F1A\u88AB\u5B8C\u6574\u4FDD\u7559\u3002\u6240\u4EE5\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u5E94\u8BE5\u5C3D\u91CF\u4FDD\u6301\u5BFC\u51FA\u503C\u9897\u7C92\u5EA6\u548C\u539F\u5B50\u6027\uFF0C\u4E0A\u4F8B\u4EE3\u7801\u7684\u4F18\u5316\u7248\u672C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">&quot;bar&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">&quot;foo&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> bar<span class="token punctuation">,</span> foo <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>\u4F7F\u7528\u652F\u6301 Tree Shaking \u7684\u5305</strong></p><p>\u5982\u679C\u53EF\u4EE5\u7684\u8BDD\uFF0C\u5E94\u5C3D\u91CF\u4F7F\u7528\u652F\u6301 Tree Shaking \u7684 npm \u5305\uFF0C\u4F8B\u5982\uFF1A</p><p>\u4F7F\u7528 lodash-es \u66FF\u4EE3 lodash \uFF0C\u6216\u8005\u4F7F\u7528 babel-plugin-lodash \u5B9E\u73B0\u7C7B\u4F3C\u6548\u679C</p><p>\u4E0D\u8FC7\uFF0C\u5E76\u4E0D\u662F\u6240\u6709 npm \u5305\u90FD\u5B58\u5728 Tree Shaking \u7684\u7A7A\u95F4\uFF0C\u8BF8\u5982 React\u3001Vue2 \u4E00\u7C7B\u7684\u6846\u67B6\u539F\u672C\u5DF2\u7ECF\u5BF9\u751F\u4EA7\u7248\u672C\u505A\u4E86\u8DB3\u591F\u6781\u81F4\u7684\u4F18\u5316\uFF0C\u6B64\u65F6\u4E1A\u52A1\u4EE3\u7801\u9700\u8981\u6574\u4E2A\u4EE3\u7801\u5305\u63D0\u4F9B\u7684\u5B8C\u6574\u529F\u80FD\uFF0C\u57FA\u672C\u4E0A\u4E0D\u592A\u9700\u8981\u8FDB\u884C Tree Shaking\u3002</p>`,37),b=a("\u53C2\u8003\u94FE\u63A5 "),d={href:"https://mp.weixin.qq.com/s/K5rPkiCfj1I__J6GMfUBLA",target:"_blank",rel:"noopener noreferrer"},m=a("Webpack \u539F\u7406\u7CFB\u5217\u4E5D\uFF1ATree-Shaking \u5B9E\u73B0\u539F\u7406");function g(h,f){const s=e("ExternalLinkIcon");return p(),o(r,null,[k,n("blockquote",null,[n("p",null,[b,n("a",d,[m,t(s)])])])],64)}var x=l(u,[["render",g]]);export{x as default};
