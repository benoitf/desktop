"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[130],{5318:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(7378);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,p=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),c=s(n),m=o,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,i=new Array(l);i[0]=c;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=t,r.mdxType="string"==typeof t?t:o,i[1]=r;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},983:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var a=n(2685),o=(n(7378),n(5318));const l={sidebar_position:5},i="Linux",r={unversionedId:"Installation/linux-install",id:"Installation/linux-install",title:"Linux",description:"Check out the Downloads section of this website to download either the .flatpak file or the zip file depending on your preference.",source:"@site/docs/Installation/linux-install.md",sourceDirName:"Installation",slug:"/Installation/linux-install",permalink:"/docs/Installation/linux-install",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/linux-install.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/docs/Installation/windows-install"},next:{title:"Getting Started with Podman Desktop",permalink:"/docs/getting-started/getting-started"}},p={},s=[{value:"Installing Podman Desktop",id:"installing-podman-desktop",level:2},{value:"1. Using FlatHub",id:"1-using-flathub",level:3},{value:"2. Using Flatpak application from Downloads",id:"2-using-flatpak-application-from-downloads",level:3},{value:"3. Using zip file",id:"3-using-zip-file",level:3},{value:"Next Steps",id:"next-steps",level:2}],d={toc:s};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"linux"},"Linux"),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/downloads/linux"},"Downloads")," section of this website to download either the ",(0,o.kt)("a",{parentName:"p",href:"https://flatpak.org/setup/Fedora"},".flatpak")," file or the zip file depending on your preference."),(0,o.kt)("p",null,"In order to use Podman Desktop, the latest version of Podman is required. Podman is a rootless, daemonless container engine. Read more about it ",(0,o.kt)("a",{parentName:"p",href:"https://podman.io/whatis.html"},"here"),"."),(0,o.kt)("h2",{id:"installing-podman-desktop"},"Installing Podman Desktop"),(0,o.kt)("h3",{id:"1-using-flathub"},"1. Using ",(0,o.kt)("a",{parentName:"h3",href:"https://flathub.org/apps/details/io.podman_desktop.PodmanDesktop"},"FlatHub")),(0,o.kt)("p",null,"With FlatHub, you can install Podman Desktop with just a single command."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://flatpak.org/setup/"},"setup guide")," before installing Podman Desktop")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"flatpak install --user flathub io.podman_desktop.PodmanDesktop\n")),(0,o.kt)("p",null,"After installation, to open Podman Desktop, use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"flatpak run io.podman_desktop.PodmanDesktop\n")),(0,o.kt)("h3",{id:"2-using-flatpak-application-from-downloads"},"2. Using ",(0,o.kt)("a",{parentName:"h3",href:"https://flatpak.org/setup/"},"Flatpak")," application from ",(0,o.kt)("a",{parentName:"h3",href:"/downloads/linux"},"Downloads")),(0,o.kt)("admonition",{title:"Prerequisite ",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure Flatpak is set up in your distribution. Click ",(0,o.kt)("a",{parentName:"p",href:"https://flatpak.org/setup/"},"here")," to learn more about setting up Flatpak.")),(0,o.kt)("p",null,"Open the Terminal and go to Downloads directory. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd Downloads\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Flatpak identifier for the application is ",(0,o.kt)("inlineCode",{parentName:"p"},"io.podman_desktop.PodmanDesktop"),". This is required to install & start the application using Flatpak.")),(0,o.kt)("p",null,"Run the following command to install the Flatpak application,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"flatpak install io.podman_desktop.PodmanDesktop\n")),(0,o.kt)("p",null,"Run the following command to start the application,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"flatpak run io.podman_desktop.PodmanDesktop\n")),(0,o.kt)("p",null,"You can read more about running Flatpak applications ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flatpak.org/en/latest/using-flatpak.html"},"here"),"."),(0,o.kt)("h3",{id:"3-using-zip-file"},"3. Using zip file"),(0,o.kt)("p",null,"Download the zip file and extract the folder."),(0,o.kt)("p",null,"Navigate within the folder and double-click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"podman-desktop")," executable file. This should start the application for you."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Learn more on how to get started with Podman Desktop by clicking ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/getting-started"},"here"),"."))}u.isMDXComponent=!0}}]);