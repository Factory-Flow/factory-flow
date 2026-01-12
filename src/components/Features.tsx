import { LineChart, Bell, Box, Users, Code } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center max-w-[800px] mx-auto mb-24">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-[-0.02em] leading-[1.1] mb-6 text-white">
            The digital layer for your production floor
          </h2>
          <p className="text-xl md:text-2xl text-secondary leading-relaxed">
            Reveal performance, inefficiencies, and opportunities hidden in your production processes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Feature - Analytics */}
          <div className="md:col-span-3 bg-white/[0.02] border card-border hover:card-border-hover rounded-2xl p-10 md:p-14 transition-all group">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400">
                  <LineChart className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="space-y-4">
                  <div className="text-xs font-medium text-blue-400 uppercase tracking-wider">Analytics</div>
                  <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-white leading-tight">
                    Turn data into decisions
                  </h3>
                </div>
                <p className="text-secondary text-lg leading-relaxed max-w-xl">
                  Gain full visibility into production performance. Track part counts, cycle times, and OEE across every workstation in real time. Identify bottlenecks, monitor downtime trends, and make data-driven decisions.
                </p>
              </div>

              <div className="flex-1 w-full bg-[#0d0e10]/60 rounded-xl border card-border p-6 backdrop-blur-sm">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <div className="text-xs font-medium text-tertiary uppercase tracking-wider mb-2">Shift OEE</div>
                    <div className="text-4xl font-semibold text-white">92%</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-2.5 py-1 rounded-md bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">+14%</div>
                  </div>
                </div>
                <div className="flex items-end gap-1.5 h-32">
                  {[40, 65, 50, 85, 70, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t opacity-80 hover:opacity-100 transition-opacity"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Smart Alerts */}
          <div className="md:col-span-2 bg-white/[0.02] border card-border hover:card-border-hover rounded-2xl p-8 transition-all flex flex-col justify-between min-h-[340px]">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400">
                  <Bell className="w-5 h-5" strokeWidth={2} />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border card-border text-[10px] font-medium text-tertiary uppercase tracking-wider">Coming Soon</span>
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-white mb-3 tracking-[-0.01em]">Never miss an event</h3>
                <p className="text-secondary leading-relaxed">
                  Stay proactive, not reactive. Configure thresholds for cycle time, downtime, or reject rates, and receive instant alerts.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-8">
              {[
                { label: 'CNC 04', status: 'Cycle time trending up', color: 'bg-orange-500' },
                { label: 'Robot 46', status: 'Idle for 10 mins', color: 'bg-red-500' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-[#0d0e10]/60 border card-border text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                  <span className="font-medium text-white">{item.label}</span>
                  <span className="text-xs text-tertiary ml-auto">{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Layout */}
          <div className="bg-white/[0.02] border card-border hover:card-border-hover rounded-2xl p-8 transition-all flex flex-col justify-between min-h-[340px]">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400">
                <Box className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-white mb-3 tracking-[-0.01em]">3D Layout</h3>
                <p className="text-secondary leading-relaxed">
                  Create an interactive 3D layout of your facility and overlay live analytics.
                </p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2 opacity-30">
              <div className="col-span-2 h-14 bg-white/[0.04] rounded-lg border card-border" />
              <div className="h-14 bg-white/[0.04] rounded-lg border card-border" />
              <div className="h-14 bg-white/[0.04] rounded-lg border card-border" />
            </div>
          </div>

          {/* Team Collaboration */}
          <div className="bg-white/[0.02] border card-border hover:card-border-hover rounded-2xl p-8 transition-all flex flex-col justify-between min-h-[340px]">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400">
                <Users className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-white mb-3 tracking-[-0.01em]">Collaboration</h3>
                <p className="text-secondary leading-relaxed">
                  Share dashboards and maintain full visibility into performance discussions.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              {['IT', 'OT', 'Mgmt'].map((team) => (
                <div key={team} className="flex-1 py-2.5 text-center rounded-lg bg-white/[0.03] border card-border text-sm text-secondary font-medium">
                  {team}
                </div>
              ))}
            </div>
          </div>

          {/* API */}
          <div className="md:col-span-2 bg-white/[0.02] border card-border hover:card-border-hover rounded-2xl p-8 transition-all flex flex-col justify-between min-h-[340px]">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-green-500/10 text-green-400">
                <Code className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-3xl font-semibold text-white mb-3 tracking-[-0.01em]">Developer friendly API</h3>
                <p className="text-secondary leading-relaxed max-w-lg">
                  Connect any machine or station in minutes. Factory Flow has a simple, well-documented API that lets developers send production data easily.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-2">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#0d0e10]/60 border card-border font-mono text-sm">
                <span className="text-orange-400 font-semibold text-xs">POST</span>
                <span className="text-secondary">/api/cnc_1/parts</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#0d0e10]/60 border card-border font-mono text-sm">
                <span className="text-green-400 font-semibold text-xs">GET</span>
                <span className="text-secondary">/api/cnc_1/cycle_time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
