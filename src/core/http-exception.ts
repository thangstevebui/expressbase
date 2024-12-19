import { StatusCodes } from './http-status-codes';

class HttpException extends Error {
  status: StatusCodes;
  error: boolean = true;
  message: string;
  data?: any = {};

  constructor(
    message: string,
    status: StatusCodes = StatusCodes.INTERNAL_SERVER_ERROR,
    data?: any,
  ) {
    super(message);
    this.status = status;
    this.error = true;
    this.message = message;
    this.data = data || {};
  }
}

/**
 * The HTTP response status code will be 400.
 */
export class BadRequestException extends HttpException {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.BAD_REQUEST);
    this.message = message;
    this.data = data || {};
  }
}

/**
 * The HTTP response status code will be 401.
 */
export class UnauthorizedException extends HttpException {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.UNAUTHORIZED);
    this.message = message;
    this.data = data || {};
  }
}

/**
 * The HTTP response status code will be 403.
 */
export class ForbiddenException extends HttpException {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.FORBIDDEN);
    this.message = message;
    this.data = data || {};
  }
}

/**
 * The HTTP response status code will be 404.
 */
export class NotFoundException extends HttpException {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.NOT_FOUND);
    this.message = message;
    this.data = data || {};
  }
}

/**
 * The HTTP response status code will be 405.
 */
export class MethodNotAllowedException extends HttpException {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.METHOD_NOT_ALLOWED);
    this.message = message;
    this.data = data || {};
  }
}

/**
 * The HTTP response status code will be 413.
 */
export class PayloadTooLargeException extends HttpException {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.REQUEST_TOO_LONG);
    this.message = message;
    this.data = data || {};
  }
}

/**
 * The HTTP response status code will be 415.
 */
export class UnsupportedMediaTypeException extends HttpException {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.UNSUPPORTED_MEDIA_TYPE);
    this.message = message;
    this.data = data || {};
  }
}

/**
 * The HTTP response status code will be 429.
 */
export class TooManyRequestsException extends HttpException {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.TOO_MANY_REQUESTS);
    this.message = message;
    this.data = data || {};
  }
}

/**
 * The HTTP response status code will be 500.
 */
export class InternalServerErrorException extends HttpException {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.INTERNAL_SERVER_ERROR);
    this.message = message;
    this.data = data || {};
  }
}

/**
 * The HTTP response status code will be 503.
 */
export class ServiceUnavailableException extends HttpException {
  constructor(message: string, data?: any) {
    super(message, StatusCodes.SERVICE_UNAVAILABLE);
    this.message = message;
    this.data = data || {};
  }
}
