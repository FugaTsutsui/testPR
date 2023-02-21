import { UserRole } from '@prisma/client'
import HeadsAuth, { HeadsDtableNewProps } from 'src/components/heads/Auth'
import type { NextPageWithLayout } from 'src/types/next'
import { customGetServerSideProps } from 'src/utils/get-server-side-props'
import { useRouter } from 'next/router'
import AtomsButton from 'src/components/atoms/Button'
import SubstancesDtableTableBase from 'src/components/substances/dtable/table/Base'

const dtablesPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { teamId, projectId } = router.query
  if (typeof teamId !== 'string' || typeof projectId !== 'string')
    throw new Error('404')

  const onClick = () =>
    void router.push(`/teams/${teamId}/projects/${projectId}/dtable/new`)

  return (
    <>
      <HeadsAuth {...HeadsDtablesProps} />
      <h1 className='m-10 flex text-3xl font-extrabold leading-normal'>
        dtables
      </h1>
      <AtomsButton
        className='ml-4'
        color='primary'
        size='md'
        type='button'
        onClick={onClick}
      >
        New
      </AtomsButton>
      <div className='mx-10'>
        <div className='w-full'>
          <SubstancesDtableTableBase teamId={teamId} projectId={projectId} />
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = customGetServerSideProps({
  role: UserRole.USER,
})
export default dtablesPage
