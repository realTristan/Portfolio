import{S as K,i as O,s as Q,k,r as w,a as E,N as U,l as _,m as g,u as y,h as o,c as C,p as i,q as X,H as l,b as P,n as B,M as Z,o as ee,v as te}from"../chunks/index.c10d3ee8.js";function F(x,s,f){const u=x.slice();return u[1]=s[f],u}function J(x){let s,f=x[1].name+"",u,e,r,b,A,p,R;return{c(){s=k("h2"),u=w(f),e=E(),r=k("div"),b=k("a"),A=w("Visit Github Repo"),R=E(),this.h()},l(n){s=_(n,"H2",{class:!0});var c=g(s);u=y(c,f),c.forEach(o),e=C(n),r=_(n,"DIV",{class:!0});var S=g(r);b=_(S,"A",{href:!0,rel:!0,target:!0,class:!0});var m=g(b);A=y(m,"Visit Github Repo"),m.forEach(o),R=C(S),S.forEach(o),this.h()},h(){i(s,"class","text-black text-2xl my-10"),i(b,"href",p=x[1].html_url),i(b,"rel","noopener noreferrer"),i(b,"target","_blank"),i(b,"class","bg-black px-10 py-4 text-white hover:bg-amber-400 hover:text-black"),i(r,"class","mb-6 text-center")},m(n,c){P(n,s,c),l(s,u),P(n,e,c),P(n,r,c),l(r,b),l(b,A),l(r,R)},p(n,c){c&1&&f!==(f=n[1].name+"")&&te(u,f),c&1&&p!==(p=n[1].html_url)&&i(b,"href",p)},d(n){n&&o(s),n&&o(e),n&&o(r)}}}function re(x){let s,f,u,e,r,b,A,p,R,n,c,S,m,W,q,G,H,L,M,D,V,$=x[0],h=[];for(let t=0;t<$.length;t+=1)h[t]=J(F(x,$,t));return{c(){s=k("style"),f=w(`body {
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
        }`),u=E(),e=k("div"),r=k("h2"),b=w("Simpson Research"),A=E(),p=k("h2"),R=w("Welcome to the Advanced Programming Club Curriculum!"),n=E(),c=k("h2"),S=w("Check out "),m=k("a"),W=w("Simpson Research"),q=w(" for more open-source projects!"),G=E(),H=k("h2"),L=w("Advanced Programming Club"),M=E();for(let t=0;t<h.length;t+=1)h[t].c();D=E(),V=k("div"),this.h()},l(t){const v=U("svelte-1f7bczf",document.head);s=_(v,"STYLE",{});var a=g(s);f=y(a,`body {
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
        }`),a.forEach(o),v.forEach(o),u=C(t),e=_(t,"DIV",{class:!0});var d=g(e);r=_(d,"H2",{class:!0});var z=g(r);b=y(z,"Simpson Research"),z.forEach(o),A=C(d),p=_(d,"H2",{class:!0});var N=g(p);R=y(N,"Welcome to the Advanced Programming Club Curriculum!"),N.forEach(o),n=C(d),c=_(d,"H2",{class:!0});var I=g(c);S=y(I,"Check out "),m=_(I,"A",{rel:!0,target:!0,href:!0,style:!0,class:!0});var Y=g(m);W=y(Y,"Simpson Research"),Y.forEach(o),q=y(I," for more open-source projects!"),I.forEach(o),G=C(d),H=_(d,"H2",{class:!0});var j=g(H);L=y(j,"Advanced Programming Club"),j.forEach(o),M=C(d);for(let T=0;T<h.length;T+=1)h[T].l(d);d.forEach(o),D=C(t),V=_(t,"DIV",{class:!0}),g(V).forEach(o),this.h()},h(){i(r,"class","text-black text-6xl mt-10 font-black"),i(p,"class","text-black text-lg mt-6"),i(m,"rel","noopener noreferrer"),i(m,"target","_blank"),i(m,"href","https://simpsonresearch.ca"),X(m,"background","none"),i(m,"class","text-amber-500 font-black hover:underline tracking-wider"),i(c,"class","text-black text-lg mt-2 "),i(H,"class","text-black text-4xl mt-10 font-black"),i(e,"class","flex flex-col items-center justify-center my-10 mx-10"),i(V,"class","my-12 w-10 h-1")},m(t,v){l(document.head,s),l(s,f),P(t,u,v),P(t,e,v),l(e,r),l(r,b),l(e,A),l(e,p),l(p,R),l(e,n),l(e,c),l(c,S),l(c,m),l(m,W),l(c,q),l(e,G),l(e,H),l(H,L),l(e,M);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m(e,null);P(t,D,v),P(t,V,v)},p(t,[v]){if(v&1){$=t[0];let a;for(a=0;a<$.length;a+=1){const d=F(t,$,a);h[a]?h[a].p(d,v):(h[a]=J(d),h[a].c(),h[a].m(e,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=$.length}},i:B,o:B,d(t){o(s),t&&o(u),t&&o(e),Z(h,t),t&&o(D),t&&o(V)}}}function le(x,s,f){let u=[];return ee(async()=>{await self.fetch("https://api.github.com/users/Simpson-Computer-Technologies-Research/repos?per_page=100").then(e=>e.json()).then(e=>{for(let r=0;r<e.length;r++)e[r].name.toLowerCase().includes("apc")&&(e[r].name=e[r].name.replace("APC","Advanced Programming Week "),f(0,u=[...u,e[r]]))}).catch(e=>{console.log(e)})}),[u]}class oe extends K{constructor(s){super(),O(this,s,le,re,Q,{})}}export{oe as default};
