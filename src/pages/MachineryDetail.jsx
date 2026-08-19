// MachineryDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { machineryCategories } from '../MachineryData';
import { ArrowLeft, ShieldCheck, Cpu, Tag } from 'lucide-react';

const MachineryDetail = () => {
  const { slug } = useParams();

  const machine = machineryCategories
    .flatMap(cat => cat.items)
    .find(m => m.slug === slug);

  if (!machine) {
    return (
      <>
        <Helmet>
          <title>Item Not Found | Machinery Catalog</title>
          <meta name="robots" content="noindex, follow" />
        </Helmet>
        <div className="py-32 text-center bg-[var(--background)] text-[var(--secondary)]">
          <h3 className="text-2xl font-black uppercase">Industrial Item Not Found</h3>
          <Link to="/machinery" className="text-[var(--primary)] font-bold underline mt-4 block">Return to Catalog</Link>
        </div>
      </>
    );
  }

  return (
    <>
      {/* --- STANDARD DYNAMIC SEO META TAGS --- */}
      <Helmet>
        <title>{`${machine.name} | Food Machinery Specs & Pricing`}</title>
        <meta 
          name="description" 
          content={machine.desc ? machine.desc.slice(0, 155) : `Explore technical specifications, features, and industrial pricing for ${machine.name}.`} 
        />
        <meta 
          name="keywords" 
          content={`${machine.name}, food processing machine, industrial specs, commercial machinery, ${machine.specs ? machine.specs.join(', ') : ''}`} 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://yourdomain.com/machinery/${machine.slug || slug}`} />

        {/* Open Graph Meta Tags for Social & Messaging Previews */}
        <meta property="og:title" content={machine.name} />
        <meta property="og:description" content={machine.desc || `Technical specification sheet for ${machine.name}.`} />
        <meta property="og:image" content={machine.img} />
        <meta property="og:type" content="product" />
      </Helmet>

      <div className="min-h-screen bg-[var(--background)] text-[var(--text-dark)] pt-12 pb-24">
        {/* --- HERO BANNER --- */}
        <section className="relative h-[30vh] flex items-center justify-center bg-[var(--secondary)] text-center px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(${machine.img})` }}></div>
          <div className="relative z-10">
            <Link to="/machinery" className="inline-flex items-center gap-2 bg-[var(--primary)] text-[var(--text-light)] px-5 py-2 rounded-full font-black text-[9px] uppercase tracking-widest hover:bg-[var(--primary-light)] transition-all shadow-lg hover:-translate-y-0.5 mb-2">
              <ArrowLeft size={12} /> Back to Catalog
            </Link>
          </div>
        </section>

        {/* --- CORE DATA LAYOUT --- */}
        <div className="container mx-auto px-6 mt-12">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Block: Image View */}
            <div className="lg:col-span-5 bg-[var(--background)] border border-[var(--border)] p-6 rounded-3xl sticky top-28 shadow-sm">
              <div className="h-80 w-full bg-[var(--surface)] rounded-2xl overflow-hidden mb-4 flex items-center justify-center p-4 border border-[var(--border)]">
                <img src={machine.img} alt={machine.name} className="max-w-full max-h-full object-contain" />
              </div>
            </div>

            {/* Right Block: Tech Specifics & Pricing Panel */}
            <div className="lg:col-span-7">
              <span className="text-[var(--primary)] font-black uppercase tracking-[0.2em] text-[10px] block mb-2"> COMMERCIALLY CERTIFIED SYSTEMS</span>
              <h1 className="text-2xl md:text-4xl font-black text-[var(--secondary)] uppercase tracking-tight leading-none mb-4 italic">{machine.name}</h1>
              
              {/* Commercial Valuation Container */}
              <div className="mb-6 flex items-center gap-2 bg-[var(--accent)] border border-[var(--primary-light)]/30 px-4 py-3 rounded-xl w-fit">
                <Tag size={18} className="text-[var(--primary)]" />
                <span className="text-xs uppercase font-black text-[var(--text-muted)] tracking-wider">Industrial Valuation:</span>
                <span className="text-xl font-black text-[var(--secondary)] ml-1">{machine.price}</span>
              </div>

              <p className="text-lg text-[var(--text-muted)] font-serif italic leading-relaxed mb-8 border-l-4 border-[var(--primary)] pl-6">"{machine.desc}"</p>

              {/* Spec Sheet Parameters Block */}
              <div className="bg-[var(--background)] p-8 border border-[var(--border)] rounded-3xl shadow-sm mb-8">
                <h4 className="font-black uppercase tracking-wider text-[var(--secondary)] text-xs mb-5 flex items-center gap-2">
                  <Cpu size={16} className="text-[var(--primary)]" /> Data Parameters:
                </h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {machine.specs.map((sp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[var(--text-dark)] text-xs font-bold uppercase tracking-wide leading-tight">
                      <ShieldCheck size={14} className="text-[var(--primary)] mt-0.5 flex-shrink-0" /> {sp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default MachineryDetail;