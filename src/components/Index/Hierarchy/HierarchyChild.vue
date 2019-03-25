<template>
    <div>
        <div class="superior">
            <span class="sign"></span>
            <ul>
                <li>上级</li>
                <li>
                    <p>姓名:{{obj.name}}</p>
                    <p>地区:{{obj.address}}</p>
                </li>
                <li>
                    <p>性别:{{obj.sex}}</p>
                    <p>学生数量:{{obj.studentCount}}</p>
                </li>
                <li>
                    <p>联系电话:{{obj.tel}}</p>
                    <p>点位:{{obj.point}}</p>
                </li>
                
                <li @click="hisStu(obj.id)">
                    TA的学生
                    <span class="arrows">&gt</span>
                </li>
                    
            </ul>
        </div>
        <div class="self">
            <ul>
                <li>
                    <p>姓名:{{myObj.name}}</p>
                    <p>地区:{{myObj.address}}</p>
                </li>
                <li>
                    <p>性别:{{myObj.sex}}</p>
                    <p>学生数量:{{myObj.studentCount}}</p>
                </li>
                <li>
                    <p>联系电话:{{myObj.tel}}</p>
                    <p>点位:{{myObj.point}}</p>
                </li>
                
                <router-link :to="{name:'myStudent'}" tag="li">
                    我的学生
                    <span class="arrows">&gt</span>
                </router-link>
            </ul>
        </div>
        <div class="subordinate" v-for="(item,i) in list" :key="i">
            <span class="sign"></span>
            <ul>
                <li>下级</li>
                 <li>
                    <p>姓名:{{item.name}}</p>
                    <p>地区:{{item.address}}</p>
                </li>
                <li>
                    <p>性别:{{item.sex}}</p>
                    <p>学生数量:{{item.studentCount}}</p>
                </li>
                <li>
                    <p>联系电话:{{item.tel}}</p>
                    <p>点位:{{item.point}}</p>
                </li>
                
                <li @click="hisStu(item.id)">
                    TA的学生
                    <span class="arrows">&gt</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                obj:{},
                list:[],
                myObj : []
            }
        },
        mounted() {
          this.$store.commit("changeName",'招生老师详情')
        },
        //实例在创建时获取数据
        created(){
            this.$axios.get("getParentProxyTeacher",{params : {id :this.$store.getters.teacherId}}).then(response=>{
                this.obj = response.data;
                // console.log(response);
                // console.log(this.list);
            },error=>{
                console.log("错误信息:" + error);
            }),
            this.$axios.get("getProxyTeacher",{params : {id :this.$store.getters.teacherId}}).then(response=>{
                this.myObj = response.data;
                // console.log(response);
                // console.log(this.list);
            },error=>{
                console.log("错误信息:" + error);
            }),
            this.$axios.get("getSublevelProxyTeacher",{params : {id :this.$store.getters.teacherId}}).then(response=>{
                this.list = response.data;
                // console.log(response);
                // console.log(this.list);
            },error=>{
                console.log("错误信息:" + error);
            })
        },
        methods : {
            hisStu : function (id) {
                this.$router.push({ name: 'hisStudent', query: { teacherId: id }});
            }
        }
    }
</script>

<style scoped>
    .superior, .subordinate{
       margin: .15rem 0;
    }
    .sign{
        display: block;
        width: .04rem;
        height: .17rem;
        background: #5e35b1;
        float: left;
        margin-right: .08rem;
        position: relative;
        top: .09rem;
    }
     ul{
        width: 90%;
        margin: 0 auto;
    }
     ul li{
        height: .35rem;
        line-height: .35rem;
        border-bottom: .01rem solid #e0e0e0;
    }
     ul li p{
        width: 50%;
        float: left;
    }
     ul li .arrows{
        float: right;
    }
    .self{
        background: #eeeeee;
        padding: .2rem 0;
    }
    
</style>