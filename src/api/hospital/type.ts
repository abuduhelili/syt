// 定义医院详情模块TS数据类型

// 响应数据类型
export interface Response {
  code: number;
  message: string;
  ok: boolean;
}

// 医院详情数据类型（Data）
export interface HospitalDetail {
  bookingRule: {
    cycle: number;
    releaseTime: string;
    stopTime: string;
    quitDay: number;
    quitTime: string;
    rule: string[];
  };
  hospital: {
    id: string;
    createTime: string;
    updateTime: string;
    isDeleted: number;
    param: {
      hostypeString: string;
      fullAddress: string;
    };
    hoscode: string;
    hosname: string;
    hostype: string;
    provinceCode: string;
    cityCode: string;
    districtCode: string;
    address: string;
    logoData: string;
    intro: string | null;
    route: string;
    status: number;
    bookingRule: null;
  };
}

// 医院详情返回数据类型
export interface HospitalDetailResponse extends Response {
  data: HospitalDetail;
}
