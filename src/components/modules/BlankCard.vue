<template>
  <a-card hoverable style="width: 300px">
    <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
    <a-table :columns="columns" :dataSource="data" bordered slot="cover">
      <template slot="name" slot-scope="text">
        <a href="javascript:;">{{text}}</a>
      </template>
      <template slot="action" slot-scope="text, record">
        <span>
          <a href="javascript:;">Action 一 {{record.name}}</a>
          <a-divider type="vertical" />
          <a href="javascript:;">Delete</a>
          <a-divider type="vertical" />
          <a href="javascript:;" class="ant-dropdown-link">
            More actions
            <a-icon type="down" />
          </a>
        </span>
      </template>
    </a-table>
    <a-card-meta>

    </a-card-meta>
    <a-card-meta title="Card title" description="This is the description">
      <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </a-card-meta>
    <template class="ant-card-actions" slot="actions">
      <a-icon type="setting" />
      <a-icon type="edit" />
      <a-icon type="ellipsis" />
    </template>
  </a-card>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
class BlankCard extends Vue {}
export default BlankCard;
</script>

<style lang='scss' scoped>
</style>
