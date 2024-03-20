import request from '@/utils/request';

// 统一管理接口地址
enum Api {
  // GET /api/hosp/hospital/{page}/{limit}
  HOSPITAL_URL = '/hosp/hospital/',
}

// 获取医院列表
export const getHospital = (page: number, limit: number) => {
  return request.get(Api.HOSPITAL_URL + page + '/' + limit);
};
