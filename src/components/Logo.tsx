import SvgIcon from '@mui/material/SvgIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import { useColorScheme } from '@mui/material/styles';

export default function SitemarkIcon(props: SvgIconProps) {
  const { mode, systemMode } = useColorScheme();
  const resolvedMode = (mode === 'system' ? systemMode : mode) ?? 'light';
  const fillColor = resolvedMode === 'dark' ? '#fff' : '#000';

  return (
    <SvgIcon
      {...props}
      sx={{ height: 21, width: 100, mr: 2, color: fillColor, ...(props.sx || {}) }}
      viewBox="0 0 1300 224.32"
    >
      <text
        x="278.7"
        y="152.35"
        fontFamily="Avenir Next, sans-serif"
        fontWeight="700"
        fontSize="170px"
        fill="currentColor"
      >
        factory flow
      </text>

      <rect x="41.5" y="-41.5" width="56" height="139" rx="17.52" ry="17.52"
        transform="translate(97.5 -41.5) rotate(90)" fill="currentColor" />
      <rect x="0" width="56" height="139" rx="17.52" ry="17.52"
        transform="translate(56 139) rotate(180)" fill="currentColor" />
      <rect x="83" y="83" width="56" height="56" rx="17.52" ry="17.52"
        transform="translate(222 222) rotate(180)" fill="currentColor" />
      <path d="m73.52,56h-17.52v17.52c0-9.64,7.88-17.52,17.52-17.52Z" fill="currentColor" />
      <rect x="124.5" y="124.5" width="56" height="139" rx="17.52" ry="17.52"
        transform="translate(-41.5 346.5) rotate(-90)" fill="currentColor" />
      <rect x="166" y="83" width="56" height="139" rx="17.52" ry="17.52" fill="currentColor" />
      <path d="m148.48,166h17.52v-17.52c0,9.64-7.88,17.52-17.52,17.52Z" fill="currentColor" />
    </SvgIcon>
  );
}
