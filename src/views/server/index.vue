<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item v-for="(item, id) in list" :key="id" v-bind:index="item">
        {{ item }}
      </el-menu-item>
    </el-menu>
    <div class="dashboard-container">
      <div style="margin-top: 30px"></div>
      <!-- <el-alert title="注： " type="info"> </el-alert> -->
      <!-- <div>
      {{current_server.online}}
      {{current_server.config.name}}
    </div> -->
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

      <el-row :gutter="40" style="margin-top: 50px">
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

      <div style="margin-top: 30px"></div>
      <el-table
        v-loading="listLoading"
        :data="current_server.workers"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" label="钱包">
          <template slot-scope="scope">
            {{ scope.row.worker_wallet }}
          </template>
        </el-table-column>
        <el-table-column label="矿工名">
          <template slot-scope="scope">
            {{ scope.row.worker_name }}
          </template>
        </el-table-column>
        <el-table-column label="报告算力" width="110" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.hash }}</span>
          </template>
        </el-table-column>
        <el-table-column label="总工作份额" width="110" align="center">
          <template slot-scope="scope">
            {{ scope.row.share_index }}
          </template>
        </el-table-column>
        <el-table-column
          class-name="status-col"
          label="接受份额"
          width="110"
          align="center"
        >
          <template slot-scope="scope">
            {{ scope.row.accept_index }}
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="created_at"
          label="拒绝份额"
          width="200"
        >
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span>{{ scope.row.invalid_index }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "1",
      list: [],
      listLoading: false,
      current_server: {
        config: {},
        workers: [],
      },
    };
  },
  created() {
    console.log("init");
    this.loading = true;
    this.$store
      .dispatch("user/server_list")
      .then((data) => {
        this.loading = false;
        this.list = data;
        this.handleSelect(data[0], "");
        this.activeIndex = data[0];
      })
      .catch(() => {
        this.loading = false;
      });
  },
  methods: {
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
      // let a = await getServerInfo(key);
      // console.log(a);
      this.loading = true;
      this.$store
        .dispatch("user/server", key)
        .then((data) => {
          //this.$router.push({ path: this.redirect || '/' })
          this.loading = false;
          this.current_server = data;
        })
        .catch(() => {
          this.loading = false;
        });
      //this.$message("submit!");
    },
    onCancel() {
      console.log("onCancel");
    },
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