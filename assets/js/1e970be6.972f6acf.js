"use strict";(self.webpackChunkNest_wiki=self.webpackChunkNest_wiki||[]).push([[6221],{2184:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(1527),c=t(7540);const o={},r=void 0,i={id:"\u57fa\u7840/\u5f02\u6b65\u63d0\u4f9b\u8005",title:"\u5f02\u6b65\u63d0\u4f9b\u8005",description:"\u6709\u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u5e94\u5ef6\u8fdf\uff0c\u76f4\u5230\u4e00\u4e2a\u6216\u591a\u4e2a\u5f02\u6b65\u4efb\u52a1\u5b8c\u6210\u3002\u4f8b\u5982\uff0c\u5728\u4e0e\u6570\u636e\u5e93\u5efa\u7acb\u8fde\u63a5\u4e4b\u524d\uff0c\u60a8\u53ef\u80fd\u4e0d\u5e0c\u671b\u5f00\u59cb\u63a5\u53d7\u8bf7\u6c42\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u5f02\u6b65\u63d0\u4f9b\u7a0b\u5e8f\u6765\u5b9e\u73b0\u6b64\u76ee\u7684\u3002",source:"@site/docs/\u57fa\u7840/\u5f02\u6b65\u63d0\u4f9b\u8005.md",sourceDirName:"\u57fa\u7840",slug:"/\u57fa\u7840/\u5f02\u6b65\u63d0\u4f9b\u8005",permalink:"/Nest-wiki/docs/\u57fa\u7840/\u5f02\u6b65\u63d0\u4f9b\u8005",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u63d0\u4f9b\u8005",permalink:"/Nest-wiki/docs/\u57fa\u7840/\u81ea\u5b9a\u4e49\u63d0\u4f9b\u8005"},next:{title:"\u52a8\u6001\u6a21\u5757",permalink:"/Nest-wiki/docs/\u57fa\u7840/\u52a8\u6001\u6a21\u5757"}},a={},d=[{value:"\u6ce8\u5165",id:"\u6ce8\u5165",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u6709\u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u5e94\u5ef6\u8fdf\uff0c\u76f4\u5230\u4e00\u4e2a\u6216\u591a\u4e2a\u5f02\u6b65\u4efb\u52a1\u5b8c\u6210\u3002\u4f8b\u5982\uff0c\u5728\u4e0e\u6570\u636e\u5e93\u5efa\u7acb\u8fde\u63a5\u4e4b\u524d\uff0c\u60a8\u53ef\u80fd\u4e0d\u5e0c\u671b\u5f00\u59cb\u63a5\u53d7\u8bf7\u6c42\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u5f02\u6b65\u63d0\u4f9b\u7a0b\u5e8f\u6765\u5b9e\u73b0\u6b64\u76ee\u7684\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u8bed\u6cd5\u4e0e ",(0,s.jsx)(n.code,{children:"useFactory"})," \u8bed\u6cd5\u4e00\u8d77\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"async/await"})," \u3002\u5de5\u5382\u8fd4\u56de\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"Promise"})," \uff0c\u5de5\u5382\u51fd\u6570\u53ef\u4ee5 ",(0,s.jsx)(n.code,{children:"await"})," \u5f02\u6b65\u6267\u884c\u4efb\u52a1\u3002Nest \u5c06\u7b49\u5f85 promise \u7684\u89e3\u6790\uff0c\u7136\u540e\u518d\u5b9e\u4f8b\u5316\u4efb\u4f55\u4f9d\u8d56\u4e8e\uff08\u6ce8\u5165\uff09\u6b64\u7c7b\u63d0\u4f9b\u7a0b\u5e8f\u7684\u7c7b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"{\n  provide: 'ASYNC_CONNECTION',\n  useFactory: async () => {\n    const connection = await createConnection(options);\n    return connection;\n  },\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u6ce8\u5165",children:"\u6ce8\u5165"}),"\n",(0,s.jsxs)(n.p,{children:["\u5f02\u6b65\u63d0\u4f9b\u7a0b\u5e8f\u901a\u8fc7\u5176\u4ee4\u724c\u6ce8\u5165\u5230\u5176\u4ed6\u7ec4\u4ef6\uff0c\u5c31\u50cf\u4efb\u4f55\u5176\u4ed6\u63d0\u4f9b\u7a0b\u5e8f\u4e00\u6837\u3002\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u60a8\u5c06\u4f7f\u7528\u6784\u9020 ",(0,s.jsx)(n.code,{children:"@Inject('ASYNC_CONNECTION')"})," ."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u8bf7\u8bbf\u95ee\u5b98\u7f51\uff1a",(0,s.jsx)(n.a,{href:"https://docs.nestjs.com/fundamentals/async-providers",children:"https://docs.nestjs.com/fundamentals/async-providers"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},7540:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var s=t(959);const c={},o=s.createContext(c);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);