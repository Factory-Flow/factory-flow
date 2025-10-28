//import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
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
    <Container id="features" sx={{ py: { xs: 8, sm: 12 } }}>
      <Box sx={{ maxWidth: { xs: '100%', md: '60%' }, mb: { xs: 6, md: 8 } }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{ fontWeight: 600, color: 'text.primary' }}
        >
          Built for the teams who run the floor
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1.5 }}>
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
            borderColor: 'divider',
            borderRadius: 3,
            boxShadow: 'none',
            p: { xs: 3, md: 5 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 5 },
            alignItems: { md: 'center' },
            backgroundColor: 'background.paper',
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: { xs: 2, md: 2.5 },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'primary.light',
                  color: 'primary.main',
                }}
              >
                <AutoGraphIcon sx={{ fontSize: 22 }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ textTransform: 'uppercase', letterSpacing: 1, color: 'text.secondary' }}
              >
                Analytics
              </Typography>
            </Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, fontSize: { xs: 32, md: 38 }, color: 'text.primary' }}
            >
              Turn data into decisions.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 480, color: 'text.secondary' }}>
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
                maxWidth: 340,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                gap: 2.5,
                p: { xs: 2.5, md: 3 },
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
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'primary.light',
                    color: 'primary.main',
                  }}
                >
                  <QueryStatsRoundedIcon sx={{ fontSize: 24 }} />
                </Box>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                    Shift OEE
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    92%
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: 1,
                  color: 'text.primary',
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
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      px: 1.25,
                      py: 1,
                    }}
                  >
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
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
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: 0.75,
                  px: 1,
                  pb: 0.5,
                  minHeight: 120,
                }}
              >
                {[
                  { id: 'shift-a', height: 42 },
                  { id: 'shift-b', height: 68 },
                  { id: 'shift-c', height: 60 },
                  { id: 'shift-d', height: 92 },
                  { id: 'shift-e', height: 76 },
                  { id: 'shift-f', height: 104 },
                ].map(({ id, height }) => (
                  <Box
                    key={id}
                    sx={{
                      flex: 1,
                      minWidth: 8,
                      height,
                      borderRadius: 1,
                      backgroundColor: 'primary.main',
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
            borderColor: 'divider',
            borderRadius: 3,
            boxShadow: 'none',
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 2.5 },
            justifyContent: 'space-between',
            backgroundColor: 'background.paper',
            minHeight: { xs: 260, md: 300 },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 2.5 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'warning.light',
                  color: 'warning.dark',
                }}
              >
                <NotificationsActiveRoundedIcon sx={{ fontSize: 22 }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ textTransform: 'uppercase', letterSpacing: 1, color: 'text.secondary' }}
              >
                Smart alerts
              </Typography>
              <Chip
                label="Coming soon"
                size="small"
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  letterSpacing: 0.75,
                  backgroundColor: 'background.default',
                }}
              />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: 26, md: 30 } }}>
              Never miss an event.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 420, color: 'text.secondary' }}>
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
              { label: 'CNC 04', status: 'Cycle time trending up', color: 'warning.main' },
              { label: 'Robot 46', status: 'Idle for 10 mins', color: 'error.main' },
              { label: 'Press 10', status: 'Cycle time hold', color: 'error.main' },
            ].map(({ label, status, color }) => (
              <Box
                key={label}
                sx={{
                  px: 1.25,
                  py: 0.75,
                  borderRadius: 999,
                  border: '1px solid',
                  borderColor: 'divider',
                  fontSize: 12,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.75,
                  backgroundColor: 'background.default',
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: color,
                  }}
                />
                <Box component="span">{label}</Box>
                <Box
                  component="span"
                  sx={{ fontSize: 10, letterSpacing: 0.5, textTransform: 'uppercase', color: 'text.secondary' }}
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
            borderColor: 'divider',
            borderRadius: 3,
            boxShadow: 'none',
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 2.5 },
            justifyContent: 'space-between',
            backgroundColor: 'background.paper',
            minHeight: { xs: 260, md: 300 },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 2.5 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'info.light',
                  color: 'info.dark',
                }}
              >
                <ViewInArRoundedIcon sx={{ fontSize: 22 }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ textTransform: 'uppercase', letterSpacing: 1, color: 'text.secondary' }}
              >
                3D layout studio
              </Typography>
              <Chip
                label="Coming soon"
                size="small"
                sx={{
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  letterSpacing: 0.75,
                  backgroundColor: 'background.default',
                }}
              />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: 26, md: 30 } }}>
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
              p: 1,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'background.default',
            }}
          >
            {[
              { name: 'Assembly', span: 2 },
              { name: 'Inspection', span: 1 },
              { name: 'Packout', span: 1 },
              { name: 'Storage', span: 2 },
              { name: 'Shipping', span: 2 },
            ].map(({ name, span }) => (
              <Box
                key={name}
                sx={{
                  gridColumn: `span ${span}`,
                  borderRadius: 1,
                  border: '1px dashed',
                  borderColor: 'divider',
                  color: 'text.secondary',
                  fontWeight: 600,
                  fontSize: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  py: 0.75,
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
            borderColor: 'divider',
            borderRadius: 3,
            boxShadow: 'none',
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 2.5 },
            justifyContent: 'space-between',
            backgroundColor: 'background.paper',
            minHeight: { xs: 240, md: 280 },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 2.5 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'secondary.light',
                  color: 'secondary.main',
                }}
              >
                <GroupsRoundedIcon sx={{ fontSize: 22 }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ textTransform: 'uppercase', letterSpacing: 1, color: 'text.secondary' }}
              >
                Team collaboration
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: 26, md: 30 } }}>
              Single source of truth.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 380, color: 'text.secondary' }}>
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
                  border: '1px solid',
                  borderColor: 'divider',
                  textAlign: 'center',
                  py: 1.25,
                  fontWeight: 600,
                  fontSize: 14,
                  color: 'text.secondary',
                  backgroundColor: 'background.default',
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
            borderColor: 'divider',
            borderRadius: 3,
            boxShadow: 'none',
            p: { xs: 3, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 2.5 },
            justifyContent: 'space-between',
            backgroundColor: 'background.paper',
            minHeight: { xs: 260, md: 300 },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 2.5 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'success.light',
                  color: 'success.main',
                }}
              >
                <CodeRoundedIcon sx={{ fontSize: 22 }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ textTransform: 'uppercase', letterSpacing: 1, color: 'text.secondary' }}
              >
                Easy setup
              </Typography>
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: 26, md: 30 } }}>
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
                description: 'Pull live status for every cell on the floor.',
              },
              {
                method: 'POST',
                path: '/api/v1/events/downtime',
                description: 'Log a downtime event with root cause notes.',
              },
            ].map(({ method, path, description }) => (
              <Box
                key={`${method}-${path}`}
                sx={{
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  backgroundColor: 'background.default',
                  px: 2,
                  py: 1.5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.75,
                  color: 'text.primary',
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: 0.75,
                    color: 'text.secondary',
                  }}
                >
                  {method}
                </Box>
                <Box
                  component="code"
                  sx={{
                    fontSize: 16,
                    fontWeight: 600,
                    backgroundColor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 1,
                    px: 1,
                    py: 0.5,
                    display: 'inline-block',
                  }}
                >
                  {path}
                </Box>
                <Typography variant="caption" sx={{ lineHeight: 1.5, color: 'text.secondary' }}>
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
