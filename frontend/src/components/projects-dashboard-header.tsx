import LogoutButton from '@components/common/logout-button';
import { Breadcrumb, Button, Tooltip } from '@custom';
import { BellIcon, HomeIcon, FileIcon } from '@icons';
import { type FC } from 'react';
import { useSearchParams } from 'react-router-dom';

const ProjectsDashboardHeader: FC = () => {
  const [searchParams] = useSearchParams();

  const breadcrumbRoutes = [
    { label: 'Home', href: '/', icon: <HomeIcon height={18} /> },
    { label: 'Projects', href: '/projects', icon: <FileIcon height={18} /> },
    { label: searchParams.get('title') ?? '', href: '' },
  ];

  return (<header className="grow flex justify-between w-full">
    <Breadcrumb items={breadcrumbRoutes} />
    <div className="flex gap-2">
      <Tooltip content="Notifications" position="left">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full">
          <BellIcon height={16} />
        </Button>
      </Tooltip>
      <LogoutButton
        tooltipProps={{
          position: 'left',
          content: 'Logout',
          children: <span>Logout</span>
        }}
        buttonProps={{
          size: 'icon',
          variant: 'secondary',
          className: 'rounded-full'
        }} />
    </div>
  </header>)
}

export default ProjectsDashboardHeader;