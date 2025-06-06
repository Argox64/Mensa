import { ErrorType } from "./codes";

export interface ErrorResponse {
  status: string;
  errors: {
    code: string;
    message: string;
  }[];
}

export abstract class HttpError extends Error {
  public readonly status: number;
  public readonly errorCode: string;
  public readonly slots: Record<string, string>;

  constructor(
    errorType: ErrorType,
    status: number,
    slots: Record<string, string>,
  );
  constructor(
    errorCode: string,
    m: string,
    status: number,
    slots: Record<string, string>,
  );

  constructor(...params: any[]) {
    if (params.length === 3) {
      // first constructor
      super(params[0].localKey);
      this.errorCode = params[0].code;
      this.status = params[1];
      this.slots = params[2];
    } else {
      // second constructor
      super(params[1]);
      this.errorCode = params[0];
      this.status = params[2];
      this.slots = params[3];
    }
  }
}

/**
 * 400 Bad Request
 */
export class BadRequestError extends HttpError {
  constructor(errorType: ErrorType);
  constructor(errorType: ErrorType, slots: Record<string, string>);
  constructor(errorCode: string, m: string, slots: Record<string, string>);

  constructor(...params: any[]) {
    if (params.length === 1) {
      super(params[0], 400, {});
    }
    else if (params.length === 2) {
      // first constructor
      super(params[0], 400, params[1]);
    } else {
      // second constructor
      super(params[0], params[1], 400, params[2]);
    }
    this.name = "Bad Request";
  }
}

/**
 * 401 Unauthorized
 */
export class UnauthorizedError extends HttpError {
  constructor(errorType: ErrorType);
  constructor(errorType: ErrorType, slots: Record<string, string>);
  constructor(erorCode: string, m: string, slots: Record<string, string>);

  constructor(...params: any[]) {
    if (params.length === 1) {
      super(params[0], 401, {});
    }
    else if (params.length === 2) {
      // first constructor
      super(params[0], 401, params[1]);
    } else {
      // second constructor
      super(params[0], params[1], 401, params[2]);
    }
    this.name = "Unauthorized";
  }
}

/**
 * 403 Forbidden
 */
export class ForbiddenError extends HttpError {
  constructor(errorType: ErrorType);
  constructor(errorType: ErrorType, slots: Record<string, string>);
  constructor(errorCode: string, m: string, slots: Record<string, string>);

  constructor(...params: any[]) {
    if (params.length === 1) {
      super(params[0], 403, {});
    }
    else if (params.length === 2) {
      // first constructor
      super(params[0], 403, params[1]);
    } else {
      // second constructor
      super(params[0], params[1], 403, params[2]);
    }
    this.name = "Forbidden";
  }
}

/**
 * 404 Not Found
 */
export class NotFoundError extends HttpError {
  constructor(errorType: ErrorType);
  constructor(errorType: ErrorType, slots: Record<string, string>);
  constructor(errorCode: string, m: string, slots: Record<string, string>);

  constructor(...params: any[]) {
    if (params.length === 1) {
      super(params[0], 404, {});
    }
    else if (params.length === 2) {
      // first constructor
      super(params[0], 404, params[1]);
    } else {
      // second constructor
      super(params[0], params[1], 404, params[2]);
    }
    this.name = "Not Found";
  }
}

/**
 * 405 Method Not Allowed
 */
export class MethodNotAllowedError extends HttpError {
  constructor(errorType: ErrorType);
  constructor(errorType: ErrorType, slots: Record<string, string>);
  constructor(errorCode: string, m: string, slots: Record<string, string>);

  constructor(...params: any[]) {
    if (params.length === 1) {
      super(params[0], 405, {});
    }
    else if (params.length === 2) {
      // first constructor
      super(params[0], 405, params[1]);
    } else {
      // second constructor
      super(params[0], params[1], 405, params[2]);
    }
    this.name = "Method Not Allowed";
  }
}

/**
 * 409 Conflict
 */
export class ConflictError extends HttpError {
  constructor(errorType: ErrorType);
  constructor(errorType: ErrorType, slots: Record<string, string>);
  constructor(errorCode: string, m: string, slots: Record<string, string>);

  constructor(...params: any[]) {
    if (params.length === 1) {
      super(params[0], 409, {});
    }
    else if (params.length === 2) {
      // first constructor
      super(params[0], 409, params[1]);
    } else {
      // second constructor
      super(params[0], params[1], 409, params[2]);
    }
    this.name = "Conflict";
  }
}

/**
 * 422 Unprocessable Entity
 */
export class UnprocessableEntityError extends HttpError {
  constructor(errorType: ErrorType);
  constructor(errorType: ErrorType, slots: Record<string, string>);
  constructor(errorCode: string, m: string, slots: Record<string, string>);

  constructor(...params: any[]) {
    if (params.length === 1) {
      super(params[0], 422, {});
    }
    else if (params.length === 2) {
      // first constructor
      super(params[0], 422, params[1]);
    } else {
      // second constructor
      super(params[0], params[1], 422, params[2]);
    }
    this.name = "Unprocessable Entity";
  }
}

/**
 * 500 Internal Server Error
 */
export class InternalError extends HttpError {
  constructor(errorType: ErrorType);
  constructor(errorType: ErrorType, slots: Record<string, string>);
  constructor(errorCode: string, m: string, slots: Record<string, string>);

  constructor(...params: any[]) {
    if (params.length === 1) {
      super(params[0], 500, {});
    }
    else if (params.length === 2) {
      // first constructor
      super(params[0], 500, params[1]);
    } else {
      // second constructor
      super(params[0], params[1], 500, params[2]);
    }
    this.name = "Internal Server Error";
  }
}

export function convertAxiosErrorToHttpError(axiosError: any): HttpError {
  switch (axiosError.response?.status) {
    case 400:
      return new BadRequestError(
        axiosError.response.data.errors[0].id,
        axiosError.response.data.errors[0].message,
        {},
      );
    case 401:
      return new UnauthorizedError(
        axiosError.response.data.errors[0].id,
        axiosError.response.data.errors[0].message,
        {},
      );
    case 404:
      return new NotFoundError(
        axiosError.response.data.errors[0].id,
        axiosError.response.data.errors[0].message,
        {},
      );
    case 405:
      return new MethodNotAllowedError(
        axiosError.response.data.errors[0].id,
        axiosError.response.data.errors[0].message,
        {},
      );
    case 409:
      return new ConflictError(
        axiosError.response.data.errors[0].id,
        axiosError.response.data.errors[0].message,
        {},
      );
    case 422:
      return new UnprocessableEntityError(
        axiosError.response.data.errors[0].id,
        axiosError.response.data.errors[0].message,
        {},
      );
    case 500:
      return new InternalError(
        axiosError.response.data.errors[0].id,
        axiosError.response.data.errors[0].message,
        {},
      );
    default:
      throw axiosError;
  }
}
