<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="form.name" />
      </el-form-item>
            <el-form-item label="TCP端口">
        <el-input v-model="form.tcp_port" type="number"/>
      </el-form-item>
            <el-form-item label="SSL端口">
        <el-input v-model="form.ssl_port" type="number"/>
      </el-form-item>

      <el-form-item label="加密端口">
        <el-input v-model="form.encrypt_port" type="number" />
      </el-form-item>

      <el-form-item label="需要代理的矿池地址">
        <el-input v-model="form.pool_address" />
      </el-form-item>

      <el-form-item label="抽水模式">
          <el-select type="number" v-model="form.share" placeholder="抽水模式">
            <el-option label="不抽水" value="0" />
            <el-option label="按百分比抽水" value="1" />
            <el-option label="抽百分百(统一钱包)" value="2" />
          </el-select>
      </el-form-item>

      <el-form-item label="抽水矿池">
        <el-input v-model="form.share_address"/>
      </el-form-item>

      <el-form-item label="抽水钱包">
        <el-input v-model="form.share_wallet" />
      </el-form-item>

      <el-form-item label="抽水比例%">
        <el-input v-model="form.share_rate" type="number"/>
      </el-form-item>

      <el-form-item label="加密协议key">
        <el-input v-model="form.key" />
      </el-form-item>

      <el-form-item label="加密协议向量偏移">
        <el-input v-model="form.iv" />
      </el-form-item>



      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      form: {
        name: '',
        tcp_port:0,
        ssl_port:0,
        encrypt_port:0,
        pool_address:'',
        share:0,
        share_address:'',
        share_rate:1,
        share_wallet:'',
        key : '',
        iv:'',
      }
    }
  },
  methods: {
    onSubmit() {
      this.loading = true
      this.$store.dispatch('user/create_proxy', this.form).then(() => {
          //this.$router.push({ path: this.redirect || '/' })
          this.loading = false
        }).catch(() => {
          this.loading = false
        })
      //let res = await crate_proxy(this.form)
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
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