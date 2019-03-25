<template>
    <div class="sho">
        <div class="my_div">
            <p class="deng">
                <img src="../../assets/img/My_img/logo_icon.png" width="100%" height="100%" alt="">
            </p>
            <p class="deng1">
                {{title}}
            </p>
        </div>
        <div class="ss" @click="flag=!flag">
            <mt-cell class="name_s" title="联系人姓名" is-link>
                <span>aaa</span>
            </mt-cell>
            <mt-cell class="name_s" title="我的提点" is-link>
                <span>aaa</span>
            </mt-cell>
            <mt-cell class="name_s" title="电话" is-link>
                <span>010-86201886</span>
            </mt-cell>
            <mt-cell class="name_s" title="邮箱" is-link>
                <span>aaa</span>
            </mt-cell>
            <mt-cell class="name_s" title="地址" is-link>
                <span>aaa</span>
            </mt-cell>
        </div>
        <div class="tk" v-show="flag" @click="flag=!flag">
            <p class="yi">暂不支持修改资料，请联系客服人员</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            flag : false,
            title : "jhug"
        }
    },
    mounted() {
        this.$store.commit('changeShow');
        this.$store.commit("changeName",'我的资料');
        this.$store.commit("changeTab");
    },
}
</script>
<style scoped>
    .yi{
        text-align: center;
        line-height: .5rem;
    }
    .tk{
        width: 70%;
        height: .5rem;
        font-size: .14rem;
        background: #eee;
        margin: 0 auto;
    }
    .sho{
        background: #fff;
    }
    .my_div{
        width: 100%;
        height: 1.6rem;
        position: relative;
        background: #ffffff;
    }
    .deng{
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
    .ss{
        width: 90%;
        overflow: hidden;
        background: #ffffff;
        margin: .2rem auto .4rem auto;
    }
   
    .name_s{
        padding: 0px;
        border-bottom: .01rem solid #ccc;
    }
    .my_img{
        margin-right: .1rem;
    }
</style>

