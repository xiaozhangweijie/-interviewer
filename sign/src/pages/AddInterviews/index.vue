<template>
  <div class="wrap">
    <form @submit="submit" report-submit="true">
      <div class="top">面试信息</div>
      <ul>
        <li>
          <span>公司名称</span>
          <input name="company" v-model="company" placeholder="请输入公司名称" />
        </li>
        <li>
          <span>公司电话</span>
          <input name="phone" v-model="phone" placeholder="请输入公司电话" />
        </li>
        <li>
          <span>面试时间</span>
          <picker 
                mode="multiSelector" 
                :range="dateRange"
                :value="info.date" 
                @columnchange="columnChange"
            >
                {{dateShow}}
          </picker>
          <icon @click="showToast" class="tip" type="warn" color="#197DBF" size="20"></icon>
        </li>
        <li>
          <span>面试地点</span>
          <input @tap="serach()" name="address" v-model="address" placeholder="请输入面试地点" />
        </li>
      </ul>
      <div class="top">备注信息</div>
      <textarea  name="test" class="textarea" cols="30" v-model="description" rows="10" placeholder="备注信息(可选,100个字以内)"></textarea>
      <button form-type="submit">确认</button>
    </form>
  </div>
</template>
<script>
import moment from "moment";
import { mapState, mapActions, mapMutations } from "vuex";

const range = [
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
    ['00分','10分','20分','30分','40分','50分']
];
export default {
  props: {},
  components: {},
  data() {
    return {
      info: {
        date: [0, 0, 0]
      },
      company:"",
      phone: "",
      address:"",
      start_time: 1565236800000,
      description: "",
    };
  },
 
  created() {
    // 如果当前时间是十一点之后，过滤掉今天
    if (moment().hour() == 23) {
      this.info.date = [1, 0, 0];
    }
  },
  computed: {
    ...mapState({
      seccessList: state => state.add.seccessList,
      longitude:state=>state.addInterview.longitude,
      latitude:state=>state.addInterview.latitude
      // company: state => state.add.company,
      // phone: state => state.add.phone
    }),
    // 处理面试日期
    dateRange() {
      let dateRange = [...range];
      // 如果时间是今天，过滤掉现在之前的小时
      if (!this.info.date[0]) {
        dateRange[1] = dateRange[1].filter(item => {
          return item > moment().hour();
        });
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
          moment().hour() == 23 ? this.info.date[0] - 1 : this.info.date[0],"d" )
        .add(this.info.date[0]
            ? this.info.date[1] - moment().hour()
            : this.info.date[1] + 1,"h"
        )
        .minute(this.info.date[2] * 10)
        .format("YYYY-MM-DD HH:mm");
    }
  },
  onLoad: function(options) {
    this.address = options.id;
  },
  methods: {
    ...mapActions({
      addData: "add/addData",
      getLocation:'home/getLocation'
    }),
    ...mapMutations({
      initAddInfo: "add/initAddInfo"
    }),
 // 监听多列选择器每列变化
        columnChange(e){
            let {column, value} = e.target;       
            let date = [...this.info.date];
            date[column] = value;
            this.info.date = date;
        },
    //表单
    submit(e) {
      //判断公司名称是否为空
      if (!this.company) {
        wx.showToast({
          title: "请输入公司名称",
          icon: "none"
        });
        return;
      }
      // 判断手机号
      if (!/^1(3|4|5|7|8)\d{9}$/.test(this.phone)) {
        wx.showToast({
          title: "请输入正确的手机号或座机号",
          icon: "none"
        });
        return;
      }
      // 判断面试地址
      if (!this.address) {
        wx.showToast({
          title: "请选择公司地址",
          icon: "none"
        });
        return;
      }
       this.addData({
        company:e.mp.detail.value.company,
        phone:e.mp.detail.value.phone,
        form_id:e.mp.detail.formId,
        address:e.mp.detail.value.address,
        latitude:this.latitude*1,
        longitude:this.longitude*1,
        start_time :moment(this.dateShow).unix() * 1000,
        description:e.mp.detail.value.test
      })
        // wx.navigateTo({
        //         url: "/pages/notBegun/main"
        //       });
        wx.showModal({
          title: "温馨提示",
          content: "添加面试成功",
          success(res) {
            if (res.confirm) {
              wx.navigateTo({
                url: "/pages/notBegun/main"
              });
            } else if (res.cancel) {
            }
          }
        });
    },
    serach() {
      wx.navigateTo({
        url: "/pages/address/main"
      });
    },
    showToast() {
      wx.showToast({
        title: "在面试前一个小时我们会通知你的",
        icon: "none",
        duraton: 2000
      });
    }
  }
};
</script>

<style>
.wrap {
  width: 100%;
  height: 100%;
}
.top {
  width: 100%;
  height: 80rpx;
  line-height: 80rpx;
  background: rgb(238, 234, 234);
  padding: 0 30rpx;
  box-sizing: border-box;
  font-size: 35rpx;
}
form {
  width: 100%;
}
ul {
  width: 100%;
  padding: 0 30rpx;
  box-sizing: border-box;
}
li {
  color: rgb(160, 156, 156);
  font-size: 30rpx;
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(231, 229, 229);
}
li > input,
li > picker {
  padding-left: 60rpx;
}
textarea {
  font-size: 30rpx;
  color: #333;
  width: 690rpx;
  height: 200rpx;
  margin: 30rpx;
  box-sizing: border-box;
  padding: 10rpx;
  border: 1rpx solid silver;
  border-radius: 5rpx;
}
.tip {
  margin-left: 180rpx;
}
button {
  width: 100%;
  height: 100rpx;
  background: #999;
  color: #fff;
  font-weight: 500;
  font-size: 40rpx;
  border-radius: 0;
  margin-top: 50rpx;
  background: #197dbf;
}
button.disable {
  background: #999;
}
</style>
