<template>
    <div class="details-box">
        <div class="text-box-content">
            <p class="title mar-but"><strong>{{text.title}}</strong></p>
            <p class="time mar-but"><span>发布于：</span>{{text.graduatedTime}}</p>
            <div class="hr"></div>
            <div class="img">
                <img v-if="text.img == null" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552539558886&di=48898faff84e902666019bbd65350238&imgtype=0&src=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd0c8a786c9177f3e9f8b7f297ecf3bc79f3d5653.jpg" alt="">
                <img v-else src="text.img" alt="">
            </div>
            <p class="text" v-html="text.content"></p>
        </div>
    </div>
</template>
<script>
   
export default {
    data : function(){
        return {
            text : {}
        }
    },
    mounted() {
        this.$store.commit('changeShow');
        this.$store.commit("changeName",'就业详情');
        this.$store.commit("changeTab");
    },
    created () {
        this.$axios.get("getgraduatedbyId",{params : {id : this.$route.query.id}}).then(response=>{
            console.log(response.data)
            this.text = response.data;
        },error=>{
            console.log('错误信息:'+error)
        })
    }
}
</script>
<style scoped>
    .mar-but{
        margin-bottom: .1rem;
    }
    .details-box{
        padding: .3rem .2rem;
        overflow: hidden;
        font-size: .18rem;
        line-height: .25rem;
    }
    .hr{
        margin: .2rem 0;
        border-bottom: .01rem solid #ccc;
    }
    .img {
        margin-bottom: .25rem;
    }
    .img img{
        width: 100%;
    }
    .text{
        text-indent: 2em;
        margin-bottom: .25rem;
    }
</style>
