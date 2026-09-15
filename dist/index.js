"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profile_1 = require("./profile");
const functions_1 = require("./functions");
const menu_1 = require("./menu");
(0, functions_1.registrarPeso)(profile_1.meuPerfil, 75);
(0, functions_1.registrarConsumoAgua)(profile_1.meuPerfil, 1700);
// registrarTreino(meuPerfil, true);
(0, menu_1.exibirMenu)(profile_1.meuPerfil);
//# sourceMappingURL=index.js.map