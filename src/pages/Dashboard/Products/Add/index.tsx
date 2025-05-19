import CreateUpdateProductForm from 'components/products/CreateUpdateProductForm/CreateUpdateProductForm'
import DashboardLayout from 'components/ui/dashboardlayout'
import { FC } from 'react'

const DashboardProductsAdd: FC = () => {
  return (
    <DashboardLayout>
      <h1 className="mb-4 text-center">Create new product</h1>
      <CreateUpdateProductForm />
    </DashboardLayout>
  )
}

export default DashboardProductsAdd
