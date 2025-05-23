import CreateUpdateRoleForm from 'components/role/CreateUpdateRoleForm'
import DashboardLayout from 'components/ui/dashboardlayout'
import { FC } from 'react'

const DashboardRolesAdd: FC = () => {
  return (
    <DashboardLayout>
      <h1 className="mb-4 text-center">Create new role</h1>
      <CreateUpdateRoleForm />
    </DashboardLayout>
  )
}

export default DashboardRolesAdd
