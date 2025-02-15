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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListByCategoryProductController = void 0;
const ListByCategoryProductService_1 = require("../../services/product/ListByCategoryProductService");
class ListByCategoryProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { categoryId } = req.params;
            console.log(categoryId);
            const listByCategoryProductService = new ListByCategoryProductService_1.ListByCategoryProductService();
            const products = yield listByCategoryProductService.execute(categoryId);
            res.json(products);
        });
    }
}
exports.ListByCategoryProductController = ListByCategoryProductController;
