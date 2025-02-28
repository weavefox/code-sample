<template>
  <div :class="$style['wrapper']">
    <div :class="$style['main-section']">
      <span :class="$style['basket-label']">
        Basket
      </span>
      <ItemCounter />
    </div>
    <div :class="$style['secondary-section']">
      <div :class="$style['nested-section']">
        <ProductCard />
        <ProductCard_2 />
      </div>
      <OrderSummary />
    </div>
    <ProductCard_3 />
  </div>
</template>

<script>
import ItemCounter from './ItemCounter/main.vue';
import ProductCard from './ProductCard/main.vue';
import ProductCard_2 from './ProductCard_2/main.vue';
import OrderSummary from './OrderSummary/main.vue';
import ProductCard_3 from './ProductCard_3/main.vue';

export default {
  components: { ItemCounter, ProductCard, ProductCard_2, OrderSummary, ProductCard_3 }
};
</script>

<style module>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 688px;
  padding: 20px 20px 20px 20px;
}

.main-section {
  position: relative;
  margin-left: 6px;
  margin-right: 6px;
  width: 140px;
  height: 48px;
}

.basket-label {
  color: #000000;
  font-size: 30px;
  position: absolute;
  top: 0px;
  left: 2px;
}

.secondary-section {
  display: flex;
  flex: 1;
  margin-top: 26px;
  align-items: flex-start;
}

.nested-section {
  display: flex;
  flex-direction: column;
  margin-left: 2px;
}
</style>