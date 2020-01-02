<template>
  <div id="app" ref="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',


  computed: {
    container(){
      return this.$refs.container
    }
  },
  methods:{
    /**
     * 兼容内容区域高度
    */
    // 获取可视区高度
    getInnerHeight(){
        let innerHeight = window.innerHeight
        this.container.style.height  = innerHeight +'px'
    },
    //初始化高度
    initContainerH(){
      let that = this
      this.$nextTick(()=>{

        //若无window属性
        if(window.innerHeight){
          setTimeout(()=>{
            that.getInnerHeight()
          })

          //监听窗口变化
          window.onresize= () => {
            that.getInnerHeight()
          }
        }else{
          that.container.style.height  = '100%'
        }
      })
    }

  },
  mounted(){
    this.initContainerH()
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
