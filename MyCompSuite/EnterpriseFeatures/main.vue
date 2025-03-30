<template>
  <div :class="$style['wrapper-5']">
    <div :class="$style['enterprise-header']">
      <div :class="$style['header-content']">
        <img src="https://weavefox.alipay.com/assets/9f19ba76-cf92-4e39-a3f6-dde1f57b9661.png" :class="$style['header-image']" />
        <span :class="$style['header-title']">
          Enterprise Hub
        </span>
      </div>
      <span :class="$style['header-subtitle']">
        Accelerate your Al roadmap
      </span>
    </div>
    <div :class="$style['features-container']">
      <div :class="$style['feature-list']">
        <div :class="$style['feature-item']">
          <ElIconAntd :iconData="CheckOutlined" :class="$style['feature-icon']" />
          <span :class="$style['feature-title']">
            SSO and SAML support
          </span>
        </div>
        <div :class="$style['feature-item-2']">
          <ElIconAntd :iconData="CheckOutlined" :class="$style['feature-icon']" />
          <span :class="$style['feature-title']">
            Select data location with Storage Regions
          </span>
        </div>
        <div :class="$style['feature-item-3']">
          <ElIconAntd :iconData="CheckOutlined" :class="$style['feature-icon']" />
          <span :class="$style['feature-title']">
            Precise actions reviews with Audit logs
          </span>
        </div>
        <div :class="$style['feature-item-4']">
          <ElIconAntd :iconData="CheckOutlined" :class="$style['feature-icon']" />
          <span :class="$style['feature-description-3']">
            Granular access control with Resource groups
          </span>
        </div>
        <div :class="$style['feature-item-5']">
          <ElIconAntd :iconData="CheckOutlined" :class="$style['feature-icon']" />
          <span :class="$style['feature-description-3']">
            Centralized token control and approval
          </span>
        </div>
        <div :class="$style['feature-item-2']">
          <ElIconAntd :iconData="CheckOutlined" :class="$style['feature-icon']" />
          <span :class="$style['feature-title']">
            Dataset Viewer for private datasets
          </span>
        </div>
        <div :class="$style['feature-item-7']">
          <ElIconAntd :iconData="CheckOutlined" :class="$style['feature-icon']" />
          <span :class="$style['feature-description-3']">
            Advanced compute options for Spaces
          </span>
        </div>
        <div :class="$style['feature-item-8']">
          <ElIconAntd :iconData="CheckOutlined" :class="$style['premium-feature-icon']" />
          <span :class="$style['feature-description-7']">
            5x more ZeroGPU quota for all org members
          </span>
        </div>
        <div :class="$style['feature-item-9']">
          <ElIconAntd :iconData="CheckOutlined" :class="$style['feature-icon']" />
          <span :class="$style['feature-description-8']">
            Deploy Inference on your own Infra
          </span>
        </div>
        <div :class="$style['feature-item-10']">
          <ElIconAntd :iconData="CheckOutlined" :class="$style['billing-feature-icon']" />
          <span :class="$style['feature-description-3']">
            Managed billing with yearly commits
          </span>
        </div>
        <div :class="$style['feature-item-11']">
          <ElIconAntd :iconData="CheckOutlined" :class="$style['feature-icon']" />
          <span :class="$style['feature-description-3']">
            Priority support
          </span>
        </div>
      </div>
      <span :class="$style['pricing-label']">
        Starting at
      </span>
      <div :class="$style['pricing-details']">
        <span :class="$style['price-amount']">
          $20
        </span>
        <span :class="$style['price-frequency']">
          peruserpermonth
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckOutlined } from '@ant-design/icons-svg';

export default {
  data () {
    return {
      CheckOutlined
    };
  }
};
</script>

<style module>
.wrapper-5 {
  border-radius: 27px;
  background-color: #ffffff;
  border-color: #f2f4f9;
  border-style: solid;
  width: 437.5px;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  padding-top: 2px;
}

.enterprise-header {
  border-radius: 23px;
  background-color: #ffffff;
  border-color: #f0f2f8;
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  min-width: 438px;
  padding: 26px 26px 28px 26px;
}

.header-content {
  align-self: flex-start;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header-image {
  flex-shrink: 0;
  border-radius: 3px;
  width: 28px;
  height: 24px;
}

.header-title {
  color: #101828;
  font-size: 20px;
  font-weight: bold;
  margin-left: 12px;
  white-space: nowrap;
}

.header-subtitle {
  color: #99a1af;
  font-size: 16px;
  margin-top: 12px;
  margin-left: 4px;
  white-space: nowrap;
}

.features-container {
  border-radius: 28px;
  background-color: #fdfffd;
  margin-top: 6px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  min-width: 434px;
  padding: 24px 20px 22px 20px;
}

.feature-list {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
}

.feature-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px 2px 8px;
}

.feature-icon {
  color: #b7bdc7;
  font-size: 12px;
  width: 12px;
  height: 12px;
}

.feature-title {
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  margin-left: 14px;
  white-space: nowrap;
}

.feature-item-2 {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px 2px 8px;
}

.feature-item-3 {
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 6px 5px 6px;
}

.feature-item-4 {
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  padding-left: 8px;
  padding-top: 5px;
  padding-bottom: 2px;
  align-items: center;
}

.feature-description-3 {
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  margin-left: 12px;
  white-space: nowrap;
}

.feature-item-5 {
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 8px 2px 8px;
}

.feature-item-7 {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px 2px 8px;
}

.feature-item-8 {
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 6px 2px 6px;
}

.premium-feature-icon {
  color: #b7bdc7;
  font-size: 16px;
  width: 16px;
  height: 16px;
}

.feature-description-7 {
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  white-space: nowrap;
}

.feature-item-9 {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 6px 2px 6px;
}

.feature-description-8 {
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  white-space: nowrap;
}

.feature-item-10 {
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 4px 2px 4px;
}

.billing-feature-icon {
  color: #b7bdc7;
  font-size: 18px;
  width: 18px;
  height: 18px;
}

.feature-item-11 {
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px 2px 8px;
}

.pricing-label {
  color: #99a1af;
  font-size: 16px;
  margin-top: 218px;
  margin-left: 10px;
}

.pricing-details {
  margin-top: 2px;
  align-self: flex-start;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.price-amount {
  color: #000000;
  font-size: 27px;
  white-space: nowrap;
}

.price-frequency {
  color: #99a1af;
  font-size: 16px;
  margin-left: 4px;
  margin-bottom: 4px;
  white-space: nowrap;
}
</style>