<template>
  <el-container class="container">
    <el-row class="title">{{title}}</el-row>
    <el-row class="address">
      <span>场地地址：</span>{{address}}
    </el-row>
    <el-row class="desc">
      <span class="sub-title-desc">场地简介：</span>{{desc}}</el-row>
    <el-main class="order">
      <el-row class="date">
        <span class='label'>预定日期：</span>
       <span class='box'></span>
      </el-row>
      <el-row class="sequence">
        <span class='label'>预定场次：</span>
        <span class='box'></span>
      </el-row>
      <el-row class="orderMoney">
        <span>价格：</span>
        <strong>{{money}}</strong>
        <span> 元</span>
      </el-row>
    </el-main>
    <el-footer>
      <el-row class="btns">
        <el-button @click="focusChange()" :class="{ 'el-icon-star-on toFocus' : focusFlag, 'el-icon-star-off': !focusFlag }">关注</el-button>
        <el-button type="primary" class="reserve">立即预定</el-button>
      </el-row>
    </el-footer>
  </el-container>
</template>


<script>
export default {
  props: {
    desc: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    money: {
      type: Number,
      default: 3.00
    },
    gymId: {
      type: Number
    },
    like:{
      type:Array
    }
  },
  data() {
    return {
      value1: '',
      value5: [new Date(2016, 9, 10, 8, 0), new Date(2016, 9, 10, 22, 0)],
      focusFlag:false,
    }
  },
  methods:{
    focusState () {
      this.like.includes(this.gymId)?this.focusFlag=true:this.focusFlag=false;
    },
    focusChange () {
      if(this.focusFlag){
        let i = this.like.indexOf(this.gymId)
        this.like.splice(i,1)
        this.focusFlag = false
      }else{
        this.like.push(this.gymId)
        this.focusFlag = true
      }
      this.$store.dispatch('changeUserLike',this.like)//修改用户的关注信息
      console.log(this.$store.getters.getUserLike.like)
    }
  },
  mounted:function(){
   this.focusState();
 }
}
</script>

<style scoped>


.container {
    width:100%;
    text-align: left;
    line-height: 24px;
    font-size: 16px;
}
.title {
    color: #0b4b77;
    font-weight: 400;
    font-size: 24px;
    margin: 0 16px 0 30px;
}

.address,.desc{
    color: grey;
    background-color: #fcfcfc;
    padding: 15px;
    margin: 10px 16px 10px 30px;
}
.date,.sequence {
    padding: 15px;
    margin: 10px 16px 10px 30px;
}
.box{
    display: inline-block;
    color: #1a1a1a;
    border:1px solid #FF8F00;
    border-width: 2px;
    line-height: 38px;
    height: 38px;
    width:78px;
    padding-left: 19px;
    padding-right: 19px;
}
.label{
  color: grey;
    float: left;
    /* width: 14%; */
    padding-top: 8px;
    /* padding-right: 1%; */
    text-align: right;
}

.orderMoney {
  border-bottom: 1px solid #ccc;
  padding: 20px;
}
.orderMoney strong {
  font-size: 40px;
  font-weight: bold;
}
.btns {
  text-align: left;
}
.toFocus{
  background-color: rgb(103,194,58);
  color:white;
  border-color: white;
}
</style>