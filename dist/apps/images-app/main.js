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
let ImagesAppModule = class ImagesAppModule {
};
exports.ImagesAppModule = ImagesAppModule;
exports.ImagesAppModule = ImagesAppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImagesAppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let ImagesAppService = class ImagesAppService {
    detectai(filename) {
        if (filename) {
            return {
                status: 200,
                data: filename,
                message: "AI generation not detected at Images service"
            };
        }
        return {
            status: 500,
            verified: false,
            message: "AI generation detected for this Image"
        };
    }
};
exports.ImagesAppService = ImagesAppService;
exports.ImagesAppService = ImagesAppService = __decorate([
    (0, common_1.Injectable)()
], ImagesAppService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

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