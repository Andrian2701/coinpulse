import { NewArticleInterface } from '@/types/coins-types'

export const NewArticle = ({ data }: { data: NewArticleInterface }) => {
  const formatDate = (date: Date) => {
    return new Date(date + 'Z').toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
  }

  return (
    <div className="flex gap-2 cursor-pointer flex-col border-b border-b-border p-2 [@media(max-width:400px)]:w-full flex-1">
      <span className="font-bold text-text-primary text-[10px]">{formatDate(data.pubDate)}</span>
      <span className="font-light text-text-secondary text-[12px] line-clamp-2 max-h-[36px]">
        {data.title}
      </span>
    </div>
  )
}
