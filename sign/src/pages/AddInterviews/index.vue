<template>
  <div class="counter-warp">
    <p class="title">面试信息</p>
    <div class="install">
      <div class="left">公司名称</div>
      <div class="right">
        <input type="text" placeholder="请输入公司名称" v-model="name">
      </div>
    </div>
    <div class="install">
      <div class="left">公司电话</div>
      <div class="right">
        <input type="text" placeholder="请输入面试联系人电话" v-model="phone">
      </div>
    </div>
    <div class="install">
      <div class="left">
       面试时间
      </div>
      <div class="right"> <picker class="picker" mode="date" value="time" start="09:01" end="21:01" @change="bindTimeChange">
                    <view class="picker">
                        {{time}}
                    </view>
                </picker></div>
    </div>
    <div class="install">
      <div class="left" @click="clickAddress">面试地址</div>
      <div class="right">
        <input type="text" placeholder="请输入公司地址"  v-model="address">
      </div>
    </div>
    <div class="beizhu">
      <p class="title">备注信息</p>
      <textarea class="texts" name id cols="20" rows="30" v-model="textarea">备注信息(可选,100个字以内)</textarea>
      <button class="btn" @click="submit" >确认</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
     return {
            firmName:'',
            time: new Date().toLocaleDateString().replace(/\//g,'-'),
        }

  },
  computed: {
    count() {}
  },
  methods: {
    //点击确定验证
    submit(e) {
      console.log(this.name);
      if (!this.name) {
        wx.showToast({
          title: "请输入公司名称", //提示的内容,
          icon: "none" //图标,
        });
        return false;
      }
      // 判断手机号
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.phone)) {
        wx.showToast({
          title: "请输入面试联系人的手机或座机",
          icon: "none"
        });
        return false;
      }
      if (!this.address) {
        wx.showToast({
          title: "请选择公司地址",
          icon: "none"
        });
        return false;
      }
        if (!this.textarea) {
        wx.showToast({
          title: "请填写备注",
          icon: "none"
        });
        return false;
      }
      
      console.log(1)
    },

    //跳转地址
    clickAddress: () => {
      const url = "../address/main";
      mpvue.navigateTo({ url });
    },
      bindTimeChange(e) {
            this.time = e.mp.detail.value
      },

  }
};
</script>

<style scoped>
.counter-warp {
  width: 100%;
  height: 100%;
}
.title {
  padding: 0 15px;
  width: 100%;
  height: 30px;
  background: #eee;
  line-height: 30px;
}
.install {
  margin-top: 20px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #eee;
  color: #666666;
  padding: 5px 0;
}
.left {
  margin-left: 15px;
}
.right {
  margin-left: 20px;
}
.beizhu {
  margin-top: 15px;
  padding: 10px 0;
}
.texts {
  height: 100px;
  margin-top: 15px;
  margin-left: 35px;
  border: 1px solid #ccc;
}
.btn {
  background: #868686;
  margin-top: 15px;
  color: #fff;
}
</style>
