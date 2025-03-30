<template>
  <div :class="$style['header-container']">
    <div :class="$style['navigation-bar']">
      <img src="https://weavefox.alipay.com/assets/cdf12d0c-7bb1-497b-839e-fd8bc3db7888.png" :class="$style['logo-image']" />
      <span :class="$style['site-title']">
        10de15cope
      </span>
      <span :class="$style['home-link']">
        首页
      </span>
      <span :class="$style['category-link']">
        模型库
      </span>
      <span :class="$style['category-link']">
        数据集
      </span>
      <span :class="$style['category-link']">
        创空间
      </span>
      <span :class="$style['special-zone']">
        AIGC专区
      </span>
      <span :class="$style['doc-center']">
        文档中心
      </span>
      <span :class="$style['category-link']">
        社区
      </span>
      <img src="https://weavefox.alipay.com/assets/3039eb80-a1da-47b2-bb7b-cb3043d39b01.png" :class="$style['user-profile']" />
      <div :class="$style['auth-section']">
        <div :class="$style['auth-divider']" />
        <ElIconAntd :iconData="GithubOutlined" :class="$style['github-icon']" />
      </div>
      <span :class="$style['github-text']">
        GitHub
      </span>
    </div>
    <div :class="$style['navigation-bar']">
      <img src="https://weavefox.alipay.com/assets/3c43c218-05c8-4f4d-a1f8-33464745a68d.png" :class="$style['feature-image-one']" />
      <img src="https://weavefox.alipay.com/assets/cdbf8f67-10fe-4407-b467-b1291ecaf978.png" :class="$style['feature-image-two']" />
      <ElInput placeholder="搜索您感" v-model="searchPlaceholderValue" :class="$style['search-input']">
        <template #prepend="prepend">
          <ElIconAntd :iconData="ZoomOutOutlined" :class="$style['search-icon']" />
        </template>
      </ElInput>
      <ElButton @onClick="onAuthActionClick" :class="$style['auth-button']">
        登录/注册
      </ElButton>
    </div>
  </div>
</template>

<script>
import { GithubOutlined, ZoomOutOutlined } from '@ant-design/icons-svg';

export default {
  data () {
    return {
      searchPlaceholderValue: '',
      GithubOutlined,
      ZoomOutOutlined
    };
  },
  methods: {
    onAuthActionClick () {}
  },
};
</script>

<style module>
.header-container {
  background-color: #ffffff;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 10px 5px;
}

.navigation-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo-image {
  flex-shrink: 0;
  border-radius: 3px;
  width: 38px;
  height: 26px;
}

.site-title {
  color: #272549;
  font-size: 14px;
  font-weight: bold;
  margin-left: 8px;
  white-space: nowrap;
}

.home-link {
  color: #8284a1;
  font-size: 14px;
  margin-left: 50px;
  white-space: nowrap;
}

.category-link {
  color: #8284a1;
  font-size: 14px;
  margin-left: 32px;
  white-space: nowrap;
}

.special-zone {
  color: #8284a1;
  font-size: 14px;
  margin-left: 60px;
  white-space: nowrap;
}

.doc-center {
  color: #8284a1;
  font-size: 14px;
  margin-left: 36px;
  white-space: nowrap;
}

.user-profile {
  border-radius: 2px;
  flex-shrink: 0;
  width: 8px;
  margin-left: 6px;
  height: 6px;
}

.auth-section {
  margin-left: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.auth-divider {
  background-color: #ecedf1;
  width: 3px;
  height: 13px;
}

.github-icon {
  color: #8284a1;
  font-size: 16px;
  width: 16px;
  margin-left: 15px;
  height: 16px;
}

.github-text {
  color: #8284a1;
  font-size: 14px;
  margin-left: 5px;
  white-space: nowrap;
}

.feature-image-one {
  flex-shrink: 0;
  border-radius: 3px;
  width: 16px;
  height: 18px;
}

.feature-image-two {
  border-radius: 6px;
  flex-shrink: 0;
  width: 16px;
  margin-left: 20px;
  height: 16px;
}

.search-input {
  width: 128px;
  margin-left: 15px;
}

.search-icon {
  color: #8284a1;
  font-size: 16px;
  width: 16px;
  height: 16px;
}

.auth-button {
  border-radius: 11px;
  background-color: #474d5a;
  border: none;
  color: #ffffff;
  margin-left: 18px;
  height: 32px;
}
</style>