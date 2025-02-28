<template>
  <div :class="$style['wrapper-4']">
    <div :class="$style['card-container']">
      <div :class="$style['product-image-wrapper']">
        <img src="https://weavefox.alipay.com/assets/b293456a-2b88-4a5a-9f98-07fe8655b171.png" :class="$style['product-image']" />
        <div :class="$style['product-info']">
          <span :class="$style['product-name']">
            Organic ginger
          </span>
          <span :class="$style['product-price']">
            $12.99/Ib
          </span>
          <div :class="$style['quantity-section']">
            <div :class="$style['quantity-wrapper']">
              <span :class="$style['quantity-value']">
                0.5b
              </span>
              <img src="https://weavefox.alipay.com/assets/fc0dfa74-ab5e-464e-9440-d39a961c1b68.png" :class="$style['quantity-icon']" />
            </div>
          </div>
        </div>
      </div>
      <div :class="$style['final-price-section']">
        <span :class="$style['final-price']">
          $6.50
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
.wrapper-4 {
  background-color: #ffffff;
  width: 416px;
  margin-top: 10px;
  padding: 2px 2px 6px 5px;
}

.card-container {
  border-radius: 13px;
  background-color: #fafaf5;
  padding-right: 12px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: space-between;
}

.product-image-wrapper {
  display: flex;
  align-self: center;
  flex: 6;
  align-items: center;
}

.product-image {
  border-radius: 13px;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
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

.product-price {
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
  margin-top: 8px;
  display: flex;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 2px;
}

.quantity-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 18;
  align-items: center;
}

.quantity-value {
  color: #000000;
  font-size: 10px;
  flex: 7;
  margin-left: 2px;
  white-space: nowrap;
}

.quantity-icon {
  border-radius: 4px;
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  margin-right: 2px;
}

.final-price-section {
  display: flex;
  align-self: flex-start;
  margin-top: 10px;
  flex: 1;
}

.final-price {
  color: #000000;
  font-size: 10px;
  font-weight: bold;
}
</style>