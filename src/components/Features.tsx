import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const placeholderLine = (color: string) => ({
  height: 8,
  borderRadius: 999,
  backgroundColor: color,
});

export default function Features() {
  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Box sx={{ maxWidth: { xs: '100%', md: '60%' }, mb: { xs: 6, md: 10 } }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{ fontWeight: 600, color: 'text.primary', mb: 2 }}
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
            background:
              'linear-gradient(135deg, #0f172a 0%, #1d4ed8 55%, #22d3ee 100%)',
            color: '#f8fafc',
            boxShadow: '0 40px 80px rgba(15, 23, 42, 0.35)',
            overflow: 'hidden',
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
            <Typography
              variant="body2"
              sx={{ textTransform: 'uppercase', letterSpacing: 1, opacity: 0.8 }}
            >
              Layout Studio
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: 600, fontSize: { xs: 32, md: 40 } }}
            >
              Blueprint every inch.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 480 }}>
              Drop machines, conveyors, and work cells into a snap-to-grid
              workspace. Watch throughput, travel distances, and capacity update
              instantly as you shape the factory floor.
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
                height: { xs: 200, md: 240 },
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.25)',
                background:
                  'linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(34, 211, 238, 0.2))',
                boxShadow: '0 24px 60px rgba(15, 23, 42, 0.45)',
                backdropFilter: 'blur(18px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                p: 3,
              }}
            >
              <Box sx={placeholderLine('rgba(255,255,255,0.5)')} />
              <Box sx={placeholderLine('rgba(226,232,240,0.35)')} />
              <Box sx={{ ...placeholderLine('rgba(226,232,240,0.35)'), width: '70%' }} />
              <Box
                sx={{
                  flex: 1,
                  borderRadius: 3,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background:
                    'linear-gradient(135deg, rgba(226, 232, 240, 0.18), rgba(14, 165, 233, 0.24))',
                }}
              />
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
            background: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
            color: '#fff7ed',
            minHeight: { xs: 260, md: 320 },
            boxShadow: '0 30px 60px rgba(194, 65, 12, 0.25)',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
            <Typography
              variant="body2"
              sx={{ textTransform: 'uppercase', letterSpacing: 1 }}
            >
              Asset Library
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: 28, md: 32 } }}>
              30+ ready-to-drop machines.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 420 }}>
              Start from a living catalog of CNCs, welding cells, robots, and custom
              fixtures. Brand, dimensions, and throughput are editable in seconds.
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
            {['CNC 4020', 'ABB IRB 4600', 'Laser Cell', 'Cobot Station'].map(
              (label) => (
                <Box
                  key={label}
                  sx={{
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 999,
                    border: '1px solid rgba(255,255,255,0.35)',
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {label}
                </Box>
              ),
            )}
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
            background:
              'linear-gradient(135deg, rgba(15, 23, 42, 0.05), rgba(148, 163, 184, 0.2))',
            color: 'text.primary',
            minHeight: { xs: 260, md: 320 },
            boxShadow: '0 20px 50px rgba(15, 23, 42, 0.12)',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
            <Typography
              variant="body2"
              sx={{ textTransform: 'uppercase', letterSpacing: 1, color: 'text.secondary' }}
            >
              Scenario Planning
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: 28, md: 32 } }}>
              Test “what if” before you move anything.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 420, color: 'text.secondary' }}>
              Duplicate a line, tweak routings, and compare takt time, WIP, and
              utilization side-by-side before committing to changes on the floor.
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: 2, md: 0 },
              display: 'flex',
              alignItems: 'flex-end',
              gap: 1.5,
            }}
          >
            {[68, 82, 94].map((value, index) => (
              <Box
                key={value}
                sx={{
                  flex: 1,
                  height: 120 + index * 20,
                  borderRadius: 2,
                  background:
                    'linear-gradient(180deg, rgba(37, 99, 235, 0.25) 0%, rgba(37, 99, 235, 0.65) 100%)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  pb: 1,
                  color: '#1e293b',
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                {value}%
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
            <Typography
              variant="body2"
              sx={{ textTransform: 'uppercase', letterSpacing: 1, opacity: 0.75 }}
            >
              Team Spaces
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: 28, md: 32 } }}>
              Align engineering, ops, and leadership.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 380 }}>
              Share designs, comment inline, and track approvals in one workspace so
              every decision is captured and searchable.
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: 2, md: 0 },
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
            }}
          >
            {['ME', 'OPS', 'QA'].map((team) => (
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
            <Typography
              variant="body2"
              sx={{ textTransform: 'uppercase', letterSpacing: 1, color: 'text.secondary' }}
            >
              Live Metrics
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: { xs: 28, md: 32 } }}>
              Stay ahead of bottlenecks.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 460, color: 'text.secondary' }}>
              Stream downtime events, takt variance, and scrap causes into dashboards.
              Trigger alerts when thresholds slip and assign owners on the spot.
            </Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: 2, md: 0 },
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 1.5,
            }}
          >
            {[
              { label: 'Takt', value: '58s' },
              { label: 'OEE', value: '91%' },
              { label: 'Downtime', value: '-12%' },
            ].map(({ label, value }) => (
              <Box
                key={label}
                sx={{
                  borderRadius: 3,
                  border: '1px solid rgba(15, 118, 110, 0.35)',
                  backgroundColor: 'rgba(255, 255, 255, 0.65)',
                  backdropFilter: 'blur(10px)',
                  px: 2,
                  py: 1.5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.5,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#0f172a',
                }}
              >
                <Box
                  component="span"
                  sx={{ fontSize: 12, fontWeight: 500, opacity: 0.7 }}
                >
                  {label}
                </Box>
                <Box component="span" sx={{ fontSize: 22 }}>
                  {value}
                </Box>
              </Box>
            ))}
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
