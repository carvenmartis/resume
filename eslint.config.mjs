import nextConfig from 'eslint-config-next'

export default [
  ...nextConfig,
  {
    rules: {
      // setState in useEffect is a valid pattern for syncing external state (e.g. localStorage)
      'react-hooks/set-state-in-effect': 'off',
      // Date.now() / ref access in render body is intentional in our stable-key pattern
      'react-hooks/purity': 'off',
      'react-hooks/refs': 'off',
      // App Router loads fonts in layout.tsx, not _document.js
      '@next/next/no-page-custom-font': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  {
    // @react-pdf/renderer Image has no alt prop — not an HTML element
    files: ['src/pdf/**'],
    rules: {
      'jsx-a11y/alt-text': 'off',
    },
  },
]
