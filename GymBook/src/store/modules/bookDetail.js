import * as types from '../mutation-types';

const state = {
  gymSideInfo: {
  },
  sitesTable: {
  },
  stockList: {
  },
  userLike: {
    "userId":1,
    "like":[5,6,7,8]
  }
};

const getters = {
  getGymSideInfo(state) {
    return state.gymSideInfo
  },
  getSitesTable(state) {
    return state.sitesTable
  },
  getStockList(state) {
    return state.stockList
  },
  getUserLike (state) {
    return state.userLike
  }
}

const mutations = {
  [types.GET_GYMSIDEINFO](state, data) {
    state.gymSideInfo = data;
  },
  [types.GET_SITESTABLE](state, data) {
    state.sitesTable = data;
  },
  [types.GET_STOCKLIST](state, data) {
    state.stockList = data;
  },
  [types.GET_USERLIKE](state, data) {
    state.userLike = data;
  },
  [types.CHANGE_USERLIKE](state,data) {
    state.userLike.like = data
  }
}
export default {
  state,
  getters,
  mutations
}
