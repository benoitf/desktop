"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16115],{97623:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"type-aliases/ProviderResult","title":"Type Alias: ProviderResult\\\\<T\\\\>","description":"ProviderResult\\\\ = T \\\\| undefined \\\\| Promise\\\\","source":"@site/api/type-aliases/ProviderResult.md","sourceDirName":"type-aliases","slug":"/type-aliases/ProviderResult","permalink":"/api/type-aliases/ProviderResult","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"ProviderLinks","permalink":"/api/type-aliases/ProviderLinks"},"next":{"title":"ProviderStatus","permalink":"/api/type-aliases/ProviderStatus"}}');var s=n(62540),i=n(43023);const a={},o="Type Alias: ProviderResult<T>",c={},d=[{value:"Type Parameters",id:"type-parameters",level:2},{value:"T",id:"t",level:3}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"type-alias-providerresultt",children:"Type Alias: ProviderResult<T>"})}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"ProviderResult"}),"<",(0,s.jsx)(r.code,{children:"T"}),"> = ",(0,s.jsx)(r.code,{children:"T"})," | ",(0,s.jsx)(r.code,{children:"undefined"})," | ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"T"})," | ",(0,s.jsx)(r.code,{children:"undefined"}),">"]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["Defined in: ",(0,s.jsx)(r.a,{href:"https://github.com/benoitf/desktop/blob/256c6b575943d80951e62ed77ff310186bcd94cd/packages/extension-api/src/extension-api.d.ts#L308",children:"packages/extension-api/src/extension-api.d.ts:308"})]}),"\n",(0,s.jsxs)(r.p,{children:["A provider result represents the values a provider, like the ",(0,s.jsx)(r.a,{href:"/api/interfaces/ImageCheckerProvider",children:(0,s.jsx)(r.code,{children:"ImageCheckerProvider"})}),",\nmay return. For once this is the actual result type ",(0,s.jsx)(r.code,{children:"T"}),", like ",(0,s.jsx)(r.code,{children:"ImageChecks"}),", or a Promise that resolves\nto that type ",(0,s.jsx)(r.code,{children:"T"}),". In addition, ",(0,s.jsx)(r.code,{children:"null"})," and ",(0,s.jsx)(r.code,{children:"undefined"})," can be returned - either directly or from a\nPromise."]}),"\n",(0,s.jsxs)(r.p,{children:["The snippets below are all valid implementations of the ",(0,s.jsx)(r.a,{href:"/api/interfaces/ImageCheckerProvider",children:(0,s.jsx)(r.code,{children:"ImageCheckerProvider"})}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"let a: ImageCheckerProvider = {\n check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n   return new ImageChecks();\n }\n\nlet b: ImageCheckerProvider = {\n async check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n\t\treturn new ImageChecks();\n\t}\n}\n\nlet c: ImageCheckerProvider = {\n check(image: ImageInfo, token?: CancellationToken): ProviderResult<ImageChecks> {\n\t\treturn; // undefined\n\t}\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,s.jsx)(r.h3,{id:"t",children:"T"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:"T"})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},43023:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>o});var t=n(63696);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);