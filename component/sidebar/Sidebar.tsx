'use client';

import Link from 'next/link';
import React, { useState } from 'react';

import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography
} from '@mui/material';

import {
  MenuBook as BookOpen,
  CreditCard,
  ExpandLess,
  ExpandMore,
  Description as FileText,
  Layers,
  AdsClick as MousePointer2,
  Inventory as Package,
  AdminPanelSettings as ShieldCheck,
  ShoppingCart,
  AdsClick as Target,
  AccountCircle as UserCircle,
  People as Users
} from '@mui/icons-material';


const sidebarMenus = [
  {
    title: 'User Management',
    icon: <Users />,
    children: [
      { title: 'Add User', path: '/users/Add' },
      { title: 'User List', path: '/users/view' },
    ],
  },

  {
    title: 'Role Management',
    icon: <ShieldCheck />,
    children: [
      { title: 'Add Role', path: '/roles/Add' },
      { title: 'Role List', path: '/roles/view' },
    ],
  },

  {
    title: 'Customer Management',
    icon: <UserCircle />,
    children: [
      { title: 'Add Customer', path: '/customers/Add' },
      { title: 'Customer List', path: '/customers/view' },
    ],
  },

  {
    title: 'Order Management',
    icon: <ShoppingCart />,
    children: [
      { title: 'Add Order', path: '/orders/Add' },
      { title: 'Order List', path: '/orders/view' },
    ],
  },

  {
    title: 'Invoice Management',
    icon: <FileText />,
    children: [
      { title: 'Create Invoice', path: '/invoices/Add' },
      { title: 'Invoice List', path: '/invoices/view' },
    ],
  },

  {
    title: 'Sales Person Target',
    icon: <Target />,
    children: [
      {
        title: 'Add Sales Person Target',
        path: '/sales-target/Add',
      },
      {
        title: 'Sales Person Target List',
        path: '/sales-target/view',
      },
    ],
  },

  {
    title: 'Product Management',
    icon: <Layers />,
    children: [
      {
        title: 'Brand Management',
        children: [
          {
            title: 'Add Brand',
            path: '/product/brands/Add',
          },
          {
            title: 'Brand List',
            path: '/product/brands/view',
          },
        ],
      },

      {
        title: 'Category Management',
        children: [
          {
            title: 'Add Category',
            path: '/product/categories/Add',
          },
          {
            title: 'Category List',
            path: '/product/categories/view',
          },
        ],
      },
 {
        title: 'Frame Management',
        children: [
          {
            title: 'Add Frame',
            path: '/product/frames/Add',
          },
          {
            title: 'Frame List',
            path: '/product/frames/view',
          },
        ],
      },   
    
    {
        title: 'Contact Lens Management',
        path: '/products/contact-lens',
      },

      {
        title: 'Material Management',
        path: '/products/materials',
      },

      {
        title: 'Rim Shape Management',
        path: '/products/rim-shapes',
      },
    ],
  },

  {
    title: 'Expense Tracking',
    icon: <CreditCard />,
    children: [
      { title: 'Add Expense', path: '/expenses/Add' },
      { title: 'Expense List', path: '/expenses/view' },
    ],
  },

  {
    title: 'Ledger Management',
    icon: <BookOpen />,
    children: [
      {
        title: 'Ledger Group',
        path: '/ledgers/groups',
      },
      {
        title: 'Ledger Master',
        path: '/ledgers/master',
      },
    ],
  },

  {
    title: 'Material Management',
    icon: <MousePointer2 />,
    path: '/materials',
  },

  {
    title: 'Purchase Order Management',
    icon: <Package />,
    path: '/purchase-orders',
  },
];

type Props = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

const SidebarMenu = ({
  collapsed,
  setCollapsed,
}: Props) => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
const [openChildren, setOpenChildren] = useState<Record<string, boolean>>({});

 
    


  // const handleToggle = (title: string) => {
  //   setOpenMenus((prev) => ({
  //     ...prev,
  //   [title]: !prev[title],
  //   }));
  // };


  const handleToggle = (title: string) => {
  setOpenMenus((prev) => {
    const isOpen = prev[title];

    // reset all deeper levels
    setOpenChildren({});
    

    return isOpen ? {} : { [title]: true };
  });
};


