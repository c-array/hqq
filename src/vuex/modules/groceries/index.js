import { AuthAPI } from "../../../api";
export default {
    namespaced: true,
    state: {
        vm:{
            date:"",
            tableData:[]
        },
        pageConfig:{
            currentPage:1,
            pageSizes:[10, 200, 300, 400],
            pageSize:10,
            total:100
        },
        search: {
            id: '',
            storeName: '',
            receiverName: '',
            start: null,
            end: null,
            status,
            updateStart: null,
            updateEnd: null,
            cities: [],
            inviteCodeId: '',
          }
    },
    mutations:{

    },
}