<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
import { logger } from '~/utils/logger';

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

<style scoped lang="scss">
@import '~/style/index.scss';
</style>
