"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, express_fileupload_1.default)({
    limits: { fileSize: 50 * 1024 * 1024 } //N máximo 50mb
}));
app.use(routes_1.router);
//app.use('/files', express.static(path.join(__dirname, '..', 'tmp')));
//Middleware para verificar se o token está presente no header Authorization.
//Middleware de erro global, para lidar com erros não tratados.
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        //Se for uma instancia do tipo Error
        res.status(400).json({
            error: err.message
        });
    }
    res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});
//Inicia o server na porta 3333.
app.listen(process.env.PORT, () => {
    console.log("Server started on port 5333!!!");
});
