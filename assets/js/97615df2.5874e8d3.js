"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65331],{34969:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var s=t(963),o=t(62540),i=t(43023),r=t(64566),a=t.n(r);const l={title:"Podman Desktop 1.2 Release",description:"Podman Desktop 1.2 has been released!",slug:"podman-desktop-release-1.2",authors:["cdrage"],tags:["podman-desktop","release","kubernetes","openshift"],hide_table_of_contents:!1,image:"/img/blog/podman-desktop-release-1.2.webp"},d=void 0,h={authorsImageUrls:[void 0]},c=[{value:"Release Details",id:"release-details",level:2},{value:"Added start/stop/delete/restart buttons for Compose",id:"added-startstopdeleterestart-buttons-for-compose",level:3},{value:"Kubernetes context on the status bar",id:"kubernetes-context-on-the-status-bar",level:3},{value:"Rename images",id:"rename-images",level:3},{value:"Troubleshooting page",id:"troubleshooting-page",level:3},{value:"Protocol handler support",id:"protocol-handler-support",level:3},{value:"Other Notable Features",id:"other-notable-features",level:2},{value:"Documentation Updates",id:"documentation-updates",level:2},{value:"Notable Bug Fixes",id:"notable-bug-fixes",level:2},{value:"Community Thank You",id:"community-thank-you",level:2},{value:"Final notes",id:"final-notes",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Podman Desktop 1.2 Release! \ud83c\udf89"}),"\n",(0,o.jsx)(n.p,{children:"We're excited to announce the release of Podman Desktop version 1.2.0! This release includes many new features (Kubernetes, Compose and extension support!), bug fixes, and improvements to enhance your container management experience. Here's a summary of the key changes in this release:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Added start/stop/delete/restart buttons for Compose"}),": You can now make changes to an entire Compose group of containers"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Kubernetes context on the status bar"}),": Choose from multiple Kubernetes contexts more easily all from the status bar"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Rename images"}),": Rename an image with a click of a button"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Protocol handler support"}),": Added support for protocol handlers such as ",(0,o.jsx)(n.code,{children:"open podman-desktop:extension/redhat.openshift-local"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Troubleshooting page"}),": A troubleshooting page for helping diagnose Podman Desktop related development issues"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Podman Desktop 1.2 is now available. ",(0,o.jsx)(n.a,{href:"/downloads",children:"Click here to download it"}),"!"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Podman-desktop-1-2-hero",src:t(91876).A+"",width:"1920",height:"1080"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"release-details",children:"Release Details"}),"\n",(0,o.jsx)(n.h3,{id:"added-startstopdeleterestart-buttons-for-compose",children:"Added start/stop/delete/restart buttons for Compose"}),"\n",(0,o.jsxs)(n.p,{children:["In the last month we've been addind support for more Compose features. Before you were only able to control a group of containers if they were in a Pod. Now we have added the ability to control a group of Compose containers. You can now start, stop, delete and restart a group of containers launched by either ",(0,o.jsx)(n.code,{children:"docker-compose"})," or ",(0,o.jsx)(n.code,{children:"podman-compose"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Stay tuned as we add even more features to Compose! If you have any feedback or feature requests, feel free to open an issue or start a discussion on GitHub."}),"\n",(0,o.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/253331226-d80e7637-c223-4bb8-8675-1dcb8d48818f.mov",width:"100%",height:"100%"}),"\n",(0,o.jsx)(n.h3,{id:"kubernetes-context-on-the-status-bar",children:"Kubernetes context on the status bar"}),"\n",(0,o.jsx)(n.p,{children:"With Kubernetes context on the status bar, you can switch from one context to another in just a couple of clicks. Easily switch to a different cluster all together. If there are multiple contexts available, you can now click and pick which one to use."}),"\n",(0,o.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/19958075/243804525-242b02b4-fc3c-415b-be08-24eb1933adc5.mov",width:"100%",height:"100%"}),"\n",(0,o.jsx)(n.h3,{id:"rename-images",children:"Rename images"}),"\n",(0,o.jsxs)(n.p,{children:["Deployed an image but now you need to rename it / add a new tag? Podman Desktop allows you to edit an image now. Thanks to an awesome contributor ",(0,o.jsx)(n.a,{href:"https://github.com/tuckerrc",children:"@tuckerrc"})," who added the new feature."]}),"\n",(0,o.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/251759557-bd15a631-93ee-4383-a81c-8ef3934dfb59.mp4",width:"100%",height:"100%"}),"\n",(0,o.jsx)(n.h3,{id:"troubleshooting-page",children:"Troubleshooting page"}),"\n",(0,o.jsx)(n.p,{children:"Developing an extension for Podman Desktop? Want to view the logs of Podman Desktop as well as ping your container connection? We now have a troubleshooting page!"}),"\n",(0,o.jsx)(n.p,{children:"Click on the lightbulb button on the bottom right to access the page."}),"\n",(0,o.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/248210601-e0a5deb0-44ad-4eea-9b24-134754fede80.mp4",width:"100%",height:"100%"}),"\n",(0,o.jsx)(n.h3,{id:"protocol-handler-support",children:"Protocol handler support"}),"\n",(0,o.jsxs)(n.p,{children:["Podman Desktop now supports protocol handling when using the terminal! Want to access your favourite extension directly from a script or the terminal? If you type in ",(0,o.jsx)(n.code,{children:"open podman-desktop:extension/redhat.openshift-local"})," in the terminal, Podman Desktop will automatically load up to the correct extension."]}),"\n",(0,o.jsx)(a(),{playing:!0,playsinline:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/243304511-b11ad1e4-4c2f-455c-957a-01653d2a93c8.mp4",width:"100%",height:"100%"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"other-notable-features",children:"Other Notable Features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Background colors and FormPage (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2977",children:"PR #2977"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add ability to add insecure registry / skipping cert verify (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2896",children:"PR #2896"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add support for icon contribution (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2984",children:"PR #2984"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add warning dialog message that virtual machine has low memory limit (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2822",children:"PR #2822"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Propose indexed name for new pod (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3028",children:"PR #3028"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add restart button after enabling / disabling mac os compatibility (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2841",children:"PR #2841"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add environment related helper constants (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3079",children:"PR #3079"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Allow entrypoint and cmd when starting container (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3031",children:"PR #3031"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add a way to debug stores in troubleshooting page (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3121",children:"PR #3121"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add custompick component (#2855) (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3012",children:"PR #3012"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Dynamic breadcrumbs (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3119",children:"PR #3119"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Icons on form pages (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3155",children:"PR #3155"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Switch more pages to formpage (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3162",children:"PR #3162"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add rename image button (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2588",children:"PR #2588"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Fixed headers, improved scrollbars (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2863",children:"PR #2863"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Reports warnings on failed kube deploy, fixes error out (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3050",children:"PR #3050"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Kube context on statusbar (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2755",children:"PR #2755"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Install provider if not installed when clicking on create new button (#2706) (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2817",children:"PR #2817"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add tag and authenticated push capacity to the extension API (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2876",children:"PR #2876"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add navigation bar e2e tests (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2950",children:"PR #2950"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"documentation-updates",children:"Documentation Updates"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Fix documentation for building image of extensions (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2873",children:"PR #2873"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add Minikube install docs (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2824",children:"PR #2824"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add Minikube documentation (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2694",children:"PR #2694"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Updated Building an image procedure (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2964",children:"PR #2964"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Starting a container (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2958",children:"PR #2958"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Pulling an image (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2956",children:"PR #2956"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Updated selecting containers to run in a pod (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2970",children:"PR #2970"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Pushing an image to a registry (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2969",children:"PR #2969"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["How to add an insecure registry (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2953",children:"PR #2953"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Add documentation for lima (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2995",children:"PR #2995"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Replace broken link to podman.io (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2994",children:"PR #2994"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Authenticating to a pre-configured registry (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2965",children:"PR #2965"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Lima is not a container engine (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3051",children:"PR #3051"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Using the Troubleshooting page (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3083",children:"PR #3083"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["View and select your current Kubernetes context in the status bar (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3090",children:"PR #3090"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"notable-bug-fixes",children:"Notable Bug Fixes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Deleting a running pod generates an error (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2827",children:"PR #2827"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["If kubeconfig is empty, does not try to do things, cancel (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2874",children:"PR #2874"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Async telemetry startup (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2885",children:"PR #2885"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Do not block startup while waiting for kube resource refresh (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2884",children:"PR #2884"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Images list too wide (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2918",children:"PR #2918"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Compose deactivate function never called (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2922",children:"PR #2922"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Auto-scrolling on form pages, layout issues (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2927",children:"PR #2927"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Show current context in quick pick (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2920",children:"PR #2920"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Remove sticky position of loader in dashboard UI (#2535) (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2959",children:"PR #2959"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Undo change that broke the website (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2992",children:"PR #2992"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Detailspage, resizing & consistency (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2987",children:"PR #2987"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Quick pick click to close and over nav bar (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2758",children:"PR #2758"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Only show empty screen when no pods (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2929",children:"PR #2929"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Do not redirect to /pods when deleting pod in containerlist (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2963",children:"PR #2963"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Bulk delete on pods should call the pod deletion (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2979",children:"PR #2979"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Update nodejs version to 18 in .nvmrc to fix yarn install failure (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2989",children:"PR #2989"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Website check targets (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2996",children:"PR #2996"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Don't show exception to user (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3034",children:"PR #3034"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Interpret arguments given to info command for example (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3015",children:"PR #3015"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Change defaults for Podman machine (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3061",children:"PR #3061"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Normalize development/production folders path (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3113",children:"PR #3113"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Calculate machine socket path for linux (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3070",children:"PR #3070"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Replace backslash with slash so to support rendering on Windows (#3120) (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3122",children:"PR #3122"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Keep stdout and stderr in the error object for Docker Desktop extensions (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3014",children:"PR #3014"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Mark task completed if there's a failure (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3016",children:"PR #3016"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Handle invalid kubeconfig file (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3129",children:"PR #3129"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Do not remove registries when podman extension is stopping (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3136",children:"PR #3136"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Warning should be amber (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3153",children:"PR #3153"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Load user extensions from plugins as removable (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3152",children:"PR #3152"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Images with spaces in entrypoints or commands fail to start (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3161",children:"PR #3161"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Scrolling offscreen when clicking checkbox (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/3178",children:"PR #3178"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Avoid messagebox expanding offscreen (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2778",children:"PR #2778"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Release-notes-generator run failure (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2752",children:"PR #2752"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:["Unable to do a new build if the previous one failed (",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/pull/2721",children:"PR #2721"}),")"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"community-thank-you",children:"Community Thank You"}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop even better."}),"\n",(0,o.jsxs)(n.p,{children:["A big shoutout to ",(0,o.jsx)(n.a,{href:"https://github.com/afbjorklund",children:"@afbjorklund"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/tuckerrc",children:"@tuckerrc"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/evanshortiss",children:"@evanshortiss"})," who contributed to this release!"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"final-notes",children:"Final notes"}),"\n",(0,o.jsxs)(n.p,{children:["The complete list of issues fixed in this release is available ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.2.0",children:"here"})," and ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A1.2.0",children:"here"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Get the latest release from the ",(0,o.jsx)(n.a,{href:"/downloads",children:"Downloads"})," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,o.jsx)(n.a,{href:"https://github.com/containers/podman-desktop",children:"GitHub repository"})," and see how you can help us make Podman Desktop better."]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},91876:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/podman-desktop-release-1.2-3a022da0788ed1fd7e6c1820879dd235.png"},963:e=>{e.exports=JSON.parse('{"permalink":"/blog/podman-desktop-release-1.2","source":"@site/blog/2023-07-12-release-1.2.md","title":"Podman Desktop 1.2 Release","description":"Podman Desktop 1.2 has been released!","date":"2023-07-12T00:00:00.000Z","tags":[{"inline":true,"label":"podman-desktop","permalink":"/blog/tags/podman-desktop"},{"inline":true,"label":"release","permalink":"/blog/tags/release"},{"inline":true,"label":"kubernetes","permalink":"/blog/tags/kubernetes"},{"inline":true,"label":"openshift","permalink":"/blog/tags/openshift"}],"readingTime":6.075,"hasTruncateMarker":false,"authors":[{"name":"Charlie Drage","title":"Software Engineer","url":"https://github.com/cdrage","imageURL":"https://github.com/cdrage.png","key":"cdrage","page":null}],"frontMatter":{"title":"Podman Desktop 1.2 Release","description":"Podman Desktop 1.2 has been released!","slug":"podman-desktop-release-1.2","authors":["cdrage"],"tags":["podman-desktop","release","kubernetes","openshift"],"hide_table_of_contents":false,"image":"/img/blog/podman-desktop-release-1.2.webp"},"unlisted":false,"prevItem":{"title":"Podman Desktop 1.3 Release","permalink":"/blog/podman-desktop-release-1.3"},"nextItem":{"title":"Podman Desktop 1.1 Release","permalink":"/blog/podman-desktop-release-1.1"}}')}}]);