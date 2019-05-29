<template>
  <a-card loading="true" hoverable style="width: 300px">
    <template class="ant-card-actions" slot="title">
      <a-icon type="setting" />
      <span>我的肥宅生活</span>
    </template>
    <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" slot="cover" />
    <a-table :columns="columns" :dataSource="data" :pagination="false" slot="cover" />
    <a-card-meta title="Card title" description="This is the description">
      <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    </a-card-meta>
    <template class="ant-card-actions" slot="extra">
      <a-icon type="setting" />
      <a-icon type="edit" />
    </template>
  </a-card>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
class BlankCard extends Vue {
    private columns = [
        {
            dataIndex: 'name',
            key: 'name',
            slots: { title: 'customTitle' },
            scopedSlots: { customRender: 'name' }
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        }
    ];

    private data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park'
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park'
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park'
        }
    ];
}
export default BlankCard;
</script>

<style lang='scss' scoped>
</style>
