import * as types from '../mutation-types';
import API from '../../utils/api';

const actions = {
  putGymSideInfo: ({ commit }, params) => {
    //获取gymsideinfo信息
    return API.getGymSideInfoAPI(params).then(res => {
      commit(types.GET_GYMSIDEINFO, res.data);
    }, err => {
      if (err) {
        commit(types.GET_GYMSIDEINFO, {});
      }
    })
  },
  putSitesTable: ({ commit }, params) => {
    //获取sidestable信息
    return API.getSitesTableAPI(params).then(res => {
      commit(types.GET_SITESTABLE, res.data);
    }, err => {
      if (err) {
        commit(types.GET_SITESTABLE, {});
      }
    })
  },
  putStockList: ({ commit }, params) => {
    //获取stocklist信息
    return API.getStockListAPI(params).then(res => {
      commit(types.GET_STOCKLIST, res.data);
    }, err => {
      if (err) {
        commit(types.GET_STOCKLIST, {});
      }
    })
  },
  putUserLike:({ commit },params)=>{
  //从后端获取用户关注信息赋给仓库
  },
  changeUserLike:({ commit },data)=>{
  //修改用户的关注信息
    commit(types.CHANGE_USERLIKE,data);
  }
}

export default actions