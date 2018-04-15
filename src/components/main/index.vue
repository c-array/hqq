<template>
    <el-container class="inner main">
        <el-aside width="280px">
            <el-menu 
                background-color="#616c88"
                text-color="#fff"
                active-text-color="#fff"
                :unique-opened="true">
                <el-submenu :index="'' + item.id" :key="item.id" v-for="item in list">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item v-if="!tow.second" :key="tow.id" v-for="tow in item.second" :index="'' + tow.id">
                        <router-link :to="{name:tow.url,params:{title:item.name,subtitle:tow.name}}" tag="div">{{tow.name}}</router-link>
                    </el-menu-item>
                    <el-submenu v-else :index="'' + tow.id">
                        <template slot="title">
                            <i style="margin-right:0;" :class="tow.icon"></i>
                            <span>{{tow.name}}</span>
                        </template>
                        <el-menu-item :key="three.id" v-for="three in tow.second" :index="'' + three.id">{{three.name}}</el-menu-item>
                    </el-submenu>
                </el-submenu>
                
            </el-menu>
        </el-aside>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>
<style scoped lang="less">
    @import "../../assets/less/modules/main/index.less";
</style>
<script>
    import { mapState, mapMutations } from 'vuex';
    import { Container, Header, Aside, Main, Menu, Submenu, MenuItem } from "element-ui";
    export default {
        name: "mains",
        components: {
            "el-container": Container,
            "el-header": Header,
            "el-aside": Aside,
            "el-main": Main,
            "el-menu": Menu,
            "el-submenu": Submenu,
            "el-menu-item": MenuItem,
        },
        created () {
            this.getCode();
        },
        computed: {
            ...mapState('main',[
                "list"
            ])  
        },
        methods: {
            ...mapMutations('main',[
                'getCode'
            ]),
            handleSelect(index,indexPath){
                console.log(index,indexPath);
            }
        }
    }
</script>