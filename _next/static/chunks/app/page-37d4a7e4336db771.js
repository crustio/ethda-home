(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4749:function(e,s,t){Promise.resolve().then(t.bind(t,5667))},5667:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Home}});var a=t(7437),i=t(6691),l=t.n(i),r=t(4033),n=t(1396),o=t.n(n),d=t(2265),c=t(4704);let m={"t-side":(e,s)=>new KeyframeEffect(e,"add"===s?[{transform:"scaleY(0)",transformOrigin:"0 0",opacity:0},{transform:"scaleY(1)",transformOrigin:"0 0",opacity:1}]:"remove"===s?[{transform:"scaleY(1)",transformOrigin:"0 0",opacity:1},{transform:"scaleY(0)",transformOrigin:"0 0",opacity:0}]:[],{duration:300,easing:"ease-in-out"}),"r-side":(e,s)=>new KeyframeEffect(e,"add"===s?[{transform:"scaleX(0)",transformOrigin:"100% 0",opacity:0},{transform:"scaleX(1)",transformOrigin:"100% 0",opacity:1}]:"remove"===s?[{transform:"scaleX(1)",transformOrigin:"100% 0",opacity:1},{transform:"scaleX(0)",transformOrigin:"100% 0",opacity:0}]:[],{duration:300,easing:"ease-in-out"}),scale:(e,s)=>new KeyframeEffect(e,"add"===s?[{transform:"scale(0.8)",opacity:0},{transform:"scale(1)",opacity:1}]:"remove"===s?[{transform:"scale(1)",opacity:1},{transform:"scale(0.8)",opacity:0}]:[],{duration:300,easing:"ease-in-out"}),opacity:(e,s)=>new KeyframeEffect(e,"add"===s?[{opacity:0},{opacity:1}]:"remove"===s?[{opacity:1},{opacity:0}]:[],{duration:200,easing:"ease-in-out"})};function useAutoAnim(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"scale",s=(0,d.useRef)(null);return(0,d.useEffect)(()=>{s.current&&(0,c.ZP)(s.current,"string"==typeof e?m[e]:e)},[s.current]),s}var x=t(4440),h=t.n(x),p=t(311),j=t(6246),u=t(3577);function _PoperMenu(e){let{className:s,containerClassName:t,children:i,arrow:l={},keys:n="text",menus:o,isShowText:c=!1,chooseItem:m,iconClassName:x,...f}=e,g=(0,r.useRouter)(),[v,w]=(0,j.Z)(!1),[b,N]=(0,d.useState)(!1),y=useAutoAnim("t-side");(0,u.Z)(y,()=>v&&w(!1));let onClickItem=e=>{"function"==typeof m&&m(e),e.onClick&&e.onClick(),w()};return(0,a.jsxs)("div",{...f,style:{position:"relative"},className:h()(s),ref:y,children:[(0,a.jsx)("div",{className:"flex  ",onClick:e=>{w()},children:i}),v&&o.length>0&&(0,a.jsxs)("div",{style:{filter:"drop-shadow(0 0 15px rgba(0, 0, 0, 0.2))"},className:h()("absolute w-[13.75rem] top-full right-0 mo:right-[-1rem]",t),children:[(0,a.jsx)(p.da2,{className:h()("absolute text-white text-2xl right-0 top-[-2px] hidden mo:block",x)}),(0,a.jsx)("div",{className:"py-[.625rem] mo:py-[.375rem] w-full bg-white mt-[.625rem] mo:mt-[.625rem] rounded-lg z-10 relative",children:o.map((e,s)=>(0,a.jsxs)(d.Fragment,{children:[e.topSplit&&s>0&&(0,a.jsx)("div",{className:"h-[1px] my-[.625rem] mo:my-[2px] mx-4 bg-[#eeeeee]"}),(0,a.jsxs)("div",{className:h()("flex items-center py-[.625rem] mo:py-[.875rem] px-4 text-black hover:text-green-2 cursor-pointer",{"text-green-2":e.selected}),onClick:()=>e.to?g.push(e.to):onClickItem(e),children:[!!e.icon&&(0,a.jsx)("div",{className:"text-xl mo:text-2xl",children:e.icon}),(0,a.jsx)("div",{className:"ml-3 text-sm font-medium mo:text-base mo:font-normal",children:e[n]})]})]},"poper_menu_item".concat(s)))})]})]})}let f=d.memo(_PoperMenu);var g=t(7431);let Header=()=>{let e=(0,r.usePathname)(),[s,t]=(0,d.useState)(!1),getWindowWidth=()=>window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,handleResize=()=>{t(900>=getWindowWidth())};return(0,d.useEffect)(()=>(handleResize(),window.addEventListener("resize",handleResize),()=>{window.removeEventListener("resize",handleResize)}),[]),(0,a.jsx)("header",{className:"py-5 border-b border-b-[rgba(255,255,255,.2)]",children:(0,a.jsx)("div",{className:" mo:mx-10 ",children:(0,a.jsxs)("div",{className:"container mx-auto flex justify-between items-center",children:[(0,a.jsx)(l(),{src:"/logo.svg",alt:"logo.svg",width:119,height:26}),s?(0,a.jsx)(f,{containerClassName:"!w-[150px] mo:right-[0px]",menus:[{text:"Home"},{text:"Build"},{text:"Document",to:"./docs/lightpaper.pdf"}],className:"absolute z-[9999]",children:(0,a.jsx)("button",{className:"text-[2rem] mo:text-2xl",children:(0,a.jsx)(g.otZ,{className:" text-white"})})}):(0,a.jsxs)("div",{className:"flex items-center gap-8 text-white text-sm",children:[(0,a.jsx)("div",{className:"nav-item ".concat("/"===e?"active":""),children:"Home"}),(0,a.jsx)("div",{className:"nav-item ".concat("/build"===e?"active":""),children:"Build"}),(0,a.jsx)(o(),{href:"./docs/lightpaper.pdf",target:"_blank",className:"block nav-item",children:"Document"})]})]})})})},Banner=()=>(0,a.jsxs)("div",{className:"h-[750px] bg-cover",style:{backgroundImage:"url(/banner.png)"},children:[(0,a.jsx)(Header,{}),(0,a.jsx)("div",{className:"h-[calc(100%-66px)] flex flex-col justify-center mo:justify-center mo:flex-row mo:mt-10",children:(0,a.jsxs)("div",{className:"container mx-auto text-white font-bold flex justify-between mo:justify-center mo:text-center mo:flex mo:flex-wrap",children:[(0,a.jsxs)("div",{className:"mo:text-center",children:[(0,a.jsxs)("div",{className:"text-[80px] mo:text-[38px]",children:["Scale ",(0,a.jsx)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#ff9937] to-[#ff3d00]",children:"Ethereum"})]}),(0,a.jsx)("div",{className:"text-[70px] mo:text-[38px]",children:"With Data"}),(0,a.jsx)("div",{className:"text-[70px] mo:text-[38px]",children:"Availability Layer2"}),(0,a.jsx)("div",{className:"mo:flex justify-center",children:(0,a.jsx)(o(),{href:"./docs/lightpaper.pdf",target:"_blank",className:"flex items-center justify-center w-[200px] h-[58px] border border-white rounded-[12px] font-semibold text-[20px] mo:text-2xl mt-8",children:"Read the Doc."})})]}),(0,a.jsx)("div",{className:"-mt-10",children:(0,a.jsx)("img",{src:"/banner.gif",alt:"banner",width:520,height:200,className:" mo:w-[324px] mo:h-[334px]"})})]})})]}),What=()=>{let[e,s]=(0,d.useState)(!1),getWindowWidth=()=>window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,handleResize=()=>{s(900>=getWindowWidth())};return(0,d.useEffect)(()=>(handleResize(),window.addEventListener("resize",handleResize),()=>{window.removeEventListener("resize",handleResize)}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"title text-center mb-14 mo:mb-10 mo:text-[28px]",children:"What is EthDA"}),(0,a.jsxs)("div",{className:"flex bg-no-repeat mo:w-full pb-20 grow-0 shrink gap-8 justify-between pr-10 mo:pl-10   mo:flex-col-reverse ",style:{backgroundImage:"url(/what-1.png), url(/what-3.png)",backgroundPosition:"left 0px, 400px 0px",backgroundSize:"420px, 700px"},children:[(0,a.jsxs)("div",{className:"w-[420px] shrink-0 mo:w-full",children:[(0,a.jsx)("div",{className:"subtitle mb-6  mo:text-xl mo:text-center",children:e?(0,a.jsx)("span",{children:"EthDA is a scalable Ethereum layer2 Data Availability solution."}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"",children:"EthDA is a"}),"scalable Ethereum layer2",(0,a.jsx)("div",{children:"Data Availability solution."})]})}),(0,a.jsxs)("div",{className:"desc flex flex-col gap-4 mo:text-base",children:[(0,a.jsx)("div",{className:"dot-text",children:"EthDA is running with a permissionless set of decentralized sequencers."}),(0,a.jsx)("div",{className:"dot-text",children:"EthDA leverages DAS for blob sharding and permanent storage."}),(0,a.jsx)("div",{className:"dot-text",children:"EthDA supports EIP-4844 blob-carrying transactions, serving as Data Availability for L2s and dStorage for DApps."})]})]}),(0,a.jsx)("div",{className:"flex justify-center w-[560px] mo:w-full",children:(0,a.jsxs)("div",{className:"sm:text-right mo:text-center mo:w-full",children:[(0,a.jsx)(o(),{target:"_blank",href:"https://ethereum.org/en/roadmap/danksharding",className:"underline border border-primary rounded-lg px-4 mo:px-2 py-2 mo:py-1 text-sm text-primary mo:w-auto ",children:"Ethereum's Danksharding roadmap"}),(0,a.jsx)("div",{className:"mo:w-full",children:(0,a.jsx)("img",{src:"/what-2.png",alt:"what-2",width:"100%",className:"mo:mt-10 mo:bg-fill mo:w-full"})})]})})]})]})},With=()=>(0,a.jsxs)("div",{className:"bg-no-repeat mo:px-10",style:{backgroundImage:"url(/with-1.png)",backgroundSize:"1100px",backgroundPosition:"0 100px"},children:[(0,a.jsx)("div",{className:"title mo:text-center mo:text-[28px]",children:"With EthDA"}),(0,a.jsx)("div",{className:"desc mb-8 just mo:text-base mo:text-center",children:"With EthDA, Ethereum's scalability is enhanced by extending its data availability and storage at layer2"}),(0,a.jsxs)("div",{className:"subtitle mb-6 mo:text-center",children:[(0,a.jsx)("span",{className:"text-[25px] mo:text-xl text-primary",children:"L2s"})," Leverage EthDA for Data Availability."]}),(0,a.jsxs)("div",{className:"flex gap-8 mo:flex-wrap mo:w-full",children:[(0,a.jsxs)("div",{className:"w-[660px] mo:w-full",children:[(0,a.jsx)("div",{className:"flex gap-6 mb-8 mo:flex-wrap mo:w-full",children:[{name:"Cost saving"},{name:"Persistent DA"},{name:"High throughput"}].map((e,s)=>(0,a.jsx)("button",{className:"feature-button mo:w-full mo:text-sm mo:h-[42px] font-light",children:e.name},"btn_title_".concat(s)))}),(0,a.jsx)("img",{src:"/with-2.png",alt:"with",width:"90%",className:"mo:w-full"})]}),(0,a.jsxs)("div",{className:"screen w-[380px] mt-8 mo:mt-5 mo:w-full ",children:[(0,a.jsxs)("div",{className:"flex mb-4 gap-1",children:[(0,a.jsx)("div",{className:"screen-dot"}),(0,a.jsx)("div",{className:"screen-dot"}),(0,a.jsx)("div",{className:"screen-dot"})]}),(0,a.jsx)("div",{className:"screen-content  mo:text-base",children:"Optimistic rollups post compressed transaction data to EthDA via EIP-4844 blob-carrying transactions. EthDA employs DAS scheme to store blobs among a decentralized sequencer network, and posts storage proofs to Ethereum L1. Rollups check storage proofs to validate data storage, and download transaction data blobs from EthDA for fraud proving."}),(0,a.jsxs)("div",{className:"flex mt-4",children:[(0,a.jsx)("div",{className:"screen-bar w-[120px]"}),(0,a.jsx)("div",{className:"screen-bar w-[60px] ml-auto"}),(0,a.jsx)("div",{className:"screen-bar w-[60px] ml-4"})]})]})]})]}),Offer=()=>(0,a.jsxs)("div",{className:"bg-no-repeat pb-20 mo:px-10 ",style:{backgroundImage:"url(/offer-1.png)",backgroundSize:"900px",backgroundPosition:"300px top"},children:[(0,a.jsxs)("div",{className:"subtitle mt-20 mb-6 mo:text-center",children:[(0,a.jsx)("span",{className:"text-[25px] mo:text-xl text-primary ",children:"DApps"})," Leverage EthDA for Decentralized Storage"]}),(0,a.jsxs)("div",{className:"flex gap-6 mb-8 mo:w-full mo:flex-wrap",children:[(0,a.jsx)("button",{className:"feature-button mo:w-full mo:text-sm mo:font-light mo:h-[42px]",children:"Fully on-chain"}),(0,a.jsx)("button",{className:"feature-button mo:w-full mo:text-sm mo:font-light mo:h-[42px]",children:"ETH as fees"})]}),(0,a.jsxs)("div",{className:"flex gap-12 justify-between mo:flex-wrap mo:flex-col-reverse ",children:[(0,a.jsxs)("div",{className:"screen w-[380px] grow shrink-0 mo:w-full",children:[(0,a.jsxs)("div",{className:"flex mb-4 gap-1",children:[(0,a.jsx)("div",{className:"screen-dot"}),(0,a.jsx)("div",{className:"screen-dot"}),(0,a.jsx)("div",{className:"screen-dot"})]}),(0,a.jsx)("div",{className:"screen-content mo:text-base mo:font-light",children:"DApps use EthDA's dStorage infrastructures and toolset to store websites and user-generated data, making DApps fully-on-chain, censorship-resistant and unstoppable."}),(0,a.jsxs)("div",{className:"flex mt-4",children:[(0,a.jsx)("div",{className:"screen-bar w-[40px]"}),(0,a.jsx)("div",{className:"screen-bar w-[40px] ml-4"}),(0,a.jsx)("div",{className:"screen-bar w-[40px] ml-auto"}),(0,a.jsx)("div",{className:"screen-bar w-[40px] ml-4"})]})]}),(0,a.jsx)("div",{className:"shrink",children:(0,a.jsx)("img",{src:"/offer-2.png",alt:"offer",width:"80%",className:"mo:w-auto"})})]})]}),TelegramIcon=()=>(0,a.jsx)("svg",{width:"25",height:"20",viewBox:"0 0 25 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M9.0915 18.79L9.46694 13.1963L19.7646 4.04528C20.2204 3.63534 19.6707 3.43698 19.0673 3.79403L6.3562 11.7152L0.858767 9.99607C-0.321169 9.66547 -0.334578 8.85881 1.12693 8.27696L22.5401 0.130983C23.5189 -0.305408 24.4575 0.369015 24.0821 1.8501L20.435 18.79C20.1802 19.9934 19.4428 20.2843 18.4237 19.7289L12.8727 15.6824L10.2044 18.2346C9.896 18.5388 9.64124 18.79 9.0915 18.79Z",className:"fill-gray-400"})}),MediumIcon=()=>(0,a.jsx)("svg",{width:"26",height:"20",viewBox:"0 0 26 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M23.8385 2.35024L25.834 0.422258V0H18.9232L13.998 12.3863L8.39583 0H1.14974V0.422258L3.48047 3.25696C3.70833 3.46645 3.82552 3.77414 3.79622 4.08183V15.2209C3.86784 15.6236 3.74089 16.0327 3.46094 16.3241L0.833984 19.5417V19.9574H8.27539V19.5352L5.65169 16.3273C5.36849 16.036 5.23177 15.6301 5.29036 15.2242V5.58756L11.8236 19.964H12.582L18.2005 5.58756V17.0409C18.2005 17.3421 18.2005 17.4043 18.0052 17.6039L15.9837 19.5777V20H25.7884V19.5777L23.8385 17.6498C23.6693 17.5188 23.5814 17.2995 23.6172 17.0867V2.91326C23.5814 2.70049 23.6693 2.48118 23.8385 2.35024Z",className:"fill-gray-400"})}),TwitterIcon=()=>(0,a.jsx)("svg",{width:"26",height:"20",viewBox:"0 0 26 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M25.5007 2.37574C24.5814 2.76627 23.5809 3.04734 22.5504 3.15681C23.6139 2.53254 24.4221 1.54734 24.8037 0.37574C23.8212 0.952663 22.7096 1.37574 21.5529 1.59467C20.6155 0.609467 19.2845 0 17.8093 0C14.9701 0 12.6868 2.26627 12.6868 5.04734C12.6868 5.43787 12.7348 5.8284 12.813 6.20414C8.56166 5.98521 4.77005 3.98521 2.24932 0.923077C1.80466 1.67456 1.55229 2.53254 1.55229 3.47041C1.55229 5.22189 2.45663 6.76627 3.83567 7.67456C2.99442 7.64201 2.20125 7.40828 1.51924 7.03254V7.09467C1.51924 9.54734 3.27985 11.5799 5.62632 12.0473C5.19668 12.1568 4.737 12.2189 4.27732 12.2189C3.94383 12.2189 3.62836 12.1864 3.30989 12.142C3.95885 14.142 5.84865 15.5947 8.09898 15.642C6.33837 17 4.13311 17.7988 1.73856 17.7988C1.30893 17.7988 0.912342 17.784 0.500732 17.7367C2.77209 19.1716 5.46708 20 8.36938 20C17.7913 20 22.947 12.3136 22.947 5.64201C22.947 5.42308 22.947 5.20414 22.9319 4.98521C23.9294 4.26627 24.8037 3.37574 25.5007 2.37574Z",className:"fill-gray-400"})}),GithubIcon=()=>(0,a.jsx)("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M16.4083 3.4091C17.185 1.93182 16.2974 0 16.2974 0C14.3001 0 12.8577 1.36363 12.8577 1.36363C12.081 0.909079 9.52903 0.909079 9.52903 0.909079C9.52903 0.909079 6.97704 0.909079 6.20035 1.36363C6.20035 1.36363 4.75792 0 2.76071 0C2.76071 0 1.87305 1.93182 2.64975 3.4091C2.64975 3.4091 0.874453 5.11365 1.54018 8.75001C2.16577 12.1671 5.09077 13.0682 6.97702 13.0682C6.97702 13.0682 6.20033 13.75 6.31129 14.8864C6.31129 14.8864 5.20173 15.5682 4.09217 15.1137C2.98261 14.6591 2.42782 13.5227 2.42782 13.5227C2.42782 13.5227 1.31826 12.0455 0.2087 12.6136C0.2087 12.6136 -0.124166 12.9545 1.09636 13.5227C1.09636 13.5227 1.98401 14.8864 2.31688 15.6818C2.64974 16.4773 4.42504 17.1591 6.20035 16.7045V19.3182C6.20035 19.3182 6.20035 19.5454 5.75652 19.6591C5.31269 19.7727 5.31269 20 5.53462 20H13.5234C13.7453 20 13.7453 19.7727 13.3015 19.6591C12.8577 19.5454 12.8577 19.3182 12.8577 19.3182V16.7045C12.8577 16.7045 12.8675 15.3417 12.8577 14.8864C12.8333 13.7446 12.081 13.0682 12.081 13.0682C13.9673 13.0682 16.8923 12.1671 17.5179 8.74999C18.1836 5.11365 16.4083 3.4091 16.4083 3.4091Z",className:"fill-gray-400"})}),DiscordIcon=()=>(0,a.jsx)("svg",{width:"22",height:"18",viewBox:"0 0 22 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{d:"M18.704 2.07358C21.1504 5.70543 22.3588 9.80212 21.9072 14.5193C21.9062 14.5292 21.9031 14.5388 21.8982 14.5475C21.8933 14.5561 21.8866 14.5635 21.8785 14.5694C20.2411 15.7938 18.4087 16.7273 16.4602 17.3294C16.4464 17.3338 16.4314 17.3338 16.4176 17.3292C16.4037 17.3246 16.3917 17.3157 16.3831 17.3038C15.9715 16.7265 15.6022 16.1196 15.2783 15.4879C15.2738 15.4792 15.2711 15.4695 15.2705 15.4597C15.2699 15.4499 15.2713 15.44 15.2748 15.4307C15.2782 15.4215 15.2835 15.4131 15.2904 15.4061C15.2973 15.3991 15.3055 15.3936 15.3147 15.39C15.8999 15.1681 16.4656 14.8965 17.0055 14.5782C17.0152 14.5724 17.0233 14.5642 17.0291 14.5544C17.035 14.5447 17.0384 14.5336 17.0391 14.5222C17.0397 14.5108 17.0376 14.4994 17.0329 14.489C17.0282 14.4786 17.021 14.4696 17.0121 14.4626C16.8975 14.3765 16.7852 14.2875 16.675 14.1957C16.6653 14.1876 16.6535 14.1825 16.641 14.1809C16.6285 14.1793 16.6159 14.1814 16.6045 14.1868C13.1006 15.8215 9.26186 15.8215 5.71611 14.1868C5.70461 14.1817 5.6919 14.1799 5.67944 14.1816C5.66697 14.1834 5.65525 14.1887 5.64561 14.1968C5.53569 14.2881 5.42368 14.3767 5.30966 14.4626C5.30074 14.4696 5.29366 14.4788 5.28905 14.4892C5.28444 14.4997 5.28242 14.5111 5.28318 14.5225C5.28394 14.5339 5.28746 14.5449 5.29342 14.5547C5.29938 14.5644 5.3076 14.5725 5.31738 14.5782C5.85712 14.8907 6.41778 15.1654 7.00709 15.3911C7.01627 15.3944 7.02463 15.3997 7.03162 15.4066C7.0386 15.4134 7.04405 15.4217 7.0476 15.4309C7.05115 15.4401 7.05272 15.4499 7.05219 15.4597C7.05166 15.4695 7.04906 15.4791 7.04455 15.4879C6.72513 16.1239 6.35391 16.73 5.93754 17.3049C5.9288 17.3162 5.91686 17.3247 5.9033 17.329C5.88973 17.3334 5.87517 17.3335 5.86154 17.3294C3.91657 16.7252 2.08738 15.792 0.452015 14.5694C0.444057 14.5633 0.437415 14.5556 0.432493 14.5468C0.427572 14.538 0.424473 14.5283 0.423385 14.5182C0.0455595 10.4382 0.815512 6.30929 3.62435 2.07248C3.6312 2.06157 3.64119 2.05303 3.65298 2.04801C5.03538 1.40749 6.5158 0.935981 8.0634 0.666881C8.07711 0.664685 8.09116 0.666691 8.10373 0.672638C8.1163 0.678585 8.12681 0.6882 8.13391 0.700242C8.32557 1.04274 8.54367 1.48088 8.69237 1.83896C10.3338 1.58749 12.0033 1.58749 13.6447 1.83896C13.7934 1.48867 14.0038 1.04276 14.1944 0.701362C14.2012 0.688775 14.2118 0.678733 14.2247 0.672724C14.2376 0.666715 14.2521 0.665059 14.266 0.668002C15.8136 0.937102 17.2951 1.40861 18.6753 2.04692C18.6878 2.05199 18.6979 2.06148 18.704 2.07361L18.704 2.07358ZM9.52183 9.83105C9.53835 8.62451 8.66707 7.62703 7.57436 7.62703C6.48937 7.62703 5.62689 8.61672 5.62689 9.83105C5.62689 11.0454 6.507 12.034 7.57436 12.034C8.65824 12.034 9.52183 11.0443 9.52183 9.83105ZM16.7202 9.83105C16.7378 8.62451 15.8665 7.62703 14.7738 7.62703C13.6888 7.62703 12.8263 8.61672 12.8263 9.83105C12.8263 11.0454 13.7065 12.034 14.7738 12.034C15.8665 12.034 16.7202 11.0443 16.7202 9.83105Z",className:"fill-gray-400"})}),Footer=()=>(0,a.jsx)("footer",{className:"bg-gray-900 py-20 mo:py-10",children:(0,a.jsxs)("div",{className:"container mx-auto mo:flex mo:flex-row justify-center mo:flex-wrap",children:[(0,a.jsxs)("div",{className:"flex justify-between mo:flex-col ",children:[(0,a.jsx)("div",{className:"text-white text-[24px] mo:text-xl font-semibold mo:w-full mo:flex mo:justify-center",children:"Sign up for EthDA updates"}),(0,a.jsxs)("div",{className:"flex mo:flex-col mo:mt-5",children:[(0,a.jsx)("div",{className:"border border-[#FF6933] rounded-l-md mo:rounded-[10px] w-[300px] mo:w-[356px] flex items-center px-4 text-xs",children:(0,a.jsx)("input",{type:"text",className:"bg-transparent w-full mo:text-sm mo:font-light outline-0 text-white mo:h-[42px]",placeholder:"Email Address"})}),(0,a.jsx)("button",{className:"mo:mt-5 bg-gradient-to-r mo:w-[356px] mo:h-[42px] mo:text-sm mo:font-light  from-[#FF6933] to-[#FF2F00] h-[36px] w-[120px]  text-sm rounded-r-md mo:rounded-r-[10px] mo:rounded-l-[10px]  text-white",children:"SUBSCRIBE"})]})]}),(0,a.jsx)("div",{className:"bg-[#333] my-10 mo:my-5 h-[1px] w-full"}),(0,a.jsxs)("div",{className:"flex justify-between items-center mo:flex-col mo:w-full ",children:[(0,a.jsx)("div",{className:"text-gray-500 text-sm ",children:"Copyright \xa9 EthDA 2023 All Rights Reserved"}),(0,a.jsxs)("div",{className:"flex gap-10 mo:gap-[60px] mo:my-5 mo:w-full mo:justify-center",children:[(0,a.jsx)(o(),{href:"https://t.me/CrustNetwork",target:"_blank",className:"link-icon",children:(0,a.jsx)(TelegramIcon,{})}),(0,a.jsx)(o(),{href:"https://crustnetwork.medium.com/",target:"_blank",className:"link-icon",children:(0,a.jsx)(MediumIcon,{})}),(0,a.jsx)(o(),{href:"https://twitter.com/CrustNetwork",target:"_blank",className:"link-icon",children:(0,a.jsx)(TwitterIcon,{})}),(0,a.jsx)(o(),{href:"https://github.com/crustio",target:"_blank",className:"link-icon",children:(0,a.jsx)(GithubIcon,{})}),(0,a.jsx)(o(),{href:"https://discord.com/invite/Jbw2PAUSCR",target:"_blank",className:"link-icon",children:(0,a.jsx)(DiscordIcon,{})})]})]})]})});var v=t(9394);let Competitive=()=>(0,a.jsxs)("div",{className:"py-28 mo:py-5 bg-gradient-to-b from-[rgb(245,230,221)] to-[rgb(249,246,241)] ",children:[(0,a.jsx)("div",{className:"text-center title mb-10",children:"Competitive Landscape"}),(0,a.jsx)("div",{className:"container mx-auto  mo:mx-10 mo:w-auto  ",children:(0,a.jsx)("div",{className:"table-container ",children:(0,a.jsxs)("table",{className:"",children:[(0,a.jsxs)("tr",{className:"no-border",children:[(0,a.jsx)("th",{children:"\xa0"}),(0,a.jsx)("th",{children:(0,a.jsx)(l(),{src:"/ethda.svg",alt:"ethda",width:101,height:22})}),(0,a.jsx)("th",{children:(0,a.jsx)(l(),{src:"/celestia.svg",alt:"ethda",width:110,height:28})}),(0,a.jsx)("th",{children:(0,a.jsx)(l(),{src:"/avail.svg",alt:"ethda",width:97,height:28})}),(0,a.jsx)("th",{children:(0,a.jsx)(l(),{src:"/eigenda.svg",alt:"ethda",width:134,height:28})}),(0,a.jsxs)("th",{children:[(0,a.jsx)(l(),{src:"/eth.svg",alt:"ethda",width:144,height:30}),(0,a.jsx)("div",{className:"text-[10px] mt-1 pl-7",children:"(Post-EIP4844)"})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("div",{className:" mo:w-[120px]",children:"Technology"})}),(0,a.jsx)("td",{className:"bg-[#F6E5DC]  font-medium",children:(0,a.jsx)("div",{className:" mo:w-[200px] ",children:"Ethereum L2"})}),(0,a.jsx)("td",{children:(0,a.jsx)("div",{className:" mo:w-[200px]",children:"Tendermint"})}),(0,a.jsx)("td",{children:(0,a.jsx)("div",{className:" mo:w-[200px]",children:"Substrate"})}),(0,a.jsx)("td",{children:(0,a.jsx)("div",{className:" mo:w-[200px]",children:"Smart Contract"})}),(0,a.jsx)("td",{children:(0,a.jsx)("div",{className:" mo:w-[200px]",children:"Ethereum"})})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Payment"}),(0,a.jsx)("td",{className:"bg-[#F6E5DC]  font-medium",children:"$ETH"}),(0,a.jsx)("td",{children:"$TIA"}),(0,a.jsx)("td",{children:"TBD"}),(0,a.jsx)("td",{children:"$ETH"}),(0,a.jsx)("td",{children:"$ETH"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Data Retention"}),(0,a.jsx)("td",{className:"bg-[#F6E5DC]  font-medium",children:"Permanent"}),(0,a.jsx)("td",{children:"Temporary"}),(0,a.jsx)("td",{children:"Temporary"}),(0,a.jsx)("td",{children:"Temporary"}),(0,a.jsx)("td",{children:"Temporary"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"dStorage"}),(0,a.jsx)("td",{className:"bg-[#F6E5DC]  font-medium",children:"Yes"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"Yes"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Data Availability sampling"}),(0,a.jsx)("td",{className:"bg-[#F6E5DC]  font-medium",children:"Yes"}),(0,a.jsx)("td",{children:"Yes"}),(0,a.jsx)("td",{children:"Yes"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"No"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Proof scheme"}),(0,a.jsx)("td",{className:"bg-[#F6E5DC]  font-medium",children:"Validity Proofs"}),(0,a.jsx)("td",{children:"Fraud Proofs"}),(0,a.jsx)("td",{children:"Validity Proofs"}),(0,a.jsx)("td",{children:"Validity Proofs"}),(0,a.jsx)("td",{children:"N/A"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Ability to scale"}),(0,a.jsx)("td",{className:"bg-[#F6E5DC]  font-medium",children:"Yes"}),(0,a.jsx)("td",{children:"Yes"}),(0,a.jsx)("td",{children:"Yes"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"Yes"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Cost"}),(0,a.jsx)("td",{className:"bg-[#F6E5DC]  font-medium",children:"Low"}),(0,a.jsx)("td",{children:"Low"}),(0,a.jsx)("td",{children:"Low"}),(0,a.jsx)("td",{children:"TDB"}),(0,a.jsx)("td",{children:"High"})]})]})})})]});var w=t(3299);function Home(){let[e,s]=(0,d.useState)(!1),[t,i]=(0,d.useState)(),[l,r]=(0,d.useState)(!1),getWrapperWindowWidth=()=>document.getElementById("wrapperContainer"),getWindowWidth=()=>window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,handleResize=()=>{var e;i(null===(e=getWrapperWindowWidth())||void 0===e?void 0:e.clientWidth),r(900>=getWindowWidth())};return(0,d.useEffect)(()=>(handleResize(),window.addEventListener("resize",handleResize),()=>{window.removeEventListener("resize",handleResize)}),[]),(0,d.useEffect)(()=>{l&&s(!0)},[l]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Banner,{}),(0,a.jsxs)("div",{className:"bg-[rgb(252,246,238)] ",children:[(0,a.jsxs)("div",{className:"container mx-auto pt-20 mo:pt-10",children:[(0,a.jsx)(What,{}),(0,a.jsx)(With,{}),(0,a.jsx)(Offer,{})]}),(0,a.jsx)("div",{style:{backgroundImage:"url(/why-bg.png)",backgroundSize:"100% 100%"},className:"py-24 mo:py-10 mx-8 mo:mx-0 flex items-center justify-center py-16 bg-no-repeat   ",onMouseEnter:()=>!l&&s(!0),onMouseLeave:()=>!l&&s(!1),children:(0,a.jsxs)("div",{id:"wrapperContainer",className:"w-[660px] mo:px-10 mo:w-full ",children:[(0,a.jsxs)("div",{className:" mo:flex mo:justify-between",children:[(0,a.jsx)("div",{className:"relative hidden mo:inline",children:(0,a.jsxs)(w.fC,{children:[(0,a.jsx)(w.xz,{asChild:!0,children:(0,a.jsxs)("button",{className:"why-button mo:py-3 mo:px-3 ".concat(e?"active":""),children:["Security",(0,a.jsx)(v.s7Z,{className:"w-[20px] h-[20px]"})]})}),(0,a.jsx)(w.h_,{children:(0,a.jsx)(w.VY,{side:l?"bottom":"right",align:"start",style:{width:t+"px"},children:(0,a.jsxs)("div",{className:"why-popover active w-[380px] mo:w-auto mo:mx-10  mo:mt-[20px] mo:h-[258px] ",style:{transform:l?"none":"translateX(-380px)"},children:[(0,a.jsx)("div",{className:"text-[16px]  mo:text-lg mo:font-medium font-medium mb-2",children:"Data Availability Sampling Mechanism"}),(0,a.jsx)("div",{className:"text-sm mo:text-base mo:font-medium leading-7",children:"EthDA employs DAS to secure DA data storage, and derives security from Ethereum by verifying and settling state transitions on L1"})]})})})]})}),(0,a.jsx)("div",{className:"flex justify-end mb-12",children:(0,a.jsx)("div",{className:"relative h-[48px]",children:(0,a.jsxs)(w.fC,{children:[(0,a.jsx)(w.xz,{asChild:!0,children:(0,a.jsxs)("button",{className:"why-button mo:py-3 mo:px-3 ".concat(e?"active":""),children:["Seamless",(0,a.jsx)(v.s7Z,{className:"w-[20px] h-[20px]"})]})}),(0,a.jsx)(w.h_,{children:(0,a.jsx)(w.VY,{sideOffset:5,align:"start",style:{width:t+"px"},className:" mo:mt-[30px] ",children:(0,a.jsxs)("div",{className:"".concat(!l&&"why-popover"," mo:backdrop-blur-lg mo:w-auto mo:h-[258px] w-[400px]   mo:mx-10  mo:whitespace-normal mo:p-4 mo:text-left  mo:border mo:border-primary    mo:rounded-2xl  mo:text-[#373C4F] mo:bg-[rgba(250,247,243,.6)]"),children:[(0,a.jsx)("div",{className:"text-[16px] mo:text-lg font-medium mo:font-medium mb-2 mo:w-full",children:"Native Blob-Carrying Transactions Support"}),(0,a.jsx)("span",{className:"text-sm mo:text-base mo:font-normal leading-7 w-full ",children:"EthDA bolsters on-chain availability and storage capabilities for large data sets through its native support for blob-carrying transactions, enabling sharding and storage of large data blocks."})]})})})]})})})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between  mo:inline-block mb-12  mo:w-full",children:[(0,a.jsx)("div",{className:"relative mo:hidden",children:(0,a.jsxs)(w.fC,{children:[(0,a.jsx)(w.xz,{asChild:!0,children:(0,a.jsxs)("button",{className:"why-button ".concat(e?"active":""),children:["Security",(0,a.jsx)(v.s7Z,{className:"w-[20px] h-[20px]"})]})}),(0,a.jsx)(w.h_,{children:(0,a.jsx)(w.VY,{side:"right",align:"end",style:{width:t+"px"},className:"mo:max-w-[430px] mo:px-10 mo:mt-[30px]",children:(0,a.jsxs)("div",{className:"why-popover active w-[380px] mo:backdrop-blur-lg mo:w-full mo:whitespace-normal mo:p-4 mo:text-left  mo:border mo:border-primary    mo:rounded-2xl  mo:text-[#373C4F] mo:bg-[rgba(250,247,243,.6)]",style:{transform:"translateX(-380px)"},children:[(0,a.jsx)("div",{className:"text-[16px] font-medium mb-2",children:"Data Availability Sampling Mechanism"}),(0,a.jsx)("div",{className:"text-sm leading-7",children:"EthDA employs DAS to secure DA data storage, and derives security from Ethereum by verifying and settling state transitions on L1"})]})})})]})}),(0,a.jsxs)("div",{className:"text-[80px] mo:w-full  mo:text-[50px] font-bold leading-[90px] mo:leading-[70px] mo:text-center mo:flex mo:flex-col mo:justify-center ",children:[(0,a.jsx)("div",{children:"Why"}),(0,a.jsx)("div",{children:"EthDA"})]}),(0,a.jsx)("button",{className:"w-[100px] mo:hidden"})]}),(0,a.jsx)("div",{className:"flex justify-end pr-20 mo:pr-0 mo:justify-center ",children:(0,a.jsx)("div",{className:"relative h-[48px]",children:(0,a.jsxs)(w.fC,{children:[(0,a.jsx)(w.xz,{asChild:!0,children:(0,a.jsxs)("button",{className:"why-button mo:py-3 mo:px-3 ".concat(e?"active":""),children:["Alignment",(0,a.jsx)(v.s7Z,{className:"w-[20px] h-[20px]"})]})}),(0,a.jsx)(w.h_,{children:(0,a.jsx)(w.VY,{sideOffset:5,align:"start",side:l?"top":"bottom",style:{width:t+"px"},children:(0,a.jsxs)("div",{className:"mo:h-[258px]  mo:backdrop-blur-lg why-popover w-[480px] mo:w-auto mo:mt-[-210px] mo:mx-10 ",children:[(0,a.jsx)("div",{className:"text-[16px] font-medium mb-2",children:"A Fully Ethereum-based Layer 2 Solution"}),(0,a.jsx)("div",{className:"text-sm leading-7",children:"As an Ethereum layer2 network, EthDA is fully aligned with Ethereum technologies and features, adhering to Ethereum’s danksharding roadmap in its design and implementation."})]})})})]})})})]})})]}),(0,a.jsx)(Competitive,{}),(0,a.jsx)(Footer,{})]})}}},function(e){e.O(0,[787,982,310,196,971,472,744],function(){return e(e.s=4749)}),_N_E=e.O()}]);