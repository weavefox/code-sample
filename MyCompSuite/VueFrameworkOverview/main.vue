<template>
  <div :class="$style['wrapper-3']">
    <div :class="$style['framework-container']">
      <span :class="$style['framework-title']">
        The ProgressiveJavaScript Framework
      </span>
      <span :class="$style['framework-description']">
        An approachable, performant and versatile framework for building web user interfaces.
      </span>
      <div :class="$style['button-group']">
        <ElButton size="small" @onClick="onWhyVueClick" :class="$style['button-why-vue']">
          <div :class="$style['button-content']">
            <img src="https://weavefox.alipay.com/assets/76ec222f-96e1-4e3f-ab81-d4e7f005b629.png" :class="$style['button-icon']" />
            <span :class="$style['button-text']">
              Why Vue
            </span>
          </div>
        </ElButton>
        <ElButton size="small" @onClick="onGetStartedClick" :class="$style['button-get-started']">
          <div :class="$style['button-content']">
            <span :class="$style['button-text-2']">
              Get Started 
            </span>
            <img src="https://weavefox.alipay.com/assets/8dc803b3-0166-472c-b0e0-2140aaa693b1.png" :class="$style['button-icon-2']" />
          </div>
        </ElButton>
        <ElButton size="small" @onClick="onInstallClick" :class="$style['button-install']">
          Install
        </ElButton>
        <ElButton size="small" @onClick="onGetUpdatesClick" :class="$style['button-security-updates']">
          Get Security Updates for Vue 2   
        </ElButton>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    onWhyVueClick () {}, 
    onGetStartedClick () {}, 
    onInstallClick () {}, 
    onGetUpdatesClick () {}
  },
};
</script>

<style module>
.wrapper-3 {
  background-color: #ffffff;
  width: 450px;
  line-height: 1.3;
  align-self: center;
  margin-top: 80px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 2px;
}

.framework-container {
  display: flex;
  flex-direction: column;
}

.framework-title {
  color: #253241;
  font-size: 38px;
  text-align: center;
  margin-left: 18px;
  margin-right: 18px;
}

.framework-description {
  color: #757575;
  font-size: 10px;
  white-space: nowrap;
  margin-top: 10px;
}

.button-group {
  display: flex;
  align-self: center;
  margin-top: 22px;
  gap: 8;
}

.button-why-vue {
  background-color: #42b983;
  height: 20px;
  max-width: 80px;
  margin-left: 42px;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-icon {
  border-radius: 3px;
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.button-text {
  color: #fffffd;
  font-size: 10px;
  flex: 1;
  margin-left: 5px;
  white-space: nowrap;
}

.button-get-started {
  background-color: #f1f1f1;
  color: #4e6182;
  font-size: 10px;
  height: 20px;
  max-width: 84px;
}

.button-text-2 {
  color: #4e6182;
  font-size: 10px;
  white-space: nowrap;
}

.button-icon-2 {
  border-radius: 2px;
  width: 6px;
  height: 6px;
  flex-shrink: 0;
  margin-left: 2px;
}

.button-install {
  background-color: #f1f1f1;
  height: 20px;
  max-width: 54px;
  font-size: 10px;
  color: #4d6378;
}

.button-security-updates {
  background-color: #f1f1f1;
  height: 20px;
  font-size: 10px;
  color: #4e6182;
}
</style>