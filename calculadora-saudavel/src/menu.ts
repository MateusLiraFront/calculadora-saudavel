import { Perfil } from "./profile";

export function exibirMenu(perfil: Perfil): void {
    console.clear();
    console.log(` ========================================
    INFORMAÇÕES GERAIS (${perfil.nome})\n
    IMC: ${perfil.imc}\n
    Peso Atual: ${perfil.peso}kg |  Meta de Peso: ${perfil.metaPeso}kg \n
    Consumo de àgua diário: ${perfil.consumoAgua}ml / ${perfil.metaAgua}ml \n
    Consumo de Carboidrato:  ${perfil.ConsumoCarboidrato}g / ${perfil.metaCarboidrato}g \n
    Consumo de Proteína: ${perfil.ConsumoProteina}g / ${perfil.metaProteina}g \n
    Treino Feito: ${perfil.treino ? "Sim" : "Não"} \n
    Distância percorrida hoje: ${perfil.distanciaPercorrida} km \n
    ========================================\n
    ACESSAR CONFIGURAÇÕES | ATUALIZAR DADOS \n
    `);
}
