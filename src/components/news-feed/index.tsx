'use client'

import { useNews } from '@/hooks/use-news'
import { TableHeading } from '../table-heading'
import { NewArticle } from '../new-article'
import { ErrorMessage } from '../error-message'
import { Spinner } from '../ui/spinner'

export const NewsFeed = () => {
  const { data: news, isError, isPending } = useNews()

  return (
    <div
      className={`w-full lg:flex-1 border border-border rounded-lg p-4 pb-0 flex flex-col h-[408px] ${news ? 'gap-4' : ''}`}
    >
      <TableHeading>Latest News</TableHeading>
      <div
        className={`${news ? 'flex flex-col gap-2 overflow-y-auto pr-2 flex-1 pb-1' : 'flex items-center justify-center py-2 flex-1'}`}
      >
        {news?.map((article) => <NewArticle key={article.article_id} data={article} />)}
        {isError && <ErrorMessage>Couldn&apos;t fetch news</ErrorMessage>}
        {isPending && <Spinner size="medium" />}
      </div>
    </div>
  )
}
