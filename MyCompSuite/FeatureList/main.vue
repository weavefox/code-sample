<template>
  <div :class="$style['wrapper-4']">
    <div :class="$style['content-container']">
      <div :class="$style['main-container']">
        <div :class="$style['hardware-header']">
          <img src="https://weavefox.alipay.com/assets/d0be72bc-9fe7-4875-9d13-46e4f3ce2fd7.png" :class="$style['feature-image']" />
          <span :class="$style['pro-account-title']">
            HF Hub
          </span>
        </div>
        <span :class="$style['section-description']">
          Collaborate on Machine Learning
        </span>
        <div :class="$style['features-list']">
          <div :class="$style['feature-item']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['pro-feature-text']">
              Host unlimited public models, datasets
            </span>
          </div>
          <div :class="$style['feature-item-2']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['pro-feature-text']">
              Create unlimited orgs with no member limits
            </span>
          </div>
          <div :class="$style['feature-item-3']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['icon-check']" />
            <span :class="$style['feature-text']">
              Access the latest ML tools and open source
            </span>
          </div>
          <div :class="$style['feature-item-4']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['pro-feature-text']">
              Community support
            </span>
          </div>
        </div>
      </div>
      <span :class="$style['price-duration']">
        Forever
      </span>
      <span :class="$style['price-value']">
        Free
      </span>
    </div>
    <div :class="$style['pricing-section']">
      <div :class="$style['pricing-option']">
        <div :class="$style['hardware-header']">
          <img src="https://weavefox.alipay.com/assets/846760c7-36ca-43e8-b3b5-b338335d3ea8.png" :class="$style['pro-account-image']" />
          <span :class="$style['pro-account-title']">
            Pro Account
          </span>
        </div>
        <span :class="$style['pro-account-description']">
          Unlock advanced HF features
        </span>
        <div :class="$style['pro-features-list']">
          <div :class="$style['hardware-header']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['pro-feature-text-2']">
              ZeroGPU and Dev Mode for Spaces
            </span>
          </div>
          <div :class="$style['pro-feature-item']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['pro-feature-text-3']">
              Free credits across all Inference Providers
            </span>
          </div>
          <div :class="$style['pro-feature-item-2']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['pro-feature-text-3']">
              Get early access to upcoming features
            </span>
          </div>
          <div :class="$style['pro-feature-item-3']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['pro-feature-text']">
              Show your support with a Pro badge
            </span>
          </div>
        </div>
      </div>
      <span :class="$style['subscribe-text']">
        Subscribe for
      </span>
      <div :class="$style['price-details']">
        <span :class="$style['monthly-price']">
          $9
        </span>
        <span :class="$style['price-unit']">
          /month
        </span>
      </div>
    </div>
    <div :class="$style['hardware-section']">
      <div :class="$style['hardware-option']">
        <div :class="$style['hardware-header']">
          <img src="https://weavefox.alipay.com/assets/373fffb7-59a1-4859-bc75-dc73749e117d.png" :class="$style['hardware-image']" />
          <span :class="$style['hardware-title']">
            Spaces Hardware
          </span>
        </div>
        <span :class="$style['hardware-description']">
          Upgrade your Space compute
        </span>
        <div :class="$style['hardware-features-list']">
          <div :class="$style['hardware-header']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['icon-check']" />
            <span :class="$style['cpu-free-label']">
              Free CPUs
            </span>
          </div>
          <div :class="$style['content-container-2']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['pro-feature-text-3']">
              Build more advanced Spaces
            </span>
          </div>
          <div :class="$style['section-wrapper']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['pro-feature-text']">
              7 optimized hardware available
            </span>
          </div>
          <div :class="$style['feature-list']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['accelerator-description']">
              From CPU to GPU to Accelerators
            </span>
          </div>
        </div>
      </div>
      <span :class="$style['price-indicator']">
        Starting at
      </span>
      <div :class="$style['price-box']">
        <span :class="$style['placeholder-text']">
          so
        </span>
        <span :class="$style['price-unit']">
          /hour
        </span>
      </div>
    </div>
    <div :class="$style['image-container']">
      <div :class="$style['pricing-option']">
        <div :class="$style['hardware-header']">
          <img src="https://weavefox.alipay.com/assets/7bd73fc3-ee39-4743-9389-95b4866b4b38.png" :class="$style['infrastructure-image']" />
          <span :class="$style['hardware-title']">
            Inference Endpoints
          </span>
        </div>
        <span :class="$style['deployment-description']">
          Deploy models on fully managed infrastructure
        </span>
        <div :class="$style['security-section']">
          <div :class="$style['security-details']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['pro-feature-text-2']">
              Deploy dedicated Endpoints in seconds
            </span>
          </div>
          <div :class="$style['section-wrapper']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['pro-feature-text-3']">
              Keep your costs low
            </span>
          </div>
          <div :class="$style['security-feature']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['pro-feature-text']">
              Fully-managed autoscaling
            </span>
          </div>
          <div :class="$style['security-pricing']">
            <ElIconAntd :iconData="CheckOutlined" :class="$style['check-icon']" />
            <span :class="$style['security-title']">
              Enterprise security
            </span>
          </div>
        </div>
      </div>
      <span :class="$style['security-price-indicator']">
        Starting at
      </span>
      <div :class="$style['price-box']">
        <span :class="$style['price-value-2']">
          $0.032
        </span>
        <span :class="$style['price-unit-2']">
          /hour
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
.wrapper-4 {
  background-color: #ffffff;
  width: 918px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 24;
  column-gap: 21.5;
}

