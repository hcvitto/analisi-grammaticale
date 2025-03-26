import type { Item } from '../types/index.js';

export const steps: Item[] = [
    {
        id: 'articolo',
        label: 'Articolo',
        bgColor: 'red',
        opz: [
            { id: 'artDet', label: 'Determinativo' },
            { id: 'artIndet', label: 'Indeterminativo' },
            { id: 'artPart', label: 'Partitivo' },
        ]
    },
    {
        id: 'nome',
        label: 'Nome',
        bgColor: 'orange',
        opz: [
            { id: 'nomeCom', label: 'Comune', opz: [
                { id: 'nomeComCosa', label: 'Di cosa', opz: [
                    { id: 'nomeComCosaAstr', label: 'Astratto', },
                    { id: 'nomeComCosaConc', label: 'Concreto', },
                    { id: 'nomeComCosaPrim', label: 'Primitivo', },
                    { id: 'nomeComCosaDer', label: 'Derivato', },
                    { id: 'nomeComCosaInd', label: 'Individuale', },
                    { id: 'nomeComCosaDer', label: 'Collettivo', },
                    { id: 'nomeComCosaAlt', label: 'Alterato', },
                    ]
                },
                { id: 'nomeComPers', label: 'Di persona' },
                { id: 'nomeComAn', label: 'Di animale' },
                ]
            },
            { id: 'nomeProp', label: 'Proprio', opz: [
                { id: 'nomePropCosa', label: 'Di cosa' },
                { id: 'nomePropPers', label: 'Di persona' },
                { id: 'nomePropAn', label: 'Di animale' },
                ]
            },
        ]
    },
    {
        id: 'verbo',
        label: 'Verbo',
        bgColor: 'yellow',
        opz: [
            { id: 'verboInd', label: 'Modo indicativo', opz: [
                { id: 'verboIndPres', label: 'Tempo presente' },
                { id: 'verboIndImp', label: 'Tempo imperfetto' },
                { id: 'verboIndPass', label: 'Tempo passato remoto' },
                { id: 'verboIndFut', label: 'Tempo futuro semplice' },
                { id: 'verboIndPassPros', label: 'Tempo passato prossimo' },
                { id: 'verboIndTrapPros', label: 'Tempo trapassato prossimo' },
                { id: 'verboIndTrapRem', label: 'Tempo trapassato remoto' },
                { id: 'verboIndFutAnt', label: 'Tempo futuro anteriore' },
                ]
            },
            { id: 'verboCong', label: 'Modo congiuntivo', opz: [
                { id: 'verboCongPres', label: 'Tempo Presente' },
                { id: 'verboCongImp', label: 'Tempo Imperfetto' },
                { id: 'verboCongPass', label: 'Tempo Passato' },
                { id: 'verboCongFut', label: 'Tempo Trapassato' },
                ]
            },
            { id: 'verboCond', label: 'Modo condizionale' },
            { id: 'verboInf', label: 'Modo Infinito' },
            { id: 'verboGer', label: 'Modo gerundio' },
            { id: 'verboPart', label: 'Modo participio' },
        ]
    },
    {
        id: 'aggettivo',
        label: 'Aggettivo',
        bgColor: 'green',
        opz: [
            { id: 'aggPoss', label: 'Possessivo' },
            { id: 'aggDim', label: 'Dimostrativo' },
            { id: 'aggInd', label: 'Indefinito' },
            { id: 'aggNum', label: 'Numerale', opz: [
                { id: 'aggNumCard', label: 'Cardinale' },
                { id: 'aggNumOrd', label: 'Ordinale' },
                ]
            },
            { id: 'aggQual', label: 'Qualificativo', opz: [
                { id: 'aggPossPos', label: 'Di grado positivo' },
                { id: 'aggPossComp', label: 'Comparativo', opz: [
                    { id: 'aggPossPosCompUg', label: 'Di uguaglianza' },
                    { id: 'aggPossPosCompMag', label: 'Di maggioranza' },
                    { id: 'aggPossPosCompMin', label: 'Di minoranza' },
                    ]
                },
                { id: 'aggPossSup', label: 'Superlativo', opz: [
                    { id: 'aggPossSupAss', label: 'Assoluto' },
                    { id: 'aggPossSup', label: 'Relativo' },
                    ]
                },
                ]
            },
        ]
    },
    {
        id: 'preposizione',
        label: 'Preposizione',
        bgColor: 'blue',
        opz: [
            { id: 'prepSem', label: 'Semplce' },
            { id: 'prepArt', label: 'Articolata' },
        ]
    },
    {
        id: 'avverbio',
        label: 'Avverbio',
        bgColor: 'indigo',
        opz: [
            { id: 'avvTem', label: 'Di tempo' },
            { id: 'avvMod', label: 'Di modo' },
            { id: 'avvLuo', label: 'Di luogo' },
            { id: 'avvNeg', label: 'Di negazione' },
        ]
    },
] 