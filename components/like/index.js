// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /**
     * 开放的值叫属性
     */
    like:{
      type:Boolean,
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc:'../images/like.png',
    noSrc:'../images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let like = this.properties.like
      let count = this.properties.count
      count = like?count - 1:count + 1
      this.setData({
        count:count,
        like:!like
      })
      /**
       * let 允许声明一个作用域被限制在块级中的变量、语句或表达式
       * 
       * var 声明的变量只能是全局或者整个函数块的
       */
      //激活
      let behavior = this.properties.like?'like':'cancel';
      //激活一个事件 triggerEvent
      this.triggerEvent('like',{
        behavior:behavior
      },{});
    }
  }
})
