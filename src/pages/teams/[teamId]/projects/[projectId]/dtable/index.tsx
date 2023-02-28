import { UserRole } from '@prisma/client'
import HeadsAuth, { HeadsDtableNewProps } from 'src/components/heads/Auth'
import type { NextPageWithLayout } from 'src/types/next'
import { customGetServerSideProps } from 'src/utils/get-server-side-props'
import { useRouter } from 'next/router'
import SubstancesDtableSection from 'src/components/substances/dtable/Section'

const dtablesPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { teamId, projectId } = router.query
  if (typeof teamId !== 'string' || typeof projectId !== 'string')
    throw new Error('404')

  return (
    <>
      <HeadsAuth {...HeadsDtablesProps} />
      <SubstancesDtableSection
        className='m-10'
        teamId={teamId}
        projectId={projectId}
      />
    </>
  )
}

export const getServerSideProps = customGetServerSideProps({
  role: UserRole.USER,
})
export default dtablesPage
