import type { Response } from 'express';

type SuccessStatus = 200 | 201 | 202;
type ErrorStatus = 400 | 401 | 403 | 404 | 500;
export type ResponseBody<T> = {
  success: boolean;
  message?: string;
  payload: T;
};

export function successResponse<TPayload = any>(
  response: Response,
  payload: TPayload,
  statusCode: SuccessStatus = 200,
  message?: string
) {
  const responseBody = {
    success: true,
    message,
    payload,
  };

  return response.status(statusCode).json(responseBody);
}

export const errorResponse = (response: Response, statusCode: ErrorStatus = 500, message?: string, payload?: any) => {
  const responseBody = {
    success: false,
    message,
    payload,
  };

  return response.status(statusCode).json(responseBody);
};
