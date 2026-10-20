import { Navigate, useParams } from 'react-router-dom';
import ComparisonPage from './components/compare/ComparisonPage';
import { comparisons, getComparisonBySlug } from './data/comparisons';

export default function CompareToolPage() {
  const { slug } = useParams<{ slug: string }>();
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    return <Navigate to="/compare" replace />;
  }

  const otherComparisons = comparisons
    .filter((c) => c.slug !== comparison.slug)
    .map((c) => ({ slug: c.slug, toolName: c.toolName, logo: c.logo }));

  return (
    <ComparisonPage
      toolName={comparison.toolName}
      logo={comparison.logo}
      title={comparison.title}
      intro={comparison.intro}
      rows={comparison.rows}
      whenGoodTitle={comparison.whenGoodTitle}
      whenGoodParagraphs={comparison.whenGoodParagraphs}
      otherComparisons={otherComparisons}
    />
  );
}
