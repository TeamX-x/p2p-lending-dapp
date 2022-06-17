(this["webpackJsonpp2p-loan-dapp"]=this["webpackJsonpp2p-loan-dapp"]||[]).push([[0],{107:function(e,t){var n=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"dev-1655387429538-21290179783027";e.exports=function(e){switch(e){case"production":case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:n,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:n,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:n,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org",explorerUrl:"https://explorer.betanet.near.org"};case"local":return{networkId:"local",nodeUrl:"http://localhost:3030",keyPath:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).HOME,"/.near/validator_key.json"),walletUrl:"http://localhost:4000/wallet",contractName:n};case"test":case"ci":return{networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:n,masterAccount:"test.near"};case"ci-betanet":return{networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:n,masterAccount:"test.near"};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}},206:function(e,t){},216:function(e,t){},234:function(e,t){},261:function(e,t,n){},356:function(e,t,n){},358:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(18),a=n.n(o),c=(n(143),n(19)),i=n(31),s=n(76),l=n(107),d=n.n(l),b=d()("production");function p(){return(p=Object(i.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.connect)(Object.assign({deps:{keyStore:new s.keyStores.BrowserLocalStorageKeyStore}},b));case 2:return t=e.sent,window.walletConnection=new s.WalletConnection(t),window.accountId=window.walletConnection.getAccountId(),e.next=7,new s.Contract(window.walletConnection.account(),b.contractName,{viewMethods:["get_contract_info"],changeMethods:["new","deposit_loan","add_user"]});case 7:window.contract=e.sent;case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){window.walletConnection.signOut(),window.location.replace(window.location.origin+window.location.pathname)}function j(){window.walletConnection.requestSignIn(b.contractName)}n(261);var g=n(63),u=n(8),w=function(){return Object(u.jsx)("header",{className:"header",children:Object(u.jsxs)(g.b,{children:[Object(u.jsx)("img",{src:"https://bafkreifwn45g2fkyvzkuoiqmcteqfxoo63xzhdl2bm5dqhbf5h2xx4aswe.ipfs.nftstorage.link/",alt:"logo",style:{height:80,marginBottom:40}}),window.walletConnection.isSignedIn()?Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("button",{style:{background:"transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box",borderRadius:40,float:"right"},onClick:h,children:[" ",window.accountId," "]})}):Object(u.jsx)("button",{style:{background:"transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box",borderRadius:40,float:"right"},onClick:j,children:"Wallet"})]})})},O=n(6),x=n(366);n(334),n(368),n(367);var f=x.a.Title,m=function(){var e=Object(r.useState)(!1),t=Object(O.a)(e,2),n=(t[0],t[1],Object(r.useState)(!1)),o=Object(O.a)(n,2),a=(o[0],o[1],Object(r.useState)("Content of the modal")),s=Object(O.a)(a,2),l=(s[0],s[1],Object(r.useState)(new Date)),d=Object(O.a)(l,2),b=(d[0],d[1],Object(r.useState)(!1)),p=Object(O.a)(b,2),h=(p[0],p[1]),j=Object(r.useState)(),w=Object(O.a)(j,2),x=w[0],m=w[1];return Object(r.useEffect)(Object(i.a)(Object(c.a)().mark((function e(){var t;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.accountId){e.next=14;break}return e.prev=1,e.next=4,window.contract.get_contract_info();case 4:t=e.sent,m(t),console.log("info in useEffect: ",x),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),console.log("set show-init to true"),h(!0);case 14:case"end":return e.stop()}}),e,null,[[1,9]])}))),[]),console.log("show info",x),Object(u.jsx)("section",{children:Object(u.jsx)(g.b,{children:Object(u.jsxs)(g.c,{className:"justify-content-center",children:[Object(u.jsxs)(g.a,{lg:"5",md:"6",style:{marginTop:90},className:"justify-content-center",children:[Object(u.jsx)(f,{style:{marginTop:50,textAlign:"center",fontSize:34,fontWeight:"bold"},level:3,children:"P2P Lending + Commitment"}),Object(u.jsx)("p",{style:{fontWeight:"lighter",fontSize:18},children:"P2P lending with a commitment to pay on time. here's how you can do exactly that."}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{style:{background:"transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box",borderRadius:40,marginLeft:50,width:180},children:"Deposit"}),Object(u.jsx)("button",{style:{background:"transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box",borderRadius:40,marginLeft:50,width:"180px"},children:"Pay"})]}),Object(u.jsxs)("div",{style:{marginTop:30},children:[Object(u.jsx)("button",{style:{background:"transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box",borderRadius:40,marginLeft:50,width:180},children:"Add Lenders"}),Object(u.jsx)("button",{style:{background:"transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box",borderRadius:40,marginLeft:50,width:"180px"},children:"Add Deadline"})]})]}),Object(u.jsx)(g.a,{lg:"5",md:"6",children:Object(u.jsx)("img",{style:{width:"100%"},src:"https://bafkreibgh6pusv5kd5auvyec2hhexk7pj2npaf7nnbdkyi4lxaaqueql4y.ipfs.nftstorage.link/",alt:"img"})})]})})})},v=n(5),y=(n(356),function(){var e;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"backgroundimage",style:{marginTop:100,height:500},children:[Object(u.jsx)("div",{children:Object(u.jsxs)("svg",(e={style:{height:100,display:"block",margin:"auto"},viewBox:"0 0 288 288",xmlns:"http://www.w3.org/2000/svg"},Object(v.a)(e,"xmlns","http://www.w3.org/1999/xlink"),Object(v.a)(e,"children",[Object(u.jsxs)("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:"76.81",x2:"211.16",y1:"211.17",y2:"76.81",children:[Object(u.jsx)("stop",{offset:".21","stop-color":"#24272a"}),Object(u.jsx)("stop",{offset:".42","stop-color":"#24272a","stop-opacity":"0"}),Object(u.jsx)("stop",{offset:".59","stop-color":"#24272a","stop-opacity":"0"}),Object(u.jsx)("stop",{offset:".81","stop-color":"#24272a"})]}),Object(u.jsx)("path",{d:"m88.46 216a16.45 16.45 0 0 0 12.46-5.71l112.56-130.57a16.42 16.42 0 0 0 -13.94-7.72 16.46 16.46 0 0 0 -12.41 5.65l-113.13 129.8a16.46 16.46 0 0 0 14.46 8.55z",fill:"url(#a)"}),Object(u.jsx)("path",{d:"m88.46 216a16.46 16.46 0 0 0 7.54-1.83v-109l87.45 104.94a16.44 16.44 0 0 0 12.64 5.89h3.45a16.46 16.46 0 0 0 16.46-16.46v-111.08a16.46 16.46 0 0 0 -16.46-16.46 16.36 16.36 0 0 0 -7.54 1.81v109.05l-87.45-104.94a16.44 16.44 0 0 0 -12.64-5.92h-3.45a16.46 16.46 0 0 0 -16.46 16.46v111.08a16.46 16.46 0 0 0 16.46 16.46z",fill:"#24272a"})]),e))}),Object(u.jsx)("h2",{style:{textAlign:"center",fontSize:30,fontWeight:"lighter"},children:"Total lending volume 24h:"}),Object(u.jsx)("p",{style:{textAlign:"center",color:"red"},children:"136 NEAR"})]})})});d()("production").networkId;function k(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(w,{}),Object(u.jsx)(m,{}),Object(u.jsx)(y,{})]})}window.nearInitPromise=function(){return p.apply(this,arguments)}().then((function(){a.a.render(Object(u.jsx)(k,{}),document.querySelector("#root"))})).catch(console.error)}},[[358,1,2]]]);
//# sourceMappingURL=main.bc1225b8.chunk.js.map