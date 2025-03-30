<template>
  <div :class="$style['wrapper']">
    <div :class="$style['main-container']">
      <div :class="$style['main-container']">
        <HuggingFaceSearchBar />
        <div :class="$style['nested-content']">
          <HubCollaboration />
          <div :class="$style['inner-wrapper']">
            <FeatureList />
            <EnterpriseFeatures />
          </div>
        </div>
      </div>
      <SupportBanner />
    </div>
  </div>
</template>

<script>
import HuggingFaceSearchBar from './HuggingFaceSearchBar/main.vue';
import HubCollaboration from './HubCollaboration/main.vue';
import FeatureList from './FeatureList/main.vue';
import EnterpriseFeatures from './EnterpriseFeatures/main.vue';
import SupportBanner from './SupportBanner/main.vue';

export default {
  components: { HuggingFaceSearchBar, HubCollaboration, FeatureList, EnterpriseFeatures, SupportBanner }
};
</script>

<style module>
.wrapper {
  padding: 0px 4px 15px 0px;
}

.main-container {
  display: flex;
  flex-direction: column;
}

.nested-content {
  margin-top: 100px;
  margin-left: 82px;
  margin-right: 82px;
  display: flex;
  flex-direction: column;
}

.inner-wrapper {
  margin-top: 95px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>