<template>
  <div :class="$style['wrapper-2']">
    <span :class="$style['item-count']">
      3 items
    </span>
  </div>
</template>

<script>

export default {

};
</script>

<style module>
.wrapper-2 {
  background-color: #ffffff;
  width: 140px;
  display: flex;
  justify-content: flex-end;
  padding-left: 14px;
  padding-top: 12px;
  padding-right: 5px;
  position: absolute;
  top: 12px;
  left: 0px;
  height: 28px;
}

.item-count {
  color: #000000;
  font-size: 10px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
}
</style>