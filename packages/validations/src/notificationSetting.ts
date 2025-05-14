import { z } from "zod";
import { z as zc } from "./customs";

export const NotificationSettingSchema = zc.object({
    id: zc.string().uuid(),
    userId: zc.string().uuid(),
    emailEnabled: zc.boolean(),
    pushEnabled: zc.boolean(),
    weeklyDigest: zc.boolean(),
    newFeatures: zc.boolean(),
    createdAt: zc.string().date(),
    updatedAt: zc.string().date(),
});
export type NotificationSetting = z.infer<typeof NotificationSettingSchema>;