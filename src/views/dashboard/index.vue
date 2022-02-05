<template>
  <div class="dashboard-container">
    <el-row :gutter="40">
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>在线矿工</span>
            </div>
            <div class="text item">123123123</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>中转算力</span>
            </div>
            <div class="text item">123123123</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>矿池开启数量</span>
            </div>
            <div class="text item">123123123</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>抽水算力</span>
            </div>
            <div class="text item">123123123</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>接受百分比</span>
            </div>
            <div class="text item">123123123</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>抽水百分比</span>
            </div>
            <div class="text item">123123123</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>开发者百分比</span>
            </div>
            <div class="text item">123123123</div>
          </el-card>
        </div>
      </el-col>

      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>版本号</span>
            </div>
            <div class="text item">123123123</div>
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
                2、如何查看我当前给开发者抽水了多少M算力? 点击开发者
                <el-link
                  type="primary"
                  href="https://www.ethermine.org/miners/3602b50d3086edefcd9318bcceb6389004fb14ee/dashboard"
                  target="_blank"
                  >开发者矿池钱包</el-link
                >
                进入之后进入旷工列表。按ctrl+f 输入你的代理服务器机器名称.
                你的名称为:
              </p>
              <p>{{ name }}</p>
              <p>
                即可看到开发者抽了多少M，绝对无暗抽。如果遇到抽水比例不正常的。一般是机器名称和其他人重复了。如果纠结开发者抽水多少可以换个唯一的机器名称。
              </p>
              <p>
                当前抽水比例为阶梯.最低0.1%,最高0.3%.
                根据你设定的抽水比例抽的。你设置1%以下开发者都抽0.1%,如果设置
                3%，开发者抽0.3%。 3%以上都是0.3%
              </p>

              <h5>交流群：</h5>
              <el-link
                type="primary"
                href="https://github.com/dothinkdone/mining_proxy"
                target="_blank"
                >github</el-link
              >
              </br>
              <el-link
                type="primary"
                href="https://t.me/+ZkUDlH2Fecc3MGM1"
                target="_blank"
                >TG 小飞机群组</el-link
              ></br>
              <p>QQ群: 724855814</p>
              <el-lini>开发者微信: newweilai</el-lini>
              <p>
                欢迎报告Bug及文字错误。你每报告一个Bug。软件就离你心目中最好的软件又走近了一步！！！
              </p>
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
      name: "Dashboard",
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
