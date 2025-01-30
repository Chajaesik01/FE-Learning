import React, { useRef, useCallback } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

const fetchPosts = async ({ pageParam = 1 }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`);
  return response.json();
};

const App = () => {
  const {
    data,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length ? pages.length + 1 : undefined;
    },
    getPreviousPageParam: (firstPage, pages) => {
      // 첫 페이지가 아닌 경우에만 이전 페이지 파라미터를 반환
      return pages.length > 1 ? pages.length - 1 : undefined;
    },
  });

  const observer = useRef();
  const lastPostRef = useCallback(node => {
    if (isFetching) return; // 데이터가 로딩 중이면 무시
    if (observer.current) observer.current.disconnect(); // 이전 observer 해제

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage(); // 다음 페이지 데이터 요청
      }
    });

    if (node) observer.current.observe(node); // 현재 노드 관찰 시작
  }, [isFetching, hasNextPage, fetchNextPage]);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.pages.map((page, pageIndex) =>
          page.map((post, postIndex) => {
            const isLastPost = pageIndex === data.pages.length - 1 && postIndex === page.length - 1;
            return (
              <li key={post.id} ref={isLastPost ? lastPostRef : null}>
                {post.title}
              </li>
            );
          })
        )}
      </ul>
      {isFetching && <p>Loading more posts...</p>}
      {!hasNextPage && <p>No more posts to load.</p>} {/* 더 이상 불러올 게시물이 없을 때 메시지 */}
      {hasPreviousPage && (
        <button onClick={fetchPreviousPage}>Load Previous Page</button>
      )} {/* 이전 페이지 로드 버튼 */}
    </div>
  );
};

export default App;