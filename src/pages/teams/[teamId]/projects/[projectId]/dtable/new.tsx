import { UserRole } from '@prisma/client'
import HeadsAuth, { HeadsDtableNewProps } from 'src/components/heads/Auth'
import SubstancesDtableFormNew from 'src/components/substances/dtable/form/New'
import type { NextPageWithLayout } from 'src/types/next'
import { customGetServerSideProps } from 'src/utils/get-server-side-props'
import { useRouter } from 'next/router'

const DtableNewPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { teamId, projectId } = router.query
  if (typeof teamId !== 'string' || typeof projectId !== 'string')
    throw new Error('404')

  return (
    <>
      <HeadsAuth {...HeadsDtableNewProps} />
      <h1 className='m-10 text-3xl font-extrabold leading-normal'>
        Dtable New
      </h1>
      <div className='mx-10'>
        <SubstancesDtableFormNew teamId={teamId} projectId={projectId} />
      </div>
    </>
  )
}

export const getServerSideProps = customGetServerSideProps({
  role: UserRole.USER,
})
export default DtableNewPage
