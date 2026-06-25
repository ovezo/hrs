import { createLearnCard } from '@/lib/learnShareImage';

export { alt, size, contentType } from '@/lib/learnShareImage';

export default function Image() {
  return createLearnCard({
    title: 'Humanoid robots, explained.',
    category: 'Learn hub',
  });
}
