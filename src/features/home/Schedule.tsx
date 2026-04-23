
import React from 'react';
import { SCHEDULE } from '../../core/constants';

const Schedule: React.FC = () => {
  return (
    <section id="programacao" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="font-logo text-5xl md:text-7xl lg:text-8xl font-black mb-4 uppercase text-white">
            CRONOGRAMA DO <span className="text-oxe-yellow">EVENTO</span>
          </h2>
          <p className="font-mono text-white/60">log_cronograma: v1.0.final</p>
        </div>

        <div className="max-w-4xl space-y-4">
          {SCHEDULE.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col md:flex-row gap-6 p-6 border border-white/10 hover:border-oxe-yellow hover:bg-white/5 transition-all group"
            >
              <div className="md:w-32 flex-shrink-0 font-logo text-4xl text-oxe-yellow italic">
                {item.time}
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                   <h4 className="font-logo text-2xl text-white uppercase group-hover:text-oxe-yellow transition-colors">{item.activity}</h4>
                   <span className="font-mono text-[10px] text-oxe-yellow border border-oxe-yellow px-2 py-0.5 uppercase">
                     {item.location}
                   </span>
                </div>
                <p className="font-sans text-sm text-white/50 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
