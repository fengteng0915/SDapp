<template>
    <div>
        <div class="max-box" >
<!-- @translate-change="translateChange"  -->
            <mt-loadmore   :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                <ul>
                   <li v-for="(item,b) in list" :key="b">
                    <div class="box">
                        <div class="con-box">
                            <div class="box-img">
                                <img :src="sr" alt="">
                            </div>
                            <div class="box-right">
                                <p class="right-title">学生：{{item.name}}</p>
                                <p>专业：{{item.major.name}}</p>
                                <div class="right-nan">
                                    <p class="nan-p">时长：{{item.studyTime}}</p>
                                    <p class="time-p" @click="stuId(item.id)">查看详情>></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>    
                </ul>
            </mt-loadmore>    
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mystudent",
        mounted() {
          this.$store.commit('changeShow');
          this.$store.commit("changeName",'我的学生');
          this.$store.commit("changeTab");
        },
        data :function(){
            return{
                list : [],
                tPage : 1,
                lLength : 0,
                allLoaded : false,
                flag : true,
                translate: 0,
                moveTranslate: 0,
                wrapperHeight: 0,
            }  
        },
        //实例在创建时获取数据
        created(){
            this.$axios.get("getStudentByProxyTeacherId2",{params : {id :this.$store.getters.teacherId,page:this.tPage,rows:10}}).then(response=>{
                this.list = response.data.rows;
                this.lLength = response.data.total;
                console.log(this.lLength);
                // console.log(this.list);
            },error=>{
                console.log("错误信息:" + error);
            })
        },
        computed : {
            sr(){
                return require('../../assets/img/cj01.png');
            }
        },
        methods : {
          stuId(id){
            this.$router.push({ name: 'studentChild', query: { stuId: id }});
          },
          loadBottom(){
            // console.log("123")

            // let aa = this.tPage;

            if(this.list.length < this.lLength){
              setTimeout(()=> {
                this.tPage += 1;
                this.$axios.get("getStudentByProxyTeacherId2",{params : {id: this.$store.getters.teacherId,page:this.tPage,rows:10}}).then(response=>{
                  console.log(response)
                  for(let a = 0;a<response.data.rows.length;a++){
                    this.list.push(response.data.rows[a])
                  }
                });
              },1500)
            }else{
              this.allLoaded = true;
            }

          },
          handleBottomChange(status) {
            this.topStatus = status;
            this.loadMore();
          }
        //   translateChange(translate) {

        //     const translateNum = +translate;
        //     this.translate = translateNum.toFixed(2);
        //     this.moveTranslate = (1 + translateNum / 70).toFixed(2);

        //   },
        //   mounted() {
        //     this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
        //   }
	/*
            loadBottom:function() {
                // 上拉加载
                this.more();// 上拉触发的分页查询
                this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
            },
            more(){
                    let aa = this.tPage;
                    ++aa;
                  this.$axios.get("getStudentByProxyTeacherId2",{params : {id: this.$store.getters.teacherId,page:aa,rows:5}}).then(response=>{
                        console.log(response)
                        for(let a = 0;a<response.data.rows.length;a++){
                            this.list.push(response.data.rows[a])
                    }
                  this.isHaveMore(this.lLength);  
                })
            },
            isHaveMore(isHaveMore){
                  this.allLoaded = true;
                  if(isHaveMore){
                    this.allLoaded = false;
                  }
            },

	*/

            // loadMore() {
            //     // this.loading = true;
                // let aa = this.tPage;
                // ++aa;
                
            //     if(this.list.length == this.lLength){
            //         console.log("已经是最后一条数据了！");
            //         this.load = false;    
            //     }
            //     setTimeout(() => {
            //         // let last = this.list[this.list.length - 1];
            //         // for (let i = 1; i <= 10; i++) {
            //         //     this.list.push(last);
            //         // }
                
            //         this.$axios.get("getStudentByProxyTeacherId2",{params : {id :this.$store.getters.teacherId,page:aa,rows:5}}).then(response=>{
            //             // console.log(response.data.rows)
            //             // this.list = response.data.rows;
                        
            //             for(let a = 0;a<response.data.rows.length;a++){
            //                 this.list.push(response.data.rows[a])
                            
            //             }
                        
                            
                        
                        
            //             // console.log(response);
            //             // console.log(this.list);
            //         },error=>{
            //             console.log("错误信息:" + error);
            //         })
            //     }, 2000);
                
                
            //     // this.loading = false;
            // },

            // loadBottom() {
            //     console.log(this.lLength)
            // // 加载更多数据
            //     let aa = this.tPage;
            //     ++aa;
            //     let that = this;
            //      let timer =  setTimeout(function(){
            //          console.log("111")
                        //   that.$axios.get("getStudentByProxyTeacherId2",{params : {id: that.$store.getters.teacherId,page:aa,rows:5}}).then(response=>{
                        // console.log(response)
                        // for(let a = 0;a<response.data.rows.length;a++){
                        //     that.list.push(response.data.rows[a])
                        // }
                        // });
            //             if(that.list.length == that.lLength){
            //                 that.allLoaded = true;
            //                 that.flag = false;
            //                 // 若数据已全部获取完毕
            //              }
            //             //调用loadBottom mehtod
            //              that.$refs.loadmore.onBottomLoaded();
            //      },1000)  
                 
    
            // }
        }
    }
</script>

<style scoped>
    .navter{
        font-size: .16rem;
    }
    *{
        color: #7d7d7d;
        font-size: .15rem;
    }
    .max-box{
        overflow: scroll;
        padding: .01rem 0 0 0;
        background: #ececec;
    }
    .box{
        width: 100%;
        overflow: hidden;
        padding: .15rem .15rem;
        box-sizing: border-box;
        background: #fff;
        margin-bottom: .01rem;
    }
   .con-box{
       width: 100%;
   }
   .box-img{
       width: 40%;
       height: 1rem;
       overflow: hidden;
       padding-right: .1rem;
       float: left;
       box-sizing: border-box;
   }
   .box-img img{
       width: 100%;
       height: 100%;
   }
   .box-right{
       float: right;
       width: 60%;
       box-sizing: border-box;
   }
   .box-right p.right-title{
        overflow: hidden;
        margin-bottom: .2rem;
   }
    .box-right .right-nan{
        margin-top: .2rem;
   }
   .box-right p.nan-p{
       float: left;
   }
   .box-right .time-p{
       float: right;
   }
  
</style>
