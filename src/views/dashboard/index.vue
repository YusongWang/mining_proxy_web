<template>
  <div class="dashboard-container">
    <el-alert
      title="欢迎报告Bug及文字错误。你每报告一个Bug。软件就离你心目中最好的软件又走近了一步！！！ "
      type="info"
    >
    </el-alert>

    <div style="margin-top:30px;"></div>
    <el-row :gutter="40">
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>矿池开启数量</span>
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
              <span>中转算力</span>
            </div>
            <div class="text item">{{ overview.total_hash }}</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>抽水算力</span>
            </div>
            <div class="text item">{{ overview.fee_hash }}</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>接受百分比</span>
            </div>
            <div class="text item">{{ overview.rate }}%</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>抽水百分比</span>
            </div>
            <div class="text item">{{ overview.share_rate }}%</div>
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

    <el-row :gutter="40" style="margin-top: 50px">
      <el-col :span="18">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>抽水说明</span>
            </div>
            <div class="text item">
              <p>1、纯转发不抽水</p>
              <p>
                2、如何查看我当前给开发者抽水了多少M算力? 点击以下链接进入开发者钱包
                <ul>

                  <li>               <el-link
                  type="primary"
                  href="https://www.ethermine.org/miners/3602b50d3086edefcd9318bcceb6389004fb14ee/dashboard"
                  target="_blank"
                  >ETH</el-link
                ></li>

                <li>                <el-link
                  type="primary"
                  href="https://www.ethermine.org/miners/3602b50d3086edefcd9318bcceb6389004fb14ee/dashboard"
                  target="_blank"
                  >ETC</el-link
                ></li>

                <li>                <el-link
                  type="primary"
                  href="https://www.ethermine.org/miners/3602b50d3086edefcd9318bcceb6389004fb14ee/dashboard"
                  target="_blank"
                  >CFX</el-link
                ></li>
                </ul>
                进入之后进入旷工列表。按ctrl+f 输入你的代理服务器机器名称.
                你的名称为:
              </p>
              <p style="color: red">{{ overview.develop_worker_name }}</p>
              <p>
                即可看到开发者抽了多少M，绝对无暗抽。如果遇到抽水比例不正常的。一般是机器名称和其他人重复了。如果纠结开发者抽水多少可以换个唯一的机器名称。
              </p>
              <p>
                当前抽水比例为阶梯.最低0.1%,最高0.3%.
                根据你设定的抽水比例抽的。你设置1%以下开发者都抽0.1%,如果设置
                3%，开发者抽0.3%。 3%以上都是0.3%
              </p>

              <h5>交流群：</h5>

              <ul>
                <li>
                  <el-link
                    type="primary"
                    href="https://github.com/dothinkdone/mining_proxy"
                    target="_blank"
                    >github</el-link
                  >
                </li>
                <li>
                  <el-link
                    type="primary"
                    href="https://t.me/+ZkUDlH2Fecc3MGM1"
                    target="_blank"
                    >TG 小飞机群组</el-link
                  >
                </li>

                <li>QQ群: 724855814</li>

                <li>开发者微信: newweilai</li>
              </ul>
            </div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>更新日志</span>
            </div>
            <div class="text item">
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
      overview: {},
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



// accept_index: 0
// config: {name: "proxy", log_level: 6, log_path: "", ssl_port: 8443, tcp_port: 14444, encrypt_port: 14444,…}
// develop_worker_name: "develop_YusongdeMac-mini.local"
// fee_accept_index: 0
// fee_hash: "0 B"
// fee_reject_index: 0
// fee_share_index: 0
// online: 0
// proxy_num: 0
// rate: 0
// reject_index: 0
// share_index: 0
// share_rate: 0
// total_hash: "0 B"
// version: "0.2.2"