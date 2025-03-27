"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67492],{30477:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"running-a-pod-using-a-container-docker-file","title":"Running a pod using a container or docker file","description":"Create and run a pod from a container or docker file on your machine.","source":"@site/tutorial/running-a-pod-using-a-container-docker-file.md","sourceDirName":".","slug":"/running-a-pod-using-a-container-docker-file","permalink":"/tutorial/running-a-pod-using-a-container-docker-file","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"podman-desktop","permalink":"/tutorial/tags/podman-desktop"},{"inline":true,"label":"running-a-pod-from-docker-file","permalink":"/tutorial/tags/running-a-pod-from-docker-file"},{"inline":true,"label":"running-a-pod-from-container-file","permalink":"/tutorial/tags/running-a-pod-from-container-file"}],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Running a pod using a container or docker file","description":"Create and run a pod from a container or docker file on your machine.","keywords":["podman desktop","podman","pod","Containerfile","Dockerfile"],"tags":["podman-desktop","running-a-pod-from-docker-file","running-a-pod-from-container-file"]},"sidebar":"defaultSidebar","previous":{"title":"Introduction","permalink":"/tutorial/"},"next":{"title":"Running a Kubernetes cluster","permalink":"/tutorial/running-a-kubernetes-cluster"}}');var t=i(62540),s=i(43023);const o={sidebar_position:2,title:"Running a pod using a container or docker file",description:"Create and run a pod from a container or docker file on your machine.",keywords:["podman desktop","podman","pod","Containerfile","Dockerfile"],tags:["podman-desktop","running-a-pod-from-docker-file","running-a-pod-from-container-file"]},a="Running a pod using a container or docker file",c={},d=[{value:"Before you begin",id:"before-you-begin",level:2},{value:"Building an image",id:"building-an-image",level:2},{value:"Creating a container",id:"creating-a-container",level:2},{value:"Creating and running a pod",id:"creating-and-running-a-pod",level:2}];function l(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"running-a-pod-using-a-container-or-docker-file",children:"Running a pod using a container or docker file"})}),"\n",(0,t.jsx)(e.p,{children:"This tutorial covers the following end-to-end tasks required to run a pod from a container or docker file:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Building an image"}),"\n",(0,t.jsx)(e.li,{children:"Creating a container"}),"\n",(0,t.jsx)(e.li,{children:"Creating and running a pod"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"When creating a container, you can set the following configurations:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["With ",(0,t.jsx)(e.strong,{children:"Basic"})," configuration, you have the option to:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Define volumes to configure a persistent storage location. For this, you must set up a host directory and then mount this directory to a container. You can keep your application data intact in your host directory even after your container is stopped or failed."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Define port mapping to create an externally accessible container. For this, you must map a host port with the container port. After this mapping, any requests to port on the host are forwarded to port in the container."}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Select a file containing environment variables for your container. This file contains data in the ",(0,t.jsx)(e.code,{children:"key=value"})," format."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["With ",(0,t.jsx)(e.strong,{children:"Advanced"})," configuration, you have the option of:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Automatic removal of container"}),"\n",(0,t.jsx)(e.li,{children:"Specifying ID of the user who can run a container"}),"\n",(0,t.jsx)(e.li,{children:"Selecting a restart policy that defines whether a container should restart on exit"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["With ",(0,t.jsx)(e.strong,{children:"Networking"})," configuration, you have the option of defining:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"A container host name"}),"\n",(0,t.jsx)(e.li,{children:"A custom DNS server"}),"\n",(0,t.jsx)(e.li,{children:"Additional hosts"}),"\n",(0,t.jsx)(e.li,{children:"The networking mode for a container"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["With ",(0,t.jsx)(e.strong,{children:"Security"})," configuration, you have the option to:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Secure you container resources"}),"\n",(0,t.jsx)(e.li,{children:"Make container root filesystem read-only"}),"\n",(0,t.jsx)(e.li,{children:"Add or drop security capabilities"}),"\n",(0,t.jsx)(e.li,{children:"Specify a namespace to restrict the usage of containers to a group of users with defined privileges and ownership"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"before-you-begin",children:"Before you begin"}),"\n",(0,t.jsx)(e.p,{children:"Make sure you have:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/installation",children:"Installed Podman Desktop"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"/docs/podman/creating-a-podman-machine",children:"A running Podman machine"}),"."]}),"\n",(0,t.jsx)(e.li,{children:"A developer role."}),"\n",(0,t.jsx)(e.li,{children:"Created a docker file using the following code, if you do not have one on your machine:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-dockerfile",children:'# syntax=docker/dockerfile:1\n\nARG NODE_VERSION\nARG ALPINE_VERSION\n\nFROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS base\nWORKDIR /src\n\nFROM base AS build\nCOPY package*.json ./\nRUN npm ci\nRUN npm run build\n\nFROM base AS production\nCOPY package*.json ./\nRUN npm ci --omit=dev && npm cache clean --force\nCOPY --from=build /src/dist/ .\nCMD ["node", "app.js"]\n'})}),"\n",(0,t.jsx)(e.h2,{id:"building-an-image",children:"Building an image"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Containers"})," in the left navigation pane."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Create"}),".\n",(0,t.jsx)(e.img,{alt:"Create a new container",src:i(65872).A+"",width:"1178",height:"525"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["On the ",(0,t.jsx)(e.strong,{children:"Build image from Containerfile"})," page, provide the following details:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Containerfile path: Select the path where the container or docker file is placed."}),"\n",(0,t.jsx)(e.li,{children:"Build context directory: The field automatically picks up the context directory based on the file path."}),"\n",(0,t.jsx)(e.li,{children:"Image name: Enter the image name, if required."}),"\n",(0,t.jsxs)(e.li,{children:["Build arguments: Pass the required arguments to build the image. This example uses arguments, such as ",(0,t.jsx)(e.code,{children:"NODE_VERSION"})," and ",(0,t.jsx)(e.code,{children:"ALPINE_VERSION"})]}),"\n",(0,t.jsxs)(e.li,{children:["Platform: Change the platform on which you want to build the image. The default platform is Intel and AMD x86_64 systems.\n",(0,t.jsx)(e.img,{alt:"Build an image from a containerfile",src:i(36612).A+"",width:"1952",height:"1260"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Build"}),". The image starts to build."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Done"})," once the image is built successfully."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["View the newly created image on the ",(0,t.jsx)(e.strong,{children:"Images"})," page."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"creating-a-container",children:"Creating a container"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Images"})," in the left navigation pane."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click the ",(0,t.jsx)(e.strong,{children:"Run Image"})," icon corresponding to the image you want to run. The ",(0,t.jsx)(e.strong,{children:"Create a container from image page"})," opens.\n",(0,t.jsx)(e.img,{alt:"running an image",src:i(71114).A+"",width:"1952",height:"446"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Optional: Configure the basic details of the container:\n",(0,t.jsx)(e.img,{alt:"basic details of a container",src:i(418).A+"",width:"2432",height:"1224"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Optional: Select the ",(0,t.jsx)(e.strong,{children:"Advanced"})," tab to configure advanced details of the container:\n",(0,t.jsx)(e.img,{alt:"advanced details of a container",src:i(70034).A+"",width:"2432",height:"1224"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Optional: Select the ",(0,t.jsx)(e.strong,{children:"Networking"})," tab to configure the networking details of the container:\n",(0,t.jsx)(e.img,{alt:"networking details of a container",src:i(48514).A+"",width:"2432",height:"1224"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Optional: Select the ",(0,t.jsx)(e.strong,{children:"Security"})," tab to configure the security details of the container:\n",(0,t.jsx)(e.img,{alt:"security details of a container",src:i(31990).A+"",width:"2432",height:"1224"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Start Container"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Check the ",(0,t.jsx)(e.strong,{children:"Container Details"})," page for information, such as summary, logs, YAML code, and to access the terminal.\n",(0,t.jsx)(e.img,{alt:"container details page",src:i(99325).A+"",width:"2432",height:"1018"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click the ",(0,t.jsx)(e.strong,{children:"close"})," icon on the right hand side of the page."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["View the newly created container on the ",(0,t.jsx)(e.strong,{children:"Containers"})," page."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"creating-and-running-a-pod",children:"Creating and running a pod"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Go to ",(0,t.jsx)(e.strong,{children:"Containers"})," from the left navigation pane."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Select the containers from the container list.\n",(0,t.jsx)(e.img,{alt:"selecting containers",src:i(5704).A+"",width:"2432",height:"658"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click ",(0,t.jsx)(e.strong,{children:"Create Pod"}),". The ",(0,t.jsx)(e.strong,{children:"Copy containers to a pod"})," page opens."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Change the name of the pod if required and click ",(0,t.jsx)(e.strong,{children:"Create Pod"}),".\n",(0,t.jsx)(e.img,{alt:"creating pods",src:i(25084).A+"",width:"2432",height:"826"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["View the newly created pod on the ",(0,t.jsx)(e.strong,{children:"Pods"})," page."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Click the ",(0,t.jsx)(e.strong,{children:"Start Pod"})," icon corresponding to the pod you created."]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["Check that the pod is running on the same page.\n",(0,t.jsx)(e.img,{alt:"running pod",src:i(80465).A+"",width:"1072",height:"215"})]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},70034:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/advanced-config-container-563bf8a672ec90dc564ad1efb2208a5d.png"},418:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/basic-config-container-c935b251ea9a74db43ced66947495630.png"},36612:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/build-image-from-containerfile-d842ceedd3110ec55205a6e64c2ced86.png"},99325:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/container-details-page-42130fb2c004a3970bed9c92d2c10b6a.png"},65872:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/create-a-new-container-c3419d57d22da0359935309ddd5c742c.png"},25084:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/creating-a-pod-1dcd8844fa8619b3ce915df9046eaf3e.png"},80465:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/my-pod-d0605843631636e62b1bf8baf34a981e.png"},48514:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/networking-config-container-29f121b925232c90f2124a1ddcd2f830.png"},71114:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/run-image-8e07bb1386f655e5b2d7730eafe69081.png"},31990:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/security-config-container-6355b3f3990f8db753ad03df3f7c33d2.png"},5704:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/selecting-containers-60df0961b0864a2f8b8b5737c1f75403.png"},43023:(n,e,i)=>{i.d(e,{R:()=>o,x:()=>a});var r=i(63696);const t={},s=r.createContext(t);function o(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);