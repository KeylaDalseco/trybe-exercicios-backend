"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sinon_1 = __importDefault(require("sinon"));
var chai_1 = __importStar(require("chai"));
var chai_http_1 = __importDefault(require("chai-http"));
var login_mock_1 = __importDefault(require("../../mock/login.mock"));
var app_1 = __importDefault(require("../../../src/app"));
var user_model_1 = __importDefault(require("../../../src/database/models/user.model"));
chai_1.default.use(chai_http_1.default);
describe('POST /login', function () {
    beforeEach(function () { sinon_1.default.restore(); });
    it('ao não receber um e-mail, retorne um erro', function () {
        return __awaiter(this, void 0, void 0, function () {
            var httpRequestBody, httpResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpRequestBody = login_mock_1.default.noEmailLoginBody;
                        return [4 /*yield*/, chai_1.default.request(app_1.default).post('/login').send(httpRequestBody)];
                    case 1:
                        httpResponse = _a.sent();
                        // Assert
                        (0, chai_1.expect)(httpResponse.status).to.equal(400);
                        (0, chai_1.expect)(httpResponse.body).to.be.deep.equal({ message: 'Dados inválidos' });
                        return [2 /*return*/];
                }
            });
        });
    });
    it('ao não receber uma senha, retorne um erro', function () {
        return __awaiter(this, void 0, void 0, function () {
            var httpRequestBody, httpResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpRequestBody = login_mock_1.default.noPasswordLoginBody;
                        return [4 /*yield*/, chai_1.default.request(app_1.default).post('/login').send(httpRequestBody)];
                    case 1:
                        httpResponse = _a.sent();
                        // Assert
                        (0, chai_1.expect)(httpResponse.status).to.equal(400);
                        (0, chai_1.expect)(httpResponse.body).to.be.deep.equal({ message: 'Dados inválidos' });
                        return [2 /*return*/];
                }
            });
        });
    });
    it('ao receber um e-mail inexistente, retorne um erro', function () {
        return __awaiter(this, void 0, void 0, function () {
            var httpRequestBody, httpResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpRequestBody = login_mock_1.default.notExistingUserBody;
                        sinon_1.default.stub(user_model_1.default, 'findOne').resolves(null);
                        return [4 /*yield*/, chai_1.default.request(app_1.default).post('/login').send(httpRequestBody)];
                    case 1:
                        httpResponse = _a.sent();
                        // Assert
                        (0, chai_1.expect)(httpResponse.status).to.equal(401);
                        (0, chai_1.expect)(httpResponse.body).to.be.deep.equal({ message: 'E-mail ou senha inválidos' });
                        return [2 /*return*/];
                }
            });
        });
    });
    it('ao receber um e-mail existente e uma senha errada, retorne um erro', function () {
        return __awaiter(this, void 0, void 0, function () {
            var httpRequestBody, mockFindOneReturn, httpResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpRequestBody = login_mock_1.default.existingUserWithWrongPasswordBody;
                        mockFindOneReturn = user_model_1.default.build(login_mock_1.default.existingUser);
                        /* Aqui utilizamos o valor de mockFindOneReturn pois ele é compatível com o retorno da função `findOne()` */
                        sinon_1.default.stub(user_model_1.default, 'findOne').resolves(mockFindOneReturn);
                        return [4 /*yield*/, chai_1.default.request(app_1.default).post('/login')
                                .send(httpRequestBody)];
                    case 1:
                        httpResponse = _a.sent();
                        // Assert
                        (0, chai_1.expect)(httpResponse.status).to.equal(401);
                        (0, chai_1.expect)(httpResponse.body).to.be.deep.equal({ message: 'E-mail ou senha inválidos' });
                        return [2 /*return*/];
                }
            });
        });
    });
    it('ao receber um e-mail e uma senha válida, retorne um token de login', function () {
        return __awaiter(this, void 0, void 0, function () {
            var httpRequestBody, mockFindOneReturn, httpResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        httpRequestBody = login_mock_1.default.validLoginBody;
                        mockFindOneReturn = user_model_1.default.build(login_mock_1.default.existingUser);
                        sinon_1.default.stub(user_model_1.default, 'findOne').resolves(mockFindOneReturn);
                        return [4 /*yield*/, chai_1.default.request(app_1.default).post('/login').send(httpRequestBody)];
                    case 1:
                        httpResponse = _a.sent();
                        // Assert
                        (0, chai_1.expect)(httpResponse.status).to.equal(200);
                        (0, chai_1.expect)(httpResponse.body).to.have.key('token');
                        return [2 /*return*/];
                }
            });
        });
    });
});
