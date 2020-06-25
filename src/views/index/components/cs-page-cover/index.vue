<template>
  <div class="cs-page-cover">
    <div class="cs-page-cover__logo">
      <slot/>
    </div>
    <p class="cs-page-cover__title">{{title}}</p>
    <p class="cs-page-cover__contact">

      <span> 欢迎加入我们，开创新战场 </span>
    </p>
    <slot name="footer"/>
    <p class="cs-page-cover__build-time">Build：{{$buildTime}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: 'Title'
    }
  }
}
</script>

<style lang="scss" scoped>
  .cs-page-cover {
    @extend %full;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    .cs-page-cover__logo {
      img {
        width: 200px;
      }
    }

    .cs-page-cover__title {
      color: $color-text-main;
    }

    .cs-page-cover__sub-title {
      font-size: 18px;
      color: $color-text-sub;
    }

    .cs-page-cover__build-time {
      font-size: 12px;
      line-height: 12px;
      color: $color-text-placehoder;
    }

    .cs-page-cover__contact {
      margin: 0 0 10px;
      font-size: 13px;
      color: $color-info;

      .link {
        &:hover {
          color: $color-primary;
          cursor: pointer;
        }
      }
    }
  }
</style>
