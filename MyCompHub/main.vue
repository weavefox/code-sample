<template>
  <div :class="$style['container-wrapper']">
    <div :class="$style['inner-container']">
      <HeaderSection />
      <CommunityAnnouncement />
      <EventList />
    </div>
  </div>
</template>

<script>
import HeaderSection from './HeaderSection/main.vue';
import CommunityAnnouncement from './CommunityAnnouncement/main.vue';
import EventList from './EventList/main.vue';

export default {
  components: { HeaderSection, CommunityAnnouncement, EventList }
};
</script>

<style module>
.container-wrapper {
  padding: 2px 2px 2px 0px;
}

.inner-container {
  display: flex;
  flex-direction: column;
}
</style>