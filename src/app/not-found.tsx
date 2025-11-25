import type { JSX } from 'react';
import { NotFoundView1 } from '@shared/components/status/not-found-view-1';
import { NotFoundView2 } from '@shared/components/status/not-found-view-2';

const views = [NotFoundView1, NotFoundView2];

const NotFoundPage = ({}: NotFoundPageProps): JSX.Element => {
  // eslint-disable-next-line react-hooks/purity
  const index = Math.floor(Math.random() * views.length);
  const View = views[index];

  return <View />;
};

export default NotFoundPage;
