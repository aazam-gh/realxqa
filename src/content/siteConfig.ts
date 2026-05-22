export const appStoreUrl =
  'https://apps.apple.com/in/app/realx-student-super-app/id6759960382'

export const supportEmail = 'info@realx.qa'

export const realXAppIcon = {
  src: '/images/brand/app-icon-64.png',
  srcSet:
    '/images/brand/app-icon-64.png 64w, /images/brand/app-icon-128.png 128w',
  width: 64,
  height: 64,
} as const

export const siteConfig = {
  name: 'realX',
  homeTo: '/',
  downloadTo: '/download',
  headerCta: 'Get the app',
  footerHeadline: 'Ready to save more as a student?',
  copyright: '© 2026 realX. All rights reserved.',
  footerLinks: [
    { label: 'Support', to: '/support' },
    { label: 'Internships', to: '/internships' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms and Conditions', to: '/terms-and-conditions' },
  ],
} as const
