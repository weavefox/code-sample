<template>
  <div :class="$style['wrapper-6']">
    <div :class="$style['support-container']">
      <span :class="$style['support-text']">
        Need support to accelerate Al in your organization? View our
        <img src="https://weavefox.alipay.com/assets/2fbedde8-4e3d-41e0-bb61-e169bc0206da.png" :class="$style['support-icon']" />
        Expert Support.
      </span>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style module>
.wrapper-6 {
  background-color: #fdfffd;
  width: 616px;
  margin-top: 54px;
  align-self: center;
  padding: 2px 2px 2px 2px;
}

.support-container {
  border-radius: 2px;
  background-color: #ffffff;
  padding: 8px 10px 6px 15px;
}

.support-text {
  color: #000000;
  font-size: 16px;
  margin-top: 2px;
  margin-bottom: 2px;
  white-space: nowrap;
}

.support-icon {
  flex-shrink: 0;
  border-radius: 3px;
  width: 18px;
  height: 18px;
  display: inline-block;
}
</style>