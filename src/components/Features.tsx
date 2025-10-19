//import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export default function Features() {
  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ maxWidth: { xs: '100%', md: '60%' }, mb: { xs: 6, md: 10 } }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{ fontWeight: 600, color: 'text.primary' }}
        >
          Built for the teams who run the floor
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          Factory Flow gives operations leaders a visual command center for
          layout planning, production analytics, and cross-team collaboration.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: { xs: '1fr', md: 'repeat(12, minmax(0, 1fr))' },
        }}
      >
        <Card
          variant="outlined"
          sx={{
            gridColumn: { xs: '1 / -1', md: '1 / -1' },
            border: 'none',
            borderRadius: 4,
            p: { xs: 3, md: 6 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 3, md: 6 },
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(240, 248, 255, 1), rgba(205, 219, 234, 1))',
            minHeight: { xs: 260, md: 320 },
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, md: 3 },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 247, 237, 0.15)',
                  color: '#22d3ee',
                }}
              >
                <AutoGraphIcon sx={{ fontSize: 24 }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ textTransform: 'uppercase', letterSpacing: 1 }}
              >
                Analytics
              </Typography>
            </Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, fontSize: { xs: 32, md: 40 } }}
            >
              Turn data into decisions.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 480 }}>
              Gain full visibility into production performance. Track part counts, cycle times, and OEE across every workstation in real time. Identify bottlenecks, monitor downtime trends, and make data-driven decisions that improve throughput and efficiency.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: 360,
                height: { xs: 220, md: 260 },
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.25)',
                background:
                  'linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(34, 211, 238, 0.2))',
                boxShadow: '0 24px 60px rgba(15, 23, 42, 0.45)',
                backdropFilter: 'blur(18px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
                p: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(34, 211, 238, 0.2)',
                    color: '#22d3ee',
                    boxShadow: '0 12px 24px rgba(34, 211, 238, 0.35)',
                  }}
                >
                  <QueryStatsRoundedIcon sx={{ fontSize: 30 }} />
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, opacity: 0.75 }}>
                    Shift OEE
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: '#f8fafc' }}>
                    92%
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: 1.5,
                  color: '#f8fafc',
                }}
              >
                {[
                  { label: 'Throughput', value: '+14%' },
                  { label: 'Downtime', value: '-9%' },
                  { label: 'Scrap', value: '1.2%' },
                ].map(({ label, value }) => (
                  <Box
                    key={label}
                    sx={{
                      borderRadius: 3,
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      background: 'rgba(15, 23, 42, 0.35)',
                      px: 1.5,
                      py: 1,
                    }}
                  >
                    <Typography variant="caption" sx={{ opacity: 0.75 }}>
                      {label}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {value}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  flex: 1,
                  borderRadius: 3,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background:
                    'linear-gradient(180deg, rgba(226, 232, 240, 0.08) 0%, rgba(14, 165, 233, 0.3) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: 1,
                  px: 2,
                  pb: 1.5,
                  overflow: 'hidden',
                }}
              >
                {[
                  { id: 'shift-a', height: 48 },
                  { id: 'shift-b', height: 72 },
                  { id: 'shift-c', height: 66 },
                  { id: 'shift-d', height: 94 },
                  { id: 'shift-e', height: 82 },
                  { id: 'shift-f', height: 110 },
                ].map(({ id, height }) => (
                  <Box
                    key={id}
                    sx={{
                      flex: 1,
                      minWidth: 10,
                      height,
                      borderRadius: 999,
                      background:
                        'linear-gradient(180deg, rgba(34, 211, 238, 0.6) 0%, rgba(14, 165, 233, 0.95) 100%)',
                      boxShadow: '0 12px 24px rgba(14, 165, 233, 0.45)',
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            gridColumn: { xs: '1 / -1', md: 'span 6' },
            border: 'none',
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 3 },
            justifyContent: 'space-between',
            background: 'linear-gradient(135deg, rgba(255, 238, 226, 1), rgba(233, 233, 233, 1))',
            minHeight: { xs: 260, md: 320 },
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ff8800e2',
                }}
              >
                <NotificationsActiveRoundedIcon sx={{ fontSize: 24 }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ textTransform: 'uppercase', letterSpacing: 1 }}
              >
                Smart Alerts
              </Typography>
              <Box
                  component="span"
                  sx={{
                    px: 1.25,
                    py: 0.25,
                    borderRadius: 999,
                    backgroundColor: 'rgba(0, 0, 0, 0.15)',
                    color: '#000000ff',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: 0.75,
                    textTransform: 'uppercase',
                  }}
                >
                  Coming soon
                </Box>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: 28, md: 32 } }}>
              Never miss an event.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 420 }}>
              Stay proactive, not reactive. Configure thresholds for cycle time, downtime, or reject rates, and receive instant alerts when performance deviates from plan. Assign responsibility and close the loop within the same workspace.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              mt: { xs: 2, md: 0 },
            }}
          >
            {[
              { label: 'CNC 04', status: 'Cycle time trending up', color: '#ff7700ff' },
              { label: 'Robot 46', status: 'Idle for 10 mins', color: '#ff0000ff' },
              { label: 'Press 10', status: 'Cycle time ', color: '#ff0000ff' },
            ].map(({ label, status, color }) => (
              <Box
                key={label}
                sx={{
                  px: 1.5,
                  py: 0.75,
                  borderRadius: 999,
                  border: '1px solid rgba(255,255,255,0.35)',
                  fontSize: 12,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  background: 'rgba(255,255,255,0.08)',
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: color,
                    boxShadow: `0 0 12px ${color}`,
                  }}
                />
                <Box component="span">{label}</Box>
                <Box
                  component="span"
                  sx={{ fontSize: 10, opacity: 0.8, textTransform: 'uppercase' }}
                >
                  {status}
                </Box>
              </Box>
            ))}
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            gridColumn: { xs: '1 / -1', md: 'span 6' },
            border: 'none',
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 3 },
            justifyContent: 'space-between',
            minHeight: { xs: 260, md: 320 },
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 1), rgba(233, 233, 233, 1))',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(45, 171, 255, 0.87)',
                  color: '#000000ff',
                }}
              >
                <ViewInArRoundedIcon sx={{ fontSize: 24 }} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{ textTransform: 'uppercase', letterSpacing: 1, color: 'text.secondary' }}
                >
                  3D Layout Studio
                </Typography>
                <Box
                  component="span"
                  sx={{
                    px: 1.25,
                    py: 0.25,
                    borderRadius: 999,
                    backgroundColor: 'rgba(0, 0, 0, 0.15)',
                    color: '#000000ff',
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: 0.75,
                    textTransform: 'uppercase',
                  }}
                >
                  Coming soon
                </Box>
              </Box>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: 28, md: 32 } }}>
              Experience your factory in 3D.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 420, color: 'text.secondary' }}>
              Create an interactive 3D layout of your facility and overlay live analytics directly on each machine or cell. Visualize flow, utilization, and performance in real time within a digital representation of your plant.
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: 2, md: 0 },
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: 1,
              p: 1.5,
              borderRadius: 3,
              border: '1px solid rgba(37, 99, 235, 0.2)',
              background:
                'linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(99, 102, 241, 0.18))',
            }}
          >
            {[
              { name: 'Assembly', span: 2, color: 'rgba(37, 99, 235, 0.45)' },
              { name: 'Inspection', span: 1, color: 'rgba(96, 165, 250, 0.45)' },
              { name: 'Packout', span: 1, color: 'rgba(59, 130, 246, 0.6)' },
              { name: 'Storage', span: 2, color: 'rgba(148, 163, 184, 0.35)' },
              { name: 'Shipping', span: 2, color: 'rgba(59, 130, 246, 0.35)' },
            ].map(({ name, span, color }) => (
              <Box
                key={`${name}-${color}`}
                sx={{
                  gridColumn: `span ${span}`,
                  borderRadius: 2,
                  background: color,
                  color: '#0f172a',
                  fontWeight: 600,
                  fontSize: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  py: 1,
                }}
              >
                {name}
              </Box>
            ))}
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            gridColumn: { xs: '1 / -1', md: 'span 5' },
            border: 'none',
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 3 },
            justifyContent: 'space-between',
            background: 'linear-gradient(135deg, #0b1120 0%, #312e81 100%)',
            color: '#e0e7ff',
            minHeight: { xs: 260, md: 320 },
            boxShadow: '0 30px 60px rgba(49, 46, 129, 0.35)',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(99, 102, 241, 0.25)',
                  color: '#c7d2fe',
                }}
              >
                <GroupsRoundedIcon sx={{ fontSize: 24 }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ textTransform: 'uppercase', letterSpacing: 1, opacity: 0.75 }}
              >
                Team Collaboration
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: 28, md: 32 } }}>
              Single source of truth.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 380 }}>
              Share dashboards and maintain full visibility into performance discussions and approvals — ensuring alignment from engineering to leadership.
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: 2, md: 0 },
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 1,
            }}
          >
            {['IT', 'OT'].map((team) => (
              <Box
                key={team}
                sx={{
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.2)',
                  textAlign: 'center',
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: 14,
                  background: 'rgba(99, 102, 241, 0.15)',
                }}
              >
                {team}
              </Box>
            ))}
          </Box>
        </Card>

        <Card
          variant="outlined"
          sx={{
            gridColumn: { xs: '1 / -1', md: 'span 7' },
            border: 'none',
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 3 },
            justifyContent: 'space-between',
            background:
              'linear-gradient(135deg, rgba(74, 222, 128, 0.15), rgba(16, 185, 129, 0.3))',
            color: 'text.primary',
            minHeight: { xs: 260, md: 320 },
            boxShadow: '0 20px 50px rgba(15, 118, 110, 0.18)',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#047857',
                }}
              >
                <CodeRoundedIcon sx={{ fontSize: 24 }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ textTransform: 'uppercase', letterSpacing: 1, color: 'text.secondary' }}
              >
                Easy setup
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: 28, md: 32 } }}>
              Developer friendly API.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 460, color: 'text.secondary' }}>
              Connect any machine or system in minutes. Factory Flow offers a simple, well-documented API that lets developers send production data or build custom integrations without complexity.
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: 2, md: 0 },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
              gap: 1.5,
            }}
          >
            {[
              {
                method: 'GET',
                path: '/api/v1/machines/status',
                description: 'Pull live status for every cell on the floor.'
              },
              {
                method: 'POST',
                path: '/api/v1/events/downtime',
                description: 'Log a downtime event with root cause notes.'
              },
            ].map(({ method, path, description }) => (
              <Box
                key={`${method}-${path}`}
                sx={{
                  borderRadius: 3,
                  border: '1px solid rgba(15, 118, 110, 0.35)',
                  backgroundColor: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(10px)',
                  px: 2,
                  py: 1.5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.75,
                  color: '#0f172a',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 0.5,
                    opacity: 0.75,
                  }}
                >
                  {method}
                </Box>
                <Box
                  component="code"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    backgroundColor: 'rgba(15, 118, 110, 0.08)',
                    borderRadius: 2,
                    px: 1,
                    py: 0.5,
                    display: 'inline-block',
                  }}
                >
                  {path}
                </Box>
                <Typography variant="caption" sx={{ lineHeight: 1.4, color: 'text.secondary' }}>
                  {description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
