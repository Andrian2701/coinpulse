'use client'

import { useNews } from '@/hooks/use-news'
import { TableHeading } from '../table-heading'
import { NewArticle } from '../new-article'

export const NewsFeed = () => {
  const { data: news } = useNews()

  return (
    <div className="w-full lg:flex-1 border border-border rounded-lg p-4 pb-0 flex flex-col gap-4 h-[408px]">
      <TableHeading>Latest</TableHeading>
      <div className="flex flex-col gap-2 overflow-y-auto pr-2 flex-1 pb-1">
        {news?.map((article) => <NewArticle key={article.article_id} data={article} />)}
      </div>
    </div>
  )
}
