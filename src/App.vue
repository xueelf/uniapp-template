<script setup lang="ts">
import logger from '@/utils/logger';
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

onLaunch(() => {
  logger.info('App Launch');
});
onShow(() => {
  logger.info('App Show');
});
onHide(() => {
  logger.info('App Hide');
});
</script>

<style scoped lang="scss"></style>
