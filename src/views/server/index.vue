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
              <div slot="header" class="clearfix">
                <span>在线矿工</span>
              </div>
              <div class="text item">{{ current_server.online }}</div>
            </el-card>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>总算力</span>
              </div>
              <div class="text item">{{ current_server.total_hash }}</div>
            </el-card>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>总/接受/拒绝/百分比</span>
              </div>
              <div class="text item">
                {{ current_server.accept_index }}/{{
                  current_server.share_index
                }}/{{ current_server.reject_index }}/{{ current_server.rate }}%
              </div>
            </el-card>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>抽水份额/百分比</span>
              </div>
              <div class="text item">
                {{ current_server.fee_share_index }}/{{
                  current_server.share_rate
                }}%
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <div style="margin-top: 30px"></div>

      <el-row :gutter="40">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>抽水算力(预估)</span>
              </div>
              <div class="text item">
                {{ current_server.fee_hash }}/{{
                  current_server.config.share_rate * 100
                }}%
              </div>
            </el-card>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>端口TCP/SSL/加密</span>
              </div>
              <div class="text item">
                {{ current_server.config.tcp_port }}/{{
                  current_server.config.ssl_port
                }}/{{ current_server.config.encrypt_port }}
              </div>
            </el-card>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>运行模式</span>
              </div>
              <div class="text item">
                <div v-if="current_server.config.share == 0">纯中转</div>
                <div v-if="current_server.config.share == 1">按比例抽水</div>
                <div v-if="current_server.config.share == 2">统一钱包</div>
              </div>
            </el-card>
          </div>
        </el-col>

        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>池</span>
              </div>
              <div class="text item">
                <div>{{ current_server.config.pool_address[0] }}</div>
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
        <el-table-column label="矿工名" align="center" width="400">
          <template slot-scope="scope">
            {{ scope.row.worker_name }}
          </template>
        </el-table-column>
        <el-table-column label="报告算力" width="160" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.hash }}</span>
          </template>
        </el-table-column>
        <el-table-column label="总工作份额" width="160" align="center">
          <template slot-scope="scope">
            {{ scope.row.share_index }}
          </template>
        </el-table-column>
        <el-table-column
          class-name="status-col"
          label="接受份额"
          width="160"
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
          width="160"
        >
          <template slot-scope="scope">
            <i class="el-icon-time" />
            <span>{{ scope.row.invalid_index }}</span>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="created_at"
          label="抽水份额"
          width="160"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.fee_accept_index }}</span>
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
      select_server_name: "",
      listLoading: false,
      current_server: {
        config: {},
        workers: [],
      },
    };
  },
  created() {
    this.loading = true;
    this.$store
      .dispatch("user/server_list")
      .then((data) => {
        this.loading = false;
        this.list = data;
        this.select_server_name = data[0];
        this.handleSelect(data[0], "");
        this.activeIndex = data[0];
      })
      .catch((e) => {
        console.log(e);
        this.loading = false;
      });

    setInterval(() => {
      this.$store
        .dispatch("user/server", this.select_server_name)
        .then((data) => {
          this.current_server = data;
        })
        .catch(() => {});
    }, 1000 * 30);
  },
  methods: {
    handleSelect(key, keyPath) {
      this.loading = true;
      this.$store
        .dispatch("user/server", key)
        .then((data) => {
          //this.$router.push({ path: this.redirect || '/' })
          this.loading = false;
          this.current_server = data;
          this.select_server_name = key;
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