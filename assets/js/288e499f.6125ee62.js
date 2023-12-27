"use strict";(self.webpackChunknest_wiki=self.webpackChunknest_wiki||[]).push([[9452],{9323:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var n=t(1527),l=t(7540);const r={title:"\u9879\u76ee\u521d\u59cb\u5316(\u4e00)",date:new Date("2023-12-25T00:00:00.000Z")},a=void 0,c={permalink:"/nest-wiki/blog/01",source:"@site/blog/01.md",title:"\u9879\u76ee\u521d\u59cb\u5316(\u4e00)",description:"- [x] NestCLI",date:"2023-12-25T00:00:00.000Z",formattedDate:"December 25, 2023",tags:[],readingTime:1.175,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u9879\u76ee\u521d\u59cb\u5316(\u4e00)",date:"2023-12-25T00:00:00.000Z"},unlisted:!1,prevItem:{title:"\u901a\u7528\u529f\u80fd\u5c01\u88c5(\u56db)",permalink:"/nest-wiki/blog/04"}},i={authorsImageUrls:[]},o=[{value:"NestCLI",id:"nestcli",level:2},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"\u751f\u6210 restful \u63a5\u53e3",id:"\u751f\u6210-restful-\u63a5\u53e3",level:2},{value:"\u65ad\u70b9\u8c03\u8bd5",id:"\u65ad\u70b9\u8c03\u8bd5",level:2}];function u(e){const s={blockquote:"blockquote",code:"code",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","NestCLI"]}),"\n",(0,n.jsxs)(s.li,{className:"task-list-item",children:[(0,n.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","\u65ad\u70b9\u8c03\u8bd5"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"nestcli",children:"NestCLI"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ npm i -g @nestjs/cli\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u521b\u5efa\u9879\u76ee",children:"\u521b\u5efa\u9879\u76ee"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ nest new nestjs-restful-template\n\u26a1  We will scaffold your app in a few seconds..\n\n? Which package manager would you \u2764\ufe0f  to use? pnpm\nCREATE nestjs-restful-template/.eslintrc.js (663 bytes)\nCREATE nestjs-restful-template/.prettierrc (51 bytes)\nCREATE nestjs-restful-template/nest-cli.json (171 bytes)\nCREATE nestjs-restful-template/package.json (1964 bytes)\nCREATE nestjs-restful-template/README.md (3347 bytes)\nCREATE nestjs-restful-template/tsconfig.build.json (97 bytes)\nCREATE nestjs-restful-template/tsconfig.json (546 bytes)\nCREATE nestjs-restful-template/src/app.controller.spec.ts (617 bytes)\nCREATE nestjs-restful-template/src/app.controller.ts (274 bytes)\nCREATE nestjs-restful-template/src/app.module.ts (249 bytes)\nCREATE nestjs-restful-template/src/app.service.ts (142 bytes)\nCREATE nestjs-restful-template/src/main.ts (208 bytes)\nCREATE nestjs-restful-template/test/app.e2e-spec.ts (630 bytes)\nCREATE nestjs-restful-template/test/jest-e2e.json (183 bytes)\n\n\u2714 Installation in progress... \u2615\n\n\ud83d\ude80  Successfully created project nestjs-restful-template\n\ud83d\udc49  Get started with the following commands:\n\n$ cd nestjs-restful-template\n$ pnpm run start\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u751f\u6210-restful-\u63a5\u53e3",children:"\u751f\u6210 restful \u63a5\u53e3"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"$ nest g res users --no-spec\n? What transport layer do you use? REST API\n? Would you like to generate CRUD entry points? Yes\nCREATE src/users/users.controller.ts (894 bytes)\nCREATE src/users/users.module.ts (248 bytes)\nCREATE src/users/users.service.ts (609 bytes)\nCREATE src/users/dto/create-user.dto.ts (30 bytes)\nCREATE src/users/dto/update-user.dto.ts (169 bytes)\nCREATE src/users/entities/user.entity.ts (21 bytes)\nUPDATE package.json (1997 bytes)\nUPDATE src/app.module.ts (195 bytes)\n\u2714 Packages installed successfully.\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u65ad\u70b9\u8c03\u8bd5",children:"\u65ad\u70b9\u8c03\u8bd5"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:".vscode/launch.json"}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Launch via PNPM",\n      "request": "launch",\n      "runtimeArgs": ["run-script", "start:debug"],\n      "runtimeExecutable": "pnpm",\n      "internalConsoleOptions": "neverOpen",\n      "autoAttachChildProcesses": true,\n      "console": "integratedTerminal",\n      "skipFiles": ["<node_internals>/**"],\n      "type": "node"\n    }\n  ]\n}\n'})})]})}function p(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},7540:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>a});var n=t(959);const l={},r=n.createContext(l);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);