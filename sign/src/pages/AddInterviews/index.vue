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
        <picker
          mode="multiSelector"
          :range="dateRange"
          :value="info.date"
          @change="dateChange"
          @columnchange="columnChange"
        >
          <view class="date">面试时间：{{dateShow}}</view>
        </picker>
      </div>
      <div class="right">
        <icon type="info" class="icon" @click="btnClick"/>
      </div>
    </div>
    <div class="install">
      <div class="left" @click="clickAddress">面试地址</div>
      <div class="right">
        <input type="text" placeholder="请输入公司地址" v-model="address">
      </div>
    </div>
    <div class="beizhu">
      <p class="title">备注信息</p>
      <textarea class="texts" name id cols="20" rows="30" v-model="textarea">备注信息(可选,100个字以内)</textarea>
      <button class="btn" @click="submit">确认</button>
    </div>
  </div>
</template>

<script>
const moment = require("moment");
const range = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ],
  ["00分", "10分", "20分", "30分", "40分", "50分"]
];
export default {
  data() {
    return {
      info: {
        date: [0, 0, 0]
      }
    };
  },
  methods: {
    //点击确定验证
    submit(e) {
      const url = "../notBegun/main";
      mpvue.navigateTo({ url });
      if (!this.name) {
        wx.showToast({
          title: "请输入公司名称", //提示的内容,
          icon: "none", //图标,
          duration: 2000
        });
        return false;
      }
      // 判断手机号
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.phone)) {
        wx.showToast({
          title: "请输入面试联系人的手机或座机",
          icon: "none",
          duration: 2000
        });
        return false;
      }
      if (!this.address) {
        wx.showToast({
          title: "请选择公司地址",
          icon: "none",
          duration: 2000
        });
        return false;
      }
      if (!this.textarea) {
        wx.showToast({
          title: "请填写备注",
          icon: "none",
          duration: 2000
        });
        return false;
      }
      wx.showModal({
        title: "温馨提示",
        content: "添加面试成功",
        success(res) {
          if (res.name) {
            console.log("用户点击确定", this.name);
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    //icon提示
    iconBtn() {
      wx.showToast({
        title: "成功",
        icon: "success",
        duration: 2000
      });
    },
    //跳转地址
    clickAddress: () => {
      const url = "../address/main";
      mpvue.navigateTo({ url });
    }
  },
  computed: {
    dateRange() {
      let dateRange = [...range];
      // 如果时间是今天，过滤掉现在之前的小时
      if (!this.info.date[0]) {
        dateRange[1] = dateRange[1].filter(item => {
          return item > moment().hour();
        });
      } else {
        dateRange[1] = range[1];
      }
      // 格式化小时
      dateRange[1] = dateRange[1].map(item => {
        return item + "点";
      });
      // 计算当前日期之后的十天
      dateRange[0] = dateRange[0].map(item => {
        return (
          moment()
            .add(item, "days")
            .date() + "号"
        );
      });
      return dateRange;
    },
    // 显示的日期
    dateShow() {
      return moment()
        .add(
          moment().hour() == 23 ? this.info.date[0] - 1 : this.info.date[0],
          "d"
        )
        .add(this.info.date[1] + 1, "h")
        .minute(this.info.date[2] * 10)
        .format("YYYY-MM-DD HH:mm");
    }
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
