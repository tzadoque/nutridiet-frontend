import axios from 'axios';

export const requester = (config, contentType) => {
  const service = axios.create({
    baseURL: config.baseURL,
    ...config.options,
  });

  service.interceptors.request.use(
    req => {
      req.headers = {
        'Content-Type': contentType || 'application/json',
        'Access-Control-Allow-Origin': '*',
        ...config,
      };

      return req;
    },
    error => Promise.reject(error)
  );

  return {
    async get(uri) {
      const res = await service.get(uri);
      return res;
    },

    async post(uri, data) {
      const res = await service.post(uri, data);
      return res;
    },

    async put(uri, data) {
      const res = await service.put(uri, data);
      return res;
    },

    async patch(uri, data) {
      const res = await service.patch(uri, data);
      return res;
    },

    async delete(uri, data) {
      const res = await service.delete(uri, data);
      return res;
    },
  };
};
