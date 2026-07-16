import { NEXT_PUBLIC_WEBAPP_URL } from '@documenso/lib/constants/app';
import { i18n, type MessageDescriptor } from '@lingui/core';

export const appMetaTags = (title?: MessageDescriptor) => {
  const description =
    'NyxSentinel — secure, reliable document signing for modern teams. Sign, send, and manage documents with confidence. Fast, beautiful, and built for the way you work.';

  return [
    {
      title: title ? `${i18n._(title)} - NyxSentinel` : 'NyxSentinel',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'keywords',
      content: 'NyxSentinel, document signing, e-signature, secure signing, digital signature, document management',
    },
    {
      name: 'author',
      content: 'NyxSentinel',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      property: 'og:title',
      content: 'NyxSentinel - Secure Document Signing',
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@nyxsentinel',
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${NEXT_PUBLIC_WEBAPP_URL()}/opengraph-image.jpg`,
    },
  ];
};
