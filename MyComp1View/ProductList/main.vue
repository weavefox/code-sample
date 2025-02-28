<template>
  <div :class="$style['product-container']">
    <div :class="$style['product-section']">
      <div :class="$style['product-row']">
        <div :class="$style['product-column']">
          <span :class="$style['product-name']">
            World Peas
          </span>
        </div>
        <div :class="$style['product-header']">
          <span :class="$style['shop-link']">
            Shop
          </span>
          <span :class="$style['newstand-link']">
            Newstand
          </span>
          <span :class="$style['profile-link']">
            Who we are
          </span>
          <span :class="$style['profile-link']">
            My profile
          </span>
          <ElButton @onClick="onBasketCountClick" :class="$style['basket-button']">
            Basket (3)
          </ElButton>
        </div>
      </div>
      <div :class="$style['basket-summary']">
        <span :class="$style['basket-title']">
          Basket
        </span>
        <span :class="$style['item-count']">
          3 items
        </span>
      </div>
      <div :class="$style['empty-space']" />
      <div :class="$style['product-details']">
        <div :class="$style['product-info']">
          <div :class="$style['product-image-wrapper']">
            <div :class="$style['product-price-wrapper']">
              <div :class="$style['product-quantity-wrapper']">
                <div :class="$style['product-item']">
                  <span :class="$style['product-description']">
                    Heirloom tomato
                  </span>
                  <span :class="$style['product-price']">
                    $5.99/Ib
                  </span>
                  <div :class="$style['quantity-selector']">
                    <div :class="$style['selected-quantity']">
                      <span :class="$style['selected-weight']">
                        1Ib
                      </span>
                      <img src="https://weavefox.alipay.com/assets/ac939a09-db3f-4e8b-973b-de41ffa5a436.png" :class="$style['product-image']" />
                    </div>
                  </div>
                </div>
                <span :class="$style['product-description']">
                  $5.99
                </span>
              </div>
              <img src="https://weavefox.alipay.com/assets/4893253a-1854-4fe5-9ef4-f019394f080e.png" :class="$style['thumbnail-image']" />
            </div>
          </div>
          <div :class="$style['price-tag']">
            <img src="https://weavefox.alipay.com/assets/4d09368b-f36c-4f14-8f3f-93560b9a4742.png" :class="$style['additional-image']" />
            <div :class="$style['product-footer']">
              <div :class="$style['footer-links']">
                <span :class="$style['product-description']">
                  Organic ginger
                </span>
                <span :class="$style['product-price']">
                  $12.99/Ib
                </span>
                <div :class="$style['footer-section']">
                  <div :class="$style['footer-row']">
                    <span :class="$style['weight-option']">
                      0.5b
                    </span>
                    <img src="https://weavefox.alipay.com/assets/f1572484-db9f-4662-9616-109f9d0b2149.png" :class="$style['option-image']" />
                  </div>
                </div>
              </div>
              <span :class="$style['final-price']">
                $6.50
              </span>
            </div>
          </div>
          <div :class="$style['footer-image-wrapper']">
            <img src="https://weavefox.alipay.com/assets/5d6d4b67-8ab5-4b06-bf31-cf202c01c059.png" :class="$style['footer-thumbnail']" />
            <div :class="$style['footer-product-item']">
              <div :class="$style['product-item']">
                <span :class="$style['shop-link']">
                  Sweet onion
                </span>
                <span :class="$style['footer-product-description']">
                  $2.99/Ib
                </span>
                <div :class="$style['footer-section']">
                  <div :class="$style['footer-product-quantity']">
                    <span :class="$style['footer-selected-weight']">
                      5lb
                    </span>
                    <img src="https://weavefox.alipay.com/assets/d9ec9289-4e7d-44e1-826e-785106b0c79c.png" :class="$style['footer-additional-image']" />
                  </div>
                </div>
              </div>
              <span :class="$style['footer-final-price']">
                $14.95
              </span>
            </div>
          </div>
        </div>
        <div :class="$style['order-summary-container']">
          <div :class="$style['summary-details-wrapper']">
            <div :class="$style['summary-header']">
              <span :class="$style['product-description']">
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
              <span :class="$style['shipping-label']">
                Total
              </span>
            </div>
            <div :class="$style['summary-values']">
              <span :class="$style['shop-link']">
                $27.44
              </span>
              <span :class="$style['shipping-cost']">
                $3.99
              </span>
              <span :class="$style['tax-amount']">
                $2.00
              </span>
              <span :class="$style['total-cost']">
                $33.43
              </span>
            </div>
          </div>
          <ElButton size="small" @onClick="onContinuePaymentClick" :class="$style['payment-button']">
            <div :class="$style['button-content']">
              <span :class="$style['continue-to-payment-text']">
                Continue to payment
              </span>
              <ElIconAntd :iconData="MinusOutlined" :class="$style['payment-icon']" />
            </div>
          </ElButton>
        </div>
      </div>
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
    onBasketCountClick () {}, 
    onContinuePaymentClick () {}
  },
};
</script>

