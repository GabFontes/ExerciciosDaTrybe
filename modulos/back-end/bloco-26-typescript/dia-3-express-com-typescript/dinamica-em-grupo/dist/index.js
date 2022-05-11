"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = require("http-status-codes");
const User_1 = __importDefault(require("./models/User"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
const user = new User_1.default();
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUsers = yield user.getAll();
    return res.status(http_status_codes_1.StatusCodes.OK).json(allUsers);
}));
app.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userById = yield user.getById(id);
    return res.status(http_status_codes_1.StatusCodes.OK).json(userById);
}));
app.listen(PORT, () => console.log('ouvindo na porta 3000'));
