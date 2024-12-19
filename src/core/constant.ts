import { ICoreReturn } from './core.interface';

export const TIME_ZONE = 'Asia/Ho_Chi_Minh';

export function CoreReturn(params: ICoreReturn) {
  return {
    status: params.status,
    message:
      params.message !== ''
        ? Array.isArray(params.message)
          ? params.message
          : [params?.message]
        : '',
    error: params?.error ? params?.error : false,
    data: params.data,
  };
}
