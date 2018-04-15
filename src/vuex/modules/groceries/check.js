import { AuthAPI } from "../../../api";
import loc from "../../../assets/data/data.json";
export default {
    namespaced: true,
    state: {
        vm: {
            date: "",
            checkDate: "",
            tableData: []
        },
        status: [
            {
                name: 'all',
                title: '全部',
                value: '',
            },
            {
                name: 'normal',
                title: '正常',
                value: '1',
            },
            {
                name: 'disable',
                title: '停用',
                value: '0',
            },
        ],
        zone: loc,
        pageConfig: {
            currentPage: 1,
            pageSizes: [10, 200, 300, 400],
            pageSize: 10,
            total: 100
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
    mutations: {

    },
}