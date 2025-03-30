<template>
  <div :class="$style['container-wrapper']">
    <div :class="$style['image-container']">
      <img src="https://weavefox.alipay.com/assets/29651620-1f7a-412a-af73-04eacca8b932.png" :class="$style['announcement-image']" />
    </div>
    <div :class="$style['content-section']">
      <div :class="$style['title-section']">
        <span :class="$style['community-title']">
          ModelScope
        </span>
        <ElTag color="rgb(241,241,252)" :class="$style['tag-label']">
          社区公告
        </ElTag>
      </div>
      <span :class="$style['latest-announcement']">
        最新公告
      </span>
    </div>
  </div>
</template>

<script>

export default {

};
</script>

<style module>
.container-wrapper {
  background-color: #ffffff;
  width: 408px;
  align-self: flex-start;
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 28px 12px 28px;
}

.image-container {
  border-radius: 10px;
  background-color: #f7f9fd;
  width: 60px;
  height: 60px;
  padding: 10px 12px 16px 12px;
}

.announcement-image {
  flex-shrink: 0;
  border-radius: 3px;
  width: 34px;
  height: 34px;
  margin-left: 2px;
  margin-top: 2px;
  margin-right: 2px;
}

.content-section {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
}

.title-section {
  margin-left: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.community-title {
  color: #272549;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
}

.tag-label {
  color: #5e4bf6;
  font-size: 18px;
  font-weight: bold;
  margin-left: 12px;
}

.latest-announcement {
  color: #8284a1;
  font-size: 14px;
  margin-top: 6px;
}
</style>