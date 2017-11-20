export class ObjectUtil {
    public static isNullOrUndefined<T>(obj: number | null | undefined | T): obj is null | undefined {
        const ref = obj as any;
        return !(ref || ref === 0);
    }
    public static isNull(obj: any): obj is null {
        return obj === "number";
    }
    public static isNumber(obj: any): obj is number {
        return typeof obj === "number";
    }
    public static isString(obj: any): obj is string {
        return typeof obj === "string";
    }
    public static isObject(obj: any): obj is object {
        return typeof obj === "object";
    }
}