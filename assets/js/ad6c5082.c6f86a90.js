"use strict";(self.webpackChunknest_wiki=self.webpackChunknest_wiki||[]).push([[4242],{5712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(1527),r=t(7540);const o={title:"\u8ba4\u8bc1\u6388\u6743"},i=void 0,c={permalink:"/nest-wiki/blog/05",source:"@site/blog/05.md",title:"\u8ba4\u8bc1\u6388\u6743",description:"- [x] \u8eab\u4efd\u8ba4\u8bc1",date:"2023-12-28T14:26:58.000Z",formattedDate:"December 28, 2023",tags:[],readingTime:1.955,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u8ba4\u8bc1\u6388\u6743"},unlisted:!1,prevItem:{title:"\u901a\u7528\u529f\u80fd(\u56db)",permalink:"/nest-wiki/blog/04"},nextItem:{title:"\u9879\u76ee\u521d\u59cb\u5316(\u4e00)",permalink:"/nest-wiki/blog/01"}},a={authorsImageUrls:[]},l=[{value:"\u8eab\u4efd\u8ba4\u8bc1",id:"\u8eab\u4efd\u8ba4\u8bc1",level:2},{value:"\u63a7\u5236\u5668",id:"\u63a7\u5236\u5668",level:3},{value:"\u670d\u52a1",id:"\u670d\u52a1",level:3},{value:"\u5b88\u536b",id:"\u5b88\u536b",level:3}];function u(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",checked:!0,disabled:!0})," ","\u8eab\u4efd\u8ba4\u8bc1"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","token \u5237\u65b0"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","\u6743\u9650\u63a7\u5236"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8eab\u4efd\u8ba4\u8bc1",children:"\u8eab\u4efd\u8ba4\u8bc1"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ pnpm add @nestjs/jwt\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"users.module.ts"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'@Module({\n  imports: [\n    TypeOrmModule.forFeature([User]),\n    JwtModule.registerAsync({\n      inject: [ConfigService],\n      useFactory: (config: ConfigService) => ({\n        global: true,\n        ...config.get("jwt"),\n      }),\n    }),\n  ],\n  controllers: [UsersController],\n  providers: [\n    UsersService,\n    {\n      provide: APP_GUARD,\n      useClass: AuthGuard,\n    },\n  ],\n})\nexport class UsersModule {}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"config.yaml"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'jwt:\n  secret: NymS8iF33VEhVrFUX3s67N5sVFqcrf6J\n  signOptions:\n    expiresIn: "3d"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"\u63a7\u5236\u5668",children:"\u63a7\u5236\u5668"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"users.controller.ts"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"  @Public()\n  @UseValidation('create')\n  @Post('/register')\n  register(@Body() createUserDto: CreateUserDto) {\n    return this.usersService.create(createUserDto);\n  }\n\n  @Public()\n  @UseValidation('create')\n  @Post('login')\n  async login(@Body() createUserDto: CreateUserDto) {\n    const { username, password } = createUserDto;\n    const user = await this.usersService.findOneByName(username);\n    if (user?.password !== password) {\n      throw new UnauthorizedException();\n    }\n    const payload = { sub: user.id, username: user.username };\n    return {\n      access_token: await this.jwtService.signAsync(payload),\n    };\n  }\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u670d\u52a1",children:"\u670d\u52a1"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"users.service.ts"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"async findOneByName(username: string) {\n    const item = await this.usersRepository.findOneBy({ username });\n    if (!item) {\n      throw new EntityNotFoundError(User, { username });\n    }\n    return item;\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5b88\u536b",children:"\u5b88\u536b"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"auth.guard.ts"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import {\n  CanActivate,\n  ExecutionContext,\n  Injectable,\n  UnauthorizedException,\n} from "@nestjs/common";\nimport { ConfigService } from "@nestjs/config";\nimport { JwtService } from "@nestjs/jwt";\nimport { Request } from "express";\nimport { IS_PUBLIC_KEY } from "./public.decorator";\nimport { Reflector } from "@nestjs/core";\n\n@Injectable()\nexport class AuthGuard implements CanActivate {\n  constructor(\n    private jwtService: JwtService,\n    private config: ConfigService,\n    private reflector: Reflector\n  ) {}\n\n  async canActivate(context: ExecutionContext): Promise<boolean> {\n    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [\n      context.getHandler(),\n      context.getClass(),\n    ]);\n    if (isPublic) {\n      // \ud83d\udca1 See this condition\n      return true;\n    }\n\n    const request = context.switchToHttp().getRequest();\n    const token = this.extractTokenFromHeader(request);\n    if (!token) {\n      throw new UnauthorizedException();\n    }\n    try {\n      const payload = await this.jwtService.verifyAsync(token, {\n        secret: this.config.get("jwt.secret"),\n      });\n      // \ud83d\udca1 We\'re assigning the payload to the request object here\n      // so that we can access it in our route handlers\n      request["user"] = payload;\n    } catch {\n      throw new UnauthorizedException();\n    }\n    return true;\n  }\n\n  private extractTokenFromHeader(request: Request): string | undefined {\n    const [type, token] = request.headers.authorization?.split(" ") ?? [];\n    return type === "Bearer" ? token : undefined;\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"public.decorator.ts"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { SetMetadata } from "@nestjs/common";\n\nexport const IS_PUBLIC_KEY = "isPublic";\nexport const Public = () => SetMetadata(IS_PUBLIC_KEY, true);\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"user.decorator.ts"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { createParamDecorator, ExecutionContext } from "@nestjs/common";\n\nexport const User = createParamDecorator(\n  (data: unknown, ctx: ExecutionContext) => {\n    const request = ctx.switchToHttp().getRequest();\n    return request.user;\n  }\n);\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},7540:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var s=t(959);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);