<style module>
.product-container {
  background-color: #ffffff;
  width: 710px;
  padding: 12px 38px 65px 46px;
}

.product-section {
  display: flex;
  flex-direction: column;
}

.product-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-column {
  display: flex;
  margin-left: 2px;
}

.product-name {
  color: #426b1f;
  font-size: 14px;
}

.product-header {
  display: flex;
  margin-right: 2px;
  align-items: center;
}

.shop-link {
  color: #000000;
  font-size: 10px;
  white-space: nowrap;
}

.newstand-link {
  color: #000000;
  font-size: 10px;
  margin-left: 24px;
  white-space: nowrap;
}

.profile-link {
  color: #000000;
  font-size: 10px;
  margin-left: 25px;
  white-space: nowrap;
}

.basket-button {
  border-radius: 2px;
  background-color: #426b1f;
  border: none;
  height: 26px;
  max-width: 72px;
  font-size: 10px;
  color: #ffffff;
  margin-left: 24px;
}

.basket-summary {
  display: flex;
  margin-top: 36px;
}

.basket-title {
  color: #000000;
  font-size: 30px;
  align-self: center;
  margin-left: 2px;
  white-space: nowrap;
}

.item-count {
  color: #000000;
  font-size: 10px;
  margin-top: 24px;
  margin-left: 4px;
  white-space: nowrap;
}

.empty-space {
  background-color: #e6e6e6;
  height: 1px;
  min-width: 624px;
  margin-top: 6px;
}

.product-details {
  display: flex;
  flex: 1;
  margin-top: 20px;
  align-items: flex-start;
}

.product-info {
  display: flex;
  flex-wrap: wrap;
  row-gap: 16;
  flex-direction: column;
}

.product-image-wrapper {
  border-radius: 14px;
  background-color: #f2f1f4;
  border-color: #e6e6e6;
  border-style: solid;
  border-width: 1px;
}

.product-price-wrapper {
  position: relative;
  width: 410px;
  height: 78px;
}

.product-quantity-wrapper {
  border-radius: 13px;
  background-color: #fafaf5;
  position: absolute;
  top: 0px;
  left: 78px;
  width: 330px;
  height: 78px;
  display: flex;
  justify-content: space-between;
  padding: 10px 12px 10px 12px;
}

.product-item {
  display: flex;
  flex-direction: column;
  align-self: center;
}

.product-description {
  color: #000000;
  font-size: 10px;
  font-weight: bold;
  white-space: nowrap;
}

.product-price {
  color: #426b1f;
  font-size: 10px;
  font-weight: bold;
  align-self: flex-start;
  white-space: nowrap;
  margin-top: 2px;
}

.quantity-selector {
  border-radius: 11px;
  background-color: #ffffff;
  border-color: #f0f0f0;
  border-style: solid;
  border-width: 1px;
  align-self: flex-start;
  width: 62px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 2px;
}

