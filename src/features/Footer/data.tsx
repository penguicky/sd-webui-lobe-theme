
import { GitHubIcon, HeartIcon, OptimizedIcon } from '@/components/OptimizedIcon';

import { GITHUB_REPO_URL } from '@/const/url';

export const Resources = [
  {
    description: 'AUTOMATIC111',
    openExternal: true,
    title: 'Stable Diffusion Webui',
    url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
  },
  {
    description: 'WebUI extension',
    openExternal: true,
    title: 'Controlnet',
    url: 'https://github.com/Mikubill/sd-webui-controlnet',
  },
  {
    description: 'Art models',
    openExternal: true,
    title: 'Civitai',
    url: 'https://civitai.com/',
  },
  {
    description: 'Artist Inspired Styles',
    openExternal: true,
    title: 'Cheat Sheet',
    url: 'https://supagruen.github.io/StableDiffusion-CheatSheet',
  },
  {
    description: 'Image Resizing',
    openExternal: true,
    title: 'Birme',
    url: 'https://www.birme.net/?target_width=512&target_height=512',
  },
];

export const Community = [
  {
    icon: <GitHubIcon size={16} />,
    openExternal: true,
    title: 'GitHub',
    url: GITHUB_REPO_URL,
  },
  {
    icon: <OptimizedIcon name="file-clock" size={16} />,
    openExternal: true,
    title: 'Changelog',
    url: `${GITHUB_REPO_URL}/blob/main/CHANGELOG.md`,
  },
  {
    icon: <HeartIcon size={16} />,
    openExternal: true,
    title: 'Sponsor',
    url: `https://opencollective.com/lobehub`,
  },
  {
    icon: <OptimizedIcon name="bug" size={16} />,
    openExternal: true,
    title: 'Report Bug',
    url: `${GITHUB_REPO_URL}/issues/new/choose`,
  },
  {
    icon: <OptimizedIcon name="git-fork" size={16} />,
    openExternal: true,
    title: 'Request Feature',
    url: `${GITHUB_REPO_URL}/issues/new/choose`,
  },
];

export const MoreProducts = [
  {
    description: 'Stable Diffusion Extension',
    openExternal: true,
    title: '🤯 Lobe Theme',
    url: 'https://github.com/lobehub/sd-webui-lobe-theme',
  },
  {
    description: 'Minifier ExtraNetwork Covers',
    openExternal: true,
    title: '✂️ Cover Minifier',
    url: 'https://github.com/canisminor1990/sd-webui-cover-minifier',
  },
  {
    description: 'OpenAI Chat Bot',
    openExternal: true,
    title: '🤖 Lobe Chat',
    url: 'https://chat.lobehub.com',
  },
  {
    description: 'AIGC Components',
    openExternal: true,
    title: '🍭 Lobe UI',
    url: 'https://ui.lobehub.com',
  },
  {
    description: 'I18n AI Workflow',
    openExternal: true,
    title: '🌐 Lobe i18n',
    url: 'https://github.com/lobehub/lobe-cli-toolbox',
  },
];
