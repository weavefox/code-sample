<template>
  <div :class="$style['wrapper-4']">
    <ElCheckboxGroup :value="approachableBuildsGroupChecked" :class="$style['checkbox-group-container']">
      <div :class="$style['description-container']">
        <span :value="1" :class="$style['approachable-text']">
          Approachable
        </span>
        <span :value="3" :class="$style['standard-builds-text']">
          Builds on top of standard
        </span>
        <span :value="4" :class="$style['html-css-js-text']">
          HTML,CSS and JavaScript
        </span>
        <span :value="5" :class="$style['html-css-js-text']">
          with intuitiveAPl and world-
        </span>
        <span :value="2" :class="$style['documentation-text']">
          class documentation.
        </span>
      </div>
    </ElCheckboxGroup>
  </div>
</template>

<script>

export default {
  data () {
    return {
      approachableBuildsGroupChecked: []
    };
  }
};
</script>

<style module>
.wrapper-4 {
  background-color: #ffffff;
  width: 105px;
  line-height: 1.3;
  margin-left: 222px;
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

.approachable-text {
  color: #253241;
  font-size: 10px;
  font-weight: bold;
  align-self: flex-start;
  white-space: nowrap;
}

.standard-builds-text {
  color: #757575;
  font-size: 10px;
  white-space: nowrap;
  margin-top: 6px;
}

.html-css-js-text {
  color: #757575;
  font-size: 10px;
  white-space: nowrap;
  margin-top: 2px;
}

.documentation-text {
  color: #757575;
  font-size: 10px;
  align-self: flex-start;
  white-space: nowrap;
  margin-top: 2px;
}
</style>