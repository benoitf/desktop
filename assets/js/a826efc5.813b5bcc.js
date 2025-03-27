"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[57689],{83854:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var t=s(85983),i=s(62540),o=s(43023);const l={title:"Podman Desktop 1.7 Release",description:"Podman Desktop 1.7 has been released!",slug:"podman-desktop-release-1.7",authors:"deboer",tags:["podman-desktop","release","kubernetes","openshift","onboarding","extensions","settings"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.7/renovations.png"},a=void 0,r={authorsImageUrls:[void 0]},d=[{value:"Release Details",id:"release-details",level:2},{value:"Podman 4.9",id:"podman-49",level:3},{value:"Extension API Improvements",id:"extension-api-improvements",level:3},{value:"Experimental Kubernetes UI",id:"experimental-kubernetes-ui",level:3},{value:"Enhanced Builds, Pods List, and Troubleshooting Pages",id:"enhanced-builds-pods-list-and-troubleshooting-pages",level:3},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final notes",id:"final-notes",level:2},{value:"Fixed Issues",id:"fixed-issues",level:3},{value:"Where to Download",id:"where-to-download",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Podman Desktop 1.7 Release! \ud83c\udf89"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Podman-desktop-1-7-hero",src:s(37151).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.p,{children:"We've got a new release with a ton of seal appeal! This release introduces:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Podman 4.9.0"}),": ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman/releases",children:"Podman 4.9.0"})," is now included in both Windows and Mac installers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Extension API Improvements"}),": A big update to the extension API enabling more goodness for \ud83e\uddad Podman Desktop's extensions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Experimental Kubernetes UI"}),": Get a sneak peek at the more advanced UI for working with Kubernetes clusters."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Enhanced Builds, Pods List, and Troubleshooting Pages"}),": Build for different platforms, an upgraded pods view, and more."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Podman Desktop 1.7 is now available. ",(0,i.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,i.jsx)(n.h3,{id:"podman-49",children:"Podman 4.9"}),"\n",(0,i.jsx)(n.p,{children:"\ud83e\uddad Podman 4.9 includes key fixes for stability and reliability issues reported by our users.\nIf you've been floundering we highly recommend updating!"}),"\n",(0,i.jsxs)(n.p,{children:["If you are on a Mac M3, we are aware of a critical issue in Podman and expect to update very\nsoon to pick up this fix:\n",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman/issues/21353",children:"#21353 - Update to new QEMU"})," (based on\n",(0,i.jsx)(n.a,{href:"https://gitlab.com/qemu-project/qemu/-/issues/1990",children:"#1990 - QEMU issue on M3"}),"). If you are\nhitting this problem there is a workaround ",(0,i.jsx)(n.a,{href:"/docs/troubleshooting/troubleshooting-podman-on-macos#on-apple-silicon-the-podman-machine-does-not-start",children:"here"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman/issues/21088#issuecomment-1871502921",children:"there"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"extension-api-improvements",children:"Extension API Improvements"}),"\n",(0,i.jsx)(n.p,{children:"We have spent a lot of time this release adding new extension API to give upcoming extensions\nmore capability and even better integration into \ud83e\uddad Podman Desktop. We have added support\nfor full page webviews, image badges, icons, a navigation API, and API access to more function\nfrom the container engine:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Webview in the UI ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5594",children:"#5594"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add webview API for extensions ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5592",children:"#5592"})]}),"\n",(0,i.jsxs)(n.li,{children:["Allow extensions to list webviews ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5628",children:"#5628"})]}),"\n",(0,i.jsxs)(n.li,{children:["Create container without starting it ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5643",children:"#5643"})]}),"\n",(0,i.jsxs)(n.li,{children:["Expose create/start Pod and replicatePodmanContainer ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5648",children:"#5648"})]}),"\n",(0,i.jsxs)(n.li,{children:["Expose create/list/delete volumes for extensions ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5598",children:"#5598"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add getImageInspect to API ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5596",children:"#5596"})]}),"\n",(0,i.jsxs)(n.li,{children:["New contribution points for icon of image ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5543",children:"#5543"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add BuildOption ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5533",children:"#5533"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add platform parameter to image build method ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5501",children:"#5501"})]}),"\n",(0,i.jsxs)(n.li,{children:["Expose build image method ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5500",children:"#5500"})]}),"\n",(0,i.jsxs)(n.li,{children:["Navigation api ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5558",children:"#5558"})]}),"\n",(0,i.jsxs)(n.li,{children:["Register badges by extensions for image list/details ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5557",children:"#5557"})]}),"\n",(0,i.jsxs)(n.li,{children:["Install extensions from private registries ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5473",children:"#5473"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"experimental-kubernetes-ui",children:"Experimental Kubernetes UI"}),"\n",(0,i.jsx)(n.p,{children:"We have been working the last couple months to expand our support for Kubernetes. This support isn't ready\nto set sail yet, but if you're working with a Kubernetes cluster we'd love to start getting your feedback\non the direction!"}),"\n",(0,i.jsx)(n.p,{children:"To 'break the seal' and try it out, go to Settings > Preferences > Kubernetes, and enable\nthe Experimental option:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Kubernetes Preference",src:s(61174).A+"",width:"1272",height:"684"})}),"\n",(0,i.jsx)(n.p,{children:"This will add three new items to the main navigation, allowing you to view\nDeployments, Services, and Ingress & Routes:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Kubernetes Deployments",src:s(80709).A+"",width:"1970",height:"854"}),"\n",(0,i.jsx)(n.img,{alt:"Kubernetes Services",src:s(82901).A+"",width:"1970",height:"854"}),"\n",(0,i.jsx)(n.img,{alt:"Kubernetes Ingresses &amp; Routes",src:s(10909).A+"",width:"1970",height:"854"})]}),"\n",(0,i.jsx)(n.p,{children:"In this release you can click on deployments and services to view additional details (like the\nSummary, Inspect, and YAML tabs), but not yet for ingresses or routes."}),"\n",(0,i.jsx)(n.p,{children:"We hope things go swimmingly for you, but please open Github issues to let us know what else you'd like to see."}),"\n",(0,i.jsx)(n.h3,{id:"enhanced-builds-pods-list-and-troubleshooting-pages",children:"Enhanced Builds, Pods List, and Troubleshooting Pages"}),"\n",(0,i.jsx)(n.p,{children:"When building an image you can now chose which platform(s) to build the image for:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Build platform",src:s(96213).A+"",width:"1804",height:"1454"})}),"\n",(0,i.jsx)(n.p,{children:"We've upgraded the Pods view to use the same table component as images and volumes. This\nallowing sorting and better column scaling:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pods table",src:s(2198).A+"",width:"1970",height:"758"})}),"\n",(0,i.jsx)(n.p,{children:"Having trouble and want a fresh start? The Troubleshooting page has switched to tabs and there is an\noption to purge your existing install:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Troubleshooting Purge",src:s(54628).A+"",width:"1426",height:"506"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other Notable Enhancements"}),"\n",(0,i.jsx)(n.p,{children:"We added over 40 features this release, here are some of the other highlights:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Pressing esc exits onboarding ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5612",children:"#5612"})]}),"\n",(0,i.jsxs)(n.li,{children:["Quick pick case-insensitive filtering ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5582",children:"#5582"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add UI badge component ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5522",children:"#5522"})]}),"\n",(0,i.jsxs)(n.li,{children:["Extend connection input type in build image ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5499",children:"#5499"})]}),"\n",(0,i.jsxs)(n.li,{children:["Nav sections ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5449",children:"#5449"})]}),"\n",(0,i.jsxs)(n.li,{children:["Improve Authentication Providers page ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5424",children:"#5424"})]}),"\n",(0,i.jsxs)(n.li,{children:["Adding groupContributions logic ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5415",children:"#5415"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add option to select how to open devtools in dev mode ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5274",children:"#5274"})]}),"\n",(0,i.jsxs)(n.li,{children:["Form progress ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5253",children:"#5253"})]}),"\n",(0,i.jsxs)(n.li,{children:["Improved provider cards ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5013",children:"#5013"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable Bug Fixes"}),"\n",(0,i.jsx)(n.p,{children:"We squashed over 25 bugs this release, including the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Copy volume mounted when copying container to pod ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5640",children:"#5640"})]}),"\n",(0,i.jsxs)(n.li,{children:["Adding missing ",(0,i.jsx)(n.code,{children:"Labels"})," property ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5632",children:"#5632"})]}),"\n",(0,i.jsxs)(n.li,{children:["Fix UI not being refreshed if container is only created ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5619",children:"#5619"})]}),"\n",(0,i.jsxs)(n.li,{children:["Quick pick filter removes selection ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5613",children:"#5613"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add missing types for createContainer API ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5504",children:"#5504"})]}),"\n",(0,i.jsxs)(n.li,{children:["Use window.showMessageBox instead of custom modal ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5421",children:"#5421"})]}),"\n",(0,i.jsxs)(n.li,{children:["Add cleanupSupport property ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5309",children:"#5309"})]}),"\n",(0,i.jsxs)(n.li,{children:["Empty screen reset filter by default ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5307",children:"#5307"})]}),"\n",(0,i.jsxs)(n.li,{children:["Do not fetch pre-releases of compose ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5296",children:"#5296"})]}),"\n",(0,i.jsxs)(n.li,{children:["providerinfo badge ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5268",children:"#5268"})]}),"\n",(0,i.jsxs)(n.li,{children:["Don't refresh image list when age updates ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5267",children:"#5267"})]}),"\n",(0,i.jsxs)(n.li,{children:["Rename kubectl extension ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5255",children:"#5255"})]}),"\n",(0,i.jsxs)(n.li,{children:["Try to search kubectl on the user path first ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5248",children:"#5248"})]}),"\n",(0,i.jsxs)(n.li,{children:["Dispose the wsl2 command when unregistering extension ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5246",children:"#5246"})]}),"\n",(0,i.jsxs)(n.li,{children:["Handle event when loading images from archives ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5240",children:"#5240"})]}),"\n",(0,i.jsxs)(n.li,{children:["Edit Podman machine support for MacOS only ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5239",children:"#5239"})]}),"\n",(0,i.jsxs)(n.li,{children:["Improve default contribution action icon ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5236",children:"#5236"})]}),"\n",(0,i.jsxs)(n.li,{children:["Color of primary/secondary buttons should be white ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5232",children:"#5232"})]}),"\n",(0,i.jsxs)(n.li,{children:["Disable notification when updating podman (#5228) ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5229",children:"#5229"})]}),"\n",(0,i.jsxs)(n.li,{children:["Allow table columns to specify overflow ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5222",children:"#5222"})]}),"\n",(0,i.jsxs)(n.li,{children:["ProgressImpl properly middleware tasks to set the proper result status ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4342",children:"#4342"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsx)(n.p,{children:"Along with this new version of \ud83e\uddad Podman Desktop the documentation has had the following improvements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Update compose blog post link ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5547",children:"#5547"})]}),"\n",(0,i.jsxs)(n.li,{children:["Message when the app terminates because another instance exists ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5348",children:"#5348"})]}),"\n",(0,i.jsxs)(n.li,{children:["Document onboarding id rules ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5211",children:"#5211"})]}),"\n",(0,i.jsxs)(n.li,{children:["Multi-platform extension ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5205",children:"#5205"})]}),"\n",(0,i.jsxs)(n.li,{children:["Blog post on Compose guestbook application ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5033",children:"#5033"})]}),"\n",(0,i.jsxs)(n.li,{children:["Refactored ",(0,i.jsx)(n.em,{children:"setting up container registries"})," ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4965",children:"#4965"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone (yes, that means you, Anders!) who helped make \ud83e\uddad Podman Desktop even better. In this release we received pull requests from the following people:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/afbjorklund",children:"Anders Bj\xf6rklund"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5638",children:"docs: minikube extension is now featured"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5637",children:"docs: kubernetes pushing image to minikube"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5636",children:"fix: small typo of click as clik"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/5457",children:"Add more docs for Lima customization, with YAML and GUI"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4488",children:"docs: allow image push to lima kubernetes cluster"}),", and ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/4487",children:"feat: allow image push to lima kubernetes cluster"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"final-notes",children:"Final notes"}),"\n",(0,i.jsx)(n.h3,{id:"fixed-issues",children:"Fixed Issues"}),"\n",(0,i.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.7.0",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"where-to-download",children:"Where to Download"}),"\n",(0,i.jsxs)(n.p,{children:["Get the latest release from the ",(0,i.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},96213:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/build-platform-c24df3e69fb29550964db933ecdca261.png"},80709:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/kube-deployments-a6ba7f3a0537ceb147a35775ff6f4c6a.png"},10909:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/kube-ingress-routes-3cb6bfa25da6b06744343d292119bc59.png"},61174:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/kube-preference-766b725dec0e77359df05fd922f96c32.png"},82901:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/kube-services-bbabeb21d86f6fb2f814575b8f84c766.png"},2198:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/pods-table-9c545aec5f7464affb042faddd7db2a8.png"},54628:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/purge-55daa6ec89c31254f067c4362300ca7e.png"},37151:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/renovations-21ad5798164b1bb1beceb19646b2a762.png"},43023:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var t=s(63696);const i={},o=t.createContext(i);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}},85983:e=>{e.exports=JSON.parse('{"permalink":"/blog/podman-desktop-release-1.7","source":"@site/blog/2024-01-24-release-1.7.md","title":"Podman Desktop 1.7 Release","description":"Podman Desktop 1.7 has been released!","date":"2024-01-24T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"kubernetes","permalink":"/blog/tags/kubernetes"},{"inline":true,"label":"openshift","permalink":"/blog/tags/openshift"},{"inline":true,"label":"onboarding","permalink":"/blog/tags/onboarding"},{"inline":true,"label":"extensions","permalink":"/blog/tags/extensions"},{"inline":true,"label":"settings","permalink":"/blog/tags/settings"}],"readingTime":5.185,"hasTruncateMarker":false,"authors":[{"name":"Tim deBoer","title":"Architect","url":"https://github.com/deboer-tim","imageURL":"https://github.com/deboer-tim.png","key":"deboer","page":null}],"frontMatter":{"title":"Podman Desktop 1.7 Release","description":"Podman Desktop 1.7 has been released!","slug":"podman-desktop-release-1.7","authors":"deboer","tags":["podman-desktop","release","kubernetes","openshift","onboarding","extensions","settings"],"hide_table_of_contents":false,"image":"/img/blog/podman-desktop-release-1.7/renovations.png"},"unlisted":false,"prevItem":{"title":"Unlock WebAssembly on macOS & Windows","permalink":"/blog/wasm-workloads-on-macos-and-windows-with-podman"},"nextItem":{"title":"Getting started with Compose on Podman Desktop","permalink":"/blog/getting-started-with-compose"}}')}}]);