<template>
  <div :class="$style['wrapper']">
    <CoursePromotion />
    <VueFrameworkOverview />
    <div :class="$style['content-wrapper']">
      <ApproachableBuilds />
      <CheckboxGroupExample />
      <CheckboxGroupDescription />
    </div>
  </div>
</template>

<script>
import CoursePromotion from './CoursePromotion/main.vue';
import VueFrameworkOverview from './VueFrameworkOverview/main.vue';
import ApproachableBuilds from './ApproachableBuilds/main.vue';
import CheckboxGroupExample from './CheckboxGroupExample/main.vue';
import CheckboxGroupDescription from './CheckboxGroupDescription/main.vue';

export default {
  components: { CoursePromotion, VueFrameworkOverview, ApproachableBuilds, CheckboxGroupExample, CheckboxGroupDescription }
};
</script>

<style module>
.wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 864px;
}

.content-wrapper {
  display: flex;
  align-self: center;
  margin-top: 106px;
  gap: 46;
}
</style>