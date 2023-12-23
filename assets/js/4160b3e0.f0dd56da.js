"use strict";(self.webpackChunkNest_wiki=self.webpackChunkNest_wiki||[]).push([[7211],{9704:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var s=c(1527),r=c(7540);const l={},t=void 0,i={id:"\u6280\u672f/\u7f13\u5b58",title:"\u7f13\u5b58",description:"\u7f13\u5b58\u662f\u4e00\u79cd\u7b80\u5355\u6613\u7528\u7684\u6280\u672f\uff0c\u6709\u52a9\u4e8e\u63d0\u9ad8\u5e94\u7528\u7684\u6027\u80fd\u3002\u5b83\u5145\u5f53\u4e34\u65f6\u6570\u636e\u5b58\u50a8\uff0c\u63d0\u4f9b\u9ad8\u6027\u80fd\u6570\u636e\u8bbf\u95ee\u3002",source:"@site/docs/\u6280\u672f/\u7f13\u5b58.md",sourceDirName:"\u6280\u672f",slug:"/\u6280\u672f/\u7f13\u5b58",permalink:"/Nest-wiki/docs/\u6280\u672f/\u7f13\u5b58",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9a8c\u8bc1",permalink:"/Nest-wiki/docs/\u6280\u672f/\u9a8c\u8bc1"},next:{title:"\u5e8f\u5217\u5316",permalink:"/Nest-wiki/docs/\u6280\u672f/\u5e8f\u5217\u5316"}},a={},o=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5185\u5b58\u4e2d\u7f13\u5b58",id:"\u5185\u5b58\u4e2d\u7f13\u5b58",level:2},{value:"\u4e0e\u7f13\u5b58\u5b58\u50a8\u4ea4\u4e92",id:"\u4e0e\u7f13\u5b58\u5b58\u50a8\u4ea4\u4e92",level:2},{value:"\u81ea\u52a8\u7f13\u5b58\u54cd\u5e94",id:"\u81ea\u52a8\u7f13\u5b58\u54cd\u5e94",level:2},{value:"\u81ea\u5b9a\u4e49\u7f13\u5b58",id:"\u81ea\u5b9a\u4e49\u7f13\u5b58",level:2},{value:"\u5168\u5c40\u4f7f\u7528\u6a21\u5757",id:"\u5168\u5c40\u4f7f\u7528\u6a21\u5757",level:2},{value:"\u5168\u5c40\u7f13\u5b58\u8986\u76d6",id:"\u5168\u5c40\u7f13\u5b58\u8986\u76d6",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u7f13\u5b58\u662f\u4e00\u79cd\u7b80\u5355\u6613\u7528\u7684\u6280\u672f\uff0c\u6709\u52a9\u4e8e\u63d0\u9ad8\u5e94\u7528\u7684\u6027\u80fd\u3002\u5b83\u5145\u5f53\u4e34\u65f6\u6570\u636e\u5b58\u50a8\uff0c\u63d0\u4f9b\u9ad8\u6027\u80fd\u6570\u636e\u8bbf\u95ee\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\u5b89\u88c5\u6240\u9700\u7684\u8f6f\u4ef6\u5305\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npm install @nestjs/cache-manager cache-manager\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5185\u5b58\u4e2d\u7f13\u5b58",children:"\u5185\u5b58\u4e2d\u7f13\u5b58"}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u542f\u7528\u7f13\u5b58\uff0c\u8bf7\u5bfc\u5165 ",(0,s.jsx)(n.code,{children:"CacheModule"})," \u5e76\u8c03\u7528\u5176 ",(0,s.jsx)(n.code,{children:"register()"})," \u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Module } from '@nestjs/common';\nimport { CacheModule } from '@nestjs/cache-manager';\nimport { AppController } from './app.controller';\n\n@Module({\n  imports: [CacheModule.register()],\n  controllers: [AppController],\n})\nexport class AppModule {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e0e\u7f13\u5b58\u5b58\u50a8\u4ea4\u4e92",children:"\u4e0e\u7f13\u5b58\u5b58\u50a8\u4ea4\u4e92"}),"\n",(0,s.jsxs)(n.p,{children:["\u82e5\u8981\u4e0e\u7f13\u5b58\u7ba1\u7406\u5668\u5b9e\u4f8b\u4ea4\u4e92\uff0c\u8bf7\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"CACHE_MANAGER"})," \u4ee4\u724c\u5c06\u5176\u6ce8\u5165\u5230\u7c7b\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Cache"})," \u5b9e\u4f8b\u4e0a ",(0,s.jsx)(n.code,{children:"get"})," \u7684\u65b9\u6cd5\uff08\u4ece\u5305\u4e2d ",(0,s.jsx)(n.code,{children:"cache-manager"})," \uff09\u7528\u4e8e\u4ece\u7f13\u5b58\u4e2d\u68c0\u7d22\u9879\u76ee\u3002\u5982\u679c\u7f13\u5b58\u4e2d\u4e0d\u5b58\u5728\u8be5\u9879\uff0c ",(0,s.jsx)(n.code,{children:"null"})," \u5219\u5c06\u8fd4\u56de\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const value = await this.cacheManager.get('key');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u82e5\u8981\u5c06\u9879\u6dfb\u52a0\u5230\u7f13\u5b58\u4e2d\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b ",(0,s.jsx)(n.code,{children:"set"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await this.cacheManager.set('key', 'value');\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7f13\u5b58\u7684\u9ed8\u8ba4\u8fc7\u671f\u65f6\u95f4\u4e3a 5 \u79d2\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u624b\u52a8\u4e3a\u6b64\u7279\u5b9a\u5bc6\u94a5\u6307\u5b9a TTL\uff08\u8fc7\u671f\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\uff0c\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await this.cacheManager.set('key', 'value', 1000);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u7981\u7528\u7f13\u5b58\u8fc7\u671f\uff0c\u8bf7\u5c06 ",(0,s.jsx)(n.code,{children:"ttl"})," \u914d\u7f6e\u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"0"})," \uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await this.cacheManager.set('key', 'value', 0);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u82e5\u8981\u4ece\u7f13\u5b58\u4e2d\u5220\u9664\u9879\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b ",(0,s.jsx)(n.code,{children:"del"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await this.cacheManager.del('key');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u82e5\u8981\u6e05\u9664\u6574\u4e2a\u7f13\u5b58\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b ",(0,s.jsx)(n.code,{children:"reset"})," \u65b9\u6cd5\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"await this.cacheManager.reset();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u52a8\u7f13\u5b58\u54cd\u5e94",children:"\u81ea\u52a8\u7f13\u5b58\u54cd\u5e94"}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u542f\u7528\u81ea\u52a8\u7f13\u5b58\u54cd\u5e94\uff0c\u53ea\u9700\u7ed1\u5b9a\u8981\u7f13\u5b58\u6570\u636e ",(0,s.jsx)(n.code,{children:"CacheInterceptor"})," \u7684\u4f4d\u7f6e\u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Controller()\n@UseInterceptors(CacheInterceptor)\nexport class AppController {\n  @Get()\n  findAll(): string[] {\n    return [];\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u82e5\u8981\u51cf\u5c11\u6240\u9700\u7684\u6837\u677f\u6570\u91cf\uff0c\u53ef\u4ee5\u5168\u5c40\u7ed1\u5b9a ",(0,s.jsx)(n.code,{children:"CacheInterceptor"})," \u5230\u6240\u6709\u7ec8\u7ed3\u70b9\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { Module } from '@nestjs/common';\nimport { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';\nimport { AppController } from './app.controller';\nimport { APP_INTERCEPTOR } from '@nestjs/core';\n\n@Module({\n  imports: [CacheModule.register()],\n  controllers: [AppController],\n  providers: [\n    {\n      provide: APP_INTERCEPTOR,\n      useClass: CacheInterceptor,\n    },\n  ],\n})\nexport class AppModule {}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u7f13\u5b58",children:"\u81ea\u5b9a\u4e49\u7f13\u5b58"}),"\n",(0,s.jsxs)(n.p,{children:["\u6240\u6709\u7f13\u5b58\u7684\u6570\u636e\u90fd\u6709\u81ea\u5df1\u7684\u8fc7\u671f\u65f6\u95f4 \uff08TTL\uff09\u3002\u82e5\u8981\u81ea\u5b9a\u4e49\u9ed8\u8ba4\u503c\uff0c\u8bf7\u5c06 options \u5bf9\u8c61\u4f20\u9012\u7ed9\u8be5 ",(0,s.jsx)(n.code,{children:"register()"})," \u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"CacheModule.register({\n  ttl: 5, // seconds\n  max: 10, // maximum number of items in cache\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5168\u5c40\u4f7f\u7528\u6a21\u5757",children:"\u5168\u5c40\u4f7f\u7528\u6a21\u5757"}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u60a8\u60f3 ",(0,s.jsx)(n.code,{children:"CacheModule"})," \u5728\u5176\u4ed6\u6a21\u5757\u4e2d\u4f7f\u7528\u65f6\uff0c\u60a8\u9700\u8981\u5bfc\u5165\u5b83\uff08\u8fd9\u662f\u4efb\u4f55 Nest \u6a21\u5757\u7684\u6807\u51c6\u914d\u7f6e\uff09\u3002\u6216\u8005\uff0c\u901a\u8fc7\u5c06 options \u5bf9\u8c61\u7684 ",(0,s.jsx)(n.code,{children:"isGlobal"})," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"true"})," \uff0c\u5c06\u5176\u58f0\u660e\u4e3a\u5168\u5c40\u6a21\u5757\uff0c\u5982\u4e0b\u6240\u793a\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4e00\u65e6\u5c06\u5176\u52a0\u8f7d\u5230\u6839\u6a21\u5757\u4e2d\uff0c\u60a8\u5c31\u4e0d\u9700\u8981\u5bfc\u5165 ",(0,s.jsx)(n.code,{children:"CacheModule"})," \u5176\u4ed6\u6a21\u5757\uff08\u4f8b\u5982\uff0c ",(0,s.jsx)(n.code,{children:"AppModule"})," \uff09"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"CacheModule.register({\n  isGlobal: true,\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5168\u5c40\u7f13\u5b58\u8986\u76d6",children:"\u5168\u5c40\u7f13\u5b58\u8986\u76d6"}),"\n",(0,s.jsxs)(n.p,{children:["\u542f\u7528\u5168\u5c40\u7f13\u5b58\u65f6\uff0c\u7f13\u5b58\u6761\u76ee\u5b58\u50a8\u5728\u57fa\u4e8e\u8def\u7531\u8def\u5f84\u81ea\u52a8\u751f\u6210\u7684 a ",(0,s.jsx)(n.code,{children:"CacheKey"})," \u4e0b\u3002\u60a8\u53ef\u4ee5\u57fa\u4e8e\u6bcf\u4e2a\u65b9\u6cd5\u8986\u76d6\u67d0\u4e9b\u7f13\u5b58\u8bbe\u7f6e \uff08 ",(0,s.jsx)(n.code,{children:"@CacheKey()"})," \u548c ",(0,s.jsx)(n.code,{children:"@CacheTTL()"})," \uff09\uff0c\u4ece\u800c\u5141\u8bb8\u4e3a\u5355\u4e2a\u63a7\u5236\u5668\u65b9\u6cd5\u81ea\u5b9a\u4e49\u7f13\u5b58\u7b56\u7565\u3002\u5728\u4f7f\u7528\u4e0d\u540c\u7684\u7f13\u5b58\u5b58\u50a8\u65f6\uff0c\u8fd9\u53ef\u80fd\u662f\u6700\u76f8\u5173\u7684\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@Controller()\nexport class AppController {\n  @CacheKey('custom_key')\n  @CacheTTL(20)\n  findAll(): string[] {\n    return [];\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u8bf7\u8bbf\u95ee\u5b98\u7f51\uff1a",(0,s.jsx)(n.a,{href:"https://docs.nestjs.com/techniques/caching",children:"https://docs.nestjs.com/techniques/caching"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7540:(e,n,c)=>{c.d(n,{Z:()=>i,a:()=>t});var s=c(959);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);