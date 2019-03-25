<template>
    <div>
        <div class="max-box">
            <mt-loadmore   :bottom-method="loadBottom"  :bottom-all-loaded="allLoaded" ref="loadmore">
                <ul>
                    <li v-for="(item,b) in list" :key="b">
                        <div class="box">
                            <div class="con-box">
                            <p class="pad-bot">{{item.paymentTime}}</p>
                            <span class="box-botp box-left">缴费：{{item.amount}} 元</span>
                            <span class="box-botp">方式：{{item.payment.name}}</span>
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
        mounted() {
          this.$store.commit("changeName",'缴费记录详情')
        },
        data :function(){
            return{
                list : [],
                tPage : 1,
                lLength : 0,
                allLoaded : false,
                topStatus: '',
                flag : true,
                translate: 0,
                moveTranslate: 0,
                wrapperHeight: 0
            }
        },
        created(){
            // console.log(this.$route.params.stuId)
            this.$axios.get('getFeeByStudentId2',{params:{id: this.$route.query.stuId,page:1,rows:10}}).then(response=>{
                this.list = response.data.rows;
            },error=>{
                console.log('错误信息:'+error);
            })
        },
        methods : {
           loadBottom(){
            // console.log("123")

            // let aa = this.tPage;

            if(this.list.length < this.lLength){
              setTimeout(()=> {
                this.tPage += 1;
                this.$axios.get("getFeeByStudentId2",{params : {id: this.$route.query.stud,page:this.tPage,rows:10}}).then(response=>{
                //   console.log(response)
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
            this.loadmore();
          }
        }
    }
</script>

<style scoped>
    .navter{
        font-size: .16rem;
    }
    *{
        color:#333333;
        font-size: .15rem;
        font-family: "黑体";
    }
    .max-box{
        overflow: hidden;
        background: #ececec;
        width:94.6%;
        padding: .1rem
    }
    .box{
        width: 100%;
        overflow: scroll;
        padding: .15rem .15rem;
        box-sizing: border-box;
        background: #fff;
        margin-bottom: .01rem;
    }
   .con-box{
       width: 100%;
   }
   .box-botp{
     /* padding-left: 20%; */
     width: 80%;
     margin: 0 auto;
   }
   .box-left{
       margin-right: 10%;
   }
  .pad-bot{
    padding-bottom: 4%;
  }
</style>
