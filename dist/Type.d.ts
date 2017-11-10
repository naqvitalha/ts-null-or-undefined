export default class Type {
    static isNullOrUndefined<T>(obj: number | null | undefined | T): obj is null | undefined;
}
