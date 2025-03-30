<template>
  <div :class="$style['wrapper-3']">
    <div :class="$style['header-container']">
      <img src="https://weavefox.alipay.com/assets/fd0b82d4-33ce-42d9-9f1c-ac77c2dd2cc6.png" :class="$style['header-image']" />
      <span :class="$style['pricing-label']">
        Pricing
      </span>
    </div>
    <span :class="$style['feature-description']">
      Leveling up Al collaboration and compute.
    </span>
    <div :class="$style['content-section']">
      <div :class="$style['user-platform-info']">
        <span :class="$style['user-platform-text']">
          Users and organizations already use the Hub as a collaboration platform,
        </span>
      </div>
      <div :class="$style['ml-compute-info']">
        <span :class="$style['ml-compute-text']">
          we're making iteasy to seamlessly and scalably launch ML compute directly from the Hub.
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style module>
.wrapper-3 {
  background-color: #ffffff;
  width: 750px;
  align-self: center;
  display: flex;
  flex-direction: column;
  padding: 4px 8px 6px 8px;
}

.header-container {
  align-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-image {
  flex-shrink: 0;
  border-radius: 3px;
  width: 18px;
  height: 16px;
}

.pricing-label {
  color: #000000;
  font-size: 16px;
  margin-left: 6px;
  white-space: nowrap;
}

.feature-description {
  color: #000000;
  font-size: 37px;
  font-weight: bold;
  margin-top: 12px;
  margin-left: 2px;
  white-space: nowrap;
}

.content-section {
  margin-top: 18px;
  align-self: center;
  display: flex;
  flex-direction: column;
}

.user-platform-info {
  padding: 4px 32px 0px 74px;
}

.user-platform-text {
  color: #6a7282;
  font-size: 16px;
  margin-right: 2px;
  white-space: nowrap;
}

.ml-compute-info {
  margin-top: 10px;
  padding: 2px 6px 0px 8px;
}

.ml-compute-text {
  color: #6a7282;
  font-size: 16px;
  white-space: nowrap;
}
</style>