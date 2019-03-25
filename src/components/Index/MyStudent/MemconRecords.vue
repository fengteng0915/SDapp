<template lang="html">
    <div>
        <div class="max-box">
            <div class="head">
              <p>姓名:{{this.$route.query.stuName}}</p>
            </div>
            <mt-loadmore   :bottom-method="loadBottom"  :bottom-all-loaded="allLoaded" ref="loadmore">
              <ul>
                  <li class="lis" v-for="(item,b) in list" :key="b">
                      <div class="box">
                          <p class="box_p">{{item.conversationTime}}</p>
                          <div class="con_box">
                            <p class="box_cause">
                              谈话原因：
                              <span>{{item.reason}}</span>
                            </p>
                            <p class="con_box_p" @click="ShouPup">点击查看明细表</p>
                          </div>
                      </div>
                  </li>
              </ul>
            </mt-loadmore>
            <mt-popup v-model="popupVisible">
                  <img :src="mxObj.data"/>
            </mt-popup>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
          this.$store.commit("changeName",'在校谈话')
        },
        data :function(){
            return{
                list : [],
                mxObj : {},
                popupVisible:false,
                tPage : 1,
                lLength : 0,
                allLoaded : false,
                flag : true,
                translate: 0,
                moveTranslate: 0,
                wrapperHeight: 0,
            }
        },
        methods : {
            ShouPup() {
                this.popupVisible = true
            },
            loadBottom(){
              // console.log("123")

              // let aa = this.tPage;

              if(this.list.length < this.lLength){
                setTimeout(()=> {
                  this.tPage += 1;
                  this.$axios.get("getStudentConversationById",{params:{id : 60,page : 1,rows : 5}}).then(response=>{
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
        },
        created(){
          this.$axios.get('getStudentConversationById',{params:{id : 60,page : 1,rows : 5}}).then(response=>{
            this.list = response.data.rows;
            console.log(response)
          },error=>{
            console.log("错误信息:"+error)
          });

          //详细记录
          this.$axios.get('getStudentConversationPicById',{params:{id : 60}}).then(response=>{
            this.mxObj = response.data;
            console.log(response)
          },error=>{
            console.log("错误信息:"+error)
          });
        }
    }
</script>

<style scoped>
.navter{
  font-size: .16rem;
}
*{
  color: #333;
  font-size: .15rem;
}
.max-box{
  overflow: hidden;
  background: #ececec;
}
.box{
  width: 100%;
  overflow: hidden;
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
  padding: .05rem 0;
}
.con_box .box_cause{
  padding: 0 10%;
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
.con_box .con_box_p{
  padding-top: .15rem;
  text-align: right;
}
/* 弹框 */
.mint-popup{
  line-height: 0;
  width: 90%;
  height: 70%;
}
.mint-popup img{
  width: 100%;
  height: 100%;
}
</style>
