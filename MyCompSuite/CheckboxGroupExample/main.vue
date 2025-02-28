<template>
  <div :class="$style['wrapper-5']">
    <ElCheckboxGroup :value="performantReactiveGroupChecked" :class="$style['checkbox-group-container']">
      <div :class="$style['group-description']">
        <span :value="2" :class="$style['feature-one']">
          Performant
        </span>
        <span :value="3" :class="$style['feature-two']">
          Truly reactive,，compiler-
        </span>
        <span :value="5" :class="$style['feature-three']">
          optimized rendering system
        </span>
        <span :value="4" :class="$style['feature-three']">
          that rarely requires manual
        </span>
        <span :value="1" :class="$style['feature-five']">
          optimization.
        </span>
      </div>
    </ElCheckboxGroup>
  </div>
</template>

<script>

export default {
  data () {
    return {
      performantReactiveGroupChecked: []
    };
  }
};
</script>

<style module>
.wrapper-5 {
  background-color: #ffffff;
  width: 105px;
  line-height: 1.3;
}

.checkbox-group-container {
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
}

.group-description {
  display: flex;
  flex-direction: column;
}

.feature-one {
  color: #253241;
  font-size: 10px;
  font-weight: bold;
  align-self: flex-start;
  white-space: nowrap;
}

.feature-two {
  color: #757575;
  font-size: 10px;
  white-space: nowrap;
  margin-top: 6px;
}

.feature-three {
  color: #757575;
  font-size: 10px;
  white-space: nowrap;
  margin-top: 2px;
}

.feature-five {
  color: #757575;
  font-size: 10px;
  align-self: flex-start;
  white-space: nowrap;
  margin-top: 2px;
}
</style>