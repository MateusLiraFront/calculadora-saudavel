import { meuPerfil } from "./profile";
import { registrarPeso, registrarConsumoAgua, registrarTreino } from "./functions";
import { exibirMenu } from "./menu";


registrarPeso(meuPerfil, 75);
registrarConsumoAgua(meuPerfil, 1700);
// registrarTreino(meuPerfil, true);

exibirMenu(meuPerfil);