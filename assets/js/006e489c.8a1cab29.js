"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23512],{378:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var t=s(57624),o=s(62540),i=s(43023),a=s(64566),l=s.n(a);const r={title:"Release Notes - Podman Desktop 0.13",description:"Podman Desktop 0.13 has been released!",slug:"podman-desktop-release-0.13",authors:["deboer"],tags:["podman-desktop","release","kubernetes","compose"],hide_table_of_contents:!1},d=void 0,h={authorsImageUrls:[void 0]},c=[{value:"Release details",id:"release-details",level:2},{value:"Update to Podman v4.4.4",id:"update-to-podman-v444",level:3},{value:"Compose support",id:"compose-support",level:3},{value:"Extensions",id:"extensions",level:3},{value:"UI and UX improvements",id:"ui-and-ux-improvements",level:3},{value:"Welcome page #1726",id:"welcome-page-1726",level:4},{value:"New Task Manager #1724",id:"new-task-manager-1724",level:4},{value:"Updated Resources Settings #1582",id:"updated-resources-settings-1582",level:4},{value:"Update Alerts #1827",id:"update-alerts-1827",level:4},{value:"Prune buttons #1481, #1482, #1484",id:"prune-buttons-1481-1482-1484",level:4},{value:"Other notable enhancements",id:"other-notable-enhancements",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Notable bug fixes",id:"notable-bug-fixes",level:2},{value:"Community thank you",id:"community-thank-you",level:2},{value:"Final notes",id:"final-notes",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Icon:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This release note covers Podman Desktop 0.13 release changes."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Podman Version"}),": Podman 4.4.4 now included in Windows and Mac installers."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Compose"}),": Support for installing Docker Compose."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Extensions"}),": Improved extension support for Podman Desktop with additional capabilities."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"UX and UI Improvements"}),": Welcome page, task manager, resources, and update alerts."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Podman Desktop 0.13 is now available. ",(0,o.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Podman-desktop-0-13-hero",src:s(43894).A+"",width:"1852",height:"1323"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"release-details",children:"Release details"}),"\n",(0,o.jsx)(n.h3,{id:"update-to-podman-v444",children:"Update to Podman v4.4.4"}),"\n",(0,o.jsxs)(n.p,{children:["Podman Desktop 0.13 embeds ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman/releases/tag/v4.4.4",children:"Podman 4.4.4"})," in\nWindows and macOS installers ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1456",children:"#1456"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"compose-support",children:"Compose support"}),"\n",(0,o.jsxs)(n.p,{children:["You can install Docker Compose from the Podman Desktop UI ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1578",children:"#1578"}),". This will allow you use Compose workflows using Podman."]}),"\n",(0,o.jsx)(n.h3,{id:"extensions",children:"Extensions"}),"\n",(0,o.jsx)(n.p,{children:"To make it easier to extend Podman Desktop we have:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Published the ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/@podman-desktop/api",children:"Podman Desktop Extension API"})," to npmjs ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1727",children:"#1727"})]}),"\n",(0,o.jsxs)(n.li,{children:["Documented ",(0,o.jsx)(n.a,{href:"https://podman-desktop.io/docs/extensions",children:"how to create, publish, and install your own extensions"})]}),"\n",(0,o.jsxs)(n.li,{children:["Expanded the API for ",(0,o.jsx)(n.code,{children:"QuickPickInput"})," ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1839",children:"#1839"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"ui-and-ux-improvements",children:"UI and UX improvements"}),"\n",(0,o.jsxs)(n.h4,{id:"welcome-page-1726",children:["Welcome page ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1726",children:"#1726"})]}),"\n",(0,o.jsx)(n.p,{children:"The first time every user starts Podman Desktop, they will see a welcome page:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/19958075/225682776-e016ba31-5bb9-41d5-87ed-f93caeb3fb84.png",alt:"welcome-page"})}),"\n",(0,o.jsx)(n.p,{children:"Note that the Welcome page will only appear the first time you run Podman Desktop 0.13.0, and none of your settings or assets in Podman Desktop will be affected by it.\nOver time, this page will be expanded to help with initial setup and configuration."}),"\n",(0,o.jsxs)(n.h4,{id:"new-task-manager-1724",children:["New Task Manager ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1724",children:"#1724"})]}),"\n",(0,o.jsxs)(n.p,{children:["A new Task Manager has been added to the status bar to see the progress (or return to) long running tasks. To start with, building images ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1725",children:"#1725"})," and Podman machine ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1742",children:"#1742"})," are using the task manager."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"task-manager",src:s(70260).A+"",width:"2082",height:"1198"})}),"\n",(0,o.jsxs)(n.h4,{id:"updated-resources-settings-1582",children:["Updated Resources Settings ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1582",children:"#1582"})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]})," page has been updated with a new design, making it easier to see and control your providers from a single place."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/49404737/221908815-595715fe-4c95-4087-89e0-45e5544ed5c9.gif",alt:"resources"})}),"\n",(0,o.jsx)(n.p,{children:"The other settings pages have been updated for consistency with this new design."}),"\n",(0,o.jsxs)(n.h4,{id:"update-alerts-1827",children:["Update Alerts ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1827",children:"#1827"})]}),"\n",(0,o.jsx)(n.p,{children:"A new alert button will appear in the status bar when future updates are available."}),"\n",(0,o.jsx)(l(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/227596136-c6123d5c-d9ae-4fb3-a569-0cfaaeebf09c.mp4",width:"100%",height:"100%"}),"\n",(0,o.jsxs)(n.h4,{id:"prune-buttons-1481-1482-1484",children:["Prune buttons ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1481",children:"#1481"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1482",children:"#1482"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1484",children:"#1484"})]}),"\n",(0,o.jsxs)(n.p,{children:["We've added buttons to prune unused volumes ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1481",children:"#1481"}),", images ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1482",children:"#1482"})," and pods ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1484",children:"#1484"}),"."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"prune-image",src:s(34937).A+"",width:"2074",height:"570"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other notable enhancements"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Kubernetes pods are now shown in the Pods view ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1312",children:"#1312"})]}),"\n",(0,o.jsxs)(n.li,{children:["Easy button to fix Docker compatibility mode on macOS ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1697",children:"#1697"})]}),"\n",(0,o.jsxs)(n.li,{children:["Display extension icons ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1058",children:"#1058"})]}),"\n",(0,o.jsxs)(n.li,{children:["API to cancel long running tasks ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1777",children:"#1777"})]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,o.jsx)(n.p,{children:"The documentation has new content:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://podman-desktop.io/docs/extensions",children:"How to create, publish, and install your own Podman Desktop extensions"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://podman-desktop.io/docs/compose/podman-compose",children:"Using Compose"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://podman-desktop.io/docs/kind",children:"Restarting Kind"})}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable bug fixes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Periodically check and refresh Podman connection on Windows and Mac ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1662",children:"#1662"})]}),"\n",(0,o.jsxs)(n.li,{children:["Fix inconsistent Log view behaviour ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1710",children:"#1710"})]}),"\n",(0,o.jsxs)(n.li,{children:["Don't create route for regular Kubernetes clusters ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1707",children:"#1707"})]}),"\n",(0,o.jsxs)(n.li,{children:["Fix copy button on empty screen ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1804",children:"#1804"})]}),"\n",(0,o.jsxs)(n.li,{children:["Register extension tray items correctly ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1778",children:"#1778"})," and handle updates ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1800",children:"#1800"})]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"community-thank-you",children:"Community thank you"}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop 0.13 even better:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/Tony-Sol",children:(0,o.jsx)(n.code,{children:"Tony Soloveyv"})})," in ",(0,o.jsxs)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1605",children:["#1605 - Fix directories inconsistency in ",(0,o.jsx)(n.code,{children:"~/.local/share/"})]})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/RobotSail",children:(0,o.jsx)(n.code,{children:"Oleg"})})," in ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1567",children:"#1567 - Check for Flatpak when calling command from exec"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/cblecker",children:(0,o.jsx)(n.code,{children:"Christoph Blecker"})})," in ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1556",children:"#1556 - Fix: Hide dock icon on macOS if starting minimized"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/pwright",children:(0,o.jsx)(n.code,{children:"Paul Wright"})})," in ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1604",children:"#1604 - Docs: correct syntax of kind doc"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/dgolovin",children:(0,o.jsx)(n.code,{children:"Denis Golovin"})})," in ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1790",children:"#1790 - Feat: add EventEmitter class to extension API"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/cfergeau",children:(0,o.jsx)(n.code,{children:"Christophe Fergeau"})})," in ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1642",children:'#1642 - Fix: Pod list "an pod" typing error'})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"final-notes",children:"Final notes"}),"\n",(0,o.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A0.13.0",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Get the latest release from the ",(0,o.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},43894:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/podman-desktop-release-0.13-a15251500e13ad05b8a7b404ab301f34.png"},34937:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/prune-image-96f9366ae264c822b47bfc350d987451.png"},70260:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/task-manager-2c9725a8db209c3607e83a24d9ea1582.png"},57624:e=>{e.exports=JSON.parse('{"permalink":"/blog/podman-desktop-release-0.13","source":"@site/blog/2023-03-29-release-0.13.md","title":"Release Notes - Podman Desktop 0.13","description":"Podman Desktop 0.13 has been released!","date":"2023-03-29T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"kubernetes","permalink":"/blog/tags/kubernetes"},{"inline":true,"label":"compose","permalink":"/blog/tags/compose"}],"readingTime":3.16,"hasTruncateMarker":true,"authors":[{"name":"Tim deBoer","title":"Architect","url":"https://github.com/deboer-tim","imageURL":"https://github.com/deboer-tim.png","key":"deboer","page":null}],"frontMatter":{"title":"Release Notes - Podman Desktop 0.13","description":"Podman Desktop 0.13 has been released!","slug":"podman-desktop-release-0.13","authors":["deboer"],"tags":["podman-desktop","release","kubernetes","compose"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Release Notes - Podman Desktop 0.14","permalink":"/blog/podman-desktop-release-0.14"},"nextItem":{"title":"5 things to know about Podman Desktop for a Docker user","permalink":"/blog/5-things-to-know-for-a-docker-user"}}')}}]);