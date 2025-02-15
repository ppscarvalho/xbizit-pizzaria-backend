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
exports.CreateItemOrderController = void 0;
const CreateItemOrderService_1 = require("../../services/order/CreateItemOrderService");
class CreateItemOrderController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { amount, orderId, productId } = req.body;
            const createItemOrderService = new CreateItemOrderService_1.CreateItemOrderService();
            const item = yield createItemOrderService.execute({
                amount,
                orderId,
                productId
            });
            res.json(item);
        });
    }
}
exports.CreateItemOrderController = CreateItemOrderController;
