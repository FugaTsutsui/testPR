import { UserRole } from '@prisma/client'
import HeadsAuth, { HeadsDtableNewProps } from 'src/components/heads/Auth'
import { useRouter } from 'next/router'
import AtomsButton from 'src/components/atoms/Button'
import SubstancesDtableButtonDialogDelete from 'src/components/substances/dtable/button/dialog/Delete'
import SubstancesDtableDetailBase from 'src/components/substances/dtable/detail/Base'
import type { NextPageWithLayout } from 'src/types/next'
import { customGetServerSideProps } from 'src/utils/get-server-side-props'

const DtableShowPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { teamId, projectId, dtableId } = router.query
  if (
    typeof teamId !== 'string' ||
    typeof projectId !== 'string' ||
    typeof dtableId !== 'string'
  )
    throw new Error('404')

  const onClick = () =>
    void router.push(
      `/teams/${teamId}/projects/${projectId}/dtable/${dtableId}/edit`
    )

  return (
    <>
      <HeadsAuth {...HeadsDtableProps} />
      <h1 className='m-10 text-3xl font-extrabold leading-normal'>Dtable</h1>
      <div className='mx-10'>
        <SubstancesDtableDetailBase
          teamId={teamId}
          projectId={projectId}
          dtableId={dtableId}
        />
      </div>
      <div className='mx-10 flex'>
        <AtomsButton
          className='mr-2'
          color='primary'
          size='md'
          type='button'
          onClick={onClick}
        >
          Edit
        </AtomsButton>
        <SubstancesDtableButtonDialogDelete
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
export default DtableShowPage
