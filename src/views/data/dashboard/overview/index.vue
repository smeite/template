<template>
  <cs-container>
    <cs-page-cover
      title="SHOUWANG Admin"
      sub-title="守望管理系统(开发继续中...)">
      <img src="~@/assets/image/logo@2x.png" alt="logo">
    </cs-page-cover>
  </cs-container>
</template>

<script>
  import CsPageCover from '@/views/index/components/cs-page-cover'

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
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
        cursor: pointer;
      }
    }
  }
</style>
