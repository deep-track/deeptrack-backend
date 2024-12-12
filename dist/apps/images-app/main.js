/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/gateway/src/app.dto.ts":
/*!*************************************!*\
  !*** ./apps/gateway/src/app.dto.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadImageDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class UploadImageDto {
}
exports.UploadImageDto = UploadImageDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Original filename url',
        example: 'https://front-id.aws'
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Filename cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'Filename must be a string' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Filename is too long' }),
    __metadata("design:type", String)
], UploadImageDto.prototype, "filename", void 0);


/***/ }),

/***/ "./apps/images-app/src/images-app.controller.ts":
/*!******************************************************!*\
  !*** ./apps/images-app/src/images-app.controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ImagesAppController_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImagesAppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const images_app_service_1 = __webpack_require__(/*! ./images-app.service */ "./apps/images-app/src/images-app.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const app_dto_1 = __webpack_require__(/*! apps/gateway/src/app.dto */ "./apps/gateway/src/app.dto.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ImagesAppController = ImagesAppController_1 = class ImagesAppController {
    constructor(imagesAppService) {
        this.imagesAppService = imagesAppService;
        this.logger = new common_2.Logger(ImagesAppController_1.name);
    }
    async handleImageSubmitted(uploadImageDto) {
        try {
            this.logger.log(`Image submission received: ${uploadImageDto.filename}`);
            const aiDetectionResult = await this.imagesAppService.detectai(uploadImageDto.filename);
            this.logger.log(`Image processing completed for: ${uploadImageDto.filename}. Result: ${JSON.stringify(aiDetectionResult)}`);
            return aiDetectionResult;
        }
        catch (error) {
            this.logger.error(`Error processing image: ${uploadImageDto.filename}`, error.stack);
            throw error;
        }
    }
};
exports.ImagesAppController = ImagesAppController;
__decorate([
    (0, microservices_1.EventPattern)('image_submitted'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof app_dto_1.UploadImageDto !== "undefined" && app_dto_1.UploadImageDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], ImagesAppController.prototype, "handleImageSubmitted", null);
exports.ImagesAppController = ImagesAppController = ImagesAppController_1 = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof images_app_service_1.ImagesAppService !== "undefined" && images_app_service_1.ImagesAppService) === "function" ? _a : Object])
], ImagesAppController);


/***/ }),

/***/ "./apps/images-app/src/images-app.module.ts":
/*!**************************************************!*\
  !*** ./apps/images-app/src/images-app.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImagesAppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const images_app_controller_1 = __webpack_require__(/*! ./images-app.controller */ "./apps/images-app/src/images-app.controller.ts");
const images_app_service_1 = __webpack_require__(/*! ./images-app.service */ "./apps/images-app/src/images-app.service.ts");
const lib_drizzle_1 = __webpack_require__(/*! @app/lib-drizzle */ "./libs/lib-drizzle/src/index.ts");
let ImagesAppModule = class ImagesAppModule {
};
exports.ImagesAppModule = ImagesAppModule;
exports.ImagesAppModule = ImagesAppModule = __decorate([
    (0, common_1.Module)({
        imports: [lib_drizzle_1.LibDrizzleModule],
        controllers: [images_app_controller_1.ImagesAppController],
        providers: [images_app_service_1.ImagesAppService],
    })
], ImagesAppModule);


/***/ }),

/***/ "./apps/images-app/src/images-app.service.ts":
/*!***************************************************!*\
  !*** ./apps/images-app/src/images-app.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImagesAppService = void 0;
const drizzle_provider_1 = __webpack_require__(/*! @app/lib-drizzle/drizzle.provider */ "./libs/lib-drizzle/src/drizzle.provider.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const node_postgres_1 = __webpack_require__(/*! drizzle-orm/node-postgres */ "drizzle-orm/node-postgres");
const sc = __webpack_require__(/*! ../../../libs/lib-drizzle/schema */ "./libs/lib-drizzle/schema.ts");
let ImagesAppService = class ImagesAppService {
    constructor(db) {
        this.db = db;
    }
    async detectai(filename) {
        try {
            const insertedImage = await this.db.insert(sc.images)
                .values({
                imageurl: filename
            })
                .returning();
            return {
                status: 200,
                data: insertedImage[0],
                message: "Image added to Database"
            };
        }
        catch (error) {
            console.error('Error inserting imageurl to db:', error);
            return {
                status: 500,
                data: null,
                message: "Error Inseting imageurl to db"
            };
        }
    }
};
exports.ImagesAppService = ImagesAppService;
exports.ImagesAppService = ImagesAppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(drizzle_provider_1.DrizzleAsyncProvider)),
    __metadata("design:paramtypes", [typeof (_a = typeof node_postgres_1.NodePgDatabase !== "undefined" && node_postgres_1.NodePgDatabase) === "function" ? _a : Object])
], ImagesAppService);


