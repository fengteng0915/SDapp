<template>
    <div>
        <div class="max-box">
            <div class="head">
              <p>姓名:{{this.$route.query.stuName}}</p>
            </div>
            <mt-loadmore   :bottom-method="loadBottom"  :bottom-all-loaded="allLoaded" ref="loadmore">
              <ul>
                  <li class="lis" v-for="(item,b) in list" :key="b">
                    <div class="box">
                      <p class="box_p">{{item.examDate}}</p>
                      <div class="con_box">
                        <p>{{item.name}} : {{item.score}}分</p>
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
          this.$store.commit("changeName",'在线考试详情')
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
        created(){
          console.log("id:"+this.$route.query.stuId)
          this.$axios.get('getExamByStudentId',{params:{id:this.$route.query.stuId,page:1,rows:10}}).then(response=>{
            // console.log(response)
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
                this.$axios.get("getExamByStudentId",{params : {id: this.$route.query.stuId,page:this.tPage,rows:10}}).then(response=>{
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
            this.loadmore();
          }
        }
    }
</script>

<style scoped>
.navter{
  font-size: .14rem;
}
*{
  color: #333;
  font-size: .15rem;
}
.max-box{
  overflow: scroll;
  background: #ececec;
}
.box{
  width: 100%;
  overflow: scroll;
  padding: 0 .15rem;
  box-sizing: border-box;
  background: #fff;
}
.box_p{
  border-bottom:.01rem solid #ececec;
  line-height: .4rem;
}
.con_box{
  width: 100%;
  padding: .2rem 0;
}
.con_box p{
  width: 80%;
  margin: 0 auto;
  padding: .05rem 0;
}
.head{
  width: 100%;
  height: .5rem;
  background:#fff;
  line-height: .5rem;
  padding: 0 .15rem;
  font-family: "黑体";
}
.lis{
  border-top: .1rem solid #ececec;
}
</style>

