export interface IPost {
    title: string;
    date: string;
    slug: string;
    author: string;
    content: string;
    thumbnail: string;
    category: string;
    tags: string[];
}

export const posts: IPost[] = [
    {
        title: "Post 1",
        date: "2021-01-01",
        slug: "post-1",
        author: "John Doe",
        content: "This is the content of post 1",
        thumbnail: "https://via.placeholder.com/150",
        category: "Category 1",
        tags: ["Tag 1", "Tag 2"]
    },
    {
        title: "Post 2",
        date: "2021-02-15",
        slug: "post-2",
        author: "Jane Smith",
        content: "This is the content of post 2",
        thumbnail: "https://via.placeholder.com/150",
        category: "Category 2",
        tags: ["Tag 2", "Tag 3"]
    },
    {
        title: "Post 3",
        date: "2021-03-22",
        slug: "post-3",
        author: "John Doe",
        content: "This is the content of post 3",
        thumbnail: "https://via.placeholder.com/150",
        category: "Category 1",
        tags: ["Tag 1", "Tag 4"]
    },
    {
        title: "Post 4",
        date: "2021-04-10",
        slug: "post-4",
        author: "Alice Brown",
        content: "This is the content of post 4",
        thumbnail: "https://via.placeholder.com/150",
        category: "Category 3",
        tags: ["Tag 3", "Tag 5"]
    },
    {
        title: "Post 5",
        date: "2021-05-08",
        slug: "post-5",
        author: "Jane Smith",
        content: "This is the content of post 5",
        thumbnail: "https://via.placeholder.com/150",
        category: "Category 2",
        tags: ["Tag 4", "Tag 6"]
    },
    {
        title: "Post 6",
        date: "2021-06-19",
        slug: "post-6",
        author: "Bob Wilson",
        content: "This is the content of post 6",
        thumbnail: "https://via.placeholder.com/150",
        category: "Category 1",
        tags: ["Tag 5", "Tag 7"]
    },
    {
        title: "Post 7",
        date: "2021-07-03",
        slug: "post-7",
        author: "Alice Brown",
        content: "This is the content of post 7",
        thumbnail: "https://via.placeholder.com/150",
        category: "Category 3",
        tags: ["Tag 6", "Tag 8"]
    },
    {
        title: "Post 8",
        date: "2021-08-14",
        slug: "post-8",
        author: "John Doe",
        content: "This is the content of post 8",
        thumbnail: "https://via.placeholder.com/150",
        category: "Category 2",
        tags: ["Tag 7", "Tag 9"]
    },
    {
        title: "Post 9",
        date: "2021-09-25",
        slug: "post-9",
        author: "Bob Wilson",
        content: "This is the content of post 9",
        thumbnail: "https://via.placeholder.com/150",
        category: "Category 1",
        tags: ["Tag 8", "Tag 10"]
    },
    {
        title: "Post 10",
        date: "2021-10-11",
        slug: "post-10",
        author: "Jane Smith",
        content: "This is the content of post 10",
        thumbnail: "https://via.placeholder.com/150",
        category: "Category 3",
        tags: ["Tag 9", "Tag 10"]
    }
]