import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <Image
            src="/key.png"
            alt=""
            width={20}
            height={20}
            style={{ imageRendering: 'pixelated' }}
          />
          <span className="font-semibold">{appName}</span>
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [{ text: 'mxkey.space', url: 'https://mxkey.space' }],
  };
}
