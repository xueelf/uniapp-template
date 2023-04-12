import { defineStore } from 'pinia';

interface AuthState {
  token: string;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
  }),
  getters: {
    /**
     * 格式化 token
     */
    formatToken: state => state.token ? `Bearer ${state.token}` : null,
  },
  actions: {
    /**
     * 更新 token 信息
     * 
     * @param token - token
     */
    updateToken(token: string) {
      this.token = token;
      uni.setStorageSync('token', token);
    },
  },
});
