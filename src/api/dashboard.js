import api from './index'
import { axios } from '@/utils/request'

// 获取面板工程筛选下拉选择
export function getProjectList(params) {
  return axios({
    url: '/assets/getProjectList',
    method: 'get',
    params
  })
}

// 获取面板工程饼状图与工程基础设施柱状图
export function getStatisticalData(params) {
  return axios({
    url: '/assets/getStatisticalData',
    method: 'get',
    params
  })
}

// 获取工程详细信息
export function getProjectInfo(params) {
  return axios({
    url: '/assets/getProjectInfo',
    method: 'get',
    params
  })
}

// 获取地图流水经纬度
export function getLongitudeLatitude(params) {
  return axios({
    url: '/assets/getLongitudeLatitude',
    method: 'get',
    params
  })
}