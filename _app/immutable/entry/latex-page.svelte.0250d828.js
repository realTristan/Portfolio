import{S as Z,i as j,s as ee,k as g,r as E,a as R,N as te,l as v,m as w,u as T,h as f,c as A,p as h,q as le,H as u,b as C,n as U,M as Q,o as re,e as Y,v as W}from"../chunks/index.c10d3ee8.js";function B(p,o,b){const a=p.slice();a[3]=o[b];const s=a[0][a[3]];return a[4]=s,a}function G(p,o,b){const a=p.slice();return a[7]=o[b],a}function J(p){let o,b=p[7].name+"",a,s,c,l,r,e,i,t,D,F,x;return{c(){o=g("h2"),a=E(b),s=R(),c=g("div"),l=g("a"),r=E("View PDF"),i=R(),t=g("a"),D=E("View Code"),x=R(),this.h()},l(_){o=v(_,"H2",{class:!0});var m=w(o);a=T(m,b),m.forEach(f),s=A(_),c=v(_,"DIV",{class:!0});var S=w(c);l=v(S,"A",{href:!0,rel:!0,target:!0,class:!0});var L=w(l);r=T(L,"View PDF"),L.forEach(f),i=A(S),t=v(S,"A",{href:!0,rel:!0,target:!0,class:!0});var V=w(t);D=T(V,"View Code"),V.forEach(f),x=A(S),S.forEach(f),this.h()},h(){h(o,"class","text-black text-2xl my-10"),h(l,"href",e="https://docs.google.com/viewer?url="+p[7].pdf_url),h(l,"rel","noopener noreferrer"),h(l,"target","_blank"),h(l,"class","bg-black px-10 py-4 text-white hover:bg-amber-400 hover:text-black"),h(t,"href",F=p[7].src_url),h(t,"rel","noopener noreferrer"),h(t,"target","_blank"),h(t,"class","bg-black mt-4 px-10 py-4 text-white shadow-lg hover:bg-amber-400 hover:text-black"),h(c,"class","mb-6 flex flex-col lg:block text-center")},m(_,m){C(_,o,m),u(o,a),C(_,s,m),C(_,c,m),u(c,l),u(l,r),u(c,i),u(c,t),u(t,D),u(c,x)},p(_,m){m&1&&b!==(b=_[7].name+"")&&W(a,b),m&1&&e!==(e="https://docs.google.com/viewer?url="+_[7].pdf_url)&&h(l,"href",e),m&1&&F!==(F=_[7].src_url)&&h(t,"href",F)},d(_){_&&f(o),_&&f(s),_&&f(c)}}}function K(p){let o,b=p[4].name+"",a,s,c,l=p[4].docs,r=[];for(let e=0;e<l.length;e+=1)r[e]=J(G(p,l,e));return{c(){o=g("h2"),a=E(b),s=R();for(let e=0;e<r.length;e+=1)r[e].c();c=Y(),this.h()},l(e){o=v(e,"H2",{class:!0});var i=w(o);a=T(i,b),i.forEach(f),s=A(e);for(let t=0;t<r.length;t+=1)r[t].l(e);c=Y(),this.h()},h(){h(o,"class","text-black text-4xl mt-10 font-black")},m(e,i){C(e,o,i),u(o,a),C(e,s,i);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(e,i);C(e,c,i)},p(e,i){if(i&1&&b!==(b=e[4].name+"")&&W(a,b),i&1){l=e[4].docs;let t;for(t=0;t<l.length;t+=1){const D=G(e,l,t);r[t]?r[t].p(D,i):(r[t]=J(D),r[t].c(),r[t].m(c.parentNode,c))}for(;t<r.length;t+=1)r[t].d(1);r.length=l.length}},d(e){e&&f(o),e&&f(s),Q(r,e),e&&f(c)}}}function ae(p){let o,b,a,s,c,l,r,e,i,t,D,F,x,_,m,S,L,V,I,X,H=Object.keys(p[0]),k=[];for(let n=0;n<H.length;n+=1)k[n]=K(B(p,H,n));return{c(){o=g("style"),b=E(`body {
            background: white;
        }
        :root::-webkit-scrollbar {
            width: 1rem;
        }
        :root::-webkit-scrollbar-track {
            background: lightgray;
        }

        :root::-webkit-scrollbar-thumb {
            background: black;
        }
        :root::-webkit-scrollbar-thumb:hover {
            background: #fbbf24;
        }`),a=R(),s=g("div"),c=g("h2"),l=E("Simpson Research"),r=R(),e=g("h2"),i=E("All the PDFs were made with "),t=g("a"),D=E("LaTeX"),F=R(),x=g("h2"),_=E("Check out "),m=g("a"),S=E("RaTeX"),L=E(" to build PDF's like this in Python!"),V=R();for(let n=0;n<k.length;n+=1)k[n].c();I=R(),X=g("div"),this.h()},l(n){const P=te("svelte-1f7bczf",document.head);o=v(P,"STYLE",{});var d=w(o);b=T(d,`body {
            background: white;
        }
        :root::-webkit-scrollbar {
            width: 1rem;
        }
        :root::-webkit-scrollbar-track {
            background: lightgray;
        }

        :root::-webkit-scrollbar-thumb {
            background: black;
        }
        :root::-webkit-scrollbar-thumb:hover {
            background: #fbbf24;
        }`),d.forEach(f),P.forEach(f),a=A(n),s=v(n,"DIV",{class:!0});var y=w(s);c=v(y,"H2",{class:!0});var O=w(c);l=T(O,"Simpson Research"),O.forEach(f),r=A(y),e=v(y,"H2",{class:!0});var N=w(e);i=T(N,"All the PDFs were made with "),t=v(N,"A",{href:!0,rel:!0,target:!0,class:!0});var $=w(t);D=T($,"LaTeX"),$.forEach(f),N.forEach(f),F=A(y),x=v(y,"H2",{class:!0});var M=w(x);_=T(M,"Check out "),m=v(M,"A",{rel:!0,target:!0,href:!0,style:!0,class:!0});var z=w(m);S=T(z,"RaTeX"),z.forEach(f),L=T(M," to build PDF's like this in Python!"),M.forEach(f),V=A(y);for(let q=0;q<k.length;q+=1)k[q].l(y);y.forEach(f),I=A(n),X=v(n,"DIV",{class:!0}),w(X).forEach(f),this.h()},h(){h(c,"class","text-black text-6xl mt-10 font-black"),h(t,"href","https://www.latex-project.org/"),h(t,"rel","noopener noreferrer"),h(t,"target","_blank"),h(t,"class","hover:underline text-amber-500 font-black tracking-wider"),h(e,"class","text-black text-lg mt-6"),h(m,"rel","noopener noreferrer"),h(m,"target","_blank"),h(m,"href","https://github.com/realTristan/ratex"),le(m,"background","none"),h(m,"class","text-amber-500 font-black hover:underline tracking-wider"),h(x,"class","text-black text-lg mt-2 "),h(s,"class","flex flex-col items-center justify-center my-10 mx-10"),h(X,"class","my-12 w-10 h-1")},m(n,P){u(document.head,o),u(o,b),C(n,a,P),C(n,s,P),u(s,c),u(c,l),u(s,r),u(s,e),u(e,i),u(e,t),u(t,D),u(s,F),u(s,x),u(x,_),u(x,m),u(m,S),u(x,L),u(s,V);for(let d=0;d<k.length;d+=1)k[d]&&k[d].m(s,null);C(n,I,P),C(n,X,P)},p(n,[P]){if(P&1){H=Object.keys(n[0]);let d;for(d=0;d<H.length;d+=1){const y=B(n,H,d);k[d]?k[d].p(y,P):(k[d]=K(y),k[d].c(),k[d].m(s,null))}for(;d<k.length;d+=1)k[d].d(1);k.length=H.length}},i:U,o:U,d(n){f(o),n&&f(a),n&&f(s),Q(k,n),n&&f(I),n&&f(X)}}}function oe(p,o,b){let a={};const s=l=>(l=l.replace("api.github.com/repos/Simpson-Computer-Technologies-Research/LaTeX/contents/","raw.githubusercontent.com/Simpson-Computer-Technologies-Research/LaTeX/main/"),l.split("?ref")[0]+"/build/main.pdf"),c=async(l,r)=>{await fetch(r).then(e=>e.json()).then(e=>{for(var i=0;i<e.length;i++)b(0,a[l].docs=[...a[l].docs,{name:e[i].name,pdf_url:s(e[i].url),src_url:e[i].html_url}],a)})};return re(async()=>{await fetch("https://api.github.com/repos/Simpson-Computer-Technologies-Research/LaTeX/contents/").then(l=>l.json()).then(async l=>{for(let r=0;r<l.length;r++)["LICENSE",".vscode","README.md","Hidden",".gitignore"].includes(l[r].name)||(b(0,a[l[r].sha]={name:l[r].name,docs:[]},a),await c(l[r].sha,l[r].url))})}),[a]}class ne extends Z{constructor(o){super(),j(this,o,oe,ae,ee,{})}}export{ne as default};
