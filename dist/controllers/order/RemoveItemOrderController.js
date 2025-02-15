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
exports.RemoveItemOrderController = void 0;
const RemoveItemOrderService_1 = require("../../services/order/RemoveItemOrderService");
class RemoveItemOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const removeItemOrderService = new RemoveItemOrderService_1.RemoveItemOrderService();
            const item = yield removeItemOrderService.execute({
                itemId: id
            });
            res.json(item);
        });
    }
}
exports.RemoveItemOrderController = RemoveItemOrderController;
