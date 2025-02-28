<template>
  <div :class="$style['wrapper-2']">
    <div :class="$style['course-container']">
      <img src="https://weavefox.alipay.com/assets/379bf2b2-3523-49a9-aa5b-7446f415ea3d.png" :class="$style['course-image']" />
      <span :class="$style['course-title']">
        School.ioVue
      </span>
      <span :class="$style['promo-details']">
        <span :class="$style['promo-badge']">
          FREE
        </span>
        <span :class="$style['promo-label']">
          WEEKEND
        </span>
      </span>
      <span :class="$style['promo-description']">
        Get unlimited access to ALL Vue School premium courses
      </span>
      <ElButton size="small" @onClick="onReserveSpotClick" round="round" :class="$style['reserve-button']">
        Reserve Your Spot
      </ElButton>
      <span :class="$style['promo-timer-label']">
        STARTS IN
      </span>
      <ElButton size="small" @onClick="onCountdownClick" :class="$style['countdown-button']">
        01d:12h:25m
      </ElButton>
      <img src="https://weavefox.alipay.com/assets/f7b41fb9-af4a-4e15-917e-5048c26efd62.png" :class="$style['promo-image']" />
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    onReserveSpotClick () {}, 
    onCountdownClick () {}
  },
};
</script>

<style module>
.wrapper-2 {
  background-color: #131a24;
  line-height: 1.3;
  padding: 6px 5px 6px 64px;
}

.course-container {
  display: flex;
  align-items: center;
}

.course-image {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  border-radius: 3px;
  margin-left: 8px;
}

.course-title {
  color: #fffffd;
  font-size: 10px;
  margin-left: 6px;
  white-space: nowrap;
}

.promo-details {
  font-size: 12px;
  margin-left: 40px;
}

.promo-badge {
  color: #ff9818;
  font-weight: bold;
}

.promo-label {
  color: #fffffd;
}

.promo-description {
  color: #f8a338;
  font-size: 10px;
  margin-left: 30px;
  white-space: nowrap;
}

.reserve-button {
  background-color: #ff1b7a;
  height: 22px;
  font-size: 10px;
  color: #fffffd;
  margin-left: 30px;
}

.promo-timer-label {
  color: #fffffd;
  font-size: 10px;
  margin-left: 30px;
  white-space: nowrap;
}

.countdown-button {
  border-radius: 5px;
  background-color: #414850;
  height: 16px;
  max-width: 84px;
  font-size: 10px;
  color: #fffffd;
  margin-left: 5px;
}

.promo-image {
  border-radius: 2px;
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  margin-left: 45px;
}
</style>