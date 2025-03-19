export type ErrorType = {
  code: string;
  localKey: string;
};

//ERROR CODES
export const INTERNAL_ERROR: ErrorType = {
  code: "E500",
  localKey: "errors.internalError",
};

export const REQUIRED_FIELD_ERROR: ErrorType = {
  code: "E400-1",
  localKey: "errors.required-field",
};
export const RESOURCE_ALREADY_EXISTS_ERROR: ErrorType = {
  code: "E400-2",
  localKey: "errors.ressource-already-exists",
};
export const VALIDATION_NUMBER_ERROR: ErrorType = {
  code: "E400-3",
  localKey: "errors.validation.isNumber",
};
export const VALIDATION_INT_ERROR: ErrorType = {
  code: "E400-4",
  localKey: "errors.validation.isInt",
};
export const VALIDATION_UUID_ERROR: ErrorType = {
  code: "E400-5",
  localKey: "errors.validation.isUUID",
};
export const VALIDATION_JSON_ERROR: ErrorType = {
  code: "E400-6",
  localKey: "errors.validation.isJson",
};
export const VALIDATION_DATE_ERROR: ErrorType = {
  code: "E400-7",
  localKey: "errors.validation.isDate",
};
export const VALIDATION_EMAIL_ERROR: ErrorType = {
  code: "E400-8",
  localKey: "errors.validation.isEmail",
};
export const VALIDATION_POSITIVE_ERROR: ErrorType = {
  code: "E400-8",
  localKey: "errors.validation.isPositive",
};
export const VALIDATION_MAX_LENGTH_ERROR: ErrorType = {
  code: "E400-9",
  localKey: "errors.validation.maxLength",
};
export const NON_EXISTENT_PARENT_BLOCK_ERROR: ErrorType = {
  code: "E400-9",
  localKey: "errors.non_existent_parent_block",
};

export const UNAUTHORIZED_RESOURCE_ERROR: ErrorType = {
  code: "E401-1",
  localKey: "errors.unauthorized-ressource",
};
export const EXPIRED_TOKEN_ERROR: ErrorType = {
  code: "E401-2",
  localKey: "errors.expired-token",
};
export const INVALID_TOKEN_ERROR: ErrorType = {
  code: "E401-3",
  localKey: "invalid-token",
};

export const FORBIDDEN_ERROR: ErrorType = {
  code: "E403-1",
  localKey: "errors.forbidden",
};

export const NOT_FOUND_RESOURCE_ERROR: ErrorType = {
  code: "E404-1",
  localKey: "errors.not-found-ressource",
};

export const METHOD_NOT_ALLOWED_ERROR: ErrorType = {
  code: "E405-1",
  localKey: "errors.method-not-allowed",
};
