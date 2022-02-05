<template>
  <div class="app-container">
    <div id="Design" style="margin-top: 40px">
      <el-form ref="form" :model="form" label-width="300px">
        <el-row>
          <el-col :span="12" :offset="6" v-if="active == 1">
            <el-alert
              title="注： 统一钱包功能说明：支持不通矿池不同内核代理到一个矿池的一个钱包 等于抽百分之百)"
              type="info"
            ></el-alert>
            <div style="margin: 30px"></div>

            <el-form-item label="代理币种">
              <el-select v-model="form.coin" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="中转模式">
              <el-select v-model="form.share" placeholder="请选择">
                <el-option value="0" selected label="纯中转模式"> </el-option>
                <el-option value="1" label="按比例抽水"> </el-option>
                <el-option value="2" label="统一钱包"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="服务名称（抽水矿工名全英文）">
              <el-input v-model="form.name" value="ProxyFee" />
            </el-form-item>

            <el-form-item label="代理矿池地址(格式tcp://IP:端口)">
              <el-input v-model="form.pool_address" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="next1">下一步</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="6" v-if="active == 2">
            <el-alert
              title="注： 端口设置为0即不开启此端口"
              type="info"
            ></el-alert>
            <div style="margin: 30px"></div>

            <!-- 矿池端口设置 -->
            <el-form-item label="TCP端口">
              <el-input v-model="form.tcp_port" type="number" />
            </el-form-item>

            <el-form-item label="SSL端口">
              <el-input v-model="form.ssl_port" type="number" />
            </el-form-item>

            <el-form-item label="加密端口">
              <el-input v-model="form.encrypt_port" type="number" />
            </el-form-item>
            <el-form-item label="加密协议key">
              <el-input v-model="form.key" />
            </el-form-item>

            <el-form-item label="加密协议向量偏移">
              <el-input v-model="form.iv" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="next2">下一步</el-button>
              <el-button @click="prev">上一步</el-button>
            </el-form-item>
          </el-col>

          <el-col :span="12" :offset="6" v-if="active == 3">
            <!-- 抽水钱包设置 -->
            <el-form-item label="抽水矿池(格式tcp://IP:端口)">
              <el-input v-model="form.share_address" />
            </el-form-item>

            <el-form-item label="抽水钱包(包含0x部分)">
              <el-input v-model="form.share_wallet" />
            </el-form-item>

            <el-form-item label="抽水百分比(0-100%) 支持一位小数">
              <el-input v-model="form.share_rate" type="float" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="next3">下一步</el-button>
              <el-button @click="prev">上一步</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="12" :offset="6" v-if="active == 4"> 4 </el-col>
        </el-row>
      </el-form>
      <div style="margin-top: 100px"></div>
      <el-steps
        :active="active"
        align-center
        finish-status="success"
        process-status="wait"
        class="m-b-10"
      >
        <el-step title="基础设置"></el-step>
        <el-step title="端口设置"></el-step>
        <el-step title="抽水设置"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      options: [
        {
          label: "ETH",
          value: "ETH",
        },
        {
          label: "ETC",
          value: "ETC",
        },
        {
          label: "CFX",
          value: "CFX",
        },
      ],
      form: {
        name: "MiningProxy",
        coin: undefined,
        tcp_port: 0,
        ssl_port: 0,
        encrypt_port: 0,
        pool_address: "",
        share: undefined,
        share_address: "",
        share_rate: 0,
        share_wallet: "",
        key: "523B607044E6BF7E46AF75233FDC1278B7AA0FC42D085DEA64AE484AD7FB3664",
        iv: "275E2015B9E5CA4DDB87B90EBC897F8C",
      },
    };
  },
  methods: {
    // 步骤条上一步
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    next1() {
      if (this.form.coin == undefined) {
        this.$message("中转币种未填写");
        return false;
      }

      if (this.form.share == undefined) {
        this.$message("代理模式未选择");
        return false;
      }

      if (this.form.name == "") {
        this.$message("服务名称未填写");
        return false;
      }

      if (this.form.pool_address == "") {
        this.$message("代理矿池地址未填写");
        return false;
      }

      if (this.active++ > 2) this.active = 0;
    },
    next2() {
      if (
        this.form.tcp_port == 0 &&
        this.form.ssl_port == 0 &&
        this.form.encrypt_port == 0
      ) {
        this.$message("代理服务必须开启一个端口，不可能全部关闭");
        return false;
      }

      if (this.form.key == "") {
        this.$message(
          "秘钥必须设置，如果不使用加密协议。也必须设置，随便填些什么把"
        );
        return false;
      }

      if (this.form.iv == "") {
        this.$message(
          "向量必须设置，如果不使用加密协议。也必须设置，随便填些什么把"
        );
        return false;
      }
      if (this.form.share == 0) {
        this.loading = true;
        this.$store
          .dispatch("user/create_proxy", this.form)
          .then((data) => {
            console.log("then");
            console.log(data);
            this.$router.push({ path: "/server/server" });
            this.loading = false;
            if (data.code == 20000) {
              this.active = 3;
            }
          })
          .catch((err) => {
            console.log(err);
            this.loading = false;
          });
      } else {
        if (this.active++ > 3) this.active = 0;
      }
    },
    next3() {
      this.loading = true;
      this.$store
        .dispatch("user/create_proxy", this.form)
        .then(() => {
          this.$router.push({ path: "/server/server" });
          this.loading = false;

          if (this.active++ > 3) this.active = 3;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    prev() {
      this.active--;
    },
    // onSubmit() {
    //   this.loading = true;
    //   this.$store
    //     .dispatch("user/create_proxy", this.form)
    //     .then(() => {
    //       //this.$router.push({ path: this.redirect || '/' })
    //       this.loading = false;
    //     })
    //     .catch(() => {
    //       this.loading = false;
    //     });
    // },
    // onCancel() {
    //   this.$message({
    //     message: "cancel!",
    //     type: "warning",
    //   });
    // },
  },
};
</script>

<style scoped>
.line {
  text-align: center;
}
</style>


// name: "proxy"
// log_level: 0
// log_path: "logs"
// ssl_port: 3333
// tcp_port: 3331
// encrypt_port: 3332
// pool_address: 
//   - "tcp://127.0.0.1:8888"
// share_address: 
//   - "tcp://127.0.0.1:8888"
// share_wallet: "0xb0B91c95D2D0ebD0C85bA14B0547668a198b9dbD"
// share_name: "eth_test_miner"
// share_rate: 0.1
// share: 1
// share_alg: 1
// p12_path: "./identity.p12"
// p12_pass: "mypass"
// key: "523B607044E6BF7E46AF75233FDC1278B7AA0FC42D085DEA64AE484AD7FB3664"
// iv: "275E2015B9E5CA4DDB87B90EBC897F8C"



      // <el-form-item label="名称">
      //   <el-input v-model="form.name" />
      // </el-form-item>
      // <el-form-item label="名称">
      //   <el-input v-model="form.name" />
      // </el-form-item>

      // <el-form-item label="Activity zone">
      //   <el-select v-model="form.region" placeholder="please select your zone">
      //     <el-option label="Zone one" value="shanghai" />
      //     <el-option label="Zone two" value="beijing" />
      //   </el-select>
      // </el-form-item>
      // <el-form-item label="Activity time">
      //   <el-col :span="11">
      //     <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%;" />
      //   </el-col>
      //   <el-col :span="2" class="line">-</el-col>
      //   <el-col :span="11">
      //     <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
      //   </el-col>
      // </el-form-item>
      // <el-form-item label="Instant delivery">
      //   <el-switch v-model="form.delivery" />
      // </el-form-item>
      // <el-form-item label="Activity type">
      //   <el-checkbox-group v-model="form.type">
      //     <el-checkbox label="Online activities" name="type" />
      //     <el-checkbox label="Promotion activities" name="type" />
      //     <el-checkbox label="Offline activities" name="type" />
      //     <el-checkbox label="Simple brand exposure" name="type" />
      //   </el-checkbox-group>
      // </el-form-item>
      // <el-form-item label="Resources">
      //   <el-radio-group v-model="form.resource">
      //     <el-radio label="Sponsor" />
      //     <el-radio label="Venue" />
      //   </el-radio-group>
      // </el-form-item>
      // <el-form-item label="Activity form">
      //   <el-input v-model="form.desc" type="textarea" />
      // </el-form-item>




      //  <el-form ref="form" :model="form" label-width="120px">
      //   <el-form-item label="名称">
      //     <el-input v-model="form.name" />
      //   </el-form-item>
      //   <el-form-item label="TCP端口">
      //     <el-input v-model="form.tcp_port" type="number" />
      //   </el-form-item>

      //   <el-form-item label="SSL端口">
      //     <el-input v-model="form.ssl_port" type="number" />
      //   </el-form-item>

      //   <el-form-item label="加密端口">
      //     <el-input v-model="form.encrypt_port" type="number" />
      //   </el-form-item>

      //   <el-form-item label="需要代理的矿池地址">
      //     <el-input v-model="form.pool_address" />
      //   </el-form-item>

      //   <el-form-item label="抽水模式">
      //     <el-select type="number" v-model="form.share" placeholder="抽水模式">
      //       <el-option label="不抽水" value="0" />
      //       <el-option label="按百分比抽水" value="1" />
      //       <el-option label="抽百分百(统一钱包)" value="2" />
      //     </el-select>
      //   </el-form-item>

      //   <el-form-item label="抽水矿池">
      //     <el-input v-model="form.share_address" />
      //   </el-form-item>

      //   <el-form-item label="抽水钱包">
      //     <el-input v-model="form.share_wallet" />
      //   </el-form-item>

      //   <el-form-item label="抽水比例%">
      //     <el-input v-model="form.share_rate" type="number" />
      //   </el-form-item>

      //   <el-form-item label="加密协议key">
      //     <el-input v-model="form.key" />
      //   </el-form-item>

      //   <el-form-item label="加密协议向量偏移">
      //     <el-input v-model="form.iv" />
      //   </el-form-item>

      //   <el-form-item>
      //     <el-button type="primary" @click="onSubmit">Create</el-button>
      //     <el-button @click="onCancel">Cancel</el-button>
      //   </el-form-item>
      // </el-form>