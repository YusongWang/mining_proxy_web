<template>
  <div class="dashboard-container">


    <div style="margin-top:30px;"></div>
    <el-row :gutter="40">
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>开启矿池</span>
            </div>
            <div class="text item">{{ overview.proxy_num }}</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>在线矿工</span>
            </div>
            <div class="text item">{{ overview.online }}</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>总算力</span>
            </div>
            <div class="text item">{{ overview.total_hash }}</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>有效比</span>
            </div>
            <div class="text item">{{ overview.rate }}%</div>
          </el-card>
        </div>
      </el-col>


      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>运行时间</span>
            </div>
            <div class="text item">{{ overview.online_time }}</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>版本号</span>
            </div>
            <div class="text item">{{ overview.version }}</div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      overview: {},
      activities: [
        {
          content: "0.2.2 Web界面版本发布",
          timestamp: "2022-02-06",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        // {
        //   content: "支持自定义颜色",
        //   timestamp: "2018-04-03 20:46",
        //   color: "#0bbd87",
        // },
        // {
        //   content: "支持自定义尺寸",
        //   timestamp: "2018-04-03 20:46",
        //   size: "large",
        // },
        // {
        //   content: "默认样式的节点",
        //   timestamp: "2018-04-03 20:46",
        // },
      ],
    };
  },
  created() {
    console.log("created");
    this.loading = true;
    this.$store
      .dispatch("user/dashboard")
      .then((data) => {
        this.loading = false;
        this.overview = data;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>