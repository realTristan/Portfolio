import{S as J,i as K,s as O,k,r as y,a as E,N as Q,l as p,m as v,u as w,h as s,c as S,p as i,q as X,H as r,b as V,n as Y,M as Z,o as ee,v as te}from"../chunks/index.c10d3ee8.js";function j(x,o,f){const u=x.slice();return u[1]=o[f],u}function F(x){let o,f=x[1].name+"",u,e,l,b,C,_,R;return{c(){o=k("h2"),u=y(f),e=E(),l=k("div"),b=k("a"),C=y("Visit Github Repo"),R=E(),this.h()},l(c){o=p(c,"H2",{class:!0});var n=v(o);u=w(n,f),n.forEach(s),e=S(c),l=p(c,"DIV",{class:!0});var H=v(l);b=p(H,"A",{href:!0,rel:!0,target:!0,class:!0});var m=v(b);C=w(m,"Visit Github Repo"),m.forEach(s),R=S(H),H.forEach(s),this.h()},h(){i(o,"class","text-black text-2xl my-10"),i(b,"href",_=x[1].html_url),i(b,"rel","noopener noreferrer"),i(b,"target","_blank"),i(b,"class","bg-black px-10 py-4 text-white hover:bg-amber-400 hover:text-black"),i(l,"class","mb-6 text-center")},m(c,n){V(c,o,n),r(o,u),V(c,e,n),V(c,l,n),r(l,b),r(b,C),r(l,R)},p(c,n){n&1&&f!==(f=c[1].name+"")&&te(u,f),n&1&&_!==(_=c[1].html_url)&&i(b,"href",_)},d(c){c&&s(o),c&&s(e),c&&s(l)}}}function le(x){let o,f,u,e,l,b,C,_,R,c,n,H,m,I,L,P,M,q,A,$,T,W=x[0],h=[];for(let t=0;t<W.length;t+=1)h[t]=F(j(x,W,t));return{c(){o=k("style"),f=y(`body {
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
        }`),u=E(),e=k("div"),l=k("h2"),b=y("Simpson Research"),C=E(),_=k("h2"),R=y("Welcome to the Stem Club Python Curriculum!"),c=E(),n=k("h2"),H=y("Check out "),m=k("a"),I=y("Simpson Research"),L=y(" for more open-source projects!"),P=E(),M=k("h2"),q=y("Stem Club"),A=E();for(let t=0;t<h.length;t+=1)h[t].c();$=E(),T=k("div"),this.h()},l(t){const g=Q("svelte-1f7bczf",document.head);o=p(g,"STYLE",{});var a=v(o);f=w(a,`body {
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
        }`),a.forEach(s),g.forEach(s),u=S(t),e=p(t,"DIV",{class:!0});var d=v(e);l=p(d,"H2",{class:!0});var G=v(l);b=w(G,"Simpson Research"),G.forEach(s),C=S(d),_=p(d,"H2",{class:!0});var U=v(_);R=w(U,"Welcome to the Stem Club Python Curriculum!"),U.forEach(s),c=S(d),n=p(d,"H2",{class:!0});var D=v(n);H=w(D,"Check out "),m=p(D,"A",{rel:!0,target:!0,href:!0,style:!0,class:!0});var z=v(m);I=w(z,"Simpson Research"),z.forEach(s),L=w(D," for more open-source projects!"),D.forEach(s),P=S(d),M=p(d,"H2",{class:!0});var N=v(M);q=w(N,"Stem Club"),N.forEach(s),A=S(d);for(let B=0;B<h.length;B+=1)h[B].l(d);d.forEach(s),$=S(t),T=p(t,"DIV",{class:!0}),v(T).forEach(s),this.h()},h(){i(l,"class","text-black text-6xl mt-10 font-black"),i(_,"class","text-black text-lg mt-6"),i(m,"rel","noopener noreferrer"),i(m,"target","_blank"),i(m,"href","https://simpsonresearch.ca"),X(m,"background","none"),i(m,"class","text-amber-500 font-black hover:underline tracking-wider"),i(n,"class","text-black text-lg mt-2 "),i(M,"class","text-black text-4xl mt-10 font-black"),i(e,"class","flex flex-col items-center justify-center my-10 mx-10"),i(T,"class","my-12 w-10 h-1")},m(t,g){r(document.head,o),r(o,f),V(t,u,g),V(t,e,g),r(e,l),r(l,b),r(e,C),r(e,_),r(_,R),r(e,c),r(e,n),r(n,H),r(n,m),r(m,I),r(n,L),r(e,P),r(e,M),r(M,q),r(e,A);for(let a=0;a<h.length;a+=1)h[a]&&h[a].m(e,null);V(t,$,g),V(t,T,g)},p(t,[g]){if(g&1){W=t[0];let a;for(a=0;a<W.length;a+=1){const d=j(t,W,a);h[a]?h[a].p(d,g):(h[a]=F(d),h[a].c(),h[a].m(e,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=W.length}},i:Y,o:Y,d(t){s(o),t&&s(u),t&&s(e),Z(h,t),t&&s($),t&&s(T)}}}function re(x,o,f){let u=[];return ee(async()=>{await self.fetch("https://api.github.com/users/Simpson-Computer-Technologies-Research/repos?per_page=100").then(e=>e.json()).then(e=>{for(let l=0;l<e.length;l++)e[l].name.includes("STEM_CLUB")&&(e[l].name=e[l].name.replace("STEM_CLUB_Week","Stem Club Week "),f(0,u=[...u,e[l]]))}).catch(e=>console.log(e))}),[u]}class se extends J{constructor(o){super(),K(this,o,re,le,O,{})}}export{se as default};
