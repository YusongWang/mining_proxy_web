<template>
  <div class="dashboard-container">
    <el-row :gutter="40">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
          <h3>在线矿工</h3>
          </el-card>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
          <h3>总代理算力</h3>
          </el-card>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
          <h3>服务个数</h3>
          </el-card>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
          <h3>报告抽水算力(预估)</h3>
          </el-card>
        </div>
      </el-col>
    </el-row>

     <el-row :gutter="40" style="margin-top:50px;">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
          <h3>总代理份额/接受份额/拒绝份额/接受百分比</h3>
          </el-card>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
          <h3>总代理抽水份额/抽水百分比</h3>
          </el-card>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
          <h3>抽水说明</h3>
          </el-card>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <h3>更新日志</h3>
            <div class="block">
              <el-timeline>
                <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :icon="activity.icon"
                  :type="activity.type"
                  :color="activity.color"
                  :size="activity.size"
                  :timestamp="activity.timestamp"
                >
                  {{ activity.content }}
                </el-timeline-item>
              </el-timeline>
            </div>
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
      activities: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          size: "large",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
        },
      ],
    };
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
