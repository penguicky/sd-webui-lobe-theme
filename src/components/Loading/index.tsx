import { LobeHub as Logo } from '@lobehub/ui/brand';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import { LoadingIcon } from '@/components/OptimizedIcon';

const Loading = memo(() => {
  const { t } = useTranslation();

  return (
    <Flexbox height={'100vh'} width={'100%'}>
      <Center flex={1} gap={12} width={'100%'}>
        <Logo extra={'SD'} size={48} type={'combine'} />
        <Center gap={16} horizontal>
          <LoadingIcon />
          {t('custom.initializing')}
        </Center>
      </Center>
    </Flexbox>
  );
});

export default Loading;
