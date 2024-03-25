import request from '@/utils/request';

import type {
  HospitalInfoSearch,
  HospitalLevelAndRegionResponseData,
  HospitalResponseData,
} from './type';

// 统一管理接口地址
enum API {
  // 获取医院列表
  // GET /api/hosp/hospital/{page}/{limit}
  HOSPITAL_URL = '/hosp/hospital/',
  // 获取医院等级或地区
  // GET /api/cmn/dict/findByDictCode/{dictCode}
  HospitalLevelAndRegion_URL = '/cmn/dict/findByDictCode/',
  // 搜索医院信息
  // /api/hosp/hospital/findByHosname/{hosname}
  HOSPITALINFO_SEARCH_URL = '/hosp/hospital/findByHosname/',
}

// 获取医院列表
export const getHospital = (
  page: number,
  limit: number,
  hostype: string = '',
  districtCode: string = ''
) => {
  return request.get<any, HospitalResponseData>(
    API.HOSPITAL_URL + `${page}/${limit}` + '?' + `hostype=${hostype}&districtCode=${districtCode}`
  );
};

// 获取医院等级或地区
export const reqHospitalLevelAndRegion = (dictCode: string) => {
  return request.get<any, HospitalLevelAndRegionResponseData>(
    API.HospitalLevelAndRegion_URL + dictCode
  );
};

// 获取医院信息-搜索
export const reqHospitalInfoSearch = (hosname: string) => {
  return request.get<any, HospitalInfoSearch>(API.HOSPITALINFO_SEARCH_URL + hosname);
};
