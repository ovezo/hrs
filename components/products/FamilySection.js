import { SectionHeader } from '../robots/v3/ui';
import ProductCard from './ProductCard';

export default function FamilySection({ family }) {
  return (
    <section id={family.id} className={`relative ${family.background} py-20 scroll-mt-24 md:py-28`}>
      <div className="mx-auto max-w-[1440px] px-6 md:px-16">
        <SectionHeader code={family.code} title={family.title} sub={family.sub} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {family.products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
