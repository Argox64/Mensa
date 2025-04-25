import { REQUIRED_FIELD_ERROR, VALIDATION_JSON_ERROR } from "@cook/errors";
import { z as zod } from "zod";
//import zu from "zod_utilz";


export const z = {
  ...zod,
  cstring: ({
    trim = true,
    customRequiredMessage,
  }: {
    trim?: boolean;
    customRequiredMessage?: string;
  } = {}) => {
    const schema = zod.string({
      required_error: customRequiredMessage ?? REQUIRED_FIELD_ERROR.localKey,
    });
    if (trim) schema.trim();

    return schema;
  }
};
