<template>
  <div :class="$style['wrapper-6']">
    <div :class="$style['card-container']">
      <div :class="$style['product-image-wrapper']">
        <img src="https://weavefox.alipay.com/assets/34ba04ee-0062-4c34-818d-671df1a76660.png" :class="$style['product-image']" />
        <div :class="$style['product-info']">
          <span :class="$style['product-name']">
            Sweet onion
          </span>
          <span :class="$style['product-price-per-unit']">
            $2.99/Ib
          </span>
          <ElButton size="small" @onClick="onField5lbClick" round="round" :class="$style['add-button']">
            <div :class="$style['button-content']">
              <span :class="$style['quantity-text']">
                5lb
              </span>
              <img src="https://weavefox.alipay.com/assets/bba1ab66-b48e-4bbe-a1b4-c6a7874d3b5f.png" :class="$style['quantity-icon']" />
            </div>
          </ElButton>
        </div>
      </div>
      <div :class="$style['total-price-wrapper']">
        <span :class="$style['total-price']">
          $14.95
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    onField5lbClick () {}
  },
};
</script>

<style module>
.wrapper-6 {
  background-color: #ffffff;
  width: 416px;
  align-self: flex-start;
  margin-top: 8px;
  padding: 2px 2px 2px 5px;
}

.card-container {
  border-radius: 4px;
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

.add-button {
  background-color: #ffffff;
  height: 18px;
  min-width: 64px;
  margin-top: 8px;
}

.button-content {
  display: flex;
  justify-content: center;
  gap: 25;
  align-items: center;
}

.quantity-text {
  color: #000000;
  font-size: 10px;
  white-space: nowrap;
}

.quantity-icon {
  border-radius: 4px;
  width: 8px;
  height: 8px;
  flex-shrink: 0;
}

.total-price-wrapper {
  display: flex;
  align-self: flex-start;
  margin-top: 10px;
}

.total-price {
  color: #000000;
  font-size: 10px;
  font-weight: bold;
}
</style>