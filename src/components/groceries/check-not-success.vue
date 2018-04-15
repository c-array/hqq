<template>
        <div class="inner warp-bg">
            <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item>{{params.title}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{params.subtitle}}</el-breadcrumb-item>
            </el-breadcrumb>
            <el-row :gutter="10" type="flex">
                <el-form class="search-box" label-width="80px" :model="search">
                    <el-col :span="8">
                        <el-form-item label-width="130px" label="店铺名称 / 用户名" prop="storeName">
                            <el-input size="medium" v-model="search.storeName" placeholder="店铺名称 / 用户名"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="邀请人" prop="inviteCodeId">
                            <el-input size="medium" v-model="search.inviteCodeId" placeholder="邀请人"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="ID" prop="accountId">
                            <el-input size="medium" v-model="search.accountId" placeholder="ID"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label-width="130px" label="联系人 / 联系方式" prop="receiverName">
                            <el-input size="medium" v-model="search.receiverName" placeholder="联系人 / 联系方式"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="省市区" prop="loc">
                            <el-cascader
                                :options="zone"
                                v-model="search.loc">
                            </el-cascader>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="状态" prop="status">
                            <el-select v-model="search.status" placeholder="请选择">
                                <el-option
                                    v-for="item in status"
                                    :key="item.value"
                                    :label="item.title"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label-width="130px" label="提交日期" prop="status">
                            <el-date-picker v-model="vm.date" type="datetimerange" range-separator="至" style="width:100%" start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="审核日期" prop="status">
                            <el-date-picker v-model="vm.checkDate" type="datetimerange" range-separator="至" style="width:100%" start-placeholder="开始日期" end-placeholder="结束日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item class="query-btn">
                            <el-button type="primary" icon="el-icon-search">查询</el-button>
                            <el-button icon="el-icon-refresh">重置</el-button>
                        </el-form-item>
                    </el-col>
                </el-form>
            </el-row>
            <div class="table-box">
                <el-table :data="vm.tableData" style="width: 100%">
                    <el-table-column header-align="center" prop="date" label="杂货铺UID" width="180">
                    </el-table-column>
                    <el-table-column header-align="center" prop="name" label="用户名" width="180">
                    </el-table-column>
                    <el-table-column header-align="center" prop="address" label="店铺名称">
                    </el-table-column>
                    <el-table-column header-align="center" prop="address" label="联系人">
                    </el-table-column>
                    <el-table-column header-align="center" prop="address" label="联系电话">
                    </el-table-column>
                    <el-table-column header-align="center" prop="address" label="市">
                    </el-table-column>
                    <el-table-column header-align="center" prop="address" label="邀请人">
                    </el-table-column>
                    <el-table-column header-align="center" prop="address" label="提交日期">
                    </el-table-column>
                    <el-table-column header-align="center" prop="address" label="审核日期">
                    </el-table-column>
                    <el-table-column header-align="center" prop="address" label="状态">
                    </el-table-column>
                    <el-table-column header-align="center" prop="address" label="操作">
                        <template slot-scope="scope">
                            <el-button type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                    class="pagination"
                    background
                    :current-page="pageConfig.currentPage"
                    :page-sizes="pageConfig.pageSizes"
                    :page-size="pageConfig.pageSize"
                    layout="prev, pager, next, sizes, jumper,total"
                    :total="pageConfig.total">
                </el-pagination>
            </div>
        </div>
    </template>
    <script>
        import { mapState, mapMutations } from "vuex";
        export default {
            data() {
                return {
                    params: this.$route.params
                }
            },
            computed: {
                ...mapState('check', [
                    'search',
                    'vm',
                    'pageConfig',
                    'status',
                    'zone',
                ])
            }
        }
    </script>