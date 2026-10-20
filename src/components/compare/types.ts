import type { ComponentType } from 'react';

export type ToolIconComponent = ComponentType<{ className?: string; strokeWidth?: number }>;

export type ToolLogo =
  | { kind: 'icon'; Icon: ToolIconComponent; color: string; bg: string }
  | { kind: 'image'; src: string; alt: string };
