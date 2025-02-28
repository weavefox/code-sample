<template>
  <div :class="$style['wrapper-3']">
    <div :class="$style['card-container']">
      <div :class="$style['image-wrapper']">
        <img src="https://weavefox.alipay.com/assets/234b9435-1023-44d7-900d-9d96b1d6e8cc.png" :class="$style['product-image']" />
        <div :class="$style['product-info']">
          <span :class="$style['product-name']">
            Heirloom tomato
          </span>
          <span :class="$style['product-price-per-unit']">
            $5.99/Ib
          </span>
          <div :class="$style['quantity-section']">
            <div :class="$style['quantity-wrapper']">
              <span :class="$style['quantity-text']">
                1lb
              </span>
              <img src="https://weavefox.alipay.com/assets/deba9b04-f6ff-43e4-941d-9412597476ee.png" :class="$style['unit-image']" />
            </div>
          </div>
        </div>
      </div>
      <div :class="$style['final-price-section']">
        <span :class="$style['final-price']">
          $5.99
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
  width: 418px;
  padding: 2px 2px 2px 5px;
}

.card-container {
  border-radius: 13px;
  background-color: #fafaf5;
  padding-right: 12px;
  padding-bottom: 2px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: space-between;
}

.image-wrapper {
  display: flex;
  align-self: center;
  align-items: center;
}

.product-image {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 3px;
}

.product-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 12px;
}

.product-name {
  color: #000000;
  font-size: 10px;
  font-weight: bold;
  white-space: nowrap;
}

.product-price-per-unit {
  color: #426b1f;
  font-size: 10px;
  align-self: flex-start;
  white-space: nowrap;
  margin-top: 2px;
}

.quantity-section {
  border-radius: 11px;
  background-color: #ffffff;
  border-color: #f0f0f0;
  border-style: solid;
  border-width: 1px;
  align-self: flex-start;
  width: 64px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 2px;
}

.quantity-wrapper {
  display: flex;
  gap: 26;
  align-items: center;
}

.quantity-text {
  color: #000000;
  font-size: 10px;
  flex: 4;
  margin-left: 2px;
  white-space: nowrap;
}

.unit-image {
  border-radius: 4px;
  width: 8px;
  height: 8px;
  flex-shrink: 0;
}

.final-price-section {
  display: flex;
  align-self: flex-start;
  margin-top: 10px;
}

.final-price {
  color: #000000;
  font-size: 10px;
  font-weight: bold;
}
</style>