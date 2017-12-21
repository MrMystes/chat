<template>
  <div class="chat-wrapper">
    <div class="phone-number">{{phoneNumber}}</div>
    <div class="keyboard">
      <div class="key" v-for="item in keys" @click="phoneNumber+=item">{{item}}</div>
    </div>
    <div class="call">
      <i class="fa fa-phone" aria-hidden="true"></i>

    </div>
    <div class="reduce" @click="reduce()">
      <i class="fa fa-angle-left"></i>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        keys: [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'],
        phoneNumber: ''
      }
    },
    methods: {
      reduce() {
        if (this.phoneNumber.length) {
          this.phoneNumber = this.phoneNumber.slice(0, this.phoneNumber.length - 1)
        }
      }
    }
  }

</script>

<style scoped>
  .chat-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 30px;
  }

  .chat-wrapper .phone-number {
    height: 50px;
  }

  .chat-wrapper .keyboard {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    align-items: center;
  }

  .chat-wrapper .keyboard .key {
    width: 75px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #999;
    margin: 10px;
  }

  .chat-wrapper .call {
    width: 75px;
    height: 75px;
    background: green;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }

  .chat-wrapper .reduce {
    width: 30px;
    height: 30px;
    background: #999;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    top: -65px;
    right: -95px;
  }

</style>
