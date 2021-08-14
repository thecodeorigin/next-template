import { Menu } from 'antd';
import { useRouter } from 'next/router'

import { useClientOnly } from '~/use/client-only';
import { routesTree } from '~/constants/routes'
import { NAVBAR_HEIGHT as navbarheight } from '~/constants/layout'

import Image from 'next/image'

import styles from './style.module.scss'


// Recursive sidebar tree
const SidebarTree = (tree) => tree.map((branch) => (
  branch.children
  ? <Menu.SubMenu key={branch.path} title={branch.label} icon={<i className={branch.icon}/>}>
      {SidebarTree(branch.children)}
    </Menu.SubMenu>
  : <Menu.Item key={branch.path} icon={<i className={branch.icon}/>}>
      {branch.label}
    </Menu.Item>
))


const Sidebar = () => {
  const { isClient } = useClientOnly()
  const router = useRouter();

  const handleMenuItemClick = (item) => {
    router.push(item.key)
  }

  return (
    isClient &&
    <aside
      style={{ width: 240 }}
      className={styles.sidebarWrapper}
    >
      <div style={{ height: navbarheight }} className={styles.sidebarLogoWrapper}>
        <Image src="/dsc_logo.png" alt="GDSC logo" height="50" width="100" objectFit="cover" />
      </div>
      <Menu
        className={styles.sidebarInner}
        defaultSelectedKeys={[router.route]}
        defaultOpenKeys={[router.route]}
        onClick={handleMenuItemClick}
        theme="dark"
        mode="inline"
      >
        {SidebarTree(routesTree)}
      </Menu>
    </aside>
  )
}

export default Sidebar