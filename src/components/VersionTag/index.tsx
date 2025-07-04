import { Tag, TagProps } from 'antd';
import { memo } from 'react';
import semver from 'semver';

import { GITHUB_REPO_URL } from '@/const/url';
import { useAppStore } from '@/store';
import { generateAriaLabel } from '@/utils/accessibility';

const VersionTag = memo<TagProps>((props) => {
  const { version, latestVersion } = useAppStore((st) => ({
    latestVersion: st.latestVersion,
    version: st.version,
  }));

  const isLatest = semver.gte(version, latestVersion);

  const linkLabel = isLatest
    ? `Current version ${version} (latest)`
    : `Current version ${version}, latest version ${latestVersion} available`;

  return (
    <a
      aria-label={generateAriaLabel.button('View on GitHub', linkLabel)}
      href={GITHUB_REPO_URL}
      rel="noreferrer"
      target="_blank"
    >
      {isLatest ? (
        <Tag color="success" {...props} aria-label={`Version ${version}, up to date`} role="status">
          v{version}
        </Tag>
      ) : (
        <Tag
          color="warning"
          {...props}
          aria-label={`Version ${version}, update available to ${latestVersion}`}
          role="status"
        >
          v{version} / latest v{latestVersion}
        </Tag>
      )}
    </a>
  );
});

export default VersionTag;
