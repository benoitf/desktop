"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7679],{9867:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=a(5773),o=(a(7378),a(5318)),i=a(2975);const s={title:"Release Notes - Podman Desktop 0.11",description:"Podman Desktop 0.11 has been released!",slug:"podman-desktop-release-0.11",authors:["slemeur"],tags:["podman-desktop","release","kubernetes"],hide_table_of_contents:!1},l=void 0,r={permalink:"/blog/podman-desktop-release-0.11",source:"@site/blog/2023-01-18-release-0.11.md",title:"Release Notes - Podman Desktop 0.11",description:"Podman Desktop 0.11 has been released!",date:"2023-01-18T00:00:00.000Z",formattedDate:"January 18, 2023",tags:[{label:"podman-desktop",permalink:"/blog/tags/podman-desktop"},{label:"release",permalink:"/blog/tags/release"},{label:"kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:9.35,hasTruncateMarker:!0,authors:[{name:"Stevan Le Meur",title:"Product Manager",url:"https://github.com/slemeur",imageURL:"https://github.com/slemeur.png",key:"slemeur"}],frontMatter:{title:"Release Notes - Podman Desktop 0.11",description:"Podman Desktop 0.11 has been released!",slug:"podman-desktop-release-0.11",authors:["slemeur"],tags:["podman-desktop","release","kubernetes"],hide_table_of_contents:!1},prevItem:{title:"Release Notes - Podman Desktop 0.12",permalink:"/blog/podman-desktop-release-0.12"},nextItem:{title:"Release Notes - Podman Desktop 0.10",permalink:"/blog/podman-desktop-release-0.10"}},p={authorsImageUrls:[void 0]},d=[{value:"Release Details",id:"release-details",level:2},{value:"Air-Gapped installation #1104 #1120",id:"air-gapped-installation-1104-1120",level:3},{value:"Feedback within Podman Desktop #1078",id:"feedback-within-podman-desktop-1078",level:3},{value:"Docker compatibility mode #1047",id:"docker-compatibility-mode-1047",level:3},{value:"Allow to toggle on/off the proxy setting #983",id:"allow-to-toggle-onoff-the-proxy-setting-983",level:3},{value:"Namespace selection for deploy to kubernetes #1008",id:"namespace-selection-for-deploy-to-kubernetes-1008",level:3},{value:"Configure Podman binary path #941",id:"configure-podman-binary-path-941",level:3},{value:"Provide pre-defined registries #1201",id:"provide-pre-defined-registries-1201",level:3},{value:"UI/UX Improvements",id:"uiux-improvements",level:3},{value:"View Pods logs #1122",id:"view-pods-logs-1122",level:4},{value:"Improved feedback when clicking on container list action icons #1150 #1161",id:"improved-feedback-when-clicking-on-container-list-action-icons-1150-1161",level:4},{value:"Allows to change the default font size for the editor #1160",id:"allows-to-change-the-default-font-size-for-the-editor-1160",level:4},{value:"Keep expanded state of pods when refreshing containers #1042",id:"keep-expanded-state-of-pods-when-refreshing-containers-1042",level:4},{value:"Click on the Pod name redirects to the Pod details page #1159",id:"click-on-the-pod-name-redirects-to-the-pod-details-page-1159",level:4},{value:"Improved styles of buttons for actions #984",id:"improved-styles-of-buttons-for-actions-984",level:4},{value:"Improved alignments in pages with lists #1182",id:"improved-alignments-in-pages-with-lists-1182",level:4},{value:"Other Notable Enhancements",id:"other-notable-enhancements",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Notable bug fixes",id:"notable-bug-fixes",level:2},{value:"Community Thank You!",id:"community-thank-you",level:2},{value:"Final Notes",id:"final-notes",level:2}],m={toc:d};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This release note covers Podman Desktop 0.11 release changes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Air-Gapped Installation"),": New all-in-one binaries for air-gapped installation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Feedback"),": Submit feedback directly from Podman Desktop."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Docker Compatibility Mode"),": Information about the Docker compatibility mode."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proxy Setting"),": Toggle on/off the proxy setting."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Deploy to Kubernetes"),": Select the namespace to deploy to Kubernetes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Registry Configuration"),": Simplified registry configuration for well known registries."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"UX/UI Improvements"),": View pod's container logs, better visual feedback, configurable editor font size, and more.")),(0,o.kt)("p",null,"Podman Desktop 0.11 is now available. ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Click here to download it"),"! "),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"release-details"},"Release Details"),(0,o.kt)("h3",{id:"air-gapped-installation-1104-1120"},"Air-Gapped installation ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/1104"},"#1104")," ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/1120"},"#1120")),(0,o.kt)("p",null,"For users who are not able to connect to the internet, a new all-in-one (airgap) binary that includes the Podman Desktop application and the Podman binaries is now available for both Mac and Windows. When initializing a new Podman machine using all-in-one binaries, it'll use the embedded files and not grab them from internet: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on Mac, it embeds the qemu FCOS binaries."),(0,o.kt)("li",{parentName:"ul"},"on Windows, it embeds the WSL binary.")),(0,o.kt)("p",null,"To differentiate the air-gapped binaries from the regular ones, you can check the artifactname, they're containing 'airgap' and are bigger.\nPlease note, that those binaries are available only on releases and not the pre-releases."),(0,o.kt)("p",null,"There is also an optional way to provide a custom Podman machine image in the create machine form. By providing the path to the image you want, Podman Desktop will create a machine with that image. Leaving the field empty will use the default image (the one included in the binary)."),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/210508524-45005536-ac74-4074-92c1-2b3ca51d0073.mp4",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"feedback-within-podman-desktop-1078"},"Feedback within Podman Desktop ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/1078"},"#1078")),(0,o.kt)("p",null,"Submitting feedback on Podman Desktop is getting easier as it is possible directly within the tool. This will help to get more information about the issues you are facing and will help us to improve the tool. "),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/208938878-948a2764-d73b-4584-a80d-497c052482c1.mp4",mdxType:"ReactPlayer"}),(0,o.kt)("p",null,"Please feel free to submit any feedback you have, we are looking forward to hearing from you!"),(0,o.kt)("h3",{id:"docker-compatibility-mode-1047"},"Docker compatibility mode ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/1047"},"#1047")),(0,o.kt)("p",null,"The Docker compatibility mode is a feature that allows to use Podman as a drop-in replacement for Docker. It relies on the Docker socket helper provided with Podman and automatically handle the local setup of podman path to the Docker socket. Tools like ",(0,o.kt)("a",{parentName:"p",href:"https://www.testcontainers.org/"},"Testcontainers")," or others are relying on this to communicate to the container engine. "),(0,o.kt)("p",null,"In this new version of Podman Desktop, we are now providing information to the user about the status of this compatibility mode directly on the dashboard page. The way it works is the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When Docker is running: the socket is pointing to Docker."),(0,o.kt)("li",{parentName:"ul"},"When Podman is starting and Docker is not running: the docker API socket will use Podman.")),(0,o.kt)("p",null,"In case the compatibility mode is not activated, new documentation on how to activate it and how to easily switch between Docker and Podman is available here: ",(0,o.kt)("a",{parentName:"p",href:"https://podman-desktop.io/docs/migrating-from-docker"},"https://podman-desktop.io/docs/migrating-from-docker"),". "),(0,o.kt)("p",null,"This is a warning displayed for Windows users:\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/436777/209305744-9056addd-f122-4f75-9e03-ad27a0109375.png",alt:"windows-docker-compatibility"})),(0,o.kt)("p",null,"This is the warning for Mac users:\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6422176/207964861-a9c1f72c-89d6-4816-beab-397af4125620.png",alt:"mac-docker-compatibility"})),(0,o.kt)("h3",{id:"allow-to-toggle-onoff-the-proxy-setting-983"},"Allow to toggle on/off the proxy setting ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/983"},"#983")),(0,o.kt)("p",null,"In some context, users need the ability to disable and re-enable the proxy configuration very quickly, without having to entirely reconfigure it. This is now possible from the Podman Desktop settings page, where a toggle to enable/disable the proxy configuration has been added."),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/205955418-670bc37c-a74f-40ef-bc60-8d9d013aa0dc.mp4",mdxType:"ReactPlayer"}),(0,o.kt)("p",null,"Note: extensions can read this information and then update the proxy configuration."),(0,o.kt)("h3",{id:"namespace-selection-for-deploy-to-kubernetes-1008"},"Namespace selection for deploy to kubernetes ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/1008"},"#1008")),(0,o.kt)("p",null,"A new dropdown menu has been added to the deploy to Kubernetes screen to allow selecting the namespace to deploy to. Defaults to defaultnamespace, if unable to get any from kube_client module."),(0,o.kt)("p",null,"If the user have set ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl config set-context --current --namespace=NAMESPACE")," it honors that as the chosen value."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/7339809/206688886-095e4f15-42ae-4a0a-b1c6-ae4b547fcdfb.gif",alt:"deploy-kubernetes-namespace"})),(0,o.kt)("h3",{id:"configure-podman-binary-path-941"},"Configure Podman binary path ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/941"},"#941")),(0,o.kt)("p",null,"Users may use a custom path to the podman binary. An option within settings (Settings -> Preferences) to allow providing an additional path to Podman binary has been added. This is useful for users who have installed Podman using a package manager and want to use the binary provided by the package manager. Additional information is available in the documentation for Mac users: ",(0,o.kt)("a",{parentName:"p",href:"http://podman-desktop.io/docs/troubleshooting#unable-to-set-custom-binary-path-for-podman-on-macos"},"http://podman-desktop.io/docs/troubleshooting#unable-to-set-custom-binary-path-for-podman-on-macos")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6422176/204832063-5858065a-2fc3-49de-8d23-3b99b7d10dbf.png",alt:"custom-path"})),(0,o.kt)("h3",{id:"provide-pre-defined-registries-1201"},"Provide pre-defined registries ",(0,o.kt)("a",{parentName:"h3",href:"https://github.com/containers/podman-desktop/pull/1201"},"#1201")),(0,o.kt)("p",null,"The experience of configuring a registry is getting simplified for the most popular ones. The user will be able to select a registry from a pre-defined list and will only have to provide the username and password. The following registries will be pre-defined:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dockerhub"),(0,o.kt)("li",{parentName:"ul"},"Red Hat Quay"),(0,o.kt)("li",{parentName:"ul"},"GitHub"),(0,o.kt)("li",{parentName:"ul"},"IBM Container Registry"),(0,o.kt)("li",{parentName:"ul"},"Google Container Registry")),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/6422176/214332937-eb1d9050-0d32-4bc4-8393-49b4583b1390.mov",mdxType:"ReactPlayer"}),(0,o.kt)("h3",{id:"uiux-improvements"},"UI/UX Improvements"),(0,o.kt)("h4",{id:"view-pods-logs-1122"},"View Pods logs ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1122"},"#1122")),(0,o.kt)("p",null,"The pods details view provides the ability to view the logs of each containers that may be running in a pod. Moreover, as it can also be hard to scan and identify which container is producing which output, we appended the container name at the beginning of each output and differentiate each container with a different color. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6422176/211024673-eee9bad8-1b0c-4446-b8d1-97a226282c4d.png",alt:"pods-logs"})),(0,o.kt)("h4",{id:"improved-feedback-when-clicking-on-container-list-action-icons-1150-1161"},"Improved feedback when clicking on container list action icons ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1150"},"#1150")," ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1161"},"#1161")),(0,o.kt)("p",null,"When starting/stopping or deleting a container, a spinner is now displayed. In case of error, a message indicating that the action failed will also be better indicated. "),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/211531610-2347d302-4918-46ae-a5a2-c80fac0314f5.mp4",mdxType:"ReactPlayer"}),(0,o.kt)("p",null,"For containers that exit immediately or short-lived containers, the feedback is also improved and include report of error now provide a better feedback to the user ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/pull/1161"},"#1161"),"."),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/211831905-ebf596d5-efc8-4f55-8cb8-3f31655388b9.mp4",mdxType:"ReactPlayer"}),(0,o.kt)("h4",{id:"allows-to-change-the-default-font-size-for-the-editor-1160"},"Allows to change the default font size for the editor ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1160"},"#1160")),(0,o.kt)("p",null,"An editor is used in several screens of Podman Desktop, from the inspect screen to container's outputs and Kubernetes YAML. The default font size is 10 pixels. It's now possible to adjust the font size to the one the one you prefer. This setting is persisted and will be used for all the editors of Podman Desktop and available from the preferences page (Settings -> Preferences)."),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/211778161-130ff733-b2ca-4306-bea3-d031196c3b29.mp4",mdxType:"ReactPlayer"}),(0,o.kt)("h4",{id:"keep-expanded-state-of-pods-when-refreshing-containers-1042"},"Keep expanded state of pods when refreshing containers ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1042"},"#1042")),(0,o.kt)("p",null,"When switching from different screens of the application or simply refreshing the list of containers, the expanded state of each item in the list is now persisted and will be properly restored."),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/207864147-b68ea9bd-0ca9-42dc-882e-b8a705233749.mp4",mdxType:"ReactPlayer"}),(0,o.kt)("h4",{id:"click-on-the-pod-name-redirects-to-the-pod-details-page-1159"},"Click on the Pod name redirects to the Pod details page ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1159"},"#1159")),(0,o.kt)("p",null,"The list of containers also displays pods, now clicking on the pod name directly redirects to the Pod details page."),(0,o.kt)(i.Z,{playing:!0,controls:!0,url:"https://user-images.githubusercontent.com/436777/211770946-2255f39f-7e2e-48ad-9ead-bcbfe6a115a7.mp4",mdxType:"ReactPlayer"}),(0,o.kt)("h4",{id:"improved-styles-of-buttons-for-actions-984"},"Improved styles of buttons for actions ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/984"},"#984")),(0,o.kt)("p",null,'The style of the buttons for actions on item in the list of in details pages have been improved. The background has been removed, but to make the hover state more visible, the "hover" circle is visble and the icon\'s color is also changing.'),(0,o.kt)("p",null,"On lists:\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6422176/205979121-b49a0ddf-03bb-4a4d-8d12-bc8d0bd52387.png",alt:"list-actions"})),(0,o.kt)("p",null,"On details pages:\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/6422176/205979123-ea420b17-e834-4029-82eb-22949889eee9.png",alt:"details-actions"})),(0,o.kt)("h4",{id:"improved-alignments-in-pages-with-lists-1182"},"Improved alignments in pages with lists ",(0,o.kt)("a",{parentName:"h4",href:"https://github.com/containers/podman-desktop/pull/1182"},"#1182")),(0,o.kt)("p",null,"The alignment of the items in the list of containers and pods have been improved. The header of each columns are now aligned with the text. and the actions icons are now aligned with the top of the text."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/19958075/212712580-096fd090-0beb-40a4-8dc6-b3fdc5e81e35.png",alt:"list-actions"})),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"other-notable-enhancements"},"Other Notable Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Statistics area in container details are always shown. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1131"},"#1131"),")"),(0,o.kt)("li",{parentName:"ul"},"Add more descriptive wording and more information to extensions. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/985"},"#985"),")"),(0,o.kt)("li",{parentName:"ul"},"Allow to install on-the fly Podman Desktop extensions using an OCI image. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1187"},"#1187"),")"),(0,o.kt)("li",{parentName:"ul"},"Display correctly non-multiplexed stream in logs (when using non interactive mode). (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1197"},"#1197"),")"),(0,o.kt)("li",{parentName:"ul"},"Font changed from white to gray for non-name sections (creation date, size). (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1206"},"#1206"),")"),(0,o.kt)("li",{parentName:"ul"},"Add Help/about menu for macOS/Windows/Linux. (",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1207"},"#1207"),")")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"Coming with this new version of Podman Desktop, the documentation has been getting attention (with number of editorial reviews) and new content have been added. "),(0,o.kt)("p",null,"Content for helping users to migrate from Docker to Podman has been added:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1088"},"Using the ",(0,o.kt)("inlineCode",{parentName:"a"},"podman-mac-helper")," tool to migrate from Docker to Podman on macOS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1129"},"better identify podman-mac-helper verification steps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1143"},"Emulating Docker CLI using Podman to migrate from Docker to Podman")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1146"},"Migrating from Docker section")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1152"},"Verifying that your tools are using Podman")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1144"},"Importing saved containers"))),(0,o.kt)("p",null,"Several of other improvements have been made to the documentation and the website:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/962"},"Troubleshooting for Apple Silicon and brew x86_64 installs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/972"},"Change text of custom binary location, add docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/974"},"Silent install option for windows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1079"},"Upgrade to vite v4 and rollup v3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1118"},"Refreshing documentation on installing on Linux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1130"},"Identify the shell sessions in Installing on Linux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1133"},"Website: the linux binary is not a source, it should be promoted as a binary")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1162"},"Introducing tabs for operatings systems and container engines")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1165"},"website: In the landing page, update plugins and container engines lists")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1163"},"Document where code is located within Podman Desktop")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1172"},"(extension-api): Documentation on how to write an extension and use the api"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"notable-bug-fixes"},"Notable bug fixes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update to v0.3.2 Docker Desktop API for extensions - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1070"},"#1070")),(0,o.kt)("li",{parentName:"ul"},"Updated link to the Matrix room - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1076"},"#1076")),(0,o.kt)("li",{parentName:"ul"},"Report error when container name already exists - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1142"},"#1142")),(0,o.kt)("li",{parentName:"ul"},"Fixed connectivity to the Podman machine when the generated socket length is greater than 104 characters in MacOS - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1145"},"#1145")),(0,o.kt)("li",{parentName:"ul"},"Do not use long calls for external clients - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1151"},"#1151")),(0,o.kt)("li",{parentName:"ul"},"Invalid name/tag for images with registries using a different port - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1127"},"#1127")),(0,o.kt)("li",{parentName:"ul"},"Invalid badge count for images when two images have the same tag - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1124"},"#1124")),(0,o.kt)("li",{parentName:"ul"},"Fixed detection of WSL2 - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/981"},"#981")),(0,o.kt)("li",{parentName:"ul"},"Handle invalid kubeconfig files instead of crashing - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/953"},"#953")),(0,o.kt)("li",{parentName:"ul"},"Removed redundant actions from details pages - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1200"},"#1200")),(0,o.kt)("li",{parentName:"ul"},"Fixed registry URL not aligned with header - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1205"},"#1205")),(0,o.kt)("li",{parentName:"ul"},"Moved SVGs to reusable components - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1211"},"#1211"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," Extensions API has also been improved in this new release: ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(extension-api): Allows to register a factory for kubernetes connection objects (like for container connections) - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1040"},"#1040")),(0,o.kt)("li",{parentName:"ul"},"(extension-api): List or inspect containers, be notified on events - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1041"},"#1041")),(0,o.kt)("li",{parentName:"ul"},"(extension-api): Allows to get provider notification - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1045"},"#1045")),(0,o.kt)("li",{parentName:"ul"},"(dd-extension-api): Implement toast API - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1154"},"#1154")),(0,o.kt)("li",{parentName:"ul"},"(extension-api): Moved extension properties to preferences - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/948"},"#948")),(0,o.kt)("li",{parentName:"ul"},"(dd-extension-api): Added open dev console on dd webview in development mode - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1071"},"#1071")),(0,o.kt)("li",{parentName:"ul"},"(extension-api): Added notes on extension and frameworks/tooling of Podman Desktop - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1166"},"#1166")),(0,o.kt)("li",{parentName:"ul"},"(extension-api): Documentation on how to write an extension and use the api - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1172"},"#1172")),(0,o.kt)("li",{parentName:"ul"},"(dd-extension-api): DD extensions should see only minimal information on containers - ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1191"},"#1191"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"community-thank-you"},"Community Thank You!"),(0,o.kt)("p",null,"\ud83c\udf89 We\u2019d like to say a big thank you to everyone who helped to make Podman Desktop 0.11 even better:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/emmanuelbernard"},"Emmanuel Bernard")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/962"},"#962 - Troubleshooting for Apple Silicon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/eidottermihi"},"Michael Prankl")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/974"},"#974 - Silent install option for windows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/elervik"},"Endre Lervik")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1008"},"#1008 - Namespace selection for deploy to kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/evanfpearson"},"Evan FP")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1145"},"#1145 - fixed socket path length error")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/lsm5"},"Lokesh Mandvekar")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/956"},"#956 - add repository key to package.json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jeffmaury"},"Jean Fran\xe7ois Maury")," in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman-desktop/pull/1194"},"#1194 - Cannot create Kind cluster on Windows"))),(0,o.kt)("h2",{id:"final-notes"},"Final Notes"),(0,o.kt)("p",null,"The complete list of issues fixed in this release is available ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues?q=is%3Aclosed+milestone%3A0.11.0"},"here"),"."),(0,o.kt)("p",null,"Get the latest release from the ",(0,o.kt)("a",{parentName:"p",href:"/downloads"},"Downloads")," section of the website and boost your development journey with Podman Desktop. Additionally, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop"},"GitHub repository")," and see how you can help us make Podman Desktop better."))}h.isMDXComponent=!0}}]);