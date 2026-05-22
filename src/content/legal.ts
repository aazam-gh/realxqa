export type LegalContent = {
  lastUpdated: string
  title: string
  intro: string
  sections: ReadonlyArray<{
    heading: string
    body: ReadonlyArray<string>
    items?: ReadonlyArray<string>
    after?: ReadonlyArray<string>
  }>
}

export const privacyPolicyContent = {
  lastUpdated: '28.03.2026',
  title: 'Privacy Policy',
  intro:
    'Realx for Software LLC (RealX, we, us, or our) values the privacy of all users of our services, including students of all ages. This Privacy Policy explains how we collect, use, store, and share information when you access or use our mobile application, website, or related services (collectively, the Services). By using the Services, you agree to the terms outlined in this Privacy Policy. If you do not agree with any part of this Privacy Policy, you should not use the Services.',
  sections: [
    {
      heading: 'Information We Collect',
      body: [
        'To provide the RealX Services, we collect information from you in several ways. First, we collect personal information you provide directly, such as your name, email address, school or university, student verification documents, account credentials, and any preferences you set within the app. This information is necessary for creating your account, verifying your student status, and allowing you to access eligible offers.',
        'We may also collect certain information automatically when you use the Services. This includes device type, operating system, IP address, mobile network information, app usage patterns, login times, and location data. This information helps us maintain the security of the platform, improve the Services, detect fraud, and provide anonymized analytics to our merchant partners.',
      ],
    },
    {
      heading: 'Student Verification',
      body: [
        'RealX is a platform that verifies student status for brands and merchants. As part of the verification process, we may request information such as school-issued email addresses, student ID numbers, or other documents confirming enrollment. For users under 18, parental or guardian consent is required for verification. Parents or guardians may provide or review the information submitted on behalf of their child. We retain this verification information only as long as necessary to provide the Services and comply with legal obligations.',
      ],
    },
    {
      heading: 'How We Use Information',
      body: [
        'We use the information we collect for several purposes, including:',
      ],
      items: [
        'To create and manage user accounts and verify student eligibility.',
        'To provide and improve the Services, including app functionality, user interface, and security.',
        'To analyze aggregated and anonymized data and provide insights to participating brands about student engagement with offers.',
        'To communicate with you regarding your account, student verification, and relevant updates or promotions.',
        'To detect, prevent, and respond to fraudulent or unauthorized activity.',
        'To comply with legal or regulatory obligations.',
      ],
      after: [
        'We do not use personal information to make automated decisions about individual users beyond the verification process.',
      ],
    },
    {
      heading: 'Sharing Information',
      body: ['RealX may share information in the following ways:'],
      items: [
        'With merchants and brands: We provide aggregated or anonymized analytics to brands about how offers are redeemed or engaged with. This does not include personally identifiable information of minors without parental consent. Individual verification status may be shared with merchants solely to confirm eligibility for offers.',
        'With service providers: We may share information with third-party vendors who help us provide the Services, such as cloud storage providers, email platforms, and analytics services. These providers are bound by confidentiality agreements and are permitted to use information only for the services they provide to RealX.',
        'Legal obligations: We may disclose information when required to comply with legal obligations, respond to lawful requests, or protect the rights, property, or safety of RealX, users, or others.',
        'Business transfers: In the event of a merger, acquisition, or sale of assets, user information may be transferred as part of the business assets.',
      ],
      after: ['We do not sell your personal information to third parties.'],
    },
    {
      heading: 'Privacy of Minors',
      body: [
        'RealX takes the privacy of minors very seriously. Users under 18 must have parental or guardian consent to use the Services. We require parental review and approval before minors can submit verification documents or access certain features. Parents/guardians may review, correct, or delete their child’s information, or request account termination. We do not share personally identifiable information of minors with merchants or other third parties without parental consent.',
      ],
    },
    {
      heading: 'Cookies and Tracking Technologies',
      body: [
        'We use cookies, web beacons, pixels, and similar technologies to collect information about your use of the Services. These technologies help us maintain security, improve user experience, analyze trends, and understand usage patterns. We may also allow third-party service providers to use tracking technologies for analytics and insights into offer engagement. You may manage or disable cookies through your device or browser settings, though this may affect your ability to fully use the Services.',
      ],
    },
    {
      heading: 'Third-Party Services and Social Logins',
      body: [
        'Some features of the Services allow registration or login via third-party accounts, such as Google or Apple. When you use social login, we may receive certain profile information from the third-party provider, such as name, email address, and profile picture. This information is used solely for authentication and account setup. RealX is not responsible for the privacy practices, content, or security of third-party providers. Users are encouraged to review their privacy policies before using social logins.',
      ],
    },
    {
      heading: 'Data Retention',
      body: [
        'We retain your information only as long as necessary to provide the Services, comply with legal obligations, resolve disputes, and enforce our agreements. Once the data is no longer needed, it will be securely deleted or anonymized. In some cases, backup systems may retain information temporarily, but access is restricted to ensure privacy.',
      ],
    },
    {
      heading: 'User Rights',
      body: [
        'You have the right to access, review, update, or delete your personal information. Parents or guardians can exercise these rights on behalf of minors. You may also withdraw consent to our processing of your information at any time, subject to legal or contractual restrictions. To exercise these rights, contact us at info@realx.qa. We will respond to requests in accordance with applicable laws.',
      ],
    },
    {
      heading: 'Security',
      body: [
        'RealX implements reasonable administrative, technical, and physical safeguards to protect the personal information of users. While we strive to protect your information, no method of transmission or storage is completely secure, and we cannot guarantee absolute security. Users should also take care to maintain the confidentiality of account credentials.',
      ],
    },
    {
      heading: 'Changes to the Privacy Policy',
      body: [
        'We may update this Privacy Policy periodically to reflect changes in the Services, legal requirements, or best practices. The “Last Updated” date at the top indicates the most recent version. Users are encouraged to review the Privacy Policy regularly. Continued use of the Services after updates constitutes acceptance of the revised policy.',
      ],
    },
    {
      heading: 'Contact Information',
      body: [
        'If you have questions about this Privacy Policy or your account, you can contact us at:',
        'Realx for Software LLC',
        'Email: info@realx.qa',
        'Parents/guardians may contact us regarding accounts of minors at the same address.',
      ],
    },
  ],
} as const satisfies LegalContent