.content-container {
  border-radius: 26px;
  background-color: #fdfffd;
  border-color: #f2f4f9;
  border-style: solid;
  border-width: 1px;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: calc(50% - 11px);
  max-width: calc(50% - 11px);
  display: flex;
  flex-direction: column;
  padding: 26px 50px 15px 28px;
}

.main-container {
  display: flex;
  flex-direction: column;
}

.hardware-header {
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.feature-image {
  flex-shrink: 0;
  border-radius: 3px;
  width: 26px;
  height: 26px;
}

.pro-account-title {
  color: #101828;
  font-size: 20px;
  font-weight: bold;
  margin-left: 12px;
  white-space: nowrap;
}

.section-description {
  color: #99a1af;
  font-size: 16px;
  margin-top: 14px;
  margin-left: 2px;
}

.features-list {
  margin-top: 62px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
}

.feature-item {
  margin-left: 2px;
  margin-right: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.check-icon {
  color: #b7bdc7;
  font-size: 12px;
  width: 12px;
  height: 12px;
}

.pro-feature-text {
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  white-space: nowrap;
}

.feature-item-2 {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.feature-item-3 {
  margin-top: 24px;
  margin-left: 2px;
  margin-right: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.icon-check {
  color: #b7bdc7;
  font-size: 16px;
  width: 16px;
  height: 16px;
}

.feature-text {
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
  white-space: nowrap;
}

.feature-item-4 {
  margin-top: 20px;
  align-self: flex-start;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.price-duration {
  color: #99a1af;
  font-size: 16px;
  margin-top: 45px;
  margin-left: 2px;
}

.price-value {
  color: #000000;
  font-size: 27px;
  margin-top: 2px;
  margin-left: 4px;
}

.pricing-section {
  border-radius: 28px;
  background-color: #fdfffd;
  border-color: #eff0f3;
  border-style: solid;
  border-width: 1px;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: calc(50% - 11px);
  max-width: calc(50% - 11px);
  display: flex;
  flex-direction: column;
  padding: 26px 46px 20px 30px;
}

.pricing-option {
  margin-left: 2px;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
}

.pro-account-image {
  flex-shrink: 0;
  border-radius: 3px;
  width: 46px;
  height: 30px;
}

.pro-account-description {
  color: #99a1af;
  font-size: 16px;
  margin-top: 12px;
  margin-left: 2px;
}

.pro-features-list {
  margin-top: 64px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
}

.pro-feature-text-2 {
  color: #000000;
  font-size: 16px;
  margin-left: 14px;
  white-space: nowrap;
}

.pro-feature-item {
  margin-top: 22px;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.pro-feature-text-3 {
  color: #000000;
  font-size: 16px;
  margin-left: 15px;
  white-space: nowrap;
}

.pro-feature-item-2 {
  margin-top: 24px;
  margin-right: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.pro-feature-item-3 {
  margin-top: 20px;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.subscribe-text {
  color: #99a1af;
  font-size: 16px;
  margin-top: 50px;
  margin-left: 6px;
}

.price-details {
  margin-top: 2px;
  align-self: flex-start;
  margin-left: 6px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.monthly-price {
  color: #000000;
  font-size: 29px;
  white-space: nowrap;
}

.price-unit {
  color: #99a1af;
  font-size: 16px;
  margin-left: 10px;
  white-space: nowrap;
}

.hardware-section {
  border-radius: 27px;
  background-color: #ffffff;
  border-color: #f3f4f6;
  border-style: solid;
  border-width: 1px;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: calc(50% - 11px);
  max-width: calc(50% - 11px);
  display: flex;
  flex-direction: column;
  padding: 28px 28px 26px 28px;
}

.hardware-option {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
}

.hardware-image {
  border-radius: 3px;
  flex-shrink: 0;
  width: 26px;
  height: 26px;
}

.hardware-title {
  color: #101828;
  font-size: 16px;
  font-weight: bold;
  margin-left: 12px;
  white-space: nowrap;
}

.hardware-description {
  color: #99a1af;
  font-size: 16px;
  margin-top: 16px;
  margin-left: 2px;
}

.hardware-features-list {
  margin-top: 55px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
}

.cpu-free-label {
  color: #000000;
  font-size: 16px;
  margin-left: 10px;
  white-space: nowrap;
}

.content-container-2 {
  margin-top: 14px;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.section-wrapper {
  margin-top: 18px;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.feature-list {
  margin-top: 24px;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.accelerator-description {
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  margin-left: 12px;
  white-space: nowrap;
}

.price-indicator {
  color: #99a1af;
  font-size: 16px;
  margin-top: 54px;
  margin-left: 6px;
}

.price-box {
  margin-top: 2px;
  align-self: flex-start;
  margin-left: 8px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
}

.placeholder-text {
  color: #000000;
  font-size: 46px;
  white-space: nowrap;
}

.image-container {
  border-radius: 28px;
  background-color: #fdfffd;
  border-color: #eff0f3;
  border-style: solid;
  border-width: 1px;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: calc(50% - 11px);
  max-width: calc(50% - 11px);
  display: flex;
  flex-direction: column;
  padding: 26px 56px 14px 28px;
}

.infrastructure-image {
  flex-shrink: 0;
  border-radius: 3px;
  width: 26px;
  height: 28px;
}

.deployment-description {
  color: #99a1af;
  font-size: 16px;
  margin-top: 15px;
  margin-left: 4px;
  white-space: nowrap;
}

.security-section {
  margin-top: 60px;
  margin-left: 2px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
}

.security-details {
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.security-feature {
  margin-top: 12px;
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.security-pricing {
  margin-top: 12px;
  align-self: flex-start;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.security-title {
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  margin-left: 14px;
  white-space: nowrap;
}

.security-price-indicator {
  color: #99a1af;
  font-size: 16px;
  margin-top: 46px;
  margin-left: 8px;
}

.price-value-2 {
  color: #000000;
  font-size: 27px;
  white-space: nowrap;
}

.price-unit-2 {
  color: #99a1af;
  font-size: 16px;
  margin-left: 2px;
  white-space: nowrap;
}
</style>