export class ObjectUtil {
    public static isNullOrUndefined<T>(obj: number | null | undefined | T): obj is null | undefined {
        const ref = obj as any;
        return !(ref || ref === 0);
    }
}