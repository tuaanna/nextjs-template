import { MainLayout } from '@/layout'

type Props = {
  children: React.ReactNode
}

const HomeLayout: React.FC<Props> = async ({ children }) => {
  return <MainLayout>{children}</MainLayout>
}

export default HomeLayout
