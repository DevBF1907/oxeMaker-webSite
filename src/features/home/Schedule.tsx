
import React from 'react';
import { SCHEDULE } from '../../core/constants';


interface ScheduleProps {
  showTitle?: boolean;
}

const Schedule: React.FC<ScheduleProps> = ({ showTitle = true }) => {
  return (
    <section id="programacao" className={`${showTitle ? 'py-24' : 'pb-24'} px-6 relative`}>
      <div className="container mx-auto">
        {showTitle && (
          <div className="mb-16">
            <h2 className="font-logo text-5xl md:text-7xl lg:text-8xl font-black mb-4 uppercase text-white">
              CRONOGRAMA DO <span className="text-oxe-yellow">EVENTO</span>
            </h2>
            <p className="font-mono text-white/60">log_cronograma: v1.0.final</p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {SCHEDULE.map((dayGroup, groupIdx) => (
            <div key={groupIdx} className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-logo text-6xl text-oxe-yellow opacity-20">{dayGroup.day.split('/')[0]}</span>
                <div>
                  <h3 className="font-logo text-3xl text-white uppercase leading-none">{dayGroup.label}</h3>
                  <p className="font-mono text-xs text-oxe-yellow uppercase tracking-widest">{dayGroup.day}</p>
                </div>
              </div>

              <div className="space-y-4">
                {dayGroup.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col gap-4 p-6 border border-white/10 hover:border-oxe-yellow hover:bg-white/5 transition-all group"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="font-logo text-3xl text-oxe-yellow italic whitespace-nowrap">
                        {item.time}
                      </div>
                      <span className="font-mono text-[10px] text-oxe-yellow border border-oxe-yellow px-2 py-0.5 uppercase">
                        {item.location}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-logo text-xl text-white uppercase group-hover:text-oxe-yellow transition-colors mb-2">
                        {item.activity}
                      </h4>
                      <p className="font-sans text-sm text-white/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
