import { Icon } from '@lobehub/ui';
import { Avatar } from 'antd';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

const Loading = memo(() => {
  const { t } = useTranslation();

  return (
    <Flexbox height={'100vh'} width={'100%'}>
      <Center flex={1} gap={12} width={'100%'}>
        <div style={{ alignItems: 'center', display: 'flex', gap: 8 }}>
          <Avatar
            alt="LobeHub"
            size={48}
            src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp"
          />
          <span style={{ fontWeight: 400 }}>SD</span>
        </div>
        <Center gap={16} horizontal>
          <Icon icon={Loader2} spin />
          {t('custom.initializing')}
        </Center>
      </Center>
    </Flexbox>
  );
});

export default Loading;