const handleChildToggle = (title: string) => {
  setOpenChildren((prev) => {
    const isOpen = prev[title];

    // reset sub-children when child changes
    

    return {
      [title]: !isOpen,
    };
  });
};







  return (
     <Drawer
      variant="permanent"
      sx={{
    width: collapsed ? 90 : 300,
    flexShrink: 0,

    '& .MuiDrawer-paper': {
      width: collapsed ? 90 : 300,
        transition: '0.1s',
        height: '100vh',
        overflowY: 'auto',
      overflowX: 'hidden',
        borderRight: '1px solid #e0e0e0',
      p: 1,
      boxSizing: 'border-box',
        
      /* HIDE SCROLLBAR */
        '&::-webkit-scrollbar': {
          display: 'none',
        },

        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
    },
      }}
    >
      {/* TOGGLE BUTTON */}
      {/* <IconButton
        onClick={() =>
          setCollapsed(!collapsed)
        }
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: '#f5f5f5',
          zIndex: 99,
        }}
      >
        {collapsed ? (
          <ChevronRight />
        ) : (
          <ChevronLeft />
        )}
      </IconButton> */}

      {/* LOGO */}
      {/* LOGO */}

<Box
  sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: collapsed
      ? 'center'
      : 'flex-start',

    flexDirection: collapsed
      ? 'column'
      : 'column',

    mb: collapsed ? 3 : 2,
    // mt: 5,
  }}
>
  {/* COLLAPSED LOGO */}
  {collapsed ? (
    <Box
      sx={{
        width: 50,
        height: 50,
        borderRadius: '50%',
        background: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        fontWeight: 700,
        color: 'primary.main',
      }}
    >
      O
    </Box>
  ) : (
    <>
      {/* FULL LOGO */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          color: 'primary.main',
          px: 2,
        }}
      >
        OPTECHCULAR
      </Typography>

      {/* SUB TITLE */}
      <Typography
        variant="caption"
        sx={{
          fontWeight: 700,
          color: 'text.secondary',
          px: 2,
          mt: 0.5,
          display: 'block',
        }}
      >
        MANAGEMENT SYSTEM
      </Typography>
    </>
  )}
