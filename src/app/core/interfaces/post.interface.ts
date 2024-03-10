export interface Post {
    postId: string;
    postData: PostData;
}
export interface PostData {
    postPermalink: string;
    postContent: string;
    postImagePath: string;
    postExcerpt: string;
    isFeatured: boolean;
    postCategory: PostCategory;
    status: string;
    createdAt: any;
    postTitle: string;
    postImageURL: string;
    views: number;
}
export interface PostCategory {
    category: string;
    categoryId: string;
}