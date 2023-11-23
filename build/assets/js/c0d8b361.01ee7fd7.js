"use strict";(self.webpackChunkwww_iameng_cn=self.webpackChunkwww_iameng_cn||[]).push([[2519],{2752:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=r(5893),t=r(1151);const i={sidebar_position:3},a="ES2021\u65b0\u7279\u6027",l={id:"javascript/ES2021\u65b0\u7279\u6027",title:"ES2021\u65b0\u7279\u6027",description:"2021 \u5e74 6 \u6708 22 \u65e5\uff0c\u7b2c 121 \u5c4a Ecma \u56fd\u9645\uff08Ecma International\uff09\u5927\u4f1a\u4ee5\u8fdc\u7a0b\u4f1a\u8bae\u5f62\u5f0f\u53ec\u5f00\u3002\u6b63\u5f0f\u901a\u8fc7\u4e86 ES2021 \u6807\u51c6\u3002",source:"@site/docs/javascript/ES2021\u65b0\u7279\u6027.md",sourceDirName:"javascript",slug:"/javascript/ES2021\u65b0\u7279\u6027",permalink:"/docs/javascript/ES2021\u65b0\u7279\u6027",draft:!1,unlisted:!1,editUrl:"https://iameng.cn/docs/intro/docs/javascript/ES2021\u65b0\u7279\u6027.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"ES2020\u65b0\u7279\u6027",permalink:"/docs/javascript/ES2020\u65b0\u7279\u6027"},next:{title:"ES2019\u65b0\u7279\u6027",permalink:"/docs/javascript/ES2019\u65b0\u7279\u6027"}},c={},o=[{value:"String.prototype.replaceAll()",id:"stringprototypereplaceall",level:2},{value:"Promise.any()",id:"promiseany",level:2},{value:"WeakRefs",id:"weakrefs",level:2},{value:"\u6570\u503c\u5206\u5272\u7b26",id:"\u6570\u503c\u5206\u5272\u7b26",level:2},{value:"\u903b\u8f91\u8d4b\u503c\u8fd0\u7b97\u7b26",id:"\u903b\u8f91\u8d4b\u503c\u8fd0\u7b97\u7b26",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"es2021\u65b0\u7279\u6027",children:"ES2021\u65b0\u7279\u6027"}),"\n",(0,s.jsx)(n.p,{children:"2021 \u5e74 6 \u6708 22 \u65e5\uff0c\u7b2c 121 \u5c4a Ecma \u56fd\u9645\uff08Ecma International\uff09\u5927\u4f1a\u4ee5\u8fdc\u7a0b\u4f1a\u8bae\u5f62\u5f0f\u53ec\u5f00\u3002\u6b63\u5f0f\u901a\u8fc7\u4e86 ES2021 \u6807\u51c6\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u6b21\u53c8\u5e26\u6765\u4e86\u54ea\u4e9b\u6709\u8da3\u7684\u7279\u6027\u5462\uff1f\u8ba9\u6211\u4eec\u4e00\u8d77\u6765\u4e86\u89e3\u4e0b\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"stringprototypereplaceall",children:"String.prototype.replaceAll()"}),"\n",(0,s.jsxs)(n.p,{children:["\u76f8\u6bd4\u4e8e",(0,s.jsx)(n.code,{children:"String.prototype.replace()"}),"\uff0c\u5982\u679c\u4e0d\u4f7f\u7528\u5168\u5c40\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5c31\u65e0\u6cd5\u66ff\u6362\u5b57\u7b26\u4e32\u4e2d\u5b50\u5b57\u7b26\u4e32\u7684\u6240\u6709\u5b9e\u4f8b\u3002\u53ea\u4f1a\u66ff\u6362\u7b2c\u4e00\u6b21\u5339\u914d\u7684\u5b57\u7b26\u3002\u73b0\u5728\u53ef\u4ee5\u7528",(0,s.jsx)(n.code,{children:"String.prototype.replaceAll()"}),"\u66ff\u6362\u5168\u90e8\u5b57\u7b26\u4e32\u800c\u4e0d\u9700\u8981\u4f7f\u7528\u6b63\u5219\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"let str = 'mike name is mike'\r\n\r\nstr.replace('mike', 'tom'); // tom name is mike\r\n\r\nstr.replace(/mike/g, 'tom'); // tom name is tom\r\n\r\nstr.replaceAll('mike', 'tom'); // \ud83c\udd95 tom name is tom\n"})}),"\n",(0,s.jsx)(n.h2,{id:"promiseany",children:"Promise.any()"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u6709\u4efb\u4f55\u4e00\u4e2a promise \u72b6\u6001\u53d8\u4e3a\u6210\u529f (fulfilled)\uff0c\u5c31\u8fd4\u56de\u3002\u5f53\u5168\u90e8 promise \u90fd rejected\uff0c\u629b\u51fa\u4e00\u4e2a AggregateError \u9519\u8bef\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const p1 = new Promise((resolve, reject) => {\r\n  setTimeout(() => resolve("p1"), 100);\r\n});\r\nconst p2 = new Promise((resolve, reject) => {\r\n  setTimeout(() => resolve("p2"), 200);\r\n});\r\nconst p3 = new Promise((resolve, reject) => {\r\n  setTimeout(() => resolve("p3"), 300);\r\n});\r\nPromise.any([p1, p2, p3]).then(first => {\r\n// \u4efb\u4f55\u4e00\u4e2apromise\u5b8c\u6210(fulfilled)\uff0c\u5c31\u8fd4\u56de\r\n  console.log(first)\r\n}).catch(error => {\r\n// \u5168\u90e8promise\u90fdrejected\uff0c\u629b\u51fa\u4e00\u4e2aAggregateError\u9519\u8bef\r\n  console.log(error)\r\n})\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u76f8\u4f3c\u7684 API"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u540d\u5b57"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Promise.allSettled"}),(0,s.jsx)(n.td,{children:"\u4e0d\u4f1a\u77ed\u8def"}),(0,s.jsx)(n.td,{children:"ES2020"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Promise.all"}),(0,s.jsx)(n.td,{children:"\u5f53\u6709\u4e00\u4e2a rejected \u5c31\u77ed\u8def"}),(0,s.jsx)(n.td,{children:"ES2015"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Promise.race"}),(0,s.jsx)(n.td,{children:"\u5f53\u6709\u4e00\u4e2a rejected \u6216 fulfilled \u5c31\u77ed\u8def"}),(0,s.jsx)(n.td,{children:"ES2015"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Promise.any"}),(0,s.jsx)(n.td,{children:"\u5f53\u6709\u4e00\u4e2a fulfilled \u5c31\u77ed\u8def"}),(0,s.jsx)(n.td,{children:"ES2021"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"weakrefs",children:"WeakRefs"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u822c\u6765\u8bf4\uff0c\u5728 JavaScript \u4e2d\uff0c\u5bf9\u8c61\u7684\u5f15\u7528\u662f\u5f3a\u5f15\u7528\u7684\uff0c\u8fd9\u610f\u5473\u7740\u53ea\u8981\u6301\u6709\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u5b83\u5c31\u4e0d\u4f1a\u88ab\u5783\u573e\u56de\u6536\u3002\u53ea\u6709\u5f53\u8be5\u5bf9\u8c61\u6ca1\u6709\u4efb\u4f55\u7684\u5f3a\u5f15\u7528\u65f6\uff0c js \u5f15\u64ce\u5783\u573e\u56de\u6536\u5668\u624d\u4f1a\u9500\u6bc1\u8be5\u5bf9\u8c61\u5e76\u4e14\u56de\u6536\u8be5\u5bf9\u8c61\u6240\u5360\u7684\u5185\u5b58\u7a7a\u95f4\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"let obj = {a:1, b:2}; // \u53ea\u8981\u6211\u4eec\u8bbf\u95ee obj \u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5c31\u4e0d\u4f1a\u88ab\u5783\u573e\u56de\u6536\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f46\u662f ",(0,s.jsx)(n.code,{children:"WeakRefs"})," \u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5f31\u5f15\u7528\uff0c\u5bf9\u8c61\u7684\u5f31\u5f15\u7528\u662f\u6307\u5f53\u8be5\u5bf9\u8c61\u5e94\u8be5\u88ab js \u5f15\u64ce\u5783\u573e\u56de\u6536\u5668\u56de\u6536\u65f6\u4e0d\u4f1a\u963b\u6b62\u5783\u573e\u56de\u6536\u5668\u7684\u56de\u6536\u884c\u4e3a\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"weak_ref \u5b9e\u4f8b\u5177\u6709\u4e00\u4e2a\u65b9\u6cd5 deref\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u88ab\u5f15\u7528\u7684\u539f\u59cb\u5bf9\u8c61\uff0c\u5982\u679c\u539f\u59cb\u5bf9\u8c61\u5df2\u88ab\u56de\u6536\uff0c\u5219\u8fd4\u56de undefined \u5bf9\u8c61\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const weak_ref = new WeakRef({ name: 'tom' });\r\nlet obj = weak_ref.deref();\r\nif (obj) {\r\n  console.log(obj.name); // tom\r\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"\u4f7f\u7528\u5b83\u4eec\u9700\u8981\u4ed4\u7ec6\u8003\u8651\uff0c\u5c3d\u91cf\u907f\u514d\u4f7f\u7528\u5b83\u4eec\u3002"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FinalizationRegistry"}),"\r\n\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"FinalizationRegistry"})," \u5bf9\u8c61\u53ef\u4ee5\u5728\u5783\u573e\u56de\u6536\u5668\u56de\u6536\u5bf9\u8c61\u65f6\u6267\u884c\u56de\u8c03\u51fd\u6570\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'// \u6784\u5efa\u76d1\u542c\u5bf9\u8c61\u88ab\u5783\u573e\u56de\u6536\u5668\u6e05\u9664\u7684\u56de\u8c03\r\nconst fr = new FinalizationRegistry(heldValue => {\r\n      console.log(heldValue);\r\n});\r\n\r\nconst obj = {};\r\nconst token = {};\r\n\r\n/**\r\n* @function \u6ce8\u518c\u76d1\u542c\r\n* @param \u9700\u8981\u76d1\u542c\u7684\u5bf9\u8c61\r\n* @param \u9700\u8981\u5408\u5e76\u7684Grid\r\n* @param \u53d6\u6d88\u76d1\u542c\u7528\u7684\u6807\u8bc6\u7b26\r\n*/\r\nfr.register(obj, "obj deleted!", token);\r\n\r\n/**\r\n* @function \u53d6\u6d88\u76d1\u542c\r\n* @param \u53d6\u6d88\u76d1\u542c\u7684\u5bf9\u8c61\r\n*/\r\nfr.unregister(token);\r\n\r\n// \u53ef\u80fd\u5f88\u4e45\u4ee5\u540e\uff0c\u56de\u8c03\u6267\u884c\r\n// => obj deleted!\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u6570\u503c\u5206\u5272\u7b26",children:"\u6570\u503c\u5206\u5272\u7b26"}),"\n",(0,s.jsxs)(n.p,{children:["\u5f15\u5165\u7684\u6570\u503c\u5206\u9694\u7b26\u4f7f\u7528",(0,s.jsx)(n.code,{children:"_"}),"\uff08\u4e0b\u5212\u7ebf\uff09\u5b57\u7b26\uff0c\u5728\u6570\u503c\u7ec4\u4e4b\u95f4\u63d0\u4f9b\u5206\u9694\uff0c\u63d0\u9ad8\u6570\u5b57\u7684\u53ef\u8bfb\u6027\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"let num1 = 1000000000; // 1000000000\r\n\r\nlet num2 = 1_000_000_000; // \ud83c\udd95  1000000000\r\n\r\nconsole.log(num1 === num2); // true\r\n\r\nlet a = 1_1; // 11\r\nlet a = 1__1 // \u9519\u8bef\uff0c\u53ea\u5141\u8bb8\u4e00\u4e2a\u4e0b\u5212\u7ebf\u4f5c\u4e3a\u6570\u5b57\u5206\u9694\u7b26\r\nlet a = 1_;  // \u9519\u8bef\uff0c\u5206\u9694\u7b26\u4e0d\u80fd\u5728\u5c3e\u90e8\r\nlet a = _1;  // \u9519\u8bef\uff0c\u5206\u9694\u7b26\u4e0d\u80fd\u5728\u5934\u90e8\r\n\r\nNumber(1_1); // 11\r\nNumber('1_1'); // NaN\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"\u5206\u9694\u7b26\u4e0d\u80fd\u5728\u5c3e\u90e8\u548c\u5934\u90e8\uff0c\u53ea\u80fd\u5728\u6570\u5b57\u4e4b\u95f4\uff0c\u53ea\u5141\u8bb8\u4e00\u4e2a\u4e0b\u5212\u7ebf\u4f5c\u4e3a\u6570\u5b57\u5206\u9694\u7b26\uff0c\u4e0d\u53ef\u8fde\u7eed\u3002\u5206\u9694\u7b26\u4e0d\u5f71\u54cd\u6570\u503c\u7684\u7c7b\u578b\u8f6c\u6362\u503c\uff0c\u4e5f\u65e0\u6cd5\u5728\u5b57\u7b26\u4e32\u8f6c\u6570\u503c\u65f6\u88ab\u8bc6\u522b\u3002"})}),"\n",(0,s.jsx)(n.h2,{id:"\u903b\u8f91\u8d4b\u503c\u8fd0\u7b97\u7b26",children:"\u903b\u8f91\u8d4b\u503c\u8fd0\u7b97\u7b26"}),"\n",(0,s.jsx)(n.p,{children:"\u903b\u8f91\u8d4b\u503c\u8fd0\u7b97\u7b26\uff0c\u76ee\u7684\u662f\u63d0\u4f9b\u7b80\u6d01\u7684\u5199\u6cd5\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"a ||= b;\r\n// \u7b49\u6548\u4e8e\u4ee5\u4e0b\u4e24\u79cd\u5199\u6cd5\r\n// a || (a = b); a\u4e3afalse\u65f6\u6267\u884c\u53f3\u8fb9\r\n// if(!a) a = b;\r\n\r\na &&= b;\r\n// \u7b49\u6548\u4e8e\u4ee5\u4e0b\u4e24\u79cd\u5199\u6cd5\r\n// a && (a = b); a\u4e3atruth\u65f6\u6267\u884c\u53f3\u8fb9\r\n// if(a) a = b\r\n\r\na ??= b;\r\n// \u7b49\u6548\u4e8e\u4ee5\u4e0b\u4e24\u79cd\u5199\u6cd5\r\n// a ?? (a = b); a\u4e3aundefined\u6216null\u65f6\u6267\u884c\u53f3\u8fb9\r\n// if(a === nudefined || a === null) a = b;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5176\u4e2d",(0,s.jsx)(n.code,{children:"??"})," \u8fd0\u7b97\u7b26\u53ea\u6709\u5de6\u8fb9\u662f undefined \u6216 null \u624d\u8fd4\u56de\u53f3\u8fb9\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'undefined ?? 1 // 1\r\nnull ?? 1 // 1\r\nfalse ?? 1 // false\r\n0 ?? 1 // 0\r\n"" ?? 1 // ""\r\nNaN ?? 1 // NaN\r\n2 ?? 1 // 2\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>a});var s=r(7294);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);