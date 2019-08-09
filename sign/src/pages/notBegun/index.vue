<template>
  <div class="counter-warp">
    <ul>
      <li
        v-for="(item,index) in list"
        :key="index"
        @click="tab(index)"
        :class="ind===index? 'active':null"
      >{{item}}</li>
    </ul>
    <section v-if="listt.length">
      <div class="dls" v-for="(item,index) in listt" :key="index" @click="detail(item.id)">
        <div>
          <h3>{{item.company}}</h3>
          <span class="start">{{item.status===-1?"未开始":item.status===0?"已打卡":item.status===1?"已放弃":null}}</span>
        </div>
        <div>{{item.address.address}}</div>
        <div>
          <span>面试时间{{item.start_time}}</span>
          <span class="end">{{item.remind===-1?"未提醒":item.remind===0?"已提醒":item.remind===1?"取消提醒":null}}</span>
        </div>
      </div>
    </section>
    <div v-else class="none">当前分类还没有面试！</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      list: ["未开始", "已打卡", "已放弃", "全部"],
      ind: 0
    };
  },
  computed: {
    ...mapState({
      listt: state => state.tab.list
    })
  },
  methods: {
    ...mapActions({
      location: "tab/getLocation"
    }),
    tab(index) {
      this.ind = index;
      if (index === 0) {
        this.location({ status: -1 });
      } else if (index === 1) {
        this.location({ status: 0 });
      } else if (index === 2) {
        this.location({ status: 1});
      } else {
        this.location();
      }
    },detail(id){
       wx.navigateTo({
       url:"/pages/baidu/main?id="+id
     })
    }
  },
  created() {
    this.tab(0);
    //this.location({status:1})
  }
};
</script>

<style lang="scss">
.counter-warp {
  width: 100%;
  height: 100%;
  background: #eee;
  display: flex;
  flex-direction: column;
}
ul {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  justify-content: space-around;
  background: #fff;
  border-top: 1px solid #eee;
  .active {
    border-bottom: 1px solid blue;
  }
}
section {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.dls {
  margin-top: 3%;
  width: 100%;
 // height: 126px;
  background: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  > div:nth-child(1) {
    h3 {
      font-size: 20px;
    }
    .start {
      background: #eee;
      font-size: 12px;
      color: #ccc;
      padding: 5px 5px;
      box-sizing: border-box;
    }
  }
  > div:nth-child(2) {
    color: #ccc;
    font-size: 14px;
    display:flex;
  }
  > div:nth-child(3) {
    span:nth-child(1) {
      font-size: 14px;
    }
    .end {
      background: rgb(253, 239, 240);
      color: mediumvioletred;
      font-size: 14px;
      padding: 3px 5px;
      box-sizing: border-box;
    }
  }
  > div {
    padding: 10px 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
}
.none{
  text-align: center;
  background:#fff;
  width:100%;
  height:100%;
}
</style>