.selected-quantity {
  display: flex;
  gap: 26;
  align-items: center;
}

.selected-weight {
  color: #000000;
  font-size: 10px;
  flex: 4;
  margin-left: 2px;
  white-space: nowrap;
}

.product-image {
  border-radius: 4px;
  width: 10px;
  height: 10px;
  flex-shrink: 0;
}

.thumbnail-image {
  width: 80px;
  height: 78px;
  flex-shrink: 0;
  border-radius: 3px;
  position: absolute;
  top: 0px;
  left: 0px;
}

.price-tag {
  border-radius: 13px;
  background-color: #e6e6e6;
  padding-right: 2px;
  display: flex;
}

.additional-image {
  border-radius: 13px;
  width: 80px;
  height: 80px;
  flex-shrink: 0;
}

.product-footer {
  border-radius: 13px;
  background-color: #fafaf5;
  border-color: #e6e6e6;
  border-style: solid;
  border-width: 1px;
  flex: 1;
  margin-left: 4px;
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 10px 6px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-self: center;
  flex: 5;
  margin-left: 2px;
}

.footer-section {
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

.footer-row {
  display: flex;
  justify-content: space-between;
  gap: 18;
  align-items: center;
}

.weight-option {
  color: #000000;
  font-size: 10px;
  flex: 7;
  margin-left: 2px;
  white-space: nowrap;
}

.option-image {
  border-radius: 4px;
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  margin-right: 2px;
}

.final-price {
  color: #000000;
  font-size: 10px;
  font-weight: bold;
  margin-bottom: 40px;
  flex: 2;
  margin-right: 2px;
  white-space: nowrap;
}

.footer-image-wrapper {
  border-radius: 13px;
  border-color: #e6e6e6;
  border-style: solid;
  border-width: 1px;
  display: flex;
}

.footer-thumbnail {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  border-radius: 3px;
}

.footer-product-item {
  border-radius: 13px;
  background-color: #fafaf5;
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 10px 12px 10px 12px;
}

.footer-product-description {
  color: #426b1f;
  font-size: 10px;
  align-self: flex-start;
  white-space: nowrap;
  margin-top: 2px;
}

.footer-product-quantity {
  display: flex;
  justify-content: space-between;
  gap: 26;
  align-items: center;
}

.footer-selected-weight {
  color: #000000;
  font-size: 10px;
  margin-left: 2px;
  white-space: nowrap;
}

.footer-additional-image {
  border-radius: 4px;
  width: 10px;
  height: 10px;
  flex-shrink: 0;
  margin-right: 2px;
}

.footer-final-price {
  color: #000000;
  font-size: 10px;
  margin-bottom: 42px;
  white-space: nowrap;
}

.order-summary-container {
  border-radius: 14px;
  background-color: #fafaf5;
  border-color: #e6e6e6;
  border-style: solid;
  border-width: 1px;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  padding: 10px 10px 10px 10px;
}

.summary-details-wrapper {
  display: flex;
  justify-content: space-between;
}

.summary-header {
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-left: 2px;
}

.subtotal-label {
  color: #000000;
  font-size: 10px;
  align-self: flex-start;
  white-space: nowrap;
  margin-top: 10px;
}

.shipping-label {
  color: #000000;
  font-size: 10px;
  align-self: flex-start;
  white-space: nowrap;
  margin-top: 2px;
}

.summary-values {
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  margin-top: 26px;
  margin-right: 2px;
}

.shipping-cost {
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

.total-cost {
  color: #000000;
  font-size: 10px;
  white-space: nowrap;
  margin-top: 2px;
}

.payment-button {
  background-color: #426b1f;
  border: none;
  height: 24px;
  min-width: 174px;
  margin-top: 14px;
}

.button-content {
  display: flex;
  justify-content: center;
  gap: 60;
  align-items: center;
}

.continue-to-payment-text {
  color: #ffffff;
  font-size: 10px;
  white-space: nowrap;
}

.payment-icon {
  color: #a0b58f;
  font-size: 8px;
}
</style>