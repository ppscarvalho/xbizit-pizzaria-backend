"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
// Users
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
// Categories
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const UpdateCategoryController_1 = require("./controllers/category/UpdateCategoryController");
// Products
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListProductController_1 = require("./controllers/product/ListProductController");
const UpdateProductController_1 = require("./controllers/product/UpdateProductController");
const FindByIdProductController_1 = require("./controllers/product/FindByIdProductController");
const ListByCategoryProductController_1 = require("./controllers/product/ListByCategoryProductController");
// Orders and Items
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const CreateItemOrderController_1 = require("./controllers/order/CreateItemOrderController");
const DeleteOrderController_1 = require("./controllers/order/DeleteOrderController");
const RemoveItemOrderController_1 = require("./controllers/order/RemoveItemOrderController");
const DetailsOrderController_1 = require("./controllers/order/DetailsOrderController");
const ListOrderController_1 = require("./controllers/order/ListOrderController");
// Send Order
const SendOrderController_1 = require("./controllers/order/SendOrderController");
// Finish Order
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
// Middlewares
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload('./tmp'));
//-- ROTAS USER --
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailuserController().handle);
//-- ROTAS CATEGORIA --
router.post('/categories', isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/categories', isAuthenticated_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
router.put('/categories/:id', isAuthenticated_1.isAuthenticated, new UpdateCategoryController_1.UpdateCategoryController().handle);
//-- ROTAS PRODUTO --
//router.post('/products', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.post('/products', isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.put('/products/:id', isAuthenticated_1.isAuthenticated, upload.single('file'), new UpdateProductController_1.UpdateProductController().handle);
router.get('/products', isAuthenticated_1.isAuthenticated, new ListProductController_1.ListProductController().handle);
router.get('/products/:id', isAuthenticated_1.isAuthenticated, new FindByIdProductController_1.FindByIdProductController().handle);
router.get('/categories/:categoryId/products', isAuthenticated_1.isAuthenticated, new ListByCategoryProductController_1.ListByCategoryProductController().handle);
//-- ROTAS PEDIDO --
router.post('/orders', isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.post('/orders/items', isAuthenticated_1.isAuthenticated, new CreateItemOrderController_1.CreateItemOrderController().handle);
router.delete('/orders/:id', isAuthenticated_1.isAuthenticated, new DeleteOrderController_1.DeleteOrderController().handle);
router.delete('/orders/items/:id', isAuthenticated_1.isAuthenticated, new RemoveItemOrderController_1.RemoveItemOrderController().handle);
router.get('/orders/:id', isAuthenticated_1.isAuthenticated, new DetailsOrderController_1.DetailsOrderController().handle);
router.get('/orders', isAuthenticated_1.isAuthenticated, new ListOrderController_1.ListOrderController().handle);
//-- ROTAS ENVIAR PEDIDO --
router.put('/orders/send', isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
//-- ROTAS FINALIZAR PEDIDO --
router.put('/orders/finish', isAuthenticated_1.isAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
