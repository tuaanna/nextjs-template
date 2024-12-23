import { CustomThemeConfig } from 'tailwindcss/types/config'

const fontFamily = {
  Inter: ['var(--font-inter)', 'sans-serif'],
}

const colors = {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: {
    DEFAULT: 'hsl(var(--card))',
    foreground: 'hsl(var(--card-foreground))',
  },
  popover: {
    DEFAULT: 'hsl(var(--popover))',
    foreground: 'hsl(var(--popover-foreground))',
  },
  primary: {
    DEFAULT: 'hsl(var(--primary))',
    foreground: 'hsl(var(--primary-foreground))',
  },
  secondary: {
    DEFAULT: 'hsl(var(--secondary))',
    foreground: 'hsl(var(--secondary-foreground))',
  },
  muted: {
    DEFAULT: 'hsl(var(--muted))',
    foreground: 'hsl(var(--muted-foreground))',
  },
  accent: {
    DEFAULT: 'hsl(var(--accent))',
    foreground: 'hsl(var(--accent-foreground))',
  },
  destructive: {
    DEFAULT: 'hsl(var(--destructive))',
    foreground: 'hsl(var(--destructive-foreground))',
  },
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
  chart: {
    '1': 'hsl(var(--chart-1))',
    '2': 'hsl(var(--chart-2))',
    '3': 'hsl(var(--chart-3))',
    '4': 'hsl(var(--chart-4))',
    '5': 'hsl(var(--chart-5))',
  },
}

const fontSize: CustomThemeConfig['fontSize'] = {
  xxs: [
    '10px',
    {
      lineHeight: '16px',
    },
  ],
  xs: [
    '12px',
    {
      lineHeight: '18px',
    },
  ],
  sm: [
    '14px',
    {
      lineHeight: '22px',
    },
  ],
  base: [
    '16px',
    {
      lineHeight: '24px',
    },
  ],
  lg: [
    '18px',
    {
      lineHeight: '26px',
    },
  ],
  xl: [
    '20px',
    {
      lineHeight: '28px',
    },
  ],
  '2xl': [
    '24px',
    {
      lineHeight: '32px',
    },
  ],
  '3xl': [
    '32px',
    {
      lineHeight: '48px',
    },
  ],
  '4xl': [
    '40px',
    {
      lineHeight: '56px',
    },
  ],
  '5xl': [
    '56px',
    {
      lineHeight: '72px',
    },
  ],
  heading1: [
    '56px',
    {
      lineHeight: '72px',
      fontWeight: 700,
    },
  ],
  heading2: [
    '40px',
    {
      lineHeight: '56px',
      fontWeight: 700,
    },
  ],
  heading3: [
    '32px',
    {
      lineHeight: '48px',
      fontWeight: 700,
    },
  ],
  heading4: [
    '24px',
    {
      lineHeight: '32px',
      fontWeight: 700,
    },
  ],
  heading5: [
    '20px',
    {
      lineHeight: '28px',
      fontWeight: 700,
    },
  ],
  heading6: [
    '16px',
    {
      lineHeight: '24px',
      fontWeight: 700,
    },
  ],
}

const spacing = {
  5.5: '22px',
  6.5: '26px',
  7.5: '30px',
  8.5: '34px',
  9.5: '38px',
  12.5: '50px',
  13: '52px',
  15: '60px',
  15.5: '62px',
  46: '186px',
  52.5: '210px',
  70: '280px',
  73: '292px',
  86.5: '346px',
  124.5: '498px',
}

const size = {
  80: '80px',
  48: '48px',
  40: '40px',
  32: '32px',
  28: '28px',
  24: '24px',
  20: '20px',
  16: '16px',
  12: '12px',
  8: '8px',
  4: '4px',
}

const borderRadius = {
  80: '80px',
  48: '48px',
  40: '40px',
  32: '32px',
  28: '28px',
  24: '24px',
  20: '20px',
  16: '16px',
  12: '12px',
  8: '8px',
  4: '4px',
}

export const customConfig: Pick<
  CustomThemeConfig,
  'borderRadius' | 'colors' | 'fontFamily' | 'fontSize' | 'size' | 'spacing'
> = {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  size,
  spacing,
}
