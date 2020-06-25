<template>
  <cs-container :is-back="false">
    <cs-page-cover title="shouwang Admin">
      <img src="~@/assets/image/logo@2x.png" alt="logo">
      <div slot="footer" class="index-btn-group">
        <span @click="$open('https://www.taxdao.com')">主页</span>
        <el-divider direction="vertical"/>
        <span @click="$open('https://www.taxdao.com')">文档</span>
        <el-divider direction="vertical"/>
        <span @click="$open('https://www.taxdao.com')">论坛</span>
      </div>
    </cs-page-cover>
  </cs-container>
</template>

<script>
import CsPageCover from './components/cs-page-cover'

export default {
  components: {
    CsPageCover
  }
}
</script>

<style lang="scss" scoped>
  .index-btn-group {
    color: $color-text-placehoder;

    span {
      font-size: 13px;
      color: $color-text-sub;

      &:hover {
        color: $color-text-main;
        cursor: pointer;
      }
    }
  }
</style>
