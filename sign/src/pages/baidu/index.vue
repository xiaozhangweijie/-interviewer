<template>
  <div>
    <ul class="list">
      <li>
        <span>面试地址:</span>
        <span>{{info.address&&info.address.address}}</span>
      </li>
      <li>
        <span>面试时间:</span>
        <span>{{info.start_time}}</span>
      </li>
      <li>
        <span>联系方式:</span>

        <span>{{info.phone}}</span>
      </li>
      <li>
        <span>是否提醒:</span>

        <span>{{info.remind===-1?"未提醒":info.remind===0?"已提醒":info.remind===1?"取消提醒":null}}</span>
      </li>
      <li>
        <span>面试状态:</span>

        <span>{{info.status===-1?"未开始":info.status===0?"已打卡":info.status===1?"已放弃":null}}</span>
      </li>
      <li :class="info.status===1?'active':null">
        <span>取消提醒:</span>
        <switch @change="mess" :checked="info.remind===1"></switch>
      </li>
    </ul>
    <div class="btn" :class="info.status===1?'active':null">
      <button @click="givecord">去打卡</button>
      <button @click="giveup">放弃面试</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      id: null
    };
  },
  computed: {
    ...mapState({
      info: state => state.tab.info,
      updata: state => state.tab.updata
    })
  },
  methods: {
    ...mapActions({
      location: "tab/getSigndetail",
      update: "tab/update",
      getList: "tab/getLocation"
    }),
    giveup() {
      wx.showModal({
        title: "温馨提示", //提示的标题,
        content: "确定要放弃本次面试吗?", //提示的内容,
        success: async res => {
          if (res.confirm) {
            await this.update({
              id: this.id,
              params: { status: 1 }
            });
          }
          this.location(this.id);
          this.getList({ status: -1 });
        }
      });
    },
    mess(e) {
      this.update({
        id: this.id,
        params: { remind: e.target.value ? 1 : -1 }
      });
    },
    givecord() {
      wx.navigateTo({
        url: "/pages/sign/main?id=" + this.id
      });
    }
  },
  onLoad(options) {
    this.id = options.id;
    console.log(this.id);
    this.location(this.id);
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.list {
  width: 100%;
  li {
    height: 44px;
    line-height: 44px;
    border-top: 1px solid #eee;
    display: flex;
  }
  .active {
    display: none;
  }
  span:nth-child(1) {
    line-height: 44px;
  }
  span:nth-child(2) {
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.btn {
  width: 100%;
  display: flex;
  button {
    width: 45%;
  }
  button:nth-child(1) {
    background: blue;
    color: #fff;
  }
  button:nth-child(2) {
    background: red;
    color: #fff;
  }
}
.active {
  display: none;
}
</style>