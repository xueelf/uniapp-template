import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const { VITE_API_URL } = import.meta.env;
const { formatToken } = storeToRefs(authStore);

type RequestOptions = Omit<UniNamespace.RequestOptions, 'url'>;

interface Result {
  code: number;
  data: Record<string, unknown>;
  message: string;
}

/**
 * 发起网络请求
 * 
 * @param url - 开发者服务器接口地址
 * @param options - 网络请求 {@link https://uniapp.dcloud.net.cn/api/request/request.html#request | 配置项}
 */
async function baseHttp(url: string, options: RequestOptions = {}) {
  const header = {
    'Content-Type': 'application/json',
  };

  if (formatToken.value) {
    header['Authorization'] = formatToken.value;
  }
  options.header = Object.assign(header, options.header);

  try {
    const request = await uni.request({
      url: VITE_API_URL + url, ...options,
    });
    const { data: result, statusCode } = request;
    const { code, data, message } = result as Result;
    const prefix = Math.floor(statusCode / 100);

    // TODO ／人◕ ‿‿ ◕人＼ 状态码和 code 处理
    if (prefix !== 2 || code !== 0) {
      throw new Error(message);
    }
    return data;
  } catch (error) {
    uni.showToast({
      title: error.message,
    });
    throw error;
  }
}

/**
 * 发送 GET 请求
 * 
 * @param url - 接口地址
 * @param options - 网络请求配置项
 */
function getRequest(url: string, options?: RequestOptions) {
  options.method = 'GET';
  return baseHttp(url, options);
}

/**
 * 发送 PUT 请求
 * 
 * @param url - 接口地址
 * @param options - 网络请求配置项
 */
function putRequest(url: string, options?: RequestOptions) {
  options.method = 'PUT';
  return baseHttp(url, options);
}

/**
 * 发送 POST 请求
 * 
 * @param url - 接口地址
 * @param options - 网络请求配置项
 */
function postRequest(url: string, options?: RequestOptions) {
  options.method = 'POST';
  return baseHttp(url, options);
}

/**
 * 发送 DELETE 请求
 * 
 * @param url - 接口地址
 * @param options - 网络请求配置项
 */
function deleteRequest(url: string, options?: RequestOptions) {
  options.method = 'DELETE';
  return baseHttp(url, options);
}

export default {
  get: getRequest,
  put: putRequest,
  post: postRequest,
  delete: deleteRequest,
}
