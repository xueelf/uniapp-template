import { formatDate } from '@/utils/formatTime';

function print(message: any): void {
  const time = formatDate(new Date, 'YYY-mm-dd HH:MM:SS');
  console.log(`[${time}] ${message}`)
}

// TODO ／人◕ ‿‿ ◕人＼ debug warn
export default {
  info: (message?: any): void => print(message),
}
