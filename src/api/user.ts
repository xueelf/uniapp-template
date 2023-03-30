import request from '@/utils/request';

export function useUserApi() {
  return {
    login(data: object) {
      return request.post('/user/login', {
        data,
      });
    },
  }
}
