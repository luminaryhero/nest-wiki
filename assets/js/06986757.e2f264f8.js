"use strict";(self.webpackChunkNest_wiki=self.webpackChunkNest_wiki||[]).push([[617],{384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var c=t(1527),r=t(7540);const s={},o=void 0,i={id:"\u57fa\u7840/\u5faa\u73af\u4f9d\u8d56",title:"\u5faa\u73af\u4f9d\u8d56",description:"\u5f53\u4e24\u4e2a\u7c7b\u76f8\u4e92\u4f9d\u8d56\u65f6\uff0c\u5c31\u4f1a\u53d1\u751f\u5faa\u73af\u4f9d\u8d56\u5173\u7cfb\u3002\u4f8b\u5982\uff0c\u7c7b A \u9700\u8981\u7c7b B\uff0c\u7c7b B \u4e5f\u9700\u8981\u7c7b A\u3002 \u5728 Nest \u4e2d\uff0c\u6a21\u5757\u4e4b\u95f4\u548c\u63d0\u4f9b\u8005\u4e4b\u95f4\u53ef\u80fd\u4f1a\u51fa\u73b0\u5faa\u73af\u4f9d\u8d56\u5173\u7cfb\u3002",source:"@site/docs/\u57fa\u7840/\u5faa\u73af\u4f9d\u8d56.md",sourceDirName:"\u57fa\u7840",slug:"/\u57fa\u7840/\u5faa\u73af\u4f9d\u8d56",permalink:"/Nest-wiki/docs/\u57fa\u7840/\u5faa\u73af\u4f9d\u8d56",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6ce8\u5165\u4f5c\u7528\u57df",permalink:"/Nest-wiki/docs/\u57fa\u7840/\u6ce8\u5165\u4f5c\u7528\u57df"},next:{title:"\u6a21\u5757\u5f15\u7528",permalink:"/Nest-wiki/docs/\u57fa\u7840/\u6a21\u5757\u5f15\u7528"}},d={},a=[{value:"\u6b63\u5411\u5f15\u7528",id:"\u6b63\u5411\u5f15\u7528",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u5f53\u4e24\u4e2a\u7c7b\u76f8\u4e92\u4f9d\u8d56\u65f6\uff0c\u5c31\u4f1a\u53d1\u751f\u5faa\u73af\u4f9d\u8d56\u5173\u7cfb\u3002\u4f8b\u5982\uff0c\u7c7b A \u9700\u8981\u7c7b B\uff0c\u7c7b B \u4e5f\u9700\u8981\u7c7b A\u3002 \u5728 Nest \u4e2d\uff0c\u6a21\u5757\u4e4b\u95f4\u548c\u63d0\u4f9b\u8005\u4e4b\u95f4\u53ef\u80fd\u4f1a\u51fa\u73b0\u5faa\u73af\u4f9d\u8d56\u5173\u7cfb\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u867d\u7136\u5e94\u5c3d\u53ef\u80fd\u907f\u514d\u5faa\u73af\u4f9d\u8d56\u5173\u7cfb\uff0c\u4f46\u4e0d\u80fd\u603b\u662f\u8fd9\u6837\u505a\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cNest \u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u89e3\u51b3\u63d0\u4f9b\u7a0b\u5e8f\u4e4b\u95f4\u7684\u5faa\u73af\u4f9d\u8d56\u5173\u7cfb\u3002\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u4f7f\u7528\u6b63\u5411\u5f15\u7528\u4f5c\u4e3a\u4e00\u79cd\u6280\u672f\uff0c\u5e76\u4f7f\u7528 ModuleRef \u7c7b\u4ece DI \u5bb9\u5668\u4e2d\u68c0\u7d22\u63d0\u4f9b\u7a0b\u5e8f\u5b9e\u4f8b\u4f5c\u4e3a\u53e6\u4e00\u79cd\u6280\u672f\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u6211\u4eec\u8fd8\u4ecb\u7ecd\u4e86\u5982\u4f55\u89e3\u51b3\u6a21\u5757\u4e4b\u95f4\u7684\u5faa\u73af\u4f9d\u8d56\u5173\u7cfb\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u6b63\u5411\u5f15\u7528",children:"\u6b63\u5411\u5f15\u7528"}),"\n",(0,c.jsxs)(n.p,{children:["\u6b63\u5411\u5f15\u7528\u5141\u8bb8 Nest \u5f15\u7528\u5c1a\u672a\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"forwardRef()"})," utility \u51fd\u6570\u5b9a\u4e49\u7684\u7c7b\u3002\u4f8b\u5982\uff0c\u5982\u679c ",(0,c.jsx)(n.code,{children:"CatsService"})," \u548c \u76f8\u4e92\u4f9d\u8d56\uff0c\u5219\u5173\u7cfb\u7684\u53cc\u65b9\u90fd\u53ef\u4ee5\u4f7f\u7528 ",(0,c.jsx)(n.code,{children:"@Inject()"})," \u548c ",(0,c.jsx)(n.code,{children:"forwardRef()"})," ",(0,c.jsx)(n.code,{children:"CommonService"})," \u5b9e\u7528\u7a0b\u5e8f\u6765\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u5173\u7cfb\u3002\u5426\u5219\uff0cNest \u4e0d\u4f1a\u5b9e\u4f8b\u5316\u5b83\u4eec\uff0c\u56e0\u4e3a\u6240\u6709\u57fa\u672c\u5143\u6570\u636e\u90fd\u4e0d\u53ef\u7528\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-ts",children:"@Injectable()\nexport class CatsService {\n  constructor(\n    @Inject(forwardRef(() => CommonService))\n    private commonService: CommonService,\n  ) {}\n}\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u8fd9\u6db5\u76d6\u4e86\u5173\u7cfb\u7684\u4e00\u65b9\u9762\u3002\u73b0\u5728\u8ba9\u6211\u4eec\u5bf9\u4ee5\u4e0b\u65b9\u6cd5 ",(0,c.jsx)(n.code,{children:"CommonService"})," \u505a\u540c\u6837\u7684\u4e8b\u60c5\uff1a"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-typescript",children:"@Injectable()\nexport class CommonService {\n  constructor(\n    @Inject(forwardRef(() => CatsService))\n    private catsService: CatsService,\n  ) {}\n}\n"})}),"\n",(0,c.jsxs)(n.blockquote,{children:["\n",(0,c.jsxs)(n.p,{children:["\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u8bf7\u8bbf\u95ee\u5b98\u7f51\uff1a",(0,c.jsx)(n.a,{href:"https://docs.nestjs.com/fundamentals/circular-dependency",children:"https://docs.nestjs.com/fundamentals/circular-dependency"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},7540:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var c=t(959);const r={},s=c.createContext(r);function o(e){const n=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),c.createElement(s.Provider,{value:n},e.children)}}}]);