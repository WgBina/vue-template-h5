<template>
  <div class="index">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <div class="section">
      <div class="content">
        //

      </div>
    </div>

    <van-tabbar v-model="active" :fixed="false" safe-area-inset-bottom>
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script scoped>
export default {
  name: "index",
  data () {
    return {
        active: 0
    }
  },

  methods: {
    onClickLeft() {
      //
    },
    onClickRight() {
      //
    }
  }
};
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  display: flex;
  flex-direction: column;
  .nav{
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .section{
    flex: 1;
    overflow: auto;
    .content{
      height: 100px;
    }
  }
}
</style>
