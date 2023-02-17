import { UserRole } from '@prisma/client'
import { useRouter } from 'next/router'
import HeadsAuth, { HeadsDtableNewProps } from 'src/components/heads/Auth'
import SubstancesDtableFormEdit from 'src/components/substances/dtable/form/Edit'
import type { NextPageWithLayout } from 'src/types/next'
import { customGetServerSideProps } from 'src/utils/get-server-side-props'

const DtableEditPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { teamId, projectId, dtableId } = router.query
  if (
    typeof teamId !== 'string' ||
    typeof projectId !== 'string' ||
    typeof dtableId !== 'string'
  )
    throw new Error('404')

  return (
    <>
      <HeadsAuth {...HeadsDtableNewProps} />
      <h1 className='m-10 text-3xl font-extrabold leading-normal'>
        Dtable Edit
      </h1>
      <div className='mx-10'>
        <SubstancesDtableFormEdit
          teamId={teamId}
          projectId={projectId}
          dtableId={dtableId}
        />
      </div>
    </>
  )
}

export const getServerSideProps = customGetServerSideProps({
  role: UserRole.USER,
})
export default DtableEditPage
