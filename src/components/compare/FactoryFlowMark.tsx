export default function FactoryFlowMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="-50 -50 320 320"
      fill="currentColor"
      role="img"
      aria-label="Factory Flow"
      {...props}
    >
      <rect x="41.5" y="-41.5" width="56" height="139" rx="17.52" ry="17.52" transform="translate(97.5 -41.5) rotate(90)" />
      <rect x="0" width="56" height="139" rx="17.52" ry="17.52" transform="translate(56 139) rotate(180)" />
      <rect x="83" y="83" width="56" height="56" rx="17.52" ry="17.52" transform="translate(222 222) rotate(180)" />
      <path d="m73.52,56h-17.52v17.52c0-9.64,7.88-17.52,17.52-17.52Z" />
      <rect x="124.5" y="124.5" width="56" height="139" rx="17.52" ry="17.52" transform="translate(-41.5 346.5) rotate(-90)" />
      <rect x="166" y="83" width="56" height="139" rx="17.52" ry="17.52" />
      <path d="m148.48,166h17.52v-17.52c0,9.64-7.88,17.52-17.52,17.52Z" />
    </svg>
  );
}
