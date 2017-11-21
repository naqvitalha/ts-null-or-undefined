import { ObjectUtil } from "./ObjectUtil";

export class Default {
    public static value<T>(obj: any, defaultValue: T): T {
        return ObjectUtil.isNullOrUndefined(obj) ? defaultValue : obj;
    }
}