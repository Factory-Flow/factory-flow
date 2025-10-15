import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
  type SyntheticEvent,
} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Footer from './components/Footer';

type LegalSectionId = 'terms' | 'privacy' | 'cookies';

type LegalSection = {
  id: LegalSectionId;
  label: string;
  title: string;
  body: ReactNode;
};

const sectionRoutes: Record<LegalSectionId, string> = {
  terms: '/terms',
  privacy: '/privacy',
  cookies: '/cookies',
};

function useLegalSections(): LegalSection[] {
  return useMemo(
    () => [
      {
        id: 'terms',
        label: 'Terms of Service',
        title: 'Terms of Service',
        body: (
          <>
            <Typography variant="body1" paragraph>
              Welcome to Factory Flow. By accessing or using our services, you
              agree to be bound by these Terms of Service. If you do not agree,
              please discontinue use of the site and services.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Accounts and Access
            </Typography>
            <Typography variant="body2" paragraph>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities occurring under your
              account. You must notify us promptly of any unauthorized use or
              security breach.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Acceptable Use
            </Typography>
            <Typography variant="body2" paragraph>
              You agree not to misuse the services, interfere with their normal
              operation, or access them using a method other than the interface
              and instructions provided by Factory Flow.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Service Changes
            </Typography>
            <Typography variant="body2" paragraph>
              We reserve the right to modify or discontinue the services at any
              time, with or without notice. We will provide reasonable notice
              when feasible.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Liability
            </Typography>
            <Typography variant="body2" paragraph>
              To the maximum extent permitted by law, Factory Flow is not
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues arising from
              your use of the services.
            </Typography>
            <Typography variant="body2">
              Questions about these terms can be directed to
              {' '}
              <Typography component="span" color="primary" fontWeight="medium">
                legal@factoryflow.io
              </Typography>
              .
            </Typography>
          </>
        ),
      },
      {
        id: 'privacy',
        label: 'Privacy Policy',
        title: 'Privacy Policy',
        body: (
          <>
            <Typography variant="body1" paragraph>
              We are committed to protecting your personal information and being
              transparent about how we collect and process data.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Information We Collect
            </Typography>
            <Typography variant="body2" paragraph>
              We collect information you provide directly, such as account
              registration details and support requests, as well as usage data
              like device information and interaction logs when you use the
              platform.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              How We Use Information
            </Typography>
            <Typography variant="body2" paragraph>
              The data we collect helps us operate, maintain, and improve the
              services, personalize user experiences, and communicate important
              updates. We never sell your personal information.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Sharing and Disclosure
            </Typography>
            <Typography variant="body2" paragraph>
              We may share information with trusted service providers who assist
              us in operating the platform, provided they comply with safeguards
              that align with this policy. We may also disclose information when
              required by law or to protect the rights and safety of our users.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Your Choices
            </Typography>
            <Typography variant="body2" paragraph>
              You can access, correct, or delete your personal information by
              contacting us. You may also opt out of certain communications by
              following the instructions in those messages.
            </Typography>
            <Typography variant="body2">
              For privacy inquiries, email us at
              {' '}
              <Typography component="span" color="primary" fontWeight="medium">
                privacy@factoryflow.io
              </Typography>
              .
            </Typography>
          </>
        ),
      },
      {
        id: 'cookies',
        label: 'Cookie Policy',
        title: 'Cookie Policy',
        body: (
          <>
            <Typography variant="body1" paragraph>
              Cookies and similar technologies help us understand how the
              platform is used, deliver essential functionality, and improve the
              experience.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              What Are Cookies?
            </Typography>
            <Typography variant="body2" paragraph>
              Cookies are small data files stored on your device when you visit
              a website. They allow the site to remember your preferences and
              track certain behaviors.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              How We Use Cookies
            </Typography>
            <Typography variant="body2" paragraph>
              We use essential cookies for authentication and security,
              preference cookies to remember settings, and analytics cookies to
              monitor performance and usage trends.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Managing Cookies
            </Typography>
            <Typography variant="body2" paragraph>
              You can adjust your browser settings to refuse cookies or alert
              you when cookies are being used. Note that disabling cookies may
              impact the functionality of the services.
            </Typography>
            <Typography variant="body2">
              For questions about this policy, contact
              {' '}
              <Typography component="span" color="primary" fontWeight="medium">
                support@factoryflow.io
              </Typography>
              .
            </Typography>
          </>
        ),
      },
    ],
    [],
  );
}

export default function LegalPage(props: {
  disableCustomTheme?: boolean;
  activeSectionId?: LegalSectionId;
}) {
  const { activeSectionId, ...themeProps } = props;
  const sections = useLegalSections();
  const defaultSectionId = sections[0]?.id;
  const [tabIndex, setTabIndex] = useState(() => {
    if (!defaultSectionId) {
      return 0;
    }
    const targetId = activeSectionId ?? defaultSectionId;
    const initialIndex = sections.findIndex((section) => section.id === targetId);
    return initialIndex === -1 ? 0 : initialIndex;
  });
  const navigate = useNavigate();

  useEffect(() => {
    const targetId = activeSectionId ?? defaultSectionId;
    if (!targetId) {
      return;
    }
    const index = sections.findIndex((section) => section.id === targetId);
    if (index !== -1 && index !== tabIndex) {
      setTabIndex(index);
    }
  }, [activeSectionId, defaultSectionId, sections, tabIndex]);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
    const nextSectionId = sections[newValue]?.id;
    if (nextSectionId) {
      navigate(sectionRoutes[nextSectionId]);
    }
  };

  const activeSection = sections[tabIndex];

  return (
    <AppTheme {...themeProps}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Box
        component="main"
        sx={{
          py: { xs: 10, sm: 14 },
          backgroundColor: 'background.default',
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'minmax(220px, 280px) minmax(0, 1fr)',
                lg: 'minmax(240px, 320px) minmax(0, 1fr)',
              },
              gap: { xs: 3, md: 6 },
              alignItems: 'flex-start',
            }}
          >
            <Paper
              variant="outlined"
              sx={{
                height: '100%',
                p: 2,
              }}
            >
              <Typography variant="overline" color="text.secondary">
                Legal
              </Typography>
              <Tabs
                orientation="vertical"
                value={tabIndex}
                onChange={handleTabChange}
                aria-label="Legal documents"
                sx={{
                  mt: 1,
                  '& .MuiTab-root': {
                    alignItems: 'flex-start',
                    textAlign: 'left',
                  },
                }}
              >
                {sections.map((section) => (
                  <Tab
                    key={section.id}
                    label={section.label}
                    id={`legal-tab-${section.id}`}
                    aria-controls={`legal-tabpanel-${section.id}`}
                  />
                ))}
              </Tabs>
            </Paper>
            <Paper
              id={activeSection.id}
              variant="outlined"
              role="tabpanel"
              aria-labelledby={`legal-tab-${activeSection.id}`}
              sx={{
                p: { xs: 3, sm: 4 },
                minWidth: 0,
                scrollMarginTop: { xs: '112px', sm: '136px' },
              }}
            >
              <Typography variant="h4" gutterBottom>
                {activeSection.title}
              </Typography>
              <Divider sx={{ mb: 3 }} />
              {activeSection.body}
            </Paper>
          </Box>
        </Container>
      </Box>
      <Footer />
    </AppTheme>
  );
}
