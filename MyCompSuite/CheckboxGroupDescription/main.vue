<template>
  <div :class="$style['wrapper-6']">
    <ElCheckboxGroup :value="versatileRichGroupChecked" :class="$style['checkbox-group-container']">
      <div :class="$style['description-container']">
        <span :value="1" :class="$style['feature-title']">
          Versatile
        </span>
        <span :value="2" :class="$style['rich-ecosystem']">
          A rich,incrementally
        </span>
        <span :value="3" :class="$style['adoptable-ecosystem']">
          adoptable ecosystem that
        </span>
        <span :value="5" :class="$style['adoptable-ecosystem']">
          scales between a library and
        </span>
        <span :value="4" :class="$style['adoptable-ecosystem']">
          a full-featured framework.
        </span>
      </div>
    </ElCheckboxGroup>
  </div>
</template>

<script>

export default {
  data () {
    return {
      versatileRichGroupChecked: []
    };
  }
};
</script>

<style module>
.wrapper-6 {
  background-color: #ffffff;
  width: 108px;
  line-height: 1.3;
}

.checkbox-group-container {
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
}

.description-container {
  display: flex;
  flex-direction: column;
}

.feature-title {
  color: #253241;
  font-size: 10px;
  font-weight: bold;
  align-self: flex-start;
  white-space: nowrap;
}

.rich-ecosystem {
  color: #757575;
  font-size: 10px;
  align-self: flex-start;
  white-space: nowrap;
  margin-top: 6px;
}

.adoptable-ecosystem {
  color: #757575;
  font-size: 10px;
  white-space: nowrap;
  margin-top: 2px;
}
</style>