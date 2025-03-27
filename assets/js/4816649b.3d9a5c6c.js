"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54329],{58926:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var t=s(73433),i=s(62540),o=s(43023),a=s(64566),r=s.n(a);const l={title:"Release Notes - Podman Desktop 0.14",description:"Podman Desktop 0.14 has been released!",slug:"podman-desktop-release-0.14",authors:["deboer"],tags:["podman-desktop","release","kubernetes","kind"],hide_table_of_contents:!1},d=void 0,h={authorsImageUrls:[void 0]},c=[{value:"Release details",id:"release-details",level:2},{value:"Kind Installation",id:"kind-installation",level:3},{value:"Manage Kind Clusters",id:"manage-kind-clusters",level:3},{value:"Using Kind",id:"using-kind",level:3},{value:"Kind Ingress",id:"kind-ingress",level:3},{value:"UI and UX improvements",id:"ui-and-ux-improvements",level:3},{value:"Updated Preferences",id:"updated-preferences",level:4},{value:"Telemetry Prompt",id:"telemetry-prompt",level:4},{value:"Other notable enhancements",id:"other-notable-enhancements",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Notable bug fixes",id:"notable-bug-fixes",level:2},{value:"Final notes",id:"final-notes",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components},{Icon:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Icon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Podman Desktop 0.14 - Our Kind-est release yet!"}),"\n",(0,i.jsx)(n.p,{children:"We have been working on a Kind extension for a while now, and decided it is time to promote it\ninto a release just in time for KubeCon and CloudNativeCon Europe!"}),"\n",(0,i.jsx)(n.p,{children:"We're especially excited about releasing Kind because it finally shows the full purpose\nof Podman Desktop: not just local container engines, but Kubernetes too. More importantly,\nproviding tools that allow you to manage both environments and seamlessly move between them."}),"\n",(0,i.jsx)(n.p,{children:"Some of these features were available in development mode over the last few releases,\nbut since they are now in the release build, we will do a full roundup and talk about\nall the Kind features."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kind Installation"}),": Install Kind from the status bar"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Manage Kind Clusters"}),": Create and manage Kind clusters from ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Using Kind"}),": Deploying YAML and sharing images to a cluster"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Kind Ingress"}),": Install a Contour ingress controller"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"UX and UI Improvements"}),": Updated preferences and telemetry prompt"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Podman Desktop 0.14 is now available. ",(0,i.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Podman-desktop-0-14-hero",src:s(23674).A+"",width:"1140",height:"1097"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"release-details",children:"Release details"}),"\n",(0,i.jsx)(n.h3,{id:"kind-installation",children:"Kind Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Get Kind up and running in seconds! The Kind extension is now bundled as part of Podman Desktop\n",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/1421",children:"1421"}),"\nand allows you to easily ",(0,i.jsx)(n.a,{href:"/docs/kind/installing",children:"install Kind directly from the status bar"}),"\n",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/1257",children:"1257"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The installed ",(0,i.jsx)(n.code,{children:"kind"})," CLI is available from the system shell ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/1516",children:"1516"}),",\nallowing you to open a terminal window to ",(0,i.jsx)(n.code,{children:"kind get clusters"})," or work with other tools."]}),"\n",(0,i.jsx)(n.h3,{id:"manage-kind-clusters",children:"Manage Kind Clusters"}),"\n",(0,i.jsxs)(n.p,{children:["Once Kind is installed (or if you already had it), you can manage your clusters in ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Resources"]}),".\nFrom here you can ",(0,i.jsx)(n.a,{href:"/docs/kind/creating-a-kind-cluster",children:"create Kind clusters"}),",\nstart/stop ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/1953",children:"1953"}),"\nor delete ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/1977",children:"1977"})," them."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kind-clusters",src:s(89e3).A+"",width:"1484",height:"364"})}),"\n",(0,i.jsxs)(n.p,{children:["The Kind control plane runs as a container. You will see this container\nin the ",(0,i.jsx)(n.strong,{children:"Container"})," list and can also start or stop it from there."]}),"\n",(0,i.jsx)(n.h3,{id:"using-kind",children:"Using Kind"}),"\n",(0,i.jsxs)(n.p,{children:["Now that you have Kind installed and running, what can you do with it?\nIf you like terminals, you can always open one up and use the Kind CLI to\n",(0,i.jsx)(n.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start/#interacting-with-your-cluster",children:"interact with your cluster"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Within Podman Desktop we have started with two ways to interact with the cluster.\nThe first is the ability to play local YAML files on your Kind (or any other Kubernetes!) cluster ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/1261",children:"1261"}),". This allows you to take existing Kubernetes YAML definitions -\nyour deployments, services, or other objects - and deploy it to the cluster."]}),"\n",(0,i.jsx)(r(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/231812563-ece0a56a-b347-48f8-a3a7-400eb9449037.mp4",width:"100%",height:"100%"}),"\n",(0,i.jsxs)(n.p,{children:["As you deploy pods, they will automatically appear in the list of ",(0,i.jsx)(n.strong,{children:"Pods"})," ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/1263",children:"1263"}),", allowing you to start, stop, and interact them just like pods running on Podman."]}),"\n",(0,i.jsxs)(n.p,{children:["One of the most common uses is to deploy a container that you have been running on Podman, and this will fail\nif the image is not available in Kind. To solve this we have made it easy to push images from\nPodman to Kind ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/1448",children:"1448"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"push-image-kind",src:s(73801).A+"",width:"1054",height:"152"})}),"\n",(0,i.jsx)(n.h3,{id:"kind-ingress",children:"Kind Ingress"}),"\n",(0,i.jsxs)(n.p,{children:["If you deploy a pod to Kind, you are also going to want to reach it! To do this you will need to install a load balancer or\ningress controller so that the pod is accessible from outside the cluster. We made it easy to install the Contour ingress\ncontroller while creating a Kind cluster ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/1675",children:"1675"}),",\nso if you created your cluster with Podman Desktop it is already there!"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"kind-ingress",src:s(13516).A+"",width:"1328",height:"1238"})}),"\n",(0,i.jsx)(n.p,{children:"We have several other Kind and Kubernetes features planned to expand the supported scenarios, but hopefully this\nmakes it easy to get started with Kind and shows where we're headed. As always, feedback is appreciated!"}),"\n",(0,i.jsx)(n.h3,{id:"ui-and-ux-improvements",children:"UI and UX improvements"}),"\n",(0,i.jsx)(n.h4,{id:"updated-preferences",children:"Updated Preferences"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(t,{icon:"fa-solid fa-cog",size:"lg"})," Settings > Preferences"]})," page has been updated with a new design ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1913",children:"1913"}),",\nmaking it easier to see and change preferences. Changes are live, no more Update button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/49404737/229498507-e754b55c-dcbd-486d-9ee3-a1fe3bed7271.gif",alt:"preferences"})}),"\n",(0,i.jsx)(n.h4,{id:"telemetry-prompt",children:"Telemetry Prompt"}),"\n",(0,i.jsxs)(n.p,{children:["The prompt to enable or disable telemetry has been moved from its own dialog into the ",(0,i.jsx)(n.strong,{children:"Welcome"})," screen.\n",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/1927",children:"1927"}),"\nThis is more usable, one less prompt, and solves a window-layering issue for some users!"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/19958075/229577331-365a9a01-0426-4482-a95d-f5dfe39af90a.png",alt:"telemetry prompt"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"other-notable-enhancements",children:"Other notable enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Extension support for opening an external URL ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2028",children:"2028"})," and\naccessing the clipboard ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2023",children:"2023"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"documentation",children:"Documentation"}),"\n",(0,i.jsxs)(n.p,{children:["Naturally, we have a section in the documentation just for ",(0,i.jsx)(n.a,{href:"https://podman-desktop.io/docs/kind",children:"Kind"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable bug fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Avoid a dialog box if unable to check for updates ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2062",children:"2062"})]}),"\n",(0,i.jsxs)(n.li,{children:["Unable to get to the Dashboard if Kind (or Kubernetes) cluster was not running ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues/2052",children:"2052"})]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"final-notes",children:"Final notes"}),"\n",(0,i.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A0.14.0",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Get the latest release from the ",(0,i.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,i.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},89e3:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/kind-clusters-580828529dfdd23680262d7ee586823d.png"},13516:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/kind-ingress-ab2dd4054a7ce838c758ddc0d98cc5cb.png"},23674:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/podman-desktop-release-0.14-5d7adb6814b7191ab2623cdd431642f3.png"},73801:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/push-image-kind-ea3f19b80ab3ce13cdfadbbb63762780.png"},73433:e=>{e.exports=JSON.parse('{"permalink":"/blog/podman-desktop-release-0.14","source":"@site/blog/2023-04-14-release-0.14.md","title":"Release Notes - Podman Desktop 0.14","description":"Podman Desktop 0.14 has been released!","date":"2023-04-14T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"kubernetes","permalink":"/blog/tags/kubernetes"},{"inline":true,"label":"kind","permalink":"/blog/tags/kind"}],"readingTime":4.03,"hasTruncateMarker":true,"authors":[{"name":"Tim deBoer","title":"Architect","url":"https://github.com/deboer-tim","imageURL":"https://github.com/deboer-tim.png","key":"deboer","page":null}],"frontMatter":{"title":"Release Notes - Podman Desktop 0.14","description":"Podman Desktop 0.14 has been released!","slug":"podman-desktop-release-0.14","authors":["deboer"],"tags":["podman-desktop","release","kubernetes","kind"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Setting up and running a Kubernetes cluster locally with Podman Desktop","permalink":"/blog/running-a-local-kubernetes-cluster-with-podman-desktop"},"nextItem":{"title":"Release Notes - Podman Desktop 0.13","permalink":"/blog/podman-desktop-release-0.13"}}')}}]);