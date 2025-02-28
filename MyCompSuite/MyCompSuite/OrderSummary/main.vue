<template>
  <div :class="$style['wrapper-5']">
    <div :class="$style['order-container']">
      <div :class="$style['summary-section']">
        <div :class="$style['summary-header']">
          <span :class="$style['summary-title']">
            Order summary
          </span>
          <span :class="$style['subtotal-label']">
            Subtotal
          </span>
          <span :class="$style['shipping-label']">
            Shipping
          </span>
          <span :class="$style['shipping-label']">
            Tax
          </span>
          <span :class="$style['total-label']">
            Total
          </span>
        </div>
        <div :class="$style['summary-details']">
          <span :class="$style['subtotal-amount']">
            $27.44
          </span>
          <span :class="$style['shipping-amount']">
            $3.99
          </span>
          <span :class="$style['tax-amount']">
            $2.00
          </span>
          <span :class="$style['total-amount']">
            $33.43
          </span>
        </div>
      </div>
      <ElButton @onClick="onContinuePaymentClick" :class="$style['payment-button']">
        <div :class="$style['button-content']">
          <span :class="$style['continue-text']">
            Continue to payment
          </span>
          <ElIconAntd :iconData="MinusOutlined" :class="$style['payment-icon']" />
        </div>
      </ElButton>
    </div>
  </div>
</template>

<script>
import { MinusOutlined } from '@ant-design/icons-svg';

export default {
  data () {
    return {
      MinusOutlined
    };
  },
  methods: {
    onContinuePaymentClick () {}
  },
};
</script>

<style module>
.wrapper-5 {
  background-color: #ffffff;
  width: 198px;
  margin-top: 2px;
  margin-left: 10px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 2px;
}

.order-container {
  border-radius: 12px;
  background-color: #fafaf5;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  padding: 10px 10px 10px 10px;
}

.summary-section {
  display: flex;
  justify-content: space-between;
}

.summary-header {
  display: flex;
  flex-direction: column;
  align-self: center;
}

.summary-title {
  color: #000000;
  font-size: 10px;
  font-weight: bold;
  white-space: nowrap;
}

.subtotal-label {
  color: #000000;
  font-size: 10px;
  align-self: flex-start;
  white-space: nowrap;
  margin-top: 12px;
}

.shipping-label {
  color: #000000;
  font-size: 10px;
  align-self: flex-start;
  white-space: nowrap;
  margin-top: 2px;
}

.total-label {
  color: #000000;
  font-size: 10px;
  font-weight: bold;
  align-self: flex-start;
  white-space: nowrap;
  margin-top: 2px;
}

.summary-details {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-top: 26px;
}

.subtotal-amount {
  color: #000000;
  font-size: 10px;
  white-space: nowrap;
}

.shipping-amount {
  color: #000000;
  font-size: 10px;
  align-self: flex-end;
  white-space: nowrap;
  margin-top: 2px;
}

.tax-amount {
  color: #000000;
  font-size: 10px;
  align-self: flex-end;
  white-space: nowrap;
  margin-top: 4px;
}

.total-amount {
  color: #000000;
  font-size: 10px;
  font-weight: bold;
  white-space: nowrap;
  margin-top: 2px;
}

.payment-button {
  background-color: #426b1f;
  border: none;
  height: 25px;
  min-width: 174px;
  margin-top: 14px;
}

.button-content {
  display: flex;
  justify-content: center;
  gap: 60;
  align-items: center;
}

.continue-text {
  color: #ffffff;
  font-size: 10px;
  white-space: nowrap;
}

.payment-icon {
  color: #a0b58f;
  font-size: 8px;
}
</style>