export default class Type {
    public static isNullOrUndefined<T>(obj: number | null | undefined | T): obj is null | undefined {
        const ref = obj as any;
        return !(ref === 0 || ref);
    }
}