export const termsContent = {
  lastUpdated: '28.03.2026',
  title: 'Terms and Conditions',
  intro:
    'Welcome to RealX! Realx for Software LLC (RealX, we, us, or our) provides the RealX mobile application, website, and related services (collectively, the Services). RealX is a software platform that helps brands verify student status and provide targeted offers, discounts, and promotions to eligible students. Our platform is designed to connect students with verified offers while providing brands with anonymized analytics to understand offer engagement. By accessing or using the Services, you agree to these Terms and Conditions (Terms). If you do not agree with any part of these Terms, you should not use the Services.',
  sections: [
    {
      heading: 'Eligibility and Account Creation',
      body: [
        'To use RealX, you must be a student. The platform is intended for students of all ages, including minors under the age of 18. If you are under 18, you must have a parent or guardian review these Terms and provide explicit consent for you to create an account and use the Services. Parents or guardians are responsible for supervising minors’ use of the Services and agreeing to these Terms on their behalf.',
        'When creating an account, you must provide accurate, complete, and truthful information. This includes your name, email address, school or university, and any student verification details requested by RealX. Your parent or guardian may assist you in providing this information. You are responsible for keeping your account information updated if it changes. Misrepresentation or false information can result in account suspension or termination.',
        'You are responsible for maintaining the confidentiality of your account credentials, including your username and password. You agree to notify us immediately if you suspect any unauthorized use of your account. RealX reserves the right to suspend, disable, or terminate your account at any time if we detect fraudulent activity, misuse of the platform, multiple accounts attempting to exploit offers, or any other violations of these Terms.',
      ],
    },
    {
      heading: 'Using the Services and Offers',
      body: [
        'RealX provides access to discounts, promotions, and special offers from our merchant partners. RealX acts solely as a software platform that verifies student eligibility and provides analytics to the merchants. We do not control the content, availability, or fulfillment of any offer, and we are not responsible for any issues, delays, or disputes arising from the offers themselves.',
        'All offers are provided and managed entirely by the merchants. Each merchant sets the terms, conditions, and availability of their offers. It is the merchant’s responsibility to honor the offers, deliver the products or services, and address any complaints or issues. You agree that RealX cannot be held liable for the accuracy, fulfillment, quality, or reliability of any offer provided by a merchant.',
        'You may browse offers, redeem them if eligible, and track your usage within the RealX platform. Misuse of offers, including using multiple accounts to redeem the same offer, sharing student verification with non-eligible users, or attempting to manipulate the system, is strictly prohibited. Any such misuse may result in suspension or termination of your account. You also agree to treat merchants, RealX staff, and other users respectfully and refrain from any fraudulent, abusive, or harassing behavior.',
      ],
    },
    {
      heading: 'Parental Consent and Responsibilities',
      body: [
        'For users under 18, parental or guardian consent is required. Parents or guardians may review, correct, or delete their child’s account information and may request account suspension or termination at any time. Parents/guardians are responsible for ensuring that their child uses the Services appropriately, in compliance with these Terms. Any action taken by a minor using the Services is the responsibility of the parent or guardian.',
        'Parents/guardians are encouraged to discuss the use of the platform with their child and monitor offer usage. Parents should understand that RealX is a software verification platform and does not guarantee the fulfillment or quality of any merchant offer.',
      ],
    },
    {
      heading: 'Privacy, Data Collection, and Analytics',
      body: [
        'Your use of RealX is also governed by our Privacy Policy, which explains how we collect, store, and share personal information. We collect information you provide directly, such as your name, email, school or university, student verification documents, and account preferences. Additionally, some information may be collected automatically, including your device type, IP address, app usage, and location data. This information helps us maintain security, improve the platform, and detect fraudulent activity.',
        'RealX provides anonymized or aggregated analytics to merchants to help them understand how their offers are used. No personally identifiable information of minors is shared with merchants without parental consent. By using the platform, you consent to the collection, processing, and sharing of data as described in our Privacy Policy.',
      ],
    },
    {
      heading: 'Third-Party Services and Social Logins',
      body: [
        'Some features of RealX may include third-party integrations or social logins (e.g., Google, Apple, or other authentication providers). These third parties may provide us with information from your social profile, such as your name, email, and profile picture, which we use only for account setup and authentication. RealX does not control third-party platforms and is not responsible for their content, privacy practices, or reliability. You are encouraged to review their privacy policies and terms before using any third-party services.',
      ],
    },
    {
      heading: 'Intellectual Property',
      body: [
        'All content provided through RealX, including graphics, text, logos, app design, and software, is owned by RealX or its licensors. You are granted a limited, non-exclusive license to access and use the Services for personal use. You may not copy, distribute, reproduce, modify, or create derivative works from the content without our prior written consent.',
      ],
    },
    {
      heading: 'Limitation of Liability',
      body: [
        'The Services are provided on an “as is” and “as available” basis. RealX makes no guarantees regarding the availability, accuracy, or reliability of merchant offers. RealX is not responsible for any loss, damage, or disputes arising from the use of the Services, including the failure of a merchant to fulfill an offer, delays, or inaccuracies. By using the platform, you agree that you are doing so at your own risk. In no event shall RealX be liable for any indirect, incidental, or consequential damages',
      ],
    },
    {
      heading: 'Account Termination',
      body: [
        'RealX may suspend or terminate your account at any time for violations of these Terms, fraudulent activity, misuse of the Services, or legal/regulatory reasons. You may request account termination at any time by contacting info@realx.qa. Upon termination, access to your account will end, but RealX may retain information as required for legal, regulatory, or fraud-prevention purposes.',
      ],
    },
    {
      heading: 'Updates to Terms',
      body: [
        'RealX may update these Terms periodically to reflect changes in the Services, legal requirements, or platform improvements. Updates will be indicated by the “Last Updated” date at the top. Continued use of the platform after an update constitutes your acceptance of the revised Terms.',
      ],
    },
    {
      heading: 'Governing Principles',
      body: [
        'These Terms are governed by general principles of international technology and commercial law. Users agree to attempt to resolve disputes through communication, mediation, or arbitration wherever possible.',
      ],
    },
    {
      heading: 'Contact Information',
      body: [
        'If you have questions about these Terms or your account, you can contact us at:',
        'Realx for Software LLC',
        'Email: info@realx.qa',
        'Parents/guardians may contact us regarding accounts of minors at the same address.',
      ],
    },
  ],
} as const satisfies LegalContent
