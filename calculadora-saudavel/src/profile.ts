export type Perfil = {
    nome: string;
    peso: number;
    metaPeso: number;
    altura: number;
    imc: number;
    consumoAgua: number;
    metaAgua: number;
    ConsumoCarboidrato: number;
    metaCarboidrato: number;
    ConsumoProteina: number;
    metaProteina: number;
    treino: boolean;
    distanciaPercorrida: number;
};

export const meuPerfil: Perfil = {
    nome: "Mateus Lira",
    peso: 74,
    metaPeso: 85,
    altura: 1.79,
    imc: 23.10,
    consumoAgua: 1500,
    metaAgua: 3000,
    ConsumoCarboidrato: 200,
    metaCarboidrato: 250,
    ConsumoProteina: 90,
    metaProteina: 120,
    treino: false,
    distanciaPercorrida: 0
};