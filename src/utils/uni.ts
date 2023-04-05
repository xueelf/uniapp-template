import { useUserApi } from '@/api/user';
import { useAuthStore } from '@/store/auth';

type ShowToastOptions = Omit<UniApp.ShowToastOptions, 'title'>;
type ShowModalOptions = Omit<UniApp.ShowModalOptions, 'content'>;
type LoginOptions = Omit<UniApp.LoginOptions, 'provider'>;

const authStore = useAuthStore();
const userApi = useUserApi();

/**
 * 显示消息提示框
 * 
 * @param title - 提示的内容
 * @param options - 提示框 {@link https://uniapp.dcloud.net.cn/api/ui/prompt.html#showtoast | 配置项}
 * @example
 * 使用示例：
 * ```
 * // 原生
 * uni.showToast({
 *   icon: 'none',
 *   title: 'hello world',
 * });
 * // 当前封装
 * showToast('hello world');
 * ```
 */
export function showToast(title: string, options?: ShowToastOptions) {
  return uni.showToast({
    title,
    icon: 'none',
    ...options,
  });
}

/**
 * 显示模态弹窗
 * 
 * @param title - 提示的内容
 * @param options - 弹窗 {@link https://uniapp.dcloud.net.cn/api/ui/prompt.html#showmodal | 配置项}
 * @example
 * 使用示例：
 * ```
 * // 原生
 * uni.showModal({
 *   title: '提示',
 *   content: 'hello world',
 * });
 * // 当前封装
 * showModal('hello world');
 * ```
 */
export function showModal(content: string, options?: ShowModalOptions) {
  return uni.showModal({
    content,
    title: '提示',
    ...options,
  });
}

/**
 * 用户登录
 * 
 * @param provider - 登录服务提供商
 * @param options - 登录 {@link https://uniapp.dcloud.net.cn/api/plugins/login.html | 配置项}
 */
export async function login(provider: UniApp.LoginOptions['provider'], options?: LoginOptions) {
  const { code } = await uni.login({
    provider, ...options,
  });
  // TODO ／人◕ ‿‿ ◕人＼ 拿 code 换取 token
  const result = await userApi.login({
    code,
  });
  const { token } = result;

  authStore.updateToken(token);
  uni.setStorageSync('token', token);
}
