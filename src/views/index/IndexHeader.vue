<template>
  <div :class="['blossom-header-root', props.bg ? 'blossom-header-bg' : '']">
    <bl-row class="head-row" width="auto" height="100%">
      <div class="project-name">{{ sysName() }}</div>
    </bl-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toRoute } from '@/router'


const props = defineProps({
  bg: {
    type: Boolean,
    default: false
  }
})

const sysName = () => {
    return 'graython'
}

</script>

<style lang="scss">
.blossom-header-root {
  @include box(100%, 60px);
  @include flex(row, space-between, center);
  padding: 10px 10px;
  z-index: 2003;

  .head-row {
    line-height: 40px;
  }

  .blossom-logo {
    @include box(40px, 40px);
    cursor: pointer;

    img {
      @include box(40px, 40px);
    }
  }

  .project-name {
    @include box(auto, 100%);
    margin-left: 10px;
    text-shadow: 3px 3px 5px #ababab;
    cursor: pointer;

    color: transparent;
    font-family: current, sans-serif;
    letter-spacing: 1px;
    background: linear-gradient(90deg, var(--bl-header-color), #fff3fc, var(--bl-header-color));
    -webkit-background-clip: text;
    animation: glow 10s linear infinite;
    transition: 1.5s;
    background-size: 300%;

    @keyframes glow {
      to {
        background-position: -300%;
      }
    }
  }
}

.popper-target {
  height: 100%;
  font-size: 15px;
  color: #909090;
  padding: 0 10px;
  text-shadow: 3px 3px 5px #000;
  user-select: none;
  transition: color 0.3s;

  &:hover {
    color: #fff3fc;
  }

  .iconbl {
    font-size: 18px;
  }
}

.popper-content {
  .item {
    @include flex(row, flex-start, center);
    padding: 0 10px;
    color: #aeaeae;
    border-radius: 5px;
    transition: 0.3s;
    white-space: pre-line;
    text-shadow: 3px 3px 5px #1d1d1d;
    cursor: pointer;

    img {
      margin: 5px 10px 5px 0;
      border-radius: 50%;
    }

    .iconbl {
      font-size: 20px;
      margin-right: 10px;
    }

    &:hover {
      color: #fff3fc;
    }
  }

  .item-divider {
    border-top: 1px solid #5c5c5c;
    margin-top: 5px;
    padding-bottom: 5px;
  }
}

.blossom-header-bg {
  background-image: linear-gradient(to bottom right, #3e464e, #212121);
  box-shadow: 0 1px 8px 1px #212121;
}
</style>
