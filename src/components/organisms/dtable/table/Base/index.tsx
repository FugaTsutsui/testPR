import {
  getCoreRowModel,
  useReactTable,
  createColumnHelper,
} from '@tanstack/react-table'
import MoleculesTableTanstackBase from 'src/components/molecules/table/tanstack/Base'
import type { Dtable } from '@prisma/client'
import MoleculesIconDialogDelete from 'src/components/molecules/icon/dialog/Delete'
import type { InputDtable } from 'src/components/organisms/dtable/form/Base'
import OrganismsDtableButtonDialogFormEdit from 'src/components/organisms/dtable/button/dialog/form/Edit'

export type OrganismsDtableTableBaseProps = {
  dtables: Dtable[]
  className?: string
  onClickRow?: (row: Dtable) => void
  onClickEdit: (inputData: InputDtable, dtableId: string) => void
  onClickDelete: (dtableId: string) => void
  loadingEdit?: boolean
  loadingDelete?: boolean
}
const OrganismsDtableTableBase = ({
  dtables,
  className,
  onClickRow,
  onClickEdit,
  onClickDelete,
  loadingEdit,
  loadingDelete,
}: OrganismsDtableTableBaseProps) => {
  const columnHelper = createColumnHelper<Dtable>()
  const columns = [
    columnHelper.accessor('dcolumn0', {
      header: () => 'Dcolumn0',
    }),
    columnHelper.accessor('dcolumn3', {
      header: () => 'Dcolumn3',
    }),
    columnHelper.accessor('dcolumn2', {
      header: () => 'Dcolumn2',
    }),
    columnHelper.accessor('dcolumn4', {
      header: () => 'Dcolumn4',
    }),
    columnHelper.accessor('dcolumn1', {
      header: () => 'Dcolumn1',
    }),
    columnHelper.display({
      id: 'actions',
      header: () => 'Actions',
      meta: {
        tdProps: { onClick: (event) => event.stopPropagation() },
      },
      cell: ({ row }) => (
        <>
          <OrganismsDtableButtonDialogFormEdit
            className='mr-2'
            defaultValues={row.original}
            labelSubmitButton='Update'
            loading={loadingEdit}
            onSubmit={(inputData) => onClickEdit(inputData, row.original.id)}
          />
          <MoleculesIconDialogDelete
            onClickDelete={() => onClickDelete(row.original.id)}
            loading={loadingDelete}
          />
        </>
      ),
    }),
  ]
  const table = useReactTable({
    data: dtables,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <MoleculesTableTanstackBase
      className={className}
      onClickRow={onClickRow}
      table={table}
    />
  )
}
export default OrganismsDtableTableBase
