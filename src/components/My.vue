<template>
    <div class="sho">
        <div class="my_div" v-if="this.$store.getters.ww">
            <router-link :to="{name:'login'}">
                <p class="deng">登陆</p>
            </router-link>
        </div>
        <div class="my_div1" v-else>
            <p class="deng2">
                <img src="../assets/img/My_img/logo_icon.png" width="100%" height="100%" alt="">
            </p>
            <p class="deng1">
                {{titl}}
            </p>
        </div>
        <div class="ss">
            <router-link :to="{name:'information'}" >
                <mt-cell class="name_s" title="我的资料" is-link>
                    <img class="my_img" slot="icon" src="../assets/img/My_img/01.wdzl.png" width="22" height="22">
                </mt-cell>
            </router-link>
            <router-link :to="{name:'password'}">
                <mt-cell class="name_s"  title="修改密码" is-link>
                    <img class="my_img" slot="icon" src="../assets/img/My_img/02.xgmm.png" width="24" height="24">
                </mt-cell>
            </router-link>
            <mt-cell class="name_s" title="客服热线" is-link>
                <a href="tel://010-86201886">010-86201886</a>
                <img class="my_img" slot="icon" src="../assets/img/My_img/03.kfrx.png" width="24" height="24">
            </mt-cell>
            <router-link :to="{name:'about'}">
                <mt-cell class="name_s" title="关于我们" is-link>
                    <img class="my_img" slot="icon" src="../assets/img/My_img/04.gywm.png" width="24" height="24">
                </mt-cell>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                flag : false,
                titl : "jhug",
                ww : true
            }
        },
        props:{
            // ww : Array
        },
        methods: {
        },
        mounted() {
            this.$store.commit('backShow');
            this.$store.commit('backTab');
            this.$store.commit("changeName",'我的');
        }
    }
</script>

<style scoped>
    *{
        color: #000;
    }
    .sho{
        background: #ececec;
    }
    .my_div{
        width: 100%;
        height: .8rem;
        padding-top: .5rem;
        background: #ffffff;
    }
    .deng{
        width: 30%;
        height: .3rem;
        margin: 0 auto;
        border:solid 0.02rem #15b6fa;
        text-align: center;
        font-size: .2rem;
        color: #15b6fa;
        line-height: .3rem;
    }
    .ss{
        width: 100%;
        overflow: hidden;
        background: #ffffff;
        margin-top:.2rem;
    }
    .my_img{
        margin-right: .1rem;
    }
    .name_s{
        padding: 0px;
        border-bottom: .01rem solid #ccc;
    }
    .my_div1{
        width: 100%;
        height: 1.6rem;
        position: relative;
        background: #ffffff;
    }
    .deng2{
        width: 20%;
        height: 47%;
        margin: 0 auto;
        position: absolute;
        top: 20%;
        right: 40%;
        text-align: center;
        font-size: .2rem;
        color: #15b6fa;
        line-height: .3rem;
        border-radius: 50%;
    }
    .deng1{
        width: 20%;
        height: 25%;
        position: absolute;
        top: 70%;
        right: 40%;
        text-align: center;
        font-size: .2rem;
    }
</style>
