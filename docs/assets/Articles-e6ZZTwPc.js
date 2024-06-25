var ve=Object.defineProperty;var _e=(t,o,e)=>o in t?ve(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var P=(t,o,e)=>(_e(t,typeof o!="symbol"?o+"":o,e),e);import{a as G,b as fe,c as ye,d as he,e as be,f as ge}from"./element-plus-BJNhNJy6.js";import{u as we}from"./vue-router-BKcYu3e2.js";import{f as ke,ac as Se,r as d,d as te,_ as I,o as b,c as S,B as p,C as g,V as x,G as f,u,A as xe,a as s,F as C,O as J,L as V,$ as Y,n as Z,a9 as Te,aa as Ce,E as Q,K as Ee}from"./@vue-DeiGdm1c.js";import{p as ze,m as Ie,d as Le,e as Re}from"./@element-plus-D2ZrbeLh.js";/* empty css              */import{i as F,a as oe,_ as se,b as Ae}from"./index-BbV8l8Yw.js";import{a as Be}from"./axios-Cm0UX6qg.js";import"./@ctrl-D_sRHO8g.js";import"./@vueuse-BYe3nKFQ.js";import"./lodash-es-B8hPxd1J.js";import"./pinia-CkjTwEMl.js";const Ne=(t,o)=>{let e=!1;ke(()=>{e||t()}),Se(()=>{e&&o(),e=!0})},je="blossom_web_",M={set(t,o){window.localStorage.setItem(D(t),JSON.stringify(o))},get(t){let o=window.localStorage.getItem(D(t));return JSON.parse(o)},remove(t){window.localStorage.removeItem(D(t))},clear(){window.localStorage.clear()}},D=t=>je+t,$="BLOSSOM-ARTICLE-FONT-SZIE",z=d(M.get($)||.9),Oe=()=>{z.value+=.1,M.set($,z.value)},Pe=()=>{z.value-=.1,M.set($,z.value)},Ve=()=>z.value,X=()=>z.value+"rem",De=t=>{let o=t.querySelectorAll("h1, h2, h3, h4, h5, h6"),e=[];for(let c=0;c<o.length;c++){let i=o[c],l=1,a=i.innerText,r=i.id;switch(i.localName){case"h1":l=1;break;case"h2":l=2;break;case"h3":l=3;break;case"h4":l=4;break;case"h5":l=5;break;case"h6":l=6;break}let E={content:a,clazz:"toc-"+l,id:r};e.push(E)}return e},Fe=t=>{let o=document.getElementById(t);o==null||o.scrollIntoView(!0)},Me=t=>F(t.icon)&&(t.icon.startsWith("http")||t.icon.startsWith("https")),$e=t=>F(t.icon),qe=t=>{let o=[];return t.t.forEach(e=>{e.toLocaleLowerCase()==="subject"?o.unshift({content:"专题",bgColor:"#565656",icon:"bl-a-lowerrightpage-line"}):e.toLocaleLowerCase()==="toc"?o.push({content:"目录",bgColor:"#939393"}):o.push({content:e})}),o},Ue=(t,o,e,c,i)=>{if(c==="copyPreCode"){let l=document.getElementById(i);if(l){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(l.innerText);{let a=document.createElement("textarea");return a.value=l.innerText,a.style.position="absolute",a.style.opacity="0",a.style.left="-999999px",a.style.top="-999999px",document.body.appendChild(a),a.focus(),a.select(),new Promise((r,E)=>{document.execCommand("copy")?r():E(),a.remove()})}}}},We=()=>{console.log("Blossom-web ===> 环境:","production")};We();const He=()=>window.blconfig.SYS.GITHUB_URL,Ke=He();class Ge{constructor(o){P(this,"instance");P(this,"baseConfig",{baseURL:Ke,timeout:6e4});this.instance=Be.create(Object.assign(this.baseConfig,o)),this.instance.interceptors.request.use(e=>e,e=>Promise.reject(e)),this.instance.interceptors.response.use(e=>{e.status!==200&&Promise.reject(e);let i=!1;if((e.config.responseType==="blob"||e.headers["content-type"]==="application/force-download")&&(oe(e.data.code)?ee(e.data.code)||(i=!1):i=!0),ee(e.data.code)&&(i=!0),i)return e.data;{let l=e.data;return l.url=e.config.url,G({message:e.data.msg,duration:9999}),Promise.reject(e)}},e=>{let c=e.message;return e.code==="ERR_NETWORK"&&(c="网络错误,请检查您的网络是否通畅"),G({message:c}),Promise.reject(e)})}request(o){return this.instance.request(o)}get(o,e){return this.instance.get(o,e)}post(o,e,c){return this.instance.post(o,e,c)}delete(o,e){return this.instance.delete(o,e)}getFile(o){return this.instance.get(o)}}const ee=t=>t===0||t==="0"||t===2e4||t==="20000",ne=new Ge,Je=t=>ne.get("/docTree.json"),Ye=t=>ne.getFile("/doc/20151/doc.html"),Ze={class:"detail"},Qe=te({__name:"ArticleSetting",setup(t){return(o,e)=>{const c=I("bl-tag"),i=fe,l=I("bl-row");return b(),S("div",Ze,[p(l,null,{default:g(()=>[x(" 文章字体大小： "),p(c,{style:{"margin-right":"15px"}},{default:g(()=>[x(f(u(Ve)().toFixed(1)),1)]),_:1}),p(i,{size:"small",icon:u(ze),onClick:e[0]||(e[0]=a=>u(Oe)())},null,8,["icon"]),p(i,{size:"small",icon:u(Ie),onClick:e[1]||(e[1]=a=>u(Pe)())},null,8,["icon"])]),_:1})])}}}),Xe=se(Qe,[["__scopeId","data-v-75d33a22"]]),y=t=>(Te("data-v-5727e048"),t=t(),Ce(),t),et={class:"articles-root"},tt={class:"headmenu"},ot=y(()=>s("div",{class:"iconbl bl-model-line"},null,-1)),st=y(()=>s("div",{style:{"font-size":"0.8rem"}},"文章列表",-1)),nt=y(()=>s("div",{style:{"font-size":"0.8rem"}},"目录",-1)),lt=y(()=>s("div",{class:"iconbl bl-list-ordered"},null,-1)),at={class:"main"},it={class:"doc-name"},ct=["src"],rt={key:1,class:"icon menu-icon","aria-hidden":"true"},dt=["xlink:href"],ut={class:"article-name"},pt=["innerHTML"],mt={class:"viewer-toc"},vt={key:0,class:"doc-info"},_t={class:"doc-name",style:{"font-size":"15px"}},ft={class:"doc-subtitle"},yt=y(()=>s("span",{class:"iconbl bl-pen-line"},null,-1)),ht=y(()=>s("span",{class:"iconbl bl-read-line"},null,-1)),bt=y(()=>s("span",{class:"iconbl bl-like-line"},null,-1)),gt={class:"doc-subtitle"},wt=y(()=>s("span",{class:"iconbl bl-a-clock3-line"},null,-1)),kt={class:"doc-subtitle"},St=y(()=>s("span",{class:"iconbl bl-a-clock3-line"},null,-1)),xt=y(()=>s("div",{class:"toc-title"},"目录",-1)),Tt={class:"toc-content"},Ct=["onClick"],Et=te({__name:"Articles",setup(t){Ne(()=>{window.onHtmlEventDispatch=Ue,e(),window.addEventListener("resize",N),K()},()=>{e(),window.addEventListener("resize",N),K()}),xe(()=>{window.removeEventListener("resize",N)});const o=d(),e=()=>{let n=c.query.articleId;le(()=>{Z(()=>{o.value.setCurrentKey(l.value)})}),oe(n)&&(l.value=n,U({ty:3,i:n}))},c=we(),i=d(!0),l=d(""),a=d([]),r=d({id:0,pid:0,name:"",tags:[],sort:0,starStatus:0,openStatus:0,type:3,html:`<div style="color:#E3E3E3;width:100%;height:300px;display:flex;justify-content: center;
    align-items: center;font-size:25px;">请在左侧菜单选择文章</div>`}),E=d([]),q=d([]),L=d(),le=n=>{i.value=!0,a.value=[],q.value=[];const m=v=>{a.value=v.data,a.value.forEach(j=>{q.value.push(j.i.toString())}),n&&n()};Je().then(v=>m(v)).finally(()=>i.value=!1)},U=async n=>{n.ty==3&&(await ae(n.i),window.history.replaceState("","","#/articles?articleId="+n.i),Z(()=>{L.value.scrollTo({top:0}),ie(L.value)}))},ae=async n=>{const m=v=>{Ae(v.data)||(r.value=v.data)};await Ye().then(v=>m(v))},ie=async n=>{E.value=De(n)},R=d(!1),ce=()=>{R.value=!0},T=d({display:"none"}),A=d(!1),w=d({display:"none",opacity:0}),B=d(!1),k=d({display:"none",opacity:0}),W=n=>{A.value=n,n&&(T.value={display:"block"},w.value={display:"block",opacity:0},setTimeout(()=>{w.value={display:"block",opacity:1}},1)),n||(w.value={display:"block",opacity:0},setTimeout(()=>{w.value={display:"none",opacity:0}},300))},H=n=>{B.value=n,n&&(T.value={display:"block"},k.value={display:"block",opacity:0},setTimeout(()=>{k.value={display:"block",opacity:1}},1)),n||(k.value={display:"block",opacity:0},setTimeout(()=>{k.value={display:"none",opacity:0}},300))},K=()=>{let n=document.body.clientWidth;n>1100&&(w.value={display:"block",opacity:1}),n>1100&&(T.value={display:"none"},k.value={display:"block",opacity:1})},re=()=>{W(!1),H(!1),T.value={display:"none"}},N=()=>{let n=document.body.clientWidth;n<1100&&(A.value=!1,w.value={display:"none",opacity:0}),n>1100&&(T.value={display:"none"},w.value={display:"block",opacity:1}),n<1100&&(B.value=!1,k.value={display:"none",opacity:0}),n>1100&&(T.value={display:"none"},k.value={display:"block",opacity:1})};return(n,m)=>{const v=I("bl-row"),j=I("bl-tag"),de=ye,ue=he,pe=be,me=ge;return b(),S(V,null,[s("div",et,[s("div",{class:"mask",style:C(T.value),onClick:re},null,4),s("div",tt,[p(v,{onClick:m[0]||(m[0]=h=>W(!A.value))},{default:g(()=>[ot,st]),_:1}),p(v,{just:"flex-end",onClick:m[1]||(m[1]=h=>H(!B.value))},{default:g(()=>[nt,lt]),_:1})]),s("div",at,[s("div",{class:"doc-tree-container",style:C(w.value)},[p(de,{ref_key:"DocTreeRef",ref:o,class:"doc-tree",data:a.value,"highlight-current":!0,indent:14,icon:u(Le),"node-key":"i",onNodeClick:U},{default:g(({_node:h,data:_})=>[s("div",{class:"menu-item-wrapper",style:C({marginTop:_.p==="0"?"5px":"1px",marginBottom:_.p==="0"?"5px":"1px"})},[s("div",{class:Q([_.t.includes("subject")?"subject-title":"doc-title"])},[s("div",it,[u(Me)(_)?(b(),S("img",{key:0,class:"menu-icon-img",src:_.icon},null,8,ct)):u($e)(_)?(b(),S("svg",rt,[s("use",{"xlink:href":"#"+_.icon},null,8,dt)])):J("",!0),s("div",{class:"name-wrapper",style:C({maxWidth:u(F)(_.icon)?"calc(100% - 25px)":"100%"})},f(_.n),5),(b(!0),S(V,null,Y(u(qe)(_),O=>(b(),Ee(j,{"bg-color":O.bgColor,icon:O.icon},{default:g(()=>[x(f(O.content),1)]),_:2},1032,["bg-color","icon"]))),256))])],2)],4)]),_:1},8,["data","icon"])],4),s("div",{class:"doc-content-container",ref_key:"PreviewRef",ref:L,style:C({fontSize:u(X)()})},[s("div",ut,f(r.value.name),1),p(ue,{font:`{
            color: 'rgba(157, 157, 157, 0.2)',
            fontSize: '13',
            textBaseline: 'hanging'
          }`,content:r.value.id>0?"Graython":"",gap:"[200, 200]"},{default:g(()=>[s("div",{class:"bl-preview",style:C({fontSize:u(X)()}),innerHTML:r.value.html},null,12,pt)]),_:1},8,["content"])],4),s("div",{class:"toc-container",style:C(k.value)},[s("div",mt,[r.value.id!=0?(b(),S("div",vt,[s("div",_t,f(r.value.name),1),s("div",ft,[yt,x(" "+f(r.value.words)+" 字 | ",1),ht,x(" "+f(r.value.uv)+" | ",1),bt,x(" "+f(r.value.likes),1)]),s("div",gt,[wt,x(" 公开 "+f(r.value.openTime),1)]),s("div",kt,[St,x(" 修改 "+f(r.value.syncTime),1)])])):J("",!0),xt,s("div",Tt,[(b(!0),S(V,null,Y(E.value,h=>(b(),S("div",{key:h.id,class:Q(["toc-item","link",h.clazz]),onClick:_=>u(Fe)(h.id)},f(h.content),11,Ct))),128))])])],4),s("div",{class:"module-workbench",onClick:ce},[p(pe,{color:"#7b7b7ba9"},{default:g(()=>[p(u(Re))]),_:1})])])]),p(me,{modelValue:R.value,"onUpdate:modelValue":m[2]||(m[2]=h=>R.value=h),class:"center-drawer",direction:"btt","close-on-click-modal":!0,"with-header":!0,"destroy-on-close":!0,size:"70px"},{default:g(()=>[p(Xe)]),_:1},8,["modelValue"])],64)}}}),Ft=se(Et,[["__scopeId","data-v-5727e048"]]);export{Ft as default};
