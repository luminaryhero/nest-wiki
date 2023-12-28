"use strict";(self.webpackChunknest_wiki=self.webpackChunknest_wiki||[]).push([[2392],{1320:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/02","metadata":{"permalink":"/nest-wiki/blog/02","source":"@site/blog/02.md","title":"\u6570\u636e\u5e93\u6a21\u5757(\u4e8c)","description":"- [x] \u6570\u636e\u5e93\u8fde\u63a5","date":"2023-12-28T14:26:58.000Z","formattedDate":"December 28, 2023","tags":[],"readingTime":1.43,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\u6570\u636e\u5e93\u6a21\u5757(\u4e8c)"},"unlisted":false,"nextItem":{"title":"\u914d\u7f6e\u6a21\u5757(\u4e09)","permalink":"/nest-wiki/blog/03"}},"content":"- [x] \u6570\u636e\u5e93\u8fde\u63a5\\n- [x] \u6570\u636e\u64cd\u4f5c\\n\\n## \u5b89\u88c5\\n\\n```bash\\n$ pnpm add @nestjs/typeorm typeorm mysql2\\n```\\n\\n## \u6570\u636e\u5e93\u6a21\u5757\\n\\n```bash\\n$ nest g mo databases\\n```\\n\\n> databases.module.ts\\n\\n```ts\\nimport { Global, Module } from \\"@nestjs/common\\";\\nimport { TypeOrmModule } from \\"@nestjs/typeorm\\";\\n\\n@Global()\\n@Module({\\n  imports: [\\n    TypeOrmModule.forRoot({\\n      type: \\"mysql\\",\\n      host: \\"localhost\\",\\n      port: 3306,\\n      username: \\"root\\",\\n      password: \\"12345678\\",\\n      database: \\"test\\",\\n      autoLoadEntities: true,\\n      synchronize: true,\\n    }),\\n  ],\\n})\\nexport class DatabasesModule {}\\n```\\n\\n> dtos/pagination.dto.ts\\n\\n```ts\\nexport class PagintionDto {\\n  limit?: number;\\n\\n  page?: number;\\n}\\n```\\n\\n## User \u6a21\u5757\\n\\n```ts\\n@Module({\\n  imports: [TypeOrmModule.forFeature([User])],\\n  controllers: [UsersController],\\n  providers: [UsersService],\\n})\\nexport class UsersModule {}\\n```\\n\\n### \u6a21\u578b\\n\\n> user.entity.ts\\n\\n```ts\\nimport { Entity, Column, PrimaryGeneratedColumn } from \\"typeorm\\";\\n\\n@Entity()\\nexport class User {\\n  @PrimaryGeneratedColumn()\\n  id: number;\\n\\n  @Column()\\n  username: string;\\n\\n  @Column()\\n  password: string;\\n\\n  @Column({ default: true })\\n  isActive: boolean;\\n}\\n```\\n\\n> create-user.dto.ts\\n\\n```ts\\nexport class CreateUserDto {\\n  username: string;\\n\\n  password: string;\\n\\n  isActive?: boolean;\\n}\\n```\\n\\n### \u63a7\u5236\u5668\\n\\n> users.controller.ts\\n\\n```ts\\n@Get()\\nfindAll(@Query() pagintionDto: PagintionDto) {\\n  return this.usersService.findAll(pagintionDto);\\n}\\n```\\n\\n### \u670d\u52a1\u7c7b\\n\\n> users.service.ts\\n\\n```ts\\n@Injectable()\\nexport class UsersService {\\n  constructor(\\n    @InjectRepository(User) private usersRepository: Repository<User>\\n  ) {}\\n\\n  async create(createUserDto: CreateUserDto) {\\n    const item = await this.usersRepository.save(createUserDto);\\n    return item;\\n  }\\n\\n  async findAll(pagintionDto: PagintionDto) {\\n    const { limit = 10, page = 1 } = pagintionDto;\\n    return this.usersRepository.find({\\n      skip: (page - 1) * limit,\\n      take: limit,\\n    });\\n  }\\n\\n  async findOne(id: number) {\\n    const item = await this.usersRepository.findOne({ where: { id } });\\n    if (!item) {\\n      throw new EntityNotFoundError(User, { id });\\n    }\\n    return item;\\n  }\\n\\n  async update(id: number, updateUserDto: UpdateUserDto) {\\n    await this.usersRepository.update(id, updateUserDto);\\n    return this.findOne(id);\\n  }\\n\\n  async remove(id: number) {\\n    const item = await this.findOne(id);\\n    return this.usersRepository.remove(item);\\n  }\\n}\\n```"},{"id":"/03","metadata":{"permalink":"/nest-wiki/blog/03","source":"@site/blog/03.md","title":"\u914d\u7f6e\u6a21\u5757(\u4e09)","description":"- [x] \u652f\u6301 YAML \u683c\u5f0f","date":"2023-12-28T14:26:58.000Z","formattedDate":"December 28, 2023","tags":[],"readingTime":2.04,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\u914d\u7f6e\u6a21\u5757(\u4e09)"},"unlisted":false,"prevItem":{"title":"\u6570\u636e\u5e93\u6a21\u5757(\u4e8c)","permalink":"/nest-wiki/blog/02"},"nextItem":{"title":"\u901a\u7528\u529f\u80fd(\u56db)","permalink":"/nest-wiki/blog/04"}},"content":"- [x] \u652f\u6301 YAML \u683c\u5f0f\\n- [x] \u652f\u6301\u591a\u73af\u5883\\n- [x] \u914d\u7f6e\u9a8c\u8bc1\\n\\n## \u5b89\u88c5\\n\\n```bash\\n$ pnpm add @nestjs/config\\n```\\n\\n## \u914d\u7f6e\u6a21\u5757\\n\\n```bash\\n$ nest g mo configurations\\n```\\n\\n> configurations.module.ts\\n\\n```ts\\n@Global()\\n@Module({\\n  imports: [\\n    ConfigModule.forRoot({\\n      isGlobal: true,\\n    }),\\n  ],\\n})\\nexport class ConfigurationsModule {}\\n```\\n\\n### \u652f\u6301 YAML \u683c\u5f0f\\n\\n```bash\\n$ pnpm add js-yaml\\n$ pnpm add -D @types/js-yaml\\n```\\n\\n> configurations.module.ts\\n\\n```ts\\nConfigModule.forRoot({\\n  isGlobal: true,\\n  load: [\\n    () =>\\n      yaml.load(readFileSync(join(__dirname, \\"config.yaml\\"), \\"utf8\\")) as Record<\\n        string,\\n        any\\n      >,\\n  ],\\n});\\n```\\n\\n> nest.cli.json\\n\\n```json\\n{\\n  \\"$schema\\": \\"https://json.schemastore.org/nest-cli\\",\\n  \\"collection\\": \\"@nestjs/schematics\\",\\n  \\"sourceRoot\\": \\"src\\",\\n  \\"compilerOptions\\": {\\n    \\"assets\\": [\\n      {\\n        \\"include\\": \\"**/*.yaml\\",\\n        \\"watchAssets\\": true\\n      }\\n    ],\\n    \\"deleteOutDir\\": true\\n  }\\n}\\n```\\n\\n### \u652f\u6301\u591a\u73af\u5883\\n\\n```bash\\n$ pnpm add -D cross-env\\n```\\n\\n> configurations.module.ts\\n\\n```ts\\nConfigModule.forRoot({\\n  isGlobal: true,\\n  load: [\\n    () =>\\n      yaml.load(\\n        readFileSync(\\n          join(\\n            __dirname,\\n            process.env.NODE_ENV === \\"production\\"\\n              ? \\"config.prod.yaml\\"\\n              : \\"config.yaml\\"\\n          ),\\n          \\"utf8\\"\\n        )\\n      ) as Record<string, any>,\\n  ],\\n});\\n```\\n\\n> package.json\\n\\n```json\\n  \\"scripts\\": {\\n    \\"build\\": \\"cross-env NODE_ENV=production nest build\\",\\n    \\"format\\": \\"prettier --write \\\\\\"src/**/*.ts\\\\\\" \\\\\\"test/**/*.ts\\\\\\"\\",\\n    \\"start\\": \\"cross-env NODE_ENV=development nest start\\",\\n    \\"start:dev\\": \\"cross-env NODE_ENV=development nest start --watch\\",\\n    \\"start:debug\\": \\"cross-env NODE_ENV=development nest start --debug --watch\\",\\n    \\"start:prod\\": \\"cross-env NODE_ENV=production node dist/main\\",\\n    \\"lint\\": \\"eslint \\\\\\"{src,apps,libs,test}/**/*.ts\\\\\\" --fix\\",\\n  },\\n```\\n\\n### \u914d\u7f6e\u9a8c\u8bc1\\n\\n```bash\\n$ pnpm add joi\\n```\\n\\n> configurations/config.yaml\\n\\n```yaml\\nhttp:\\n  host: \\"localhost\\"\\n  port: 3100\\n\\ndb:\\n  type: \\"mysql\\"\\n  host: \\"localhost\\"\\n  port: 3306\\n  username: \\"root\\"\\n  password: \\"12345678\\"\\n  database: \\"test\\"\\n  autoLoadEntities: true\\n  synchronize: true\\n```\\n\\n> configurations.module.ts\\n\\n```ts\\n@Global()\\n@Module({\\n  imports: [\\n    ConfigModule.forRoot({\\n      isGlobal: true,\\n      load: [\\n        () =>\\n          yaml.load(\\n            readFileSync(\\n              join(\\n                __dirname,\\n                process.env.NODE_ENV === \\"production\\"\\n                  ? \\"config.prod.yaml\\"\\n                  : \\"config.yaml\\"\\n              ),\\n              \\"utf8\\"\\n            )\\n          ) as Record<string, any>,\\n      ],\\n      validationSchema: Joi.object({\\n        NODE_ENV: Joi.string()\\n          .valid(\\"development\\", \\"production\\")\\n          .default(\\"development\\"),\\n        http: Joi.object({\\n          host: Joi.string(),\\n          port: Joi.number(),\\n        }),\\n        db: Joi.object({\\n          type: Joi.string().valid(\\"mysql\\"),\\n          host: Joi.string(),\\n          port: Joi.number(),\\n          username: Joi.string(),\\n          password: Joi.string(),\\n          database: Joi.string(),\\n          autoLoadEntities: Joi.bool().valid(true),\\n          synchronize: Joi.bool(),\\n        }),\\n      }),\\n    }),\\n  ],\\n})\\nexport class ConfigurationsModule {}\\n```\\n\\n## \u5e94\u7528\u914d\u7f6e\\n\\n> databases.module.ts\\n\\n```ts\\n@Global()\\n@Module({\\n  imports: [\\n    TypeOrmModule.forRootAsync({\\n      inject: [ConfigService],\\n      useFactory: (config: ConfigService) =>\\n        config.get(\\"db\\") as TypeOrmModuleOptions,\\n    }),\\n  ],\\n})\\nexport class DatabasesModule {}\\n```\\n\\n> main.ts\\n\\n```ts\\nimport { NestFactory } from \\"@nestjs/core\\";\\nimport { AppModule } from \\"./app.module\\";\\nimport { ConfigService } from \\"@nestjs/config\\";\\n\\nasync function bootstrap() {\\n  const app = await NestFactory.create(AppModule);\\n\\n  const config = app.get(ConfigService);\\n  const host = config.get(\\"http.host\\");\\n  const port = config.get(\\"http.port\\");\\n  const url = `http://${host}:${port}`;\\n\\n  await app.listen(port, () => {\\n    console.info(`APPLICATION STARTED AT ${url}`);\\n  });\\n}\\nbootstrap();\\n```"},{"id":"/04","metadata":{"permalink":"/nest-wiki/blog/04","source":"@site/blog/04.md","title":"\u901a\u7528\u529f\u80fd(\u56db)","description":"- [x] \u9a8c\u8bc1\u7ba1\u9053","date":"2023-12-28T14:26:58.000Z","formattedDate":"December 28, 2023","tags":[],"readingTime":2.325,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\u901a\u7528\u529f\u80fd(\u56db)"},"unlisted":false,"prevItem":{"title":"\u914d\u7f6e\u6a21\u5757(\u4e09)","permalink":"/nest-wiki/blog/03"},"nextItem":{"title":"\u8ba4\u8bc1\u6388\u6743","permalink":"/nest-wiki/blog/05"}},"content":"- [x] \u9a8c\u8bc1\u7ba1\u9053\\n\\n- [x] \u54cd\u5e94\u62e6\u622a\\n\\n- [x] \u5f02\u5e38\u5904\u7406\\n\\n## \u901a\u7528\u529f\u80fd\\n\\n```bash\\n$ pnpm add class-validator class-transformer\\n```\\n\\n### \u9a8c\u8bc1\u7ba1\u9053\\n\\n> commons/validation.pipe.ts\\n\\n```ts\\nimport {\\n  UsePipes,\\n  ValidationPipe,\\n  ValidationPipeOptions,\\n} from \\"@nestjs/common\\";\\n\\nexport function UseValidation(group?: string) {\\n  const options: ValidationPipeOptions = {\\n    transform: true,\\n    whitelist: true,\\n    forbidNonWhitelisted: true,\\n    forbidUnknownValues: false,\\n    validationError: { target: false },\\n  };\\n  if (group) {\\n    options.groups = [group];\\n  }\\n  return UsePipes(new ValidationPipe(options));\\n}\\n```\\n\\n### \u54cd\u5e94\u62e6\u622a\\n\\n> commons/transform.interceptor.ts\\n\\n```ts\\nimport {\\n  Injectable,\\n  NestInterceptor,\\n  ExecutionContext,\\n  CallHandler,\\n} from \\"@nestjs/common\\";\\nimport { Observable } from \\"rxjs\\";\\nimport { map } from \\"rxjs/operators\\";\\n\\nexport interface Response<T> {\\n  code: number;\\n  message: string;\\n  ttl: number;\\n  data: T;\\n}\\n\\n@Injectable()\\nexport class TransformInterceptor<T>\\n  implements NestInterceptor<T, Response<T>>\\n{\\n  intercept(\\n    context: ExecutionContext,\\n    next: CallHandler\\n  ): Observable<Response<T>> {\\n    const now = Date.now();\\n    return next.handle().pipe(\\n      map((data) => ({\\n        code: 0,\\n        message: \\"ok\\",\\n        ttl: Date.now() - now,\\n        data,\\n      }))\\n    );\\n  }\\n}\\n```\\n\\n### \u5f02\u5e38\u5904\u7406\\n\\n> all-exception.filter.ts\\n\\n```ts\\nimport {\\n  ExceptionFilter,\\n  Catch,\\n  ArgumentsHost,\\n  HttpException,\\n  HttpStatus,\\n} from \\"@nestjs/common\\";\\nimport { HttpAdapterHost } from \\"@nestjs/core\\";\\n\\n@Catch()\\nexport class AllExceptionsFilter<T extends Error>\\n  implements ExceptionFilter<T>\\n{\\n  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}\\n\\n  catch(exception: T, host: ArgumentsHost): void {\\n    // In certain situations `httpAdapter` might not be available in the\\n    // constructor method, thus we should resolve it here.\\n    const { httpAdapter } = this.httpAdapterHost;\\n\\n    const ctx = host.switchToHttp();\\n\\n    let httpStatus, message;\\n    if (exception instanceof HttpException) {\\n      httpStatus = exception.getStatus();\\n      message = (exception.getResponse() as any)?.message;\\n    } else {\\n      httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;\\n      message = exception.message;\\n    }\\n\\n    const responseBody = {\\n      code: -1,\\n      message: message,\\n      timestamp: new Date().toISOString(),\\n      path: httpAdapter.getRequestUrl(ctx.getRequest()),\\n    };\\n\\n    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);\\n  }\\n}\\n```\\n\\n## App \u6a21\u5757\\n\\n> app.module.ts\\n\\n```ts\\n@Module({\\n  imports: [UsersModule, DatabasesModule, ConfigurationsModule],\\n  controllers: [],\\n  providers: [\\n    {\\n      provide: APP_INTERCEPTOR,\\n      useClass: TransformInterceptor,\\n    },\\n    {\\n      provide: APP_FILTER,\\n      useClass: AllExceptionsFilter,\\n    },\\n  ],\\n})\\nexport class AppModule {}\\n```\\n\\n## User \u6a21\u5757\\n\\n> create-user.dto.ts\\n\\n```ts\\nimport { IsBoolean, IsNotEmpty, IsOptional } from \\"class-validator\\";\\n\\nexport class CreateUserDto {\\n  @IsNotEmpty({ groups: [\\"create\\"] })\\n  @IsOptional({ groups: [\\"update\\"] })\\n  firstName: string;\\n\\n  @IsNotEmpty({ groups: [\\"create\\"] })\\n  @IsOptional({ groups: [\\"update\\"] })\\n  lastName: string;\\n\\n  @IsBoolean({ always: true })\\n  @IsOptional({ always: true })\\n  isActive?: boolean;\\n}\\n```\\n\\n> pagination.dto.ts\\n\\n```ts\\nimport { IsOptional, Max, Min } from \\"class-validator\\";\\nimport { Transform } from \\"class-transformer\\";\\n\\nexport class PagintionDto {\\n  @Transform(({ value }) => Number(value))\\n  @Min(1)\\n  @Max(30)\\n  @IsOptional()\\n  limit?: number;\\n\\n  @Transform(({ value }) => Number(value))\\n  @Min(1)\\n  @IsOptional()\\n  page?: number;\\n}\\n```\\n\\n> users.controller.ts\\n\\n```ts\\n@Controller(\\"users\\")\\nexport class UsersController {\\n  constructor(private readonly usersService: UsersService) {}\\n\\n  @UseValidation(\\"create\\")\\n  @Post()\\n  create(@Body() createUserDto: CreateUserDto) {\\n    return this.usersService.create(createUserDto);\\n  }\\n\\n  @UseValidation()\\n  @Get()\\n  findAll(@Query() pagintionDto: PagintionDto) {\\n    return this.usersService.findAll(pagintionDto);\\n  }\\n\\n  @Get(\\":id\\")\\n  findOne(@Param(\\"id\\") id: string) {\\n    return this.usersService.findOne(+id);\\n  }\\n\\n  @UseValidation(\\"update\\")\\n  @Patch(\\":id\\")\\n  update(@Param(\\"id\\") id: string, @Body() updateUserDto: UpdateUserDto) {\\n    return this.usersService.update(+id, updateUserDto);\\n  }\\n\\n  @Delete(\\":id\\")\\n  remove(@Param(\\"id\\") id: string) {\\n    return this.usersService.remove(+id);\\n  }\\n}\\n```"},{"id":"/05","metadata":{"permalink":"/nest-wiki/blog/05","source":"@site/blog/05.md","title":"\u8ba4\u8bc1\u6388\u6743","description":"- [x] \u8eab\u4efd\u8ba4\u8bc1","date":"2023-12-28T14:26:58.000Z","formattedDate":"December 28, 2023","tags":[],"readingTime":1.955,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\u8ba4\u8bc1\u6388\u6743"},"unlisted":false,"prevItem":{"title":"\u901a\u7528\u529f\u80fd(\u56db)","permalink":"/nest-wiki/blog/04"},"nextItem":{"title":"\u9879\u76ee\u521d\u59cb\u5316(\u4e00)","permalink":"/nest-wiki/blog/01"}},"content":"- [x] \u8eab\u4efd\u8ba4\u8bc1\\n- [ ] token \u5237\u65b0\\n- [ ] \u6743\u9650\u63a7\u5236\\n\\n## \u8eab\u4efd\u8ba4\u8bc1\\n\\n```bash\\n$ pnpm add @nestjs/jwt\\n```\\n\\n> users.module.ts\\n\\n```ts\\n@Module({\\n  imports: [\\n    TypeOrmModule.forFeature([User]),\\n    JwtModule.registerAsync({\\n      inject: [ConfigService],\\n      useFactory: (config: ConfigService) => ({\\n        global: true,\\n        ...config.get(\\"jwt\\"),\\n      }),\\n    }),\\n  ],\\n  controllers: [UsersController],\\n  providers: [\\n    UsersService,\\n    {\\n      provide: APP_GUARD,\\n      useClass: AuthGuard,\\n    },\\n  ],\\n})\\nexport class UsersModule {}\\n```\\n\\n> config.yaml\\n\\n```yaml\\njwt:\\n  secret: NymS8iF33VEhVrFUX3s67N5sVFqcrf6J\\n  signOptions:\\n    expiresIn: \\"3d\\"\\n```\\n\\n### \u63a7\u5236\u5668\\n\\n> users.controller.ts\\n\\n```ts\\n  @Public()\\n  @UseValidation(\'create\')\\n  @Post(\'/register\')\\n  register(@Body() createUserDto: CreateUserDto) {\\n    return this.usersService.create(createUserDto);\\n  }\\n\\n  @Public()\\n  @UseValidation(\'create\')\\n  @Post(\'login\')\\n  async login(@Body() createUserDto: CreateUserDto) {\\n    const { username, password } = createUserDto;\\n    const user = await this.usersService.findOneByName(username);\\n    if (user?.password !== password) {\\n      throw new UnauthorizedException();\\n    }\\n    const payload = { sub: user.id, username: user.username };\\n    return {\\n      access_token: await this.jwtService.signAsync(payload),\\n    };\\n  }\\n```\\n\\n### \u670d\u52a1\\n\\n> users.service.ts\\n\\n```ts\\nasync findOneByName(username: string) {\\n    const item = await this.usersRepository.findOneBy({ username });\\n    if (!item) {\\n      throw new EntityNotFoundError(User, { username });\\n    }\\n    return item;\\n}\\n```\\n\\n### \u5b88\u536b\\n\\n> auth.guard.ts\\n\\n```ts\\nimport {\\n  CanActivate,\\n  ExecutionContext,\\n  Injectable,\\n  UnauthorizedException,\\n} from \\"@nestjs/common\\";\\nimport { ConfigService } from \\"@nestjs/config\\";\\nimport { JwtService } from \\"@nestjs/jwt\\";\\nimport { Request } from \\"express\\";\\nimport { IS_PUBLIC_KEY } from \\"./public.decorator\\";\\nimport { Reflector } from \\"@nestjs/core\\";\\n\\n@Injectable()\\nexport class AuthGuard implements CanActivate {\\n  constructor(\\n    private jwtService: JwtService,\\n    private config: ConfigService,\\n    private reflector: Reflector\\n  ) {}\\n\\n  async canActivate(context: ExecutionContext): Promise<boolean> {\\n    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [\\n      context.getHandler(),\\n      context.getClass(),\\n    ]);\\n    if (isPublic) {\\n      // \ud83d\udca1 See this condition\\n      return true;\\n    }\\n\\n    const request = context.switchToHttp().getRequest();\\n    const token = this.extractTokenFromHeader(request);\\n    if (!token) {\\n      throw new UnauthorizedException();\\n    }\\n    try {\\n      const payload = await this.jwtService.verifyAsync(token, {\\n        secret: this.config.get(\\"jwt.secret\\"),\\n      });\\n      // \ud83d\udca1 We\'re assigning the payload to the request object here\\n      // so that we can access it in our route handlers\\n      request[\\"user\\"] = payload;\\n    } catch {\\n      throw new UnauthorizedException();\\n    }\\n    return true;\\n  }\\n\\n  private extractTokenFromHeader(request: Request): string | undefined {\\n    const [type, token] = request.headers.authorization?.split(\\" \\") ?? [];\\n    return type === \\"Bearer\\" ? token : undefined;\\n  }\\n}\\n```\\n\\n> public.decorator.ts\\n\\n```ts\\nimport { SetMetadata } from \\"@nestjs/common\\";\\n\\nexport const IS_PUBLIC_KEY = \\"isPublic\\";\\nexport const Public = () => SetMetadata(IS_PUBLIC_KEY, true);\\n```\\n\\n> user.decorator.ts\\n\\n```ts\\nimport { createParamDecorator, ExecutionContext } from \\"@nestjs/common\\";\\n\\nexport const User = createParamDecorator(\\n  (data: unknown, ctx: ExecutionContext) => {\\n    const request = ctx.switchToHttp().getRequest();\\n    return request.user;\\n  }\\n);\\n```"},{"id":"/01","metadata":{"permalink":"/nest-wiki/blog/01","source":"@site/blog/01.md","title":"\u9879\u76ee\u521d\u59cb\u5316(\u4e00)","description":"- [x] NestCLI","date":"2023-12-25T00:00:00.000Z","formattedDate":"December 25, 2023","tags":[],"readingTime":1.175,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\u9879\u76ee\u521d\u59cb\u5316(\u4e00)","date":"2023-12-25T00:00:00.000Z"},"unlisted":false,"prevItem":{"title":"\u8ba4\u8bc1\u6388\u6743","permalink":"/nest-wiki/blog/05"}},"content":"- [x] NestCLI\\n- [x] \u65ad\u70b9\u8c03\u8bd5\\n\\n## NestCLI\\n\\n```bash\\n$ npm i -g @nestjs/cli\\n```\\n\\n## \u521b\u5efa\u9879\u76ee\\n\\n```bash\\n$ nest new nestjs-restful-template\\n\u26a1  We will scaffold your app in a few seconds..\\n\\n? Which package manager would you \u2764\ufe0f  to use? pnpm\\nCREATE nestjs-restful-template/.eslintrc.js (663 bytes)\\nCREATE nestjs-restful-template/.prettierrc (51 bytes)\\nCREATE nestjs-restful-template/nest-cli.json (171 bytes)\\nCREATE nestjs-restful-template/package.json (1964 bytes)\\nCREATE nestjs-restful-template/README.md (3347 bytes)\\nCREATE nestjs-restful-template/tsconfig.build.json (97 bytes)\\nCREATE nestjs-restful-template/tsconfig.json (546 bytes)\\nCREATE nestjs-restful-template/src/app.controller.spec.ts (617 bytes)\\nCREATE nestjs-restful-template/src/app.controller.ts (274 bytes)\\nCREATE nestjs-restful-template/src/app.module.ts (249 bytes)\\nCREATE nestjs-restful-template/src/app.service.ts (142 bytes)\\nCREATE nestjs-restful-template/src/main.ts (208 bytes)\\nCREATE nestjs-restful-template/test/app.e2e-spec.ts (630 bytes)\\nCREATE nestjs-restful-template/test/jest-e2e.json (183 bytes)\\n\\n\u2714 Installation in progress... \u2615\\n\\n\ud83d\ude80  Successfully created project nestjs-restful-template\\n\ud83d\udc49  Get started with the following commands:\\n\\n$ cd nestjs-restful-template\\n$ pnpm run start\\n```\\n\\n## \u751f\u6210 restful \u63a5\u53e3\\n\\n```bash\\n$ nest g res users --no-spec\\n? What transport layer do you use? REST API\\n? Would you like to generate CRUD entry points? Yes\\nCREATE src/users/users.controller.ts (894 bytes)\\nCREATE src/users/users.module.ts (248 bytes)\\nCREATE src/users/users.service.ts (609 bytes)\\nCREATE src/users/dto/create-user.dto.ts (30 bytes)\\nCREATE src/users/dto/update-user.dto.ts (169 bytes)\\nCREATE src/users/entities/user.entity.ts (21 bytes)\\nUPDATE package.json (1997 bytes)\\nUPDATE src/app.module.ts (195 bytes)\\n\u2714 Packages installed successfully.\\n```\\n\\n## \u65ad\u70b9\u8c03\u8bd5\\n\\n> .vscode/launch.json\\n\\n```json\\n{\\n  \\"version\\": \\"0.2.0\\",\\n  \\"configurations\\": [\\n    {\\n      \\"name\\": \\"Launch via PNPM\\",\\n      \\"request\\": \\"launch\\",\\n      \\"runtimeArgs\\": [\\"run-script\\", \\"start:debug\\"],\\n      \\"runtimeExecutable\\": \\"pnpm\\",\\n      \\"internalConsoleOptions\\": \\"neverOpen\\",\\n      \\"autoAttachChildProcesses\\": true,\\n      \\"console\\": \\"integratedTerminal\\",\\n      \\"skipFiles\\": [\\"<node_internals>/**\\"],\\n      \\"type\\": \\"node\\"\\n    }\\n  ]\\n}\\n```"}]}')}}]);