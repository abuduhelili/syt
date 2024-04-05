// 创建仓库
import {defineStore} from 'pinia';
import {reqHospitalDetail} from '@/api/hospital';
import type {HospitalDetail, HospitalDetailResponse} from '@/api/hospital/type.ts';
import {ref} from 'vue';

export const useHospitalDetail = defineStore('hospitalDetail', () => {
    const hospitalDate = ref<HospitalDetail | null>(null);

    async function getHospital(hoscode: string) {
        const result: HospitalDetailResponse = await reqHospitalDetail(hoscode);
        if (result.code === 200) {
            // console.log(result);
            hospitalDate.value = result.data;
            // console.log(hospitalDate.value);
        }
    }

    return {hospitalDate, getHospital};
});
