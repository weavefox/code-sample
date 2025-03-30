<template>
  <div :class="$style['event-container']">
    <div :class="$style['event-header']">
      <img src="https://weavefox.alipay.com/assets/1ff06ae3-3ddc-4504-a074-21515cb6a41b.png" :class="$style['featured-image']" />
      <div :class="$style['event-body']">
        <div :class="$style['event-item']">
          <span :class="$style['event-title']">
            “同西游， 见万相” 主题LoRA风格挑战赛来袭！ 万元奖金池+猫超卡+限...
          </span>
          <span :class="$style['event-description']">
            在通义万相Wan2.1的文生视频模型的基础上训练LoRA模型、以《西游记》的经典人物或故事为...
          </span>
        </div>
        <div :class="$style['event-item']">
          <ElTag color="rgb(234,254,255)" :class="$style['event-tag']">
            活动动态
          </ElTag>
          <div :class="$style['date-container']">
            <img src="https://weavefox.alipay.com/assets/10a7f786-45cb-48e9-beae-f202abfbf36f.png" :class="$style['date-icon']" />
            <span :class="$style['event-date']">
              2025-03-13
            </span>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style['event-details']">
      <div :class="$style['related-event']">
        <img src="https://weavefox.alipay.com/assets/2120dba3-676f-4c48-93c9-ecafdcc9a2dd.png" :class="$style['thumbnail-image']" />
        <div :class="$style['related-content']">
          <div :class="$style['related-info']">
            <span :class="$style['related-title']">
              欧莱雅集团首届美妆科技黑客松大赛
            </span>
            <span :class="$style['related-subtitle']">
              科技大FUN颂 BEAUTY TECHATHON
            </span>
          </div>
          <img src="https://weavefox.alipay.com/assets/d5003336-aa7a-4512-b7e7-d9a79c2951ce.png" :class="$style['secondary-thumbnail']" />
          <div :class="$style['related-footer']">
            <ElTag color="rgb(234,254,255)" :class="$style['event-tag-2']">
              活动动态
            </ElTag>
            <span :class="$style['update-item-date']">
              2025-03-11
            </span>
          </div>
        </div>
      </div>
      <div :class="$style['additional-info']">
        <div :class="$style['additional-content']">
          <div :class="$style['community-update']">
            <img src="https://weavefox.alipay.com/assets/8acd76e2-f72f-4f6a-a2e9-b9533ab6ca28.png" :class="$style['community-update-image']" />
            <span :class="$style['update-title']">
              魔搭社区模型速递(3.2-3.8）
            </span>
          </div>
          <ElTag color="rgb(232,229,253)" :class="$style['product-news-tag']">
            产品动态
          </ElTag>
        </div>
        <div :class="$style['update-footer']">
          <span :class="$style['update-description']">
            @魔搭ModelScope本期社区进展: 1340个模型,220个数据集, 91个创新应用, 8篇内容
          </span>
          <div :class="$style['community-update']">
            <img src="https://weavefox.alipay.com/assets/0abac4c5-c7d3-497b-ad57-5dfe1b8a2f49.png" :class="$style['update-date-icon']" />
            <span :class="$style['event-date']">
              2025-03-10
            </span>
          </div>
        </div>
      </div>
      <div :class="$style['update-date-container']">
        <img src="https://weavefox.alipay.com/assets/a16d0b38-ca03-465a-94b5-29d6168345ae.png" :class="$style['video-model-image']" />
        <div :class="$style['update-item']">
          <div :class="$style['event-item']">
            <span :class="$style['update-item-title']">
              通义万相Wan2.1视频模型开源！视频生成模型新标杆，支持中文字效+...
            </span>
            <span :class="$style['event-description']">
              2025年1月， 阿里通义万相Wan2.1模型登顶Vbench榜首第一，超越Sora、HunyuanVideo、 Mini..
            </span>
          </div>
          <div :class="$style['event-item']">
            <ElTag color="rgb(232,229,253)" :class="$style['product-news-tag-2']">
              产品动态
            </ElTag>
            <div :class="$style['date-container']">
              <img src="https://weavefox.alipay.com/assets/8487dcbf-9f02-4c3e-a778-6ae3e94b6532.png" :class="$style['update-date-icon']" />
              <span :class="$style['event-date']">
                2025-02-26
              </span>
            </div>
          </div>
        </div>
      </div>
      <div :class="$style['community-highlight-container']">
        <img src="https://weavefox.alipay.com/assets/6cf2b8ec-ffa7-43b6-adc3-97ae746718af.png" :class="$style['thumbnail-image']" />
        <div :class="$style['update-item']">
          <div :class="$style['event-item']">
            <span :class="$style['highlight-title']">
              Kimi开源Moonlight-16B-A3B:基于Muon优化器的高效大模型，性能...
            </span>
            <span :class="$style['highlight-description']">
              最近，Muon优化器在训练小规模语言模型方面展示了强大的效果，但其在大规模模型上的可扩...
            </span>
          </div>
          <div :class="$style['event-item']">
            <ElTag color="rgb(232,229,253)" :class="$style['product-news-tag-2']">
              产品动态
            </ElTag>
            <div :class="$style['date-container']">
              <img src="https://weavefox.alipay.com/assets/7c33c503-241b-4b7a-9054-175914da4795.png" :class="$style['update-date-icon']" />
              <span :class="$style['event-date']">
                2025-02-25
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style module>
.event-container {
  background-color: #ffffff;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  padding: 8px 28px 10px 30px;
}

.event-header {
  border-radius: 14px;
  background-color: #f7f9fd;
  border-color: #5e4bf6;
  border-style: solid;
  border-width: 2px;
  margin-right: 2px;
  display: flex;
  flex-direction: row;
  padding: 16px 16px 28px 18px;
}

.featured-image {
  border-radius: 2px;
  flex-shrink: 0;
  width: 110px;
  height: 62px;
}

.event-body {
  flex: 1;
  margin-left: 14px;
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.event-item {
  display: flex;
  flex-direction: column;
}

.event-title {
  color: #272549;
  font-size: 14px;
  margin-left: 2px;
  white-space: nowrap;
  display: box;
  overflow: hidden;
  webkit-line-clamp: 1;
  webkit-box-orient: vertical;
}

.event-description {
  color: #8284a1;
  font-size: 14px;
  margin-top: 15px;
  white-space: nowrap;
  display: box;
  overflow: hidden;
  webkit-line-clamp: 1;
  webkit-box-orient: vertical;
}

.event-tag {
  color: #53a2a5;
  font-size: 14px;
  align-self: flex-end;
  margin-right: 2px;
}

.date-container {
  margin-top: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.date-icon {
  border-radius: 3px;
  flex-shrink: 0;
  width: 10px;
  height: 10px;
}

.event-date {
  color: #8284a1;
  font-size: 14px;
  margin-left: 10px;
  white-space: nowrap;
}

.event-details {
  margin-top: 12px;
  margin-right: 2px;
  display: flex;
  flex-direction: column;
  gap: 12;
}

.related-event {
  border-radius: 13px;
  background-color: #f7f9fd;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 18px 16px 18px;
}

.thumbnail-image {
  border-radius: 2px;
  flex-shrink: 0;
  width: 108px;
  height: 82px;
}

.related-content {
  flex: 1;
  margin-left: 16px;
  display: flex;
  flex-direction: row;
}

.related-info {
  align-self: center;
  display: flex;
  flex-direction: column;
}

.related-title {
  color: #272549;
  font-size: 14px;
  font-weight: bold;
  margin-left: 2px;
  white-space: nowrap;
}

.related-subtitle {
  color: #8284a1;
  font-size: 14px;
  margin-top: 15px;
}

.secondary-thumbnail {
  border-radius: 3px;
  flex-shrink: 0;
  width: 10px;
  margin-left: 795px;
  height: 10px;
  align-self: flex-end;
  margin-bottom: 6px;
}

.related-footer {
  margin-left: 12px;
  align-self: center;
  display: flex;
  flex-direction: column;
}

.event-tag-2 {
  color: #53a2a5;
  font-size: 14px;
  margin-left: 2px;
}

.update-item-date {
  color: #8284a1;
  font-size: 14px;
  margin-top: 16px;
  white-space: nowrap;
}

.additional-info {
  border-radius: 13px;
  background-color: #f7f9fd;
  display: flex;
  flex-direction: column;
  padding: 18px 18px 28px 18px;
}

.additional-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.community-update {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.community-update-image {
  flex-shrink: 0;
  border-radius: 3px;
  width: 110px;
  height: 48px;
}

.update-title {
  color: #272549;
  font-size: 14px;
  font-weight: bold;
  margin-left: 12px;
  white-space: nowrap;
}

.product-news-tag {
  color: #5e4bf6;
  font-size: 14px;
}

.update-footer {
  margin-top: 2px;
  margin-left: 124px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.update-description {
  color: #8284a1;
  font-size: 14px;
  white-space: nowrap;
}

.update-date-icon {
  border-radius: 4px;
  flex-shrink: 0;
  width: 10px;
  height: 10px;
}

.update-date-container {
  border-radius: 14px;
  background: linear-gradient(0deg, #f7f9fd, #dfe1fc);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 18px 16px 18px;
}

.video-model-image {
  border-radius: 2px;
  flex-shrink: 0;
  width: 108px;
  height: 80px;
}

.update-item {
  flex: 1;
  margin-left: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.update-item-title {
  color: #272549;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  display: box;
  overflow: hidden;
  webkit-line-clamp: 1;
  webkit-box-orient: vertical;
}

.product-news-tag-2 {
  color: #5e4bf6;
  font-size: 14px;
  align-self: flex-end;
  margin-right: 2px;
}

.community-highlight-container {
  border-radius: 23px;
  background-color: #f7f9fd;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 18px 18px 18px;
}

.highlight-title {
  color: #272549;
  font-size: 14px;
  font-weight: bold;
  margin-left: 2px;
  white-space: nowrap;
  display: box;
  overflow: hidden;
  webkit-line-clamp: 1;
  webkit-box-orient: vertical;
}

.highlight-description {
  color: #8284a1;
  font-size: 14px;
  margin-top: 14px;
  white-space: nowrap;
  display: box;
  overflow: hidden;
  webkit-line-clamp: 1;
  webkit-box-orient: vertical;
}
</style>