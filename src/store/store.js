import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        show : false,
        name : "首页",
        tab : false,
        teacherId: '',
        code : "",
        ww : true,
        appTel : '11',
        appName : ''
    },
    getters : {
        show : function (state){
            return state.show;
        },
        getName : function (state){
            return state.name;
        },
        tab : function (state){
            return state.tab;
        },
        teacherId : function (state) {
            return state.teacherId;
        },
        code : function(state){
            return state.code;
        },
        appTel1 : function(state){
            return state.appTel;
        },
        appName1 : function(state){
            return state.appName;
        },
        ww : function (state) {
            return state.ww;
        }
    },
    mutations : {
        changeShow : function (state) {
            state.show = true;
        },
        backShow : function (state) {
            state.show = false;
        },
        changeName : function(state,name){
            state.name = name;
        },
        changeTab : function(state){
            state.tab = false;
        },
        backTab : function(state){
            state.tab = true;
        },
        changeCode : function(state,code){
            state.code = code;
        },
        changeAppTel : function(state,appTel){
            state.appTel = appTel;
        },
        changeAppName : function(state,appName){
            state.appName = appName;
        },
        changeTeacherId : function (state,id) {
            state.teacherId = id;
        },
        changeWw : function (state) {
            state.ww = false;
        }
    }
})