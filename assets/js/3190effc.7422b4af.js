"use strict";(self.webpackChunkNest_wiki=self.webpackChunkNest_wiki||[]).push([[316],{775:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>t,metadata:()=>o,toc:()=>i});var s=r(1527),c=r(7540);const t={},l=void 0,o={id:"\u6982\u8ff0/\u62e6\u622a\u5668",title:"\u62e6\u622a\u5668",description:"\u62e6\u622a\u5668",source:"@site/docs/\u6982\u8ff0/\u62e6\u622a\u5668.md",sourceDirName:"\u6982\u8ff0",slug:"/\u6982\u8ff0/\u62e6\u622a\u5668",permalink:"/Nest-wiki/docs/\u6982\u8ff0/\u62e6\u622a\u5668",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/\u6982\u8ff0/\u62e6\u622a\u5668.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f02\u5e38\u8fc7\u6ee4\u5668",permalink:"/Nest-wiki/docs/\u6982\u8ff0/\u5f02\u5e38\u8fc7\u6ee4\u5668"},next:{title:"\u63a7\u5236\u5668",permalink:"/Nest-wiki/docs/\u6982\u8ff0/\u63a7\u5236\u5668"}},d={},i=[{value:"\u62e6\u622a\u5668",id:"\u62e6\u622a\u5668",level:3},{value:"\u57fa\u672c",id:"\u57fa\u672c",level:4},{value:"\u6267\u884c\u4e0a\u4e0b\u6587",id:"\u6267\u884c\u4e0a\u4e0b\u6587",level:4},{value:"\u8c03\u7528\u5904\u7406\u7a0b\u5e8f",id:"\u8c03\u7528\u5904\u7406\u7a0b\u5e8f",level:4},{value:"\u5207\u9762\u62e6\u622a",id:"\u5207\u9762\u62e6\u622a",level:4},{value:"\u7ed1\u5b9a\u62e6\u622a\u5668",id:"\u7ed1\u5b9a\u62e6\u622a\u5668",level:4},{value:"\u54cd\u5e94\u6620\u5c04",id:"\u54cd\u5e94\u6620\u5c04",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u62e6\u622a\u5668",children:"\u62e6\u622a\u5668"}),"\n",(0,s.jsxs)(n.p,{children:["\u62e6\u622a\u5668\u662f\u7528 ",(0,s.jsx)(n.code,{children:"@Injectable()"})," \u88c5\u9970\u5668\u6ce8\u91ca\u7684\u7c7b\uff0c\u7528\u4e8e\u5b9e\u73b0 ",(0,s.jsx)(n.code,{children:"NestInterceptor"})," \u63a5\u53e3\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u62e6\u622a\u5668\u5177\u6709\u4e00\u7ec4\u6709\u7528\u7684\u529f\u80fd\uff0c\u8fd9\u4e9b\u529f\u80fd\u53d7\u5230\u9762\u5411\u65b9\u9762\u7f16\u7a0b \uff08AOP\uff09 \u6280\u672f\u7684\u542f\u53d1\u3002\u5b83\u4eec\u4f7f\u4ee5\u4e0b\u76ee\u6807\u6210\u4e3a\u53ef\u80fd\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5728\u65b9\u6cd5\u6267\u884c\u4e4b\u524d/\u4e4b\u540e\u7ed1\u5b9a\u989d\u5916\u7684\u903b\u8f91"}),"\n",(0,s.jsx)(n.li,{children:"\u8f6c\u6362\u51fd\u6570\u8fd4\u56de\u7684\u7ed3\u679c"}),"\n",(0,s.jsx)(n.li,{children:"\u8f6c\u6362\u4ece\u51fd\u6570\u5f15\u53d1\u7684\u5f02\u5e38"}),"\n",(0,s.jsx)(n.li,{children:"\u6269\u5c55\u57fa\u672c\u51fd\u6570\u884c\u4e3a"}),"\n",(0,s.jsx)(n.li,{children:"\u6839\u636e\u7279\u5b9a\u6761\u4ef6\uff08\u4f8b\u5982\uff0c\u7528\u4e8e\u7f13\u5b58\u76ee\u7684\uff09\u5b8c\u5168\u8986\u76d6\u51fd\u6570"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u57fa\u672c",children:"\u57fa\u672c"}),"\n",(0,s.jsxs)(n.p,{children:["\u6bcf\u4e2a\u4fa6\u542c\u5668\u90fd\u5b9e\u73b0\u8be5 ",(0,s.jsx)(n.code,{children:"intercept()"})," \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u91c7\u7528\u4e24\u4e2a\u53c2\u6570\u3002\u7b2c\u4e00\u4e2a\u662f ",(0,s.jsx)(n.code,{children:"ExecutionContext"})," \u5b9e\u4f8b\uff08\u4e0e\u5b88\u536b\u7684\u5bf9\u8c61\u5b8c\u5168\u76f8\u540c\uff09\u3002\u7ee7\u627f ",(0,s.jsx)(n.code,{children:"ExecutionContext"})," \u81ea ",(0,s.jsx)(n.code,{children:"ArgumentsHost"})," \u3002\u6211\u4eec\u4e4b\u524d\u5728\u5f02\u5e38\u8fc7\u6ee4\u5668\u4e00\u7ae0\u4e2d\u770b\u5230 ",(0,s.jsx)(n.code,{children:"ArgumentsHost"})," \u8fc7\u3002\u5728\u90a3\u91cc\uff0c\u6211\u4eec\u770b\u5230\u5b83\u662f\u4f20\u9012\u7ed9\u539f\u59cb\u5904\u7406\u7a0b\u5e8f\u7684\u53c2\u6570\u7684\u5305\u88c5\u5668\uff0c\u5e76\u4e14\u5305\u542b\u57fa\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7c7b\u578b\u7684\u4e0d\u540c\u53c2\u6570\u6570\u7ec4\u3002\u6709\u5173\u6b64\u4e3b\u9898\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u4ee5\u53c2\u8003\u5f02\u5e38\u7b5b\u9009\u5668\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u6267\u884c\u4e0a\u4e0b\u6587",children:"\u6267\u884c\u4e0a\u4e0b\u6587"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u6269\u5c55 ",(0,s.jsx)(n.code,{children:"ArgumentsHost"})," \uff0c\u8fd8\u6dfb\u52a0\u4e86\u51e0\u4e2a\u65b0\u7684\u5e2e\u52a9\u7a0b\u5e8f\u65b9\u6cd5\uff0c ",(0,s.jsx)(n.code,{children:"ExecutionContext"})," \u8fd9\u4e9b\u65b9\u6cd5\u63d0\u4f9b\u6709\u5173\u5f53\u524d\u6267\u884c\u8fc7\u7a0b\u7684\u5176\u4ed6\u8be6\u7ec6\u4fe1\u606f\u3002\u8fd9\u4e9b\u8be6\u7ec6\u4fe1\u606f\u6709\u52a9\u4e8e\u6784\u5efa\u66f4\u901a\u7528\u7684\u62e6\u622a\u5668\uff0c\u8fd9\u4e9b\u62e6\u622a\u5668\u53ef\u4ee5\u8de8\u5e7f\u6cdb\u7684\u63a7\u5236\u5668\u3001\u65b9\u6cd5\u548c\u6267\u884c\u4e0a\u4e0b\u6587\u5de5\u4f5c\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u8c03\u7528\u5904\u7406\u7a0b\u5e8f",children:"\u8c03\u7528\u5904\u7406\u7a0b\u5e8f"}),"\n",(0,s.jsxs)(n.p,{children:["\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f ",(0,s.jsx)(n.code,{children:"CallHandler"})," .\u8be5\u63a5\u53e3\u5b9e\u73b0\u8be5 ",(0,s.jsx)(n.code,{children:"CallHandler"})," ",(0,s.jsx)(n.code,{children:"handle()"})," \u65b9\u6cd5\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u8be5\u65b9\u6cd5\u5728\u4fa6\u542c\u5668\u4e2d\u7684\u67d0\u4e2a\u70b9\u8c03\u7528\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u65b9\u6cd5\u3002\u5982\u679c\u672a\u5728\u65b9\u6cd5\u7684\u5b9e\u73b0\u4e2d\u8c03\u7528\u8be5 ",(0,s.jsx)(n.code,{children:"handle()"})," \u65b9\u6cd5\uff0c\u5219\u6839\u672c\u4e0d\u4f1a\u6267\u884c\u8def\u7531\u5904\u7406\u7a0b\u5e8f ",(0,s.jsx)(n.code,{children:"intercept()"})," \u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u65b9\u6cd5\u610f\u5473\u7740\u8be5 ",(0,s.jsx)(n.code,{children:"intercept()"})," \u65b9\u6cd5\u6709\u6548\u5730\u5305\u88c5\u4e86\u8bf7\u6c42/\u54cd\u5e94\u6d41\u3002\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u5728\u6267\u884c\u6700\u7ec8\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u4e4b\u524d\u548c\u4e4b\u540e\u5b9e\u73b0\u81ea\u5b9a\u4e49\u903b\u8f91\u3002\u5f88\u660e\u663e\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,s.jsx)(n.code,{children:"intercept()"})," \u65b9\u6cd5\u4e2d\u7f16\u5199\u5728\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"handle()"})," \u4e4b\u524d\u6267\u884c\u7684\u4ee3\u7801\uff0c\u4f46\u662f\u60a8\u5982\u4f55\u5f71\u54cd\u4e4b\u540e\u53d1\u751f\u7684\u4e8b\u60c5\uff1f\u56e0\u4e3a\u8be5 ",(0,s.jsx)(n.code,{children:"handle()"})," \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"Observable"})," \uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5f3a\u5927\u7684 RxJS \u8fd0\u7b97\u7b26\u6765\u8fdb\u4e00\u6b65\u64cd\u4f5c\u54cd\u5e94\u3002\u4f7f\u7528\u9762\u5411\u65b9\u9762\u7684\u7f16\u7a0b\u672f\u8bed\uff0c\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u7684\u8c03\u7528\uff08\u5373\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"handle()"})," \uff09\u79f0\u4e3a Pointcut\uff0c\u8868\u793a\u5b83\u662f\u63d2\u5165\u9644\u52a0\u903b\u8f91\u7684\u70b9\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u8003\u8651\u4e00\u4e2a\u4f20\u5165 ",(0,s.jsx)(n.code,{children:"POST /cats"})," \u7684\u8bf7\u6c42\u3002\u6b64\u8bf7\u6c42\u53d1\u5f80 ",(0,s.jsx)(n.code,{children:"CatsController"})," \u4e2d\u5b9a\u4e49\u7684 ",(0,s.jsx)(n.code,{children:"create()"})," \u5904\u7406\u7a0b\u5e8f\u3002\u5982\u679c\u5728\u9014\u4e2d\u7684\u4efb\u610f\u4f4d\u7f6e\u8c03\u7528\u4e86\u4e0d\u8c03\u7528\u8be5\u65b9\u6cd5\u7684\u4fa6\u542c\u5668\uff0c\u5219\u4e0d\u4f1a\u6267\u884c\u8be5 ",(0,s.jsx)(n.code,{children:"handle()"})," ",(0,s.jsx)(n.code,{children:"create()"})," \u65b9\u6cd5\u3002\u4e00\u65e6 ",(0,s.jsx)(n.code,{children:"handle()"})," \u88ab\u8c03\u7528\uff08\u5e76\u4e14\u5df2\u8fd4\u56de\uff09\uff0c ",(0,s.jsx)(n.code,{children:"Observable"})," ",(0,s.jsx)(n.code,{children:"create()"})," \u5904\u7406\u7a0b\u5e8f\u5c06\u88ab\u89e6\u53d1\u3002\u4e00\u65e6\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"Observable"})," \u63a5\u6536\u5230\u54cd\u5e94\u6d41\uff0c\u5c31\u53ef\u4ee5\u5bf9\u6d41\u6267\u884c\u5176\u4ed6\u64cd\u4f5c\uff0c\u5e76\u5c06\u6700\u7ec8\u7ed3\u679c\u8fd4\u56de\u7ed9\u8c03\u7528\u65b9\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u5207\u9762\u62e6\u622a",children:"\u5207\u9762\u62e6\u622a"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5c06\u8981\u7814\u7a76\u7684\u7b2c\u4e00\u4e2a\u7528\u4f8b\u662f\u4f7f\u7528\u62e6\u622a\u5668\u6765\u8bb0\u5f55\u7528\u6237\u4ea4\u4e92\uff08\u4f8b\u5982\uff0c\u5b58\u50a8\u7528\u6237\u8c03\u7528\u3001\u5f02\u6b65\u8c03\u5ea6\u4e8b\u4ef6\u6216\u8ba1\u7b97\u65f6\u95f4\u6233\uff09\u3002\u6211\u4eec\u5728\u4e0b\u9762\u663e\u793a\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,s.jsx)(n.code,{children:"LoggingInterceptor"})," \uff1a"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"logging.interceptor.ts"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';\nimport { Observable } from 'rxjs';\nimport { tap } from 'rxjs/operators';\n\n@Injectable()\nexport class LoggingInterceptor implements NestInterceptor {\n  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {\n    console.log('Before...');\n\n    const now = Date.now();\n    return next\n      .handle()\n      .pipe(\n        tap(() => console.log(`After... ${Date.now() - now}ms`)),\n      );\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7531\u4e8e ",(0,s.jsx)(n.code,{children:"handle()"})," \u8fd4\u56de RxJS ",(0,s.jsx)(n.code,{children:"Observable"})," \uff0c\u6211\u4eec\u6709\u591a\u79cd\u8fd0\u7b97\u7b26\u53ef\u4f9b\u9009\u62e9\u6765\u64cd\u4f5c\u6d41\u3002\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86\u8fd0\u7b97\u7b26\uff0c\u8be5 ",(0,s.jsx)(n.code,{children:"tap()"})," \u8fd0\u7b97\u7b26\u5728\u53ef\u89c2\u5bdf\u6d41\u6b63\u5e38\u6216\u5f02\u5e38\u7ec8\u6b62\u65f6\u8c03\u7528\u6211\u4eec\u7684\u533f\u540d\u65e5\u5fd7\u8bb0\u5f55\u51fd\u6570\uff0c\u4f46\u4e0d\u4f1a\u5e72\u6270\u54cd\u5e94\u5468\u671f\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u7ed1\u5b9a\u62e6\u622a\u5668",children:"\u7ed1\u5b9a\u62e6\u622a\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@UseInterceptors(LoggingInterceptor)\nexport class CatsController {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u4e0a\u8ff0\u6784\u9020\uff0c\u4e2d ",(0,s.jsx)(n.code,{children:"CatsController"})," \u5b9a\u4e49\u7684\u6bcf\u4e2a\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u90fd\u5c06\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"LoggingInterceptor"})," .\u5f53\u6709\u4eba\u8c03\u7528\u7ec8\u7ed3\u70b9 ",(0,s.jsx)(n.code,{children:"GET /cats"})," \u65f6\uff0c\u4f60\u5c06\u5728\u6807\u51c6\u8f93\u51fa\u4e2d\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Before...\nAfter... 1ms\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u4f20\u9012\u4e86\u7c7b\u578b\uff08\u800c\u4e0d\u662f\u5b9e\u4f8b\uff09\uff0c\u5c06\u5b9e\u4f8b\u5316\u7684\u8d23\u4efb\u7559\u7ed9\u4e86\u6846\u67b6\u5e76\u542f\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"LoggingInterceptor"})," \u4f9d\u8d56\u6ce8\u5165\u3002\u4e0e\u7ba1\u9053\u3001\u9632\u62a4\u88c5\u7f6e\u548c\u5f02\u5e38\u8fc7\u6ee4\u5668\u4e00\u6837\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u5c31\u5730\u5b9e\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@UseInterceptors(new LoggingInterceptor())\nexport class CatsController {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u8bbe\u7f6e\u5168\u5c40\u62e6\u622a\u5668\uff0c\u6211\u4eec\u4f7f\u7528 Nest \u5e94\u7528\u7a0b\u5e8f\u5b9e\u4f8b ",(0,s.jsx)(n.code,{children:"useGlobalInterceptors()"})," \u7684\u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const app = await NestFactory.create(AppModule);\napp.useGlobalInterceptors(new LoggingInterceptor());\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5168\u5c40\u62e6\u622a\u5668\u7528\u4e8e\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u6bcf\u4e2a\u63a7\u5236\u5668\u548c\u6bcf\u4e2a\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u3002\u5728\u4f9d\u8d56\u6ce8\u5165\u65b9\u9762\uff0c\u4ece\u4efb\u4f55\u6a21\u5757\u5916\u90e8\u6ce8\u518c\u7684\u5168\u5c40\u62e6\u622a\u5668\uff08\u5982 ",(0,s.jsx)(n.code,{children:"useGlobalInterceptors()"})," \u4e0a\u4f8b\u6240\u793a\uff09\u65e0\u6cd5\u6ce8\u5165\u4f9d\u8d56\u5173\u7cfb\uff0c\u56e0\u4e3a\u8fd9\u662f\u5728\u4efb\u4f55\u6a21\u5757\u7684\u4e0a\u4e0b\u6587\u4e4b\u5916\u5b8c\u6210\u7684\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u6784\u9020\u76f4\u63a5\u4ece\u4efb\u4f55\u6a21\u5757\u8bbe\u7f6e\u62e6\u622a\u5668\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Module } from '@nestjs/common';\nimport { APP_INTERCEPTOR } from '@nestjs/core';\n\n@Module({\n  providers: [\n    {\n      provide: APP_INTERCEPTOR,\n      useClass: LoggingInterceptor,\n    },\n  ],\n})\nexport class AppModule {}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u54cd\u5e94\u6620\u5c04",children:"\u54cd\u5e94\u6620\u5c04"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5df2\u7ecf\u77e5\u9053\u8fd4\u56de ",(0,s.jsx)(n.code,{children:"handle()"})," \u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"Observable"})," .\u6d41\u5305\u542b\u4ece\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u8fd4\u56de\u7684\u503c\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 RxJS ",(0,s.jsx)(n.code,{children:"map()"})," \u7684\u8fd0\u7b97\u7b26\u8f7b\u677e\u6539\u53d8\u5b83\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"TransformInterceptor"})," \uff0c\u5b83\u5c06\u4ee5\u4e00\u79cd\u7b80\u5355\u7684\u65b9\u5f0f\u4fee\u6539\u6bcf\u4e2a\u54cd\u5e94\u6765\u6f14\u793a\u8be5\u8fc7\u7a0b\u3002\u5b83\u5c06\u4f7f\u7528 RxJS ",(0,s.jsx)(n.code,{children:"map()"})," \u7684\u8fd0\u7b97\u7b26\u5c06\u54cd\u5e94\u5bf9\u8c61\u5206\u914d\u7ed9\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\u7684 ",(0,s.jsx)(n.code,{children:"data"})," \u5c5e\u6027\uff0c\u5e76\u5c06\u65b0\u5bf9\u8c61\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"transform.interceptor.ts"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';\nimport { Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\nexport interface Response<T> {\n  data: T;\n}\n\n@Injectable()\nexport class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {\n  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {\n    return next.handle().pipe(map(data => ({ data })));\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u4e0a\u8ff0\u6784\u9020\uff0c\u5f53\u6709\u4eba\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"GET /cats"})," \u7aef\u70b9\u65f6\uff0c\u54cd\u5e94\u5c06\u5982\u4e0b\u6240\u793a\uff08\u5047\u8bbe\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u8fd4\u56de\u4e00\u4e2a\u7a7a\u6570\u7ec4 ",(0,s.jsx)(n.code,{children:"[]"})," \uff09\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n  "data": []\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u62e6\u622a\u5668\u5728\u4e3a\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e2d\u51fa\u73b0\u7684\u9700\u6c42\u521b\u5efa\u53ef\u91cd\u7528\u7684\u89e3\u51b3\u65b9\u6848\u65b9\u9762\u5177\u6709\u5de8\u5927\u4ef7\u503c\u3002\u4f8b\u5982\uff0c\u5047\u8bbe\u6211\u4eec\u9700\u8981\u5c06\u503c ",(0,s.jsx)(n.code,{children:"null"})," \u7684\u6bcf\u6b21\u51fa\u73b0\u8f6c\u6362\u4e3a\u7a7a\u5b57\u7b26\u4e32 ",(0,s.jsx)(n.code,{children:"''"})," \u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e00\u884c\u4ee3\u7801\u6765\u5b8c\u6210\u5b83\uff0c\u5e76\u5168\u5c40\u7ed1\u5b9a\u62e6\u622a\u5668\uff0c\u4ee5\u4fbf\u6bcf\u4e2a\u6ce8\u518c\u7684\u5904\u7406\u7a0b\u5e8f\u81ea\u52a8\u4f7f\u7528\u5b83\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';\nimport { Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\n@Injectable()\nexport class ExcludeNullInterceptor implements NestInterceptor {\n  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {\n    return next\n      .handle()\n      .pipe(map(value => value === null ? '' : value ));\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u8bf7\u8bbf\u95ee\u5b98\u7f51\uff1a",(0,s.jsx)(n.a,{href:"https://docs.nestjs.com/interceptors",children:"https://docs.nestjs.com/interceptors"})]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},7540:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>l});var s=r(959);const c={},t=s.createContext(c);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);