import { UserRole } from '@prisma/client'
import HeadsAuth, { HeadsDtable0NewProps } from 'src/components/heads/Auth'
import type { NextPageWithLayout } from 'src/types/next'
import { customGetServerSideProps } from 'src/utils/get-server-side-props'
import SubstancesDtable0Section from 'src/components/substances/dtable0/Section'

const Dtable0sPage: NextPageWithLayout = () => {
  return (
    <>
      <HeadsAuth {...HeadsDtable0sProps} />
      <SubstancesDtable0Section className='m-10' />
    </>
  )
}

export const getServerSideProps = customGetServerSideProps({
  role: UserRole.USER,
})
export default Dtable0sPage
