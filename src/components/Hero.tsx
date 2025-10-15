
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import WaitlistInlineForm from './WaitlistInlineForm';

const StyledBox = styled('div')(({ theme }) => ({
  alignSelf: 'center',
  width: '100%',
  height: 400,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
  backgroundImage: `url('https://mui.com/static/screenshots/material-ui/getting-started/templates/dashboard.jpg')`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url('https://mui.com/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg')`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(136, 136, 136, 0.27), transparent)',
        ...theme.applyStyles('dark', {
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% 0, rgba(168, 197, 255, 0.21), transparent)',
        }),
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          textAlign: 'center',
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 1rem)',
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inherit',
                flexDirection: 'inherit',
                alignItems: 'inherit',
                gap: 1,
              }}
            >
              <Box
                component="span"
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
              >
                Poduction monitoring for any machine. In minutes.
              </Box>
            </Box>
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '100%' },
            }}
          >
            Send data to our API and start tracking performance across your entire plant instantly.
          </Typography>
          <Box
            id="waitlist"
            sx={{
              width: { xs: '100%', sm: '80%' },
              maxWidth: 420,
              scrollMarginTop: { xs: '112px', sm: '136px' },
            }}
          >
            <WaitlistInlineForm />
          </Box>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ textAlign: 'center' }}
          >
            By clicking &quot;Join waitlist&quot; you agree to our&nbsp;
            <Link href="/terms" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Stack>
        <StyledBox id="image" />
        <Typography
          variant="h5"
          sx={{
            mt: { xs: 4, sm: 6 },
            textAlign: 'center',
            color: 'text.secondary',
            width: { sm: '100%', md: '100%' },
          }}
        >
          Our mission is to make factory performance visible, effortless, and universal — empowering
          manufacturers to monitor every machine in real time, no matter the brand or age, with setup
          that takes minutes, not months.
        </Typography>
      </Container>
    </Box>
  );
}