</Box>

      {/* MENU */}
      <List component="nav">
        {sidebarMenus.map((menu) => {
          const hasChildren = Boolean(
            menu.children
          );

        const isOpen = Boolean(openMenus[menu.title]);

          return (
            <React.Fragment key={menu.title}>
              {/* TOOLTIP */}
              <Tooltip 
                placement="right"
                arrow
                disableHoverListener={
                  !collapsed
                }
                title={
                  collapsed ? (
                    <Box
                      sx={{
                        p: 1,
                       
                        minWidth: 300,
                      }}
                    >
                      {/* TITLE */}
                      <Typography
                        sx={{
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        {menu.title}
                      </Typography>

                      {/* CHILDREN */}
                      {menu.children?.map(
                        (child: any) => (
                          <Box
                            key={child.title}
                            sx={{
                              py: 0.8,
                              px: 1,
                              borderRadius: 1,

                              '&:hover': {
                                background:
                                  'grey.700',
                              },
                            }}
                          >
                            {/* CHILD */}
                            {child.path ? (
                              <Link
                                href={
                                  child.path
                                }
                                style={{
                                  textDecoration:
                                    'none',
                                  color:
                                    'inherit',
                                  fontSize:
                                    '0.82rem',
                                  fontWeight:
                                    600,
                                  display:
                                    'block',
                                }}
                              >
                                {child.title}
                              </Link>
                            ) : (
                              <Typography
                                sx={{
                                  fontSize:
                                    '0.82rem',
                                  fontWeight:
                                    600,
                                }}
                              >
                                {child.title}
                              </Typography>
                            )}

                            {/* SUB CHILDREN */}
                            {child.children?.map(
                              (
                                subChild: any
                              ) => (
                                <Link
                                  key={
                                    subChild.title
                                  }
                                  href={
                                    subChild.path
                                  }
                                  style={{
                                    display:
                                      'block',
                                    marginLeft:
                                      '4px',
                                    marginTop:
                                      '6px',
                                    textDecoration:
                                      'none',
                                    fontSize:
                              '0.82rem',
                            fontWeight: 600,
                            color:
                              'grey.700',
                                  }}
                                >
                                  {' '}
                                  {
                                    subChild.title
                                  }
                                </Link>
                              )
                            )}
                          </Box>
                        )
                      )}
                    </Box>
                  ) : (
                    ''
                  )
                }
              >
                {/* MAIN MENU */}
                <ListItemButton
                  component={
                    hasChildren
                      ? 'div'
                      : Link
                  }
                  href={
                    !hasChildren
                      ? menu.path
                      : undefined
                  }
                  onClick={() =>
                    hasChildren &&
                    handleToggle(
                      menu.title
                    )
                  }
                  
                  sx={{
                    borderRadius: 2,
                    mb: 0.5,

                    justifyContent:
                      collapsed
                        ? 'center'
                        : 'flex-start',

                    '&:hover .hover-icons':
                      {
                        opacity: 1,
                      },
                  }}
                >
                  {/* ICON */}
                  <ListItemIcon
                    sx={{
                      minWidth:
                        collapsed
                          ? 0
                          : 40,

                      color: isOpen
                        ? 'primary.main'
                        : 'grey.500',
                    }}
                  >
                    {menu.icon}
                  </ListItemIcon>

                  {/* TITLE */}
                  {!collapsed && (
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontSize:
                              '0.82rem',
                            fontWeight: 600,
                            color:
                              'grey.700',
                          }}
                        >
                          {menu.title}
                        </Typography>
                      }
                    />
                  )}

                  {/* HOVER ICONS */}
                  {!collapsed && (
                    <Box
                      className="hover-icons"
                      sx={{
                        display: 'flex',
                        alignItems:
                          'center',
                        gap: 1,
                        opacity: 0,
                        transition:
                          '0.3s',
                      }}
                    >
                      {/* <Add
                        sx={{
                          fontSize: 18,
                          color:
                            'primary.main',
                        }}
                      />

                      <Visibility
                        sx={{
                          fontSize: 18,
                          color:
                            'success.main',
                        }}
                      /> */}
                    </Box>
                  )}

                  {/* ARROW */}
                  {!collapsed &&
                    hasChildren &&
                    (isOpen ? (
                      <ExpandLess
                        sx={{
                          fontSize:
                            '1.2rem',
                          color:
                            'grey.500',
                        }}
                      />
                    ) : (
                      <ExpandMore
                        sx={{
                          fontSize:
                            '1.2rem',
                          color:
                            'grey.500',
                        }}
                      />
                    ))}
                </ListItemButton>
              </Tooltip>

              {/* CHILD MENUS */}
              {hasChildren &&
                !collapsed && (
                  <Collapse
                    in={isOpen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List
                      component="div"
                      disablePadding
                    >
                      {menu.children?.map(
                        (child: any) => {
                          const childHasChildren =
                            Boolean(
                              child.children
                            );

                          const childOpen = Boolean(openChildren[child.title]);

                          return (
                            <React.Fragment
                              key={
                                child.title
                              }
                            >
                              {/* CHILD */}
                              <ListItemButton
                                component={
                                  childHasChildren
                                    ? 'div'
                                    : Link
                                }
                                href={
                                  !childHasChildren
                                    ? child.path
                                    : undefined
                                }
                              onClick={() =>
  childHasChildren &&
                                  handleChildToggle(
                                    child.title
                                  )
}
                                sx={{
                                  pl: 7,
                                  borderRadius: 2,
                                }}
                              >
                                <ListItemText
                                  primary={
                                    child.title
                                  }
                                  slotProps={{
                                    primary: {
                                      sx: {
                                        fontSize:
                                          '0.8rem',
                                        fontWeight: 600,
                                        color:
                                          'grey.700',
                                      },
                                    },
                                  }}
                                />

                                {childHasChildren &&
                                  (childOpen ? (
                                    <ExpandLess />
                                  ) : (
                                    <ExpandMore />
                                  ))}
                              </ListItemButton>

                              {/* SUB CHILD */}
                              {childHasChildren && (
                                <Collapse
                                  in={
                                    childOpen
                                  }
                                  timeout="auto"
                                  unmountOnExit
                                >

                               
                                  <List
                                    component="div"
                                    disablePadding
                                  >
                                 {child.children.map(
  (subChild: any) => {
    return (
      <ListItemButton
        key={subChild.title}
        component={Link}
        href={subChild.path}
        sx={{
          pl: 7,
          borderRadius: 2,
        }}
      >
        <ListItemText
          primary={subChild.title}
          slotProps={{
            primary: {
              sx: {
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'grey.700',
              },
            },
          }}
        />
      </ListItemButton>
    );
  }
)}
                                  </List>
                                </Collapse>
                              )}
                            </React.Fragment>
                          );
                        }
                      )}
                    </List>
                  </Collapse>
                )}
            </React.Fragment>
          );
        })}
      </List>
    </Drawer>
  );
};

export default SidebarMenu;