import CreateUpdateRoleForm from 'components/role/CreateUpdateRoleForm'
import DashboardLayout from 'components/ui/dashboardlayout'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'

const DashboardRolesEdit: FC = () => {
  const location = useLocation()
  return (
    <DashboardLayout>
      <h1 className="mb-4 text-center">Edit role</h1>
      <CreateUpdateRoleForm defaultValues={location.state} />
    </DashboardLayout>
  )
}

export default DashboardRolesEdit
