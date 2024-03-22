import request from '@/utils/request';

import type { HospitalResponseData, HospitalLevelAndRegionResponseData } from './type';

// 统一管理接口地址
enum API {
  // 获取医院列表
  // GET /api/hosp/hospital/{page}/{limit}
  HOSPITAL_URL = '/hosp/hospital/',

  // 获取医院等级或地区
  // GET /api/cmn/dict/findByDictCode/{dictCode}
  HospitalLevelAndRegion_URL = '/cmn/dict/findByDictCode/',
}

// 获取医院列表
export const getHospital = (page: number, limit: number) => {
  return request.get<any, HospitalResponseData>(API.HOSPITAL_URL + page + '/' + limit);
};

// 获取医院等级或地区
export const reqHospitalLevelAndRegion = (dictCode: string) => {
  return request.get<any, HospitalLevelAndRegionResponseData>(
    API.HospitalLevelAndRegion_URL + dictCode
  );
};
