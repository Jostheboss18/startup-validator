import type { ReactNode } from "react"
import type { LucideIcon } from "lucide-react"
import { Lock } from "lucide-react"
import Link from "next/link"

interface ResultCardProps {
  title: string
  icon: LucideIcon
  children: ReactNode
  isLocked?: boolean
}

export default function ResultCard({ title, icon: Icon, children, isLocked = false }: ResultCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-white shadow-sm">
      {isLocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
          <Lock className="h-8 w-8 text-gray-400" />
          <p className="mt-2 text-sm font-medium text-gray-500">Upgrade to unlock</p>
          <Link
            href="/upgrade"
            className="mt-3 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-primary/90"
          >
            Upgrade Now
          </Link>
        </div>
      )}
      <div className="border-b p-4">
        <div className="flex items-center space-x-2">
          <Icon className="h-5 w-5 text-primary" />
          <h3 className="font-medium text-gray-900">{title}</h3>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

