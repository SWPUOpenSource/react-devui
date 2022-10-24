import { DButton, DCard } from '@react-devui/ui';

import { useHttp } from '../../../../core';
import { AppRouteHeader } from '../../../components';
import styles from './Http.module.scss';

export default function Http(): JSX.Element | null {
  const http = useHttp();

  return (
    <>
      <AppRouteHeader>
        <AppRouteHeader.Breadcrumb />
        <AppRouteHeader.Header />
      </AppRouteHeader>
      <div className={styles['app-http']}>
        <DCard>
          <DCard.Content>
            <div className={styles['app-http__button-container']}>
              {[401, 403, 404, 500].map((status) => (
                <DButton
                  key={status}
                  onClick={() => {
                    const [testReq] = http({
                      url: '/test/http',
                      method: 'post',
                      data: { status },
                    });
                    testReq.subscribe();
                  }}
                >
                  {status}
                </DButton>
              ))}
            </div>
          </DCard.Content>
        </DCard>
      </div>
    </>
  );
}