import { ObjectUtil } from "./ObjectUtil";

export class Default {
    public static ifMissing<T>(obj: null | undefined | T, defaultValue: T): T {
        return ObjectUtil.isNullOrUndefined(obj) ? defaultValue : obj;
    }
}