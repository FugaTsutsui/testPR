import { UserRole } from '@prisma/client'
import { useRouter } from 'next/router'
import HeadsAuth, { HeadsDtable0NewProps } from 'src/components/heads/Auth'
import SubstancesDtable0FormEdit from 'src/components/substances/dtable0/form/Edit'
import type { NextPageWithLayout } from 'src/types/next'
import { customGetServerSideProps } from 'src/utils/get-server-side-props'

const Dtable0EditPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { dtable0Id } = router.query
  if (typeof dtable0Id !== 'string') throw new Error('404')

  return (
    <>
      <HeadsAuth {...HeadsDtable0NewProps} />
      <h1 className='m-10 text-3xl font-extrabold leading-normal'>
        Dtable0 Edit
      </h1>
      <div className='mx-10'>
        <SubstancesDtable0FormEdit dtable0Id={dtable0Id} />
      </div>
    </>
  )
}

export const getServerSideProps = customGetServerSideProps({
  role: UserRole.USER,
})
export default Dtable0EditPage
