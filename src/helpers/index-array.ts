const indexArray = <T extends object>(array: T[]): (T & { id: number })[] =>
    array.map((item, index) => ({ ...item, id: index + 1 }));

export default indexArray;
