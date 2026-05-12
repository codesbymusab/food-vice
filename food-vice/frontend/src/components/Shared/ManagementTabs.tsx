import { NavLink, Outlet, useLocation } from 'react-router';


export function ManagementTabs() {

  const location = useLocation();

  const isAdminSection = location.pathname.startsWith('/admin');
  const isModerationSection = location.pathname.startsWith('/moderation');


  const adminTabs = [
    { to: '/admin/restaurants', label: 'Restaurants' },
    { to: '/admin/users', label: 'Users' },
    { to: '/admin/audit-logs', label: 'Audit Logs' },
  ];

  const moderationTabs = [
    { to: '/moderation/reviews', label: 'Reviews' },
    { to: '/moderation/threads', label: 'Threads' },
    { to: '/moderation/reports', label: 'Reports' },
  ];

  const currentTabs = isAdminSection ? adminTabs : moderationTabs;

  return (
    <>
      <div className="sticky top-[65px] z-40 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/95">
    
        {(isAdminSection || isModerationSection) && (
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {currentTabs.map((tab) => (
              <NavLink
                key={tab.to}
                to={tab.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-100 text-primary dark:bg-slate-800 dark:text-primary'
                      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
                  }`
                }
              >
                {tab.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
}
