"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26693],{29020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var s=t(70951),i=t(62540),o=t(43023);const a={title:"Podman Desktop 1.0 Release",description:"Podman Desktop 1.0 has been released!",slug:"podman-desktop-release-1.0",authors:["deboer"],tags:["podman-desktop","release","kubernetes","kind","openshift"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.0.jpg"},r=void 0,h={authorsImageUrls:[void 0]},l=[{value:"Release Details",id:"release-details",level:2},{value:"Highlighting Featured Extensions",id:"highlighting-featured-extensions",level:3},{value:"Featured Extensions",id:"featured-extensions",level:3},{value:"Red Hat OpenShift Local",id:"red-hat-openshift-local",level:4},{value:"Developer Sandbox for Red Hat OpenShift",id:"developer-sandbox-for-red-hat-openshift",level:4},{value:"Podman Machine as Root",id:"podman-machine-as-root",level:3},{value:"Other UI and UX Improvements",id:"other-ui-and-ux-improvements",level:3},{value:"Prompt to Open External Website",id:"prompt-to-open-external-website",level:4},{value:"Editable Numeric Preferences",id:"editable-numeric-preferences",level:4},{value:"Navigation tooltips",id:"navigation-tooltips",level:4},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final notes",id:"final-notes",level:2}];function d(e){const n={a:"a",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Icon:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Podman Desktop 1.0 Release! \ud83c\udf89"}),"\n",(0,i.jsx)(n.p,{children:"We still have many things planned, but with a little polish and a few more bug fixes we\nfelt we've reached a level of maturity and it is now time to declare our 1.0 release."}),"\n",(0,i.jsx)(n.p,{children:"Thank you to everyone who has been with us on this journey so far! Please keep the\nfeedback coming!"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Highlighting Featured Extensions"}),": Easily find and install new extensions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Featured Extensions"}),": Two new extensions supporting OpenShift."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Podman Machine as Root"}),": Ability to run a Podman machine as root."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"UX and UI Improvements"}),": Opening external websites, editing numbers, and tooltips."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Podman Desktop 1.0 is now available. ",(0,i.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Podman-desktop-1-0-hero",src:t(36876).A+"",width:"1620",height:"1080"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,i.jsx)(n.h3,{id:"highlighting-featured-extensions",children:"Highlighting Featured Extensions"}),"\n",(0,i.jsx)(n.p,{children:"A critical part of our vision for Podman Desktop is the ability to install extensions to\nsupport additional container engines, Kubernetes providers, or other tools. However, it\nhas not been easy to discover new extensions."}),"\n",(0,i.jsxs)(n.p,{children:["With 1.0 we show a list of featured extensions in the ",(0,i.jsx)(n.strong,{children:"Welcome"}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2354",children:"#2354"}),", the ",(0,i.jsx)(n.strong,{children:"Dashboard"})," and in\n",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(s,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Extensions"]}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2355",children:"#2355"}),". Check out the new\nextensions for ",(0,i.jsx)(n.strong,{children:"Red Hat OpenShift Local"})," and the ",(0,i.jsx)(n.strong,{children:"Developer Sandbox for Red Hat OpenShift"}),"!"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Featured extensions",src:t(82591).A+"",width:"1926",height:"474"})}),"\n",(0,i.jsx)(n.h3,{id:"featured-extensions",children:"Featured Extensions"}),"\n",(0,i.jsx)(n.p,{children:"Speaking of extensions, let's take a minute to turn the spotlight on these two!"}),"\n",(0,i.jsxs)(n.p,{children:["Have another idea for extending Podman Desktop? We would love to hear from you or see\nwhat you can create with the ",(0,i.jsx)(n.a,{href:"/docs/extensions",children:"Extension documentation"}),",\nand feature your extension here."]}),"\n",(0,i.jsx)(n.h4,{id:"red-hat-openshift-local",children:"Red Hat OpenShift Local"}),"\n",(0,i.jsx)(n.p,{children:"OpenShift Local is a fully-featured single-node OpenShift cluster designed to run on your local computer.\nWith this extension you can install, start/stop, and deploy pods or YAML to OpenShift Local,\nallowing you to test your applications on a full OpenShift environment, ensuring a consistent\nexperience between development, test, and production."}),"\n",(0,i.jsx)(n.p,{children:"The recent addition of the MicroShift preset provides a lighter, optimized option that\nstarts faster and uses less resources for deployments that still want OpenShift compatibility\nwithout the full set of OpenShift services."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OpenShift Local",src:t(28700).A+"",width:"1496",height:"350"})}),"\n",(0,i.jsx)(n.h4,{id:"developer-sandbox-for-red-hat-openshift",children:"Developer Sandbox for Red Hat OpenShift"}),"\n",(0,i.jsx)(n.p,{children:"The OpenShift Developer Sandbox is a free, cloud-based OpenShift environment that allows developers to\ncreate, build, and deploy applications to OpenShift for 30 days. With this extension you can sign up\nand easily deploy pods or YAML to a hosted OpenShift environment without a local installation or\nleaving Podman Desktop."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Developer Sandbox",src:t(451).A+"",width:"1484",height:"1016"})}),"\n",(0,i.jsx)(n.h3,{id:"podman-machine-as-root",children:"Podman Machine as Root"}),"\n",(0,i.jsxs)(n.p,{children:["When creating a Podman machine you can now decide to run as root ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2427",children:"#2427"}),". This is a prerequisite for some scenarios, such as running Kind on Windows."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Podman machine as root",src:t(84678).A+"",width:"350",height:"122"})}),"\n",(0,i.jsx)(n.h3,{id:"other-ui-and-ux-improvements",children:"Other UI and UX Improvements"}),"\n",(0,i.jsx)(n.h4,{id:"prompt-to-open-external-website",children:"Prompt to Open External Website"}),"\n",(0,i.jsxs)(n.p,{children:["In the previous release links to external websites were blocked due to the security risk.\nIn 1.0 you can click to see the URL and have the option of opening or copying it\n",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2414",children:"#2414"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"External link dialog",src:t(9844).A+"",width:"1102",height:"434"})}),"\n",(0,i.jsx)(n.h4,{id:"editable-numeric-preferences",children:"Editable Numeric Preferences"}),"\n",(0,i.jsxs)(n.p,{children:["Tired of clicking +, +, +? Us too. Numeric preferences are now editable so\nyou can directly enter the value you want\n",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2368",children:"#2368"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Editing numbers",src:t(19136).A+"",width:"1334",height:"192"})}),"\n",(0,i.jsx)(n.h4,{id:"navigation-tooltips",children:"Navigation tooltips"}),"\n",(0,i.jsxs)(n.p,{children:["We like our new navigation bar, but the tooltips were slow to appear. This made it harder for new\nusers to discover the pages and for power users to see the container/pod/image counts. The\ntooltips are now a little nicer and appear immediately\n",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2286",children:"#2286"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Navigation tooltips",src:t(6044).A+"",width:"734",height:"192"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other Notable Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If you use a non-default Podman machine you are now prompted to make it the default, so\nthat command line tools will use the same machine ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2205",children:"#2205"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Extensions can now be installed without requiring a running local container engine\n",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2273",children:"#2273"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When extensions fail to load there is a new state (failed!) and an error message\nto help you fix or report the problem ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2424",children:"#2424"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The showInputBox API has support for Markdown ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2418",children:"#2418"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable Bug Fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Fixed shared status when using multiple Podman 4.5 machines ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2441",children:"#2441"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed hang on exit when telemetry is unreachable ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2431",children:"#2431"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Reduced initial Podman REST API calls to improve performance ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2419",children:"#2419"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Play Kubernetes YAML"})," now honors the namespace ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2509",children:"#2509"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Container"})," list was not remembering expand/collapsed status ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2491",children:"#2491"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Clear previous error when installing Docker extension ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2469",children:"#2469"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Ensure correct path with running Kind CLI ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2455",children:"#2455"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Use IPv4 over IPv6 by default ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2398",children:"#2398"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["When changing the Kubernetes pod name, change the app name to match ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2389",children:"#2389"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Fixed incorrect pod status in ",(0,i.jsx)(n.strong,{children:"Containers"})," view ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2387",children:"#2387"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Dashboard"})," wasn't correctly refreshing Podman status ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2359",children:"#2359"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop even better. In this final\nsprint we received pull requests from the following people:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/TahaAttari",children:"Taha Attari"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2470",children:"#2470 - Update docker command in importing-saved-containers.md"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/n1hility",children:"Jason Greene"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2431",children:"#2431 - Fix hang on exit when telemetry endpoint is unreachable"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/afbjorklund",children:"Anders Bj\xf6rklund"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2571",children:"#2571 - Fix the location of the lima podman socket"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2572",children:"#2572 - Fix the state of the lima container provider"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/tuckerrc",children:"Tucker Chapman"})," in ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2567",children:"#2567 - Add example image name in placeholder"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"There are now a total of 54 people (and two bots!) who have contributed PRs to Podman Desktop, and we'd\nlike to extend an extra thanks to all of those outside of the immediate development team who contributed\nto get us here:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/afbjorklund",children:"afbjorklund"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/alv67",children:"alv67"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/anjannath",children:"anjannath"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/ankanroy-code",children:"ankanroy-code"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/arixmkii",children:"arixmkii"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/cblecker",children:"cblecker"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/cfergeau",children:"cfergeau"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/chevdor",children:"chevdor"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/chrisjsimpson",children:"chrisjsimpson"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/cu8code",children:"cu8code"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/doehyunbaek",children:"doehyunbaek"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/dylanmtaylor",children:"dylanmtaylor"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/eidottermihi",children:"eidottermihi"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/elervik",children:"elervik"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/emmanuelbernard",children:"emmanuelbernard"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/evanfpearson",children:"evanfpearson"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/gorkem",children:"gorkem"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/idjohnson",children:"idjohnson"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/imphil",children:"imphil"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/iongion",children:"iongion"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/jlosito",children:"jlosito"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/KevinAtSesam",children:"KevinAtSesam"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/lsm5",children:"lsm5"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/Mitch9378",children:"Mitch9378"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/n1hility",children:"n1hility"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/osslate",children:"osslate"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/PatentLobster",children:"PatentLobster"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/pwright",children:"pwright"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/rdwz",children:"rdwz"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/redhatrises",children:"redhatrises"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/rhatdan",children:"rhatdan"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/RobotSail",children:"RobotSail"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/rohit-rambade",children:"rohit-rambade"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/rsvoboda",children:"rsvoboda"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/sfrunza13",children:"sfrunza13"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/shemanaev",children:"shemanaev"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/sstosh",children:"sstosh"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/stickster",children:"stickster"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/TahaAttari",children:"TahaAttari"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/ths83",children:"ths83"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/Tony-Sol",children:"Tony-Sol"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/tuckerrc",children:"tuckerrc"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/ucomesdag",children:"ucomesdag"}),",\n",(0,i.jsx)(n.a,{href:"https://github.com/xbabalov",children:"xbabalov"}),",\nzezo2019."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"final-notes",children:"Final notes"}),"\n",(0,i.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.0.0",children:"here"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.0.1",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Get the latest release from the ",(0,i.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},19136:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/edit-number-8da457a123eb3cd6afc3dca7eda00870.png"},9844:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/external-link-d70735d4fe675915dd25761daf1f1684.png"},82591:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/featured-extensions-52dff6ccab42c42fd50f37bdf870f19f.png"},6044:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/nav-tooltips-000f080b595ddbdd177b7004f23aea5b.png"},28700:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/openshift-local-39a086441b856524414c7a8d9370ce14.png"},36876:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-desktop-release-1.0-b1e0008ec8a98fcc5628fa05b667d802.jpg"},84678:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-root-afa83c0f605f6db26dc237d45ccdbe94.png"},451:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/sandbox-1957747367cc8134b7a178347a952886.png"},43023:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(63696);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}},70951:e=>{e.exports=JSON.parse('{"permalink":"/blog/podman-desktop-release-1.0","source":"@site/blog/2023-05-17-release-1.0.md","title":"Podman Desktop 1.0 Release","description":"Podman Desktop 1.0 has been released!","date":"2023-05-17T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"kubernetes","permalink":"/blog/tags/kubernetes"},{"inline":true,"label":"kind","permalink":"/blog/tags/kind"},{"inline":true,"label":"openshift","permalink":"/blog/tags/openshift"}],"readingTime":5,"hasTruncateMarker":true,"authors":[{"name":"Tim deBoer","title":"Architect","url":"https://github.com/deboer-tim","imageURL":"https://github.com/deboer-tim.png","key":"deboer","page":null}],"frontMatter":{"title":"Podman Desktop 1.0 Release","description":"Podman Desktop 1.0 has been released!","slug":"podman-desktop-release-1.0","authors":["deboer"],"tags":["podman-desktop","release","kubernetes","kind","openshift"],"hide_table_of_contents":false,"image":"/img/blog/podman-desktop-release-1.0.jpg"},"unlisted":false,"prevItem":{"title":"Podman Desktop 1.1 Release","permalink":"/blog/podman-desktop-release-1.1"},"nextItem":{"title":"Release Notes - Podman Desktop 0.15","permalink":"/blog/podman-desktop-release-0.15"}}')}}]);