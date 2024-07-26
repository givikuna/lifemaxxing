import { Level, Rank } from "../types/types";

export const ranks: [Rank, Level][] = [
    ["F", 0],
    ["E", 1],
    ["D", 4],
    ["C", 8],
    ["B", 20],
    ["A", 40],
    ["S", 60],
    ["SS", 70],
    ["SSS", 90],
    ["Nation", 100],
    ["Monarch", 146],
    ["Shadow Monarch", 150],
] satisfies [Rank, Level][];
