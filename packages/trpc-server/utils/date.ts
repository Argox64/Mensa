export function toDayRange(gte: string, lte: string) {
    return {
        gte: new Date(`${gte}T00:00:00.000Z`),
        lte: new Date(`${lte}T23:59:59.999Z`)
    };
}