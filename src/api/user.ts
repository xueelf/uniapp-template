import request from '~/utils/request';

export function useUserApi() {
  return {
    login(data: object) {
      // TODO ／人◕ ‿‿ ◕人＼ login 接口
      // return request.post('/user/login', {
      //   data,
      // });
      return {
        token: '5eb63bbbe01eeed093cb22bb8f5acdc3',
      };
    },
  }
}
