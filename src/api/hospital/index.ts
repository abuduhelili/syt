import request from '@/utils/request';
import type { HospitalDetailResponse } from '@/api/hospital/type';

enum API {
  // GET /api/hosp/hospital/{hoscode}
  HOSPITALDETAIL_URL = '/hosp/hospital/',
}

// 请求医院详情
export const reqHospitalDetail = (hoscode: string) => {
  return request.get<any, HospitalDetailResponse>(API.HOSPITALDETAIL_URL + hoscode);
};
