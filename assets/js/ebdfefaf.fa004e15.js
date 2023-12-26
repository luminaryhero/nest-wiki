"use strict";(self.webpackChunknest_wiki=self.webpackChunknest_wiki||[]).push([[3533],{549:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var r=s(1527),t=s(7540);const c={},o=void 0,l={id:"\u6982\u8ff0/\u5b88\u536b",title:"\u5b88\u536b",description:"\u5b88\u536b\u662f\u7528 @Injectable() \u88c5\u9970\u5668\u6ce8\u91ca\u7684\u7c7b\uff0c\u5b83\u5b9e\u73b0\u63a5\u53e3 CanActivate \u3002",source:"@site/docs/\u6982\u8ff0/\u5b88\u536b.md",sourceDirName:"\u6982\u8ff0",slug:"/\u6982\u8ff0/\u5b88\u536b",permalink:"/nest-wiki/docs/\u6982\u8ff0/\u5b88\u536b",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ba1\u9053",permalink:"/nest-wiki/docs/\u6982\u8ff0/\u7ba1\u9053"},next:{title:"\u62e6\u622a\u5668",permalink:"/nest-wiki/docs/\u6982\u8ff0/\u62e6\u622a\u5668"}},d={},i=[{value:"\u6388\u6743\u5b88\u536b",id:"\u6388\u6743\u5b88\u536b",level:2},{value:"\u57fa\u4e8e\u89d2\u8272\u7684\u8eab\u4efd\u9a8c\u8bc1",id:"\u57fa\u4e8e\u89d2\u8272\u7684\u8eab\u4efd\u9a8c\u8bc1",level:2},{value:"\u5e94\u7528\u5b88\u536b",id:"\u5e94\u7528\u5b88\u536b",level:2},{value:"\u4e3a\u6bcf\u4e2a\u5904\u7406\u7a0b\u5e8f\u8bbe\u7f6e\u89d2\u8272",id:"\u4e3a\u6bcf\u4e2a\u5904\u7406\u7a0b\u5e8f\u8bbe\u7f6e\u89d2\u8272",level:2},{value:"\u628a\u5b83\u4eec\u653e\u5728\u4e00\u8d77",id:"\u628a\u5b83\u4eec\u653e\u5728\u4e00\u8d77",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u5b88\u536b\u662f\u7528 ",(0,r.jsx)(n.code,{children:"@Injectable()"})," \u88c5\u9970\u5668\u6ce8\u91ca\u7684\u7c7b\uff0c\u5b83\u5b9e\u73b0\u63a5\u53e3 ",(0,r.jsx)(n.code,{children:"CanActivate"})," \u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://docs.nestjs.com/assets/Guards_1.png",alt:"img"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5b88\u536b\u53ea\u6709\u4e00\u4e2a\u8d23\u4efb\u3002\u5b83\u4eec\u786e\u5b9a\u7ed9\u5b9a\u8bf7\u6c42\u662f\u5426\u7531\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u5904\u7406\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u8fd0\u884c\u65f6\u5b58\u5728\u7684\u67d0\u4e9b\u6761\u4ef6\uff08\u5982\u6743\u9650\u3001\u89d2\u8272\u3001ACL \u7b49\uff09\u3002\u8fd9\u901a\u5e38\u79f0\u4e3a\u6388\u6743\u3002\u6388\u6743\uff08\u53ca\u5176\u8868\u4eb2\u8eab\u4efd\u9a8c\u8bc1\uff0c\u901a\u5e38\u4e0e\u4e4b\u534f\u4f5c\uff09\u901a\u5e38\u7531\u4f20\u7edf Express \u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u4e2d\u95f4\u4ef6\u5904\u7406\u3002\u4e2d\u95f4\u4ef6\u662f\u8eab\u4efd\u9a8c\u8bc1\u7684\u4e0d\u9519\u9009\u62e9\uff0c\u56e0\u4e3a\u4ee4\u724c\u9a8c\u8bc1\u548c\u5c06\u5c5e\u6027\u9644\u52a0\u5230 ",(0,r.jsx)(n.code,{children:"request"})," \u5bf9\u8c61\u4e4b\u7c7b\u7684\u5185\u5bb9\u4e0e\u7279\u5b9a\u8def\u7531\u4e0a\u4e0b\u6587\uff08\u53ca\u5176\u5143\u6570\u636e\uff09\u6ca1\u6709\u7d27\u5bc6\u8054\u7cfb\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f46\u5c31\u5176\u672c\u8d28\u800c\u8a00\uff0c\u4e2d\u95f4\u4ef6\u662f\u611a\u8822\u7684\u3002\u5b83\u4e0d\u77e5\u9053\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"next()"})," \u51fd\u6570\u540e\u5c06\u6267\u884c\u54ea\u4e2a\u5904\u7406\u7a0b\u5e8f\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u5b88\u536b\u53ef\u4ee5\u8bbf\u95ee ",(0,r.jsx)(n.code,{children:"ExecutionContext"})," \u5b9e\u4f8b\uff0c\u56e0\u6b64\u786e\u5207\u5730\u77e5\u9053\u63a5\u4e0b\u6765\u8981\u6267\u884c\u4ec0\u4e48\u3002\u5b83\u4eec\u7684\u8bbe\u8ba1\u4e0e\u5f02\u5e38\u7b5b\u9009\u5668\u3001\u7ba1\u9053\u548c\u4fa6\u542c\u5668\u975e\u5e38\u76f8\u4f3c\uff0c\u53ef\u8ba9\u60a8\u5728\u8bf7\u6c42/\u54cd\u5e94\u5468\u671f\u4e2d\u7684\u6b63\u786e\u70b9\u63d2\u5165\u5904\u7406\u903b\u8f91\uff0c\u5e76\u4ee5\u58f0\u660e\u65b9\u5f0f\u6267\u884c\u6b64\u64cd\u4f5c\u3002\u8fd9\u6709\u52a9\u4e8e\u4f7f\u4ee3\u7801\u4fdd\u6301\u5e72\u71e5\u548c\u58f0\u660e\u6027\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Tip"}),"\n",(0,r.jsx)(n.p,{children:"\u5b88\u536b\u5728\u6240\u6709\u4e2d\u95f4\u4ef6\u4e4b\u540e\u6267\u884c\uff0c\u4f46\u5728\u4efb\u4f55\u62e6\u622a\u5668\u6216\u7ba1\u9053\u4e4b\u524d\u6267\u884c\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6388\u6743\u5b88\u536b",children:"\u6388\u6743\u5b88\u536b"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u524d\u6240\u8ff0\uff0c\u6388\u6743\u662f Guards \u7684\u4e00\u4e2a\u5f88\u597d\u7684\u7528\u4f8b\uff0c\u56e0\u4e3a\u53ea\u6709\u5f53\u8c03\u7528\u65b9\uff08\u901a\u5e38\u662f\u7ecf\u8fc7\u8eab\u4efd\u9a8c\u8bc1\u7684\u7279\u5b9a\u7528\u6237\uff09\u5177\u6709\u8db3\u591f\u7684\u6743\u9650\u65f6\uff0c\u7279\u5b9a\u8def\u7531\u624d\u53ef\u7528\u3002 ",(0,r.jsx)(n.code,{children:"AuthGuard"})," \u6211\u4eec\u73b0\u5728\u5c06\u8981\u6784\u5efa\u7684\u5047\u5b9a\u7528\u6237\u662f\u7ecf\u8fc7\u8eab\u4efd\u9a8c\u8bc1\u7684\u7528\u6237\uff08\u56e0\u6b64\uff0c\u4ee4\u724c\u9644\u52a0\u5230\u8bf7\u6c42\u6807\u5934\uff09\u3002\u5b83\u5c06\u63d0\u53d6\u5e76\u9a8c\u8bc1\u4ee4\u724c\uff0c\u5e76\u4f7f\u7528\u63d0\u53d6\u7684\u4fe1\u606f\u6765\u786e\u5b9a\u8bf7\u6c42\u662f\u5426\u53ef\u4ee5\u7ee7\u7eed\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"auth.guard.ts"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";\nimport { Observable } from "rxjs";\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  canActivate(\n    context: ExecutionContext\n  ): boolean | Promise<boolean> | Observable<boolean> {\n    const request = context.switchToHttp().getRequest();\n    return validateRequest(request);\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"validateRequest()"})," \u51fd\u6570\u5185\u90e8\u7684\u903b\u8f91\u53ef\u4ee5\u6839\u636e\u9700\u8981\u7b80\u5355\u6216\u590d\u6742\u3002\u6b64\u793a\u4f8b\u7684\u8981\u70b9\u662f\u5c55\u793a\u9632\u62a4\u5982\u4f55\u9002\u5e94\u8bf7\u6c42/\u54cd\u5e94\u5468\u671f\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6bcf\u4e2a\u5b88\u536b\u90fd\u5fc5\u987b\u5b9e\u73b0\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"canActivate()"})," \u529f\u80fd\u3002\u6b64\u51fd\u6570\u5e94\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u6307\u793a\u662f\u5426\u5141\u8bb8\u5f53\u524d\u8bf7\u6c42\u3002\u5b83\u53ef\u4ee5\u540c\u6b65\u6216\u5f02\u6b65\u8fd4\u56de\u54cd\u5e94\uff08\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Promise"})," \u6216 ",(0,r.jsx)(n.code,{children:"Observable"})," \uff09\u3002Nest \u4f7f\u7528\u8fd4\u56de\u503c\u6765\u63a7\u5236\u4e0b\u4e00\u4e2a\u64cd\u4f5c\uff1a"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u8fd4\u56de ",(0,r.jsx)(n.code,{children:"true"})," \uff0c\u5219\u5c06\u5904\u7406\u8bf7\u6c42\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u8fd4\u56de ",(0,r.jsx)(n.code,{children:"false"})," \uff0cNest \u5c06\u62d2\u7edd\u8be5\u8bf7\u6c42\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u57fa\u4e8e\u89d2\u8272\u7684\u8eab\u4efd\u9a8c\u8bc1",children:"\u57fa\u4e8e\u89d2\u8272\u7684\u8eab\u4efd\u9a8c\u8bc1"}),"\n",(0,r.jsx)(n.p,{children:"\u8ba9\u6211\u4eec\u6784\u5efa\u4e00\u4e2a\u529f\u80fd\u66f4\u5f3a\u5927\u7684\u9632\u62a4\uff0c\u4ec5\u5141\u8bb8\u5177\u6709\u7279\u5b9a\u89d2\u8272\u7684\u7528\u6237\u8bbf\u95ee\u3002\u6211\u4eec\u5c06\u4ece\u4e00\u4e2a\u57fa\u672c\u7684\u5b88\u536b\u6a21\u677f\u5f00\u59cb\uff0c\u5e76\u5728\u540e\u9762\u7684\u7ae0\u8282\u4e2d\u5728\u6b64\u57fa\u7840\u4e0a\u8fdb\u884c\u6784\u5efa\u3002\u76ee\u524d\uff0c\u5b83\u5141\u8bb8\u6240\u6709\u8bf7\u6c42\u7ee7\u7eed\uff1a"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"roles.guard.ts"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";\nimport { Observable } from "rxjs";\n\n@Injectable()\nexport class RolesGuard implements CanActivate {\n  canActivate(\n    context: ExecutionContext\n  ): boolean | Promise<boolean> | Observable<boolean> {\n    return true;\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u5e94\u7528\u5b88\u536b",children:"\u5e94\u7528\u5b88\u536b"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0e\u7ba1\u9053\u548c\u5f02\u5e38\u7b5b\u9009\u5668\u4e00\u6837\uff0c\u9632\u62a4\u53ef\u4ee5\u662f\u63a7\u5236\u5668\u8303\u56f4\u7684\u3001\u65b9\u6cd5\u8303\u56f4\u7684\u6216\u5168\u5c40\u8303\u56f4\u7684\u3002\u4e0b\u9762\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"@UseGuards()"})," \u88c5\u9970\u5668\u8bbe\u7f6e\u4e00\u4e2a\u63a7\u5236\u5668\u8303\u56f4\u7684\u9632\u62a4\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'@Controller("cats")\n@UseGuards(RolesGuard)\nexport class CatsController {}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u9762\uff0c\u6211\u4eec\u4f20\u9012\u4e86\u7c7b\uff08\u800c\u4e0d\u662f\u5b9e\u4f8b\uff09\uff0c\u5c06\u5b9e\u4f8b\u5316\u7684\u8d23\u4efb\u7559\u7ed9\u4e86 ",(0,r.jsx)(n.code,{children:"RolesGuard"})," \u6846\u67b6\u5e76\u542f\u7528\u4e86\u4f9d\u8d56\u6ce8\u5165\u3002\u4e0e\u7ba1\u9053\u548c\u5f02\u5e38\u7b5b\u9009\u5668\u4e00\u6837\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u5c31\u5730\u5b9e\u4f8b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'@Controller("cats")\n@UseGuards(new RolesGuard())\nexport class CatsController {}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u9762\u7684\u6784\u9020\u5c06\u9632\u62a4\u88c5\u7f6e\u9644\u52a0\u5230\u6b64\u63a7\u5236\u5668\u58f0\u660e\u7684\u6bcf\u4e2a\u5904\u7406\u7a0b\u5e8f\u3002\u5982\u679c\u6211\u4eec\u5e0c\u671b\u4fdd\u62a4\u4ec5\u5e94\u7528\u4e8e\u5355\u4e2a\u65b9\u6cd5\uff0c\u5219\u5728\u65b9\u6cd5\u7ea7\u522b\u5e94\u7528 ",(0,r.jsx)(n.code,{children:"@UseGuards()"})," \u88c5\u9970\u5668\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u8bbe\u7f6e\u5168\u5c40\u4fdd\u62a4\uff0c\u8bf7\u4f7f\u7528 Nest \u5e94\u7528\u7a0b\u5e8f\u5b9e\u4f8b ",(0,r.jsx)(n.code,{children:"useGlobalGuards()"})," \u7684\u65b9\u6cd5\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const app = await NestFactory.create(AppModule);\napp.useGlobalGuards(new RolesGuard());\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5168\u5c40\u9632\u62a4\u7528\u4e8e\u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u6bcf\u4e2a\u63a7\u5236\u5668\u548c\u6bcf\u4e2a\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u3002\u5728\u4f9d\u8d56\u6ce8\u5165\u65b9\u9762\uff0c\u4ece\u4efb\u4f55\u6a21\u5757\u5916\u90e8\u6ce8\u518c\u7684\u5168\u5c40\u4fdd\u62a4\uff08 ",(0,r.jsx)(n.code,{children:"useGlobalGuards()"})," \u5982\u4e0a\u4f8b\u6240\u793a\uff09\u65e0\u6cd5\u6ce8\u5165\u4f9d\u8d56\u5173\u7cfb\uff0c\u56e0\u4e3a\u8fd9\u662f\u5728\u4efb\u4f55\u6a21\u5757\u7684\u4e0a\u4e0b\u6587\u4e4b\u5916\u5b8c\u6210\u7684\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7ed3\u6784\u76f4\u63a5\u4ece\u4efb\u4f55\u6a21\u5757\u8bbe\u7f6e\u9632\u62a4\u88c5\u7f6e\uff1a"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"app.module.ts"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { Module } from "@nestjs/common";\nimport { APP_GUARD } from "@nestjs/core";\n\n@Module({\n  providers: [\n    {\n      provide: APP_GUARD,\n      useClass: RolesGuard,\n    },\n  ],\n})\nexport class AppModule {}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u4e3a\u6bcf\u4e2a\u5904\u7406\u7a0b\u5e8f\u8bbe\u7f6e\u89d2\u8272",children:"\u4e3a\u6bcf\u4e2a\u5904\u7406\u7a0b\u5e8f\u8bbe\u7f6e\u89d2\u8272"}),"\n",(0,r.jsxs)(n.p,{children:["\u6211\u4eec\u6b63\u5728 ",(0,r.jsx)(n.code,{children:"RolesGuard"})," \u5de5\u4f5c\uff0c\u4f46\u8fd8\u4e0d\u662f\u5f88\u806a\u660e\u3002\u6211\u4eec\u8fd8\u6ca1\u6709\u5229\u7528\u6700\u91cd\u8981\u7684\u4fdd\u62a4\u529f\u80fd - \u6267\u884c\u4e0a\u4e0b\u6587\u3002\u5b83\u8fd8\u4e0d\u77e5\u9053\u89d2\u8272\uff0c\u4e5f\u4e0d\u77e5\u9053\u6bcf\u4e2a\u5904\u7406\u7a0b\u5e8f\u5141\u8bb8\u54ea\u4e9b\u89d2\u8272\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e\u4e0d\u540c\u7684\u8def\u7531\uff0c\u53ef\u4ee5 ",(0,r.jsx)(n.code,{children:"CatsController"})," \u6709\u4e0d\u540c\u7684\u6743\u9650\u65b9\u6848\u3002\u6709\u4e9b\u53ef\u80fd\u4ec5\u5bf9\u7ba1\u7406\u5458\u7528\u6237\u53ef\u7528\uff0c\u800c\u53e6\u4e00\u4e9b\u53ef\u80fd\u5bf9\u6240\u6709\u4eba\u5f00\u653e\u3002\u6211\u4eec\u5982\u4f55\u4ee5\u7075\u6d3b\u4e14\u53ef\u91cd\u7528\u7684\u65b9\u5f0f\u5c06\u89d2\u8272\u4e0e\u8def\u7531\u5339\u914d\uff1f"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u5c31\u662f\u81ea\u5b9a\u4e49\u5143\u6570\u636e\u53d1\u6325\u4f5c\u7528\u7684\u5730\u65b9\uff08\u5728\u6b64\u5904\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff09\u3002Nest \u63d0\u4f9b\u4e86\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"Reflector#createDecorator"})," \u9759\u6001\u65b9\u6cd5\u521b\u5efa\u7684\u88c5\u9970\u5668\u6216\u5185\u7f6e ",(0,r.jsx)(n.code,{children:"@SetMetadata()"})," \u88c5\u9970\u5668\u5c06\u81ea\u5b9a\u4e49\u5143\u6570\u636e\u9644\u52a0\u5230\u8def\u7531\u5904\u7406\u7a0b\u5e8f\u7684\u529f\u80fd\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c\u8ba9\u6211\u4eec\u4f7f\u7528\u5c06\u5143\u6570\u636e\u9644\u52a0\u5230\u5904\u7406\u7a0b\u5e8f ",(0,r.jsx)(n.code,{children:"Reflector#createDecorator"})," \u7684\u65b9\u6cd5\u521b\u5efa\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"@Roles()"})," \u88c5\u9970\u5668\u3002 ",(0,r.jsx)(n.code,{children:"Reflector"})," \u7531\u6846\u67b6\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\uff0c\u5e76\u4ece\u5305\u4e2d ",(0,r.jsx)(n.code,{children:"@nestjs/core"})," \u516c\u5f00\u3002"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"roles.decorator.ts"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { Reflector } from "@nestjs/core";\n\nexport const Roles = Reflector.createDecorator<string[]>();\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u7684 ",(0,r.jsx)(n.code,{children:"Roles"})," \u88c5\u9970\u5668\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u63a5\u53d7 \u7c7b\u578b\u7684 ",(0,r.jsx)(n.code,{children:"string[]"})," \u5355\u4e2a\u53c2\u6570\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\uff0c\u8981\u4f7f\u7528\u8fd9\u4e2a\u88c5\u9970\u5668\uff0c\u6211\u4eec\u53ea\u9700\u7528\u5b83\u6ce8\u91ca\u5904\u7406\u7a0b\u5e8f\uff1a"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"cats.controller.ts"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"@Post()\n@Roles(['admin'])\nasync create(@Body() createCatDto: CreateCatDto) {\n  this.catsService.create(createCatDto);\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8fd9\u91cc\uff0c ",(0,r.jsx)(n.code,{children:"Roles"})," \u6211\u4eec\u5df2\u5c06\u88c5\u9970\u5668\u5143\u6570\u636e\u9644\u52a0\u5230\u8be5 ",(0,r.jsx)(n.code,{children:"create()"})," \u65b9\u6cd5\uff0c\u6307\u793a\u4ec5\u5141\u8bb8\u5177\u6709\u8be5 ",(0,r.jsx)(n.code,{children:"admin"})," \u89d2\u8272\u7684\u7528\u6237\u8bbf\u95ee\u6b64\u8def\u7531\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u628a\u5b83\u4eec\u653e\u5728\u4e00\u8d77",children:"\u628a\u5b83\u4eec\u653e\u5728\u4e00\u8d77"}),"\n",(0,r.jsxs)(n.p,{children:["\u73b0\u5728\u8ba9\u6211\u4eec\u56de\u8fc7\u5934\u6765\uff0c\u5c06\u5b83\u4e0e\u6211\u4eec\u7684 ",(0,r.jsx)(n.code,{children:"RolesGuard"})," .\u76ee\u524d\uff0c\u5b83\u53ea\u662f\u5728\u6240\u6709\u60c5\u51b5\u4e0b\u8fd4\u56de ",(0,r.jsx)(n.code,{children:"true"})," \uff0c\u5141\u8bb8\u6bcf\u4e2a\u8bf7\u6c42\u7ee7\u7eed\u3002\u6211\u4eec\u5e0c\u671b\u6839\u636e\u5206\u914d\u7ed9\u5f53\u524d\u7528\u6237\u7684\u89d2\u8272\u4e0e\u5f53\u524d\u6b63\u5728\u5904\u7406\u7684\u8def\u7531\u6240\u9700\u7684\u5b9e\u9645\u89d2\u8272\u7684\u6bd4\u8f83\uff0c\u4f7f\u8fd4\u56de\u503c\u6210\u4e3a\u6761\u4ef6\u3002\u4e3a\u4e86\u8bbf\u95ee\u8def\u7531\u7684\u89d2\u8272\uff08\u81ea\u5b9a\u4e49\u5143\u6570\u636e\uff09\uff0c\u6211\u4eec\u5c06\u518d\u6b21\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"Reflector"})," \u5e2e\u52a9\u7a0b\u5e8f\u7c7b\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"roles.guard.ts"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";\nimport { Reflector } from "@nestjs/core";\nimport { Roles } from "./roles.decorator";\n\n@Injectable()\nexport class RolesGuard implements CanActivate {\n  constructor(private reflector: Reflector) {}\n\n  canActivate(context: ExecutionContext): boolean {\n    const roles = this.reflector.get(Roles, context.getHandler());\n    if (!roles) {\n      return true;\n    }\n    const request = context.switchToHttp().getRequest();\n    const user = request.user;\n    return matchRoles(roles, user.roles);\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u6743\u9650\u4e0d\u8db3\u7684\u7528\u6237\u8bf7\u6c42\u7aef\u70b9\u65f6\uff0cNest \u4f1a\u81ea\u52a8\u8fd4\u56de\u4ee5\u4e0b\u54cd\u5e94\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'{\n  "statusCode": 403,\n  "message": "Forbidden resource",\n  "error": "Forbidden"\n}\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u8bf7\u8bbf\u95ee\u5b98\u7f51\uff1a",(0,r.jsx)(n.a,{href:"https://docs.nestjs.com/guards",children:"https://docs.nestjs.com/guards"})]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},7540:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var r=s(959);const t={},c=r.createContext(t);function o(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);