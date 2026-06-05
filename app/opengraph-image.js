import { createShareImage } from '@/lib/shareImage';

export { alt, size, contentType } from '@/lib/shareImage';

export default function Image() {
  return createShareImage();
}
