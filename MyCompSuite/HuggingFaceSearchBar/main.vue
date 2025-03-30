<template>
  <div :class="$style['wrapper-2']">
    <div :class="$style['header-section']">
      <img src="https://weavefox.alipay.com/assets/955162e7-9c43-496c-8da0-237641635b34.png" :class="$style['logo-image']" />
      <span :class="$style['site-title']">
        Hugging Face
      </span>
      <ElInput placeholder="Search models, datasets,users.." v-model="searchItemsValue" :class="$style['search-input']">
        <template #prepend="prepend">
          <ElIconAntd :iconData="SearchOutlined" :class="$style['search-icon']" />
        </template>
      </ElInput>
    </div>
    <div :class="$style['content-section']">
      <img src="https://weavefox.alipay.com/assets/66dc1c69-a7c8-47c2-8209-388ea74c9aac.png" :class="$style['model-thumbnail']" />
      <span :class="$style['model-label']">
        Models
      </span>
      <img src="https://weavefox.alipay.com/assets/941df887-b380-40ab-801f-0e3ef95e9126.png" :class="$style['dataset-thumbnail']" />
      <span :class="$style['model-label']">
        Datasets
      </span>
      <img src="https://weavefox.alipay.com/assets/b46b70db-bfa2-4922-9bf2-306661b5054c.png" :class="$style['space-thumbnail']" />
      <span :class="$style['model-label']">
        Spaces
      </span>
      <img src="https://weavefox.alipay.com/assets/46a238d4-897b-48c1-a490-30aac58dcb34.png" :class="$style['post-thumbnail']" />
      <span :class="$style['model-label']">
        Posts
      </span>
      <img src="https://weavefox.alipay.com/assets/d0d75f65-3efa-49ba-8e3e-a45f7b8d0c36.png" :class="$style['doc-thumbnail']" />
      <span :class="$style['model-label']">
        Docs
      </span>
      <img src="https://weavefox.alipay.com/assets/8ac5f4b0-1e80-4806-8546-8e019dadbb82.png" :class="$style['enterprise-thumbnail']" />
      <span :class="$style['model-label']">
        Enterprise
      </span>
      <span :class="$style['pricing-label']">
        Pricing
      </span>
      <img src="https://weavefox.alipay.com/assets/e89f11ac-f43a-472b-a2bb-2882f71fa996.png" :class="$style['feature-thumbnail']" />
      <div :class="$style['divider-line']" />
    </div>
  </div>
</template>

<script>
import { SearchOutlined } from '@ant-design/icons-svg';

export default {
  data () {
    return {
      searchItemsValue: '',
      SearchOutlined
    };
  }
};
</script>

<style module>
.wrapper-2 {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 6px 10px 10px;
}

.header-section {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logo-image {
  flex-shrink: 0;
  border-radius: 3px;
  width: 30px;
  height: 30px;
}

.site-title {
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
  white-space: nowrap;
}

.search-input {
  width: 384px;
  margin-left: 18px;
}

.search-icon {
  color: #99a1af;
  font-size: 14px;
  width: 14px;
  height: 14px;
}

.content-section {
  flex: 1;
  margin-left: 245px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.model-thumbnail {
  border-radius: 6px;
  flex-shrink: 0;
  width: 12px;
  height: 12px;
}

.model-label {
  color: #000000;
  font-size: 16px;
  margin-left: 8px;
  white-space: nowrap;
}

.dataset-thumbnail {
  border-radius: 2px;
  flex-shrink: 0;
  width: 12px;
  margin-left: 24px;
  height: 12px;
}

.space-thumbnail {
  border-radius: 2px;
  flex-shrink: 0;
  width: 12px;
  margin-left: 24px;
  height: 14px;
}

.post-thumbnail {
  border-radius: 4px;
  flex-shrink: 0;
  width: 12px;
  margin-left: 26px;
  height: 12px;
}

.doc-thumbnail {
  border-radius: 2px;
  flex-shrink: 0;
  width: 14px;
  margin-left: 22px;
  height: 12px;
}

.enterprise-thumbnail {
  border-radius: 6px;
  flex-shrink: 0;
  width: 15px;
  margin-left: 22px;
  height: 14px;
}

.pricing-label {
  color: #000000;
  font-size: 16px;
  margin-left: 22px;
  white-space: nowrap;
}

.feature-thumbnail {
  flex-shrink: 0;
  border-radius: 3px;
  width: 18px;
  margin-left: 22px;
  height: 16px;
}

.divider-line {
  background-color: #f2f4f9;
  width: 3px;
  margin-left: 16px;
  height: 20px;
}
</style>