<template>
    <div>
        <Navigation/>
        <div class="container">
            <el-row class="first-line">
                <el-col :span="24">
                    <Breadcrumb></Breadcrumb>
                </el-col>
            </el-row>
            <el-row class="second-line">
                <el-col :span="24">
                    <gymInfo :like='like' :gymId='gymId' :imgSrc='imgSrc' :title='title' :info='info'  class="imgBox"/> 
                </el-col>
            </el-row>
            <el-row class="third-line">
                <el-col :span="24">
                    <tabs>
                        <tab name="预定" selected="true">
                            <stockList @sessionDateChange="onSessionDateChange"/>
                            <el-row class="fourth-line">
                                <sitesTable :title='title' :date='date'></sitesTable>
                            </el-row>
                        </tab>
                        <tab name="场馆介绍" ></tab>
                    </tabs>
                </el-col>
            </el-row>
        </div>

    </div>

</template>


<script>
import Breadcrumb from '../../common/breadcrumb'
import gymInfo from '../../common/gymInfo'
import stockList from '../../common/stockList.vue'
import sitesTable from '../../common/sitesTable'
import imgSrc from "./../../assets/100001.jpg"
import tabs from '../../common/tabs/tabs'
import tab from '../../common/tabs/tab'
import Navigation from '../../common/navigation'

export default {
    data(){
        return{
            date:'',
            imgSrc: imgSrc,
            title:'南校园英东羽毛球场',
            info:'中山大学英东体育馆羽毛球场位于英东体育馆内，共有8片球场，与排球共用。英东羽毛球场开放时间从8：00至22：00时，非排球训练和体育教学时段均可定场，全天收费。',
            gymId:3,
            like:this.$store.getters.getUserLike.like//取得该用户的关注信息
        }
    },
    components:{
        Breadcrumb,
        gymInfo,
        // SidebarOrder,
        stockList,
        sitesTable,
        tabs,
        tab,
        Navigation
    },
    mounted:function(){
        this.$store.dispatch('putGymSideInfo')
        console.log(this.$store.getters.getGymSideInfo)
    },
    methods: {
      onSessionDateChange: function(date) {
       this.date = date;
      }
    }

}
</script>

<style scoped>
.container{
    margin: 0 auto;
    padding: 0;
    width:1024px;
}
.first-line{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #999;
}
.second-line{
    height: 150px;
}
.fourth-line{
    margin-top: 40px;
}
.imgBox>img{
    width: 100%;
}

</style>