/***/ }),

/***/ "./libs/lib-drizzle/schema.ts":
/*!************************************!*\
  !*** ./libs/lib-drizzle/schema.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.images = void 0;
const pg_core_1 = __webpack_require__(/*! drizzle-orm/pg-core */ "drizzle-orm/pg-core");
exports.images = (0, pg_core_1.pgTable)('images', {
    id: (0, pg_core_1.uuid)('id').primaryKey().defaultRandom(),
    imageurl: (0, pg_core_1.text)('image_url').notNull(),
    createdAt: (0, pg_core_1.timestamp)('created_at').notNull().defaultNow(),
    updatedAt: (0, pg_core_1.timestamp)('updated_at').notNull().defaultNow()
});


/***/ }),

/***/ "./libs/lib-drizzle/src/drizzle.provider.ts":
/*!**************************************************!*\
  !*** ./libs/lib-drizzle/src/drizzle.provider.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.drizzleProvider = exports.DrizzleAsyncProvider = void 0;
const node_postgres_1 = __webpack_require__(/*! drizzle-orm/node-postgres */ "drizzle-orm/node-postgres");
const pg_1 = __webpack_require__(/*! pg */ "pg");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const schema = __webpack_require__(/*! ../schema */ "./libs/lib-drizzle/schema.ts");
exports.DrizzleAsyncProvider = 'DrizzleAsyncProvider';
exports.drizzleProvider = [
    {
        provide: exports.DrizzleAsyncProvider,
        inject: [config_1.ConfigService],
        useFactory: async (configService) => {
            const connectionString = configService.get('DATABASE_URL');
            const pool = new pg_1.Pool({
                connectionString,
            });
            return (0, node_postgres_1.drizzle)(pool, { schema });
        },
    },
];


/***/ }),

/***/ "./libs/lib-drizzle/src/index.ts":
/*!***************************************!*\
  !*** ./libs/lib-drizzle/src/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./lib-drizzle.module */ "./libs/lib-drizzle/src/lib-drizzle.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./lib-drizzle.service */ "./libs/lib-drizzle/src/lib-drizzle.service.ts"), exports);


/***/ }),

/***/ "./libs/lib-drizzle/src/lib-drizzle.module.ts":
/*!****************************************************!*\
  !*** ./libs/lib-drizzle/src/lib-drizzle.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LibDrizzleModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const drizzle_provider_1 = __webpack_require__(/*! ./drizzle.provider */ "./libs/lib-drizzle/src/drizzle.provider.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let LibDrizzleModule = class LibDrizzleModule {
};
exports.LibDrizzleModule = LibDrizzleModule;
exports.LibDrizzleModule = LibDrizzleModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env'
            })],
        providers: [...drizzle_provider_1.drizzleProvider],
        exports: [drizzle_provider_1.DrizzleAsyncProvider],
    })
], LibDrizzleModule);


/***/ }),

/***/ "./libs/lib-drizzle/src/lib-drizzle.service.ts":
/*!*****************************************************!*\
  !*** ./libs/lib-drizzle/src/lib-drizzle.service.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LibDrizzleService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let LibDrizzleService = class LibDrizzleService {
};
exports.LibDrizzleService = LibDrizzleService;
exports.LibDrizzleService = LibDrizzleService = __decorate([
    (0, common_1.Injectable)()
], LibDrizzleService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "drizzle-orm/node-postgres":
/*!********************************************!*\
  !*** external "drizzle-orm/node-postgres" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("drizzle-orm/node-postgres");

/***/ }),

/***/ "drizzle-orm/pg-core":
/*!**************************************!*\
  !*** external "drizzle-orm/pg-core" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("drizzle-orm/pg-core");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************************!*\
  !*** ./apps/images-app/src/main.ts ***!
  \*************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const images_app_module_1 = __webpack_require__(/*! ./images-app.module */ "./apps/images-app/src/images-app.module.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(images_app_module_1.ImagesAppModule, {
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                brokers: ['localhost:9092']
            },
            consumer: {
                groupId: 'images-consumer'
            }
        }
    });
    await app.listen();
}
bootstrap();

})();

/******/ })()
;