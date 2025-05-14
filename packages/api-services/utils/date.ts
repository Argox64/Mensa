import { format } from "date-fns";

export function dateToyyyyMMddFormat(date: Date): string {
    return format(date, "yyyy-MM-dd");
}