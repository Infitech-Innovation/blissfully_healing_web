
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DeleteAccount } from "./delete_btn"

export function DangerousZone() {
  return (
    <div className="mt-8 border-t pt-6 mb-8">
      <CardHeader>
        <CardTitle>Dangerous Zone</CardTitle>
        <CardDescription>
          Manage sensitive settings, such as account deletion or deactivation.
          Proceed with caution.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DeleteAccount/>
      </CardContent>
    </div>
  )
}