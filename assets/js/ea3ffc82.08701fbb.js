"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[28917],{30696:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"interfaces/ExtensionContext","title":"Interface: ExtensionContext","description":"Defined in183","source":"@site/api/interfaces/ExtensionContext.md","sourceDirName":"interfaces","slug":"/interfaces/ExtensionContext","permalink":"/api/interfaces/ExtensionContext","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"typedocSidebar","previous":{"title":"Extension","permalink":"/api/interfaces/Extension"},"next":{"title":"FileSystemWatcher","permalink":"/api/interfaces/FileSystemWatcher"}}');var i=s(62540),r=s(43023);const o={},c="Interface: ExtensionContext",d={},a=[{value:"Properties",id:"properties",level:2},{value:"extensionUri",id:"extensionuri",level:3},{value:"secrets",id:"secrets",level:3},{value:"storagePath",id:"storagepath",level:3},{value:"subscriptions",id:"subscriptions",level:3},{value:"dispose()",id:"dispose",level:4},{value:"Returns",id:"returns",level:5}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"interface-extensioncontext",children:"Interface: ExtensionContext"})}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/benoitf/desktop/blob/256c6b575943d80951e62ed77ff310186bcd94cd/packages/extension-api/src/extension-api.d.ts#L183",children:"packages/extension-api/src/extension-api.d.ts:183"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"extensionuri",children:"extensionUri"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"extensionUri"}),": ",(0,i.jsx)(n.a,{href:"/api/classes/Uri",children:(0,i.jsx)(n.code,{children:"Uri"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/benoitf/desktop/blob/256c6b575943d80951e62ed77ff310186bcd94cd/packages/extension-api/src/extension-api.d.ts#L197",children:"packages/extension-api/src/extension-api.d.ts:197"})]}),"\n",(0,i.jsx)(n.p,{children:"The uri of the directory containing the extension."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"secrets",children:"secrets"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"secrets"}),": ",(0,i.jsx)(n.a,{href:"/api/interfaces/SecretStorage",children:(0,i.jsx)(n.code,{children:"SecretStorage"})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/benoitf/desktop/blob/256c6b575943d80951e62ed77ff310186bcd94cd/packages/extension-api/src/extension-api.d.ts#L202",children:"packages/extension-api/src/extension-api.d.ts:202"})]}),"\n",(0,i.jsx)(n.p,{children:"A storage utility for secrets. Secrets are persisted across reloads."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"storagepath",children:"storagePath"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"storagePath"}),": ",(0,i.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/benoitf/desktop/blob/256c6b575943d80951e62ed77ff310186bcd94cd/packages/extension-api/src/extension-api.d.ts#L192",children:"packages/extension-api/src/extension-api.d.ts:192"})]}),"\n",(0,i.jsx)(n.p,{children:"An absolute file path in which the extension can store state.\nThe directory might not exist on disk and creation is\nup to the extension."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"subscriptions",children:"subscriptions"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"readonly"})," ",(0,i.jsx)(n.strong,{children:"subscriptions"}),": ",(0,i.jsx)(n.code,{children:"object"}),"[]"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Defined in: ",(0,i.jsx)(n.a,{href:"https://github.com/benoitf/desktop/blob/256c6b575943d80951e62ed77ff310186bcd94cd/packages/extension-api/src/extension-api.d.ts#L185",children:"packages/extension-api/src/extension-api.d.ts:185"})]}),"\n",(0,i.jsx)(n.h4,{id:"dispose",children:"dispose()"}),"\n",(0,i.jsx)(n.h5,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"any"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(63696);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);