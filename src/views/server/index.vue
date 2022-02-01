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
    <el-alert title="注： " type="info"> </el-alert>
    <!-- <div>
      {{current_server.online}}
      {{current_server.config.name}}
    </div> -->


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
      <el-table-column class-name="status-col" label="接受份额" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.accept_index }}
        </template>
      </el-table-column>

      <el-table-column align="center" prop="created_at" label="拒绝份额" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.invalid_index }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "1",
      list: ["22220", "22005"],
      listLoading: false,
      current_server: {
        'config':{},
        'workers':[]
      },
    };
  },
  onMounted() {
    console.log("init");
  },
  methods: {
    handleSelect(key, keyPath) {
      //console.log(key, keyPath);
      // let a = await getServerInfo(key);
      // console.log(a);
      this.loading = true;
      this.$store
        .dispatch("user/server_list", key)
        .then((data) => {
          //this.$router.push({ path: this.redirect || '/' })
          this.loading = false
          console.log(data)
          this.current_server = data

          this.current_server
        })
        .catch(() => {
          this.loading = false
        });

      this.$message("submit!");
    },
    onCancel() {
      console.log("onCancel");
    },
  },
};
</script>