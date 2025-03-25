/*
 * @Description: 
 * @Author: DYT
 * @Date: 2025-03-19 11:28:04
 * @LastEditTime: 2025-03-19 13:35:50
 * @LastEditors: DYT
 */
import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {   //children 是一个ReactNode类型的属性，它表示子组件。在dashboard文件下的所有页面都是子组件。
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}