<template>
  <div class="main-wrapper">
    <router-view class="content"></router-view>
    <div class="footer">
      <div class="item" v-for="item in items" @click="jump(item.name)">
        <i :class="item.icon" aria-hidden="true"></i>
        <span>{{item.content}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        items: [{
          icon: 'fa fa-clock-o',
          content: '最近通话',
          name: 'recentCalls'
        }, {
          icon: 'fa fa-users',
          content: '通讯录',
          name: 'addressList'
        }, {
          icon: 'fa fa-phone',
          content: '拨号键盘',
          name: 'chat'
        }]
      }
    },
    mounted(){
      this.$router.replace({name:'chat'})
    },
    methods:{
      jump(name){
        this.$router.replace({name:name})
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

  .main-wrapper .content {
    flex: 1 1 auto;
  }

  .main-wrapper .footer {
    flex: 0 0 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #999;
    border-top:black 1px solid;
  }

  .main-wrapper .footer .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size:20px;

  }

</style>
