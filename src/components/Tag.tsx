type TagProps = {
  label: string
}

function Tag({ label }: TagProps) {
  return (
    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
      {label}
    </span>
  )
}

export default Tag
