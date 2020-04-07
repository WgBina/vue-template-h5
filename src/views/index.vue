<template>
  <div class='index'>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script scoped>
export default {
  name:'index',

  methods:{
    onClickLeft(){
      //
    },
    onClickRight(){
      //
    }
  }
}
</script>


<style lang="scss" scoped>
  .index{
    height: 100%;
    display: flex;
    flex-direction: column;
  }

</style>
